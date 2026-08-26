# Communication Systems · Lesson 2.2: Quantization and PCM

> ⏱ ~15 min · Module 2: Sampling & Digital Transmission · Builds on: [2.1 The sampling theorem and aliasing](02-01-sampling-theorem-aliasing.md), [1.3 Noise, SNR and filtering](01-03-noise-snr-filtering.md) · Unlocks: [2.3 Line codes and baseband pulses](02-03-line-codes-baseband-pulses.md), [4.3 Error-control coding: block codes](04-03-block-codes.md)

## Why this matters

Sampling was free — the theorem promised exact recovery. Quantization is not. Rounding each sample to one of finitely many levels throws information away permanently, and the amount you throw away is the price of admission to the digital world.

That price turns out to be spectacularly worth paying, and this lesson is the accounting. The headline result — **6 dB of SNR per bit** — is the most quoted number in the subject, and it makes precise the exchange the T1 example in [2.1](02-01-sampling-theorem-aliasing.md) hinted at: bits (hence bandwidth) buy fidelity, at a fixed and known rate. It is also the first time in this course that you *choose* how good a link is by turning a dial, rather than accepting what physics gives you.

## The idea

Take a sample, and round it to the nearest of $L$ allowed levels. The error is at most half a step, and it behaves — for a busy enough signal — like a small random noise added to the sample. So the digital chain contributes its own noise floor, called [quantization noise](../reference.md#quantization-noise), and the design question is how far below the signal you can push it.

Two things set it. The **step size**: halving the step quarters the noise power, a 6 dB improvement. And the number of levels $L=2^n$: each extra bit halves the step, so each bit is worth 6 dB. That is the whole result, and it is linear in bits — meaning quality is a straight line against bit rate, and you buy exactly as much as you pay for.

There is a catch that dominates real design. The step size is fixed by the *loudest* signal you must handle without clipping, but the noise it produces is the same whether the signal is loud or quiet. So a quiet passage sits much closer to the noise floor than a loud one: SNR tracks signal level, and weak signals sound terrible. Speech makes this acute — the dynamic range between a shout and a whisper is enormous, and most of speech is quiet.

The fix is **companding**: squash the signal through a logarithmic curve before quantizing uniformly, and expand it back afterwards. Equivalently, use fine steps near zero and coarse steps out at the extremes. That makes the *relative* error roughly constant, so SNR becomes nearly independent of level. Telephone companies got 8-bit companded speech to sound like 12-bit uniform — four bits, 24 dB, saved on every sample of every call, forever.

## The formal version

**Uniform quantizer.** Split the input range $[-m_{\max}, +m_{\max}]$ into $L$ levels of width

$$\Delta = \frac{2m_{\max}}{L}.$$

With $n$ bits per sample, $L = 2^n$.

**Quantization error.** For a signal that traverses many levels, model the error $q = m_q - m$ as uniform on $[-\Delta/2, \Delta/2]$, independent of the signal. Then (using the uniform-distribution variance from [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md)):

$$\mathbb{E}[q] = 0, \qquad \sigma_q^2 = \frac{\Delta^2}{12}.$$

*In words: quantization adds a zero-mean noise whose power is the step size squared over twelve.* The $1/12$ is worth remembering; it is the variance of a uniform distribution of width $\Delta$.

**Signal-to-quantization-noise ratio.** With signal power $P_m$,

$$\mathrm{SQNR} = \frac{P_m}{\Delta^2/12} = \frac{12P_m}{\Delta^2} = \frac{12 P_m L^2}{4m_{\max}^2} = \frac{3P_mL^2}{m_{\max}^2} = 3\,\frac{P_m}{m_{\max}^2}\,2^{2n}.$$

In decibels, writing the **loading factor** $P_m/m_{\max}^2$ (how fully the signal uses the range):

$$\boxed{\;\mathrm{SQNR_{dB}} = 6.02n + 4.77 + 10\log_{10}\!\frac{P_m}{m_{\max}^2}.\;}$$

*In words: every extra bit adds 6 dB, and the rest depends on how hard you drive the quantizer.* Two standard specializations:

- **Full-scale sinusoid** ($P_m = m_{\max}^2/2$): $\mathrm{SQNR} = 6.02n + 1.76$ dB. This is the number on every ADC datasheet — 16-bit audio gives 98.1 dB.
- **Full-scale uniform / busy signal** ($P_m = m_{\max}^2/3$): $\mathrm{SQNR} = 6.02n$ dB. The clean "6 dB per bit" version.

**Bit rate and bandwidth.** Sampling at $f_s \ge 2W$ with $n$ bits per sample gives

$$R_b = nf_s \ge 2nW \ \text{bits/s}, \qquad B_{\min} = \frac{R_b}{2} \ge nW \ \text{hertz (binary, ideal Nyquist channel)}.$$

*In words: each bit of resolution costs one message bandwidth of channel bandwidth and buys 6 dB.* Put those together and you get PCM's exchange rate:

$$\mathrm{SQNR_{dB}} \approx 6\,\frac{B}{W} \quad\Longrightarrow\quad \mathrm{SQNR}\ \text{grows \emph{exponentially} with bandwidth.}$$

Compare FM from [1.6](01-06-angle-modulation-fm-pm.md), where SNR grew only as $B^2$. PCM's trade is fundamentally better — and [4.2](04-02-channel-capacity-shannon-limit.md) will show that an exponential trade is exactly what Shannon's formula permits, which is why digital won.

**Companding.** Apply a compressor $c(\cdot)$, quantize uniformly, then expand with $c^{-1}$. The two standards:

$$\text{$\mu$-law (N. America, $\mu=255$)}: \quad c(x) = \frac{\ln(1+\mu|x|)}{\ln(1+\mu)}\operatorname{sgn}(x), \qquad |x| = |m|/m_{\max} \le 1 .$$

$$\text{A-law (Europe, $A=87.6$)}: \quad c(x)=\begin{cases}\dfrac{A|x|}{1+\ln A}\operatorname{sgn} x, & |x|\le 1/A,\\[6pt] \dfrac{1+\ln(A|x|)}{1+\ln A}\operatorname{sgn} x, & 1/A<|x|\le1.\end{cases}$$

*In words: both compress large amplitudes and stretch small ones, so the effective step size grows in proportion to the signal.* In the fully logarithmic region the SQNR becomes level-independent:

$$\mathrm{SQNR}_{\mu\text{-law}} \approx \frac{3L^2}{[\ln(1+\mu)]^2} \;\Longrightarrow\; \mathrm{SQNR_{dB}} \approx 6.02n + 4.77 - 20\log_{10}\big[\ln(1+\mu)\big].$$

For $\mu = 255$: $\ln(256) = 5.545$, so the correction is $-14.9$ dB. Companding *costs* about 15 dB at full scale and *saves* far more than that everywhere else — the whole point is flattening the curve, not raising it.

**Non-uniform quantization is optimal quantization, roughly.** The Lloyd–Max conditions for a minimum-distortion quantizer are: each level sits at the centroid of its bin, and each bin boundary sits midway between neighbouring levels. Companding approximates that for a known amplitude distribution without needing to solve for it — and [4.3 of `information-theory`](../../information-theory/lessons/04-03-rate-distortion.md) gives the theoretical floor that no quantizer can beat.

## Picture

![Two panels. Left: a staircase transfer characteristic of a uniform quantizer with step Delta, the input-output line drawn through it, and below it the sawtooth error signal bounded by plus and minus Delta over 2. Right: SQNR in dB plotted against input level in dB for uniform versus mu-law quantization, showing uniform rising 1 dB per dB of input while mu-law stays flat across a 40 dB range.](assets/02-02-fig1.svg)

Left is the mechanism: a staircase, and the sawtooth error it makes — bounded by $\pm\Delta/2$, roughly uniform, roughly uncorrelated with the signal. Right is the reason companding exists. The uniform quantizer's SQNR falls one-for-one with input level, so a signal 30 dB below full scale gets 30 dB worse SQNR. The $\mu$-law curve is flat across the whole useful range: worse at the very top, dramatically better everywhere a real conversation lives.

## Worked examples

**Example 1 (the telephone channel, from scratch).** Speech band-limited to 3.4 kHz, sampled at 8 kHz, quantized to 8 bits.

*Bit rate:* $R_b = nf_s = 8\times 8000 = 64$ kbps. That is the DS0 — the atom of the entire telephone network, and every number in the T1 example of [2.1](02-01-sampling-theorem-aliasing.md) descends from it.

*Uniform SQNR at full scale (sinusoid test):*

$$6.02(8)+1.76 = 49.9\ \text{dB}.$$

*But at a realistic speech level.* Speech has a high peak-to-average ratio; take the loading factor $P_m/m_{\max}^2 = -20$ dB (a common design point). Then

$$\mathrm{SQNR} = 6.02(8)+4.77-20 = 32.9\ \text{dB},$$

and for a quiet talker 20 dB below that, only 13 dB — audibly grainy.

*With $\mu$-law:* the level-dependence largely vanishes. Taking the log-region formula,

$$\mathrm{SQNR} \approx 6.02(8)+4.77-14.9 = 37.9\ \text{dB},$$

and it stays near that value across roughly 40 dB of input range. Compare what uniform quantization would need to hold 38 dB for a talker 40 dB down: $6.02n + 4.77 - 40 \ge 38$ gives $n \ge 12.2$, i.e. **13 bits**. Companding delivered comparable subjective quality at 8 bits instead of 13 — a 38% reduction in bit rate on every telephone call, which at the scale of a national network is an enormous amount of copper.

*Minimum bandwidth:* $B = R_b/2 = 32$ kHz for binary signalling — versus 3.4 kHz for the analog signal. Nearly ten times the bandwidth, in exchange for regeneration (no accumulating noise), encryption, and switching. That was the bet, and it paid.

**Example 2 (designing to a specification).** A sensor signal spans $\pm 5$ V, is band-limited to 20 kHz, and must be digitized with SQNR of at least 60 dB for a full-scale sinusoid. Find the required bits, step size, sampling rate and bit rate.

*Bits:* $6.02n + 1.76 \ge 60 \Rightarrow n \ge (60-1.76)/6.02 = 9.67$, so $n = 10$ bits. (Achieved SQNR: $6.02(10)+1.76 = 61.96$ dB.)

*Step size:* $L = 2^{10} = 1024$ levels over 10 V:

$$\Delta = \frac{10}{1024} = 9.77\ \text{mV}, \qquad \sigma_q = \frac{\Delta}{\sqrt{12}} = 2.82\ \text{mV rms}.$$

*Sampling rate:* Nyquist is 40 kHz; allow 25% guard band for a realistic anti-aliasing filter, $f_s = 50$ kHz.

*Bit rate:* $R_b = 10\times 50{,}000 = 500$ kbps, needing $B_{\min} = 250$ kHz binary.

*Now the design conversation.* Suppose the specification rises to 72 dB. Then $n \ge 11.7$, so 12 bits, $R_b = 600$ kbps — 20% more bandwidth for 12 dB. That linearity is what makes digital design tractable: you can *quote a price* for quality. Note also what would happen if you tried to buy the same 12 dB in an analog FM link: from $3\beta^2$, you would need $\beta$ to double, and by Carson $B_T$ roughly doubles. **PCM buys 12 dB for 20% more bandwidth; FM needs 100% more.** That gap is the whole argument of Module 2.

## Watch out

- **You might think quantization noise is real noise.** It is entirely deterministic — the same input always gives the same error. The uniform-random model is an *approximation* that holds when the signal is busy and traverses many levels. For a slowly varying or very small signal the error becomes strongly correlated with the signal and appears as harmonic distortion, not hiss. This is why converters deliberately add a tiny **dither** noise: it decorrelates the error, converting audible tonal artifacts into benign hiss.
- **You might think 6 dB per bit is universal.** The slope is; the offset is not. Full-scale sinusoid gives $+1.76$ dB, uniform loading gives $0$, real speech gives $-15$ dB or worse. Always state the loading factor with an SQNR figure, or the number is meaningless.
- **You might think companding improves SQNR.** It *worsens* peak SQNR by about 15 dB and improves it dramatically at low levels. It trades the best case for the typical case — a flatter curve, not a higher one.
- **You might think you can quantize as finely as you like.** Below the analog front end's own thermal noise floor, extra bits digitize noise. The useful resolution of a real converter is stated as ENOB (effective number of bits), always smaller than its nominal $n$.

## One-liner

> Each bit halves the step and buys 6 dB, so fidelity is a straight line against bit rate — and companding bends the curve so that quiet signals get the same deal as loud ones.

## Problems

**P1 (🟢)** An audio signal band-limited to 4 kHz is sampled at the Nyquist rate and PCM-encoded with 256 uniform levels. (a) Give the sampling rate, bits per sample, and bit rate. (b) Estimate the SQNR in dB for a full-scale sinusoid. (c) Using binary transmission over an ideal Nyquist channel, find the minimum bandwidth. (d) What changes if you switch to 4-level (2 bits per symbol) signalling?

**P2 (🟡)** A 10-bit uniform quantizer covers $\pm 1$ V. (a) Find $\Delta$ and the quantization noise power. (b) A sinusoid of amplitude 0.1 V is applied. Find its SQNR in dB, and compare it to the full-scale figure. (c) How many bits would be needed to give this 0.1 V sinusoid the same SQNR that the full-scale sinusoid enjoys at 10 bits? (d) Explain in one sentence why companding is the cheaper answer.

**P3 (🔴)** A $\mu$-law compander with $\mu = 255$ is used with $n=8$ bits. (a) Find the slope $dc/dx$ at $x=0$ and at $x=1$, and interpret the ratio as the ratio of step sizes at those two points. (b) Verify the 14.9 dB penalty quoted above. (c) A designer proposes $\mu = 5000$ to help very quiet talkers further. Compute the new penalty and the new step-size ratio, and give one reason this is a bad idea in practice.

<details>
<summary>Solutions</summary>

**P1** (a) $f_s = 2W = 8$ kHz. $L=256 = 2^8$, so $n=8$ bits/sample.

$$R_b = 8\times 8000 = 64\ \text{kbps}.$$

(b) Full-scale sinusoid: $\mathrm{SQNR} = 6.02(8)+1.76 = 49.9$ dB. (About 50 dB — the standard telephone-grade figure.)

(c) The ideal Nyquist channel carries $2B$ symbols per second, so binary signalling at $R_b$ needs

$$B_{\min} = \frac{R_b}{2} = 32\ \text{kHz}.$$

(d) With 4-level signalling each symbol carries 2 bits, so the *symbol* rate is $64/2 = 32$ ksymbols/s and

$$B_{\min} = \frac{32{,}000}{2} = 16\ \text{kHz}.$$

Half the bandwidth, same bit rate. The bill arrives in noise immunity: with the same peak amplitude, four levels are spaced a third as far apart as two, so the noise margin drops and the required $E_b/N_0$ rises. That is exactly the bandwidth-versus-power trade Module 3 quantifies — see [3.6](03-06-power-vs-bandwidth-efficiency.md).

**P2** (a) $L = 2^{10} = 1024$ over a 2 V range:

$$\Delta = \frac{2}{1024} = 1.953\ \text{mV}, \qquad \sigma_q^2 = \frac{\Delta^2}{12} = \frac{(1.953\times10^{-3})^2}{12} = 3.18\times10^{-7}\ \text{W}.$$

(b) Sinusoid of amplitude 0.1 V has power $P_m = 0.1^2/2 = 5\times 10^{-3}$ W:

$$\mathrm{SQNR} = \frac{5\times10^{-3}}{3.18\times10^{-7}} = 1.573\times10^4 = 42.0\ \text{dB}.$$

Full scale (amplitude 1 V) gives $6.02(10)+1.76 = 61.96$ dB. The difference is exactly $20\log_{10}(1/0.1) = 20$ dB ✓ — SQNR falls one dB per dB of input level.

(c) To recover those 20 dB at $20/6.02 = 3.32$ bits per, you need $10 + 3.32 \to$ **14 bits** (rounding up). Check: $6.02(14)+1.76-20 = 65.9$ dB, comfortably above 61.96 ✓.

(d) Because 14 bits costs 40% more bit rate — hence 40% more bandwidth and 40% more storage — on *every* sample, forever, whereas companding is a fixed nonlinear curve applied once at each end and costs nothing per sample at all.

**P3** (a) With $c(x) = \dfrac{\ln(1+\mu x)}{\ln(1+\mu)}$ for $x\ge0$:

$$\frac{dc}{dx} = \frac{\mu}{(1+\mu x)\ln(1+\mu)} .$$

At $x=0$: $\dfrac{255}{5.545} = 46.0$. At $x=1$: $\dfrac{255}{256\times 5.545} = 0.180$.

Step size in the *input* domain is inversely proportional to the compressor slope (a steep compressor maps a small input interval onto a full output step). So

$$\frac{\Delta_{x=1}}{\Delta_{x=0}} = \frac{46.0}{0.180} = 256 = 1+\mu .$$

Steps at full scale are 256 times coarser than steps near zero — that is precisely the dynamic-range flattening, and the ratio is exactly $1+\mu$, which is a clean way to remember what $\mu$ means.

(b) The log-region SQNR carries the factor $[\ln(1+\mu)]^{-2}$ relative to the uniform result, so the penalty is

$$20\log_{10}\big[\ln(1+\mu)\big] = 20\log_{10}(5.545) = 14.87\ \text{dB} \ \checkmark.$$

(c) With $\mu = 5000$: $\ln(5001) = 8.517$, so the penalty is $20\log_{10}(8.517) = 18.6$ dB — 3.7 dB worse at every level in the log region. The step-size ratio becomes $1+\mu = 5001$.

Why it is a bad idea: you have paid a uniform 3.7 dB across the whole range to extend flatness into a region below the analog front end's own noise floor, where there is no signal to protect. Worse, the near-zero steps are now $5001^{-1}$ of the full-scale step — around $0.4\ \mu$V on a 2 V range — far smaller than the thermal noise and offset drift of any practical amplifier, so those fine steps are quantizing noise, not speech. **Companding should flatten the range the signal actually occupies and no further**; $\mu=255$ was chosen against measured speech-level statistics, not maximized.

</details>

## Flashback

**From Lesson 1.6 (Angle modulation — FM and PM):** An FM system has $\Delta f = 40$ kHz and $W = 10$ kHz. (a) Find $D$ and the Carson bandwidth. (b) Find the SNR improvement over baseband in dB. (c) A PCM system using the same total bandwidth sends the same 10 kHz message at $f_s = 25$ kHz. How many bits per sample does it get, and what full-scale-sinusoid SQNR does that give? Compare.

<details>
<summary>Solution</summary>

(a) $D = 40/10 = 4$; $B_T = 2(40+10) = 100$ kHz.

(b) $3D^2(D+1) = 3(16)(5) = 240 = 23.8$ dB.

(c) Binary PCM in $B = 100$ kHz supports $R_b = 2B = 200$ kbps. At $f_s = 25$ kHz:

$$n = \frac{200{,}000}{25{,}000} = 8\ \text{bits/sample}, \qquad \mathrm{SQNR} = 6.02(8)+1.76 = 49.9\ \text{dB}.$$

PCM delivers roughly 50 dB where FM delivers roughly 24 dB, in the same 100 kHz. The gap is the difference between an SNR that grows as $B^2$ and one that grows as $2^{B/W}$ — and it widens with every hertz you add. (The comparison is not entirely fair: PCM's figure is a *ceiling* set by quantization and only holds above its own threshold $E_b/N_0$, below which errors in the bit stream destroy it far more abruptly than FM's threshold does. Both schemes have a cliff; PCM's is steeper and further down.)

</details>

## Connections

- **Backward:** [2.1](02-01-sampling-theorem-aliasing.md) made the time axis discrete without loss; this lesson makes the amplitude axis discrete *with* a known, budgetable loss. Together they are analog-to-digital conversion.
- **Forward:** [2.3](02-03-line-codes-baseband-pulses.md) turns the resulting bits into waveforms; [4.3](04-03-block-codes.md) protects them. The rate-versus-distortion trade seen here is the engineering face of [`information-theory` 4.3](../../information-theory/lessons/04-03-rate-distortion.md).
- **Sideways:** the $\Delta^2/12$ result is the variance of a uniform random variable from [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md), and the same rounding-noise model governs fixed-point arithmetic error in [`numerical-analysis`](../../numerical-analysis/syllabus.md).
