# Communication Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is a long argument about two budgets — **watts** and **hertz** — and
one enemy, **noise**. This card holds the notation (which is where most of the
real mistakes happen), the modulation and bandwidth formulas, the error-rate
table, the $Q$-function values, the capacity bounds, and the coding parameters,
plus every prerequisite the course uses without deriving.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $f$, $\omega$ | frequency in hertz and in rad/s, $\omega = 2\pi f$. This course uses **hertz** | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $G(f)$ | Fourier transform of $g(t)$ — the recipe of sinusoids making up the signal | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $E$, $P$ | total energy (joules) and average power (watts). A signal has finite one **or** the other | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $\Psi_g(f) = \lvert G(f)\rvert^2$ | energy spectral density, J/Hz — for *deterministic* finite-energy signals | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $W$ | message (baseband) bandwidth, one-sided | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $B_T$, $B$ | transmission bandwidth of the modulated signal — **full block**, for bandpass | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $\operatorname{sinc}x$ | **normalized** here: $\sin(\pi x)/(\pi x)$, zeros at integers. `signals-systems` used the other one | [1.1](lessons/01-01-signals-and-spectra-recalled.md) |
| $R_X(\tau)$ | autocorrelation of a random process — how long it remembers | [1.2](lessons/01-02-random-processes-and-psd.md) |
| $S_X(f)$ | **power spectral density**, W/Hz — for random/power signals. Transform of $R_X$ | [1.2](lessons/01-02-random-processes-and-psd.md) |
| WSS | wide-sense stationary: constant mean, autocorrelation depending only on the lag | [1.2](lessons/01-02-random-processes-and-psd.md) |
| $N_0/2$ | **two-sided** white-noise PSD — the number you plot | [1.3](lessons/01-03-noise-snr-filtering.md) |
| $N_0$ | **one-sided** noise density, W/Hz — the number in $E_b/N_0$. $N_0 = kT_e$ | [1.3](lessons/01-03-noise-snr-filtering.md) |
| $B_N$ | equivalent noise bandwidth — width of the brick wall passing the same noise | [1.3](lessons/01-03-noise-snr-filtering.md) |
| $E_b/N_0$ | energy per bit over noise density — the *fair* comparison across rates | [1.3](lessons/01-03-noise-snr-filtering.md) |
| $T_e$ | effective system noise temperature (kelvin) | [1.3](lessons/01-03-noise-snr-filtering.md) |
| $m(t)$, $A_c$, $f_c$ | message, carrier amplitude, carrier frequency | [1.4](lessons/01-04-amplitude-modulation-dsb-am.md) |
| $\mu$, $k_a$ | AM modulation index and amplitude sensitivity (per volt) | [1.4](lessons/01-04-amplitude-modulation-dsb-am.md) |
| $\eta$ (Module 1) | AM **power efficiency** — the fraction of transmitted power in the sidebands | [1.4](lessons/01-04-amplitude-modulation-dsb-am.md) |
| $\hat m(t)$ | Hilbert transform of $m$ — every component phase-shifted by $-90°$ | [1.5](lessons/01-05-ssb-vsb-multiplexing.md) |
| $\tilde s = s_I+js_Q$ | complex envelope; $s(t) = \mathrm{Re}\{\tilde s e^{j2\pi f_ct}\}$ | [1.5](lessons/01-05-ssb-vsb-multiplexing.md) |
| $f_v$ | VSB vestige width | [1.5](lessons/01-05-ssb-vsb-multiplexing.md) |
| $f_i(t)$ | instantaneous frequency, $\dot\theta_i/2\pi$ — a *time-domain* object, not a spectrum | [1.6](lessons/01-06-angle-modulation-fm-pm.md) |
| $\Delta f$ (Module 1) | peak frequency deviation of an FM signal | [1.6](lessons/01-06-angle-modulation-fm-pm.md) |
| $\beta$, $D$ | FM modulation index (single tone) and deviation ratio (general message) | [1.6](lessons/01-06-angle-modulation-fm-pm.md) |
| $J_n(\beta)$ | Bessel function of the first kind — the FM sideband amplitudes | [1.6](lessons/01-06-angle-modulation-fm-pm.md) |
| $k_f$, $k_p$ | frequency sensitivity (Hz/V) and phase sensitivity (rad/V) | [1.6](lessons/01-06-angle-modulation-fm-pm.md) |
| $f_s$, $T_s$ (Module 2) | sampling frequency and sampling period, $f_s = 1/T_s$ | [2.1](lessons/02-01-sampling-theorem-aliasing.md) |
| $\tau$ (sampling) | sample-and-hold aperture width | [2.1](lessons/02-01-sampling-theorem-aliasing.md) |
| $\Delta$ | quantizer step size | [2.2](lessons/02-02-quantization-and-pcm.md) |
| $L$, $n$ | number of quantization levels and bits per sample, $L = 2^n$ | [2.2](lessons/02-02-quantization-and-pcm.md) |
| SQNR | signal-to-quantization-noise ratio | [2.2](lessons/02-02-quantization-and-pcm.md) |
| $\mu$-law, A-law | the two companding standards ($\mu=255$ N. America, $A=87.6$ Europe) | [2.2](lessons/02-02-quantization-and-pcm.md) |
| $T_b$, $R_b$ | bit duration and bit rate, $R_b = 1/T_b$ | [2.3](lessons/02-03-line-codes-baseband-pulses.md) |
| $a_k$, $g(t)$ | PAM symbol amplitudes and pulse shape | [2.3](lessons/02-03-line-codes-baseband-pulses.md) |
| $R_a[m]$ | discrete autocorrelation of the symbol sequence — the knob that carves spectral nulls | [2.3](lessons/02-03-line-codes-baseband-pulses.md) |
| $p(t)$, $p_k$ | end-to-end pulse response and its samples $p(kT)$ | [2.4](lessons/02-04-isi-nyquist-criterion.md) |
| ISI | intersymbol interference | [2.4](lessons/02-04-isi-nyquist-criterion.md) |
| $\alpha$ | raised-cosine roll-off factor, $0\le\alpha\le1$; **excess bandwidth** is $\alpha\times100\%$ | [2.4](lessons/02-04-isi-nyquist-criterion.md) |
| $T$, $R_s$ | symbol duration and symbol rate (baud), $R_s = 1/T$ | [2.4](lessons/02-04-isi-nyquist-criterion.md) |
| $c_n$ | equalizer tap weights | [2.5](lessons/02-05-equalization-briefly.md) |
| $\mu$ (LMS) | LMS step size — **not** the AM modulation index | [2.5](lessons/02-05-equalization-briefly.md) |
| DFE | decision-feedback equalizer | [2.5](lessons/02-05-equalization-briefly.md) |
| $\phi_i(t)$ | orthonormal basis function of the signal space | [3.1](lessons/03-01-signal-space-matched-filter.md) |
| $\mathbf{s}_m$ | coordinate vector of the $m$-th signal; $\lVert\mathbf{s}_m\rVert^2 = E_m$ | [3.1](lessons/03-01-signal-space-matched-filter.md) |
| $\rho$ | correlation coefficient between two equal-energy signals | [3.1](lessons/03-01-signal-space-matched-filter.md) |
| $Q(x)$ | Gaussian tail probability, $P(Z>x)$ for $Z\sim\mathcal N(0,1)$ | [3.2](lessons/03-02-optimal-detection-awgn.md) |
| $d_{ij}$, $d_{\min}$ | Euclidean distance between signal points; the smallest such | [3.2](lessons/03-02-optimal-detection-awgn.md) |
| ML, MAP | maximum-likelihood and maximum-a-posteriori detection | [3.2](lessons/03-02-optimal-detection-awgn.md) |
| $P_b$, $P_s$ | bit error probability and symbol error probability | [3.3](lessons/03-03-binary-modulation-ber.md) |
| $E_s$ | energy per symbol, $E_s = E_b\log_2M$ | [3.4](lessons/03-04-qpsk-and-m-psk.md) |
| $M$ | constellation size (points per symbol), carrying $\log_2M$ bits | [3.4](lessons/03-04-qpsk-and-m-psk.md) |
| $N_{\min}$ | average number of nearest neighbours in a constellation | [3.5](lessons/03-05-qam-and-union-bound.md) |
| PAPR | peak-to-average power ratio | [3.5](lessons/03-05-qam-and-union-bound.md) |
| $\eta$ (Module 3–4) | **spectral efficiency**, $R_b/B$ in bits/s/Hz. Note the clash with AM efficiency | [3.6](lessons/03-06-power-vs-bandwidth-efficiency.md) |
| $H(X)$ | entropy, bits/symbol — average uncertainty, and minimum description length | [4.1](lessons/04-01-entropy-mutual-information.md) |
| $H_b(p)$ | binary entropy function | [4.1](lessons/04-01-entropy-mutual-information.md) |
| $I(X;Y)$ | mutual information — the bits that survive the channel | [4.1](lessons/04-01-entropy-mutual-information.md) |
| $H(X\mid Y)$ | equivocation — the information the noise destroyed | [4.1](lessons/04-01-entropy-mutual-information.md) |
| BSC, BEC | binary symmetric channel (crossover $p$), binary erasure channel (erasure $\epsilon$) | [4.1](lessons/04-01-entropy-mutual-information.md) |
| $C$ | channel capacity, bits/use or bits/s | [4.2](lessons/04-02-channel-capacity-shannon-limit.md) |
| $(n,k)$, $R = k/n$ | block code length, dimension, and rate | [4.3](lessons/04-03-block-codes.md) |
| $\mathbf{G}$, $\mathbf{H}$ | generator and parity-check matrices; $\mathbf{G}\mathbf{H}^T=\mathbf{0}$ | [4.3](lessons/04-03-block-codes.md) |
| $\mathbf{s} = \mathbf{r}\mathbf{H}^T$ | syndrome — depends only on the error, never on the data | [4.3](lessons/04-03-block-codes.md) |
| $d_{\min}$ (coding) | minimum **Hamming** distance; for a linear code, the least nonzero weight | [4.3](lessons/04-03-block-codes.md) |
| $t$ | number of errors correctable, $t=\lfloor(d_{\min}-1)/2\rfloor$ | [4.3](lessons/04-03-block-codes.md) |
| $E_c$ | energy per **channel** symbol, $E_c = R\,E_b$ — the coding rate penalty | [4.3](lessons/04-03-block-codes.md) |
| $K$ | convolutional constraint length; $2^{K-1}$ trellis states | [4.4](lessons/04-04-convolutional-codes-viterbi.md) |
| $d_{\rm free}$ | free distance of a convolutional code | [4.4](lessons/04-04-convolutional-codes-viterbi.md) |
| $G_p$ | spread-spectrum processing gain, $R_c/R_b$ | [4.5](lessons/04-05-multiplexing-multiple-access.md) |
| $\Delta f$ (OFDM) | subcarrier spacing, $=1/T_s$. **Not** the FM deviation | [4.5](lessons/04-05-multiplexing-multiple-access.md) |

**Symbol collisions to keep straight.** $\eta$ is AM power efficiency in
[1.4](lessons/01-04-amplitude-modulation-dsb-am.md) and spectral efficiency from
[3.6](lessons/03-06-power-vs-bandwidth-efficiency.md) onward. $\mu$ is the AM
modulation index in [1.4](lessons/01-04-amplitude-modulation-dsb-am.md), the
companding parameter in [2.2](lessons/02-02-quantization-and-pcm.md), and the LMS
step size in [2.5](lessons/02-05-equalization-briefly.md). $\Delta f$ is FM peak
deviation in [1.6](lessons/01-06-angle-modulation-fm-pm.md) and OFDM subcarrier
spacing in [4.5](lessons/04-05-multiplexing-multiple-access.md). $d_{\min}$ is
Euclidean in [3.2](lessons/03-02-optimal-detection-awgn.md) and Hamming in
[4.3](lessons/04-03-block-codes.md). $T$ is a symbol period in Module 2–3 but a
temperature in [1.3](lessons/01-03-noise-snr-filtering.md).

## Definitions

### Energy signal and power signal

Pulses have finite energy and zero average power; carriers, data streams and noise have infinite energy and finite average power. The two categories are mutually exclusive, and each has its own spectral-density object.

$$E = \int_{-\infty}^{\infty}\lvert g\rvert^2dt, \qquad P = \lim_{T\to\infty}\frac1T\int_{-T/2}^{T/2}\lvert g\rvert^2 dt$$

*Introduced:* [1.1](lessons/01-01-signals-and-spectra-recalled.md)

### Bandwidth conventions

Baseband bandwidth is quoted **one-sided** (a real message spanning $[-W,W]$ has bandwidth $W$); bandpass bandwidth is the **full width of one block**. Getting this backwards doubles or halves every Module 1 answer.

*Introduced:* [1.1](lessons/01-01-signals-and-spectra-recalled.md)

### Wide-sense stationary (WSS)

The statistics don't drift: the mean is constant, and how correlated two samples are depends only on the gap between them.

$$\mu_X(t) = \mu_X, \qquad R_X(t_1,t_2) = R_X(t_2-t_1)$$

*Introduced:* [1.2](lessons/01-02-random-processes-and-psd.md)

### Ergodicity

One long recording is representative of the whole ensemble — time averages equal ensemble averages. Ergodic implies stationary; the converse is false.

*Introduced:* [1.2](lessons/01-02-random-processes-and-psd.md)

### Power spectral density

How many watts per hertz a random signal carries at each frequency; the area under any slice is the power in that band.

$$S_X(f) = \int_{-\infty}^{\infty}R_X(\tau)e^{-j2\pi f\tau}d\tau, \qquad P_X = R_X(0) = \int S_X(f)\,df$$

*Introduced:* [1.2](lessons/01-02-random-processes-and-psd.md)

### AWGN

Additive white Gaussian noise: flat PSD at every frequency (so zero memory) and Gaussian at every instant (so fully described by a variance).

$$S_W(f) = \frac{N_0}{2}\ \forall f, \qquad R_W(\tau) = \frac{N_0}{2}\delta(\tau)$$

*Introduced:* [1.3](lessons/01-03-noise-snr-filtering.md)

### Equivalent noise bandwidth

The width of the ideal brick-wall filter, with the same peak gain, that would leak the same noise power as your real filter.

$$B_N = \frac{1}{2\lvert H\rvert^2_{\max}}\int_{-\infty}^{\infty}\lvert H(f)\rvert^2 df$$

*Introduced:* [1.3](lessons/01-03-noise-snr-filtering.md)

### Modulation index (AM)

The fractional depth of the amplitude swing; envelope detection works if and only if it is at most 1.

$$\mu = k_a\lvert m\rvert_{\max} = \frac{A_{\max}-A_{\min}}{A_{\max}+A_{\min}}$$

*Introduced:* [1.4](lessons/01-04-amplitude-modulation-dsb-am.md)

### Coherent detection

Multiply the received signal by a local carrier of the *same frequency and phase* and low-pass filter. Output scales as $\cos\phi$ in the phase error, and nulls entirely at $\phi = 90°$.

*Introduced:* [1.4](lessons/01-04-amplitude-modulation-dsb-am.md)

### Hilbert transform and analytic signal

An all-pass filter that shifts every positive-frequency component by $-90°$; adding $j$ times it produces a signal with no negative-frequency content.

$$\hat M(f) = -j\,\mathrm{sgn}(f)M(f), \qquad m_+(t) = m(t)+j\hat m(t)$$

*Introduced:* [1.5](lessons/01-05-ssb-vsb-multiplexing.md)

### Complex envelope

Strip the carrier and keep a complex baseband signal that carries all the information; the $I$ and $Q$ parts become the two axes of every constellation diagram.

$$s(t) = \mathrm{Re}\{\tilde s(t)e^{j2\pi f_ct}\} = s_I\cos(2\pi f_ct)-s_Q\sin(2\pi f_ct)$$

*Introduced:* [1.5](lessons/01-05-ssb-vsb-multiplexing.md)

### Complementary symmetry (VSB)

Whatever fraction of a frequency you attenuate on one side of the carrier, keep the complementary fraction on the other, so the two add back to flat after downconversion.

$$H(f_c+f)+H(f_c-f) = \text{constant}, \qquad \lvert f\rvert\le W$$

*Introduced:* [1.5](lessons/01-05-ssb-vsb-multiplexing.md) — reappears as the raised-cosine roll-off condition in [2.4](lessons/02-04-isi-nyquist-criterion.md)

### Instantaneous frequency

How fast the total phase is turning right now — a time-domain construct, not something a spectrum analyzer displays.

$$f_i(t) = \frac{1}{2\pi}\frac{d\theta_i}{dt}$$

*Introduced:* [1.6](lessons/01-06-angle-modulation-fm-pm.md)

### Threshold effect (FM)

Below roughly 10 dB carrier-to-noise ratio the noise phasor occasionally overtakes the signal phasor, the phase makes a full rotation, and output SNR collapses far faster than input SNR falls.

*Introduced:* [1.6](lessons/01-06-angle-modulation-fm-pm.md)

### Aliasing

Undersampling folds the frequency axis at every multiple of $f_s/2$; a component above $f_s/2$ reappears at $\lvert f-kf_s\rvert$ and is indistinguishable from a genuine one. The damage happens *at* the sampler and is permanent.

*Introduced:* [2.1](lessons/02-01-sampling-theorem-aliasing.md)

### Aperture effect

A sample-and-hold of width $\tau$ convolves with a rectangle, multiplying the spectrum by $\operatorname{sinc}(f\tau)$ — a known, invertible droop across the band, fixed by a $1/\operatorname{sinc}$ equalizer.

*Introduced:* [2.1](lessons/02-01-sampling-theorem-aliasing.md)

### Quantization noise

Rounding error, modelled as uniform on $[-\Delta/2,\Delta/2]$ and independent of the signal — an approximation valid only when the signal is busy enough to traverse many levels.

$$\sigma_q^2 = \frac{\Delta^2}{12}$$

*Introduced:* [2.2](lessons/02-02-quantization-and-pcm.md)

### Companding

Compress large amplitudes and stretch small ones before uniform quantization, then expand at the receiver — making the effective step size proportional to the signal, so SQNR stops tracking input level.

*Introduced:* [2.2](lessons/02-02-quantization-and-pcm.md)

### Line code

The mapping from bits to waveforms. Two independent design knobs: the **pulse shape** (sets the spectral envelope) and the **symbol correlations** (carve nulls into it).

*Introduced:* [2.3](lessons/02-03-line-codes-baseband-pulses.md)

### Intersymbol interference

Each pulse spreading into its neighbours' decision instants; unavoidable in a band-limited channel, and fatal unless the pulse is shaped to be zero at every *other* sampling instant.

*Introduced:* [2.4](lessons/02-04-isi-nyquist-criterion.md)

### Nyquist criterion for zero ISI

Shape the end-to-end pulse so it is 1 at its own sampling instant and exactly 0 at all the others — equivalently, so that spectral copies spaced $1/T$ apart sum to a constant.

$$p(nT) = \delta_{n0} \quad\Longleftrightarrow\quad \sum_{k}P\!\left(f+\frac kT\right) = T$$

*Introduced:* [2.4](lessons/02-04-isi-nyquist-criterion.md)

### Eye diagram

The received waveform overlaid on itself, two symbols at a time, triggered on the symbol clock. Vertical opening = noise margin; horizontal opening = timing margin.

*Introduced:* [2.4](lessons/02-04-isi-nyquist-criterion.md)

### Zero-forcing and MMSE equalizers

Zero-forcing inverts the channel exactly at $2N$ sampling instants and amplifies noise wherever the channel is weak; MMSE adds a noise floor to the denominator so it never divides by something tiny.

$$C_{\rm ZF}(f) = \frac{1}{P(f)}, \qquad C_{\rm MMSE}(f) = \frac{P^*(f)}{\lvert P(f)\rvert^2+N_0/(2\sigma_a^2)}$$

*Introduced:* [2.5](lessons/02-05-equalization-briefly.md)

### Noise enhancement

The cost of channel inversion: boosting the signal back up at a spectral notch boosts the noise added *after* the channel by exactly the same factor, so a linear equalizer never improves per-frequency SNR.

*Introduced:* [2.5](lessons/02-05-equalization-briefly.md)

### Signal space

Project the $M$ candidate waveforms onto an orthonormal basis; each becomes a short coordinate vector, energy becomes squared length, and the energy separating two signals becomes squared Euclidean distance.

$$E_m = \lVert\mathbf{s}_m\rVert^2, \qquad \int(s_i-s_j)^2dt = \lVert\mathbf{s}_i-\mathbf{s}_j\rVert^2$$

*Introduced:* [3.1](lessons/03-01-signal-space-matched-filter.md)

### Matched filter

The filter whose impulse response is the transmitted pulse reversed in time. Among *all* linear filters it maximizes output SNR at the sampling instant, and the maximum depends only on energy — never on pulse shape.

$$h(t) = g(T-t), \qquad \mathrm{SNR}_{\max} = \frac{2E}{N_0}$$

*Introduced:* [3.1](lessons/03-01-signal-space-matched-filter.md)

### ML and MAP detection

MAP maximizes the posterior and minimizes error probability; ML drops the prior and, for equal-energy signals, reduces to picking the nearest constellation point.

$$\hat m = \arg\max_m\left[\langle\mathbf{r},\mathbf{s}_m\rangle - \frac{E_m}{2}\right] \ \ (\text{ML})$$

*Introduced:* [3.2](lessons/03-02-optimal-detection-awgn.md)

### Pairwise error probability

The master formula: the chance of confusing two signals depends only on the distance between them, in units of the noise's standard deviation.

$$P(\mathbf{s}_i\to\mathbf{s}_j) = Q\!\left(\frac{d_{ij}}{\sqrt{2N_0}}\right)$$

*Introduced:* [3.2](lessons/03-02-optimal-detection-awgn.md)

### Gray coding

Label constellation points so adjacent ones differ in one bit; a symbol error then costs one bit error instead of several. Costs nothing, divides $P_b$ by $\log_2M$.

*Introduced:* [3.4](lessons/03-04-qpsk-and-m-psk.md)

### Union bound

The probability of *some* error is at most the sum of the pairwise probabilities. Loose in principle, accurate to a fraction of a percent below $10^{-3}$.

$$P(e\mid\mathbf{s}_m)\le\sum_{k\ne m}Q\!\left(\frac{d_{mk}}{\sqrt{2N_0}}\right) \;\approx\; N_{\min}\,Q\!\left(\frac{d_{\min}}{\sqrt{2N_0}}\right)$$

*Introduced:* [3.5](lessons/03-05-qam-and-union-bound.md)

### Spectral efficiency

Bits per second per hertz — the vertical axis of the bandwidth-efficiency plane, and the number the Shannon bound must be evaluated at.

$$\eta = \frac{R_b}{B_T} = \frac{\log_2M}{1+\alpha}$$

*Introduced:* [3.6](lessons/03-06-power-vs-bandwidth-efficiency.md)

### Entropy

Average surprise, in bits per symbol — simultaneously your uncertainty before seeing a symbol and the minimum number of binary digits needed to write it down.

$$H(X) = -\sum_i p_i\log_2p_i, \qquad 0\le H(X)\le\log_2K$$

*Introduced:* [4.1](lessons/04-01-entropy-mutual-information.md)

### Mutual information

The reduction in uncertainty about $X$ from observing $Y$ — the bits the channel actually delivered.

$$I(X;Y) = H(X)-H(X\mid Y) = H(Y)-H(Y\mid X)$$

*Introduced:* [4.1](lessons/04-01-entropy-mutual-information.md)

### Channel capacity

The largest mutual information any input distribution achieves — and, by the coding theorem, the exact boundary between "arbitrarily reliable" and "impossible".

$$C = \max_{p(x)}I(X;Y)$$

*Introduced:* [4.2](lessons/04-02-channel-capacity-shannon-limit.md)

### Shannon limit

The floor under every communication system: no scheme, at any bandwidth, with any code, can carry a bit for less than $\ln 2$ times the noise density.

$$\frac{E_b}{N_0}\bigg|_{\min} = \ln 2 = -1.59\ \text{dB} \quad(\text{as }\eta\to0)$$

*Introduced:* [4.2](lessons/04-02-channel-capacity-shannon-limit.md)

### Linear block code

A $k$-dimensional subspace of $\{0,1\}^n$ over $\mathrm{GF}(2)$: encoding is a matrix multiply, and the code is the null space of the parity-check matrix.

$$\mathbf{c} = \mathbf{m}\mathbf{G}, \qquad \mathbf{c}\mathbf{H}^T = \mathbf{0}$$

*Introduced:* [4.3](lessons/04-03-block-codes.md)

### Syndrome

The parity check applied to a received word. It depends only on the error pattern, and equals the sum of $\mathbf{H}$'s columns at the error positions.

$$\mathbf{s} = \mathbf{r}\mathbf{H}^T = \mathbf{e}\mathbf{H}^T$$

*Introduced:* [4.3](lessons/04-03-block-codes.md)

### Coding gain

The dB saving in required $E_b/N_0$ at a target error rate — after paying the rate penalty $E_c = R\,E_b$, which makes every transmitted symbol weaker first.

*Introduced:* [4.3](lessons/04-03-block-codes.md)

### Trellis and free distance

The encoder's state machine unrolled in time; every message is a path, and $d_{\rm free}$ is the least output weight of any path that leaves the all-zero state and returns.

*Introduced:* [4.4](lessons/04-04-convolutional-codes-viterbi.md)

### Viterbi algorithm

Exact maximum-likelihood sequence detection by dynamic programming: keep one survivor per state, discard every other path permanently, in $O(L\cdot 2^{K-1})$ time.

*Introduced:* [4.4](lessons/04-04-convolutional-codes-viterbi.md)

### Processing gain

The bandwidth expansion factor of a spread-spectrum signal, which is also its interference-rejection factor after despreading.

$$G_p = \frac{R_c}{R_b}, \qquad \frac{S}{I}\bigg|_{\rm out} = G_p\frac{S}{I}\bigg|_{\rm in}$$

*Introduced:* [4.5](lessons/04-05-multiplexing-multiple-access.md)

### Cyclic prefix

Copy the tail of each OFDM symbol to its front. If it exceeds the delay spread, ISI falls entirely inside the discarded prefix and channel convolution becomes per-subcarrier multiplication.

*Introduced:* [4.5](lessons/04-05-multiplexing-multiple-access.md)

## Formulas and rules

### Fourier properties used constantly

| Time | Frequency |
|---|---|
| $g(t-t_0)$ | $G(f)e^{-j2\pi ft_0}$ |
| $g(t)e^{j2\pi f_ct}$ | $G(f-f_c)$ |
| $g(t)\cos(2\pi f_ct)$ | $\tfrac12G(f-f_c)+\tfrac12G(f+f_c)$ |
| $g_1*g_2$ | $G_1G_2$ |
| $g_1g_2$ | $G_1*G_2$ |
| $\mathrm{rect}(t/T)$ | $T\operatorname{sinc}(fT)$ |
| $\delta(t)$ | $1$ |
| $\cos(2\pi f_0t)$ | $\tfrac12[\delta(f-f_0)+\delta(f+f_0)]$ |
| $e^{-a\lvert t\rvert}$ | $\dfrac{2a}{a^2+(2\pi f)^2}$ |
| triangle, base $2T$, height $h$ | $hT\operatorname{sinc}^2(fT)$ |

*From* [1.1](lessons/01-01-signals-and-spectra-recalled.md), [1.2](lessons/01-02-random-processes-and-psd.md)

### Noise and SNR

| Quantity | Formula |
|---|---|
| Noise density | $N_0 = kT_e$, $k = 1.38\times10^{-23}$ J/K |
| At 290 K | $N_0 = -174$ dBm/Hz $= -204$ dBW/Hz |
| dB shortcut | $N_{0,\rm dB} = -228.6 + 10\log_{10}T_e$ dBW/Hz |
| PSD through a filter | $S_Y(f) = \lvert H(f)\rvert^2S_X(f)$ |
| Noise through a filter | $P_N = N_0B_N$ |
| $E_b/N_0$ | $\dfrac{E_b}{N_0} = \dfrac{P}{N_0R_b} = \mathrm{SNR}\cdot\dfrac{B}{R_b}$ |
| Friis (cascade) | $T_e = T_1 + \dfrac{T_2}{G_1}+\dfrac{T_3}{G_1G_2}+\cdots$ |
| Decibels | $10\log_{10}$ for power, $20\log_{10}$ for amplitude |

*From* [1.3](lessons/01-03-noise-snr-filtering.md)

### Analog modulation

| Scheme | Signal | $B_T$ | Figure of merit |
|---|---|---|---|
| DSB-SC | $A_cm(t)\cos(2\pi f_ct)$ | $2W$ | 1 |
| AM | $A_c[1+k_am(t)]\cos(2\pi f_ct)$ | $2W$ | $\eta = \dfrac{k_a^2P_m}{1+k_a^2P_m}\le\tfrac13$ |
| SSB | $\tfrac{A_c}{2}[m\cos \mp \hat m\sin]$ | $W$ | 1 |
| VSB | filtered DSB | $W+f_v$ | between SSB and DSB |
| FM | $A_c\cos[2\pi f_ct+2\pi k_f\!\int\! m]$ | $2(\Delta f+W)$ | $3D^2(D+1)$ |
| PM | $A_c\cos[2\pi f_ct+k_pm(t)]$ | $2(\Delta f+W)$ | $\beta^2$-scaling, flat in $f_m$ |

Single-tone AM efficiency: $\eta = \dfrac{\mu^2}{2+\mu^2}$, maximum $1/3$ at $\mu=1$.
Single-tone FM: $\beta = \Delta f/f_m$, $\Delta f = k_fA_m$, $\sum_nJ_n^2(\beta)=1$, carrier null at $\beta = 2.405$.

*From* [1.4](lessons/01-04-amplitude-modulation-dsb-am.md), [1.5](lessons/01-05-ssb-vsb-multiplexing.md), [1.6](lessons/01-06-angle-modulation-fm-pm.md)

### Sampling, quantization, PCM

| Quantity | Formula |
|---|---|
| Nyquist rate | $f_s > 2W$ |
| Reconstruction | $m(t) = \sum_n m(nT_s)\operatorname{sinc}(f_st-n)$ |
| Apparent (aliased) frequency | $\lvert f - kf_s\rvert$ folded into $[0,f_s/2]$ |
| Practical rate | $f_s \ge f_{\rm pass}+f_{\rm stop}$ |
| Aperture droop | $\operatorname{sinc}(W\tau)$ |
| Step size | $\Delta = 2m_{\max}/L$, $L=2^n$ |
| Quantization noise | $\sigma_q^2 = \Delta^2/12$ |
| SQNR, general | $6.02n+4.77+10\log_{10}\dfrac{P_m}{m_{\max}^2}$ dB |
| SQNR, full-scale sinusoid | $6.02n+1.76$ dB |
| SQNR, $\mu$-law | $\approx 6.02n+4.77-20\log_{10}[\ln(1+\mu)]$ dB |
| Bit rate | $R_b = nf_s$ |

*From* [2.1](lessons/02-01-sampling-theorem-aliasing.md), [2.2](lessons/02-02-quantization-and-pcm.md)

### Line codes

| Code | PSD | DC? | Self-clocking? | Null-to-null BW |
|---|---|---|---|---|
| Unipolar NRZ | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b)+\tfrac{A^2}{4}\delta(f)$ | impulse | no | $R_b$ |
| Polar NRZ | $A^2T_b\operatorname{sinc}^2(fT_b)$ | peak at DC | no | $R_b$ |
| Polar RZ | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b/2)$ | reduced | partial | $2R_b$ |
| AMI | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b/2)\sin^2(\pi fT_b)$ | **null** | needs substitution | $R_b$ |
| Manchester | $A^2T_b\operatorname{sinc}^2(fT_b/2)\sin^2(\pi fT_b/2)$ | **null** | **always** | $2R_b$ |

General PAM spectrum: $S(f) = \dfrac{\lvert G(f)\rvert^2}{T_b}\displaystyle\sum_m R_a[m]e^{-j2\pi fmT_b}$.

*From* [2.3](lessons/02-03-line-codes-baseband-pulses.md)

### Pulse shaping and bandwidth

| Quantity | Formula |
|---|---|
| Ideal Nyquist bandwidth | $B = R_s/2$ (baseband), $R_s = 2B$ symbols/s max |
| Raised cosine, baseband | $B = \dfrac{R_s(1+\alpha)}{2}$ |
| Raised cosine, bandpass | $B_T = R_s(1+\alpha)$ |
| Bit rate | $R_b = R_s\log_2M$ |
| Spectral efficiency | $\eta = \dfrac{\log_2M}{1+\alpha}$ bits/s/Hz |
| RC tail decay | $\alpha=0$: $1/t$ (divergent worst-case ISI). $\alpha>0$: $1/t^3$ |

*From* [2.4](lessons/02-04-isi-nyquist-criterion.md)

### Error probabilities in AWGN

| Scheme | $P_b$ | $E_b/N_0$ at $10^{-5}$ |
|---|---|---|
| BPSK | $Q\!\left(\sqrt{2E_b/N_0}\right)$ | 9.6 dB |
| QPSK | $Q\!\left(\sqrt{2E_b/N_0}\right)$ | 9.6 dB |
| DPSK | $\tfrac12e^{-E_b/N_0}$ | 10.3 dB |
| Coherent BFSK / OOK | $Q\!\left(\sqrt{E_b/N_0}\right)$ | 12.6 dB |
| Non-coherent BFSK / OOK | $\tfrac12e^{-E_b/2N_0}$ | 13.4 dB |
| $M$-PSK ($P_s$) | $2Q\!\left(\sqrt{\tfrac{2E_b\log_2M}{N_0}}\sin\tfrac{\pi}{M}\right)$ | 13.0 (8), 17.4 (16), 22.3 (32) |
| $M$-QAM | $\tfrac{4}{\log_2M}\!\left(1-\tfrac{1}{\sqrt M}\right)Q\!\left(\sqrt{\tfrac{3\log_2M}{M-1}\tfrac{E_b}{N_0}}\right)$ | 13.4 (16), 17.8 (64), 22.5 (256) |
| $M$-FSK (bound) | $P_s\le(M-1)Q\!\left(\sqrt{E_b\log_2M/N_0}\right)$ | 11.4 (4), 9.0 (16), 7.5 (64) |

With Gray coding, $P_b \approx P_s/\log_2M$. Phase error costs $-20\log_{10}(\cos\phi)$ dB.

*From* [3.3](lessons/03-03-binary-modulation-ber.md), [3.4](lessons/03-04-qpsk-and-m-psk.md), [3.5](lessons/03-05-qam-and-union-bound.md), [3.6](lessons/03-06-power-vs-bandwidth-efficiency.md)

### The Q-function

$$Q(x) = \int_x^\infty\frac{e^{-u^2/2}}{\sqrt{2\pi}}du = \tfrac12\operatorname{erfc}\!\left(\tfrac{x}{\sqrt2}\right), \qquad Q(-x)=1-Q(x), \qquad Q(x)\le\tfrac12e^{-x^2/2}$$

| $x$ | $Q(x)$ | | $Q(x)$ | $x$ |
|---|---|---|---|---|
| 1 | $1.59\times10^{-1}$ | | $10^{-2}$ | 2.33 |
| 2 | $2.28\times10^{-2}$ | | $10^{-3}$ | 3.09 |
| 3 | $1.35\times10^{-3}$ | | $10^{-4}$ | 3.72 |
| 4 | $3.17\times10^{-5}$ | | $10^{-5}$ | 4.27 |
| 5 | $2.87\times10^{-7}$ | | $10^{-6}$ | 4.75 |
| 6 | $9.87\times10^{-10}$ | | $10^{-8}$ | 5.61 |

*From* [3.2](lessons/03-02-optimal-detection-awgn.md)

### Constellation geometry

| Constellation | $d_{\min}$ | $N_{\min}$ | Note |
|---|---|---|---|
| Binary antipodal | $2\sqrt{E_b}$ | 1 | optimal binary; $\rho=-1$ |
| Binary orthogonal | $\sqrt{2E_b}$ | 1 | 3 dB worse; $\rho=0$ |
| $M$-PSK | $2\sqrt{E_s}\sin(\pi/M)$ | 2 | $\approx6$ dB per extra bit |
| Square $M$-QAM | $\sqrt{6E_s/(M-1)}$ | $4(1-1/\sqrt M)$ | $\approx3$ dB per extra bit |

Two equal-energy signals: $d^2 = 2E(1-\rho)$. Square QAM PAPR $=\dfrac{3(\sqrt M-1)}{\sqrt M+1}$.

*From* [3.1](lessons/03-01-signal-space-matched-filter.md), [3.4](lessons/03-04-qpsk-and-m-psk.md), [3.5](lessons/03-05-qam-and-union-bound.md)

### Capacity and the Shannon bound

| Channel | Capacity |
|---|---|
| BSC, crossover $p$ | $1-H_b(p)$ bits/use |
| BEC, erasure $\epsilon$ | $1-\epsilon$ bits/use |
| Band-limited AWGN | $C = B\log_2(1+S/N)$ bits/s |
| Power-limited ($B\to\infty$) | $C\to1.44\,S/N_0$ bits/s |
| Bound at efficiency $\eta$ | $\dfrac{E_b}{N_0}\ge\dfrac{2^\eta-1}{\eta}$ |

| $\eta$ | 0 | 0.5 | 1 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|---|---|
| min $E_b/N_0$ (dB) | $-1.59$ | $-0.82$ | 0 | 1.76 | 5.74 | 10.2 | 15.0 |

$H_b(p) = -p\log_2p-(1-p)\log_2(1-p)$; $H_b(0.5)=1$, $H_b(0.1)=0.469$, $H_b(0.05)=0.286$, $H_b(0.01)=0.081$.

*From* [4.1](lessons/04-01-entropy-mutual-information.md), [4.2](lessons/04-02-channel-capacity-shannon-limit.md), [3.6](lessons/03-06-power-vs-bandwidth-efficiency.md)

### Coding

| Quantity | Formula |
|---|---|
| Rate penalty | $E_c/N_0 = R\,(E_b/N_0)$ |
| Detect $e$ errors | $d_{\min}\ge e+1$ |
| Correct $t$ errors | $d_{\min}\ge 2t+1$ |
| Correct $\rho$ erasures | $d_{\min}\ge\rho+1$ |
| Hamming code | $n=2^m-1$, $k=n-m$, $d=3$, $t=1$ |
| Extended Hamming (SECDED) | $n=2^m$, $d=4$ |
| Singleton bound | $d\le n-k+1$ (Reed–Solomon meets it) |
| Block-code gain (hard) | $\approx10\log_{10}[R(t+1)]$ dB |
| Convolutional gain (soft) | $\approx10\log_{10}(R\,d_{\rm free})$ dB |
| Soft-decision benefit | $10\log_{10}(\pi/2) = 1.96$ dB; 3-bit quantization captures ~1.8 dB |
| Viterbi complexity | $O(L\cdot2^{K-1})$; traceback depth $\approx5K$ |

Realized gains at $10^{-5}$: $(7,4)$ Hamming 0.6 dB; $(15,7)$ BCH 1.1 dB; $K=7$ rate-1/2 Viterbi (soft) 5.2 dB; concatenated RS + convolutional ~7 dB; turbo/LDPC ~9 dB.

*From* [4.3](lessons/04-03-block-codes.md), [4.4](lessons/04-04-convolutional-codes-viterbi.md)

### Multiple access and OFDM

| Quantity | Formula |
|---|---|
| Processing gain | $G_p = R_c/R_b$ |
| CDMA users | $N\approx1+\dfrac{G_p}{\nu\,(E_b/N_0)_{\rm req}}$, $\nu$ = voice activity |
| OFDM subcarrier spacing | $\Delta f = 1/T_s$ |
| OFDM bandwidth | $B = N\Delta f$ |
| Cyclic-prefix overhead | $T_{cp}/(T_s+T_{cp})$; needs $T_{cp} >$ delay spread |
| Per-subcarrier channel | $Y_k = H_kX_k+W_k$, equalize by $\hat X_k = Y_k/H_k$ |
| OFDM data rate | $\dfrac{N_{\rm data}\log_2M\cdot R_{\rm code}}{T_s+T_{cp}}$ |

*From* [4.5](lessons/04-05-multiplexing-multiple-access.md)

### Useful decibel anchors

| Ratio | dB | | Quantity | Value |
|---|---|---|---|---|
| $\times2$ | 3.01 | | $k$ (Boltzmann) | $-228.6$ dBW/K/Hz |
| $\times4$ | 6.02 | | $N_0$ at 290 K | $-174$ dBm/Hz |
| $\times10$ | 10 | | dBW → dBm | add 30 |
| $\times\pi/2$ | 1.96 | | $\ln2$ | $-1.59$ dB |
| $\times1/3$ | $-4.77$ | | BPSK at $10^{-5}$ | 9.6 dB |

*From* [1.3](lessons/01-03-noise-snr-filtering.md), [3.3](lessons/03-03-binary-modulation-ber.md), [4.2](lessons/04-02-channel-capacity-shannon-limit.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Fourier transform and its properties | [`fourier-analysis` 2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md), [`signals-systems` 2.3](../signals-systems/lessons/02-03-continuous-time-fourier-transform.md) |
| Convolution theorem | [`fourier-analysis` 2.3](../fourier-analysis/lessons/02-03-convolution-theorem.md) |
| Parseval / Plancherel | [`fourier-analysis` 1.4](../fourier-analysis/lessons/01-04-mean-square-parseval.md), [2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| The Dirac delta and its sifting property | [`fourier-analysis` 3.1](../fourier-analysis/lessons/03-01-dirac-delta-sifting.md) |
| LTI systems, impulse and frequency response | [`signals-systems` 1.4](../signals-systems/lessons/01-04-convolution-continuous-time.md), [2.1](../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) |
| Sampling theorem, spectral replication | [`signals-systems` 3.1](../signals-systems/lessons/03-01-sampling-nyquist-shannon.md), [`fourier-analysis` 4.1](../fourier-analysis/lessons/04-01-sampling-nyquist.md) |
| The DFT and the FFT | [`signals-systems` 3.4](../signals-systems/lessons/03-04-discrete-fourier-transform.md), [3.5](../signals-systems/lessons/03-05-the-fft.md) |
| FIR filters and difference equations | [`signals-systems` 4.3](../signals-systems/lessons/04-03-difference-equations-realizations.md) |
| Expectation, variance, and the Gaussian distribution | [`prob-stat-refresher` 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md), [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Variance of a uniform random variable, $\Delta^2/12$ | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Covariance and joint distributions | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Central limit theorem (why noise is Gaussian) | [`prob-stat-refresher` 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Likelihood-ratio tests | [`prob-stat-refresher` 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Binomial probabilities, $\binom{n}{i}p^i(1-p)^{n-i}$ | [`prob-stat-refresher` 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Inner products, orthogonality, Cauchy–Schwarz | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Gram–Schmidt orthogonalization | [`linalg-refresher` 4.3](../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) |
| Least squares and projection (the MMSE solution) | [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Null space, rank, solving linear systems | [`linalg-refresher` 1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md), [2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Bessel functions $J_n$ (values are quoted, not derived) | [`mathematical-methods-physics`](../mathematical-methods-physics/syllabus.md) |
| Arithmetic over $\mathrm{GF}(2)$ and finite fields | [`abstract-algebra`](../abstract-algebra/syllabus.md) |
| Entropy and coding theorems, with proofs | [`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md), [3.3](../information-theory/lessons/03-03-noisy-channel-coding-achievability.md) |
| Water-filling over parallel channels | [`information-theory` 4.2](../information-theory/lessons/04-02-gaussian-channel-water-filling.md) |
| Dynamic programming (the basis of Viterbi) | [`algorithms`](../algorithms/syllabus.md) |
| Thermal (Johnson–Nyquist) noise from first principles | [`condensed-matter`](../condensed-matter/syllabus.md) |

## Pitfalls

### Factors of two

- $N_0/2$ is the **two-sided** PSD you plot; $N_0$ is the **one-sided** density in $E_b/N_0$. Noise power in a bandpass filter of width $B$ is $N_0B$, not $N_0B/2$. Mixing them costs exactly 3 dB.
  *([1.3](lessons/01-03-noise-snr-filtering.md), [3.1](lessons/03-01-signal-space-matched-filter.md), [3.2](lessons/03-02-optimal-detection-awgn.md))*
- Multiplying by $\cos(2\pi f_ct)$ makes **two half-amplitude** copies at $\pm f_c$, not one copy at $f_c$. Dropping the $\tfrac12$ or the negative-frequency copy is the classic Module 1 slip.
  *([1.1](lessons/01-01-signals-and-spectra-recalled.md), [1.4](lessons/01-04-amplitude-modulation-dsb-am.md))*
- Baseband bandwidth is one-sided, bandpass bandwidth is the whole block. Always say which you mean.
  *([1.1](lessons/01-01-signals-and-spectra-recalled.md), [3.4](lessons/03-04-qpsk-and-m-psk.md))*
- The noise variance per signal-space coordinate is $N_0/2$, not $N_0$.
  *([3.1](lessons/03-01-signal-space-matched-filter.md))*

### Confusing two similarly named things

- **Nyquist rate** ($2W$, samples per second, a floor) versus **Nyquist frequency** ($f_s/2$, a signal frequency) versus the **Nyquist signalling rate** ($R_s\le2B$, a ceiling). Three different objects, one name.
  *([2.1](lessons/02-01-sampling-theorem-aliasing.md), [2.4](lessons/02-04-isi-nyquist-criterion.md))*
- **Energy** signals versus **power** signals: mutually exclusive, and applying the wrong formula returns $0$ or $\infty$.
  *([1.1](lessons/01-01-signals-and-spectra-recalled.md))*
- $Q(x)$ versus $\operatorname{erfc}(x)$: $Q(x)=\tfrac12\operatorname{erfc}(x/\sqrt2)$. Check which your tool uses.
  *([3.2](lessons/03-02-optimal-detection-awgn.md))*
- $E_b$ versus $E_s$: they differ by $\log_2M$ — nearly 8 dB at $M=64$.
  *([3.4](lessons/03-04-qpsk-and-m-psk.md), [3.5](lessons/03-05-qam-and-union-bound.md))*
- $P_b$ versus $P_s$: equal only for binary schemes.
  *([3.3](lessons/03-03-binary-modulation-ber.md))*

### Spectra and randomness

- The PSD is the transform of the **autocorrelation**, not "the transform of the signal, squared" — which doesn't exist for a random process. All phase information is destroyed.
  *([1.2](lessons/01-02-random-processes-and-psd.md))*
- $R_X(0)$ is the **mean square**, not the variance; they coincide only for a zero-mean process.
  *([1.2](lessons/01-02-random-processes-and-psd.md))*
- **Stationary** is not **ergodic**. A process that picks a random constant at switch-on and holds it is stationary and wildly non-ergodic.
  *([1.2](lessons/01-02-random-processes-and-psd.md))*
- **White** constrains the spectrum, **Gaussian** constrains the distribution. Independent properties.
  *([1.3](lessons/01-03-noise-snr-filtering.md))*
- Noise bandwidth is **not** the 3-dB bandwidth: a one-pole filter leaks $\pi/2$ times more than its $f_{3\rm dB}$ suggests.
  *([1.3](lessons/01-03-noise-snr-filtering.md))*
- "No DC component" (zero mean) is not "no power near DC". Polar NRZ has no DC impulse but its PSD *peaks* at $f=0$; only AMI and Manchester have a true null.
  *([2.3](lessons/02-03-line-codes-baseband-pulses.md))*

### Modulation

- DSB-SC's envelope is $\lvert m(t)\rvert$, not $m(t)$ — the carrier flips phase at each message zero crossing, so envelope-detecting DSB gives rectified garbage.
  *([1.4](lessons/01-04-amplitude-modulation-dsb-am.md))*
- Overmodulation ($\mu>1$) folds the envelope and is irreversible; there is no filter fix.
  *([1.4](lessons/01-04-amplitude-modulation-dsb-am.md))*
- A DSB **phase** error attenuates ($\cos\phi$); a **frequency** error splits each tone into a beating pair. SSB's frequency error instead *translates* the whole spectrum, destroying harmonic ratios. Different artifacts, same cause.
  *([1.4](lessons/01-04-amplitude-modulation-dsb-am.md), [1.5](lessons/01-05-ssb-vsb-multiplexing.md))*
- FM bandwidth is $2(\Delta f+W)$, **not** $2\Delta f$ — the narrowband limit reduces to $2W$, which has nothing to do with the deviation.
  *([1.6](lessons/01-06-angle-modulation-fm-pm.md))*
- Increasing $\beta$ never adds transmitted power ($\sum J_n^2=1$); it only moves power out of the carrier line. Contrast AM, where increasing $\mu$ genuinely adds sideband power.
  *([1.6](lessons/01-06-angle-modulation-fm-pm.md))*
- Instantaneous frequency is a time-domain construct and is not what a spectrum analyzer shows.
  *([1.6](lessons/01-06-angle-modulation-fm-pm.md))*

### Digital transmission

- Aliasing cannot be undone by resampling later; the anti-aliasing filter must be analog and must precede the sampler.
  *([2.1](lessons/02-01-sampling-theorem-aliasing.md))*
- Quantization error is deterministic, not noise. The uniform model fails for small or slowly varying signals, where it shows up as harmonic distortion — hence dither.
  *([2.2](lessons/02-02-quantization-and-pcm.md))*
- "6 dB per bit" has a fixed slope but a *loading-dependent* offset: $+1.76$ dB for a full-scale sinusoid, $-15$ dB or worse for real speech. Always quote the loading factor.
  *([2.2](lessons/02-02-quantization-and-pcm.md))*
- Companding does not improve peak SQNR — it costs about 15 dB there and flattens the curve everywhere else.
  *([2.2](lessons/02-02-quantization-and-pcm.md))*
- Zero ISI does **not** mean the pulses don't overlap; they overlap heavily and are merely zero at the *other* sampling instants.
  *([2.4](lessons/02-04-isi-nyquist-criterion.md))*
- The Nyquist criterion applies to the **end-to-end** response, transmit filter × channel × receive filter — which is why the channel breaks it and the equalizer restores it.
  *([2.4](lessons/02-04-isi-nyquist-criterion.md), [2.5](lessons/02-05-equalization-briefly.md))*
- $\alpha=0$ fails not merely because the filter is unbuildable but because $1/t$ tails make worst-case ISI diverge under any timing error.
  *([2.4](lessons/02-04-isi-nyquist-criterion.md))*
- The exact channel inverse is the *worst* equalizer at finite SNR; MMSE is essentially always better, and a linear equalizer never improves per-frequency SNR at all.
  *([2.5](lessons/02-05-equalization-briefly.md))*
- Decision-directed adaptation cannot start from a closed eye — hence the training preamble.
  *([2.5](lessons/02-05-equalization-briefly.md))*

### Detection and constellations

- The matched filter is matched to the **pulse**, not the channel, and it maximizes SNR rather than removing ISI. Those are two different filters.
  *([3.1](lessons/03-01-signal-space-matched-filter.md))*
- Pulse *shape* never affects error probability — only energy does. Shape buys bandwidth and timing robustness.
  *([3.1](lessons/03-01-signal-space-matched-filter.md))*
- **Rotating** a constellation changes nothing; **translating** it preserves distances but changes energy — which is exactly why uncentred constellations (OOK, unipolar NRZ) waste 3 dB.
  *([3.2](lessons/03-02-optimal-detection-awgn.md), [2.3](lessons/02-03-line-codes-baseband-pulses.md))*
- At useful SNR only $d_{\min}$ and the nearest-neighbour count matter; larger distances contribute nothing measurable.
  *([3.5](lessons/03-05-qam-and-union-bound.md))*
- QPSK's free doubling works exactly once — it uses the quadrature dimension. Every constellation beyond it pays for crowding.
  *([3.4](lessons/03-04-qpsk-and-m-psk.md))*
- Gray coding leaves $P_s$ unchanged; it divides $P_b$ by $\log_2M$.
  *([3.4](lessons/03-04-qpsk-and-m-psk.md))*
- The constellation sets the BER; the **trajectory between points** sets the PAPR and hence the amplifier requirement. OQPSK and $\pi/4$-QPSK exploit exactly this gap.
  *([3.4](lessons/03-04-qpsk-and-m-psk.md), [3.5](lessons/03-05-qam-and-union-bound.md))*

### Capacity and coding

- The Shannon limit is $-1.6$ dB **only as $\eta\to0$**. At your actual spectral efficiency the bound is $(2^\eta-1)/\eta$ — 5.7 dB at $\eta=4$.
  *([3.6](lessons/03-06-power-vs-bandwidth-efficiency.md), [4.2](lessons/04-02-channel-capacity-shannon-limit.md))*
- Unlimited bandwidth does **not** give unlimited capacity: it saturates at $1.44S/N_0$.
  *([4.2](lessons/04-02-channel-capacity-shannon-limit.md))*
- Above capacity there is no code, however clever. The fix must change $B$, $S$, or $N_0$ — not the code.
  *([4.2](lessons/04-02-channel-capacity-shannon-limit.md))*
- Being *below* capacity is necessary, not sufficient: a weak code below capacity can still be far from reliable.
  *([4.3](lessons/04-03-block-codes.md))*
- Coding first makes every symbol weaker ($E_c = RE_b$); a weak code can lose more than it gains, especially at low SNR.
  *([4.3](lessons/04-03-block-codes.md))*
- A $t$-error-correcting code does not degrade gracefully past $t$ — it **miscorrects**, actively adding errors.
  *([4.3](lessons/04-03-block-codes.md))*
- Detection is roughly half the price of correction ($d\ge e+1$ versus $d\ge2t+1$), and erasures are half the price of errors again.
  *([4.3](lessons/04-03-block-codes.md), [4.1](lessons/04-01-entropy-mutual-information.md))*
- Hard-decision decoding throws away about 2 dB. Three bits of soft quantization recovers nearly all of it — the cheapest decibels in the receiver.
  *([4.4](lessons/04-04-convolutional-codes-viterbi.md), [4.1](lessons/04-01-entropy-mutual-information.md))*
- A BSC at $p=0.9$ is an *excellent* channel (invert the output); only $p=1/2$ is fatal. Information theory measures unpredictability, not corruption.
  *([4.1](lessons/04-01-entropy-mutual-information.md))*
- Entropy measures statistical unpredictability, not meaning — and compressing first makes every surviving bit precious, so compression must be followed by coding, never replaced by it.
  *([4.1](lessons/04-01-entropy-mutual-information.md))*
- Viterbi is exact maximum-likelihood, not an approximation — but its own output errors are **bursty**, which is why it is paired with interleaving and an outer Reed–Solomon code.
  *([4.4](lessons/04-04-convolutional-codes-viterbi.md))*

### Sharing a channel

- No multiple-access scheme raises total capacity under an equal-peak-power constraint; the differences are filters, clocks, burstiness, and hardware. Real gains come from **spatial reuse** and scheduling.
  *([4.5](lessons/04-05-multiplexing-multiple-access.md))*
- CDMA converts a hard user limit into a soft one, and depends absolutely on fast power control — the near–far problem kills an uncontrolled cell.
  *([4.5](lessons/04-05-multiplexing-multiple-access.md))*
- OFDM's overlapping subcarriers are exactly orthogonal; orthogonality is destroyed by **frequency offset**, not by overlap.
  *([4.5](lessons/04-05-multiplexing-multiple-access.md))*
- Uncoded OFDM on a frequency-selective channel is *worse* than single-carrier — the few dead subcarriers dominate. The "C" in COFDM is not optional.
  *([4.5](lessons/04-05-multiplexing-multiple-access.md))*
- OFDM's PAPR runs 8–12 dB, forcing amplifier back-off; this is why LTE uses a different waveform on the uplink.
  *([4.5](lessons/04-05-multiplexing-multiple-access.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface.
