# Communication Systems · Lesson 3.3: Binary modulation and BER

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [3.2 Optimal detection in AWGN](03-02-optimal-detection-awgn.md), [1.4 Amplitude modulation — DSB and AM](01-04-amplitude-modulation-dsb-am.md) · Unlocks: [3.4 Going M-ary: QPSK and M-PSK](03-04-qpsk-and-m-psk.md), [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md)

## Why this matters

This is the payoff lesson. Everything since [3.1](03-01-signal-space-matched-filter.md) has been machinery; here it produces numbers you can hand an engineer: **how much power do I need to send a bit with an error rate of one in a million?**

The three classical binary schemes — on-off keying, frequency-shift keying, phase-shift keying — differ only in where they place two points in signal space, and their error rates differ only by the resulting distances. Three geometries, one [$Q$-function](../reference.md#the-q-function), a 3 dB gap between each. Once you can draw the constellation, you can write the BER without further thought, and that skill transfers directly to every $M$-ary scheme in the rest of the module.

## The idea

You are sending one bit per symbol, so you have two waveforms to choose. From [3.1](03-01-signal-space-matched-filter.md) P3 you already know the answer to "which two?": **make them antipodal** — point them in opposite directions — because that maximizes distance at fixed energy. Anything else wastes power.

The three schemes are three answers to how you build that pair on a carrier.

**Binary PSK** flips the carrier's phase by $180°$: $+\cos$ versus $-\cos$. The two waveforms are exact negatives, so $\rho=-1$, and BPSK is *the* optimal binary scheme. Nothing beats it.

**Binary FSK** uses two different frequencies. Chosen properly these are orthogonal, $\rho = 0$, so the distance is $\sqrt2$ times smaller — a 3 dB penalty. What FSK buys is that it can be demodulated **non-coherently**: you don't need to know the carrier phase, just which of two filters has more energy. On a fading channel where the phase wanders unpredictably, that is worth far more than 3 dB.

**On-off keying** sends the carrier or nothing. The two points are $0$ and $\sqrt{2E_b}$ — not antipodal, not even centred at the origin. It wastes 3 dB purely by failing to centre its constellation, and it also has the operational nuisance that the optimal threshold sits halfway up and therefore depends on the received amplitude, which drifts. It survives because "transmitter on or off" is the cheapest thing a radio can do, which is why it runs your garage door and most optical fibre.

The pattern: **BPSK is optimal, FSK and OOK each give up 3 dB, and each buys something operational with it.** The 3 dB is the same right triangle you drew in [3.1](03-01-signal-space-matched-filter.md), showing up twice for two different reasons.

## The formal version

Throughout, $E_b$ is the average energy per bit, $N_0$ the one-sided noise density, and $T_b$ the bit duration.

**Binary PSK (BPSK).**

$$s_1(t) = \sqrt{\frac{2E_b}{T_b}}\cos(2\pi f_ct), \qquad s_2(t) = -\sqrt{\frac{2E_b}{T_b}}\cos(2\pi f_ct) = \sqrt{\frac{2E_b}{T_b}}\cos(2\pi f_ct+\pi).$$

One basis function $\phi_1 = \sqrt{2/T_b}\cos(2\pi f_ct)$, coordinates $\pm\sqrt{E_b}$, distance $d = 2\sqrt{E_b}$:

$$\boxed{\;P_b^{\rm BPSK} = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right).\;}$$

**Binary FSK (coherent).**

$$s_i(t) = \sqrt{\frac{2E_b}{T_b}}\cos(2\pi f_it), \quad i=1,2,$$

orthogonal when $f_1-f_2 = k/(2T_b)$ for integer $k$. Two-dimensional, coordinates $(\sqrt{E_b},0)$ and $(0,\sqrt{E_b})$, distance $d=\sqrt{2E_b}$:

$$P_b^{\rm BFSK} = Q\!\left(\sqrt{\frac{E_b}{N_0}}\right).$$

*3 dB worse than BPSK* — you need twice the energy for the same error rate.

**On-off keying / binary ASK (coherent).** Send $\sqrt{2E/T_b}\cos(2\pi f_ct)$ for a 1, nothing for a 0. The "on" symbol has energy $E$; averaged over equally likely bits, $E_b = E/2$, so $E = 2E_b$. Coordinates $0$ and $\sqrt{2E_b}$, distance $d = \sqrt{2E_b}$:

$$P_b^{\rm OOK} = Q\!\left(\sqrt{\frac{E_b}{N_0}}\right).$$

Same as coherent FSK, 3 dB worse than BPSK — but for a different reason. FSK loses because its signals are perpendicular rather than opposed; OOK loses because its constellation is not centred (see [3.2](03-02-optimal-detection-awgn.md) P1c).

**Non-coherent detection.** If the receiver has no phase reference, it must use envelope detection. This costs a little more than a decibel at useful error rates, and it changes the *shape* of the curve from a $Q$-function to an exponential:

| Scheme | $P_b$ | Cost vs. its coherent version at $10^{-5}$ |
|---|---|---|
| DPSK (differential PSK) | $\tfrac12e^{-E_b/N_0}$ | ~0.8 dB worse than BPSK |
| Non-coherent BFSK | $\tfrac12e^{-E_b/2N_0}$ | ~0.8 dB worse than coherent BFSK |
| Non-coherent OOK | $\approx\tfrac12e^{-E_b/2N_0}$ | ~0.8 dB worse than coherent OOK |

**DPSK** deserves a note: it encodes each bit as a phase *change* rather than an absolute phase, so the previous symbol serves as the phase reference. That eliminates carrier recovery entirely at a cost under 1 dB — an outstanding trade, and the reason DPSK is everywhere in low-cost radio. The price is that errors come in pairs (a corrupted symbol wrecks its own bit and the next one's reference).

**The summary table.** Required $E_b/N_0$ for $P_b = 10^{-5}$:

| Scheme | Formula | $E_b/N_0$ needed |
|---|---|---|
| **BPSK / QPSK** | $Q(\sqrt{2E_b/N_0})$ | **9.6 dB** |
| DPSK | $\tfrac12e^{-E_b/N_0}$ | 10.3 dB |
| Coherent BFSK / OOK | $Q(\sqrt{E_b/N_0})$ | 12.6 dB |
| Non-coherent BFSK / OOK | $\tfrac12e^{-E_b/2N_0}$ | 13.4 dB |

Memorize **9.6 dB for BPSK at $10^{-5}$**. It is the reference point for the whole subject: every coding gain in Module 4 is quoted as a saving against it, and the Shannon limit of $-1.6$ dB in [4.2](04-02-channel-capacity-shannon-limit.md) is 11.2 dB below it — the gap that coding exists to close.

**Bandwidth.** With raised-cosine pulses of roll-off $\alpha$ ([2.4](02-04-isi-nyquist-criterion.md)), a bandpass binary scheme occupies

$$B_T = R_b(1+\alpha) \ \text{hertz},$$

so binary signalling gives a spectral efficiency of $1/(1+\alpha) \le 1$ bit/s/Hz. Every binary scheme is stuck at roughly 1 bit/s/Hz — which is what [3.4](03-04-qpsk-and-m-psk.md) sets out to improve.

**Reading the curve.** BER-versus-$E_b/N_0$ curves are drawn on a log-linear plot, and their characteristic shape is a **waterfall**: nearly flat at low SNR, then plunging. The steepness comes from the Gaussian tail — around $10^{-5}$, one extra decibel of $E_b/N_0$ buys about an order of magnitude of BER. Consequently link budgets are quoted with a **margin** (typically 3–6 dB), because being 2 dB short does not degrade the link, it kills it.

## Picture

![A BER versus Eb/N0 plot on a logarithmic vertical axis from 1e-1 down to 1e-8, horizontal axis 0 to 16 dB, with four waterfall curves labelled BPSK, DPSK, coherent BFSK, and non-coherent BFSK, progressively shifted right, and a horizontal line at 1e-5 marking the 9.6 dB and 12.6 dB crossings. Below, three small constellation insets: BPSK two antipodal points, BFSK two perpendicular points, OOK one point at the origin and one on an axis.](assets/03-03-fig1.svg)

The waterfall shape is the point. All four curves are essentially flat near 0 dB and then plunge — the transition from "hopeless" to "essentially error-free" spans only a few decibels. The horizontal spacing between curves is the 3 dB and 0.8 dB penalties in visual form, and it is constant: a 3 dB loss is a 3 dB shift of the whole curve, at every error rate. The three insets underneath explain the shifts: antipodal, perpendicular, and off-centre.

## Worked examples

**Example 1 (a satellite link budget, all the way through).** A link delivers $-125$ dBW to a receiver with system noise temperature 300 K, carrying 1 Mbps of BPSK. What is the BER, and what is the margin over $10^{-6}$?

*Noise density:* $N_0 = kT_e$, so in dB,

$$N_0 = -228.6 + 10\log_{10}300 = -228.6+24.8 = -203.8\ \text{dBW/Hz}.$$

*Energy per bit:*

$$E_b = P - 10\log_{10}R_b = -125 - 60.0 = -185.0\ \text{dBJ}.$$

*Ratio:*

$$\frac{E_b}{N_0} = -185.0-(-203.8) = 18.8\ \text{dB} = 75.9\ \text{(ratio)}.$$

*BER:*

$$P_b = Q\!\left(\sqrt{2\times 75.9}\right) = Q(12.3) \approx 4\times10^{-35}.$$

Astronomically small. *Margin:* $10^{-6}$ needs $Q(x)=10^{-6}$, i.e. $x = 4.75$, so $2E_b/N_0 = 22.6$, $E_b/N_0 = 11.3 = 10.5$ dB. Margin:

$$18.8 - 10.5 = 8.3\ \text{dB}.$$

*What that margin is for.* Rain fade at Ku band can take 6 dB or more; antenna mispointing, aging, and atmospheric loss take the rest. The link is designed with margin not because the nominal BER is inadequate but because the nominal conditions are optimistic — and the waterfall means a 9 dB fade takes you from $10^{-35}$ to about $10^{-4}$, a catastrophe in one step.

**Example 2 (why non-coherent FSK wins on a fading channel).** Compare coherent BPSK and non-coherent BFSK on a channel whose phase drifts unpredictably by up to $\pm40°$ over a symbol.

*Nominal (static phase):* BPSK needs 9.6 dB for $10^{-5}$; non-coherent BFSK needs 13.4 dB. BPSK is 3.8 dB better.

*With phase error $\phi$.* Coherent BPSK's correlator output is scaled by $\cos\phi$, so the effective distance shrinks and the error probability becomes

$$P_b = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\cos\phi\right).$$

At $\phi = 40°$, $\cos\phi = 0.766$, and the effective $E_b/N_0$ falls by

$$-20\log_{10}(0.766) = 2.3\ \text{dB}.$$

At $\phi=60°$ it is 6.0 dB; at $\phi\to90°$ the link fails completely. And phase errors are not merely a fixed loss — they fluctuate, so the *average* BER is dominated by the worst excursions, which is worse still than plugging in the mean.

Non-coherent BFSK is untouched: it compares the energy in two filters, and energy does not care about phase.

*The conclusion.* On a stable channel BPSK's 3.8 dB advantage is real and worth taking. On a channel where phase cannot be tracked — fast fading, ionospheric scatter, a cheap transmitter with a drifting oscillator, a receiver that must acquire in microseconds — the coherent scheme's advantage evaporates or inverts. **This is why FSK dominated early mobile and HF radio, and why DPSK (0.8 dB penalty, no carrier recovery) is the usual compromise when the phase drifts slowly enough to be reused from one symbol to the next.**

## Watch out

- **You might think OOK is worse than BPSK because it is amplitude modulation.** The reason is purely geometric: OOK's two points are $\{0,\sqrt{2E_b}\}$, an *uncentred* constellation. Translating it to $\{\pm\sqrt{E_b/2}\cdot\sqrt2\}$ preserves the distance and halves the energy — and that translated version *is* BPSK. The 3 dB is the cost of not centring.
- **You might think coherent and non-coherent detection differ by a fixed number of decibels.** They differ by about 0.8 dB *at $10^{-5}$*, but the curves have different shapes ($Q$-function versus exponential), so the gap grows as the target error rate falls. Always compare at your actual operating point.
- **You might think a "small" phase error is harmless.** Its cost is $20\log_{10}(\cos\phi)$ dB, which is gentle at $10°$ (0.13 dB) and brutal at $60°$ (6 dB). Carrier recovery loops are specified in degrees of rms phase error for exactly this reason.
- **You might quote BER when you mean symbol error rate.** For binary schemes they are equal. From [3.4](03-04-qpsk-and-m-psk.md) onward they are not, and confusing them is worth a factor of $\log_2M$.
- **You might think $E_b$ is the energy of the transmitted pulse.** For OOK it is the *average* over both symbols — the "on" pulse has $2E_b$ and the "off" pulse has none. Comparing schemes at equal peak power rather than equal average power gives different answers, and you must say which you mean.

## One-liner

> Two points in signal space, one $Q$-function: BPSK's antipodal pair is optimal at 9.6 dB for $10^{-5}$, and FSK and OOK each hand back 3 dB — one for being perpendicular, one for being off-centre.

## Problems

**P1 (🟢)** A BPSK link operates at $E_b/N_0 = 8$ dB. (a) Find the BER. (b) How much more $E_b/N_0$ is needed to reach $10^{-6}$? (c) If the same received power instead carried coherent BFSK at the same bit rate, what would the BER be? (d) State the general relationship between the two curves in one sentence.

**P2 (🟡)** A 2400 bps link over an HF channel uses non-coherent BFSK. The received power is $-118$ dBm and the noise density is $-170$ dBm/Hz. (a) Find $E_b/N_0$ in dB. (b) Find the BER. (c) The engineer proposes switching to coherent BPSK. What BER would that give, and what is the practical objection on an HF channel? (d) Estimate the required carrier-phase accuracy for BPSK to keep its loss under 0.5 dB.

**P3 (🔴)** A designer must send 1 Mbps at $10^{-6}$ BER over a channel that delivers $-110$ dBm with $N_0 = -174$ dBm/Hz, and has 3 MHz of bandwidth available. (a) Compute the available $E_b/N_0$. (b) Determine whether BPSK meets the specification, with what margin. (c) The channel's phase reference is only good to $25°$ rms. Recompute the margin. (d) Would DPSK be a better choice here? Justify quantitatively.

<details>
<summary>Solutions</summary>

**P1** (a) $8\ \text{dB} = 6.31$. $\sqrt{2(6.31)} = \sqrt{12.62} = 3.55$:

$$P_b = Q(3.55) \approx 1.9\times10^{-4}.$$

(b) $Q(x) = 10^{-6}$ at $x = 4.75$, so $2E_b/N_0 = 22.6$, $E_b/N_0 = 11.3 = 10.5$ dB. Additional required:

$$10.5 - 8 = 2.5\ \text{dB}.$$

(Note the leverage: 2.5 dB buys a factor of 190 in error rate.)

(c) Coherent BFSK: $P_b = Q(\sqrt{E_b/N_0}) = Q(\sqrt{6.31}) = Q(2.51) \approx 6.0\times10^{-3}$ — over 30 times worse.

(d) The BFSK curve is the BPSK curve **shifted right by exactly 3 dB**, at every error rate, because $Q(\sqrt{E_b/N_0}) = Q(\sqrt{2E_b'/N_0})$ with $E_b' = E_b/2$.

**P2** (a) $$E_b = P - 10\log_{10}R_b = -118 - 10\log_{10}2400 = -118-33.8 = -151.8\ \text{dBm-s}.$$

$$\frac{E_b}{N_0} = -151.8-(-170) = 18.2\ \text{dB} = 66.1 .$$

(b) Non-coherent BFSK: $P_b = \tfrac12e^{-E_b/2N_0} = \tfrac12 e^{-33.05} = \tfrac12(4.4\times10^{-15}) = 2.2\times10^{-15}$.

(c) BPSK: $P_b = Q(\sqrt{2\times66.1}) = Q(11.5)\approx 6\times10^{-31}$ — vastly better on paper.

The practical objection: an HF sky-wave channel is **fading and dispersive**. The ionosphere moves, so the received phase rotates continuously and unpredictably; multipath from multiple hops adds delayed copies that rotate independently. Maintaining a coherent phase reference under those conditions is difficult and sometimes impossible, and a coherent receiver that loses lock does not degrade gracefully — it inverts the data (a $180°$ slip) or loses it entirely. Non-coherent FSK sidesteps all of this by comparing energies, which are phase-blind. The 3.8 dB it gives up is trivially cheaper than the outages a coherent receiver would suffer, and there is 18 dB of $E_b/N_0$ available anyway.

(d) The loss is $-20\log_{10}(\cos\phi) \le 0.5$ dB:

$$\cos\phi \ge 10^{-0.025} = 0.9441 \;\Longrightarrow\; \phi \le 19.3° .$$

So better than about $19°$ rms — demanding on a channel whose phase can slew that much within a single symbol.

**P3** (a) $$E_b = -110 - 10\log_{10}(10^6) = -110-60 = -170\ \text{dBm-s}, \qquad \frac{E_b}{N_0} = -170+174 = 4.0\ \text{dB}.$$

(b) BPSK at $10^{-6}$ requires 10.5 dB (from P1b). Available: 4.0 dB.

$$\text{Margin} = 4.0 - 10.5 = -6.5\ \text{dB}.$$

**Negative — the specification is not met, and not marginally.** At 4.0 dB ($=2.51$), $P_b = Q(\sqrt{5.02}) = Q(2.24) = 1.25\times10^{-2}$: about one bit in 80, four orders of magnitude short.

*Check the bandwidth is not the constraint:* BPSK at 1 Mbps needs $R_b(1+\alpha) \approx 1.3$ MHz, comfortably inside 3 MHz. So the link is **power-limited, not bandwidth-limited** — a diagnosis that immediately tells you what to do.

(c) At $\phi = 25°$, $\cos25° = 0.906$, costing $-20\log_{10}(0.906) = 0.86$ dB. New margin: $-6.5-0.9 = -7.4$ dB. (A rounding error compared with the 6.5 dB already missing.)

(d) DPSK is *worse*, not better: at $10^{-6}$ it needs about 11.2 dB versus BPSK's 10.5 dB, so it deepens the deficit by 0.7 dB. What DPSK saves is carrier recovery, and the 0.86 dB phase-error penalty from (c) is roughly what it would recover — so the two are close to a wash on this link, and neither addresses the actual problem.

*What actually solves it.* The link is 6.5 dB short of a 1 Mbps target while sitting on 3 MHz of unused bandwidth. That is precisely the situation error-correcting coding is designed for: spend bandwidth to buy power efficiency. A rate-1/2 convolutional code with Viterbi decoding ([4.4](04-04-convolutional-codes-viterbi.md)) delivers roughly 5 dB of coding gain and doubles the transmitted symbol rate to 2 Msymbols/s — needing about 2.6 MHz, which fits. That closes most of the gap; a concatenated or modern LDPC code would close all of it and more, since Shannon's limit for this bandwidth and power is far below what any of these schemes reach.

**The diagnostic habit worth taking from this problem:** compute both the power margin and the bandwidth margin. If power is short and bandwidth is spare, code. If bandwidth is short and power is spare, go $M$-ary ([3.4](03-04-qpsk-and-m-psk.md)). If both are short, you need a better antenna. [3.6](03-06-power-vs-bandwidth-efficiency.md) turns this into a single picture.

</details>

## Flashback

**From Lesson 3.1 (Signal space and the matched filter):** A matched filter receives a pulse of energy $E$ in AWGN of two-sided PSD $N_0/2$. (a) State the maximum output SNR. (b) For binary antipodal signalling, relate that SNR to the argument of the $Q$-function in the BER formula. (c) Explain in one sentence why a longer, lower-amplitude pulse of the same energy gives the same BER.

<details>
<summary>Solution</summary>

(a) $\mathrm{SNR}_{\max} = 2E/N_0$.

(b) For antipodal signalling with $E=E_b$, the BER is $Q(\sqrt{2E_b/N_0}) = Q(\sqrt{\mathrm{SNR}_{\max}})$. So the $Q$-function's argument is precisely the square root of the matched filter's output SNR — a tidy way to remember the formula: **BER is $Q$ of the root of the matched-filter SNR**.

(c) Because the matched-filter bound depends only on energy, not on shape or duration: the filter accumulates all the signal coherently while the noise accumulates only as a square root, so any pulse of energy $E$ delivers the same $2E/N_0$ and hence the same distance in signal space.

</details>

## Connections

- **Backward:** every formula here is [3.2](03-02-optimal-detection-awgn.md)'s $Q(d/\sqrt{2N_0})$ with the distance read off a two-point constellation; the OOK penalty is the uncentred-constellation cost noted in [2.3](02-03-line-codes-baseband-pulses.md).
- **Forward:** [3.4](03-04-qpsk-and-m-psk.md) puts more points on the circle to raise spectral efficiency; [4.2](04-02-channel-capacity-shannon-limit.md) shows how far below 9.6 dB it is theoretically possible to operate, and [4.3](04-03-block-codes.md)–[4.4](04-04-convolutional-codes-viterbi.md) close the gap.
- **Sideways:** the waterfall shape — a control parameter crossing a threshold and behaviour changing by orders of magnitude — is the same phenomenology as the FM threshold effect in [1.6](01-06-angle-modulation-fm-pm.md) and as activation-energy barriers in chemical kinetics. In all three the underlying cause is an exponential tail.
