# Signals & Systems · Lesson 3.1: Sampling and the Nyquist–Shannon theorem

> ⏱ ~15 min · Module 3: Sampling and the discrete-time world · Builds on: [1.2 The elementary signals](01-02-elementary-signals.md), [2.3 The continuous-time Fourier transform](02-03-continuous-time-fourier-transform.md), [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md) · Unlocks: [3.2 Aliasing and reconstruction](03-02-aliasing-and-reconstruction.md), [3.3 The discrete-time Fourier transform](03-03-discrete-time-fourier-transform.md)

## Why this matters

Everything you have done so far in this course lives in continuous time. Every machine you would actually build the system on works with a finite list of numbers. This lesson is the bridge — and it is not a compromise. The sampling theorem says that under one clean condition, turning a continuous signal into a list of numbers loses **nothing at all**: the original curve, all of it, between the samples too, is recoverable exactly.

You already met this as mathematics in [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md), where it fell out of the Dirac comb's self-duality. Here you meet it as an **engineering law** — the thing that decides the number stamped on every ADC datasheet — and you build the one picture that the whole rest of Module 3 leans on: **spectral replication**. Lessons [3.2](03-02-aliasing-and-reconstruction.md) through [3.5](03-05-the-fft.md) are all consequences of that picture. Learn it as a picture, not a formula.

## The idea

Sampling means: look at the signal only at the instants $t = 0, \pm T, \pm 2T, \dots$ and write down what you see. In between, you look away.

Why isn't that a catastrophe? Because a signal that contains no fast wiggles **can't** do anything interesting while you're not looking. Imagine watching a slow ocean swell through a strobe that flashes once a second — you miss nothing, because the swell can't rise and fall in half a second. Now strobe a hummingbird's wing at the same rate and you'll see gibberish. The dividing line between "you miss nothing" and "gibberish" is set by the fastest wiggle in the signal — that is, by its **bandwidth**.

The frequency-domain version of that story is much sharper, and it is the mental model to carry:

> **Sampling photocopies the spectrum.** Take the signal's spectrum, and paste an identical copy of it centered at every integer multiple of the sampling frequency. That infinite row of copies *is* the spectrum of the sampled signal.

Everything follows from that one sentence. If the copies are far enough apart, they sit in their own lanes with clean air between them; the copy at the origin is still a pristine, untouched image of the original spectrum, so you cut it out with a filter and you have the signal back — exactly. If you sample too slowly, the copies crowd together, their skirts overlap and *add*, and the copy at the origin is now contaminated by its neighbors' tails. No filter can unmix a sum. That is aliasing, and it is permanent.

Sampling faster pushes the copies further apart. Sampling slower slides them together. That is the entire trade-off.

## The formal version

**Impulse-train sampling.** Model the sampler as multiplication by an **impulse train** (a "Dirac comb")

$$p(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT),$$

where $T$ is the **sampling period** (seconds per sample), $f_s = 1/T$ is the **sampling frequency** (Hz, samples per second) and $\omega_s = 2\pi/T = 2\pi f_s$ is the sampling frequency in rad/s. The sampled signal is

$$x_p(t) = x(t)\,p(t) = \sum_{n=-\infty}^{\infty} x(nT)\,\delta(t-nT),$$

using the sifting property from [1.2](01-02-elementary-signals.md): $x(t)\delta(t-nT) = x(nT)\delta(t-nT)$.

*In words: the sampled signal is a row of impulses, one at each sampling instant, each weighted by the signal's value there. All the information is in the numbers $x(nT)$.*

**The key fact: the transform of an impulse train is an impulse train.** $p(t)$ is periodic with period $T$, so it has a Fourier series ([2.2](02-02-fourier-series-periodic-signals.md)). Over one period the only content is the single impulse at $t=0$, so every coefficient is the same:

$$a_k = \frac{1}{T}\int_{-T/2}^{T/2}\delta(t)\,e^{-jk\omega_s t}\,dt = \frac{1}{T} \quad\Longrightarrow\quad p(t) = \frac{1}{T}\sum_{k}e^{jk\omega_s t}, \qquad P(j\omega) = \frac{2\pi}{T}\sum_{k=-\infty}^{\infty}\delta(\omega - k\omega_s).$$

*In words: a comb of impulses spaced $T$ apart in time is a comb of impulses spaced $\omega_s$ apart in frequency.* Dense in time $\Leftrightarrow$ sparse in frequency, and vice versa.

Now multiplication in time is convolution in frequency (with the $1/2\pi$ that the $\omega$ convention carries): $x_p = x\cdot p \Rightarrow X_p(j\omega) = \frac{1}{2\pi}X(j\omega) * P(j\omega)$. Convolving with a shifted impulse just *shifts*, so each of the impulses in $P$ drops a complete copy of $X$ at its location:

$$\boxed{\;X_p(j\omega) = \frac{1}{T}\sum_{k=-\infty}^{\infty} X\!\big(j(\omega - k\omega_s)\big).\;}$$

That one line is the lesson. Read it slowly, because it deserves more words than algebra. The right-hand side is not a distortion of $X$, not an approximation of $X$, not a smeared $X$. It is **the original $X(j\omega)$, unmodified in shape, stamped down over and over at $\omega = 0, \pm\omega_s, \pm 2\omega_s, \dots$**, every stamp scaled by the same constant $1/T$. Sampling is a photocopier with the copies pasted at regular intervals along the frequency axis. Nothing is bent; things only get *crowded*. And the spacing of the crowd is under your control — it is exactly the rate you chose to sample at.

One immediate consequence, free of charge: since the copies repeat every $\omega_s$, $X_p$ is **periodic in $\omega$ with period $\omega_s$**. Every discrete-time spectrum you meet from [3.3](03-03-discrete-time-fourier-transform.md) onward is periodic, and this is why.

**Definition (band-limited).** $x(t)$ is **band-limited to $\omega_M$** if $X(j\omega) = 0$ for all $|\omega| > \omega_M$. *In words: the signal is built only from sinusoids slower than $\omega_M$; above that, its spectrum is flat zero.*

**Sampling theorem (Nyquist–Shannon).** Let $x(t)$ be band-limited to $\omega_M$. If

$$\omega_s > 2\omega_M,$$

then $x(t)$ is completely determined by its samples $\{x(nT)\}$, and is recovered exactly by passing $x_p(t)$ through an ideal low-pass filter with gain $T$ and any cutoff $\omega_c$ with $\omega_M < \omega_c < \omega_s - \omega_M$.

*In words: sample faster than twice the highest frequency present, and the samples contain the whole signal — the continuous curve is rebuildable, not approximable.*

The proof is the picture. The $k=0$ copy occupies $[-\omega_M, \omega_M]$; the $k=1$ copy occupies $[\omega_s-\omega_M,\ \omega_s+\omega_M]$. They fail to overlap precisely when $\omega_s - \omega_M > \omega_M$, i.e. $\omega_s > 2\omega_M$. Given that, a filter that keeps $[-\omega_c,\omega_c]$ and kills everything else retains exactly one clean copy of $X(j\omega)$, and multiplying by the gain $T$ undoes the $1/T$. You are holding $X(j\omega)$ itself, so you are holding $x(t)$ itself.

**Two numbers, two different things.**

- **Nyquist rate** $= 2\omega_M$ (or $2f_M$ in Hz): a property of the **signal**. The minimum rate you must sample *at*.
- **Nyquist frequency** $= \omega_s/2$ (or $f_s/2$): a property of your **sampler**. The highest signal frequency that rate can honestly represent.

They are different kinds of object — one is a sampling rate, one is a signal frequency — and they coincide only at the exact threshold. (See "Watch out".)

**Why this should feel impossible.** A continuous signal on the real line has *uncountably* many values. The samples are a *countable* list of numbers. The theorem says the list determines all of it. That is a genuine surprise, and the resolution is that band-limiting is a colossal constraint: demanding $X(j\omega)=0$ outside a finite interval throws away almost every function there is. What survives is a very rigid, very smooth family (real-analytic, in fact) whose members simply cannot differ somewhere without differing at the sample points too. You are not getting information for free — you paid for it up front by promising the signal has no fast content.

**The honest caveat.** Strictly band-limited signals do not exist. Cutting the spectrum off sharply forces the signal to last forever in time — it is the [2.3](02-03-continuous-time-fourier-transform.md) box-and-sinc trade in its harshest form, and the sharper you cut in one domain, the more the other spreads. Any real signal starts and stops, so it has energy at *every* frequency, however small. Real systems therefore put an **anti-aliasing filter** in front of the sampler to force the signal to be band-limited *enough*, and accept a small residual alias below the noise floor. [3.2](03-02-aliasing-and-reconstruction.md) takes this apart properly.

## Picture

![Two panels of spectral replication. Panel A: a triangular baseband spectrum X(jω) with identical copies centered at plus and minus omega_s, well separated, with the reconstruction low-pass filter's passband drawn as a dashed box around the k=0 copy and the clear gap from omega_M to omega_s minus omega_M marked. Panel B: the critical case omega_s = 2 omega_M where adjacent copies just touch at plus and minus omega_M.](assets/03-01-fig1.svg)

The triangle is the standard cartoon for "some band-limited spectrum" — the shape is irrelevant, only its edges at $\pm\omega_M$ matter. **Panel A** is the theorem: the copies are spaced $\omega_s$ apart, the blue $k=0$ copy is untouched, and there is a clear gap of width $\omega_s - 2\omega_M$ on each side of it for the reconstruction filter's cutoff to live in. **Panel B** is the cliff edge: at $\omega_s = 2\omega_M$ exactly the copies meet edge to edge. Nothing has overlapped *yet*, but the gap has closed to zero, so the filter would have to be an infinitely sharp brick wall. Sample any slower and the triangles slide into each other and add — that is [3.2](03-02-aliasing-and-reconstruction.md).

## Worked examples

**Example 1 (CD audio, and where 44.1 kHz comes from).** Human hearing tops out around $f_M = 20$ kHz, so take audio band-limited to 20 kHz.

$$\text{Nyquist rate} = 2f_M = 40\ \text{kHz}.$$

The CD standard uses $f_s = 44.1$ kHz, which is comfortably above 40 kHz, so the theorem applies. Its **Nyquist frequency** is $f_s/2 = 22.05$ kHz. The spectral copies sit centered at $0, \pm 44.1, \pm 88.2, \dots$ kHz, and the $k=1$ copy occupies

$$[\,f_s - f_M,\ f_s + f_M\,] = [\,44.1 - 20,\ 44.1 + 20\,] = [\,24.1,\ 64.1\,]\ \text{kHz}.$$

So the gap between the top of the baseband copy (20 kHz) and the bottom of its neighbor (24.1 kHz) is

$$f_s - 2f_M = 44.1 - 40 = 4.1\ \text{kHz}.$$

That 4.1 kHz is the **guard band**: the room the anti-aliasing and reconstruction filters have to fall from full passband to full stopband. At exactly 40 kHz that room would be zero and the filter unbuildable. This is why nobody samples at the Nyquist rate; they sample above it and spend the difference on filter transition width.

Why *that* number and not a round 48 kHz? History, not theory. Early digital audio masters were stored on video tape recorders, which were the only machines with the bandwidth. You get three samples per horizontal video line, and both broadcast standards happen to agree:

$$3 \times 245\ \text{lines} \times 60\ \text{fields/s} = 44100, \qquad 3 \times 294\ \text{lines} \times 50\ \text{fields/s} = 44100.$$

The theorem sets the floor at 40 kHz; the videotape set the exact digit.

**Example 2 (the design version: let the filter pick the rate).** In practice you don't know $f_M$ — you *impose* it with an anti-aliasing filter, and real filters have a transition band. Suppose you need audio flat to $f_{\text{pass}} = 20$ kHz, and your anti-aliasing filter reaches full stopband attenuation at $f_{\text{stop}} = 24$ kHz. What is the minimum usable $f_s$?

The thing to prevent is content folding *into the band you care about*. Input at frequency $f$ produces a replica at $f_s - f$; that replica lands inside the passband when $f_s - f \le f_{\text{pass}}$, i.e. when $f \ge f_s - f_{\text{pass}}$. So everything from $f_s - f_{\text{pass}}$ upward must already be dead — which means the filter must be in full stopband by then:

$$f_s - f_{\text{pass}} \ge f_{\text{stop}} \quad\Longrightarrow\quad f_s \ge f_{\text{pass}} + f_{\text{stop}} = 20 + 24 = 44\ \text{kHz}.$$

Note the shape of the answer: $f_s \ge f_{\text{pass}} + f_{\text{stop}}$, not $2f_{\text{pass}}$. A lazier filter (bigger $f_{\text{stop}}$) directly costs you a faster converter. That trade — analog filter sharpness against sample rate — is the real engineering content of the sampling theorem, and it is why 44.1 kHz was a plausible choice for a 20 kHz band in the first place.

## Watch out

- **You might think "Nyquist frequency" and "Nyquist rate" are two names for one thing.** They are not, and mixing them up is the single most common slip in this subject. The **rate** $2\omega_M$ belongs to the *signal* and is a sampling speed: "sample above the Nyquist rate." The **frequency** $\omega_s/2$ belongs to the *sampler* and is a signal frequency: "this converter's Nyquist frequency is 22.05 kHz." Saying "sample above the Nyquist frequency" is a category error — it compares a rate to a tone.
- **You might think $\omega_s = 2\omega_M$ is safe.** The theorem requires the *strict* inequality. At equality the copies touch (Panel B): the gap is zero, so the reconstruction filter would need infinitely steep skirts, and a component sitting exactly at $\omega_M$ lands on top of its own replica and is destroyed (see P3). Always sample strictly above, with margin.
- **You might think "sampled" means "approximated."** Under the theorem, reconstruction is *exact* — not "good to within the sample spacing." The samples are not a lossy summary of a curve; for a band-limited signal they are a complete alternative coordinate system for it.
- **You might think a faster sample rate can rescue a signal that was already aliased.** It cannot. The damage happens *at* the sampler, when two frequencies get added into the same numbers. Band-limiting must happen in the analog domain, before the sampler.

## One-liner

> Sampling at rate $\omega_s$ stamps a $1/T$-scaled copy of the spectrum at every multiple of $\omega_s$; keep the copies from colliding ($\omega_s > 2\omega_M$) and one low-pass filter hands the original signal back exactly.

## Problems

**P1 (🟢)** Telephone-quality speech is band-limited to $f_M = 3.4$ kHz. (a) Give the Nyquist rate in Hz and in rad/s. (b) It is sampled at $f_s = 8$ kHz. What is the Nyquist frequency? (c) On the frequency axis, how wide is the clear gap between the top edge of the baseband copy and the bottom edge of the $k=1$ copy?

**P2 (🟡)** A signal is band-limited to $\omega_M = 2\pi(5000)$ rad/s and is sampled with $\omega_s = 2\pi(12000)$ rad/s. (a) Confirm the sampling theorem applies. (b) Where (in rad/s) are the centers of the $k = -1, 0, +1$ spectral copies? (c) State the full range of cutoff frequencies $\omega_c$ for which an ideal low-pass filter recovers $x(t)$ exactly, and give the gain that filter must have.

**P3 (🔴)** Take $\omega_M$ fixed and sample at *exactly* the Nyquist rate, $\omega_s = 2\omega_M$. Consider the signal $x(t) = \sin(\omega_M t)$, which is (marginally) band-limited to $\omega_M$. Compute its samples $x(nT)$ and explain what they show about why the theorem demands a strict inequality.

<details>
<summary>Solutions</summary>

**P1** (a) The Nyquist rate is twice the highest frequency present:

$$2f_M = 2 \times 3.4\ \text{kHz} = 6.8\ \text{kHz}, \qquad 2\omega_M = 2\pi(6800) \approx 4.27\times10^{4}\ \text{rad/s}.$$

(b) The Nyquist frequency is half the *sampling* rate — a property of the sampler, not the signal:

$$f_s/2 = 8/2 = 4\ \text{kHz}.$$

Since $8 > 6.8$, the theorem applies. ✓

(c) The baseband copy occupies $[-3.4, 3.4]$ kHz. The $k=1$ copy is the same shape centered at 8 kHz, so it occupies $[8-3.4,\ 8+3.4] = [4.6,\ 11.4]$ kHz. The gap runs from 3.4 kHz to 4.6 kHz:

$$\text{gap width} = f_s - 2f_M = 8 - 6.8 = 1.2\ \text{kHz}.$$

*Check.* The two routes agree: $4.6 - 3.4 = 1.2$ ✓. And the gap straddles the Nyquist frequency 4 kHz, as it must — the cutoff sits in the middle of the gap. (This is real telephony: an 8 kHz rate with a 3.4 kHz band, and only 1.2 kHz of transition room, which is why phone audio sounds thin — the filter has to be aggressive.)

**P2** (a) The Nyquist rate is $2\omega_M = 2\pi(10000)$ rad/s. Since $2\pi(12000) > 2\pi(10000)$, we have $\omega_s > 2\omega_M$ and the theorem applies with room to spare. ✓

(b) Copies are centered at integer multiples of $\omega_s$:

$$k=-1:\ -2\pi(12000), \qquad k=0:\ 0, \qquad k=+1:\ +2\pi(12000)\ \text{rad/s}.$$

Each copy spans $\pm 2\pi(5000)$ about its center, so the $k=1$ copy occupies $2\pi[7000,\,17000]$ rad/s and the baseband copy occupies $2\pi[-5000,\,5000]$ — disjoint. ✓

(c) The cutoff must clear the top of the baseband copy and stay below the bottom of the next one:

$$\omega_M < \omega_c < \omega_s - \omega_M \quad\Longrightarrow\quad 2\pi(5000) < \omega_c < 2\pi(7000)\ \text{rad/s},$$

i.e. any cutoff between 5 kHz and 7 kHz. The filter's passband gain must be $T$ to cancel the $1/T$ in the replication formula:

$$T = \frac{1}{f_s} = \frac{1}{12000}\ \text{s} \approx 83.3\ \mu\text{s}.$$

*Check.* The interval is centered on $\omega_s/2 = 2\pi(6000)$, the Nyquist frequency — the natural "split the difference" choice ✓. Note the allowed window has width $\omega_s - 2\omega_M = 2\pi(2000)$: exactly the guard band, again.

**P3** With $\omega_s = 2\omega_M$ the sampling period is

$$T = \frac{2\pi}{\omega_s} = \frac{2\pi}{2\omega_M} = \frac{\pi}{\omega_M}.$$

The samples are therefore

$$x(nT) = \sin\!\left(\omega_M \cdot \frac{n\pi}{\omega_M}\right) = \sin(n\pi) = 0 \quad \text{for every integer } n.$$

**Every sample is zero.** The sampler cannot distinguish $\sin(\omega_M t)$ — a full-amplitude sinusoid — from the identically-zero signal. Reconstruction returns $x(t) = 0$, and a whole component of the signal has vanished without a trace.

The general statement: sampling $A\cos(\omega_M t + \phi)$ at exactly $\omega_s = 2\omega_M$ gives

$$x(nT) = A\cos(n\pi + \phi) = A(-1)^n\cos\phi,$$

so the samples depend only on the product $A\cos\phi$. Amplitude and phase are collapsed into one number and cannot be separated; $\phi = \pi/2$ (the sine case) kills the signal outright.

*Spectrally:* the tone at $\omega_M$ has impulses at $\pm\omega_M$. Replicating at spacing $\omega_s = 2\omega_M$ puts the copy of the $-\omega_M$ impulse at $-\omega_M + \omega_s = +\omega_M$ — landing exactly on the original. The two impulses coincide and add, and for the sine (whose impulses carry opposite signs, $\pm j\pi$) they cancel to nothing. This is the boundary case the strict inequality exists to exclude: at $\omega_s = 2\omega_M$ the copies touch, and content sitting precisely at the band edge is where they touch. ✓

</details>

## Flashback

**From Lesson 2.3 (The continuous-time Fourier transform):** Find the Fourier transform $X(j\omega)$ of $x(t) = e^{-2t}u(t)$ and its magnitude $|X(j\omega)|$. At what frequency $\omega$ has the magnitude fallen to one tenth of its value at $\omega = 0$? Then say what this signal implies for sampling.

<details>
<summary>Solution</summary>

Apply the definition; $u(t)$ clips the integral to $t \ge 0$:

$$X(j\omega) = \int_{-\infty}^{\infty} e^{-2t}u(t)\,e^{-j\omega t}\,dt = \int_{0}^{\infty} e^{-(2+j\omega)t}\,dt = \left[\frac{-1}{2+j\omega}e^{-(2+j\omega)t}\right]_0^\infty = \frac{1}{2+j\omega},$$

the upper limit vanishing because $|e^{-(2+j\omega)t}| = e^{-2t} \to 0$. The magnitude is

$$|X(j\omega)| = \frac{1}{|2+j\omega|} = \frac{1}{\sqrt{4+\omega^2}}, \qquad |X(0)| = \tfrac12.$$

Setting $|X(j\omega)| = \tfrac{1}{10}\cdot\tfrac12 = \tfrac{1}{20}$:

$$\frac{1}{\sqrt{4+\omega^2}} = \frac{1}{20} \;\Longrightarrow\; 4+\omega^2 = 400 \;\Longrightarrow\; \omega = \sqrt{396} \approx 19.9\ \text{rad/s}.$$

**And for sampling:** $|X(j\omega)|$ is never zero — it decays like $1/\omega$ but has content at *every* frequency. This signal is **not band-limited**, so strictly speaking no sampling rate reconstructs it exactly, which is exactly the caveat from this lesson. What you do instead is pick a tolerance: at 19.9 rad/s the spectrum is already 20 dB down, so sampling at, say, $\omega_s = 200$ rad/s leaves the overlapping tails far below anything that matters. Every real converter is making this judgement call.

*Check.* $X(j\omega) = 1/(2+j\omega)$ has a pole at $s = -2$, matching the decay rate of $e^{-2t}$, and $X(0) = 1/2 = \int_0^\infty e^{-2t}dt$ ✓ — the DC value is the signal's total area.

</details>

## Connections

- **Backward:** this is [1.2](01-02-elementary-signals.md)'s impulse and sifting property doing real work — the sampler *is* an impulse train — combined with [2.3](02-03-continuous-time-fourier-transform.md)'s multiplication-becomes-convolution property. The mathematical version, proved from the Dirac comb's self-duality, is [`fourier-analysis` 4.1](../../fourier-analysis/lessons/04-01-sampling-nyquist.md).
- **Forward:** [3.2](03-02-aliasing-and-reconstruction.md) is this picture with the copies overlapping — it computes exactly which frequency a tone folds to and builds the sinc reconstruction. The $\omega_s$-periodicity noticed above becomes the $2\pi$-periodicity of the DTFT in [3.3](03-03-discrete-time-fourier-transform.md), and the "gap between copies" reappears as the guard band in filter design in [4.4](04-04-filter-design-basics.md).
- **Sideways:** the guard-band argument of Example 2 is a filter *specification*, and building a filter that is flat to 20 kHz and dead by 24 kHz is precisely the analog design problem of [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md) and, later, [4.4](04-04-filter-design-basics.md). The same replication picture, run in reverse — deliberately shifting a spectrum to a new center frequency — is modulation, [4.5](04-05-modulation.md), and the reason many signals can share one channel in `communications`.
