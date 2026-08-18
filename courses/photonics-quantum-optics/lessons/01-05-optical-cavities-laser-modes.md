# Quantum Optics & Photonics · Lesson 1.5: Optical cavities & laser modes

> ⏱ ~15 min · Module 1: Light–matter interaction & lasers · Builds on: [1.4 Gain, population inversion & laser threshold](01-04-gain-population-inversion-laser-threshold.md), [1.1 Classical EM waves & Gaussian beams](01-01-classical-em-waves-gaussian-beams.md) · Unlocks: [2.1 Temporal coherence & $g^{(1)}$](02-01-temporal-coherence-g1.md)

## Why this matters

In [1.4](01-04-gain-population-inversion-laser-threshold.md) you built a medium that *amplifies* light. But an amplifier is not a laser. Send a photon through gain once and it comes out a little brighter and then it's gone. To get a laser you need **feedback** — bounce the light back through the gain again and again until stimulated emission builds a self-sustaining, monochromatic beam. Two mirrors do that job, and the moment you add them the light is no longer free: it can only live at a discrete comb of frequencies set by the mirror spacing. This lesson is where "gain medium" becomes "laser." It also hands you the whole vocabulary — **free spectral range, finesse, $Q$, linewidth, threshold** — that Module 2 needs the instant we start asking how *coherent* that beam actually is. This lesson completes Module 1, and its round-trip threshold logic is the spine of **Boss Problem 1**.

## The idea

Put two mirrors facing each other a distance $L$ apart. A wave bouncing between them interferes with its own reflections. Almost every wavelength destructively interferes with itself after a round trip and dies. But a special set survives: those for which a whole number of half-wavelengths fits exactly between the mirrors, so the wave lands back in phase and reinforces. Those are **standing waves** — the same nodes-pinned-at-the-walls picture as a guitar string, now for light. The mirror box is a **Fabry–Pérot cavity**, and it acts as a comb-shaped filter: it passes a ladder of evenly spaced frequencies and blocks everything between them.

Two knobs control the comb. The mirror *spacing* $L$ sets how far apart the teeth are — long cavity, closely packed teeth. The mirror *quality* (how reflective they are) sets how *sharp* each tooth is — better mirrors trap the light for more bounces, so each resonance is a narrower spike. A laser is then just this: a gain medium ([1.4](01-04-gain-population-inversion-laser-threshold.md)) sitting inside the comb, feeding whichever teeth fall under its gain curve until they blaze. The mirrors decide *which* frequencies; the gain decides *whether* they light up.

## The formal version

**Longitudinal modes.** A field bouncing between mirrors separated by $L$ (meters) forms a standing wave only if an integer number of half-wavelengths fits:

$$L = q\,\frac{\lambda}{2}, \qquad q = 1, 2, 3, \dots$$

with $\lambda$ the wavelength (m) and $q$ the (large) integer mode number. *In words: the mirrors must sit on nodes, so only wavelengths that divide $2L$ evenly survive.* Using $\lambda = c/\nu$ with $c$ the speed of light (m/s) and $\nu$ the frequency (Hz), the allowed **longitudinal-mode frequencies** are

$$\boxed{\;\nu_q = q\,\frac{c}{2L}\;}$$

These are equally spaced. The gap between neighboring modes is the **free spectral range**:

$$\Delta\nu_{\text{FSR}} = \nu_{q+1} - \nu_q = \frac{c}{2L}.$$

*In words: the mode spacing is one over the round-trip time $2L/c$ — the rate at which a pulse laps the cavity.* Longer cavity, finer comb.

**Transverse modes.** The condition above fixes the frequency but not the beam's cross-sectional shape. The full mode set is labeled $\text{TEM}_{mn}$ — Hermite–Gaussian patterns, with $m,n$ counting intensity nulls across the two transverse directions. $\text{TEM}_{00}$ is the fundamental: exactly the clean Gaussian beam of [1.1](01-01-classical-em-waves-gaussian-beams.md), with no transverse nodes. Higher-order modes ($\text{TEM}_{10}$, $\text{TEM}_{11}$, …) carry extra spatial lobes and slightly different resonant frequencies; a well-aligned laser is engineered to run on $\text{TEM}_{00}$ alone.

**Loss, photon lifetime, and finesse.** Real mirrors leak. Let $R_1, R_2$ be the mirror (power) reflectivities and let there be a distributed internal loss $\alpha_i$ (per meter) in the medium. Light trapped in the cavity decays exponentially with a **photon lifetime** $\tau_c$ (seconds) — the average time a photon survives before escaping or being absorbed. The sharpness of the comb teeth is captured by the **finesse**, the ratio of tooth spacing to tooth width:

$$\mathcal{F} = \frac{\pi\,(R_1 R_2)^{1/4}}{1 - \sqrt{R_1 R_2}} \quad\xrightarrow{R_1=R_2=R}\quad \mathcal{F} = \frac{\pi\sqrt{R}}{1 - R}.$$

*In words: finesse ≈ the number of round trips a photon makes before leaking out (times $\pi$).* Each resonance then has a **cavity linewidth**

$$\delta\nu = \frac{\Delta\nu_{\text{FSR}}}{\mathcal{F}} = \frac{1}{2\pi\tau_c},$$

and the **quality factor** — energy stored over energy lost per radian — is

$$Q = \frac{\nu}{\delta\nu} = \omega\,\tau_c, \qquad \omega = 2\pi\nu.$$

*In words: $Q$ counts how many optical cycles the field rings before decaying; a high-$Q$ cavity is a very good energy trap.* High $R$ → high $\mathcal F$ → long $\tau_c$ → narrow $\delta\nu$ → high $Q$: five names for the same statement, "the mirrors are good."

**Threshold condition (round trip).** Now insert the gain medium of [1.4](01-04-gain-population-inversion-laser-threshold.md), which multiplies intensity by $e^{\gamma L}$ per pass, where $\gamma$ (per meter) is the gain coefficient. A laser self-sustains when one full round trip returns the intensity exactly to where it started — gain replaces every loss:

$$R_1 R_2\, e^{2\gamma_{\text{th}} L}\, e^{-2\alpha_i L} = 1.$$

*In words: over the round-trip distance $2L$, amplification must exactly cancel the two mirror leakages and the internal absorption.* Solving for the **threshold gain**,

$$\boxed{\;\gamma_{\text{th}} = \alpha_i + \frac{1}{2L}\ln\!\frac{1}{R_1 R_2}\;}$$

The first term pays the distributed loss; the second pays the mirror loss, spread over the round trip. Finally, recall from [1.4](01-04-gain-population-inversion-laser-threshold.md) that gain comes from population inversion, $\gamma = \sigma\,\Delta N$, with $\sigma$ the stimulated-emission cross section (m²) and $\Delta N$ the inversion density (per m³). So the **threshold inversion** is

$$\Delta N_{\text{th}} = \frac{\gamma_{\text{th}}}{\sigma} = \frac{1}{\sigma}\left(\alpha_i + \frac{1}{2L}\ln\frac{1}{R_1 R_2}\right).$$

This is exactly the synthesis Boss Problem 1 asks for: cavity losses → threshold gain → threshold inversion → pump rate.

**How many modes lase?** The gain curve has a finite width $\Delta\nu_{\text{gain}}$ (set by the transition's broadening). Every comb tooth that pokes above threshold within that band can oscillate, so the number of longitudinal modes is roughly

$$N \approx \frac{\Delta\nu_{\text{gain}}}{\Delta\nu_{\text{FSR}}} = \frac{2L\,\Delta\nu_{\text{gain}}}{c}.$$

*In words: count how many comb teeth fit under the gain hump.*

## Picture

![A Fabry–Pérot cavity: two mirrors R1 and R2 a distance L apart trap a blue standing wave with nodes at the mirrors; below, a frequency comb of teeth spaced by the free spectral range, with a coral gain-bandwidth envelope selecting which teeth (blue) rise above threshold and lase](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (read the comb).** A He–Ne laser has cavity length $L = 0.5$ m and equal mirrors $R = 0.99$; it lases at $\lambda = 633$ nm. The mode spacing is

$$\Delta\nu_{\text{FSR}} = \frac{c}{2L} = \frac{3\times10^8}{1.0} = 3\times10^8\ \text{Hz} = 300\ \text{MHz}.$$

The finesse is $\mathcal F = \pi\sqrt{R}/(1-R) = \pi(0.995)/0.01 \approx 313$, so each resonance is only

$$\delta\nu = \frac{\Delta\nu_{\text{FSR}}}{\mathcal F} = \frac{3\times10^8}{313} \approx 0.96\ \text{MHz}$$

wide. With $\nu = c/\lambda = 4.74\times10^{14}$ Hz, the quality factor is $Q = \nu/\delta\nu \approx 4.9\times10^8$ — the field rings roughly half a billion cycles before leaking out. Tiny mirror loss, enormous $Q$.

**Example 2 (does it lase, and on how many teeth?).** Same cavity, and suppose the gain medium's inversion gives $\gamma = 0.5\ \text{m}^{-1}$ while internal loss is negligible. Threshold gain is $\gamma_{\text{th}} = \frac{1}{2L}\ln\frac{1}{R^2} = \frac{1}{1.0}\ln\frac{1}{0.98} = 0.0202\ \text{m}^{-1}$. Since $\gamma = 0.5 \gg \gamma_{\text{th}}$, it lases comfortably. The Doppler-broadened gain bandwidth of He–Ne is about $\Delta\nu_{\text{gain}} \approx 1.5$ GHz, so the number of longitudinal modes above threshold is

$$N \approx \frac{\Delta\nu_{\text{gain}}}{\Delta\nu_{\text{FSR}}} = \frac{1.5\times10^9}{3\times10^8} = 5.$$

Five closely spaced colors oscillate at once — which is why a bare He–Ne is *not* perfectly monochromatic, and why forcing single-mode operation (Problem 3) matters for coherence.

## Watch out

- **You might think finesse and $Q$ measure the same thing.** They're cousins but not equal. Finesse $\mathcal F = \Delta\nu_{\text{FSR}}/\delta\nu$ compares linewidth to *mode spacing* (a geometry-and-mirrors number, independent of which mode). $Q = \nu/\delta\nu$ compares linewidth to the *optical frequency itself* — so $Q = \mathcal F \cdot \nu/\Delta\nu_{\text{FSR}} = \mathcal F \cdot q$ is enormously larger, because $q$ is huge. Same $\delta\nu$, two different reference rulers.
- **You might drop a factor of 2 in the threshold.** The mirror-loss term is $\frac{1}{2L}\ln\frac{1}{R_1R_2}$, not $\frac{1}{L}\ln\frac{1}{R_1R_2}$. The $2L$ is the *round-trip* path — gain acts over both the forward and return passes, so the per-length threshold is halved. Forgetting it doubles your predicted threshold inversion.
- **You might think more longitudinal modes is fine.** For raw power, yes; for coherence, no. Each extra mode is a slightly different frequency, and a superposition of several frequencies beats in and out — shortening the coherence time you'll define in [2.1](02-01-temporal-coherence-g1.md). Single-mode lasers deliberately throw away power to buy spectral purity.

## One-liner

> Two mirrors turn a gain medium into a laser by pinning the light to a comb of frequencies spaced $c/2L$, each sharpened by the mirror finesse — and it fires on every comb tooth whose round-trip gain $R_1R_2 e^{2\gamma L}$ beats one.

## Problems

**P1 (🟢)** A laser cavity is $L = 15$ cm long with two equal mirrors of reflectivity $R = 0.98$. (a) Find the free spectral range $\Delta\nu_{\text{FSR}}$. (b) Find the finesse $\mathcal F$ and the cavity linewidth $\delta\nu$. (c) If it operates at $\nu = 5.0\times10^{14}$ Hz, find $Q$.

**P2 (🟡)** A gain medium of length $L = 0.10$ m sits in a cavity with mirrors $R_1 = 0.999$ and $R_2 = 0.95$ and internal loss $\alpha_i = 0.10\ \text{m}^{-1}$. (a) Find the threshold gain $\gamma_{\text{th}}$. (b) If the stimulated-emission cross section is $\sigma = 3\times10^{-23}\ \text{m}^2$, find the threshold inversion density $\Delta N_{\text{th}}$. (This is the core of Boss Problem 1.)

**P3 (🔴)** A dye laser has gain bandwidth $\Delta\nu_{\text{gain}} = 3.0$ GHz. (a) With a cavity length $L = 0.5$ m, how many longitudinal modes lase? (b) You want *single*-mode operation using cavity length alone. What is the longest cavity that guarantees at most one mode under the gain curve, and why is that impractical — what do real lasers do instead?

<details>
<summary>Solutions</summary>

**P1** (a) $\Delta\nu_{\text{FSR}} = \dfrac{c}{2L} = \dfrac{3\times10^8}{2(0.15)} = \dfrac{3\times10^8}{0.30} = 1.0\times10^9\ \text{Hz} = 1.0\ \text{GHz}.$

(b) Equal mirrors: $\mathcal F = \dfrac{\pi\sqrt{R}}{1-R} = \dfrac{\pi\sqrt{0.98}}{0.02} = \dfrac{\pi(0.990)}{0.02} \approx 155.$ Then

$$\delta\nu = \frac{\Delta\nu_{\text{FSR}}}{\mathcal F} = \frac{1.0\times10^9}{155} \approx 6.4\times10^6\ \text{Hz} = 6.4\ \text{MHz}.$$

(c) $Q = \dfrac{\nu}{\delta\nu} = \dfrac{5.0\times10^{14}}{6.4\times10^6} \approx 7.8\times10^7.$

*Check.* Units of $\Delta\nu_{\text{FSR}}$: $(\text{m/s})/\text{m} = \text{s}^{-1}$ ✓. $\mathcal F$, $Q$ are dimensionless ✓. Cross-check $Q$ via $Q = \omega\tau_c$ with $\tau_c = 1/(2\pi\delta\nu) = 1/(2\pi\cdot6.4\times10^6) = 2.5\times10^{-8}$ s and $\omega = 2\pi\nu = 3.14\times10^{15}$: $Q = 3.14\times10^{15}\cdot2.5\times10^{-8} \approx 7.8\times10^7$ ✓.

**P2** (a) Threshold gain from the round-trip condition:

$$\gamma_{\text{th}} = \alpha_i + \frac{1}{2L}\ln\frac{1}{R_1 R_2}.$$

Here $R_1 R_2 = 0.999\times0.95 = 0.94905$, so $\ln\frac{1}{0.94905} = \ln(1.0537) = 0.05229$. With $\frac{1}{2L} = \frac{1}{0.20} = 5.0\ \text{m}^{-1}$,

$$\gamma_{\text{th}} = 0.10 + 5.0(0.05229) = 0.10 + 0.261 = 0.361\ \text{m}^{-1}.$$

(b) Using $\gamma = \sigma\Delta N$ from [1.4](01-04-gain-population-inversion-laser-threshold.md):

$$\Delta N_{\text{th}} = \frac{\gamma_{\text{th}}}{\sigma} = \frac{0.361}{3\times10^{-23}} \approx 1.2\times10^{22}\ \text{m}^{-3}.$$

*Check.* Units: $\gamma_{\text{th}}$ in $\text{m}^{-1}$ ✓; $\Delta N = \text{m}^{-1}/\text{m}^2 = \text{m}^{-3}$ ✓. Sanity: the output mirror ($R_2 = 0.95$) dominates the loss budget, contributing $\frac{1}{2L}\ln\frac{1}{0.95} = 0.256\ \text{m}^{-1}$ of the $0.261$ mirror term — as it should, since it deliberately leaks the useful beam. ✓

**P3** (a) $N \approx \dfrac{\Delta\nu_{\text{gain}}}{\Delta\nu_{\text{FSR}}}$ with $\Delta\nu_{\text{FSR}} = \dfrac{c}{2L} = \dfrac{3\times10^8}{1.0} = 3.0\times10^8$ Hz:

$$N \approx \frac{3.0\times10^9}{3.0\times10^8} = 10\ \text{modes}.$$

(b) One mode requires the spacing to exceed the gain width, $\Delta\nu_{\text{FSR}} = \dfrac{c}{2L} > \Delta\nu_{\text{gain}}$, i.e.

$$L < \frac{c}{2\,\Delta\nu_{\text{gain}}} = \frac{3\times10^8}{2(3.0\times10^9)} = 0.05\ \text{m} = 5\ \text{cm}.$$

A 5 cm (or shorter) cavity leaves no room for a decent gain medium and slashes output power, so pure length control is impractical. Instead, real single-mode lasers keep a long cavity (for gain and power) and insert a **second, short filter** — an intracavity etalon (a mini Fabry–Pérot whose own coarse comb selects one tooth) or a frequency-selective grating — to suppress all but one longitudinal mode.

*Check.* The threshold-crossing condition $L < c/(2\Delta\nu_{\text{gain}})$ is exactly "$N < 1$" from part (a)'s formula, so the two parts are consistent. ✓

</details>

## Flashback

**From Lesson 1.1 (Classical EM waves & Gaussian beams):** A laser is focused to a waist $w_0 = 20\ \mu\text{m}$ at wavelength $\lambda = 800$ nm. Find its Rayleigh range $z_R$, and the beam radius $w$ one Rayleigh range past the waist. (Fresh numbers — no cavity involved.)

<details>
<summary>Solution</summary>

The Rayleigh range is the distance over which a Gaussian beam stays roughly collimated:

$$z_R = \frac{\pi w_0^2}{\lambda} = \frac{\pi (20\times10^{-6})^2}{800\times10^{-9}} = \frac{\pi(4.0\times10^{-10})}{8.0\times10^{-7}} = \pi(5.0\times10^{-4}) \approx 1.57\times10^{-3}\ \text{m} \approx 1.6\ \text{mm}.$$

By definition of $z_R$, the beam radius grows to $\sqrt2$ times the waist there (the spot area doubles):

$$w(z_R) = w_0\sqrt{1 + (z_R/z_R)^2} = w_0\sqrt2 = 20\sqrt2 \approx 28.3\ \mu\text{m}.$$

*Check.* Units: $\text{m}^2/\text{m} = \text{m}$ ✓. Tighter focus (smaller $w_0$) shortens $z_R$ quadratically — the price of a small spot is that it spreads fast, exactly the trade-off from [1.1](01-01-classical-em-waves-gaussian-beams.md). ✓

</details>

## Connections

- **Backward:** the gain coefficient $\gamma = \sigma\Delta N$ and the very idea of amplification come straight from [1.4](01-04-gain-population-inversion-laser-threshold.md); the cavity just recycles that gain until it beats the round-trip loss. The fundamental $\text{TEM}_{00}$ mode is the Gaussian beam of [1.1](01-01-classical-em-waves-gaussian-beams.md), and the standing-wave / node-counting picture is the boundary-value logic of waves you met in [waves-optics](../../waves-optics/syllabus.md).
- **Forward:** [2.1 Temporal coherence & $g^{(1)}$](02-01-temporal-coherence-g1.md) turns "how many modes and how narrow" into a *coherence time* — the cavity linewidth $\delta\nu$ you computed here directly bounds how long the laser's phase stays predictable. The single-vs-multimode question resurfaces there as the difference between a long and short coherence length.
- **Sideways:** a Fabry–Pérot cavity is a resonator, and its response is the optical twin of the driven damped oscillator — $Q$, linewidth, and ringdown time $\tau_c$ are the same quantities that describe an $RLC$ circuit or a mechanical resonator. The comb of modes reappears in Module 4 as the discrete field modes you'll quantize into photons in [cavity QED](04-02-cavity-qed-jaynes-cummings.md).
