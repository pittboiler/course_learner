# Communication Systems · Lesson 4.1: Entropy and mutual information

> ⏱ ~15 min · Module 4: Capacity & Coding · Builds on: [3.6 Power vs bandwidth efficiency](03-06-power-vs-bandwidth-efficiency.md), [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) · Unlocks: [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md), [4.3 Error-control coding: block codes](04-03-block-codes.md)

## Why this matters

Module 3 ended with a wall: every uncoded scheme sits about 8 dB right of a curve labelled "Shannon bound", and nothing may cross it. This module explains where that curve comes from and how to approach it.

That requires a genuinely new idea. Everything so far has measured signals in watts and hertz — physical quantities. Shannon's insight was that the thing being transported is neither: it is **information**, and it has its own unit and its own conservation laws. This lesson builds the two quantities that matter — entropy, which measures how much information a source produces, and mutual information, which measures how much of it survives a channel — and then [4.2](04-02-channel-capacity-shannon-limit.md) turns them into the bound.

If you are also taking [`information-theory`](../../information-theory/syllabus.md), this lesson is a compressed version of its Module 1, keeping only what the capacity formula needs. If you are not, this is enough.

## The idea

**Information is surprise.** Learning that something certain has happened tells you nothing; learning that something unlikely has happened tells you a lot. So the information content of an outcome should be a decreasing function of its probability. Demand also that information from independent events *adds* — learning two unrelated facts should give you the sum — and the logarithm is forced: $\log(1/p)$ is the only function (up to a constant) that turns multiplication of probabilities into addition. Choose base 2 and the unit is the **bit**.

**Entropy is average surprise.** A source that emits symbols with probabilities $p_i$ produces, on average, $H = \sum p_i\log_2(1/p_i)$ bits per symbol. Two readings, both correct and both useful. It is the average uncertainty about what comes next, *before* you see it. And — Shannon's source coding theorem — it is the minimum average number of binary digits needed to write the output down. **Uncertainty and compressibility are the same number.** A fair coin needs 1 bit per flip; a coin that lands heads 99% of the time needs 0.08.

**Mutual information is what gets through.** Now put the source through a noisy channel. You observe $Y$; you wanted $X$. Before observing, your uncertainty about $X$ was $H(X)$. After observing, it is $H(X\mid Y)$ — smaller, because $Y$ told you something, but not zero, because the channel is noisy. The difference,

$$I(X;Y) = H(X)-H(X\mid Y),$$

is the number of bits the channel actually delivered. The residual $H(X\mid Y)$ has a name — **equivocation** — and it is exactly the information the noise destroyed.

That single quantity — [mutual information](../reference.md#mutual-information) — is the bridge to everything. Maximize it over input distributions and you get **capacity**: the most any code could ever push through this channel. That is [4.2](04-02-channel-capacity-shannon-limit.md).

## The formal version

**Self-information.** For an outcome of probability $p$,

$$I = \log_2\frac{1}{p} = -\log_2 p \quad\text{bits}.$$

*In words: how surprised you should be, measured in bits.* $p=1/2$ gives 1 bit; $p=1$ gives 0; $p\to0$ gives $\to\infty$.

**Entropy.** For a discrete source with symbol probabilities $p_1,\dots,p_K$:

$$H(X) = -\sum_{i=1}^{K}p_i\log_2 p_i \quad\text{bits/symbol},$$

with the convention $0\log0 = 0$.

*In words: the average number of bits needed to describe one output, and equivalently your average uncertainty about it before seeing it.*

Properties:

| Property | Statement | Meaning |
|---|---|---|
| Non-negative | $H(X)\ge0$ | you can't have negative uncertainty |
| Maximum | $H(X)\le \log_2K$, equality iff uniform | uncertainty is greatest when all outcomes are equally likely |
| Zero | $H(X)=0$ iff some $p_i=1$ | no uncertainty, no information |
| Additive | $H(X,Y) = H(X)+H(Y)$ if independent | independent sources add |

**Binary entropy function.** For a two-symbol source with $P(1)=p$:

$$H_b(p) = -p\log_2p-(1-p)\log_2(1-p).$$

*In words: the uncertainty of a biased coin.* It is 1 at $p=1/2$, 0 at $p=0$ and $p=1$, and symmetric about $1/2$. Its shape — a dome, flat on top and plunging at the edges — is worth carrying in your head: **being slightly biased barely reduces information, being strongly biased destroys it.** ($H_b(0.4) = 0.971$; $H_b(0.1) = 0.469$.)

**Joint and conditional entropy.**

$$H(X,Y) = -\sum_{x,y}p(x,y)\log_2p(x,y), \qquad H(X\mid Y) = -\sum_{x,y}p(x,y)\log_2p(x\mid y).$$

*In words: $H(X\mid Y)$ is your remaining uncertainty about $X$ once $Y$ is known, averaged over all $Y$.*

**Chain rule.** $H(X,Y) = H(Y)+H(X\mid Y) = H(X)+H(Y\mid X)$. *In words: the uncertainty of a pair is the uncertainty of one plus the leftover uncertainty of the other.*

**Mutual information.**

$$\boxed{\;I(X;Y) = H(X)-H(X\mid Y) = H(Y)-H(Y\mid X) = H(X)+H(Y)-H(X,Y).\;}$$

*In words: the reduction in uncertainty about $X$ from observing $Y$ — which is symmetric, so it is equally the reduction in uncertainty about $Y$ from observing $X$.*

Properties: $I(X;Y)\ge0$ always; $I(X;Y)=0$ iff $X$ and $Y$ are independent (a useless channel); $I(X;X)=H(X)$ (a perfect channel delivers everything).

**Equivocation.** $H(X\mid Y)$ is called the **equivocation** — the information lost in the channel. The accounting is exact:

$$\underbrace{H(X)}_{\text{sent}} = \underbrace{I(X;Y)}_{\text{received}} + \underbrace{H(X\mid Y)}_{\text{lost to noise}}.$$

**The binary symmetric channel (BSC).** The workhorse model: input and output are bits, and each bit is flipped independently with **crossover probability** $p$.

For equiprobable inputs, $H(X) = 1$ and $H(Y)=1$. Given $X=x$, the output is $x$ with probability $1-p$ and $\bar x$ with probability $p$, so $H(Y\mid X) = H_b(p)$. Hence

$$\boxed{\;I(X;Y) = 1-H_b(p) \ \text{bits per channel use}.\;}$$

*In words: a bit gets through minus the uncertainty the flip introduced.* Read the extremes:

- $p=0$: $I=1$. Perfect channel, one bit per use.
- $p=0.5$: $I=0$. The output is independent of the input — **a channel that flips half the bits carries nothing**, no matter how you code.
- $p=0.11$: $I = 1-0.5 = 0.5$. An 11% error rate costs you half your throughput.
- $p=1$: $I=1$ again. Every bit is flipped, deterministically — so invert the output and you have a perfect channel. **Noise is only harmful when it is unpredictable.**

That last point is the one worth pausing on. Information theory does not measure how badly a channel corrupts a signal; it measures how *uncertain* the corruption is. A channel that reliably lies is as good as one that reliably tells the truth.

**The source coding theorem (for context).** A source of entropy $H$ can be compressed to $H$ bits per symbol and no fewer. Huffman and arithmetic coding achieve it in practice. This is why the symbols arriving at your modulator are essentially equiprobable and independent — the compressor already removed everything predictable — and hence why every calculation in Module 3 could assume equiprobable symbols.

## Picture

![Two panels. Left: the binary entropy function H_b(p) plotted against p from 0 to 1, a dome peaking at 1 bit at p equals one half and falling to zero at both ends. Right: a Venn-style diagram of two overlapping circles labelled H(X) and H(Y), with the overlap labelled I(X;Y), the left crescent labelled H(X|Y) equivocation, and the right crescent labelled H(Y|X) noise entropy.](assets/04-01-fig1.svg)

Left: the dome. Its flatness near the top says that a mildly biased source is nearly as informative as a fair one; its steep edges say that a strongly biased source is nearly free to describe. Right: the standard accounting picture. The two circles are the total uncertainty in $X$ and $Y$; their overlap is the shared information $I(X;Y)$; the left crescent is what the channel destroyed. Every identity above is a statement about areas in this diagram.

## Worked examples

**Example 1 (a source, its entropy, and what that means for the link).** A sensor emits four readings with probabilities $\{0.5, 0.25, 0.125, 0.125\}$ at 1000 symbols per second.

*Entropy:*

$$H = 0.5\log_2 2 + 0.25\log_24 + 2(0.125)\log_28 = 0.5(1)+0.25(2)+0.25(3) = 0.5+0.5+0.75 = 1.75\ \text{bits/symbol}.$$

*Compare the uncoded rate.* Four symbols naively need $\log_24 = 2$ bits each — 2000 bps. Entropy says 1750 bps suffices: a 12.5% saving, achieved exactly by the Huffman code $\{0, 10, 110, 111\}$, whose average length is $0.5(1)+0.25(2)+0.125(3)+0.125(3) = 1.75$ ✓.

*Why this matters downstream.* Suppose the link is BPSK at $E_b/N_0 = 9.6$ dB, giving $P_b = 10^{-5}$ ([3.3](03-03-binary-modulation-ber.md)). Compressing first means you transmit 1750 bps instead of 2000 — so for the same transmitter power, $E_b$ rises by $10\log_{10}(2000/1750) = 0.58$ dB, and the BER improves by roughly a factor of 3.

**But compression also makes every bit precious.** With the naive 2-bit code, a bit error corrupts one symbol. With the Huffman code, an error can desynchronize the decoder and corrupt an unbounded run of symbols — the code is variable-length, so losing a bit shifts every boundary that follows. This is the general and important rule: **compression removes redundancy; error correction puts back a different, engineered redundancy.** They are complementary and must be done in that order — compress, then code — never mixed.

**Example 2 (a BSC, end to end).** A binary channel has $p = 0.1$ and is used 1000 times per second with equiprobable inputs.

*Information per use:*

$$H_b(0.1) = -0.1\log_20.1 - 0.9\log_20.9 = 0.1(3.322)+0.9(0.152) = 0.332+0.137 = 0.469 .$$

$$I(X;Y) = 1-0.469 = 0.531\ \text{bits/use}.$$

*Throughput ceiling:* $0.531\times1000 = 531$ bits per second of *reliable* information, out of 1000 raw bit transmissions.

*What that means concretely.* You may send 1000 raw bits per second, of which 10% arrive wrong. Shannon says there exists a code of rate up to 0.531 — say, 531 information bits carried in every 1000 transmitted bits — that recovers **all** of the information with error probability as small as you like. Not "mostly right"; arbitrarily reliable. And it says no code of rate above 0.531 can do so.

*The gap between promise and practice.* Consider the naive answer: repeat each bit three times and majority-vote. Rate $1/3 = 0.333$, well under 0.531 ✓. Error probability after voting:

$$P_e = \binom{3}{2}p^2(1-p)+p^3 = 3(0.01)(0.9)+0.001 = 0.028 .$$

From 10% down to 2.8% — an improvement, but nowhere near "arbitrarily reliable", and it cost two-thirds of the rate. Repetition is a *bad* code: to drive the error rate to $10^{-6}$ you would need about 11 repetitions, a rate of 0.09, six times worse than the ceiling.

Good codes do far better. A rate-1/2 convolutional code with Viterbi decoding ([4.4](04-04-convolutional-codes-viterbi.md)) delivers around $10^{-7}$ on this channel at rate 0.5 — essentially at the ceiling. Modern LDPC codes get to within a few hundredths of it. **The whole history of coding theory is the gap between "a good code exists" (1948) and "here is one" (1993).**

## Watch out

- **You might think entropy measures how "meaningful" a message is.** It measures only statistical unpredictability. A page of random letters has higher entropy than a page of Shakespeare. Information theory is deliberately semantics-free — which is why it applies to everything.
- **You might think a channel with $p=0.9$ is terrible.** It is *excellent* — invert every output bit and you have a channel with $p=0.1$. $I(X;Y) = 1-H_b(p)$ is symmetric about $p=1/2$, and only $p=1/2$ is fatal. Predictable corruption is not corruption.
- **You might think $I(X;Y)$ depends on which variable you call the input.** It is symmetric: $I(X;Y)=I(Y;X)$. Entropy is not symmetric ($H(X)\ne H(Y)$ in general), but the shared part is.
- **You might think mutual information is capacity.** $I(X;Y)$ depends on the *input distribution* you chose. Capacity is its maximum over all input distributions. For the BSC the maximizer is the uniform input, so they coincide — but that is a special case, not the definition ([4.2](04-02-channel-capacity-shannon-limit.md)).
- **You might compress and then think you are done.** Compression maximizes vulnerability: with all redundancy removed, every bit matters and errors propagate. Compression must be followed by error-control coding, never replaced by it.

## One-liner

> Information is surprise, entropy is average surprise, and mutual information is the part of the surprise that survives the channel — everything else the noise ate.

## Problems

**P1 (🟢)** A source emits five symbols with probabilities $\{0.4, 0.2, 0.2, 0.1, 0.1\}$. (a) Find its entropy. (b) Find the entropy of a uniform five-symbol source and explain the difference. (c) How many bits per symbol does a fixed-length code need? (d) What compression ratio does entropy coding promise?

**P2 (🟡)** A BSC has $p = 0.25$. (a) Find $I(X;Y)$ for equiprobable inputs. (b) Find the equivocation $H(X\mid Y)$. (c) The channel is used at 2 Mbaud. What is the maximum reliable information rate? (d) A rate-1/2 code is used. Is reliable communication possible in principle? What if the rate were 3/4?

**P3 (🔴)** A binary erasure channel (BEC) outputs the input bit with probability $1-\epsilon$ and an erasure symbol "?" with probability $\epsilon$; it never flips a bit. (a) With equiprobable inputs, compute $H(Y)$. (b) Compute $H(Y\mid X)$ and hence $I(X;Y)$. (c) Compare with a BSC at $p = \epsilon/2$ (the same fraction of bits "wrong or unknown", in a sense) for $\epsilon = 0.2$, and explain the difference. (d) What does the comparison say about designing a receiver that reports confidence rather than a hard decision?

<details>
<summary>Solutions</summary>

**P1** (a) $$H = -[0.4\log_20.4 + 2(0.2\log_20.2) + 2(0.1\log_20.1)].$$

$\log_20.4 = -1.322$, $\log_20.2 = -2.322$, $\log_20.1 = -3.322$:

$$H = 0.4(1.322)+0.4(2.322)+0.2(3.322) = 0.529+0.929+0.664 = 2.12\ \text{bits/symbol}.$$

(b) Uniform: $H = \log_25 = 2.32$ bits/symbol. The given source is *less* uncertain because it is biased — 0.4 of its mass is on one symbol, making it more predictable and therefore more compressible. Uniform is always the maximum-entropy distribution over a fixed alphabet.

(c) A fixed-length code needs $\lceil\log_25\rceil = 3$ bits/symbol.

(d) Entropy coding approaches 2.12 bits/symbol, so the ratio against fixed-length is

$$\frac{3}{2.12} = 1.42\times \quad\text{(a 29\% saving)}.$$

(A Huffman code here achieves 2.2 bits/symbol, within 4% of the bound; arithmetic coding gets arbitrarily close.)

**P2** (a) $$H_b(0.25) = -0.25\log_20.25 - 0.75\log_20.75 = 0.25(2)+0.75(0.415) = 0.5+0.311 = 0.811 .$$

$$I(X;Y) = 1-0.811 = 0.189\ \text{bits/use}.$$

(b) For a BSC with equiprobable inputs, $H(X)=1$ and

$$H(X\mid Y) = H(X)-I(X;Y) = 1-0.189 = 0.811\ \text{bits}.$$

(Equal to $H_b(p)$ here, because the channel is symmetric and the input is uniform, making $Y$ uniform too.) The channel destroys 81% of every bit.

(c) $$R_{\max} = 0.189 \times 2\times10^6 = 378\ \text{kbps}.$$

(d) A rate-1/2 code carries 0.5 information bits per channel use, which **exceeds** the ceiling of 0.189. Reliable communication is **impossible** — no code of that rate, however sophisticated, can work on this channel. Rate 3/4 is worse still.

To operate here you need rate below 0.189, e.g. a rate-1/8 code. This is a genuinely bad channel: a 25% error rate is close to the $p=0.5$ catastrophe, and $1-H_b(p)$ falls steeply as $p$ approaches it. The practical response is not a stronger code but a better physical layer — more power, a better antenna, a slower modulation — to move $p$ down. **Coding cannot rescue a channel operating near $p=1/2$; it can only exploit one that is already usable.**

**P3** (a) With $P(X=0)=P(X=1)=1/2$, the output takes three values: $0$ with probability $(1-\epsilon)/2$, $1$ with probability $(1-\epsilon)/2$, and $?$ with probability $\epsilon$.

$$H(Y) = -2\cdot\frac{1-\epsilon}{2}\log_2\frac{1-\epsilon}{2} - \epsilon\log_2\epsilon = -(1-\epsilon)\big[\log_2(1-\epsilon)-1\big]-\epsilon\log_2\epsilon$$
$$= (1-\epsilon) + H_b(\epsilon),$$

using $-(1-\epsilon)\log_2(1-\epsilon)-\epsilon\log_2\epsilon = H_b(\epsilon)$.

(b) Given $X=x$, the output is $x$ with probability $1-\epsilon$ and $?$ with probability $\epsilon$ — a two-outcome distribution, so

$$H(Y\mid X) = H_b(\epsilon).$$

$$I(X;Y) = H(Y)-H(Y\mid X) = (1-\epsilon)+H_b(\epsilon)-H_b(\epsilon) = \boxed{1-\epsilon}.$$

Beautifully simple: **the erasure channel delivers exactly the fraction of bits it does not erase.** Nothing is wasted on ambiguity, because an erasure announces itself.

(c) At $\epsilon = 0.2$: BEC gives $I = 1-0.2 = 0.800$ bits/use.

BSC at $p = 0.1$ (half the bits are wrong when "corrupted", so $\epsilon/2$): $H_b(0.1) = 0.469$, so $I = 1-0.469 = 0.531$ bits/use.

The BEC delivers **50% more information** despite affecting the same fraction of bits.

*Why.* The BSC's damage is insidious: a flipped bit looks exactly like a good bit, so the decoder must spend redundancy determining *which* bits to distrust. The BEC's damage is honest: it says "this position is unknown", so the decoder knows exactly where the holes are and needs redundancy only to fill them, not to find them. **Knowing where the errors are is worth about half the redundancy.** (Formally: a code correcting $t$ errors can correct $2t$ erasures.)

(d) It says a receiver should output **soft information**, not hard decisions. A demodulator that reports "I think this was a 1, and I am 55% sure" hands the decoder something much closer to a BEC than to a BSC — the low-confidence positions are effectively flagged as erasures, and the decoder can weight them accordingly.

This is exactly why **soft-decision decoding** is standard: quantizing the matched filter output to 3 bits of confidence rather than 1 bit of decision is worth about **2 dB** of coding gain — one of the cheapest 2 dB available anywhere in a receiver. It is also why turbo and LDPC decoders operate entirely on log-likelihood ratios rather than bits, passing confidences back and forth until they converge. The lesson of this problem — that flagged uncertainty is far less damaging than hidden error — is the design principle behind every modern decoder ([4.4](04-04-convolutional-codes-viterbi.md)).

</details>

## Flashback

**From Lesson 3.6 (Power vs bandwidth efficiency):** A link achieves $\eta = 2$ bits/s/Hz. (a) State the Shannon-minimum $E_b/N_0$. (b) State QPSK's uncoded requirement at $10^{-5}$. (c) Express the gap as a factor in raw power, not decibels.

<details>
<summary>Solution</summary>

(a) $\dfrac{E_b}{N_0}\ge\dfrac{2^2-1}{2} = 1.5 = 1.76$ dB.

(b) QPSK needs 9.6 dB.

(c) Gap $= 9.6-1.8 = 7.8$ dB, i.e. a power ratio of

$$10^{7.8/10} = 6.0 .$$

An uncoded QPSK link burns **six times** the transmitter power that theory says is necessary. Framed that way, coding is not a refinement — it is the difference between a 20 W transmitter and a 120 W one, and on a spacecraft that is the difference between a mission and a proposal.

</details>

## Connections

- **Backward:** entropy formalizes why Module 3 could assume equiprobable symbols — a compressed source produces them.
- **Forward:** [4.2](04-02-channel-capacity-shannon-limit.md) maximizes $I(X;Y)$ over input distributions to get capacity, then specializes to the Gaussian channel to produce the bound drawn in [3.6](03-06-power-vs-bandwidth-efficiency.md).
- **Sideways:** this is a compressed pass over [`information-theory` 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) and [1.3](../../information-theory/lessons/01-03-mutual-information.md), which develop the same material with proofs. Mutual information is also the information gain that splits a decision tree in [`machine-learning`](../../machine-learning/syllabus.md), and entropy is Boltzmann's $S = k\ln W$ with a change of base — the identification made precise in [`information-theory` 4.4](../../information-theory/lessons/04-04-maximum-entropy-stat-mech.md).
