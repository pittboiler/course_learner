# Communication Systems · Lesson 1.2: Random processes and the PSD

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [1.1 Signals and spectra, recalled](01-01-signals-and-spectra-recalled.md), [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) · Unlocks: [1.3 Noise, SNR and filtering](01-03-noise-snr-filtering.md), [3.1 Signal space and the matched filter](03-01-signal-space-matched-filter.md)

## Why this matters

Everything interesting in a communication system is random. Noise is random by nature. But so is the *message*: if you knew what the transmitter was going to send, you wouldn't need the link. A signal you can write down carries no information, which means the Fourier transform of [1.1](01-01-signals-and-spectra-recalled.md) — which needs a formula for $g(t)$ — cannot be applied to the things this course is actually about.

This lesson supplies the replacement. You give up on knowing the waveform and settle for knowing its **statistics**, and it turns out that one statistic — the autocorrelation — carries a complete spectral description anyway. The result, the [power spectral density](../reference.md#power-spectral-density), is the object every SNR calculation, every matched filter, and the Shannon capacity formula itself are written in terms of.

## The idea

A **random process** is a random *function*, not a random number. Picture an infinite warehouse of oscilloscope traces: every time you switch the system on you get a different trace, but they all look statistically alike. Freeze time at $t=t_1$ and read the voltage across every trace in the warehouse: you get a random variable $X(t_1)$. That's the whole definition — a family of random variables, one per instant.

Two questions immediately matter.

**Do the statistics drift?** If the process looks the same today as yesterday — the mean voltage doesn't wander, and the correlation between two instants depends only on the *gap* between them, not on where they sit — the process is **stationary**. Thermal noise is; a signal being switched on and off isn't.

**Can you learn the warehouse from one trace?** Averaging over the warehouse (an "ensemble average") is a fiction: you have one receiver, one trace. If the long-run time average along a single trace equals the ensemble average, the process is **ergodic**, and one long observation tells you everything. Almost every process in this course is assumed ergodic — that assumption is what makes measurement possible at all.

Now the key move. You cannot Fourier transform $X(t)$ (it never dies away, and it's different every run). But you *can* transform its **autocorrelation** $R_X(\tau)$ — the average product of the process with a copy of itself delayed by $\tau$. And the astonishing fact, the Wiener–Khinchin theorem, is that this transform *is* the power spectrum: it tells you exactly how many watts per hertz the process holds at each frequency.

The intuition for why: $R_X(\tau)$ measures how long the process remembers. A process that decorrelates fast — $R_X$ narrow — must be wiggling fast, hence broadband. A process that stays correlated for a long time is slow, hence narrowband. Narrow in $\tau$ ↔ wide in $f$: it is the same reciprocal-spreading rule as [1.1](01-01-signals-and-spectra-recalled.md), applied to memory instead of to a pulse.

## The formal version

**Random process.** $X(t)$ is a collection of random variables indexed by time. A single realization $x(t)$ is a **sample function**.

**Mean and autocorrelation.**

$$\mu_X(t) = \mathbb{E}[X(t)], \qquad R_X(t_1,t_2) = \mathbb{E}[X(t_1)X(t_2)].$$

The expectation is over the ensemble — average across the warehouse at fixed times.

**Wide-sense stationary (WSS).** $X$ is WSS if

$$\mu_X(t) = \mu_X \ \text{(constant)}, \qquad R_X(t_1,t_2) = R_X(t_2-t_1) =: R_X(\tau).$$

*In words: the mean doesn't drift, and how correlated two samples are depends only on how far apart they are.* This weaker condition (only the first two moments are required to be time-invariant) is all any calculation in this course needs, which is why it, not full stationarity, is the working definition.

**Properties of $R_X(\tau)$** for a WSS process — worth knowing because they are free answer-checks:

- $R_X(0) = \mathbb{E}[X^2(t)] = $ **average power** of the process (watts into 1 ohm).
- $R_X(-\tau) = R_X(\tau)$ — even.
- $|R_X(\tau)| \le R_X(0)$ — the peak is at the origin. A process is never more correlated with a delayed copy than with itself.
- If $X$ has no periodic component, $R_X(\tau)\to\mu_X^2$ as $\tau\to\infty$ — far-apart samples become independent, and the product tends to the product of the means.

**Ergodicity.** $X$ is ergodic in the mean and autocorrelation if

$$\lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}x(t)\,dt = \mu_X, \qquad \lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}x(t)x(t+\tau)\,dt = R_X(\tau)$$

for (almost) every sample function. *In words: time averages along one trace equal ensemble averages across the warehouse.* Ergodic ⟹ stationary; the converse is false.

**Power spectral density and Wiener–Khinchin.** For a WSS process, define

$$\boxed{\;S_X(f) = \int_{-\infty}^{\infty} R_X(\tau)\,e^{-j2\pi f\tau}\,d\tau, \qquad R_X(\tau) = \int_{-\infty}^{\infty} S_X(f)\,e^{+j2\pi f\tau}\,df.\;}$$

$S_X(f)$ is the **power spectral density (PSD)**, in watts per hertz. *In words: the PSD and the autocorrelation are a Fourier pair — the frequency content of a random signal is the transform of its memory.*

Setting $\tau=0$ in the inverse transform gives the identity that makes the PSD useful:

$$P_X = R_X(0) = \int_{-\infty}^{\infty} S_X(f)\,df .$$

*In words: total average power is the area under the PSD — so the area under any slice of it is the power in that band.* That sentence is the entire reason this object exists, and every SNR you compute for the rest of the course is a ratio of two such areas.

**Facts about $S_X(f)$:** it is real, even (for real $X$), and **non-negative everywhere** — the last one because a negative power in some band is meaningless, and it is a genuine constraint (not every even function is a valid PSD).

## Picture

![Three autocorrelation-PSD pairs side by side. Left column shows R(tau): a narrow spike, a medium-width bump, and a broad slow bump. Right column shows the corresponding S(f): a broad flat band, a medium band, and a narrow peak. Arrows emphasise that narrow in tau maps to wide in f.](assets/01-02-fig1.svg)

Three processes, each shown as its autocorrelation (left) and its PSD (right). Read the rows as one statement: **short memory ⇔ wide spectrum**. The top row is the limiting case — a process that forgets instantly, whose spectrum is flat over all frequencies. That is white noise, and it is the subject of [1.3](01-03-noise-snr-filtering.md).

## Worked examples

**Example 1 (a random-phase carrier — the workhorse).** Let

$$X(t) = A\cos(2\pi f_c t + \Theta), \qquad \Theta \sim \text{Uniform}[0, 2\pi),$$

with $A, f_c$ fixed. This models "a carrier is present but the receiver doesn't know its phase" — the single most common model in the subject.

*Mean:* $\mathbb{E}[X(t)] = A\,\mathbb{E}[\cos(2\pi f_ct+\Theta)] = A\cdot\frac{1}{2\pi}\int_0^{2\pi}\cos(2\pi f_ct+\theta)\,d\theta = 0$, for every $t$. Constant ✓.

*Autocorrelation:*

$$R_X(t,t+\tau) = A^2\,\mathbb{E}\big[\cos(2\pi f_ct+\Theta)\cos(2\pi f_c(t+\tau)+\Theta)\big].$$

Use $\cos\alpha\cos\beta = \tfrac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$:

$$= \frac{A^2}{2}\mathbb{E}\big[\cos(2\pi f_c\tau)\big] + \frac{A^2}{2}\mathbb{E}\big[\cos(2\pi f_c(2t+\tau)+2\Theta)\big].$$

The first term has no randomness left. The second averages to zero, because $2\Theta$ is still uniform over a whole number of cycles. So

$$R_X(\tau) = \frac{A^2}{2}\cos(2\pi f_c\tau),$$

which depends only on $\tau$. Both conditions hold: **the random-phase carrier is WSS.** (Note that without the random phase it would *not* be — $\mathbb{E}[X(t)]$ would be a cosine of $t$. Uniform phase is exactly what buys stationarity.)

*Power:* $R_X(0)=A^2/2$ ✓ — the familiar "amplitude squared over two."

*PSD:* transform the cosine, remembering $\cos(2\pi f_c\tau)\leftrightarrow \tfrac12[\delta(f-f_c)+\delta(f+f_c)]$:

$$S_X(f) = \frac{A^2}{4}\big[\delta(f-f_c)+\delta(f+f_c)\big].$$

Two impulses, each of weight $A^2/4$, totalling $A^2/2$ ✓. A pure tone is infinitely narrowband, as it must be: it never forgets, so $R_X$ never decays.

**Example 2 (a random binary wave — the shape of a data spectrum).** Bits $\pm A$ volts, each lasting $T$ seconds, equally likely and independent, with the bit boundaries offset by a delay uniform on $[0,T)$ (again: the random offset is what makes it stationary).

*Autocorrelation:* $\mathbb{E}[X(t)X(t+\tau)]$ is $A^2$ if the two instants land in the same bit interval, and $0$ if they land in different ones (independent, zero-mean bits, so the product averages to zero). For $|\tau| < T$, the probability that a randomly-offset boundary does *not* fall between $t$ and $t+\tau$ is $1-|\tau|/T$. For $|\tau|\ge T$ a boundary always intervenes. Hence

$$R_X(\tau) = \begin{cases} A^2\left(1 - \dfrac{|\tau|}{T}\right), & |\tau| < T,\\[4pt] 0, & |\tau|\ge T.\end{cases}$$

A triangle of half-width $T$ — the process forgets completely after one bit.

*PSD:* the transform of a triangle of base $2T$ and height $A^2$ is

$$S_X(f) = A^2 T\operatorname{sinc}^2(fT).$$

Read the engineering off it. The main lobe runs to the first null at $f=1/T = R_b$ (the bit rate), so a raw binary stream at $R_b$ bits per second needs, null-to-null, about $R_b$ hertz of baseband bandwidth. Faster bits ⟹ shorter memory ⟹ wider spectrum, exactly as the picture promised. And $\operatorname{sinc}^2$ decays only as $1/f^2$, so the tails are fat — the reason [2.3](02-03-line-codes-baseband-pulses.md) and [2.4](02-04-isi-nyquist-criterion.md) spend their time shaping pulses rather than sending bare rectangles.

*Check:* $\int S_X(f)df = A^2T\cdot(1/T) = A^2 = R_X(0)$ ✓ — the power is $A^2$, as it must be for a signal always at $\pm A$.

## Watch out

- **You might think the PSD is "the Fourier transform of the signal, squared."** It is not, and for a random process that object doesn't exist. The PSD is the transform of the *autocorrelation*. All phase information is destroyed on the way — infinitely many different-looking processes share one PSD. That loss is exactly why the PSD is finite and well-defined where $|X(f)|^2$ isn't.
- **You might think stationary and ergodic mean the same thing.** Stationary means the statistics don't move with time; ergodic means one sample function is representative of the ensemble. A process that picks a constant voltage $V\sim\mathcal{N}(0,1)$ once at switch-on and holds it forever is perfectly stationary and wildly non-ergodic — its time average is $V$, not 0.
- **You might think a PSD can dip negative if the autocorrelation is oddly shaped.** $S_X(f)\ge 0$ always. If your algebra produces a negative PSD, the error is upstream — usually a sign slip or an "autocorrelation" that isn't one.
- **You might think $R_X(0)$ is the variance.** It is the **mean square**, $\mathbb{E}[X^2]$, which equals the variance only when $\mu_X=0$. In general $\sigma_X^2 = R_X(0)-\mu_X^2$. A DC offset shows up as an impulse at $f=0$ in the PSD; it carries power but no information.

## One-liner

> Give up on the waveform and keep its memory: the autocorrelation's Fourier transform is the power spectral density, whose area over a band is the watts in that band.

## Problems

**P1 (🟢)** A WSS process has $R_X(\tau) = 9e^{-2|\tau|} + 4$. (a) What is the process's average power? (b) Its mean (up to sign)? (c) Its variance? (d) Sketch (describe) the PSD, naming the two components. Use the pair $e^{-a|\tau|}\leftrightarrow \dfrac{2a}{a^2+(2\pi f)^2}$.

**P2 (🟡)** Two independent zero-mean WSS processes $X$ and $Y$ have PSDs $S_X(f)$ and $S_Y(f)$. Let $Z(t) = X(t)+Y(t)$. (a) Find $R_Z(\tau)$ and $S_Z(f)$. (b) Now let $W(t) = X(t) + X(t-T)$ for a fixed delay $T$. Find $R_W(\tau)$ and show $S_W(f) = 4S_X(f)\cos^2(\pi f T)$. (c) Interpret the $\cos^2$ factor physically: at which frequencies does the delayed sum cancel, and why does that make sense?

**P3 (🔴)** A random binary wave as in Example 2, but with unequal symbol probabilities: the bit is $+A$ with probability $p$ and $-A$ with probability $1-p$. (a) Find the mean of the process. (b) Argue that the autocorrelation becomes $R_X(\tau) = \mu^2 + (A^2-\mu^2)\Lambda(\tau/T)$, where $\Lambda$ is the unit triangle and $\mu$ is your answer to (a). (c) What new feature appears in the PSD when $p\ne\tfrac12$, and why is it bad news for a line code? (This is the point of [2.3](02-03-line-codes-baseband-pulses.md).)

<details>
<summary>Solutions</summary>

**P1** (a) Average power is $R_X(0) = 9e^0 + 4 = 13$ W.

(b) As $\tau\to\infty$, $R_X\to 4$, and for a process with no periodic component $R_X(\infty)=\mu_X^2$. So $\mu_X = \pm 2$ (the autocorrelation cannot see the sign).

(c) $\sigma_X^2 = R_X(0)-\mu_X^2 = 13 - 4 = 9$ W. (Consistent: the exponential term carries the fluctuating power, the constant carries the DC.)

(d) Transform term by term. With $a=2$:

$$9e^{-2|\tau|} \leftrightarrow 9\cdot\frac{4}{4+(2\pi f)^2} = \frac{36}{4+4\pi^2f^2}, \qquad 4 \leftrightarrow 4\delta(f).$$

$$S_X(f) = \frac{36}{4+4\pi^2 f^2} + 4\delta(f).$$

So: a **Lorentzian** (low-pass) continuous part holding the 9 W of fluctuation, plus an **impulse at DC** of weight 4 holding the mean's power. Check the area: $\int\frac{36\,df}{4+4\pi^2f^2} = 9\int\frac{4\,df}{4+4\pi^2f^2} = 9$ (the standard pair integrates to $e^{-a\cdot 0}=1$), plus 4 from the impulse, totalling 13 ✓.

**P2** (a) $R_Z(\tau) = \mathbb{E}[(X_t+Y_t)(X_{t+\tau}+Y_{t+\tau})] = R_X(\tau) + R_Y(\tau) + R_{XY}(\tau) + R_{YX}(\tau)$. Independent and zero-mean makes the cross terms $\mathbb{E}[X]\mathbb{E}[Y]=0$, so

$$R_Z(\tau)=R_X(\tau)+R_Y(\tau), \qquad S_Z(f)=S_X(f)+S_Y(f).$$

Independent zero-mean signals add their powers, band by band. This is why "signal plus noise" can be analyzed as two stacked PSDs.

(b) $W(t)=X(t)+X(t-T)$:

$$R_W(\tau)=\mathbb{E}\big[(X_t + X_{t-T})(X_{t+\tau}+X_{t+\tau-T})\big] = 2R_X(\tau) + R_X(\tau+T) + R_X(\tau-T).$$

Transform, using the time-shift property $R_X(\tau\mp T)\leftrightarrow S_X(f)e^{\mp j2\pi fT}$:

$$S_W(f) = S_X(f)\big[2 + e^{j2\pi fT} + e^{-j2\pi fT}\big] = S_X(f)\big[2+2\cos(2\pi fT)\big] = 4S_X(f)\cos^2(\pi fT),$$

using $1+\cos 2\theta = 2\cos^2\theta$ with $\theta = \pi f T$. ✓

(c) The factor vanishes when $\pi f T = \pi/2 + k\pi$, i.e. $f = (2k+1)/(2T)$ — the frequencies for which $T$ is an odd number of half-periods, so the delayed copy arrives exactly out of phase and cancels. At $f = k/T$ the delay is a whole number of periods, the copies add in phase, and the power is $4\times$ the original (amplitude doubled). This comb-shaped response is a **two-tap FIR filter**, and it is exactly what multipath propagation does to a radio channel — the frequency-selective fading that [2.5](02-05-equalization-briefly.md) sets out to undo.

**P3** (a) $\mu = \mathbb{E}[X] = pA + (1-p)(-A) = A(2p-1)$.

(b) Split the bit value as $X = \mu + \tilde{X}$ with $\tilde X$ zero-mean and $\mathbb{E}[\tilde X^2] = A^2-\mu^2$ (since $\mathbb{E}[X^2]=A^2$ always — the wave is always at $\pm A$). The constant part contributes $\mu^2$ at every lag. The zero-mean part is exactly the Example 2 process with power $A^2-\mu^2$, hence contributes $(A^2-\mu^2)\Lambda(\tau/T)$, the triangle of half-width $T$. Independence across bits kills all cross terms for $|\tau|\ge T$. So

$$R_X(\tau)=\mu^2 + (A^2-\mu^2)\Lambda(\tau/T).$$

*Sanity check:* $R_X(0)=\mu^2 + A^2-\mu^2 = A^2$ ✓, and $R_X(\infty)=\mu^2$ ✓.

(c) Transforming,

$$S_X(f) = \mu^2\delta(f) + (A^2-\mu^2)\,T\operatorname{sinc}^2(fT).$$

The new feature is the **impulse at $f=0$**: a DC component of power $\mu^2 = A^2(2p-1)^2$. It is bad news twice over. First, it is wasted power — a constant offset carries no information, yet it may dominate the budget. Second, and worse in practice, many channels are AC-coupled (transformers, capacitors, magnetic recording heads) and simply cannot pass DC, so that component is lost and the decision threshold at the receiver drifts — "baseline wander". This is precisely why line codes like Manchester deliberately force $\mu=0$; see [2.3](02-03-line-codes-baseband-pulses.md).

</details>

## Flashback

**From Lesson 1.1 (Signals and spectra, recalled):** A pulse $g(t)$ is a rectangle of amplitude 2 V and duration 0.5 ms. Give (a) its energy, (b) its null-to-null bandwidth, and (c) state whether $\int|g|^2dt$ or $\lim\frac1T\int|g|^2dt$ is the meaningful summary for it.

<details>
<summary>Solution</summary>

(a) $E = A^2T = (2)^2(0.5\times10^{-3}) = 2\times10^{-3}$ J = 2 mJ (into 1 ohm).

(b) The transform is $AT\operatorname{sinc}(fT)$, whose first null is at $f = 1/T = 1/(0.5\times 10^{-3}) = 2$ kHz. Null-to-null baseband bandwidth: **2 kHz**.

(c) It is an **energy** signal — finite duration, so finite energy, and its average power over all time is zero. Energy is the meaningful summary; the power limit would return 0 and tell you nothing.

</details>

## Connections

- **Backward:** $S_X(f)$ is the random-signal replacement for the energy spectral density $|G(f)|^2$ of [1.1](01-01-signals-and-spectra-recalled.md). Same picture, same "area = power" reading; different object underneath.
- **Forward:** [1.3](01-03-noise-snr-filtering.md) pushes a PSD through an LTI filter with $S_Y = |H|^2S_X$ and reads an SNR off the result — the calculation you will repeat in every module.
- **Sideways:** WSS is the signal-processing name for the assumption econometrics calls *covariance stationarity*, and Wiener–Khinchin is the same theorem as the spectral density of a time series in [`econometrics`](../../econometrics/syllabus.md). The autocorrelation function is also the covariance function of [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md), read at two times instead of two variables.
