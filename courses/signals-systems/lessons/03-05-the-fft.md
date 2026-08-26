# Signals & Systems · Lesson 3.5: The FFT — same answer, less work

> ⏱ ~15 min · Module 3: Sampling and the discrete-time world · Builds on: [3.4 The discrete Fourier transform](03-04-discrete-fourier-transform.md), [3.3 The discrete-time Fourier transform](03-03-discrete-time-fourier-transform.md) · Unlocks: 4.4 (filter design), and every piece of software that computes a spectrum

## Why this matters

Start with the single most important sentence in this lesson, because almost everyone gets it wrong the first time:

> **The FFT is not a transform. It is an algorithm for computing the DFT of [3.4](03-04-discrete-fourier-transform.md).**

There is no "FFT of a signal" that differs from its DFT. Feed the same $x[n]$ to a direct DFT sum and to an FFT routine and you get the *same numbers* — same bins, same complex values, same physical interpretation. What changes is how long it takes. And that change is so large that it moved spectrum analysis out of the "run it overnight on the mainframe" category and into "run it sixty times a second on a phone." Your audio player, your Wi-Fi radio, your MRI scanner, and every plot of a spectrum you have ever seen are downstream of this one restructuring of a sum.

## The idea

The DFT as written in [3.4](03-04-discrete-fourier-transform.md) is brute force: for each of $N$ output bins, add up $N$ terms. That is $N \times N$ work, and $N^2$ grows viciously.

| $N$ | direct DFT ($N^2$) | FFT ($N\log_2 N$) | speedup |
|---|---|---|---|
| 8 | 64 | 24 | 2.7× |
| 64 | 4,096 | 384 | 10.7× |
| 1,024 | 1,048,576 | 10,240 | 102× |
| 65,536 | 4,294,967,296 | 1,048,576 | 4,096× |
| 1,048,576 | $\approx 1.1\times10^{12}$ | $\approx 2.1\times10^{7}$ | $\approx 52{,}000\times$ |

Make that concrete. A million-point spectrum, direct: $N^2 = 10^{12}$ operations. A machine doing $10^9$ operations per second needs $10^{12}/10^9 = 1000$ seconds — **about 17 minutes for one spectrum**. The same spectrum by FFT: $N\log_2 N \approx 2\times 10^7$ operations, or **about 0.02 seconds**. Same answer. Seventeen minutes versus a blink.

Where does the waste come from? The brute-force sum recomputes the same complex exponentials over and over. The twiddle factor $W_N^{nk}$ takes only $N$ distinct values (it lives on the unit circle and wraps), yet the direct sum evaluates products with it $N^2$ times, never noticing the repetition.

The fix is **divide and conquer**: split the samples into the even-indexed ones and the odd-indexed ones. Each half has its own $N/2$-point DFT — two problems of a quarter the cost each, so half the total. Then a cheap step stitches the two halves back into the full $N$-point answer. Then do the same thing to each half. And to each quarter. You keep halving until you hit one-sample DFTs, which are free. The halving can happen $\log_2 N$ times, and that logarithm is the whole story.

## The formal version

**Setup (from [3.4](03-04-discrete-fourier-transform.md)).** For a length-$N$ sequence $x[n]$,

$$X[k] = \sum_{n=0}^{N-1} x[n]\,W_N^{nk}, \qquad W_N \equiv e^{-j2\pi/N}, \qquad k = 0,1,\dots,N-1,$$

where $W_N$ is the **twiddle factor**, the primitive $N$-th root of unity, and $j$ is the imaginary unit. *In words: bin $k$ is the correlation of the signal with a complex sinusoid that completes exactly $k$ cycles across the record.*

**Two identities we need.** First,

$$W_N^2 = e^{-j2\pi\cdot 2/N} = e^{-j2\pi/(N/2)} = W_{N/2}.$$

*In words: squaring the $N$-point twiddle gives the $N/2$-point twiddle* — a half-length DFT is hiding inside the full one. Second, the one that pays for everything:

$$W_N^{N/2} = e^{-j2\pi (N/2)/N} = e^{-j\pi} = \cos\pi - j\sin\pi = -1.$$

*In words: going halfway around the unit circle is multiplication by $-1$.*

**The split.** Take $N$ even and separate the sum by parity of $n$, writing $n = 2r$ for the evens and $n = 2r+1$ for the odds, with $r = 0,\dots,\tfrac N2 - 1$:

$$X[k] = \sum_{r=0}^{N/2-1} x[2r]\,W_N^{2rk} \;+\; \sum_{r=0}^{N/2-1} x[2r+1]\,W_N^{(2r+1)k}.$$

Pull the common factor $W_N^{k}$ out of the odd sum and use $W_N^{2rk} = (W_N^2)^{rk} = W_{N/2}^{rk}$ in both:

$$X[k] = \underbrace{\sum_{r=0}^{N/2-1} x[2r]\,W_{N/2}^{rk}}_{E[k]} \;+\; W_N^{k}\underbrace{\sum_{r=0}^{N/2-1} x[2r+1]\,W_{N/2}^{rk}}_{O[k]}.$$

$E[k]$ and $O[k]$ are literally the $N/2$-point DFTs of the even and odd subsequences. *In words: the full transform is the even-samples transform plus a twiddled copy of the odd-samples transform.*

**The free second half.** $E$ and $O$ are $N/2$-point DFTs, so they are periodic in $k$ with period $N/2$: $E[k+N/2]=E[k]$ and $O[k+N/2]=O[k]$. The only thing that changes when $k \to k+N/2$ is the twiddle, and by the identity above $W_N^{k+N/2} = W_N^{k}\,W_N^{N/2} = -W_N^{k}$. Therefore, for $k = 0,1,\dots,\tfrac N2 - 1$:

$$\boxed{\;X[k] = E[k] + W_N^{k}\,O[k], \qquad X[k+\tfrac N2] = E[k] - W_N^{k}\,O[k]. \;}$$

*In words: one twiddle multiplication, then an add and a subtract, produces **two** output bins at once.* That pair of operations is the **butterfly** — named for the shape of its flow graph. Computing the top half of the spectrum gives you the bottom half for free, sign-flipped.

**What it bought.** An $N$-point DFT now costs: two $N/2$-point DFTs, plus $N/2$ twiddle multiplies and $N$ add/subtracts to combine them. Written as a recurrence, with $T(N)$ the cost of an $N$-point transform,

$$T(N) = 2\,T(N/2) + O(N) \;\Longrightarrow\; T(N) = O(N\log N),$$

which is the standard divide-and-conquer recurrence (the same one that makes mergesort fast; the general machinery belongs to numerical analysis and algorithms, not here). Concretely: recursing all the way down gives $\log_2 N$ **stages**, each containing $N/2$ butterflies — so $\tfrac N2 \log_2 N$ complex multiplies and $N\log_2 N$ complex additions. Against $N^2$, that is the table above.

**Radix-2 decimation in time (the sketch).** Splitting by parity of the *time* index is called **decimation in time**; doing it by factors of two is **radix-2**. Because the recursion re-sorts the samples by parity at every level, an in-place implementation wants the input in **bit-reversed order** — sample index $n$ goes to the slot whose binary digits are $n$'s reversed (for $N=8$: $0,4,2,6,1,5,3,7$) — a bookkeeping detail, not a mathematical one. Radix-2 needs $N$ to be a power of two; other lengths have their own algorithms (mixed-radix for composite $N$, Bluestein's chirp method for arbitrary and prime $N$). This is why people habitually **zero-pad a record up to the next power of two** before transforming.

## Picture

![Left: one butterfly, with inputs E[k] and O[k], a twiddle multiplier on the O branch, and plus/minus outputs X[k] and X[k+N/2]. Right: the full four-point radix-2 flow graph, two stages of two butterflies, inputs entering in bit-reversed order](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the same answer, verified).** Transform $x[n] = \{1,2,3,4\}$, $N=4$, by butterflies. Here $W_4 = e^{-j2\pi/4} = -j$, so $W_4^0 = 1$ and $W_4^1 = -j$.

*Stage 1 — the two half-transforms.* Evens are $x[0]=1,\;x[2]=3$; odds are $x[1]=2,\;x[3]=4$. A 2-point DFT is just sum and difference ($W_2 = -1$):

$$E[0] = 1+3 = 4,\quad E[1] = 1-3 = -2; \qquad O[0] = 2+4 = 6,\quad O[1] = 2-4 = -2.$$

*Stage 2 — two butterflies.* For $k=0$ (twiddle $W_4^0=1$) and $k=1$ (twiddle $W_4^1=-j$):

$$X[0] = E[0] + O[0] = 10, \qquad X[2] = E[0] - O[0] = -2,$$
$$X[1] = E[1] + (-j)(-2) = -2+2j, \qquad X[3] = E[1] - (-j)(-2) = -2-2j.$$

So $X = \{10,\;-2+2j,\;-2,\;-2-2j\}$ — **identical**, entry for entry, to the direct DFT of the same sequence in [3.4](03-04-discrete-fourier-transform.md). Bin 0 is $1+2+3+4=10$, the DC sum, exactly as it must be. Cost: 4 butterflies (2 stages × 2) versus $4^2=16$ terms directly. At $N=4$ the saving is trivial; at $N=4096$ it is 341-fold (that's P1).

**Example 2 (why you'd care — fast convolution).** Filtering a signal with an FIR filter $h[n]$ of $P$ taps is a convolution ([1.5](01-05-convolution-discrete-time.md)): every output sample costs $P$ multiplies, so $L$ output samples cost $LP$. For a long signal and a long filter that is brutal. But the convolution theorem says convolution in time is multiplication in frequency, and the DFT's version of it is *circular* convolution ([3.4](03-04-discrete-fourier-transform.md)). So:

1. **Zero-pad** both $x$ and $h$ to a common length $N \ge L+P-1$ (and, in practice, to a power of two). This is not optional — it is the fix for the circular-convolution wraparound flagged in [3.4](03-04-discrete-fourier-transform.md). With enough zeros, the circular result *is* the linear result, because the wrapped tail lands in the padding.
2. FFT both, **multiply the spectra bin by bin** ($N$ multiplies), inverse-FFT the product.

Cost: three FFTs plus $N$ multiplies, roughly $\tfrac32 N\log_2 N + N$, against $LP$ directly. For filters beyond a few dozen taps the FFT route wins, and the margin widens fast — P3 works a case where it is 30× cheaper.

## Watch out

- **You might think the FFT is an approximation, or a different transform with its own theory.** It is neither. It computes the DFT exactly — the algebra above is exact, no truncation anywhere. In floating point the FFT is in fact *more* accurate than the direct sum, because $\log_2 N$ stages of rounding accumulate less error than $N$ sequential additions. "Take the FFT of the signal" always means "take its DFT, quickly."
- **You might think the FFT requires $N$ to be a power of two.** Only radix-2 does. Mixed-radix and Bluestein handle any length. But power-of-two lengths are the fastest path, which is why zero-padding to 1024 or 4096 is a reflex — and be honest about what padding does: it interpolates the spectrum onto finer bins, it does **not** add resolution. Resolution is set by the record duration $N T_s$ (with $T_s$ the sampling period), and zeros add no new observation.
- **You might expect FFT-based filtering to reproduce ordinary convolution automatically.** It reproduces *circular* convolution. Without padding to at least $L+P-1$, the filter's tail wraps around and corrupts the start of your output — a distinctive, easy-to-miss artifact.

## One-liner

> The FFT is not new mathematics: splitting the DFT into even and odd samples and using $W_N^{N/2}=-1$ makes one twiddle multiply serve two output bins, turning $N^2$ into $N\log_2 N$ — a 17-minute spectrum into a 20-millisecond one.

## Problems

**P1 (🟢)** A spectrum analyzer computes a 4096-point transform. (a) How many complex multiplications does the direct DFT need? (b) How many operations does an FFT need, counted as $N\log_2 N$? (c) What is the speedup? (d) At $10^9$ operations per second, how long does each take?

**P2 (🟡)** Use the butterfly equations to transform $x[n]=\{4,3,2,1\}$, $N=4$: form the two 2-point DFTs $E$ and $O$, then combine. Verify $X[0]$ against the DC sum, and check that $X[3]=X[1]^*$.

**P3 (🔴)** One second of audio at 48 kHz (48,000 samples) is filtered by a 1,024-tap FIR filter. (a) How many multiplies does direct convolution need? (b) For the FFT route, what is the shortest transform length $N$ that avoids circular wraparound, and what is the next power of two? (c) Using $\tfrac N2\log_2 N$ complex multiplies per FFT, three FFTs, plus $N$ pointwise multiplies, what is the total? (d) The speedup?

<details>
<summary>Solutions</summary>

**P1** $N = 4096 = 2^{12}$, so $\log_2 N = 12$.

(a) Direct: $N^2 = 4096^2 = 16{,}777{,}216$ complex multiplications.

(b) FFT: $N\log_2 N = 4096 \times 12 = 49{,}152$ operations. (Broken down: 12 stages of $\tfrac N2 = 2048$ butterflies each, so $24{,}576$ butterflies — one complex multiply and one add/subtract apiece.)

(c) Speedup $= \dfrac{16{,}777{,}216}{49{,}152} = \dfrac{2^{24}}{2^{12}\cdot 12} = \dfrac{4096}{12} \approx 341\times$.

(d) Direct: $16{,}777{,}216 / 10^9 \approx 0.0168\ \mathrm{s} = 16.8$ ms. FFT: $49{,}152/10^9 \approx 49.2\ \mu\mathrm{s}$.

*Check.* 16.8 ms per spectrum caps you at about 60 spectra per second — a direct DFT could just barely keep up with a video frame rate. At 49 µs the FFT can do it 20,000 times a second. That gap is why real-time spectrum displays exist. ✓

**P2** $N=4$, $W_4 = -j$. Evens: $x[0]=4,\;x[2]=2$. Odds: $x[1]=3,\;x[3]=1$.

$$E[0] = 4+2 = 6,\quad E[1] = 4-2 = 2; \qquad O[0] = 3+1 = 4,\quad O[1] = 3-1 = 2.$$

Butterfly with $k=0$ (twiddle $1$):

$$X[0] = E[0]+O[0] = 6+4 = 10, \qquad X[2] = E[0]-O[0] = 6-4 = 2.$$

Butterfly with $k=1$ (twiddle $W_4^1 = -j$, so $W_4^1 O[1] = -2j$):

$$X[1] = E[1] + (-2j) = 2-2j, \qquad X[3] = E[1] - (-2j) = 2+2j.$$

So $X = \{10,\;2-2j,\;2,\;2+2j\}$.

*Check.* DC: $X[0]$ should be $\sum x[n] = 4+3+2+1 = 10$ ✓. Conjugate symmetry: the input is real, so $X[N-k] = X[k]^*$; indeed $X[3] = 2+2j = (2-2j)^* = X[1]^*$ ✓. And directly, $X[1] = 4 + 3(-j) + 2(-j)^2 + 1(-j)^3 = 4 - 3j - 2 + j = 2-2j$ ✓ (using $(-j)^2=-1$, $(-j)^3=j$).

**P3** $L = 48{,}000$ samples, $P = 1{,}024$ taps.

(a) Direct convolution: $L\cdot P = 48{,}000 \times 1{,}024 = 49{,}152{,}000$ multiplies.

(b) The linear convolution has length $L+P-1 = 48{,}000 + 1{,}024 - 1 = 49{,}023$, so any $N \ge 49{,}023$ avoids wraparound. The next power of two is $2^{16} = 65{,}536$.

(c) One 65,536-point FFT costs $\tfrac N2\log_2 N = 32{,}768 \times 16 = 524{,}288$ complex multiplies. Three of them (forward on $x$, forward on $h$, inverse on the product) is $3 \times 524{,}288 = 1{,}572{,}864$, plus the $N = 65{,}536$ pointwise bin multiplies:

$$1{,}572{,}864 + 65{,}536 = 1{,}638{,}400 \text{ complex multiplies.}$$

(d) Speedup $= \dfrac{49{,}152{,}000}{1{,}638{,}400} = 30.0\times$.

*Check.* $1{,}638{,}400 \times 30 = 49{,}152{,}000$ ✓. Two sanity notes: complex multiplies cost more than real ones, so the true wall-clock win here is nearer 10× than 30× — still decisively worth it. And in practice the filter's spectrum $H[k]$ is computed once and reused, dropping one FFT. Note also that $65{,}536 > 49{,}023$ with room to spare, so the circular result equals the linear one and no tail wraps into the first samples. ✓

</details>

## Flashback

**From Lesson 3.4 (The discrete Fourier transform):** Compute the 4-point DFT of $x[n] = \{0,\,1,\,0,\,-1\}$ directly from the definition. If these samples were taken at $f_s = 8$ kHz, which bin holds the energy, and what physical frequency does it correspond to?

<details>
<summary>Solution</summary>

With $N=4$, $W_4 = e^{-j2\pi/4} = -j$, and $X[k] = \sum_{n=0}^{3} x[n](-j)^{nk}$. Only $n=1$ and $n=3$ contribute. Using $(-j)^2=-1$, $(-j)^3=j$, $(-j)^4=1$:

$$X[0] = 0+1+0-1 = 0,$$
$$X[1] = 1\cdot(-j)^1 + (-1)\cdot(-j)^3 = -j - j = -2j,$$
$$X[2] = 1\cdot(-j)^2 + (-1)\cdot(-j)^6 = -1 - (-1) = 0,$$
$$X[3] = 1\cdot(-j)^3 + (-1)\cdot(-j)^9 = j + j = 2j.$$

So $X = \{0,\,-2j,\,0,\,2j\}$. The energy sits in bins 1 and 3.

*Check.* The sequence is exactly one period of $\sin(2\pi n/4)$: $\sin 0 = 0$, $\sin(\pi/2)=1$, $\sin\pi = 0$, $\sin(3\pi/2)=-1$ ✓. A sine at bin $k_0$ should transform to $-jN/2$ at $k=k_0$ and $+jN/2$ at $k=N-k_0$; with $N=4$ that is $\mp 2j$ at bins 1 and 3 ✓. Purely imaginary output is right for an odd (sine-like) real sequence. Bin 0 is zero because the samples average to zero ✓.

Bin-to-frequency, from [3.4](03-04-discrete-fourier-transform.md): $f_k = k f_s / N = 1 \times 8000/4 = 2$ kHz. Bin 3 is the negative-frequency mirror ($-2$ kHz), not a second tone.

</details>

## Connections

- **Backward:** everything computed here is the DFT of [3.4](03-04-discrete-fourier-transform.md) — same definition, same twiddle factors $W_N$, same bin-to-frequency map $f_k = kf_s/N$, same circular-convolution caveat. The only new ingredient is the algebraic identity $W_N^{N/2}=-1$. The parallel treatment in [`fourier-analysis` 4.2](../../fourier-analysis/lessons/04-02-dft-fft.md) comes at the same algorithm from the pure-math side.
- **Forward:** [4.4 Filter design basics](04-04-filter-design-basics.md) designs filters that are almost always *applied* by the fast-convolution route of Example 2; [4.5 A taste of modulation](04-05-modulation.md) shifts spectra that, in any real system, are computed by FFT. In [`communications`](../../communications/syllabus.md), OFDM — the modulation scheme underneath Wi-Fi, LTE, 5G, and DSL — is built so that its *entire* modulator is an inverse FFT and its demodulator is a forward FFT. That is not a computational convenience bolted on afterward; the standard was designed around the algorithm's existence.
- **Sideways:** divide-and-conquer with the recurrence $T(N)=2T(N/2)+O(N)$ is the central technique of algorithm design, and the numerical side of it lives in [`numerical-analysis`](../../numerical-analysis/syllabus.md). Historically: Cooley and Tukey published in 1965, with the Cold War motivation of scanning seismic records for Soviet nuclear tests — and it later emerged that Gauss had the same algorithm in an unpublished 1805 note on interpolating an asteroid's orbit, 160 years early and two years before Fourier's own memoir. The mathematics was never the bottleneck; the computers were.
