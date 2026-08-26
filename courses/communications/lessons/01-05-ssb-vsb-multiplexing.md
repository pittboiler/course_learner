# Communication Systems · Lesson 1.5: SSB, VSB and multiplexing

> ⏱ ~15 min · Module 1: Signals, Noise & Analog Modulation · Builds on: [1.4 Amplitude modulation — DSB and AM](01-04-amplitude-modulation-dsb-am.md), [`fourier-analysis` 2.2](../../fourier-analysis/lessons/02-02-properties-derivative-rule.md) · Unlocks: [1.6 Angle modulation](01-06-angle-modulation-fm-pm.md), [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

[1.4](01-04-amplitude-modulation-dsb-am.md) ended with an uncomfortable fact: DSB-SC spends $2W$ hertz to send a message that is only $W$ hertz wide, and gets *no SNR benefit* for the extra bandwidth. Half the transmitted spectrum is a mirror image of the other half — pure redundancy, because the message is real.

Deleting that redundancy halves the bandwidth for free. Since bandwidth is the scarcest resource in radio, that is the single most valuable move in analog communications: it is why a transatlantic cable could carry thousands of simultaneous telephone calls, and why the shortwave bands are still full of SSB voice traffic. The tool that makes it work — the Hilbert transform and the analytic signal — is also the standard way to represent *any* bandpass signal, and you will use it again in Module 3.

## The idea

Look at the DSB spectrum: the block around $+f_c$ has a lower sideband (frequencies $f_c-W$ to $f_c$) and an upper sideband ($f_c$ to $f_c+W$). For a real message, $M(-f)=M^*(f)$, so the lower sideband is the conjugate-mirror of the upper. Everything the message says is in either one. **Throw one away.**

The obvious implementation is to build the DSB signal and then run it through a very sharp bandpass filter. That works when the message has a hole at DC — voice does, since there is nothing below about 300 Hz — because the filter then has a finite transition band to fall in. It fails badly for video or data, which have significant energy right down to DC: the filter would need infinitely steep skirts at $f_c$ itself.

Two responses. The elegant one is **phasing**: build the single sideband directly, with no filtering, by adding a quadrature copy of the message that cancels the unwanted sideband. That requires a device that shifts every frequency component by $-90°$ — the [Hilbert transform](../reference.md#hilbert-transform-and-analytic-signal). The pragmatic one is **vestigial sideband**: don't cut sharply at $f_c$; instead let the filter roll off gradually, keeping a small "vestige" of the unwanted sideband, and shape the roll-off so that what you keep on one side exactly compensates what you lost on the other. Analog television used VSB for 60 years for exactly this reason.

Once you can pack a message into $W$ hertz anywhere you like, you can stack many messages side by side in frequency and send them down one wire or one beam. That is **frequency-division multiplexing**, and it is the ancestor of every "channel" you have ever tuned to.

## The formal version

**Hilbert transform.** For a signal $m(t)$,

$$\hat m(t) = m(t) * \frac{1}{\pi t} = \frac{1}{\pi}\,\mathrm{P.V.}\!\!\int_{-\infty}^{\infty}\frac{m(\tau)}{t-\tau}\,d\tau, \qquad \hat M(f) = -j\,\mathrm{sgn}(f)\,M(f).$$

*In words: pass every positive-frequency component through a $-90°$ phase shift and every negative one through $+90°$, changing no amplitudes.* It is an all-pass filter that rotates phase, nothing more. Two facts you will use: $\widehat{\cos} = \sin$, $\widehat{\sin} = -\cos$, and applying it twice gives $-m(t)$ (since $(-j\,\mathrm{sgn} f)^2 = -1$).

**SSB signals.**

$$s_{\rm SSB}(t) = \frac{A_c}{2}\Big[m(t)\cos(2\pi f_ct) \mp \hat m(t)\sin(2\pi f_ct)\Big],$$

with the **minus** sign giving the **upper** sideband and the **plus** sign the **lower**. *In words: the in-phase branch carries the message, the quadrature branch carries its 90°-shifted twin, and the two interfere destructively over exactly one sideband.*

**Bandwidth and power:** $B_T = W$ (half of DSB), and the transmitted power is half DSB's for the same $A_c$ — you deleted half the spectrum. Crucially, the **figure of merit is still 1**: SSB matches baseband SNR, exactly as DSB does. So SSB is DSB with half the bandwidth and half the power at identical performance. There is no catch except receiver complexity: SSB still requires coherent detection, and it is *less* forgiving of frequency error than DSB (see P2).

**Coherent detection of SSB.** Multiply by $\cos(2\pi f_ct)$ and low-pass:

$$s_{\rm SSB}(t)\cos(2\pi f_ct) = \frac{A_c}{4}m(t) + \big[\text{terms at }2f_c\big] \;\longrightarrow\; \frac{A_c}{4}m(t).$$

The quadrature term $\hat m\sin\cos = \tfrac12\hat m\sin(4\pi f_ct)$ lands entirely at $2f_c$ and is filtered out — which is why the Hilbert twin costs nothing at the receiver.

**Analytic signal (the reason to care beyond SSB).** Define

$$m_+(t) = m(t) + j\hat m(t) \quad\Longleftrightarrow\quad M_+(f) = 2M(f)u(f),$$

the **pre-envelope**: a complex signal with no negative-frequency content. Then upper-sideband SSB is simply $\mathrm{Re}\{m_+(t)e^{j2\pi f_ct}\}$ — a single spectral block slid to $f_c$. More generally, any bandpass signal can be written

$$s(t) = \mathrm{Re}\big\{\tilde s(t)e^{j2\pi f_ct}\big\} = s_I(t)\cos(2\pi f_ct) - s_Q(t)\sin(2\pi f_ct),$$

where $\tilde s = s_I + js_Q$ is the **complex envelope** (or baseband equivalent). *In words: strip the carrier off and keep a complex baseband signal that contains all the information.* This representation is how every digital modulation in Module 3 is actually described, and how every software-defined radio actually computes.

**VSB.** Filter the DSB signal with $H(f)$ that rolls off gradually through $f_c$. Distortionless recovery under coherent detection requires the **complementary-symmetry** condition

$$H(f_c+f) + H(f_c-f) = \text{constant}, \qquad |f|\le W .$$

*In words: whatever fraction of a frequency you attenuate on one side of the carrier, you must keep the complementary fraction on the other, so the two add back to a flat response after downconversion.* Bandwidth is $B_T = W + f_v$, where $f_v$ is the vestige width — a little more than SSB, far less than DSB, with a filter you can actually build.

**Frequency-division multiplexing (FDM).** Give user $k$ a carrier $f_k$, with the carriers spaced by at least the per-user bandwidth plus a **guard band**:

$$f_{k+1}-f_k \ge B_T + B_{\rm guard}.$$

The classic telephone hierarchy stacked 12 SSB voice channels (each 4 kHz allocated for a 3.1 kHz message) into a 48 kHz "group", five groups into a 240 kHz "supergroup", and so on up. Guard bands exist because real filters have finite skirts; the fraction of spectrum spent on them is the price of separability, and [4.5](04-05-multiplexing-multiple-access.md) shows how OFDM reduces it to nearly zero by using orthogonality instead of separation.

## Picture

![A four-row spectrum comparison at the same scale. Row 1: message M(f) of width W. Row 2: DSB-SC, showing upper and lower sidebands around f_c, total width 2W, with the lower sideband shaded as redundant. Row 3: USB-SSB, only the upper sideband, width W. Row 4: VSB, the upper sideband plus a small vestige below f_c, with the complementary roll-off drawn as two shaded triangles that sum to a constant.](assets/01-05-fig1.svg)

Four ways to spend spectrum on the same message. Row 2's shaded block is the redundancy; row 3 deletes it outright; row 4 keeps a sliver, with the two shaded wedges showing the complementary-symmetry condition — the piece kept below $f_c$ is exactly the piece lost above it, so after downconversion they add back to a flat response.

## Worked examples

**Example 1 (SSB of a tone, both ways).** Let $m(t) = A_m\cos(2\pi f_mt)$ with $f_m = 1$ kHz, and $f_c = 100$ kHz.

*Phasing method.* $\hat m(t) = A_m\sin(2\pi f_mt)$. Upper sideband:

$$s(t) = \frac{A_c}{2}\Big[A_m\cos(2\pi f_mt)\cos(2\pi f_ct) - A_m\sin(2\pi f_mt)\sin(2\pi f_ct)\Big] = \frac{A_cA_m}{2}\cos\big(2\pi(f_c+f_m)t\big),$$

by the cosine addition formula. A single tone at 101 kHz — one line, as promised. Flip the sign and you get $\cos(2\pi(f_c-f_m)t)$, a single line at 99 kHz: the lower sideband.

*Filtering method.* DSB-SC gives lines at 99 and 101 kHz. A bandpass filter passing above 100 kHz keeps only 101 kHz. Same answer, but note what the filter faced: it must pass 101 kHz and reject 99 kHz, a 2 kHz transition. For a 1 kHz tone that is hard; for a message with content down to 50 Hz it would be a 100 Hz transition at 100 kHz — a fractional bandwidth of $10^{-3}$, which is why the phasing method exists.

*Detection with a phase error.* Multiply by $\cos(2\pi f_ct+\phi)$ and low-pass:

$$\frac{A_cA_m}{2}\cos(2\pi(f_c+f_m)t)\cos(2\pi f_ct+\phi) \;\longrightarrow\; \frac{A_cA_m}{4}\cos(2\pi f_mt-\phi).$$

The recovered tone has full amplitude but a phase error $\phi$. For general messages every component is shifted by the *same* $\phi$ — which is *not* a time delay (that would shift each component by an amount proportional to its frequency). The result is **phase distortion**: harmless for speech, where the ear ignores phase, ruinous for data or video. That asymmetry is exactly why SSB became the voice standard and never the video one.

**Example 2 (an FDM budget).** Twelve telephone channels, each band-limited to 3.4 kHz, are to be SSB-multiplexed with 600 Hz guard bands, starting at 60 kHz.

Per-channel allocation: $3.4 + 0.6 = 4.0$ kHz. Total:

$$B_{\rm total} = 12\times 4.0 = 48\ \text{kHz}, \quad\text{occupying } 60\ \text{to } 108\ \text{kHz}.$$

Channel $k$ ($k=1..12$) uses carrier $f_k = 60 + 4(k-1)$ kHz with the *lower* sideband suppressed, so channel $k$ occupies $[60+4(k-1),\ 63.4+4(k-1)]$ kHz, and the 600 Hz gap sits above it.

Now compare the alternatives at the same 48 kHz:

| Scheme | Per channel | Channels in 48 kHz |
|---|---|---|
| SSB | 4.0 kHz | **12** |
| DSB-SC | 7.4 kHz | 6 |
| AM | 7.4 kHz + wasted carrier power | 6 |

SSB doubles the capacity of the same cable, at the same power per channel, with the same SNR. That is the entire commercial argument, and it is why the 1918 Bell System transatlantic carrier program was an SSB program.

## Watch out

- **You might think SSB is worse than DSB in noise because it has "only one sideband."** Both have figure of merit 1. DSB collects twice the signal amplitude from its two sidebands (power ×4) but also twice the noise bandwidth (power ×2), netting ×2 — which is exactly cancelled by SSB needing only half the noise bandwidth to begin with. SSB gets the same SNR in half the spectrum at half the power.
- **You might think the Hilbert transform delays the signal.** It shifts every component by $-90°$ regardless of frequency, which is *not* a delay: a delay shifts phase in proportion to frequency. $\hat m$ is not $m$ arriving late; it is a genuinely different waveform with the same magnitude spectrum.
- **You might think a small frequency error in SSB just shifts the pitch a little.** It does exactly that — and that is the problem. Every component moves by the *same* $\Delta f$, so harmonics at $200, 400, 600$ Hz become $250, 450, 650$ Hz and are no longer harmonically related. Beyond about 20 Hz of error, voice sounds unmistakably alien. This is why SSB radios have a fine-tuning knob and DSB broadcast receivers do not.
- **You might think VSB is a compromise that costs SNR.** With a complementary-symmetric filter and coherent detection it is distortionless, and its noise performance sits between SSB's and DSB's essentially in proportion to its bandwidth. What it costs is a modest bandwidth increase over SSB — bought with a filter you can actually manufacture.

## One-liner

> A real message makes its two sidebands mirror images, so send one: SSB halves DSB's bandwidth and power at identical SNR, and the Hilbert transform is how you build it without an impossible filter.

## Problems

**P1 (🟢)** A message occupies 300 Hz to 3400 Hz and modulates a 2 MHz carrier. (a) Give the exact frequency ranges occupied by the USB and by the LSB. (b) What transition bandwidth must a sideband filter provide, and what is that as a fraction of the carrier frequency? (c) Repeat (b) if the message instead runs from DC to 3400 Hz, and say why that case forces the phasing method.

**P2 (🟡)** An upper-sideband SSB signal carrying $m(t)$ is demodulated with a local oscillator at $f_c + \Delta f$. (a) Show the recovered signal is $m(t)$ with every frequency component shifted by $-\Delta f$ (i.e. the spectrum is translated, not scaled). (b) A voice has harmonics at 200, 400, 600 Hz. With $\Delta f = 50$ Hz, what comes out? (c) Contrast with DSB under the same $\Delta f$ (see [1.4](01-04-amplitude-modulation-dsb-am.md) P2) — which artifact is which, and why does SSB's not produce a warble?

**P3 (🔴)** A VSB filter has $H(f) = 0$ for $f < f_c - f_v$, rises linearly from 0 to 1 across $f_c-f_v \le f\le f_c+f_v$, and equals 1 for $f_c+f_v < f \le f_c+W$ (positive frequencies; $f_v < W$). (a) Verify the complementary-symmetry condition. (b) Give the transmission bandwidth. (c) Analog NTSC television used $W = 4.2$ MHz and $f_v = 0.75$ MHz. Compute $B_T$ and compare it to what DSB and SSB would have needed; comment on why SSB was not an option for video.

<details>
<summary>Solutions</summary>

**P1** (a) USB: $[f_c + 300,\ f_c+3400] = [2{,}000{,}300,\ 2{,}003{,}400]$ Hz. LSB: $[f_c-3400,\ f_c-300] = [1{,}996{,}600,\ 1{,}999{,}700]$ Hz.

(b) To keep the USB and reject the LSB, the filter must be in full passband by $f_c+300$ and full stopband by $f_c-300$. Transition bandwidth:

$$\Delta f = 2\times 300 = 600\ \text{Hz}.$$

As a fraction of the carrier: $600/(2\times 10^6) = 3\times 10^{-4}$. Demanding, but buildable with a crystal or mechanical filter — this is why 455 kHz and 9 MHz SSB filters are standard parts.

(c) With content down to DC the two sidebands **touch** at $f_c$: the transition bandwidth is 0, requiring an infinitely sharp filter. No filter can do this, so the sideband must be cancelled rather than filtered — the phasing (Hilbert) method, or the Weaver third method. This is the practical dividing line: SSB by filtering needs a spectral hole at DC.

**P2** (a) USB signal is $s(t) = \mathrm{Re}\{m_+(t)e^{j2\pi f_ct}\}$ with $m_+$ the analytic signal (positive frequencies only). Demodulating with $e^{-j2\pi(f_c+\Delta f)t}$ and keeping the low-pass part gives $m_+(t)e^{-j2\pi\Delta f t}$, whose spectrum is $M_+(f+\Delta f)$: the whole positive-frequency block translated down by $\Delta f$. Taking the real part, a message component at $f_m$ emerges at $f_m-\Delta f$. So the output spectrum is the input spectrum **shifted**, not scaled.

(b) $200,400,600 \to 150, 350, 550$ Hz. Their ratios are now $1 : 2.33 : 3.67$ instead of $1:2:3$ — inharmonic, hence the characteristic "monotone robot" quality of a mistuned SSB receiver.

(c) DSB with frequency error multiplies by $\cos(2\pi\Delta f t)$, which *splits* each tone into a pair at $f_m\pm\Delta f$ and produces a periodic amplitude null — the audible warble. SSB *translates* each tone by a single $-\Delta f$ with no splitting and no null, because only one sideband is present, so there is no second copy to beat against. Same cause, two different artifacts: DSB warbles, SSB detunes.

**P3** (a) Write $f = f_c + x$ for $|x|\le f_v$. Over the ramp, $H(f_c+x) = \dfrac{x+f_v}{2f_v}$. Then

$$H(f_c+x)+H(f_c-x) = \frac{x+f_v}{2f_v} + \frac{-x+f_v}{2f_v} = \frac{2f_v}{2f_v} = 1 .$$

Constant ✓. For $f_v < x \le W$, $H(f_c+x)=1$ and $H(f_c-x)=0$, summing to 1 ✓. The condition holds across the whole band.

(b) Positive-frequency support runs from $f_c-f_v$ to $f_c+W$, so

$$B_T = W + f_v .$$

(c) $B_T = 4.2 + 0.75 = 4.95$ MHz, versus DSB's $2W = 8.4$ MHz and SSB's $4.2$ MHz. VSB recovered 41% of DSB's bandwidth for a filter that is entirely manufacturable.

SSB was not an option for two reasons, both fatal. First, video has substantial energy right down to DC (the average brightness of the picture *is* the DC term), so the sidebands touch at the carrier and no filter can separate them — exactly the situation of P1(c). Second, the phasing method's residual amplitude and phase errors produce phase distortion, and while the ear ignores phase, the eye does not: phase errors in video smear edges and produce visible ringing. VSB threads both needles — it needs only a gentle filter, and its complementary symmetry makes it distortionless. (The same argument survived into digital broadcasting: the ATSC standard uses 8-VSB.)

</details>

## Flashback

**From Lesson 1.2 (Random processes and the PSD):** A WSS process with PSD $S_X(f)$ passes through an ideal bandpass filter that keeps only $f_c < |f| < f_c+W$ — the "single sideband" operation, applied to noise. If $S_X(f) = N_0/2$ (white), find (a) the output noise power and (b) the output autocorrelation at $\tau=0$. (c) If instead the filter kept both sidebands, $f_c-W<|f|<f_c+W$, how would the noise power change?

<details>
<summary>Solution</summary>

(a) The passband occupies $W$ hertz at positive frequencies and $W$ at negative, total $2W$ of integration at height $N_0/2$:

$$P_N = \frac{N_0}{2}\times 2W = N_0W.$$

(b) $R_Y(0) = P_N = N_0W$ by definition — the autocorrelation at zero lag *is* the mean square, which for a zero-mean process is the power.

(c) Twice the passband, so twice the noise power, $2N_0W$: a 3 dB increase. This is the noise half of the SSB-versus-DSB comparison — DSB admits 3 dB more noise, and recovers exactly 3 dB more signal by combining its two sidebands coherently, which is why the figures of merit tie.

</details>

## Connections

- **Backward:** SSB is [1.4](01-04-amplitude-modulation-dsb-am.md)'s DSB with the redundancy identified in [1.1](01-01-signals-and-spectra-recalled.md) (real signals have conjugate-symmetric spectra) removed.
- **Forward:** the complex-envelope representation $s = \mathrm{Re}\{\tilde s e^{j2\pi f_ct}\}$ introduced here is the language of [3.4](03-04-qpsk-and-m-psk.md) and [3.5](03-05-qam-and-union-bound.md), where $s_I$ and $s_Q$ become the two axes of a constellation diagram. FDM is the ancestor of FDMA and OFDM in [4.5](04-05-multiplexing-multiple-access.md).
- **Sideways:** the Hilbert transform and analytic signal are the same construction as the Kramers–Kronig relations in optics — causality in time forces a Hilbert-pair relation between the real and imaginary parts of a response, which is why absorption and refraction spectra determine each other.
