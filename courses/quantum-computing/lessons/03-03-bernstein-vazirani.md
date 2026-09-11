# Quantum Computing · Lesson 3.3: Bernstein–Vazirani

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [3.2 (Deutsch–Jozsa)](03-02-deutsch-jozsa.md), [3.1 (oracles and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md) · Unlocks: [3.4 (Simon's algorithm)](03-04-simons-algorithm.md)

## Why this matters

Deutsch–Jozsa extracted **one bit** about $f$ in one query. Bernstein–Vazirani extracts **$n$ bits** in one query, from the identical circuit, and it does so by noticing that the Hadamard transform is not just an averaging device but a genuine Fourier transform: it reads out the *frequency content* of a function.

Three reasons this lesson earns its place despite the algorithm being three lines long.

- It shifts the mental model from "quantum computers cancel unwanted answers" to "**quantum computers read a function's Fourier coefficients**," which is the frame that makes Simon ([3.4](03-04-simons-algorithm.md)) and Shor ([4.4](04-04-shors-factoring-algorithm.md)) look inevitable instead of magical.
- The separation is only $n$ versus 1 — linear, not exponential — and the *original* significance of Bernstein and Vazirani's 1993 result was a recursive version of this problem giving a superpolynomial separation against randomized classical computation. That was the first serious evidence that BQP might exceed BPP.
- It is the standard hardware benchmark. Because the ideal answer is one specific bit string with probability 1, running Bernstein–Vazirani on a real device and measuring how often you get the right string is a clean, honest fidelity test.

## The idea

The black box computes a **hidden linear function**: there is a secret bit string $s \in \{0,1\}^n$, and

$$f(x) = s\cdot x = s_1x_1 \oplus s_2x_2\oplus\cdots\oplus s_nx_n \pmod 2.$$

Your job is to find $s$.

Classically it takes $n$ queries and the strategy is obvious: query $x = 100\cdots0$ to get $s_1$, then $010\cdots0$ to get $s_2$, and so on. One bit of $s$ per query, and you cannot do better, because each query returns one bit and you need $n$ bits.

Quantumly, one query returns all of $s$. Run exactly the Deutsch–Jozsa circuit: Hadamards, one phase query, Hadamards, measure. The outcome is the string $s$ itself, with probability 1.

The reason is worth seeing as a statement about Fourier analysis rather than as algebra. After the query, the register holds

$$\frac{1}{\sqrt{2^n}}\sum_x(-1)^{s\cdot x}\lvert x\rangle,$$

which is a **plane wave**: the signs oscillate in a pattern whose "frequency" is exactly $s$. And $H^{\otimes n}$ is the Fourier transform for bit strings, so applying it to a plane wave of frequency $s$ returns a spike at $s$ — the same way a Fourier transform of $\cos(2\pi k t)$ is a delta at frequency $k$. **The algorithm is a spectrometer.** The reason it gets $n$ bits where Deutsch–Jozsa got one is that Deutsch–Jozsa only looked at whether the spike sat at zero.

## The formal version

> **Bernstein–Vazirani problem.** Given oracle access to $f(x) = s\cdot x \bmod 2$ for an unknown $s\in\{0,1\}^n$, find $s$.

> **Classical complexity.** Exactly $n$ queries, deterministic or randomized. Each query returns one bit; $s$ has $n$ bits; and the standard basis queries achieve it.

> **The algorithm.** Prepare $\lvert 0\rangle^{\otimes n}\lvert-\rangle$, apply $H^{\otimes n}$, one call to $U_f$, then $H^{\otimes n}$, and measure. The outcome is $s$ with probability 1.

**Proof.** After the Hadamards and the phase query the input register is

$$\frac{1}{\sqrt{2^n}}\sum_x(-1)^{s\cdot x}\lvert x\rangle.$$

Apply $H^{\otimes n}$ using $H^{\otimes n}\lvert x\rangle = 2^{-n/2}\sum_z(-1)^{x\cdot z}\lvert z\rangle$:

$$\lvert\psi\rangle = \frac{1}{2^n}\sum_z\left[\sum_x(-1)^{s\cdot x + x\cdot z}\right]\lvert z\rangle = \frac{1}{2^n}\sum_z\left[\sum_x(-1)^{x\cdot(s\oplus z)}\right]\lvert z\rangle.$$

Now evaluate the inner sum, which is the one identity this module runs on:

> **Orthogonality of characters** ([on the card](../reference.md#fourier-and-phase-estimation-facts))**.** $\displaystyle\sum_{x\in\{0,1\}^n}(-1)^{x\cdot a} = \begin{cases}2^n & a = 0,\\ 0 & a\ne 0.\end{cases}$

In words: the signs of a nonzero pattern cancel perfectly when summed over all inputs. (Proof: if $a\ne0$ it has a nonzero bit $a_j$, and pairing each $x$ with $x\oplus e_j$ pairs every $+1$ with a $-1$.)

So the inner sum is $2^n$ when $z = s$ and 0 otherwise, and

$$\lvert\psi\rangle = \lvert s\rangle.$$

$\blacksquare$

Exact, deterministic, one query. Compare with the amplitude equation of [3.2](03-02-deutsch-jozsa.md): that lesson computed only the $z = 0$ coefficient and read one bit; this one reads the whole spectrum and gets $n$ bits, from the same run.

Two notes on significance.

> **The recursive version.** Bernstein and Vazirani's actual 1993 contribution was **recursive Fourier sampling**, where the oracle for one level's linear function is itself computed by a lower-level instance. That problem needs $n^{\Theta(\log n)}$ classical queries and $O(n)$ quantum ones — a **superpolynomial** separation against randomized classical computation, and the first strong evidence that $\mathrm{BPP}\ne\mathrm{BQP}$.

> **As a benchmark.** Running the circuit on hardware and recording the fraction of shots returning the correct $s$ gives a single number that degrades with gate error, crosstalk, and readout error. It is used precisely because the noiseless answer is a delta function.

## Picture

![A five-wire circuit. Four input wires start at ket 0, and one ancilla at ket minus. Each input wire passes through an H box, then all five pass through a tall orange box labelled U sub f, then each input wire passes through a second H box and ends in a meter whose readout is labelled s-zero, s-one, s-two, s-three. A note reads that f of x equals s dot x mod 2 and the hidden string s is read out whole. Below, a two-row comparison: classical, querying the standard basis vectors one at a time, costs n queries; quantum, one query in superposition, costs 1 query. A closing line notes this is a factor-of-n saving, exact and with certainty, modest but with no probability anywhere.](assets/03-03-fig1.svg)

The circuit is *identical* to Deutsch–Jozsa's. Nothing about the hardware changed; only the promise on $f$ and what you do with the output string. This is the standard shape of quantum algorithm design — the circuit is almost always "transform, query, transform," and the creativity is in finding a problem whose structure makes the transform's output meaningful.

## Worked examples

**Example 1 — one query on $n = 4$, $s = 1011$.**

The oracle computes $f(x) = x_1\oplus x_3\oplus x_4$ (the bits where $s$ is 1).

After Hadamards and the phase query:

$$\frac14\sum_{x\in\{0,1\}^4}(-1)^{x_1\oplus x_3\oplus x_4}\lvert x\rangle.$$

The sign pattern factors across the four qubits, which is the fastest way to see the answer. The phase $(-1)^{s\cdot x} = \prod_j (-1)^{s_jx_j}$ acts independently on each qubit, so the state is a product:

$$\bigotimes_{j=1}^4 \left(\frac{\lvert0\rangle + (-1)^{s_j}\lvert1\rangle}{\sqrt2}\right) = \lvert-\rangle\lvert+\rangle\lvert-\rangle\lvert-\rangle,$$

since $s = 1011$ puts $\lvert-\rangle$ in slots 1, 3, 4 and $\lvert+\rangle$ in slot 2. Then $H\lvert-\rangle = \lvert1\rangle$ and $H\lvert+\rangle = \lvert0\rangle$, so the final state is

$$\lvert1\rangle\lvert0\rangle\lvert1\rangle\lvert1\rangle = \lvert 1011\rangle = \lvert s\rangle.$$

Measurement returns $1011$ with probability 1. ✓

The factoring is the lesson here. **The algorithm never entangles the input qubits at all** — the state is a product state at every stage, and each qubit independently reports its own bit of $s$. That has a striking consequence, worked out in P3: Bernstein–Vazirani requires no entanglement, and therefore it is *classically simulable*, which is one more reason the $n$-versus-1 separation is not evidence of quantum advantage in any deep sense.

**Example 2 — why one query cannot be beaten classically, and what that does and does not prove.**

*The classical lower bound.* Each query returns a single bit, so $k$ queries return at most $k$ bits of information. The answer $s$ ranges over $2^n$ possibilities, requiring $n$ bits to specify. Therefore $k \ge n$, for deterministic and randomized algorithms alike. This is a pure information-counting argument and it is airtight.

*What the quantum algorithm does about it.* The single quantum query returns $n$ bits. Does that violate the counting argument? No — the counting argument bounds *classical* queries, each of which evaluates $f$ at one point. A quantum query evaluates the oracle on a superposition, and the resulting $n$-bit measurement is not "the value of $f$ at $n$ places." It is a global property: the frequency of a plane wave.

*The Holevo check.* One might worry this smuggles $n$ bits through one qubit-channel use, contradicting Holevo ([2.5](02-05-superdense-coding.md)). It does not: the oracle is not a communication channel with a sender, and the query acts on $n+1$ qubits, so $n+1$ qubits' worth of capacity is available. Nothing is oversubscribed.

*The honest verdict on the speedup.*

| model | queries |
|---|---|
| classical, deterministic or randomized | $n$ |
| quantum | 1 |
| classical for the **recursive** version | $n^{\Theta(\log n)}$ |
| quantum for the recursive version | $O(n)$ |

The plain version's factor of $n$ is a real but unremarkable speedup — you would not build a machine for it. The recursive version is the one that mattered historically, because a superpolynomial gap against *randomized* classical computation is the first thing that looks like genuine quantum advantage, and it set up Simon's cleaner exponential separation a year later.

## Watch out

- You might think one query returning $n$ bits means quantum queries are $n$ times more informative in general. They are not: the gain depends entirely on the promise that $f$ is linear. Drop the promise and a single query tells you almost nothing — Grover's $\sqrt N$ ([3.5](03-05-grovers-search.md)) is what unstructured problems actually allow.
- You might think entanglement is doing the work. Example 1 shows the state is a product state throughout, so **no entanglement is created anywhere in the circuit**. The resource being used is interference within each qubit, not correlation between them, and that is exactly why this algorithm is classically simulable.
- You might think the algorithm is robust because the ideal success probability is 1. On hardware it degrades fast: every gate error moves amplitude off the correct string, and since the ideal answer is a single spike, the observed success rate is roughly the product of all gate fidelities. That sensitivity is what makes it a good benchmark and a bad application.
- You might think $n$ versus 1 is an exponential speedup because you have seen this algorithm listed alongside Shor's. It is linear. The exponential claims in this module belong to Deutsch–Jozsa against deterministic classical algorithms ([3.2](03-02-deutsch-jozsa.md)) and to Simon against randomized ones ([3.4](03-04-simons-algorithm.md)).

## One-liner

> A hidden linear function is a plane wave in disguise, and $H^{\otimes n}$ is a spectrometer: one query, one Fourier transform, and the whole hidden string appears as a spike.

## Problems

**P1 (🟢)** For $n = 3$ and $s = 101$, write the state after each stage of the algorithm, using the product-state factoring of Example 1, and confirm the measurement returns $101$ with probability 1. Then state which classical queries you would need and how many.

**P2 (🟡)** Prove the character orthogonality identity $\sum_{x\in\{0,1\}^n}(-1)^{x\cdot a} = 2^n\delta_{a,0}$ by the pairing argument: for $a\ne0$ pick an index $j$ with $a_j = 1$ and pair $x$ with $x\oplus e_j$. Then use it to show that the Bernstein–Vazirani circuit outputs $\lvert s\rangle$ exactly, and identify where in the derivation the promise "$f$ is linear" was used.

**P3 (🔴, optional)** Show that the Bernstein–Vazirani circuit creates no entanglement, and draw the consequence. (a) Prove that the state after the phase query is a product state $\bigotimes_j \lvert \pm\rangle$, giving the rule for which qubits get $\lvert+\rangle$. (b) Conclude that a classical computer can simulate the whole circuit in $O(n)$ time. (c) Explain how (b) is consistent with the classical query lower bound of $n$ from Example 2 — the classical simulator seems to get $s$ without $n$ queries. Resolve the apparent contradiction precisely.

<details>
<summary>Solutions</summary>

**P1** *Stage 1.* $H^{\otimes3}\lvert000\rangle = \tfrac{1}{2\sqrt2}\sum_{x\in\{0,1\}^3}\lvert x\rangle$, equivalently $\lvert+\rangle\lvert+\rangle\lvert+\rangle$.

*Stage 2.* With $s = 101$, $f(x) = x_1\oplus x_3$. The phase $(-1)^{s\cdot x} = (-1)^{x_1}(-1)^{x_3}$ factors, so each qubit $j$ picks up $(-1)^{s_jx_j}$:

$$\lvert-\rangle\lvert+\rangle\lvert-\rangle,$$

since $s_1 = 1$, $s_2 = 0$, $s_3 = 1$. (Check by expanding one slot: $\tfrac{1}{\sqrt2}(\lvert0\rangle + (-1)^1\lvert1\rangle) = \lvert-\rangle$.)

*Stage 3.* $H\lvert-\rangle = \lvert1\rangle$ and $H\lvert+\rangle = \lvert0\rangle$, so the state is $\lvert1\rangle\lvert0\rangle\lvert1\rangle = \lvert101\rangle = \lvert s\rangle$. Measurement returns $101$ with probability 1. ✓

*Classically:* query $x = 100$, $010$, $001$, receiving $f = 1, 0, 1$ respectively, which are $s_1, s_2, s_3$ directly. **Three queries**, one per bit, and by the counting argument no fewer.

**P2** *The identity.* If $a = 0$ then every term is $(-1)^0 = 1$ and the sum is $2^n$.

If $a \ne 0$, choose $j$ with $a_j = 1$. The map $x \mapsto x\oplus e_j$ (flip bit $j$) is an involution with no fixed points, so it partitions $\{0,1\}^n$ into $2^{n-1}$ disjoint pairs. Within a pair,

$$(x\oplus e_j)\cdot a = x\cdot a \oplus (e_j\cdot a) = x\cdot a \oplus a_j = x\cdot a \oplus 1,$$

so the two terms are $(-1)^{x\cdot a}$ and $-(-1)^{x\cdot a}$, summing to zero. Every pair cancels, so the total is 0. $\blacksquare$

*The circuit.* From the derivation in the formal section, the final amplitude on $\lvert z\rangle$ is

$$\frac{1}{2^n}\sum_x(-1)^{s\cdot x + x\cdot z} = \frac{1}{2^n}\sum_x(-1)^{x\cdot(s\oplus z)} = \frac{1}{2^n}\cdot 2^n\,\delta_{s\oplus z,\,0} = \delta_{z,s},$$

using $(-1)^{a}(-1)^{b} = (-1)^{a\oplus b}$ for bits and then the identity. So $\lvert\psi\rangle = \lvert s\rangle$.

*Where the promise entered.* At the very first step: writing $(-1)^{f(x)} = (-1)^{s\cdot x}$ requires $f$ to be **exactly** linear. For a general $f$ the final amplitude on $\lvert z\rangle$ is $2^{-n}\sum_x(-1)^{f(x)+x\cdot z}$, which is the $z$-th **Fourier coefficient** $\hat f(z)$ of the sign function $(-1)^{f}$; linearity is precisely the condition that this spectrum is a single spike rather than spread out. So the general statement is: **the circuit samples $z$ with probability $\lvert\hat f(z)\rvert^2$** — Fourier sampling — and Bernstein–Vazirani is the special case where that distribution is a delta. Simon's algorithm ([3.4](03-04-simons-algorithm.md)) is the case where it is uniform on a subgroup.

**P3**

(a) The phase factors because a dot product mod 2 is a sum over bits:

$$(-1)^{s\cdot x} = (-1)^{\bigoplus_j s_jx_j} = \prod_{j=1}^n (-1)^{s_jx_j}.$$

So the post-query state is

$$\frac{1}{\sqrt{2^n}}\sum_x\prod_j(-1)^{s_jx_j}\lvert x_j\rangle = \bigotimes_{j=1}^n\left(\frac{\lvert0\rangle + (-1)^{s_j}\lvert1\rangle}{\sqrt2}\right) = \bigotimes_j \begin{cases}\lvert+\rangle & s_j = 0,\\ \lvert-\rangle & s_j = 1.\end{cases}$$

A tensor product of single-qubit states — a product state, entanglement zero, at every stage of the circuit (the initial state, the post-Hadamard state, and the final $\lvert s\rangle$ are all products too).

(b) A classical computer can therefore track the circuit with $n$ separate two-component vectors rather than one $2^n$-component vector. Each Hadamard and each phase factor acts on one qubit, so the simulation is $O(n)$ arithmetic operations — **exponentially cheaper than general circuit simulation**, and in fact cheaper than running the quantum circuit. (More generally, product-state circuits are trivially simulable, which is why entanglement is a necessary ingredient of any quantum advantage, though [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md) shows it is nowhere near sufficient — Clifford circuits are maximally entangling and still simulable.)

(c) The apparent contradiction dissolves once you notice **what the classical simulator is given.** The query lower bound says: any classical algorithm with *oracle access* to $f$ needs $n$ queries. The simulator does not have oracle access — it has been handed the **circuit description**, which contains $s$ written into the gate list, because to simulate $U_f$ you must know $f$.

So the two statements live in different models:

- *Query model:* $f$ is a black box. Classical needs $n$ evaluations, quantum needs 1. The separation is real in this model.
- *Circuit model:* $f$ is given as code. Then $s$ can be read off the code in $O(n)$ time with **zero** evaluations, classically, and there is no quantum advantage at all.

This is the single most important caveat about query-complexity speedups, and it is worth learning here where the example is simple enough to see through. The query model's lower bounds are only meaningful when the oracle really is opaque — when it is a physical system you are probing, or a function so complex its structure is inaccessible. The moment you have the oracle as a circuit, its structure may be exploitable classically. Exactly this objection is what dequantized several advertised quantum machine-learning speedups ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)), and it is why Shor's algorithm ([4.4](04-04-shors-factoring-algorithm.md)) is in a different league: there the "oracle" is modular exponentiation, fully known and explicitly constructed, and the speedup is over the best classical algorithm for the *actual* problem, not over a black-box straw man.

</details>

## Connections

- **Backward:** the circuit is Deutsch–Jozsa's ([3.2](03-02-deutsch-jozsa.md)) with a different promise, built on phase kickback and the Hadamard transform of [3.1](03-01-oracles-reversibility-and-phase-kickback.md). The character orthogonality identity of P2 is the discrete orthogonality relation behind every Fourier inversion theorem, including the one in [`fourier-analysis` 1.2](../../fourier-analysis/lessons/01-02-orthogonal-systems-projection.md).
- **Forward:** [3.4](03-04-simons-algorithm.md) applies Fourier sampling when the spectrum is supported on a subgroup rather than a single point, which is the structure that generalizes to [4.5](04-05-the-hidden-subgroup-problem.md) and contains Shor. The Fourier-sampling view of P2 is the right way to hold all of Module 4 in your head.
- **Sideways:** $H^{\otimes n}$ is the Walsh–Hadamard transform, and "sample $z$ with probability $\lvert\hat f(z)\rvert^2$" is the basic primitive of Boolean Fourier analysis, a classical field with applications to learning theory and hardness of approximation; the classical analogue of this algorithm is the Goldreich–Levin algorithm for finding large Fourier coefficients, which also underpins hard-core predicates in [`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md).
