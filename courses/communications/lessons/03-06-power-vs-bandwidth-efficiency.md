# Communication Systems · Lesson 3.6: Power vs bandwidth efficiency

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [3.5 QAM and the union bound](03-05-qam-and-union-bound.md), [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md) · Unlocks: [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md), [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

Module 3 has produced a shelf of modulation schemes and a required $E_b/N_0$ for each. This lesson puts them all on one picture, and that picture is the map an engineer actually navigates by.

Every link has two budgets: **watts** and **hertz**. Every scheme trades one against the other. Once you can locate your link on the bandwidth-efficiency plane — how many bits per second per hertz you need, and how much $E_b/N_0$ you have — the choice of modulation is essentially read off the chart rather than argued about. And when you draw Shannon's bound on the same axes, you see immediately how much room is left, which is the entire motivation for Module 4.

## The idea

Plot [spectral efficiency](../reference.md#spectral-efficiency) $\eta = R_b/B$ vertically against required $E_b/N_0$ horizontally. Every modulation scheme is one point.

The schemes split into two families that move in opposite directions.

**Bandwidth-efficient / power-hungry** — the $M$-ary amplitude and phase schemes. Go from QPSK to 16-QAM to 64-QAM and you climb the vertical axis: more bits per hertz. You also march right: more $E_b/N_0$ required. These live in the **upper right**, and they are what you use when spectrum is expensive and power is cheap — cable, fibre, DSL, terrestrial microwave, the downlink of a cell tower.

**Power-efficient / bandwidth-hungry** — $M$-ary orthogonal schemes like $M$-FSK, and any low-rate error-correcting code. Increasing $M$ here *lowers* the required $E_b/N_0$ while *lowering* spectral efficiency: you spend bandwidth to save power. These live in the **lower left**, and they are what you use when power is precious and spectrum is free — deep space, a beacon, a battery sensor, spread-spectrum systems.

Binary schemes sit in the middle at about 1 bit/s/Hz, and QPSK sits at 2 — the pivot of the whole picture.

Then draw the Shannon bound. It is a curve running up and to the right, and **no scheme can be above and to the left of it**. Every uncoded modulation sits several decibels to its right, and the horizontal distance is exactly what coding recovers. Seeing 16-QAM sitting 8 dB from the bound is a more persuasive argument for error-correcting codes than any amount of prose.

## The formal version

**Spectral (bandwidth) efficiency.**

$$\eta = \frac{R_b}{B_T}\ \text{bits/s/Hz}.$$

With raised-cosine pulses of roll-off $\alpha$ on a bandpass channel,

$$\eta = \frac{\log_2M}{1+\alpha} \quad\text{(linear modulation: PSK, QAM)}.$$

The $(1+\alpha)$ is an implementation tax; theoretical comparisons use $\alpha=0$, giving $\eta = \log_2M$.

**Power efficiency.** The required $E_b/N_0$ for a target BER — conventionally $10^{-5}$.

**The two families, tabulated** (at $P_b = 10^{-5}$, $\alpha=0$):

| Scheme | $\eta$ (bits/s/Hz) | Required $E_b/N_0$ |
|---|---|---|
| 256-QAM | 8 | 22.5 dB |
| 64-QAM | 6 | 17.8 dB |
| 16-QAM | 4 | 13.4 dB |
| 8-PSK | 3 | 13.0 dB |
| **QPSK / 4-QAM** | **2** | **9.6 dB** |
| BPSK | 1 | 9.6 dB |
| Coherent BFSK | 0.5 | 12.6 dB |
| 4-FSK | 0.4 | 11.4 dB |
| 16-FSK | 0.25 | 9.0 dB |
| 64-FSK | 0.125 | 7.5 dB |

*In words: QAM and PSK climb the efficiency axis at 3–6 dB per bit; $M$-FSK descends it while slowly saving power.*

**$M$-ary orthogonal signalling.** $M$ mutually orthogonal waveforms (e.g. $M$ frequencies) need $M$ dimensions, so the bandwidth is $B \approx M/(2T_s)$ while the rate is $\log_2M/T_s$:

$$\eta_{\rm FSK} = \frac{2\log_2M}{M},$$

which falls fast. The symbol error probability is bounded by

$$P_s \le (M-1)\,Q\!\left(\sqrt{\frac{E_s}{N_0}}\right) = (M-1)\,Q\!\left(\sqrt{\frac{E_b\log_2M}{N_0}}\right),$$

and the required $E_b/N_0$ decreases toward a limit as $M\to\infty$. That limit is exactly the Shannon bound, $-1.6$ dB — orthogonal signalling is *asymptotically optimal in power*, at the cost of infinite bandwidth. It is the theoretical mirror image of infinitely dense QAM, which is asymptotically optimal in bandwidth at the cost of infinite power.

**The Shannon bound on these axes.** Anticipating [4.2](04-02-channel-capacity-shannon-limit.md): capacity is $C = B\log_2(1+\mathrm{SNR})$, and with $\mathrm{SNR} = \frac{E_b}{N_0}\cdot\frac{R_b}{B}$, error-free operation at $R_b\le C$ requires

$$\boxed{\;\frac{E_b}{N_0} \ge \frac{2^{\eta}-1}{\eta}.\;}$$

*In words: for every spectral efficiency there is a minimum $E_b/N_0$ below which no scheme, however clever, can work.* Values:

| $\eta$ | Minimum $E_b/N_0$ |
|---|---|
| $\to0$ | $\ln 2 = -1.59$ dB |
| 0.5 | $-0.82$ dB |
| 1 | 0 dB |
| 2 | 1.76 dB |
| 4 | 5.74 dB |
| 6 | 10.2 dB |
| 8 | 15.0 dB |

The curve divides the plane. Below and right of it is achievable; above and left is impossible. **As $\eta\to0$ the bound flattens at $-1.6$ dB** — you cannot buy unlimited power efficiency even with unlimited bandwidth, which is the single most important number in the subject.

**The gap, quantified.** Distance from an uncoded scheme to the bound at the same $\eta$:

| Scheme | $\eta$ | Uncoded | Shannon | **Gap** |
|---|---|---|---|---|
| BPSK | 1 | 9.6 dB | 0 dB | **9.6 dB** |
| QPSK | 2 | 9.6 dB | 1.8 dB | **7.8 dB** |
| 16-QAM | 4 | 13.4 dB | 5.7 dB | **7.7 dB** |
| 64-QAM | 6 | 17.8 dB | 10.2 dB | **7.6 dB** |
| 256-QAM | 8 | 22.5 dB | 15.0 dB | **7.5 dB** |

Strikingly constant at about 7.5–8 dB across the whole QAM family. That constancy is not a coincidence: at high SNR, uncoded QAM's shortfall is dominated by the difference between a square lattice's packing and the theoretical optimum, plus the error-rate target — and neither depends much on $M$. **Nearly 8 dB is on the table at every operating point, and modern codes (turbo, LDPC) recover 7 of it.** That is why a 1990s modem and a 2020s modem differ by an order of magnitude in throughput at the same power.

**Choosing, mechanically.**

1. Compute the required $\eta = R_b/B$ from the specification.
2. Compute the available $E_b/N_0 = P/(N_0R_b)$ from the link budget.
3. Plot the point. If it is left of the Shannon curve, the specification is impossible — get more power or more bandwidth.
4. If it is right of the curve, choose the least demanding scheme at or above the required $\eta$, and spend the remaining margin on coding.

## Picture

![The bandwidth-efficiency plane. Vertical axis: spectral efficiency in bits per second per hertz on a log scale from 0.1 to 10. Horizontal axis: required Eb/N0 from minus 2 to 25 dB. The Shannon bound is drawn as a curve rising from a vertical asymptote at minus 1.6 dB. Points mark BPSK, QPSK, 8-PSK, 16-QAM, 64-QAM and 256-QAM climbing up and right, and 4-FSK, 16-FSK, 64-FSK descending down and left. The region left of the Shannon curve is shaded and labelled impossible, and horizontal arrows mark the roughly 8 dB gap from each QAM point to the bound.](assets/03-06-fig1.svg)

The most important feature is the **vertical asymptote at $-1.6$ dB**: no matter how much bandwidth you spend, you cannot operate below it. The second is the shape of the two families — QAM climbing up-and-right, FSK descending down-and-left, meeting near QPSK. The third is the set of horizontal arrows: every uncoded scheme sits about 8 dB right of the bound, and that gap is the same gap at every efficiency. Module 4 is about closing it.

## Worked examples

**Example 1 (choosing a scheme, mechanically).** A microwave link must carry 40 Mbps in a licensed 10 MHz channel. The receiver sees $E_b/N_0 = 20$ dB. What modulation?

*Step 1 — required efficiency:*

$$\eta = \frac{40\times10^6}{10\times10^6} = 4\ \text{bits/s/Hz}.$$

With a realistic $\alpha = 0.2$ this demands $\log_2M = \eta(1+\alpha) = 4.8$, so $M\ge 32$ — but 32 is a cross constellation; take $M=64$ (6 bits/symbol) and check: $R_s = 40/6 = 6.67$ Msymbols/s, $B = 6.67(1.2) = 8$ MHz ✓ fits. Or use 32-QAM at $R_s=8$ Msym/s, $B = 9.6$ MHz — also fits, tighter.

*Step 2 — is the power sufficient?* 64-QAM needs 17.8 dB for $10^{-5}$. Available: 20 dB.

$$\text{Margin} = 20 - 17.8 = 2.2\ \text{dB}.$$

*Step 3 — is it possible at all?* Shannon at $\eta=4$ requires 5.74 dB. We have 20 dB — a gap of 14.3 dB, so the specification is comfortably feasible in principle.

*Step 4 — the sensible design.* 2.2 dB of margin is thin for a microwave link that must survive rain fade and multipath. Two better options:

- **Use 16-QAM with a rate-3/4 code.** Information rate $4\times0.75 = 3$ bits/symbol, needing $R_s = 13.3$ Msym/s — 16 MHz. Doesn't fit.
- **Use 64-QAM with a rate-5/6 code.** Information rate $6\times5/6 = 5$ bits/symbol, $R_s = 8$ Msym/s, $B = 9.6$ MHz ✓. The code costs 20% more raw symbols but delivers 4–6 dB of coding gain, converting 2.2 dB of margin into 6–8 dB.

**The habit worth internalizing:** never spend surplus $E_b/N_0$ as bare margin if there is bandwidth to convert it into coding gain. Margin protects against fades; coding gain buys *both* margin and reliability.

**Example 2 (deep space — the other corner of the plane).** A probe at Jupiter has 20 W of transmit power and effectively unlimited bandwidth. The link delivers $E_b/N_0 = 2$ dB at 100 kbps. Which family?

*Diagnosis:* 2 dB is below what any uncoded scheme needs — BPSK wants 9.6 dB. The link is **7.6 dB short**, and there is no bandwidth constraint. This is the lower-left corner of the plane.

*Option A — $M$-ary FSK.* From the table, 64-FSK needs about 7.5 dB. Still 5.5 dB short, and it costs $\eta = 0.125$, i.e. 800 kHz for 100 kbps. Pushing to $M=1024$ would get closer to the $-1.6$ dB limit but needs $\eta = 2(10)/1024 = 0.0195$, i.e. 5.1 MHz, and $1024$ matched filters at the receiver. Orthogonal signalling approaches the limit only logarithmically while its bandwidth and complexity grow linearly in $M$ — which is why it is a theoretical benchmark rather than a design.

*Option B — coding.* Shannon at $\eta = 0.5$ permits $-0.82$ dB. At 2 dB we have 2.8 dB of headroom above the bound, so a *good enough* code makes this link work with plain BPSK. Historically:

| Mission era | Code | Gain over uncoded BPSK |
|---|---|---|
| Mariner (1969) | Reed–Muller (32,6) | ~3 dB |
| Voyager (1977) | Convolutional (7,1/2) + Viterbi | ~5 dB |
| Voyager at Uranus (1986) | Concatenated with Reed–Solomon | ~7 dB |
| Cassini / modern | Turbo, rate 1/6 | ~9 dB, within 1 dB of the bound |

*The conclusion.* In the power-limited corner, coding is not an optimization — it is the entire design. Every decibel of coding gain is a decibel you do not have to find in transmitter power or antenna area, and on a deep-space link those cost hundreds of millions of dollars per decibel. The Voyager 2 Uranus encounter returned images at all because the mission upgraded its coding after launch; the spacecraft's transmitter was unchanged.

## Watch out

- **You might think higher spectral efficiency is always the goal.** It is the goal only when bandwidth is the binding constraint. In the power-limited regime the correct move is the opposite — *lower* $\eta$, spending bandwidth to save watts.
- **You might think the Shannon bound is $-1.6$ dB for every scheme.** $-1.6$ dB is the limit only as $\eta\to0$ (infinite bandwidth). At $\eta = 4$ the bound is 5.7 dB; at $\eta=8$, 15.0 dB. Always evaluate the bound at *your* spectral efficiency.
- **You might compare schemes at equal SNR.** SNR depends on the bandwidth you happened to measure it in, so it flatters high-$\eta$ schemes. Comparisons must be at equal $E_b/N_0$ — the whole reason that quantity exists ([1.3](01-03-noise-snr-filtering.md)).
- **You might read the plane as if coding moves you left only.** A rate-$r$ code moves you **left** (coding gain) *and* **down** ($\eta$ falls by the factor $r$, since you send more symbols for the same information). The net movement is diagonal, and whether it helps depends on which constraint binds.
- **You might forget the $(1+\alpha)$ tax.** Theoretical points assume $\alpha=0$; a real system at $\alpha=0.25$ loses 20% of its spectral efficiency. Compare theory with theory and practice with practice.

## One-liner

> One plane, two axes, two families: QAM climbs up-and-right, FSK descends down-and-left, Shannon's curve walls off the upper left — and every uncoded scheme sits about 8 dB to its right, waiting for a code.

## Problems

**P1 (🟢)** A system must deliver 2 Mbps in 500 kHz. (a) Find the required spectral efficiency. (b) With $\alpha=0.25$, what is the smallest square QAM constellation that fits? (c) What $E_b/N_0$ does it need for $10^{-5}$? (d) What does Shannon require at that $\eta$, and what is the gap?

**P2 (🟡)** A link has $E_b/N_0 = 7$ dB available and needs a BER of $10^{-5}$ at 1 Mbps. (a) Show that no uncoded scheme from the table works. (b) Find the minimum bandwidth Shannon permits. (c) If 4 MHz is available, what $\eta$ does that give, and how much headroom above the Shannon bound do you have? (d) Suggest a concrete scheme and estimate whether it closes the gap.

**P3 (🔴)** Derive the Shannon bound in the form $E_b/N_0 \ge (2^\eta-1)/\eta$. (a) Start from $C = B\log_2(1+S/N)$ and the definition of $E_b$. (b) Take the limit $\eta\to0$ and show it gives $\ln 2$. (c) Show that for large $\eta$ the required $E_b/N_0$ grows by about 3 dB per additional bit/s/Hz, and compare to QAM's observed cost per bit. (d) Explain what that comparison says about how much coding can ever help at high spectral efficiency.

<details>
<summary>Solutions</summary>

**P1** (a) $\eta = 2\times10^6/(500\times10^3) = 4$ bits/s/Hz.

(b) $\eta = \log_2M/(1+\alpha)$, so $\log_2M = 4(1.25) = 5$, i.e. $M = 32$. That is not square; the next square constellation is $M=64$ ($\log_2M = 6$), which gives $\eta = 6/1.25 = 4.8 \ge 4$ ✓. So **64-QAM** (or a 32-cross constellation, if available).

(c) 64-QAM needs **17.8 dB** for $10^{-5}$.

(d) Shannon at $\eta = 4$:

$$\frac{E_b}{N_0} \ge \frac{2^4-1}{4} = \frac{15}{4} = 3.75 = 5.74\ \text{dB}.$$

$$\text{Gap} = 17.8 - 5.7 = 12.1\ \text{dB}.$$

(Larger than the ~7.6 dB in the table because we are using $M=64$ to deliver only $\eta=4$ — the excess constellation size is itself wasteful. Evaluating 64-QAM at its own $\eta=6$ gives the 7.6 dB figure. The lesson: comparing to the bound must be done at the efficiency you actually achieve.)

**P2** (a) At $E_b/N_0 = 7$ dB the table's cheapest entries need: BPSK/QPSK 9.6 dB, coherent BFSK 12.6, 16-FSK 9.0, 64-FSK 7.5. Even 64-FSK — costing $\eta = 0.125$ and 64 matched filters — needs 7.5 dB. **Nothing in the table works at 7 dB.**

(b) Shannon: $\dfrac{E_b}{N_0} = 10^{0.7} = 5.01 \ge \dfrac{2^\eta-1}{\eta}$. Solve $\frac{2^\eta-1}{\eta} = 5.01$:

- $\eta = 2$: $3/2 = 1.5$ ✓ (permitted)
- $\eta = 3$: $7/3 = 2.33$ ✓
- $\eta = 4$: $15/4 = 3.75$ ✓
- $\eta = 4.5$: $(22.63-1)/4.5 = 4.81$ ✓
- $\eta = 4.6$: $(24.25-1)/4.6 = 5.05$ ✗ (just over)

So $\eta_{\max} \approx 4.55$ bits/s/Hz, and

$$B_{\min} = \frac{10^6}{4.55} = 220\ \text{kHz}.$$

(c) With 4 MHz: $\eta = 10^6/(4\times10^6) = 0.25$ bits/s/Hz. Shannon at $\eta=0.25$:

$$\frac{E_b}{N_0} \ge \frac{2^{0.25}-1}{0.25} = \frac{0.1892}{0.25} = 0.757 = -1.21\ \text{dB}.$$

$$\text{Headroom} = 7 - (-1.2) = 8.2\ \text{dB}.$$

Plenty — the link is theoretically very comfortable; the problem is entirely that uncoded schemes are inefficient.

(d) **BPSK with a rate-1/4 turbo or LDPC code.** Coded symbol rate $= 4$ Msymbols/s, needing about 4 MHz with tight pulse shaping ✓, giving $\eta = 0.25$ ✓. A good rate-1/4 modern code operates within about 1 dB of the bound at this efficiency, so it needs roughly $-0.2$ dB and we have 7 dB — an enormous margin.

Even a modest classical choice works: BPSK with a rate-1/2 convolutional code (constraint length 7, Viterbi) delivers about 5 dB of coding gain, needing $9.6-5 = 4.6$ dB against 7 dB available ✓, at $\eta = 0.5$ (2 MHz). **The gap in (a) was not a physical shortage — it was the 8 dB that uncoded modulation leaves on the table.**

**P3** (a) Shannon–Hartley: $C = B\log_2\!\left(1+\dfrac{S}{N}\right)$ with $N = N_0B$. Error-free operation needs $R_b \le C$. Write $S = E_bR_b$:

$$\frac{S}{N} = \frac{E_bR_b}{N_0B} = \frac{E_b}{N_0}\eta, \qquad \eta = \frac{R_b}{B}.$$

At the boundary $R_b = C$, dividing by $B$:

$$\eta = \log_2\!\left(1+\frac{E_b}{N_0}\eta\right) \;\Longrightarrow\; 2^\eta = 1+\frac{E_b}{N_0}\eta \;\Longrightarrow\; \boxed{\frac{E_b}{N_0} = \frac{2^\eta-1}{\eta}}$$

and any operating point must have $E_b/N_0$ at least this. ∎

(b) As $\eta\to0$, expand $2^\eta = e^{\eta\ln2} = 1+\eta\ln2+\frac{(\eta\ln2)^2}{2}+\cdots$:

$$\frac{2^\eta-1}{\eta} = \frac{\eta\ln2+\frac{\eta^2\ln^22}{2}+\cdots}{\eta} = \ln2 + \frac{\eta\ln^22}{2}+\cdots \;\longrightarrow\; \ln 2 = 0.693 .$$

$$10\log_{10}(0.693) = -1.59\ \text{dB}. \ \blacksquare$$

(c) For large $\eta$, $2^\eta \gg 1$ so $\dfrac{E_b}{N_0}\approx\dfrac{2^\eta}{\eta}$. Going from $\eta$ to $\eta+1$:

$$\frac{(E_b/N_0)_{\eta+1}}{(E_b/N_0)_{\eta}} = \frac{2^{\eta+1}/(\eta+1)}{2^\eta/\eta} = 2\cdot\frac{\eta}{\eta+1} \;\longrightarrow\; 2 \ \text{ as } \eta\to\infty.$$

So the bound rises by $10\log_{10}2 = 3.0$ dB per extra bit/s/Hz. (At $\eta = 6\to7$ it is $2(6/7) = 1.71 = 2.3$ dB; the asymptote is approached from below.)

*Comparison with QAM.* From [3.5](03-05-qam-and-union-bound.md), QAM's required $E_b/N_0$ goes 9.6 → 13.4 → 17.8 → 22.5 dB for $\eta = 2,4,6,8$ — that is $3.8, 4.4, 4.7$ dB per *two* bits, i.e. about **2.2 dB per bit**. The bound over the same range goes $1.8\to5.7\to10.2\to15.0$, i.e. $3.9, 4.5, 4.8$ dB per two bits — about **2.3 dB per bit**.

They rise at essentially the same rate.

(d) That parallelism is the answer: since uncoded QAM and the Shannon bound climb at the same slope, **the gap between them is roughly constant** (the ~7.6 dB observed in the table), and coding's job is to close a fixed offset rather than a growing one. Two consequences.

*The good news:* a code that is good at $\eta=2$ is roughly as valuable at $\eta=8$. There is no regime where coding stops paying, which is why LDPC codes appear in both deep-space links ($\eta<1$) and cable modems ($\eta>10$).

*The limit:* coding can recover at most that ~8 dB, and modern codes already take about 7 of it. **There is under 1 dB left in the modulation-and-coding layer.** Further gains must come from somewhere else entirely — more bandwidth, more antennas (MIMO, which multiplies capacity by adding spatial dimensions), or better spatial reuse. That is precisely where wireless research went after turbo codes arrived in 1993, and it explains why cellular generations since then have been about antennas and cell density rather than about modulation.

</details>

## Flashback

**From Lesson 3.5 (QAM and the union bound):** A 256-QAM system operates at $E_b/N_0 = 25$ dB with $\alpha = 0.2$. (a) Find its spectral efficiency. (b) Find $P_b$. (c) Find the Shannon-required $E_b/N_0$ at that spectral efficiency, and the gap.

<details>
<summary>Solution</summary>

(a) $\eta = \log_2 256/(1+\alpha) = 8/1.2 = 6.67$ bits/s/Hz.

(b) $E_b/N_0 = 25$ dB $= 316.2$:

$$x = \sqrt{\frac{3(8)}{255}\times316.2} = \sqrt{0.09412\times316.2} = \sqrt{29.76} = 5.46 .$$

$$P_b \approx \frac{4}{8}\left(1-\frac{1}{16}\right)Q(5.46) = 0.5(0.9375)(2.4\times10^{-8}) = 1.1\times10^{-8}.$$

(c) At $\eta = 6.67$:

$$\frac{E_b}{N_0}\bigg|_{\min} = \frac{2^{6.67}-1}{6.67} = \frac{101.8-1}{6.67} = 15.1 = 11.8\ \text{dB}.$$

$$\text{Gap} = 25 - 11.8 = 13.2\ \text{dB}.$$

Larger than the table's 7.5 dB because we are running at 25 dB rather than the 22.5 dB that 256-QAM needs for $10^{-5}$, *and* because the $\alpha=0.2$ tax lowers the achieved $\eta$ from 8 to 6.67 while the power cost stays put. Both effects widen the measured gap, and both are real — which is a useful reminder that the tidy 7.6 dB in the table is a best case computed at $\alpha=0$ and exactly $10^{-5}$.

</details>

## Connections

- **Backward:** every point on the plane is a required-$E_b/N_0$ computed in [3.3](03-03-binary-modulation-ber.md)–[3.5](03-05-qam-and-union-bound.md) paired with a bandwidth from [2.4](02-04-isi-nyquist-criterion.md).
- **Forward:** [4.2](04-02-channel-capacity-shannon-limit.md) derives the bound drawn here properly; [4.3](04-03-block-codes.md) and [4.4](04-04-convolutional-codes-viterbi.md) are the machinery that moves a point left toward it.
- **Sideways:** the shape of this plane — a hard frontier with everything achievable strictly inside it — is the same structure as a production-possibility frontier in [`micro-refresher`](../../micro-refresher/syllabus.md), and the design question ("which constraint binds?") is the same shadow-price reasoning. Shannon's curve is a budget line whose slope tells you the exchange rate between watts and hertz.
