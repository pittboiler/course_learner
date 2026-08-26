# Communication Systems · Lesson 2.5: Equalization, briefly

> ⏱ ~15 min · Module 2: Sampling & Digital Transmission · Builds on: [2.4 ISI and the Nyquist criterion](02-04-isi-nyquist-criterion.md), [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) · Unlocks: [3.1 Signal space and the matched filter](03-01-signal-space-matched-filter.md), [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

[2.4](02-04-isi-nyquist-criterion.md) designed a beautiful pulse with zero ISI — and then quietly assumed the channel was a perfect wire. It never is. A copper pair attenuates high frequencies. A radio path delivers the same signal twice, once via a reflection off a building. A fibre disperses. Whatever the mechanism, the end-to-end response is no longer the raised cosine you designed, so the Nyquist property is destroyed and the eye starts to close.

**Equalization** is the receiver's answer: build a filter that approximately inverts the channel, and restore the zero-ISI condition. It is the last piece of the baseband story, and the reason a 56k modem could work over a phone line whose characteristics nobody knew in advance — because the equalizer *learned* them, in about a quarter of a second, at the start of every call.

## The idea

If the channel multiplied the spectrum by $H_c(f)$, then dividing by $H_c(f)$ puts it back. That is the whole idea, and the entire subject is about why you cannot simply do that.

**Problem one: noise.** Wherever the channel is weak — say it attenuates 30 dB at the band edge — the inverse boosts by 30 dB. But the noise at the receiver input was added *after* the channel, so boosting the signal back up boosts the noise with it. You have restored the signal shape and destroyed the SNR. This is [noise enhancement](../reference.md#noise-enhancement), and it means the right equalizer is not the exact inverse but a compromise between residual ISI and amplified noise.

**Problem two: you don't know $H_c$.** The channel is a phone line of unknown length, or a radio path that changes as a car moves. So the equalizer must *estimate* the channel — or, better, skip estimating it and directly adjust its own coefficients until the output looks right. Send a known **training sequence**, compare what arrives against what should have arrived, and nudge the taps to shrink the error. That is adaptive equalization, and the nudging rule is gradient descent.

The structure is always the same: a **transversal filter**, a tapped delay line with adjustable weights. Delay the received signal by one symbol period at a time, scale each tap, and add. With $2N+1$ taps you have $2N+1$ knobs, and the zero-forcing design spends them all on making the ISI exactly zero at $2N$ neighbouring instants.

## The formal version

**The channel.** Let the overall pulse response *at the receiver's sampler* be $p(t)$, with samples $p_k = p(kT)$. The sampled output is

$$y_m = a_mp_0 + \sum_{k\ne m}a_kp_{m-k} + n_m .$$

Zero ISI requires $p_k = \delta_{k0}$; the channel has made it something else.

**Transversal (tapped delay line) equalizer.** Weights $c_{-N},\dots,c_0,\dots,c_N$:

$$\hat y_m = \sum_{n=-N}^{N}c_n\,y_{m-n}, \qquad C(f) = \sum_{n=-N}^{N}c_ne^{-j2\pi fnT}.$$

*In words: form a weighted sum of the current sample and its $N$ neighbours on each side, using the future ones too (the "delay" is relative to a deliberately delayed decision).*

**Zero-forcing equalizer.** Choose the weights to force the equalized response to zero at $2N$ neighbouring sampling instants:

$$q_m = \sum_{n=-N}^{N}c_n\,p_{m-n} = \begin{cases}1,& m=0\\ 0,& m=\pm1,\dots,\pm N.\end{cases}$$

This is a $(2N+1)\times(2N+1)$ linear system $\mathbf{P}\mathbf{c} = \mathbf{e}_0$ with $\mathbf{P}$ a Toeplitz matrix of the sampled channel response — solvable exactly by the methods of [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md).

*In words: pick the taps so that the combined channel-plus-equalizer pulse is 1 at its own instant and zero at the $2N$ nearest neighbours.* Note the honest limitation: ISI is forced to zero only at $2N$ instants, not all of them. Residual ISI leaks in from further out.

In the frequency domain, as $N\to\infty$ the zero-forcing solution is exactly

$$C(f) = \frac{1}{P(f)}, \qquad |f|\le \frac{1}{2T},$$

which makes the noise-enhancement problem explicit: output noise PSD becomes $N_0|C(f)|^2/2 = N_0/(2|P(f)|^2)$, which **blows up wherever the channel has a spectral null**. A channel with a deep notch cannot be zero-force equalized at any acceptable SNR.

**MMSE equalizer.** Instead of forcing ISI to zero, minimize the total mean-squared error, $J = \mathbb{E}[|\hat y_m - a_m|^2]$, which counts residual ISI and noise together. The solution satisfies the **Wiener–Hopf** normal equations,

$$\mathbf{R}\,\mathbf{c} = \mathbf{p}, \qquad \mathbf{R} = \mathbb{E}[\mathbf{y}\mathbf{y}^T],$$

and in the frequency domain, as $N\to\infty$,

$$C(f) = \frac{P^*(f)}{|P(f)|^2 + N_0/(2\sigma_a^2)} .$$

*In words: the same inverse as zero-forcing, but with a noise floor added to the denominator so it never divides by something tiny.* At high SNR the extra term vanishes and MMSE $\to$ zero-forcing; at low SNR it backs off, leaving some ISI rather than amplifying noise. MMSE is essentially always the better choice, and the structure — a matched-filter numerator over a regularized denominator — is exactly the Wiener filter and the least-squares projection of [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md).

**Adaptive equalization (LMS).** You do not know $\mathbf{P}$ or $\mathbf{R}$, so estimate the gradient from one sample at a time:

$$e_m = \hat y_m - a_m, \qquad \mathbf{c}^{(m+1)} = \mathbf{c}^{(m)} - \mu\,e_m\,\mathbf{y}_m .$$

*In words: if the output was too high and the input at that tap was positive, turn that tap down a little.* The step size $\mu$ trades convergence speed against steady-state jitter; stability needs $0<\mu<2/(\text{total input power})$.

Two operating modes:
- **Training mode:** $a_m$ is a known preamble, so the error is exact. Typically a few hundred to a few thousand symbols.
- **Decision-directed mode:** after training, use the receiver's own decisions $\hat a_m$ in place of $a_m$. This works as long as decisions are mostly right — and fails catastrophically if they are not, since wrong decisions drive the taps further wrong. Hence the training preamble is not optional.

**Decision-feedback equalizer (DFE).** Split the job. A feed-forward section handles precursor ISI (interference from *future* symbols), and a feedback section subtracts postcursor ISI using symbols **already decided**:

$$\hat y_m = \sum_{n\ge0}c_ny_{m-n} - \sum_{n\ge1}b_n\hat a_{m-n}.$$

Because the feedback operates on decisions — noise-free symbols, not noisy samples — it cancels postcursor ISI **without enhancing noise at all**. That is a genuine free lunch, and it is why the DFE outperforms any linear equalizer on channels with deep nulls. The cost is **error propagation**: one wrong decision feeds back and can corrupt several that follow.

## Picture

![A three-part figure. Left: a transversal filter block diagram, a chain of T-delay blocks with tap weights c_-1, c_0, c_1 feeding a summer. Middle: an eye diagram before equalization, nearly closed, with a small vertical and horizontal opening marked. Right: the same eye after equalization, wide open, with the noise margin and timing margin arrows visibly larger.](assets/02-05-fig1.svg)

Left is the machine: delays, weights, a sum — the same structure as any FIR filter from [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md), with the twist that the weights are set by the data rather than by a designer. Middle and right are what it is for. The closed eye on the left has almost no vertical opening (any noise causes an error) and almost no horizontal opening (any clock jitter causes an error). After equalization both margins are restored. **The eye diagram is how equalizer performance is actually judged in the lab.**

## Worked examples

**Example 1 (a three-tap zero-forcing equalizer).** A channel produces the sampled pulse

$$p_{-1} = 0.2, \quad p_0 = 1.0, \quad p_1 = -0.3,$$

with all other $p_k = 0$. Design a three-tap zero-forcing equalizer ($N=1$) and check the result.

The constraint $q_m=\sum_n c_np_{m-n}$ for $m=-1,0,1$ gives, in matrix form,

$$\begin{pmatrix}p_0 & p_{-1} & 0\\ p_1 & p_0 & p_{-1}\\ 0 & p_1 & p_0\end{pmatrix}\begin{pmatrix}c_{-1}\\c_0\\c_1\end{pmatrix} = \begin{pmatrix}0\\1\\0\end{pmatrix} \;\Longrightarrow\; \begin{pmatrix}1 & 0.2 & 0\\ -0.3 & 1 & 0.2\\ 0 & -0.3 & 1\end{pmatrix}\begin{pmatrix}c_{-1}\\c_0\\c_1\end{pmatrix} = \begin{pmatrix}0\\1\\0\end{pmatrix}.$$

From rows 1 and 3: $c_{-1} = -0.2c_0$ and $c_1 = 0.3c_0$. Substituting into row 2:

$$-0.3(-0.2c_0) + c_0 + 0.2(0.3c_0) = 1 \;\Longrightarrow\; c_0(0.06+1+0.06) = 1 \;\Longrightarrow\; c_0 = \frac{1}{1.12} = 0.8929.$$

$$c_{-1} = -0.1786, \qquad c_0 = 0.8929, \qquad c_1 = 0.2679.$$

*Verify the equalized response.* Convolving $\mathbf{c}$ with $\mathbf{p}$ gives a length-5 sequence:

$$q_{-2} = c_{-1}p_{-1} = (-0.1786)(0.2) = -0.0357,$$
$$q_{-1} = c_{-1}p_0 + c_0p_{-1} = -0.1786 + 0.1786 = 0 \ \checkmark$$
$$q_0 = c_{-1}p_1 + c_0p_0 + c_1p_{-1} = 0.0536+0.8929+0.0536 = 1.0000 \ \checkmark$$
$$q_1 = c_0p_1+c_1p_0 = -0.2679+0.2679 = 0 \ \checkmark$$
$$q_2 = c_1p_1 = (0.2679)(-0.3) = -0.0804 .$$

The nearest neighbours are exactly zero, as designed — but $q_{\pm2}$ are **not** zero. Residual ISI has been pushed outward, not eliminated. Peak distortion before equalization was $|0.2|+|0.3| = 0.5$; after, $|{-0.0357}|+|{-0.0804}| = 0.116$, a 4.3× improvement. More taps would push the residue further out and shrink it further, at the cost of more delay and more noise enhancement.

**Example 2 (a two-ray multipath channel and its notch).** A radio path delivers a direct ray plus a reflection of relative amplitude $a$ arriving one symbol period later:

$$h(t) = \delta(t) + a\,\delta(t-T) \quad\Longrightarrow\quad H(f) = 1 + ae^{-j2\pi fT}, \quad |H(f)|^2 = 1+a^2+2a\cos(2\pi fT).$$

At $f = 1/(2T)$ the cosine is $-1$ and $|H|^2 = (1-a)^2$ — a **notch** that deepens as $a\to1$.

*Zero-forcing:* $C(f) = 1/H(f)$, so at the notch the gain is $1/(1-a)$. With $a = 0.9$ that is a gain of 10 in amplitude, **20 dB of noise enhancement** at that frequency. With $a=0.99$, 40 dB. Zero-forcing has restored the pulse shape and thrown away the link.

*MMSE:* the denominator becomes $|H|^2 + N_0/(2\sigma_a^2)$, which at the notch is $(1-a)^2 + \text{noise floor}$. Once $(1-a)^2$ falls below the noise floor the equalizer simply stops trying, leaving residual ISI instead of a noise explosion. At high SNR the two designs agree; at the notch, where SNR is by definition terrible, MMSE quietly gives up — which is the right answer.

*DFE:* here the channel is *purely postcursor* — the echo arrives after the main ray. So the feedback section can subtract it exactly: set $b_1 = a$ and

$$\hat y_m = y_m - a\,\hat a_{m-1},$$

which removes the echo completely with **no noise amplification whatsoever**, because $\hat a_{m-1}$ is a clean decided symbol, not a noisy sample. This is the DFE's whole argument in one line, and it is why every serious receiver on a multipath channel has one.

*The alternative:* rather than fight the notch, avoid it — split the band into many narrow subchannels, each so narrow that the channel looks flat across it, and let the deep-faded ones carry less data. That is OFDM, and it is [4.5](04-05-multiplexing-multiple-access.md).

## Watch out

- **You might think the ideal equalizer is the exact channel inverse.** Only at infinite SNR. The exact inverse maximizes noise enhancement, and on a channel with a spectral null it is catastrophic. MMSE — inverse-with-a-noise-floor — is essentially always better, and reduces to the inverse when noise is negligible.
- **You might think a zero-forcing equalizer eliminates ISI.** A $(2N+1)$-tap equalizer zeroes ISI at exactly $2N$ instants. Residual ISI reappears beyond that span, as $q_{\pm2}$ did in Example 1. "Zero-forcing" names the design objective, not the achieved outcome.
- **You might think decision-directed adaptation can start from nothing.** It needs decisions that are mostly correct to produce a useful error signal; from a random start the errors are meaningless and the taps diverge. Hence the training preamble — and hence the roughly 250 ms of tones you used to hear at the start of a modem call.
- **You might think a DFE is strictly better than a linear equalizer.** It is better on noise enhancement, and worse on error propagation: one bad decision is fed back and can produce a burst. Systems mitigate this by pairing a DFE with an interleaver and error-correcting code ([4.4](04-04-convolutional-codes-viterbi.md)), so bursts are spread out before decoding.

## One-liner

> Equalization is channel inversion held back from its own worst instincts: invert enough to reopen the eye, not so much that you amplify the noise into it.

## Problems

**P1 (🟢)** A channel has sampled pulse response $p_{-1} = 0.1$, $p_0 = 1$, $p_1 = -0.2$, all others zero. (a) Compute the peak distortion (sum of ISI magnitudes) before equalization. (b) Set up the three-tap zero-forcing equations. (c) Solve for the tap weights. (d) Compute the residual $q_{\pm2}$ and the new peak distortion.

**P2 (🟡)** A two-ray channel is $H(f) = 1 + 0.6e^{-j2\pi fT}$. (a) Find $|H(f)|^2$ and its minimum and maximum over $f$, in dB. (b) Find the zero-forcing equalizer's noise enhancement at the worst frequency, in dB. (c) The received SNR before equalization is 20 dB. Estimate the SNR at the worst frequency after zero-forcing equalization. (d) Would a DFE do better here? Say precisely why.

**P3 (🔴)** An LMS equalizer has 11 taps and adapts with step size $\mu$. (a) Given input samples of average power $\sigma_y^2 = 0.5$, state the stability bound on $\mu$. (b) Explain qualitatively what happens if $\mu$ is set at 90% of that bound, and what happens at 1% of it. (c) A designer proposes skipping the training preamble to save time, starting directly in decision-directed mode with all taps zero except $c_0 = 1$. Analyze whether this can work, and identify the channel condition that determines the answer.

<details>
<summary>Solutions</summary>

**P1** (a) Peak distortion is $\sum_{k\ne0}|p_k| = 0.1+0.2 = 0.3$.

(b) With $q_m = \sum_nc_np_{m-n}$ forced to $(0,1,0)$ for $m=(-1,0,1)$:

$$\begin{pmatrix}1 & 0.1 & 0\\ -0.2 & 1 & 0.1\\ 0 & -0.2 & 1\end{pmatrix}\begin{pmatrix}c_{-1}\\c_0\\c_1\end{pmatrix}=\begin{pmatrix}0\\1\\0\end{pmatrix}.$$

(c) Row 1: $c_{-1} = -0.1c_0$. Row 3: $c_1 = 0.2c_0$. Row 2:

$$-0.2(-0.1c_0)+c_0+0.1(0.2c_0) = c_0(0.02+1+0.02) = 1.04\,c_0 = 1 \Rightarrow c_0 = 0.9615.$$

$$c_{-1} = -0.09615, \qquad c_0 = 0.9615, \qquad c_1 = 0.1923 .$$

(d) $$q_{-2} = c_{-1}p_{-1} = (-0.09615)(0.1) = -0.009615,$$
$$q_{2} = c_{1}p_{1} = (0.1923)(-0.2) = -0.03846 .$$

New peak distortion: $0.0096+0.0385 = 0.048$, down from 0.300 — a 6.2× reduction. (Sanity check on the design: $q_{-1}$ and $q_1$ should be exactly 0. $q_1 = c_0p_1+c_1p_0 = -0.1923+0.1923 = 0$ ✓.)

**P2** (a) $|H(f)|^2 = 1 + 0.36 + 1.2\cos(2\pi fT) = 1.36 + 1.2\cos(2\pi fT)$.

- Maximum at $\cos = +1$ (i.e. $f=0$): $2.56$, or $10\log_{10}2.56 = +4.08$ dB.
- Minimum at $\cos = -1$ (i.e. $f = 1/2T$): $0.16$, or $10\log_{10}0.16 = -7.96$ dB.

(Check: $(1+a)^2 = 2.56$ ✓ and $(1-a)^2 = 0.16$ ✓.)

(b) Zero-forcing applies $|C|^2 = 1/|H|^2$, so at the notch it applies

$$10\log_{10}\frac{1}{0.16} = +7.96\ \text{dB}$$

of gain — and the noise, added after the channel, is boosted by the same 7.96 dB. **Noise enhancement: 8.0 dB.**

(c) At the notch the signal was already attenuated by 7.96 dB, so the pre-equalization SNR there is $20 - 7.96 = 12.0$ dB. Equalization restores the signal to full amplitude but lifts the noise by 7.96 dB, leaving the SNR unchanged at **12.0 dB**. That is the key insight: *a linear equalizer cannot improve SNR at any frequency.* It fixes the pulse shape and leaves the per-frequency SNR exactly as the channel set it. What it buys is the elimination of ISI, which is a different impairment.

(d) **Yes.** This channel is purely postcursor — the echo at $0.6$ arrives one symbol *after* the main ray. A DFE sets $b_1 = 0.6$ and subtracts $0.6\hat a_{m-1}$ from the current sample. Because $\hat a_{m-1}$ is a decided symbol, it carries no noise, so the subtraction removes the ISI with **zero noise enhancement** — the SNR stays at the full 20 dB rather than degrading. The precise reason: linear equalization must invert the channel across the whole band including its weak parts, while decision feedback cancels a *known* interference term in the time domain and never touches the noise.

**P3** (a) LMS stability requires $0 < \mu < \dfrac{2}{L\sigma_y^2}$ where $L$ is the number of taps (total input power across the tap line):

$$\mu < \frac{2}{11\times 0.5} = \frac{2}{5.5} = 0.364 .$$

(b) At 90% of the bound ($\mu\approx 0.33$): convergence is fast but the algorithm is on the edge of instability — the tap estimates rattle badly around the optimum, giving a large **misadjustment** (excess MSE above the Wiener minimum), and any transient increase in input power can tip it into divergence. At 1% ($\mu\approx0.0036$): very small misadjustment and a clean, precise final solution, but convergence takes roughly a hundred times as many symbols. On a time-varying channel it may never catch up with the channel's own drift. The standard practice is a **gear shift**: adapt with a large $\mu$ during training, then drop to a small $\mu$ for tracking.

(c) It can work, but only on a mild channel. The reasoning: decision-directed mode computes $e_m = \hat y_m - \hat a_m$ using the receiver's own decision. That error is a valid gradient estimate only if the decision is usually correct. Starting from $c_0=1$ and all else zero means the equalizer is initially a pass-through, so the decisions are made on the raw channel output.

So the determining condition is: **is the unequalized eye still open?** Formally, is the peak distortion $\sum_{k\ne0}|p_k| < |p_0|$? If yes, the raw eye is open, most decisions are right, the gradient points the right way, and LMS pulls the taps to the optimum. If no — the eye is closed, decisions are near coin flips, the error signal is uncorrelated with the true error, and the taps wander to a local minimum or diverge outright.

This is why the answer in practice is "train, then switch": a telephone line at 33.6 kbps has a badly closed eye before equalization, so a preamble is mandatory. A short backplane trace at low rate has an open eye, and blind/decision-directed start-up is routinely used there. (Genuinely blind equalization on a closed eye is possible — the Sato and Godard/CMA algorithms use higher-order statistics of the signal instead of decisions — but it converges slowly and is a last resort for broadcast receivers with no preamble to work with.)

</details>

## Flashback

**From Lesson 2.4 (ISI and the Nyquist criterion):** A raised-cosine system uses $\alpha=0.4$ and must carry 100 kbps. (a) Find the required bandwidth for binary signalling. (b) Find it for 16-QAM (4 bits/symbol). (c) State what the equalizer of this lesson must preserve about the end-to-end response, and why the channel threatens it.

<details>
<summary>Solution</summary>

(a) Binary: $R_s = 100$ ksymbols/s, so

$$B = \frac{R_s(1+\alpha)}{2} = \frac{100{,}000(1.4)}{2} = 70\ \text{kHz}.$$

(b) 16-QAM: $R_s = 100/4 = 25$ ksymbols/s, so $B = 25{,}000(1.4)/2 = 17.5$ kHz — a quarter of (a), as expected from four bits per symbol.

(c) The equalizer must preserve the **Nyquist zero-ISI condition on the end-to-end response**: $p(nT) = \delta_{n0}$, equivalently $\sum_kP(f+k/T) = T$. The channel threatens it because the raised cosine was designed as the cascade of transmit and receive filters *assuming a flat channel*; a real channel multiplies in an extra $H_c(f)$, so the actual received pulse is no longer raised-cosine and no longer has nulls at the sampling instants. The equalizer's job is to supply an approximate $1/H_c(f)$ so the product is Nyquist again — restoring a property that was designed in and then taken away.

</details>

## Connections

- **Backward:** the transversal equalizer is the FIR filter of [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) with data-driven taps; the MMSE solution is the least-squares projection of [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md).
- **Forward:** [3.1](03-01-signal-space-matched-filter.md) shows the receive filter has a *second* job — maximizing SNR — and that the two jobs are separable; [4.5](04-05-multiplexing-multiple-access.md) shows OFDM's way of sidestepping equalization entirely by making each subchannel narrow enough to be flat.
- **Sideways:** LMS is stochastic gradient descent — the same algorithm, with the same step-size trade-off, that trains a neural network in [`deep-learning`](../../deep-learning/syllabus.md). Widrow's 1960 adaptive filter and today's SGD are literally the same update rule.
