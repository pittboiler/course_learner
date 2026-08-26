# Communication Systems · Lesson 1.4: Amplitude modulation — DSB and AM

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [1.1 Signals and spectra, recalled](01-01-signals-and-spectra-recalled.md), [1.3 Noise, SNR and filtering](01-03-noise-snr-filtering.md), [`signals-systems` 4.5](../../signals-systems/lessons/04-05-modulation.md) · Unlocks: [1.5 SSB, VSB and multiplexing](01-05-ssb-vsb-multiplexing.md), [1.6 Angle modulation](01-06-angle-modulation-fm-pm.md)

## Why this matters

You have a 3 kHz voice signal and an antenna. Radiating efficiently needs an antenna comparable to a wavelength, and 3 kHz is a 100 km wavelength — so you cannot transmit the message directly. Worse, if everyone did, every station would sit on top of everyone else at baseband.

Modulation solves both problems at once by moving the message up to a carrier frequency you choose. Amplitude modulation is the oldest and simplest way to do it, and it is where the course's central trade first appears in hard numbers: conventional AM wastes most of its transmitter power on a carrier that carries nothing, and buys with it a receiver made of a diode and a capacitor. That trade — **power for receiver complexity** — recurs in every module.

## The idea

Take the message $m(t)$ and use it to control the *height* of a fast cosine. The carrier's job is transport; the message rides in the envelope.

The mathematically clean version, **DSB-SC** (double-sideband suppressed carrier), is literally the product $m(t)\cos(2\pi f_ct)$. By [1.1](01-01-signals-and-spectra-recalled.md)'s frequency-shift property, that pastes two half-height copies of $M(f)$ at $\pm f_c$. Every watt transmitted carries message. Recovering it takes a *second* multiplication by the same cosine at the receiver — which means the receiver must know the carrier's frequency **and phase**. That is [coherent detection](../reference.md#coherent-detection), and it is expensive.

**Conventional AM** buys a cheaper receiver by adding a constant. Transmit $[A_c + m(t)]\cos(2\pi f_ct)$. If the constant is large enough that $A_c + m(t)$ never goes negative, the *envelope* of the transmitted wave is a faithful copy of $A_c+m(t)$ — so a rectifier and a low-pass filter, a few cents of parts, recover the message with no phase knowledge at all. That is why AM broadcast radio conquered the 1920s.

The bill arrives as power. The added constant shows up as a spectral line at $f_c$ carrying no information, and for typical speech and music that line eats the large majority of the transmitter's output. And if the constant is *too small* — if $A_c + m(t)$ dips negative — the envelope stops tracking $m$ and folds, producing gross distortion that no filter can undo. That failure is called overmodulation, and it defines the safe operating region.

## The formal version

Let $m(t)$ be the message, band-limited to $W$ hertz, with average power $P_m$, and let $c(t)=A_c\cos(2\pi f_ct)$ be the carrier, $f_c \gg W$.

**DSB-SC.**

$$s_{\rm DSB}(t) = m(t)\,A_c\cos(2\pi f_ct) \;\longleftrightarrow\; S(f) = \frac{A_c}{2}\big[M(f-f_c)+M(f+f_c)\big].$$

*In words: the transmitted spectrum is two half-height copies of the message spectrum, at $\pm f_c$.* The block at $+f_c$ contains an **upper sideband** (above $f_c$) and a **lower sideband** (below); both are present, hence "double sideband", and there is no line at $f_c$ itself, hence "suppressed carrier".

**Transmission bandwidth:** $B_T = 2W$. Twice the message bandwidth, for both DSB-SC and AM.

**Transmitted power:** $P_T = \tfrac12 A_c^2 P_m$ (the cosine contributes the factor $\tfrac12$; see [1.1](01-01-signals-and-spectra-recalled.md) P1c). All of it is message power.

**Coherent (synchronous) detection.** Multiply the received signal by a local oscillator $\cos(2\pi f_ct+\phi)$ and low-pass filter:

$$s(t)\cos(2\pi f_ct+\phi) = A_cm(t)\cos(2\pi f_ct)\cos(2\pi f_ct+\phi) = \frac{A_c}{2}m(t)\cos\phi + \frac{A_c}{2}m(t)\cos(4\pi f_ct+\phi).$$

The second term sits at $2f_c$ and the filter kills it, leaving

$$v_o(t) = \frac{A_c}{2}m(t)\cos\phi .$$

*In words: coherent detection recovers the message scaled by the cosine of the phase error.* At $\phi=0$ this is perfect; at $\phi = \pi/2$ the output is **zero** — the *quadrature null effect*. A slow drift in $\phi$ makes the output fade in and out, so a practical DSB receiver needs a phase-locked loop. That cost is the whole motivation for what follows.

**Conventional AM.**

$$s_{\rm AM}(t) = A_c\big[1 + k_a m(t)\big]\cos(2\pi f_ct),$$

where $k_a$ (per volt) is the **amplitude sensitivity**. Define the **modulation index**

$$\mu = k_a\,|m|_{\max} = \frac{A_{\max}-A_{\min}}{A_{\max}+A_{\min}},$$

with $A_{\max}, A_{\min}$ the largest and smallest envelope excursions. *In words: $\mu$ is the fractional depth of the amplitude swing — the second form lets you read it straight off an oscilloscope trace.*

**Envelope detection works if and only if $\mu\le 1$** (and $f_c\gg W$, so the envelope varies slowly enough to follow). At $\mu>1$ the envelope $|1+k_am(t)|$ rectifies the negative excursions and the recovered signal is a distorted fold of the message — **overmodulation**.

**Power efficiency.** Expand:

$$s_{\rm AM}(t) = \underbrace{A_c\cos(2\pi f_ct)}_{\text{carrier}} + \underbrace{A_ck_am(t)\cos(2\pi f_ct)}_{\text{sidebands}} .$$

These two are orthogonal (the message has no DC), so powers add:

$$P_T = \underbrace{\frac{A_c^2}{2}}_{P_{\rm carrier}} + \underbrace{\frac{A_c^2k_a^2P_m}{2}}_{P_{\rm sidebands}}, \qquad \boxed{\;\eta = \frac{P_{\rm sidebands}}{P_T} = \frac{k_a^2P_m}{1+k_a^2P_m}.\;}$$

*In words: efficiency is the fraction of transmitted power doing useful work; the rest is a beacon at $f_c$.* For a single tone of amplitude $A_m$, $k_a^2P_m = \mu^2/2$, so

$$\eta = \frac{\mu^2/2}{1+\mu^2/2} = \frac{\mu^2}{2+\mu^2} \quad\Longrightarrow\quad \eta_{\max} = \frac{1}{3} = 33.3\%\ \text{at }\mu=1 .$$

Two-thirds of the power in the carrier, in the *best* case, for the *most* favourable message. Real speech, with its high peak-to-average ratio, runs nearer 10–20%.

**Noise performance.** With received signal power $P_R$ and noise density $N_0$, define the reference $\mathrm{SNR}_{\rm base} = P_R/(N_0W)$ — the SNR you would get sending the message at baseband with the same power. The **figure of merit** is $\mathrm{SNR}_o/\mathrm{SNR}_{\rm base}$:

| Scheme | Figure of merit | Reading |
|---|---|---|
| DSB-SC (coherent) | $1$ | as good as baseband, at $2W$ of bandwidth |
| SSB (coherent) | $1$ | as good as baseband, at $W$ — see [1.5](01-05-ssb-vsb-multiplexing.md) |
| AM (envelope) | $\eta = \dfrac{k_a^2P_m}{1+k_a^2P_m} \le \dfrac13$ | at least 4.8 dB worse |

*In words: DSB-SC loses nothing to modulation; conventional AM loses exactly the power it wasted on the carrier.* The reason DSB-SC breaks even despite doubling the bandwidth is that coherent detection adds the two sidebands' signal *coherently* (amplitudes add, so power ×4) but their noise *incoherently* (powers add, so ×2) — a net factor of 2 that exactly cancels the factor of 2 in admitted noise bandwidth.

## Picture

![Three stacked time-domain waveforms sharing an axis. Top: a slow message sinusoid. Middle: DSB-SC, a fast carrier whose amplitude follows the message and flips phase where the message crosses zero, with the message envelope drawn dashed and clearly not tracking. Bottom: conventional AM with mu = 0.5, whose upper envelope is a faithful shifted copy of the message.](assets/01-04-fig1.svg)

The middle panel is the picture worth carrying: at every message zero-crossing, DSB-SC's carrier **reverses phase**, and the envelope (dashed) traces $|m(t)|$, not $m(t)$. An envelope detector on a DSB-SC signal produces the rectified message — badly distorted. The bottom panel shows what the added carrier buys: lifting everything by $A_c$ keeps $1+k_am(t)$ positive, so the envelope is a genuine copy of the message with a DC offset the detector's capacitor removes. **The carrier's entire job is to keep the envelope from crossing zero.**

## Worked examples

**Example 1 (reading an AM signal off the bench).** An oscilloscope shows an AM waveform whose envelope swings between $A_{\max} = 12$ V and $A_{\min} = 4$ V, on a 1 MHz carrier, modulated by a 5 kHz tone.

*Modulation index:*

$$\mu = \frac{12-4}{12+4} = \frac{8}{16} = 0.5 .$$

*Carrier amplitude:* the envelope is $A_c(1+\mu\cos)$, so $A_{\max}=A_c(1+\mu)$ gives $A_c = 12/1.5 = 8$ V (check: $A_c(1-\mu) = 8(0.5)=4$ ✓).

*Powers* (into 1 ohm):

$$P_{\rm carrier} = \frac{A_c^2}{2} = 32\ \text{W}, \qquad P_{\rm sidebands} = \frac{A_c^2\mu^2}{4} = \frac{64(0.25)}{4} = 4\ \text{W},$$

so $P_T = 36$ W and

$$\eta = \frac{4}{36} = 11.1\% = \frac{\mu^2}{2+\mu^2}=\frac{0.25}{2.25}\ \checkmark.$$

Nearly 90% of the transmitter is heating the air with a tone that says nothing. Each sideband individually holds 2 W — a fact [1.5](01-05-ssb-vsb-multiplexing.md) exploits.

*Bandwidth:* $B_T = 2W = 10$ kHz; the spectrum is a line at 1 MHz of amplitude 8 and lines at $1\ \text{MHz}\pm 5$ kHz of amplitude $\mu A_c/2 = 2$ V each.

**Example 2 (why the carrier is worth it anyway — a power comparison).** A station must deliver 4 W of *sideband* power to its listeners. Compare the transmitter it needs under AM at $\mu=0.5$ versus DSB-SC.

- AM: from Example 1, 36 W total.
- DSB-SC: 4 W total. Nine times less power — a 9.5 dB saving.

So why did broadcasting choose AM? Count receivers. One transmitter serves a million receivers. Under DSB-SC each of those million receivers needs a carrier-recovery loop; under AM each needs a diode. In 1925 that difference was the difference between a consumer product and a laboratory instrument. **The system-level optimum minimizes total cost, not transmitter power** — and the answer flips whenever the receiver count is small. Point-to-point microwave links, satellite uplinks, and every digital scheme in Module 3 use suppressed-carrier formats, because there the receiver is not a mass-market commodity.

## Watch out

- **You might think DSB-SC's envelope is the message.** It is $|m(t)|$ — the carrier flips phase at each zero crossing. Envelope-detecting DSB-SC is a classic exam trap; it gives full-wave rectified output, which for a tone doubles the frequency.
- **You might think a bigger modulation index is always better.** Better up to $\mu=1$; catastrophic past it. At $\mu>1$ the envelope folds and the distortion is irreversible. Broadcast transmitters therefore run limiters that hold peaks just under 100%.
- **You might think the 3 dB from "two sidebands instead of one" makes DSB better than SSB.** It doesn't: DSB and SSB have the *same* figure of merit (1). DSB's coherent sideband combining exactly pays back its doubled noise bandwidth. DSB's extra bandwidth buys you nothing at all in SNR — which is [1.5](01-05-ssb-vsb-multiplexing.md)'s opening argument.
- **You might think a small phase error just attenuates the output.** For DSB, yes — output scales as $\cos\phi$, and the SNR is unaffected because the noise scales identically. But a *frequency* error $\Delta f$ gives $\cos(2\pi\Delta f t)$, a beat that periodically nulls the output entirely. Frequency errors are qualitatively worse than phase errors.

## One-liner

> AM adds a carrier that carries nothing so the receiver can be a diode; DSB-SC spends every watt on message and makes the receiver find the phase itself.

## Problems

**P1 (🟢)** A 1 kW AM transmitter is modulated to $\mu = 0.8$ by a single tone. (a) Find the carrier power and the total sideband power. (b) Find the efficiency. (c) If the modulation index is raised to 1.0, what total power must the transmitter deliver to keep the *carrier* power the same, and what is the new sideband power?

**P2 (🟡)** A DSB-SC receiver's local oscillator has a constant frequency offset: it produces $\cos(2\pi(f_c+\Delta f)t)$ instead of $\cos(2\pi f_ct)$. (a) Find the low-pass filter output. (b) For a 1 kHz message tone and $\Delta f = 100$ Hz, what does the listener hear? (c) Explain why this artifact ("Donald Duck" speech) is much more objectionable than the pure attenuation caused by a constant phase error.

**P3 (🔴)** A message $m(t) = 4\cos(2\pi\cdot 1000t) + 2\cos(2\pi\cdot 3000t)$ volts amplitude-modulates a 1 MHz carrier with $A_c = 10$ V and $k_a = 0.1$/V. (a) Is the signal within the envelope-detectable region? (b) List every spectral line, with frequency and amplitude. (c) Find the efficiency. (d) Compare that efficiency to the single-tone formula $\mu^2/(2+\mu^2)$ evaluated at the same peak index, and explain the discrepancy in terms of peak-to-average power ratio.

<details>
<summary>Solutions</summary>

**P1** (a) $P_T = P_c(1+\mu^2/2)$ with $\mu=0.8$: $1 + 0.32 = 1.32$, so

$$P_c = \frac{1000}{1.32} = 757.6\ \text{W}, \qquad P_{\rm SB} = 1000 - 757.6 = 242.4\ \text{W}.$$

(b) $\eta = 242.4/1000 = 24.2\%$. (Check: $\mu^2/(2+\mu^2) = 0.64/2.64 = 24.2\%$ ✓.)

(c) Carrier held at 757.6 W and $\mu = 1$ gives $P_T = P_c(1+1/2) = 757.6\times 1.5 = 1136.4$ W, of which the sidebands are $1136.4-757.6 = 378.8$ W. Note what happened: to raise sideband power by 56%, the transmitter's total output had to rise by only 14% — the carrier is already paid for. This is why broadcasters push modulation as close to 100% as the limiter allows; the marginal watt is cheap.

**P2** (a) Received $s(t)=A_cm(t)\cos(2\pi f_ct)$ times the local oscillator:

$$A_cm(t)\cos(2\pi f_ct)\cos(2\pi(f_c+\Delta f)t) = \frac{A_c}{2}m(t)\cos(2\pi\Delta f\,t) + \frac{A_c}{2}m(t)\cos(2\pi(2f_c+\Delta f)t).$$

The low-pass filter removes the high term, leaving

$$v_o(t) = \frac{A_c}{2}\,m(t)\cos(2\pi\Delta f\,t).$$

(b) The message tone is multiplied by a 100 Hz cosine, which by the frequency-shift property splits it into two tones at $1000\pm 100 = 900$ and $1100$ Hz, each at half amplitude. So instead of one 1 kHz tone the listener hears a pair at 900 and 1100 Hz — plus, because the output also swings through zero twice per 100 Hz cycle, a 200 Hz warble in loudness.

(c) A constant phase error multiplies everything by the same constant $\cos\phi$: the *relative* structure of the message is untouched, so speech merely gets quieter (and the SNR is unchanged, since noise is scaled identically). A frequency error shifts every component by the same *additive* $\Delta f$ — which destroys the harmonic ratios that make speech intelligible: a voice's harmonics at 200, 400, 600 Hz become 300, 500, 700 Hz, no longer integer multiples of anything. The ear is exquisitely sensitive to that inharmonicity. Hence: phase errors attenuate, frequency errors *distort*.

**P3** (a) $|m|_{\max} = 4+2 = 6$ V (the peaks coincide at $t=0$). So $\mu = k_a|m|_{\max} = 0.1\times 6 = 0.6 \le 1$ ✓ — envelope detection is safe.

(b) $s(t) = 10[1+0.1m(t)]\cos(2\pi\cdot10^6t)$. Expanding, with $0.1\times 4 = 0.4$ and $0.1\times 2 = 0.2$:

$$s(t) = 10\cos(2\pi 10^6 t) + 4\cos(2\pi 10^3t)\cos(2\pi 10^6t) + 2\cos(2\pi 3\cdot10^3t)\cos(2\pi10^6t).$$

Each product splits into two lines at half amplitude:

| Frequency (MHz) | Amplitude (V) |
|---|---|
| 1.000 | 10 (carrier) |
| $1.000 \pm 0.001$ | 2 each |
| $1.000 \pm 0.003$ | 1 each |

Bandwidth $B_T = 2\times 3\ \text{kHz} = 6$ kHz, set by the *highest* message component.

(c) $P_m = \frac{4^2}{2}+\frac{2^2}{2} = 8+2 = 10$ W. Then $k_a^2P_m = 0.01\times 10 = 0.1$ and

$$\eta = \frac{0.1}{1.1} = 9.1\%.$$

(Cross-check from the lines: carrier power $10^2/2 = 50$ W; sidebands $4\times(2^2/2)\cdot\frac12$… more simply, $2^2/2\times 2 + 1^2/2\times 2 = 4+1 = 5$ W. Then $5/55 = 9.1\%$ ✓.)

(d) The single-tone formula at $\mu = 0.6$ predicts $0.36/2.36 = 15.3\%$ — noticeably higher than the true 9.1%. The reason is **peak-to-average power ratio**. Efficiency depends on average message power $P_m$, but the overmodulation constraint $\mu\le1$ depends on the message *peak*. A single tone has PAPR 2; this two-tone message has peak 6 V and average power 10 W, so PAPR $= 36/10 = 3.6$. A peakier message hits the $\mu=1$ ceiling while delivering less average sideband power, so it is less efficient at the same index. This is exactly why speech — PAPR often over 10 — runs at single-digit AM efficiency in practice, and why broadcast chains apply heavy compression before the modulator: compression lowers PAPR, which directly buys efficiency.

</details>

## Flashback

**From Lesson 1.3 (Noise, SNR and filtering):** A receiver with effective noise temperature 290 K has a bandwidth of 10 kHz and receives $-110$ dBm of signal. (a) Find the noise power in dBm. (b) Find the SNR in dB. (c) If the bandwidth were widened to 100 kHz with no change in signal, what happens to the SNR?

<details>
<summary>Solution</summary>

(a) At 290 K, $N_0 = -174$ dBm/Hz. Over 10 kHz ($10\log_{10}10^4 = 40$ dB):

$$P_N = -174 + 40 = -134\ \text{dBm}.$$

(b) $\mathrm{SNR} = -110 - (-134) = 24$ dB.

(c) Ten times the bandwidth admits ten times the noise, $+10$ dB, with no change in signal. SNR falls to $24-10 = 14$ dB. This is exactly the argument for making $B_T$ no wider than the modulation requires — and the reason SSB, at half of DSB's bandwidth, is attractive.

</details>

## Connections

- **Backward:** the whole lesson is one property from [1.1](01-01-signals-and-spectra-recalled.md) — multiplying by a cosine slides two half-copies — plus the noise accounting from [1.3](01-03-noise-snr-filtering.md).
- **Forward:** [1.5](01-05-ssb-vsb-multiplexing.md) deletes one of the two redundant sidebands and halves $B_T$; [1.6](01-06-angle-modulation-fm-pm.md) abandons amplitude entirely and trades bandwidth *for* SNR, going the other way on the same axis.
- **Sideways:** coherent detection — multiply by a reference and low-pass — is the lock-in amplifier of experimental physics and the correlator of [3.1](03-01-signal-space-matched-filter.md), where it reappears as an inner product against a known signal.
