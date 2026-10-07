# Quantum Networking · Lesson 3.1: Rubidium-vapor sources vs crystal sources

> ⏱ ~15 min · Module 3: Sources, detectors, and proving entanglement · Builds on: [photonics 4.3 Parametric down-conversion](../../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md), [photonics 1.2 The two-level atom](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md), [2.3](02-03-drift-in-buried-fiber.md) · Unlocks: [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [5.2](05-02-room-temperature-quantum-memories.md)

## Why this matters

Almost every entangled-photon source in a lab is a crystal. Qunnect's is a glass cell of warm rubidium gas. That choice is not a quirk: it decides which wavelengths the network runs at, whether its photons fit into a memory, how much of the source's output survives filtering, and which customers it can plug into without an extra box. When someone asks "why atoms and not a crystal?", this lesson is the answer.

## The idea

A crystal source ([photonics 4.3](../../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md)) splits one pump photon into two through the $\chi^{(2)}$ nonlinearity. Phase matching picks the colors, but loosely: the pairs come out spread over hundreds of GHz to THz. Atoms are the opposite kind of medium. They respond only near their own resonances, but there they respond enormously, and they only emit at their own frequencies.

So build the source from the atoms you will later store photons in. Shine two lasers into warm rubidium-87 vapor. A 780 nm **pump** lifts atoms from the ground state $5S_{1/2}$ to $5P_{3/2}$, and a 1367 nm **coupling** beam lifts them on to $6S_{1/2}$. From there an atom can cascade back down by a *different* route: it emits a 1324 nm photon (to $5P_{1/2}$), then a 795 nm photon (to the ground state). Two laser photons in, two new photons out. This is **[spontaneous four-wave mixing](../reference.md#spontaneous-four-wave-mixing) (SFWM)**.

Three things fall out for free:

- **Telecom plus atomic.** The 1324 nm photon sits in the fiber O-band and travels; the 795 nm photon is exactly the wavelength rubidium memories store.
- **Narrow.** Atoms only emit within their resonance, so the pair linewidth is below 1 GHz with no filter.
- **Clean.** The emitted pair is not at the lasers' wavelengths (795 vs 780, 1324 vs 1367), so the bright lasers can be filtered out.

## The formal version

**Energy and momentum.** Label the four fields pump $p$, coupling $c$, signal $s$ (1324 nm) and idler $i$ (795 nm), with angular frequencies $\omega$ and wavevectors $\mathbf k$. SFWM conserves

$$\omega_p+\omega_c=\omega_s+\omega_i,$$

$$\mathbf k_p+\mathbf k_c=\mathbf k_s+\mathbf k_i.$$

*In words: the pair's energies add up to the two laser photons', and so do their momenta.* This is SPDC's bookkeeping with two photons going in instead of one; it is a $\chi^{(3)}$ process, made strong by being near-resonant.

**Why the 795 nm photon is directional.** When the 1324 nm photon is detected, the vapor holds one excitation in $5P_{1/2}$ shared across $N$ atoms at positions $\mathbf r_j$:

$$|W\rangle=\frac{1}{\sqrt N}\sum_{j=1}^{N}e^{i(\mathbf k_p+\mathbf k_c-\mathbf k_s)\cdot\mathbf r_j}\,|g_1\cdots e_j\cdots g_N\rangle .$$

Here $|e_j\rangle$ means atom $j$ is excited and every other atom is in the ground state $|g\rangle$. *In words: nobody knows which atom was excited, so the excitation is a phased superposition, and its phases are a grating that radiates only along $\mathbf k_i=\mathbf k_p+\mathbf k_c-\mathbf k_s$.* Collective emission is what lets you collect the 795 nm photon into a fiber instead of losing it to all directions.

**The state.** Because of rubidium's Zeeman structure and co-linear pump and coupling polarizations, the pair comes out in

$$|\Phi^+\rangle=\tfrac{1}{\sqrt2}\big(|H_sH_i\rangle+|V_sV_i\rangle\big)$$

(we state this, not derive it). The full output is mostly vacuum plus a small pair amplitude; two-pair terms grow with pump power and are [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)'s problem.

**Linewidth in both units.** A spectral width $\Delta\nu$ at wavelength $\lambda$ spans

$$\Delta\lambda=\frac{\lambda^2\,\Delta\nu}{c}.$$

*In words: the same frequency width is fewer nanometers at shorter wavelength.* At 1324 nm, 1 GHz is 5.8 pm and 1 nm is 171 GHz.

**Why narrow matters.** (1) **Memories:** Qunnect's warm-vapor memory accepts photons up to about $2\pi\times266$ MHz wide ([5.2](05-02-room-temperature-quantum-memories.md)). (2) **Fiber:** buried fiber's polarization rotation varies with wavelength ([2.3](02-03-drift-in-buried-fiber.md)); a photon 5.8 pm wide sees essentially one rotation, which one probe laser can measure and undo. (3) **Interference:** a narrower photon is longer in time (about $1/(\pi\Delta\nu)$, 0.32 ns at 1 GHz), which relaxes timing for swapping photons from independent sources ([5.3](05-03-bell-state-measurement-and-swapping.md)).

**The comparison.**

| | SPDC crystal | Warm Rb vapor (SFWM) | Quantum dot |
|---|---|---|---|
| Process | $\chi^{(2)}$, one pump photon splits | near-resonant $\chi^{(3)}$, two laser photons | single emitter cascade |
| Wavelengths | flexible (phase matching) | fixed by Rb: 1324 + 795 nm | set by the dot, partly tunable |
| Native linewidth | hundreds of GHz to THz | below 1 GHz | narrow, varies by dot |
| Fits an atomic memory | only after heavy filtering or a cavity | natively, same species | needs tuning or conversion |
| Multi-pair noise | grows with pump | grows with pump | low (near on-demand) |
| Temperature | room temperature | warm cell | cryogenic |
| Maturity | most mature | commercial, few vendors | research to early commercial |

## Picture

![Energy ladder of rubidium-87. On the left, blue arrows: a 780 nm pump from the 5S1/2 ground state up to 5P3/2, then a 1367 nm coupling beam up to 6S1/2. On the right, red arrows: a 1324 nm signal photon down from 6S1/2 to 5P1/2, sent to the fiber, then a 795 nm idler photon down to the ground state, kept local.](assets/03-01-fig1.svg)

Up one side of the ladder, down the other. The two routes differ only at the middle rung: $5P_{3/2}$ going up, $5P_{1/2}$ coming down, 7.1 THz apart. That gap is what separates the 795 nm photon from the 780 nm pump by 14.7 nm, so a filter can tell them apart.

## Worked examples

**Example 1 (does energy balance?).** Using $\nu=c/\lambda$ with the rounded wavelengths:

$$\nu_{780}+\nu_{1367}=384.35+219.31=603.66\ \text{THz},$$

$$\nu_{1324}+\nu_{795}=226.43+377.10=603.53\ \text{THz}.$$

They differ by 0.13 THz (0.02%). That is rounding, not physics. The true pump wavelength is 780.24 nm, and rounding it to 780 alone moves its frequency by 0.12 THz. Computed from rubidium's tabulated level energies (780.24, 1366.87, 1323.88, 794.98 nm), the two sums agree exactly, because both routes start at $5S_{1/2}$ and end at $6S_{1/2}$. Moral: with photons hundreds of THz apart, never test energy conservation on wavelengths rounded to the nanometer.

**Example 2 (would a crystal's photon fit Qunnect's memory?).** The memory stores the 795 nm photon in a window about 266 MHz wide. An unfiltered SPDC photon 1 nm wide at 795 nm spans

$$\Delta\nu=\frac{c\,\Delta\lambda}{\lambda^2}=\frac{(2.998\times10^{8})(1\times10^{-9})}{(795\times10^{-9})^2}=474\ \text{GHz},$$

about 1,800 times the window: only 0.06% of its spectrum lands inside. The vapor photon, below 1 GHz, is at worst 3.8 times the window. That is a matching problem an engineer can tune, not one that throws away 99.9% of the light. It is the quantitative version of "source and memory are built from the same atom."

## Watch out

- **You might think crystals simply can't make narrow photons.** They can: cavity-enhanced and other narrowband SPDC sources exist. The cost is the cavity, its locking, and the rate given up to reach a few hundred MHz; and the photon still has to be steered onto an atomic line. Vapor gets there natively.
- **You might think "room temperature" means the source sits at room temperature.** The vapor cell is *heated* (warm vapor), and the lasers must be locked to rubidium lines. The claim is: no cryostat and no laser cooling for the source.
- **You might think the two photons are interchangeable.** They are not. Only 1324 nm can cross a city ([2.1](02-01-loss-and-the-telecom-bands.md) shows why 795 nm cannot), and only 795 nm can go into a rubidium memory. The [bichromatic pair](../reference.md#bichromatic-photon-pairs) is a division of labor.

## Business lens

Qunnect's platform argument is one species, end to end. Source and memory are both rubidium-87, so the stored photon already sits at the memory's wavelength and bandwidth. The memory paper makes the point against rivals: its 90.2% photon–memory fidelity needed no conversion, while the cold-atom, NV-center and trapped-ion results it cites (77% to 96%) each used quantum frequency conversion, an extra nonlinear-optics box. Skipping it means fewer parts, less loss, less added noise and a simpler rack ([Carina](../reference.md#carina-product-stack)).

The price is lock-in to rubidium's ladder. The network runs at 1324 nm, in the O-band, not the lower-loss C-band most telecom gear targets. Every laser must sit on an atomic line, which is why the product list includes QU-LOCK, an atomic frequency reference. A customer whose quantum computer emits at another wavelength needs a conversion stage at their end anyway. In a meeting, the sharp version is: "Vapor makes the source–memory interface free. The interface to other platforms and to C-band infrastructure is where we pay."

## One-liner

> Qunnect's source is rubidium vapor run up one side of an atomic ladder and down the other, so its photons come out narrow, telecom-plus-atomic, and already matched to the memory, at the cost of being tied to rubidium's wavelengths.

## Problems

**P1 (🟢)** Using $E=hc/\lambda$ with $hc=1239.84$ eV·nm: (a) find the energies of the 1324 nm and 795 nm photons and their sum, to five decimal places in eV; (b) find the summed energy of one 780 nm and one 1367 nm laser photon, and say in one sentence whether the difference from (a) is physics or bookkeeping.

**P2 (🟡)** A crystal source emits $2\times10^{8}$ pairs/s with the 1324 nm photons spread uniformly over 1 nm. Assume a narrow continuous pump, so filtering one photon to 1 GHz fixes its partner's frequency too, and ignore the filter's own insertion loss. (a) How many 1 GHz-wide slices fit in the 1 nm? (b) What pair rate survives the filter, and what is that loss in dB? (c) In one sentence, why does the vapor source not pay this tax?

**P3 (🔴, practical)** A prospective customer runs a trapped-ion quantum computer whose network photons are at 493 nm. In three sentences or fewer, tell their CTO what a rubidium-based network needs in order to entangle with their machine, and what it costs.

<details>
<summary>Solutions</summary>

**P1** (a) $E_{1324}=1239.84/1324=0.93644$ eV and $E_{795}=1239.84/795=1.55955$ eV, sum $2.49599$ eV.

(b) $E_{780}=1239.84/780=1.58954$ eV and $E_{1367}=1239.84/1367=0.90698$ eV, sum $2.49652$ eV. The difference is $0.00053$ eV (0.02%): bookkeeping. The 780 nm line is really 780.24 nm, and with the tabulated wavelengths the two sums agree exactly, since both routes connect $5S_{1/2}$ to $6S_{1/2}$.

---

**P2** (a) $\Delta\nu=c\,\Delta\lambda/\lambda^2=(2.998\times10^{8})(1\times10^{-9})/(1324\times10^{-9})^2=171$ GHz, so 171 slices.

(b) Kept fraction $1/171=0.58\%$, so $2\times10^{8}/171=1.17\times10^{6}$ pairs/s survive. In dB: $10\log_{10}171=22.3$ dB, a loss comparable to a long fiber span, paid before the photon leaves the box.

(c) The atoms only emit within their own resonance, so the vapor's pairs are born below 1 GHz wide and nothing has to be thrown away.

---

**P3** *(practical)*

**Accept:** any answer that names frequency conversion (or another wavelength-bridging interface) and at least two real costs.

**Must hit:**

- The ion's 493 nm photon must be converted to match the network photon it will be swapped with (frequency, and also bandwidth, timing and polarization for a Bell-state measurement).
- Costs: conversion efficiency below 100% (lost rate), noise added by the strong conversion pump, extra lasers to stabilize, more hardware at the customer site.

**Model answer:** To entangle with your ions we would convert your 493 nm photons to our 1324 nm network wavelength in a nonlinear converter (difference-frequency mixing with a strong pump near 785 nm), then interfere them with our photons in a Bell-state measurement. That box loses some photons, adds noise from its pump, and has to make your photon match ours in bandwidth and timing as well as color. It is the same conversion cost every cross-platform link pays; our advantage is that we avoid it on the source–memory side, not at your interface.

</details>

## Flashback

**From Lesson [2.3](02-03-drift-in-buried-fiber.md) (Drift in buried fiber):** A 9 km fiber has a differential group delay of 0.4 ps. Use the first-order PMD model: $\kappa=2\pi c\,\tau/\lambda^2$ at 1324 nm, compensation perfect at the centre wavelength, Gaussian photon spectrum, and $\bar F=\tfrac12\big(1+e^{-\kappa^2\sigma_\lambda^2/2}\big)$. (a) What DGD do you expect over 36 km of the same fiber, and what is $\kappa$? (b) What fidelity does a filtered crystal-source photon with $\sigma_\lambda=0.4$ nm get over the 36 km?

<details>
<summary>Solution</summary>

(a) DGD grows as $\sqrt L$: four times the length doubles it, so $\tau=0.8$ ps. Then

$$\kappa=\frac{2\pi(2.998\times10^8)(0.8\times10^{-12})}{(1324\times10^{-9})^2}$$

$$\kappa=8.60\times10^{8}\ \text{rad/m}=0.860\ \text{rad/nm}.$$

(b) The exponent is $\kappa^2\sigma_\lambda^2/2=(0.860)^2(0.4)^2/2=0.0591$, and $e^{-0.0591}=0.943$, so

$$\bar F=\tfrac12(1+0.943)=0.971.$$

About 3 points lost to bandwidth alone, before any other noise. A sub-GHz vapor photon on the same fiber loses essentially nothing.

</details>

## Connections

- **Backward:** SFWM is [photonics 4.3](../../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md)'s energy-and-phase-matching bookkeeping with two input photons; resonance is why the [two-level atom](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md) responds so strongly near its line. The narrowband payoff in fiber is [2.3](02-03-drift-in-buried-fiber.md)'s wavelength-dependent rotation ([PMD](../reference.md#polarization-mode-dispersion)).
- **Forward:** [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) counts this source's pairs, accidentals and multi-pair noise; [5.2](05-02-room-temperature-quantum-memories.md) stores the 795 nm photon by [EIT](../reference.md#eit-storage); [5.5](05-05-repeater-generations-and-platform-bets.md) weighs warm vapor against other platforms.
- **Sideways:** [SPDC vs SFWM](../reference.md#spdc-vs-sfwm) and [frequency conversion](../reference.md#quantum-frequency-conversion) are the hardware face of an interoperability question familiar from any industry: a shared standard is cheap inside the ecosystem and costly at its borders.
