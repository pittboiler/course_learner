# Quantum Networking · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course follows one entangled pair from a rubidium source, through buried fiber, compensation, a memory and a swap, to the thing a customer spends it on, and scores every box in two currencies: fidelity and rate. Mid-problem you most likely want the **Werner-state rules** (fidelity, thresholds, swaps), the **counting chain** (accidentals, CAR, $g_{SI}$, fidelity bounds), or the **headline numbers** below with their operating points attached.

## Headline numbers

Every published Qunnect number the lessons use, with the numbers it must travel with. Quoting one without its partner is the most common error a skeptic will catch ([4.3](lessons/04-03-reading-the-gothamq-result.md)).

**GothamQ paper:** Craddock, Lazenby, Bello Portmann, Sekelsky, Flament, Namazi, *PRX Quantum* 5, 030330 (2024); arXiv:2404.08626.

| Number | What it means precisely | Lesson |
|---|---|---|
| 34 km | loop of buried, leased commercial fiber in New York City (Brooklyn and Queens); starts and ends at one site, so no inter-site timing was needed | [1.2](lessons/01-02-the-stack-in-one-picture.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| 14.45 dB | fiber loss of the loop, at the 1324 nm photon's wavelength; about 0.425 dB/km, against a typical O-band datasheet 0.33 | [2.1](lessons/02-01-loss-and-the-telecom-bands.md) |
| 17.46 dB | total loss from source to the telecom measurement station; the elements are input paddles 0.74, APC injector 0.22, optical switch 0.52, APC compensator and switch 1.54 dB (fiber plus elements matches to rounding) | [2.1](lessons/02-01-loss-and-the-telecom-bands.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| about $5\times10^5$ pairs/s | highest end-to-end rate; **fidelity only bounded above 0.84** there (source-limited, about 0.88 expected) | [1.3](lessons/01-03-fidelity-and-rate.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| about 0.99 | fidelity at **about $2\times10^4$ pairs/s**, the low-rate end, consistent with the APC's 99% thresholds; 25 times less rate than the 0.84 point | [1.3](lessons/01-03-fidelity-and-rate.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| 0.937(7) and 0.967(4) | lower and upper fidelity **bounds**, averaged over the 15-day run on the compensated path, at **about $2\times10^5$ pairs/s** after the fiber (efficiency-corrected; raw about $1.2\times10^5$/s); source-limited at about 0.95 | [3.3](lessons/03-03-proving-a-link-is-entangled.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| 99.84% | uptime over **more than 15 days** at that $2\times10^5$ pairs/s point; 34.6 min of downtime in total, about 2.3 min a day, about 32 ms per 20 s cycle on average (our inference) | [1.2](lessons/01-02-the-stack-in-one-picture.md), [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| every ~20 s, 99%, 30–1000 ms | APC cadence; trigger threshold and optimization threshold both 99% (measured on the classical probe light against a stored reference, not on the pairs); length of one compensation cycle | [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| $10^4$/s and about 120 kHz | polarimeter measurement rate and EEOM modulation bandwidth in the APC compensator | [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| within 1 nm | the APC probe is a 1324 nm laser within 1 nm of the photons, on the same fiber, time-multiplexed through optical switches and shuttered by an AOM | [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md), [4.1](lessons/04-01-learning-the-fibers-rotation.md) |
| H, D, R | the three probe polarizations used to characterize the fiber (1260–1350 nm tunable laser, 0 to 3 fibers in series) | [4.1](lessons/04-01-learning-the-fibers-rotation.md) |
| 90%, about 90 ps | SNSPD (cryogenic) efficiency and jitter, 1324 nm arm | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| 68%, about 350 ps | Si SPAD efficiency and jitter, 795 nm arm; combined jitter $\sqrt{350^2+90^2}\approx361$ ps | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [6.2](lessons/06-02-the-network-stack-and-timing.md) |
| 780 + 1367 → 1324 + 795 nm | pump and coupling in, telecom signal and atomic idler out, in $\lvert\Phi^+\rangle$; linewidth below 1 GHz | [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md) |
| eqs S4–S14 | two-basis fidelity bounds from eight counts (HH, HV, VH, VV, DD, DA, AD, AA), no tomography; eight-count set repeated about every four minutes. **S7 and S12 as printed are missing a factor of 2** (see [two-basis fidelity bounds](#two-basis-fidelity-bounds)); the reported numbers are unaffected | [3.3](lessons/03-03-proving-a-link-is-entangled.md) |
| eq S18 | Werner source model $F=1-3/(2(1+g_{SI}))$ | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |

**Memory paper:** Wang, Craddock, Mendoza, Sekelsky, Flament, Namazi, arXiv:2503.11564 (March 2025). Telecom photon entangled with a room-temperature Rb-87 vapor memory.

| Number | What it means precisely | Lesson |
|---|---|---|
| up to 90.2% | photon–memory fidelity **predicted** by the paper's Werner model at a narrow detection window, "at the cost of a lower rate"; not a tomography result and not tied to the 2.82 ns window | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 86.5% | tomography **lower bound** at a 2.82 ns window, where the measured SNR is 9.8 (model value 0.873) | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 1,200 pairs/s at 80% | photon–memory Bell pairs leaving the memory per second, with the wider **7.7 ns** window; corrected for analyzer transmission, SPAD efficiency and the unanalyzed half | [5.2](lessons/05-02-room-temperature-quantum-memories.md), [6.3](lessons/06-03-beyond-keys.md) |
| 2.6 ± 0.3 µs | coherence time (1/e of retrieval efficiency), limited by atoms diffusing out of the ~1 mm beam; light covers about 520 m of fiber in that time | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 1–3 µs | utility time, depending on the fidelity threshold | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 9.5% and 5.2% | internal storage efficiency with weak laser pulses, and with real source photons | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| SNR 95 | signal-to-noise normalized to one input photon | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| up to $2\pi\times266$ MHz | storage bandwidth | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 57 °C, 2 Torr Ne, dual rail | cell temperature, buffer gas, each polarization stored separately | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 5 ns, about 410 mW per rail; about 114 dB | control pulse at the cell; filter suppression needed against it | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 77.5% | the paper's CHSH $S=2$ threshold **under its own noise model**; the Werner value used in this course is 0.780 | [1.3](lessons/01-03-fidelity-and-rate.md) |
| 89.7%, 77%, 86%, 96% | the paper's comparison: cold atoms (with frequency conversion), NV centers (with conversion), rare-earth crystals, trapped ions (with conversion) | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 90%, 94 ps; 65%, 350 ps | SNSPD for the telecom photon; SPAD for the retrieved 795 nm photon | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| 500 kHz | global clock for memory-only runs; source–memory runs were triggered locally by the telecom click | [6.2](lessons/06-02-the-network-stack-and-timing.md) |

## Notation

Several letters are reused with different meanings; collisions are flagged here and again in [Symbols that collide](#symbols-that-collide).

| Symbol | Means | First used |
|---|---|---|
| $\lvert H\rangle,\lvert V\rangle,\lvert D\rangle,\lvert A\rangle,\lvert R\rangle,\lvert L\rangle$ | horizontal, vertical, diagonal, antidiagonal, right- and left-circular polarization | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| $\lvert\Phi^+\rangle$ | the target Bell pair $(\lvert HH\rangle+\lvert VV\rangle)/\sqrt2$, first letter Alice's photon | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| $\rho$ | two-photon density matrix (in 2.4 also the Raman coefficient) | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| $F$ | fidelity to $\lvert\Phi^+\rangle$: probability the pair passes a perfect-pair test | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| ebit, cbit | one Bell pair; one classical bit | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| $F_\text{tel}$ | average fidelity of a qubit teleported through the pair | [1.1](lessons/01-01-what-a-quantum-network-delivers.md) |
| $f$ | attempt rate (source firings or channel uses per second) | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $p$ | per-attempt success probability in 1.2 and 5.1; **Werner good fraction** from 1.3 on | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $p_\text{pair}$, $\eta_\text{ch}$, $\eta_\text{det}$ | pair-emission chance per attempt, channel transmission, detector efficiency | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $R_h$, $\bar t$ | herald rate $fp$ and mean time between heralds | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $v$ | light speed in fiber, about $2\times10^8$ m/s (5 µs per km) | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $L$ | link length (total chain length in 5.4–5.5) | [1.2](lessons/01-02-the-stack-in-one-picture.md) |
| $I/4$ | maximally mixed two-qubit state: pure white noise | [1.3](lessons/01-03-fidelity-and-rate.md) |
| $S$ | CHSH value (in 2.4 also signal per window) | [1.3](lessons/01-03-fidelity-and-rate.md) |
| $\rho^{T_B}$ | partial transpose on Bob's indices | [1.3](lessons/01-03-fidelity-and-rate.md) |
| $e$ | QBER (in 5.3, $e_i$ is a link's infidelity $1-F_i$) | [1.3](lessons/01-03-fidelity-and-rate.md) |
| $\alpha$ | fiber attenuation in dB/km (nepers/km in $L_\text{eff}$) | [1.4](lessons/01-04-the-loss-wall.md) |
| $\eta$ | transmission: probability a photon survives | [1.4](lessons/01-04-the-loss-wall.md) |
| $L_\text{att}$ | attenuation length, $e$-fold loss distance | [1.4](lessons/01-04-the-loss-wall.md) |
| $C(\eta)$, $R_\text{max}$ | PLOB capacity per channel use; per second | [1.4](lessons/01-04-the-loss-wall.md) |
| $\ell$, $\ell_\text{tot}$ | loss in dB of one element; of the whole path | [2.1](lessons/02-01-loss-and-the-telecom-bands.md) |
| $a,b$ | Jones amplitudes (in 3.2 and 4.3, $a$ is the Werner entangled fraction) | [2.2](lessons/02-02-polarization-as-a-qubit.md) |
| $\vec s=(s_x,s_y,s_z)$ | Stokes vector = Bloch vector of the polarization | [2.2](lessons/02-02-polarization-as-a-qubit.md) |
| $t$ | lab angle of a linear polarization or waveplate axis | [2.2](lessons/02-02-polarization-as-a-qubit.md) |
| $\delta$ | waveplate retardance (4.1: frame error; 6.2: clock offset; 6.3: blind measurement angle) | [2.2](lessons/02-02-polarization-as-a-qubit.md) |
| $\hat n$, $\theta$, $U$ | rotation axis, rotation angle, the fiber's $SU(2)$ matrix | [2.2](lessons/02-02-polarization-as-a-qubit.md) |
| $\kappa$ | fiber rotation per nm of detuning (rad/nm) | [2.3](lessons/02-03-drift-in-buried-fiber.md) |
| $\tau$ | DGD in 2.3; coincidence window from 2.4; memory coherence time in 5.1–5.5 | [2.3](lessons/02-03-drift-in-buried-fiber.md) |
| $\sigma_\lambda$, $\Delta\nu$, $\Delta\lambda$ | photon spectral width in nm; linewidth in Hz; the same width in nm | [2.3](lessons/02-03-drift-in-buried-fiber.md) |
| $\nu_c$, $\Omega$, $\bar n$ | classical light frequency, glass vibration frequency, its thermal occupation | [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md) |
| $P$, $L_\text{eff}$ | classical launch power; effective Raman length | [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md) |
| $\eta_d$, $N$ | detector efficiency; noise clicks per window (3.3: basis total; 6.3: number of probes) | [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md) |
| $R_1,R_2$, $R_\text{acc}$, $R_\text{true}$ | singles rates; accidental and true coincidence rates | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| $r$ | source pair rate (6.1: key fraction; 6.3: random bit) | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| CAR, $g_{SI}$ | coincidence-to-accidental ratio; HH over HV coincidences | [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| $C_{ij}$, $P_{ij}$, $\rho_{ij}$ | counts in setting $ij$, their basis-normalized fraction, density-matrix elements (order HH, HV, VH, VV) | [3.3](lessons/03-03-proving-a-link-is-entangled.md) |
| $V_Z$, $V_X$ | visibilities in the H/V and D/A bases (5.3: HOM visibility; 6.3: GHZ contrast) | [3.3](lessons/03-03-proving-a-link-is-entangled.md) |
| $R$ | $3\times3$ rotation of Stokes vectors (also the R polarization, and rates) | [4.1](lessons/04-01-learning-the-fibers-rotation.md) |
| $M$, $M'$ | input and output probe frames (columns) | [4.1](lessons/04-01-learning-the-fibers-rotation.md) |
| $D$ | drift constant in rad²/s (not the D polarization, not the dark state $\lvert D\rangle$) | [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| $T$, $T_c$, $F_{th}$ | interval between corrections; check cadence; threshold fidelity | [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| $t_\text{down}$, $t_\text{max}$ | switched-out time per check; longest cycle | [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| $f_c$, $F_s$ | channel fidelity after compensation; source fidelity | [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| $R_\text{cc}$, $r_\text{src}$, $\eta_\text{link}$, $\eta_\text{tel}$, $\eta_{795}$ | counted coincidences; pair rate into the telecom path; link transmission; the two arms' detection efficiencies | [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| $U$ (uptime) | fraction of time delivering (also the fiber unitary) | [4.3](lessons/04-03-reading-the-gothamq-result.md) |
| $N_1,N_2$ | rounds until each link first succeeds | [5.1](lessons/05-01-why-memories.md) |
| $t_h$ | heralding round-trip time ($L/v$, midpoint station) | [5.1](lessons/05-01-why-memories.md) |
| $t_\text{store}$, $M$, $p_M$ | storage needed; modes per round; success with $M$ modes | [5.1](lessons/05-01-why-memories.md) |
| $\lvert g\rangle,\lvert s\rangle,\lvert e\rangle$ | Λ-system ground, storage and excited levels | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| $\Omega_p$, $\Omega_c$, $\Delta$ | probe and control Rabi frequencies; one-photon detuning | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| $g_0$, $v_g$ | single-atom coupling; polariton group velocity | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| SNR | memory signal-to-noise per input photon | [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| $P_\text{swap}$, $v$ | swap success probability; wave-packet overlap amplitude | [5.3](lessons/05-03-bell-state-measurement-and-swapping.md) |
| $n$, $L_0$, $p_0$, $P_s$ | nesting levels (5.5: number of links); link length; per-attempt link success; swap success | [5.4](lessons/05-04-repeater-chains-and-distillation.md) |
| $P_\text{succ}$, $q$, $N_k$ | distillation success; $(1-F)/3$; raw pairs per output after $k$ rounds | [5.4](lessons/05-04-repeater-chains-and-distillation.md) |
| $t_{op}$, $\eta_0$, $\varepsilon$, $Q$ | local operation time; per-hop transmission; erasure probability; quantum capacity | [5.5](lessons/05-05-repeater-generations-and-platform-bets.md) |
| $h(x)$ | binary entropy | [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md) |
| $s$, $q$, $K$ | sifted fraction; Z-basis bias; key rate | [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md) |
| $w_i$, $p_P$, $F_P$ | link weight $-\ln p_i$; path good fraction; path fidelity | [6.2](lessons/06-02-the-network-stack-and-timing.md) |
| $r_\text{min}$, $R_P$ | slowest link's rate; path rate | [6.2](lessons/06-02-the-network-stack-and-timing.md) |
| $y$, $\sigma$, $\Phi$, $c(\delta)$ | fractional clock-rate offset; jitter standard deviation; standard normal CDF; captured fraction | [6.2](lessons/06-02-the-network-stack-and-timing.md) |
| $G$, $c$ | remote gates per second; raw pairs per distilled pair | [6.3](lessons/06-03-beyond-keys.md) |
| $\phi$, $\Delta\phi$, $T_2$ | phase to estimate; its error; single-probe dephasing time | [6.3](lessons/06-03-beyond-keys.md) |

## Definitions

Ordered by first appearance. Each entry: plain English first, then the statement, then where it is taught. Products have their own section: see [Carina product stack](#carina-product-stack).

### Fidelity to a Bell state

The probability that a delivered pair would pass a perfect "are you $\lvert\Phi^+\rangle$?" test; pure noise already scores 1/4.

$$F=\langle\Phi^+|\rho|\Phi^+\rangle$$

In the HH, HV, VH, VV basis:

$$F=\tfrac12(\rho_{11}+\rho_{44})+\operatorname{Re}\rho_{14}$$

For one photon rotated by $\theta$ about any axis, $F=\cos^2(\theta/2)$, so $F\ge0.99$ needs $\theta\le0.200$ rad (11.5°). An APC metric that averages H, D, R probe overlaps reads $(2+\cos\theta)/3$, so pair infidelity is 1.5 times probe infidelity (0.99 on the probes is 0.985 on the pair; an assumption about the metric, which the paper does not give).

*Introduced:* [1.1](lessons/01-01-what-a-quantum-network-delivers.md); formalized [1.3](lessons/01-03-fidelity-and-rate.md); rotation form [2.2](lessons/02-02-polarization-as-a-qubit.md), [2.3](lessons/02-03-drift-in-buried-fiber.md); matrix form [3.3](lessons/03-03-proving-a-link-is-entangled.md); probe form [4.2](lessons/04-02-compensation-as-a-control-loop.md)

### Teleportation fidelity

One Bell pair plus two classical bits moves one qubit, and a noisy pair moves it imperfectly; it beats the classical "measure and phone" score of 2/3 exactly when the pair is entangled.

$$F_\text{tel}=\frac{1+p}{2}=\frac{2F+1}{3}$$

$F_\text{tel}>2/3$ iff $F>1/2$. Note: 2/3 is a teleportation fidelity, not a pair fidelity.

*Introduced:* [1.1](lessons/01-01-what-a-quantum-network-delivers.md); derived [1.3](lessons/01-03-fidelity-and-rate.md)

### Stages of a quantum internet

Wehner, Elkouss and Hanson (*Science*, 2018) rank networks by the one capability each stage adds.

1. Trusted-repeater networks (every node trusted)
2. Prepare-and-measure (end-to-end QKD)
3. Entanglement distribution (end-to-end pairs, measured on arrival)
4. Quantum memory (pairs stored until used)
5. Few-qubit fault-tolerant (nodes correct errors)
6. Quantum computing networks

Commercial QKD sits at stages 1–2; Qunnect's deployed Carina systems are stage 3; the 2025 memory paper is a laboratory step toward stage 4.

*Introduced:* [1.1](lessons/01-01-what-a-quantum-network-delivers.md)

### Quantum network stack

The boxes a pair passes through, regrouped as layers that each offer a service to the one above, all riding on a classical control plane.

Hardware view: source, fiber, compensation, memory, swap, sync (plus frequency lock). Layer view (Dahlberg, Wehner and co-workers, 2019): physical (attempts, heralds) → link (heralded pair between neighbours, with fidelity target and deadline) → network (swapping, routing) → transport (teleporting qubits) → application.

*Introduced:* [1.1](lessons/01-01-what-a-quantum-network-delivers.md) (forward), [1.2](lessons/01-02-the-stack-in-one-picture.md); layers [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Heralding

A classical "it worked" message announcing that a link attempt produced a pair; it is a few copyable bits, never the qubit.

$$p=p_\text{pair}\,\eta_\text{ch}\,\eta_\text{det}$$

$$R_h=fp,\quad \bar t=\frac{1}{fp}$$

Attempts until success are geometric with mean $1/p$. The herald travels at fiber light speed (about 5 µs per km; 4.9 µs at $n=1.47$), so it sets the round time of memory-assisted links; see [heralding round-trip time](#heralding-round-trip-time). Same idea as a heralded single photon in photonics 3.6.

*Introduced:* [1.2](lessons/01-02-the-stack-in-one-picture.md); [1.4](lessons/01-04-the-loss-wall.md), [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md), [5.1](lessons/05-01-why-memories.md)

### Bell-state measurement

A joint measurement that projects two photons onto one of the four Bell states; at a middle station it joins two links into one (QU-SWAP).

Linear optics: 50:50 beam splitter, a polarizing beam splitter on each output port, four detectors.

| Click pattern | Identified state |
|---|---|
| one click per port, crossed polarizations | $\Psi^-$ |
| both in one port, crossed polarizations | $\Psi^+$ |
| both in one detector | $\Phi^\pm$, not told apart |

Heralded success is $\tfrac12\eta_d^2$. It needs indistinguishable photons (colour, timing, polarization).

*Introduced:* [1.2](lessons/01-02-the-stack-in-one-picture.md); built [5.3](lessons/05-03-bell-state-measurement-and-swapping.md)

### Automated polarization compensation

APC: send bright classical probe light of known polarization through the same fiber at the qubit wavelength, measure how the fiber rotated it, and undo that rotation, automatically and repeatedly.

Qunnect's version: an injector (polarizer plus EEOM) at one end, a compensator (fast polarimeter at $10^4$/s, EEOM at about 120 kHz) at the other; probe pulses time-multiplexed with the photons through optical switches and AOM-shuttered. It is a sampled feedback loop: plant = fiber, sensor = polarimeter, actuator = EEOM. Graded by fidelity held over time (GothamQ: 99.84% uptime over 15 days). Its cycle: [compensation cycle](#compensation-cycle).

*Introduced:* [1.2](lessons/01-02-the-stack-in-one-picture.md); loop [4.2](lessons/04-02-compensation-as-a-control-loop.md)

### SNSPD vs SPAD

The two single-photon detectors in Qunnect's papers: the superconducting nanowire is fast and efficient but cryogenic; the silicon avalanche diode is room temperature but slower, less efficient and blind to telecom light.

| | SNSPD | Si SPAD |
|---|---|---|
| Used for | 1324 nm photon | 795 nm photon |
| GothamQ | 90%, about 90 ps | 68%, about 350 ps |
| Memory paper | 90%, 94 ps | 65%, 350 ps |
| Temperature | a few kelvin | room temperature or mildly cooled |

Silicon's 1.12 eV bandgap cuts off near 1107 nm; a 1324 nm photon carries 0.94 eV. The telecom alternative, an InGaAs SPAD, has far more dark counts and longer dead times.

*Introduced:* [1.2](lessons/01-02-the-stack-in-one-picture.md); [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md)

### Quantum memory figures of merit

A memory is not scored by storage time alone; seven numbers decide whether it is useful for a job.

| Metric | Qunnect warm vapor (2025) |
|---|---|
| Storage vs need | coherence 2.6 µs, utility 1–3 µs; need about $t_h(1+1/p)$ |
| Efficiency | 9.5% internal (laser pulses), 5.2% (source photons) |
| Bandwidth | up to $2\pi\times266$ MHz |
| Noise | SNR 95 per input photon |
| Fidelity | 86.5% tomography bound; up to 90.2% predicted; 80% at 1,200 pairs/s, 7.7 ns window |
| Modes | two polarization rails; no temporal multiplexing reported |
| Ready time | optical pumping under 1 µs (cold-atom reload about 100 ms) |

Platform choice also turns on frequency conversion and operating temperature. Interconnect check (6.3): 1,200 pairs/s at 0.80 is 8.3 times short of $10^4$/s, and 2.6 µs is far below the 100 µs between remote gates.

*Introduced:* [1.2](lessons/01-02-the-stack-in-one-picture.md); storage need [5.1](lessons/05-01-why-memories.md); full table [5.2](lessons/05-02-room-temperature-quantum-memories.md); platforms [5.5](lessons/05-05-repeater-generations-and-platform-bets.md); interconnect [6.3](lessons/06-03-beyond-keys.md)

### Werner state

The course-wide noise model: with probability $p$ a perfect pair, otherwise white noise.

$$\rho_W=p\,|\Phi^+\rangle\langle\Phi^+|+(1-p)\frac{I}{4}$$

$$F=\frac{1+3p}{4},\quad p=\frac{4F-1}{3}$$

In the Bell basis: weight $F$ on $\Phi^+$ and $(1-F)/3$ on each other Bell state. Drift averaged over time gives $p=e^{-2Dt}$ (4.2). Pauli errors on a Werner pair pass one-for-one into a remote gate (6.3).

*Introduced:* [1.3](lessons/01-03-fidelity-and-rate.md); used throughout

### Peres-Horodecki criterion

A two-qubit state is entangled exactly when transposing one side's indices produces a negative eigenvalue.

For a Werner state the partial transpose has eigenvalue $(1-3p)/4$ on $\lvert\Psi^-\rangle$ and $(1+p)/4$ three times, so it is entangled iff $p>1/3$, i.e. $F>1/2$.

*Introduced:* [1.3](lessons/01-03-fidelity-and-rate.md)

### CHSH threshold for Werner states

Noise dilutes the Tsirelson value linearly, so a Werner pair violates CHSH once more than about 71% of its pairs are good.

$$|S|_\text{max}=2\sqrt2\,p$$

$$|S|>2\iff F>\frac{1+3/\sqrt2}{4}\approx0.780$$

The memory paper uses 77.5% under its own noise model; say which you use. In memory terms (Werner model) $F>0.780$ needs SNR above 4.83, and $F=0.80$ gives $S=2.07$. The threshold applies to Werner noise, **not** to a rotated pure state (a rotated pair is still maximally entangled). A measured $S>2$ is device-independent; a fidelity bound is not.

*Introduced:* [1.3](lessons/01-03-fidelity-and-rate.md); [2.2](lessons/02-02-polarization-as-a-qubit.md), [3.3](lessons/03-03-proving-a-link-is-entangled.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md)

### Rate-fidelity tradeoff

Pump a pair source harder and true pairs grow linearly while multi-pair accidentals grow quadratically, so fidelity falls as delivered rate rises.

$$1-F\approx\tfrac34\,r\tau\quad(r\tau\ll1)$$

GothamQ operating points: about 0.99 at $2\times10^4$ pairs/s; 0.937–0.967 bounds at $2\times10^5$ over 15 days (about 0.95); bounded above 0.84 (Werner value 0.88) at $5\times10^5$. Never quote 99% with $5\times10^5$. The memory paper turns the same knob through the window width instead of the pump.

*Introduced:* [1.3](lessons/01-03-fidelity-and-rate.md); mechanism [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md); GothamQ reading [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Decibels and transmission

Losses in dB add along a path; convert to a surviving fraction once at the end.

$$\ell=-10\log_{10}\eta,\quad \eta=10^{-\ell/10}$$

$$\eta=10^{-\alpha L/10}=e^{-L/L_\text{att}}$$

$$L_\text{att}=\frac{10}{\alpha\ln10}$$

| dB | kept |
|---|---|
| 1 | 79% |
| 3 | 50% |
| 10 | 10% |
| 20 | 1% |

$L_\text{att}=21.7$ km at 0.2 dB/km, 13.2 km at 0.33 dB/km.

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [1.2](lessons/01-02-the-stack-in-one-picture.md), [2.1](lessons/02-01-loss-and-the-telecom-bands.md), [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md)

### Fiber attenuation by band

Typical single-mode fiber loss depends on wavelength; datasheet figures, not constants of nature.

| Band | Range | Loss | Factor 10 every |
|---|---|---|---|
| C-band | about 1530–1565 nm | about 0.2 dB/km | 50 km |
| O-band | about 1260–1360 nm | about 0.33 dB/km | 30 km |
| 795 nm | below the ~1260 nm single-mode cutoff | a few dB/km (Rayleigh estimate about 2.5) | a few km |

The O-band is low in dispersion and away from C-band classical traffic; Qunnect's 1324 nm photon travels there. Rayleigh scattering scales as $\lambda^{-4}$.

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [2.1](lessons/02-01-loss-and-the-telecom-bands.md)

### PLOB bound

The most entanglement (or key) any repeaterless protocol can push through a lossy channel, per use; about 1.44 ebits per photon the fiber lets through (Pirandola, Laurenza, Ottaviani, Banchi, *Nat. Commun.* 2017).

$$C(\eta)=-\log_2(1-\eta)\approx1.44\,\eta$$

$$R_\text{max}=f\,C(\eta)$$

At 0.2 dB/km and $10^9$ uses/s, 500 km gives 0.144 ebits/s. A 10 times faster clock buys exactly 10 dB. MDI-QKD obeys it; twin-field QKD sidesteps it with a middle station; repeaters escape it. Stated, not proved.

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### Quantum repeater

Split a long link into short heralded segments, hold each segment's pair in memories, and join them by swaps, so the rate scales with one segment's transmission instead of the whole span's.

Nested chain (5.4): attempts per end-to-end pair

$$T\approx\frac{1}{p_0}\left(\frac{3}{2P_s}\right)^n,\quad n=\log_2\frac{L}{L_0}$$

a power of distance (exponent $\log_2 3=1.58$ at $P_s=1/2$), against exponential for direct transmission. Example: 400 km at 0.2 dB/km costs about $10^8$ attempts direct vs about 270 with eight 50 km links. Three generations: [repeater generations](#repeater-generations). As of 2026, no commercial multi-hop memory repeater runs in deployed fiber among the deployments this course tracks.

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [5.1](lessons/05-01-why-memories.md), [5.4](lessons/05-04-repeater-chains-and-distillation.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md)

### Trusted nodes

The QKD workaround for distance: relay stations make keys hop by hop and pass the end-to-end key along, so it works at any distance but every relay holds the key in the clear.

Delivers no end-to-end entanglement, so it cannot teleport or link quantum computers. With metro links, it is the commercial reality in place of repeaters as of 2026.

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [5.5](lessons/05-05-repeater-generations-and-platform-bets.md), [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### Link budget

Add every loss on the path in dB, fiber plus discrete elements, and convert once.

$$\ell_\text{tot}=\alpha L+\sum_i\ell_i$$

$$\eta_\text{tot}=10^{-\ell_\text{tot}/10}$$

Counted coincidences:

$$R_\text{cc}=r_\text{src}\,\eta_\text{link}\,\eta_\text{tel}\,\eta_{795}$$

Budget from a measurement at your own wavelength: deployed fiber runs lossier than the datasheet.

*Introduced:* [2.1](lessons/02-01-loss-and-the-telecom-bands.md); [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Bichromatic photon pairs

One photon of the pair is telecom-coloured to travel the fiber, the other atom-coloured to stay home and fit a rubidium memory: a division of labor.

$$\frac{1}{780}+\frac{1}{1367}\approx\frac{1}{1324}+\frac{1}{795}$$

(in nm⁻¹; good to 0.02% with rounded wavelengths, exact with tabulated Rb lines 780.24, 1366.87, 1323.88, 794.98 nm). No frequency conversion needed. Only the travelling photon pays fiber loss:

$$R_\text{far}=R_\text{pair}\,\eta_{795,\text{local}}\,\eta_{1324,\text{link}}$$

*Introduced:* [2.1](lessons/02-01-loss-and-the-telecom-bands.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md)

### Quantum frequency conversion

Shifting one photon's wavelength (atomic line ↔ telecom, or to match another platform) by mixing it with a strong pump in a nonlinear crystal.

Costs efficiency, adds pump-induced noise next to the signal, and needs extra lasers. Rb source plus Rb memory need none; cross-platform links (e.g. to ions) do. The memory paper's cold-atom, NV and ion fidelities all used it.

*Introduced:* [2.1](lessons/02-01-loss-and-the-telecom-bands.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md)

### Jones vector

The two complex amplitudes of a polarization on H and V; overall phase does not matter.

$$|\psi\rangle=a|H\rangle+b|V\rangle,\quad |a|^2+|b|^2=1$$

| State | Jones vector |
|---|---|
| H | $(1,0)$ |
| V | $(0,1)$ |
| D | $(1,1)/\sqrt2$ |
| A | $(1,-1)/\sqrt2$ |
| R | $(1,-i)/\sqrt2$ |
| L | $(1,i)/\sqrt2$ |

*Introduced:* [2.2](lessons/02-02-polarization-as-a-qubit.md)

### Poincare sphere

Polarization drawn as a point on a sphere; in this course it is literally the Bloch sphere with $\lvert0\rangle=\lvert H\rangle$.

**Course convention:** H at $+z$ (north), V at $-z$, D at $+x$, A at $-x$, **L at $+y$, R at $-y$** (because $R=(H-iV)/\sqrt2$). Linear states fill the $x$–$z$ great circle; a lab angle $t$ sits at polar angle $2t$; orthogonal states are antipodal. Optics texts often lay the same sphere on its side.

*Introduced:* [2.2](lessons/02-02-polarization-as-a-qubit.md); [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Stokes vector

The coordinates of the polarization's point on the Poincaré sphere, each read with a polarizer.

$$s_z=P_H-P_V$$

$$s_x=P_D-P_A$$

$$s_y=P_L-P_R$$

$|\vec s|<1$ for partially polarized light. A lossless fiber acts as $\vec s\,'=R\vec s$, $R\in SO(3)$, with

$$R_{ij}=\tfrac12\operatorname{tr}(\sigma_iU\sigma_jU^\dagger)$$

*Introduced:* [2.2](lessons/02-02-polarization-as-a-qubit.md); [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Waveplates as rotations

A waveplate spins the sphere about the polarization it leaves alone, by its retardance.

$$U=\exp\!\left(-\tfrac{i\delta}{2}\hat n\cdot\vec\sigma\right)$$

$$\hat n=(\sin2t,0,\cos2t)$$

HWP: $\delta=\pi$; QWP: $\delta=\pi/2$. QWP at 45° takes H to R; HWP at 22.5° takes H to D. A lossless fiber is one $SU(2)$ rotation up to a global phase.

*Introduced:* [2.2](lessons/02-02-polarization-as-a-qubit.md)

### Fidelity after a fiber rotation

Only the rotation angle costs fidelity, never its axis, and the rotated pair is still maximally entangled until someone turns it back.

$$\langle\Phi^+|(I\otimes U)|\Phi^+\rangle=\tfrac12\operatorname{tr}U$$

$$F=\cos^2(\theta/2)=\frac{1+\operatorname{tr}R}{4}$$

With a Werner source: $F=p\cos^2(\theta/2)+(1-p)/4$. Since $(I\otimes U)|\Phi^+\rangle=(U^T\otimes I)|\Phi^+\rangle$, compensation can sit at either end. Costs: 3% at 20°, a quarter at 60°.

*Introduced:* [2.2](lessons/02-02-polarization-as-a-qubit.md); [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Birefringence

Fiber carries two polarization eigenmodes with slightly different refractive indices, so it acts as a waveplate.

Causes: core ellipticity, stress from cabling and bends, temperature. Deployed fiber is a stack of millions of tiny randomly oriented sections, so its net effect is an unpredictable $SU(2)$ rotation.

*Introduced:* [2.3](lessons/02-03-drift-in-buried-fiber.md)

### Polarization mode dispersion

PMD: the fiber's rotation depends on wavelength, so different colours inside one photon are rotated differently.

$$\theta(\lambda)=\kappa(\lambda-\lambda_0)$$

$$\kappa=\frac{2\pi c\,\tau}{\lambda^2}$$

($\tau$ = differential group delay, growing as $\sqrt L$; 1 ps at 1324 nm gives 1.07 rad/nm.) Gaussian spectrum of width $\sigma_\lambda$:

$$\bar F=\tfrac12\left(1+e^{-\kappa^2\sigma_\lambda^2/2}\right)$$

$$\bar F\approx1-\tfrac14\kappa^2\sigma_\lambda^2$$

A narrowband photon (1 GHz = 5.8 pm at 1324 nm) sees essentially one rotation. A probe offset $\delta\lambda$ steers the compensator wrong by $\kappa\,\delta\lambda$; $F\ge0.99$ needs $\kappa\,\delta\lambda\le0.200$ rad.

*Introduced:* [2.3](lessons/02-03-drift-in-buried-fiber.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md)

### Polarization drift

The fiber's rotation wanders in time (temperature, vibration, handling) and can jump.

Buried fiber drifts more slowly than aerial. GothamQ's uncompensated path showed slow drifts **and discrete jumps** over 15 days, which is why compensation must be automatic and repeated. Modelled in 4.2 as a [rotational random walk](#rotational-random-walk).

*Introduced:* [2.3](lessons/02-03-drift-in-buried-fiber.md); [4.2](lessons/04-02-compensation-as-a-control-loop.md)

### Time-bin encoding

A qubit stored as a photon in a superposition of an early and a late pulse, the main alternative to polarization.

Largely immune to polarization drift, but needs stabilized unbalanced interferometers at every node and is harder to store in polarization (dual-rail) memories.

*Introduced:* [2.3](lessons/02-03-drift-in-buried-fiber.md)

### Linewidth to wavelength width

Sources quote spectral width in Hz; the fiber cares about nm.

$$\Delta\lambda=\frac{\lambda^2\Delta\nu}{c}$$

At 1324 nm: 1 GHz = 5.85 pm, 500 MHz = 2.92 pm, 1 nm = 171 GHz. Gaussian $\sigma=\text{FWHM}/2.355$.

*Introduced:* [2.3](lessons/02-03-drift-in-buried-fiber.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md)

### Spontaneous Raman scattering

Classical light scattering off glass vibrations into other colours; it is the main way C-band traffic leaks into a quantum channel.

Stokes (longer wavelength) is strong; anti-Stokes (shorter) needs the glass to donate heat:

$$\frac{\text{anti-Stokes}}{\text{Stokes}}=e^{-h\Omega/k_BT}$$

At the 33.0 THz shift between 1324 and 1550 nm, 300 K: about 1/197. Near silica's main peak (about 13 THz): 0.125. Hence O-band quantum below C-band classical.

*Introduced:* [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md)

### Raman noise toy model

Noise reaching the quantum detector grows with launch power, filter width and fiber length, until the classical light fades.

$$R_\text{noise}=\frac{P}{h\nu_c}\,\rho\,L_\text{eff}\,\Delta\lambda$$

$$S=\eta\,\eta_d,\quad N=\eta_d R_\text{noise}\tau$$

$$p=\frac{S}{S+N},\quad F=1-\frac34\frac{N}{S+N}$$

$\rho=10^{-10}$ per km per nm is illustrative only; measure it on the customer's fiber. Ignores the noise's own loss, so errs high.

*Introduced:* [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md)

### Effective length

The length over which classical light is still strong enough to make Raman noise.

$$L_\text{eff}=\frac{1-e^{-\alpha L}}{\alpha}$$

with $\alpha$ in nepers/km ($\alpha_\text{dB}/4.343$). Saturates at $1/\alpha=21.7$ km for 0.2 dB/km.

*Introduced:* [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md)

### Coincidence window

The width $\tau$ of the time slot around each herald in which a partner click counts.

Noise and accidentals per window scale linearly with $\tau$; its floor is the combined detector jitter. A clock offset $\delta$ pushes true pairs out while accidentals stay:

$$c(\delta)=\Phi\!\left(\tfrac{\tau/2-\delta}{\sigma}\right)-\Phi\!\left(\tfrac{-\tau/2-\delta}{\sigma}\right)$$

*Introduced:* [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md); [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Spontaneous four-wave mixing

SFWM: two laser photons go in and an entangled pair comes out, made strong in warm rubidium by sitting near atomic resonance.

Rb-87 ladder: 780 nm pump ($5S_{1/2}\to5P_{3/2}$) plus 1367 nm coupling (to $6S_{1/2}$); the atom emits 1324 nm ($6S_{1/2}\to5P_{1/2}$), then 795 nm.

$$\omega_p+\omega_c=\omega_s+\omega_i$$

$$\mathbf k_p+\mathbf k_c=\mathbf k_s+\mathbf k_i$$

The collective $5P_{1/2}$ excitation makes the 795 nm photon directional. The pair comes out in $\lvert\Phi^+\rangle$ (Zeeman structure; stated, not derived), linewidth below 1 GHz.

*Introduced:* [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md)

### SPDC vs SFWM

The two ways to make entangled pairs, plus quantum dots, compared on what a network cares about.

| | SPDC crystal | Warm Rb vapor (SFWM) | Quantum dot |
|---|---|---|---|
| Process | $\chi^{(2)}$ | near-resonant $\chi^{(3)}$ | single-emitter cascade |
| Wavelengths | flexible | fixed: 1324 + 795 nm | set by the dot |
| Native linewidth | hundreds of GHz to THz | below 1 GHz | narrow, varies |
| Memory match | after heavy filtering or a cavity | native | tuning or conversion |
| Multi-pair noise | grows with pump | grows with pump | low (near on-demand) |
| Temperature | room | warm cell | cryogenic |

*Introduced:* [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md)

### Accidental coincidences

Chance matches between two unrelated clicks that land in the same window.

$$R_\text{acc}\approx R_1R_2\,\tau\quad(R_2\tau\ll1)$$

For a continuous-wave source, singles grow with brightness, so accidentals grow as rate squared. Raman photons and dark counts only add to them.

*Introduced:* [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)

### Coincidence-to-accidental ratio

CAR: true coincidences per accidental one; it is the inverse of the number of pairs emitted per window, and losses cancel out of it.

$$\text{CAR}=\frac{R_\text{true}}{R_\text{acc}}\approx\frac{1}{r\tau}$$

(when the singles come from the source). Better detector efficiency leaves CAR unchanged; lower jitter (narrower $\tau$) raises it.

*Introduced:* [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)

### Fidelity from gSI

The ratio of "right" (HH) to "wrong" (HV) coincidences fixes the noise fraction of a Werner pair, and so its fidelity (GothamQ eq S18).

$$g_{SI}=\frac{\langle HH\rangle}{\langle HV\rangle}=\frac{1+a}{1-a}$$

$$F=1-\frac{3}{2(1+g_{SI})}$$

With unpolarized accidentals and **polarization-blind** CAR:

$$g_{SI}=1+2\,\text{CAR}$$

$$F=1-\frac{3}{4(1+\text{CAR})}$$

($g_{SI}=1+\text{CAR}$ holds only if CAR is measured with both analyzers at H.) The memory paper's $F=1-3/(2(\text{SNR}+2))$ is the same rule with $g_{SI}=\text{SNR}+1$; SNR 9.8 gives 0.873.

*Introduced:* [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md); [3.3](lessons/03-03-proving-a-link-is-entangled.md), [4.3](lessons/04-03-reading-the-gothamq-result.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md)

### Timing jitter

The spread in a detector's click time stamps; it sets the narrowest useful coincidence window.

$$\sigma_\text{tot}=\sqrt{\sigma_1^2+\sigma_2^2}$$

GothamQ: 350 ps and 90 ps give 361 ps. Treated as a Gaussian FWHM, $\sigma=153$ ps; with a 1 ns window, clock offsets of 100, 300, 500 ps keep 0.995, 0.904, 0.500 of true pairs.

*Introduced:* [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md); [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Visibility

Fraction of pairs that agree minus fraction that disagree, in one basis, each basis normalized by its own total.

$$V_Z=P_{HH}+P_{VV}-P_{HV}-P_{VH}$$

$$V_X=P_{DD}+P_{AA}-P_{DA}-P_{AD}$$

Werner pair: $V=p$ in every basis; $V=1-2e$. (The paper normalizes X counts by the Z total; identical when acquisition is balanced.)

*Introduced:* [3.3](lessons/03-03-proving-a-link-is-entangled.md); [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### Two-basis fidelity bounds

Eight coincidence counts in two bases pin the fidelity inside a bracket whose width is set by the error counts; it is not an error bar.

Z then X (GothamQ S10–S11):

$$F_\text{lo}=\frac{1+V_Z+2V_X-4\sqrt{P_{HV}P_{VH}}}{4}$$

$$F_\text{hi}=\frac{1+V_Z+2V_X+4\sqrt{P_{HV}P_{VH}}}{4}$$

with $F_\text{lo}\le F\le F_\text{hi}$. Swap the bases for S13–S14, with $\sqrt{P_{DA}P_{AD}}$ as the error term. Report the highest lower and lowest upper bound.

One basis alone (Cauchy–Schwarz on $\rho_{14}$):

$$F_\text{lo,hi}=\frac{(\sqrt{P_{HH}}\mp\sqrt{P_{VV}})^2}{2}$$

in counts, $(C_{HH}+C_{VV}\mp2\sqrt{C_{HH}C_{VV}})/(2N)$; the lower bound is about 0 for a balanced source, so one basis only gives a ceiling. **Correction:** the supplement's S7 and S12 as printed omit the factor of 2 (they read $(C_{HH}+C_{VV}\mp\sqrt{C_{HH}C_{VV}})/N$), which gives an invalid lower bound (0.5 for $\lvert\Phi^-\rangle$, whose true $F$ is 0); it never binds on GothamQ's data, so the reported numbers stand.

Werner data: bracket $[p,(1+p)/2]$, midpoint $F$, width $\tfrac23(1-F)$. Certifies entanglement (lower bound above 1/2) once $F>0.625$.

*Introduced:* [3.3](lessons/03-03-proving-a-link-is-entangled.md); [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Probe states

Bright classical light of known polarization sent through the fiber and read by a polarimeter, to learn the fiber's rotation without spending a single entangled pair.

GothamQ uses H, D, R. The probe must share the photons' wavelength and fiber (PMD). One probe pins two of the rotation's three parameters; a spin about its own axis is invisible to it.

*Introduced:* [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Rotation from two probes

Two non-parallel, non-antipodal probes fix the fiber's rotation: build the same rigid frame on both sides and compare.

$$\hat e_1=\vec s_1,\quad \hat e_3=\hat e_1\times\hat e_2$$

($\hat e_2$ = Gram–Schmidt of $\vec s_2$ against $\vec s_1$.)

$$R=M'M^T$$

With H and D:

$$R=\big[\,\vec s_D{}'\;\big|\;\vec s_H{}'\times\vec s_D{}'\;\big|\;\vec s_H{}'\,\big]$$

and the R probe must read $-(\vec s_H{}'\times\vec s_D{}')$ (R sits at $-y$). Antipodal probes (H and V) fail.

*Introduced:* [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Probe-only fidelity readout

Three classical probe readings give exactly what the uncorrected fiber would do to a pair's fidelity.

$$F=\frac{1+\vec s_H\!\cdot\vec s_H{}'+\vec s_D\!\cdot\vec s_D{}'+\vec s_R\!\cdot\vec s_R{}'}{4}$$

equal to $(1+\operatorname{tr}R)/4$. $F\ge0.99$ needs the sum $\ge2.96$. A single probe's state fidelity $(1+\vec s\cdot\vec s\,')/2$ overstates $F$. A frame error $\delta$ leaves $F=\cos^2(\delta/2)\approx1-\delta^2/4$.

*Introduced:* [4.1](lessons/04-01-learning-the-fibers-rotation.md)

### Rotational random walk

The drift model: the residual rotation takes small isotropic random kicks, so fidelity leaks away linearly at first and averages to depolarizing noise.

Each rotation-vector component has variance $2D\,dt$ ($D$ in rad²/s).

$$\langle\theta^2\rangle=6Dt$$

$$\langle F\rangle=\frac{1+3e^{-2Dt}}{4}\approx1-1.5\,Dt$$

The drift-averaged pair is Werner with $p=e^{-2Dt}$. Full-reset cadence:

$$T\le\frac{1}{2D}\ln\frac{3}{4F_{th}-1}\approx\frac{2(1-F_{th})}{3D}$$

so $T$ scales as $1/D$.

*Introduced:* [4.2](lessons/04-02-compensation-as-a-control-loop.md)

### Uptime

The fraction of time the link is delivering pairs rather than switched out for compensation.

$$U=1-\frac{\langle t_\text{down}\rangle}{T_c}\ \ge\ 1-\frac{t_\text{max}}{T_c}$$

(worst case: every check runs the longest cycle; a threshold loop does better because most checks find nothing to fix). Downtime over a run of length $T$ is $(1-U)T$: GothamQ's 99.84% over 15 days is 34.6 min.

*Introduced:* [4.2](lessons/04-02-compensation-as-a-control-loop.md); [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Compensation cycle

One look of GothamQ's APC loop: check, and correct only if needed.

About every 20 s, measure fidelity of the probe light against a stored reference. Above the 99% trigger threshold: stop. Otherwise run gradient descent on the EEOM until above the 99% optimization threshold. A cycle takes 30–1000 ms; photons are switched out meanwhile. Recovery after a jump: up to one cadence plus one cycle.

*Introduced:* [4.2](lessons/04-02-compensation-as-a-control-loop.md); [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Infidelities add

Source noise and leftover fiber rotation cost fidelity independently, so their infidelities simply add.

$$F=a\,f_c+\frac{1-a}{4}$$

$$1-F=a(1-f_c)+(1-F_s)$$

With 3.2's model (CAR $=K/r$, $K=2.625\times10^6$ pairs/s, fixed by the 0.88 point) and an APC floor $f_c=0.99$ (a modelling assumption), the source dominates above $r^*=3.5\times10^4$ pairs/s.

*Introduced:* [4.3](lessons/04-03-reading-the-gothamq-result.md)

### Waiting time with and without memory

Memory removes the need for two independent lucky links to succeed in the same round: the early one waits for the laggard.

$$E[N_\text{no mem}]=\frac{1}{p^2}$$

$$E[\max(N_1,N_2)]=\frac{3-2p}{p(2-p)}\approx\frac{3}{2p}$$

$$\text{speedup}=\frac{2-p}{p(3-2p)}\approx\frac{2}{3p}$$

At $p=0.01$: 10,000 vs 149.75 rounds, a factor of 67. Mean idle of the early link $2(1-p)/(p(2-p))\approx1/p$. Source of the $3/2$ per-level factor in nested-chain estimates. Assumes storage lasts as long as needed.

*Introduced:* [5.1](lessons/05-01-why-memories.md); [5.4](lessons/05-04-repeater-chains-and-distillation.md)

### Heralding round-trip time

How long a node must wait to learn whether an attempt worked; it is set by light in fiber, not by electronics.

Midpoint detection station (the course standard from 5.1 on):

$$t_h=\frac{L}{v}$$

Source at one end, herald returning from the far end (1.2): $2L/v$. With $v\approx2\times10^8$ m/s: 10 km → 50 µs, 20,000 attempts/s per single-mode memory; 40 km → 200 µs; 50 km → 250 µs, 4,000/s. Storage needed for the first-ready link:

$$t_\text{store}\approx t_h\left(1+\frac1p\right)$$

Distillation adds a classical exchange between the ends ($L/v$ one way); a 1G chain's end-to-end round is $L/v$ over the whole chain (320 km → 1.6 ms). Qunnect's 2.6 µs covers a 520 m midpoint link, or 260 m with a far-end herald.

*Introduced:* [5.1](lessons/05-01-why-memories.md); [5.4](lessons/05-04-repeater-chains-and-distillation.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md)

### Memory multiplexing

Fire many independent modes (time bins, frequencies, spatial channels) per round into a multimode memory, so some mode almost always succeeds.

$$p_M=1-(1-p)^M\approx Mp$$

$p=0.01$, $M=100$: $p_M=0.634$. Fixes the attempt rate, **not** the herald time: storage must still exceed $t_h$.

*Introduced:* [5.1](lessons/05-01-why-memories.md)

### Memory-assisted synchronization

Using a memory at one node to park the early photon of two probabilistic sources until the other arrives; the same $1/p^2\to3/(2p)$ gain, but holds are only a few clock slots.

Holds are sub-µs to µs because no light crosses a city, so short-lived memories such as Qunnect's 2.6 µs warm-vapor memory are relevant here first. Example (invented settings): $p=0.1$ per 100 ns slot gives 10 µs without memory vs 1.47 µs with, mean hold 0.95 µs.

*Introduced:* [5.1](lessons/05-01-why-memories.md)

### Coherence time

How long a memory preserves the stored qubit: the $1/e$ decay time of retrieval efficiency.

$$\eta(t)=\eta_0e^{-t/\tau}$$

Useful regime for heralded links: $\tau\gg t_h/p$. Qunnect warm vapor: $\tau=2.6\pm0.3$ µs, limited by atoms diffusing out of the ~1 mm beam (not Doppler). **Utility time** (until fidelity falls below a protocol threshold) is shorter: 1–3 µs; the Werner-CHSH crossing in 5.2's model is 1.84 µs. A 1 ms memory (coated-cell regime, reported elsewhere) is about 385 times longer and would cover a 200 km link in 2G or a 200 km whole chain in 1G.

*Introduced:* [5.1](lessons/05-01-why-memories.md); [5.2](lessons/05-02-room-temperature-quantum-memories.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md)

### EIT storage

Electromagnetically induced transparency: a strong control beam makes the gas transparent to the photon; switching the control off writes the photon into a collective spin wave, switching it on reads it out.

Λ system in Rb-87: $\lvert g\rangle=5S_{1/2},F{=}2$; $\lvert s\rangle=5S_{1/2},F{=}1$ (6.8 GHz away); $\lvert e\rangle=5P_{1/2}$. Both fields about 700 MHz below resonance; only two-photon resonance matters. Qunnect: 57 °C cell, 2 Torr Ne, dual rail, 5 ns control pulses, bandwidth up to $2\pi\times266$ MHz, filtering about 114 dB. Doppler (one-photon about 526 MHz) nearly cancels for co-propagating fields (residual about 9.5 kHz).

*Introduced:* [5.2](lessons/05-02-room-temperature-quantum-memories.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md) (forward)

### Dark-state polariton

The mixed light-plus-spin excitation that carries the photon through an EIT medium; dim the control and it becomes pure spin wave, standing still.

Single atom, at two-photon resonance (no excited-state amplitude):

$$|D\rangle=\frac{\Omega_c|g\rangle-\Omega_p|s\rangle}{\sqrt{\Omega_c^2+\Omega_p^2}}$$

$N$ atoms, one photon:

$$|D\rangle\propto\Omega_c|G;1\rangle-g_0\sqrt N|S;0\rangle$$

$$v_g=\frac{c}{1+g_0^2N/\Omega_c^2}$$

(Fleischhauer–Lukin, stated.) $\Omega_c\to0$: stored.

*Introduced:* [5.2](lessons/05-02-room-temperature-quantum-memories.md)

### Entanglement swapping

A Bell-state measurement on the middle photons of two pairs leaves the two far ends entangled, though they never interacted.

A–B₁ and B₂–C; BSM on B₁B₂; A–C are left in a known Bell state, each outcome with probability 1/4, fixed by a Pauli correction or a frame update. The ideal algebra is quantum-computing 2.4 P3.

*Introduced:* [5.3](lessons/05-03-bell-state-measurement-and-swapping.md)

### Swap fidelity rule

Good fractions multiply through a noiseless swap, so infidelities roughly add.

$$p'=p_1p_2$$

$$F'=\frac{1+3p_1p_2}{4}=F_1F_2+\frac{(1-F_1)(1-F_2)}{3}$$

$$1-F'=e_1+e_2-\tfrac43e_1e_2$$

Examples: 0.90 and 0.90 give 0.813; 0.97 and 0.93 give 0.903; 0.80 and 0.80 give 0.653 (not 0.64). Nested chain of $2^n$ links:

$$F_\text{end}=\frac{1+3p^{2^n}}{4}$$

8 links at 0.98 give 0.854; 16 give 0.737.

*Introduced:* [5.3](lessons/05-03-bell-state-measurement-and-swapping.md); [5.4](lessons/05-04-repeater-chains-and-distillation.md), [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Linear-optics BSM limit

No arrangement of beam splitters, phase shifters and detectors distinguishes all four Bell states, and without ancilla photons 50% is the most it can identify.

Lütkenhaus and co-workers (1999); Calsamiglia–Lütkenhaus (2001). Failures are heralded, so they cost rate, not fidelity:

$$P_\text{swap}=\tfrac12\eta_d^2$$

*Introduced:* [5.3](lessons/05-03-bell-state-measurement-and-swapping.md)

### HOM visibility

How identical the two photons meeting at a BSM are; partial distinguishability silently lowers swapped fidelity without changing the click rate.

$$V=v^2$$

$$F'=p_1p_2\frac{1+V}{2}+\frac{1-p_1p_2}{4}$$

At $V=0$, $F'=1/2$. Exponential wave packets offset by $\delta$: $V=e^{-\delta/\tau}$, with $\tau=1/(2\pi\Delta\nu)$: 0.16 ns at 1 GHz vs 0.16 ps at 1 THz.

*Introduced:* [5.3](lessons/05-03-bell-state-measurement-and-swapping.md)

### Entanglement distillation

Sacrifice some noisy pairs to purify the survivors; it amplifies existing entanglement and cannot create it.

Needs $F>1/2$, two-way classical communication, and memories holding the pairs meanwhile. The error fix of 1G repeaters. Cost from $F=0.80$ (BBPSSW):

| Rounds | $F$ | Pairs per output |
|---|---|---|
| 1 | 0.838 | 2.60 |
| 2 | 0.874 | 6.44 |
| 3 | 0.905 | 15.2 |
| 4 | 0.930 | 34.6 |
| 10 | 0.9925 | about 2,900 |

For QKD one round pays only below $F\approx0.861$. DEJMPS converges faster (named only).

*Introduced:* [5.4](lessons/05-04-repeater-chains-and-distillation.md); [5.5](lessons/05-05-repeater-generations-and-platform-bets.md), [6.3](lessons/06-03-beyond-keys.md)

### BBPSSW recurrence

The original distillation protocol (Bennett et al., 1996): bilateral CNOT between two pairs, measure the target pair in Z, keep the control if the bits agree, re-twirl to Werner form.

$$P_\text{succ}=F^2+\tfrac23F(1-F)+\tfrac59(1-F)^2$$

$$F'=\frac{F^2+\left(\frac{1-F}{3}\right)^2}{P_\text{succ}}$$

Fixed points at 1/2 and 1. Examples: 0.85 → 0.884 at $P=0.82$; 0.98 → 0.9864 ($P=0.9737$) → 0.9908 ($P=0.9820$), 4.18 pairs per output; 0.97 → 0.9905 in three rounds at 8.72 pairs per output.

*Introduced:* [5.4](lessons/05-04-repeater-chains-and-distillation.md); [6.3](lessons/06-03-beyond-keys.md)

### Repeater generations

Three repeater architectures, sorted by what they handle by heralding and what by encoding, which sets how long memories must wait (Muralidharan et al. 2016; Azuma et al. 2023).

| | 1G | 2G | 3G |
|---|---|---|---|
| Loss | heralding | heralding | erasure code |
| Errors | distillation (two-way) | error correction | error correction |
| Memory | $\gtrsim L/v$ | $\gtrsim L_0/v$ | $\gtrsim t_{op}$ |
| Loss per hop | any | any | under 3.01 dB |
| Maturity (2026) | elements demonstrated | lab research | theory, early photonic |

3G's ceiling: erasure capacity $Q=\max(0,1-2\varepsilon)$, so $\eta_0>1/2$. All-photonic variant: Azuma–Tamaki–Lo (2015). Generations are architectures, not product versions.

*Introduced:* [5.5](lessons/05-05-repeater-generations-and-platform-bets.md)

### BBM92

Entanglement-based QKD: both sides measure their half of $\lvert\Phi^+\rangle$ in a random Z or X basis, keep matching bases (sifting), and sample errors.

The source may be untrusted. E91 adds CHSH settings; its device-independent form needs a loophole-free violation, which fiber loss makes very hard. The two-basis fidelity measurement of 3.3 is the BBM92 key measurement.

*Introduced:* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### QBER

Quantum bit error rate: the fraction of sifted bits on which Alice and Bob disagree.

$$e=\frac{1-p}{2}=\frac23(1-F)$$

for a Werner pair, in Z and in X; $V=1-2e$. BB84 intercept-resend gives 25%.

*Introduced:* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md); [5.4](lessons/05-04-repeater-chains-and-distillation.md)

### Asymptotic key rate

Secret bits per sifted bit after paying once for error correction and once to evict the eavesdropper (Shor–Preskill; stated).

$$r=1-h(e_Z)-h(e_X)=1-2h(e)$$

$$K=R\,s\,r$$

$r=0$ at $e=11.0\%$, i.e. $F=0.835$, where $1-h(e)=0.5$. $s=1/2$ for fair basis choices, $q^2+(1-q)^2$ biased. Distilled key per raw pair: $P_\text{succ}\,r(F')/2$. A ceiling: finite-size effects and real codes take more.

*Introduced:* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md); [5.4](lessons/05-04-repeater-chains-and-distillation.md)

### MDI-QKD

Measurement-device-independent QKD: Alice and Bob both send photons to an untrusted middle station that performs a Bell-state measurement, removing every detector side channel.

Both photons must arrive, so the rate still scales as $\eta$, under PLOB.

*Introduced:* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### Twin-field QKD

A middle station detects a single photon from two interfering, phase-stabilized weak pulses; each crosses only half the link, so key rate scales as $\sqrt\eta$.

Beats repeaterless PLOB scaling at long distance (200 km at 0.2 dB/km: $\eta=10^{-4}$, $\sqrt\eta=10^{-2}$). Needs optical phase stabilization over the span; makes key, not storable entanglement. A minimal relay, not "beating PLOB without a node".

*Introduced:* [1.4](lessons/01-04-the-loss-wall.md); [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### QKD vs PQC

The policy split: security agencies prefer post-quantum cryptography (new math, run as software), while QKD's backers cite physics-based secrecy.

Against (NSA; UK NCSC; ANSSI, BSI, NLNCSA and Sweden, 2024): partial solution (needs classical authentication), special hardware, cost and insider risk, security depends on implementation; plus distance limits without trusted nodes (1.4). For: no hardness assumption, so it resists harvest-now-decrypt-later; can be layered with PQC. EU EuroQCI and China's networks are the other pole. Details: [Policy positions](#policy-positions).

*Introduced:* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md)

### Heralded link layer

The service a quantum link offers its neighbours: "a pair between A and B, at least this fidelity, by this deadline".

The request names nodes, minimum fidelity and deadline; the answer is a labelled pair plus its expected fidelity. Two flavours: **create and keep** (store in memory) and **measure directly** (all QKD needs). The herald acknowledges an attempt, not a delivery (Dahlberg et al. 2019 proposal).

*Introduced:* [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Entanglement routing

Pick the path whose product of good fractions is largest; logs turn that into a shortest-path problem.

$$F_P=\frac{1+3\prod_ip_i}{4},\quad p_i=\frac{4F_i-1}{3}$$

$$w_i=-\ln p_i$$

Max-fidelity path = Dijkstra shortest path on $w_i$. Rate with 50% linear-optics swaps:

$$R_P\approx r_\text{min}\left(\tfrac12\right)^{n-1}$$

so routing has two objectives.

*Introduced:* [6.2](lessons/06-02-the-network-stack-and-timing.md)

### White Rabbit timing

A CERN-developed Ethernet extension that carries frequency on the fiber's bit clock and measures link delay with two-way timestamps, reaching sub-nanosecond agreement over kilometres.

A frequency offset $y$ grows into a time offset $\delta(t)=\delta_0+yt$: 1 ppm drifts 1,000 ns per second, losing a 1 ns window in 1 ms; 0.1 ppm loses 0.5 ns in 5 ms. QU-SYNC is Qunnect's timing slot; no published spec, and no claim it uses White Rabbit.

*Introduced:* [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Distributed quantum computing

Linking quantum processors by spending one Bell pair plus two classical bits (one each way) per remote CNOT.

$$1\ \text{ebit}+2\ \text{cbits}\Rightarrow1\ \text{remote CNOT}$$

With a Werner pair the gate's process fidelity equals $F$ exactly. Interconnect requirement:

$$R_\text{pairs}\ge G\times c(F_0\to F_\text{target})$$

$c$ = raw pairs per distilled pair. Example: $10^4$ gates/s at 0.99 from $F_0=0.97$: three BBPSSW rounds (0.9905), $c=8.72$, $R\ge8.7\times10^4$ pairs/s. Status: lab demos over metres.

*Introduced:* [6.3](lessons/06-03-beyond-keys.md)

### Blind quantum computing

A client has a server run a computation it cannot read, by one-time-padding every measurement angle (Broadbent, Fitzsimons, Kashefi 2009).

Client sends $\lvert+_\theta\rangle$, $\theta$ a random multiple of $\pi/4$, and requests angle

$$\delta=\phi+\theta+r\pi$$

uniformly random to the server, which learns only the size. With Bell pairs the client can prepare the server's qubits remotely by measuring. Needs memory at the server. Photonic proof of principle.

*Introduced:* [6.3](lessons/06-03-beyond-keys.md)

### Quantum sensor networks

Entangle $N$ distant probes in a GHZ state and a common phase winds $N$ times faster, improving precision from $1/\sqrt N$ toward $1/N$, if the state stays coherent.

$$\Delta\phi_\text{SQL}=\frac{1}{\sqrt N},\quad \Delta\phi_\text{GHZ}=\frac{1}{NV}$$

Entanglement helps only if $V>1/\sqrt N$; independent dephasing gives $V=e^{-Nt/T_2}$. $N=100$: 0.1 vs 0.01 rad, i.e. $10^4$ independent probes to match. Long-baseline interferometry (Gottesman–Jennewein–Croke 2012) is a proposal; clock networks are lab demos over metres.

*Introduced:* [6.3](lessons/06-03-beyond-keys.md)

## Formulas and rules

Grouped by job. Each group points to the definition entries above for the full statement.

### Fidelity and thresholds

Werner pair, $F=(1+3p)/4$:

| Line | Threshold on $F$ | Good fraction $p$ | Why |
|---|---|---|---|
| pure noise | 0.25 | 0 | $I/4$ overlaps $\Phi^+$ by 1/4 |
| entangled | 0.5 | 1/3 | [Peres–Horodecki](#peres-horodecki-criterion) |
| teleportation beats classical | 0.5 | 1/3 | $F_\text{tel}=(2F+1)/3>2/3$ |
| two-basis bound certifies | 0.625 | 1/2 | lower bound $p>1/2$ |
| CHSH violation | 0.780 | $1/\sqrt2$ | $S=2\sqrt2\,p$ |
| positive key (BBM92) | 0.835 | 0.780 | $e=11.0\%$ |

Composition rules:

| Situation | Rule |
|---|---|
| rotation $\theta$ on one photon | $F=\cos^2(\theta/2)$ |
| Werner source then rotation | $F=p\cos^2(\theta/2)+(1-p)/4$ |
| source then compensated channel | $1-F=a(1-f_c)+(1-F_s)$ |
| swap of two Werner links | $p'=p_1p_2$ |
| remote gate through a Werner pair | $F_\text{gate}=F$ |

*From* [1.3](lessons/01-03-fidelity-and-rate.md), [2.2](lessons/02-02-polarization-as-a-qubit.md), [4.3](lessons/04-03-reading-the-gothamq-result.md), [5.3](lessons/05-03-bell-state-measurement-and-swapping.md), [6.3](lessons/06-03-beyond-keys.md)

### Loss and PLOB

$$\eta=10^{-\ell/10}$$

$$\ell_\text{tot}=\alpha L+\textstyle\sum_i\ell_i$$

$$C(\eta)=-\log_2(1-\eta)\approx1.44\,\eta$$

| Rule of thumb | Value |
|---|---|
| C-band, 0.2 dB/km | factor 10 per 50 km; $L_\text{att}=21.7$ km |
| O-band, 0.33 dB/km | factor 10 per 30 km; $L_\text{att}=13.2$ km |
| 10 times faster clock | buys exactly 10 dB |
| best $M$-copy cloner | $F_\text{clone}=(2M+1)/(3M)\to2/3$ |
| O-band penalty vs C-band | about 0.13 dB/km (13 dB over 100 km) |

Numerical note: for $\eta$ below about $10^{-16}$, compute $-\log_2(1-\eta)$ as $-\operatorname{log1p}(-\eta)/\ln2$, or it underflows to 0.

*From* [1.4](lessons/01-04-the-loss-wall.md), [2.1](lessons/02-01-loss-and-the-telecom-bands.md); see [decibels and transmission](#decibels-and-transmission), [PLOB bound](#plob-bound)

### Polarization

| Fact | Statement |
|---|---|
| sphere | H $+z$, V $-z$, D $+x$, A $-x$, L $+y$, R $-y$ |
| linear light at lab angle $t$ | $\vec s=(\sin2t,0,\cos2t)$; angles double |
| retarder | rotation by $\delta$ about $(\sin2t,0,\cos2t)$ |
| fiber | one $SU(2)$ rotation $\leftrightarrow$ $R\in SO(3)$ |
| fidelity from $R$ | $(1+\operatorname{tr}R)/4$; $\operatorname{tr}R=1+2\cos\theta$ |
| 0.99 pointing budget | $\theta\le0.200$ rad (11.5°) |
| PMD | $\kappa=2\pi c\tau/\lambda^2$; $\bar F\approx1-\kappa^2\sigma_\lambda^2/4$ |
| width conversion | $\Delta\lambda=\lambda^2\Delta\nu/c$ |
| frame error $\delta$ | $F=\cos^2(\delta/2)\approx1-\delta^2/4$ |

*From* [2.2](lessons/02-02-polarization-as-a-qubit.md), [2.3](lessons/02-03-drift-in-buried-fiber.md), [4.1](lessons/04-01-learning-the-fibers-rotation.md); see [Poincare sphere](#poincare-sphere), [fidelity after a fiber rotation](#fidelity-after-a-fiber-rotation)

### Counting

The chain from raw clicks to a fidelity claim:

$$R_\text{acc}\approx R_1R_2\tau$$

$$\text{CAR}\approx\frac{1}{r\tau}$$

$$g_{SI}=1+2\,\text{CAR}$$

$$F=1-\frac{3}{2(1+g_{SI})}=1-\frac{3}{4(1+\text{CAR})}$$

$$a=\frac{\text{CAR}}{1+\text{CAR}}$$

| Measurement | What it can claim |
|---|---|
| $g_{SI}$ or CAR + Werner model | a model estimate of $F$ |
| one basis (Z) | an upper bound only |
| two bases (Z and X) | bracket $[F_\text{lo},F_\text{hi}]$; Werner: $[p,(1+p)/2]$ |
| full tomography (16 settings) | a point estimate; twice the settings |
| CHSH $S>2$ | entanglement without trusting the analyzers |

Raman noise to fidelity: $F=1-\tfrac34\,N/(S+N)$; noise scales as $P\,\Delta\lambda\,\tau\,L_\text{eff}$.

*From* [2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md), [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [3.3](lessons/03-03-proving-a-link-is-entangled.md); see [two-basis fidelity bounds](#two-basis-fidelity-bounds), [fidelity from gSI](#fidelity-from-gsi)

### Compensation and uptime

$$\langle\theta^2\rangle=6Dt$$

$$\langle F\rangle=\frac{1+3e^{-2Dt}}{4}$$

$$T\lesssim\frac{2(1-F_{th})}{3D}$$

$$U\ge1-\frac{t_\text{max}}{T_c}$$

| Fact | Value |
|---|---|
| downtime over run $T$ | $(1-U)T$ |
| GothamQ cadence and cycle | about 20 s; 30–1000 ms |
| probe vs pair metric (assumed H, D, R average) | probe $(2+\cos\theta)/3$, pair $(1+\cos\theta)/2$ |
| recovery after a jump | up to one cadence plus one cycle |

*From* [4.2](lessons/04-02-compensation-as-a-control-loop.md), [4.3](lessons/04-03-reading-the-gothamq-result.md); see [rotational random walk](#rotational-random-walk), [uptime](#uptime)

### Memories and waiting times

| Quantity | Formula | At $p=0.01$ |
|---|---|---|
| two links, no memory | $1/p^2$ rounds | 10,000 |
| two links, with memory | $(3-2p)/(p(2-p))\approx3/(2p)$ | 149.75 |
| speedup | $\approx2/(3p)$ | 67 |
| early link's idle | $\approx1/p$ rounds | 99.5 |
| $M$ modes | $p_M=1-(1-p)^M$ | 0.634 at $M=100$ |

| Timing | Formula |
|---|---|
| herald time, midpoint station | $t_h=L/v$ (5 µs per km) |
| herald time, source at one end | $2L/v$ |
| storage needed | $t_\text{store}\approx t_h(1+1/p)$ |
| max attempt rate, one mode | $1/t_h=v/L$ |
| memory fidelity (Werner) | $F=1-3/(2(\text{SNR}+2))$ |

*From* [5.1](lessons/05-01-why-memories.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md); see [waiting time with and without memory](#waiting-time-with-and-without-memory), [heralding round-trip time](#heralding-round-trip-time)

### Swapping and distillation

$$F'=\frac{1+3p_1p_2}{4}$$

$$F'_\text{HOM}=p_1p_2\frac{1+V}{2}+\frac{1-p_1p_2}{4}$$

$$P_\text{swap}=\tfrac12\eta_d^2$$

$$F_\text{end}=\frac{1+3p^{2^n}}{4}$$

$$T\approx\frac{1}{p_0}\left(\frac{3}{2P_s}\right)^n$$

$$P_\text{succ}=F^2+\tfrac23F(1-F)+\tfrac59(1-F)^2$$

$$F'_\text{BBPSSW}=\frac{F^2+(1-F)^2/9}{P_\text{succ}}$$

Pairs per output after $k$ rounds: $N_k=2N_{k-1}/P_\text{succ}$. Cost table from 0.80: [entanglement distillation](#entanglement-distillation).

*From* [5.3](lessons/05-03-bell-state-measurement-and-swapping.md), [5.4](lessons/05-04-repeater-chains-and-distillation.md)

### QKD rates

$$e=\tfrac23(1-F)$$

$$h(x)=-x\log_2x-(1-x)\log_2(1-x)$$

$$r=1-2h(e)$$

$$K=R\,s\,r$$

| Protocol | Rate scales as | Notes |
|---|---|---|
| direct (BBM92, BB84) | $\eta$ | under PLOB |
| MDI-QKD | $\eta$ | detector side channels removed |
| twin-field | $\sqrt\eta$ | middle station, phase stabilization |
| trusted nodes | any distance | relays hold the key |

Key cliff: $e=11.0\%$, $F=0.835$. CHSH-violating but keyless band: $0.780<F<0.835$.

*From* [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md); see [asymptotic key rate](#asymptotic-key-rate)

### Timing

$$\sigma_\text{tot}=\sqrt{\sigma_1^2+\sigma_2^2}$$

$$\sigma=\text{FWHM}/2.355$$

$$\delta(t)=\delta_0+y\,t$$

$$c(\delta)=\Phi\!\left(\tfrac{\tau/2-\delta}{\sigma}\right)-\Phi\!\left(\tfrac{-\tau/2-\delta}{\sigma}\right)$$

| Case | Value |
|---|---|
| GothamQ combined jitter | 361 ps FWHM, $\sigma=153$ ps |
| 1 ns window, offsets 100 / 300 / 500 ps | keeps 0.995 / 0.904 / 0.500 of true pairs |
| 1 ppm offset | 1,000 ns per s; a 1 ns window lost in 1 ms |
| NTP | milliseconds: a million times too coarse |

*From* [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [6.2](lessons/06-02-the-network-stack-and-timing.md); see [timing jitter](#timing-jitter), [White Rabbit timing](#white-rabbit-timing)

## Products and players

As of 2026-10. Only facts from company materials, press and the two papers; anything else in the lessons is labelled hypothetical.

### Carina product stack

Qunnect's boxes, one per step of the pipeline; **Carina** is the rack-mounted system built from them, which Qunnect calls the first commercially available turnkey entanglement-distribution system (the company's claim).

| Box | What it is | What it fixes | Figure of merit | Lesson |
|---|---|---|---|---|
| QU-SRC (QU-Source) | warm Rb-87 SFWM pair source, 1324 + 795 nm | birth of narrowband, memory-matched pairs, no conversion | rate vs fidelity at a stated window | [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md), [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| QU-APC | automated polarization compensation (injector + compensator) | the fiber's drifting rotation | fidelity held over time; uptime | [4.1](lessons/04-01-learning-the-fibers-rotation.md), [4.2](lessons/04-02-compensation-as-a-control-loop.md) |
| QU-MEM | warm-vapor EIT memory for the 795 nm photon | waiting for heralds and for the other link | storage vs $t_h(1+1/p)$, efficiency, modes | [5.1](lessons/05-01-why-memories.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md) |
| QU-SWAP | Bell-state measurement module | joining two links | swap success, swapped fidelity | [5.3](lessons/05-03-bell-state-measurement-and-swapping.md) |
| QU-SYNC | quantum synchronizer | shared clock between sites; which herald goes with which photon | timing offset vs window (no published spec) | [6.2](lessons/06-02-the-network-stack-and-timing.md) |
| QU-LOCK | atomic frequency reference | keeping lasers on Rb lines and independent photons the same colour | — | [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md), [5.3](lessons/05-03-bell-state-measurement-and-swapping.md) |

Layer mapping (6.2): QU-SRC, QU-APC, QU-LOCK physical; QU-MEM link; QU-SWAP the network-layer mechanism; QU-SYNC under every layer; no routing or orchestration product named. Published numbers exist for the source, APC and memory only; neither paper reports a swap between independent sources. "Room temperature" describes the sources and memories (no cryogenics or laser cooling); the SNSPDs for 1324 nm are cryogenic.

*Introduced:* [1.1](lessons/01-01-what-a-quantum-network-delivers.md), [1.2](lessons/01-02-the-stack-in-one-picture.md); [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md), [5.3](lessons/05-03-bell-state-measurement-and-swapping.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md), [6.2](lessons/06-02-the-network-stack-and-timing.md)

### Deployments and funding

| Item | Fact |
|---|---|
| New York (GothamQ) | 34 km buried loop, leased from Crown Castle; paper 2024 |
| Bozeman | Montana State University, installed September 2025; described as the region's first entanglement network |
| Berlin | with Deutsche Telekom's T-Labs; January 2026, teleportation over a 30 km loop of **live** commercial fiber |
| Albuquerque | ABQ-Net with Roadrunner Venture Studios, launched November 2025; New Mexico's first quantum network, "open-access", tied to the state's quantum-economy initiative |
| Funding | 10 million dollar Series A extension, June 2025, led by Airbus Ventures with Cisco Investments and Quantonation |
| DARPA | August 2026 contract to advance Carina's next-generation polarization compensation |

None of these is a multi-hop memory repeater; all are testbed or regional-innovation networks (the "testbed economy", [1.1](lessons/01-01-what-a-quantum-network-delivers.md), [6.3](lessons/06-03-beyond-keys.md)).

### Other companies and platform bets

| Player | Bet |
|---|---|
| IonQ | vertical: acquired Qubitekk (sources), a controlling stake in ID Quantique (QKD), Lightsynq (memory-based interconnects, completed June 2025), Skyloom (space links, reported January 2026) |
| Cisco | quantum networking research; Cisco Investments is a Qunnect investor; reported partners Aliro and Nu Quantum |
| Aliro | software to design, simulate and orchestrate quantum networks ("entanglement as a service") |
| Nu Quantum (UK) | quantum networking for data-center-scale quantum computing |
| Welinq (France) | cold-atom memories and interconnects for networked quantum computing; partnered with Pasqal (2026) |
| Toshiba, ID Quantique, others | QKD boxes, prepare-and-measure or entanglement-based: the most mature segment |
| Testbeds | Boston-area 50 km (Harvard/MIT/Lincoln Lab, SiV diamond memories, Bersin et al. 2024); Delft/QuTech (NV centers); Chicago-area DOE testbeds; EuroQCI |

Qunnect is the horizontal bet: a vendor-neutral, telecom-grade, room-temperature entanglement layer in carrier fiber ([5.5](lessons/05-05-repeater-generations-and-platform-bets.md)).

### Policy positions

| Body | Position |
|---|---|
| NSA (US) | does not support QKD for National Security Systems; does not expect to certify QKD products unless its limitations are overcome; prefers post-quantum cryptography as cheaper and easier to maintain |
| NCSC (UK) | does not support QKD for government or military use; PQC is the priority |
| ANSSI, BSI, NLNCSA, Sweden | joint position paper (2024): PQC migration is the clear priority; QKD usable only in niche cases |
| EU | funds EuroQCI (quantum communication infrastructure) anyway |
| China | has built large QKD networks |

Cited limitations: partial solution (no authentication by itself), special-purpose hardware, infrastructure cost and insider risk, security depends on implementation. PQC standards (NIST, 2024) are owned by cryptography 4.5. Lesson: [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md); entry: [QKD vs PQC](#qkd-vs-pqc).

## Glossary in plain English

For meetings. No math.

| Term | Means |
|---|---|
| Entanglement distribution | delivering shared Bell pairs between two sites; the product, not data |
| Bell pair / ebit | one unit of shared entanglement, spent on a key bit, a teleported qubit or a remote gate |
| Fidelity | how close delivered pairs are to perfect; meaningless without the rate it was measured at |
| Heralding | a classical "it worked" message confirming a pair was delivered |
| Swapping | joining two links into one by a measurement in the middle |
| Repeater | a chain of short links joined by memories and swaps, to beat the loss wall |
| Trusted node | a relay that sees the key; how long-haul QKD works today |
| Quantum memory | a device that holds a qubit until the network is ready to use it |
| Coherence time | how long a memory holds before the qubit fades |
| Uptime | share of time the link is delivering, not recalibrating |
| Compensation (APC) | automatic undoing of the fiber's polarization scrambling |
| Polarization drift | the fiber's scrambling changing with temperature, stress and handling |
| Dark fiber | an unlit strand rented for one user |
| Lit fiber / coexistence | fiber already carrying classical traffic, shared with the quantum channel |
| O-band / C-band | telecom wavelength bands near 1310 nm and 1550 nm; Qunnect uses the O-band, classical traffic the C-band |
| dB | logarithmic loss: every 3 dB halves the photons, every 10 dB keeps a tenth |
| SNSPD | superconducting single-photon detector: the best telecom detector, cryogenic |
| SPAD | avalanche photodiode single-photon detector: room temperature, slower |
| Jitter | timing uncertainty of a detector click |
| Accidentals | chance coincidences that look like pairs but are noise |
| CAR | true pairs per accidental; a source-quality number |
| Frequency conversion | changing a photon's colour to match another device; costs efficiency and noise |
| QKD | quantum key distribution: making shared secret keys from quantum signals |
| PQC | post-quantum cryptography: classical software believed safe against quantum computers |
| QBER | the error rate in a QKD key before correction; above 11% no key |
| CHSH / Bell test | a statistical test that proves entanglement without trusting the equipment |
| PLOB bound | the hard ceiling on what a link without repeaters can carry |
| Testbed economy | buyers paying to learn rather than to run production traffic |
| Turnkey | runs on the customer's fiber with no physicist on site: automatic compensation, locking, monitoring |

## Questions to ask about any claim

From [6.3](lessons/06-03-beyond-keys.md)'s close, sharpened by [1.3](lessons/01-03-fidelity-and-rate.md), [3.3](lessons/03-03-proving-a-link-is-entangled.md) and [4.3](lessons/04-03-reading-the-gothamq-result.md):

1. **Fidelity at what rate?** One number without the other is marketing (GothamQ: 0.99 at $2\times10^4$, above 0.84 at $5\times10^5$).
2. **Over what distance and loss?** Lab spool, deployed fiber, or live traffic? In dB, at which wavelength?
3. **For how long?** Uptime over days, or a best minute?
4. **How was fidelity measured?** Tomography, a two-basis bound (which bases?), a model, or a CHSH value? Bound or estimate? Accidentals subtracted? What window?
5. **What is cryogenic?** "Room temperature" may describe the atoms but not the detectors.
6. **Which noise model sits behind a threshold?** (0.780 Werner vs 77.5% in the memory paper.)
7. **Repeaterless, trusted-node, or a middle station?** ([1.4](lessons/01-04-the-loss-wall.md))
8. **For a memory: storage time divided by herald time, efficiency, modes?** ([5.1](lessons/05-01-why-memories.md))
9. **For a swap: swapped fidelity at a stated rate, between independent sources?** ([5.3](lessons/05-03-bell-state-measurement-and-swapping.md))
10. **Recovery time after a fiber jump?** ([4.2](lessons/04-02-compensation-as-a-control-loop.md))

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Qubit, Bloch sphere, orthogonal states antipodal | [quantum-computing 1.1](../quantum-computing/lessons/01-01-the-qubit-and-the-bloch-sphere.md) |
| Every single-qubit gate is a rotation $e^{-i\theta\hat n\cdot\vec\sigma/2}$; Pauli matrices | [quantum-computing 1.2](../quantum-computing/lessons/01-02-single-qubit-gates.md) |
| Bell states and how to make them; CNOT | [quantum-computing 2.1](../quantum-computing/lessons/02-01-bell-states-and-generating-entanglement.md) |
| Density matrices, partial trace, $I/4$ maximally mixed | [quantum-computing 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) |
| No-cloning; classical measure-and-prepare limit 2/3 | [quantum-computing 2.3](../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) |
| Teleportation (1 ebit + 2 cbits) and ideal swapping (P3) | [quantum-computing 2.4](../quantum-computing/lessons/02-04-quantum-teleportation.md) |
| CHSH, Tsirelson $2\sqrt2$, device independence | [quantum-computing 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) |
| Heisenberg-style $1/N$ phase scaling | [quantum-computing 4.2](../quantum-computing/lessons/04-02-quantum-phase-estimation.md) |
| Depolarizing channel; channels compose | [quantum-computing 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md) |
| Repetition-code parity checks | [quantum-computing 5.2](../quantum-computing/lessons/05-02-the-three-qubit-codes.md) |
| Fault-tolerance threshold (2G and 3G repeaters) | [quantum-computing 5.5](../quantum-computing/lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md) |
| Rabi frequency, detuning, two-level atom | [photonics-quantum-optics 1.2](../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md) |
| Linewidth and coherence time as Fourier partners | [photonics-quantum-optics 2.1](../photonics-quantum-optics/lessons/02-01-temporal-coherence-g1.md) |
| Squeezed-light interferometry | [photonics-quantum-optics 3.5](../photonics-quantum-optics/lessons/03-05-squeezed-states.md) |
| Heralded single photons, detector efficiency, dark counts, multi-pair emission | [photonics-quantum-optics 3.6](../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md) |
| Beam splitter, Hong–Ou–Mandel dip, $V=v^2$ | [photonics-quantum-optics 4.1](../photonics-quantum-optics/lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md) |
| Phase matching, SPDC | [photonics-quantum-optics 4.3](../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md) |
| Polarization Bell states, $E(a,b)$, photonic CHSH test | [photonics-quantum-optics 4.4](../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md) |
| BB84, sifting, 25% intercept-resend error | [photonics-quantum-optics 4.5](../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md) |
| Classical polarization, waveplates, birefringence | [waves-optics 4.3](../waves-optics/lessons/04-03-polarization.md) |
| Dispersion and pulse spreading | [waves-optics 4.4](../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md) |
| Channel capacity | [information-theory 3.1](../information-theory/lessons/03-01-discrete-channels-capacity.md) |
| Binary entropy $h(x)$, BSC capacity $1-h$, erasure capacity $1-\varepsilon$ | [information-theory 3.2](../information-theory/lessons/03-02-canonical-channels.md) |
| Feedback loop: plant, sensor, actuator | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) |
| Layered network model | [computer-networks 1.1](../computer-networks/lessons/01-01-packet-switching-and-layers.md) |
| Dijkstra, link-state routing | [computer-networks 3.3](../computer-networks/lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) |
| One-time pad | [cryptography 1.2](../cryptography/lessons/01-02-perfect-secrecy-and-the-one-time-pad.md) |
| Post-quantum cryptography, NIST 2024 standards, harvest-now-decrypt-later, hybrid key exchange | [cryptography 4.5](../cryptography/lessons/04-05-post-quantum-cryptography.md) |
| Bose–Einstein occupation $1/(e^{h\Omega/k_BT}-1)$ | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| Independence $P(A\cap B)=P(A)P(B)$ | [probability-theory 3.1](../probability-theory/lessons/03-01-independence.md) |
| Geometric/exponential memorylessness, Poisson arrivals | [operations-research 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md) |
| Gram–Schmidt | [linalg-refresher 4.3](../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) |
| SVD (least-squares rotation fitting) | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Look-at frame from two vectors | [computer-graphics 1.4](../computer-graphics/lessons/01-04-the-camera-and-view-transform.md) |
| Stated without proof here: PLOB (2017), Shor–Preskill key rate, Lütkenhaus BSM no-go, Fleischhauer–Lukin $v_g$, quantum erasure capacity $1-2\varepsilon$, $\lvert\Phi^+\rangle$ from Rb Zeeman structure | cited in [1.4](lessons/01-04-the-loss-wall.md), [6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md), [5.3](lessons/05-03-bell-state-measurement-and-swapping.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md), [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md) |

## Pitfalls

### Symbols that collide

- $p$ is per-attempt success in 1.2 and 5.1 but the Werner good fraction elsewhere; $a$ is a Jones amplitude in 2.2 but the Werner fraction in 3.2 and 4.3. *([1.2](lessons/01-02-the-stack-in-one-picture.md), [1.3](lessons/01-03-fidelity-and-rate.md), [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md))*
- $\tau$ is DGD (2.3), coincidence window (2.4, 3.2, 6.2) and memory coherence time (5.1–5.5). *([2.3](lessons/02-03-drift-in-buried-fiber.md), [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [5.1](lessons/05-01-why-memories.md))*
- $S$ is the CHSH value and, in 2.4, signal per window; $\rho$ is a density matrix and, in 2.4, the Raman coefficient. *([2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md))*
- $R$ is the R polarization, the $SO(3)$ rotation and a rate; $D$ is the D polarization, the drift constant and the dark state. *([4.1](lessons/04-01-learning-the-fibers-rotation.md), [4.2](lessons/04-02-compensation-as-a-control-loop.md), [5.2](lessons/05-02-room-temperature-quantum-memories.md))*
- $V$ is basis visibility (3.3), HOM visibility (5.3) and GHZ contrast (6.3); $\delta$ is retardance, frame error, clock offset and a blind angle. *([3.3](lessons/03-03-proving-a-link-is-entangled.md), [5.3](lessons/05-03-bell-state-measurement-and-swapping.md), [6.3](lessons/06-03-beyond-keys.md))*
- $L$ is link length in 5.1 but total chain length in 5.4–5.5 (link length $L_0$). *([5.5](lessons/05-05-repeater-generations-and-platform-bets.md))*

### Reading fidelity numbers

- A fidelity without a rate is half a number; never pair 99% with $5\times10^5$ pairs/s. *([1.3](lessons/01-03-fidelity-and-rate.md), [4.3](lessons/04-03-reading-the-gothamq-result.md))*
- A lower bound is not the value: "bounded above 0.937" means about 0.95 for Werner data, at the bracket's midpoint. *([4.3](lessons/04-03-reading-the-gothamq-result.md))*
- The bracket is not an error bar; statistical errors come on top. *([3.3](lessons/03-03-proving-a-link-is-entangled.md))*
- H/V counts alone give only a ceiling; a classical HH/VV mixture fakes them, and a rotation about $z$ is invisible to them. *([2.2](lessons/02-02-polarization-as-a-qubit.md), [3.3](lessons/03-03-proving-a-link-is-entangled.md))*
- Failing CHSH does not mean not entangled: Werner pairs with $0.5<F<0.780$ are entangled. *([1.3](lessons/01-03-fidelity-and-rate.md))*
- "The CHSH threshold" depends on the noise model: 0.780 (Werner) vs 77.5% (memory paper). *([1.3](lessons/01-03-fidelity-and-rate.md))*
- A high fidelity bound and a CHSH violation answer different questions; only $S>2$ is device-independent. *([3.3](lessons/03-03-proving-a-link-is-entangled.md))*
- Fidelities do not multiply through a swap; good fractions do (0.80 and 0.80 give 0.653). *([5.3](lessons/05-03-bell-state-measurement-and-swapping.md))*
- The 90.2% memory figure is a model prediction at a narrow window; the tomography bound at 2.82 ns is 86.5%; the 1,200 pairs/s point is 80% at 7.7 ns. *([5.2](lessons/05-02-room-temperature-quantum-memories.md))*

### Loss and distance claims

- dB are logarithmic: 0.2 dB/km over 100 km is 20 dB, 1% kept, not 20% lost. *([2.1](lessons/02-01-loss-and-the-telecom-bands.md))*
- Datasheet dB/km underpredicts deployed fiber (GothamQ 0.425 vs 0.33); measure at your own wavelength. *([2.1](lessons/02-01-loss-and-the-telecom-bands.md))*
- Better detectors or brighter sources move you toward PLOB, never past it; a 10 times faster clock buys exactly 10 dB. *([1.4](lessons/01-04-the-loss-wall.md))*
- Twin-field QKD does not beat PLOB without a node: it has a middle station and makes key, not entanglement. *([1.4](lessons/01-04-the-loss-wall.md))*
- The O-band was not chosen for lowest loss (C-band is lower); rubidium sets 1324 nm. *([2.1](lessons/02-01-loss-and-the-telecom-bands.md))*
- Optical amplifiers cannot help a single photon; route quantum channels around them. *([2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md))*

### Polarization and compensation

- A rotation-caused fidelity drop leaves the pair maximally entangled; only noise is irreversible. *([2.2](lessons/02-02-polarization-as-a-qubit.md))*
- Lab angles double on the sphere. *([2.2](lessons/02-02-polarization-as-a-qubit.md))*
- Calibrating at the centre wavelength leaves other colours rotated; probe light must share wavelength and fiber. *([2.3](lessons/02-03-drift-in-buried-fiber.md))*
- A probe that comes back unchanged proves nothing about rotations about its own axis; one probe's state fidelity overstates the pair's. *([4.1](lessons/04-01-learning-the-fibers-rotation.md))*
- A 99% probe trigger is not 99% pair fidelity (0.99 probe is 0.985 pair under the H, D, R average assumption). *([4.2](lessons/04-02-compensation-as-a-control-loop.md))*
- Correction stops just above 99%, so the next check often triggers again; faster checks switch photons out more. *([4.2](lessons/04-02-compensation-as-a-control-loop.md))*
- Buried fiber also jumps; scheduled recalibration loses fidelity between jumps. *([2.3](lessons/02-03-drift-in-buried-fiber.md), [4.3](lessons/04-03-reading-the-gothamq-result.md))*

### Detectors and noise

- $g_{SI}=1+\text{CAR}$ only for CAR measured with both analyzers at H; polarization-blind CAR gives $1+2\,\text{CAR}$. *([3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md))*
- Higher detector efficiency does not improve CAR; lower jitter does. *([3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md))*
- Filtering is free only down to the photon's own width and the detector jitter. *([2.4](lessons/02-04-sharing-fiber-with-classical-traffic.md))*
- "Room temperature" means source and memory; the SNSPD is cryogenic and the vapor cell is heated. *([1.2](lessons/01-02-the-stack-in-one-picture.md), [3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md), [3.2](lessons/03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md))*
- Crystals can make narrow photons, at the cost of cavities, locking and rate. *([3.1](lessons/03-01-rubidium-vapor-vs-crystal-sources.md))*

### Memories and repeaters

- A memory does not raise per-attempt success; it removes the coincidence requirement. *([5.1](lessons/05-01-why-memories.md))*
- Light sets the attempt rate ($v/L$ per mode); only more modes beat it. *([5.1](lessons/05-01-why-memories.md))*
- Herald time depends on geometry: $L/v$ midpoint, $2L/v$ source-at-one-end; say which. *([5.1](lessons/05-01-why-memories.md), [5.5](lessons/05-05-repeater-generations-and-platform-bets.md))*
- Coherence time overstates useful time; ask for utility time at a threshold. *([5.2](lessons/05-02-room-temperature-quantum-memories.md))*
- 9.5% is internal efficiency with laser pulses; with source photons it is 5.2%, before filters and detectors. *([5.2](lessons/05-02-room-temperature-quantum-memories.md))*
- Warm atoms fail by leaving the beam, not by Doppler. *([5.2](lessons/05-02-room-temperature-quantum-memories.md))*
- Partial distinguishability keeps the click rate and silently lowers swapped fidelity. *([5.3](lessons/05-03-bell-state-measurement-and-swapping.md))*
- Swapping without purification makes fidelity decay as $p^{2^n}$. *([5.4](lessons/05-04-repeater-chains-and-distillation.md))*
- Distillation needs two-way messages and memories meanwhile; for key, one round pays only below about 0.861. *([5.4](lessons/05-04-repeater-chains-and-distillation.md))*
- Repeater generations are architectures, not product versions; storage time alone does not pick the winning platform. *([5.5](lessons/05-05-repeater-generations-and-platform-bets.md))*

### Protocols and applications

- A quantum network sends no user data, and entanglement cannot signal faster than light. *([1.1](lessons/01-01-what-a-quantum-network-delivers.md))*
- "Entanglement over X km" is not "teleportation over X km". *([1.1](lessons/01-01-what-a-quantum-network-delivers.md))*
- The herald is classical bits, not the qubit. *([1.2](lessons/01-02-the-stack-in-one-picture.md))*
- $0.780<F<0.835$ violates CHSH but gives no key. *([6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md))*
- QKD still needs an authenticated classical channel; it expands a key. *([6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md))*
- The asymptotic key rate is a ceiling. *([6.1](lessons/06-01-entanglement-based-qkd-and-the-pqc-debate.md))*
- Fewest hops is not best; route on $-\ln p$. *([6.2](lessons/06-02-the-network-stack-and-timing.md))*
- Setting clocks once is not enough: 1 ppm loses a 1 ns window in 1 ms. *([6.2](lessons/06-02-the-network-stack-and-timing.md))*
- The quantum stack is not TCP/IP with qubits: no retransmission copies. *([6.2](lessons/06-02-the-network-stack-and-timing.md))*
- Entangled sensing gains survive only while $V>1/\sqrt N$; blind computing does not need entanglement; processor linking starts at metres. *([6.3](lessons/06-03-beyond-keys.md))*

---

## Conventions

- **One card per course**, covering every lesson; the linter checks that every lesson file is cited here.
- **Poincaré convention:** H $+z$, V $-z$, D $+x$, A $-x$, L $+y$, R $-y$.
- **Herald geometry:** midpoint station, $t_h=L/v$, unless a lesson says source-at-one-end ($2L/v$).
- **Thresholds** are Werner values unless stated.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs.**
