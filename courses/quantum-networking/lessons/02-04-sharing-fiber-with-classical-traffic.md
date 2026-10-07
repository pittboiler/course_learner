# Quantum Networking · Lesson 2.4: Sharing fiber with classical traffic

> ⏱ ~15 min · Module 2: Photons in real fiber · Builds on: [2.1 Loss and the telecom bands](02-01-loss-and-the-telecom-bands.md) · Unlocks: [3.2 Detectors, noise, and the brightness–fidelity tradeoff](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [6.2 The network stack and timing](06-02-the-network-stack-and-timing.md)

## Why this matters

A telco owns two kinds of fiber: **dark fiber** (unused strands, scarce and expensive to rent) and **lit fiber** (strands already carrying classical traffic). A quantum network that needs its own dark strand on every route is a niche product; one that can ride the operator's lit fiber scales with the operator's footprint. The obstacle is noise. One classical channel launches about $10^{16}$ photons per second, your quantum channel carries about $10^5$, and the glass leaks a tiny, broadband fraction of the first into the second. This lesson sizes that leak and shows the four knobs that tame it.

## The idea

Fiber glass is not perfectly passive. Its molecules vibrate, and a strong beam can trade energy with those vibrations: a classical photon scatters off the glass and comes out at a *different* colour. That is **spontaneous Raman scattering**. It spreads classical light over tens of THz on both sides of the laser line, travelling both forward and backward. A filter cannot stop it, because the noise lands in exactly the band your quantum photon uses.

Two facts make it manageable. First, the scattering is **lopsided**. Losing energy to the glass (Stokes, longer wavelength) is easy, but gaining energy from it (anti-Stokes, shorter wavelength) needs a thermal vibration to already exist. So put the quantum channel on the short-wavelength side: O-band quantum (1324 nm), C-band classical (1530–1565 nm). That is the plan [2.1](02-01-loss-and-the-telecom-bands.md) motivated. Second, the noise is **flat and random** in frequency and time, while your photon is narrow in both. Every factor by which you narrow the filter or the detection window cuts the noise by that factor and costs the signal nothing, as long as you stay wider than the photon.

## The formal version

**Stokes vs anti-Stokes.** A classical photon at frequency $\nu_c$ scatters off a glass vibration of frequency $\Omega$. Stokes light emerges at $\nu_c-\Omega$ (the photon *creates* a vibration), anti-Stokes at $\nu_c+\Omega$ (it *absorbs* one). With $\bar n=1/(e^{h\Omega/k_BT}-1)$ the thermal occupation of that vibration (Bose–Einstein, [stat-mech 4.2](../../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md)), $h$ Planck's constant, $k_B$ Boltzmann's constant and $T$ the fiber temperature:

$$\frac{\text{anti-Stokes}}{\text{Stokes}}=\frac{\bar n}{\bar n+1}=e^{-h\Omega/k_BT}.$$

*In words: the glass must donate heat to make anti-Stokes light, and at room temperature it rarely has a high-frequency vibration to donate.*

For 1324 nm (226.43 THz) against 1550 nm (193.41 THz), $\Omega=33.0$ THz, so $h\Omega/k_BT=5.28$ at 300 K and the ratio is $0.0051\approx1/197$. Near silica's main Raman peak (about 13 THz) the ratio is only $0.125$. (The *shape* of the Raman spectrum also falls off beyond its peak, an extra help this formula doesn't count.) See [spontaneous Raman scattering](../reference.md#spontaneous-raman-scattering).

**A toy noise model.** Treat the noise rate reaching the quantum detector as

$$R_\text{noise}=\frac{P}{h\nu_c}\,\rho\,L_\text{eff}\,\Delta\lambda,$$

$$L_\text{eff}=\frac{1-e^{-\alpha L}}{\alpha}.$$

Here $P$ is the total classical launch power, $P/h\nu_c$ its photon flux, $\rho$ a Raman coefficient (fraction scattered into the quantum band per km of fiber per nm of filter), $\Delta\lambda$ the filter width in nm, $L$ the span length, and $\alpha$ the classical light's attenuation in nepers per km ($\alpha=\alpha_\text{dB}/4.343$). In this lesson **$\rho=1\times10^{-10}$ per km per nm is an assumed, illustrative value**, not a measured constant; the real one depends on the wavelength pair, the fiber and the direction, and you measure it on the customer's fiber. The model also ignores the noise's own loss on the way to the detector, so it errs high. See [Raman noise toy model](../reference.md#raman-noise-toy-model).

*In words: noise grows with launch power, with filter width, and with fiber length, but only until the classical light has faded.*

That last clause is the [effective length](../reference.md#effective-length). At 0.2 dB/km, $\alpha=0.0461$ per km and $L_\text{eff}$ saturates at $1/\alpha=21.7$ km, however long the span: past that point the classical light is too weak to matter.

**Noise per window, and what it does to fidelity.** The receiver only listens in a [coincidence window](../reference.md#coincidence-window) of width $\tau$ around each [herald](../reference.md#heralding) from the partner photon. With detector efficiency $\eta_d$ and link transmission $\eta$ ([decibels and transmission](../reference.md#decibels-and-transmission)), the per-window probabilities are

$$S=\eta\,\eta_d,\qquad N=\eta_d\,R_\text{noise}\,\tau .$$

A noise photon has random polarization, so a click from it yields the maximally mixed $I/4$ when paired with the herald. Conditioned on a click (ignoring double clicks and dark counts, which [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) adds), the pair is a [Werner state](../reference.md#werner-state) with

$$p=\frac{S}{S+N},\qquad F=\frac{1+3p}{4}=1-\frac34\,\frac{N}{S+N}.$$

*In words: whatever fraction of your clicks is Raman noise, three quarters of it comes straight off your fidelity.*

$N\propto P\,\Delta\lambda\,\tau\,L_\text{eff}$: four knobs, each linear.

**The other leaks.** *Four-wave mixing* between classical channels makes new tones at $2\nu_i-\nu_j$, close to the C-band; it hurts C-band quantum channels and barely touches the O-band. *Filter leakage* is brute force: 1 mW at 1550 nm is $7.80\times10^{15}$ photons/s, so even 100 dB of isolation lets $7.8\times10^5$ per second through, and reaching 100 per second takes 139 dB. Qunnect's memory paper faces the same problem from its own control laser and reports about 114 dB of suppression. *Time-division multiplexing* handles light you cannot filter. Qunnect's APC probe is a 1324 nm laser within 1 nm of the photons, so it is time-multiplexed through optical switches and shuttered by an AOM when not compensating. When you can't separate in frequency, separate in time.

## Picture

![Schematic spectrum on a log scale from 1260 to 1700 nanometres. C-band classical channels sit near 1550 nanometres. A strong Stokes tail extends to longer wavelengths and a weaker anti-Stokes tail falls toward shorter wavelengths. The O-band quantum photon at 1324 nanometres sits far out on the weak anti-Stokes tail inside a narrow dashed filter.](assets/02-04-fig1.svg)

The curve's shape is schematic; the asymmetry is the Boltzmann factor above. The quantum photon sits where the noise density is lowest, and the dashed filter decides how much of it you collect.

## Worked examples

**Example 1 (one channel, one span).** One C-band channel at 1 mW, 25 km at 0.2 dB/km, 1 nm filter, 1 ns window, $\rho=10^{-10}$ per km per nm.

$L_\text{eff}=(1-e^{-0.0461\times25})/0.0461=14.85$ km. Photon flux $=7.80\times10^{15}$/s. Then

$$R_\text{noise}=7.80\times10^{15}\times10^{-10}\times14.85\times1=1.16\times10^{7}\ \text{s}^{-1},$$

or $0.0116$ noise photons per 1 ns window before detection. One-hundredth of a photon sounds small. Example 2 shows why it isn't.

**Example 2 (a narrowband source on a lit span).** A Qunnect-style link: 25 km of O-band fiber at 0.33 dB/km (8.25 dB) plus 2 dB of components, so 10.25 dB and $\eta=0.0944$. The SNSPD has $\eta_d=0.90$, so $S=0.0850$. The same fiber carries 16 C-band channels at 1 mW each (16 mW).

*Design A (1 nm, 1 ns):* $R_\text{noise}=1.85\times10^8$/s, $N=0.167$. Noise outnumbers signal two to one ($S/N=0.51$), and $F=0.503$: barely entangled.

*Design B (0.05 nm, 0.5 ns):* 20 × narrower filter and 2 × shorter window cut noise 40×: $N=0.00417$, $S/N=20.4$, noise fraction $0.047$, $F=1-\tfrac34(0.047)=0.965$.

Why Design B is cheap for Qunnect: its photons have a linewidth below 1 GHz, which at 1324 nm is $\Delta\lambda=\lambda^2\Delta\nu/c=0.0058$ nm ([linewidth to wavelength width](../reference.md#linewidth-to-wavelength-width)). A 0.05 nm filter is still 8.6 times wider than the photon, so it keeps essentially all the signal. A broadband crystal source with roughly 1 nm photons would throw away about 95% of its signal in the same filter. The window has a floor too: the SNSPD (about 90 ps) and SPAD (about 350 ps) jitters combine to about 0.36 ns, so 0.5 ns is near the practical limit.

## Watch out

- You might think C-band traffic 200 nm away can't reach an O-band photon. But Raman noise spans tens of THz, and it starts from $10^{16}$ photons/s, so even a $10^{-10}$ fraction is millions per second.
- You might think tighter filtering is always free. But a filter narrower than the photon, or a window shorter than the detector jitter, cuts the signal too. The noise gain is free only down to the photon's own width, which is why a narrowband source is a coexistence asset.
- You might think a lit long-haul route works like a metro span. But in-line optical amplifiers can't help a single photon ([1.4](01-04-the-loss-wall.md): no-cloning) and are built for the C-band, so the quantum channel must be routed around every one. Coexistence is easiest on unamplified metro spans.

## Business lens

Dark versus lit fiber is the difference between "rent a scarce dedicated strand per customer" and "ride fiber the operator already lights". Only the second scales with a telco's footprint, so coexistence is a sales requirement, not a physics nicety. That is why the January 2026 Qunnect–Deutsche Telekom T-Labs result matters: teleportation over a 30 km loop of *live* commercial fiber in Berlin. Qunnect's design choices line up with this. The O-band quantum channel sits on the weak anti-Stokes side of C-band traffic, and the narrowband photons allow tight filters. The APC probe itself is time-multiplexed rather than filtered.

The honest version: coexistence is a budget, not a yes/no. Noise scales with the operator's launch power and channel count. The operator controls both, and both rise as the ring gets busier. A customer will ask "what happens to fidelity when we add channels?" The right answer is a measured curve on their fiber, not a lab number. If traffic flows the opposite way, the receiver collects backward Raman from where the classical light is strongest.

## One-liner

> Raman scattering leaks a tiny broadband fraction of classical traffic into the quantum band, so you put the quantum channel on the weak anti-Stokes side and filter it in frequency and time down to the photon's own width.

## Problems

**P1 (🟢)** A receiver narrows its filter from 1 nm to 0.1 nm and its coincidence window from 1 ns to 0.3 ns. The photon is narrower than both, and the detector jitter is below 0.3 ns. By what factor does the Raman noise per window fall? Express it in dB too.

**P2 (🟡)** Use the toy model with $\rho=10^{-10}$ per km per nm, classical attenuation 0.2 dB/km, and $7.80\times10^{15}$ photons/s per mW. A 20 km lit span carries 8 C-band channels at 1 mW each. The quantum path has $20\times0.33+1.4=8.0$ dB of loss, the detector efficiency is 0.90 for signal and noise alike, the filter is 0.2 nm and the window 0.5 ns. Noise photons have random polarization, so the delivered state is Werner with $p=S/(S+N)$.
(a) Find $S$, $N$ and the fidelity $F$. Does the link violate CHSH (threshold $F>0.780$)?
(b) The operator raises total launch power tenfold. Recompute $F$ and answer the same question.

**P3 (🔴, practical)** A telco's CTO asks: "Can we put your entanglement link on our busiest metro ring?" In at most five sentences, answer: name the wavelength plan, what you need to know about their power, your filtering, and what you would measure before promising a fidelity.

<details>
<summary>Solutions</summary>

**P1** Noise per window is proportional to $\Delta\lambda\,\tau$, so the factor is

$$\frac{1}{0.1}\times\frac{1}{0.3}=10\times3.33=33.3,$$

leaving 3% of the noise. In dB: $10\log_{10}33.3=15.2$ dB. The signal is unchanged because the photon fits inside both the filter and the window.

---

**P2** (a) $L_\text{eff}=(1-e^{-0.0461\times20})/0.0461=13.07$ km. Noise rate:

$$R_\text{noise}=8\times7.80\times10^{15}\times10^{-10}\times13.07\times0.2=1.63\times10^{7}\ \text{s}^{-1}.$$

Per window: $N=0.90\times1.63\times10^7\times0.5\times10^{-9}=0.00734$.

Signal: $\eta=10^{-0.8}=0.158$, so $S=0.158\times0.90=0.143$. Then $S+N=0.150$, the noise fraction is $N/(S+N)=0.049$, and

$$F=1-\tfrac34(0.049)=0.963.$$

That is well above 0.780, so the link violates CHSH (Werner $S_\text{CHSH}=2\sqrt2\,p=2.69$).

(b) Tenfold power gives tenfold noise: $N=0.0734$. Then $S+N=0.216$ and the noise fraction is $0.340$, so $p=0.660$ and

$$F=1-\tfrac34(0.340)=0.745.$$

That is below 0.780, so there is no CHSH violation. The state is still entangled ($F>\tfrac12$) but useless for a device-checked key. The same hardware went from good to marginal purely because the operator added traffic.

---

**P3** *(practical)*

**Accept:** any answer of five sentences or fewer that commits to an O-band-below-C-band wavelength plan, asks for the launch power and channel count, names narrow spectral plus temporal filtering with high isolation, and proposes a live measurement before quoting a number.

**Must hit:**

- Wavelength plan: quantum in the O-band on the weak anti-Stokes side, classical stays in the C-band, and the quantum channel avoids or bypasses in-line amplifiers.
- Power: Raman noise scales linearly with total launch power, so you need their per-channel power and channel count (and headroom for growth).
- Filtering: narrow spectral filter matched to the narrowband photon, tight coincidence window, and enough isolation (well over 100 dB) against the classical channels.
- Measurement: noise counts at the quantum receiver with traffic on and off, then delivered fidelity under live load, including traffic direction.

**Model answer:** "Probably yes, because we run the quantum channel in the O-band, on the weak side of your C-band traffic's Raman noise, and route it around your amplifiers. The noise we pick up scales with your total launch power, so we need your per-channel power, channel count and growth plans. Our photons are narrow enough for very tight spectral and timing filters, with well over 100 dB of isolation from your channels. Before quoting a fidelity, we would measure the noise at our receiver with your traffic on and off, then run the link under live load. You'd get a fidelity-versus-load curve on your own ring, not a lab number."

</details>

## Flashback

**From Lesson [2.2](02-02-polarization-as-a-qubit.md) (Polarization as a qubit):** A stressed splice acts like a quarter-wave plate with its axis horizontal ($t=0$). Use the course convention: H at the north pole, D on $+x$, L on $+y$, R on $-y$. (a) A D-polarized photon enters. Give the output Jones vector (up to global phase) and its sphere point. (b) The same element sits on Bob's photon of $|\Phi^+\rangle$. What is the fidelity? (c) Would a check of H/V coincidences alone catch the problem? One sentence.

<details>
<summary>Solution</summary>

(a) Axis at $t=0$ gives $\hat n=(\sin0,0,\cos0)=+z$, and $\delta=\pi/2$:

$$U=e^{-i\pi\sigma_z/4}=\begin{pmatrix}e^{-i\pi/4}&0\\0&e^{i\pi/4}\end{pmatrix}.$$

On $|D\rangle=(1,1)^T/\sqrt2$ this gives $e^{-i\pi/4}(1,i)^T/\sqrt2=|L\rangle$ up to global phase: a quarter-turn about $+z$ carries $+x$ to $+y$.

(b) The rotation angle is $\theta=90^\circ$, so $F=\cos^2(45^\circ)=0.5$, whatever the axis.

(c) No: a rotation about $z$ only puts a relative phase on $|VV\rangle$, so every H/V coincidence stays perfect, while the D/A correlation drops to zero (each of DD and DA now has probability 0.25); you need a second basis to see it.

</details>

## Connections

- **Backward:** the band plan and dB arithmetic come from [2.1](02-01-loss-and-the-telecom-bands.md). The noise-to-fidelity step is the Werner mixing of [1.3](01-03-fidelity-and-rate.md). Heralding and dark counts come from [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md).
- **Forward:** [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) adds the source's own noise (multi-pair emission and accidentals) to the Raman noise here, in the same per-window bookkeeping. [6.2](06-02-the-network-stack-and-timing.md) needs the timing that makes sub-nanosecond windows possible. [4.2](04-02-compensation-as-a-control-loop.md) uses the time-multiplexed probe.
- **Sideways:** the Stokes/anti-Stokes asymmetry is detailed balance with a Bose–Einstein occupation, as in [stat-mech 4.2](../../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md). The same physics powers Raman thermometry, which reads a fiber's temperature from the anti-Stokes/Stokes ratio.
