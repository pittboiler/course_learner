# Communication Systems · Lesson 4.3: Error-control coding — block codes

> ⏱ ~15 min · Module 4: Capacity & Coding · Builds on: [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md), [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) · Unlocks: [4.4 Convolutional codes and Viterbi](04-04-convolutional-codes-viterbi.md), [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

[4.2](04-02-channel-capacity-shannon-limit.md) promised that good codes exist. This lesson builds one.

Block codes are the concrete, constructive answer: take $k$ information bits, append $n-k$ carefully chosen parity bits, and gain the ability to detect and correct errors. Hamming's 1950 construction — invented out of frustration with a relay computer that halted on every weekend parity error — is still the cleanest illustration of how redundancy becomes correction, and its algebra (a generator matrix, a parity-check matrix, a syndrome) is the template every later code follows, right up to the LDPC codes in your phone.

The key conceptual move is that a code is a **subspace**, and error correction is a **geometry**: valid codewords are spread far apart in Hamming distance, and decoding means snapping a received word to the nearest one. That is [3.2](03-02-optimal-detection-awgn.md)'s minimum-distance detection all over again — in a binary space instead of a Euclidean one.

## The idea

Suppose you send 4 bits, and any of the 16 possible 4-bit patterns is legal. Then any single bit error turns one legal message into another legal message, and the receiver has no way to notice. **Redundancy is the only defence:** make some received patterns *illegal*, so their appearance reveals that something went wrong.

Add one parity bit and exactly half the 5-bit patterns become illegal. Now a single error always produces an illegal pattern — detectable. But not correctable: you know something broke, not what.

Add more parity bits and the legal patterns become sparser still. Push far enough and every single-error pattern is *closer to its own codeword than to any other*, and now you can correct: snap to the nearest codeword.

The quantity that governs everything is **minimum Hamming distance** — the fewest bit positions in which two codewords differ. A code with minimum distance $d$ can detect $d-1$ errors, or correct $\lfloor(d-1)/2\rfloor$. The picture: put a sphere of radius $t$ around every codeword; if the spheres do not overlap, every pattern inside a sphere decodes unambiguously to its centre. **Coding theory is sphere packing in Hamming space** — the same problem as constellation design in [3.5](03-05-qam-and-union-bound.md), with a different metric.

The elegance of *linear* codes is that this whole structure is linear algebra over the two-element field. Codewords form a subspace; encoding is a matrix multiply; and error detection is a second matrix multiply whose result — the [syndrome](../reference.md#syndrome) — depends only on the error pattern, not on the data. For a Hamming code the syndrome literally *is* the binary address of the flipped bit.

## The formal version

**Arithmetic over $\mathrm{GF}(2)$.** All arithmetic is modulo 2: $1+1=0$, so addition is XOR and subtraction is the same as addition. Vectors are bit strings; matrices are bit matrices.

**Linear block code $(n,k)$.** A $k$-dimensional subspace of $\{0,1\}^n$. There are $2^k$ codewords out of $2^n$ possible words. The **rate** is

$$R = \frac{k}{n}.$$

**Generator matrix.** A $k\times n$ matrix $\mathbf{G}$ whose rows span the code:

$$\mathbf{c} = \mathbf{m}\mathbf{G},$$

with $\mathbf{m}$ the $k$-bit message and $\mathbf{c}$ the $n$-bit codeword. In **systematic form** $\mathbf{G} = [\,\mathbf{I}_k \mid \mathbf{P}\,]$, so the codeword is the message followed by $n-k$ parity bits — convenient, and no loss of generality.

**Parity-check matrix.** The $(n-k)\times n$ matrix $\mathbf{H}$ with

$$\mathbf{G}\mathbf{H}^T = \mathbf{0} \quad\Longleftrightarrow\quad \mathbf{c}\mathbf{H}^T = \mathbf{0}\ \text{for every codeword}.$$

For systematic $\mathbf{G}=[\mathbf{I}_k\mid\mathbf{P}]$, take $\mathbf{H} = [\,\mathbf{P}^T\mid\mathbf{I}_{n-k}\,]$. *In words: $\mathbf{H}$ is a set of parity equations every codeword must satisfy; the code is the null space of $\mathbf{H}$* — the four-subspaces picture of [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md), over $\mathrm{GF}(2)$.

**Syndrome decoding.** Receive $\mathbf{r} = \mathbf{c}+\mathbf{e}$, where $\mathbf{e}$ is the error pattern. Compute

$$\mathbf{s} = \mathbf{r}\mathbf{H}^T = (\mathbf{c}+\mathbf{e})\mathbf{H}^T = \mathbf{0}+\mathbf{e}\mathbf{H}^T = \mathbf{e}\mathbf{H}^T .$$

*In words: the syndrome depends only on the error, not on the transmitted data.* If $\mathbf{s}=\mathbf{0}$, no detectable error. Otherwise look up which error pattern produces that syndrome and subtract it.

Note the crucial structural fact: $\mathbf{e}\mathbf{H}^T$ is the sum of the columns of $\mathbf{H}$ at the error positions. A single error in position $i$ gives $\mathbf{s} = $ column $i$ of $\mathbf{H}$. **So if all columns of $\mathbf{H}$ are distinct and nonzero, every single error is uniquely identifiable.**

**Hamming distance and weight.** $d(\mathbf{x},\mathbf{y})$ is the number of differing positions; the **weight** $w(\mathbf{x})$ is the number of ones. For a linear code, $d(\mathbf{x},\mathbf{y}) = w(\mathbf{x}+\mathbf{y})$, and since the sum of two codewords is a codeword,

$$d_{\min} = \min_{\mathbf{c}\ne\mathbf{0}} w(\mathbf{c}).$$

*In words: for a linear code, the minimum distance is just the weight of the lightest nonzero codeword* — a huge simplification, since you check $2^k-1$ weights instead of $\binom{2^k}{2}$ distances.

**Capability.**

| Goal | Requirement |
|---|---|
| Detect $\le e$ errors | $d_{\min}\ge e+1$ |
| Correct $\le t$ errors | $d_{\min}\ge 2t+1$, i.e. $t = \left\lfloor\frac{d_{\min}-1}{2}\right\rfloor$ |
| Correct $t$ and detect $e>t$ | $d_{\min}\ge t+e+1$ |
| Correct $\le\rho$ erasures | $d_{\min}\ge \rho+1$ |

*In words: detection needs the spheres merely not to coincide; correction needs them not to overlap — which costs twice as much.* Note the erasure row: **a code corrects twice as many erasures as errors**, exactly the point of [4.1](04-01-entropy-mutual-information.md) P3.

**$d_{\min}$ from $\mathbf{H}$.** $d_{\min}$ is the smallest number of columns of $\mathbf{H}$ that sum to zero. (A codeword of weight $w$ is exactly a set of $w$ columns summing to zero.) So: all columns distinct and nonzero $\Rightarrow$ no 1 or 2 columns sum to zero $\Rightarrow d_{\min}\ge3$.

**Hamming codes.** For any $m\ge2$, take $\mathbf{H}$ to have as its columns **all $2^m-1$ nonzero binary $m$-vectors**. This gives

$$n = 2^m-1, \qquad k = 2^m-1-m, \qquad d_{\min}=3, \qquad t=1 .$$

Family: $(3,1)$, $(7,4)$, $(15,11)$, $(31,26)$, $(63,57)$, …

If the columns are ordered so that column $i$ is the binary representation of $i$, then the syndrome of a single error in position $i$ **is the number $i$ in binary** — the decoder reads the error's address directly off the syndrome, with no table at all. That is Hamming's trick, and it is still startling.

Hamming codes are **perfect**: the spheres of radius 1 around the $2^k$ codewords exactly tile the space with nothing left over,

$$2^k\big(1+n\big) = 2^k\,2^m = 2^{n} \ \checkmark,$$

so not a single word is wasted. (The only other nontrivial perfect binary codes are the repetition codes of odd length and the $(23,12)$ Golay code — a remarkably short list.)

**Extended Hamming.** Add one overall parity bit: $(8,4)$, $(16,11)$, … This raises $d_{\min}$ to 4, giving **single-error correction plus double-error detection (SECDED)** — the code in every server's ECC memory.

**Coding gain.** A code lowers the error probability, but at a price: the same $E_b$ is now spread over $n/k$ times as many channel symbols, so the energy per *channel* symbol falls,

$$\frac{E_c}{N_0} = R\,\frac{E_b}{N_0}.$$

*In words: coding first makes each transmitted symbol weaker* — a loss of $10\log_{10}(1/R)$ dB — and must earn that back with interest through error correction. For a hard-decision decoder correcting $t$ errors, the asymptotic gain is

$$G \approx 10\log_{10}\big[R(t+1)\big]\ \text{dB},$$

and roughly 3 dB more with soft decisions ([4.1](04-01-entropy-mutual-information.md) P3d).

**Other block codes worth knowing.**

| Code | Parameters | Note |
|---|---|---|
| Repetition | $(n,1)$, $d=n$ | Simplest; rate is terrible |
| Hamming | $(2^m-1, 2^m-1-m)$, $d=3$ | Perfect, single-error correcting |
| Extended Hamming | $(2^m, 2^m-m)$, $d=4$ | SECDED — ECC memory |
| Golay | $(23,12)$, $d=7$ | Perfect, corrects 3; flew on Voyager |
| BCH | $(2^m-1, k)$, designed $d$ | A family with $d$ chosen at design time |
| Reed–Solomon | $(n,k)$ over $\mathrm{GF}(q)$, $d = n-k+1$ | **Symbol**-level; ideal for burst errors; CDs, QR codes, deep space |

Reed–Solomon deserves the last word: it is **maximum distance separable**, meaning $d = n-k+1$ achieves the Singleton bound exactly — no code of that rate can do better. And because it works on multi-bit *symbols*, a long burst that destroys many consecutive bits damages only a few symbols. That is why it protects scratched CDs and why it was half of every deep-space concatenated code before turbo codes.

## Picture

![Two panels. Left: a Hamming-space cartoon showing codewords as dots with spheres of radius t around them, non-overlapping, and a received word inside one sphere being snapped to its centre; a second inset shows overlapping spheres and an ambiguous received word. Right: the (7,4) Hamming code as a three-circle Venn diagram, with the four data bits placed in the overlapping regions and each of the three parity bits forcing its own circle to even parity, and an arrow showing a flipped bit breaking exactly two of the three circles.](assets/04-03-fig1.svg)

Left: the geometry. Spheres of radius $t$ around each codeword; if they do not touch, every received word inside a sphere decodes to its centre unambiguously. Overlap, and you get ambiguity — which is why correcting $t$ errors demands $d_{\min}\ge 2t+1$, not $t+1$.

Right: the $(7,4)$ Hamming code as three overlapping circles. Each circle contains one parity bit and three data bits, and the parity bit is set to make its circle's total even. Now flip any single bit and see what happens: the set of circles that fail is different for every one of the seven positions. **Which circles broke tells you exactly which bit flipped** — that is the syndrome, drawn.

## Worked examples

**Example 1 (the $(7,4)$ Hamming code, built and used).** Take

$$\mathbf{G} = \begin{pmatrix}1&0&0&0&1&1&0\\0&1&0&0&1&0&1\\0&0&1&0&0&1&1\\0&0&0&1&1&1&1\end{pmatrix} = [\mathbf{I}_4\mid\mathbf{P}],$$

$$\mathbf{H} = [\mathbf{P}^T\mid\mathbf{I}_3] = \begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix}.$$

*Encode $\mathbf{m} = (1\,0\,1\,1)$.* Add rows 1, 3, 4 of $\mathbf{G}$ mod 2:

$$\mathbf{c} = (1000110)+(0010011)+(0001111) = (1\,0\,1\,1\,0\,1\,0).$$

*Check:* $\mathbf{c}\mathbf{H}^T$. Row 1 of $\mathbf{H}$ dotted with $\mathbf{c}$: positions $\{1,2,4,5\}$, values $1+0+1+0 = 0$ ✓. Row 2: positions $\{1,3,4,6\}$: $1+1+1+1 = 0$ ✓. Row 3: positions $\{2,3,4,7\}$: $0+1+1+0=0$ ✓. Syndrome zero.

*Now corrupt position 3:* $\mathbf{r} = (1\,0\,\mathbf{0}\,1\,0\,1\,0)$.

$$s_1: \{1,2,4,5\} = 1+0+1+0 = 0$$
$$s_2: \{1,3,4,6\} = 1+0+1+1 = 1$$
$$s_3: \{2,3,4,7\} = 0+0+1+0 = 1$$

$$\mathbf{s} = (0,1,1).$$

Compare with the columns of $\mathbf{H}$: column 3 is $(0,1,1)^T$ ✓. **The syndrome named the error position.** Flip bit 3 back and recover $\mathbf{c}$, hence $\mathbf{m} = (1011)$.

*Now corrupt two positions, 3 and 6:* $\mathbf{r} = (1\,0\,0\,1\,0\,0\,0)$. The syndrome is the sum of columns 3 and 6:

$$(0,1,1)+(0,1,0) = (0,0,1) = \text{column } 7 .$$

The decoder confidently flips bit 7 — and is **wrong on all three of positions 3, 6, 7**. This is the honest failure mode of a $t=1$ code: two errors do not merely go uncorrected, they get *miscorrected* into three. Any code will confidently produce garbage once you exceed its correction radius, which is why a code's operating point must be chosen with the raw channel error rate well inside its capability.

**Example 2 (does coding actually help? — the full accounting).** A BPSK link at $E_b/N_0 = 8$ dB uses the $(7,4)$ Hamming code with hard-decision decoding. Compare coded and uncoded.

*Uncoded:* $E_b/N_0 = 8$ dB $= 6.31$:

$$P_b = Q(\sqrt{2\times6.31}) = Q(3.55) = 1.93\times10^{-4}.$$

*Coded — first, the penalty.* Rate $R = 4/7 = 0.571$, so each channel symbol carries

$$\frac{E_c}{N_0} = R\frac{E_b}{N_0} = 0.571\times6.31 = 3.60 \ (= 5.6\ \text{dB}).$$

Channel bit error probability:

$$p = Q(\sqrt{2\times3.60}) = Q(2.68) = 3.68\times10^{-3}.$$

**The raw error rate got 19 times worse** — that is the rate penalty, and it is why weak codes can actively hurt.

*Now the correction.* A block decodes wrongly if 2 or more of its 7 bits are wrong:

$$P_{\rm block} = 1-(1-p)^7 - 7p(1-p)^6 .$$

$(1-p)^7 = (0.99632)^7 = 0.97452$; $7p(1-p)^6 = 7(0.00368)(0.97812) = 0.025200$.

$$P_{\rm block} = 1 - 0.97452 - 0.02520 = 2.8\times10^{-4}.$$

Approximately, $P_{\rm block}\approx\binom{7}{2}p^2 = 21(1.354\times10^{-5}) = 2.84\times10^{-4}$ ✓.

*Convert to bit error rate.* When a block fails, the decoder miscorrects and typically produces about 3 wrong bits out of 7 (as Example 1 showed); the standard approximation is

$$P_b^{\rm coded} \approx \frac{1}{n}\sum_{i=t+1}^{n}i\binom{n}{i}p^i(1-p)^{n-i} \approx \frac{3}{7}P_{\rm block} = \frac{3}{7}(2.8\times10^{-4}) = 1.2\times10^{-4}.$$

*Verdict:* $1.2\times10^{-4}$ coded versus $1.93\times10^{-4}$ uncoded — better, but only by a factor of 1.6, worth about **0.6 dB**. The asymptotic formula predicts $10\log_{10}[R(t+1)] = 10\log_{10}(1.14) = 0.6$ dB ✓.

*The honest conclusion.* The $(7,4)$ Hamming code is barely worth having. It costs 75% more bandwidth and returns 0.6 dB, when [3.6](03-06-power-vs-bandwidth-efficiency.md) said nearly 8 dB is available. Two reasons, both instructive:

1. **$d_{\min}=3$ is feeble.** Correcting one error in seven is not much protection. Longer codes with larger $t$ do far better: the $(23,12)$ Golay code corrects 3 and yields about 2 dB; a rate-1/2 convolutional code yields 5 dB; turbo codes yield 9.
2. **Hard decisions throw away information.** The demodulator knew how confident it was and reported only a bit. Soft-decision decoding recovers about 2 dB of that — nearly four times what this code gains in total.

Hamming codes survive not on the strength of their coding gain but on their **latency and simplicity**: a 7-bit block decodes in one clock cycle with three XOR trees, which is exactly what a memory controller needs. **Choose a code for the constraint that binds** — throughput-limited links want strong codes, latency-limited ones want short codes, and a DRAM refresh cycle is very latency-limited.

## Watch out

- **You might think adding parity always improves reliability.** Coding *reduces* the energy per channel symbol by the factor $R$. A weak code can lose more to that penalty than it gains from correction — this is exactly what happens at low $E_b/N_0$, where the Hamming code is genuinely worse than no code at all.
- **You might think a $t$-error-correcting code degrades gracefully past $t$ errors.** It does not: it *miscorrects*, actively adding errors (Example 1 turned 2 errors into 3). Codes must be operated well inside their capability, or paired with a detection-only outer layer.
- **You might think detection and correction cost the same.** Detecting $e$ errors needs $d_{\min}\ge e+1$; correcting $t$ needs $d_{\min}\ge2t+1$. Correction is about twice as expensive, which is why detect-and-retransmit (ARQ) is preferred wherever a return channel exists.
- **You might think a burst of errors is just several random errors.** For a binary code it is far worse — a burst can exceed $t$ within one block while leaving neighbouring blocks untouched. The remedies are **interleaving** (scatter the bits so a burst becomes isolated errors in many blocks) and **symbol-level codes** like Reed–Solomon.
- **You might think $d_{\min}$ requires comparing all pairs of codewords.** For a *linear* code it is the minimum nonzero weight — one pass instead of $O(2^{2k})$ comparisons.

## One-liner

> A code is a subspace whose codewords are far apart in Hamming distance; the syndrome $\mathbf{r}\mathbf{H}^T$ depends only on the error, and for a Hamming code it spells out the error's address.

## Problems

**P1 (🟢)** A $(15,11)$ Hamming code is used. (a) Give its rate and $d_{\min}$. (b) How many errors can it correct, and how many detect? (c) How many parity bits, and how many distinct nonzero syndromes? (d) Verify the perfect-code condition.

**P2 (🟡)** For the $(7,4)$ code of Example 1: (a) encode $\mathbf{m}=(1\,1\,0\,0)$. (b) Verify the syndrome is zero. (c) Flip bit 5 and compute the syndrome; confirm it matches column 5 of $\mathbf{H}$. (d) List all codewords of weight 3 that begin with $1$, and confirm $d_{\min}=3$ by finding a weight-3 codeword.

**P3 (🔴)** A $(15,7)$ BCH code has $d_{\min}=5$. It is used on a BPSK link at $E_b/N_0 = 9$ dB with hard decisions. (a) Find $t$ and the rate. (b) Find the channel bit error probability $E_c/N_0$ implies. (c) Find the block error probability. (d) Estimate the coding gain in dB and compare with the asymptotic formula. (e) Comment on how this compares with the $(7,4)$ Hamming result and what drives the difference.

<details>
<summary>Solutions</summary>

**P1** (a) $R = 11/15 = 0.733$. Every Hamming code has $d_{\min}=3$.

(b) Correct $t = \lfloor(3-1)/2\rfloor = 1$ error. Detect $d_{\min}-1 = 2$ errors — but not both at once: correcting 1 uses up the distance, so it is either "correct 1" or "detect 2", chosen by the decoder's mode.

(c) $n-k = 15-11 = 4$ parity bits, giving $2^4-1 = 15$ nonzero syndromes — exactly one per bit position ✓ ($n=15$).

(d) Perfect-code (sphere-packing) condition: the spheres of radius $t=1$ around all $2^k$ codewords must exactly fill the space.

$$2^{11}\left[\binom{15}{0}+\binom{15}{1}\right] = 2048(1+15) = 2048\times16 = 32{,}768 = 2^{15} \ \checkmark$$

Every one of the $2^{15}$ possible received words lies in exactly one sphere. Nothing wasted.

**P2** (a) $\mathbf{m}=(1100)$ selects rows 1 and 2 of $\mathbf{G}$:

$$\mathbf{c} = (1000110)+(0100101) = (1\,1\,0\,0\,0\,1\,1).$$

(b) $s_1$: positions $\{1,2,4,5\}$ = $1+1+0+0 = 0$ ✓. $s_2$: $\{1,3,4,6\}$ = $1+0+0+1 = 0$ ✓. $s_3$: $\{2,3,4,7\}$ = $1+0+0+1 = 0$ ✓. $\mathbf{s} = (0,0,0)$.

(c) Flip bit 5: $\mathbf{r} = (1\,1\,0\,0\,1\,1\,1)$.

$s_1$: $\{1,2,4,5\} = 1+1+0+1 = 1$. $s_2$: $\{1,3,4,6\} = 1+0+0+1 = 0$. $s_3$: $\{2,3,4,7\} = 1+0+0+1 = 0$.

$$\mathbf{s} = (1,0,0).$$

Column 5 of $\mathbf{H}$ is $(1,0,0)^T$ ✓ (it is the first column of the $\mathbf{I}_3$ block).

(d) The 16 codewords are all $\mathbf{m}\mathbf{G}$. Those beginning with 1 come from $m_1=1$. Taking each singly and in pairs:

- $\mathbf{m}=(1000)\to(1000110)$, weight 3 ✓
- $\mathbf{m}=(1100)\to(1100011)$, weight 4
- $\mathbf{m}=(1010)\to(1010101)$, weight 4
- $\mathbf{m}=(1001)\to(1001001)$, weight 3 ✓
- $\mathbf{m}=(1110)\to(1110000)$, weight 3 ✓
- $\mathbf{m}=(1011)\to(1011010)$, weight 4
- $\mathbf{m}=(1101)\to(1101100)$, weight 4
- $\mathbf{m}=(1111)\to(1111111)$, weight 7

Weight-3 codewords starting with 1: $(1000110)$, $(1001001)$, $(1110000)$.

Since a weight-3 codeword exists and (checking the rest) none has weight 1 or 2, $d_{\min}=3$ ✓. Note the confirmation of the column rule: $(1110000)$ has ones in positions 1, 2, 3, and columns 1+2+3 of $\mathbf{H}$ are $(1,1,0)+(1,0,1)+(0,1,1) = (0,0,0)$ ✓ — three columns summing to zero, which *is* the weight-3 codeword.

**P3** (a) $t = \lfloor(5-1)/2\rfloor = 2$ errors corrected. $R = 7/15 = 0.4667$.

(b) $E_b/N_0 = 9$ dB $= 7.943$.

$$\frac{E_c}{N_0} = R\frac{E_b}{N_0} = 0.4667\times7.943 = 3.707 \ (= 5.69\ \text{dB}).$$

$$p = Q(\sqrt{2\times3.707}) = Q(2.723) = 3.23\times10^{-3}.$$

(c) A block fails if 3 or more of 15 bits are wrong:

$$P_{\rm block} = 1-\sum_{i=0}^{2}\binom{15}{i}p^i(1-p)^{15-i}.$$

With $p = 3.236\times10^{-3}$ and $(1-p)^{15} = 0.95259$:

- $i=0$: $0.952590$
- $i=1$: $15p(1-p)^{14} = 15(0.003236)(0.955684) = 0.046391$
- $i=2$: $105p^2(1-p)^{13} = 105(1.0474\times10^{-5})(0.958786) = 0.001054$

Sum $= 0.999985$, so

$$P_{\rm block} = 1.50\times10^{-5}.$$

*Cross-check with the leading omitted term:* $\binom{15}{3}p^3(1-p)^{12} = 455(3.389\times10^{-8})(0.961899) = 1.48\times10^{-5}$ ✓ — the $i=3$ term dominates, as it should just past the correction radius.

(d) Bit error rate: a failed block produces roughly $t+1 = 3$ wrong bits out of 15, so

$$P_b^{\rm coded} \approx \frac{3}{15}P_{\rm block} = 0.2(1.50\times10^{-5}) = 3.0\times10^{-6}.$$

Uncoded at 9 dB: $P_b = Q(\sqrt{2\times7.943}) = Q(3.986) = 3.4\times10^{-5}$.

Improvement: a factor of 11. In dB, find the uncoded $E_b/N_0$ that would give $3.0\times10^{-6}$: $Q(x) = 3.0\times10^{-6}\Rightarrow x = 4.53$, so $E_b/N_0 = 4.53^2/2 = 10.26 = 10.1$ dB.

$$\text{Coding gain} = 10.1-9.0 = 1.1\ \text{dB}.$$

Asymptotic formula: $10\log_{10}[R(t+1)] = 10\log_{10}(0.4667\times3) = 10\log_{10}(1.40) = 1.5$ dB — the achieved gain is a little under the asymptote, as expected, since the asymptotic figure is approached only at high SNR. ✓

(e) The $(7,4)$ Hamming code returned 0.6 dB; this $(15,7)$ BCH code returns about 1.1 dB (rising toward 1.5 dB at higher SNR). Two factors drive the difference, and they pull against each other:

- **$t$ went from 1 to 2**, which more than doubles the $(t+1)$ factor — a clear gain.
- **The rate fell from 0.571 to 0.467**, which *worsens* the $E_c/N_0$ penalty by 0.9 dB.

The first effect wins, but not overwhelmingly, and that is the general story of hard-decision block codes: gain climbs only as $\log(t+1)$ while the rate penalty climbs linearly, so pushing $t$ up eventually stops paying. Even a good BCH code at 1–1.5 dB is a long way from the ~8 dB on offer.

**Where the rest lives:** soft decisions (about +2 dB, essentially free), longer constraint lengths with sequence decoding rather than block decoding ([4.4](04-04-convolutional-codes-viterbi.md), about +5 dB), and iterative decoding of very long sparse codes (turbo/LDPC, about +9 dB). The lesson from this problem is that **algebraic block codes with hard decisions are the weakest useful family** — they earned their place through decoder simplicity, not strength, and modern systems use them mainly as an outer layer for burst cleanup (Reed–Solomon) or where latency forbids anything longer (ECC memory).

</details>

## Flashback

**From Lesson 4.2 (Channel capacity and the Shannon limit):** A BSC has $p = 0.01$. (a) Find its capacity. (b) A $(7,4)$ Hamming code is used. Is its rate below capacity? (c) Compute the code's block error probability at this $p$ and comment on the gap between "below capacity" and "actually reliable".

<details>
<summary>Solution</summary>

(a) $H_b(0.01) = -0.01\log_2 0.01 - 0.99\log_20.99 = 0.01(6.644)+0.99(0.01449) = 0.06644+0.01435 = 0.0808$.

$$C = 1-0.0808 = 0.919\ \text{bits/use}.$$

(b) $R = 4/7 = 0.571 < 0.919$ ✓ — comfortably below capacity.

(c) $$P_{\rm block} = 1-(0.99)^7 - 7(0.01)(0.99)^6 = 1 - 0.93207 - 0.06591 = 2.0\times10^{-3}.$$

About 1 block in 500 fails — which is nowhere near "arbitrarily reliable".

**The gap is the point.** Shannon guarantees that *some* code of rate 0.571 (indeed up to 0.919) achieves error probability as small as you like on this channel. The $(7,4)$ Hamming code is not that code. Being below capacity is a necessary condition, not a sufficient one; realizing the promise requires long blocks and strong codes, and the theorem is silent about how to find them. That silence is the fifty-year gap between 1948 and turbo codes — and a good reminder that "below capacity" describes what is *possible*, not what your code does.

</details>

## Connections

- **Backward:** the code is a null space and the syndrome a linear map, the four-subspaces picture of [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) over $\mathrm{GF}(2)$; minimum-distance decoding is [3.2](03-02-optimal-detection-awgn.md) in Hamming space.
- **Forward:** [4.4](04-04-convolutional-codes-viterbi.md) abandons blocks for a code with memory and gets several more dB from soft-decision sequence decoding.
- **Sideways:** sphere packing in Hamming space is the discrete twin of the constellation packing in [3.5](03-05-qam-and-union-bound.md); Reed–Solomon codes are polynomial interpolation over a finite field, and the same idea underlies secret sharing in [`cryptography`](../../cryptography/syllabus.md). Hamming's original problem — a computer that halted on parity errors — is why the codes in your RAM are still called by his name.
