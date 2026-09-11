# Quantum Computing · Lesson 3.1: Oracles, reversibility, and phase kickback

> ⏱ ~15 min · Module 3: Oracles, interference, and search · Builds on: [1.5 (multi-qubit gates and circuits)](01-05-multi-qubit-gates-and-quantum-circuits.md), [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md) · Unlocks: [3.2 (Deutsch–Jozsa)](03-02-deutsch-jozsa.md), [3.5 (Grover's search)](03-05-grovers-search.md)

## Why this matters

Every algorithm in Modules 3 and 4 has the same shape: you are given a function $f$ as a black box, you want some global property of it, and you want to make as few queries as possible. This is the **query complexity** model, and it is where essentially all provable quantum speedups live.

Two pieces of machinery make it work, and this lesson installs both.

**Reversibility.** A quantum gate is unitary, so it cannot compute an irreversible function. Turning an ordinary classical circuit into something a quantum computer can call requires a standard construction, and the construction produces *garbage* — scratch bits that must be cleaned up. Skipping the cleanup does not slow the algorithm down; it **destroys the interference entirely** and the algorithm returns noise. This is the single most common bug in hand-designed quantum circuits.

**Phase kickback.** The trick that makes everything else work: put the output ancilla in $\lvert-\rangle$ and the function's value comes back as a **sign on the input register** instead of a bit in the output register. Signs can cancel; bits cannot. Deutsch–Jozsa, Bernstein–Vazirani, Simon, Grover, and phase estimation are all this one move plus a Fourier transform.

## The idea

Start with the reversibility problem. Given $f:\{0,1\}^n\to\{0,1\}$, the map $\lvert x\rangle\mapsto\lvert f(x)\rangle$ is hopeless — it throws away $x$ and cannot be inverted. The standard repair is to keep the input and XOR the answer into a fresh wire:

$$U_f: \lvert x\rangle\lvert y\rangle \longmapsto \lvert x\rangle\lvert y\oplus f(x)\rangle.$$

This is reversible (apply it twice and you are back where you started, since $y\oplus f\oplus f = y$), it is a permutation of basis states, and therefore it is a legitimate unitary. Every classical function becomes callable this way.

Now the trick. Feed the output wire $\lvert-\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$ instead of $\lvert0\rangle$. If $f(x) = 0$, nothing happens. If $f(x) = 1$, the two terms swap, and $\tfrac{1}{\sqrt2}(\lvert1\rangle - \lvert0\rangle) = -\lvert-\rangle$. So

$$U_f\lvert x\rangle\lvert-\rangle = (-1)^{f(x)}\lvert x\rangle\lvert-\rangle.$$

**The ancilla comes back exactly as it went in, and the answer is a minus sign on the input.** You already saw this in [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md) P3 with $f = $ AND; it holds for any $f$, by the same two-case argument.

Why this matters so much: run the oracle on a uniform superposition of all $2^n$ inputs and you get every value of $f$ stamped into the signs of $2^n$ amplitudes, in one query. You still cannot *read* those signs — one measurement gives $n$ bits ([1.3](01-03-measurement-and-the-born-rule.md)). But signs interfere, and a well-chosen circuit afterwards can make a global property of $f$ show up as a single likely outcome. That is the entire game.

## The formal version

> **Definition (bit oracle and phase oracle).** For $f:\{0,1\}^n\to\{0,1\}$, the **bit oracle** is the $(n+1)$-qubit unitary $U_f\lvert x\rangle\lvert y\rangle = \lvert x\rangle\lvert y\oplus f(x)\rangle$, and the **phase oracle** is the $n$-qubit unitary $O_f\lvert x\rangle = (-1)^{f(x)}\lvert x\rangle$.

> **Phase kickback.** $U_f\left(\lvert x\rangle\otimes\lvert-\rangle\right) = \left(O_f\lvert x\rangle\right)\otimes\lvert-\rangle$. So one call to the bit oracle, with the ancilla prepared and left in $\lvert-\rangle$, implements one call to the phase oracle.

In words: the two oracle types cost the same. Which explains why textbooks switch between them without comment — they are the same resource, and the phase form is easier to reason about.

> **Reversible computation (Bennett).** Any classical circuit computing $f$ with $G$ gates can be converted into a reversible circuit computing $U_f$ with $O(G)$ Toffoli and CNOT gates plus $O(G)$ ancilla qubits, via **compute–copy–uncompute**: run the reversible version $C$ to produce $f(x)$ alongside scratch bits, CNOT the answer onto the output wire, then run $C^\dagger$ to erase every scratch bit.

In words: classical computation is available at roughly double the gate count and with ancillas you must give back. The uncomputation is not an optimization; it is mandatory, for the reason in Example 2.

Two standard tools for the rest of the module, both kept on the card under [Fourier and phase-estimation facts](../reference.md#fourier-and-phase-estimation-facts):

> **Uniform superposition.** $H^{\otimes n}\lvert0\rangle^{\otimes n} = \dfrac{1}{\sqrt{2^n}}\displaystyle\sum_{x\in\{0,1\}^n}\lvert x\rangle$.

> **The Hadamard transform.** $H^{\otimes n}\lvert x\rangle = \dfrac{1}{\sqrt{2^n}}\displaystyle\sum_{z\in\{0,1\}^n}(-1)^{x\cdot z}\lvert z\rangle$, where $x\cdot z = \sum_i x_iz_i \bmod 2$.

In words: $n$ Hadamards spread $\lvert 0\cdots0\rangle$ evenly over all $2^n$ strings, and applied to a general basis state they produce a pattern of signs given by a dot product mod 2. The second identity is the workhorse — it is the Fourier transform over the group $\mathbb{Z}_2^n$, and Deutsch–Jozsa, Bernstein–Vazirani, and Simon are all "kick back a phase, then apply this transform."

> **Query complexity.** The cost of an algorithm is the number of oracle calls; all other gates are free. Classical algorithms may be deterministic or randomized; quantum algorithms may query in superposition.

In words: an artificial cost model, chosen because it is the one where lower bounds are provable. Its results transfer to reality only when the oracle is cheap to build, a caveat that matters enormously in [6.5](06-05-quantum-linear-algebra-and-dequantization.md).

## Picture

![Left: a three-wire circuit with the top wire labelled ket x, and the bottom wire labelled ket minus, passing through a tall blue box labelled U sub f, with outputs relabelled ket x and ket minus. Notes read that the ancilla comes back untouched, and the answer arrives as a phase, with the equation U sub f acting on ket x tensor ket minus equalling minus-one to the f of x times ket x tensor ket minus, plus a line saying one query, no garbage, nothing to clean up. Right: a three-wire circuit showing a green box labelled C, then an orange CNOT copying one wire to another, then a green box labelled C dagger. Notes read that C writes f of x plus scratch, one CNOT copies the answer out, C dagger erases every scratch bit, and that leaving the scratch kills interference since the probability of outcome zero becomes one plus the real part of the overlap of the two garbage states, all over two, with the cost being twice the circuit and zero leftovers.](assets/03-01-fig1.svg)

The right half is the part people skip and should not. **Garbage is not wasted space; it is a measurement in disguise.** Scratch bits that depend on $x$ are entangled with the input register, which is exactly the situation of [2.2](02-02-density-matrices-and-the-partial-trace.md): the input register's reduced state becomes mixed, coherence is gone, and interference cannot happen. Uncomputing restores purity.

## Worked examples

**Example 1 — build two oracles by hand, then read off their phase versions.**

*Case $f(x) = x$ on one bit.* The bit oracle must send $\lvert x\rangle\lvert y\rangle\to\lvert x\rangle\lvert y\oplus x\rangle$, which is exactly a **CNOT** with $x$ as control. Its phase version acts on one qubit as $\lvert x\rangle\to(-1)^x\lvert x\rangle$: that is $+1$ on $\lvert0\rangle$ and $-1$ on $\lvert1\rangle$, so $O_f = Z$.

*Case $f(x_1,x_2) = x_1\oplus x_2$.* The bit oracle is **two CNOTs**, each from one input onto the ancilla, since XORing twice accumulates $x_1\oplus x_2$. Its phase version:

$$O_f\lvert x_1x_2\rangle = (-1)^{x_1\oplus x_2}\lvert x_1x_2\rangle = (-1)^{x_1}(-1)^{x_2}\lvert x_1x_2\rangle = \left(Z\otimes Z\right)\lvert x_1x_2\rangle,$$

using $(-1)^{a\oplus b} = (-1)^a(-1)^b$. So the phase oracle is $Z\otimes Z$ — no ancilla needed at all once you know $f$.

That last observation is worth flagging. **Knowing $f$ lets you build a cheap oracle; the query model pretends you do not know it.** The model's job is to prove lower bounds, and a lower bound proved against an adversary who could be handing you any $f$ is a strong statement. Do not mistake it for a claim about how expensive real circuits are.

**Example 2 — what garbage does to interference, quantitatively.**

Consider a one-qubit input and an oracle that sloppily leaves a scratch register behind:

$$\lvert x\rangle\lvert 0\rangle_{\text{scratch}} \;\longmapsto\; (-1)^{f(x)}\lvert x\rangle\lvert g_x\rangle,$$

where $\lvert g_0\rangle$ and $\lvert g_1\rangle$ are whatever the scratch happens to hold. Take $f = 0$ for simplicity, so the phases are trivial and only the garbage differs. Start from $\lvert+\rangle$, apply the oracle, then apply $H$ and measure — the skeleton of every algorithm in this module:

$$\tfrac{1}{\sqrt2}\left(\lvert0\rangle\lvert g_0\rangle + \lvert1\rangle\lvert g_1\rangle\right) \;\xrightarrow{\;H\;}\; \tfrac12\Big[\lvert0\rangle\left(\lvert g_0\rangle + \lvert g_1\rangle\right) + \lvert1\rangle\left(\lvert g_0\rangle - \lvert g_1\rangle\right)\Big].$$

The probability of measuring 0 is the squared norm of its branch:

$$P(0) = \tfrac14\left\lVert\lvert g_0\rangle+\lvert g_1\rangle\right\rVert^2 = \tfrac14\left(2 + 2\,\mathrm{Re}\langle g_0\vert g_1\rangle\right) = \frac{1 + \mathrm{Re}\langle g_0\vert g_1\rangle}{2}.$$

Read the three cases:

| scratch | $\mathrm{Re}\langle g_0\vert g_1\rangle$ | $P(0)$ | verdict |
|---|---|---|---|
| uncomputed, $\lvert g_0\rangle = \lvert g_1\rangle$ | 1 | 1 | full interference, algorithm works |
| partially cleaned | 0.5 | 0.75 | degraded |
| left dirty and $x$-dependent | 0 | 0.5 | **coin flip, algorithm dead** |

With orthogonal garbage the output is a fair coin regardless of $f$ — the circuit computes nothing. And notice that the amount of interference is governed by exactly the overlap $\langle g_0\vert g_1\rangle$, which is a **coherence**, the off-diagonal entry of [2.2](02-02-density-matrices-and-the-partial-trace.md) Example 1. Garbage is decoherence you inflicted on yourself, and uncomputation is the only cure.

## Watch out

- You might think the oracle "evaluates $f$ on all $2^n$ inputs at once, so the work is done." The amplitudes do all carry values of $f$, but you get $n$ bits out at the end. An algorithm that queried the oracle once and then measured immediately would learn one random $f(x)$ — exactly what one classical query gives. **All the value is in the interference afterwards**, never in the query itself.
- You might think the ancilla in $\lvert-\rangle$ must be re-prepared after each query. It must not, and need not: phase kickback returns it in $\lvert-\rangle$ exactly. One ancilla serves an entire algorithm, which is why Grover's $\sqrt N$ iterations need no extra qubits.
- You might think query complexity is time complexity. It is not. A query-optimal algorithm can be useless if the oracle itself is expensive — this is precisely the criticism that sank several advertised speedups, and [6.5](06-05-quantum-linear-algebra-and-dequantization.md) tells that story. Always ask what the black box actually costs to build.
- You might think uncomputation doubles the qubit count as well as the gate count. It doubles gates but *returns* the ancillas, so the peak qubit count is set by the widest point of the compute phase and the ancillas are reusable afterwards. In fault-tolerant designs this matters: ancilla reuse is one of the main levers for keeping qubit counts down ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)).

## One-liner

> Make the function reversible, put the answer wire in $\lvert-\rangle$, and $f$ comes back as a sign you can cancel — then clean up your scratch, or the cancellation never happens.

## Problems

**P1 (🟢)** For the constant function $f(x) = 1$ on one input bit, write down the bit oracle $U_f$ as an explicit circuit and as a $4\times4$ matrix, then give its phase oracle $O_f$ as a single-qubit operator. Explain why this phase oracle is invisible to any measurement, and what that says about distinguishing $f\equiv 1$ from $f\equiv 0$ with one query.

**P2 (🟡)** Verify phase kickback by direct computation for $n = 2$ and $f(x_1,x_2) = x_1 \wedge x_2$, whose bit oracle is a Toffoli. Compute $U_f\lvert x_1x_2\rangle\lvert-\rangle$ for all four inputs, confirm the ancilla is unchanged in each case, and identify the resulting two-qubit phase oracle as a named gate from [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md).

**P3 (🔴, optional)** A reversible circuit for $f$ produces $\lvert x\rangle\lvert f(x)\rangle\lvert g_x\rangle$ where the scratch register $\lvert g_x\rangle$ is a computational basis state depending on $x$. (a) Write the state after applying this to $H^{\otimes n}\lvert0\rangle^{\otimes n}$ with the answer kicked back as a phase, and compute the reduced density matrix of the input register. (b) Show that if $g_x$ is injective, the input register's reduced state is exactly $I/2^n$, so *no* subsequent circuit on the input register can extract anything about $f$. (c) State the gate and qubit cost of the compute–copy–uncompute fix, and explain why the fix works in terms of the reduced state you computed.

<details>
<summary>Solutions</summary>

**P1** With $f(x) = 1$ for both inputs, the oracle must flip the ancilla always: $\lvert x\rangle\lvert y\rangle\to\lvert x\rangle\lvert y\oplus 1\rangle$. That is an **$X$ gate on the ancilla and nothing on the input**, so $U_f = I\otimes X$:

$$U_f = \begin{pmatrix}0&1&0&0\\1&0&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}.$$

Phase oracle: $O_f\lvert x\rangle = (-1)^1\lvert x\rangle = -\lvert x\rangle$ for every $x$, so $O_f = -I$.

That is a **global phase**, and global phases are unobservable ([1.1](01-01-the-qubit-and-the-bloch-sphere.md)). So $f\equiv 1$ and $f\equiv 0$ (whose phase oracle is $+I$) are **indistinguishable by any circuit built from phase queries alone** — the two oracles differ by an overall sign and nothing more.

This is not a defect; it is a fact about the problem. Deutsch–Jozsa ([3.2](03-02-deutsch-jozsa.md)) does not ask "is $f$ constant-zero or constant-one"; it asks "is $f$ constant *or* balanced," and the two constant cases are lumped together precisely because they are physically identical in the phase-oracle model. Getting this right is what makes the one-query claim honest.

**P2** The Toffoli sends $\lvert x_1x_2\rangle\lvert y\rangle\to\lvert x_1x_2\rangle\lvert y\oplus x_1x_2\rangle$. With the ancilla in $\lvert-\rangle$:

$$\lvert x_1x_2\rangle\otimes\tfrac{1}{\sqrt2}\left(\lvert0\rangle-\lvert1\rangle\right) \longmapsto \lvert x_1x_2\rangle\otimes\tfrac{1}{\sqrt2}\left(\lvert 0\oplus x_1x_2\rangle - \lvert 1\oplus x_1x_2\rangle\right).$$

Case by case:

| $x_1x_2$ | $x_1\wedge x_2$ | ancilla out | phase |
|---|---|---|---|
| 00 | 0 | $\tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle) = \lvert-\rangle$ | $+1$ |
| 01 | 0 | $\lvert-\rangle$ | $+1$ |
| 10 | 0 | $\lvert-\rangle$ | $+1$ |
| 11 | 1 | $\tfrac{1}{\sqrt2}(\lvert1\rangle-\lvert0\rangle) = -\lvert-\rangle$ | $-1$ |

The ancilla is $\lvert-\rangle$ in every row — unchanged, ready for reuse. The induced two-qubit operator is diagonal with entries $(+1,+1,+1,-1)$, which is $(-1)^{x_1x_2}$: the **controlled-$Z$ gate**. So a Toffoli plus a $\lvert-\rangle$ ancilla is a CZ, exactly as in [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md) P3.

**P3**

(a) After the Hadamards, the oracle with kickback, and keeping the scratch:

$$\lvert\Psi\rangle = \frac{1}{\sqrt{2^n}}\sum_{x}(-1)^{f(x)}\lvert x\rangle\lvert g_x\rangle.$$

The reduced state of the input register is the partial trace over the scratch:

$$\rho_{\text{in}} = \mathrm{tr}_{\text{scratch}}\lvert\Psi\rangle\langle\Psi\rvert = \frac{1}{2^n}\sum_{x,x'}(-1)^{f(x)+f(x')}\langle g_{x'}\vert g_x\rangle\,\lvert x\rangle\langle x'\rvert.$$

Each off-diagonal entry is multiplied by the overlap $\langle g_{x'}\vert g_x\rangle$ — the garbage acts as a coefficient throttling every coherence.

(b) If $g_x$ is injective, the scratch states are distinct computational basis states, hence orthonormal: $\langle g_{x'}\vert g_x\rangle = \delta_{xx'}$. Every off-diagonal term vanishes and the diagonal terms have $(-1)^{2f(x)} = 1$:

$$\rho_{\text{in}} = \frac{1}{2^n}\sum_x \lvert x\rangle\langle x\rvert = \frac{I}{2^n}.$$

Maximally mixed — and **independent of $f$**. Since any subsequent circuit acts as $\rho\mapsto V\rho V^\dagger$ and $V\left(I/2^n\right)V^\dagger = I/2^n$, no later processing can produce any $f$-dependence. Measuring gives a uniformly random $n$-bit string, always. The algorithm returns pure noise, and the phases are not "damaged" but completely unreadable.

(c) *The fix.* Run the reversible circuit $C$ (gate count $O(G)$, ancillas $O(G)$), CNOT the answer bit onto a dedicated output wire (1 gate), then run $C^\dagger$ (another $O(G)$). Total gate cost roughly $2G$, and the $O(G)$ ancillas are returned to $\lvert0\rangle$ and freed for reuse.

*Why it works, in the language of (b).* After uncomputation the scratch register holds $\lvert 0\cdots0\rangle$ **for every $x$**, so $\langle g_{x'}\vert g_x\rangle = 1$ for all pairs and the off-diagonal entries survive intact:

$$\rho_{\text{in}} = \frac{1}{2^n}\sum_{x,x'}(-1)^{f(x)+f(x')}\lvert x\rangle\langle x'\rvert = \lvert\phi\rangle\langle\phi\rvert, \qquad \lvert\phi\rangle = \frac{1}{\sqrt{2^n}}\sum_x(-1)^{f(x)}\lvert x\rangle,$$

a **pure** state carrying all of $f$ in its signs, and ready to interfere. The scratch register is now unentangled with the input, which is the whole point: uncomputation is not tidiness, it is **disentangling your algorithm from its own workspace.** The same principle reappears wherever a quantum subroutine calls another — and getting it wrong is why so many textbook circuits silently fail.

</details>

## Connections

- **Backward:** phase kickback is the Toffoli-with-$\lvert-\rangle$-ancilla calculation of [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md) P3, generalized from AND to any $f$. Reversible computing rests on the universality of the Toffoli gate for classical logic, the reversible counterpart of NAND's universality in [`digital-logic` 1.3](../../digital-logic/lessons/01-03-boolean-algebra-logic-gates.md); the garbage calculation is the purity argument of [2.2](02-02-density-matrices-and-the-partial-trace.md).
- **Forward:** [3.2](03-02-deutsch-jozsa.md) uses one phase query plus the Hadamard transform to get an exact exponential separation; [3.3](03-03-bernstein-vazirani.md) and [3.4](03-04-simons-algorithm.md) reuse the same skeleton with cleverer post-processing; [3.5](03-05-grovers-search.md) calls the phase oracle $\sqrt N$ times. The uncomputation discipline becomes a hard cost constraint in [6.2](06-02-hamiltonian-simulation.md) and [6.6](06-06-resource-estimation-and-the-state-of-the-field.md).
- **Sideways:** the Hadamard transform $H^{\otimes n}$ is the Fourier transform over the group $\mathbb{Z}_2^n$, and the $(-1)^{x\cdot z}$ signs are its characters — the same structure as the Walsh–Hadamard transform used in classical signal processing ([`fourier-analysis` 4.2](../../fourier-analysis/lessons/04-02-dft-fft.md) covers its cousin, the DFT). The query model's habit of counting only oracle calls is the same accounting convention as counting comparisons in sorting lower bounds ([`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md)).
