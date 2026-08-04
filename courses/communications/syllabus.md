# Communication Systems — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [signals-systems](../signals-systems/syllabus.md), [prob-stat-refresher](../prob-stat-refresher/syllabus.md) · Roadmap id: `communications`

## Goal

Build the working theory of how information rides a physical channel and survives noise: analog modulation, sampling and PCM, optimal detection with the matched filter, digital modulation and its bit-error rates, and the Shannon limit that caps them all. You leave able to reason quantitatively about bandwidth, power, and error rate for any link — and to say why a scheme is chosen. We stay in the mathematics of signals, noise, and information; we deliberately skip RF/antenna hardware depth and the full algebraic machinery of coding theory.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the power spectral density of a random signal or noise process at the output of an LTI system, and read an SNR off it
- [ ] Derive the transmitted spectrum and bandwidth of a DSB, SSB, or FM signal, and pick the right one for a bandwidth/power budget
- [ ] Apply the sampling theorem to choose a rate, diagnose aliasing, and size the PCM bit stream for a target SQNR
- [ ] Explain intersymbol interference and use the Nyquist criterion (and a raised-cosine pulse) to eliminate it
- [ ] Construct the matched filter for a known pulse and show it maximizes output SNR
- [ ] Derive the bit-error probability of BPSK, QPSK, and M-QAM in AWGN using the Q-function and a union bound
- [ ] Trade bandwidth efficiency against power efficiency across ASK/FSK/PSK/QAM on a single plot
- [ ] Compute channel capacity from the Shannon–Hartley formula and state how close a real link runs to it
- [ ] Encode and decode a Hamming block code, and compute its rate and minimum distance
- [ ] Estimate coding gain and locate the −1.6 dB Shannon limit on the BER curve
- [ ] Compare FDMA, TDMA, CDMA, and OFDM as ways to share one channel among many users

## Modules

### Module 1: Signals, Noise & Analog Modulation

From deterministic spectra to random noise, then the classical analog schemes — the setting in which every later idea about SNR and bandwidth first appears.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Signals & Spectra, Recalled | Move fluently between a signal and its spectrum and read off bandwidth & power | Fourier transform, energy vs power signals, Parseval, bandwidth measures |
| 1.2 | Random Processes & the PSD | Describe a random signal by its autocorrelation and power spectral density | Stationarity, ergodicity, autocorrelation, Wiener–Khinchin |
| 1.3 | Noise, SNR & Filtering | Push noise through an LTI system and compute the resulting SNR | Thermal/white/Gaussian noise, noise bandwidth, SNR, PSD through H(f) |
| 1.4 | Amplitude Modulation: DSB & AM | Modulate and coherently demodulate a message; size AM power efficiency | DSB-SC, conventional AM, envelope vs coherent detection, modulation index |
| 1.5 | SSB, VSB & Multiplexing | Halve the bandwidth with single-sideband and stack channels in frequency | Hilbert transform, SSB/VSB, frequency-division multiplexing |
| 1.6 | Angle Modulation: FM & PM | Derive the spectrum and bandwidth of an FM/PM signal and its noise advantage | Instantaneous frequency, modulation index, Carson's rule, FM SNR gain |

**Boss problem 1:** A 5 kHz tone frequency-modulates a 100 MHz carrier with peak frequency deviation 75 kHz. (a) Find the modulation index and the Carson-rule bandwidth. (b) Compare that bandwidth to DSB-SC of the same tone. (c) The received carrier-to-noise ratio is 20 dB; explain qualitatively why the demodulated FM output SNR exceeds it, and name the cost you paid in part (a).

### Module 2: Sampling & Digital Transmission

Turn a continuous waveform into bits, then push those bits through a band-limited channel without letting neighboring symbols smear into each other.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Sampling Theorem & Aliasing | Choose a sampling rate and diagnose when a spectrum folds | Nyquist rate, ideal/natural/flat-top sampling, aliasing, reconstruction |
| 2.2 | Quantization & PCM | Convert samples to bits and predict the quantization-noise floor | Uniform quantization, SQNR, PCM, companding (μ-law) |
| 2.3 | Line Codes & Baseband Pulses | Map bits to waveforms and compare their spectra and DC behavior | NRZ/RZ/Manchester, pulse shaping, power spectra of line codes |
| 2.4 | ISI & the Nyquist Criterion | Shape pulses so symbols don't interfere, and read an eye diagram | Intersymbol interference, Nyquist's zero-ISI criterion, raised cosine, eye pattern |
| 2.5 | Equalization, Briefly | Undo a channel's linear distortion at the receiver | Channel distortion, zero-forcing equalizer, tap weights |

**Boss problem 2:** An audio signal band-limited to 4 kHz is sampled at the Nyquist rate and PCM-encoded with 256 uniform levels. (a) Give the sampling rate, bits per sample, and bit rate. (b) Estimate the SQNR in dB. (c) Using binary transmission and an ideal Nyquist channel, find the minimum bandwidth needed, and (d) state what changes if you switch to 4-level (2 bits/symbol) signaling.

### Module 3: Detection, Digital Modulation & BER

The heart of the course: geometry turns "which symbol was sent?" into a distance question, the matched filter maximizes SNR, and every modulation's error rate falls out of one Gaussian tail.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Signal Space & the Matched Filter | Represent signals as vectors and build the SNR-maximizing receiver | Orthonormal basis, correlator/matched filter, output SNR maximization |
| 3.2 | Optimal Detection in AWGN | Draw decision regions and compute error probability with the Q-function | ML/MAP decisions, decision regions, Q-function, minimum-distance rule |
| 3.3 | Binary Modulation & BER | Derive the bit-error rate of OOK, BFSK, and BPSK | ASK/OOK, coherent BFSK, BPSK, $Q(\sqrt{2E_b/N_0})$ |
| 3.4 | Going M-ary: QPSK & M-PSK | Send more bits per symbol and pay for it in required $E_b/N_0$ | QPSK as two BPSK channels, Gray coding, M-PSK constellations |
| 3.5 | QAM & the Union Bound | Analyze rectangular QAM and bound symbol error with nearest neighbors | QAM constellations, average energy, union bound, SER→BER via Gray code |
| 3.6 | Power vs Bandwidth Efficiency | Place every scheme on the bandwidth-efficiency / $E_b/N_0$ plane | Spectral efficiency, power efficiency, the efficiency trade-off plot |

**Boss problem 3:** A BPSK link operates at $E_b/N_0 = 9.6$ dB over an AWGN channel. (a) Compute its bit-error probability. (b) Show that QPSK achieves the *same* BER at the *same* $E_b/N_0$, and explain the geometric reason. (c) State what QPSK buys you for that equal error performance, and what it does not.

### Module 4: Capacity & Coding

The ceiling and the ladder: Shannon's limit says how fast a noisy channel *can* carry information, coding is how you climb toward it, and multiple access is how many users share the climb. The capacity thread here is the bridge into [information-theory](../information-theory/syllabus.md).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Entropy & Mutual Information | Measure information and the reduction of uncertainty a channel provides | Entropy, joint/conditional entropy, mutual information, the BSC |
| 4.2 | Channel Capacity & the Shannon Limit | Compute capacity and locate the −1.6 dB power limit | Channel coding theorem, Shannon–Hartley, capacity vs $E_b/N_0$ |
| 4.3 | Error-Control Coding: Block Codes | Encode/decode a linear block code and reason about its distance | Linear block codes, generator/parity-check matrices, Hamming codes, syndrome decoding |
| 4.4 | Convolutional Codes & Viterbi | Encode with memory and decode on a trellis | Shift-register encoders, trellis, Viterbi decoding, coding gain |
| 4.5 | Multiplexing & Multiple Access | Share one channel among many users in frequency, time, or code | FDMA/TDMA/CDMA, spread spectrum, an OFDM first look |

**Boss problem 4:** A telephone-grade channel has bandwidth 3.1 kHz and SNR 30 dB. (a) Compute its Shannon capacity. (b) A real modem runs at 28.8 kbps; how close to capacity is that? (c) As spectral efficiency $\to 0$, what limiting value of $E_b/N_0$ does capacity demand, and what does that number mean for a power-starved deep-space link?

## Sources of truth

- Haykin & Moher, *Communication Systems* — notation and the analog/random-process treatment
- Proakis & Salehi, *Digital Communications* / *Communication Systems Engineering* — signal-space, detection, and BER conventions
- Cover & Thomas, *Elements of Information Theory* — for the capacity module's rigor level and the bridge to `information-theory`
