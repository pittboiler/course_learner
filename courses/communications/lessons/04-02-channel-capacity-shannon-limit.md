# Communication Systems · Lesson 4.2: Channel capacity and the Shannon limit

> ⏱ ~15 min · Module 4: Capacity & Coding · Builds on: [4.1 Entropy and mutual information](04-01-entropy-mutual-information.md), [3.6 Power vs bandwidth efficiency](03-06-power-vs-bandwidth-efficiency.md) · Unlocks: [4.3 Error-control coding: block codes](04-03-block-codes.md), [4.4 Convolutional codes and Viterbi](04-04-convolutional-codes-viterbi.md)

## Why this matters

This is the theorem the whole course has been walking toward. Before 1948, everyone assumed that pushing a noisy channel harder meant accepting more errors — that reliability and rate traded off continuously, and driving the error rate to zero required driving the rate to zero too.

Shannon proved that is false. Below a specific rate, called the [capacity](../reference.md#channel-capacity), you can make the error probability as small as you like without slowing down at all. Above it, you cannot make it small at any price. There is a hard edge, it is computable from the bandwidth and the SNR, and it does not care how clever you are.

Everything practical in communications since has been an attempt to get close to it. This lesson computes the number and locates the famous $-1.6$ dB limit; [4.3](04-03-block-codes.md) and [4.4](04-04-convolutional-codes-viterbi.md) build the machinery that approaches it.

## The idea

[4.1](04-01-entropy-mutual-information.md) built $I(X;Y)$ — the bits a channel delivers for a given input distribution. **Capacity is the best you can do by choosing that distribution well:**

$$C = \max_{p(x)}I(X;Y).$$

That is a definition, and by itself unremarkable. The astonishing part is the **channel coding theorem**, which says this number is achievable *and* unbeatable:

- For any rate $R < C$, there exist codes with error probability as small as you wish.
- For any rate $R > C$, no code can achieve arbitrarily small error probability.

The proof of the first half is one of the great arguments in mathematics, and its method matters here: Shannon did not construct a good code. He showed that if you pick a code **at random**, its *average* performance over the ensemble is good — so at least one specific code must be at least as good as the average. It is an existence proof by averaging, and it left a fifty-year gap between knowing good codes exist and being able to build one.

The intuition for why a hard threshold exists is geometric. A transmitted codeword of length $n$ is a point in $n$-dimensional space; noise displaces it into a sphere of radius $\sqrt{nN_0/2}$ around it. Decoding succeeds if the spheres of different codewords do not overlap. All the codewords live inside a big sphere of radius $\sqrt{n(P+N)}$ set by the power constraint. So the number of distinguishable codewords is at most the ratio of volumes:

$$M \le \frac{\big(\sqrt{n(P+N)}\big)^n}{\big(\sqrt{nN}\big)^n} = \left(1+\frac{P}{N}\right)^{n/2},$$

giving $\frac{1}{n}\log_2 M \le \frac12\log_2(1+P/N)$ bits per dimension. **Capacity is a sphere-packing count**, and the $\log_2(1+\mathrm{SNR})$ falls straight out of it.

## The formal version

**Capacity, in general.**

$$C = \max_{p(x)}I(X;Y) \quad\text{bits per channel use}.$$

**Channel coding theorem (Shannon 1948).** For a discrete memoryless channel of capacity $C$: for every $R<C$ and every $\epsilon>0$ there exists a code of rate $R$ and block length $n$ with error probability below $\epsilon$; and for $R>C$ the error probability is bounded away from zero.

*In words: below capacity, arbitrarily reliable; above it, impossible.* The converse half is Fano's inequality ([`information-theory` 3.4](../../information-theory/lessons/03-04-converse-fano-inequality.md)).

**Capacity of the BSC.** For crossover probability $p$, the uniform input maximizes $I$, giving

$$C_{\rm BSC} = 1-H_b(p)\ \text{bits/use}.$$

**Capacity of the BEC.** For erasure probability $\epsilon$,

$$C_{\rm BEC} = 1-\epsilon\ \text{bits/use}.$$

**Shannon–Hartley: the band-limited Gaussian channel.** For bandwidth $B$ hertz, signal power $S$, and AWGN of one-sided density $N_0$ (so noise power $N = N_0B$):

$$\boxed{\;C = B\log_2\!\left(1+\frac{S}{N}\right) = B\log_2\!\left(1+\frac{S}{N_0B}\right)\ \text{bits per second}.\;}$$

*In words: capacity is proportional to bandwidth and logarithmic in signal-to-noise ratio.* That asymmetry is the central engineering fact of the subject: **bandwidth is a linear lever, power is a logarithmic one.** Doubling $B$ nearly doubles $C$; doubling $S$ adds only 1 bit per hertz.

**Two regimes.**

*Bandwidth-limited* ($S/N \gg 1$): $C\approx B\log_2(S/N)$. Every 3 dB of extra SNR buys 1 more bit/s/Hz. This is cable, fibre, DSL, and a strong microwave link.

*Power-limited* ($S/N\ll1$): using $\log_2(1+x)\approx x/\ln2$,

$$C \approx \frac{S}{N_0\ln 2} = 1.44\,\frac{S}{N_0}\ \text{bits/s},$$

which is **independent of $B$**. Adding bandwidth stops helping — the noise it admits grows as fast as the capacity it unlocks. This is deep space, and it is the origin of the next result.

**The infinite-bandwidth limit — the $-1.6$ dB number.** Let $B\to\infty$ with $S$ fixed. Writing $S = E_bC$ (each bit costs $E_b$ joules and $C$ bits go per second):

$$C = B\log_2\left(1+\frac{E_bC}{N_0B}\right).$$

Let $\eta = C/B$ (spectral efficiency) and divide by $B$:

$$\eta = \log_2\left(1+\frac{E_b}{N_0}\eta\right) \quad\Longrightarrow\quad \frac{E_b}{N_0} = \frac{2^\eta-1}{\eta}.$$

As $\eta\to0$ (infinite bandwidth per bit), expanding $2^\eta = 1+\eta\ln2+O(\eta^2)$:

$$\boxed{\;\frac{E_b}{N_0}\bigg|_{\min} = \ln 2 = 0.693 = -1.59\ \text{dB}.\;}$$

*In words: no system, at any bandwidth, with any code, can communicate reliably with less than $-1.6$ dB of energy per bit relative to the noise density.* This is the **Shannon limit**, and it is the hard floor under every communication system ever built. It is not an engineering limit; it is a statement about the universe, on the same footing as the second law.

**Reading the bound at your own efficiency.** The general form $E_b/N_0 \ge (2^\eta-1)/\eta$ is the curve drawn in [3.6](03-06-power-vs-bandwidth-efficiency.md). Only at $\eta\to0$ is it $-1.6$ dB; at $\eta=1$ it is 0 dB, at $\eta=4$ it is 5.7 dB.

**What the theorem does not say.** Three honest caveats, each with practical bite:

1. **It says nothing about complexity.** The random codes in the proof require exponentially large tables to decode. Approaching capacity with feasible decoders took until 1993 (turbo codes) and the rediscovery of LDPC codes.
2. **It says nothing about delay.** Achieving capacity needs $n\to\infty$: long blocks, hence long latency. A system with a strict latency budget — voice, control loops, high-frequency trading — operates at a strictly smaller *finite-blocklength* capacity, and that penalty is real and quantifiable.
3. **It assumes the channel model.** Capacity for AWGN says nothing about a fading channel, an interference-limited one, or one with an eavesdropper. Each has its own capacity, sometimes very different.

## Picture

![Two panels. Left: capacity in bits per second plotted against bandwidth for a fixed signal power, rising steeply then saturating at the asymptote 1.44 S over N0, with the bandwidth-limited and power-limited regions labelled. Right: the required Eb/N0 curve against spectral efficiency, plunging toward a vertical asymptote at minus 1.6 dB as eta goes to zero, with the achievable region shaded to the right.](assets/04-02-fig1.svg)

Left: the saturation is the surprise. Capacity rises with bandwidth but **flattens** — past a certain point, extra hertz admit noise as fast as they admit capacity, and $C$ tops out at $1.44S/N_0$. There is no such thing as trading unlimited bandwidth for unlimited rate at fixed power. Right: the same fact, re-plotted. As spectral efficiency falls toward zero the required $E_b/N_0$ does *not* fall toward zero — it flattens at $-1.6$ dB, the vertical wall past which nothing works.

## Worked examples

**Example 1 (the telephone channel — and why modems stopped at 33.6k).** A voice-grade line has $B = 3.1$ kHz and SNR of 30 dB.

*Capacity:*

$$C = 3100\log_2(1+1000) = 3100\times\log_2(1001) = 3100\times 9.97 = 30{,}900\ \text{bps}.$$

*Compare a 28.8 kbps modem (V.34, 1994):* it runs at $28{,}800/30{,}900 = 93\%$ of capacity. A 33.6 kbps modem (V.34+, 1996) reaches 109% of *this* number — which tells you the assumed 30 dB was conservative; real lines ran a few dB better, and V.34 measured the actual line and adapted.

*The interesting question: why did it stop?* Not because engineers ran out of ideas — because 33.6 kbps *was* essentially the capacity of an analog local loop. Every remaining decibel had been extracted with trellis coding, adaptive equalization, precoding, and constellation shaping.

*And how 56k broke it.* V.90 did not beat Shannon; it changed the channel. By the mid-1990s the telephone network was digital end to end except for the last mile to the subscriber. A modem in an ISP's rack could inject digital PCM codewords **directly into the 64 kbps digital backbone**, bypassing the analog-to-digital conversion entirely in the downstream direction. The remaining impairment was the receiver's own quantization, not analog line noise. Hence 56 kbps downstream (limited by the PCM codec's 8000 × 7 useful bits, and by US regulatory power limits) but only 33.6 kbps upstream, where a genuine analog-to-digital conversion still stood in the way.

**The general lesson, worth more than the anecdote:** when you hit a capacity limit, the answer is never a better code. It is to change the channel — more bandwidth, more power, better antennas, or a different physical path. DSL did exactly that a few years later by abandoning the 3.1 kHz voice band and using the copper pair's full 1 MHz.

**Example 2 (deep space — the power-limited corner).** A probe transmits with $S/N_0 = 10^5$ (i.e. $S/N_0 = 50$ dB-Hz) and effectively unlimited bandwidth.

*Capacity, infinite-bandwidth limit:*

$$C_\infty = 1.44\frac{S}{N_0} = 1.44\times10^5 = 144\ \text{kbps}.$$

*Check that bandwidth really is the free variable.* At $B = 1$ MHz:

$$\mathrm{SNR} = \frac{S}{N_0B} = \frac{10^5}{10^6} = 0.1, \qquad C = 10^6\log_2(1.1) = 10^6(0.1375) = 137.5\ \text{kbps}.$$

At $B = 10$ MHz: $\mathrm{SNR} = 0.01$, $C = 10^7\log_2(1.01) = 10^7(0.01436) = 143.6$ kbps.

At $B=100$ MHz: 143.98 kbps. **Ten times the bandwidth bought 4%.** The link is thoroughly power-limited, and bandwidth is not the constraint — which immediately tells you the design direction: use a low-rate code and a small constellation, and spend nothing on spectral efficiency.

*What that means for the modulation choice.* Operating at, say, 40 kbps (a comfortable 28% of capacity) with $E_b/N_0 = S/(N_0R_b) = 10^5/(4\times10^4) = 2.5 = 4.0$ dB. Uncoded BPSK needs 9.6 dB — **5.6 dB short**. A rate-1/2 convolutional code with Viterbi decoding gives about 5 dB ✓, just barely. A turbo code at rate 1/3 gives about 9 dB, with margin to spare, and could support a higher data rate.

This is precisely how deep-space rates have improved. Voyager's rate at Neptune (1989) was 21.6 kbps from 4.5 billion kilometres, achieved with a concatenated Reed–Solomon/convolutional code delivering about 7 dB of gain over uncoded. The transmitter was 23 W — roughly a refrigerator bulb, at the distance of Neptune. **Every one of those decibels was won in the decoder, not in the transmitter.**

## Watch out

- **You might think the Shannon limit is $-1.6$ dB for every system.** It is $-1.6$ dB only in the limit of infinite bandwidth ($\eta\to0$). At your actual spectral efficiency the bound is $(2^\eta-1)/\eta$, which at $\eta = 4$ is 5.7 dB. Quoting $-1.6$ dB for a bandwidth-limited system is a common and serious error.
- **You might think unlimited bandwidth gives unlimited capacity.** It saturates at $1.44S/N_0$. More bandwidth admits more noise in exact proportion, and the logarithm flattens.
- **You might think capacity is a rate you can achieve today.** It is achievable *in principle* with unbounded block length and decoding complexity. Real systems with latency budgets face a lower finite-blocklength limit, and the shortfall grows as blocks get shorter.
- **You might think exceeding capacity just gives a higher error rate.** Above $C$ the error probability is bounded away from zero *no matter what code you use*. It is a cliff, not a slope — which is why systems are specified below capacity with margin, not at it.
- **You might think a better code can rescue any channel.** If $C$ is below your required rate, no code exists. The fix must change $B$, $S$, or $N_0$. Recognizing which of those is the binding constraint is the actual engineering skill.

## One-liner

> Capacity is $B\log_2(1+\mathrm{SNR})$: bandwidth is a linear lever and power a logarithmic one — and no system anywhere, at any bandwidth, can carry a bit for less than $-1.6$ dB of $E_b/N_0$.

## Problems

**P1 (🟢)** A telephone-grade channel has bandwidth 3.1 kHz and SNR 30 dB. (a) Compute its Shannon capacity. (b) A real modem runs at 28.8 kbps; how close to capacity is that? (c) As spectral efficiency $\to0$, what limiting $E_b/N_0$ does capacity demand, and what does that number mean for a power-starved deep-space link?

**P2 (🟡)** A wireless channel has 20 MHz of bandwidth and delivers an SNR of 15 dB. (a) Compute the capacity. (b) A system achieves 65 Mbps. What fraction of capacity is that, and what spectral efficiency? (c) What SNR would be needed to double the capacity at the same bandwidth? (d) What bandwidth would be needed to double it at the same SNR? Comment on which is the cheaper route.

**P3 (🔴)** A satellite link has $S/N_0 = 65$ dB-Hz. (a) Find the infinite-bandwidth capacity. (b) Find the capacity at $B = 1$ MHz, 10 MHz, and 36 MHz (a standard transponder). (c) For the 36 MHz case, find the spectral efficiency at capacity and the corresponding minimum $E_b/N_0$. (d) The operator wants 40 Mbps. Determine whether it is feasible, what spectral efficiency it implies, what modulation would deliver it uncoded, and what code rate would be needed to close the gap.

<details>
<summary>Solutions</summary>

**P1** (a) SNR $= 30$ dB $= 1000$:

$$C = 3100\log_2(1+1000) = 3100\times 9.967 = 30{,}898 \approx 30.9\ \text{kbps}.$$

(b) $$\frac{28{,}800}{30{,}898} = 0.932 = 93.2\%\ \text{of capacity}.$$

Remarkably close — V.34 modems used trellis-coded modulation, adaptive equalization, and line probing to get there, and there was essentially nothing left to extract.

(c) As $\eta\to0$,

$$\frac{E_b}{N_0}\to\ln2 = 0.693 = -1.59\ \text{dB}.$$

For a deep-space link it means: **there is a floor.** No matter how much bandwidth the mission is willing to spend, no matter how sophisticated the code, each bit must arrive carrying at least $0.693N_0$ joules. Since $E_b = P/R_b$, that sets a hard ceiling on the data rate for a given transmitter power and receiver noise temperature:

$$R_b \le \frac{P}{0.693\,N_0} = 1.44\frac{P}{N_0}.$$

Everything else — bigger dishes, colder receivers, better codes — is an attempt to get near that line, and once you are within a decibel of it (as modern turbo-coded missions are), the only remaining lever is more power or more collecting area.

**P2** (a) SNR $=15$ dB $= 31.62$:

$$C = 20\times10^6\log_2(32.62) = 20\times10^6\times 5.028 = 100.6\ \text{Mbps}.$$

(b) $$\frac{65}{100.6} = 64.6\%\ \text{of capacity}, \qquad \eta = \frac{65\times10^6}{20\times10^6} = 3.25\ \text{bits/s/Hz}.$$

(c) Doubling $C$ to 201.1 Mbps at $B = 20$ MHz requires $\log_2(1+\mathrm{SNR}) = 10.06$, so

$$1+\mathrm{SNR} = 2^{10.06} = 1068 \;\Longrightarrow\; \mathrm{SNR} = 1067 = 30.3\ \text{dB}.$$

An increase of $30.3-15 = 15.3$ dB — a factor of **34 in transmitter power**.

(d) Doubling $C$ at fixed SNR requires doubling $B$ to **40 MHz** (capacity is exactly linear in $B$ at fixed SNR... with the caveat that holding SNR fixed while doubling $B$ means doubling $S$ too, since $N = N_0B$ grows. Holding *total power* fixed instead: $C = B\log_2(1+S/N_0B)$, and at $B=40$ MHz the SNR falls to 12 dB, giving $C = 40\times10^6\log_2(16.8) = 162.6$ Mbps — a 62% increase, not 100%.)

*Comment.* Even accounting for the SNR dilution, bandwidth is far cheaper: 62% more capacity for twice the spectrum, versus 100% more capacity for **34 times** the power. This asymmetry — linear in $B$, logarithmic in $S$ — is why every wireless generation has chased wider channels (20 → 80 → 160 → 320 MHz in Wi-Fi, and millimetre-wave in 5G) rather than more transmit power, which is in any case capped by regulation and battery.

**P3** (a) $S/N_0 = 65$ dB-Hz $= 10^{6.5} = 3.162\times10^6$ Hz.

$$C_\infty = 1.44\times3.162\times10^6 = 4.56\ \text{Mbps}.$$

(b) $C = B\log_2\left(1+\frac{S/N_0}{B}\right)$:

- $B = 1$ MHz: $\mathrm{SNR} = 3.162$, $C = 10^6\log_2(4.162) = 10^6(2.057) = 2.06$ Mbps.
- $B = 10$ MHz: $\mathrm{SNR} = 0.3162$, $C = 10^7\log_2(1.3162) = 10^7(0.3963) = 3.96$ Mbps.
- $B = 36$ MHz: $\mathrm{SNR} = 0.0878$, $C = 3.6\times10^7\log_2(1.0878) = 3.6\times10^7(0.1214) = 4.37$ Mbps.

Approaching the 4.56 Mbps asymptote, and clearly power-limited: 36× the bandwidth of the first case gives only 2.1× the capacity.

(c) At capacity with $B=36$ MHz:

$$\eta = \frac{4.37\times10^6}{36\times10^6} = 0.1214\ \text{bits/s/Hz}.$$

$$\frac{E_b}{N_0}\bigg|_{\min} = \frac{2^{0.1214}-1}{0.1214} = \frac{0.0878}{0.1214} = 0.723 = -1.41\ \text{dB}.$$

(Just above the $-1.59$ dB floor, as expected at such low spectral efficiency.)

(d) **Feasible?** 40 Mbps versus a capacity of 4.37 Mbps — **no, by nearly an order of magnitude.** Even at infinite bandwidth the ceiling is 4.56 Mbps.

*What it would take.* To carry 40 Mbps the link needs $S/N_0 \ge R_b/1.44 = 2.78\times10^7$ Hz $= 74.4$ dB-Hz at minimum — 9.4 dB more than the 65 dB-Hz available, and that is the infinite-bandwidth best case. Within 36 MHz the requirement is stiffer: $\eta = 40/36 = 1.11$ bits/s/Hz needs $E_b/N_0 \ge (2^{1.11}-1)/1.11 = 1.045 = 0.19$ dB, so $S/N_0 \ge 0.19\ \text{dB} + 10\log_{10}(4\times10^7) = 0.19+76.0 = 76.2$ dB-Hz — **11.2 dB short**.

*So the answer is not a code.* Eleven decibels must come from the physical layer: a larger receive antenna (a 3× diameter gives 9.5 dB), a higher-power transponder, or a spot beam instead of a wide one. This is exactly the Example 1 lesson recurring — **when you are above capacity, change the channel.**

*If the target were instead 3 Mbps* (a feasible 69% of capacity): $\eta = 3/36 = 0.0833$, and the available $E_b/N_0 = S/(N_0R_b) = 3.162\times10^6/(3\times10^6) = 1.054 = 0.23$ dB. Uncoded BPSK needs 9.6 dB, so you are 9.4 dB short — and the Shannon bound at this $\eta$ is $-1.5$ dB, so there is 1.7 dB of genuine headroom. **A rate-1/2 turbo or LDPC code, operating within about 1 dB of the bound, closes it.** The modulation would be BPSK or QPSK at a coded symbol rate of 6 Msymbols/s, comfortably inside 36 MHz. That is a realistic satellite design, and it is what DVB-S2 does.

</details>

## Flashback

**From Lesson 4.1 (Entropy and mutual information):** A BSC has crossover probability $p=0.05$. (a) Find its capacity. (b) At 10 Mbaud, find the maximum reliable information rate. (c) A rate-3/4 code is proposed. Is it feasible? What about rate 7/8?

<details>
<summary>Solution</summary>

(a) $$H_b(0.05) = -0.05\log_20.05 - 0.95\log_20.95 = 0.05(4.322)+0.95(0.0740) = 0.2161+0.0703 = 0.286 .$$

$$C = 1-0.286 = 0.714\ \text{bits/use}.$$

(b) $0.714\times10^7 = 7.14$ Mbps.

(c) Rate 3/4 $= 0.75 > 0.714$ — **not feasible**. No code of that rate can achieve arbitrarily low error probability on this channel. Rate 7/8 $=0.875$ is further above capacity and even less feasible.

A rate-2/3 code ($0.667 < 0.714$) *is* feasible in principle, with about 7% of headroom — tight, but a modern LDPC code at that rate would work. Notice how unforgiving this is: a 5% raw error rate caps you at rate 0.714, so the intuition "5% errors, so I only need about 5% redundancy" is wrong by a factor of six. **The redundancy a channel demands is set by $H_b(p)$, not by $p$** — and $H_b$ is much larger than $p$ for small $p$, because the decoder must spend bits locating the errors as well as correcting them (compare the erasure channel in [4.1](04-01-entropy-mutual-information.md) P3, where the locations are free and the cost falls to exactly $\epsilon$).

</details>

## Connections

- **Backward:** capacity maximizes the mutual information of [4.1](04-01-entropy-mutual-information.md); the $(2^\eta-1)/\eta$ curve is the bound plotted in [3.6](03-06-power-vs-bandwidth-efficiency.md).
- **Forward:** [4.3](04-03-block-codes.md) and [4.4](04-04-convolutional-codes-viterbi.md) build the codes that approach $C$; [4.5](04-05-multiplexing-multiple-access.md) asks how capacity is *shared* among users.
- **Sideways:** this is [`information-theory` 3.1](../../information-theory/lessons/03-01-discrete-channels-capacity.md) and [4.2](../../information-theory/lessons/04-02-gaussian-channel-water-filling.md) at engineering rather than proof depth; the sphere-packing argument is the same geometry as constellation design in [3.5](03-05-qam-and-union-bound.md), taken to $n$ dimensions.
