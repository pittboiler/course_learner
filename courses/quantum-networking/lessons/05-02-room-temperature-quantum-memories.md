# Quantum Networking · Lesson 5.2: Room-temperature quantum memories

> ⏱ ~15 min · Module 5: Memories and repeaters · Builds on: [5.1](05-01-why-memories.md), [3.1](03-01-rubidium-vapor-vs-crystal-sources.md), [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [photonics 1.2](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md) · Unlocks: [5.3](05-03-bell-state-measurement-and-swapping.md), [5.5](05-05-repeater-generations-and-platform-bets.md)

## Why this matters

[5.1](05-01-why-memories.md) showed that memories turn a network's waiting time from $1/p^2$ toward $1/p$, provided something can hold a photon's quantum state while the rest of the network catches up. This lesson opens that box. Qunnect's QU-MEM is a glass cell of rubidium gas at 57 °C, with no cryostat and no laser cooling. It stores a 795 nm photon by briefly turning it into a ripple in the atoms' spins. By the end you can explain how that works, read the memory paper's figures of merit, and say exactly what "room temperature" buys and what it costs.

## The idea

Light in a medium slows down, and in a carefully prepared atomic gas it can slow almost to a stop. Picture a relay race. The photon arrives carrying a baton (its quantum state). A strong **control** laser lets the photon hand the baton to the atoms. The atoms hold it as a pattern in their spins, the photon is gone, and nothing is radiated. Later the control laser comes back on, the atoms hand the baton to a new photon, and it leaves in the original direction with the original polarization.

Why don't the atoms simply absorb the photon and scatter it in a random direction? Because of interference. With the control on, an atom has two routes up to its excited state: absorb the photon, or absorb a control photon from a different ground state. In the right superposition those two routes cancel exactly. The atom cannot be excited, so the gas becomes transparent to the photon. That is **electromagnetically induced transparency** (EIT). Turning the control off adiabatically moves the photon's state entirely into that non-absorbing superposition.

## The formal version

**The Λ system.** Three levels of rubidium-87: $|g\rangle=5S_{1/2},F{=}2$ (where optical pumping parks the atoms), $|s\rangle=5S_{1/2},F{=}1$ (the storage level, 6.8 GHz away), and $|e\rangle=5P_{1/2}$. The photon couples $g\leftrightarrow e$ with Rabi frequency $\Omega_p$; the control couples $s\leftrightarrow e$ with $\Omega_c$ (Rabi frequencies as in [photonics 1.2](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md)). In the rotating frame, with one-photon detuning $\Delta$ and the two fields on **two-photon resonance**,

$$H=-\frac{\hbar}{2}\big(\Omega_p|e\rangle\langle g|+\Omega_c|e\rangle\langle s|+\text{h.c.}\big)+\hbar\Delta\,|e\rangle\langle e|.$$

It has an eigenstate with zero energy and no excited-state amplitude:

$$|D\rangle=\frac{\Omega_c|g\rangle-\Omega_p|s\rangle}{\sqrt{\Omega_c^2+\Omega_p^2}}.$$

In words: the two drives pull $|g\rangle$ and $|s\rangle$ toward $|e\rangle$ with equal and opposite amplitudes, so the atom stays dark whatever $\Delta$ is. A two-photon detuning breaks this exactly. Qunnect's memory runs both fields about 700 MHz below resonance; only their difference must match the 6.8 GHz splitting. Its cycle (pumping off at −20 ns, write at 0, read at 55 ns, pumping back on at 150 ns) is drawn in the Picture.

**The dark-state polariton.** With $N$ atoms and one photon, the dark state is a mix of "photon in the field, all atoms in $g$" and "no photon, one shared spin flip":

$$|D\rangle\propto\Omega_c\,|G;1_{\text{photon}}\rangle-g_0\sqrt N\,|S;0_{\text{photon}}\rangle.$$

Here $g_0$ is the single-atom coupling and $|S\rangle$ is one excitation shared symmetrically across all atoms (a **spin wave**). This excitation travels at group velocity $v_g=c/(1+g_0^2N/\Omega_c^2)$ (Fleischhauer and Lukin, stated not derived). In words: a strong control makes the polariton mostly light and fast; dimming the control makes it mostly spin and slow; at $\Omega_c=0$ it is entirely spin wave and stands still. That is storage. See [dark-state polariton](../reference.md#dark-state-polariton) and [EIT storage](../reference.md#eit-storage).

**Why warm vapor works at all.** At 57 °C rubidium moves at about 178 m/s along the beam, which smears the 795 nm line over a Doppler width of about 526 MHz. But storage needs only two-photon resonance, and photon and control are both 795 nm light co-propagating. Each atom sees both Doppler shifts almost equally, leaving a residual set by the 6.8 GHz ground splitting: about 9.5 kHz. The motion that wrecks a one-photon transition nearly cancels for the Λ.

What does limit storage is **atoms leaving the beam**. The spin wave lives on the atoms inside a beam about 1 mm wide; atoms that drift out take their share of it with them. The 2 Torr neon buffer gas turns free flight into a slow random walk, which gives a [coherence time](../reference.md#coherence-time) of 2.6 µs. Wider beams, more buffer gas or anti-relaxation wall coatings stretch it; near-millisecond storage has been reported elsewhere with an alkane-coated cell.

**Noise sets fidelity.** A 5 ns control pulse at 410 mW carries about $8\times10^9$ photons at nearly the signal's wavelength; the signal is at most one photon. The filter chain needs about 114 dB (a factor $2.5\times10^{11}$) of suppression, plus polarization separation. What leaks through, or is scattered by atoms, lands in every polarization channel equally: white noise. Under the Werner model the paper writes

$$F=1-\frac{3}{2(\text{SNR}+2)}.$$

In words: this is [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)'s $F=1-\tfrac{3}{2(1+g_{SI})}$ with $g_{SI}=\text{SNR}+1$, since SNR counts signal above the noise floor and $g_{SI}$ counts signal plus floor ([fidelity from g_SI](../reference.md#fidelity-from-gsi)).

**Figures of merit.** Rate any memory on these ([quantum memory figures of merit](../reference.md#quantum-memory-figures-of-merit)). Qunnect's values are from the 2025 paper:

| Metric | Qunnect warm vapor (2025) |
|---|---|
| Internal efficiency | 9.5% (weak laser pulses), 5.2% (source photons) |
| Coherence time | 2.6 ± 0.3 µs, diffusion-limited |
| Utility time (fidelity above threshold) | 1–3 µs |
| Bandwidth | photons up to about $2\pi\times266$ MHz |
| Noise | SNR 95 normalized to one input photon |
| Photon–memory fidelity | 86.5% tomography lower bound; up to 90.2% predicted at a narrow window; 80% at 1,200 pairs/s (7.7 ns window) |
| Multimode | two polarization rails (a qubit); no temporal multiplexing reported |
| Ready time | optical pumping under 1 µs (cold-atom reloading about 100 ms, per the paper) |

How it compares (storage times are typical orders of magnitude, not records; fidelities are the paper's own comparison, from different experiments):

| Platform | Runs at | Typical storage | Photon–memory fidelity cited |
|---|---|---|---|
| Warm Rb vapor | 57 °C cell | µs (ms with coated cells) | 90.2%, no conversion |
| Cold atoms | laser-cooled, vacuum | ms | 89.7%, with conversion |
| Rare-earth crystals | cryostat, a few K | µs to ms, longer with spin storage | 86% |
| NV/SiV in diamond | cryostat | ms to s (nuclear spins) | NV 77%, with conversion |
| Trapped ions | laser-cooled, vacuum | seconds | 96%, with conversion |

"With conversion" means a [frequency converter](../reference.md#quantum-frequency-conversion) to reach telecom, which costs efficiency and adds noise.

## Picture

![Left: a Lambda diagram for rubidium-87 with the ground level g at F equals 2 and the storage level s at F equals 1, 6.8 GHz apart, both coupled to the excited level 5P1/2 through a virtual level 700 MHz below it, by a weak 795 nm photon from g and a strong control field from s. Right: a timeline in nanoseconds. Optical pumping switches off at minus 20. A short control pulse ends as the photon arrives at 0, the photon is held as a spin wave, the control returns at 55 and releases the photon, and optical pumping resumes at 150.](assets/05-02-fig1.svg)

*The write–read cycle from the memory paper. The control's falling edge writes; its rising edge reads. Between them the photon is not light at all.*

## Worked examples

**Example 1 (SNR to fidelity, and fidelity over time).** With source photons and a 2.82 ns window the paper measures SNR $=9.8$:

$$F=1-\frac{3}{2(11.8)}=0.873.$$

Tomography gave a lower bound of 86.5%: the one-number noise model works. Now let the signal decay as $e^{-t/\tau}$ with $\tau=2.6$ µs while the noise floor stays put, so $\text{SNR}(t)=9.8\,e^{-t/\tau}$. The [Werner CHSH threshold](../reference.md#chsh-threshold-for-werner-states) $F=0.780$ needs $\text{SNR}=\tfrac{3}{2(0.220)}-2=4.83$, reached at

$$t=2.6\ln\frac{9.8}{4.83}=1.84\ \mu\text{s}.$$

That lands inside the paper's 1–3 µs utility time. Notice the shape: fidelity barely moves at first (0.827 after 1 µs), then falls off a cliff as signal sinks into the floor.

**Example 2 (unpacking "1,200 pairs per second").** The paper quotes a success probability per trigger of $1.65\times10^{-3}$ alongside the 7.7 ns operating point, and the source sends $2.1\times10^5$ telecom triggers per second. Detected coincidences:

$$2.1\times10^5\times1.65\times10^{-3}=347\ \text{/s}.$$

The paper then corrects for analyzer transmission (0.90), SPAD efficiency (0.65) and the unanalyzed VV half (0.5):

$$\frac{347}{0.90\times0.65\times0.5}=1185\approx1.2\times10^3\ \text{/s}.$$

(This reconstruction is ours; it matches the headline.) So 1,200 is pairs **leaving the memory**, not clicks on a detector; a customer's detectors would see fewer. At that window $F=0.80$, giving $S=2.07$ for a Werner state: a Bell violation, barely.

## Watch out

- **You might think coherence time is how long the memory is useful.** Useful time ends when fidelity crosses your protocol's threshold, which happens before the signal is gone (1.84 µs against $\tau=2.6$ µs above). Ask for utility time at a stated threshold.
- **You might think the 9.5% efficiency is the system number.** It is internal and with laser pulses. With real source photons it is 5.2%, and filters and detectors multiply it down further (Problem 2).
- **You might think warm atoms fail because they move fast.** Doppler shifts nearly cancel for co-propagating Λ fields. The killer is atoms *leaving the beam*, which is why the fixes are geometric (beam size, buffer gas, wall coatings), not cooling.

## Business lens

Room temperature is a real operational advantage: a cell, lasers and filters fit in a rack, need no cryostat or vacuum chamber, and are ready again in under a microsecond. That is why QU-MEM can ship inside Carina. The paper also beats the conversion problem outright: source and memory share rubidium-87, so its 90.2% needs no frequency converter, while the cold-atom, NV and ion comparisons all used one.

The price is storage time. A 2.6 µs memory can wait for a herald over about 260 m with the herald returning from the far end ([1.2](01-02-the-stack-in-one-picture.md)), or 520 m with a midpoint station ([5.1](05-01-why-memories.md)). A 10 km link's herald takes 50–100 µs, 19 to 38 coherence times. So today's memory is enough for **local** jobs (synchronizing photons from two sources at one node, buffering for a swap) and not yet for a metro repeater. A 1 ms memory would cover a far-end herald over about 100 km, which is why coated cells are the roadmap item to ask about. And "room temperature" means the memory, not the stack: the telecom photon still goes to a cryogenic [SNSPD](../reference.md#snspd-vs-spad).

## One-liner

> A warm rubidium cell stores a photon by EIT, switching the control off to freeze it into a dark spin wave: field-ready and conversion-free, but holding for microseconds while cryogenic rivals hold for milliseconds or more.

## Problems

**P1 (🟢)** Model the memory's efficiency as $\eta(t)=\eta_0e^{-t/\tau}$ with $\tau=2.6$ µs and $\eta_0=5.2\%$ (take this as the efficiency at zero storage time). (a) What fraction of $\eta_0$ remains after 1 µs and after 5 µs? (b) What are the absolute efficiencies at those times?

**P2 (🟡)** A photon enters the memory. It is retrieved with internal efficiency 5.2%, then passes the noise filter (transmission 35%) and reaches a SPAD (efficiency 65%). Ignore every other loss. (a) What is the probability that it is retrieved and detected? (b) On average, how many photons must enter the memory per detected retrieved photon?

**P3 (🔴, practical)** A salesperson says: "Our memory works at room temperature, so it's better." Write a steelman in at most two sentences and a rebuttal in at most two sentences.

<details>
<summary>Solutions</summary>

**P1** (a) $e^{-1/2.6}=0.681$ after 1 µs; $e^{-5/2.6}=0.146$ after 5 µs.

(b) $5.2\%\times0.681=3.54\%$ and $5.2\%\times0.146=0.76\%$. After 5 µs, fewer than 1 in 130 stored photons comes back, before any filter or detector loss.

---

**P2** (a) Independent losses multiply:

$$P=0.052\times0.35\times0.65=0.0118.$$

(b) $1/0.0118=84.5$, so about 85 photons in per detected photon out. Including the light–matter interface's 66% transmission would push it to about 128. This is why a memory's quoted internal efficiency is far from the system's.

---

**P3** *(practical)*

**Accept:** a steelman that names a concrete operational advantage, and a rebuttal that names storage time (or efficiency) as the limiting figure of merit, with "better" depending on the job.

**Must hit:**

- Steelman: no cryostat or laser cooling, so rack-mountable, cheaper to run, near-instantly ready, and natively matched to the rubidium source (no frequency conversion).
- Rebuttal: "better" depends on the job; at about 2.6 µs it cannot wait for a herald across a metro link, while cryogenic and laser-cooled platforms store for milliseconds or longer.
- Optional: detectors in the system may still be cryogenic.

**Model answer:** Steelman: "With no cryostat or laser cooling, our memory fits in a standard rack, is ready again within a microsecond, and pairs natively with our rubidium source with no frequency converter. That makes it the easiest memory to deploy in a real fiber hub." Rebuttal: "Better depends on the job: today it holds a photon for about 2.6 µs, enough to synchronize sources at one node but not to wait for a herald across even a few kilometers. Platforms that need cryostats or cooled atoms store for milliseconds or longer, which is what a long-distance repeater needs."

</details>

## Flashback

**From Lesson [4.3](04-03-reading-the-gothamq-result.md) (Reading the GothamQ result):** A test link's source shows CAR $=14$, measured without polarization analysis, and its compensator holds the channel at $f_c=0.98$. Model the source output as a Werner state. (a) Find $g_{SI}$ and the source fidelity $F_s$. (b) Find the delivered fidelity $F$, and say which of source and channel owns more of the infidelity. (c) Treat the delivered state as Werner. What lower and upper bounds would a GothamQ-style two-basis (H/V and D/A) analysis report?

<details>
<summary>Solution</summary>

(a) Accidentals spread over four polarization combinations, so $g_{SI}=1+2\times14=29$. Then

$$F_s=1-\frac{3}{2(1+29)}=1-\frac{3}{60}=0.950.$$

(b) The Werner parameter is $a=(4\times0.95-1)/3=0.933$. Infidelities add:

$$1-F=a(1-f_c)+(1-F_s)$$

$$1-F=0.933\times0.02+0.050=0.0187+0.050=0.0687,$$

so $F=0.931$. The source owns 0.050 of the 0.069, about three quarters; perfect compensation would only lift $F$ to 0.950.

(c) The delivered Werner parameter is $p=(4\times0.9313-1)/3=0.908$. The bounds are $p\le F\le(1+p)/2$, so the report would read $0.908\le F\le0.954$. The true value, 0.931, sits at the midpoint, and the gap is $\tfrac23(1-F)=0.046$.

</details>

## Connections

- **Backward:** the Rabi frequencies and detuning come from [photonics 1.2](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md). The 795 nm photon and its narrow linewidth come from the source in [3.1](03-01-rubidium-vapor-vs-crystal-sources.md). The SNR-to-fidelity rule is [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)'s $g_{SI}$ model. The need for storage comes from [5.1](05-01-why-memories.md).
- **Forward:** [5.3](05-03-bell-state-measurement-and-swapping.md) uses retrieved photons in a Bell-state measurement, where their bandwidth and timing must match photons from another node. [5.5](05-05-repeater-generations-and-platform-bets.md) places warm vapor against the other platforms in the table above.
- **Sideways:** EIT is two-path destructive interference, the same logic as the Hong–Ou–Mandel dip in [photonics 4.1](../../photonics-quantum-optics/lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md): two indistinguishable routes to one outcome cancel, so the outcome never happens.
