# Communication Systems · Lesson 2.1: The sampling theorem and aliasing

> ⏱ ~15 min · Module 2: Sampling & Digital Transmission · Builds on: [1.1 Signals and spectra, recalled](01-01-signals-and-spectra-recalled.md), [`signals-systems` 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md) · Unlocks: [2.2 Quantization and PCM](02-02-quantization-and-pcm.md), [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

Module 1 kept the message continuous. From here on it is a stream of numbers, and this lesson is the gate. The sampling theorem is the licence: it says the conversion is *lossless*, not a compromise, provided you sample fast enough.

You have met the theorem twice already — as mathematics in [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md) and as spectral replication in [`signals-systems` 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md). This lesson does not re-derive it. It takes the three things a *communications* engineer needs on top: what real (non-ideal) samplers do to the spectrum, how sampling opens up time-division multiplexing, and how to budget the guard band that separates theory from a manufacturable filter.

## The idea

The core picture, in one line: **sampling photocopies the spectrum**, pasting a scaled copy of $M(f)$ at every multiple of the sampling rate $f_s$. If the copies don't overlap, a low-pass filter cuts out the original and you have the message back exactly. If they do overlap, high frequencies fold down and masquerade as low ones — [aliasing](../reference.md#aliasing) — and the damage is permanent, because addition cannot be undone.

What Module 1's machinery adds is a *systems* reading of that picture. Sampling leaves the signal untouched for a fraction of the time and idle for the rest, and that idle time is not waste — it is a resource. Between the samples of one conversation you can interleave the samples of a second, a third, twenty-three more. That is **time-division multiplexing**, and it is the time-domain sibling of the frequency-division multiplexing you built in [1.5](01-05-ssb-vsb-multiplexing.md). One channel, many users, separated by *when* rather than by *where in the spectrum*.

The second addition is honesty about hardware. Ideal impulse sampling is a fiction; real circuits hold each sample for a finite width $\tau$ so a converter has time to read it. Holding a value flat for $\tau$ seconds is a convolution with a rectangle, which multiplies the spectrum by a sinc — a gentle droop across the band called the **aperture effect**. It is small, correctable, and exactly the kind of second-order term that separates a working design from a homework answer.

## The formal version

**Sampling theorem.** If $m(t)$ is band-limited to $W$ hertz, it is completely determined by samples taken at any rate

$$f_s > 2W \quad\text{(the \textbf{Nyquist rate} is } 2W\text{)},$$

and is recovered exactly by low-pass filtering the sampled signal with any cutoff $f_c$ satisfying $W < f_c < f_s - W$. The reconstruction formula is

$$m(t) = \sum_{n=-\infty}^{\infty} m(nT_s)\,\operatorname{sinc}\!\big(f_s t - n\big), \qquad T_s = 1/f_s .$$

*In words: rebuild the curve by centring a sinc on each sample, scaled by that sample's height, and adding them up.* Each sinc is 1 at its own sample instant and 0 at every other — which is why the sum passes through every sample exactly, and it is the same "zero at all the other decision instants" property that will define the Nyquist criterion in [2.4](02-04-isi-nyquist-criterion.md). The two theorems are the same idea seen from opposite ends.

**The spectral consequence.** For ideal impulse sampling,

$$M_\delta(f) = f_s\sum_{k=-\infty}^{\infty} M(f-kf_s).$$

*In words: the sampled spectrum is the original, copied at every multiple of $f_s$.*

**Aliasing.** If $f_s < 2W$, copies overlap and a component at $f > f_s/2$ reappears at the **apparent frequency**

$$f_{\rm apparent} = |f - kf_s| \quad\text{for the integer } k \text{ that puts the result in } [0, f_s/2].$$

*In words: fold the frequency axis accordion-style at every multiple of $f_s/2$; wherever the true frequency lands is what you will hear.* The remedy is an **anti-aliasing filter** before the sampler — always analog, always before, because after the sampler the information is already destroyed.

**Guard band.** In practice you never sample at exactly $2W$. Given a passband edge $f_{\rm pass}$ and a filter that reaches full stopband at $f_{\rm stop}$,

$$f_s \ge f_{\rm pass} + f_{\rm stop} .$$

*In words: the sampling rate must exceed the message bandwidth plus the filter's transition width.* The excess $f_s - 2W$ is the guard band — the room the filter skirts live in. Sharper filter, slower converter; the two are directly exchangeable.

**Three kinds of sampling, and what each does to the spectrum.**

| Type | Sampled signal | Spectrum | Effect |
|---|---|---|---|
| **Ideal / impulse** | $\sum m(nT_s)\delta(t-nT_s)$ | $f_s\sum_k M(f-kf_s)$ | copies, undistorted |
| **Natural** (gate on for $\tau$, signal follows) | $m(t)\cdot p_\tau(t)$ | $\sum_k c_k M(f-kf_s)$, $c_k \propto \operatorname{sinc}(k f_s\tau)$ | copies scaled by a constant each; **baseband copy undistorted** |
| **Flat-top** (sample and hold) | $\sum m(nT_s)\,h(t-nT_s)$ | $H(f)\sum_k M(f-kf_s)$, $H(f)=\tau\operatorname{sinc}(f\tau)e^{-j\pi f\tau}$ | **every** copy shaped by a sinc — the aperture effect |

The distinction matters. Natural sampling multiplies the $k$-th copy by a *constant* $c_k$, so the baseband copy comes out flat and undistorted. Flat-top sampling convolves with a rectangle in time, so it multiplies by $\operatorname{sinc}(f\tau)$ as a *function of $f$* — a real amplitude droop across the message band, worst at the band edge.

**Aperture effect, quantified.** With hold width $\tau$ and message edge $W$, the worst-case droop is

$$\frac{|H(W)|}{|H(0)|} = \operatorname{sinc}(W\tau) = \frac{\sin(\pi W\tau)}{\pi W\tau}.$$

For $\tau = T_s$ (hold for the whole period, the usual DAC behaviour) and $f_s = 2W$, this is $\operatorname{sinc}(0.5) = 0.637$ — a 3.9 dB droop at the band edge. It is corrected by a $1/\operatorname{sinc}$ **equalizer** after the reconstruction filter, a standard block in every audio DAC.

**Time-division multiplexing.** With $N$ users each band-limited to $W$ and sampled at $f_s$, the multiplexed stream carries $Nf_s$ samples per second. By the sampling theorem read backwards, sending $R$ samples per second through an ideal channel needs at least

$$B_T \ge \frac{Nf_s}{2}\ \text{hertz} \ \ge NW .$$

*In words: TDM needs at least as much bandwidth as FDM does — $N$ times the message bandwidth — as it must.* The resource is conserved; only the axis it is sliced along changes. What differs is engineering: TDM needs no sharp analog filters (just accurate timing), while FDM needs no synchronization (just filters). That trade is why digital systems overwhelmingly chose TDM.

## Picture

![A three-panel figure. Panel A: a message spectrum copied at multiples of f_s with a clear gap, and the reconstruction filter drawn as a dashed box, labelled guard band. Panel B: undersampled, copies overlapping in a shaded region labelled aliasing, permanent. Panel C: the flat-top sinc envelope drawn over the copies, showing the baseband copy drooping toward its band edge.](assets/02-01-fig1.svg)

Panel A is the theorem and its guard band. Panel B is the failure — note that the overlap region is a *sum* of two spectra, and no filter can separate a sum. Panel C is the hardware correction: the sinc envelope of a finite-width hold droops across every copy, including the baseband one you intend to keep.

## Worked examples

**Example 1 (the T1 carrier — TDM, end to end).** The North American digital telephone hierarchy multiplexes 24 voice channels. Each is band-limited to 3.4 kHz and sampled at 8 kHz. Frames carry one 8-bit sample per channel plus one framing bit.

*Guard band per channel:* $f_s - 2W = 8 - 6.8 = 1.2$ kHz. That 1.2 kHz is all the room the anti-aliasing filter gets to fall from passband to stopband — which is why telephone audio sounds thin, and why the choice of 3.4 kHz (rather than a rounder 4 kHz) exists at all.

*Frame:* $24\times 8 + 1 = 193$ bits, sent once per sampling period $T_s = 125\ \mu$s.

*Bit rate:*

$$R_b = 193\ \text{bits} \times 8000\ \text{frames/s} = 1.544\ \text{Mbps},$$

which is the T1 rate — a number derived here from nothing but the sampling theorem and a bit count.

*Time slot per channel:* $125\ \mu\text{s}/24 = 5.2\ \mu$s, of which each bit occupies $1/1.544\ \text{MHz} = 648$ ns.

*Minimum bandwidth by the Nyquist channel bound:* $R_b/2 = 772$ kHz. Compare FDM of the same 24 channels via SSB at 4 kHz apiece: $96$ kHz. TDM here needs eight times the bandwidth — because it also carries 8 bits of quantization per sample rather than an analog value. That is the cost of going digital, and [2.2](02-02-quantization-and-pcm.md) explains what it buys.

**Example 2 (aliasing, and the frequency you actually hear).** A signal contains tones at 1, 3, 7 and 11 kHz and is sampled at $f_s = 8$ kHz with **no** anti-aliasing filter. What comes out of a reconstruction filter with cutoff 4 kHz?

Fold each frequency into $[0, f_s/2] = [0,4]$ kHz:

| True | Nearest multiple of 8 | Apparent |
|---|---|---|
| 1 kHz | $k=0$ | $|1-0| = 1$ kHz ✓ |
| 3 kHz | $k=0$ | $3$ kHz ✓ |
| 7 kHz | $k=1$ | $|7-8| = 1$ kHz ✗ |
| 11 kHz | $k=1$ | $|11-8| = 3$ kHz ✗ |

The output holds tones at 1 and 3 kHz only — but each is now the *sum* of a legitimate component and an impostor. The 7 kHz tone has become indistinguishable from the 1 kHz one; nothing downstream can tell them apart, and no faster resampling later can undo it.

Now add the missing filter: a low-pass at 3.6 kHz before the sampler removes 7 and 11 kHz, and the output is a clean 1 and 3 kHz. **The anti-aliasing filter is not optional and it cannot be moved after the sampler** — which is the practical content of the whole lesson.

*A sharper version of the same trap:* an undersampled tone can appear to move the *wrong way*. Sweep a tone from 7 kHz up to 8 kHz at $f_s=8$: the apparent frequency runs from 1 kHz *down* to 0. This is the wagon-wheel effect in film, and in a spectrum analyzer it is the standard clue that you are aliasing.

## Watch out

- **You might think you can fix aliasing by sampling faster afterwards.** You cannot. The corruption happens *at* the sampler, when two frequencies are added into the same numbers. Band-limiting must be analog and must come first.
- **You might think sampling at exactly $2W$ is fine.** The theorem requires a strict inequality, and even then the guard band would be zero, demanding a brick-wall filter. Real designs sample 10–25% above the Nyquist rate and spend the difference on filter transition width.
- **You might confuse the Nyquist rate with the Nyquist frequency.** Nyquist *rate* $=2W$ is a property of the signal and is a sampling speed. Nyquist *frequency* $=f_s/2$ is a property of the sampler and is a signal frequency. "Sample above the Nyquist frequency" is a category error.
- **You might think natural and flat-top sampling distort equally.** Natural sampling leaves the baseband copy undistorted (each copy is scaled by a constant); flat-top multiplies it by $\operatorname{sinc}(f\tau)$, a genuine droop. Only flat-top needs aperture equalization.

## One-liner

> Sampling copies the spectrum at every multiple of $f_s$; keep the copies apart and nothing is lost, let them touch and the folding is permanent — and the silence between samples is a channel you can sell to someone else.

## Problems

**P1 (🟢)** An audio signal is band-limited to 15 kHz and sampled at 44.1 kHz. (a) What is the Nyquist rate? (b) What is the guard band? (c) An interfering tone at 30 kHz reaches the sampler because the anti-aliasing filter is faulty. At what frequency does it appear in the reconstructed audio? (d) Is it audible?

**P2 (🟡)** Thirty channels, each band-limited to 3.4 kHz, are time-division multiplexed. Each is sampled at 8 kHz and quantized to 8 bits, and the frame carries 2 extra bytes for signalling and framing. (a) Find the frame length in bits and the aggregate bit rate. (b) Find the duration of one bit. (c) Find the minimum channel bandwidth by the Nyquist bound. (d) Compare with the bandwidth needed to FDM the same 30 channels using SSB with 600 Hz guard bands, and say in one sentence what the extra bandwidth bought.

**P3 (🔴)** A sample-and-hold circuit holds each sample for the full sampling period, $\tau = T_s$, and $f_s = 2.5W$. (a) Write the amplitude response of the hold and find the droop at $f=W$, in dB. (b) A designer proposes fixing it by simply raising $f_s$. Does that help? Quantify by recomputing the droop at $f_s = 4W$. (c) The alternative is a $1/\operatorname{sinc}$ equalizer. Give the gain it must supply at $f = W$ for the original $f_s = 2.5W$ case, and state one practical reason such an equalizer is preferred over just raising $f_s$.

<details>
<summary>Solutions</summary>

**P1** (a) Nyquist rate $= 2W = 30$ kHz.

(b) Guard band $= f_s - 2W = 44.1 - 30 = 14.1$ kHz. (Generous — because 44.1 kHz was chosen for a 20 kHz band, not a 15 kHz one.)

(c) Fold 30 kHz into $[0, f_s/2] = [0, 22.05]$ kHz. With $k=1$: $|30 - 44.1| = 14.1$ kHz. That lies below 22.05, so the apparent frequency is **14.1 kHz**.

(d) Yes — 14.1 kHz is inside the 15 kHz audio band, so it passes the reconstruction filter and is audible to anyone whose hearing extends that high. This is the characteristic aliasing artifact: an inaudible ultrasonic interferer (30 kHz) reappears as an audible tone with no harmonic relationship to the music. It is also why the fix must be an analog filter ahead of the ADC — a digital filter after the ADC sees 14.1 kHz as ordinary signal.

**P2** (a) Per frame: $30\times 8 = 240$ bits of payload, plus $2\times 8 = 16$ bits of overhead:

$$L = 256\ \text{bits/frame}, \qquad R_b = 256 \times 8000 = 2.048\ \text{Mbps}.$$

(This is the European E1 carrier, exactly.)

(b) $T_b = 1/R_b = 1/(2.048\times10^6) = 488$ ns.

(c) Nyquist bound for binary signalling: $B_{\min} = R_b/2 = 1.024$ MHz.

(d) FDM: $3.4 + 0.6 = 4.0$ kHz per channel, so $30\times 4.0 = 120$ kHz. TDM/PCM needs $1.024$ MHz — about **8.5 times more**.

What the extra bandwidth bought: immunity. The PCM stream is a sequence of binary symbols, so it can be **regenerated** at each repeater — a fresh, noise-free copy is retransmitted, and noise does not accumulate over a thousand-kilometre route. The analog FDM signal degrades a little at every amplifier, and those degradations add. Spending 8.5× the bandwidth to convert an accumulating impairment into essentially none is the founding trade of digital communications.

**P3** (a) A hold of width $\tau$ has $H(f) = \tau\operatorname{sinc}(f\tau)e^{-j\pi f\tau}$, so the amplitude response is $\tau|\operatorname{sinc}(f\tau)|$. With $\tau = T_s = 1/f_s = 1/(2.5W)$:

$$\frac{|H(W)|}{|H(0)|} = \operatorname{sinc}\!\left(\frac{W}{2.5W}\right) = \operatorname{sinc}(0.4) = \frac{\sin(0.4\pi)}{0.4\pi} = \frac{0.9511}{1.2566} = 0.7568 .$$

$$20\log_{10}(0.7568) = -2.42\ \text{dB}.$$

(b) It helps, because raising $f_s$ shortens $\tau = T_s$ and pushes the sinc's first null further out. At $f_s = 4W$, $\tau = 1/(4W)$:

$$\operatorname{sinc}(0.25) = \frac{\sin(0.25\pi)}{0.25\pi} = \frac{0.7071}{0.7854} = 0.9003 \;\Rightarrow\; -0.91\ \text{dB}.$$

So the droop falls from 2.42 dB to 0.91 dB. But note what it cost: a 60% faster converter and 60% more channel bandwidth, to fix 1.5 dB of a *deterministic, known, invertible* distortion.

(c) The equalizer must supply the reciprocal:

$$G(W) = \frac{1}{0.7568} = 1.321 \;=\; +2.42\ \text{dB}.$$

The practical reason to prefer it: the aperture effect is **completely known in advance** — it depends only on $\tau$, a number set by your own clock, not by the signal, the temperature, or the channel. A fixed, cheap, once-designed filter cancels it exactly. Raising $f_s$ instead spends the two most expensive resources in the system (converter speed and channel bandwidth) to partially mitigate a distortion you could have cancelled outright. The general principle is worth keeping: *deterministic, invertible impairments should be equalized, not out-run.* It is the same argument that motivates [2.5](02-05-equalization-briefly.md).

</details>

## Flashback

**From Lesson 1.5 (SSB, VSB and multiplexing):** Twelve messages, each occupying 300 Hz to 3400 Hz, are frequency-division multiplexed using SSB with 600 Hz guard bands, starting at 12 kHz. (a) Give the total occupied bandwidth. (b) Give the carrier frequency and occupied band of channel 5, using upper-sideband transmission. (c) Why does FDM need guard bands while TDM needs guard *times*?

<details>
<summary>Solution</summary>

(a) Per channel $3.4+0.6 = 4.0$ kHz, so $12\times 4 = 48$ kHz, occupying 12 to 60 kHz.

(b) Channel $k$ starts at $12 + 4(k-1)$ kHz, so channel 5 starts at $12+16 = 28$ kHz. With USB transmission and a message starting at 300 Hz, the carrier sits 300 Hz below the band edge: $f_5 = 27.7$ kHz, and the occupied band is $[28.0,\ 31.1]$ kHz, followed by a 0.9 kHz gap to channel 6 at 32 kHz.

(c) Both exist for the same reason — real hardware cannot switch infinitely sharply. FDM separates users along the frequency axis, and real *filters* have finite skirts, so adjacent users need spectral room between them. TDM separates users along the time axis, and real *switches* have finite rise times and real clocks have jitter, so adjacent users need temporal room between them. The two are duals: a guard band is a guard time seen through a Fourier transform.

</details>

## Connections

- **Backward:** the reconstruction sincs here are the same orthogonal family as the zero-ISI pulses of [2.4](02-04-isi-nyquist-criterion.md); TDM is the time-domain dual of [1.5](01-05-ssb-vsb-multiplexing.md)'s FDM.
- **Forward:** [2.2](02-02-quantization-and-pcm.md) turns each sample into bits, completing the analog-to-digital conversion this lesson started.
- **Sideways:** the same folding rule governs stroboscopy, the wagon-wheel effect in film, and moiré patterns in a printed halftone — all of them spatial or temporal undersampling of the same mathematical kind. It reappears in numerical time-stepping as the reason a step size that is too coarse produces spurious low-frequency oscillation, which is the stability question of [`numerical-analysis` 4.4](../../numerical-analysis/lessons/04-04-absolute-stability-stiffness.md).
