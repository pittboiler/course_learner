# Quantum Networking — Syllabus

> Physics · Tier 2 · ~22 lessons · Prereqs: [photonics-quantum-optics](../photonics-quantum-optics/syllabus.md), [quantum-computing](../quantum-computing/syllabus.md) · Light: [information-theory](../information-theory/syllabus.md), [control-systems](../control-systems/syllabus.md) · Roadmap id: `quantum-networking`

## Goal

Understand a quantum network as a machine that delivers **entanglement of a known quality (fidelity) at a known rate**, and learn it the way someone who has to help run a quantum-networking company needs to. The running case study is Qunnect (Brooklyn), whose hardware follows the whole pipeline. It makes photon pairs in warm rubidium vapor, sends one photon of each pair through buried city fiber, undoes the fiber's polarization scrambling automatically, stores photons in a room-temperature memory, and swaps entanglement between links. The course carries two levels of understanding throughout. The **physics** gives you enough to talk credibly with the engineers and check a number. The **business lens** shows why each piece of hardware exists, what it costs you if it fails, and what a customer, funder or competitor would ask about it. Every lesson from Module 2 on ends with a short **Business lens** section that turns the physics into that practical judgment.

Module 1 is a standalone, high-level map that can be read before a first conversation. Modules 2–5 open each box on the map. Module 6 covers what the network is *for*: keys, timing, linked quantum computers and sensors. Deliberately skipped: the device physics of qubit platforms (superconducting, ion, NV centers are compared, not derived), satellite links, formal finite-key security proofs, and anything requiring a dedicated business-strategy module (Jacob's call: the business content lives inside the lessons).

### Scope discipline

Most of the field's prerequisites are already owned by built courses. This course **uses** them and cites them, and owns only the network-specific layer.

| Topic | Owner | This course's angle |
|---|---|---|
| Qubits, Bell states, teleportation, ideal entanglement swapping (QC 2.4 P3), CHSH game, density matrices, Kraus channels, no-cloning | [`quantum-computing`](../quantum-computing/syllabus.md) 2.1–2.6, 5.1 | Used freely and re-cast as **imperfect** resources whose fidelity is tracked through every step |
| Detectors (efficiency, dark counts, heralding), the HOM dip, SPDC and phase matching, polarization Bell tests, BB84 and intercept-resend | [`photonics-quantum-optics`](../photonics-quantum-optics/syllabus.md) 3.6, 4.1, 4.3–4.5 | Cited; extended to network-grade figures of merit (accidentals, CAR, $g_{SI}$, two-basis fidelity bounds, BBM92) |
| Malus's law, birefringence (taste) | [`waves-optics`](../waves-optics/syllabus.md) 4.3 | Extended to Jones calculus, SU(2) fiber rotations and drift |
| Binary entropy, channel capacity | [`information-theory`](../information-theory/syllabus.md) | Used for key rates and the PLOB bound |
| Feedback loops, bandwidth | [`control-systems`](../control-systems/syllabus.md) 1.1 | Used for polarization compensation |
| Protocol layering | [`computer-networks`](../computer-networks/syllabus.md) 1.1 | Used as the template for the quantum network stack |
| RSA/DH, post-quantum cryptography | [`cryptography`](../cryptography/syllabus.md) 4.5 | Cited in the QKD-vs-PQC debate |
| **Fiber as a quantum channel, polarization compensation, warm-vapor sources and memories, network-grade link budgets, swapping/distillation with noisy pairs, repeater architectures, the quantum network stack, the industry landscape** | **nobody, so this course owns them** | |

## Dangerous Checklist

When you finish, you can:

- [ ] Explain in two minutes what a quantum network delivers, who pays for it today, and which claims about it are hype
- [ ] Map any quantum-networking product onto the stack: source, channel, compensation, memory, swap, sync
- [ ] Convert a fiber span to transmission in dB and explain why O-band, C-band and 795 nm photons behave so differently
- [ ] Represent fiber birefringence as a rotation of the Poincaré (Bloch) sphere, and say why it drifts and why it depends on wavelength
- [ ] Compute coincidence and accidental rates, the coincidence-to-accidental ratio, and a fidelity estimate from a link's raw numbers
- [ ] Bound a link's fidelity from two-basis polarization counts, and turn a fidelity into a CHSH value
- [ ] Explain why two reference states fix an unknown fiber rotation, and size the feedback loop that tracks it
- [ ] Build an end-to-end link budget: pair rate in, delivered fidelity and pairs per second out
- [ ] Propagate fidelity through teleportation, entanglement swapping and one round of distillation for Werner states
- [ ] Explain why memories turn link-success scaling from $1/p^2$ toward $1/p$, and rate a memory on its figures of merit
- [ ] State the PLOB bound and what repeaters, and twin-field QKD, do about it
- [ ] Compute an entanglement-based QKD key rate from a measured error rate, and explain why security agencies prefer post-quantum cryptography

## Modules

### Module 1: The map

The whole field on one page: what is delivered, how the hardware stack produces it, how it is scored, and the wall it runs into.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What a quantum network delivers, and who pays | Explain the payload (entanglement, not bits) and the use cases in two minutes | entanglement as a resource, stages of a quantum internet, QKD vs everything else, testbed economy vs demand |
| 1.2 | The stack in one picture | Map source → fiber → compensation → memory → swap → sync onto real products | heralding, Qunnect's product line (QU-SRC, QU-APC, QU-MEM, QU-SWAP, QU-SYNC, Carina rack), what each box fixes |
| 1.3 | Fidelity and rate | Read any link claim through the two numbers that matter | fidelity to a Bell state, Werner states, $F>\tfrac12$ (entangled), $F\approx0.78$ (CHSH), teleportation fidelity $(2F+1)/3$ vs the classical $2/3$, the rate-fidelity tradeoff |
| 1.4 | The loss wall | Explain why loss caps distance and why repeaters are the grand prize | exponential fiber loss, no-cloning means no amplifiers, PLOB bound $-\log_2(1-\eta)$, repeaters in one sentence |

**Boss problem 1:** A vendor's press release claims "entanglement over 100 km of fiber at one million pairs per second with 99% fidelity." Work out the source rate the claim implies at 0.33 dB/km and at 0.2 dB/km. Check it against the repeaterless PLOB limit at a 1 GHz attempt rate, and list the three numbers you would ask for before believing it: where the fidelity was measured, at what rate, and with which detectors.

### Module 2: Photons in real fiber

What happens to a photon in buried, commercial fiber, and why it shapes product decisions.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Loss and the telecom bands | Do fiber-loss math fluently and explain Qunnect's two wavelengths | dB and dB/km, O-band (1324 nm) vs C-band, why 795 nm cannot travel far, splices and connectors, bichromatic pairs |
| 2.2 | Polarization as a qubit | Picture polarization on the Poincaré sphere and see it as the Bloch sphere | Jones vectors, H/V/D/A/R/L, waveplates as rotations, Poincaré ↔ Bloch, polarization Bell states |
| 2.3 | Drift in buried fiber | Model deployed fiber as a random, time-varying, wavelength-dependent rotation | stress/temperature birefringence, PMD, rotation per nanometer, why narrowband photons matter, polarization vs time-bin encoding |
| 2.4 | Sharing fiber with classical traffic | Estimate the noise classical light adds and why coexistence sells to telcos | spontaneous Raman scattering, filtering in time and frequency, band separation, dark fiber vs lit fiber |

**Boss problem 2:** A GothamQ-style 34 km loop has a measured fiber loss of 14.45 dB, and the total loss from source to detector is 17.46 dB. Compute the dB/km and explain why it is above the 0.33 dB/km datasheet value. Compute the end-to-end transmission. Estimate what the loss would be if the 795 nm photon were sent instead. Explain why the compensation must be done at the quantum photon's own wavelength, and what that implies for which photon of the pair should travel.

### Module 3: Sources, detectors, and proving entanglement

Where the pairs come from, how they are counted, and how a link proves it is entangled.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Rubidium-vapor sources vs crystal sources | Explain Qunnect's source physics and why it is built to match its memories | spontaneous four-wave mixing in a ladder scheme (780 + 1367 nm in, 1324 + 795 nm out), narrow linewidth (< 1 GHz), atom-compatible photons, SPDC contrast |
| 3.2 | Detectors, noise, and the brightness–fidelity tradeoff | Predict accidental coincidences and pick the right detector | SNSPD vs SPAD, jitter and coincidence windows, $R_\text{acc}=R_1R_2\tau$, CAR, multi-pair emission, $F=1-\tfrac{3}{2(1+g_{SI})}$ |
| 3.3 | Proving a link is entangled | Turn coincidence counts into a fidelity bound and a CHSH value | two-basis (Z and X) visibility, Cauchy–Schwarz fidelity bounds from HH/VV/HV/VH and DD/AA/DA/AD counts, tomography in brief, $S=2\sqrt2\,p$ |

**Boss problem 3:** Given singles rates, a coincidence window and coincidence counts in both the H/V and D/A bases, compute the accidental rate, the CAR, the fidelity bounds, and the implied CHSH value. Decide whether a customer's entanglement-based key would be positive at that fidelity.

### Module 4: Keeping the channel alive

Automated polarization compensation: Qunnect's core differentiator, from the math of learning a rotation to reading the 15-day result.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Learning the fiber's rotation | Explain why two non-orthogonal reference states fix an unknown SU(2) rotation | probe states, Stokes vectors, rotation determined by two vectors, inverting the rotation, why one reference is not enough |
| 4.2 | Compensation as a control loop | Match the correction rate to the drift rate and see the uptime tradeoff | injector/compensator pair, polarimeter error signal, gradient descent on an actuator, trigger threshold, duty cycle, time-division multiplexing of probe light |
| 4.3 | Reading the GothamQ result | Unpack "34 km, 15 days, 99.84% uptime, ~99% fidelity" as an end-to-end budget | rate vs fidelity curve, source-limited vs channel-limited fidelity, compensated vs uncompensated path, uptime as minutes of downtime, link budget assembly |

**Boss problem 4:** Build the full budget for a 34 km city loop. Start from the source pair rate, then apply the 17.46 dB of loss and detector efficiencies of 0.90 and 0.68 to get the delivered coincidence rate. Then find the fidelity at that pump level from $g_{SI}$. Finally, given a 20 s compensation cadence and a 30–1000 ms correction cycle, bound the downtime and compare it with the reported 99.84%.

### Module 5: Memories and repeaters

How a network gets past the loss wall, and which platform bets the industry is making.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Why memories | Explain the waiting-time problem and how storage fixes its scaling | probabilistic links, expected waiting $1/p^2$ without memory vs $(3-2p)/(p(2-p))\approx 3/(2p)$ with, heralding round-trip time, synchronization |
| 5.2 | Room-temperature quantum memories | Explain how a rubidium cell stores light and rate a memory on its figures of merit | EIT in a Λ system, dark-state polariton, control-field storage/retrieval, efficiency, coherence time, bandwidth, noise/SNR, fidelity; warm vs cold vs solid-state |
| 5.3 | Bell-state measurement and swapping | Swap entanglement between photons from independent sources | linear-optics BSM and its 50% ceiling, HOM recap, indistinguishability across sources (frequency, timing, polarization), Werner swap rule $p'=p_1p_2$ |
| 5.4 | Repeater chains and distillation | Track fidelity and rate along a chain and decide when purification pays | fidelity decay with swaps, BBPSSW recurrence, success probability, nested repeaters, rate cost |
| 5.5 | Repeater generations and platform bets | Place Qunnect and its competitors on the repeater roadmap | first/second/third-generation repeaters, all-photonic repeaters, platform choices (warm vapor, cold atoms, ions, NV/SiV, rare-earth), consolidation (dated landscape) |

**Boss problem 5:** Two 25 km links, each delivering Werner pairs of fidelity 0.95, are joined by one swap. Compute the delivered fidelity, then the result and the cost of one round of BBPSSW distillation. Compare the light's one-way travel time over 25 km with a 2.6 µs memory coherence time, and say plainly what today's warm-vapor memory can and cannot yet do in a repeater.

### Module 6: Protocols and applications

What the entanglement is for: keys, timing, linked processors and sensors, judged honestly.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Entanglement-based QKD, and the PQC debate | Compute a key rate from an error rate and explain the security agencies' skepticism | BBM92/E91, QBER for Werner states $e=\tfrac23(1-F)$, asymptotic rate $1-2h(e)$, the 11% threshold, MDI and twin-field QKD in brief, NSA/NCSC/European positions, PQC migration |
| 6.2 | The network stack and timing | Layer a quantum network the way the internet is layered, and size its timing needs | physical/link/network/transport layers for entanglement, heralded link layer, entanglement routing, classical control plane, clock sync (White Rabbit), why sub-nanosecond timing matters |
| 6.3 | Beyond keys | Assess linking quantum computers, blind computing, and clock and sensor networks | distributed quantum computing and interconnects, blind/delegated computing, entanglement-enhanced sensing and clocks, long-baseline interferometry, which are real today |

**Boss problem 6:** A bank wants a 30 km entanglement-based QKD link. From a delivered fidelity and pair rate, compute the QBER, the asymptotic key fraction and the key rate. Then write a three-sentence answer to the bank's security officer, who has read the NSA's position on QKD.

## Sources of truth

- Craddock et al., "Automated distribution of polarization-entangled photons using deployed New York City fibers," *PRX Quantum* 5, 030330 (2024), arXiv:2404.08626: the GothamQ numbers and the $g_{SI}$ fidelity model.
- Wang et al., "High-fidelity entanglement between a telecom photon and a room-temperature quantum memory," arXiv:2503.11564 (2025): the warm-vapor memory numbers.
- Wehner, Elkouss & Hanson, "Quantum internet: A vision for the road ahead," *Science* 362 (2018); Azuma et al., "Quantum repeaters," *Rev. Mod. Phys.* 95, 045006 (2023); Pirandola et al., "Fundamental limits of repeaterless quantum communications," *Nat. Commun.* 8 (2017).
- Nielsen & Chuang for notation; Werner-state conventions $\rho=p\,|\Phi^+\rangle\langle\Phi^+|+(1-p)\,I/4$, $F=(1+3p)/4$ throughout.

## Notes

- **Built for a purpose (2026-10-06).** Jacob asked for this course while preparing to reach out about a Chief of Staff role at Qunnect. The physics is taught at Tier 2 depth, but every lesson's last word is practical: what the result means for product, cost, customers or claims. Landscape facts (companies, deployments, funding, policy) are **dated** and live on the reference card.
- **Numbers.** Qunnect's figures are taken from the two papers above, not from press releases. Where a press figure and a paper figure differ (for example the "15 days, 99.84% uptime" headline was measured at about $2\times10^5$ pairs/s with fidelity bounds of 0.937–0.967, while the ~99% fidelity was at about $2\times10^4$ pairs/s), lessons say which is which.

## Revision note — 2026-10-06 (build)

Built as specified (22 lessons). Corrections made while building, all verified in Python and reflected on the reference card:

- **Poincaré orientation:** with $|R\rangle=(|H\rangle-i|V\rangle)/\sqrt2$ and $|0\rangle=|H\rangle$, R sits at $-y$ (L at $+y$). Lesson 2.2 fixes this for the course.
- **Cross-correlation:** $g_{SI}=1+2\,\mathrm{CAR}$ when CAR is counted without polarization analysis, so $F=1-\tfrac{3}{4(1+\mathrm{CAR})}$ (3.2).
- **GothamQ supplement:** the printed one-basis bound (eqs S7, S12) is missing a factor of 2. Lesson 3.3 teaches the correct form, and the paper's reported numbers are unaffected. For a Werner state, the two-basis bracket is exactly $[p,(1+p)/2]$, which explains why "0.937–0.967" and "about 0.95" agree.
- **Memory paper:** the 90.2% figure is a model prediction at a narrow detection window; tomography at 2.82 ns gave 86.5%.
- **Heralding time:** $L/v$ for a midpoint station, $2L/v$ for a source at one end (5.1).
- **Boss audit:** the numeric cores of bosses 1, 2, 5 and 6 (PLOB at 100 km, the 34 km loss arithmetic, swap and BBPSSW at F = 0.95, the QBER and key fraction) were checked in Python before building. Bosses 3 and 4 depend on data generated at quiz time.
