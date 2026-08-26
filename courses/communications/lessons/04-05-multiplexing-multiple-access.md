# Communication Systems · Lesson 4.5: Multiplexing and multiple access

> ⏱ ~15 min · Module 4: Capacity & Coding · Builds on: [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md), [1.5 SSB, VSB and multiplexing](01-05-ssb-vsb-multiplexing.md), [2.5 Equalization, briefly](02-05-equalization-briefly.md) · Unlocks: end of course

## Why this matters

Every lesson so far has considered one transmitter and one receiver. Real systems have thousands sharing one piece of spectrum, and how they share it determines almost everything about the system's cost, capacity, and failure modes.

This is also the lesson where the course's threads converge. Frequency-division was [1.5](01-05-ssb-vsb-multiplexing.md); time-division was [2.1](02-01-sampling-theorem-aliasing.md); orthogonality was [3.1](03-01-signal-space-matched-filter.md); and OFDM — the scheme underneath Wi-Fi, 4G, 5G, and DSL — is a direct answer to the equalization problem of [2.5](02-05-equalization-briefly.md), built out of the DFT. Understanding why OFDM won is a good test of whether the whole course has landed.

## The idea

Sharing a channel means giving each user a slice of something. The candidates are the axes signals actually live on.

**Frequency (FDMA).** Each user gets a band. Simple, needs no coordination in time, but needs guard bands and sharp filters, and a user cannot burst above its allocation even when others are idle.

**Time (TDMA).** Each user gets a slot in a repeating frame. Needs no sharp filters, only accurate clocks — and a user can be given more slots when it needs them. But everyone must stay synchronized, and guard *times* replace guard bands.

**Code (CDMA).** Everyone transmits at once, over the whole band, each multiplied by a distinct spreading code. The receiver correlates with the wanted code, which pulls that user out and averages every other user down toward the noise floor. Users are separated by orthogonality rather than by exclusion, so there is no hard user limit — just gradually rising noise.

**Space.** Directional antennas and cellular reuse let the same frequency be used again a few kilometres away. This is not one of the classical three, and it is by far the most important in practice: cell splitting is what actually delivered the thousandfold capacity growth of mobile telephony.

Then there is **OFDM**, which is not really a multiple-access scheme at all but a modulation — although it becomes one (OFDMA) when you assign different subcarriers to different users. Its motivation is the frequency-selective channel of [2.5](02-05-equalization-briefly.md). A wideband signal sees a channel with deep notches and needs a complicated equalizer. Split the band into hundreds of narrow subcarriers, and each one is so narrow that the channel is *flat* across it — so equalization collapses to one complex multiply per subcarrier. The subcarriers are spaced exactly at the reciprocal of the symbol duration, which makes them orthogonal despite overlapping, and the whole modulation and demodulation is an IFFT and an FFT. **The hardest problem in the course dissolves into a transform you already know.**

## The formal version

**The three classical schemes.**

| | FDMA | TDMA | CDMA |
|---|---|---|---|
| Resource split | frequency band | time slot | spreading code |
| Guard needed | guard band (filters) | guard time (clocks) | none — soft interference |
| User capacity | hard limit | hard limit | **soft** limit |
| Synchronization | none needed | strict | strict (or none, for asynchronous) |
| Burstiness | poor | good | good |
| Classic system | AMPS (1G), satellite transponders | GSM (2G) | IS-95, UMTS (3G) |

**Total capacity is conserved.** For $N$ users sharing bandwidth $B$ and total power $P$, all three achieve — in the ideal, interference-free limit — the same aggregate:

- FDMA: each user gets $B/N$ and power $P/N$, so $C_{\rm user} = \frac{B}{N}\log_2\!\big(1+\frac{P/N}{N_0B/N}\big) = \frac{B}{N}\log_2(1+\mathrm{SNR})$, total $= B\log_2(1+\mathrm{SNR})$.
- TDMA: each user gets full $B$ for $1/N$ of the time at power $NP/N = P$ (bursting), giving the same total.

*In words: under an equal peak-power constraint, the multiple-access scheme does not change the total capacity — it changes the engineering.* Which one to pick is a question about filters, clocks, burstiness, and hardware cost, not about information theory. (The caveat matters: if a TDMA transmitter is allowed to *burst* above its average power, concentrating energy into short high-power slots beats spreading it, because capacity is concave in SNR. P3 works this out.)

**Spread spectrum and processing gain.** Multiply the data (rate $R_b$) by a much faster pseudorandom **chip** sequence (rate $R_c$). The spectrum spreads by the factor

$$G_p = \frac{R_c}{R_b} = \frac{B_{\rm spread}}{B_{\rm data}} \quad\text{(the \textbf{processing gain})}.$$

At the receiver, multiplying by the same code again despreads the wanted signal back to $B_{\rm data}$ while spreading any interferer *out* over $B_{\rm spread}$ — so the receive filter keeps all of the signal and only $1/G_p$ of the interference:

$$\frac{S}{I}\bigg|_{\rm out} = G_p\cdot\frac{S}{I}\bigg|_{\rm in}.$$

*In words: spreading buys interference rejection equal to the bandwidth expansion factor.* This is the same bandwidth-for-robustness trade as FM ([1.6](01-06-angle-modulation-fm-pm.md)) and coding ([4.3](04-03-block-codes.md)) — a recurring shape.

**CDMA capacity and the near–far problem.** With $N$ users of equal received power $S$, each user sees $N-1$ interferers spread across the band:

$$\frac{E_b}{N_0+I_0} = \frac{G_p}{(N-1) + N_0B/S} \approx \frac{G_p}{N-1}.$$

So the number of users supportable at a required $(E_b/N_0)_{\rm req}$ is

$$N \approx 1+\frac{G_p}{(E_b/N_0)_{\rm req}},$$

improved further by voice activity factor (people are silent about 60% of the time) and sectored antennas.

Note what this says: **CDMA has no hard user limit.** Adding a user raises everyone's noise floor slightly rather than being refused. Capacity degrades gracefully — a genuine advantage over FDMA/TDMA, where user $N+1$ simply gets a busy signal.

The catch is the **near–far problem**. A user standing next to the base station can be 70 dB stronger than one at the cell edge, and $G_p$ is only 21 dB for IS-95. One close user therefore drowns the entire cell. The fix is aggressive **power control** — the base station commands every handset's transmit power 800 times per second to keep all received powers equal. Without it CDMA does not work at all; with it, it works well. This is a good example of a scheme whose viability rests entirely on a control loop rather than on the modulation.

**OFDM.** Divide $B$ into $N$ subcarriers spaced $\Delta f = 1/T_s$ apart, where $T_s$ is the OFDM symbol duration. Transmit

$$s(t) = \sum_{k=0}^{N-1}X_k\,e^{j2\pi k\Delta f t}, \qquad 0\le t< T_s,$$

with $X_k$ the QAM symbol on subcarrier $k$. Sampling at $N$ points per symbol makes this **exactly the inverse DFT** of $\{X_k\}$ — so the modulator is an IFFT and the demodulator an FFT, costing $O(N\log N)$ ([`signals-systems` 3.5](../../signals-systems/lessons/03-05-the-fft.md)).

*Orthogonality:* over one symbol,

$$\frac{1}{T_s}\int_0^{T_s}e^{j2\pi k\Delta ft}e^{-j2\pi m\Delta ft}dt = \delta_{km}$$

precisely because $\Delta f = 1/T_s$. The subcarriers' $\operatorname{sinc}$ spectra overlap heavily, yet each one's peak sits on every other one's null — **overlapping but orthogonal**, which is why OFDM is far more spectrally efficient than FDMA with its guard bands.

**Cyclic prefix.** Multipath makes symbols leak into their successors. OFDM's fix — the [cyclic prefix](../reference.md#cyclic-prefix) — is to copy the last $N_{cp}$ samples of each symbol to its front. If the channel's delay spread is shorter than the prefix:

1. The inter-symbol interference falls entirely inside the prefix, which is discarded — **ISI eliminated**.
2. Linear convolution with the channel becomes *circular* convolution over the symbol, so in the DFT domain it becomes plain multiplication: $Y_k = H_kX_k+W_k$.

*In words: the cyclic prefix converts a messy convolution into a per-subcarrier multiplication — so equalization is one complex divide per subcarrier.* The whole apparatus of [2.5](02-05-equalization-briefly.md) — adaptive taps, LMS, decision feedback — collapses to $\hat X_k = Y_k/H_k$. That is OFDM's real argument, and it is why every broadband wireless standard since 1999 uses it.

The cost is overhead: the prefix carries no data, so the efficiency is $T_s/(T_s+T_{cp})$, typically 80–93%.

**OFDM's weaknesses**, both real:

- **High PAPR.** A sum of $N$ independent subcarriers is approximately Gaussian by the central limit theorem, so peaks can far exceed the average — up to $10\log_{10}N$ dB in the worst case, and 8–12 dB in practice. That forces amplifier back-off, hurting efficiency. (This is why LTE's *uplink* uses SC-FDMA, a precoded variant with lower PAPR — battery-powered handsets cannot afford the back-off, while a mains-powered base station can.)
- **Sensitivity to frequency offset.** Orthogonality depends on exact subcarrier spacing. A carrier frequency offset or Doppler shift destroys it, producing inter-carrier interference. OFDM systems spend real effort on frequency synchronization, and this is why OFDM is harder to use at very high vehicle speeds.

**OFDMA and modern systems.** Assign different subcarriers (and time slots) to different users, and OFDM becomes a multiple-access scheme with resource granularity in both time and frequency. A scheduler can then give each user the subcarriers on which *that user's* channel happens to be good — **multiuser diversity**, which raises total throughput above what any fixed allocation achieves. This is what an LTE or 5G scheduler does every millisecond.

| Generation | Multiple access | Note |
|---|---|---|
| 1G (AMPS) | FDMA | analog, 30 kHz channels |
| 2G (GSM) | TDMA/FDMA | 8 slots per 200 kHz carrier |
| 2G (IS-95) / 3G | CDMA | soft capacity, power control |
| 4G (LTE) | OFDMA down, SC-FDMA up | scheduler exploits multiuser diversity |
| 5G NR | OFDMA, flexible numerology | subcarrier spacing adapts to the use case |
| Wi-Fi 6 | OFDMA + MU-MIMO | spatial reuse on top of frequency |

Note the trajectory: from splitting one dimension crudely, to splitting two finely, to adding *space* as a third via MIMO. And spatial reuse is the one that keeps scaling — halving cell radius quadruples capacity per unit area, indefinitely, which no modulation or code can match.

## Picture

![A two-part figure. Left: three panels showing the same channel divided by FDMA (vertical bands separated by guard bands), TDMA (horizontal time slots), and CDMA (users overlapping across the whole time-frequency plane, distinguished by shading). Right: the OFDM spectrum, showing overlapping sinc-shaped subcarriers where each subcarrier's peak lands on all the others' nulls, with the subcarrier spacing marked as 1 over T_s, and a channel response drawn over the top showing that each narrow subcarrier sees an essentially flat channel.](assets/04-05-fig1.svg)

Left: the same resource, cut three ways. Note that FDMA wastes spectrum on guard bands and TDMA wastes time on guard intervals, while CDMA wastes neither — it pays instead with a rising interference floor. Right: OFDM's central trick. The subcarrier spectra overlap heavily, yet each one's peak falls exactly on every other's null, so they are orthogonal with **zero** guard band. Overlaid is the channel response: wildly non-flat across the whole band, but essentially constant across any single subcarrier — which is why one complex multiply equalizes each one.

## Worked examples

**Example 1 (GSM: a TDMA/FDMA system, by the numbers).** GSM uses 200 kHz carriers, each carrying 8 time slots, with GMSK modulation at 270.833 kbps gross.

*Per-slot rate:* $270{,}833/8 = 33.85$ kbps gross per user. After framing, signalling, and error coding, the net speech rate is 13 kbps (full-rate codec) — a lot of overhead, most of it error protection, which is what makes GSM robust.

*Spectral efficiency:* $270{,}833/200{,}000 = 1.354$ bits/s/Hz gross. GMSK is a constant-envelope, filtered form of MSK — chosen precisely so handsets can use saturated amplifiers ([3.4](03-04-qpsk-and-m-psk.md)'s envelope argument).

*Users per MHz:* $\frac{10^6}{200{,}000}\times 8 = 40$ simultaneous users per MHz per cell.

*And now the point.* A 25 MHz allocation gives 1000 channels — for an entire city, if there were one cell. With **frequency reuse** in a 7-cell pattern, each cell gets $1000/7 = 143$ channels, and you can build as many cells as you like. A city with 500 cells supports $500\times143 = 71{,}500$ simultaneous calls from the same 25 MHz.

**Spatial reuse multiplied capacity by 500, while the multiple-access scheme multiplied it by 8.** That ratio is the real history of mobile telephony: the enormous capacity growth from 1G to today came far more from smaller cells than from better modulation, and it is why 5G's densification (small cells every few hundred metres) matters more than its waveform.

**Example 2 (OFDM design, end to end).** Design an OFDM system for a channel with 20 MHz of bandwidth and a delay spread of 0.8 µs.

*Cyclic prefix.* Must exceed the delay spread; take $T_{cp} = 0.8\ \mu$s.

*Symbol duration.* Overhead is $T_{cp}/(T_s+T_{cp})$. Targeting about 20% overhead:

$$T_s = 4T_{cp} = 3.2\ \mu\text{s}.$$

*Subcarrier spacing:*

$$\Delta f = \frac{1}{T_s} = \frac{1}{3.2\times10^{-6}} = 312.5\ \text{kHz}.$$

*Number of subcarriers:* $N = B/\Delta f = 20\times10^6/312{,}500 = 64$.

These are exactly the 802.11a/g parameters — 64-point FFT, 312.5 kHz spacing, 3.2 µs symbol, 0.8 µs guard interval, 4 µs total. Of the 64 subcarriers, 48 carry data, 4 are pilots for channel estimation, and 12 (including DC) are nulled as guard bands at the edges.

*Data rate with 64-QAM and rate-3/4 coding:*

$$R_b = \frac{48\ \text{subcarriers}\times6\ \text{bits}\times 0.75}{4\ \mu\text{s}} = \frac{216\ \text{bits}}{4\times10^{-6}} = 54\ \text{Mbps} \ \checkmark$$

— the 802.11g headline rate, derived from first principles.

*Now the design question the numbers pose.* Why not use a much longer symbol and shrink the overhead toward zero? Three reasons, and each is a different constraint from a different lesson:

1. **Frequency-offset sensitivity.** Longer $T_s$ means narrower $\Delta f$, and inter-carrier interference scales with (offset/$\Delta f$). Narrow subcarriers demand proportionally better oscillators.
2. **Channel coherence time.** The channel must stay constant across a symbol. At vehicular speeds a 100 µs symbol would see the channel change mid-symbol, and the flat-per-subcarrier assumption collapses.
3. **Latency.** A longer symbol means longer packets and worse round-trip latency, which matters for acknowledgements and control loops.

This is why 5G NR made subcarrier spacing **configurable** (15, 30, 60, 120 kHz): a stationary indoor user takes narrow spacing and low overhead; a high-speed or low-latency user takes wide spacing and pays the overhead. The design that was fixed in 802.11a became a tunable parameter once the range of use cases widened — which is a decent summary of what "flexible numerology" means and why 5G bothered.

## Watch out

- **You might think CDMA gets something for nothing by overlapping users.** It converts a *hard* limit into a *soft* one — users degrade each other gradually rather than being refused. Total capacity is unchanged; what changes is the failure mode, plus a hard dependence on power control.
- **You might think OFDM's overlapping subcarriers interfere.** They are exactly orthogonal, because $\Delta f = 1/T_s$ puts each subcarrier's peak on every other's nulls. Orthogonality is destroyed by frequency offset, not by overlap — which is why synchronization matters so much.
- **You might think the cyclic prefix is wasted overhead.** It is overhead, and it buys the elimination of ISI *and* the conversion of convolution into per-subcarrier multiplication. Compared with an adaptive equalizer's complexity and its noise enhancement, 20% overhead is cheap.
- **You might think a better multiple-access scheme raises total capacity.** In the ideal case all three give the same aggregate; the differences are in filters, clocks, burstiness, and hardware. Real gains come from **spatial reuse** and from scheduling, not from the axis you slice.
- **You might forget OFDM's PAPR.** A sum of many subcarriers is nearly Gaussian, with peaks 8–12 dB above average, forcing amplifier back-off. It is why LTE uses a different (lower-PAPR) waveform on the uplink than on the downlink.

## One-liner

> Frequency, time, code, and space are four ways to cut the same cake — the cut does not change its size, only the knife you need; and OFDM's real trick is that a cyclic prefix turns a horrible convolution into one multiply per subcarrier.

## Problems

**P1 (🟢)** A CDMA system has a chip rate of 1.2288 Mcps and a data rate of 9.6 kbps. (a) Find the processing gain, in ratio and in dB. (b) If the required $E_b/N_0$ is 7 dB, estimate the number of simultaneous users. (c) Voice activity is 40%; revise the estimate. (d) Explain why a single unpowered-controlled user 40 dB too strong would break the cell.

**P2 (🟡)** An OFDM system has 2048 subcarriers spaced 15 kHz apart, with a cyclic prefix of 4.7 µs. (a) Find the symbol duration and total occupied bandwidth. (b) Find the cyclic-prefix overhead. (c) What maximum delay spread can it tolerate, and what path-length difference does that correspond to? (d) With 1200 active subcarriers, 64-QAM, and rate-2/3 coding, find the data rate.

**P3 (🔴)** Compare FDMA and TDMA for $N=10$ users sharing $B = 1$ MHz and a total power budget $P$, with $N_0B/P = 0.1$ (i.e. total SNR of 10 dB). (a) Compute each user's capacity under FDMA. (b) Under TDMA where a user transmits at power $NP$ for $1/N$ of the time (constant *average* power $P$). (c) Show the totals agree, or explain any discrepancy. (d) State one practical reason a system might prefer each.

<details>
<summary>Solutions</summary>

**P1** (a) $$G_p = \frac{R_c}{R_b} = \frac{1.2288\times10^6}{9600} = 128, \qquad 10\log_{10}128 = 21.1\ \text{dB}.$$

(b) $(E_b/N_0)_{\rm req} = 7$ dB $= 5.01$:

$$N \approx 1+\frac{G_p}{(E_b/N_0)_{\rm req}} = 1+\frac{128}{5.01} = 1+25.5 = 26.5 \approx 26\ \text{users}.$$

(c) With a voice activity factor $\nu = 0.4$, only 40% of users transmit at any instant, so the interference is reduced by that factor and the user count rises correspondingly:

$$N \approx 1+\frac{G_p}{\nu(E_b/N_0)_{\rm req}} = 1+\frac{128}{0.4\times5.01} = 1+63.9 = 65\ \text{users}.$$

(Real IS-95 sectors add three-way sectorization for a further factor near 2.5, reaching well over 100 — though loading is kept below capacity to hold the noise rise in check.)

(d) The processing gain is 21.1 dB, meaning despreading suppresses an interferer by a factor of 128. A user 40 dB too strong arrives $10^4$ times too powerful; after despreading it still contributes

$$\frac{10^4}{128} = 78$$

times a normal user's interference — by itself more than the entire rest of the cell. Every other user's $E_b/(N_0+I_0)$ collapses and the cell drops all its calls.

**This is the near–far problem, and it is why CDMA lives or dies on power control.** IS-95 runs a closed-loop power control at 800 Hz, commanding each handset up or down in 1 dB steps, holding all received powers equal to within a decibel or two. Note the structural point: the modulation scheme itself is fine; the system's viability depends on a fast control loop layered on top. (Contrast FDMA and TDMA, where users are separated by filters or by timing and a strong user simply produces a strong — but confined — signal in its own slot.)

**P2** (a) $$T_s = \frac{1}{\Delta f} = \frac{1}{15{,}000} = 66.7\ \mu\text{s}.$$

$$B = N\Delta f = 2048\times15{,}000 = 30.72\ \text{MHz}.$$

(This is the LTE 20 MHz configuration: 2048-point FFT sampled at 30.72 MHz, with only 1200 subcarriers actually populated, occupying 18 MHz inside a 20 MHz channel.)

(b) $$\text{overhead} = \frac{T_{cp}}{T_s+T_{cp}} = \frac{4.7}{66.7+4.7} = \frac{4.7}{71.4} = 6.6\%.$$

(c) Maximum tolerable delay spread equals the prefix length, **4.7 µs**. The corresponding path-length difference:

$$\Delta d = c\,\tau = (3\times10^8)(4.7\times10^{-6}) = 1410\ \text{m}.$$

So echoes arriving via paths up to about 1.4 km longer than the direct one are absorbed harmlessly. That comfortably covers urban multipath (typically under 1 µs) and most suburban macrocell scenarios — the LTE "extended" cyclic prefix of 16.7 µs exists for large rural cells and single-frequency broadcast networks, where delay spreads reach 5 km.

(d) Symbols per second: $1/(T_s+T_{cp}) = 1/71.4\ \mu\text{s} = 14{,}006$ per second.

$$R_b = 1200\ \text{subcarriers}\times6\ \text{bits}\times\frac23\times14{,}006 = 1200\times4\times14{,}006 = 67.2\ \text{Mbps}.$$

(Real LTE reaches about 75 Mbps per stream on a 20 MHz carrier with rate-0.75 coding and less reference-signal overhead than this simple count assumes; the calculation gets the right order and the right structure.)

**P3** Let $\mathrm{SNR}_{\rm tot} = \dfrac{P}{N_0B} = 10$ (10 dB).

(a) **FDMA.** Each user gets bandwidth $B/N = 100$ kHz and power $P/N$. Its noise is $N_0(B/N)$, so its SNR is

$$\frac{P/N}{N_0B/N} = \frac{P}{N_0B} = 10 \quad\text{— unchanged.}$$

$$C_{\rm user} = \frac{B}{N}\log_2(1+10) = 10^5\times 3.459 = 345.9\ \text{kbps}.$$

Total: $10\times345.9 = 3.459$ Mbps.

(b) **TDMA.** The user transmits over the full $B$ for a fraction $1/N$ of the time, at instantaneous power $NP$ (so the average is $P$). While transmitting, its SNR is

$$\frac{NP}{N_0B} = 10\times10 = 100 .$$

Its capacity, averaged over the duty cycle:

$$C_{\rm user} = \frac{1}{N}\,B\log_2(1+100) = \frac{10^6}{10}\times6.658 = 665.8\ \text{kbps}.$$

Total: $6.658$ Mbps.

(c) They do **not** agree: TDMA gives 6.66 Mbps against FDMA's 3.46 Mbps — nearly twice as much.

*Why, and what it means.* The discrepancy comes entirely from the **peak power assumption**. TDMA as posed lets a user transmit at $10\times$ the average power in its burst, and capacity is concave in SNR, so concentrating power into short high-power bursts extracts more bits than spreading it evenly. That is a real effect, and it is a genuine advantage of TDMA *when the transmitter can burst*.

If instead the peak power is capped at $P$ (the more realistic constraint for a handset amplifier), TDMA's user SNR during its burst is $P/(N_0B) = 10$ and

$$C_{\rm user} = \frac{1}{10}\times10^6\log_2(11) = 345.9\ \text{kbps},$$

total 3.459 Mbps — **exactly matching FDMA** ✓. This is the sense in which "the multiple-access scheme does not change total capacity": under an equal-*peak*-power constraint the schemes tie, and the earlier claim in the lesson body should be read with that constraint understood.

(Both are in turn below the single-user capacity $B\log_2(1+10) = 3.459$ Mbps — equal to it, in fact. Orthogonal splitting of a channel among users is capacity-preserving; the loss appears only with non-orthogonal sharing or unequal channels.)

(d) **Prefer FDMA when:** the transmitter's peak power is tightly limited and it must run continuously (a low-cost analog radio, a satellite transponder amplifier that must not be pulsed); or when no network-wide timing reference exists, since FDMA needs no synchronization at all; or when users have steady, equal, continuous traffic.

**Prefer TDMA when:** traffic is bursty and slots can be reassigned dynamically — one user can be given six slots and another one, which FDMA cannot do without retuning filters; when the transmitter *can* burst, capturing the peak-power gain computed above; when digital hardware makes accurate timing cheap and sharp analog filters expensive (which has been true since about 1985 and is why GSM chose TDMA over 1G's FDMA); and when a handset benefits from powering its transmitter down for 7/8 of the time, which is a substantial battery saving.

</details>

## Flashback

**From Lesson 2.5 (Equalization, briefly):** A channel is $H(f) = 1+0.6e^{-j2\pi fT}$. (a) Find the depth of its spectral notch in dB. (b) State the noise enhancement a zero-forcing equalizer would apply there. (c) Explain how OFDM handles this same channel without an equalizer.

<details>
<summary>Solution</summary>

(a) $|H(f)|^2 = 1.36+1.2\cos(2\pi fT)$, minimized at $\cos = -1$: $|H|^2 = 0.16$, i.e. $10\log_{10}0.16 = -7.96$ dB.

(b) Zero-forcing applies $1/|H|^2$, so at the notch it amplifies the noise by $+7.96$ dB — leaving the SNR at that frequency exactly as bad as the channel made it, while restoring the pulse shape.

(c) OFDM does not invert the channel across the band at all. Each subcarrier is narrow enough that $H(f)$ is essentially constant across it, so after the FFT the received symbol is simply $Y_k = H_kX_k+W_k$ and equalization is one complex divide, $\hat X_k = Y_k/H_k$.

Crucially, **the notch does not hurt the other subcarriers.** In a single-carrier system the notch damages the whole signal through the equalizer's noise enhancement; in OFDM the damage is confined to the handful of subcarriers sitting in the notch. Those few subcarriers have poor SNR, and the system deals with them in one of two ways:

- **Coding and interleaving across subcarriers** — an error-correcting code spread over all 48 subcarriers treats the few bad ones as a small burst of errors and corrects them from the good ones' redundancy. (This combination is called COFDM, and the "C" is not optional: uncoded OFDM on a frequency-selective channel performs *worse* than single-carrier, because those few dead subcarriers dominate the error rate.)
- **Adaptive bit loading** — measure each subcarrier's SNR and give it a constellation it can support: 64-QAM on the good ones, QPSK or nothing on the ones in the notch. This is what DSL does, and it is the discrete engineering version of water-filling ([`information-theory` 4.2](../../information-theory/lessons/04-02-gaussian-channel-water-filling.md)).

Either way, a frequency-selective channel — the hardest problem in [2.5](02-05-equalization-briefly.md) — becomes a bookkeeping exercise over independent flat subchannels. That is the whole reason OFDM took over.

</details>

## Connections

- **Backward:** this lesson ties together FDM from [1.5](01-05-ssb-vsb-multiplexing.md), TDM from [2.1](02-01-sampling-theorem-aliasing.md), the equalization problem from [2.5](02-05-equalization-briefly.md), orthogonality from [3.1](03-01-signal-space-matched-filter.md), and the capacity accounting from [4.2](04-02-channel-capacity-shannon-limit.md). OFDM's subcarrier orthogonality is the same $\Delta f = 1/T$ condition as the Nyquist criterion in [2.4](02-04-isi-nyquist-criterion.md) — the two are Fourier duals of each other.
- **Forward:** this is the end of the course. The natural continuations are [`information-theory`](../../information-theory/syllabus.md) for the proofs behind Module 4, and [`computer-networks`](../../computer-networks/syllabus.md) for what happens above the physical layer — where "multiple access" reappears as ALOHA, CSMA, and collision handling, solving the same sharing problem with protocols instead of waveforms.
- **Sideways:** the IFFT/FFT pair at OFDM's heart is [`signals-systems` 3.5](../../signals-systems/lessons/03-05-the-fft.md) doing real work; adaptive bit loading is water-filling from [`information-theory` 4.2](../../information-theory/lessons/04-02-gaussian-channel-water-filling.md); and spread spectrum's processing gain is the same bandwidth-for-robustness trade you first met as FM's $3\beta^2$ in [1.6](01-06-angle-modulation-fm-pm.md).
