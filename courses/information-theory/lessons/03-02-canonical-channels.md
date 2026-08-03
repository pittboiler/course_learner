# Information Theory · Lesson 3.2: Canonical channels

> ⏱ ~15 min · Module 3: Channel capacity · Builds on: [3.1 Discrete channels and capacity](03-01-discrete-channels-capacity.md) · Unlocks: [3.3 The noisy-channel coding theorem: achievability](03-03-noisy-channel-coding-achievability.md)

## Why this matters

Every real channel — a modem pushing bits down a phone line, a disk platter holding them for a decade, a spacecraft whispering across the solar system — is, at bottom, one of a handful of simple noise models. Two of them carry almost the whole subject. The **binary symmetric channel** flips bits at random, and its capacity is the surprise this module builds toward: even a channel that corrupts a tenth of your bits still carries *half a reliable bit per use*. The **binary erasure channel** loses bits but tells you which ones it lost, and it is easier for exactly that reason. Get the capacity of these two by heart and you can read the capacity of most systems you'll ever meet.

## The idea

Last lesson defined capacity as $C = \max_{p(x)} I(X;Y)$ — the most information you can force through a channel by choosing the input distribution well. That's an optimization over *all* input distributions, which sounds hard. The magic of the two canonical channels is that their symmetry does the optimization for you: the best input is simply **uniform** (send 0 and 1 equally often), and the capacity drops out of a one-line calculation.

Picture the two channels. The **BSC** takes each bit and, with probability $p$, secretly flips it — a $0$ arrives as a $1$ or vice versa — and you are never told when this happened. The **BEC** is gentler: with probability $e$ it *erases* the bit, handing you a question mark "?" instead, but a correctly-received bit is never wrong and an erased bit is clearly flagged. The difference is *knowledge of failure*. The eraser confesses; the flipper hides. That single difference is why, at the same "error level," erasures cost you less than flips — and it's the intuition to carry through the whole lesson.

## The formal version

**Binary symmetric channel (BSC).** Input and output alphabets are $\{0,1\}$. Each bit is transmitted correctly with probability $1-p$ and flipped with probability $p$, independently:

$$p(Y{=}1 \mid X{=}0) = p(Y{=}0 \mid X{=}1) = p, \qquad p(Y{=}0\mid X{=}0)=p(Y{=}1\mid X{=}1)=1-p.$$

Its capacity is

$$C_{\text{BSC}} = 1 - H(p) \ \text{ bits/use}, \qquad H(p) = -p\log_2 p - (1-p)\log_2(1-p),$$

achieved by the **uniform** input $p(0)=p(1)=\tfrac12$.

**In words:** you start with one bit of room and pay back $H(p)$ bits — the entropy of the flip-coin, i.e. the noise's own uncertainty — leaving $1-H(p)$ for real information.

**Binary erasure channel (BEC).** Input alphabet $\{0,1\}$, output alphabet $\{0,\,?,\,1\}$. Each bit is received intact with probability $1-e$ and replaced by the erasure symbol "?" with probability $e$; the channel never flips a bit:

$$p(Y{=}?\mid X{=}0)=p(Y{=}?\mid X{=}1)=e, \qquad p(Y{=}x\mid X{=}x)=1-e.$$

Its capacity is

$$C_{\text{BEC}} = 1 - e \ \text{ bits/use},$$

again achieved by the uniform input.

**In words:** a fraction $e$ of your bits simply vanish, so on average only $1-e$ of them survive per use — and because you always *know which* ones vanished, there's nothing more to subtract.

**The two extremes.** A **noiseless** channel is either model at zero noise ($p=0$ or $e=0$): $C=1$, a full bit per use. A **useless** BSC is $p=\tfrac12$: then $H(\tfrac12)=1$ and $C=0$ — the output is an independent coin flip carrying nothing.

## Picture

![Left: the binary symmetric channel — inputs 0 and 1 mapping to outputs 0 and 1, with straight arrows labeled 1−p and crossing arrows labeled p, capacity 1−H(p). Right: the binary erasure channel — inputs 0 and 1 mapping to outputs 0, ?, and 1, with correct arrows labeled 1−e and erasure arrows to ? labeled e, capacity 1−e.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (the BSC capacity — Boss problem 3).** Derive $C_{\text{BSC}} = 1 - H(p)$ from the definition, then evaluate it at $p=0.1$.

Start from $C = \max_{p(x)} I(X;Y)$ and expand the mutual information the convenient way, $I(X;Y) = H(Y) - H(Y\mid X)$.

*The noise term is fixed.* Whatever bit you send, the only randomness left in the output is the flip coin, which is $1$ with probability $p$ and $0$ with probability $1-p$. So $H(Y\mid X{=}x) = H(p)$ for **both** inputs, and averaging over $x$ leaves

$$H(Y\mid X) = H(p) \quad \text{regardless of the input distribution.}$$

*The output term is what we can push.* $Y$ is a single bit, so $H(Y) \le 1$, with equality exactly when $Y$ is uniform. Can we make $Y$ uniform? Yes — feed a uniform input. If $p(X{=}0)=p(X{=}1)=\tfrac12$, then by the channel's symmetry $p(Y{=}0)=\tfrac12(1-p)+\tfrac12 p = \tfrac12$, so $Y$ is uniform and $H(Y)=1$. Putting the pieces together,

$$I(X;Y) = H(Y) - H(p) \le 1 - H(p),$$

with equality at the uniform input. Since the bound is achieved, the max *is* the bound:

$$C_{\text{BSC}} = 1 - H(p), \quad \text{capacity-achieving input uniform.}$$

Now $p=0.1$: $H(0.1) = -0.1\log_2 0.1 - 0.9\log_2 0.9 = 0.3322 + 0.1368 = 0.4690$ bits, so

$$C = 1 - 0.4690 = \mathbf{0.531 \ bits/use}.$$

A channel wrong one time in ten still delivers more than half a reliable bit every use — the number Module 3 will *realize* with actual codes.

**Example 2 (the BEC capacity, and why it beats the BSC).** Derive $C_{\text{BEC}} = 1 - e$, then compare the two channels at a matched error level.

Use the other face, $I(X;Y) = H(X) - H(X\mid Y)$, with a uniform input so $H(X)=1$. Look at what the output tells you about the input:

- If $Y=0$ or $Y=1$ (total probability $1-e$), the bit came through clean, so $X$ is pinned down: $H(X\mid Y{=}0)=H(X\mid Y{=}1)=0$.
- If $Y=?$ (probability $e$), you've learned *nothing* about which bit was sent, so $X$ is still uniform: $H(X\mid Y{=}?)=1$.

Averaging, $H(X\mid Y) = (1-e)\cdot 0 + e\cdot 1 = e$, hence

$$I(X;Y) = 1 - e, \qquad C_{\text{BEC}} = 1 - e.$$

(Uniform input is optimal here too — the erasure treats both bits identically.) The intuition is exact: a fraction $e$ of uses are wiped, the rest arrive perfectly, so $1-e$ good bits get through per use.

*Now the comparison.* Suppose each channel "errs" a tenth of the time — $p=0.1$ for the BSC, $e=0.1$ for the BEC. The BEC gives $C=1-0.1=0.900$ bits/use; the BSC gives only $0.531$. Same error rate, and the erasure channel carries **far more**. Why? Because the eraser tells you *where* it failed and the flipper doesn't. A flip forces you to spend information just locating the damage; a flagged erasure hands you the location for free. And note the BSC's collapse point: $p=\tfrac12$ gives $C=0$, dead — but *any* $p\ne\tfrac12$ gives $C>0$, some information always leaks through.

## Watch out

- **You might think** the BSC capacity is $1-p$ — one minus the flip rate — **but actually** it's $1-H(p)$: you subtract the *entropy of the noise*, not the flip probability. At $p=0.1$ that's the difference between $0.9$ and $0.531$. The channel charges you for the noise's uncertainty, and $H(p) > p$ for small $p$.
- **You might think** a very noisy BSC is useless, **but actually** only $p=\tfrac12$ kills it. At $p=\tfrac12$ the output is independent of the input, $H(\tfrac12)=1$, $C=0$. Anywhere else, $C>0$. And by symmetry $C(p)=C(1-p)$: a channel that flips 90% of bits is as good as one that flips 10% — just relabel the outputs (a consistent flipper is a reliable channel).
- **You might think** the BEC, since it destroys whole bits, must be worse than the BSC, **but actually** it's *easier* at a matched error level, because erasures are **located** while flips are **hidden**. Confessing your mistakes is cheaper than concealing them — the whole lesson in one line.
- **You might think** you must search over input distributions to get capacity, **but actually** for these symmetric channels the uniform input is optimal by inspection; symmetry collapses the max into a one-liner.

## One-liner

> The BSC's capacity is $1-H(p)$ (you pay the entropy of the noise, not the flip rate) and the BEC's is $1-e$ (you only lose the bits that vanish) — and the BEC wins at matched error rates because a confessed erasure is cheaper than a hidden flip.

## Problems

**P1 (🟢)** A binary symmetric channel has crossover probability $p=0.25$. Compute its capacity in bits/use. (Use $\log_2 3 \approx 1.585$.)

**P2 (🟡)** A deep-space link erases 30% of its bits (a BEC with $e=0.3$) but never flips one. You need to send a 1-megabit file *reliably*. Roughly how many channel uses does capacity say you'll need at best, and why can't you do better by cleverness alone?

**P3 (🔴, optional)** For a BSC, find the flip probability $p$ at which the capacity has dropped to exactly half a bit, $C = 0.5$. (Set up the equation; solve numerically to two decimals. Note there are two solutions — explain why.)

<details>
<summary>Solutions</summary>

**P1** $H(0.25) = -0.25\log_2 0.25 - 0.75\log_2 0.75$. Now $\log_2 0.25 = -2$, so the first term is $0.25\cdot 2 = 0.5$. And $\log_2 0.75 = \log_2 3 - 2 \approx 1.585 - 2 = -0.415$, so the second term is $-0.75(-0.415)=0.311$. Thus $H(0.25)=0.5+0.311 = 0.811$ bits, and

$$C = 1 - H(0.25) = 1 - 0.811 = \mathbf{0.189 \ bits/use}.$$

**P2** Capacity is $C = 1-e = 1-0.3 = 0.7$ bits/use. Reliable transmission of $10^6$ bits needs at least

$$\frac{10^6 \text{ bits}}{0.7 \text{ bits/use}} \approx \mathbf{1.43 \times 10^6 \ channel \ uses}.$$

You can't beat this because capacity is an upper bound on the reliable rate (the converse, Lesson 3.4): no encoding scheme, however clever, pushes more than $C$ bits per use through *with vanishing error*. Cleverness gets you *close* to $0.7$ (that's the coding theorem, 3.3), never past it — the erased bits carry no information, and no code can recover what the channel never sent.

**P3** Set $C = 1 - H(p) = 0.5$, i.e. $H(p) = 0.5$. Solve $-p\log_2 p - (1-p)\log_2(1-p) = 0.5$ numerically. Try $p=0.11$: $H = -0.11\log_2 0.11 - 0.89\log_2 0.89 = 0.3503 + 0.1493 = 0.4996 \approx 0.5$. ✓ So $p \approx \mathbf{0.11}$.

There are **two** solutions because $H(p)$ is symmetric about $p=\tfrac12$: $H(p)=H(1-p)$. The other root is $p \approx 1-0.11 = \mathbf{0.89}$. This is the same symmetry as the second Watch-out — a channel flipping 89% of bits is as informative as one flipping 11%, since you can just invert every output bit.

</details>

## Flashback

**From Lesson 3.1 (Discrete channels and capacity):** Consider the **Z-channel**: input $\{0,1\}$, output $\{0,1\}$, where a $0$ is always received correctly but a $1$ is flipped to $0$ with probability $\tfrac12$ (so $p(Y{=}0\mid X{=}1)=\tfrac12$, $p(Y{=}1\mid X{=}1)=\tfrac12$). With the input distribution $p(X{=}1)=q$, compute $I(X;Y)$ as a function of $q$, and evaluate it at $q=\tfrac12$.

<details>
<summary>Solution</summary>

Use $I(X;Y)=H(Y)-H(Y\mid X)$.

*Output distribution.* $Y=1$ only when $X=1$ *and* it isn't flipped: $p(Y{=}1) = q\cdot\tfrac12 = \tfrac{q}{2}$, so $p(Y{=}0)=1-\tfrac{q}{2}$. Thus $H(Y) = H\!\left(\tfrac{q}{2}\right)$.

*Noise term.* Given $X{=}0$, the output is deterministically $0$: $H(Y\mid X{=}0)=0$. Given $X{=}1$, the output is a fair coin: $H(Y\mid X{=}1)=H(\tfrac12)=1$. Averaging, $H(Y\mid X) = (1-q)\cdot 0 + q\cdot 1 = q$.

So

$$I(X;Y) = H\!\left(\tfrac{q}{2}\right) - q.$$

At $q=\tfrac12$: $H(\tfrac14) - \tfrac12$. Now $H(\tfrac14) = -\tfrac14\log_2\tfrac14 - \tfrac34\log_2\tfrac34 = 0.5 + 0.311 = 0.811$ bits, so

$$I = 0.811 - 0.5 = \mathbf{0.311 \ bits}.$$

(Unlike the BSC, the Z-channel's optimum is *not* at $q=\tfrac12$ — the asymmetry pushes the capacity-achieving input toward sending fewer $1$'s, since a $1$ is the only bit that ever gets corrupted. Maximizing $H(q/2)-q$ over $q$ gives the true capacity, a bit above $0.32$.)

</details>

## Connections

- **Backward:** this is [3.1](03-01-discrete-channels-capacity.md)'s definition $C=\max_{p(x)}I(X;Y)$ cashed out for the two channels whose symmetry makes the max trivial; the binary entropy $H(p)$ is straight from [1.1](01-01-entropy-uncertainty-surprise.md), and the BSC's "$1-H(p)$" first appeared as Example 2 of [1.3](01-03-mutual-information.md). See the [syllabus](../syllabus.md) for Module 3's arc.
- **Forward:** these capacities are *promises* — [3.3](03-03-noisy-channel-coding-achievability.md) proves you can actually communicate at rates up to $C$ with vanishing error (achievability), and [3.4](03-04-converse-fano-inequality.md) proves you can't beat it (the converse, via Fano's inequality). [3.5](03-05-codes-in-practice.md) shows the codes that get close.
- **Sideways (probability-theory):** the BSC is a two-state random flip and the BEC a thinning of a Bernoulli stream — the same conditional-distribution machinery you built in [probability-theory](../../probability-theory/syllabus.md), now scored in bits.
- **Sideways (engineering, in prose):** the BSC is the textbook model of a noisy modem or a bit stored on magnetic media that occasionally decays; the BEC models packet loss on a network (a dropped packet is a flagged erasure) and deep-space links where fading blanks out known time slots. Reed–Solomon and fountain codes are essentially BEC-capacity machines — they exploit exactly the "we know which bits are missing" structure that makes erasures cheap.
