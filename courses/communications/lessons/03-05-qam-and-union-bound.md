# Communication Systems · Lesson 3.5: QAM and the union bound

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [3.4 Going M-ary: QPSK and M-PSK](03-04-qpsk-and-m-psk.md), [3.2 Optimal detection in AWGN](03-02-optimal-detection-awgn.md) · Unlocks: [3.6 Power vs bandwidth efficiency](03-06-power-vs-bandwidth-efficiency.md), [4.2 Channel capacity and the Shannon limit](04-02-channel-capacity-shannon-limit.md)

## Why this matters

[3.4](03-04-qpsk-and-m-psk.md) left PSK in trouble: past QPSK, cramming more points onto a circle costs about 6 dB per extra bit. But a circle is a strange thing to insist on. The constraint is *average energy*, not constant amplitude — so why not use the interior of the plane too?

That single change of mind gives **quadrature amplitude modulation**, and it is what actually carries your data. Every cable modem, every Wi-Fi link, every DSL line, every digital TV broadcast, every 4G and 5G downlink uses QAM, typically from 16 up to 1024 or 4096 points. This lesson derives its error rate, and along the way introduces the **union bound** — the one tool that makes error analysis of arbitrary constellations tractable.

## The idea

Rectangular QAM is the simplest possible answer: put the points on a square grid. $M=16$ becomes a $4\times4$ lattice, $M=64$ an $8\times8$, and so on. And now something very convenient happens — the grid factors. **A square QAM constellation is two independent PAM constellations, one on the I axis and one on the Q axis.** Detect each axis separately, exactly as QPSK did, and every result about $M$-PAM transfers immediately.

Why it beats PSK: at fixed average energy, a square packs points further apart than a circle does. PSK spends its energy putting every point at the same (maximum) radius; QAM lets some points sit closer to the origin, which lowers the *average* energy and lets you spread everything out further for the same power budget. At $M=16$ this is worth about 4 dB; at $M=64$, nearly 10 dB. The gap grows because a circle's circumference grows as $\sqrt M$ while a square's area grows as $M$.

The second half of the lesson is a technique. For constellations more complicated than a square, exact error probabilities become nasty integrals over polygonal regions. The [union bound](../reference.md#union-bound) sidesteps all of that: the probability of *some* error is at most the sum of the probabilities of each individual pairwise error. It is loose in principle and startlingly tight in practice — because $Q$ falls so fast that only the nearest neighbours matter, everything else contributes nothing measurable. That leads to the working formula for any constellation: $P_s\approx N_{\min}Q(d_{\min}/\sqrt{2N_0})$, where $N_{\min}$ is the average number of nearest neighbours. Two numbers off a picture, and you have the error rate.

## The formal version

**Rectangular $M$-QAM.** With $M = 2^k$ and $k$ even, $M = L^2$ with $L = \sqrt M$ levels per axis. Signal points:

$$\mathbf{s}_{mn} = \big(a_m,\ b_n\big)\cdot\frac{d}{2}, \qquad a_m, b_n \in \{\pm1,\pm3,\dots,\pm(L-1)\},$$

where $d$ is the spacing between adjacent points. Transmitted as

$$s(t) = s_I\sqrt{\frac{2}{T_s}}\cos(2\pi f_ct) - s_Q\sqrt{\frac{2}{T_s}}\sin(2\pi f_ct).$$

**Average energy.** Using $\mathbb{E}[a^2] = \frac{L^2-1}{3}$ for levels $\pm1,\pm3,\dots$:

$$E_s = 2\cdot\left(\frac{d}{2}\right)^2\cdot\frac{L^2-1}{3} = \frac{d^2(M-1)}{6} \quad\Longrightarrow\quad d^2 = \frac{6E_s}{M-1} = \frac{6E_b\log_2M}{M-1}.$$

*In words: at fixed average energy, spacing shrinks like $1/\sqrt M$ — much gentler than PSK's $\sin(\pi/M)$.*

**Symbol error probability (exact for square QAM).** Each axis is an $L$-ary PAM with error probability $2\big(1-\tfrac1L\big)Q\big(\tfrac{d}{\sqrt{2N_0}}\big)$. A symbol is correct only if both axes are, so with $p_{\rm axis}$ that probability,

$$P_s = 1-(1-p_{\rm axis})^2 \approx 2p_{\rm axis} = 4\left(1-\frac{1}{\sqrt M}\right)Q\!\left(\sqrt{\frac{3E_s}{(M-1)N_0}}\right),$$

and with Gray coding,

$$\boxed{\;P_b \approx \frac{4}{\log_2M}\left(1-\frac{1}{\sqrt M}\right)Q\!\left(\sqrt{\frac{3\log_2M}{M-1}\cdot\frac{E_b}{N_0}}\right).\;}$$

**QAM versus PSK.** Required $E_b/N_0$ for $P_b = 10^{-5}$:

| $M$ | bits/symbol | $M$-PSK | $M$-QAM | QAM advantage |
|---|---|---|---|---|
| 4 | 2 | 9.6 dB | 9.6 dB | 0 dB (they are the same constellation) |
| 16 | 4 | 17.4 dB | 13.4 dB | **4.0 dB** |
| 64 | 6 | 27.5 dB | 17.8 dB | **9.7 dB** |
| 256 | 8 | 38.1 dB | 22.5 dB | **15.6 dB** |

*In words: past QPSK, QAM wins and the margin grows.* Note also that QAM's own cost per extra bit settles at about 3 dB per bit for large $M$ (from the $1/\sqrt M$ scaling of the distance, i.e. $6$ dB per doubling of $L$, which is two bits) — half of PSK's 6 dB. That difference is the entire reason QAM is universal.

**The union bound.** For any events $A_1,\dots,A_n$,

$$P\left(\bigcup_i A_i\right) \le \sum_i P(A_i).$$

Applied to detection: an error occurs if $\mathbf{r}$ is closer to *some* wrong signal, so

$$P(e\mid \mathbf{s}_m) \le \sum_{k\ne m}P(\mathbf{s}_m\to\mathbf{s}_k) = \sum_{k\ne m}Q\!\left(\frac{d_{mk}}{\sqrt{2N_0}}\right),$$

*In words: the chance of any error is at most the sum of the chances of each specific confusion.* It over-counts, because regions where two wrong signals are both closer get counted twice.

**The nearest-neighbour approximation.** $Q$ falls off like $e^{-x^2/2}$, so a term with distance $\sqrt2\,d_{\min}$ is smaller than the $d_{\min}$ term by a factor $\approx e^{-d_{\min}^2/(2N_0)}$ — utterly negligible at any useful SNR. Keeping only the closest neighbours:

$$\boxed{\;P_s \approx N_{\min}\,Q\!\left(\frac{d_{\min}}{\sqrt{2N_0}}\right),\;}$$

where $N_{\min}$ is the average number of signals at the minimum distance. *In words: count the nearest neighbours, measure the minimum distance, and you have the error rate.* This is the working tool for every constellation, and it is why constellation design is the two-parameter problem "maximize $d_{\min}$, minimize $N_{\min}$."

*Sanity check on 16-QAM.* Corner points (4 of them) have 2 nearest neighbours; edge points (8) have 3; interior points (4) have 4. Average:

$$N_{\min} = \frac{4(2)+8(3)+4(4)}{16} = \frac{8+24+16}{16} = 3 .$$

And indeed $4(1-1/\sqrt{16}) = 4(0.75) = 3$ ✓ — the exact formula's prefactor *is* the average neighbour count.

**Peak-to-average power ratio.** QAM's advantage comes from letting points sit at different radii, which means the envelope varies. For square $M$-QAM,

$$\mathrm{PAPR} = \frac{E_{\max}}{E_s} = \frac{3(\sqrt M-1)}{\sqrt M+1},$$

giving 1.8 (2.6 dB) for 16-QAM and 2.33 (3.7 dB) for 64-QAM. A nonlinear amplifier must back off by roughly that much, which eats into the gain — the practical reason very large QAM constellations need expensive linear amplifiers, and why constant-envelope schemes survive in power-limited applications.

**Non-rectangular constellations.** For odd $k$ (e.g. $M=32$, 128) a square is impossible, and one uses a **cross** constellation — a square with the corners removed and the points redistributed — which recovers most of the lost efficiency. For genuinely optimal packing in two dimensions the answer is a **hexagonal** lattice ($N_{\min}=6$, densest circle packing), worth about 0.5 dB over rectangular. Almost nobody uses it, because the 0.5 dB is not worth losing the separable I/Q detection that makes rectangular QAM's receiver trivial. **Rectangular QAM is not optimal; it is optimal per unit of implementation pain.**

## Picture

![A three-part figure. Left: a 16-QAM constellation on a square grid with Gray labels, minimum distance d marked between two adjacent points, and the corner, edge, and interior points shaded differently to show their 2, 3, and 4 nearest neighbours. Middle: 16-PSK on a circle of equal average energy, with its much smaller minimum distance marked for comparison. Right: the union bound illustrated as one signal point with circles of exclusion around each competitor, showing the overlapping region that causes double-counting.](assets/03-05-fig1.svg)

Left and middle are the same $M$ at the same average energy, drawn to the same scale: the 16-QAM points are visibly further apart than the 16-PSK ones. That visible difference is the 4.1 dB. The shading shows why the prefactor is 3 — corners have two neighbours, edges three, interiors four. Right illustrates the union bound's looseness: the shaded lens where two exclusion regions overlap is counted twice by the sum, which is why the bound is an over-estimate — and why it is nonetheless tight, since that lens is far out in the tail.

## Worked examples

**Example 1 (16-QAM, end to end).** A cable channel offers 6 MHz with $\alpha = 0.15$ and $E_b/N_0 = 16$ dB. Evaluate 16-QAM.

*Rate:* $R_s = B/(1+\alpha) = 6\times10^6/1.15 = 5.217$ Msymbols/s, and with 4 bits/symbol,

$$R_b = 20.87\ \text{Mbps}, \qquad \frac{R_b}{B} = 3.48\ \text{bits/s/Hz}.$$

*Error rate:* $E_b/N_0 = 16$ dB $= 39.8$. The $Q$-argument:

$$\sqrt{\frac{3\log_2M}{M-1}\cdot\frac{E_b}{N_0}} = \sqrt{\frac{3(4)}{15}\times39.8} = \sqrt{0.8\times39.8} = \sqrt{31.85} = 5.64 .$$

$$P_b \approx \frac{4}{4}\left(1-\frac14\right)Q(5.64) = 0.75\times 8.3\times10^{-9} = 6.3\times10^{-9}.$$

Comfortably better than $10^{-8}$.

*Compare 64-QAM on the same channel:* $R_b = 31.3$ Mbps (50% more), and

$$\sqrt{\frac{3(6)}{63}\times39.8} = \sqrt{0.2857\times39.8} = \sqrt{11.37} = 3.37,$$

$$P_b \approx \frac{4}{6}\left(1-\frac18\right)Q(3.37) = 0.583\times 3.8\times10^{-4} = 2.2\times10^{-4}.$$

Five orders of magnitude worse. **This is the modern design conversation in miniature**: 16-QAM has error rate to spare and 64-QAM has rate to spare, so neither is right on its own. The answer used by every real system is *adaptive modulation with coding* — measure the SNR, pick the largest constellation whose coded error rate meets the target, and change it as conditions change. Your Wi-Fi link does exactly this several times a second, dropping from 1024-QAM to QPSK as you walk away from the router.

**Example 2 (the union bound on a non-obvious constellation).** Four signals at $(0,0)$, $(2,0)$, $(0,2)$, $(2,2)$ in a space with $N_0/2 = 0.1$. Estimate $P_s$ and compare the union bound to the nearest-neighbour approximation.

*Distances from $\mathbf{s}_1 = (0,0)$:* to $(2,0)$ and $(0,2)$: $d=2$ (two of them). To $(2,2)$: $d = 2\sqrt2 = 2.83$.

*Union bound.* With $N_0 = 0.2$, $\sqrt{2N_0} = 0.632$:

$$P(e\mid\mathbf{s}_1) \le 2Q\!\left(\frac{2}{0.632}\right) + Q\!\left(\frac{2.83}{0.632}\right) = 2Q(3.16)+Q(4.47) = 2(7.9\times10^{-4}) + 3.9\times10^{-6}.$$

$$= 1.58\times10^{-3} + 0.0039\times10^{-3} = 1.584\times10^{-3}.$$

*Nearest-neighbour approximation.* Drop the diagonal term:

$$P(e\mid\mathbf{s}_1)\approx 2Q(3.16) = 1.58\times10^{-3}.$$

The diagonal contributed **0.25%** of the total. By symmetry every point looks the same here, so $P_s \approx 1.58\times10^{-3}$.

*How loose is the bound?* This constellation is a translated QPSK (shift by $(1,1)$ and it is a square centred at the origin with corner coordinates $\pm1$), so we can compute the exact answer from [3.4](03-04-qpsk-and-m-psk.md) P3. Each axis errs with $p = Q(1/\sqrt{0.1}) = Q(3.16) = 7.9\times10^{-4}$, and

$$P_s^{\rm exact} = 2p-p^2 = 1.58\times10^{-3} - 6.2\times10^{-7} = 1.579\times10^{-3}.$$

Union bound: $1.584\times10^{-3}$. **Over-estimate: 0.3%.** At higher SNR it gets tighter still — at $N_0/2 = 0.05$ the error is under $10^{-4}$ relative.

*The moral.* The union bound is formally an inequality with no guarantee of tightness, and in the regime anyone actually operates in — error rates below $10^{-3}$ — it is accurate to a fraction of a percent. That is why nobody computes exact error probabilities for real constellations: the bound is free, general, and indistinguishable from the truth wherever the truth matters. (It becomes genuinely loose only at low SNR, below about 3 dB, where it can exceed 1 and is useless — which is exactly the regime where you would be using a code anyway.)

## Watch out

- **You might think QAM beats PSK because it uses amplitude as well as phase.** It beats PSK because it achieves a larger minimum distance *at the same average energy* — by allowing some points to sit closer to the origin. The mechanism is average-energy efficiency, not the number of physical quantities modulated.
- **You might think the union bound is too loose to be useful.** At any error rate below about $10^{-3}$ it is within a fraction of a percent, because $Q$ falls so violently that non-nearest neighbours vanish. It is loose only at low SNR.
- **You might think bigger $M$ always means more throughput.** Only if the SNR supports it. Past the point where the error rate exceeds the target, throughput *falls* (retransmissions), so there is an optimal $M$ for every SNR — which is what adaptive modulation tracks.
- **You might forget the PAPR penalty.** 64-QAM's 3.7 dB peak-to-average ratio forces amplifier back-off, eating part of the gain over PSK. In power-limited systems with saturated amplifiers, constant-envelope schemes can win despite worse nominal performance.
- **You might use $E_s$ where $E_b$ belongs.** $E_s = E_b\log_2M$, so at $M=64$ they differ by a factor of 6 — nearly 8 dB. Always state which one a formula wants.

## One-liner

> Fill the square instead of crowding the circle: QAM's spacing shrinks only as $1/\sqrt M$, and the union bound reduces any constellation's error rate to counting nearest neighbours.

## Problems

**P1 (🟢)** A 64-QAM link runs at $E_b/N_0 = 20$ dB. (a) Find the $Q$-function argument. (b) Find $P_b$. (c) Find the average number of nearest neighbours, and verify against the formula's prefactor. (d) Find the PAPR in dB.

**P2 (🟡)** Compare 16-QAM and 16-PSK at $P_b = 10^{-5}$. (a) Find the required $E_b/N_0$ for 16-QAM from the formula. (b) Find it for 16-PSK ([3.4](03-04-qpsk-and-m-psk.md)). (c) Compute the minimum distance of each at the same average symbol energy $E_s$, and show the ratio accounts for the dB gap. (d) State the one practical respect in which 16-PSK is preferable.

**P3 (🔴)** A constellation has 8 points: 4 at radius $r_1 = 1$ on the axes, and 4 at radius $r_2 = \sqrt2\cdot 1.2$ on the diagonals. Noise has $N_0/2 = 0.02$. (a) Find the average symbol energy. (b) Find $d_{\min}$ and the average number of nearest neighbours. (c) Estimate $P_s$ by the nearest-neighbour approximation. (d) Compare with 8-PSK at the same average energy, and state which is better and why.

<details>
<summary>Solutions</summary>

**P1** (a) $M=64$, $\log_2M = 6$, $E_b/N_0 = 20$ dB $=100$:

$$\sqrt{\frac{3(6)}{63}\times100} = \sqrt{0.2857\times100} = \sqrt{28.57} = 5.35 .$$

(b) $$P_b \approx \frac{4}{6}\left(1-\frac{1}{8}\right)Q(5.35) = 0.6667\times0.875\times 4.4\times10^{-8} = 0.583\times4.4\times10^{-8} = 2.6\times10^{-8}.$$

(c) An $8\times8$ grid: 4 corners with 2 neighbours, $4\times6 = 24$ edge points with 3, and $6\times6 = 36$ interior points with 4.

$$N_{\min} = \frac{4(2)+24(3)+36(4)}{64} = \frac{8+72+144}{64} = \frac{224}{64} = 3.5 .$$

Formula prefactor: $4(1-1/\sqrt{64}) = 4(1-0.125) = 3.5$ ✓.

(d) $$\mathrm{PAPR} = \frac{3(\sqrt M-1)}{\sqrt M+1} = \frac{3(7)}{9} = 2.333, \qquad 10\log_{10}2.333 = 3.68\ \text{dB}.$$

**P2** (a) Need $P_b = 10^{-5}$ with $M=16$, prefactor $\frac{4}{4}(1-\frac14) = 0.75$:

$$Q(x) = \frac{10^{-5}}{0.75} = 1.333\times10^{-5} \;\Longrightarrow\; x = 4.20 .$$

$$x^2 = \frac{3(4)}{15}\cdot\frac{E_b}{N_0} = 0.8\frac{E_b}{N_0} \;\Longrightarrow\; \frac{E_b}{N_0} = \frac{17.64}{0.8} = 22.05 = 13.4\ \text{dB}.$$

(b) 16-PSK: $P_s \approx 4P_b = 4\times10^{-5}$, so $Q(y) = 2\times10^{-5}$, $y = 4.11$. With $\sin(\pi/16) = 0.1951$:

$$\sqrt{\frac{2E_s}{N_0}} = \frac{4.11}{0.1951} = 21.07 \;\Longrightarrow\; \frac{E_s}{N_0} = 222.0, \qquad \frac{E_b}{N_0} = \frac{222.0}{4} = 55.5 = 17.4\ \text{dB}.$$

**Gap: 4.0 dB.**

(c) At the same $E_s$:

$$d_{\min}^{\rm QAM} = \sqrt{\frac{6E_s}{M-1}} = \sqrt{\frac{6E_s}{15}} = 0.632\sqrt{E_s}.$$

$$d_{\min}^{\rm PSK} = 2\sqrt{E_s}\sin\frac{\pi}{16} = 2(0.1951)\sqrt{E_s} = 0.390\sqrt{E_s}.$$

Ratio $= 0.632/0.390 = 1.62$. Since error probability depends on $d^2$, the power advantage is

$$20\log_{10}(1.62) = 4.2\ \text{dB},$$

matching the 4.0 dB from (a)–(b) to within the neighbour-count correction (QAM's 3 neighbours versus PSK's 2 costs QAM a fraction of a dB back). ✓

(d) **Constant envelope.** All 16-PSK points sit at the same radius, so the signal's amplitude is constant and it can be amplified by a saturated, nonlinear, high-efficiency amplifier without distortion. 16-QAM has 2.6 dB of PAPR and needs a linear amplifier with back-off. On a satellite transponder or a battery-powered handset, where amplifier efficiency dominates the power budget, that can outweigh 4 dB of nominal sensitivity.

**P3** (a) Four points at $E = r_1^2 = 1$ and four at $E = r_2^2 = 2(1.44) = 2.88$:

$$E_s = \frac{4(1)+4(2.88)}{8} = \frac{4+11.52}{8} = 1.94 .$$

(b) Points sit at angles $0°, 90°, 180°, 270°$ (radius 1) and $45°,135°,225°,315°$ (radius $\sqrt2\cdot1.2 = 1.697$). The distance between an inner point and an adjacent outer one, separated by $45°$:

$$d^2 = r_1^2+r_2^2-2r_1r_2\cos45° = 1 + 2.88 - 2(1)(1.697)(0.7071) = 3.88 - 2.400 = 1.480,$$
$$d = 1.217 .$$

Distance between two inner points ($90°$ apart, radius 1): $\sqrt{2}= 1.414$. Between two outer points ($90°$ apart, radius 1.697): $1.697\sqrt2 = 2.400$.

So $d_{\min} = 1.217$, achieved between each inner–outer adjacent pair. Every inner point has 2 such neighbours, and every outer point has 2 as well, so

$$N_{\min} = 2 .$$

(c) $N_0 = 0.04$, $\sqrt{2N_0} = 0.283$:

$$P_s \approx 2\,Q\!\left(\frac{1.217}{0.283}\right) = 2Q(4.30) = 2(8.5\times10^{-6}) = 1.7\times10^{-5}.$$

(d) 8-PSK at the same $E_s = 1.94$:

$$d_{\min} = 2\sqrt{1.94}\sin\frac{\pi}{8} = 2(1.393)(0.3827) = 1.066, \qquad P_s\approx 2Q\!\left(\frac{1.066}{0.283}\right) = 2Q(3.77) = 1.6\times10^{-4}.$$

**The two-ring constellation wins**, by a factor of about 9 in error probability — equivalently, $20\log_{10}(1.217/1.066) = 1.15$ dB of power.

*Why.* 8-PSK forces all eight points onto one circle, so the angular spacing is $45°$ and the chord is short. The two-ring design puts alternate points on a larger circle, which increases the *angular* separation to $45°$ but between points of *different* radii — and the extra radial separation lengthens the chord. It costs some average energy (the outer ring is more expensive) but buys more distance than it costs.

This is the general principle behind QAM and behind optimized constellations: **at fixed average energy, spreading points over multiple radii packs them better than a single circle.** (The radius ratio here, $r_2/r_1 = 1.697$, is not far from the optimum for 8 points; the true optimal 8-point constellation in two dimensions is a 7-point hexagonal cluster plus one, worth a further fraction of a dB — and used by nobody, for the implementation reasons noted above.)

</details>

## Flashback

**From Lesson 3.2 (Optimal detection in AWGN):** Three signals sit at $(-a,0)$, $(0,0)$, $(a,0)$ with noise variance $N_0/2$ per coordinate. (a) Use the union bound to bound $P(e\mid\mathbf{s}_2)$. (b) Compare with the exact answer. (c) Explain why the bound is exact here.

<details>
<summary>Solution</summary>

(a) From $\mathbf{s}_2 = (0,0)$ the distances are $a$ to each of the two others, so

$$P(e\mid\mathbf{s}_2) \le Q\!\left(\frac{a}{\sqrt{2N_0}}\right)+Q\!\left(\frac{a}{\sqrt{2N_0}}\right) = 2Q\!\left(\sqrt{\frac{a^2}{2N_0}}\right).$$

(b) The exact answer, from [3.2](03-02-optimal-detection-awgn.md) P2b, is $2Q\big(\sqrt{a^2/2N_0}\big)$ — **identical**.

(c) The union bound over-counts only where two error events *overlap* — where the received point is simultaneously closer to two different wrong signals. Here the two wrong signals lie on opposite sides along one axis, so the events "$r < -a/2$" and "$r>a/2$" are **disjoint**: the noise cannot push the point below $-a/2$ and above $+a/2$ at once. With no overlap there is no double-counting, and the union bound holds with equality.

This is the general condition: the union bound is exact when the pairwise error events are mutually exclusive, and tight when their overlaps are far out in the tail — which is why it is essentially exact at every SNR anyone operates at.

</details>

## Connections

- **Backward:** square QAM is two $M$-PAM constellations on the independent axes of [3.4](03-04-qpsk-and-m-psk.md); the pairwise term in the union bound is [3.2](03-02-optimal-detection-awgn.md)'s $Q(d/\sqrt{2N_0})$.
- **Forward:** [3.6](03-06-power-vs-bandwidth-efficiency.md) plots QAM's whole family against the Shannon bound; [4.2](04-02-channel-capacity-shannon-limit.md) explains why even 4096-QAM leaves several dB on the table without coding.
- **Sideways:** "maximize the minimum distance among $M$ points at fixed average energy" is sphere packing, the same problem as error-correcting code design in [4.3](04-03-block-codes.md) — where the points live in $n$-dimensional binary space and distance is Hamming rather than Euclidean. Shannon's proofs use the continuous version directly.
