# Quantum Computing · Lesson 6.1: BQP and the complexity landscape

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [3.6 (amplitude amplification and optimality)](03-06-amplitude-amplification-counting-and-optimality.md), [4.5 (the hidden subgroup problem)](04-05-the-hidden-subgroup-problem.md), [`computational-complexity`](../../computational-complexity/syllabus.md) · Unlocks: [6.3 (sampling and advantage)](06-03-sampling-advantage-and-verification.md)

## Why this matters

You now know several quantum algorithms and their costs. This lesson asks the structural question: **what is the class of problems a quantum computer solves efficiently, and how does it sit among the classical classes?**

The answer is more modest than the popular account, and knowing the precise shape of it is the most useful thing this module teaches. Three facts to carry:

- **BQP contains BPP.** Quantum computers are at least as powerful as randomized classical ones, trivially — they can simulate them.
- **BQP is contained in PSPACE.** So quantum computing does not break the classical hierarchy open; a classical machine with polynomial *memory* can do anything a quantum computer can, just slowly.
- **BQP and NP are incomparable as far as anyone can prove.** Factoring is in BQP and is not believed NP-complete. Nobody has shown NP $\subseteq$ BQP, and [3.6](03-06-amplitude-amplification-counting-and-optimality.md)'s lower bound gives positive reason to doubt it.

The last one matters because "quantum computers solve NP-complete problems" is the single most common false claim about the field, and you now have the tools to see exactly why it is false in the only setting where anything is provable.

## The idea

A complexity class is a set of problems, defined by what resources solve them. The classical ones you need:

- **P**: solvable in polynomial time deterministically.
- **BPP**: solvable in polynomial time with a coin, error at most 1/3. This is the realistic notion of "efficiently solvable" classically, and it is widely believed that $\mathrm{P} = \mathrm{BPP}$.
- **NP**: solutions are *verifiable* in polynomial time. Includes 3-SAT and every NP-complete problem.
- **PSPACE**: solvable with polynomial memory, any amount of time.

**BQP** is the quantum analogue of BPP: polynomial-size quantum circuit, error at most 1/3, answer read from one measured bit. The error bound is not a weakness — repeating and taking a majority drives the error to $2^{-k}$ in $k$ repetitions, so 1/3 versus 0.01 is a constant factor.

Now the placements, and why each one holds.

**BPP $\subseteq$ BQP** because a quantum computer can do everything a randomized one does: Hadamards make coin flips, Toffolis make classical logic ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).

**BQP $\subseteq$ PSPACE** because you can compute any output amplitude by summing over computational paths, one at a time, reusing memory. The sum has exponentially many terms — hence exponential time — but each term needs only polynomial space. So a quantum computer's advantage is in *time*, never in *space*.

**BQP versus NP: nothing is known.** Factoring lives in BQP, and factoring is in $\mathrm{NP}\cap\mathrm{co\text{-}NP}$, which makes it unlikely to be NP-complete. Meanwhile the strongest relevant evidence runs the other way: relative to a random oracle, NP is *not* contained in BQP, because Grover's $\sqrt N$ is optimal ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)). Brute-force search over certificates takes $2^{n/2}$ quantum queries, which is still exponential.

So the honest picture is: quantum computers are exponentially faster at a **narrow, structured family** of problems — the abelian hidden subgroup problems of [4.5](04-05-the-hidden-subgroup-problem.md), plus Hamiltonian simulation ([6.2](06-02-hamiltonian-simulation.md)) — and quadratically faster at unstructured search. That is a real and important advantage. It is not a general-purpose exponential speedup.

## The formal version

> **Definition (BQP).** A language $L$ is in BQP if there is a polynomial-time classical algorithm producing, for each input length $n$, a quantum circuit $C_n$ of size $\mathrm{poly}(n)$ such that for every input $x$ of length $n$: if $x\in L$ then $C_n$ accepts with probability $\ge2/3$, and if $x\notin L$ then it accepts with probability $\le1/3$.

In words: a uniform family of polynomial circuits with bounded error. The "uniform" part matters — the circuit must be *describable* efficiently, which rules out smuggling an exponentially hard computation into the circuit's design.

> **Amplification.** The gap between 1/3 and 2/3 can be widened to $1 - 2^{-k}$ by running the circuit $O(k)$ times and taking a majority, by the Chernoff bound. So the constants in the definition are arbitrary.

> **Known inclusions.**
> $$\mathrm{P}\subseteq\mathrm{BPP}\subseteq\mathrm{BQP}\subseteq\mathrm{PP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXP}.$$
> **None** of these inclusions is known to be strict. In particular $\mathrm{BQP} = \mathrm{BPP}$ is not ruled out — it would imply an efficient classical factoring algorithm, which is why nobody believes it, but belief is not proof.

> **What is open.** Whether $\mathrm{NP}\subseteq\mathrm{BQP}$; whether $\mathrm{BQP}\subseteq\mathrm{NP}$; whether $\mathrm{BQP}\ne\mathrm{BPP}$; and $\mathrm{P}$ versus $\mathrm{NP}$, on which all of it ultimately leans.

The card summarizes all of this under [complexity placements](../reference.md#complexity-placements). Since unconditional separations are out of reach, the field proves **oracle separations** instead — statements of the form "relative to some black box, the classes differ." These are genuine evidence and genuine limitations:

| oracle result | meaning |
|---|---|
| Simon's problem ([3.4](03-04-simons-algorithm.md)) | $\mathrm{BQP}\not\subseteq\mathrm{BPP}$ relative to an oracle |
| BBBV lower bound ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)) | $\mathrm{NP}\not\subseteq\mathrm{BQP}$ relative to an oracle |
| Raz–Tal (2018), *Forrelation* | $\mathrm{BQP}\not\subseteq\mathrm{PH}$ relative to an oracle |

In words: in the black-box world, quantum beats randomized classical, classical search cannot be beaten by more than a square root, and quantum computing escapes the entire polynomial hierarchy. The caveat is the one from [3.3](03-03-bernstein-vazirani.md) P3: **an oracle separation is not a separation**, because real problems come as circuits whose structure a classical algorithm might exploit.

One more class, because it is the quantum NP and it recurs in chemistry:

> **QMA.** The quantum analogue of NP: problems whose "yes" instances have a quantum state (a witness) that a polynomial quantum verifier accepts with high probability. The canonical QMA-complete problem is the **local Hamiltonian problem** — estimating the ground-state energy of a sum of local terms.

In words: finding ground states is as hard for quantum computers as 3-SAT is for classical ones. That is a hard ceiling on [6.2](06-02-hamiltonian-simulation.md) and [6.4](06-04-variational-algorithms-vqe-and-qaoa.md): **quantum computers do not solve chemistry in general**, only instances with enough structure or a good enough starting guess.

## Picture

![A diagram of nested ellipses. The outermost, labelled PSPACE, contains PP, which contains BQP in red, which contains BPP in blue, which contains P in green. A separate dashed ellipse labelled NP overlaps BQP and PP but is contained in neither. A red dot inside the BQP–NP overlap is labelled factoring, and an orange dot inside NP but outside BQP is labelled 3-SAT. A caption states that BPP is inside BQP inside PP inside PSPACE, with all inclusions unproven to be strict. A side panel lists what is known — BQP contains factoring and discrete log — what is open — whether NP is inside BQP, whether BQP is inside NP, and whether BQP differs from BPP — and what holds relative to an oracle: BQP is not inside NP by Simon, NP is not inside BQP by BBBV, and BQP is not inside the polynomial hierarchy by Raz and Tal.](assets/06-01-fig1.svg)

Two features of the diagram are the content. **BQP is drawn inside PSPACE**, not off to the side — quantum computing is a speedup, not a new kind of computability. And **NP's boundary crosses BQP's**, with factoring in the overlap and 3-SAT outside: the two classes are believed to be genuinely incomparable, each containing problems the other does not.

## Worked examples

**Example 1 — locate every algorithm from this course.**

| algorithm | problem | classical best | quantum | speedup |
|---|---|---|---|---|
| Deutsch–Jozsa ([3.2](03-02-deutsch-jozsa.md)) | promise, oracle | $O(1)$ randomized | 1 query | none, in BPP |
| Bernstein–Vazirani ([3.3](03-03-bernstein-vazirani.md)) | hidden linear function | $n$ queries | 1 query | factor of $n$ |
| Simon ([3.4](03-04-simons-algorithm.md)) | hidden XOR period, oracle | $\Omega(2^{n/2})$ | $O(n)$ | **exponential, oracle only** |
| Grover ([3.5](03-05-grovers-search.md)) | unstructured search | $\Theta(N)$ | $\Theta(\sqrt N)$ | quadratic, provably optimal |
| Shor ([4.4](04-04-shors-factoring-algorithm.md)) | factoring | $L_N[1/3]$ subexponential | $O(n^3)$ | **exponential, real problem** |
| Hamiltonian simulation ([6.2](06-02-hamiltonian-simulation.md)) | simulate $e^{-iHt}$ | exponential in general | polynomial | **exponential, real problem** |

Only two rows carry an exponential speedup on a problem someone wants solved, and they are Shor's family (abelian hidden subgroup, [4.5](04-05-the-hidden-subgroup-problem.md)) and Hamiltonian simulation. **That is the entire evidence base for exponential quantum advantage.** It is strong evidence — factoring is not a toy and simulation is the reason the field was proposed — but it is a narrow base, and any claim of a new exponential speedup should be checked against it.

Note the Deutsch–Jozsa row. Its exponential separation is against *deterministic* classical computing, and since BPP is the right notion of classical efficiency, the problem is in BPP and the separation vanishes ([3.2](03-02-deutsch-jozsa.md) Example 2). This is why the class definitions matter: they encode which comparisons are meaningful.

**Example 2 — why NP-complete problems are not expected to fall.**

*The wrong argument for optimism.* "A quantum computer explores all $2^n$ assignments in superposition, so it can check them all at once." The amplitudes do all exist, but you get $n$ bits out of a measurement ([1.3](01-03-measurement-and-the-born-rule.md)), and getting the *right* bits out requires interference that concentrates amplitude on the answer. For an unstructured problem there is nothing to interfere with.

*The theorem.* [3.6](03-06-amplitude-amplification-counting-and-optimality.md) proves that any algorithm accessing the input only through an oracle needs $\Omega(\sqrt N)$ queries. Applied to searching $2^n$ certificates:

$$\text{quantum brute force} = \Theta\!\left(2^{n/2}\right),$$

still exponential. Concretely, for a 3-SAT instance on 100 variables:

| approach | operations |
|---|---|
| classical brute force | $2^{100} \approx 1.3\times10^{30}$ |
| Grover | $2^{50}\approx 1.1\times10^{15}$ |
| best classical SAT solver (heuristic) | routinely solves many 100-variable instances in seconds |

Grover's $10^{15}$ is a real improvement over $10^{30}$ and is still far beyond any machine — and, tellingly, **modern classical SAT solvers already beat both**, because they exploit structure that neither brute force uses. That is the practical shape of the situation: structure beats brute force, quantum or classical, and quantum computers have no monopoly on exploiting structure.

*What would have to be true for NP $\subseteq$ BQP.* Someone would need a quantum algorithm exploiting the *structure* of an NP-complete problem, the way Shor exploits the group structure of modular arithmetic. Nobody has found such structure in forty years of trying, and the oracle result says it cannot come from search. **It remains formally open**, which is the honest statement, and it is also true that essentially nobody in the field expects it.

Worth adding for calibration: even the quadratic speedup may not survive practice. A fault-tolerant quantum gate is perhaps $10^{6}$ times slower than a classical one ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)), so Grover needs $\sqrt N > 10^6$, i.e. $N > 10^{12}$, merely to break even on wall clock — before the error-correction overhead.

## Watch out

- You might think BQP $\subseteq$ PSPACE means quantum computers are useless. It means they offer no advantage in *memory* and cannot compute anything uncomputable. The advantage is exponential in **time**, which is the resource that matters.
- You might think an oracle separation settles a question. It does not: oracle results can point in opposite directions for the same pair of classes, and every known oracle technique fails to resolve P versus NP. Treat them as strong hints about what *techniques* can prove, not as facts about real problems ([3.3](03-03-bernstein-vazirani.md) P3).
- You might think factoring being in BQP suggests NP-complete problems are next. Factoring sits in $\mathrm{NP}\cap\mathrm{co\text{-}NP}$, so if it were NP-complete then NP would equal co-NP, which almost nobody believes. Factoring is an unusually structured problem, and its fall is evidence about *structured* problems only.
- You might think "quantum computers can solve any problem exponentially faster" is a defensible simplification. It is false in a way that matters: the known exponential speedups are the abelian hidden subgroup family and Hamiltonian simulation, full stop, and treating the claim loosely is how advertised speedups get dequantized ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)).

## One-liner

> BQP sits between BPP and PSPACE, crosses NP without containing it, and its proven exponential wins are two: the abelian hidden subgroup problems and simulating quantum systems.

## Problems

**P1 (🟢)** State the definition of BQP, then explain in two or three sentences why the error bound of 1/3 in the definition is not a real restriction. Compute how many repetitions are needed to drive the error below $10^{-6}$, using the fact that a majority vote over $k$ runs with per-run error 1/3 fails with probability roughly $e^{-k/18}$.

**P2 (🟡)** Explain why $\mathrm{BQP}\subseteq\mathrm{PSPACE}$, using the path-sum idea: the amplitude of an output is a sum over exponentially many computational paths, each computable in polynomial space. Then state what this implies about whether quantum computers can solve undecidable problems, and what it implies about the space complexity of simulating a quantum computer.

**P3 (🔴, optional)** Assess the claim "a quantum computer will solve NP-complete problems." (a) State what Grover gives for a 3-SAT instance on $n$ variables, and evaluate it at $n = 100$ and $n = 1000$. (b) Using a fault-tolerant logical gate time of 25 µs from [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md), compute the wall-clock time for Grover at $n = 100$ and compare with the age of the universe ($4.4\times10^{17}$ s). (c) State precisely what is and is not known about $\mathrm{NP}\subseteq\mathrm{BQP}$, and explain why the oracle lower bound is evidence rather than proof.

<details>
<summary>Solutions</summary>

**P1** *The definition.* $L\in\mathrm{BQP}$ if there is a classical polynomial-time algorithm that outputs, for each $n$, a quantum circuit $C_n$ of size $\mathrm{poly}(n)$, such that on inputs $x$ with $\lvert x\rvert = n$: $x\in L \Rightarrow P(\text{accept}) \ge 2/3$, and $x\notin L\Rightarrow P(\text{accept})\le1/3$.

*Why 1/3 is not a restriction.* Run the circuit $k$ independent times and output the majority. Each run is a biased coin with bias at least $1/6$ away from $1/2$, so by the Chernoff bound the majority is wrong with probability exponentially small in $k$. Any constant gap between the accept and reject probabilities can therefore be amplified to $1 - 2^{-\Omega(k)}$ at a cost of a factor $k$ in runtime — and a polynomial times a constant is still a polynomial, so the class is unchanged.

*The repetition count.* Solve $e^{-k/18} < 10^{-6}$:

$$\frac{k}{18} > 6\ln 10 = 13.8 \implies k > 249,$$

so about **250 repetitions**. That is a constant factor, invisible to the class definition, and in practice a few dozen suffice since the real bias is usually far better than the worst case the definition allows.

**P2** *The path sum.* A quantum circuit of $G$ gates acting on $n$ qubits has output amplitude

$$\langle y\rvert C\lvert0^n\rangle = \sum_{\text{paths}} \prod_{t=1}^{G}\langle x_t\rvert U_t\lvert x_{t-1}\rangle,$$

where a "path" is a choice of computational basis state $x_t$ after each gate. There are at most $(2^n)^G$ paths — exponentially many — but each path's contribution is a product of $G$ matrix entries, each computable from the gate's description in polynomial time and space.

So a classical machine can enumerate paths one at a time, accumulate a running total, and **reuse the same polynomial-size workspace** for every path. The space needed is: the path counter ($nG$ bits), the running sum (polynomial precision suffices, since we only need the answer to within a constant), and scratch for one gate entry. All polynomial.

Time is exponential, but PSPACE does not care about time.

*What it implies about undecidability.* Everything in PSPACE is decidable, so **a quantum computer cannot solve any undecidable problem** — not the halting problem, not anything. Quantum computing changes complexity, never computability. (The same is true of any physically realizable model, which is the Church–Turing thesis in its ordinary form.)

*What it implies about simulation space.* Simulating a quantum circuit needs only **polynomial memory**, not the $2^n$ amplitudes of the naive state-vector method. This is not merely theoretical: path-sum-style and tensor-network simulators trade time for memory and are exactly what let classical machines attack the quantum-advantage experiments of [6.3](06-03-sampling-advantage-and-verification.md). The naive $2^n$-amplitude simulation is the worst way to do it.

**P3**

(a) A 3-SAT instance on $n$ variables has $N = 2^n$ candidate assignments, and checking one is cheap, so Grover applies with the oracle "does this assignment satisfy the formula?" The cost is

$$\Theta\!\left(\sqrt{2^n}\right) = \Theta\!\left(2^{n/2}\right).$$

| $n$ | classical brute force $2^n$ | Grover $2^{n/2}$ |
|---|---|---|
| 100 | $1.3\times10^{30}$ | $1.1\times10^{15}$ |
| 1000 | $1.1\times10^{301}$ | $3.3\times10^{150}$ |

Both still exponential; the exponent is halved and nothing else changes.

(b) At $n = 100$, Grover needs about $\tfrac\pi4\times2^{50} \approx 8.8\times10^{14}$ iterations, each involving at least one oracle call plus the diffusion operator — call it $10^3$ logical gates per iteration for a realistic SAT oracle, so roughly $10^{18}$ logical gates. At 25 µs per logical gate:

$$10^{18}\times 2.5\times10^{-5}\ \text{s} = 2.5\times10^{13}\ \text{s} \approx 8\times10^{5}\ \text{years}.$$

Compared with the age of the universe at $4.4\times10^{17}$ s, this is about $6\times10^{-5}$ of it — so it finishes in under a million years rather than never. Formally an improvement on the classical $2^{100}$; practically not a computation anyone will run. And 3-SAT on 100 variables is **solved in seconds today** by classical solvers exploiting clause structure.

(c) *What is known.* $\mathrm{NP}\subseteq\mathrm{BQP}$ is **open**. No proof either way exists, and a proof of $\mathrm{NP}\subseteq\mathrm{BQP}$ would not immediately collapse anything absurd, so it is not ruled out by known techniques.

*What is known relative to an oracle.* If the only access to the problem is a black box that recognizes solutions, then $\Omega(\sqrt N)$ queries are required ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)), so $\mathrm{NP}\not\subseteq\mathrm{BQP}$ in the oracle world. This is a theorem, not a conjecture.

*Why it is evidence and not proof.* The oracle model assumes the algorithm learns nothing about the problem except by querying it. Real NP-complete instances arrive as **explicit formulas**, whose structure an algorithm can read and exploit — which is exactly how classical SAT solvers beat brute force by enormous margins, and exactly how Shor beats the number field sieve. The oracle bound therefore rules out one *strategy* (search) rather than one *class inclusion*. The gap between the two is the same one flagged in [3.3](03-03-bernstein-vazirani.md) P3, where a circuit-level classical algorithm read the hidden string off the gate list in $O(n)$ time while the oracle bound said $n$ queries were needed.

*The honest summary.* Quantum computers give a provable quadratic speedup on unstructured search and nothing better; no structure has been found in NP-complete problems that a quantum algorithm can exploit; the question is formally open and essentially nobody expects a positive answer. Both halves of that sentence matter — the formal openness keeps you from overclaiming a negative, and the absence of any route keeps you from overclaiming a positive.

</details>

## Connections

- **Backward:** the two-sided evidence is [3.6](03-06-amplitude-amplification-counting-and-optimality.md)'s lower bound and [4.5](04-05-the-hidden-subgroup-problem.md)'s table of solved and open instances. The BPP $\subseteq$ BQP inclusion needs reversible classical computation from [3.1](03-01-oracles-reversibility-and-phase-kickback.md), and the amplification argument is the Chernoff-style concentration of [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md).
- **Forward:** [6.3](06-03-sampling-advantage-and-verification.md) examines the one place a quantum advantage has been claimed experimentally, and finds it is a *sampling* advantage rather than a decision-problem one. [6.5](06-05-quantum-linear-algebra-and-dequantization.md) is a case study in advertised speedups that did not survive contact with this lesson's standards.
- **Sideways:** P, NP, reductions, and NP-completeness are [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md)–[4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md), and the full machinery of classes and hierarchies is [`computational-complexity`](../../computational-complexity/syllabus.md). The local Hamiltonian problem being QMA-complete is the quantum Cook–Levin theorem, and it is the formal reason [6.4](06-04-variational-algorithms-vqe-and-qaoa.md)'s variational methods cannot be expected to work in general.
