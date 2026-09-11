# Quantum Computing · Lesson 4.2: Quantum phase estimation

> ⏱ ~15 min · Module 4: Fourier, phase, and factoring · Builds on: [4.1 (the quantum Fourier transform)](04-01-the-quantum-fourier-transform.md), [3.1 (oracles and phase kickback)](03-01-oracles-reversibility-and-phase-kickback.md) · Unlocks: [4.3 (order-finding)](04-03-order-finding-and-period-finding.md), [6.2 (Hamiltonian simulation)](06-02-hamiltonian-simulation.md)

## Why this matters

Phase estimation is the most-used subroutine in quantum computing, by a wide margin. It answers one question: **given a unitary $U$ and one of its eigenvectors, what is the eigenvalue?**

That sounds narrow. It is not, because an enormous number of problems are eigenvalue problems in disguise:

- **Order-finding** ([4.3](04-03-order-finding-and-period-finding.md)) and hence factoring: the period $r$ is an eigenphase of the multiply-by-$a$ operator.
- **Quantum counting** ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)): the number of solutions is an eigenphase of the Grover operator.
- **Chemistry and materials** ([6.2](06-02-hamiltonian-simulation.md)): a molecule's ground-state energy is an eigenvalue of its Hamiltonian, and $e^{-iHt}$ turns it into a phase.
- **Quantum linear algebra** ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)): HHL inverts a matrix by phase-estimating its eigenvalues.

So this one circuit is the bridge between "quantum computers do interference" and "quantum computers compute things people care about." Learn it once, recognize it everywhere.

## The idea

You are given a unitary $U$ and a state $\lvert u\rangle$ with $U\lvert u\rangle = e^{2\pi i\varphi}\lvert u\rangle$. The phase $\varphi \in [0,1)$ is what you want, to some number of bits.

Applying $U$ to $\lvert u\rangle$ does nothing observable — it multiplies by a global phase ([1.1](01-01-the-qubit-and-the-bloch-sphere.md)). But apply $U$ **conditioned on an ancilla** and the global phase becomes a relative one, visible on the ancilla. That is phase kickback again ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)), and it is the whole mechanism:

$$\text{controlled-}U: \ \tfrac{1}{\sqrt2}\left(\lvert0\rangle + \lvert1\rangle\right)\lvert u\rangle \;\longmapsto\; \tfrac{1}{\sqrt2}\left(\lvert0\rangle + e^{2\pi i\varphi}\lvert1\rangle\right)\lvert u\rangle.$$

One ancilla now carries $\varphi$ in its relative phase — but only one bit's worth of resolution. To get more bits, use more ancillas and apply **higher powers** of $U$: an ancilla controlling $U^{2^k}$ picks up the phase $2^k\varphi$, which is $\varphi$ shifted left by $k$ binary places.

Do this for $k = 0,1,\dots,m-1$ and the ancilla register holds

$$\frac{1}{\sqrt{2^m}}\sum_{j=0}^{2^m-1}e^{2\pi i\varphi j}\lvert j\rangle,$$

a **plane wave of frequency $\varphi$**. And from [4.1](04-01-the-quantum-fourier-transform.md) you know exactly what turns a plane wave into a spike: the inverse Fourier transform. Apply $\mathrm{QFT}^{-1}$, measure, and read $\varphi$ in binary.

The structure is worth naming because it is the same skeleton as all of Module 3: **prepare a superposition, write the answer into phases, Fourier transform, measure.** Only the group changed.

## The formal version

> **Phase estimation.** Given a unitary $U$, an eigenstate $\lvert u\rangle$ with $U\lvert u\rangle = e^{2\pi i\varphi}\lvert u\rangle$, and controlled access to $U^{2^k}$, the circuit
> 1. prepare $m$ ancillas in $\lvert0\rangle$ and apply $H^{\otimes m}$,
> 2. apply controlled-$U^{2^k}$ from ancilla $k$ onto the target, for $k = 0,\dots,m-1$,
> 3. apply $\mathrm{QFT}_{2^m}^{-1}$ to the ancillas and measure,
>
> outputs an integer $j$ such that $j/2^m$ estimates $\varphi$.

Trace it. After step 1 the ancillas are uniform; after step 2, ancilla $k$ has picked up $e^{2\pi i2^k\varphi}$ on its $\lvert1\rangle$ branch, so the register holds

$$\bigotimes_{k=0}^{m-1}\frac{\lvert0\rangle + e^{2\pi i 2^k\varphi}\lvert1\rangle}{\sqrt2} = \frac{1}{\sqrt{2^m}}\sum_{j=0}^{2^m-1}e^{2\pi i\varphi j}\lvert j\rangle,$$

where the second form follows by expanding the product and recognizing $j$'s binary digits. Comparing with the product form of the QFT in [4.1](04-01-the-quantum-fourier-transform.md), this is exactly $\mathrm{QFT}_{2^m}\lvert 2^m\varphi\rangle$ — which is why step 3 applies the **inverse**.

> **Exact case.** If $\varphi = j_0/2^m$ for an integer $j_0$, the state after step 2 is exactly $\mathrm{QFT}\lvert j_0\rangle$, so step 3 returns $\lvert j_0\rangle$ and the measurement gives $\varphi$ **exactly, with probability 1**.

> **General case.** For arbitrary $\varphi$, the outcome $j$ closest to $2^m\varphi$ occurs with probability at least $4/\pi^2 \approx 0.405$, and the probability of landing within $\pm1$ of it is at least $8/\pi^2\approx0.81$. The failure tail decays like $1/\lvert j - 2^m\varphi\rvert^2$.

In words: the spectrum is a peak at the right place with small sidelobes. You will usually be right, and when you are wrong you are wrong by a little.

> **The precision rule.** To obtain the first $n$ bits of $\varphi$ correctly with failure probability at most $\epsilon$, use
> $$m = n + \left\lceil\log_2\!\left(2 + \frac{1}{2\epsilon}\right)\right\rceil$$
> ancilla qubits.

In words: pay a handful of extra qubits to buy confidence. The extra term is small — 6 qubits for $\epsilon = 0.01$, 9 for $\epsilon = 0.001$ — because the sidelobes decay quadratically.

| target bits $n$ | failure $\epsilon$ | ancillas $m$ |
|---|---|---|
| 6 | $10^{-2}$ | 12 |
| 10 | $10^{-3}$ | 19 |
| 20 | $10^{-2}$ | 26 |

The cost, which is what makes phase estimation expensive in practice:

> **Cost.** The controlled powers $U^{2^k}$ for $k < m$ amount to $U$ applied $2^m - 1$ times in total. So the circuit depth is $\Theta(2^m)$ applications of $U$ — **exponential in the number of bits of precision**, though only linear in $1/\epsilon_\varphi$ where $\epsilon_\varphi = 2^{-n}$ is the phase accuracy.

In words: each extra bit of precision doubles the work. This is the Heisenberg-limited scaling $\text{cost} \propto 1/\epsilon_\varphi$, which is a quadratic improvement over the $1/\epsilon_\varphi^2$ that naive sampling would need ([1.3](01-03-measurement-and-the-born-rule.md)) — and it is why phase estimation, not repeated measurement, is the right way to get an eigenvalue precisely.

One practical caveat that becomes central in [6.4](06-04-variational-algorithms-vqe-and-qaoa.md):

> **You need an eigenstate.** If the input is a superposition $\lvert\psi\rangle = \sum_u c_u\lvert u\rangle$, the circuit returns the phase $\varphi_u$ with probability $\lvert c_u\rvert^2$ and collapses the target onto $\lvert u\rangle$. Useful when you want a random eigenvalue, useless when you want a *specific* one and cannot prepare its eigenstate.

## Picture

![A four-wire circuit. Three ancilla wires start at ket 0 and the bottom wire holds ket u. Each ancilla gets an H box. Then the bottom ancilla controls a box labelled U on the target, the middle ancilla controls U squared, and the top ancilla controls U to the fourth. A tall green box labelled QFT inverse spans the three ancillas, which then end in meters whose combined readout is labelled the bits of phi. Annotations note that U acting on ket u gives e to the two-pi-i-phi times ket u, so the eigenphase lands in the top register; that the ancillas end holding one over root two-to-the-m times the sum over j of e to the two-pi-i-phi-j times ket j, a plane wave of frequency phi; that the result is exact when phi is an m-bit fraction and otherwise the nearest bin wins with probability at least 4 over pi squared equals 0.405. A small table gives three worked cases, and a closing red line states that for n good bits with failure at most epsilon you use m equal to n plus the ceiling of log base 2 of 2 plus 1 over 2 epsilon ancillas.](assets/04-02-fig1.svg)

The doubling pattern of the controlled powers is the thing to internalize. Ancilla $k$ controls $U^{2^k}$, so it measures the $k$-th binary digit of $\varphi$ — the register is a **binary odometer for the phase**, and the inverse QFT is what converts the odometer's superposition into a readable number.

## Worked examples

**Example 1 — an exact case and an inexact one.**

*Exact: $\varphi = 1/4$, $m = 3$.* Since $1/4 = 0.010$ in binary, it is exactly a 3-bit fraction with $j_0 = 2$. The ancillas after step 2 hold

$$\frac{1}{\sqrt8}\sum_{j=0}^{7}e^{2\pi ij/4}\lvert j\rangle = \frac{1}{\sqrt8}\left(\lvert0\rangle + i\lvert1\rangle - \lvert2\rangle - i\lvert3\rangle + \lvert4\rangle + i\lvert5\rangle - \lvert6\rangle - i\lvert7\rangle\right),$$

which is $\mathrm{QFT}_8\lvert2\rangle$. The inverse QFT returns $\lvert2\rangle = \lvert010\rangle$, and $2/8 = 0.25$. **Probability 1.**

*Inexact: $\varphi = 1/6$, $m = 6$.* Now $2^6\varphi = 64/6 = 10.667$, which is not an integer, so the spectrum spreads. Simulating the circuit gives the distribution peaked at $j = 11$:

| outcome $j$ | $j/64$ | probability |
|---|---|---|
| 11 | 0.171875 | 0.684 |
| 10 | 0.156250 | 0.171 |
| others | — | 0.145 total |

The top two outcomes together carry 0.855 of the probability, consistent with the $8/\pi^2 = 0.81$ guarantee. The best estimate $11/64 = 0.1719$ is within $0.0052$ of the true $1/6 = 0.1667$, which is under one bin width $1/64 = 0.0156$ — as good as $m=6$ bits allows.

Note what happens next in a real application: $11/64$ is not obviously $1/6$. Recovering the exact fraction from a noisy estimate is a **continued-fraction** problem, and [4.3](04-03-order-finding-and-period-finding.md) shows that the convergents of $11/64$ are $0, 1/5, 1/6, 5/29, 11/64$ — the third one is the answer. **Phase estimation gives you a number; number theory gives you the fraction.**

**Example 2 — why phase estimation beats repeated measurement, and what it costs.**

Suppose you want $\varphi$ to accuracy $\epsilon_\varphi = 10^{-6}$.

*The naive route.* Prepare $\tfrac{1}{\sqrt2}(\lvert0\rangle+e^{2\pi i\varphi}\lvert1\rangle)$ with one controlled-$U$, measure in the $X$ basis to estimate $\cos(2\pi\varphi)$, and repeat. The standard error of an expectation value after $N$ shots is $\sim1/\sqrt N$ ([1.3](01-03-measurement-and-the-born-rule.md)), so accuracy $10^{-6}$ needs

$$N \sim \frac{1}{\epsilon_\varphi^2} = 10^{12} \text{ shots}, \quad\text{each using 1 application of } U.$$

Total: $10^{12}$ applications of $U$.

*Phase estimation.* You need $n = \log_2(10^6) \approx 20$ bits, so $m \approx 26$ with high confidence, and the circuit applies $U$ about $2^{26} \approx 6.7\times10^7$ times — in a single coherent run (repeated a few times for confidence).

$$\text{naive: } \Theta(1/\epsilon_\varphi^2) = 10^{12}, \qquad \text{phase estimation: } \Theta(1/\epsilon_\varphi) = 10^{6}\text{–}10^{8}.$$

**A quadratic improvement in the number of applications of $U$**, and it is the same quadratic that amplitude amplification gives ([3.6](03-06-amplitude-amplification-counting-and-optimality.md)) — unsurprisingly, since both come from coherent accumulation rather than incoherent averaging. In metrology this is the difference between the *standard quantum limit* $1/\sqrt N$ and the *Heisenberg limit* $1/N$.

The trade is stark and worth stating: the naive route needs $10^{12}$ **shallow** circuits, and phase estimation needs one circuit of depth $10^{8}$. On a noisy machine the first is feasible and the second is not, which is precisely why NISQ-era chemistry uses variational methods ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)) despite their worse scaling. **Depth is the scarce resource, and phase estimation spends all of it.**

## Watch out

- You might think phase estimation finds the ground-state energy of a Hamiltonian. It finds the eigenvalue **of whatever eigenstate you feed it**, and returns a random one weighted by overlap if you feed it a superposition. Getting the *ground* state requires already having a good approximation to it, which for large molecules is the hard part ([6.2](06-02-hamiltonian-simulation.md)).
- You might think you can get arbitrary precision cheaply because the qubit count grows only linearly. The qubit count does, but the **circuit depth doubles per bit** — $2^m$ applications of $U$. Precision is exponentially expensive in depth, and depth is what noise destroys.
- You might think the measured $j/2^m$ is the answer. It is an approximation to $\varphi$ within about one bin, and when the true $\varphi$ is a rational $s/r$ you must recover $s/r$ from it by continued fractions ([4.3](04-03-order-finding-and-period-finding.md)). Reporting $j/2^m$ as the period is a classic error.
- You might think controlled-$U^{2^k}$ costs $2^k$ applications of controlled-$U$. Sometimes it does, and then the total depth is $\Theta(2^m)$. But for structured $U$ it can be far cheaper: in order-finding, $U^{2^k}$ is multiplication by $a^{2^k} \bmod N$, and $a^{2^k}$ is precomputed classically by repeated squaring, so each controlled power costs one modular multiplication rather than $2^k$ of them. **That shortcut is what makes Shor's algorithm polynomial rather than exponential** ([4.3](04-03-order-finding-and-period-finding.md)).

## One-liner

> Control $U$, $U^2$, $U^4$, … from a register of ancillas and the eigenphase appears as a plane wave; inverse-Fourier it and read the phase in binary, at a cost of $1/\epsilon$ applications rather than $1/\epsilon^2$ shots.

## Problems

**P1 (🟢)** Let $U = \mathrm{diag}(1, e^{2\pi i\varphi})$ with $\varphi = 3/8$, acting on the eigenstate $\lvert1\rangle$. With $m = 3$ ancillas, write the ancilla state after the controlled powers, identify which basis state the inverse QFT produces, and state the measurement outcome and its probability. Then say what happens if $\varphi = 3/8 + 1/100$ instead.

**P2 (🟡)** Using the precision rule, compute the number of ancilla qubits needed to determine $\varphi$ to 12 correct bits with failure probability at most $10^{-4}$, and the resulting number of applications of $U$. Then compare with the number of shots a naive $X$-basis estimation would need for the same phase accuracy, and state which resource each approach is spending.

**P3 (🔴, optional)** Show that the state after the controlled powers is exactly $\mathrm{QFT}_{2^m}\lvert 2^m\varphi\rangle$ when $2^m\varphi$ is an integer. (a) Write the product form $\bigotimes_k\frac{1}{\sqrt2}\left(\lvert0\rangle+e^{2\pi i2^k\varphi}\lvert1\rangle\right)$ and expand it into a sum over $j$, identifying where $j$'s binary digits enter. (b) Compare with the product form of the QFT from [4.1](04-01-the-quantum-fourier-transform.md) and conclude. (c) Explain why this implies the circuit is exact in that case, and why the inexact case has probability at least $4/\pi^2$ on the nearest bin rather than something worse.

<details>
<summary>Solutions</summary>

**P1** *Exact case.* $\varphi = 3/8 = 0.011$ in binary, so $2^3\varphi = 3$ is an integer. Ancilla $k$ picks up the phase $e^{2\pi i 2^k\cdot 3/8}$:

- $k=0$: $e^{2\pi i\cdot3/8}$
- $k=1$: $e^{2\pi i\cdot 6/8} = e^{2\pi i\cdot 3/4}$
- $k=2$: $e^{2\pi i\cdot 12/8} = e^{2\pi i\cdot 1/2} = -1$

The combined register is

$$\frac{1}{\sqrt8}\sum_{j=0}^{7}e^{2\pi i\cdot 3j/8}\lvert j\rangle = \mathrm{QFT}_8\lvert3\rangle.$$

The inverse QFT returns $\lvert3\rangle = \lvert011\rangle$, so the measurement gives $j = 3$ and $\varphi = 3/8$ with **probability 1**.

*Inexact case, $\varphi = 3/8 + 0.01 = 0.385$.* Now $2^3\varphi = 3.08$, not an integer, so the inverse QFT produces a peak at $j = 3$ with sidelobes. The nearest bin is still $j = 3$, and since $2^m\varphi$ is only $0.08$ away from it the peak is very sharp — the probability of $j=3$ is above 0.97. The estimate is $3/8 = 0.375$, in error by 0.01, which is within the bin width $1/8 = 0.125$. **With only 3 bits you cannot resolve better than $1/8$**, so the error is resolution-limited rather than a failure of the algorithm.

**P2** *Ancillas.* With $n = 12$ and $\epsilon = 10^{-4}$:

$$m = 12 + \left\lceil\log_2\!\left(2 + \frac{1}{2\times10^{-4}}\right)\right\rceil = 12 + \lceil\log_2(5002)\rceil = 12 + 13 = 25.$$

*Applications of $U$.* The controlled powers use $U$ a total of $\sum_{k=0}^{24}2^k = 2^{25}-1 \approx 3.4\times10^7$ times, in one coherent circuit.

*The naive comparison.* Twelve bits of phase means accuracy $\epsilon_\varphi = 2^{-12} = 2.4\times10^{-4}$. Estimating a $\pm1$-valued expectation to that accuracy costs about

$$N \approx \frac{1}{\epsilon_\varphi^2} = \frac{1}{(2.4\times10^{-4})^2} \approx 1.7\times10^7 \text{ shots},$$

each a depth-1 circuit — so also about $10^7$ applications of $U$, but spread over millions of *independent shallow runs*.

*Which resource.* Interesting: at 12 bits the two totals are comparable, because the quadratic advantage only kicks in as precision tightens. The difference is **how** the applications are arranged:

| approach | applications of $U$ | circuit depth | shots |
|---|---|---|---|
| phase estimation | $3.4\times10^7$ | $3.4\times10^7$ | a few |
| naive sampling | $1.7\times10^7$ | 1 | $1.7\times10^7$ |

Phase estimation spends **coherence**; naive sampling spends **wall-clock time**. Push to 24 bits and phase estimation needs $\approx10^{11}$ applications while sampling needs $\approx10^{14}$ shots — the quadratic gap opens up, but so does the depth requirement. The choice between them is exactly the choice between a fault-tolerant machine and a NISQ one ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)).

**P3**

(a) Expand the product over the $m$ ancillas, writing $j_k \in\{0,1\}$ for the choice made in factor $k$:

$$\bigotimes_{k=0}^{m-1}\frac{\lvert0\rangle + e^{2\pi i2^k\varphi}\lvert1\rangle}{\sqrt2} = \frac{1}{\sqrt{2^m}}\sum_{j_0,\dots,j_{m-1}\in\{0,1\}}\left(\prod_{k}e^{2\pi i 2^k\varphi j_k}\right)\lvert j_{m-1}\cdots j_0\rangle.$$

Combine the exponentials: $\prod_k e^{2\pi i2^k\varphi j_k} = e^{2\pi i\varphi\sum_k 2^kj_k} = e^{2\pi i\varphi j}$, where $j = \sum_k 2^kj_k$ is precisely the integer whose binary digits are the $j_k$. So

$$= \frac{1}{\sqrt{2^m}}\sum_{j=0}^{2^m-1}e^{2\pi i\varphi j}\lvert j\rangle.$$

The binary digits enter as the *choices* in each tensor factor, and summing $2^kj_k$ reassembles the integer $j$ — the odometer structure made explicit.

(b) From [4.1](04-01-the-quantum-fourier-transform.md), $\mathrm{QFT}_{2^m}\lvert j_0\rangle = 2^{-m/2}\sum_j e^{2\pi ij_0j/2^m}\lvert j\rangle$. Setting $j_0 = 2^m\varphi$ makes the exponent $e^{2\pi i\varphi j}$, matching (a) term for term. Hence

$$\text{state after controlled powers} = \mathrm{QFT}_{2^m}\big\lvert 2^m\varphi\big\rangle.$$

(c) *Exactness.* Applying $\mathrm{QFT}^{-1}$ to $\mathrm{QFT}\lvert2^m\varphi\rangle$ returns $\lvert2^m\varphi\rangle$ exactly, a single basis state, so the measurement is deterministic. The circuit is exact whenever $\varphi$ has an $m$-bit binary expansion.

*The inexact case.* When $2^m\varphi$ is not an integer, write $2^m\varphi = j_0 + \delta$ with $\lvert\delta\rvert\le1/2$ and $j_0$ the nearest integer. The amplitude on outcome $j_0$ after the inverse QFT is a geometric sum:

$$\alpha_{j_0} = \frac{1}{2^m}\sum_{t=0}^{2^m-1}e^{2\pi i\delta t/2^m}\cdot\text{(phase)} = \frac{1}{2^m}\cdot\frac{e^{2\pi i\delta}-1}{e^{2\pi i\delta/2^m}-1},$$

whose magnitude is a Dirichlet kernel. In the worst case $\delta = 1/2$, and using $\lvert e^{i\theta}-1\rvert = 2\lvert\sin(\theta/2)\rvert$ together with $\sin x \le x$ in the denominator:

$$\lvert\alpha_{j_0}\rvert \ge \frac{1}{2^m}\cdot\frac{2}{2\pi\cdot\tfrac12/2^m\cdot} \cdots \implies \lvert\alpha_{j_0}\rvert^2 \ge \frac{4}{\pi^2} \approx 0.405.$$

The reason it cannot be worse than $4/\pi^2$ is the $\mathrm{sinc}$-like shape of the kernel: a plane wave whose frequency sits exactly halfway between two bins splits its weight between them, and each keeps at least $4/\pi^2$, with the remaining $1 - 8/\pi^2 \approx 0.19$ leaking into distant bins. **The $4/\pi^2$ is the worst-case bin-straddling penalty, and it is a property of the Fourier transform rather than of quantum mechanics** — exactly the spectral leakage familiar from windowing in classical signal processing ([`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md)).

</details>

## Connections

- **Backward:** the mechanism is phase kickback from [3.1](03-01-oracles-reversibility-and-phase-kickback.md) applied to controlled-$U$, and the readout is the inverse QFT of [4.1](04-01-the-quantum-fourier-transform.md). The $1/\epsilon$ versus $1/\epsilon^2$ comparison is the shot-noise arithmetic of [1.3](01-03-measurement-and-the-born-rule.md).
- **Forward:** [4.3](04-03-order-finding-and-period-finding.md) applies phase estimation to the modular-multiplication operator and recovers the period by continued fractions; [3.6](03-06-amplitude-amplification-counting-and-optimality.md)'s quantum counting applies it to the Grover operator. [6.2](06-02-hamiltonian-simulation.md) applies it to $e^{-iHt}$ for ground-state energies, and [6.5](06-05-quantum-linear-algebra-and-dequantization.md) applies it inside HHL.
- **Sideways:** the $1/\epsilon$ scaling is the **Heisenberg limit** of quantum metrology, beating the standard quantum limit $1/\sqrt\epsilon$-worth of samples by using coherence instead of averaging — the same principle behind squeezed-light interferometry in [`photonics-quantum-optics` 3.4](../../photonics-quantum-optics/lessons/03-04-quadratures-phase-space-shot-noise.md). The spectral leakage bound in P3 is the Dirichlet-kernel behaviour of any finite Fourier transform ([`fourier-analysis` 1.3](../../fourier-analysis/lessons/01-03-convergence-pointwise-uniform-gibbs.md)).
