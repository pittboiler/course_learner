# Signals & Systems · Lesson 3.2: Aliasing and reconstruction

> ⏱ ~15 min · Module 3: Sampling and the discrete-time world · Builds on: [3.1 Sampling and the Nyquist–Shannon theorem](03-01-sampling-nyquist-shannon.md), [2.3 The continuous-time Fourier transform](02-03-continuous-time-fourier-transform.md) · Unlocks: 3.3 (the discrete-time Fourier transform)

## Why this matters

[3.1](03-01-sampling-nyquist-shannon.md) told you the good news: sample fast enough and you lose *nothing*. This lesson is the bad news, and the bad news is where the engineering lives. Sample too slowly and a 900 Hz tone doesn't vanish, doesn't distort, doesn't announce itself — it **shows up as a 100 Hz tone**, sitting in your data looking exactly like a signal you care about. Every ADC on earth has an analog filter bolted to its front for this one reason. Get this lesson right and you can predict, before you build anything, precisely which fake frequency a given sample rate will manufacture.

## The idea

Recall the picture from [3.1](03-01-sampling-nyquist-shannon.md): sampling at rate $\omega_s$ makes the spectrum of your signal **repeat**, one copy centered at every multiple of $\omega_s$. If the copies are spaced further apart than they are wide — that's $\omega_s > 2\omega_M$ — they sit in tidy isolation, and a low-pass filter plucks the original back out.

Now crowd them. When $\omega_s < 2\omega_M$ the neighbouring copies **overlap**, and in the overlap they don't stack neatly like transparencies — they **add**. At an overlapped frequency you now hold one number that is the sum of two contributions, and there is no arithmetic anywhere that recovers two numbers from their sum. Say this plainly, because it is the whole point: **aliasing destroys information.** It is not hidden, not smeared, not recoverable by a cleverer filter downstream. It is gone.

What arrives in its place is a lie with a very specific form. A tone that was above half the sample rate reappears *below* it, at a frequency you can compute exactly. That reappearance is called **folding**, and the useful skill of this lesson is folding a frequency by hand in about five seconds.

## The formal version

### The folding rule

Let a pure tone at ordinary frequency $f$ (Hz) be sampled at rate $f_s$ (Hz). Every spectral copy sits at $f - k f_s$ for integer $k$, and exactly one of those copies lands in the band $[-f_s/2,\, f_s/2]$ that the reconstructor keeps. Its magnitude is the **apparent** (alias) frequency:

$$\boxed{\;f_{\text{app}} = \bigl|\,f - \operatorname{round}(f/f_s)\cdot f_s\,\bigr|\;}$$

*In words: subtract off whichever whole multiple of the sample rate gets you closest to zero, and take the size of what's left.* The band $[0, f_s/2]$ is the **baseband**; $f_s/2$ is the **Nyquist frequency** (also called the folding frequency).

**As a two-step hand procedure** (unambiguous, and how I'd actually do it):

1. **Reduce:** compute $r = f \bmod f_s$, landing $f$ in $[0, f_s)$.
2. **Fold:** if $r \le f_s/2$, then $f_{\text{app}} = r$. Otherwise $f_{\text{app}} = f_s - r$.

Worked for $f_s = 800$ Hz (so $f_s/2 = 400$ Hz):

| $f$ (Hz) | $r = f \bmod 800$ | $r > 400$? | $f_{\text{app}}$ (Hz) | aliased? |
|---|---|---|---|---|
| 300 | 300 | no | **300** | no — it was already in band |
| 500 | 500 | yes → $800-500$ | **300** | yes |
| 700 | 700 | yes → $800-700$ | **100** | yes |
| 900 | 100 | no | **100** | yes |
| 1100 | 300 | no | **300** | yes |
| 1300 | 500 | yes → $800-500$ | **300** | yes |
| 1700 | 100 | no | **100** | yes |

Read down the last column and the damage is obvious: **300, 500, 1100 and 1300 Hz all become 300 Hz.** Four distinct tones, one indistinguishable output. Likewise 700, 900 and 1700 Hz all become 100 Hz.

**The folding diagram.** Picture the frequency axis as a long paper strip, and crease it at every multiple of $f_s/2$: at $400, 800, 1200, 1600, \ldots$ Now fold it back and forth like a paper fan. Every point on the strip lands somewhere on the first panel, $[0, 400]$ — and *that* is where it appears in your samples. Frequencies in $[0,400]$ stay put. Frequencies in $[400,800]$ fold back down (700 lands on 100). Frequencies in $[800,1200]$ fold forward again (900 lands on 100 too, arriving from the other side). The fan is why the alias frequency zig-zags up and down as $f$ climbs steadily.

### Why the alias is genuinely indistinguishable

The spectral argument says the copies collide. Here is the same fact in the time domain, and it is the more convincing version: **two sinusoids of different frequency pass through the identical sample points.**

Take $x_1(t) = \cos(2\pi \cdot 900\,t)$ and $x_2(t) = \cos(2\pi \cdot 100\,t)$, sampled at $f_s = 800$ Hz, i.e. at $t = n/800$ for integer $n$:

$$x_1[n] = \cos\!\left(2\pi \cdot 900 \cdot \tfrac{n}{800}\right) = \cos\!\left(2\pi n \tfrac{9}{8}\right) = \cos\!\left(2\pi n + 2\pi\tfrac{n}{8}\right) = \cos\!\left(2\pi \tfrac{n}{8}\right)$$

$$x_2[n] = \cos\!\left(2\pi \cdot 100 \cdot \tfrac{n}{800}\right) = \cos\!\left(2\pi \tfrac{n}{8}\right)$$

*In words: $9/8$ and $1/8$ differ by exactly $1$, so for integer $n$ the two arguments differ by the whole multiple $2\pi n$ — and cosine cannot tell those apart.* Check a few:

| $n$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $x_1[n]$ (900 Hz) | $1$ | $0.7071$ | $0$ | $-0.7071$ | $-1$ |
| $x_2[n]$ (100 Hz) | $1$ | $0.7071$ | $0$ | $-0.7071$ | $-1$ |

Not close. **Equal.** Given only the sample list, no algorithm — not the FFT, not a neural net, not you with infinite time — can say which tone produced it, because both did, exactly. The only thing that breaks the tie is an *assumption* about the signal, and the sampling theorem's assumption is "nothing above $f_s/2$" — which is precisely what the anti-aliasing filter goes out and enforces physically.

### Aliasing you have already seen

Film shoots 24 frames per second, so it samples the world at $f_s = 24$ Hz. A wagon wheel with 12 spokes spinning at just under 2 revolutions per second presents spokes at just under 24 Hz — which folds down to *just under zero*, and the wheel appears to creep slowly **backwards** while the wagon races forward. Same mechanism: a strobe light flashing at 50 Hz freezes a fan spinning at 50 revolutions per second, and makes one at 51 rev/s drift lazily at 1 Hz. Scan a printed photograph and the printer's halftone dot grid beats against the scanner's pixel grid to produce **moiré** — aliasing in two spatial dimensions instead of one temporal one. Your eye has been reading folded frequencies your whole life.

### The anti-aliasing filter

You cannot fix aliasing after the fact. So don't let it happen: put a **low-pass filter with cutoff at (or just below) $f_s/2$ in front of the sampler**, in the analog domain.

$$x(t) \;\longrightarrow\; \boxed{\text{analog LPF, cutoff } f_s/2} \;\longrightarrow\; \text{sampler at } f_s \;\longrightarrow\; x[n]$$

**The order is the entire trick.** Before sampling, the out-of-band content occupies its own frequencies and is *separable* — a filter can throw it away cleanly. After sampling, it has been added on top of in-band content and is no longer separable from it. You are trading a known, controlled loss (content above $f_s/2$ is deliberately discarded) for an unknown, uncontrolled corruption (content above $f_s/2$ masquerading as signal). That's a good trade every time.

A real filter can't drop from passband to stopband instantly ([4.4](04-04-filter-design-basics.md) explains why), so practical systems **oversample**: pick $f_s$ comfortably above twice the highest frequency you care about, leaving the filter a transition band to roll off in. Audio CDs keep 20 kHz of music and sample at 44.1 kHz, not 40 kHz, for exactly this reason.

### Ideal reconstruction: sinc interpolation

Going back the other way, reconstruction is just the low-pass filter promised in [3.1](03-01-sampling-nyquist-shannon.md): keep the baseband copy, delete every replica. An ideal brick-wall low-pass with cutoff $f_s/2$ has impulse response $\operatorname{sinc}(t/T)$, where $T = 1/f_s$ is the sample interval (seconds) and

$$\operatorname{sinc}(x) \equiv \frac{\sin(\pi x)}{\pi x}, \qquad \operatorname{sinc}(0) = 1.$$

Filtering the impulse-train-sampled signal is therefore convolution with that sinc, which collapses to a sum:

$$\boxed{\;x(t) = \sum_{n=-\infty}^{\infty} x[n]\,\operatorname{sinc}\!\left(\frac{t - nT}{T}\right)\;}$$

*In words: replace every sample with a sinc curve scaled to that sample's height, and add them all up.*

Why does this pass through the samples exactly? Because $\operatorname{sinc}(m)$ for integer $m$ equals $1$ at $m=0$ and $0$ everywhere else — the sinc has zero crossings at every nonzero integer. So the sinc parked at sample $n$ is worth exactly $x[n]$ at its own instant $t = nT$ and contributes **exactly nothing** at every *other* sample instant. Evaluate the sum at $t = mT$ and all terms but one vanish, leaving $x(mT) = x[m]$. Between the samples, the sinc tails from every direction cooperate to fill in the one and only band-limited curve through those points.

It is also **unrealizable**: the sinc extends to $t = \pm\infty$ (decaying only as $1/t$) and is non-causal — computing $x(t)$ needs samples from the future. Ideal reconstruction is a proof of concept, not a circuit.

### What real hardware does: the zero-order hold

A real DAC does the crudest possible thing: it **holds each sample constant for one interval $T$**, producing a staircase. That's the **zero-order hold (ZOH)** — convolution with a rectangular pulse of width $T$ instead of a sinc.

The price shows up in frequency. The rectangle's transform is a sinc, so the ZOH multiplies your spectrum by

$$H_{\text{ZOH}}(j\omega) = T\,e^{-j\omega T/2}\,\frac{\sin(\omega T/2)}{\omega T/2},$$

a **sinc envelope** that sags as frequency rises — the ZOH **droop**. At the Nyquist frequency $\omega = \pi/T$ the argument is $\pi/2$ and the gain is $\sin(\pi/2)/(\pi/2) = 2/\pi \approx 0.637$, about $-3.9$ dB. The linear-phase factor $e^{-j\omega T/2}$ is just a harmless half-sample delay. The fix is routine: follow the DAC with a **reconstruction (smoothing) filter** that removes the leftover replicas, and pre- or post-compensate with an inverse-sinc response that lifts the high end back up by $1/\operatorname{sinc}$.

## Picture

![Panel (a): three overlapping triangular spectral copies with the overlap regions shaded coral and labelled as irreversibly corrupted. Panel (b): a 900 Hz cosine and a 100 Hz cosine drawn over the same nine sample dots, both passing exactly through every dot.](assets/03-02-fig1.svg)

Panel (b) is the one that teaches. The two curves are visibly, obviously different signals — and they agree on every single sample. That agreement is not approximate.

## Worked examples

**Example 1 (fold a tone).** Telephone-quality audio samples at $f_s = 8$ kHz. A 4.5 kHz tone slips past a missing anti-aliasing filter. Where does it land?

Nyquist frequency is $f_s/2 = 4000$ Hz, and $4500 > 4000$, so this tone *will* alias. Reduce: $4500 \bmod 8000 = 4500$. Fold: $4500 > 4000$, so

$$f_{\text{app}} = 8000 - 4500 = 3500\ \text{Hz}.$$

Cross-check with the formula: $\operatorname{round}(4500/8000) = \operatorname{round}(0.5625) = 1$, and $|4500 - 1\cdot 8000| = 3500$ Hz. ✓ Note where it landed — 3.5 kHz is squarely inside the speech band, so it is not a faint artifact at the edge; it is a whistle sitting on top of the voice.

**Example 2 (why every ADC has an analog filter).** A CD samples at $f_s = 44.1$ kHz, keeping $[0, 22.05]$ kHz. Suppose a switching power supply injects a 30 kHz component — far above anything a human can hear, so "harmless," right?

$$30000 \bmod 44100 = 30000, \qquad 30000 > 22050 \;\Rightarrow\; f_{\text{app}} = 44100 - 30000 = 14100\ \text{Hz}.$$

That inaudible 30 kHz interference becomes an audible 14.1 kHz tone **inside the recording**, permanently. No mastering engineer can remove it, because at 14.1 kHz it is now genuinely indistinguishable from music at 14.1 kHz. An analog low-pass ahead of the sampler would have killed it while it still lived at 30 kHz, where it was separable. This is the whole argument for the anti-aliasing filter, in one number.

## Watch out

- **You might think a digital filter can undo aliasing.** It cannot, ever. Once two frequencies have been summed into one bin, the information that distinguished them no longer exists in the data. "Filter it out later" is the single most expensive mistake in a data-acquisition design — the cure has to be analog and it has to come *before* the sampler.
- **You might think sampling above the highest frequency is enough.** The threshold is **twice** the highest frequency, not once. Sampling a 900 Hz tone at 1000 Hz feels generous and gives you $\operatorname{round}(0.9)=1$, $|900-1000| = 100$ Hz — badly aliased. You need at least two samples per cycle to pin down a sinusoid, one for each of its two unknowns (amplitude and phase).
- **You might expect the alias frequency to grow with $f$.** It doesn't grow, it zig-zags. As $f$ climbs past $f_s/2$ the apparent frequency *decreases* back toward zero, bounces at $f_s$, climbs again, and so on. That is why 500 Hz and 1100 Hz both alias to 300 Hz at $f_s = 800$ — the fan folds them onto the same crease from opposite directions.
- **You might read the ZOH staircase as "close enough."** It is close enough in the time domain and misleading in the frequency domain: the sinc-envelope droop attenuates your high frequencies by up to 3.9 dB at Nyquist, and the un-removed spectral replicas are still sitting out there above $f_s/2$ waiting to be smoothed away.

## One-liner

> Undersampling doesn't blur a frequency, it **relabels** it: fold $f$ down at multiples of $f_s/2$ to find the impostor, filter it out *before* the sampler because afterwards the information is gone, and reconstruct by dropping a sinc on every sample.

## Problems

**P1 (🟢)** A system samples at $f_s = 1000$ Hz with no anti-aliasing filter. Give the apparent frequency of each of these input tones, and say which are aliased: 200 Hz, 600 Hz, 1300 Hz, 2400 Hz.

**P2 (🟡)** A sensor's output contains real signal up to 4 kHz plus a strong interference tone at exactly 6 kHz. You must sample at $f_s = 10$ kHz. (a) With no anti-aliasing filter, what apparent frequency does the 6 kHz tone produce, and why is that placement especially bad? (b) Specify the anti-aliasing filter that fixes it. (c) Your colleague proposes instead to sample first and then apply a sharp digital notch filter at the apparent frequency. Explain concretely what that destroys.

**P3 (🔴)** A band-limited signal is sampled with $T = 1$ s, giving $x[0] = 1$, $x[1] = 1$, and $x[n] = 0$ for all other $n$. (a) Use ideal sinc interpolation to find the reconstructed value $x(0.5)$. (b) What value would a zero-order-hold DAC output at $t = 0.5$? (c) The sinc answer exceeds *both* neighbouring samples. Is that a mistake?

<details>
<summary>Solutions</summary>

**P1** Nyquist frequency is $f_s/2 = 500$ Hz. Reduce mod 1000, then fold anything above 500.

- **200 Hz:** $200 \bmod 1000 = 200$, and $200 \le 500$, so $f_{\text{app}} = 200$ Hz. **Not aliased** — it was in band to begin with.
- **600 Hz:** $600 \bmod 1000 = 600 > 500$, so $f_{\text{app}} = 1000 - 600 = 400$ Hz. **Aliased.**
- **1300 Hz:** $1300 \bmod 1000 = 300 \le 500$, so $f_{\text{app}} = 300$ Hz. **Aliased.**
- **2400 Hz:** $2400 \bmod 1000 = 400 \le 500$, so $f_{\text{app}} = 400$ Hz. **Aliased.**

*Check with the round formula.* $\operatorname{round}(0.2)=0 \Rightarrow |200-0| = 200$ ✓. $\operatorname{round}(0.6)=1 \Rightarrow |600-1000| = 400$ ✓. $\operatorname{round}(1.3)=1 \Rightarrow |1300-1000| = 300$ ✓. $\operatorname{round}(2.4)=2 \Rightarrow |2400-2000| = 400$ ✓.

Note the collision: 600 Hz and 2400 Hz both come out as 400 Hz, and neither can be told from a genuine 400 Hz input.

**P2**

**(a)** $f_s/2 = 5$ kHz. Reduce: $6000 \bmod 10000 = 6000$. Fold: $6000 > 5000$, so

$$f_{\text{app}} = 10000 - 6000 = 4000\ \text{Hz}.$$

(Formula check: $\operatorname{round}(0.6) = 1$, $|6000 - 10000| = 4000$ ✓.) That is the worst possible landing spot — 4 kHz is the top edge of your *real* signal band, so the impostor sits directly on top of data you need. It doesn't announce itself as interference; it looks like sensor output.

**(b)** An **analog** low-pass filter placed **before the sampler**, with passband flat to 4 kHz and stopband attenuation by 5 kHz (the Nyquist frequency). At 6 kHz the interference is then already deep in the stopband and gets removed while it still occupies its own frequency. Because a real filter needs a transition band, the 4–5 kHz gap here is tight; if the filter can't achieve enough rejection over that span, oversample (say $f_s = 20$ kHz) to widen the transition region.

**(c)** A digital notch at 4 kHz operates on samples in which the interference and the genuine 4 kHz signal have already been **added into the same value**. The notch cannot tell them apart, so it deletes both — you lose the top of your usable band and still can't recover the interference-free signal. Worse, if the real signal has broadband content near 4 kHz, what remains after the notch is a corrupted spectrum with a hole in it. The information distinguishing the two contributions was destroyed at the instant of sampling; no downstream processing restores it.

**P3**

**(a)** With $T = 1$ the interpolation formula is $x(t) = \sum_n x[n]\operatorname{sinc}(t-n)$. Only $n=0$ and $n=1$ have nonzero samples, so

$$x(0.5) = 1\cdot\operatorname{sinc}(0.5) + 1\cdot\operatorname{sinc}(-0.5).$$

Since $\operatorname{sinc}(x) = \sin(\pi x)/(\pi x)$ is even, both terms are equal:

$$\operatorname{sinc}(0.5) = \frac{\sin(\pi/2)}{\pi/2} = \frac{1}{\pi/2} = \frac{2}{\pi} \approx 0.6366.$$

$$x(0.5) = \frac{2}{\pi} + \frac{2}{\pi} = \frac{4}{\pi} \approx 1.273.$$

**(b)** The ZOH holds $x[0] = 1$ for the whole interval $0 \le t < 1$, so its output at $t = 0.5$ is exactly $\mathbf{1}$ — a flat step, no overshoot.

**(c)** Not a mistake. The sinc sum reconstructs the *unique* signal that is band-limited to $|f| < 1/(2T)$ and passes through all the given samples. A curve that stayed flat at 1 between the two samples and dropped abruptly to 0 outside would have sharp corners, and corners require unlimited bandwidth — such a signal is not band-limited, so it is not the answer. The band-limited curve is smooth, and to leave every other sample at exactly 0 while hitting 1 at both $t=0$ and $t=1$, it must bulge above 1 in between. Overshoot between samples is a *feature* of band-limited reconstruction, not an error — the same phenomenon behind Gibbs ringing in [`fourier-analysis` 1.3](../../fourier-analysis/lessons/01-03-convergence-pointwise-uniform-gibbs.md).

*Sanity check on (a).* Verify the formula reproduces the samples: at $t = 0$, $x(0) = 1\cdot\operatorname{sinc}(0) + 1\cdot\operatorname{sinc}(-1) = 1 + 0 = 1$ ✓, and at $t = 1$, $x(1) = 1\cdot\operatorname{sinc}(1) + 1\cdot\operatorname{sinc}(0) = 0 + 1 = 1$ ✓. Symmetry also demands $x(0.5)$ sit at the midpoint of a curve symmetric about $t = 0.5$, which it does.

</details>

## Flashback

**From Lesson 2.3 (The continuous-time Fourier transform):** Find the Fourier transform $X(j\omega)$ of $x(t) = e^{-4t}u(t)$, and find the frequency $\omega$ at which $|X(j\omega)|$ has fallen to $1/\sqrt{2}$ of its value at $\omega = 0$. Then say what this signal's spectrum implies about sampling it.

<details>
<summary>Solution</summary>

The step $u(t)$ kills the integrand for $t<0$, so

$$X(j\omega) = \int_{0}^{\infty} e^{-4t}e^{-j\omega t}\,dt = \int_{0}^{\infty} e^{-(4+j\omega)t}\,dt = \left[\frac{e^{-(4+j\omega)t}}{-(4+j\omega)}\right]_{0}^{\infty} = \frac{1}{4+j\omega},$$

where the upper limit vanishes because $|e^{-(4+j\omega)t}| = e^{-4t} \to 0$. The magnitude is

$$|X(j\omega)| = \frac{1}{\sqrt{16+\omega^2}}, \qquad |X(j0)| = \tfrac14.$$

Setting $|X(j\omega)| = \tfrac{1}{4\sqrt2}$:

$$\sqrt{16+\omega^2} = 4\sqrt2 \;\Longrightarrow\; 16+\omega^2 = 32 \;\Longrightarrow\; \omega = 4\ \text{rad/s}.$$

The half-power (−3 dB) point sits at $\omega = 4$, the same number as the decay rate — faster decay in time means wider bandwidth, the time–frequency tradeoff from [2.3](02-03-continuous-time-fourier-transform.md).

**Sampling implication:** $|X(j\omega)| = 1/\sqrt{16+\omega^2}$ is never zero for any finite $\omega$. This signal is **not band-limited**, so strictly speaking *no* sample rate avoids aliasing — and this is true of essentially every real signal, since anything with a finite start or a corner has infinite bandwidth. The practical answer is exactly this lesson's: choose $f_s$ so the residual energy above $f_s/2$ is below your noise floor, and install an anti-aliasing filter to guarantee it. Aliasing is never truly eliminated; it is engineered down until it doesn't matter.

</details>

## Connections

- **Backward:** the overlapping copies in panel (a) are [3.1](03-01-sampling-nyquist-shannon.md)'s spectral replication with the spacing condition violated; the anti-aliasing filter is nothing but an LTI system doing the spectral shaping of [2.1](02-01-eigenfunctions-frequency-response.md), and the sinc reconstructor is the ideal low-pass whose impulse response comes straight from the box-function transform pair in [2.3](02-03-continuous-time-fourier-transform.md).
- **Forward:** [3.3](03-03-discrete-time-fourier-transform.md) shows that a discrete signal's spectrum is inherently $2\pi$-periodic in $\Omega$ — that periodicity *is* folding, built into the discrete world's definition of frequency. [4.4](04-04-filter-design-basics.md) explains why the brick-wall anti-alias filter you'd like doesn't exist, forcing the oversampling compromise, and [4.5](04-05-modulation.md) turns the same spectral shifting into a feature rather than a bug (bandpass sampling deliberately aliases a high-frequency band down to baseband).
- **Sideways:** [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md) derives the replication result from the impulse-train transform if you want the distribution-theoretic version. The cheapest real anti-aliasing filter is a first-order RC low-pass — that's the same circuit analyzed with impedances in [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md), and its $-20$ dB/decade rolloff is exactly why one RC stage is usually not enough. Sampled-data feedback loops live with folding constantly, which is why controller sample rates are chosen well above the closed-loop bandwidth in [`control-systems`](../../control-systems/syllabus.md).
</content>
</invoke>
