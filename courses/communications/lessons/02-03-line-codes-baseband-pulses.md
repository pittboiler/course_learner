# Communication Systems · Lesson 2.3: Line codes and baseband pulses

> ⏱ ~15 min · Module 2: Sampling & Digital Transmission · Builds on: [2.2 Quantization and PCM](02-02-quantization-and-pcm.md), [1.2 Random processes and the PSD](01-02-random-processes-and-psd.md) · Unlocks: [2.4 ISI and the Nyquist criterion](02-04-isi-nyquist-criterion.md), [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md)

## Why this matters

[2.2](02-02-quantization-and-pcm.md) produced a stream of ones and zeros. A wire cannot carry a one; it can carry a voltage. Choosing *which* voltage waveform stands for a one and which for a zero is the [line code](../reference.md#line-code), and the choice is not cosmetic — it determines the spectrum you occupy, whether the receiver can recover a clock, whether the signal survives a transformer, and how much power you burn.

This is also where [1.2](01-02-random-processes-and-psd.md)'s machinery earns its keep. The transmitted signal is a random process (you don't know the data), so its spectrum is a PSD, computed from an autocorrelation — and the resulting formula lets you *design* a spectrum by choosing pulse shapes and correlations between symbols.

## The idea

Three requirements pull in different directions.

**No DC.** Long transmission lines are transformer- or capacitor-coupled and simply do not pass DC. A code that lets a long run of ones build up a net average voltage will see its decision threshold drift — **baseline wander** — and start making errors. So a good code has zero mean and, ideally, no spectral content near DC at all.

**Clock recovery.** The receiver must know when to sample. It gets that from the transitions in the received signal itself, so a code that can go silent — a long run of identical bits with no transition — starves the timing loop. Guaranteed transitions cost something, but not having them costs more.

**Spectral compactness and power.** Narrow spectrum is cheap channel; low average power is cheap transmitter. Getting a transition every bit guarantees timing but doubles the spectral width.

The general theory that lets you trade these is one formula. If you send $s(t)=\sum_k a_k\,g(t-kT_b)$, where $g$ is a fixed **pulse shape** and $\{a_k\}$ are data-dependent **amplitudes**, then the PSD factors:

$$S(f) = \frac{|G(f)|^2}{T_b}\times\big(\text{a term built only from the correlations of } a_k\big).$$

Two independent knobs. The pulse shape sets the envelope; the symbol statistics carve nulls and lines into it. Manchester coding puts a null at DC by making the *pulse* have zero area. AMI does it by making consecutive marks *anticorrelated*. Same goal, two entirely different mechanisms — and knowing which knob you turned is the point of the lesson.

## The formal version

**PAM signal model.** Transmit

$$s(t) = \sum_{k=-\infty}^{\infty} a_k\,g(t-kT_b),$$

with $T_b$ the bit duration, $R_b = 1/T_b$, $g(t)$ the pulse shape (transform $G(f)$), and $\{a_k\}$ a WSS discrete sequence with autocorrelation $R_a[m] = \mathbb{E}[a_ka_{k+m}]$.

**PSD of a PAM signal.**

$$\boxed{\;S(f) = \frac{|G(f)|^2}{T_b}\sum_{m=-\infty}^{\infty}R_a[m]\,e^{-j2\pi fmT_b}.\;}$$

*In words: the spectrum is the pulse's energy spectrum times the discrete-time spectrum of the symbol sequence's correlations.* The second factor is periodic in $f$ with period $R_b$; the first factor is what confines the result to a finite band.

**The standard codes.** Let $A$ be the amplitude and assume equiprobable independent bits.

| Code | Rule | $R_a[m]$ | PSD shape | DC? | Self-clocking? | Null-to-null BW |
|---|---|---|---|---|---|---|
| **Unipolar NRZ** | 1 → $A$ for $T_b$; 0 → 0 | $A^2/2$ at $m=0$, $A^2/4$ else | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b) + \tfrac{A^2}{4}\delta(f)$ | **yes** (impulse) | no | $R_b$ |
| **Polar NRZ** | 1 → $+A$; 0 → $-A$ | $A^2$ at $m=0$, 0 else | $A^2T_b\operatorname{sinc}^2(fT_b)$ | no impulse, but power at DC | no | $R_b$ |
| **Polar RZ** | as above, pulse only $T_b/2$ wide | $A^2$ at $m=0$ | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b/2)$ | no impulse | partially | $2R_b$ |
| **AMI (bipolar RZ)** | 0 → 0; 1 → alternating $\pm A$ | $A^2/2$ at $m=0$, $-A^2/4$ at $m=\pm1$ | $\tfrac{A^2T_b}{4}\operatorname{sinc}^2(fT_b/2)\sin^2(\pi fT_b)$ | **null at DC** | needs zero-substitution | $R_b$ |
| **Manchester** | 1 → $+A$ then $-A$; 0 → $-A$ then $+A$ | $A^2$ at $m=0$ | $A^2T_b\operatorname{sinc}^2(fT_b/2)\sin^2(\pi fT_b/2)$ | **null at DC** | **yes, always** | $2R_b$ |

Read the table as three design stories.

- **Unipolar NRZ** is the naive choice and the worst: a DC impulse carrying a quarter of the total power (wasted, and blocked by any transformer) and no guaranteed transitions.
- **Polar NRZ** deletes the DC impulse for free — just use $\pm A$ instead of $A$ and 0 — and is 3 dB more power-efficient for the same minimum distance. It is the default for short links (RS-232, most chip-to-chip buses). It still starves a clock recovery loop on a long run.
- **AMI and Manchester** both kill DC, by the two different mechanisms named above.

**Mechanism 1: shape the pulse (Manchester).** The Manchester pulse is a half-positive, half-negative "split phase" pulse. Its area is zero, so $G(0)=0$, so $S(0)=0$ — the null comes from $|G(f)|^2$. Bonus: a transition in the middle of *every* bit, so clock recovery never starves. Cost: the pulse is half as long, so the spectrum is twice as wide ($2R_b$ null-to-null). Ethernet's original 10BASE-T used it, accepting 20 MHz of bandwidth for 10 Mbps.

**Mechanism 2: correlate the symbols (AMI).** Marks alternate in sign, so a run of ones is $+A,-A,+A,\dots$ and averages to zero. This is $R_a[\pm1] = -A^2/4$ — deliberate **anticorrelation** — and it produces the $\sin^2(\pi fT_b)$ factor, which is zero at $f=0$. The pulse itself is an ordinary RZ pulse. Cost: a long run of *zeros* still has no transitions, so real systems substitute a deliberate code violation (B8ZS, HDB3) every 8 zeros. AMI is the T1 line code, and it fits the whole 1.544 Mbps in about 1.5 MHz.

**Bandwidth efficiency, stated once.** Codes that use one pulse per bit (NRZ, AMI) occupy roughly $R_b$ hertz null-to-null; codes with a mid-bit transition (RZ, Manchester) occupy roughly $2R_b$. Bandwidth is the currency you pay for guaranteed timing.

**Beyond binary.** Sending $M$ levels per pulse carries $\log_2M$ bits per symbol, so at fixed bit rate the symbol rate — and the bandwidth — falls by $\log_2M$. The bill is noise margin: with a fixed peak amplitude, $M$ levels are spaced $2A/(M-1)$ apart instead of $2A$, so the required power rises. This is the same trade as the 4-level question in [2.2](02-02-quantization-and-pcm.md) P1d, and Module 3 prices it exactly.

## Picture

![Two panels. Left: five bit-waveform strips for the sequence 1011000101, drawn one above the other, labelled unipolar NRZ, polar NRZ, polar RZ, AMI, Manchester, with the alternating polarity of AMI marks and the mid-bit transitions of Manchester visible. Right: the corresponding PSDs plotted against f over R_b, showing polar NRZ peaking at DC, AMI with a null at DC and a peak at half the bit rate, and Manchester with a null at DC and a peak near 0.7 R_b.](assets/02-03-fig1.svg)

Left, the same ten bits in five codes. Note what your eye does: on unipolar NRZ the long run of zeros is featureless — that is a clock recovery loop starving. On Manchester, every single bit has a mid-bit edge. On AMI, the marks alternate and the running average stays at zero.

Right, the consequence in frequency. Polar NRZ puts its peak power right at DC, exactly where a transformer-coupled line refuses to carry it. AMI and Manchester both go to zero at $f=0$ — AMI with a compact $R_b$-wide spectrum peaking at $R_b/2$, Manchester with twice the width. That picture is the whole line-code trade in one image: **DC-free costs you either bandwidth (Manchester) or a zero-run problem (AMI).**

## Worked examples

**Example 1 (deriving the AMI spectrum).** With equiprobable independent bits and alternating-mark inversion, compute $R_a[m]$ and get the PSD.

$m=0$: $a_k$ is $0$ with probability $\tfrac12$ and $\pm A$ with probability $\tfrac12$, so

$$R_a[0] = \mathbb{E}[a_k^2] = \tfrac12(0) + \tfrac12(A^2) = \frac{A^2}{2}.$$

$m=1$: $\mathbb{E}[a_ka_{k+1}]$ is nonzero only when *both* bits are marks, probability $\tfrac14$, and then the two have opposite signs by construction so their product is $-A^2$:

$$R_a[1] = \tfrac14(-A^2) = -\frac{A^2}{4}, \qquad R_a[-1] = -\frac{A^2}{4}.$$

$|m|\ge 2$: the intervening bit may or may not be a mark, and the sign relationship is equally likely either way, so $R_a[m]=0$.

Substituting into the PAM formula:

$$\sum_m R_a[m]e^{-j2\pi fmT_b} = \frac{A^2}{2} - \frac{A^2}{4}\big(e^{j2\pi fT_b}+e^{-j2\pi fT_b}\big) = \frac{A^2}{2}\big[1-\cos(2\pi fT_b)\big] = A^2\sin^2(\pi fT_b).$$

With an RZ pulse of width $T_b/2$, $|G(f)|^2 = (AT_b/2)^2\operatorname{sinc}^2(fT_b/2)$ — and note the $\sin^2(\pi fT_b)$ factor vanishes at $f=0$ ✓ and again at $f=R_b$, giving a spectrum that peaks near $f = R_b/2$ and is essentially gone by $R_b$. The DC null came entirely from the *correlation*, with an ordinary pulse. That is the point of the example: you can engineer a spectral null without touching the pulse shape.

**Example 2 (choosing a code for a 100-metre transformer-coupled link at 10 Mbps).** Requirements: no DC (the link is transformer-coupled), clock recovery from the data alone, and the channel is good to about 20 MHz.

- **Polar NRZ:** 10 MHz null-to-null — comfortably within budget, minimum power. But its PSD peaks at DC, which the transformer blocks, so long runs cause baseline wander; and a run of 50 identical bits gives the clock loop nothing. **Reject** — unless you add scrambling.
- **AMI:** 10 MHz, DC null, half the average power of polar NRZ (only marks carry energy). But a long run of zeros is silent. **Accept with zero-substitution** (B8ZS-style), which is what T1 does.
- **Manchester:** 20 MHz — right at the edge of the channel. DC null and a guaranteed transition every bit, so clock recovery is trivial and the receiver is simple. **Accept if the bandwidth fits.**

10BASE-T Ethernet chose Manchester, at 20 MHz for 10 Mbps, precisely because the guaranteed edge made receivers cheap in 1990. When 100BASE-TX needed 100 Mbps over the same cable, 200 MHz was out of the question, so it switched to 4B/5B block coding (which caps run length by *choosing* which 5-bit patterns are legal) followed by MLT-3 — three levels, which drops the fundamental to 31.25 MHz. The evolution is the whole lesson: as rate rises, you stop paying for timing with bandwidth and start paying for it with code complexity.

## Watch out

- **You might think "no DC component" and "no power near DC" are the same.** Polar NRZ has *no DC impulse* — its mean is zero — but its $\operatorname{sinc}^2$ PSD is at its **maximum** at $f=0$. A transformer-coupled line still mangles it. Manchester and AMI have genuine spectral *nulls*, $S(0)=0$, which is the property you actually need.
- **You might think a DC-free code cannot wander.** AMI is DC-free on average, but a long run of zeros carries no information about the baseline, so the receiver's slicer level can still drift. Being DC-free is necessary, not sufficient; you also need bounded run length.
- **You might think unipolar and polar NRZ perform identically since both are "two-level".** At the same *peak* amplitude $A$, polar's levels are $2A$ apart while unipolar's are $A$ apart — a factor of 2 in distance, 6 dB. At the same *average power*, polar still wins by 3 dB. This is the OOK-versus-BPSK gap that [3.3](03-03-binary-modulation-ber.md) derives exactly.
- **You might think the pulse shape only affects bandwidth.** It also affects intersymbol interference. A rectangular pulse is time-limited, hence infinitely wide in frequency; truncating that spectrum in a real channel smears each pulse into its neighbours. Fixing that properly is [2.4](02-04-isi-nyquist-criterion.md).

## One-liner

> A line code is two independent choices — the pulse shape and the correlations between symbols — and the PSD formula shows exactly which spectral feature each one buys you.

## Problems

**P1 (🟢)** A 2 Mbps stream is sent in polar NRZ with $\pm 3$ V. (a) Give the null-to-null bandwidth. (b) Give the average transmitted power (into 1 ohm). (c) Repeat both for Manchester at the same amplitude. (d) Which code would you pick for a capacitively coupled link, and why?

**P2 (🟡)** Unipolar NRZ sends 1 as $A$ volts for $T_b$ and 0 as 0 volts, with equiprobable independent bits. (a) Find $R_a[0]$ and $R_a[m]$ for $m\ne0$. (b) Show the PSD contains a DC impulse and give its weight. (c) What fraction of the total power sits in that impulse? (d) Explain what changes if you switch to polar NRZ, and quantify the power saving at equal noise margin.

**P3 (🔴)** A code sends $a_k = b_k + b_{k-1}$, where $b_k = \pm 1$ are independent equiprobable bits — this is **duobinary** signalling. (a) Find $R_a[0]$, $R_a[\pm1]$, and $R_a[m]$ for $|m|\ge2$. (b) Show the symbol-correlation factor is $4\cos^2(\pi fT_b)$ and state where its nulls are. (c) Contrast with AMI: which spectral region does each suppress, and what channel would you use each on? (d) How many levels does $a_k$ take, and what does that cost?

<details>
<summary>Solutions</summary>

**P1** (a) Polar NRZ uses a full-width $T_b$ pulse, so the PSD is $A^2T_b\operatorname{sinc}^2(fT_b)$ with first null at $f = 1/T_b = R_b$:

$$B_{\text{null-null}} = 2\ \text{MHz}.$$

(b) The signal is always at $\pm3$ V, so $P = A^2 = 9$ W.

(c) Manchester's pulse is $T_b/2$ wide (each half), giving $\operatorname{sinc}^2(fT_b/2)$ with its first null at $2/T_b$; combined with the $\sin^2(\pi fT_b/2)$ factor the spectrum extends to $2R_b$:

$$B_{\text{null-null}} = 4\ \text{MHz}, \qquad P = A^2 = 9\ \text{W}$$

(the signal is still always at $\pm 3$ V, just switching mid-bit — same power, double the bandwidth).

(d) **Manchester.** A capacitively coupled link cannot pass DC, and polar NRZ's PSD is maximal at DC, so long runs would cause baseline wander and the slicer would drift. Manchester has a true null at $f=0$ and a guaranteed mid-bit transition, so it also hands the receiver a clock. The price — 4 MHz instead of 2 — is what you are buying with.

**P2** (a) $a_k = A$ with probability $\tfrac12$, $0$ with probability $\tfrac12$:

$$R_a[0] = \mathbb{E}[a_k^2] = \tfrac12A^2 + \tfrac12(0) = \frac{A^2}{2}.$$

For $m\ne0$, independence gives $R_a[m] = \mathbb{E}[a_k]\mathbb{E}[a_{k+m}] = (A/2)^2 = A^2/4$.

(b) Split the constant off: $R_a[m] = \dfrac{A^2}{4} + \dfrac{A^2}{4}\delta[m]$. The constant term transforms to a train of impulses,

$$\sum_m \frac{A^2}{4}e^{-j2\pi fmT_b} = \frac{A^2}{4T_b}\sum_n \delta\!\left(f-\frac{n}{T_b}\right),$$

and the $\delta[m]$ term transforms to the constant $A^2/4$. With $|G(f)|^2 = A^2T_b^2\operatorname{sinc}^2(fT_b)$ (unit-amplitude rectangle of width $T_b$, scaled), the PAM formula gives

$$S(f) = \frac{A^2T_b}{4}\operatorname{sinc}^2(fT_b) + \frac{A^2}{4}\delta(f),$$

where all the harmonic impulses except $n=0$ are killed because $\operatorname{sinc}^2(fT_b)$ vanishes at every nonzero multiple of $1/T_b$. **Impulse weight: $A^2/4$ watts.**

(c) Total power: the signal is $A$ half the time and 0 half the time, so $P = A^2/2$. The impulse holds $A^2/4$, so the DC fraction is

$$\frac{A^2/4}{A^2/2} = \frac{1}{2} = 50\%.$$

Half the transmitted power is a constant that carries no information at all — and is blocked by any AC-coupled channel. (Compare conventional AM's carrier in [1.4](01-04-amplitude-modulation-dsb-am.md): the same pathology, a nonzero mean showing up as a spectral line.)

(d) Polar NRZ has $\mathbb{E}[a_k]=0$, so the impulse disappears entirely and $S(f) = A^2T_b\operatorname{sinc}^2(fT_b)$ with $P = A^2$.

*At equal noise margin:* the decision distance is what matters. Unipolar levels are $\{0, A\}$, distance $A$; polar levels are $\{-A', +A'\}$, distance $2A'$. Equal margin means $2A' = A$, i.e. $A' = A/2$. Then

$$P_{\rm polar} = A'^2 = \frac{A^2}{4}, \qquad P_{\rm unipolar} = \frac{A^2}{2},$$

so polar uses **half the power** — a 3 dB saving — *and* has no DC impulse. Unipolar NRZ is dominated on every axis; it survives only because it is what a logic gate naturally produces.

**P3** (a) $a_k = b_k+b_{k-1}$ with $b$ independent, zero-mean, $\mathbb{E}[b^2]=1$.

$$R_a[0] = \mathbb{E}[(b_k+b_{k-1})^2] = 1 + 0 + 0 + 1 = 2 .$$

$$R_a[1] = \mathbb{E}[(b_k+b_{k-1})(b_{k+1}+b_k)] = \mathbb{E}[b_k^2] = 1,$$

since every other cross term pairs distinct independent zero-mean bits. By symmetry $R_a[-1]=1$. For $|m|\ge2$ the two sums share no common $b$, so $R_a[m]=0$.

(b) $$\sum_m R_a[m]e^{-j2\pi fmT_b} = 2 + e^{j2\pi fT_b}+e^{-j2\pi fT_b} = 2+2\cos(2\pi fT_b) = 4\cos^2(\pi fT_b).$$

Nulls where $\pi fT_b = \pi/2 + k\pi$, i.e. $f = R_b/2, 3R_b/2, \dots$ — the factor is *maximum* at DC and zero at half the bit rate.

(c) They are opposites. AMI's $\sin^2(\pi fT_b)$ suppresses **DC** and peaks at $R_b/2$; duobinary's $\cos^2(\pi fT_b)$ suppresses **$R_b/2$** and peaks at DC. So AMI suits AC-coupled channels (transformers, long copper) that cannot pass DC, while duobinary suits channels that are fine at DC but roll off at high frequency — which describes a bandwidth-limited baseband channel, and is exactly why duobinary is used to squeeze a given rate through a narrow channel. Duobinary is the first **partial-response** scheme: it *accepts* a controlled amount of intersymbol interference in exchange for a spectrum that fits, a theme [2.4](02-04-isi-nyquist-criterion.md) picks up.

(d) $a_k \in \{-2, 0, +2\}$ — **three levels**. The cost is noise margin: three levels within the same peak amplitude are spaced half as far apart as two, worth 6 dB, and errors propagate unless precoding is used (a single mistake corrupts the differential decoding of all that follow). Partial response buys bandwidth with power and complexity, exactly as multilevel signalling does.

</details>

## Flashback

**From Lesson 1.2 (Random processes and the PSD):** A random binary wave takes values $\pm A$ with equal probability over each $T$-second interval, with a uniformly distributed timing offset. (a) State its autocorrelation. (b) State its PSD. (c) At what frequency is the PSD half its peak value? (Solve numerically to two decimals in units of $1/T$.)

<details>
<summary>Solution</summary>

(a) A triangle: $R_X(\tau) = A^2(1-|\tau|/T)$ for $|\tau|<T$, zero beyond.

(b) $S_X(f) = A^2T\operatorname{sinc}^2(fT)$, peaking at $A^2T$ at $f=0$ with its first null at $f=1/T$.

(c) Need $\operatorname{sinc}^2(x) = 0.5$ with $x = fT$, i.e. $\dfrac{\sin\pi x}{\pi x} = 0.7071$. Trying values: $x=0.4 \Rightarrow \sin(1.2566)/1.2566 = 0.9511/1.2566 = 0.7568$; $x=0.45 \Rightarrow 0.9877/1.4137 = 0.6987$; $x=0.44\Rightarrow 0.9823/1.3823 = 0.7106$. Interpolating between 0.44 and 0.45:

$$x \approx 0.443 \quad\Longrightarrow\quad f_{3\rm dB} \approx \frac{0.44}{T} = 0.44\,R_b .$$

So a raw polar NRZ stream has its half-power point at about 44% of the bit rate — a useful rule of thumb when specifying a channel: the bulk of the energy is below $R_b/2$, but the $\operatorname{sinc}^2$ tails fall only as $1/f^2$ and reach a long way, which is precisely why pulse shaping matters.

</details>

## Connections

- **Backward:** the PSD formula is [1.2](01-02-random-processes-and-psd.md)'s Wiener–Khinchin applied to a PAM sequence; the DC impulse in unipolar NRZ is the same pathology as AM's wasted carrier in [1.4](01-04-amplitude-modulation-dsb-am.md).
- **Forward:** [2.4](02-04-isi-nyquist-criterion.md) replaces the rectangular pulse with one designed to avoid intersymbol interference; [3.3](03-03-binary-modulation-ber.md) prices the unipolar-versus-polar gap exactly as the OOK-versus-BPSK gap.
- **Sideways:** run-length constraints and DC-free codes are the same problem solved in magnetic and optical recording, where the read head is a differentiator that cannot see DC either — the EFM code on a compact disc is a line code by another name.
