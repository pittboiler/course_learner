# Communication Systems · Lesson 1.6: Angle modulation — FM and PM

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [1.4 Amplitude modulation — DSB and AM](01-04-amplitude-modulation-dsb-am.md), [1.5 SSB, VSB and multiplexing](01-05-ssb-vsb-multiplexing.md) · Unlocks: [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md), [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md)

## Why this matters

Module 1 so far has treated bandwidth as something to *minimize*: SSB was a win because it used less. FM is the discovery that runs the other way — deliberately spend **more** bandwidth than the message needs, and get SNR back in exchange, at a rate that beats anything amplitude modulation can offer. FM broadcast sounds better than AM broadcast not because of any electronic refinement but because it occupies 200 kHz to send 15 kHz of audio.

That trade — bandwidth for power, at an exponential-ish exchange rate — is the first appearance of the deepest idea in the course. Shannon's capacity formula in [4.2](04-02-channel-capacity-shannon-limit.md) says exactly how favourable such a trade can possibly be, and FM was the historical proof that the trade exists at all. Edwin Armstrong demonstrated it in 1933, against a consensus (formalized in a widely believed argument by Carson) that narrowing or widening the band could not possibly help.

## The idea

An amplitude-modulated wave carries the message in its height. An **angle-modulated** wave has constant height and carries the message in *when* the wave crosses zero — its phase, or equivalently the rate of change of phase, its [instantaneous frequency](../reference.md#instantaneous-frequency).

Two immediate consequences, and they are the whole appeal.

**Constant envelope.** The transmitted amplitude never varies, so a receiver can simply clip the signal flat — hard-limit it — and destroy every amplitude disturbance picked up along the way. Lightning crashes, ignition noise, fading: all of it is amplitude, and all of it is discarded before detection. This is why FM sounds clean under a thunderstorm that renders AM unusable. It also means the transmitter's power amplifier can be run in saturation, at high efficiency, since it never has to be linear.

**Noise attenuation grows with deviation.** Noise perturbs the received phase by a small angle. If you have chosen to swing the frequency over a wide range, the message's own phase excursion is large compared to that perturbation, so the ratio improves. Swing wider, and you improve it further — while paying in bandwidth. The result is that output SNR grows as the *square* of the deviation while bandwidth grows only linearly with it. That superlinear payoff is what "wideband FM" buys.

The subtlety that trips everyone: angle modulation is **nonlinear**. Superposition fails. The spectrum of an FM signal is not the message spectrum shifted — it is an infinite set of sidebands whose amplitudes are Bessel functions, and there is no simple "bandwidth = twice the message" rule. Carson's rule is the practical approximation everyone actually uses.

## The formal version

Write the transmitted signal as

$$s(t) = A_c\cos\big[\theta_i(t)\big], \qquad \theta_i(t) = 2\pi f_ct + \phi(t).$$

The **instantaneous frequency** is the rate of change of the total angle:

$$f_i(t) = \frac{1}{2\pi}\frac{d\theta_i}{dt} = f_c + \frac{1}{2\pi}\frac{d\phi}{dt}.$$

*In words: frequency is how fast the phase is turning right now.*

**Phase modulation (PM):** put the message in the phase.

$$\phi(t) = k_p\,m(t) \quad\Longrightarrow\quad s_{\rm PM}(t) = A_c\cos\big[2\pi f_ct + k_pm(t)\big].$$

**Frequency modulation (FM):** put the message in the *frequency*, so the phase is its integral.

$$f_i(t) = f_c + k_fm(t) \quad\Longrightarrow\quad s_{\rm FM}(t) = A_c\cos\Big[2\pi f_ct + 2\pi k_f\!\!\int_0^t\!\! m(\tau)d\tau\Big].$$

$k_p$ is in radians per volt; $k_f$ in hertz per volt. *In words: FM is PM applied to the integral of the message; PM is FM applied to its derivative.* They are the same family, related by one integrator — so an FM transmitter is a PM transmitter with an integrator bolted on the front, and every FM result converts to a PM result by that substitution.

**Peak frequency deviation.**

$$\Delta f = k_f\,|m|_{\max} \quad\text{(hertz)}.$$

*In words: the furthest the carrier ever strays from its rest frequency.* This is a property of the transmitter's design and the message's peak — **not** of the message's bandwidth.

**Modulation index.** For a single tone $m(t) = A_m\cos(2\pi f_mt)$:

$$\beta = \frac{\Delta f}{f_m} = \frac{k_fA_m}{f_m} \quad \text{(FM)}, \qquad \beta = k_pA_m \quad\text{(PM)}.$$

*In words: $\beta$ is the peak phase excursion in radians.* Note the sharp difference: FM's index falls as the message frequency rises (a fixed deviation spread over faster cycles is less phase), while PM's index doesn't depend on $f_m$ at all. That single fact drives the pre-emphasis story below.

**The spectrum: Bessel functions.** For single-tone FM,

$$s(t) = A_c\cos\big[2\pi f_ct + \beta\sin(2\pi f_mt)\big] = A_c\sum_{n=-\infty}^{\infty}J_n(\beta)\cos\big[2\pi(f_c+nf_m)t\big],$$

where $J_n(\beta)$ is the Bessel function of the first kind. *In words: a single modulating tone produces an infinite comb of sidebands at every multiple of $f_m$ away from the carrier, with amplitudes set by Bessel functions of the modulation index.* Facts worth holding:

- $\sum_n J_n^2(\beta) = 1$ — total power is $A_c^2/2$ **regardless of $\beta$**. Modulation redistributes power among sidebands; it never adds any. (Contrast AM, where sideband power is added on top of the carrier.)
- $J_n(\beta)$ is negligible once $n > \beta + 1$ or so, which is what makes the infinite sum practically finite.
- $J_0(\beta) = 0$ at $\beta \approx 2.405$: at that index the *carrier line vanishes entirely*. A striking, and experimentally useful, way to calibrate deviation.

**Carson's rule.** Keeping the sidebands that hold ~98% of the power:

$$\boxed{\;B_T \approx 2(\Delta f + W) = 2\Delta f\left(1+\frac{1}{D}\right), \qquad D = \frac{\Delta f}{W}.\;}$$

$D$ is the **deviation ratio** — the tone index $\beta$ generalized to an arbitrary message of bandwidth $W$. *In words: bandwidth is twice the sum of how far you swing and how fast you swing it.* Two regimes:

- **Narrowband FM**, $\beta \ll 1$: $B_T\approx 2W$, the same as DSB. The spectrum is a carrier plus one sideband pair; NBFM looks like AM with one sideband phase-flipped.
- **Wideband FM**, $\beta \gg 1$: $B_T\approx 2\Delta f$. Bandwidth is set by the deviation and barely notices the message bandwidth.

**Noise performance.** For an FM discriminator above threshold, the figure of merit is

$$\frac{\mathrm{SNR}_o}{\mathrm{SNR}_{\rm base}} = 3\beta^2(\beta+1) \;\approx\; 3\beta^2 \ \text{for large }\beta \quad\text{(single tone)}, \qquad \text{generally } \ 3D^2(D+1).$$

*In words: output SNR grows as the square of the modulation index — quadratic gain for linear bandwidth cost.* This is the payoff, and it comes from a mechanism worth naming: the discriminator differentiates the phase, and differentiation multiplies noise amplitude by frequency, so the output noise PSD is **parabolic** ($\propto f^2$) rather than flat. Most of the noise power lands at the top of the audio band.

**Threshold effect.** Below roughly 10 dB of carrier-to-noise ratio the noise phasor occasionally exceeds the signal phasor and the phase makes a full $2\pi$ rotation, producing an audible click. Below threshold, output SNR collapses far faster than input SNR falls. **You cannot get the $3\beta^2$ gain for free by making $\beta$ enormous** — larger $\beta$ means larger $B_T$, hence more admitted noise, hence a lower CNR, and eventually you fall off the threshold cliff. That cliff is FM's version of the Shannon limit: there is a best $\beta$ for a given received power, not an unbounded one.

**Pre-emphasis / de-emphasis.** Because output noise is parabolic while typical audio power falls off at high frequencies, the top of the band has a terrible local SNR. The fix: boost high frequencies at the transmitter (pre-emphasis, a differentiator-like filter with a $75\ \mu$s time constant in the US) and cut them by the inverse at the receiver, which flattens the noise back down. Worth around 13 dB in broadcast FM — comparable to the gain from a big deviation increase, for free. Note that pre-emphasized FM is, at high frequencies, literally PM: pre-emphasis differentiates, and FM-of-a-derivative is PM.

## Picture

![Two panels. Left: time-domain FM waveform, constant amplitude, with the wave visibly compressed where the message is high and stretched where it is low, drawn under the message. Right: the FM sideband spectrum for beta = 5, a comb of lines at multiples of f_m either side of f_c, with heights following the Bessel functions and a Carson-rule bracket spanning 2(delta f + W).](assets/01-06-fig1.svg)

Left: the defining picture — **the height never changes, only the spacing of the zero crossings**. That is why a limiter can strip amplitude noise away with no loss. Right: the price. A single modulating tone produces a whole comb of sidebands; Carson's bracket is where you agree to stop counting. Compare to AM in [1.4](01-04-amplitude-modulation-dsb-am.md), where one tone produced exactly two sidebands and nothing else — that difference *is* the nonlinearity of angle modulation.

## Worked examples

**Example 1 (commercial FM broadcast, end to end).** US FM broadcast allows $\Delta f = 75$ kHz with audio to $W = 15$ kHz.

*Deviation ratio:* $D = 75/15 = 5$.

*Carson bandwidth:*

$$B_T = 2(75 + 15) = 180\ \text{kHz},$$

which is why stations are allocated 200 kHz channels — 180 kHz of signal plus guard band.

*SNR advantage over baseband:*

$$\frac{\mathrm{SNR}_o}{\mathrm{SNR}_{\rm base}} = 3D^2(D+1) = 3(25)(6) = 450 \;=\; 26.5\ \text{dB}.$$

Add roughly 13 dB from pre-emphasis and FM broadcast runs about 39 dB better than sending the same audio with the same received power at baseband — while occupying 12 times the bandwidth ($180$ vs $15$ kHz).

*Compare AM broadcast:* $B_T = 2\times 5\ \text{kHz} = 10$ kHz (audio limited to 5 kHz), figure of merit $\le 1/3$, i.e. at best $-4.8$ dB. The gap between the two listening experiences is roughly 44 dB and a factor of 3 in audio bandwidth. **All of it was bought with spectrum.**

**Example 2 (the same message, three ways — and a bandwidth surprise).** A 5 kHz tone of amplitude 2 V modulates a carrier. Compare (i) FM with $k_f = 15$ kHz/V, (ii) PM with $k_p = 3$ rad/V, (iii) what happens to each when the tone drops to 1 kHz at the same amplitude.

*(i) FM at 5 kHz:* $\Delta f = k_fA_m = 30$ kHz, $\beta = 30/5 = 6$, $B_T = 2(30+5) = 70$ kHz.

*(ii) PM at 5 kHz:* $\beta = k_pA_m = 6$ — same index by construction. Deviation $\Delta f = \beta f_m = 30$ kHz, $B_T = 70$ kHz. Identical.

*(iii) Drop the tone to 1 kHz.*

- **FM:** $\Delta f$ is unchanged at 30 kHz (it depends on the message *amplitude*, not its frequency), so $\beta = 30/1 = 30$ and $B_T = 2(30+1) = 62$ kHz. Bandwidth barely moved.
- **PM:** $\beta$ is unchanged at 6 (it depends on amplitude only), so $\Delta f = \beta f_m = 6$ kHz and $B_T = 2(6+1) = 14$ kHz. Bandwidth collapsed by a factor of 5.

The lesson: **PM's bandwidth is roughly proportional to the message frequency; FM's is roughly constant.** A message whose energy sits mostly at low frequencies — which is to say, all speech and music — therefore uses PM's spectrum inefficiently at the low end and, more importantly, gives PM a *constant* SNR advantage across the band where FM's advantage falls off at high frequencies. This is exactly the imbalance pre-emphasis corrects, and it is why the two schemes, formally interchangeable, are not interchangeable in practice.

## Watch out

- **You might think a frequency deviation of $\Delta f$ means a bandwidth of $2\Delta f$.** Only in the wideband limit. Carson's rule is $2(\Delta f + W)$, and in the narrowband limit $\beta\ll1$ it correctly reduces to $2W$ — where the bandwidth has nothing to do with the deviation at all.
- **You might think increasing $\beta$ increases transmitted power.** It cannot: $\sum J_n^2 = 1$, so an FM signal's power is $A_c^2/2$ forever. Increasing $\beta$ only *moves* power from the carrier line out into the sidebands. Contrast AM, where increasing $\mu$ genuinely adds sideband power on top of a fixed carrier.
- **You might think you can make $\beta$ huge and get unlimited SNR.** The threshold effect stops you. Bigger $\beta$ means a wider receiver, which admits more noise and lowers the carrier-to-noise ratio; once CNR drops past about 10 dB the discriminator starts clicking and output SNR falls off a cliff. There is an optimum $\beta$ for each received power level.
- **You might think instantaneous frequency is the frequency you would measure on a spectrum analyzer.** It is not. $f_i(t)$ is a time-domain construct — the derivative of the phase — and it can even go negative. The spectrum analyzer shows the Bessel comb, which extends well beyond $f_c \pm \Delta f$. Mixing these two ideas up is the single most common conceptual error in angle modulation.

## One-liner

> Angle modulation freezes the amplitude and writes the message into the zero crossings, buying SNR that grows as $\beta^2$ with bandwidth that grows only as $\beta$ — until the threshold cliff ends the bargain.

## Problems

**P1 (🟢)** A carrier at 90 MHz is frequency-modulated by a 3 kHz tone with $k_f = 12$ kHz/V and amplitude 5 V. (a) Find $\Delta f$ and $\beta$. (b) Find the Carson bandwidth. (c) Find the SNR improvement over baseband, in dB. (d) If the tone amplitude is halved, what happens to each of (a)–(c)?

**P2 (🟡)** A message $m(t)$ is band-limited to $W=4$ kHz, and a transmitter can radiate over at most 60 kHz of bandwidth. (a) What is the largest deviation ratio $D$ allowed by Carson's rule? (b) What SNR improvement does that give? (c) The same 60 kHz used for DSB-SC would allow a message of what bandwidth, and what figure of merit? (d) State in one sentence what the FM design is buying and what it is spending.

**P3 (🔴)** A single-tone FM signal has $\beta = 2.405$, where $J_0(\beta) = 0$. (a) What fraction of the total power is in the carrier line, and where has it gone? (b) Using $J_1(2.405)=0.519$, $J_2 = 0.432$, $J_3 = 0.199$, $J_4 = 0.064$, verify that the first four sideband pairs account for essentially all the power. (c) Compare Carson's rule's bandwidth prediction to the "count the significant sidebands" estimate from (b), with $f_m = 10$ kHz. (d) Explain why this carrier-null condition is a convenient laboratory method for calibrating a deviation meter.

<details>
<summary>Solutions</summary>

**P1** (a) $\Delta f = k_fA_m = 12\ \text{kHz/V}\times 5\ \text{V} = 60$ kHz. $\beta = \Delta f/f_m = 60/3 = 20$.

(b) $B_T = 2(\Delta f + W) = 2(60+3) = 126$ kHz.

(c) $3\beta^2(\beta+1) = 3(400)(21) = 25{,}200$, i.e. $10\log_{10}25200 = 44.0$ dB.

(d) Halving the amplitude to 2.5 V halves the deviation: $\Delta f = 30$ kHz, $\beta = 10$. Then $B_T = 2(30+3) = 66$ kHz — roughly halved. And $3(100)(11) = 3300 = 35.2$ dB — down 8.8 dB. Note the exchange rate: cutting bandwidth by ~2 cost ~9 dB of SNR, close to the $\beta^3$-ish scaling of $3\beta^2(\beta+1)$ in this range. Bandwidth is *cheap* in FM in the sense that a little more buys a lot of SNR.

**P2** (a) $B_T = 2(\Delta f + W) = 2W(D+1) \le 60$ kHz with $W=4$:

$$8(D+1)\le 60 \;\Longrightarrow\; D \le 6.5 .$$

(b) $3D^2(D+1) = 3(42.25)(7.5) = 950.6 = 29.8$ dB.

(c) DSB-SC needs $B_T = 2W$, so 60 kHz supports $W = 30$ kHz of message — over seven times the audio bandwidth. Its figure of merit is 1, i.e. 0 dB.

(d) FM is spending message *bandwidth* (4 kHz instead of 30 kHz — a factor of 7.5) and buying nearly 30 dB of SNR; DSB spends nothing and gains nothing. Which is right depends entirely on whether you are short of spectrum or short of power.

**P3** (a) Carrier power fraction is $J_0^2(\beta) = 0$ — **none**. All of the power has moved into the sidebands. Nothing was created or destroyed: $\sum_n J_n^2 = 1$ always, and at this particular index the $n=0$ term happens to be zero.

(b) Sidebands come in pairs ($J_{-n} = (-1)^nJ_n$, so $J_{-n}^2 = J_n^2$). Total power in the first four pairs:

$$2\big(J_1^2+J_2^2+J_3^2+J_4^2\big) = 2\big(0.519^2+0.432^2+0.199^2+0.064^2\big)$$
$$= 2(0.2694+0.1866+0.0396+0.0041) = 2(0.4997) = 0.9994 .$$

99.94% — everything beyond the fourth pair is negligible. ✓

(c) Carson: $B_T = 2(\Delta f + f_m) = 2f_m(\beta+1) = 2(10)(3.405) = 68.1$ kHz. Counting significant sidebands: 4 pairs at 10 kHz spacing means content out to $\pm 40$ kHz, i.e. $B \approx 80$ kHz.

Carson underestimates by about 15%, which is exactly its character: it is a 98%-power rule, deliberately a little tight, and the "$\beta+1$ significant sidebands" count is a little loose. Both are approximations to a spectrum that is formally infinite; for regulatory filings you use Carson, for filter design you use the sideband count with margin.

(d) You feed in a single tone at a known $f_m$, watch the carrier line on a spectrum analyzer, and turn up the modulating amplitude until that line disappears. At that instant $\beta = 2.405$ exactly, so

$$\Delta f = \beta f_m = 2.405\,f_m$$

is known to the accuracy of your tone generator alone — no amplitude calibration, no analyzer amplitude accuracy, nothing but a frequency and a null you can see by eye. Nulls are far easier to detect precisely than peaks, and higher-order nulls ($J_0$ also vanishes at 5.520, 8.654, …) give further calibration points. This is a genuinely standard bench technique.

</details>

## Flashback

**From Lesson 1.4 (Amplitude modulation — DSB and AM):** A conventional AM transmitter radiates 500 W total with a modulation index of 0.6 on a single tone. (a) Find the carrier and sideband powers. (b) Find the efficiency. (c) An FM transmitter of the same total power carries how much of it in "sidebands"? Comment on the contrast.

<details>
<summary>Solution</summary>

(a) $P_T = P_c(1+\mu^2/2) = P_c(1+0.18) = 1.18P_c$, so

$$P_c = 500/1.18 = 423.7\ \text{W}, \qquad P_{\rm SB} = 500-423.7 = 76.3\ \text{W}.$$

(b) $\eta = 76.3/500 = 15.3\%$. (Check: $\mu^2/(2+\mu^2) = 0.36/2.36 = 15.3\%$ ✓.)

(c) In FM the total power is fixed at $A_c^2/2$ and $\sum_nJ_n^2 = 1$, so the sideband fraction is $1-J_0^2(\beta)$ — which for a typical broadcast $\beta=5$ is $1-J_0^2(5) = 1-(-0.178)^2 = 0.968$, about **97%**. And at $\beta = 2.405$ it is 100%.

The contrast is the point. AM's carrier is a permanent tax that only shrinks as $\mu\to1$, capping efficiency at 33%. FM's "carrier" is just the $n=0$ term of a redistribution, and pushing $\beta$ up drains it almost completely into the sidebands. Angle modulation gets to spend nearly all its power on information — and this is *before* counting the $3\beta^2$ SNR gain.

</details>

## Connections

- **Backward:** FM is the opposite move to [1.5](01-05-ssb-vsb-multiplexing.md)'s SSB on the same axis. SSB minimizes bandwidth at fixed SNR; FM maximizes SNR at the cost of bandwidth. Together they bracket what analog modulation can do.
- **Forward:** the bandwidth-for-power trade is quantified exactly by Shannon in [4.2](04-02-channel-capacity-shannon-limit.md), where $C = B\log_2(1+\mathrm{SNR})$ shows the exchange rate is at best *exponential* — FM's $3\beta^2$ is a long way short of optimal, which is the gap coding closes. The threshold effect also foreshadows the waterfall shape of every BER curve in [3.3](03-03-binary-modulation-ber.md).
- **Sideways:** instantaneous frequency as $\dot\theta/2\pi$ is the same construct as the local frequency of a wave packet in [`mathematical-methods-physics`](../../mathematical-methods-physics/syllabus.md), and constant-envelope signalling reappears wherever a nonlinear amplifier must be run in saturation — including every satellite transponder.
