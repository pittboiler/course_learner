# Communication Systems · Lesson 1.1: Signals and spectra, recalled

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [`signals-systems` 2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md), [`fourier-analysis` 1.4](../../fourier-analysis/lessons/01-04-mean-square-parseval.md) · Unlocks: [1.2 Random processes and the PSD](01-02-random-processes-and-psd.md), [1.4 Amplitude modulation](01-04-amplitude-modulation-dsb-am.md)

## Why this matters

Every argument in this course is an argument about two numbers: **how much bandwidth does this signal occupy**, and **how much power does it carry**. Bandwidth is what you rent from a regulator; power is what you pay the electric company and the battery. Modulation schemes, coding schemes, and the Shannon limit itself are all statements about trading one against the other.

Both numbers live in the frequency domain. So before anything else, this lesson makes you fluent at looking at a signal and reading its spectrum's *edges* (bandwidth) and its spectrum's *area* (power) — and at the three transform properties that will do 80% of the algebra for the next six lessons.

## The idea

You already know the Fourier transform as a change of basis: write a signal as a recipe of sinusoids instead of a list of values in time. This course cares about two summary statistics of that recipe.

**Where the recipe stops** is the bandwidth. A signal built only from sinusoids below 4 kHz cannot wiggle faster than that, and any channel that passes 0–4 kHz will carry it untouched. Bandwidth is therefore the width of the *lane* the signal needs on the frequency highway (the counting conventions are on the card: [bandwidth conventions](../reference.md#bandwidth-conventions)).

**How big the recipe's ingredients are** is the power. Parseval says you can total up a signal's energy either by squaring it in time or by squaring its spectrum in frequency — the same number, computed from either side. That is why "signal-to-noise ratio" can be read off a picture of two spectra stacked on top of each other, and it is the reason the whole course can be done with pictures of spectra.

There is one split to get straight early, because it decides *which* of those two things you compute. Some signals — a single pulse, a radar chirp, a lightning strike — die away, so their total energy is finite and their average power is zero. Others — a carrier, a music stream, thermal noise — run forever, so their energy is infinite and the meaningful number is average power per second. Pulses get energy; carriers and noise get power. Mixing these up is the single most common bookkeeping error in link budgets.

## The formal version

**Fourier transform pair.** For a signal $g(t)$ (volts, say),

$$G(f) = \int_{-\infty}^{\infty} g(t)\,e^{-j2\pi f t}\,dt, \qquad g(t) = \int_{-\infty}^{\infty} G(f)\,e^{+j2\pi f t}\,df .$$

Here $f$ is frequency in hertz and $j=\sqrt{-1}$. *In words: $G(f)$ is the complex amplitude of the sinusoid at frequency $f$ in the recipe for $g$.*

We use the **hertz convention** ($f$, not $\omega$) throughout this course, because bandwidth is quoted in hertz and the $2\pi$'s cancel out of every formula we care about. `signals-systems` used $\omega$; the translation is $\omega = 2\pi f$.

**Energy signals.** $g$ is an *energy signal* if

$$E = \int_{-\infty}^{\infty} |g(t)|^2\,dt < \infty .$$

**Rayleigh's energy theorem (Parseval for transforms).**

$$E = \int_{-\infty}^{\infty} |g(t)|^2\,dt = \int_{-\infty}^{\infty} |G(f)|^2\,df .$$

*In words: total energy is the area under the curve $|G(f)|^2$, so that curve tells you how the energy is distributed across frequency.* It has a name: the **energy spectral density** $\Psi_g(f) = |G(f)|^2$, in joules per hertz.

**Power signals.** $g$ is a *power signal* if its energy is infinite but

$$P = \lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}|g(t)|^2\,dt$$

is finite and nonzero. Carriers, data streams, and noise are all power signals. For a periodic signal with Fourier coefficients $c_k$, Parseval reads

$$P = \frac{1}{T_0}\int_{T_0}|g(t)|^2 dt = \sum_{k=-\infty}^{\infty}|c_k|^2 .$$

*In words: the average power of a periodic signal is the sum of the powers of its harmonics — they do not interfere, because distinct harmonics are orthogonal.*

**The three properties that do all the work.** Let $g(t)\leftrightarrow G(f)$.

| Property | Time | Frequency |
|---|---|---|
| Time shift | $g(t-t_0)$ | $G(f)\,e^{-j2\pi f t_0}$ |
| **Frequency shift** | $g(t)\,e^{+j2\pi f_c t}$ | $G(f-f_c)$ |
| Convolution / product | $g_1 * g_2$ / $g_1 g_2$ | $G_1G_2$ / $G_1 * G_2$ |

The middle row is the whole of modulation: multiplying by a complex exponential *slides the spectrum sideways*. Since a real cosine is $\cos(2\pi f_c t) = \tfrac12 e^{j2\pi f_ct} + \tfrac12 e^{-j2\pi f_ct}$, multiplying by a cosine slides *two half-sized copies*, one to $+f_c$ and one to $-f_c$:

$$g(t)\cos(2\pi f_c t) \;\longleftrightarrow\; \tfrac12 G(f-f_c) + \tfrac12 G(f+f_c).$$

Memorize that line. Lessons 1.4, 1.5, and 2.3 are consequences of it.

**Bandwidth is a convention, not a theorem.** Real signals are not strictly band-limited, so "bandwidth" always means *one of* the following, and you must say which:

| Measure | Definition | Used for |
|---|---|---|
| Null-to-null | width of the main spectral lobe | rectangular pulses, sinc spectra |
| 3-dB (half-power) | where $|G(f)|^2$ falls to half its peak | filters, amplifiers |
| Absolute | the exact support, when it exists | idealized analysis |
| 99% power | band containing 99% of the total power | regulators (FCC occupied bandwidth) |

For a **real** signal, $G(-f)=G^*(f)$: the negative-frequency half is redundant. So a real baseband signal with content out to $W$ hertz has a spectrum spanning $[-W, W]$, and we call its bandwidth $W$, not $2W$. But a *bandpass* signal centered at $f_c$ occupies $[f_c-W, f_c+W]$ **and** its mirror image, and its bandwidth is the width of one of those blocks, $2W$. Baseband counts one-sided; bandpass counts the whole block. Getting this wrong doubles or halves every answer in Module 1.

## Picture

![Two spectra. Top: a baseband message spectrum M(f), a triangle spanning minus W to plus W, labelled bandwidth W. Bottom: the same triangle halved in height and copied to plus and minus f_c, the bandpass version, with the block from f_c minus W to f_c plus W labelled transmission bandwidth 2W.](assets/01-01-fig1.svg)

The top panel is a message: real, so symmetric about zero, with bandwidth $W$. The bottom is what a cosine multiplication does to it — two half-height copies slid to $\pm f_c$. Nothing about the shape changed; the transform just moved. Note the arithmetic that the picture forces on you: the message needed $W$ hertz, the transmitted signal needs $2W$. That factor of two is the price of amplitude modulation, and [1.5](01-05-ssb-vsb-multiplexing.md) is entirely about clawing it back.

## Worked examples

**Example 1 (a rectangular pulse: energy, spectrum, bandwidth).** Let $g(t) = A$ for $|t|\le T/2$ and $0$ otherwise.

Energy, straight from the definition:

$$E = \int_{-T/2}^{T/2} A^2\,dt = A^2T \quad\text{joules (into 1 ohm).}$$

Spectrum:

$$G(f) = \int_{-T/2}^{T/2} A e^{-j2\pi ft}dt = A\,\frac{e^{j\pi fT}-e^{-j\pi fT}}{j2\pi f} = AT\,\frac{\sin(\pi f T)}{\pi f T} = AT\operatorname{sinc}(fT),$$

using the **normalized** sinc, $\operatorname{sinc}(x)=\sin(\pi x)/(\pi x)$. (This course uses the normalized version, because its zeros land on integers — convenient when the integers are multiples of a symbol rate. `signals-systems` used the unnormalized one; check which you are holding.)

The first null is at $fT=1$, i.e. $f=1/T$, so the **null-to-null bandwidth is $1/T$ hertz** (counting one-sided, baseband). Shorter pulse, wider spectrum — the reciprocal-spreading fact that will set the bit rate ceiling in [2.4](02-04-isi-nyquist-criterion.md).

*Check with Rayleigh:* $\int (AT)^2\operatorname{sinc}^2(fT)df = A^2T^2\cdot(1/T)=A^2T$ ✓, using $\int\operatorname{sinc}^2(x)dx = 1$.

**Example 2 (a modulated tone: reading power off the spectrum).** A transmitter emits

$$s(t) = 10\cos(2\pi\cdot 10^6 t) + 4\cos\big(2\pi(10^6+3000)t\big) + 4\cos\big(2\pi(10^6-3000)t\big)$$

volts across 1 ohm. What is its power and its bandwidth?

Each cosine of amplitude $A$ is a power signal with average power $A^2/2$ (its two spectral lines each carry $A^2/4$). The three cosines are at distinct frequencies, hence orthogonal, so powers add with no cross terms:

$$P = \frac{10^2}{2} + \frac{4^2}{2} + \frac{4^2}{2} = 50 + 8 + 8 = 66\ \text{W}.$$

Spectral content sits at $10^6$ and $10^6\pm 3000$ Hz (and their negatives), so the occupied block runs from $999\,997$ to $1\,003\,000$ Hz:

$$B = 2\times 3000 = 6\ \text{kHz}.$$

This is exactly a conventional-AM signal carrying a 3 kHz tone, and the numbers already tell the story that [1.4](01-04-amplitude-modulation-dsb-am.md) will make precise: 50 of the 66 watts — 76% — sit in the carrier, which conveys **no information at all**. It is there only to make the receiver cheap.

## Watch out

- **You might think bandwidth is always "the width of the spectrum."** For a baseband real signal we quote the *one-sided* width $W$ even though the spectrum spans $[-W,W]$; for a bandpass signal we quote the *full* width $2W$ of one block. The convention differs because the object differs. Always ask "baseband or bandpass?" before quoting a number.
- **You might think an energy signal and a power signal are two ways of describing the same thing.** They are mutually exclusive. A finite-energy signal has *zero* average power; a finite-power signal has *infinite* energy. Applying $E=\int|g|^2dt$ to a carrier gives $\infty$, which is not a bug — it is the definition telling you that you asked the wrong question.
- **You might think multiplying by $\cos(2\pi f_ct)$ shifts the spectrum to $f_c$.** It creates *two* copies, at $+f_c$ and $-f_c$, each **halved** in amplitude. Dropping the factor of $\tfrac12$ is the most common algebra slip in Module 1; dropping the negative-frequency copy makes the signal complex, which no antenna can radiate.

## One-liner

> Bandwidth is where the spectrum's edges are, power is the area under its square, and multiplying by a cosine slides two half-size copies of the whole picture out to $\pm f_c$.

## Problems

**P1 (🟢)** A message $m(t)$ is band-limited to 5 kHz and has average power 2 W. It is multiplied by $\cos(2\pi\cdot 800{,}000\,t)$. (a) Sketch (describe) where the resulting spectrum lives. (b) What is the transmission bandwidth? (c) What is the average power of the product? (Assume $m$ has no content at DC, and use $\overline{\cos^2}=\tfrac12$.)

**P2 (🟡)** A pulse is $g(t)=A e^{-t/T}u(t)$ ($u$ = unit step, $T>0$). (a) Find $E$ directly. (b) Find $G(f)$ and hence the energy spectral density. (c) Find the 3-dB bandwidth. (d) Verify that the fraction of energy inside the 3-dB band is $1/2$ — or, if it isn't, say what the true fraction is.

**P3 (🔴)** A signal has the two-sided spectrum $G(f)=1$ for $99 \le |f| \le 101$ MHz, zero elsewhere. (a) Give its bandwidth under the bandpass convention. (b) Is it an energy or a power signal, and what is the relevant total? (c) Now the signal is multiplied by $\cos(2\pi\cdot 100\ \text{MHz}\cdot t)$. Describe the resulting spectrum and explain why a low-pass filter of bandwidth 1 MHz recovers something of bandwidth 1 MHz rather than 2 MHz.

<details>
<summary>Solutions</summary>

**P1** (a) By the frequency-shift property, $m(t)\cos(2\pi f_ct)\leftrightarrow \tfrac12M(f-f_c)+\tfrac12 M(f+f_c)$ with $f_c=800$ kHz. So there are two half-height copies of $M$, one centered at $+800$ kHz occupying $[795,805]$ kHz, one centered at $-800$ kHz occupying $[-805,-795]$ kHz.

(b) Bandpass convention: the width of one block, $B = 2W = 2\times 5 = 10$ kHz.

(c) $s(t)^2 = m^2(t)\cos^2(2\pi f_ct) = \tfrac12 m^2(t) + \tfrac12 m^2(t)\cos(4\pi f_c t)$. Time-averaging, the second term oscillates at $1.6$ MHz — far above the 5 kHz content of $m^2$ — so it averages to zero. Hence

$$P_s = \tfrac12 P_m = \tfrac12(2) = 1\ \text{W}.$$

The general rule to remember: **multiplying a message by a cosine halves its power**, provided $f_c$ is well above the message band.

**P2** (a) $E = \int_0^\infty A^2e^{-2t/T}dt = A^2\cdot\frac{T}{2}$.

(b) $G(f) = \int_0^\infty Ae^{-t/T}e^{-j2\pi ft}dt = \dfrac{A}{1/T + j2\pi f} = \dfrac{AT}{1+j2\pi fT}$. So

$$\Psi_g(f) = |G(f)|^2 = \frac{A^2T^2}{1+(2\pi fT)^2}.$$

(c) Peak is at $f=0$: $\Psi_g(0)=A^2T^2$. Half-power when $(2\pi fT)^2 = 1$, i.e.

$$f_{3\text{dB}} = \frac{1}{2\pi T}\ \text{Hz}.$$

(d) Energy inside $[-f_{3\rm dB}, f_{3\rm dB}]$:

$$\int_{-1/2\pi T}^{1/2\pi T}\frac{A^2T^2\,df}{1+(2\pi fT)^2} = \frac{A^2T}{2\pi}\Big[\arctan(2\pi fT)\Big]_{-1/2\pi T}^{1/2\pi T}\cdot 2\pi\cdot\frac{1}{2\pi}.$$

Substituting $x = 2\pi f T$, $df = dx/(2\pi T)$:

$$= \frac{A^2T^2}{2\pi T}\int_{-1}^{1}\frac{dx}{1+x^2} = \frac{A^2T}{2\pi}\cdot\big[\arctan x\big]_{-1}^{1} = \frac{A^2T}{2\pi}\cdot\frac{\pi}{2} = \frac{A^2T}{4}.$$

Compare to the total $A^2T/2$: the fraction is exactly $\tfrac12$. So in this case it *is* one half — but note **that is a coincidence of the one-pole shape**, not a general rule. "3-dB bandwidth" is defined by where the curve crosses half-height, and says nothing in general about how much energy is enclosed. (For the rectangular pulse of Example 1, the null-to-null band holds about 90% of the energy, not 50%.)

**P3** (a) One block runs $99$–$101$ MHz, so $B = 2$ MHz. (Center $f_c = 100$ MHz, so it is a bandpass signal of half-width $W=1$ MHz.)

(b) $\int|G(f)|^2df = 2\times(2\ \text{MHz})\times 1 = 4\times 10^6$, finite. Finite $\int|G|^2df$ means finite energy, so it is an **energy signal** with $E = 4\times10^6$ (in whatever units $G$ carries squared, times hertz).

(c) Multiplication by the cosine produces $\tfrac12 G(f-f_c)+\tfrac12G(f+f_c)$. The $+f_c$ shift takes the block at $[-101,-99]$ up to $[-1,+1]$ MHz and the block at $[99,101]$ up to $[199,201]$ MHz; the $-f_c$ shift does the mirror image. So the result is a half-height block at baseband $[-1,1]$ MHz (the two down-converted halves land on top of each other and add, restoring full height there), plus junk at $\pm 200$ MHz.

The low-pass filter keeps only $[-1,1]$ MHz. That is a **baseband** signal, and baseband bandwidth is quoted one-sided: $W = 1$ MHz. The 2 MHz was the bandpass count of a block that included both an upper and a lower sideband; downconversion folds them onto each other, and the information was only ever 1 MHz wide. This is coherent detection, and it is [1.4](01-04-amplitude-modulation-dsb-am.md) in miniature.

</details>

## Flashback

*(First lesson of the course — no flashback yet. Retrieval practice starts in [1.3](01-03-noise-snr-filtering.md).)*

## Connections

- **Backward:** this is [`signals-systems` 2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md) re-expressed in hertz, plus Parseval from [`fourier-analysis` 1.4](../../fourier-analysis/lessons/01-04-mean-square-parseval.md). The only genuinely new content is the energy/power split and the bandwidth conventions.
- **Forward:** [1.2](01-02-random-processes-and-psd.md) replaces $|G(f)|^2$ for a deterministic signal with the *power spectral density* of a random one — the same picture, but for signals you cannot write down.
- **Sideways:** the frequency-shift property is exactly the "sliding a spectrum" move you will use in [2.1](02-01-sampling-theorem-aliasing.md) for spectral replication and in [4.5](04-05-multiplexing-multiple-access.md) for FDMA. It is one property doing three jobs.
