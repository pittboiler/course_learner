# Semiconductor Devices · Lesson 4.1: Light and semiconductors — absorption, emission, detection

> ⏱ ~15 min · Module 4: Optoelectronic devices and fabrication · Builds on: [1.3 Generation and recombination](01-03-generation-recombination.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [4.2 The LED and the laser diode](04-02-led-and-laser-diode.md), [4.3 The solar cell](04-03-solar-cell.md)

## Why this matters

So far light has appeared only as a way of injecting carriers. This module takes it seriously, and the payoff is the whole optoelectronic industry: every LED, laser, camera sensor, fibre-optic receiver and solar panel.

The physics is a single idea — a photon of energy $h\nu>E_g$ can lift an electron across the gap, and the reverse process emits one — but the *engineering* consequences are sharp and quantitative. The band gap fixes the longest wavelength a material can detect and the colour it emits; the absorption coefficient fixes how thick a detector must be; and whether the gap is direct or indirect decides whether the material is any good at emitting at all.

## The idea

**Absorption.** A photon with $h\nu\ge E_g$ can be absorbed, creating an electron–hole pair. Below the gap, there is no final state to absorb into, so the material is **transparent**. That threshold — the [cutoff wavelength](../reference.md#cutoff-wavelength) — is abrupt, and it is why silicon looks opaque to visible light but is transparent in the infrared beyond 1.1 µm — the reason infrared cameras can see through a silicon wafer.

Above threshold, light is attenuated exponentially with depth, $I(x) = I_0e^{-\alpha x}$, with $\alpha$ the **absorption coefficient**. And $\alpha$ depends enormously on whether the gap is direct.

**Direct gap** (GaAs, InP, GaN): the conduction-band minimum sits at the same crystal momentum as the valence-band maximum, so a photon — which carries almost no momentum — can make the transition alone. Absorption is strong, $\alpha\sim10^4\text{–}10^5\ \mathrm{cm^{-1}}$, and light is absorbed within a micron.

**Indirect gap** (Si, Ge): the band extrema are at different momenta, so a **phonon** must participate to conserve momentum. A three-body process is far less likely, so $\alpha$ is small near the band edge — a few hundred per centimetre in silicon at 800 nm — and light penetrates tens or hundreds of microns.

That single distinction, which [1.3](01-03-generation-recombination.md) introduced for recombination, now cuts both ways and explains the entire structure of the industry: silicon detectors and solar cells must be **thick** (hundreds of microns) to absorb; GaAs devices can be **thin** (a few microns). And in emission, where the same matrix element governs the reverse process, silicon is hopeless and GaAs excellent.

**Detection.** Absorb a photon in or near a depletion region and its field sweeps the pair apart before they recombine — a photocurrent, linear in optical power. That is a photodiode, and the figure of merit is **responsivity**: amps out per watt in. Its ceiling is set by the fact that each photon delivers at most one electron, so $R = \eta q/h\nu$, rising linearly with wavelength until the gap cuts it off abruptly.

## The formal version

**Photon energy and wavelength.**

$$E = h\nu = \frac{hc}{\lambda}, \qquad \boxed{\;E[\mathrm{eV}] = \frac{1.240}{\lambda[\mu\mathrm{m}]}.\;}$$

*In words: 1.24 eV-micron is the conversion constant — memorize it and every optoelectronic estimate becomes arithmetic.*

**Cutoff wavelength.** Absorption requires $h\nu\ge E_g$:

$$\boxed{\;\lambda_g = \frac{hc}{E_g} = \frac{1.240}{E_g[\mathrm{eV}]}\ \mu\mathrm{m}.\;}$$

*In words: the longest wavelength a material can absorb, and the shortest wavelength it is transparent beyond.*

| Material | $E_g$ (eV) | $\lambda_g$ | Gap type | Use |
|---|---|---|---|---|
| Ge | 0.66 | 1.88 µm | indirect | IR detectors |
| Si | 1.12 | 1.11 µm | **indirect** | solar, imaging |
| InGaAs | 0.75 | 1.65 µm | direct | fibre-optic receivers |
| GaAs | 1.42 | 0.87 µm | direct | lasers, IR LEDs |
| InP | 1.35 | 0.92 µm | direct | fibre lasers |
| GaP | 2.26 | 0.55 µm | indirect | green LEDs (poorly) |
| GaN | 3.4 | 0.36 µm | direct | blue LEDs, UV |

Two entries worth pausing on. **Silicon's 1.11 µm cutoff** is why silicon photodiodes cannot detect the 1.31 and 1.55 µm wavelengths that optical fibre uses — hence InGaAs receivers in every long-haul link. And **GaN's 3.4 eV** is why blue LEDs took until the 1990s: no one could grow good GaN, and without blue there is no white light and no Blu-ray. Nakamura, Akasaki and Amano shared the 2014 Nobel Prize for solving it.

**Absorption.** Beer–Lambert:

$$\Phi(x) = \Phi_0(1-R)e^{-\alpha x},$$

with $\Phi$ the photon flux, $R$ the surface reflectance ($\approx0.30$ for bare silicon in air, which is why solar cells are always antireflection-coated), and $\alpha(\lambda)$ the absorption coefficient. The **absorption depth** is $1/\alpha$.

Silicon's absorption depth versus wavelength — the numbers that size every silicon photodetector:

| $\lambda$ | $\alpha$ (cm$^{-1}$) | $1/\alpha$ |
|---|---|---|
| 400 nm (violet) | $\sim10^5$ | 0.1 µm |
| 550 nm (green) | $\sim7\times10^3$ | 1.4 µm |
| 800 nm (near IR) | $\sim10^3$ | 10 µm |
| 1000 nm | $\sim10^2$ | 100 µm |
| 1100 nm | $\to0$ | transparent |

*In words: blue light is absorbed in the first 100 nm, red light takes 10 µm, and near-infrared needs the whole wafer.* This spread over three orders of magnitude within the visible band is a direct consequence of silicon's indirect gap, and it explains a great deal:

- A **CMOS image sensor** absorbs blue at the surface and red deep in the substrate, so the colour channels have different depth responses — the basis of both the Foveon sensor's design and of crosstalk problems in ordinary Bayer sensors.
- A **solar cell** must be $\sim200\ \mu$m thick, or must use light-trapping texture to fold the optical path, to capture the near-infrared.

**Photogeneration rate.** Absorbing flux $\Phi$ generates pairs at

$$G_L(x) = \alpha\,\Phi_0(1-R)\,e^{-\alpha x} \quad [\mathrm{cm^{-3}s^{-1}}],$$

which is the source term $G_L$ in the continuity equation of [1.4](01-04-continuity-equations.md) — and the solar-cell problem of [4.3](04-03-solar-cell.md) is that equation with this $G_L$.

**Photodiode operation.** Reverse-bias a junction and illuminate it. Pairs generated inside the depletion region are separated by the field within picoseconds; pairs generated within a diffusion length of it diffuse in and are collected. The result adds to the reverse current:

$$I = I_0\left(e^{qV/k_BT}-1\right)-I_L, \qquad I_L = q\eta A\Phi,$$

with $\eta$ the **quantum efficiency** — the fraction of incident photons that produce a collected pair.

**Responsivity.**

$$\boxed{\;R = \frac{I_L}{P_{\rm opt}} = \frac{\eta q}{h\nu} = \frac{\eta\,\lambda[\mu\mathrm{m}]}{1.240}\ \ \mathrm{A/W}.\;}$$

*In words: responsivity rises linearly with wavelength (longer wavelength means more photons per watt) until it falls off a cliff at $\lambda_g$.* At $\eta=1$ and $\lambda = 0.8\ \mu$m, $R = 0.645$ A/W — the ideal ceiling. Real silicon photodiodes reach 0.5–0.6 A/W there.

The linear rise is worth understanding physically: a watt of long-wavelength light contains *more photons* than a watt of short-wavelength light, and each photon yields at most one electron. So the quantum limit favours long wavelengths right up to the point where the photons become too feeble to be absorbed at all.

**Quantum efficiency, broken down.**

$$\eta = \underbrace{(1-R)}_{\text{reflection}}\times\underbrace{\left(1-e^{-\alpha W_{\rm abs}}\right)}_{\text{absorption in the active region}}\times\underbrace{\eta_{\rm coll}}_{\text{collection}}.$$

Each factor is a separate design problem: antireflection coatings for the first, thickness and light-trapping for the second, and diffusion length and passivation ([1.3](01-03-generation-recombination.md)) for the third.

**Photodiode structures.**

| Type | Structure | Trade |
|---|---|---|
| **p–n** | simple junction | thin depletion region → slow, low $\eta$ at long $\lambda$ |
| **PIN** | intrinsic layer between $p^+$ and $n^+$ | wide depletion → high $\eta$, fast (drift not diffusion), low capacitance |
| **Avalanche (APD)** | biased near $V_B$ | internal gain $M$ = 10–100 from impact ionization ([2.4](02-04-reverse-breakdown.md)) |
| **Schottky** | metal on semiconductor | very fast, UV-capable, but lower $\eta$ |

The **PIN** deserves emphasis because it is the standard. Inserting an undoped (intrinsic) layer makes the depletion region as wide as you like — set by growth, not by doping — so you can absorb long-wavelength light *inside* the field region, where carriers are collected by fast drift rather than slow diffusion. It also lowers the junction capacitance ([2.3](02-03-junction-diffusion-capacitance.md)), which raises the bandwidth. Speed and efficiency both improve, which is why every fibre-optic receiver uses one.

**Speed limits.** Three, and the slowest wins:

$$t_{\rm drift} = \frac{W_{\rm dep}}{v_{\rm sat}}, \qquad t_{RC} = 2.2\,R_LC_j, \qquad t_{\rm diff} = \frac{W_{\rm undepleted}^2}{2D}.$$

*In words: carriers must cross the field region, the circuit must charge the junction capacitance, and any carriers generated outside the depletion region must diffuse in.* The third is usually the villain — diffusion tails produce a slow "shoulder" on the pulse response, which is precisely what the PIN structure eliminates by depleting the entire absorbing region.

## Picture

![A two-panel figure. Left: absorption coefficient against wavelength on log axes for silicon and gallium arsenide, showing GaAs with a sharp near-vertical edge at 870 nm and very high alpha above it, versus silicon's soft gradual edge extending to 1100 nm with alpha two to three orders of magnitude lower, and a right-hand axis showing the corresponding absorption depth. Right: responsivity against wavelength, showing the ideal quantum-limited line rising linearly with wavelength, the actual silicon photodiode curve tracking below it and cutting off at 1.1 microns, and an InGaAs curve extending to 1.65 microns with the fibre-optic wavelengths 1.31 and 1.55 microns marked.](assets/04-01-fig1.svg)

Left: the direct/indirect distinction made visual. GaAs turns on abruptly and absorbs strongly — a micron of material is opaque. Silicon's edge is soft and its absorption two to three orders of magnitude weaker near the gap, so it needs hundreds of microns. That difference in required thickness propagates into cost, weight, and flexibility for every device built from these materials.

Right: responsivity rises linearly with wavelength because a watt of red light contains more photons than a watt of blue, and each photon is worth at most one electron. The cliff at $\lambda_g$ is where photons stop having enough energy at all — and the fact that silicon's cliff falls just short of 1.31 µm is why the entire fibre-optic receiver industry is built on InGaAs.

## Worked examples

**Example 1 (sizing a silicon photodiode).** A silicon PIN photodiode is to detect 850 nm light with at least 80% quantum efficiency. Silicon's $\alpha$ at 850 nm is $600\ \mathrm{cm^{-1}}$. Find the required intrinsic-layer thickness with and without an antireflection coating, and the resulting responsivity and drift-limited bandwidth.

*Photon energy.*

$$E = \frac{1.240}{0.850} = 1.459\ \mathrm{eV} > E_g = 1.12\ \mathrm{eV} \ \checkmark.$$

*Without an AR coating.* Bare silicon reflects about 30%, so the absorption factor must supply

$$\eta = (1-R)(1-e^{-\alpha W}) = 0.70(1-e^{-\alpha W}) \ge 0.80 \quad\Longrightarrow\quad 1-e^{-\alpha W}\ge1.14.$$

**Impossible** — even infinite thickness gives only $\eta = 0.70$. The reflection alone caps the device below spec.

*With a good AR coating* ($R = 0.02$):

$$0.98(1-e^{-\alpha W})\ge0.80 \quad\Longrightarrow\quad 1-e^{-\alpha W}\ge0.816 \quad\Longrightarrow\quad e^{-\alpha W}\le0.184,$$

$$\alpha W \ge \ln(5.44) = 1.694 \quad\Longrightarrow\quad W \ge \frac{1.694}{600} = 2.82\times10^{-3}\ \mathrm{cm} = 28.2\ \mu\mathrm{m}.$$

*Responsivity at $\eta = 0.80$:*

$$R = \frac{\eta\lambda}{1.240} = \frac{(0.80)(0.850)}{1.240} = 0.548\ \mathrm{A/W}.$$

*Drift-limited bandwidth.* Carriers must cross 28.2 µm at $v_{\rm sat} = 10^7$ cm/s:

$$t_{\rm drift} = \frac{28.2\times10^{-4}}{10^{7}} = 2.82\times10^{-10}\ \mathrm{s} = 282\ \mathrm{ps},$$

$$f_{3\rm dB} \approx \frac{0.44}{t_{\rm drift}} = \frac{0.44}{2.82\times10^{-10}} = 1.56\times10^{9} = 1.6\ \mathrm{GHz}.$$

**The trade is explicit and unavoidable:** thickness buys efficiency and costs bandwidth, in direct proportion. Wanting 10 GHz would demand $W\approx4.4\ \mu$m, giving $\eta = 0.98(1-e^{-0.264}) = 0.23$ — a fourfold loss of signal.

*How real designs escape it.* Not by compromise but by changing the geometry: **illuminate from the side** so the optical path is along the device while the carriers drift across its short dimension. A waveguide photodiode decouples the two lengths entirely and reaches both high $\eta$ and >40 GHz. Every high-speed fibre receiver uses one, and the reasoning is exactly the tension computed above.

**Example 2 (why fibre-optic links use InGaAs, and what an APD adds).** A fibre link at 1.55 µm delivers $-30$ dBm to a receiver. Compare a silicon detector, an InGaAs PIN with $\eta = 0.75$, and an InGaAs APD with the same $\eta$ and gain $M = 10$.

*Optical power.* $-30$ dBm $= 10^{-3}\ \mathrm{mW} = 1\ \mu$W.

*Silicon.* $\lambda_g = 1.240/1.12 = 1.107\ \mu$m $< 1.55\ \mu$m, so the photons carry only $1.240/1.55 = 0.800$ eV — **below silicon's gap.** The detector is transparent. Responsivity: **zero**. No amount of engineering helps; it is a band-structure fact.

*InGaAs PIN* ($E_g = 0.75$ eV, so $\lambda_g = 1.65\ \mu$m ✓):

$$R = \frac{\eta\lambda}{1.240} = \frac{(0.75)(1.55)}{1.240} = 0.938\ \mathrm{A/W},$$

$$I_{\rm ph} = R\,P = (0.938)(10^{-6}) = 9.38\times10^{-7}\ \mathrm{A} = 0.94\ \mu\mathrm{A}.$$

*InGaAs APD* with $M = 10$:

$$I_{\rm ph} = M\,R\,P = 9.38\ \mu\mathrm{A}.$$

*Does the gain help?* Only if it beats the noise it adds. The signal grows as $M$, but the shot noise of the multiplied current grows as $M\sqrt{F(M)}$, where $F$ is the **excess noise factor** ($F\approx M^x$ with $x\approx0.3$–0.7 depending on material). So the signal-to-noise ratio improves as

$$\frac{S}{N}\propto\frac{M}{M\sqrt{F}} \times \frac{1}{\sqrt{1+\sigma_{\rm amp}^2/(M^2\sigma_{\rm shot}^2)}}.$$

The gain helps only while the *amplifier's* noise dominates — which it does at low signal levels, and this is the point. An APD amplifies the signal *before* the first electronic amplifier, where the amplifier's own noise cannot reach it. Once $M$ is large enough that multiplied shot noise exceeds amplifier noise, further gain hurts, and there is an optimum $M$ — typically 10 for InGaAs (whose excess noise is poor) and 50–100 for silicon APDs.

*The practical result:* an APD receiver typically gains 5–10 dB of sensitivity over a PIN, which on a long-haul link translates directly into span length between repeaters. That is why undersea cables use them and why short datacentre links, where power is plentiful, use cheap PINs.

## Watch out

- **You might expect a material to absorb below its gap.** It cannot — there is no final state. Silicon is genuinely transparent beyond 1.1 µm, which is why infrared cameras see through wafers and why silicon can never detect telecom wavelengths.
- **You might treat $\alpha$ as a constant.** It varies by three orders of magnitude across the visible for silicon, and by five near the band edge. Always look it up at the wavelength you care about.
- **You might think responsivity rising with wavelength means longer is better.** It rises linearly *until the cliff*, then goes to zero. The peak sits just below $\lambda_g$, which is why silicon photodiodes peak near 900 nm and not in the visible.
- **You might size a photodiode for efficiency alone.** Thickness and bandwidth trade directly through the drift transit time. Any high-speed detector is a compromise, or uses a geometry (waveguide, resonant cavity) that decouples the two.
- **You might assume avalanche gain is free sensitivity.** It amplifies the signal but adds excess noise, and it only helps while amplifier noise dominates. There is an optimum $M$, and exceeding it makes things worse.

## One-liner

> A photon can only be absorbed if $h\nu>E_g$, so the gap sets the cutoff at $\lambda_g = 1.240/E_g$ microns; how *strongly* it is absorbed is set by whether the gap is direct, and that one fact decides whether your device is one micron thick or three hundred.

## Problems

**P1 (🟢)** A photodiode is made from a material with $E_g = 1.42$ eV. (a) Find its cutoff wavelength. (b) Can it detect 650 nm red light? 1.31 µm? (c) At 800 nm with $\eta = 0.85$, find the responsivity. (d) Find the photocurrent for 10 µW of incident 800 nm light.

**P2 (🟡)** A silicon photodiode has an active depletion width of 10 µm, no AR coating ($R = 0.30$), and is illuminated at 700 nm where $\alpha = 2\times10^3\ \mathrm{cm^{-1}}$. (a) Find the quantum efficiency. (b) Find the responsivity. (c) An AR coating reduces $R$ to 0.03 and the depletion width is increased to 30 µm. Recompute. (d) Find the drift-limited bandwidth in each case and comment on the trade.

**P3 (🔴)** A CMOS image sensor has photodiodes 3 µm deep in silicon. Absorption coefficients: 450 nm, $\alpha = 2.6\times10^4$; 550 nm, $\alpha = 7\times10^3$; 650 nm, $\alpha = 2.5\times10^3\ \mathrm{cm^{-1}}$. (a) Find the fraction of each colour absorbed within the photodiode depth (ignore reflection). (b) Find the relative responsivities, accounting for the photon-energy factor. (c) Light absorbed *below* the photodiode can diffuse sideways into neighbouring pixels. Estimate which colour suffers most and why. (d) Suggest two structural fixes and explain what each addresses.

<details>
<summary>Solutions</summary>

**P1** (a) $$\lambda_g = \frac{1.240}{1.42} = 0.873\ \mu\mathrm{m} = 873\ \mathrm{nm}.$$

(b) 650 nm $<873$ nm ✓ — detectable (the photon carries $1.240/0.650 = 1.91$ eV, comfortably above the gap). 1.31 µm $>873$ nm ✗ — **not** detectable; those photons carry only 0.947 eV, below the gap, and pass straight through.

(c) $$R = \frac{\eta\lambda}{1.240} = \frac{(0.85)(0.800)}{1.240} = 0.548\ \mathrm{A/W}.$$

(d) $$I_{\rm ph} = R\,P = (0.548)(10\times10^{-6}) = 5.48\times10^{-6}\ \mathrm{A} = 5.5\ \mu\mathrm{A}.$$

**P2** (a) $$\alpha W = (2\times10^{3})(10\times10^{-4}) = 2.0, \qquad 1-e^{-2.0} = 1-0.1353 = 0.8647.$$

$$\eta = (1-R)(1-e^{-\alpha W}) = (0.70)(0.8647) = 0.605.$$

(b) $$R = \frac{\eta\lambda}{1.240} = \frac{(0.605)(0.700)}{1.240} = 0.342\ \mathrm{A/W}.$$

(c) $$\alpha W = (2\times10^{3})(30\times10^{-4}) = 6.0, \qquad 1-e^{-6.0} = 1-0.00248 = 0.9975.$$

$$\eta = (0.97)(0.9975) = 0.968, \qquad R = \frac{(0.968)(0.700)}{1.240} = 0.546\ \mathrm{A/W}.$$

A 60% improvement in responsivity, of which the AR coating contributed $0.97/0.70 = 1.39$ and the extra thickness $0.9975/0.8647 = 1.15$. **The coating mattered more than tripling the thickness** — a useful reminder that the cheapest fix is often the reflection.

(d) $$t_{\rm drift}(10\ \mu\mathrm{m}) = \frac{10\times10^{-4}}{10^{7}} = 1.0\times10^{-10}\ \mathrm{s}, \qquad f_{3\rm dB} = \frac{0.44}{10^{-10}} = 4.4\ \mathrm{GHz}.$$

$$t_{\rm drift}(30\ \mu\mathrm{m}) = 3.0\times10^{-10}\ \mathrm{s}, \qquad f_{3\rm dB} = 1.47\ \mathrm{GHz}.$$

*Comment.* Tripling the thickness raised $\eta$ from 0.86 to 0.998 (a 15% gain in the absorption term) while cutting the bandwidth by a factor of three. That is a bad trade — the absorption factor was already near saturation at $\alpha W = 2$, so the extra 20 µm bought almost nothing and cost a lot.

The general rule: **there is no point exceeding $\alpha W\approx2$–3**, since $1-e^{-3} = 0.95$ already. Beyond that, thickness is pure bandwidth loss. Design to $\alpha W\approx2$ and spend the remaining effort on the AR coating, which costs no bandwidth at all.

**P3** (a) With $W = 3\ \mu$m $= 3\times10^{-4}$ cm:

| $\lambda$ | $\alpha W$ | $1-e^{-\alpha W}$ |
|---|---|---|
| 450 nm | $(2.6\times10^4)(3\times10^{-4}) = 7.8$ | $1-4.1\times10^{-4} = 0.9996$ |
| 550 nm | $(7\times10^3)(3\times10^{-4}) = 2.1$ | $1-0.122 = 0.878$ |
| 650 nm | $(2.5\times10^3)(3\times10^{-4}) = 0.75$ | $1-0.472 = 0.528$ |

**Blue is fully absorbed; red only half.**

(b) Responsivity $\propto\eta\lambda$:

| $\lambda$ | $\eta$ | $\eta\lambda$ | $R$ (A/W) |
|---|---|---|---|
| 450 nm | 0.9996 | 0.450 | 0.363 |
| 550 nm | 0.878 | 0.483 | 0.390 |
| 650 nm | 0.528 | 0.343 | 0.277 |

Note the two effects pulling against each other: quantum efficiency *falls* with wavelength (weaker absorption) while the photon-energy factor *rises* with wavelength (more photons per watt). The product peaks in the green, at 550 nm — which happens to be convenient for imaging, and is not entirely a coincidence, since sensor depths are chosen with the visible band in mind.

(c) **Red suffers most.** 47% of the red light passes *through* the 3 µm photodiode into the substrate below, where it is absorbed over the next tens of microns ($1/\alpha = 4\ \mu$m at 650 nm, so most of it within another 10 µm). Those carriers are generated in field-free substrate, so they **diffuse** — isotropically — and a substantial fraction wanders sideways and is collected by *neighbouring* pixels.

For blue, essentially nothing reaches the substrate (0.04%), so there is no crosstalk at all. Green is intermediate at 12%.

The result is a wavelength-dependent point-spread function: red images are softer than blue ones, and in a Bayer-filtered sensor the red-under-green leakage also corrupts colour accuracy. Pixel pitch makes it worse — as pixels shrank below about 2 µm, the lateral diffusion distance became comparable to several pixel widths.

(d) Two structural fixes, addressing different parts of the problem:

1. **Deep trench isolation (DTI).** Etch narrow trenches filled with oxide (or oxide plus a doped liner) all the way around each pixel, extending several microns into the substrate. This physically blocks lateral diffusion — a carrier generated deep beneath pixel A cannot reach pixel B without crossing an insulating wall. Addresses the *crosstalk* directly, and is now standard in small-pixel sensors. Back-side-illuminated sensors with full-depth DTI take this furthest.

2. **A deeper depletion region, or an epitaxial layer on a heavily doped substrate.** Extending the field region deeper collects the red-generated carriers by *drift* (fast, directional, into the correct pixel) rather than diffusion. Alternatively, growing the active silicon as a thin epitaxial layer on a $p^{++}$ substrate creates a built-in retarding field at the epi/substrate boundary — the same graded-doping drift field as [1.2](01-02-drift-diffusion-einstein.md) P3 — which reflects carriers back up toward the photodiodes instead of letting them wander. Addresses both *crosstalk* and *quantum efficiency* at red wavelengths.

(A third approach worth mentioning: the **Foveon** sensor abandons colour filters entirely and stacks three photodiodes at different depths, using silicon's wavelength-dependent absorption depth as the colour separator — turning the problem in (a) into the mechanism. It never displaced Bayer sensors, largely because the deep red-sensing layer has poor signal-to-noise for exactly the reasons computed above.)

</details>

## Flashback

**From Lesson 1.3 (Generation and recombination):** Compare silicon and GaAs for light *emission*, given $B_{\rm Si} = 10^{-14}$ and $B_{\rm GaAs} = 10^{-10}\ \mathrm{cm^3/s}$ at $n_0 = 10^{17}\ \mathrm{cm^{-3}}$ with $\tau_{\rm SRH} = 10\ \mu$s. (a) Find the radiative lifetimes and internal quantum efficiencies. (b) Explain the connection to this lesson's absorption discussion. (c) State the resulting industry structure in one sentence.

<details>
<summary>Solution</summary>

(a) $$\tau_{\rm rad}^{\rm Si} = \frac{1}{B n_0} = \frac{1}{(10^{-14})(10^{17})} = 10^{-3}\ \mathrm{s}, \qquad \tau_{\rm rad}^{\rm GaAs} = \frac{1}{(10^{-10})(10^{17})} = 10^{-7}\ \mathrm{s}.$$

$$\eta_{\rm Si} = \frac{\tau_{\rm SRH}}{\tau_{\rm SRH}+\tau_{\rm rad}} = \frac{10^{-5}}{10^{-5}+10^{-3}} = 0.0099 = 0.99\%,$$

$$\eta_{\rm GaAs} = \frac{10^{-5}}{10^{-5}+10^{-7}} = 0.990 = 99.0\%.$$

(b) **The same matrix element governs both.** Absorption and emission are the forward and reverse of one transition, so a material that absorbs weakly near its band edge also emits weakly. Silicon's indirect gap requires a phonon in both directions — which is why $\alpha$ is $10^2$–$10^3\ \mathrm{cm^{-1}}$ near its edge (this lesson) *and* why $B$ is $10^{-14}$ rather than $10^{-10}$ (that lesson). One band-structure fact, two consequences.

Quantitatively the parallel is striking: $\alpha_{\rm GaAs}/\alpha_{\rm Si}\sim10^{4}$ near the respective band edges, and $B_{\rm GaAs}/B_{\rm Si} = 10^{4}$. The same factor, because it is the same physics.

(c) **Silicon detects and computes; direct-gap III–V materials emit** — so every camera sensor, solar cell and logic chip is silicon, every LED and laser diode is GaAs, InP or GaN, and the two industries meet only in hybrid packages and in silicon photonics, where a III–V laser is bonded onto a silicon waveguide chip precisely because silicon cannot make the light itself.

</details>

## Connections

- **Backward:** the direct/indirect distinction and the recombination coefficients are [1.3](01-03-generation-recombination.md); the photocurrent adds to [2.2](02-02-ideal-diode-equation.md)'s diode equation; APD gain is [2.4](02-04-reverse-breakdown.md)'s avalanche multiplication used deliberately.
- **Forward:** [4.2](04-02-led-and-laser-diode.md) runs the junction forward and harvests emission; [4.3](04-03-solar-cell.md) puts this lesson's $G_L(x)$ into [1.4](01-04-continuity-equations.md)'s continuity equation and operates in the fourth quadrant.
- **Sideways:** the Beer–Lambert law and absorption depth are the same attenuation mathematics as photon shielding in [`radiation-detection-shielding`](../../radiation-detection-shielding/syllabus.md), where $1/\alpha$ becomes the mean free path; the stimulated/spontaneous emission relations behind $B$ are developed in [`photonics-quantum-optics` 1.3](../../photonics-quantum-optics/lessons/01-03-absorption-spontaneous-stimulated-emission.md).
