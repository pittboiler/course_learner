# Quantum Computing — Syllabus

> Computer Science · Tier 2 · ~34 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [quantum-mechanics](../quantum-mechanics/syllabus.md) · Roadmap id: `quantum-computing`

## Goal

Learn quantum computing as **unitary linear algebra with a measurement at the end**: qubits are unit vectors, gates are unitary matrices, and an algorithm is a circuit that sculpts amplitudes so the answer is likely when you look. Start from the single qubit and the Bloch sphere, build gates, measurement, universality, and multi-qubit entanglement, then spend entanglement as a resource (teleportation, superdense coding, the CHSH game) and run the canonical algorithms — Deutsch–Jozsa, Bernstein–Vazirani, Simon, Grover with its proof of optimality, and Shor via the quantum Fourier transform and phase estimation, all seen as one hidden-subgroup idea. Then face the reason a real machine is hard: noise as a quantum channel, error correction from the three-qubit code up through stabilizer codes and the threshold theorem, and the resource counts that follow. Close with what actually runs — Hamiltonian simulation, sampling experiments, variational algorithms, and the dequantization results that killed several advertised speedups. You will be able to hand-simulate small circuits, read and design them, prove why an algorithm beats every classical one, compute a syndrome table, and price a real computation in qubits and gates. Deliberately skipped: the device physics of qubit hardware (superconducting, trapped-ion, photonic platforms are named and compared, never derived) and the full machinery of fault-tolerant compilation. This is a tier-2 course — it assumes fluency with `linalg-refresher` (tensor products, unitary and Hermitian operators, eigenvalues, inner products) and the state/measurement framing of `quantum-mechanics`; it re-derives nothing about Hilbert spaces you have already seen.

> **Revision note (2026-09-11).** Deepened from 20 lessons to 34 at Jacob's request. Added: universality and gate synthesis (1.6), density matrices and the partial trace in computing form (2.2), the CHSH game (2.6), amplitude amplification and Grover's optimality (3.6), the hidden subgroup problem (4.5), a full noise-and-error-correction module (5.1–5.5, expanding what was a single "taste" lesson), and a landscape module covering Hamiltonian simulation, sampling advantage, variational algorithms, quantum linear algebra, and resource estimation (6.1–6.6). The original 20 lessons kept their content and goals; module 2 was reordered so the partial trace arrives before teleportation needs it.

## Scope and ownership

Three built courses touch this material. The split is deliberate and repeated on the [reference card](reference.md).

| Topic | Owned by | This course's angle |
|---|---|---|
| Tensor products, the entanglement test, the singlet, Bell's inequality in spin language, the density matrix and von Neumann entropy | [`quantum-mechanics` 5.2–5.4](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) | used without re-derivation. [2.2](lessons/02-02-density-matrices-and-the-partial-trace.md) re-states $\rho$ as **noise bookkeeping for circuits**; [2.6](lessons/02-06-the-chsh-game-and-device-independence.md) re-casts Bell as a **game with a payoff and an optimal strategy**, which is the computer-science form |
| BB84, quantum key distribution, single photons as flying qubits, physical qubit platforms | [`photonics-quantum-optics` 4.5](../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md) | QKD is named, not taught. [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md) compares platforms only through the numbers that set a circuit's depth budget |
| RSA, Diffie–Hellman, discrete log, post-quantum migration | [`cryptography` 3.2–3.3, 4.5](../cryptography/lessons/04-05-post-quantum-cryptography.md) | that course owns the schemes and the migration argument; [4.4](lessons/04-04-shors-factoring-algorithm.md) owns the attack and [6.6](lessons/06-06-resource-estimation-and-the-state-of-the-field.md) owns its true cost |
| Asymptotics, reductions, P vs NP, the DFT and FFT | [`algorithms`](../algorithms/syllabus.md), [`computational-complexity`](../computational-complexity/syllabus.md), [`fourier-analysis`](../fourier-analysis/syllabus.md) | assumed; [6.1](lessons/06-01-bqp-and-the-complexity-landscape.md) places BQP among classes those courses define |

## Dangerous Checklist

When you finish, you can:

- [ ] Write any single-qubit state as a point on the Bloch sphere and read off its measurement probabilities in any basis
- [ ] Apply single- and multi-qubit gates as matrices and simulate a small circuit by hand to its output state
- [ ] Decide whether a given gate set is universal, and count the cost of synthesising an arbitrary rotation from it
- [ ] Construct the four Bell states and diagnose whether a two-qubit state is entangled or a product
- [ ] Take a partial trace, compute a purity, and use the reduced state to prove no-signaling
- [ ] Prove the no-cloning theorem and explain what it does and does not forbid
- [ ] Walk through quantum teleportation and superdense coding, tracking every measurement outcome and correction
- [ ] Compute the classical and quantum optimal win rates of the CHSH game and say what a violation proves
- [ ] Explain phase kickback and use it to build an oracle-based algorithm
- [ ] Run Deutsch–Jozsa, Bernstein–Vazirani, and Simon, and state the exact speedup each achieves
- [ ] Execute Grover's search, count the optimal number of iterations, explain the quadratic speedup geometrically, and sketch why no quantum algorithm beats it
- [ ] Build the quantum Fourier transform circuit and use phase estimation to read an eigenphase to a stated precision
- [ ] Reduce factoring to order-finding and assemble Shor's algorithm end-to-end on a small number
- [ ] State the hidden subgroup problem and classify which known algorithms are instances of it
- [ ] Write a noise process as a Kraus decomposition and compute what it does to a state
- [ ] Build a syndrome table for a small code, correct a single-qubit error, and explain error discretization
- [ ] Read a stabilizer group, identify a code's distance, and state what the threshold theorem promises
- [ ] Place quantum computing in the complexity landscape (BQP) and separate proven speedups from oracle ones
- [ ] Price a quantum computation in qubits, gates, and wall-clock time, and judge a claimed speedup honestly

## Modules

### Module 1: Qubits, gates, and circuits

The whole machine, one piece at a time: the qubit, the gates that move it, the measurement that reads it, the tensor product that lets qubits interact, and the proof that a handful of gates gets you everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The qubit and the Bloch sphere | Represent a single qubit as a state vector and a point on the sphere | superposition, computational basis, global vs relative phase, Bloch sphere, $\lvert\psi\rangle=\cos\tfrac\theta2\lvert0\rangle+e^{i\phi}\sin\tfrac\theta2\lvert1\rangle$ |
| 1.2 | Single-qubit gates | Apply unitary gates as matrices and as Bloch-sphere rotations | unitarity, Pauli $X,Y,Z$, Hadamard, phase gates $S,T$, rotations, reversibility |
| 1.3 | Measurement and the Born rule for qubits | Extract probabilities and post-measurement states, in any basis | Born rule, projective measurement, measurement basis, $Z$- vs $X$-basis, expectation values |
| 1.4 | Two qubits, tensor products, and entanglement | Build composite states and tell product from entangled | tensor product $\otimes$, computational basis of $n$ qubits, product vs entangled state, partial measurement |
| 1.5 | Multi-qubit gates and quantum circuits | Read and simulate circuits with controlled and multi-qubit gates | CNOT, controlled-$U$, SWAP, Toffoli, circuit diagrams, gate composition as matrix products |
| 1.6 | Universal gate sets and circuit synthesis | Decide what a gate set can reach and what an arbitrary unitary costs | universality, $\{H,T,\mathrm{CNOT}\}$, Clifford+T, Solovay–Kitaev, $4^n$ parameter counting, why exact universality is impossible |

**Boss problem 1:** Take the circuit "Hadamard on qubit 0, then CNOT with qubit 0 controlling qubit 1," starting from $\lvert00\rangle$. Compute the output state as a vector, identify it, and give the joint measurement statistics. Then measure only qubit 0 and state qubit 1's resulting state for each outcome. Finally, count how many $\{H,T,\mathrm{CNOT}\}$ gates a generic two-qubit unitary needs to $10^{-3}$ accuracy, and say which part of that count is the Solovay–Kitaev overhead.

### Module 2: Entanglement as a resource

Entanglement is not a curiosity but a currency. This module mints it (Bell states), learns the bookkeeping for spending part of it (density matrices), fences off what it cannot do (no-cloning, no-signaling), spends it (teleportation, superdense coding), and then proves it is real (CHSH).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Bell states and generating entanglement | Produce and identify the four maximally-entangled two-qubit states | Bell basis $\lvert\Phi^\pm\rangle,\lvert\Psi^\pm\rangle$, Bell-state circuit, Bell measurement, perfect correlations |
| 2.2 | Density matrices and the partial trace | Describe half of an entangled pair, and any state you are ignorant about | $\rho$, pure vs mixed, purity $\mathrm{tr}\,\rho^2$, partial trace, reduced state, Bloch ball, maximally mixed state |
| 2.3 | The no-cloning theorem | Prove you cannot copy an unknown qubit, and see why it matters | linearity of gates, no-cloning proof, no-broadcasting, no-signaling, why it doesn't forbid teleportation |
| 2.4 | Quantum teleportation | Move an unknown qubit using one Bell pair and two classical bits | shared entanglement, Bell measurement, classical channel, Pauli corrections, no faster-than-light signaling |
| 2.5 | Superdense coding | Send two classical bits by transmitting one qubit | encoding by Pauli gates, one shared Bell pair, decoding by Bell measurement, teleportation's dual, Holevo ceiling |
| 2.6 | The CHSH game and device-independence | Compute the classical and quantum win rates and say what the gap proves | CHSH correlator, local-hidden-variable bound 0.75, quantum bound $\cos^2(\pi/8)$, Tsirelson $2\sqrt2$, self-testing, loopholes |

**Boss problem 2:** Alice holds an unknown qubit $\alpha\lvert0\rangle+\beta\lvert1\rangle$ and shares a $\lvert\Phi^+\rangle$ pair with Bob. Run teleportation symbolically: give the three-qubit state before Alice measures, list the four Bell-measurement outcomes with the state Bob is left holding, and the correction Bob applies in each case. Confirm Bob always recovers $\alpha\lvert0\rangle+\beta\lvert1\rangle$. Then compute Bob's reduced density matrix *before* he hears from Alice and use it to explain why the protocol sends no information faster than light.

### Module 3: Oracles, interference, and search

The first proofs that quantum beats classical, built on one trick (phase kickback) and one geometric idea (rotating amplitude toward the answer) — ending with the theorem that says the rotation cannot be sped up.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Oracles, reversibility, and phase kickback | Encode a function as a unitary and turn its output into a phase | reversible computation, oracle $U_f$, ancilla in $\lvert-\rangle$, phase kickback, query complexity, uncomputation |
| 3.2 | Deutsch–Jozsa | Decide constant-vs-balanced in one query instead of exponentially many | Deutsch's problem, uniform superposition, interference, exact one-query separation |
| 3.3 | Bernstein–Vazirani | Recover a hidden bit-string in a single query | hidden linear function, dot-product oracle, Hadamard sandwich, one-shot readout |
| 3.4 | Simon's algorithm | Find a hidden XOR-period with exponential speedup | hidden-subgroup flavor, period $s$, sampling linear constraints, classical post-processing, precursor to Shor |
| 3.5 | Grover's search | Search an unstructured list of $N$ in $O(\sqrt N)$ steps | oracle marking, diffusion operator, amplitude amplification, geometric rotation, optimal iteration count, souffle problem |
| 3.6 | Amplitude amplification, counting, and optimality | Generalize Grover, count solutions, and prove $\sqrt N$ cannot be beaten | amplitude amplification, multiple marked items, quantum counting via phase estimation, BBBV hybrid argument, why $\mathrm{NP}\not\subseteq\mathrm{BQP}$ by brute force |

**Boss problem 3:** For Grover's search over $N=4$ items ($n=2$ qubits) with a single marked item, write the oracle and diffusion operators, apply exactly one Grover iteration to the uniform superposition, and show the marked item is found with probability 1. Then state the optimal iteration count for general $N$ and $M$ marked items, show what happens if you over-iterate, and give the hybrid-argument reason no oracle algorithm does better than $\Theta(\sqrt N)$.

### Module 4: Fourier, phase, and factoring

The quantum Fourier transform is the engine; phase estimation is the instrument; Shor is what they build. Then the frame that shows all of Module 3's and 4's algorithms were one algorithm all along.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The quantum Fourier transform | Build the QFT circuit and see why it's exponentially cheaper than the DFT | discrete Fourier transform, QFT as a unitary, controlled-phase rotations, $O(n^2)$ gates, bit-reversal, why it is not a faster FFT |
| 4.2 | Quantum phase estimation | Read the eigenphase of a unitary into a register of qubits | eigenphase, controlled-$U^{2^k}$, inverse QFT, precision vs qubit count, success probability, the $2+\lceil\log(1/2\epsilon)\rceil$ rule |
| 4.3 | Order-finding and the period-finding core | Turn a modular period into a phase you can estimate | modular exponentiation, order $r$ of $a$ mod $N$, eigenstates of the shift, continued fractions |
| 4.4 | Shor's factoring algorithm | Assemble factoring from a classical reduction plus order-finding | factoring → order-finding reduction, gcd extraction, success probability, RSA relevance, gate count |
| 4.5 | The hidden subgroup problem | State the frame that contains Bernstein–Vazirani, Simon, and Shor | group $G$, hidden subgroup $H$, coset states, abelian HSP is easy, non-abelian is open, graph isomorphism and lattices resist |

**Boss problem 4:** Factor $N=15$ with Shor's algorithm using base $a=7$. Find the order $r$ of $7\bmod 15$ by hand, check it is even and that $7^{r/2}\not\equiv -1$, then extract the nontrivial factors via $\gcd(7^{r/2}\pm1,\,15)$. State which step is the quantum one and why it is the bottleneck for a classical computer. Then show that order-finding mod 15 is an instance of the hidden subgroup problem by naming $G$, $H$, and the hiding function.

### Module 5: Noise and quantum error correction

Everything so far assumed perfect unitaries. Real qubits decohere in microseconds, so this module builds the theory of what goes wrong and the machinery that fixes it — the single largest reason useful quantum computers do not yet exist.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Quantum channels and decoherence | Write any noise process as a Kraus sum and compute its effect | CPTP map, Kraus operators, bit-flip/phase-flip/depolarizing channels, amplitude damping, $T_1$ and $T_2$, fidelity |
| 5.2 | The three-qubit codes | Detect and correct one bit-flip or one phase-flip without measuring the data | repetition encoding, syndrome measurement with ancillas, code space, majority vote, $X$-basis conjugation |
| 5.3 | The Shor code and error discretization | Correct an *arbitrary* single-qubit error with nine qubits | concatenation, the discretization theorem, why correcting $\{X,Y,Z\}$ correcting everything, Knill–Laflamme conditions |
| 5.4 | Stabilizer codes and the CSS construction | Read a code off its stabilizer group and get its distance | Pauli group, stabilizer group, logical operators, $[[n,k,d]]$ notation, Steane code, CSS from classical codes |
| 5.5 | Fault tolerance, the threshold, and the surface code | State what the threshold theorem promises and what it costs | error propagation, transversal gates, Eastin–Knill, concatenation overhead, threshold theorem, surface code, magic-state distillation |

**Boss problem 5:** A single qubit in the three-qubit bit-flip code suffers the error $E = \cos\epsilon\, I + i\sin\epsilon\, X_2$ (a small over-rotation on qubit 2, not a full flip). Expand the encoded state, compute the syndrome-measurement probabilities, and show that the correction restores the logical state *exactly* in both branches — then state in one sentence what this reveals about why digital error correction works on analog errors. Finally, give the $[[n,k,d]]$ parameters of the Steane code, list its six stabilizer generators, and say how many arbitrary errors it corrects.

### Module 6: Complexity and the real machine

Where quantum computing actually sits — the complexity class, the four things people run today, the results that retracted advertised speedups, and the arithmetic of what a useful machine will cost.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | BQP and the complexity landscape | Place quantum computing among the classical classes, precisely | BQP definition, $\mathrm{BPP}\subseteq\mathrm{BQP}\subseteq\mathrm{PSPACE}$, BQP vs NP is open, oracle separations vs proven speedups, QMA |
| 6.2 | Hamiltonian simulation | Simulate a quantum system — the application Feynman actually proposed | $e^{-iHt}$, local Hamiltonians, Trotter–Suzuki decomposition, error scaling, qubitization named, chemistry as the killer app |
| 6.3 | Sampling, advantage, and verification | Understand what the "quantum supremacy" experiments did and did not show | random circuit sampling, BosonSampling, cross-entropy benchmarking, spoofing by tensor networks, sampling ≠ useful |
| 6.4 | Variational algorithms: VQE and QAOA | Run a hybrid quantum-classical loop and see where it breaks | ansatz, parameter shift, Rayleigh–Ritz, QAOA on MaxCut, barren plateaus, measurement-shot cost |
| 6.5 | Quantum linear algebra and dequantization | Read HHL honestly, and learn the caveats that ate its speedup | HHL, condition number $\kappa$, state preparation, readout problem, QRAM assumption, Tang's dequantization |
| 6.6 | Resource estimation and the state of the field | Price a real computation and judge a claimed speedup | logical vs physical qubits, code distance from error rate, $T$-count, magic-state factories, Shor-on-RSA-2048 estimate, platform comparison |

**Boss problem 6:** A vendor claims their 1,000-physical-qubit machine at a two-qubit error rate of $10^{-3}$ will break RSA-2048 "within five years." Using the surface-code scaling from 5.5 and the Shor gate count from 4.4, estimate the logical qubits required, the code distance needed for a computation of that depth, the resulting physical-qubit count, and the wall-clock time at a one-microsecond surface-code cycle. State the two assumptions your estimate is most sensitive to, and give the honest verdict on the claim.

## Sources of truth

- Nielsen & Chuang, *Quantum Computation and Quantum Information* (primary; notation, circuit conventions, scope, and problem style — the field's standard text)
- Kaye, Laflamme & Mosca, *An Introduction to Quantum Computing* (algorithm derivations at a gentler pace, especially the hidden-subgroup thread from Simon to Shor)
- Mermin, *Quantum Computer Science* (crisp, computer-scientist framing of qubits, gates, and protocols)
- Preskill, *Lecture Notes on Quantum Computation* (Caltech Ph219) for channels, error correction, fault tolerance, and the complexity landscape
- Gottesman, *Surviving as a Quantum Computer in a Classical World* for the stabilizer formalism and code constructions
- Aaronson, *Quantum Computing Since Democritus* and the *Shtetl-Optimized* advantage-claim postmortems, for the register of Module 6
