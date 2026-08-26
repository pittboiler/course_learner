# Communication Systems · Lesson 2.4: ISI and the Nyquist criterion

> ⏱ ~15 min · Module 2: Sampling & Digital Transmission · Builds on: [2.3 Line codes and baseband pulses](02-03-line-codes-baseband-pulses.md), [2.1 The sampling theorem and aliasing](02-01-sampling-theorem-aliasing.md) · Unlocks: [2.5 Equalization, briefly](02-05-equalization-briefly.md), [3.1 Signal space and the matched filter](03-01-signal-space-matched-filter.md)

## Why this matters

Every previous lesson has treated noise as the enemy. This one introduces a second enemy that is often worse, and is entirely self-inflicted: **the symbols interfering with each other**.

A rectangular pulse is finite in time and therefore infinite in frequency. Push it through any real channel — which is finite in frequency — and it comes out smeared, spilling into the neighbouring symbol slots. Speed the bits up and the smear covers more slots. Eventually the receiver cannot tell which symbol it is looking at, no matter how much power you spend. This is the ceiling on rate through a band-limited channel, and [Nyquist's criterion](../reference.md#nyquist-criterion-for-zero-isi) is the beautiful answer to it: there is a family of pulse shapes that smear as much as they like *everywhere except at the sampling instants*, where they are exactly zero. Get the shape right, and unlimited smearing costs you nothing.

## The idea

Send a pulse. It arrives spread out. That is unavoidable — a strictly band-limited pulse must last forever in time.

The insight is that you do not care what the pulse is doing between decision instants. You only sample it once per symbol, at $t=0, T, 2T,\dots$. So the requirement is not "don't spread" — which is impossible — but **"be zero at every *other* sampling instant"**. A pulse with that property can ring on for a hundred symbol periods and still contribute exactly nothing to any decision but its own.

The $\operatorname{sinc}$ function does this perfectly: $\operatorname{sinc}(t/T)$ is 1 at $t=0$ and exactly 0 at every nonzero multiple of $T$. And its spectrum is a brick wall of width $1/(2T)$ — the narrowest possible for that symbol rate. That is Nyquist's ideal, and it gives the maximum rate a band-limited channel can carry: **2 symbols per second per hertz**.

Two problems make it unusable in practice, and they are the same problem seen twice. The brick-wall spectrum needs an unbuildable filter. And the sinc's tails decay only as $1/t$, so a small timing error at the receiver — sampling at $T+\epsilon$ instead of $T$ — picks up a contribution from *every* other symbol, and the resulting sum can diverge. Ideal Nyquist signalling is infinitely sensitive to clock error.

The **raised cosine** family fixes both by trading bandwidth for tail decay. Spend a fraction $\alpha$ more bandwidth than the minimum, and the spectrum gets a gentle roll-off you can actually build, while the tails fall as $1/t^3$ instead of $1/t$ — so timing errors stay bounded. $\alpha$ is a dial from "minimum bandwidth, impossible" at 0 to "double bandwidth, very forgiving" at 1, and real systems sit around 0.2–0.35.

## The formal version

**The problem.** With pulse shape $p(t)$ (the *overall* response: transmit filter, channel, and receive filter combined) and symbols $a_k$, the receiver samples at $t=mT$:

$$y(mT) = \underbrace{a_m\,p(0)}_{\text{wanted}} + \underbrace{\sum_{k\ne m}a_k\,p\big((m-k)T\big)}_{\text{intersymbol interference}} + \ \text{noise}.$$

*In words: every other symbol contributes whatever the pulse happens to be doing at that offset.*

**Nyquist's criterion for zero ISI (time domain).**

$$p(nT) = \begin{cases}1, & n=0,\\ 0, & n = \pm1,\pm2,\dots\end{cases}$$

*In words: the pulse is 1 at its own sampling instant and exactly zero at every other one.*

**Nyquist's criterion (frequency domain).** The time condition is equivalent to

$$\boxed{\;\sum_{k=-\infty}^{\infty}P\!\left(f + \frac{k}{T}\right) = T \quad\text{for all } f.\;}$$

*In words: slide copies of the spectrum $1/T$ apart and add them up; the sum must be perfectly flat.* This is the sampling theorem read backwards — sampling $p(t)$ at rate $1/T$ replicates $P(f)$ at spacing $1/T$, and sampling a signal that is 1 at $t=0$ and 0 elsewhere gives an impulse, whose transform is a constant. The two theorems of Module 2 are one theorem.

**The ideal Nyquist channel.** The narrowest $P(f)$ satisfying the criterion is the brick wall

$$P(f) = \begin{cases}T, & |f|\le \dfrac{1}{2T},\\ 0,&\text{else}\end{cases} \qquad\Longleftrightarrow\qquad p(t) = \operatorname{sinc}\!\left(\frac{t}{T}\right).$$

Its bandwidth is the **Nyquist bandwidth** $B = 1/(2T) = R_s/2$, giving the maximum signalling rate

$$R_s = 2B \ \text{symbols/s} \quad\Longrightarrow\quad R_b = 2B\log_2M \ \text{bits/s}.$$

*In words: an ideal channel of bandwidth $B$ carries at most $2B$ symbols per second, whatever you do.* This is the **Nyquist rate for signalling** — the exact dual of the sampling theorem's $f_s \ge 2W$, and the reason both are called Nyquist rates.

**Raised cosine.** With **roll-off factor** $\alpha\in[0,1]$:

$$P(f) = \begin{cases} T, & |f|\le\dfrac{1-\alpha}{2T},\\[6pt] \dfrac{T}{2}\left[1+\cos\dfrac{\pi T}{\alpha}\left(|f|-\dfrac{1-\alpha}{2T}\right)\right], & \dfrac{1-\alpha}{2T}<|f|\le\dfrac{1+\alpha}{2T},\\[6pt] 0, & \text{else,}\end{cases}$$

$$p(t) = \operatorname{sinc}\!\left(\frac{t}{T}\right)\cdot\frac{\cos(\pi\alpha t/T)}{1-4\alpha^2t^2/T^2}.$$

*In words: take the ideal sinc and multiply it by a decaying factor that kills the tails, paying for it with a gentle spectral roll-off.* The roll-off is **odd-symmetric about $f = 1/2T$** — whatever the response loses just below the Nyquist frequency, it gains just above — which is exactly the complementary-symmetry condition you met for VSB in [1.5](01-05-ssb-vsb-multiplexing.md).

**Bandwidth and efficiency.**

$$B = \frac{1+\alpha}{2T} = \frac{R_s(1+\alpha)}{2}, \qquad R_s = \frac{2B}{1+\alpha}, \qquad \frac{R_b}{B} = \frac{2\log_2 M}{1+\alpha}\ \text{bits/s/Hz}.$$

At $\alpha=0$: minimum bandwidth, unbuildable. At $\alpha=1$: twice the minimum, tails decaying fast, no ISI even with sloppy timing. The **excess bandwidth** is $\alpha\times 100\%$.

**Root raised cosine.** In practice the raised cosine is split between transmitter and receiver, each implementing $\sqrt{P(f)}$, so that their cascade is the raised cosine *and* the receive filter is matched to the transmit pulse (see [3.1](03-01-signal-space-matched-filter.md)). Neither half is Nyquist on its own — only the product is. This is what every modem actually builds.

**The eye diagram.** Overlay the received waveform on itself, two symbol periods at a time, triggered on the symbol clock. The result is the single most useful diagnostic in digital communications:

| Feature of the eye | What it measures |
|---|---|
| **Vertical opening** at the sampling instant | noise margin — how much noise before an error |
| **Horizontal opening** (width of the eye) | timing margin — how much clock jitter is tolerable |
| **Slope** of the crossings | sensitivity to timing error |
| **Thickness** of the traces | ISI plus noise |
| **Jitter** at the zero crossings | clock recovery quality |

*In words: a wide-open eye means comfortable decisions; a closed eye means the symbols have run into each other.* You do not compute an eye diagram — you photograph one on an oscilloscope, and it tells you at a glance what is wrong.

## Picture

![Two panels. Left: three raised-cosine pulses in time for alpha = 0, 0.5, 1, all passing through zero at every multiple of T, with the alpha = 0 sinc's slowly decaying tails contrasted against alpha = 1's fast decay. Right: the corresponding spectra, a brick wall at alpha = 0 and progressively gentler roll-offs, all crossing at half amplitude at the Nyquist frequency with odd symmetry marked.](assets/02-04-fig1.svg)

Left: **all three pulses hit zero at every multiple of $T$** — that is the criterion, and it is satisfied by every member of the family. What differs is the tails: $\alpha=0$ decays as $1/t$ and rings for a very long time; $\alpha=1$ is essentially gone after two symbols. Right: the price, in bandwidth. Notice all three spectra pass through exactly half amplitude at $f = 1/2T$, and the roll-off above is the mirror image of the loss below — that odd symmetry about the Nyquist frequency is what makes the shifted copies add to a constant.

## Worked examples

**Example 1 (sizing a link).** A channel has 3 kHz of usable bandwidth. What bit rate can you push through it?

*Ideal Nyquist, binary:* $R_s = 2B = 6000$ symbols/s, so $R_b = 6$ kbps. Unbuildable, and infinitely timing-sensitive, but it is the ceiling.

*Raised cosine, $\alpha = 0.25$, binary:*

$$R_s = \frac{2B}{1+\alpha} = \frac{6000}{1.25} = 4800\ \text{symbols/s} \;\Rightarrow\; R_b = 4.8\ \text{kbps}.$$

*Raised cosine, $\alpha = 0.25$, 16 levels ($M=16$, 4 bits/symbol):*

$$R_b = 4800\times 4 = 19.2\ \text{kbps}, \qquad \frac{R_b}{B} = 6.4\ \text{bits/s/Hz}.$$

Those are recognisable numbers — 4800, 9600, 19200 baud modems were exactly this calculation, run over the 3 kHz telephone channel with successively larger constellations. The progression stopped at 33.6 kbps not because Nyquist ran out but because *noise* did: each doubling of $M$ needs about 6 dB more SNR, and the telephone channel's roughly 35 dB ran out. **Nyquist sets the bandwidth ceiling; Shannon in [4.2](04-02-channel-capacity-shannon-limit.md) sets the joint bandwidth-and-power ceiling**, and the two together explain the entire modem history.

**Example 2 (why $\alpha=0$ fails: the timing-error catastrophe).** Suppose the receiver samples at $t = \epsilon$ instead of $t=0$. The ISI contributed by symbol $k$ is $a_kp(-kT+\epsilon)$.

*Ideal sinc:* $p(t) = \operatorname{sinc}(t/T)$, so near $t=-kT$,

$$p(-kT+\epsilon) = \frac{\sin\big(\pi(-k+\epsilon/T)\big)}{\pi(-k+\epsilon/T)} \approx \frac{(-1)^k\sin(\pi\epsilon/T)}{-\pi k} \sim \frac{C}{k}.$$

The worst-case ISI is the sum of magnitudes over all $k$:

$$\text{ISI}_{\max}\ \propto\ \sum_{k\ne0}\frac{1}{|k|} = \infty .$$

**The harmonic series diverges.** Any nonzero timing error admits, in the worst case, unbounded interference. That is not a large sensitivity; it is a qualitative failure.

*Raised cosine, $\alpha>0$:* the tails go as $1/t^3$, so

$$\sum_{k\ne0}\frac{1}{|k|^3} = 2\zeta(3) \approx 2.404,$$

which converges comfortably. A small timing error produces a small, bounded eye closure.

This is the real reason nobody uses $\alpha=0$, and it is a better reason than "the filter is unbuildable" — you could approximate the filter, but you cannot approximate your way out of a divergent series. The excess bandwidth is buying **robustness**, not just manufacturability.

## Watch out

- **You might think zero ISI means the pulses don't overlap.** They overlap enormously — a raised-cosine pulse spans many symbol periods. The condition is only that each pulse is *zero at the other sampling instants*. Between the samples the waveform is a mess, and that is fine, because nothing looks at it.
- **You might think the Nyquist criterion applies to the transmitted pulse.** It applies to the **end-to-end** response: transmit filter × channel × receive filter. A perfect raised-cosine transmit pulse through a distorting channel is no longer Nyquist at the receiver — which is exactly what [2.5](02-05-equalization-briefly.md) exists to fix.
- **You might think a bigger $\alpha$ is always safer.** It costs bandwidth linearly: $\alpha=1$ halves your spectral efficiency. And it does not improve noise performance at all — the matched filter's SNR depends on energy, not shape. $\alpha$ buys timing robustness and filter realizability, nothing else.
- **You might think the eye's vertical opening is the whole story.** An eye can be tall and *narrow*, meaning good noise margin but no tolerance for clock jitter. Real systems fail on timing at least as often as on noise, so read both axes.
- **You might confuse the two Nyquist rates.** Sampling: $f_s \ge 2W$, samples per second at least twice the signal bandwidth. Signalling: $R_s\le 2B$, symbols per second at most twice the channel bandwidth. One is a floor, the other a ceiling; they are duals, and both are Nyquist's.

## One-liner

> You cannot stop pulses from spreading, so shape them to be exactly zero at every other sampling instant — and buy the excess bandwidth $\alpha$ that makes the tails decay fast enough to survive a clock error.

## Problems

**P1 (🟢)** A channel has a bandwidth of 8 kHz and uses raised-cosine pulses with $\alpha = 0.5$. (a) Find the maximum symbol rate. (b) Find the bit rate for binary and for 8-ary signalling. (c) Find the spectral efficiency in bits/s/Hz for the 8-ary case. (d) What bandwidth would the same 8-ary bit rate need at $\alpha = 0.2$?

**P2 (🟡)** A system must deliver 64 kbps. (a) Give the minimum possible bandwidth using binary signalling, and say why it is unachievable. (b) With $\alpha = 0.35$ and binary signalling, what bandwidth is required? (c) With $\alpha=0.35$ and QPSK (2 bits/symbol), what bandwidth? (d) Verify that the spectral efficiency in (c) is $2\log_2M/(1+\alpha)$ and comment on which of the two knobs — $\alpha$ or $M$ — is the more powerful lever.

**P3 (🔴)** Show that the raised-cosine spectrum satisfies the Nyquist criterion $\sum_kP(f+k/T)=T$. (a) Argue it suffices to check $f\in[0, 1/2T]$ and that at most two terms are nonzero for $\alpha\le1$. (b) Do the check explicitly for $f$ in the roll-off region. (c) State the geometric property of the roll-off this proof relies on, and name where you met it before.

<details>
<summary>Solutions</summary>

**P1** (a) $R_s = \dfrac{2B}{1+\alpha} = \dfrac{16{,}000}{1.5} = 10{,}667$ symbols/s.

(b) Binary: $R_b = 10{,}667$ bps. 8-ary ($\log_28 = 3$ bits/symbol): $R_b = 32{,}000$ bps.

(c) $\dfrac{R_b}{B} = \dfrac{32{,}000}{8000} = 4$ bits/s/Hz. (Check with the formula: $2(3)/1.5 = 4$ ✓.)

(d) At $\alpha=0.2$, $R_s = 32{,}000/3 = 10{,}667$ symbols/s still needed, so

$$B = \frac{R_s(1+\alpha)}{2} = \frac{10{,}667(1.2)}{2} = 6400\ \text{Hz}.$$

Dropping $\alpha$ from 0.5 to 0.2 saved 20% of the bandwidth — and bought a correspondingly less forgiving timing budget.

**P2** (a) Minimum bandwidth is the Nyquist bandwidth $R_s/2 = 32$ kHz (at $\alpha=0$). Unachievable because a brick-wall filter is not realizable, and — the deeper reason — the resulting $\operatorname{sinc}$ tails decay as $1/t$, so any timing error admits worst-case ISI that diverges as a harmonic series.

(b) $B = \dfrac{R_s(1+\alpha)}{2} = \dfrac{64{,}000(1.35)}{2} = 43.2$ kHz.

(c) QPSK carries 2 bits/symbol, so $R_s = 32{,}000$ symbols/s and

$$B = \frac{32{,}000(1.35)}{2} = 21.6\ \text{kHz}.$$

(d) $\dfrac{R_b}{B} = \dfrac{64{,}000}{21{,}600} = 2.96$ bits/s/Hz, and $\dfrac{2\log_24}{1.35} = \dfrac{4}{1.35} = 2.96$ ✓.

Which lever is stronger: $\alpha$ ranges over $[0,1]$, so it can change bandwidth by at most a factor of 2 — and the useful part of that range is narrower still, since $\alpha<0.2$ is impractical. $M$ has no ceiling: each doubling of $M$ adds one bit per symbol, and going from $M=2$ to $M=64$ cuts bandwidth sixfold. **$M$ is by far the more powerful lever** — which is why every modern system is multilevel. The catch is that $\alpha$ costs only bandwidth while $M$ costs *power*: each extra bit per symbol needs roughly 6 dB more SNR, and that is the constraint Module 3 makes precise.

**P3** (a) The criterion asks for $\sum_kP(f+k/T)=T$ for all $f$. The sum is periodic in $f$ with period $1/T$ and $P$ is even, so checking $f\in[0,1/2T]$ suffices. The raised cosine is supported on $|f|\le(1+\alpha)/2T$, and with $\alpha\le1$ that is at most $1/T$ wide on each side — so for $f$ in the fundamental interval only the $k=0$ and $k=-1$ terms can be nonzero.

(b) Let $f$ lie in the upper roll-off region, $\dfrac{1-\alpha}{2T}<f\le\dfrac{1+\alpha}{2T}$. Write $f = \dfrac{1}{2T}+\delta$ with $|\delta|\le\dfrac{\alpha}{2T}$.

*The $k=0$ term.* Substituting into the roll-off expression, with $|f| - \dfrac{1-\alpha}{2T} = \delta + \dfrac{\alpha}{2T}$:

$$P(f) = \frac{T}{2}\left[1+\cos\frac{\pi T}{\alpha}\left(\delta+\frac{\alpha}{2T}\right)\right] = \frac{T}{2}\left[1+\cos\left(\frac{\pi T\delta}{\alpha}+\frac{\pi}{2}\right)\right] = \frac{T}{2}\left[1-\sin\frac{\pi T\delta}{\alpha}\right].$$

*The $k=-1$ term.* $f - 1/T = -\dfrac{1}{2T}+\delta$, whose magnitude is $\dfrac{1}{2T}-\delta$, also inside the roll-off region. The same substitution with $\delta\to-\delta$ gives

$$P(f-1/T) = \frac{T}{2}\left[1+\sin\frac{\pi T\delta}{\alpha}\right].$$

*Sum:*

$$P(f)+P(f-1/T) = \frac{T}{2}\left[1-\sin\frac{\pi T\delta}{\alpha}\right]+\frac{T}{2}\left[1+\sin\frac{\pi T\delta}{\alpha}\right] = T \ \checkmark.$$

(For $f$ below the roll-off, $P(f)=T$ and the other term is 0, also summing to $T$ ✓.)

(c) The proof relies on the roll-off being **odd-symmetric about $f = 1/2T$**: the amount lost just above the Nyquist frequency exactly equals the amount gained just below its mirror point, so the two shifted copies always sum to the flat value $T$. You met the identical condition as VSB's complementary-symmetry requirement in [1.5](01-05-ssb-vsb-multiplexing.md), $H(f_c+f)+H(f_c-f) = \text{const}$. It is the same geometric idea — a skew-symmetric transition that sums to flat — solving two apparently unrelated problems, and it is worth recognising on sight.

</details>

## Flashback

**From Lesson 2.2 (Quantization and PCM):** A 3.4 kHz message is sampled at 8 kHz and quantized to 8 bits. (a) Give the bit rate. (b) Give the minimum bandwidth for binary transmission with raised-cosine pulses at $\alpha=0.3$. (c) By what factor would 4-level signalling reduce that bandwidth, and what is the approximate cost in required SNR?

<details>
<summary>Solution</summary>

(a) $R_b = 8\times 8000 = 64$ kbps.

(b) Binary, so $R_s = R_b = 64$ ksymbols/s:

$$B = \frac{R_s(1+\alpha)}{2} = \frac{64{,}000(1.3)}{2} = 41.6\ \text{kHz}.$$

(c) 4-level carries 2 bits/symbol, halving the symbol rate to 32 ksymbols/s and hence halving the bandwidth to 20.8 kHz — a **factor of 2**.

The cost: at equal peak amplitude, four levels are spaced $2A/3$ apart versus $2A$ for two levels, a distance ratio of 3, so roughly $20\log_{10}3 = 9.5$ dB more power is needed for the same error rate — or about 6 dB if you compare at equal *average* power with the standard $M$-ary result. Either way: **halve the bandwidth, pay roughly 6 dB.** That exchange rate is what [3.6](03-06-power-vs-bandwidth-efficiency.md) plots as a curve.

</details>

## Connections

- **Backward:** the criterion $\sum_kP(f+k/T)=T$ is [2.1](02-01-sampling-theorem-aliasing.md)'s spectral replication read in the other direction; the odd-symmetric roll-off is [1.5](01-05-ssb-vsb-multiplexing.md)'s VSB condition reused.
- **Forward:** [2.5](02-05-equalization-briefly.md) restores the Nyquist property when the channel destroys it; [3.1](03-01-signal-space-matched-filter.md) splits the raised cosine into root-raised-cosine halves so the receive filter is simultaneously Nyquist-completing and matched.
- **Sideways:** the "zero at all other sample points" property is the interpolation condition satisfied by Lagrange basis polynomials in [`numerical-analysis`](../../numerical-analysis/syllabus.md) — the same idea, orthogonality at a sample grid, appearing wherever a signal is rebuilt from point values.
