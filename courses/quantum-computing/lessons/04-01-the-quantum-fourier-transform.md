# Quantum Computing · Lesson 4.1: The quantum Fourier transform

> ⏱ ~15 min · Module 4: Fourier, phase, and factoring · Builds on: [3.3 (Bernstein–Vazirani)](03-03-bernstein-vazirani.md), [1.5 (multi-qubit gates and circuits)](01-05-multi-qubit-gates-and-quantum-circuits.md), [`fourier-analysis` 4.2 (DFT and FFT)](../../fourier-analysis/lessons/04-02-dft-fft.md) · Unlocks: [4.2 (quantum phase estimation)](04-02-quantum-phase-estimation.md)

## Why this matters

Module 3 got its speedups from $H^{\otimes n}$, which is the Fourier transform over the group $\mathbb{Z}_2^n$ — the group of bit strings under XOR. That group detects XOR-periods, which is why Simon's algorithm works and why it stops there.

Replace it with the Fourier transform over $\mathbb{Z}_{2^n}$ — the integers mod $2^n$, under ordinary addition — and you can detect *ordinary* periods. That single substitution takes you from Simon's artificial promise problem to factoring, discrete logarithms, and the collapse of public-key cryptography. The QFT is the engine of Module 4, and phase estimation ([4.2](04-02-quantum-phase-estimation.md)) is the instrument built on it.

The QFT's cost is the headline: **$O(n^2)$ gates for a transform of size $2^n$.** The classical FFT needs $O(N\log N) = O(n2^n)$ operations, so the quantum version is exponentially cheaper in gate count. And the catch is just as important as the headline: the output is a quantum state, and you cannot read out its amplitudes. Understanding exactly what that buys and what it forbids is the main conceptual work of this lesson.

## The idea

The discrete Fourier transform takes a list of $N$ numbers and produces another list of $N$ numbers, mixing every input into every output with phases $e^{2\pi ijk/N}$. As a matrix it is dense and $N\times N$; done naively it costs $N^2$ multiplications, and the FFT's divide-and-conquer trick brings that to $N\log N$.

The quantum version applies the same matrix, but to the $2^n$ *amplitudes* of an $n$-qubit register. The reason it is cheap comes from staring at what the transform does to one basis state. The output amplitude on $\lvert k\rangle$ is $e^{2\pi ijk/2^n}$, and if you write $k$ in binary and expand, that phase **factorizes across the output qubits**:

$$e^{2\pi ijk/2^n} = \prod_{\ell} e^{2\pi i j k_\ell/2^{\ell}}.$$

A phase that factorizes across qubits is a **product state**, and product states are cheap: each output qubit needs only its own rotation, conditioned on the input bits. Counting the conditional rotations gives $n(n+1)/2$, plus $n$ Hadamards, plus a reversal of the qubit order at the end.

So the exponential saving is not magic — it is the statement that the DFT matrix, viewed as acting on qubits rather than on a list, is a product of $O(n^2)$ two-qubit gates. The FFT exploits the same factorization; the quantum version simply gets to keep the $2^n$ numbers in $n$ qubits instead of $2^n$ registers.

And here is the catch, stated plainly. After the QFT you hold a state whose $2^n$ amplitudes are the Fourier coefficients. To *read* them you would need exponentially many measurements ([1.3](01-03-measurement-and-the-born-rule.md)). What you can do is **sample** from the distribution $\lvert\hat f(k)\rvert^2$, which is enough if the spectrum is concentrated — a single peak, or a comb of peaks at multiples of a period. That is precisely the situation in period-finding, and it is why the QFT is useful for exactly one family of problems.

## The formal version

> **Definition (QFT).** On $n$ qubits with $N = 2^n$,
> $$\mathrm{QFT}_N\lvert j\rangle = \frac{1}{\sqrt N}\sum_{k=0}^{N-1}e^{2\pi i jk/N}\lvert k\rangle,$$
> extended linearly. It is unitary, and $\mathrm{QFT}_2 = H$.

In words: each basis state becomes a uniform superposition whose phases wind around the circle at a rate set by $j$. A basis state goes to a plane wave, and a plane wave goes to a basis state — the same input-output relationship as in Bernstein–Vazirani ([3.3](03-03-bernstein-vazirani.md)), now with $2^n$ frequencies instead of two per qubit.

> **The product form.** Writing $j$ in binary as $j = j_1j_2\cdots j_n$ and using $0.j_\ell j_{\ell+1}\cdots$ for the binary fraction $\sum_{t\ge0}j_{\ell+t}2^{-(t+1)}$,
> $$\mathrm{QFT}_N\lvert j_1\cdots j_n\rangle = \bigotimes_{\ell=1}^n\ \frac{\lvert0\rangle + e^{2\pi i\,0.j_\ell j_{\ell+1}\cdots j_n}\lvert1\rangle}{\sqrt2}.$$

In words: every output qubit is an equal superposition with a phase given by a *tail* of the input's binary expansion. The tails are what the controlled rotations build up, one bit at a time.

> **The circuit.** With $R_k = \begin{pmatrix}1&0\\0&e^{2\pi i/2^k}\end{pmatrix}$: for each qubit $q = 1,\dots,n$ in order, apply $H$ to qubit $q$, then a controlled-$R_{k}$ on qubit $q$ from each qubit $q+k-1$ below it. Finish by reversing the qubit order with $\lfloor n/2\rfloor$ SWAPs.

> **Cost.** $n$ Hadamards, $n(n+1)/2$ controlled phases, $\lfloor n/2\rfloor$ SWAPs: $\Theta(n^2)$ gates.

Compare the two transforms honestly — the card keeps the gate counts under [Fourier and phase-estimation facts](../reference.md#fourier-and-phase-estimation-facts):

| $n$ | QFT gates $\approx n^2/2$ | classical FFT operations $\approx N\log_2 N$ |
|---|---|---|
| 10 | 55 | 10,240 |
| 20 | 210 | $2.1\times10^{7}$ |
| 2048 | $2.1\times10^{6}$ | $\approx10^{620}$ |

In words: at $n = 2048$ the quantum circuit has a couple of million gates and the classical computation has more operations than there are atoms in the observable universe. That gap is real, and the next statement is why it is not a free lunch:

> **You cannot read the output.** The QFT produces a state, not a list. Extracting all $N$ amplitudes requires $\Omega(N)$ measurements, so the QFT does not give a faster FFT for signal processing. It is useful only when the information you want is a *property of the spectrum* that a few samples reveal.

One practical note that matters at scale:

> **Approximate QFT.** The controlled rotations $R_k$ for large $k$ are tiny — an angle of $2\pi/2^k$. Dropping all rotations with $k > O(\log n)$ changes the output negligibly and reduces the gate count to $O(n\log n)$. Every serious resource estimate for Shor uses the approximate QFT.

## Picture

![A three-wire circuit labelled j-one, j-two, j-three. The first wire gets an H box, then receives a controlled R-two from the second wire and a controlled R-three from the third. The second wire then gets an H box and a controlled R-two from the third. The third wire gets an H box. Finally a purple SWAP connects the first and third wires, labelled bit reversal. Annotations note that for n equals 3 there are three H gates, three controlled phases and one swap; that R-k is the diagonal gate one and e to the two-pi-i over two-to-the-k, controlled from the k-th qubit down; and that the gate count is n Hadamards plus n times n plus one over two controlled phases, which is order n squared. A table compares QFT gates against classical FFT operations for n equal to 10, 20 and 2048, and a closing red line warns that you cannot read the amplitudes, so the QFT is not a faster FFT.](assets/04-01-fig1.svg)

Notice the structure of the controlled rotations: qubit 1 receives rotations from *every* qubit below it, qubit 2 from every qubit below that, and so on — a triangle, hence $n(n+1)/2$. The rotations get exponentially smaller as they reach further down the register, which is exactly what makes the approximate QFT possible: **the long-range couplings carry almost no information.**

## Worked examples

**Example 1 — the QFT on two qubits, matrix and circuit.**

With $N = 4$, the matrix has entries $e^{2\pi ijk/4} = i^{jk}$:

$$\mathrm{QFT}_4 = \frac12\begin{pmatrix}1&1&1&1\\1&i&-1&-i\\1&-1&1&-1\\1&-i&-1&i\end{pmatrix}.$$

Now the circuit: $H$ on qubit 1, controlled-$R_2 = \mathrm{diag}(1,i) = S$ on qubit 1 from qubit 2, $H$ on qubit 2, then swap.

Trace $\lvert j\rangle = \lvert01\rangle$ ($j = 1$) through it. The matrix says the answer should be the second column read as a state: $\tfrac12(1, i, -1, -i)$ in the basis $\lvert00\rangle,\lvert01\rangle,\lvert10\rangle,\lvert11\rangle$.

*Circuit:* $H$ on qubit 1 sends $\lvert01\rangle\to\tfrac{1}{\sqrt2}(\lvert01\rangle+\lvert11\rangle)$. The controlled-$S$ fires where qubit 2 is 1, which is both terms, but it applies $S$ to qubit 1 — which only matters where qubit 1 is 1, so the $\lvert11\rangle$ term picks up $i$:
$$\tfrac{1}{\sqrt2}\left(\lvert01\rangle + i\lvert11\rangle\right).$$
Then $H$ on qubit 2 sends $\lvert1\rangle\to\tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$ in the second slot:
$$\tfrac12\left(\lvert00\rangle - \lvert01\rangle + i\lvert10\rangle - i\lvert11\rangle\right).$$
Finally swap the two qubits, exchanging $\lvert01\rangle\leftrightarrow\lvert10\rangle$:
$$\tfrac12\left(\lvert00\rangle + i\lvert01\rangle - \lvert10\rangle - i\lvert11\rangle\right) = \tfrac12(1, i, -1, -i). \checkmark$$

The swap at the end is not decoration: without it the circuit computes the QFT with the output bits in reverse order. On real hardware it is often free, since you can simply relabel the wires for the rest of the computation.

**Example 2 — what the QFT does to a periodic state, and why that is the whole application.**

Suppose a register holds a **comb**: equal amplitude on every multiple of a period $r$, offset by some $x_0$. Take $N = 2^n$, and for simplicity let $r$ divide $N$:

$$\lvert\psi\rangle = \sqrt{\frac{r}{N}}\sum_{t=0}^{N/r - 1}\lvert x_0 + tr\rangle.$$

Apply the QFT and collect terms:

$$\mathrm{QFT}_N\lvert\psi\rangle = \sqrt{\frac{r}{N}}\cdot\frac{1}{\sqrt N}\sum_k\left[\sum_t e^{2\pi i(x_0+tr)k/N}\right]\lvert k\rangle = \sqrt{\frac{r}{N^2}}\sum_k e^{2\pi ix_0k/N}\left[\sum_{t}e^{2\pi i trk/N}\right]\lvert k\rangle.$$

The inner sum is a geometric series in $e^{2\pi irk/N}$ with $N/r$ terms. It equals $N/r$ when $rk/N$ is an integer — that is, when $k$ is a multiple of $N/r$ — and **zero otherwise**, by the same cancellation as the character orthogonality of [3.3](03-03-bernstein-vazirani.md). So

$$\mathrm{QFT}_N\lvert\psi\rangle = \frac{1}{\sqrt r}\sum_{m=0}^{r-1}e^{2\pi i x_0 m/r}\,\big\lvert\, m\cdot\tfrac Nr\,\big\rangle.$$

Read off three facts, each of which is load-bearing in [4.3](04-03-order-finding-and-period-finding.md).

1. The output is supported on exactly $r$ values, the **multiples of $N/r$**. Measuring gives a random one of them, from which $r$ can be extracted.
2. The offset $x_0$ — which is random and unknown, since it comes from an earlier measurement — appears only in the **phases**, so it does not affect the measurement probabilities at all. This is what makes the algorithm work despite the offset being unknowable.
3. The output distribution is **uniform** over the $r$ peaks.

**The QFT converts a period in position into a period in frequency, and hides the unknown offset in unobservable phases.** That sentence is the whole reason Module 4 exists. (When $r$ does not divide $N$ the peaks smear slightly, which is why the real algorithm needs continued fractions to clean up — see [4.3](04-03-order-finding-and-period-finding.md).)

## Watch out

- You might think the QFT gives an exponentially faster FFT for signal processing. It does not. You would need to load $N$ classical numbers into the amplitudes (costing $\Omega(N)$ without special hardware) and read $N$ numbers out (costing $\Omega(N)$ measurements). Both ends of the pipeline destroy the advantage — the same input/output bottleneck that dequantized several quantum machine-learning claims ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)).
- You might think the QFT is just $H^{\otimes n}$ with extra steps. The two are different transforms over different groups: $H^{\otimes n}$ is Fourier over $\mathbb{Z}_2^n$ and detects XOR-periods; $\mathrm{QFT}_{2^n}$ is Fourier over $\mathbb{Z}_{2^n}$ and detects ordinary periods. They agree only at $n=1$.
- You might think the bit-reversal swaps are optional. They are needed for the circuit to compute the QFT as defined, but in practice you can absorb them by relabelling wires downstream. Forgetting them in a hand calculation gives an answer with reversed bits, which looks like a bug in the following stage.
- You might think you need exact rotations. You do not, and cannot afford them: $R_k$ for $k = 50$ is a rotation by $2\pi/2^{50}$, far below any achievable gate fidelity. Truncating at $k \approx \log n + O(1)$ costs negligible accuracy and drops the count to $O(n\log n)$, which is what every resource estimate assumes.

## One-liner

> The Fourier transform's phases factorize across qubits, so a $2^n$-point transform costs $O(n^2)$ gates — but the output is a state you can only sample, which is why the QFT is useful for finding periods and nothing else.

## Problems

**P1 (🟢)** Write out $\mathrm{QFT}_4$ as a $4\times4$ matrix, then apply the circuit ($H$ on qubit 1, controlled-$S$ from qubit 2, $H$ on qubit 2, swap) to the input $\lvert10\rangle$ and verify the result matches the corresponding column of the matrix.

**P2 (🟡)** Count the gates. For general $n$, show the QFT circuit uses exactly $n$ Hadamards and $n(n+1)/2$ controlled-phase gates, and evaluate both counts at $n = 8$ and $n = 2048$. Then determine how many of the controlled phases have rotation angle smaller than $10^{-6}$ radians at $n = 2048$, and state what that implies about the approximate QFT.

**P3 (🔴, optional)** Prove the comb-to-comb result. Let $r \mid N$ and $\lvert\psi\rangle = \sqrt{r/N}\sum_{t=0}^{N/r-1}\lvert x_0+tr\rangle$. (a) Apply the QFT and evaluate the geometric sum, showing the output is supported exactly on multiples of $N/r$. (b) Show the measurement probabilities are uniform over those $r$ values and independent of $x_0$. (c) Explain why fact (b) is essential to the algorithm's correctness, given that $x_0$ arises from an earlier measurement and is never known.

<details>
<summary>Solutions</summary>

**P1** The matrix, with $\omega = e^{2\pi i/4} = i$ and entries $\tfrac12\omega^{jk}$:

$$\mathrm{QFT}_4 = \frac12\begin{pmatrix}1&1&1&1\\1&i&-1&-i\\1&-1&1&-1\\1&-i&-1&i\end{pmatrix}.$$

Input $\lvert10\rangle$ is $j = 2$, so the expected output is the third column read as a state: $\tfrac12(1,-1,1,-1)$.

*Circuit.* $H$ on qubit 1 sends $\lvert1\rangle\to\tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$ in the first slot:
$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle - \lvert10\rangle\right).$$
Controlled-$S$ from qubit 2 onto qubit 1: qubit 2 is 0 in both terms, so the control never fires — no change.
$H$ on qubit 2 sends $\lvert0\rangle\to\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$:
$$\tfrac12\left(\lvert00\rangle+\lvert01\rangle-\lvert10\rangle-\lvert11\rangle\right).$$
Swap the qubits, exchanging $\lvert01\rangle\leftrightarrow\lvert10\rangle$:
$$\tfrac12\left(\lvert00\rangle - \lvert01\rangle + \lvert10\rangle - \lvert11\rangle\right) = \tfrac12(1,-1,1,-1). \checkmark$$

**P2** *The count.* The circuit processes qubits in order. Qubit $q$ receives one $H$, then one controlled rotation from each of the $n - q$ qubits below it. Summing:

$$\text{Hadamards} = n, \qquad \text{controlled phases} = \sum_{q=1}^{n}(n-q) = \sum_{m=0}^{n-1}m = \frac{n(n-1)}{2}.$$

(The stated $n(n+1)/2$ is the common convention where the Hadamard on each qubit is counted as its own $R_1$; either way the count is $\Theta(n^2)$ and differs by $n$.) Evaluating with $n(n-1)/2$:

| $n$ | Hadamards | controlled phases |
|---|---|---|
| 8 | 8 | 28 |
| 2048 | 2,048 | 2,096,128 |

*The tiny rotations.* The rotation on qubit $q$ controlled from the qubit $k-1$ positions below has angle $2\pi/2^{k}$. This is below $10^{-6}$ radians when

$$\frac{2\pi}{2^k} < 10^{-6} \implies 2^k > 6.28\times10^6 \implies k \ge 23.$$

At $n = 2048$, the number of controlled phases with $k \ge 23$ is the number of pairs at distance $\ge 22$, namely $\sum_{q}\max(0, n-q-21) \approx \frac{(n-22)^2}{2} \approx 2.05\times10^6$ — that is, **over 97 percent of the controlled phases are rotations smaller than a microradian.**

The implication: no hardware can implement them faithfully, and they contribute almost nothing. Truncating at $k = O(\log n)$ leaves about $n\log n \approx 2048\times11 \approx 2.3\times10^4$ rotations — a factor of nearly 100 saved — with provably negligible error. Every credible estimate of Shor's cost uses the approximate QFT for exactly this reason ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)).

**P3**

(a) Apply the QFT term by term:

$$\mathrm{QFT}_N\lvert\psi\rangle = \sqrt{\frac rN}\sum_{t=0}^{N/r-1}\frac{1}{\sqrt N}\sum_{k=0}^{N-1}e^{2\pi i(x_0+tr)k/N}\lvert k\rangle = \frac{\sqrt r}{N}\sum_k e^{2\pi ix_0k/N}\left[\sum_{t=0}^{N/r-1}e^{2\pi itrk/N}\right]\lvert k\rangle.$$

The bracket is a geometric series with ratio $\zeta = e^{2\pi irk/N}$ and $N/r$ terms:

$$\sum_{t=0}^{N/r-1}\zeta^t = \begin{cases}\dfrac Nr & \zeta = 1,\\[4pt] \dfrac{\zeta^{N/r}-1}{\zeta-1} = 0 & \zeta\ne1,\end{cases}$$

where the second case vanishes because $\zeta^{N/r} = e^{2\pi i k} = 1$ while $\zeta \ne 1$. Now $\zeta = 1$ exactly when $rk/N \in \mathbb{Z}$, i.e. when $k$ is a multiple of $N/r$. Writing $k = m\cdot N/r$ for $m = 0,\dots,r-1$:

$$\mathrm{QFT}_N\lvert\psi\rangle = \frac{\sqrt r}{N}\cdot\frac Nr\sum_{m=0}^{r-1}e^{2\pi ix_0m/r}\left\lvert m\tfrac Nr\right\rangle = \frac{1}{\sqrt r}\sum_{m=0}^{r-1}e^{2\pi ix_0m/r}\left\lvert m\tfrac Nr\right\rangle.$$

Supported on exactly the $r$ multiples of $N/r$, as claimed. ✓ (Normalization check: $r$ terms each of magnitude $1/\sqrt r$, total probability 1. ✓)

(b) The amplitude on $\lvert mN/r\rangle$ is $\tfrac{1}{\sqrt r}e^{2\pi ix_0m/r}$, whose squared modulus is $1/r$ regardless of $m$ and of $x_0$, since the exponential has modulus 1:

$$P\!\left(k = m\tfrac Nr\right) = \frac1r \quad\text{for each } m = 0,\dots,r-1.$$

**Uniform, and completely independent of the offset.**

(c) In the real algorithm ([4.3](04-03-order-finding-and-period-finding.md)) the comb arises as follows: you compute $f(x) = a^x \bmod N$ into a second register and measure it. The measurement returns some random value, collapsing the first register to the set of $x$ with that value — which is a comb with period $r$ and an offset $x_0$ determined by which value you happened to get. **You cannot know $x_0$**, because knowing it would require solving a discrete logarithm, which is as hard as the problem you are trying to solve.

So the algorithm's correctness hinges entirely on (b): the measurement statistics after the QFT are the same for every $x_0$, so an unknown offset is harmless. Had the probabilities depended on $x_0$, the algorithm would need information it cannot obtain and the whole approach would fail.

This is the same structural point as [3.4](03-04-simons-algorithm.md) P2, where the unknown pair index $v$ appeared only as a phase $(-1)^{x_v\cdot z}$ and dropped out of the probabilities. **In both algorithms, the thing you cannot know hides in a phase, and the thing you want survives in the magnitudes.** That is the design pattern of period-finding, and recognizing it is worth more than memorizing either derivation.

</details>

## Connections

- **Backward:** the QFT generalizes $H^{\otimes n}$ from [3.1](03-01-oracles-reversibility-and-phase-kickback.md) from the group $\mathbb{Z}_2^n$ to $\mathbb{Z}_{2^n}$; the geometric-sum cancellation in P3 is the same character orthogonality proved in [3.3](03-03-bernstein-vazirani.md) P2. The classical transform it implements, and the divide-and-conquer factorization that makes both versions cheap, are in [`fourier-analysis` 4.2](../../fourier-analysis/lessons/04-02-dft-fft.md).
- **Forward:** [4.2](04-02-quantum-phase-estimation.md) uses the inverse QFT to read an eigenphase out of a register — the single most reused subroutine in the field. [4.3](04-03-order-finding-and-period-finding.md) applies it to modular exponentiation and gets the period; [4.4](04-04-shors-factoring-algorithm.md) turns that into factoring.
- **Sideways:** the QFT is the Fourier transform of the *group* $\mathbb{Z}_N$, and the general statement — that a Fourier transform over any finite abelian group can be implemented efficiently — is what makes the abelian hidden subgroup problem tractable ([4.5](04-05-the-hidden-subgroup-problem.md)). Its characters are the roots of unity of [`abstract-algebra` 1.2](../../abstract-algebra/lessons/01-02-cyclic-groups-order.md), and the "spectrum of a periodic signal is a comb" result of P3 is the discrete version of the Poisson summation you meet in [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md).
