# Communication Systems · Lesson 1.3: Noise, SNR and filtering

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [1.2 Random processes and the PSD](01-02-random-processes-and-psd.md), [`signals-systems` 2.1](../../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) · Unlocks: [1.4 Amplitude modulation](01-04-amplitude-modulation-dsb-am.md), [3.1 Signal space and the matched filter](03-01-signal-space-matched-filter.md)

## Why this matters

There is exactly one enemy in this course, and it is thermal noise. It is not a design flaw you could engineer away — the model is [AWGN](../reference.md#awgn) throughout — it is the thermodynamics of electrons in a resistor, and its size is set by Boltzmann's constant and the temperature of your receiver. Every performance number in Modules 3 and 4 is ultimately a comparison between the energy you spent on a symbol and the noise energy sitting on top of it.

This lesson does three things: it gives noise a PSD, gives you the rule for pushing any PSD through a filter, and turns the result into the single number everything is quoted in — the signal-to-noise ratio. Then it introduces the currency the rest of the course actually trades in: $E_b/N_0$.

## The idea

Thermal noise is the sum of an enormous number of tiny independent kicks from individual charge carriers. Two consequences follow, and both are enormous simplifications.

**It is Gaussian**, by the central limit theorem — many small independent contributions add to a normal distribution, regardless of what any individual kick looks like. So a single noise sample is completely described by one number, its variance.

**It is white**, meaning its PSD is flat: the same watts per hertz at 1 kHz as at 1 GHz (up to terahertz frequencies, where quantum effects finally bend the curve — irrelevant for us). Flat in frequency means, by Wiener–Khinchin, an *impulse* in $\tau$: noise samples taken at any two distinct instants are uncorrelated. The process has no memory whatsoever.

White noise is an idealization with infinite total power — the area under a flat curve over all frequencies is infinite. That never bites, because every receiver ever built is band-limited. Which brings up the central mechanical skill of this lesson: **noise power is not a property of the noise alone, it is a property of the noise and your filter.** Widen your receiver's bandwidth and you let in proportionally more noise while gaining no more signal. The design instinct that follows — *make the receiver exactly as wide as the signal, and not one hertz wider* — is the germ of the matched filter in [3.1](03-01-signal-space-matched-filter.md).

## The formal version

**AWGN.** The standard channel model is **additive white Gaussian noise**: the received signal is $r(t) = s(t) + w(t)$, where $w(t)$ is a zero-mean Gaussian WSS process with

$$S_W(f) = \frac{N_0}{2} \quad\text{for all } f, \qquad R_W(\tau) = \frac{N_0}{2}\,\delta(\tau).$$

*In words: flat power spectral density at every frequency, and zero correlation between any two distinct instants.*

$N_0$ (watts per hertz, or equivalently joules) is the **one-sided** noise PSD. The $/2$ appears because we plot spectra over positive *and* negative frequencies, so each side carries half. Every $E_b/N_0$ in this course uses the one-sided $N_0$; every PSD picture uses $N_0/2$. Keeping that straight is worth a factor of two on every answer, and factors of two are 3 dB.

**Where $N_0$ comes from.** For a receiver at absolute temperature $T$ kelvin,

$$N_0 = kT_e, \qquad k = 1.38\times10^{-23}\ \text{J/K},$$

with $T_e$ the **effective noise temperature** of the whole receiving system (antenna plus amplifier chain). At room temperature $T_0 = 290$ K,

$$N_0 = (1.38\times10^{-23})(290) = 4.0\times10^{-21}\ \text{W/Hz} = -174\ \text{dBm/Hz}.$$

That number — $-174$ dBm/Hz — is worth memorizing; it is the floor under every terrestrial radio link.

**Pushing a PSD through an LTI filter.** If a WSS process $X$ with PSD $S_X(f)$ enters a filter with frequency response $H(f)$, the output $Y$ is WSS with

$$\boxed{\;S_Y(f) = |H(f)|^2\,S_X(f).\;}$$

*In words: the filter shapes the power spectrum by its power gain at each frequency — phase is irrelevant to power.* Consequently the output power is

$$P_Y = \int_{-\infty}^{\infty}|H(f)|^2 S_X(f)\,df .$$

For white noise in particular, $S_X = N_0/2$ pulls out of the integral:

$$P_Y = \frac{N_0}{2}\int_{-\infty}^{\infty}|H(f)|^2df = N_0 B_N,$$

where

$$B_N = \frac{1}{2|H|^2_{\max}}\int_{-\infty}^{\infty}|H(f)|^2\,df$$

is the **equivalent noise bandwidth**: the width of the ideal brick-wall filter, with the same peak gain, that would pass the same noise power. (With the peak gain normalized to 1, output noise power is simply $N_0B_N$.) *In words: replace your real filter by the rectangle that leaks the same amount of noise, and quote that rectangle's width.*

**Signal-to-noise ratio.**

$$\mathrm{SNR} = \frac{P_{\text{signal}}}{P_{\text{noise}}}, \qquad \mathrm{SNR}_{\rm dB} = 10\log_{10}\mathrm{SNR}.$$

Powers use $10\log_{10}$; amplitudes use $20\log_{10}$. Useful anchors: $\times 2 \approx 3$ dB, $\times 4\approx 6$ dB, $\times 10 = 10$ dB exactly.

**$E_b/N_0$ — the fair comparison.** SNR depends on how wide you happened to make the receiver, which makes it useless for comparing two modulation schemes running at different rates. The fix is to normalize per bit. With $P$ watts of received signal power and $R_b$ bits per second, the **energy per bit** is

$$E_b = \frac{P}{R_b} \quad\text{(joules)}, \qquad \frac{E_b}{N_0} = \frac{P}{N_0R_b} = \mathrm{SNR}\cdot\frac{B}{R_b}.$$

*In words: $E_b/N_0$ asks how much energy you spent on one bit, measured in units of the noise's watts-per-hertz — a dimensionless number that is fair across rates and bandwidths.* The ratio $R_b/B$ is the **spectral efficiency** in bits per second per hertz; the identity above says SNR and $E_b/N_0$ differ exactly by it. Every BER curve from [3.3](03-03-binary-modulation-ber.md) onward is plotted against $E_b/N_0$ in dB, and the whole of [3.6](03-06-power-vs-bandwidth-efficiency.md) is about the trade this identity encodes.

## Picture

![A two-panel figure. Left: flat white noise PSD at N0 over 2 across all frequencies, with a rectangular filter passband of width B overlaid, and the shaded overlap labelled as the noise that gets through. Right: the same but with a wider filter, showing proportionally more shaded noise area while a fixed-width signal spectrum inside it is unchanged.](assets/01-03-fig1.svg)

The same signal, two receiver bandwidths. The signal's power (blue) is fixed — it is whatever the transmitter sent. The noise admitted (red shading) is the area of flat PSD inside the passband, so it grows linearly with bandwidth. Doubling $B$ costs 3 dB of SNR and buys nothing. The picture is the argument for narrow receivers, and the entire content of the matched filter is that there is a *best* shape, not just a best width.

## Worked examples

**Example 1 (an RC low-pass: noise bandwidth is not the 3-dB bandwidth).** White noise of PSD $N_0/2$ enters the one-pole filter

$$H(f) = \frac{1}{1+j2\pi fRC}, \qquad |H(f)|^2 = \frac{1}{1+(2\pi fRC)^2}.$$

Output noise power:

$$P_N = \frac{N_0}{2}\int_{-\infty}^{\infty}\frac{df}{1+(2\pi fRC)^2}.$$

Substitute $x = 2\pi f RC$, $df = dx/(2\pi RC)$:

$$P_N = \frac{N_0}{2}\cdot\frac{1}{2\pi RC}\int_{-\infty}^{\infty}\frac{dx}{1+x^2} = \frac{N_0}{2}\cdot\frac{\pi}{2\pi RC} = \frac{N_0}{4RC}.$$

Peak gain is 1, so by definition $P_N = N_0B_N$, giving

$$B_N = \frac{1}{4RC}\ \text{Hz}.$$

Compare the 3-dB bandwidth, where $(2\pi fRC)^2=1$: $f_{3\rm dB} = 1/(2\pi RC)$. The ratio is

$$\frac{B_N}{f_{3\rm dB}} = \frac{1/(4RC)}{1/(2\pi RC)} = \frac{\pi}{2}\approx 1.57 .$$

The filter leaks **57% more noise** than its 3-dB number suggests, because its skirts fall off slowly and keep admitting noise well past cutoff. Using $f_{3\rm dB}$ in a noise budget is an optimism of 2 dB. Sharper filters have $B_N/f_{3\rm dB}$ closer to 1; the brick wall has exactly 1.

**Example 2 (a full link budget).** A satellite downlink delivers $P = -120$ dBW to the receiver. The system noise temperature is $T_e = 200$ K and the data rate is $R_b = 2$ Mbps. Find $E_b/N_0$, and the SNR if the receiver bandwidth is 2 MHz.

*Noise density:* $N_0 = kT_e = (1.38\times10^{-23})(200) = 2.76\times10^{-21}$ W/Hz. In decibels,

$$N_{0,\rm dB} = 10\log_{10}(2.76\times10^{-21}) = -205.6\ \text{dBW/Hz}.$$

(Shortcut worth keeping: $10\log_{10}k = -228.6$ dBW/K/Hz, so $N_{0,\rm dB} = -228.6 + 10\log_{10}T_e = -228.6 + 23.0 = -205.6$ ✓.)

*Energy per bit:* $E_b = P/R_b$, which in dB is a subtraction:

$$E_{b,\rm dB} = -120 - 10\log_{10}(2\times10^6) = -120 - 63.0 = -183.0\ \text{dBJ}.$$

*Ratio:*

$$\frac{E_b}{N_0}\bigg|_{\rm dB} = -183.0 - (-205.6) = 22.6\ \text{dB}.$$

*SNR:* noise power in 2 MHz is $P_N = N_0 B = -205.6 + 63.0 = -142.6$ dBW, so

$$\mathrm{SNR} = -120 - (-142.6) = 22.6\ \text{dB}.$$

They came out equal — because $R_b = B$ here, giving spectral efficiency exactly 1 bit/s/Hz. That is the sanity check the identity $E_b/N_0 = \mathrm{SNR}\cdot B/R_b$ predicts. Had we used QPSK at 2 bits/s/Hz (2 Mbps in 1 MHz), the SNR would be 25.6 dB while $E_b/N_0$ stayed at 22.6 dB — the same link, the same errors, a different-looking SNR. This is precisely why nobody quotes SNR when comparing modulations.

## Watch out

- **You might think $N_0$ and $N_0/2$ are interchangeable if you are consistent.** They are not the same number and the convention is fixed: the *two-sided PSD you draw* is $N_0/2$; the *one-sided density in $E_b/N_0$* is $N_0$. The bridge is that noise power in a bandpass filter of width $B$ (which occupies $B$ hertz at positive frequency and $B$ at negative) is $2\times B\times N_0/2 = N_0B$. Get it backwards and every answer is off by 3 dB.
- **You might think the noise bandwidth is the 3-dB bandwidth.** Only for a brick wall. Example 1 shows a one-pole filter leaking $\pi/2$ times more. Always compute $B_N$ from $\int|H|^2$ when precision matters.
- **You might think a higher SNR always means a better link.** SNR is measured in *your* bandwidth. Narrowing the receiver until it clips the signal will raise the measured SNR while destroying the data. $E_b/N_0$ is the number that cannot be gamed this way, which is why it is the standard.
- **You might think "white" means "Gaussian."** Independent properties. White constrains the *spectrum* (flat, hence uncorrelated in time); Gaussian constrains the *distribution* of each sample. Noise can be one without the other. Thermal noise is both, and the combination is what makes AWGN so tractable — for a Gaussian process, uncorrelated implies fully independent.

## One-liner

> Noise is flat at $N_0/2$ watts per hertz, so the power it delivers is set entirely by how wide you opened the receiver — and $E_b/N_0$ is the SNR with that arbitrariness divided out.

## Problems

**P1 (🟢)** A receiver has an effective noise temperature of 500 K and a bandwidth of 10 MHz. (a) Find $N_0$ in W/Hz and in dBW/Hz. (b) Find the noise power in the band, in watts and in dBm. (c) If the received signal power is $-95$ dBm, what is the SNR in dB? (d) At 10 Mbps, what is $E_b/N_0$ in dB?

**P2 (🟡)** White noise of two-sided PSD $N_0/2 = 10^{-9}$ W/Hz passes through an ideal bandpass filter with unity gain over $95 \le |f| \le 105$ MHz. (a) Find the output noise power. (b) The same noise instead passes through a filter with $|H(f)|^2 = e^{-|f|/f_0}$ with $f_0 = 10^6$ Hz. Find the output noise power and the equivalent noise bandwidth. (c) Which filter is quieter, and by how many dB?

**P3 (🔴)** Two amplifiers are cascaded. The first has power gain $G_1$ and effective input noise temperature $T_1$; the second has gain $G_2$ and temperature $T_2$. (a) By tracking noise power to the output and referring it back to the input, derive Friis's formula $T_e = T_1 + T_2/G_1$. (b) Explain in one sentence why this makes the *first* amplifier's noise the one that matters. (c) A low-noise amplifier with $T_1 = 50$ K, $G_1 = 20$ dB precedes a receiver with $T_2 = 900$ K. Find $T_e$, and find what $T_e$ would be if you swapped the order.

<details>
<summary>Solutions</summary>

**P1** (a) $N_0 = kT_e = (1.38\times 10^{-23})(500) = 6.9\times 10^{-21}$ W/Hz.

$$N_{0,\rm dB} = -228.6 + 10\log_{10}500 = -228.6 + 27.0 = -201.6\ \text{dBW/Hz}.$$

(b) $P_N = N_0B = (6.9\times10^{-21})(10^7) = 6.9\times10^{-14}$ W. In dBm (add 30 to dBW):

$$P_{N,\rm dBm} = -201.6 + 70.0 + 30 = -101.6\ \text{dBm}.$$

(c) $\mathrm{SNR} = -95 - (-101.6) = 6.6$ dB.

(d) $R_b = B = 10^7$, so spectral efficiency is 1 bit/s/Hz and $E_b/N_0 = \mathrm{SNR} = 6.6$ dB. (Directly: $E_b = P/R_b \Rightarrow -95-30 = -125$ dBW, minus $70$ dB for the rate $= -195$ dBJ; $-195-(-201.6)=6.6$ ✓.)

**P2** (a) An ideal bandpass filter of width 10 MHz passes both the positive-frequency block $[95,105]$ MHz and the negative one $[-105,-95]$ MHz. Total width of integration is $2\times 10^7$ Hz:

$$P_N = \frac{N_0}{2}\times 2B = 10^{-9}\times 2\times 10^{7} = 2\times 10^{-2} = 20\ \text{mW}.$$

Equivalently $P_N = N_0B$ with $N_0 = 2\times10^{-9}$: $(2\times10^{-9})(10^7) = 0.02$ W ✓.

(b) $\displaystyle P_N = \frac{N_0}{2}\int_{-\infty}^{\infty}e^{-|f|/f_0}df = \frac{N_0}{2}\cdot 2f_0 = N_0f_0 = (2\times10^{-9})(10^6) = 2\times10^{-3} = 2$ mW.

Peak gain $|H|^2_{\max}=1$ at $f=0$, so

$$B_N = \frac{1}{2}\int_{-\infty}^{\infty}e^{-|f|/f_0}df = f_0 = 1\ \text{MHz}.$$

(c) The exponential filter, by a factor of 10 in power:

$$10\log_{10}\frac{20\ \text{mW}}{2\ \text{mW}} = 10\ \text{dB quieter}.$$

Which is just the ratio of noise bandwidths, 10 MHz versus 1 MHz — noise power tracks noise bandwidth and nothing else.

**P3** (a) Put the noise from each stage at that stage's *input*, as an equivalent temperature. Over bandwidth $B$:

- Stage 1 contributes $kT_1B$ at its own input, which appears at the cascade output amplified by both stages: $G_1G_2kT_1B$.
- Stage 2 contributes $kT_2B$ at its input, amplified only by $G_2$: $G_2kT_2B$.

Total added noise at the output:

$$P_{\rm out} = G_1G_2kT_1B + G_2kT_2B .$$

Refer it back to the cascade input by dividing by the total gain $G_1G_2$:

$$P_{\rm in,eq} = kT_1B + \frac{kT_2B}{G_1} = kB\left(T_1 + \frac{T_2}{G_1}\right) \;\equiv\; kT_eB,$$

so $T_e = T_1 + T_2/G_1$. ∎

(b) Because the first stage amplifies the signal *and* its own noise together, while every later stage's noise gets divided by all the gain that preceded it — so the first stage sets the noise floor and later stages are suppressed by $1/G_1$.

(c) $G_1 = 20$ dB $= 100$:

$$T_e = 50 + \frac{900}{100} = 50 + 9 = 59\ \text{K}.$$

Swapped (receiver first, gain of the receiver stage unstated — take its gain as $G=1$ for the worst case, or note that whatever it is, its own 900 K is now undivided):

$$T_e' = 900 + \frac{50}{G_{\rm rx}} \ge 900\ \text{K}.$$

From 59 K to at least 900 K — a degradation of $10\log_{10}(900/59) = 11.8$ dB. This is why the low-noise amplifier is bolted to the antenna itself, before the cable run, on every satellite dish you have ever seen.

</details>

## Flashback

**From Lesson 1.2 (Random processes and the PSD):** A WSS process has autocorrelation $R_X(\tau) = 5\cos(2\pi\cdot 1000\,\tau)$. (a) What is its average power? (b) What is its PSD? (c) Is this process white? Justify in one sentence.

<details>
<summary>Solution</summary>

(a) $P = R_X(0) = 5$ W.

(b) Using $\cos(2\pi f_0\tau)\leftrightarrow\tfrac12[\delta(f-f_0)+\delta(f+f_0)]$ with $f_0 = 1$ kHz:

$$S_X(f) = \frac{5}{2}\big[\delta(f-1000)+\delta(f+1000)\big].$$

Two impulses of weight 2.5 each, totalling 5 W ✓. (Comparing with Example 1 of [1.2](01-02-random-processes-and-psd.md), this is a random-phase sinusoid of amplitude $A$ with $A^2/2 = 5$, i.e. $A=\sqrt{10}$ V.)

(c) No — the opposite extreme. White means flat PSD and an impulsive autocorrelation (zero memory); this process has all its power at a single frequency and an autocorrelation that never decays, so it remembers forever. It is maximally *non*-white.

</details>

## Connections

- **Backward:** the filtering rule $S_Y = |H|^2S_X$ is [1.2](01-02-random-processes-and-psd.md)'s PSD meeting [`signals-systems` 2.1](../../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md)'s frequency response. Gaussianity is the central limit theorem of [`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) applied to electrons.
- **Forward:** [1.4](01-04-amplitude-modulation-dsb-am.md) computes output SNR for AM detectors using exactly this machinery; [3.1](03-01-signal-space-matched-filter.md) asks which filter *shape* maximizes SNR, and finds one unique answer.
- **Sideways:** $N_0 = kT$ is the same equipartition statement as Johnson–Nyquist noise in [`condensed-matter`](../../condensed-matter/syllabus.md), and the $-174$ dBm/Hz floor is the reason [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md) detector electronics are cooled.
