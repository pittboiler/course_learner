# Communication Systems · Lesson 3.1: Signal space and the matched filter

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [1.3 Noise, SNR and filtering](01-03-noise-snr-filtering.md), [`linalg-refresher` 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) · Unlocks: [3.2 Optimal detection in AWGN](03-02-optimal-detection-awgn.md), [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md)

## Why this matters

This is the pivot of the course. Up to now, "which signal was sent?" has been a question about waveforms — messy, infinite-dimensional objects. This lesson replaces every waveform with a short list of numbers, so that the receiver's job becomes *geometry*: which of these finitely many points is the received point closest to?

Once you make that translation, everything in Module 3 falls out almost mechanically. Error probability becomes a question about distances. Modulation design becomes a question about packing points. And the receiver that extracts those numbers optimally — the matched filter — is a single formula that turns out to be, provably, the best possible front end.

## The idea

Suppose the transmitter can send one of $M$ known waveforms. Whatever those waveforms look like, they span at most an $M$-dimensional subspace of the space of all functions. Pick an orthonormal basis for it, and every one of the $M$ signals becomes a vector of at most $M$ coordinates. Two waveforms, one basis, a handful of numbers each. **BPSK's two waveforms become the points $+\sqrt{E}$ and $-\sqrt{E}$ on a line. QPSK's four become the corners of a square.** That is the whole construction, and it is exactly the Gram–Schmidt procedure from [`linalg-refresher` 4.3](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) applied to functions rather than to columns.

The magic is what happens to the noise. White Gaussian noise projected onto an orthonormal basis gives coordinates that are **independent Gaussians of equal variance $N_0/2$**, no matter which basis you chose. So in signal space, noise is an isotropic cloud — statistically the same in every direction. It has no preferred direction to exploit and no direction to hide in. That is why distance, and only distance, determines error probability.

Now the receiver's front end. To get the coordinates you project the received waveform onto each basis function — an inner product, $\int r(t)\phi_i(t)dt$. That operation is called a **correlator**, and it can be implemented equivalently as a filter whose impulse response is the basis function reversed in time, sampled once at the end of the symbol. That filter is the [matched filter](../reference.md#matched-filter), and the reason to care is a theorem: among *all* possible linear filters, it produces the largest possible SNR at the sampling instant. Not the largest among a family, not the largest under some assumption — the largest, full stop, by Cauchy–Schwarz.

The last piece is the most surprising and the most useful: the maximum SNR depends only on the signal's **energy** and the noise density, not on the pulse's shape at all. A long weak pulse and a short strong one of the same energy perform identically. **Energy per bit is the currency; shape is free.** That single fact is why the whole rest of the course is plotted against $E_b/N_0$.

## The formal version

**Orthonormal basis.** Given $M$ finite-energy signals $\{s_m(t)\}$ on $[0,T]$, Gram–Schmidt produces $K \le M$ orthonormal functions $\{\phi_1,\dots,\phi_K\}$ with

$$\int_0^T \phi_i(t)\phi_j(t)\,dt = \delta_{ij},$$

such that each signal is

$$s_m(t) = \sum_{i=1}^{K}s_{mi}\phi_i(t), \qquad s_{mi} = \int_0^T s_m(t)\phi_i(t)\,dt .$$

*In words: pick perpendicular unit-energy building blocks; each transmitted waveform is a specific recipe of them, and that recipe is its coordinate vector $\mathbf{s}_m = (s_{m1},\dots,s_{mK})$.*

**Energy and distance are inner products.** By Parseval for this basis,

$$E_m = \int_0^Ts_m^2(t)\,dt = \|\mathbf{s}_m\|^2, \qquad \int_0^T\!\big[s_i(t)-s_j(t)\big]^2dt = \|\mathbf{s}_i-\mathbf{s}_j\|^2 .$$

*In words: a signal's energy is its squared length, and the energy of the difference of two signals is their squared distance.* This is the sentence that makes signal space worth building: **the physical quantity that determines error probability — the energy separating two candidate signals — is literally a Euclidean distance.**

**Noise in signal space (the theorem of irrelevance).** Write $r(t) = s_m(t)+w(t)$ with $w$ AWGN of two-sided PSD $N_0/2$, and project:

$$r_i = \int_0^T r(t)\phi_i(t)dt = s_{mi} + w_i, \qquad w_i = \int_0^T w(t)\phi_i(t)dt .$$

Then

$$\mathbb{E}[w_i] = 0, \qquad \mathbb{E}[w_iw_j] = \frac{N_0}{2}\delta_{ij}.$$

*In words: the noise coordinates are independent, zero-mean, equal-variance Gaussians — an isotropic cloud.* (The covariance follows from $R_W(\tau) = \frac{N_0}{2}\delta(\tau)$ and the orthonormality of the basis: the double integral collapses to $\frac{N_0}{2}\int\phi_i\phi_j = \frac{N_0}{2}\delta_{ij}$.)

Moreover, the part of $r(t)$ orthogonal to the signal space contains only noise, independent of everything in the space. It is therefore **irrelevant** to the decision and may be discarded. This is the formal licence for reducing an infinite-dimensional waveform to $K$ numbers with no loss whatsoever.

**Correlator receiver.** Compute the $K$ numbers $r_i = \int_0^Tr(t)\phi_i(t)dt$ and hand the vector $\mathbf{r}$ to the detector. This is a **sufficient statistic**: no other processing of $r(t)$ can add information.

**Matched filter.** Alternatively, pass $r(t)$ through the LTI filter

$$h(t) = \phi_i(T-t)$$

and sample at $t=T$. Then

$$y(T) = \int_0^T r(\tau)h(T-\tau)d\tau = \int_0^T r(\tau)\phi_i(\tau)d\tau = r_i .$$

*In words: correlating with a signal is the same as filtering with its time-reverse and sampling at the end.* Identical output, different hardware — one multiplier and integrator versus one filter and sampler.

**The maximum-SNR theorem.** Let $g(t)$ be a known pulse of energy $E$ in AWGN of PSD $N_0/2$, and let $h$ be *any* linear filter. The output SNR at the sampling instant satisfies

$$\mathrm{SNR}_o = \frac{|y_{\rm sig}(T)|^2}{\mathbb{E}[y_{\rm noise}^2(T)]} \le \frac{2E}{N_0},$$

with equality if and only if $h(t) = c\,g(T-t)$ for any constant $c\ne0$.

*Proof sketch.* In frequency, $y_{\rm sig}(T) = \int H(f)G(f)e^{j2\pi fT}df$ and the noise power is $\frac{N_0}{2}\int|H(f)|^2df$. Cauchy–Schwarz (the same inequality as in [`linalg-refresher` 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md)) gives

$$\left|\int H G e^{j2\pi fT}df\right|^2 \le \int|H|^2df\cdot\int|G|^2df,$$

so $\mathrm{SNR}_o \le \dfrac{\int|G|^2df}{N_0/2} = \dfrac{2E}{N_0}$, with equality exactly when $H(f) = cG^*(f)e^{-j2\pi fT}$ — which inverse-transforms to $h(t) = cg(T-t)$. ∎

Three consequences worth stating separately:

1. **The maximum SNR is $2E/N_0$** — it depends only on energy and noise density.
2. **Pulse shape is irrelevant** to performance. It matters for bandwidth (via [2.4](02-04-isi-nyquist-criterion.md)) and nothing else.
3. **The matched filter is not the channel inverse.** It maximizes SNR; the equalizer of [2.5](02-05-equalization-briefly.md) minimizes ISI. On a distorting channel these are different filters, which is why real receivers cascade a matched filter with an equalizer.

**Why it works, intuitively.** The matched filter weights each instant of the received signal in proportion to how much signal is there. Where the pulse is large, the sample is trustworthy and gets weighted heavily; where the pulse is near zero, the sample is almost pure noise and is weighted away. It is a weighted average that trusts the evidence in proportion to its quality — the same logic as inverse-variance weighting in estimation.

## Picture

![A two-part figure. Left: the matched filter mechanism, showing a rectangular pulse plus noise entering, the time-reversed impulse response, and the triangular correlation output peaking at t = T where it is sampled. Right: a two-dimensional signal space with four QPSK points on a circle of radius root E, an isotropic circular noise cloud around one of them, and the perpendicular-bisector decision boundaries drawn as dashed lines through the origin.](assets/03-01-fig1.svg)

Left: the matched filter builds up the correlation over the whole symbol, so the output peak at $t=T$ collects **all** the pulse's energy while the noise, being uncorrelated instant to instant, only accumulates as the square root. That is where the $2E/N_0$ comes from. Right: the picture the rest of the module lives in. Four signals are four points; the noise is a round cloud, the same in every direction; the decision boundaries are perpendicular bisectors. Error probability is entirely a question of how far the points are from those lines.

## Worked examples

**Example 1 (basis and coordinates for binary antipodal signalling).** The transmitter sends either $s_1(t) = +A$ or $s_2(t) = -A$ over $0\le t\le T$.

*Gram–Schmidt.* $E_1 = \int_0^TA^2dt = A^2T$, so the first basis function is

$$\phi_1(t) = \frac{s_1(t)}{\sqrt{E_1}} = \frac{1}{\sqrt{T}}, \quad 0\le t\le T.$$

$s_2 = -s_1$ is already a multiple of $\phi_1$, so Gram–Schmidt terminates: **$K=1$**. The signal space is a line.

*Coordinates.* $s_{11} = \int_0^T A\cdot T^{-1/2}dt = A\sqrt{T} = \sqrt{E}$, and $s_{21} = -\sqrt{E}$, with $E = A^2T$.

$$\mathbf{s}_1 = (+\sqrt{E}), \qquad \mathbf{s}_2 = (-\sqrt{E}), \qquad d_{12} = 2\sqrt{E}.$$

*Matched filter.* $h(t) = \phi_1(T-t) = 1/\sqrt{T}$ on $[0,T]$ — an **integrate-and-dump**: integrate the received signal over the symbol, sample, reset. The most-built circuit in digital communications, and it is optimal.

*Output SNR:* $2E/N_0$. For binary signalling one symbol carries one bit, so $E = E_b$ and the SNR at the decision instant is $2E_b/N_0$ — the quantity every BER formula in [3.3](03-03-binary-modulation-ber.md) is written in.

*Contrast with a naive receiver* that just samples $r(T/2)$. That sample has signal amplitude $A$ and noise variance set by whatever bandwidth precedes it — it throws away all the energy in the rest of the symbol. Integrating collects $T$ seconds of signal coherently (amplitude $\propto T$, power $\propto T^2$) while noise accumulates incoherently (power $\propto T$), so the matched filter's advantage over a single sample grows linearly with $T$. **Coherent accumulation is the entire trick.**

**Example 2 (two orthogonal signals: BFSK's geometry).** The transmitter sends one of

$$s_1(t) = A\cos(2\pi f_1t), \qquad s_2(t) = A\cos(2\pi f_2t), \qquad 0\le t\le T,$$

with $f_1, f_2$ chosen so that $\int_0^Ts_1s_2\,dt = 0$ (they are orthogonal — which happens when $f_1-f_2$ is a multiple of $1/2T$).

Each has energy $E = A^2T/2$. Since they are orthogonal, Gram–Schmidt gives $\phi_i = s_i/\sqrt{E}$ directly, and

$$\mathbf{s}_1 = (\sqrt{E}, 0), \qquad \mathbf{s}_2 = (0,\sqrt{E}).$$

Two points on perpendicular axes. Their separation:

$$d_{12} = \sqrt{E + E} = \sqrt{2E}.$$

Compare to antipodal signalling in Example 1 at the same energy: $d = 2\sqrt{E}$. The ratio of *squared* distances is

$$\frac{(2\sqrt E)^2}{(\sqrt{2E})^2} = \frac{4E}{2E} = 2 \;=\; 3\ \text{dB}.$$

**Antipodal beats orthogonal by exactly 3 dB**, and the picture explains why: antipodal signals point in *opposite* directions, so the difference vector has length $2\sqrt E$; orthogonal signals are only $90°$ apart, so the difference is the hypotenuse $\sqrt{2E}$. You get the extra separation for free, because pointing a signal backwards costs no more energy than pointing it sideways.

This one geometric fact is the BPSK-versus-BFSK gap you will derive analytically in [3.3](03-03-binary-modulation-ber.md), and the OOK-versus-BPSK gap noted back in [2.3](02-03-line-codes-baseband-pulses.md). Three appearances, one right triangle.

## Watch out

- **You might think the matched filter is matched to the channel.** It is matched to the *transmitted pulse shape*. On a distorting channel it should be matched to the pulse as *received*, and it does not undo the distortion — that is the equalizer's job, and the two filters do different things.
- **You might think a cleverer pulse shape gives better error performance.** It cannot. $\mathrm{SNR}_{\max} = 2E/N_0$ depends on energy alone. Shape buys bandwidth and timing robustness, never noise immunity.
- **You might think reducing the waveform to $K$ numbers loses information.** It provably does not. The component of $r(t)$ outside the signal space is noise independent of the signal, so it is irrelevant. The coordinate vector is a *sufficient statistic*.
- **You might think the matched filter output at other times is useful.** Only $t=T$ is. At other instants the correlation is incomplete and the SNR is lower — which is exactly why timing recovery matters, and why the eye diagram of [2.4](02-04-isi-nyquist-criterion.md) has a horizontal axis.
- **You might think the noise variance per coordinate is $N_0$.** It is $N_0/2$ — the two-sided PSD. Getting this wrong puts a factor of 2 (3 dB) into every BER you compute.

## One-liner

> Project the waveform onto an orthonormal basis and the problem becomes geometry: signals are points, noise is a round cloud of variance $N_0/2$ per axis, and the matched filter is the provably optimal way to read the coordinates off — collecting $2E/N_0$ regardless of pulse shape.

## Problems

**P1 (🟢)** A pulse is $g(t) = A$ for $0\le t\le T$, zero otherwise, received in AWGN with $N_0/2 = 10^{-9}$ W/Hz. Take $A = 2$ mV and $T = 1$ ms. (a) Find the pulse energy. (b) Find the matched filter's impulse response. (c) Find the maximum output SNR, in ratio and in dB. (d) A designer replaces the rectangle with a half-sine of the same energy. What changes?

**P2 (🟡)** Three signals on $[0,T]$: $s_1(t) = A$ for $0\le t<T/2$ and 0 after; $s_2(t)=0$ for $0\le t<T/2$ and $A$ after; $s_3(t) = A$ throughout. (a) Apply Gram–Schmidt to find an orthonormal basis and its dimension. (b) Give the coordinate vector and energy of each signal. (c) Compute all three pairwise distances. (d) Which pair is most vulnerable to noise, and why?

**P3 (🔴)** Prove that for two equal-energy signals $s_1, s_2$ with correlation coefficient $\rho = \frac{1}{E}\int_0^Ts_1s_2\,dt$, the squared distance is $d^2 = 2E(1-\rho)$. (a) Do the derivation. (b) Find the $\rho$ that maximizes $d$ and identify the resulting signal pair. (c) Evaluate $d^2$ for $\rho = 0$ and $\rho = -1$ and connect to Example 2. (d) Explain why $\rho < -1$ is impossible, and what that says about the best two-signal scheme at fixed energy.

<details>
<summary>Solutions</summary>

**P1** (a) $E = A^2T = (2\times10^{-3})^2(10^{-3}) = 4\times10^{-9}$ J.

(b) $h(t) = g(T-t) = A$ for $0\le t\le T$ — the same rectangle (it is symmetric), i.e. an integrate-and-dump over 1 ms. Any scaling $c$ is equally optimal, since SNR is a ratio.

(c) $$\mathrm{SNR}_{\max} = \frac{2E}{N_0} = \frac{2(4\times10^{-9})}{2\times10^{-9}} = 4, \qquad 10\log_{10}4 = 6.0\ \text{dB}.$$

(Note $N_0 = 2\times(N_0/2) = 2\times10^{-9}$ — the factor-of-two trap.)

(d) **Nothing changes in SNR.** $\mathrm{SNR}_{\max}=2E/N_0$ depends only on energy, which is unchanged by assumption. What changes is (i) the matched filter, which must now be the time-reversed half-sine, and (ii) the occupied bandwidth — the half-sine's spectrum decays faster than the rectangle's $\operatorname{sinc}$, so it is spectrally better behaved. Shape buys bandwidth, not noise immunity.

**P2** (a) $E_1 = \int_0^{T/2}A^2dt = A^2T/2$, so

$$\phi_1(t) = \sqrt{\frac{2}{T}} \ \text{ on } [0,T/2), \ 0 \text{ elsewhere}.$$

For $s_2$: $\int s_2\phi_1 dt = 0$ (disjoint supports), so $s_2$ is already orthogonal to $\phi_1$, and with $E_2 = A^2T/2$,

$$\phi_2(t) = \sqrt{\frac{2}{T}} \ \text{ on } [T/2,T], \ 0 \text{ elsewhere}.$$

For $s_3 = s_1+s_2$: it lies in the span already, so Gram–Schmidt yields nothing new. **Dimension $K=2$.**

(b) With $a = A\sqrt{T/2}$ (so that $a^2 = A^2T/2$):

$$\mathbf{s}_1 = (a, 0), \quad E_1 = a^2; \qquad \mathbf{s}_2 = (0,a), \quad E_2 = a^2; \qquad \mathbf{s}_3 = (a,a), \quad E_3 = 2a^2 .$$

(Check: $E_3 = \int_0^TA^2dt = A^2T = 2a^2$ ✓.)

(c) $$d_{12} = \|(a,-a)\| = a\sqrt2, \qquad d_{13} = \|(0,-a)\| = a, \qquad d_{23} = \|(a,0)\| = a .$$

(d) The pairs $(s_1,s_3)$ and $(s_2,s_3)$, both at distance $a$ — the *smallest* distance in the set. Error probability is governed by the **minimum** distance, since that is the pair the noise most easily confuses. Geometrically, $s_3$ is the corner of the square while $s_1,s_2$ are adjacent corners, so $s_3$ sits only one side-length away from each. The set is badly designed: it spends twice the energy on $s_3$ and gets *worse* minimum distance than the two-point antipodal set would at the same average energy. Good constellations spread points as far apart as possible for a given average energy — the design problem of [3.5](03-05-qam-and-union-bound.md).

**P3** (a) Expand the squared distance using the inner product:

$$d^2 = \int_0^T\big[s_1(t)-s_2(t)\big]^2dt = \int s_1^2 + \int s_2^2 - 2\int s_1s_2 = E + E - 2(\rho E) = 2E(1-\rho).$$

(b) $d^2$ is maximized by making $\rho$ as small as possible. Since $|\rho|\le1$ by Cauchy–Schwarz, the maximum is at $\rho = -1$, giving $d^2 = 4E$, $d = 2\sqrt E$. And $\rho=-1$ is the equality case of Cauchy–Schwarz, which holds exactly when $s_2 = -s_1$: the **antipodal** pair.

(c) $\rho = 0$: $d^2 = 2E$ — **orthogonal** signalling, matching Example 2's $\sqrt{2E}$ ✓. $\rho=-1$: $d^2 = 4E$ — antipodal, matching Example 1's $2\sqrt E$ ✓. The ratio $4E/2E = 2$ is the 3 dB gap, now derived rather than observed.

(d) $\rho<-1$ would violate Cauchy–Schwarz, $|\langle s_1,s_2\rangle|\le\|s_1\|\|s_2\| = E$. Geometrically, two vectors cannot be more than $180°$ apart.

What that says: **at fixed energy per signal, antipodal signalling is optimal among all binary schemes, and no cleverness can beat it.** The bound $d^2\le 4E$ is a hard ceiling on binary distance, so $Q(\sqrt{2E_b/N_0})$ — the BPSK error probability of [3.3](03-03-binary-modulation-ber.md) — is the best any binary scheme can do in AWGN. Improving on it requires changing the problem: sending more bits per symbol (Module 3's $M$-ary schemes) or adding redundancy across symbols (coding, [4.3](04-03-block-codes.md)–[4.4](04-04-convolutional-codes-viterbi.md)).

</details>

## Flashback

**From Lesson 1.3 (Noise, SNR and filtering):** White noise of two-sided PSD $N_0/2$ passes through an integrate-and-dump over $[0,T]$, with impulse response $h(t)=1$ on $[0,T]$. (a) Find the variance of the output sample at $t=T$. (b) If the input also contains a constant $A$ over the same interval, find the output signal value. (c) Form the SNR and confirm it equals $2E/N_0$ with $E=A^2T$.

<details>
<summary>Solution</summary>

(a) The output at $T$ is $\int_0^Tw(t)dt$, with variance

$$\mathbb{E}\left[\left(\int_0^Tw\,dt\right)^2\right] = \int_0^T\!\!\int_0^T R_W(t-\tau)\,dt\,d\tau = \int_0^T\!\!\int_0^T\frac{N_0}{2}\delta(t-\tau)\,dt\,d\tau = \frac{N_0T}{2}.$$

(b) Signal output: $\int_0^TA\,dt = AT$.

(c) $$\mathrm{SNR} = \frac{(AT)^2}{N_0T/2} = \frac{2A^2T}{N_0} = \frac{2E}{N_0} \ \checkmark$$

with $E = A^2T$. The integrate-and-dump achieves the matched-filter bound exactly — as it must, since for a rectangular pulse it *is* the matched filter.

</details>

## Connections

- **Backward:** Gram–Schmidt and the Cauchy–Schwarz bound are [`linalg-refresher` 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) and [4.3](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md), applied to a function space; the noise statistics come from [1.3](01-03-noise-snr-filtering.md).
- **Forward:** [3.2](03-02-optimal-detection-awgn.md) draws decision regions in the space this lesson built; every BER in [3.3](03-03-binary-modulation-ber.md)–[3.5](03-05-qam-and-union-bound.md) is a distance in it.
- **Sideways:** the matched filter is the optimal detection filter in radar, the template-matching correlator in seismology, and — in a different language — the likelihood-ratio test of [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md). Correlating against a known template to pull a signal out of noise is one idea with a dozen names.
