# Communication Systems · Lesson 3.4: Going M-ary — QPSK and M-PSK

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md), [1.5 SSB, VSB and multiplexing](01-05-ssb-vsb-multiplexing.md) · Unlocks: [3.5 QAM and the union bound](03-05-qam-and-union-bound.md), [3.6 Power vs bandwidth efficiency](03-06-power-vs-bandwidth-efficiency.md)

## Why this matters

Binary signalling is stuck at about 1 bit per second per hertz ([3.3](03-03-binary-modulation-ber.md)). If the channel is short on bandwidth and long on power — a telephone line, a cable, a microwave link with a big dish — that is the wrong trade, and you want to send more bits per symbol.

QPSK is the first and most important step, and it comes with a result that looks like a free lunch: **QPSK doubles the bit rate of BPSK in the same bandwidth, at the same $E_b/N_0$, with the same bit error rate.** It is not a free lunch — it is the discovery that a bandpass channel has been offering you two independent dimensions all along and BPSK was using only one. Beyond QPSK the free lunch ends abruptly, and every further doubling of the constellation costs real power. Understanding exactly where the free part stops is the point of this lesson.

## The idea

A bandpass signal has two orthogonal components: the one that multiplies $\cos(2\pi f_ct)$ and the one that multiplies $\sin(2\pi f_ct)$. Over a symbol period those two are orthogonal — the **in-phase** and **quadrature** channels. You met them in [1.5](01-05-ssb-vsb-multiplexing.md) as the complex envelope $\tilde s = s_I + js_Q$.

BPSK uses only $s_I$. The quadrature axis sits there, unused, carrying nothing. QPSK simply runs a second, independent BPSK on it. Two independent bit streams, each with its own antipodal pair, sharing one carrier and one bandwidth. Each stream individually performs exactly like BPSK — the noise on the two axes is independent ([3.1](03-01-signal-space-matched-filter.md)) — so the bit error rate is unchanged while the bit rate doubles. **That is the whole of QPSK: it is two BPSK links stacked in quadrature.**

Now try to go further. With 8-PSK you put eight points on a circle. But a circle of radius $\sqrt{E_s}$ has a fixed circumference, so packing more points onto it means squeezing them closer together. The angular spacing is $2\pi/M$, so the distance between neighbours shrinks like $\sin(\pi/M)$, and required power climbs. Past QPSK, every extra bit per symbol costs roughly 4–6 dB.

Why is QPSK exempt? Because going from 2 points to 4 did not crowd a circle — it **used a new dimension**. Two dimensions is all a bandpass channel has, so that trick works exactly once. After that you are crowding, and crowding costs power.

One more essential idea: [Gray coding](../reference.md#gray-coding). When an error happens, it is almost always to an adjacent constellation point. If you label neighbours so they differ in only one bit, then each symbol error causes only one bit error, rather than an average of $\log_2M/2$. Gray coding costs nothing and saves a factor of $\log_2 M$ in bit error rate. It is not optional.

## The formal version

**QPSK.** Four equally spaced phases, $\theta_m = (2m-1)\pi/4$ for $m=1,2,3,4$:

$$s_m(t) = \sqrt{\frac{2E_s}{T_s}}\cos\big(2\pi f_ct + \theta_m\big) = \underbrace{\sqrt{E_s}\cos\theta_m}_{s_I}\,\phi_1(t) + \underbrace{-\sqrt{E_s}\sin\theta_m}_{s_Q}\,\phi_2(t),$$

with the orthonormal basis

$$\phi_1(t) = \sqrt{\frac{2}{T_s}}\cos(2\pi f_ct), \qquad \phi_2(t) = -\sqrt{\frac{2}{T_s}}\sin(2\pi f_ct).$$

The four points are $\big(\pm\sqrt{E_s/2},\ \pm\sqrt{E_s/2}\big)$ — the corners of a square of side $\sqrt{2E_s}$.

*Energy bookkeeping:* $E_s = 2E_b$, since each symbol carries 2 bits.

**Why QPSK ties BPSK.** Project onto $\phi_1$: the coordinate is $\pm\sqrt{E_s/2} = \pm\sqrt{E_b}$, and the noise on that axis is $\mathcal{N}(0,N_0/2)$, independent of the $\phi_2$ noise. That is *identical* to the BPSK problem of [3.3](03-03-binary-modulation-ber.md). Hence

$$\boxed{\;P_b^{\rm QPSK} = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right) = P_b^{\rm BPSK}.\;}$$

And the symbol error probability, since a symbol is correct only if *both* bits are:

$$P_s = 1-(1-P_b)^2 = 2P_b - P_b^2 \approx 2Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right).$$

**What QPSK buys, precisely.** Same $E_b/N_0$, same BER, twice the bits — so at a fixed bit rate it needs **half the bandwidth**, or at a fixed bandwidth it carries **twice the rate**. What it does *not* buy is a power saving: $E_b$ is unchanged, so total power $P = E_bR_b$ doubles when the rate doubles. QPSK converts bandwidth efficiency, not power.

**$M$-PSK.** $M$ points equally spaced on a circle of radius $\sqrt{E_s}$, $E_s = E_b\log_2M$. Adjacent points subtend $2\pi/M$, so

$$d_{\min} = 2\sqrt{E_s}\sin\frac{\pi}{M}.$$

With two nearest neighbours per point (except that the union bound over-counts slightly),

$$P_s \approx 2\,Q\!\left(\sqrt{\frac{2E_s}{N_0}}\,\sin\frac{\pi}{M}\right) = 2\,Q\!\left(\sqrt{\frac{2E_b\log_2M}{N_0}}\,\sin\frac{\pi}{M}\right).$$

*In words: the argument of $Q$ grows as $\sqrt{\log_2M}$ but shrinks as $\sin(\pi/M)$, and the sine wins badly for large $M$.*

**Gray coding.** Label the points so adjacent ones differ in exactly one bit. Then

$$P_b \approx \frac{P_s}{\log_2 M}.$$

*In words: one symbol error causes one bit error, so divide by the bits per symbol.*

**The cost of each extra bit.** Required $E_b/N_0$ for $P_b = 10^{-5}$:

| $M$ | bits/symbol | $d_{\min}/\sqrt{E_s}$ | $E_b/N_0$ needed | Penalty vs QPSK |
|---|---|---|---|---|
| 2 (BPSK) | 1 | 2 | 9.6 dB | 0 dB |
| 4 (QPSK) | 2 | $\sqrt2 = 1.414$ | 9.6 dB | **0 dB** |
| 8 | 3 | 0.765 | 13.0 dB | +3.4 dB |
| 16 | 4 | 0.390 | 17.5 dB | +7.9 dB |
| 32 | 5 | 0.196 | 22.4 dB | +12.8 dB |

Beyond QPSK the penalty grows by roughly 4–5 dB per doubling, and it approaches 6 dB per doubling asymptotically (since $\sin(\pi/M)\approx\pi/M$ halves each time while $\log_2M$ only increments). **This table is why 8-PSK is rare and 16-PSK essentially never appears** — at $M=16$ you are paying 7.9 dB over QPSK for 2 bits/symbol, when 16-QAM ([3.5](03-05-qam-and-union-bound.md)) delivers the same 4 bits/symbol for only 4.0 dB. PSK crowds a circle; QAM fills a square, which is a better use of two dimensions.

**Bandwidth and efficiency.** With raised-cosine roll-off $\alpha$,

$$B_T = R_s(1+\alpha) = \frac{R_b(1+\alpha)}{\log_2M}, \qquad \frac{R_b}{B_T} = \frac{\log_2M}{1+\alpha}\ \text{bits/s/Hz}.$$

**Offset QPSK and $\pi/4$-QPSK — the envelope problem.** In ordinary QPSK both bits can change at once, producing a $180°$ phase jump, which means the signal's envelope passes through **zero**. A nonlinear power amplifier run near saturation (as satellite and handset amplifiers must be, for efficiency) distorts such deep amplitude dips and regrows the spectral sidelobes that pulse shaping so carefully removed.

Two standard fixes: **OQPSK** delays the Q stream by half a symbol so only one bit can change at a time, limiting phase steps to $90°$; **$\pi/4$-QPSK** alternates between two QPSK constellations rotated by $45°$, capping steps at $135°$ and — crucially — never allowing the trajectory through the origin. Both have identical BER to QPSK (the constellation geometry is unchanged) and a much better peak-to-average ratio. This is a recurring pattern in modulation design: **the BER is set by the constellation, but the practicality is set by the trajectory between points.**

## Picture

![A three-part figure. Left: the QPSK constellation, four points at the corners of a square, with Gray labels 00, 01, 11, 10, decision quadrants drawn, and the two independent BPSK sub-channels marked on the I and Q axes. Middle: an 8-PSK constellation on a circle showing the shrunken minimum distance between adjacent points. Right: a bar chart of required Eb/N0 at 1e-5 for M = 2, 4, 8, 16, 32, showing the flat step from 2 to 4 and the steep climb after.](assets/03-04-fig1.svg)

Left: QPSK is a square, and the dashed decision boundaries are simply the two axes — which is the visual statement that the I and Q decisions are *independent*. Reading the Gray labels around the square, adjacent corners differ in one bit; opposite corners differ in two, and those are the errors that essentially never happen. Middle: 8-PSK on the same-radius circle, with the neighbour distance visibly shorter. Right: the price list. The step from $M=2$ to $M=4$ is flat — the free dimension — and every step after it climbs.

## Worked examples

**Example 1 (QPSK versus BPSK, made concrete).** A link has 1 MHz of bandwidth, raised-cosine $\alpha=0.35$, and enough power for $E_b/N_0 = 10$ dB. Compare BPSK and QPSK.

*BPSK:* $R_s = B/(1+\alpha) = 10^6/1.35 = 740.7$ ksymbols/s $=$ 740.7 kbps. BER:

$$P_b = Q(\sqrt{2\times10}) = Q(4.47) = 3.9\times10^{-6}.$$

*QPSK:* same symbol rate, 2 bits each: $R_b = 1.481$ Mbps — **double**. Received power must double to hold $E_b$ fixed, but $E_b/N_0$ is unchanged at 10 dB, so

$$P_b = Q(4.47) = 3.9\times10^{-6}$$

— **identical**. Spectral efficiency rises from 0.74 to 1.48 bits/s/Hz.

*The accounting that makes it non-magical.* Total power $P = E_b R_b$. Doubling $R_b$ at fixed $E_b$ doubles $P$, so the SNR (measured in the same 1 MHz) rises by 3 dB: 10 dB of $E_b/N_0$ becomes 11.7 dB of SNR for QPSK versus 8.7 dB for BPSK. **QPSK is not free in watts; it is free in $E_b/N_0$**, which is the metric that fairly compares schemes at different rates ([1.3](01-03-noise-snr-filtering.md)). If instead you hold *total power* fixed and double the rate, $E_b$ halves and you lose 3 dB — which is the honest version of the trade.

**Example 2 (8-PSK: computing the real cost).** Take $M=8$ and target $P_b = 10^{-5}$, with Gray coding.

Gray coding gives $P_s \approx P_b\log_2M = 3\times10^{-5}$. Then

$$P_s = 2Q\!\left(\sqrt{\frac{2E_s}{N_0}}\sin\frac{\pi}{8}\right) = 3\times10^{-5} \;\Longrightarrow\; Q(x) = 1.5\times10^{-5} \;\Longrightarrow\; x = 4.17 .$$

With $\sin(\pi/8) = 0.3827$:

$$\sqrt{\frac{2E_s}{N_0}} = \frac{4.17}{0.3827} = 10.90 \;\Longrightarrow\; \frac{E_s}{N_0} = \frac{10.90^2}{2} = 59.4 .$$

Since $E_s = 3E_b$:

$$\frac{E_b}{N_0} = \frac{59.4}{3} = 19.8 = 13.0\ \text{dB}.$$

**8-PSK needs 13.0 dB where QPSK needs 9.6 dB** — 3.4 dB more, for 50% more bits per symbol.

*Is that a good deal?* It depends entirely on which resource is scarce.

- **Bandwidth-limited** (a licensed 1 MHz channel, plenty of transmit power): 8-PSK carries 3 bits/symbol instead of 2 — a 50% rate increase for 3.4 dB, which you have. Take it.
- **Power-limited** (a deep-space probe, a battery sensor): you cannot afford 3.4 dB, and you probably have spectrum to spare. Stay at QPSK, or go the other way entirely and add coding.

*And the alternative nobody should skip:* spend that same 3.4 dB on a rate-3/4 error-correcting code with QPSK instead. That gives $2\times0.75 = 1.5$ bits/symbol of *information* — less than 8-PSK's 3 — but the code delivers several dB of gain rather than consuming it. In practice the two are combined: **trellis-coded modulation** uses an 8-PSK constellation with a convolutional code that selects among the points, achieving QPSK's 2 information bits per symbol at *better* than QPSK's error rate. Ungerboeck's 1982 insight was that the constellation expansion and the coding should be designed together, not stacked — and it is why every telephone modem after 1984 used TCM.

## Watch out

- **You might think QPSK is twice as good as BPSK for free.** It is twice the *rate* at the same $E_b/N_0$ and BER — which means twice the total transmitted power. The free part is the use of the quadrature dimension, and it is available exactly once.
- **You might think $M$-PSK's BER is $Q$ of something involving $M$ linearly.** The distance goes as $\sin(\pi/M)$, which halves each time $M$ doubles, so the penalty approaches 6 dB per extra bit. Bigger $M$ gets expensive fast.
- **You might think Gray coding improves the symbol error rate.** It does not touch $P_s$ at all — it changes how symbol errors translate into bit errors, dividing $P_b$ by $\log_2M$. Free, but only for bits.
- **You might think the constellation is the whole design.** The *trajectory* between points matters for any nonlinear amplifier: QPSK's paths through the origin produce envelope nulls that regrow spectral sidelobes. OQPSK and $\pi/4$-QPSK have identical BER and much better spectra out of a saturated amplifier.
- **You might compare 16-PSK with 16-QAM and expect them to be similar.** 16-QAM needs about 4 dB less than 16-PSK at the same rate and error rate, because filling a square packs points more efficiently than crowding a circle. See [3.5](03-05-qam-and-union-bound.md).

## One-liner

> QPSK is two BPSKs stacked in quadrature — twice the rate for nothing, once — and every constellation beyond it pays roughly 6 dB per extra bit for crowding the same circle.

## Problems

**P1 (🟢)** A QPSK link runs at $E_b/N_0 = 11$ dB with $\alpha = 0.25$ and a symbol rate of 2 Msymbols/s. (a) Find the bit rate and bandwidth. (b) Find $P_b$ and $P_s$. (c) What bandwidth would BPSK need for the same bit rate? (d) What would BPSK's $P_b$ be at the same $E_b/N_0$?

**P2 (🟡)** A bandwidth-limited channel offers 200 kHz with $\alpha=0.2$, and the received $E_b/N_0$ is 15 dB. (a) Find the maximum bit rate for QPSK and its $P_b$. (b) Repeat for 8-PSK. (c) Repeat for 16-PSK. (d) Which scheme maximizes the bit rate subject to $P_b\le10^{-5}$, and what is that rate?

**P3 (🔴)** (a) Derive the exact QPSK symbol error probability $P_s = 2Q(x)-Q^2(x)$ with $x=\sqrt{2E_b/N_0}$, by treating the two axes as independent. (b) Show that with Gray coding $P_b = Q(x)$ exactly, not merely approximately. (c) Show that without Gray coding — say with the "natural" labels 00, 01, 10, 11 assigned in order around the square — $P_b$ is strictly larger, and compute the ratio at $E_b/N_0 = 10$ dB. (d) Comment on whether Gray coding's benefit grows or shrinks with $M$.

<details>
<summary>Solutions</summary>

**P1** (a) $R_b = 2R_s = 4$ Mbps. $B_T = R_s(1+\alpha) = 2\times10^6(1.25) = 2.5$ MHz. Spectral efficiency $= 4/2.5 = 1.6$ bits/s/Hz.

(b) $11\ \text{dB} = 12.59$:

$$P_b = Q(\sqrt{2\times12.59}) = Q(5.02) = 2.6\times10^{-7}.$$

$$P_s = 2P_b - P_b^2 \approx 5.2\times10^{-7}.$$

(c) BPSK at 4 Mbps needs $R_s = 4$ Msymbols/s, so $B_T = 4\times10^6(1.25) = 5$ MHz — **twice** QPSK's.

(d) Identical: $P_b = Q(5.02) = 2.6\times10^{-7}$. Same $E_b/N_0$, same BER — the whole point.

**P2** With $\alpha=0.2$, $R_s = B/(1+\alpha) = 200/1.2 = 166.7$ ksymbols/s. $E_b/N_0 = 15$ dB $=31.6$.

(a) **QPSK:** $R_b = 2(166.7) = 333.3$ kbps.

$$P_b = Q(\sqrt{2\times31.6}) = Q(7.95) \approx 9\times10^{-16}.$$

(b) **8-PSK:** $R_b = 3(166.7) = 500$ kbps. $E_s = 3E_b = 94.9$:

$$P_s = 2Q\!\left(\sqrt{2\times94.9}\,\sin\tfrac{\pi}{8}\right) = 2Q(13.77\times0.3827) = 2Q(5.27) = 2(6.8\times10^{-8}) = 1.4\times10^{-7}.$$

$$P_b \approx P_s/3 = 4.5\times10^{-8}.$$

(c) **16-PSK:** $R_b = 4(166.7) = 666.7$ kbps. $E_s = 4E_b = 126.5$, $\sin(\pi/16)=0.1951$:

$$P_s = 2Q\!\left(\sqrt{253}\times0.1951\right) = 2Q(15.90\times0.1951) = 2Q(3.10) = 2(9.7\times10^{-4}) = 1.9\times10^{-3},$$

$$P_b\approx 1.9\times10^{-3}/4 = 4.9\times10^{-4}.$$

(d) 16-PSK misses the $10^{-5}$ target by nearly two orders of magnitude; 8-PSK beats it by more than two. So **8-PSK**, at **500 kbps** (2.5 bits/s/Hz).

Worth noting how sharp the boundary is: 16-PSK gives 33% more rate and fails by 50×, because $\sin(\pi/M)$ halved. And 16-QAM at the same rate would need about 4 dB less than 16-PSK — it would comfortably meet the target at 666.7 kbps, which is exactly the argument of [3.5](03-05-qam-and-union-bound.md).

**P3** (a) QPSK's I and Q coordinates are $\pm\sqrt{E_b}$ each, with independent $\mathcal{N}(0,N_0/2)$ noise. Each axis independently errs with probability

$$p = Q\!\left(\frac{\sqrt{E_b}}{\sqrt{N_0/2}}\right) = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right) = Q(x).$$

A symbol is correct only if both axes are correct, so $P_c = (1-p)^2$ and

$$P_s = 1-(1-p)^2 = 2p-p^2 = 2Q(x)-Q^2(x). \ \blacksquare$$

(b) With Gray labelling, the I bit is decided *entirely* by the sign of the I coordinate and the Q bit by the sign of the Q coordinate — the labels are literally (sign of I, sign of Q). So each bit errs exactly when its own axis errs:

$$P_b = p = Q(x)$$

**exactly**, with no approximation. (The usual $P_b\approx P_s/\log_2M$ is an approximation for general constellations; for Gray-coded QPSK it is exact because the two bits are carried on independent, non-interacting axes.)

(c) Take the natural labelling assigned in order around the square: $00$ at $(+,+)$, $01$ at $(-,+)$, $10$ at $(-,-)$, $11$ at $(+,-)$. Check the neighbours of $00$ at $(+,+)$: its adjacent points are $(-,+) = 01$ (one bit different ✓) and $(+,-) = 11$ (**two** bits different ✗). The diagonal point $(-,-) = 10$ differs in one bit.

So this labelling makes one of the two *likely* transitions (an adjacent-point error) cost two bit errors, while the *unlikely* diagonal transition costs only one — precisely backwards.

Counting: let $p = Q(x)$ be the single-axis error probability. Per symbol, expected bit errors:

- Adjacent error via the I axis only: probability $p(1-p)$, and from $00$ that lands on $01$, costing **1** bit.
- Adjacent error via the Q axis only: probability $(1-p)p$, landing on $11$, costing **2** bits.
- Both axes: probability $p^2$, landing on $10$, costing **1** bit.

Expected bit errors per symbol $= 1\cdot p(1-p) + 2\cdot p(1-p) + 1\cdot p^2 = 3p(1-p)+p^2 = 3p-2p^2$. Dividing by 2 bits per symbol:

$$P_b^{\rm natural} = \frac{3p-2p^2}{2} \approx 1.5p \quad\text{for small } p .$$

Versus $P_b^{\rm Gray} = p$. At $E_b/N_0 = 10$ dB $=10$: $x = \sqrt{20} = 4.47$, $p = Q(4.47) = 3.91\times10^{-6}$.

$$P_b^{\rm Gray} = 3.91\times10^{-6}, \qquad P_b^{\rm natural} = \frac{3(3.91\times10^{-6})-2(1.53\times10^{-11})}{2} = 5.87\times10^{-6}.$$

**Ratio 1.50** — a 50% increase in bit errors for free, from nothing but a bad labelling choice. (In dB of required power it is small, about 0.15 dB, but it costs literally nothing to avoid.)

(d) Gray coding's benefit **grows with $M$**. Without it, a symbol error between two randomly related labels flips on average $\log_2M / 2$ bits, so $P_b \approx P_s/2$; with it, $P_b\approx P_s/\log_2M$. The ratio between them is therefore about $\log_2M/2$: 1 at $M=4$, 1.5 at $M=8$, 2 at $M=16$, 4 at $M=256$. For the large constellations used in cable and Wi-Fi ($M=256$ to $4096$) Gray coding is worth a factor of 4–6 in BER — which is why it is universal, and why "Gray-coded" is usually left unsaid because no one would do anything else.

</details>

## Flashback

**From Lesson 2.4 (ISI and the Nyquist criterion):** A system uses raised-cosine pulses with $\alpha = 0.4$ over a 500 kHz channel. (a) Find the maximum symbol rate. (b) Find the bit rate for QPSK and for 8-PSK. (c) State the spectral efficiency in each case.

<details>
<summary>Solution</summary>

(a) $R_s = \dfrac{2B}{1+\alpha} = \dfrac{2(500{,}000)}{1.4} = 714.3$ ksymbols/s.

Careful with the convention: for a *baseband* channel of bandwidth $B$, $R_s = 2B/(1+\alpha)$. For a **bandpass** channel of transmission bandwidth $B_T$ — which is what a PSK link occupies — the relation is $R_s = B_T/(1+\alpha) = 357.1$ ksymbols/s, since the bandpass block is twice as wide as the baseband spectrum it carries. Reading "500 kHz channel" as a bandpass allocation (the usual meaning for a modulated link), the answer is

$$R_s = \frac{500{,}000}{1.4} = 357.1\ \text{ksymbols/s}.$$

(b) QPSK: $R_b = 2(357.1) = 714.3$ kbps. 8-PSK: $R_b = 3(357.1) = 1.071$ Mbps.

(c) QPSK: $714.3/500 = 1.43$ bits/s/Hz $= 2/1.4$ ✓. 8-PSK: $1071/500 = 2.14$ bits/s/Hz $=3/1.4$ ✓.

The baseband-versus-bandpass factor of two is the same convention trap flagged in [1.1](01-01-signals-and-spectra-recalled.md), and it is worth stating which you mean every single time.

</details>

## Connections

- **Backward:** the I/Q decomposition is the complex envelope of [1.5](01-05-ssb-vsb-multiplexing.md); the per-axis BER is [3.3](03-03-binary-modulation-ber.md)'s BPSK result applied twice.
- **Forward:** [3.5](03-05-qam-and-union-bound.md) escapes the circle and fills the plane, doing much better than PSK for $M\ge16$; [3.6](03-06-power-vs-bandwidth-efficiency.md) plots every scheme in this lesson on one bandwidth-versus-power plane.
- **Sideways:** the "use the unused dimension for free, then pay for crowding" pattern is the same one that governs polarization multiplexing in optics and MIMO spatial streams in radio — each genuinely new dimension is nearly free, and each additional user of an existing one costs.
