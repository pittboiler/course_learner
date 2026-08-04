# Signals & Systems — Syllabus

> Engineering · Tier 1 · ~21 lessons · Prereqs: [ode-refresher](../ode-refresher/syllabus.md), [fourier-analysis](../fourier-analysis/syllabus.md) · Roadmap id: `signals-systems`

## Goal

Learn the engineer's operating system for anything that varies in time: model a signal, model a system that acts on it, and predict the output without solving a differential equation from scratch. The single organizing idea is that a linear time-invariant system is completely described by its response to one impulse — so its action on *any* input is a convolution, and in the frequency domain it becomes plain multiplication. You'll cross fluently between the time domain and four transform domains (Fourier series, Fourier transform, Laplace, z), read stability and resonance straight off a pole–zero diagram, sample a continuous signal without losing it, compute a small DFT by hand and say what the FFT buys you, and design a first working filter.

Deliberately scoped: signals here are deterministic — random signals, noise, and stochastic processes are `communications`; wavelets and multirate processing get a one-sentence mention. This is the classical, mostly-by-hand signals course a physicist or engineer actually reaches for, kept honest.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify a system as linear / time-invariant / causal / stable / memoryless and prove each verdict from the definitions
- [ ] Compute the output of an LTI system by convolution in continuous time (integral) and discrete time (sum), and read off the impulse and step responses
- [ ] Explain why complex exponentials are the eigenfunctions of every LTI system, and use that to turn filtering into multiplication by a frequency response
- [ ] Compute a continuous-time Fourier series and Fourier transform of a signal and interpret its magnitude/phase spectrum
- [ ] Take a Laplace transform, find its region of convergence, and recover the signal by inversion / partial fractions
- [ ] Locate the poles and zeros of a transfer function and read stability, resonance, and transient behavior directly off the s-plane
- [ ] Find the Nyquist rate of a band-limited signal, predict exactly which frequency a given sample rate aliases to, and reconstruct the original
- [ ] Compute a small DFT by hand, interpret its bins as physical frequencies, and explain what the FFT changes computationally (not conceptually)
- [ ] Take a z-transform with its ROC, and read stability and frequency response off the z-plane pole–zero map
- [ ] Turn a difference equation into a transfer function and a block-diagram realization, and tell FIR from IIR
- [ ] Design a first-order low- or high-pass filter, and explain why the ideal brick-wall filter is unrealizable
- [ ] Describe how amplitude and frequency modulation move a signal's spectrum, and why that lets many signals share one channel

## Modules

### Module 1: Signals and LTI systems

Build the two vocabularies — signals and systems — and arrive at the one theorem the whole course rests on: an LTI system *is* its impulse response, applied by convolution.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Signals: the continuous and discrete worlds | Describe, transform, and classify a signal in either time domain | continuous vs. discrete time, energy vs. power signals, time shift / reversal / scaling, even–odd and periodic decomposition |
| 1.2 | The elementary signals | Build any test signal from a small basis kit and use the impulse's sifting property | complex exponential and sinusoid, unit step, continuous impulse $\delta(t)$ and discrete $\delta[n]$, sifting property, step–impulse relationship |
| 1.3 | Systems and their properties | Classify a system and prove linearity, time-invariance, causality, stability, memory | system as operator, linearity (superposition), time-invariance, causality, BIBO stability, memory/invertibility |
| 1.4 | Convolution in continuous time | Compute an LTI output as $y=x*h$ and extract impulse and step responses | impulse response $h(t)$, convolution integral, flip-shift-multiply-integrate, commutativity/associativity, step response as running integral |
| 1.5 | Convolution in discrete time | Compute the convolution sum and connect it to difference equations | impulse response $h[n]$, convolution sum, FIR vs. recursive computation, cascade/parallel interconnections of LTI systems |

**Boss problem 1:** A continuous-time LTI system has impulse response $h(t)=e^{-t}u(t)$. (a) Prove it is causal and BIBO-stable directly from $h$. (b) Find its step response $s(t)$. (c) For input $x(t)=e^{-2t}u(t)$, compute the output $y(t)=x*h$ by the convolution integral, and identify which term is the "natural" response of the system and which is forced by the input. *(Answers to check against: $s(t)=(1-e^{-t})u(t)$; $y(t)=(e^{-t}-e^{-2t})u(t)$.)*

### Module 2: Frequency-domain analysis — Fourier and Laplace

Change coordinates. Because complex exponentials pass through LTI systems only scaled, decomposing a signal into them turns convolution into multiplication — and Laplace extends the idea to growing/decaying signals, giving poles, zeros, and stability at a glance.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Eigenfunctions and the frequency response | Show $e^{st}$ passes through an LTI system scaled by $H(s)$, and define the frequency response | eigenfunction property of LTI systems, $H(j\omega)=\int h(t)e^{-j\omega t}dt$, magnitude and phase response, filtering as spectral shaping |
| 2.2 | Fourier series for periodic signals | Analyze a periodic signal into harmonics and pass it through a system term-by-term | continuous-time Fourier series (from `fourier-analysis`), harmonics, Parseval/average power, LTI response to a periodic input |
| 2.3 | The continuous-time Fourier transform of signals | Compute and interpret the spectrum of an aperiodic signal | Fourier transform pair, common transforms (box, exponential, sinusoid via impulses), bandwidth, transform of a system's impulse response |
| 2.4 | The Laplace transform and the ROC | Take a Laplace transform and pin down its region of convergence | bilateral/unilateral Laplace transform, region of convergence, ROC ↔ causality and stability, standard transform pairs and properties |
| 2.5 | Transfer functions: poles, zeros, and stability | Read a system's behavior straight off the s-plane | transfer function $H(s)$, poles and zeros, pole locations ↔ transient modes, stability = poles in the left half-plane, resonance |
| 2.6 | Solving systems with Laplace | Solve an ODE system with initial conditions and analyze feedback via algebra | inverse transform by partial fractions, solving LTI ODEs, initial/final value theorems, feedback interconnection $\tfrac{H}{1+GH}$ |

**Boss problem 2:** A system has transfer function $H(s)=\dfrac{1}{s^2+s+1}$. (a) Find its poles and prove the system is stable. (b) Invert to get the impulse response $h(t)$. (c) From $H(j\omega)$, find the frequency $\omega$ at which the magnitude response peaks (the resonant frequency) and explain physically why an underdamped second-order system resonates. *(Answers to check against: poles $s=-\tfrac12\pm j\tfrac{\sqrt3}{2}$; $h(t)=\tfrac{2}{\sqrt3}e^{-t/2}\sin\!\big(\tfrac{\sqrt3}{2}t\big)u(t)$; peak at $\omega=1/\sqrt2$.)* This underdamped second-order system reappears in `control-systems`.

### Module 3: Sampling and the discrete-time world

Cross the bridge from continuous to digital. The sampling theorem says exactly when a continuous signal survives being turned into numbers — and once it is numbers, the DTFT, DFT, and FFT are how you actually compute its spectrum.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Sampling and the Nyquist–Shannon theorem | Find the Nyquist rate and state exactly when sampling loses nothing | impulse-train sampling, spectral replication, the sampling theorem, Nyquist rate, band-limited signals |
| 3.2 | Aliasing and reconstruction | Predict the alias frequency of an undersampled tone and reconstruct a proper sample | aliasing / folding, apparent frequency, anti-aliasing filter, ideal (sinc) reconstruction, zero-order hold |
| 3.3 | The discrete-time Fourier transform | Compute and interpret the spectrum of a discrete signal | DTFT definition, $2\pi$-periodicity of the spectrum, frequency in radians/sample, relation to the sampled continuous spectrum |
| 3.4 | The discrete Fourier transform | Compute a small DFT by hand and read its bins as physical frequencies | DFT as sampled DTFT, twiddle factors, bin-to-frequency mapping, circular convolution, spectral leakage (brief) |
| 3.5 | The FFT: same answer, less work | Explain what the FFT changes and why it made spectral computing routine | divide-and-conquer, $O(N\log N)$ vs. $O(N^2)$, radix-2 decimation (sketch), practical impact on filtering and analysis |

**Boss problem 3:** The signal $x(t)=\cos(2\pi\cdot300\,t)+\cos(2\pi\cdot900\,t)$ (frequencies in Hz) is sampled at $f_s=800$ Hz. (a) What is the minimum sampling rate that would avoid aliasing? (b) At $f_s=800$ Hz, what apparent frequency does each tone produce, and which one is aliased? (c) Compute the 4-point DFT of the sequence $x[n]=\{1,2,3,4\}$ and state which bin carries the DC (average) value. *(Answers to check against: Nyquist rate $=1800$ Hz; $300\to300$ Hz, $900\to100$ Hz (aliased); DFT $=\{10,\,-2+2j,\,-2,\,-2-2j\}$, DC in bin 0.)*

### Module 4: The z-transform and filtering

The discrete counterpart of Laplace closes the loop: poles and zeros in the z-plane give stability and frequency response, difference equations become block diagrams, and you design your first filter — then see modulation, where the same spectra get shifted to share a channel.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The z-transform and its ROC | Take a z-transform, find the ROC, and connect the unit circle to the DTFT | z-transform definition, ROC as an annulus, ROC ↔ causality and stability, standard pairs, DTFT = z-transform on the unit circle |
| 4.2 | Discrete transfer functions and the z-plane | Read stability and frequency shape off the pole–zero map | system function $H(z)$, poles/zeros in the z-plane, stability = poles inside the unit circle, geometric frequency-response intuition |
| 4.3 | Difference equations and realizations | Convert a difference equation to $H(z)$ and a block diagram, and tell FIR from IIR | difference equation ↔ $H(z)$, direct-form realization, delays/adders/multipliers, FIR (all-zero) vs. IIR (poles) tradeoffs |
| 4.4 | Filter design basics | Design a first-order filter and explain why ideal filters are unrealizable | low/high/band-pass specs, ideal brick-wall vs. realizable response, passband/stopband/transition, first-order RC and its discrete analog |
| 4.5 | A taste of modulation | Explain how AM and FM move a signal's spectrum so many signals share one channel | amplitude modulation as spectral shift, sidebands, frequency modulation (intuition), why modulation enables multiplexing → `communications` |

**Boss problem 4:** A discrete system obeys $y[n]=x[n]+a\,y[n-1]$ with $a=0.9$. (a) Find $H(z)$, its pole, and its ROC for a causal system; is it stable? (b) Give the impulse response $h[n]$. (c) Evaluate the DC gain $H(e^{j0})$ and the Nyquist gain $H(e^{j\pi})$, and classify the filter as low-pass or high-pass. *(Answers to check against: $H(z)=\tfrac{1}{1-0.9z^{-1}}$, pole at $z=0.9$, ROC $|z|>0.9$, stable since inside the unit circle; $h[n]=0.9^{\,n}u[n]$; DC gain $=10$, Nyquist gain $\approx0.526$ → low-pass.)*

## Sources of truth

- Oppenheim, Willsky & Nawab, *Signals and Systems* — canonical notation for signals, LTI systems, and the transform conventions used here.
- Oppenheim & Schafer, *Discrete-Time Signal Processing* — the discrete-time, DFT/FFT, and z-transform conventions.
- Lathi, *Linear Systems and Signals* — for the intuition-first framing of convolution and frequency response.
