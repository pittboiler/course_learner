# Quantum Computing · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Quantum computing is unitary linear algebra with a measurement at the end: states are unit vectors, gates are unitary matrices, and an algorithm is a circuit that sculpts amplitudes so the answer is likely when you look. This card holds what you would otherwise hunt for mid-problem — the gate matrices and their Bloch actions, the Bell and Pauli tables, every algorithm's cost with its classical baseline, the stabilizer and surface-code arithmetic, and the resource-estimation ladder.

## Scope and ownership

Three built courses touch this material. The split is deliberate, and the other card is often worth having open too.

| Topic | Owned by | This course's angle |
|---|---|---|
| Tensor products, the entanglement test, the singlet, Bell's inequality in spin language, the density matrix, von Neumann entropy | [`quantum-mechanics` 5.2–5.4](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) | used without re-derivation. [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md) re-states $\rho$ as **noise bookkeeping for circuits**; [2.6](lessons/02-06-the-chsh-game-and-device-independence.md) re-casts Bell as a **game with a payoff and a provable optimum** |
| Spin-1/2, Pauli matrices, Stern–Gerlach, the Born rule, time evolution $e^{-iHt}$ | [`quantum-mechanics` 1.5, 2.2, 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) | the qubit *is* spin-1/2 hired as a computational primitive; gates are $e^{-iHt}$ for a controlled duration |
| BB84, quantum key distribution, single photons as flying qubits, physical qubit platforms | [`photonics-quantum-optics` 4.5](../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md) | QKD is named, not taught. [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md) compares platforms only through the numbers that set a circuit's depth budget |
| RSA, Diffie–Hellman, discrete log, post-quantum migration | [`cryptography` 3.2–3.3, 4.5](../cryptography/lessons/04-05-post-quantum-cryptography.md) | that course owns the schemes and the migration argument; [4.4](lessons/04-04-shors-factoring-algorithm.md) owns the attack and [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md) owns its true cost |
| Asymptotics, reductions, P vs NP, the DFT and FFT, linear block codes | [`algorithms`](../algorithms/syllabus.md), [`computational-complexity`](../computational-complexity/syllabus.md), [`fourier-analysis` 4.2](../fourier-analysis/lessons/04-02-dft-fft.md), [`communications` 4.3](../communications/lessons/04-03-block-codes.md) | assumed; [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md) places BQP among those classes and [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md) imports the coding theory |

**Convention warnings**, because two cards may be open at once.

- **Qubit order.** This course writes qubit 0 leftmost and most significant, so $\lvert q_0q_1q_2\rangle$ has integer index $4q_0+2q_1+q_2$. Most quantum SDKs use the opposite (little-endian) convention, which transposes every multi-qubit matrix you look up.
- **$n$ is overloaded.** It is the qubit count everywhere except [4.3](lessons/04-03-order-finding-and-period-finding.md)–[4.4](lessons/04-04-shors-factoring-algorithm.md), where it is $\log_2 N$ for the integer $N$ being factored. Context always disambiguates.
- **$N$ is overloaded too.** The search space size in [3.5](lessons/03-05-grovers-search.md)–[3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md), the integer to factor in Module 4, the shot count in [1.3](lessons/01-03-measurement-and-the-born-rule.md).
- **Bloch angle versus matrix angle.** A rotation gate $R_{\hat n}(\vartheta)$ carries $\vartheta/2$ in the matrix and rotates the Bloch sphere by the full $\vartheta$. A diagonal gate $\mathrm{diag}(1,e^{i\lambda})$ turns the sphere by exactly $\lambda$.
- **"Error rate" is physical unless it says logical.** The conversion between them is the whole content of [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md), and confusing the two is the most common way resource estimates get misreported.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\lvert0\rangle, \lvert1\rangle$ | the computational basis — the two classical answers | [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| $\alpha,\beta$ | amplitudes of a qubit state; $\lvert\alpha\rvert^2$ is the chance of reading 0 | [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| $\theta,\phi$ | Bloch polar angle (sets the odds) and azimuth (sets the relative phase) | [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| $\vec r$ | Bloch vector $(\langle X\rangle,\langle Y\rangle,\langle Z\rangle)$; length 1 for pure states | [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| $\lvert\pm\rangle$, $\lvert{\pm i}\rangle$ | the $X$-basis and $Y$-basis states, on the equator | [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| $X,Y,Z$ | the Pauli matrices; also the three measurement axes | [1.2](lessons/01-02-single-qubit-gates.md) |
| $H, S, T$ | Hadamard, phase ($\pi/2$), and $T$ ($\pi/4$) gates | [1.2](lessons/01-02-single-qubit-gates.md) |
| $R_{\hat n}(\vartheta)$ | rotation by $\vartheta$ about axis $\hat n$; equals $e^{-i\vartheta\,\hat n\cdot\vec\sigma/2}$ | [1.2](lessons/01-02-single-qubit-gates.md) |
| $\vec\sigma$ | the Pauli vector $(X,Y,Z)$ | [1.2](lessons/01-02-single-qubit-gates.md) |
| $\Pi_m$ | the projector onto measurement outcome $m$ | [1.3](lessons/01-03-measurement-and-the-born-rule.md) |
| $\langle A\rangle$ | expectation value $\langle\psi\vert A\vert\psi\rangle$, or $\mathrm{tr}(A\rho)$ | [1.3](lessons/01-03-measurement-and-the-born-rule.md) |
| $\otimes$ | tensor product; dimensions multiply, so $n$ qubits give $2^n$ | [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md) |
| $C$, $\det C$ | the $2\times2$ table of two-qubit amplitudes, and its determinant (the entanglement test) | [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md) |
| $\lambda_1,\lambda_2$ | Schmidt coefficients; equal means maximally entangled | [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md) |
| CNOT, CZ, SWAP | the standard two-qubit gates; CZ is symmetric in its wires | [1.5](lessons/01-05-multi-qubit-gates-and-quantum-circuits.md) |
| $\oplus$ | XOR, and the group operation of $\mathbb{Z}_2^n$ | [1.5](lessons/01-05-multi-qubit-gates-and-quantum-circuits.md) |
| $\epsilon$ | an accuracy or error target (gate synthesis, simulation, estimation) | [1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md) |
| Clifford, $T$-count | the classically simulable gate group, and the count of gates outside it | [1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md) |
| $\lvert\Phi^\pm\rangle,\lvert\Psi^\pm\rangle$ | the four Bell states | [2.1](lessons/02-01-bell-states-and-generating-entanglement.md) |
| $\rho$ | density matrix; the complete answer to "what are the odds, for every measurement" | [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md) |
| $\mathrm{tr}_B$ | partial trace over subsystem $B$ — what $A$ alone looks like | [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md) |
| $\mathrm{tr}\,\rho^2$ | purity; 1 for pure, $1/d$ for maximally mixed | [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md) |
| ebit, cbit | one shared Bell pair; one classical bit — the currency of protocols | [2.4](lessons/02-04-quantum-teleportation.md) |
| $m_0m_1$ | the two bits of a Bell-measurement outcome, and the teleportation correction index | [2.4](lessons/02-04-quantum-teleportation.md) |
| $S$ (CHSH) | the CHSH correlator; $\le2$ classically, $\le2\sqrt2$ quantumly | [2.6](lessons/02-06-the-chsh-game-and-device-independence.md) |
| $U_f$, $O_f$ | the bit oracle $\lvert x,y\rangle\to\lvert x, y\oplus f(x)\rangle$; the phase oracle $\lvert x\rangle\to(-1)^{f(x)}\lvert x\rangle$ | [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md) |
| $x\cdot z$ | dot product mod 2, the character exponent of $\mathbb{Z}_2^n$ | [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md) |
| $s$ (Modules 3) | the hidden string: the linear function's coefficients, or the XOR period | [3.3](lessons/03-03-bernstein-vazirani.md), [3.4](lessons/03-04-simons-algorithm.md) |
| $s^\perp$ | the orthogonal complement of $s$ in $\mathbb{F}_2^n$ — what Simon samples | [3.4](lessons/03-04-simons-algorithm.md) |
| $\lvert s\rangle$ (Grover) | the uniform superposition $\frac{1}{\sqrt N}\sum_x\lvert x\rangle$ — **not** the hidden string | [3.5](lessons/03-05-grovers-search.md) |
| $w$, $M$ | the marked item; the number of marked items | [3.5](lessons/03-05-grovers-search.md) |
| $D$, $G$ | the diffusion operator $2\lvert s\rangle\langle s\rvert - I$; one Grover iteration $DO_w$ | [3.5](lessons/03-05-grovers-search.md) |
| $\theta$ (Grover) | the rotation half-angle, $\sin\theta = \sqrt{M/N}$ | [3.5](lessons/03-05-grovers-search.md) |
| $\mathcal A$, $Q$ | an arbitrary state-preparation circuit; the amplitude-amplification operator | [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md) |
| $\mathrm{QFT}_N$ | the Fourier transform over $\mathbb{Z}_N$, $N = 2^n$ | [4.1](lessons/04-01-the-quantum-fourier-transform.md) |
| $R_k$ | the controlled-phase gate $\mathrm{diag}(1, e^{2\pi i/2^k})$ in the QFT | [4.1](lessons/04-01-the-quantum-fourier-transform.md) |
| $\varphi$ | an eigenphase, $U\lvert u\rangle = e^{2\pi i\varphi}\lvert u\rangle$ | [4.2](lessons/04-02-quantum-phase-estimation.md) |
| $m$ | the number of phase-estimation ancillas (bits of precision plus margin) | [4.2](lessons/04-02-quantum-phase-estimation.md) |
| $r$ | the order of $a$ mod $N$, i.e. the period; also Trotter step count in [6.2](lessons/06-02-hamiltonian-simulation.md) | [4.3](lessons/04-03-order-finding-and-period-finding.md) |
| $U_a$ | the modular-multiplication operator $\lvert y\rangle\to\lvert ay\bmod N\rangle$ | [4.3](lessons/04-03-order-finding-and-period-finding.md) |
| $G$, $H$ (Module 4) | a group and its hidden subgroup — **not** the Hadamard gate | [4.5](lessons/04-05-the-hidden-subgroup-problem.md) |
| $H^\perp$ | the annihilator: characters trivial on $H$, which the algorithm samples | [4.5](lessons/04-05-the-hidden-subgroup-problem.md) |
| $E_k$ | Kraus operators of a channel | [5.1](lessons/05-01-quantum-channels-and-decoherence.md) |
| $p$, $\gamma$ | a channel's error probability; the amplitude-damping parameter | [5.1](lessons/05-01-quantum-channels-and-decoherence.md) |
| $T_1$, $T_2$ | relaxation and dephasing times; $T_2\le2T_1$ | [5.1](lessons/05-01-quantum-channels-and-decoherence.md) |
| $\lvert0_L\rangle,\lvert1_L\rangle$ | encoded (logical) basis states | [5.2](lessons/05-02-the-three-qubit-codes.md) |
| $s_1s_2$ (syndrome) | the outcomes of the parity checks; names the error, not the data | [5.2](lessons/05-02-the-three-qubit-codes.md) |
| $p_L$ | the logical error rate after correction | [5.2](lessons/05-02-the-three-qubit-codes.md) |
| $P$ (code) | the projector onto the code space | [5.3](lessons/05-03-the-shor-code-and-error-discretization.md) |
| $\mathcal S$, $N(\mathcal S)$ | the stabilizer group and its normalizer | [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md) |
| $[[n,k,d]]$ | physical qubits, logical qubits, distance | [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md) |
| $p_{\text{th}}$ | the fault-tolerance threshold, about 1 percent for the surface code | [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md) |
| BQP, BPP, QMA | bounded-error quantum/classical polynomial time; the quantum analogue of NP | [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md) |
| $L$ (Module 6) | the number of local terms in a Hamiltonian $H = \sum_jH_j$ | [6.2](lessons/06-02-hamiltonian-simulation.md) |
| $\mathcal F_{\text{XEB}}$ | cross-entropy benchmarking fidelity | [6.3](lessons/06-03-sampling-advantage-and-verification.md) |
| $\vec\theta$ | variational circuit parameters | [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md) |
| $\kappa$, $s$ (HHL) | matrix condition number and sparsity | [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md) |
| $Q_L$, $Q_{\text{phys}}$ | logical and physical qubit counts | [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md) |

## Definitions

### Qubit

A unit vector in $\mathbb{C}^2$; equivalently a direction on a sphere, with the poles the two classical answers.

$$\lvert\psi\rangle = \alpha\lvert0\rangle+\beta\lvert1\rangle = \cos\tfrac\theta2\lvert0\rangle + e^{i\phi}\sin\tfrac\theta2\lvert1\rangle, \qquad \lvert\alpha\rvert^2+\lvert\beta\rvert^2 = 1.$$

*Introduced:* [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md)

### Global phase

An overall factor $e^{i\gamma}$ on a state, unobservable by any measurement. Not to be confused with *relative* phase, which is physical and is the entire mechanism of interference.

*Introduced:* [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md)

### Bloch sphere

The unit sphere whose points are the qubit's pure states, with the polar angle setting measurement odds and the azimuth setting the relative phase.

$$\vec r = (\sin\theta\cos\phi,\ \sin\theta\sin\phi,\ \cos\theta) = \left(\langle X\rangle, \langle Y\rangle, \langle Z\rangle\right).$$

*Introduced:* [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md)

### Gate

A unitary matrix; on one qubit, a rotation of the Bloch sphere. Every gate is reversible, which is why there is no quantum AND.

$$U^\dagger U = UU^\dagger = I, \qquad U = e^{i\alpha}R_{\hat n}(\vartheta).$$

*Introduced:* [1.2](lessons/01-02-single-qubit-gates.md)

### Born rule

Project the state onto each basis direction, square the shadow's length, and that is the probability; the state then collapses to whichever direction you got.

$$P(m) = \lvert\langle m\vert\psi\rangle\rvert^2 = \mathrm{tr}\left(\Pi_m\rho\right).$$

*Introduced:* [1.3](lessons/01-03-measurement-and-the-born-rule.md)

### Measurement basis

The choice of axis a measurement asks about. Measuring $U^\dagger ZU$ is the same as applying $U$ and measuring $Z$, so one detector suffices for every question.

*Introduced:* [1.3](lessons/01-03-measurement-and-the-born-rule.md)

### Product state and entangled state

A product state assigns each qubit its own state; an entangled state does not, and the pair's joint state carries information neither half holds.

$$\lvert\psi\rangle \text{ is a product} \iff \det C = 0 \iff \text{Schmidt rank } 1.$$

*Introduced:* [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md)

### Schmidt decomposition

In the right local bases every two-qubit state needs at most two terms; the coefficients are the singular values of the amplitude table.

$$\lvert\psi\rangle = \lambda_1\lvert u_1\rangle\lvert v_1\rangle + \lambda_2\lvert u_2\rangle\lvert v_2\rangle, \qquad \lambda_1^2+\lambda_2^2 = 1.$$

*Introduced:* [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md)

### Controlled gate

Do something to the target only on the branch where the control reads 1 — a coherent fork, not an if-statement.

$$\mathrm{C}U = \lvert0\rangle\langle0\rvert\otimes I + \lvert1\rangle\langle1\rvert\otimes U = \begin{pmatrix}I&0\\0&U\end{pmatrix}.$$

*Introduced:* [1.5](lessons/01-05-multi-qubit-gates-and-quantum-circuits.md)

### Universality

A gate set is universal if its circuits approximate any unitary on any number of qubits to any accuracy. No *finite* set is exactly universal, by a counting argument.

*Introduced:* [1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md)

### Clifford group

The gates generated by $\{H,S,\mathrm{CNOT}\}$; they map Paulis to Paulis, are not universal, and are classically simulable in polynomial time (**Gottesman–Knill**). Adding $T$ makes the set universal.

*Introduced:* [1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md)

### Bell states

The four maximally entangled two-qubit states; an orthonormal basis, so also a measurement.

$$\lvert\Phi^\pm\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle\pm\lvert11\rangle\right), \qquad \lvert\Psi^\pm\rangle = \tfrac{1}{\sqrt2}\left(\lvert01\rangle\pm\lvert10\rangle\right).$$

*Introduced:* [2.1](lessons/02-01-bell-states-and-generating-entanglement.md)

### Bell measurement

Run the Bell-state preparation circuit backwards and measure: two deterministic bits naming which Bell state you held. It is a **joint** measurement and cannot be done by two separated parties.

*Introduced:* [2.1](lessons/02-01-bell-states-and-generating-entanglement.md)

### Density matrix

The complete description of a state when you have less than total information: a point in the Bloch ball rather than on its surface.

$$\rho = \sum_ip_i\lvert\psi_i\rangle\langle\psi_i\rvert = \tfrac12\left(I + \vec r\cdot\vec\sigma\right), \qquad \mathrm{tr}\,\rho = 1,\ \rho\succeq0.$$

*Introduced:* [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md)

### Partial trace

Sum over one subsystem's possibilities to get the other's state; the unique map giving correct local statistics.

$$\rho_A = \mathrm{tr}_B\,\rho_{AB} = \sum_j\left(I\otimes\langle j\rvert\right)\rho_{AB}\left(I\otimes\lvert j\rangle\right).$$

*Introduced:* [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md)

### Purity

One number measuring how much you know; equivalently how far the Bloch vector reaches, and for a pure joint state, how entangled the two halves are.

$$\mathrm{tr}\,\rho^2 = \tfrac12\left(1+\lvert\vec r\rvert^2\right).$$

*Introduced:* [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md)

### No-signaling

Nothing done to one half of an entangled pair — gate, measurement, or discard — changes the other half's description. Proved from linearity and cyclicity of the trace.

*Introduced:* [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md)

### No-cloning theorem

No unitary copies an unknown state, because copying squares every overlap and unitaries preserve overlaps.

$$\text{no } U \text{ with } U\lvert\psi\rangle\lvert0\rangle = \lvert\psi\rangle\lvert\psi\rangle \text{ for all }\lvert\psi\rangle; \qquad \langle\psi\vert\varphi\rangle = \langle\psi\vert\varphi\rangle^2 \implies \langle\psi\vert\varphi\rangle\in\{0,1\}.$$

*Introduced:* [2.3](lessons/02-03-the-no-cloning-theorem.md)

### Quantum teleportation

Move an unknown qubit using one shared Bell pair and two classical bits, destroying the original.

$$1\ \text{ebit} + 2\ \text{cbits} \ge 1\ \text{qubit teleported}.$$

*Introduced:* [2.4](lessons/02-04-quantum-teleportation.md)

### Superdense coding

Teleportation's dual: send two classical bits by transmitting one qubit, given a shared Bell pair.

$$1\ \text{ebit} + 1\ \text{qubit} \ge 2\ \text{cbits}.$$

*Introduced:* [2.5](lessons/02-05-superdense-coding.md)

### Holevo bound

Without pre-shared entanglement, $n$ transmitted qubits convey at most $n$ classical bits. Entanglement doubles this and no more.

*Introduced:* [2.5](lessons/02-05-superdense-coding.md)

### CHSH game

Two separated players receive random bits $x,y$ and output $a,b$, winning if $a\oplus b = x\wedge y$. Classical strategies win 75 percent; quantum strategies win $\cos^2(\pi/8) = 85.36$ percent.

*Introduced:* [2.6](lessons/02-06-the-chsh-game-and-device-independence.md)

### Tsirelson bound

The quantum ceiling on the CHSH correlator, $\lvert S\rvert\le2\sqrt2$ — above the classical 2 and below the no-signaling 4.

*Introduced:* [2.6](lessons/02-06-the-chsh-game-and-device-independence.md)

### Oracle

A reversible circuit computing a function, called as a black box; the cost model counts calls and nothing else.

$$U_f\lvert x\rangle\lvert y\rangle = \lvert x\rangle\lvert y\oplus f(x)\rangle.$$

*Introduced:* [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md)

### Phase kickback

Put the oracle's output wire in $\lvert-\rangle$ and the function's value comes back as a sign on the input register, with the ancilla returned untouched.

$$U_f\lvert x\rangle\lvert-\rangle = (-1)^{f(x)}\lvert x\rangle\lvert-\rangle.$$

*Introduced:* [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md)

### Uncomputation

Running a subroutine backwards to erase its scratch bits. Mandatory: $x$-dependent garbage entangles the workspace with the input and kills all interference.

*Introduced:* [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md)

### Query complexity

The number of oracle calls an algorithm makes, with all other gates free. The model where quantum lower bounds are provable, and only meaningful when the oracle really is opaque.

*Introduced:* [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md)

### Deutsch–Jozsa problem

Decide whether a promised function is constant or balanced. One quantum query; $2^{n-1}+1$ deterministic classical queries; $O(1)$ randomized classical queries.

*Introduced:* [3.2](lessons/03-02-deutsch-jozsa.md)

### Fourier sampling

Apply $H^{\otimes n}$, query the phase oracle, apply $H^{\otimes n}$, measure: the outcome $z$ appears with probability $\lvert\hat f(z)\rvert^2$, the squared Fourier coefficient of $(-1)^f$.

*Introduced:* [3.3](lessons/03-03-bernstein-vazirani.md)

### Simon's problem

Find the hidden $s$ of a two-to-one $f$ with $f(x) = f(x\oplus s)$. $O(n)$ quantum queries against $\Omega(2^{n/2})$ classical ones — the first exponential separation against *randomized* classical computing.

*Introduced:* [3.4](lessons/03-04-simons-algorithm.md)

### Diffusion operator

Grover's second reflection: invert every amplitude about their mean.

$$D = 2\lvert s\rangle\langle s\rvert - I = H^{\otimes n}\left(2\lvert0\rangle\langle0\rvert - I\right)H^{\otimes n}, \qquad a_x\mapsto 2\bar a - a_x.$$

*Introduced:* [3.5](lessons/03-05-grovers-search.md)

### Grover iteration

Oracle then diffusion: two reflections, hence a rotation by $2\theta$ in the plane spanned by the marked and unmarked subspaces.

$$G = D\,O_w, \qquad P_k = \sin^2\big((2k+1)\theta\big), \qquad \sin\theta = \sqrt{M/N}.$$

*Introduced:* [3.5](lessons/03-05-grovers-search.md)

### Amplitude amplification

Grover with an arbitrary starting circuit: turn success probability $p$ into near-certainty in $O(1/\sqrt p)$ rounds instead of $O(1/p)$.

$$Q = -\mathcal A\,S_0\,\mathcal A^\dagger\,S_{\text{good}}.$$

*Introduced:* [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md)

### Quantum counting

Phase-estimate the Grover operator: its eigenvalues $e^{\pm2i\theta}$ encode $M = N\sin^2\theta$, so you count solutions without finding one.

*Introduced:* [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md)

### BBBV lower bound

Any quantum algorithm accessing its input only through an oracle needs $\Omega(\sqrt N)$ queries to find a marked item, so Grover is optimal and search cannot put NP in BQP.

*Introduced:* [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md)

### Quantum Fourier transform

The Fourier transform over $\mathbb{Z}_{2^n}$, implementable in $O(n^2)$ gates because its phases factorize across qubits.

$$\mathrm{QFT}_N\lvert j\rangle = \frac{1}{\sqrt N}\sum_{k=0}^{N-1}e^{2\pi ijk/N}\lvert k\rangle.$$

*Introduced:* [4.1](lessons/04-01-the-quantum-fourier-transform.md)

### Quantum phase estimation

Control $U^{2^k}$ from a register of ancillas, inverse-Fourier them, and read an eigenphase in binary.

$$U\lvert u\rangle = e^{2\pi i\varphi}\lvert u\rangle \ \longmapsto\ \text{measure } j \text{ with } j/2^m\approx\varphi.$$

*Introduced:* [4.2](lessons/04-02-quantum-phase-estimation.md)

### Order (of $a$ mod $N$)

The least $r>0$ with $a^r\equiv1\pmod N$. It is an eigenphase denominator of the modular-multiplication operator, which is why a quantum computer finds it.

$$U_a\lvert u_s\rangle = e^{2\pi is/r}\lvert u_s\rangle, \qquad \lvert u_s\rangle = \tfrac{1}{\sqrt r}\sum_{k}e^{-2\pi isk/r}\lvert a^k\bmod N\rangle.$$

*Introduced:* [4.3](lessons/04-03-order-finding-and-period-finding.md)

### Shor's algorithm

Four classical steps around one quantum subroutine: find the order of a random $a$, and if $r$ is even with $a^{r/2}\not\equiv-1$, then $\gcd(a^{r/2}\pm1, N)$ are factors.

*Introduced:* [4.4](lessons/04-04-shors-factoring-algorithm.md)

### Hidden subgroup problem

A function constant exactly on the cosets of an unknown subgroup $H\le G$; find $H$. Efficient for abelian $G$, open for non-abelian.

$$f(g_1) = f(g_2) \iff g_1H = g_2H.$$

*Introduced:* [4.5](lessons/04-05-the-hidden-subgroup-problem.md)

### Quantum channel

Any physical process on a density matrix: linear, trace-preserving, completely positive. Equivalently a unitary on system-plus-environment with the environment traced away.

$$\mathcal E(\rho) = \sum_kE_k\rho E_k^\dagger, \qquad \sum_kE_k^\dagger E_k = I.$$

*Introduced:* [5.1](lessons/05-01-quantum-channels-and-decoherence.md)

### Decoherence

The decay of a density matrix's off-diagonal entries — the loss of the relative phases that carry interference. Measured by $T_2$.

*Introduced:* [5.1](lessons/05-01-quantum-channels-and-decoherence.md)

### Syndrome measurement

Measure the parities of code qubits rather than the qubits themselves: the outcome names the error and says nothing about the data, so the encoded superposition survives.

*Introduced:* [5.2](lessons/05-02-the-three-qubit-codes.md)

### Error discretization

Any single-qubit error is a combination of $I, X, Y, Z$, so a code correcting those four corrects every error — the syndrome measurement collapses a continuous error onto one correctable branch.

$$E = c_0I + c_1X + c_2Y + c_3Z.$$

*Introduced:* [5.3](lessons/05-03-the-shor-code-and-error-discretization.md)

### Knill–Laflamme conditions

A recovery operation exists exactly when distinct correctable errors go to distinguishable places *and* reveal nothing about the encoded state.

$$P\,E_i^\dagger E_j\,P = \alpha_{ij}\,P.$$

*Introduced:* [5.3](lessons/05-03-the-shor-code-and-error-discretization.md)

### Stabilizer code

A code defined by an abelian group of commuting Pauli strings; the code space is their joint $+1$ eigenspace.

$$\mathcal C = \{\lvert\psi\rangle : g_i\lvert\psi\rangle = \lvert\psi\rangle\}, \qquad k = n - m, \qquad d = \min\{\mathrm{wt}(P) : P\in N(\mathcal S)\setminus\mathcal S\}.$$

*Introduced:* [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md)

### CSS construction

Two nested classical linear codes give one quantum code, with $X$-checks handling bit flips and $Z$-checks handling phase flips independently. The Steane $[[7,1,3]]$ code is the $[7,4,3]$ Hamming code used twice.

*Introduced:* [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md)

### Transversal gate

A gate applied qubit-wise across a code block, so one fault cannot spread into two. **Eastin–Knill**: no error-detecting code has a universal transversal gate set.

*Introduced:* [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

### Threshold theorem

Below a critical physical error rate, arbitrarily long computation is possible with polylogarithmic overhead; above it, encoding makes things worse.

$$p_L^{(L)} \approx \tfrac1c\left(cp\right)^{2^L}, \qquad p_{\text{th}} = 1/c.$$

*Introduced:* [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

### Surface code

A $[[d^2,1,d]]$ CSS code on a planar lattice with weight-4 nearest-neighbour checks, threshold about 1 percent, and about $2d^2$ physical qubits per logical qubit.

*Introduced:* [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

### Magic-state distillation

The route to non-Clifford gates: purify noisy $\lvert T\rangle$ states with Clifford circuits ($p\to35p^3$ for the 15-to-1 protocol), then teleport the gate onto the data.

*Introduced:* [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

### BQP

The class of problems solved by a uniform family of polynomial-size quantum circuits with error at most 1/3.

$$\mathrm{P}\subseteq\mathrm{BPP}\subseteq\mathrm{BQP}\subseteq\mathrm{PP}\subseteq\mathrm{PSPACE},$$

with no inclusion known to be strict, and BQP versus NP open in both directions.

*Introduced:* [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md)

### QMA

The quantum analogue of NP: a quantum witness verified by a polynomial quantum circuit. The **local Hamiltonian problem** — estimating a ground-state energy — is QMA-complete.

*Introduced:* [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md)

### Trotter–Suzuki decomposition

Approximate the exponential of a sum by slicing time and multiplying the easy pieces; error controlled by the commutators.

$$e^{-i(A+B)t} = \left(e^{-iAt/r}e^{-iBt/r}\right)^r + O\!\left(t^2/r\right).$$

*Introduced:* [6.2](lessons/06-02-hamiltonian-simulation.md)

### Random circuit sampling

Sample from the output distribution of a random circuit — the task of the quantum-advantage experiments. Hard under plausible conjectures, useless in itself, and verifiable only by classical simulation.

*Introduced:* [6.3](lessons/06-03-sampling-advantage-and-verification.md)

### Cross-entropy benchmarking

The fidelity estimator used for sampling experiments; requires the ideal amplitudes, hence classical simulation of the circuit being tested.

$$\mathcal F_{\text{XEB}} = 2^n\left\langle p_C(x_i)\right\rangle - 1.$$

*Introduced:* [6.3](lessons/06-03-sampling-advantage-and-verification.md)

### Variational quantum eigensolver

Minimize $\langle\psi(\vec\theta)\vert H\vert\psi(\vec\theta)\rangle$ over circuit parameters, with the quantum computer measuring and a classical optimizer stepping.

*Introduced:* [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md)

### Parameter-shift rule

The exact gradient of a variational cost with respect to a single-Pauli rotation angle, as a difference of two energies.

$$\frac{\partial E}{\partial\theta} = \frac{E(\theta+\pi/2)-E(\theta-\pi/2)}{2}.$$

*Introduced:* [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md)

### Barren plateau

For an expressive (approximately 2-design) ansatz, the cost gradient has mean zero and variance $O(2^{-n})$, so the landscape is exponentially flat and untrainable.

*Introduced:* [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md)

### HHL algorithm

Produces a quantum state proportional to $A^{-1}b$ in time polylogarithmic in the dimension, subject to four caveats: state preparation, readout, condition number, and the fairness of the comparison.

*Introduced:* [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md)

### Dequantization

Granting a classical algorithm the sample-and-query access that QRAM assumes, and finding it too runs in polylogarithmic time — which removed the exponential speedup from recommendation systems, PCA, low-rank inversion, and support vector machines.

*Introduced:* [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md)

### Resource estimation

The ladder from algorithm to machine: logical qubits and $T$-count, required logical error rate, code distance, physical qubits, wall clock.

*Introduced:* [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md)

## Formulas and rules

### Named states

| State | Amplitudes | $(\theta,\phi)$ | Bloch vector |
|---|---|---|---|
| $\lvert0\rangle$ | $(1,0)$ | $\theta=0$ | $+\hat z$ |
| $\lvert1\rangle$ | $(0,1)$ | $\theta=\pi$ | $-\hat z$ |
| $\lvert+\rangle$ | $\tfrac{1}{\sqrt2}(1,1)$ | $(\tfrac\pi2,0)$ | $+\hat x$ |
| $\lvert-\rangle$ | $\tfrac{1}{\sqrt2}(1,-1)$ | $(\tfrac\pi2,\pi)$ | $-\hat x$ |
| $\lvert{+i}\rangle$ | $\tfrac{1}{\sqrt2}(1,i)$ | $(\tfrac\pi2,\tfrac\pi2)$ | $+\hat y$ |
| $\lvert{-i}\rangle$ | $\tfrac{1}{\sqrt2}(1,-i)$ | $(\tfrac\pi2,-\tfrac\pi2)$ | $-\hat y$ |

*From* [1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md)

### Single-qubit gates

| Gate | Matrix | Bloch action | Effect |
|---|---|---|---|
| $X$ | $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ | $\pi$ about $\hat x$ | $\lvert0\rangle\!\leftrightarrow\!\lvert1\rangle$ |
| $Y$ | $\begin{pmatrix}0&-i\\i&0\end{pmatrix}$ | $\pi$ about $\hat y$ | $\lvert0\rangle\!\to\!i\lvert1\rangle$ |
| $Z$ | $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ | $\pi$ about $\hat z$ | $\lvert+\rangle\!\leftrightarrow\!\lvert-\rangle$ |
| $H$ | $\tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ | $\pi$ about $\tfrac{\hat x+\hat z}{\sqrt2}$ | $\lvert0\rangle\!\to\!\lvert+\rangle$ |
| $S$ | $\mathrm{diag}(1,i)$ | $\pi/2$ about $\hat z$ | $\lvert+\rangle\!\to\!\lvert{+i}\rangle$ |
| $T$ | $\mathrm{diag}(1,e^{i\pi/4})$ | $\pi/4$ about $\hat z$ | $T^2=S$, $T^4=Z$, $T^8=I$ |

*From* [1.2](lessons/01-02-single-qubit-gates.md)

### Pauli algebra

| Identity | |
|---|---|
| $X^2=Y^2=Z^2=I$ | each Pauli is its own inverse |
| $XY = iZ$, $YZ = iX$, $ZX = iY$ | cyclic, with a factor of $i$ |
| $XZ = -ZX$ | distinct Paulis anticommute |
| $HXH = Z$, $HZH = X$, $HYH = -Y$ | $H$ swaps the $x$ and $z$ axes |
| $R_{\hat n}(\vartheta) = \cos\tfrac\vartheta2 I - i\sin\tfrac\vartheta2(\hat n\cdot\vec\sigma)$ | rotation by $\vartheta$ about $\hat n$ |
| $X = iR_x(\pi)$, $T = e^{i\pi/8}R_z(\pi/4)$ | named gates as rotations |
| two Pauli strings commute iff they anticommute in an **even** number of slots | the parity rule |

*From* [1.2](lessons/01-02-single-qubit-gates.md), [2.1](lessons/02-01-bell-states-and-generating-entanglement.md), [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md)

### Measurement

| Quantity | Formula |
|---|---|
| computational-basis probability | $P(0) = \lvert\alpha\rvert^2 = \cos^2(\theta/2)$ |
| along an axis $\hat n$ | $P(\pm) = \tfrac12\left(1\pm\vec r\cdot\hat n\right)$ |
| projectors for axis $\hat n$ | $\Pi_\pm = \tfrac12\left(I\pm\hat n\cdot\vec\sigma\right)$ |
| overlap of two pure states | $\lvert\langle\psi_1\vert\psi_2\rangle\rvert^2 = \tfrac12(1+\vec r_1\cdot\vec r_2) = \cos^2(\Theta/2)$ |
| expectation value | $\langle A\rangle = P(+) - P(-) = \mathrm{tr}(A\rho)$ |
| shot noise after $N$ shots | $\sqrt{(1-\langle A\rangle^2)/N}\le1/\sqrt N$ |
| shots for precision $\epsilon$ | $N \approx 1/\epsilon^2$ |
| optimal discrimination of two pure states (Helstrom) | $P = \tfrac12\left(1+\sqrt{1-\lvert\langle\psi_0\vert\psi_1\rangle\rvert^2}\right)$ |

*From* [1.3](lessons/01-03-measurement-and-the-born-rule.md)

### Multi-qubit gates

| Gate | Action | Note |
|---|---|---|
| CNOT | $\lvert x,y\rangle\to\lvert x,y\oplus x\rangle$ | the workhorse entangler |
| CZ | $\lvert x,y\rangle\to(-1)^{xy}\lvert x,y\rangle$ | symmetric in its wires |
| SWAP | $\lvert x,y\rangle\to\lvert y,x\rangle$ | three CNOTs |
| Toffoli | $\lvert x,y,z\rangle\to\lvert x,y,z\oplus xy\rangle$ | reversible AND; expensive in $T$ gates |
| $\mathrm{CNOT} = (I\otimes H)\,\mathrm{CZ}\,(I\otimes H)$ | | CZ and CNOT are the same hardware |
| $(H\otimes H)\mathrm{CNOT}_{0\to1}(H\otimes H) = \mathrm{CNOT}_{1\to0}$ | | control direction is a basis choice |

*From* [1.5](lessons/01-05-multi-qubit-gates-and-quantum-circuits.md)

### Synthesis and universality costs

| Quantity | Value |
|---|---|
| real parameters of a generic $n$-qubit unitary | $4^n$ |
| minimum CNOTs for a generic $n$-qubit unitary | $\left\lceil\tfrac14(4^n-3n-1)\right\rceil$ — 3 at $n=2$, 14 at $n=3$, 252 at $n=5$ |
| single-qubit gate from Clifford+$T$ to accuracy $\epsilon$ | $\approx3\log_2(1/\epsilon)$ $T$ gates (Ross–Selinger) |
| counting lower bound on that | $m \gtrsim 3\log(1/\epsilon)/\log k$ for a set of size $k$ |
| error budget across $G$ approximated gates | each gate to $\epsilon_{\text{total}}/G$ |
| single-qubit Clifford group size (mod phase) | 24, the rotation group of the cube |
| exact universal set | CNOT + all single-qubit gates |
| approximately universal set | $\{H, T, \mathrm{CNOT}\}$ |

*From* [1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md)

### Bell states and local Paulis

| Bell state | Prepared from | $\langle Z\otimes Z\rangle$ | $\langle X\otimes X\rangle$ | Reached from $\lvert\Phi^+\rangle$ by |
|---|---|---|---|---|
| $\lvert\Phi^+\rangle$ | $\lvert00\rangle$ | $+1$ | $+1$ | $I$ |
| $\lvert\Phi^-\rangle$ | $\lvert10\rangle$ | $+1$ | $-1$ | $Z$ |
| $\lvert\Psi^+\rangle$ | $\lvert01\rangle$ | $-1$ | $+1$ | $X$ |
| $\lvert\Psi^-\rangle$ | $\lvert11\rangle$ | $-1$ | $-1$ | $XZ$ |

Preparation is $\mathrm{CNOT}_{0\to1}(H\otimes I)$; measurement is its inverse. Every Bell state has reduced state $I/2$ on each qubit.

*From* [2.1](lessons/02-01-bell-states-and-generating-entanglement.md)

### Entanglement diagnostics (two qubits)

| Test | Product state | Maximally entangled |
|---|---|---|
| $\det C$ | $0$ | $\lvert\det C\rvert = 1/2$ |
| Schmidt rank | 1 | 2, with $\lambda_1=\lambda_2=1/\sqrt2$ |
| reduced state $\rho_A$ | pure | $I/2$ |
| purity $\mathrm{tr}\,\rho_A^2$ | 1 | $1/2$ |
| for $\cos t\lvert00\rangle+\sin t\lvert11\rangle$ | $\rho_A = \mathrm{diag}(\cos^2t,\sin^2t)$, purity $1-\tfrac12\sin^2 2t$ | at $t=\pi/4$ |

The whole module's figures of merit are functions of $\sin 2t$: superdense success $\tfrac12(1+\sin2t)$, CHSH value $\sqrt2(1+\sin2t)$.

*From* [1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md), [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md), [2.5](lessons/02-05-superdense-coding.md), [2.6](lessons/02-06-the-chsh-game-and-device-independence.md)

### Teleportation and superdense coding

| Outcome $m_0m_1$ | Bell state found | Teleportation: Bob holds | Bob applies | Superdense: message |
|---|---|---|---|---|
| 0 0 | $\lvert\Phi^+\rangle$ | $\alpha\lvert0\rangle+\beta\lvert1\rangle$ | $I$ | 0 0 |
| 0 1 | $\lvert\Psi^+\rangle$ | $\alpha\lvert1\rangle+\beta\lvert0\rangle$ | $X$ | 0 1 |
| 1 0 | $\lvert\Phi^-\rangle$ | $\alpha\lvert0\rangle-\beta\lvert1\rangle$ | $Z$ | 1 0 |
| 1 1 | $\lvert\Psi^-\rangle$ | $\alpha\lvert1\rangle-\beta\lvert0\rangle$ | $X$ then $Z$ | 1 1 |

Each outcome has probability exactly 1/4, for every input state. Correction operator: $Z^{m_0}X^{m_1}$.

*From* [2.4](lessons/02-04-quantum-teleportation.md), [2.5](lessons/02-05-superdense-coding.md)

### CHSH numbers

| Quantity | Value |
|---|---|
| correlator | $S = \langle A_0B_0\rangle+\langle A_0B_1\rangle+\langle A_1B_0\rangle-\langle A_1B_1\rangle$ |
| win probability | $P = \tfrac12 + S/8$ |
| local-hidden-variable bound | $\lvert S\rvert\le2$, so $P\le3/4$ |
| Tsirelson bound | $\lvert S\rvert\le2\sqrt2 = 2.828$, so $P\le\cos^2(\pi/8) = 0.8536$ |
| no-signaling bound | $\lvert S\rvert\le4$ |
| optimal measurements | $A_0 = Z$, $A_1 = X$, $B_{0,1} = (Z\pm X)/\sqrt2$ — every pair 45° apart |
| correlator for coplanar Bloch axes $\gamma$ apart, on $\lvert\Phi^+\rangle$ | $\cos\gamma$ |
| for the partially entangled $\cos t\lvert00\rangle+\sin t\lvert11\rangle$ | $S(t) = \sqrt2(1+\sin2t)$; violation needs $t>12.2°$ |

*From* [2.6](lessons/02-06-the-chsh-game-and-device-independence.md)

### Algorithm costs and their classical baselines

| Algorithm | Problem | Classical | Quantum | Speedup |
|---|---|---|---|---|
| Deutsch–Jozsa [3.2](lessons/03-02-deutsch-jozsa.md) | constant vs balanced | $2^{n-1}+1$ exact, $O(1)$ randomized | 1 query | exponential vs *deterministic* only |
| Bernstein–Vazirani [3.3](lessons/03-03-bernstein-vazirani.md) | hidden linear function | $n$ | 1 query | factor $n$; recursive version superpolynomial |
| Simon [3.4](lessons/03-04-simons-algorithm.md) | hidden XOR period | $\Theta(2^{n/2})$ | $O(n)$ | **exponential**, oracle model |
| Grover [3.5](lessons/03-05-grovers-search.md) | unstructured search | $\Theta(N)$ | $\tfrac\pi4\sqrt N$ | quadratic, provably optimal |
| amplitude amplification [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md) | boost success $p$ | $\Theta(1/p)$ | $\Theta(1/\sqrt p)$ | quadratic |
| quantum counting [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md) | count solutions | $\Theta(N/M)$ | $O(\epsilon^{-1}\sqrt{N/M})$ | quadratic |
| QFT [4.1](lessons/04-01-the-quantum-fourier-transform.md) | Fourier transform | $O(N\log N)$ ops | $O(n^2)$ gates | exponential in gates, but output unreadable |
| order-finding [4.3](lessons/04-03-order-finding-and-period-finding.md) | period of $a^k\bmod N$ | subexponential | $O(n^3)$ | **exponential** |
| Shor [4.4](lessons/04-04-shors-factoring-algorithm.md) | factoring | $L_N[1/3]$, $\approx2^{112}$ at $n=2048$ | $O(n^3)$ | **exponential**, real problem |
| Hamiltonian simulation [6.2](lessons/06-02-hamiltonian-simulation.md) | $e^{-iHt}$ | exponential | polynomial | **exponential**, real problem |
| HHL [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md) | $Ax=b$ | $O(sN\sqrt\kappa)$ | $\tilde O(\kappa s\,\mathrm{polylog}N)$ | dequantized for data problems |

*From* Modules 3, 4, 6

### Grover and amplitude amplification arithmetic

| Quantity | Formula |
|---|---|
| rotation half-angle | $\sin\theta = \sqrt{M/N}$ (Grover) or $\sqrt p$ (amplification) |
| success after $k$ iterations | $P_k = \sin^2\big((2k+1)\theta\big)$ |
| optimal iteration count | $k^\star = \left\lfloor\tfrac{\pi}{4\theta}-\tfrac12\right\rfloor \approx \tfrac\pi4\sqrt{N/M}$ |
| oracle | $O_w = I - 2\sum_{x\in\mathcal M}\lvert x\rangle\langle x\rvert$ |
| over-iterating | $P$ falls; at $k\approx2k^\star$ it is near zero (the soufflé problem) |
| counting from a phase estimate | $\tilde M = N\sin^2\tilde\theta$ |
| $N=4$, $M=1$ | $\theta = 30°$, $k^\star = 1$, $P = 1$ exactly |

*From* [3.5](lessons/03-05-grovers-search.md), [3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md)

### Fourier and phase-estimation facts

| Fact | Statement |
|---|---|
| character orthogonality ($\mathbb{Z}_2^n$) | $\sum_x(-1)^{x\cdot a} = 2^n\delta_{a,0}$ |
| Hadamard transform | $H^{\otimes n}\lvert x\rangle = 2^{-n/2}\sum_z(-1)^{x\cdot z}\lvert z\rangle$ |
| uniform superposition | $H^{\otimes n}\lvert0^n\rangle = 2^{-n/2}\sum_x\lvert x\rangle$ |
| QFT gate count | $n$ Hadamards $+\ n(n-1)/2$ controlled phases; $O(n\log n)$ approximate |
| QFT of a comb (period $r\mid N$) | peaks at the $r$ multiples of $N/r$, uniform, with the offset in unobservable phases |
| phase estimation, exact case | $\varphi = j_0/2^m$ gives $j_0$ with probability 1 |
| phase estimation, general | nearest bin with $P\ge4/\pi^2 = 0.405$; within $\pm1$ bin with $P\ge8/\pi^2 = 0.81$ |
| ancillas for $n$ bits, failure $\epsilon$ | $m = n + \lceil\log_2(2+1/2\epsilon)\rceil$ |
| cost | $2^m$ applications of $U$: $\Theta(1/\epsilon_\varphi)$, versus $\Theta(1/\epsilon_\varphi^2)$ for naive sampling |
| bits needed for order-finding | $m\approx2n$, since fractions with denominator $<N$ differ by $\ge1/N^2$ |
| continued fractions | if $\lvert x - p/q\rvert<1/2q^2$ then $p/q$ is a convergent of $x$ |

*From* [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md), [3.3](lessons/03-03-bernstein-vazirani.md), [4.1](lessons/04-01-the-quantum-fourier-transform.md), [4.2](lessons/04-02-quantum-phase-estimation.md), [4.3](lessons/04-03-order-finding-and-period-finding.md)

### Shor's algorithm and the HSP table

Shor: pick random $a$; if $\gcd(a,N)>1$ return it; find the order $r$; if $r$ is odd or $a^{r/2}\equiv-1\pmod N$ retry; else return $\gcd(a^{r/2}\pm1,N)$.

| Quantity | Value |
|---|---|
| success probability per attempt ($k$ distinct odd primes) | $\ge1-2^{-(k-1)}$, so $\ge1/2$ for $N = pq$ |
| worked example | $N=15$, $a=7$: $r=4$, $7^2 = 4$, $\gcd(3,15)=3$, $\gcd(5,15)=5$ |
| square roots of 1 mod $pq$ | exactly four: $\pm1$ and two nontrivial ones |

| Instance | Group $G$ | Hidden subgroup $H$ | Status |
|---|---|---|---|
| Bernstein–Vazirani | $\mathbb{Z}_2^n$ | $\{x:s\cdot x=0\}$ | solved |
| Simon | $\mathbb{Z}_2^n$ | $\{0,s\}$ | solved |
| order-finding, Shor | $\mathbb{Z}$ | $r\mathbb{Z}$ | solved |
| discrete logarithm | $\mathbb{Z}_N\times\mathbb{Z}_N$ | $\langle(x,1)\rangle$ | solved |
| graph isomorphism | $S_n$ | automorphism group | **open** |
| shortest lattice vector | dihedral $D_N$ | order-2 subgroup | **open** |

*From* [4.4](lessons/04-04-shors-factoring-algorithm.md), [4.5](lessons/04-05-the-hidden-subgroup-problem.md)

### Noise channels

| Channel | Kraus operators | Bloch action |
|---|---|---|
| bit flip | $\sqrt{1-p}I,\ \sqrt pX$ | $(r_x,\ (1-2p)r_y,\ (1-2p)r_z)$ |
| phase flip | $\sqrt{1-p}I,\ \sqrt pZ$ | $((1-2p)r_x,\ (1-2p)r_y,\ r_z)$ |
| depolarizing | $\sqrt{1-p}I,\ \sqrt{p/3}\{X,Y,Z\}$ | $(1-\tfrac{4p}{3})\vec r$; fully destructive at $p = 3/4$ |
| amplitude damping | $\begin{pmatrix}1&0\\0&\sqrt{1-\gamma}\end{pmatrix},\begin{pmatrix}0&\sqrt\gamma\\0&0\end{pmatrix}$ | $(\sqrt{1-\gamma}r_x,\ \sqrt{1-\gamma}r_y,\ (1-\gamma)r_z+\gamma)$ |

$\gamma = 1-e^{-t/T_1}$; equatorial contraction $e^{-t/T_2}$; $1/T_2 = 1/2T_1 + 1/T_\phi$, so $T_2\le2T_1$.

*From* [5.1](lessons/05-01-quantum-channels-and-decoherence.md)

### Codes

| Code | Parameters | Generators / checks | Corrects |
|---|---|---|---|
| three-qubit bit-flip | distance 1 in general | $Z_1Z_2,\ Z_2Z_3$ | one $X$ only; blind to $Z$ |
| three-qubit phase-flip | distance 1 in general | $X_1X_2,\ X_2X_3$ | one $Z$ only; blind to $X$ |
| Shor | $[[9,1,3]]$ | six $Z$-pairs within blocks; two weight-6 $X$-checks across blocks | one arbitrary error |
| five-qubit | $[[5,1,3]]$ | four weight-4 generators | one arbitrary; **optimal $n$** |
| Steane | $[[7,1,3]]$ | $IIIXXXX$, $IXXIIXX$, $XIXIXIX$ and the $Z$ versions | one arbitrary; transversal Cliffords |
| surface, distance $d$ | $[[d^2,1,d]]$ | weight-4 nearest-neighbour | $\lfloor(d-1)/2\rfloor$; threshold $\approx1\%$ |

Three-qubit syndrome table: $(0,0)$ no error; $(1,0)$ qubit 1; $(1,1)$ qubit 2; $(0,1)$ qubit 3. Logical error rate $3p^2-2p^3$, better than $p$ for $p<1/2$.

*From* [5.2](lessons/05-02-the-three-qubit-codes.md), [5.3](lessons/05-03-the-shor-code-and-error-discretization.md), [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md), [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

### Fault-tolerance and resource arithmetic

| Quantity | Formula or value |
|---|---|
| surface-code logical error rate | $p_L\approx0.1\left(p/p_{\text{th}}\right)^{(d+1)/2}$, $p_{\text{th}}\approx10^{-2}$ |
| physical qubits per logical qubit | $\approx2d^2$ |
| suppression per two units of distance | one factor of $p_{\text{th}}/p$ |
| $d$ needed | invert the above from $p_L < 1/\mathcal N$ |
| concatenation | $p_L^{(L)} = \tfrac1c(cp)^{2^L}$, threshold $1/c$ |
| 15-to-1 magic distillation | $p \to 35p^3$ |
| surface-code round | $\approx1$ µs; a logical gate $\approx d$ rounds |
| factory and routing overhead | $\times1.5$–2 |

At $p=10^{-3}$: $d=7\to p_L = 10^{-5}$ (98 qubits); $d=15\to10^{-9}$ (450); $d=21\to10^{-12}$ (882); $d=27\to10^{-15}$ (1,458).

*From* [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md), [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md)

### The canonical resource estimates

| Computation | Logical qubits | Toffoli/$T$ | Distance | Physical qubits | Wall clock |
|---|---|---|---|---|---|
| Shor, RSA-2048 | $\approx3n\approx6{,}200$ | $\approx0.3n^3\approx2.6\times10^9$ | $\approx27$ at $p=10^{-3}$ | $\approx2\times10^7$ | $\approx8$ h |
| FeMoco ground state | thousands | $\sim10^{10}$ | similar | $\approx4\times10^6$ | days |
| today's devices | 0 useful | — | 5–7 demonstrated | $10^2$–$10^3$ | — |

*From* [4.4](lessons/04-04-shors-factoring-algorithm.md), [6.2](lessons/06-02-hamiltonian-simulation.md), [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md)

### Complexity placements

$$\mathrm{P}\subseteq\mathrm{BPP}\subseteq\mathrm{BQP}\subseteq\mathrm{PP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXP},$$

none known strict. BQP versus NP open in both directions. Oracle separations: $\mathrm{BQP}\not\subseteq\mathrm{BPP}$ (Simon), $\mathrm{NP}\not\subseteq\mathrm{BQP}$ (BBBV), $\mathrm{BQP}\not\subseteq\mathrm{PH}$ (Raz–Tal). The local Hamiltonian problem is QMA-complete.

*From* [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md)

### Simulation and variational costs

| Quantity | Value |
|---|---|
| first-order Trotter error | $\le\tfrac{t^2}{2r}\lVert[A,B]\rVert$; $r = O(t^2/\epsilon)$ |
| second-order (Strang) | $O(t^3/r^2)$; $r = O(t^{3/2}/\sqrt\epsilon)$ |
| qubitization | $O(t\lVert H\rVert + \log(1/\epsilon))$ — optimal in $t$ |
| molecular term count | $L = O(M^4)$ for $M$ orbitals |
| VQE shot cost | $\approx M/\epsilon^2$; $10^4$ terms at 1.6 mHa $\approx4\times10^9$ shots |
| parameter-shift rule | $\partial_\theta E = \tfrac12\left[E(\theta+\tfrac\pi2)-E(\theta-\tfrac\pi2)\right]$, exact |
| barren plateau | $\mathrm{Var}[\partial_\theta E] = O(2^{-n})$, so $\Omega(2^n)$ shots to see a gradient |
| QAOA on 3-regular MaxCut, $p=1$ | ratio 0.6924, versus Goemans–Williamson's 0.878 classically |
| chemical accuracy | 1.6 millihartree |

*From* [6.2](lessons/06-02-hamiltonian-simulation.md), [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md)

### The claim-auditing checklist

1. What is the task, precisely, and does anyone want it? ([6.3](lessons/06-03-sampling-advantage-and-verification.md))
2. What is the classical baseline, computed by someone motivated to make it fast? ([6.3](lessons/06-03-sampling-advantage-and-verification.md), [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md))
3. What access and interfaces are assumed — QRAM, oracles, expectation-value-only output? Grant the classical side the same. ([6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md))
4. Are the quoted qubits logical or physical? The factor is $10^3$ or more. ([5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md), [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md))
5. What is the error rate, and is it below threshold? ([5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md))

*From* [6.3](lessons/06-03-sampling-advantage-and-verification.md), [6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md), [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Spin-1/2, the Pauli matrices, and the two-dimensional state space | [`quantum-mechanics` 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| The Born rule and collapse in general Hilbert spaces | [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) |
| Time evolution $e^{-iHt/\hbar}$ and stationary states | [`quantum-mechanics` 2.2](../quantum-mechanics/lessons/02-02-stationary-states-time-evolution.md) |
| Commutators, uncertainty, and incompatible observables | [`quantum-mechanics` 3.3](../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) |
| Tensor products, the entanglement test, the singlet | [`quantum-mechanics` 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) |
| Bell's inequality in spin language, hidden variables, the experiments | [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) |
| The density matrix, mixed states, von Neumann entropy | [`quantum-mechanics` 5.4](../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) |
| The variational principle $\langle H\rangle\ge E_0$ | [`quantum-mechanics` 6.3](../quantum-mechanics/lessons/06-03-variational-principle.md) |
| Spontaneous emission and the Fermi golden rule (the origin of $T_1$) | [`quantum-mechanics` 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| Inner products, orthonormal bases, unitary and Hermitian operators | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Eigenvalues, eigenvectors, and diagonalization | [`linalg-refresher` 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| The spectral theorem and spectral projectors | [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Singular value decomposition (the Schmidt decomposition's engine) | [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| The discrete Fourier transform and the FFT's divide-and-conquer | [`fourier-analysis` 4.2](../fourier-analysis/lessons/04-02-dft-fft.md) |
| Orthogonality of characters and Fourier inversion | [`fourier-analysis` 1.2](../fourier-analysis/lessons/01-02-orthogonal-systems-projection.md) |
| Modular arithmetic, Euclid's algorithm, the Chinese remainder theorem | [`number-theory` 1.2](../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md), [2.4](../number-theory/lessons/02-04-chinese-remainder-theorem.md) |
| Order of an element, Euler's totient, the unit group $\mathbb{Z}_N^*$ | [`number-theory` 3.2](../number-theory/lessons/03-02-euler-totient-and-theorem.md)–[3.3](../number-theory/lessons/03-03-order-and-the-unit-group.md) |
| Continued fractions and convergents | [`number-theory` 5.2](../number-theory/lessons/05-02-pell-equation-and-continued-fractions.md) |
| Groups, cosets, Lagrange's theorem, kernels, quotients | [`abstract-algebra` 1.5](../abstract-algebra/lessons/01-05-cosets-lagrange.md), [2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md)–[2.2](../abstract-algebra/lessons/02-02-normal-subgroups-quotients.md) |
| Finite fields and arithmetic over $\mathbb{F}_2$ | [`abstract-algebra` 3.5](../abstract-algebra/lessons/03-05-characteristic-prime-fields.md) |
| Linear block codes, parity-check matrices, duals, the Hamming code | [`communications` 4.3](../communications/lessons/04-03-block-codes.md) |
| Asymptotic notation, P, NP, reductions, NP-completeness | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md), [4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| The central limit theorem and $1/\sqrt N$ sampling error | [`prob-stat-refresher` 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Chernoff-style concentration for majority voting | [`prob-stat-refresher` 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Entropy, mutual information, the data-processing inequality | [`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md), [1.5](../information-theory/lessons/01-05-data-processing-inequality.md) |
| RSA, Diffie–Hellman, elliptic-curve discrete log, the number field sieve | [`cryptography` 3.1](../cryptography/lessons/03-01-the-number-theoretic-toolkit.md), [3.3](../cryptography/lessons/03-03-rsa-encryption.md), [3.5](../cryptography/lessons/03-05-elliptic-curve-cryptography.md) |
| BB84 and quantum key distribution | [`photonics-quantum-optics` 4.5](../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md) |
| Rabi oscillations as Bloch-sphere rotations; entangled photon pairs | [`photonics-quantum-optics` 1.2](../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md), [4.3](../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md) |
| NAND universality and reversible-logic background | [`digital-logic` 1.3](../digital-logic/lessons/01-03-boolean-algebra-logic-gates.md) |
| Gradient methods for nonconvex objectives | [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md) |

## Pitfalls

### Phases

- You might think any minus sign is unobservable. A **global** phase is; a **relative** phase is the entire mechanism of interference, and the same sign becomes relative the moment the gate is controlled. *([1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md), [1.2](lessons/01-02-single-qubit-gates.md))*
- You might think a gate's phase prefactor can always be dropped. Under control it becomes a relative phase between branches — which is exactly how phase kickback works. *([1.2](lessons/01-02-single-qubit-gates.md), [3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md))*
- You might think the two constant functions are distinguishable by a phase oracle. They differ by $-I$, a global phase, which is why Deutsch–Jozsa asks "constant or balanced" rather than "which constant." *([3.2](lessons/03-02-deutsch-jozsa.md))*

### Angles and conventions

- You might think two states 90° apart on the Bloch sphere are orthogonal. Their overlap is $\cos^2 45° = 1/2$; orthogonal means **antipodal**. The half-angle is the most common factor-of-two error in the subject. *([1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md))*
- You might think $T$ rotates the sphere by $\pi/8$. It rotates by $\pi/4$: a diagonal gate $\mathrm{diag}(1,e^{i\lambda})$ turns the sphere by exactly $\lambda$. *([1.2](lessons/01-02-single-qubit-gates.md))*
- You might think qubit ordering is a detail. It is the leading source of wrong answers in hand simulation, and most SDKs use the opposite convention to this course. *([1.5](lessons/01-05-multi-qubit-gates-and-quantum-circuits.md))*

### Superposition and measurement

- You might think a superposition is secretly one value you happen not to know. That is a **mixed** state, at the centre of the Bloch ball rather than on its surface, and it differs measurably in the $X$ basis. *([1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md), [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md))*
- You might think a qubit stores unlimited information because $\theta,\phi$ are continuous. One measurement gives one bit and Holevo caps the retrievable information at one bit per qubit; the continuum steers interference and cannot be read. *([1.1](lessons/01-01-the-qubit-and-the-bloch-sphere.md), [2.5](lessons/02-05-superdense-coding.md))*
- You might think measuring twice gives two bits about the state. Projectors are idempotent, so the second measurement returns the same answer for free and tells you nothing new. *([1.3](lessons/01-03-measurement-and-the-born-rule.md))*
- You might think an algorithm "checks all $2^n$ inputs at once." A query plus an immediate measurement gives one random $f(x)$ — exactly one classical query's worth. All the value is in the interference afterwards. *([3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md), [3.2](lessons/03-02-deutsch-jozsa.md))*

### Entanglement and protocols

- You might think entanglement is just correlation. Classical correlation agrees in one basis; a Bell state agrees in two incompatible ones, and no pre-agreed answer sheet can do that. *([1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md), [2.6](lessons/02-06-the-chsh-game-and-device-independence.md))*
- You might think "entangled" is a property of a state alone. It is always relative to a **cut**; a three-qubit state can be entangled across one partition and a product across another. *([1.4](lessons/01-04-two-qubits-tensor-products-and-entanglement.md))*
- You might think measuring one half of a pair signals to the other. Nothing done locally changes the distant reduced state; the correlation becomes visible only after classical communication. *([2.2](lessons/02-02-density-matrices-and-the-partial-trace.md), [2.4](lessons/02-04-quantum-teleportation.md))*
- You might think teleportation moves matter or beats light speed. It reconfigures a qubit Bob already had, using two bits sent by ordinary channel; his qubit is $I/2$ until they arrive. *([2.4](lessons/02-04-quantum-teleportation.md))*
- You might think superdense coding beats Holevo. Count the Bell-pair distribution and it is exactly two qubits for two bits; entanglement lets you pay in advance, not pay less. *([2.5](lessons/02-05-superdense-coding.md))*
- You might think same-basis Bell correlations prove nonlocality. They are trivially reproducible classically; the proof needs **incompatible** measurement choices, which is why CHSH's axes are 45° apart. *([2.1](lessons/02-01-bell-states-and-generating-entanglement.md), [2.6](lessons/02-06-the-chsh-game-and-device-independence.md))*
- You might think no-cloning forbids all copying. It forbids copying unknown **non-orthogonal** states; copying basis states is a CNOT, and the $\alpha\lvert000\rangle+\beta\lvert111\rangle$ encoding is legal because it is linear on two orthogonal inputs. *([2.3](lessons/02-03-the-no-cloning-theorem.md), [5.2](lessons/05-02-the-three-qubit-codes.md))*
- You might think Module 2's protocols demonstrate computational power. They are entirely Clifford, hence classically simulable — deep physics, zero computational advantage. *([1.6](lessons/01-06-universal-gate-sets-and-circuit-synthesis.md), [2.6](lessons/02-06-the-chsh-game-and-device-independence.md))*

### Algorithms and speedups

- You might think leftover scratch bits merely waste space. $x$-dependent garbage entangles the workspace with the input, makes the input's reduced state $I/2^n$, and destroys all interference — the algorithm returns noise. *([3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md))*
- You might think query complexity is time complexity. A query-optimal algorithm is useless if the oracle is expensive, and an oracle given as a circuit may be classically exploitable. *([3.1](lessons/03-01-oracles-reversibility-and-phase-kickback.md), [3.3](lessons/03-03-bernstein-vazirani.md))*
- You might think Deutsch–Jozsa's exponential separation is meaningful. It holds only against **deterministic** classical algorithms; three randomized queries solve the problem. *([3.2](lessons/03-02-deutsch-jozsa.md))*
- You might think Bernstein–Vazirani shows entanglement at work. Its state is a product state throughout, and the circuit is classically simulable in $O(n)$ time. *([3.3](lessons/03-03-bernstein-vazirani.md))*
- You might think Simon's algorithm finds $s$ directly. Each run gives one linear constraint; Gaussian elimination finishes the job, and the same quantum-sample-plus-classical-post-processing shape recurs in order-finding. *([3.4](lessons/03-04-simons-algorithm.md), [4.3](lessons/04-03-order-finding-and-period-finding.md))*
- You might think more Grover iterations are better. $P_k$ is a sine, not a ramp; at $2k^\star$ it is near zero. *([3.5](lessons/03-05-grovers-search.md))*
- You might think Grover searches a database. It needs an oracle that *recognizes* the answer; loading an actual $N$-entry table costs $\Omega(N)$ and erases the speedup. *([3.5](lessons/03-05-grovers-search.md))*
- You might think $\sqrt N$ could be improved. $\Omega(\sqrt N)$ is a theorem covering all quantum algorithms with oracle access, so Grover is optimal and search cannot crack NP. *([3.6](lessons/03-06-amplitude-amplification-counting-and-optimality.md), [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md))*
- You might think the QFT is a faster FFT. Loading $N$ numbers in and reading $N$ out each cost $\Omega(N)$; the QFT is useful only when a few samples of the spectrum answer your question. *([4.1](lessons/04-01-the-quantum-fourier-transform.md))*
- You might think phase estimation returns the exact fraction. It returns a nearby dyadic rational; recovering $s/r$ needs continued fractions. *([4.2](lessons/04-02-quantum-phase-estimation.md), [4.3](lessons/04-03-order-finding-and-period-finding.md))*
- You might think controlled-$U^{2^k}$ costs $2^k$ applications. For order-finding it does not: $a^{2^k}\bmod N$ is precomputed classically, and that shortcut is what makes Shor polynomial. *([4.2](lessons/04-02-quantum-phase-estimation.md), [4.3](lessons/04-03-order-finding-and-period-finding.md))*
- You might think Shor searches for factors. It finds an order; the factors come from classical algebra, and factoring is not believed NP-complete. *([4.4](lessons/04-04-shors-factoring-algorithm.md))*
- You might think abelian HSP being easy means structured problems are generally easy. The promise is strong and rarely met, and the non-abelian cases have resisted thirty years of attack — which is what lattice cryptography rests on. *([4.5](lessons/04-05-the-hidden-subgroup-problem.md))*

### Noise, codes, and fault tolerance

- You might think noise is always "a random gate." Pauli channels are the easy case; amplitude damping is not unitary, and general channels do things no random unitary does. *([5.1](lessons/05-01-quantum-channels-and-decoherence.md))*
- You might think $T_1$ and $T_2$ measure qubit quality. Only $T_2$ divided by the gate time does; that dimensionless ratio is why platforms five orders of magnitude apart in coherence time compete. *([5.1](lessons/05-01-quantum-channels-and-decoherence.md))*
- You might think more shots fix a noisy result. Shots reduce statistical error; noise produces **systematic** bias, and averaging a biased estimator converges to the wrong answer. *([5.1](lessons/05-01-quantum-channels-and-decoherence.md), [6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md))*
- You might think syndrome measurement collapses the encoded state. Both logical basis states are $+1$ eigenstates of every check, so the outcome is data-independent and cannot disturb the data. *([5.2](lessons/05-02-the-three-qubit-codes.md))*
- You might think correcting one error type is half of error correction. Uncorrected phase errors dominate the logical rate, so the bit-flip code alone gives essentially no benefit — its distance is 1. *([5.2](lessons/05-02-the-three-qubit-codes.md), [5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md))*
- You might think a continuous error causes proportionally small damage that accumulates. The syndrome measurement forces it to be nothing or a full Pauli, both correctable — a small *probability* of a large correctable event. *([5.3](lessons/05-03-the-shor-code-and-error-discretization.md))*
- You might think a code must know its noise model. The discretization theorem covers every single-qubit error at once, so one recovery handles channels nobody characterized. *([5.3](lessons/05-03-the-shor-code-and-error-discretization.md))*
- You might think bigger distance or fewer qubits is what makes a code good. Threshold and connectivity decide; the surface code has a terrible rate and wins anyway. *([5.4](lessons/05-04-stabilizer-codes-and-the-css-construction.md), [5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md))*
- You might think error correction is a step in a circuit. It runs continuously, every microsecond, with a real-time classical decoder. *([5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md))*
- You might think adding qubits always helps. Above threshold more qubits means more ways to fail, and the required distance diverges as $p\to p_{\text{th}}$. *([5.5](lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md), [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md))*

### Complexity and claims

- You might think $\mathrm{BQP}\subseteq\mathrm{PSPACE}$ makes quantum computers useless. It means no advantage in **space** and no new computability; the advantage is exponential in **time**. *([6.1](lessons/06-01-bqp-and-the-complexity-landscape.md))*
- You might think an oracle separation settles a question about real problems. Oracle results bound techniques, not problems — a circuit's structure may be classically exploitable. *([3.3](lessons/03-03-bernstein-vazirani.md), [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md))*
- You might think "quantum computers solve NP-complete problems." Brute force gives $2^{n/2}$, still exponential, and no structural route is known. The question is formally open and essentially nobody expects a positive answer. *([6.1](lessons/06-01-bqp-and-the-complexity-landscape.md))*
- You might think simulation is free once you have the hardware. Product-formula error sets the gate count, and ground-state finding is QMA-complete — quantum computers turn "find the ground state" into "find a good enough guess." *([6.2](lessons/06-02-hamiltonian-simulation.md))*
- You might think "quantum supremacy" means a useful task was done faster. It means a specific sampling task beat the best-known classical method **at the time**, and every such claim has since been narrowed. *([6.3](lessons/06-03-sampling-advantage-and-verification.md))*
- You might think higher fidelity makes an advantage claim weaker. Low fidelity is precisely what classical spoofers exploit; better fidelity makes spoofing harder. *([6.3](lessons/06-03-sampling-advantage-and-verification.md))*
- You might think variational algorithms avoid needing error correction. They avoid needing depth; they are blocked instead by $1/\epsilon^2$ shot costs and by barren plateaus, neither of which a better qubit fixes. *([6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md))*
- You might think QAOA beats classical optimization. Its flagship result is worse than a 1994 classical algorithm, and no implementable depth has been shown to win. *([6.4](lessons/06-04-variational-algorithms-vqe-and-qaoa.md))*
- You might think HHL solves linear systems. It produces a *state* proportional to the solution, and reading the vector out costs $\Omega(N)$. *([6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md))*
- You might think QRAM is an engineering detail. It is an unproven assumption whose error-corrected cost may exceed the classical solve, and granting the classical side the equivalent access is what dequantized the field. *([6.5](lessons/06-05-quantum-linear-algebra-and-dequantization.md))*
- You might think qubit count is the headline number. The physical error rate enters through $d^2$ and the $T$-count sets the factory size; both dominate. *([6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md))*
- You might think resource estimates are stable. They have fallen roughly two orders of magnitude per five years, mostly from algorithms — which undercuts both "five years" and "never." *([6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links; the
  linter catches it, but prefer not to rename.
- **No prose dollar signs** — write "10 dollars", not the symbol (see CLAUDE.md).
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.
