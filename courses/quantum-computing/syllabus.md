# Quantum Computing — Syllabus

> Computer Science · Tier 2 · ~20 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [quantum-mechanics](../quantum-mechanics/syllabus.md) · Roadmap id: `quantum-computing`

## Goal

Learn quantum computing as **unitary linear algebra with a measurement at the end**: qubits are unit vectors, gates are unitary matrices, and an algorithm is a circuit that sculpts amplitudes so the answer is likely when you look. Start from the single qubit and the Bloch sphere, build gates, measurement, and multi-qubit entanglement, then use them to run the protocols (teleportation, superdense coding) and the canonical algorithms — Deutsch–Jozsa, Bernstein–Vazirani, Simon, Grover, and Shor via the quantum Fourier transform and phase estimation. You will be able to hand-simulate small circuits, read and design them, explain *why* an algorithm beats every classical one, and speak the landscape (no-cloning, error correction, BQP, NISQ). Deliberately skipped: the physics and engineering of real qubit hardware, and the deep theory of fault tolerance (error correction is a taste, not a course). This is a tier-2 course — it assumes fluency with `linalg-refresher` (tensor products, unitary/Hermitian operators, eigenvalues, inner products) and the state/measurement framing from `quantum-mechanics`; it re-derives nothing about Hilbert spaces you have already seen.

## Dangerous Checklist

When you finish, you can:

- [ ] Write any single-qubit state as a point on the Bloch sphere and read off its measurement probabilities in any basis
- [ ] Apply single- and multi-qubit gates as matrices and simulate a small circuit by hand to its output state
- [ ] Construct the four Bell states and diagnose whether a two-qubit state is entangled or a product
- [ ] Prove the no-cloning theorem and explain what it does and does not forbid
- [ ] Walk through quantum teleportation and superdense coding, tracking every measurement outcome and correction
- [ ] Explain phase kickback and use it to build an oracle-based algorithm
- [ ] Run Deutsch–Jozsa, Bernstein–Vazirani, and Simon, and state the exact speedup each achieves
- [ ] Execute Grover's search, count the optimal number of iterations, and explain the quadratic speedup geometrically
- [ ] Build the quantum Fourier transform circuit and use phase estimation to read an eigenphase
- [ ] Reduce factoring to order-finding and assemble Shor's algorithm end-to-end on a small number
- [ ] Correct a single-qubit error with a small code and state what error correction buys you
- [ ] Place quantum computing in the complexity landscape (BQP) and describe what NISQ and variational algorithms attempt

## Modules

### Module 1: Qubits, gates, and circuits

The whole machine, one piece at a time: the qubit, the gates that move it, the measurement that reads it, and the tensor product that lets qubits interact.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The qubit and the Bloch sphere | Represent a single qubit as a state vector and a point on the sphere | superposition, computational basis, global vs relative phase, Bloch sphere, $\lvert\psi\rangle=\cos\tfrac\theta2\lvert0\rangle+e^{i\phi}\sin\tfrac\theta2\lvert1\rangle$ |
| 1.2 | Single-qubit gates | Apply unitary gates as matrices and as Bloch-sphere rotations | unitarity, Pauli $X,Y,Z$, Hadamard, phase gates $S,T$, rotations, reversibility |
| 1.3 | Measurement and the Born rule for qubits | Extract probabilities and post-measurement states, in any basis | Born rule, projective measurement, measurement basis, $Z$- vs $X$-basis, expectation values |
| 1.4 | Two qubits, tensor products, and entanglement | Build composite states and tell product from entangled | tensor product $\otimes$, computational basis of $n$ qubits, product vs entangled state, partial measurement |
| 1.5 | Multi-qubit gates and quantum circuits | Read and simulate circuits with controlled and multi-qubit gates | CNOT, controlled-$U$, SWAP, Toffoli, circuit diagrams, gate composition as matrix products |

**Boss problem 1:** Take the circuit "Hadamard on qubit 0, then CNOT with qubit 0 controlling qubit 1," starting from $\lvert00\rangle$. Compute the output state as a vector, identify it, and give the joint measurement statistics. Then measure only qubit 0 and state qubit 1's resulting state for each outcome.

### Module 2: Entanglement and quantum protocols

Entanglement is a resource. This module mints it (Bell states), fences off what it can't do (no-cloning), and spends it (teleportation, superdense coding).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Bell states and generating entanglement | Produce and identify the four maximally-entangled two-qubit states | Bell basis $\lvert\Phi^\pm\rangle,\lvert\Psi^\pm\rangle$, Bell-state circuit, Bell measurement, correlations |
| 2.2 | The no-cloning theorem | Prove you cannot copy an unknown qubit, and see why it matters | linearity of gates, no-cloning proof, no-broadcasting, why it doesn't forbid teleportation |
| 2.3 | Quantum teleportation | Move an unknown qubit using one Bell pair and two classical bits | shared entanglement, Bell measurement, classical channel, Pauli corrections, no faster-than-light signaling |
| 2.4 | Superdense coding | Send two classical bits by transmitting one qubit | encoding by Pauli gates, one shared Bell pair, decoding by Bell measurement, teleportation's dual |

**Boss problem 2:** Alice holds an unknown qubit $\alpha\lvert0\rangle+\beta\lvert1\rangle$ and shares a $\lvert\Phi^+\rangle$ pair with Bob. Run teleportation symbolically: give the three-qubit state before Alice measures, list the four Bell-measurement outcomes with the state Bob is left holding, and the correction Bob applies in each case. Confirm Bob always recovers $\alpha\lvert0\rangle+\beta\lvert1\rangle$.

### Module 3: Quantum algorithms — oracles to Grover

The first proofs that quantum beats classical, built on one trick (phase kickback) and one geometric idea (rotating amplitude toward the answer).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Oracles, reversibility, and phase kickback | Encode a function as a unitary and turn its output into a phase | reversible computation, oracle $U_f$, ancilla in $\lvert-\rangle$, phase kickback, query complexity |
| 3.2 | Deutsch–Jozsa | Decide constant-vs-balanced in one query instead of exponentially many | Deutsch's problem, uniform superposition, interference, exact one-query separation |
| 3.3 | Bernstein–Vazirani | Recover a hidden bit-string in a single query | hidden linear function, dot-product oracle, Hadamard sandwich, one-shot readout |
| 3.4 | Simon's algorithm | Find a hidden XOR-period with exponential speedup | hidden-subgroup flavor, period $s$, sampling linear constraints, classical post-processing, precursor to Shor |
| 3.5 | Grover's search | Search an unstructured list of $N$ in $O(\sqrt N)$ steps | oracle marking, diffusion operator, amplitude amplification, geometric rotation, optimal iteration count |

**Boss problem 3:** For Grover's search over $N=4$ items ($n=2$ qubits) with a single marked item, write the oracle and diffusion operators, apply exactly one Grover iteration to the uniform superposition, and show the marked item is found with probability 1. Then state the optimal iteration count for general $N$ and why over-iterating hurts.

### Module 4: The QFT, Shor, and the landscape

The quantum Fourier transform is the engine; phase estimation is the instrument; Shor is what they build. Close with a taste of error correction and where all this sits in complexity theory.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The quantum Fourier transform | Build the QFT circuit and see why it's exponentially cheaper than the DFT | discrete Fourier transform, QFT as a unitary, controlled-phase rotations, $O(n^2)$ gates, bit-reversal |
| 4.2 | Quantum phase estimation | Read the eigenphase of a unitary into a register of qubits | eigenphase, controlled-$U^{2^k}$, inverse QFT, precision vs qubit count, success probability |
| 4.3 | Order-finding and the period-finding core | Turn a modular period into a phase you can estimate | modular exponentiation, order $r$ of $a$ mod $N$, eigenstates of the shift, continued fractions |
| 4.4 | Shor's factoring algorithm | Assemble factoring from a classical reduction plus order-finding | factoring → order-finding reduction, gcd extraction, RSA relevance, resource count |
| 4.5 | Quantum error correction: a taste | Detect and fix a single qubit error without measuring the data | bit-flip and phase-flip codes, syndrome measurement, discretization of errors, threshold idea (named) |
| 4.6 | Complexity, NISQ, and variational algorithms | Place quantum computing in the complexity map and survey what runs today | BQP and its neighbors, oracle separations vs proven speedups, NISQ constraints, VQE, QAOA, variational loop |

**Boss problem 4:** Factor $N=15$ with Shor's algorithm using base $a=7$. Find the order $r$ of $7\bmod 15$ by hand, check it is even and that $7^{r/2}\not\equiv -1$, then extract the nontrivial factors via $\gcd(7^{r/2}\pm1,\,15)$. State which step is the quantum one and why it is the bottleneck for a classical computer.

## Sources of truth

- Nielsen & Chuang, *Quantum Computation and Quantum Information* (primary; notation, circuit conventions, scope, and problem style — the field's standard text)
- Kaye, Laflamme & Mosca, *An Introduction to Quantum Computing* (algorithm derivations at a gentler pace, especially the hidden-subgroup thread from Simon to Shor)
- Mermin, *Quantum Computer Science* (crisp, computer-scientist framing of qubits, gates, and protocols)
- Preskill, *Lecture Notes on Quantum Computation* (Caltech Ph219) for error correction and the complexity/NISQ landscape
