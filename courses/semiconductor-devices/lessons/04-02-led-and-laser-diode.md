# Semiconductor Devices · Lesson 4.2: The LED and the laser diode

> ⏱ ~15 min · Module 4: Optoelectronic devices and fabrication · Builds on: [4.1 Light and semiconductors](04-01-light-absorption-emission-detection.md), [2.5 Metal–semiconductor and heterojunctions](02-05-metal-semiconductor-heterojunctions.md) · Unlocks: [4.3 The solar cell](04-03-solar-cell.md), [4.4 A taste of device fabrication](04-04-device-fabrication.md)

## Why this matters

Run a junction forward and inject minority carriers; if they recombine radiatively, you have a light source. That sentence describes a device that has displaced the incandescent bulb, carries every bit of intercontinental internet traffic, reads every optical disc, and prints every laser-printed page.

The step from LED to laser is where it gets interesting, and it rests on the heterojunction of [2.5](02-05-metal-semiconductor-heterojunctions.md). A homojunction laser needs so much current that it only works pulsed at cryogenic temperatures — which is exactly what the first ones (1962) did. The double heterostructure cut the threshold current a hundredfold and made room-temperature continuous operation possible, and it is the reason semiconductor lasers exist as products rather than laboratory curiosities.

## The idea

**The LED.** Forward-bias a direct-gap junction. Electrons injected into the $p$-side and holes into the $n$-side recombine, and in a direct-gap material most of those recombinations emit a photon of energy $\approx E_g$. Colour is set by the band gap, so choosing a colour means choosing an alloy composition.

Three efficiencies multiply, and each is a separate engineering problem:

- **Internal quantum efficiency** — what fraction of recombinations are radiative. [1.3](01-03-generation-recombination.md) showed this is 99% in good GaAs and 1% in silicon.
- **Extraction efficiency** — what fraction of generated photons escape the crystal. This is the *worst* one, and the reason is total internal reflection: semiconductors have refractive indices near 3.5, giving a critical angle of only 17°, so a flat-surfaced chip emits about 2% of what it makes.
- **Injection efficiency** — what fraction of the terminal current becomes recombination in the active region.

**The laser.** Push the injection much harder and something qualitatively different becomes possible. Normally an incident photon is more likely to be *absorbed* than to stimulate emission, because most electrons are in the valence band. But inject enough carriers and you can invert that — more electrons in the conduction band at the relevant energy than in the valence band. Then an incident photon is more likely to stimulate a copy of itself than to be absorbed, and the material has **optical gain**.

Put that gain medium in a mirrored cavity, and photons bounce back and forth being amplified. When the round-trip gain exceeds the round-trip loss, the field builds up coherently — **lasing**. Below that threshold current the device is an LED; above it, the output jumps onto a much steeper line and the light becomes narrowband, directional and coherent.

**Why the [double heterostructure](../reference.md#double-heterostructure) is essential.** Threshold requires a high *carrier density* in the active region, and a high *photon density* in the same place. A homojunction gives you neither: injected carriers diffuse away over a diffusion length (microns), and the light spreads out too. A double heterostructure confines both — the band offsets trap carriers in a thin narrow-gap layer, and because narrower gap also means *higher refractive index*, the same layer is an optical waveguide. **One structure, two confinements, and they happen to coincide.** That coincidence is why the double heterostructure works so well, and it cut threshold current densities from ~50 000 A/cm² to ~1000, and then quantum wells took it below 100.

## The formal version

**Emission wavelength.**

$$\lambda \approx \frac{hc}{E_g} = \frac{1.240}{E_g[\mathrm{eV}]}\ \mu\mathrm{m}.$$

*In words: the LED's colour is its band gap.* (The emission peak sits slightly above $E_g$ — carriers have thermal energy — with a linewidth of about $1.8k_BT\approx46$ meV at 300 K, which is why an LED is coloured but not monochromatic.)

| Colour | $\lambda$ | Required $E_g$ | Material |
|---|---|---|---|
| Infrared | 870 nm | 1.42 eV | GaAs |
| Red | 630 nm | 1.97 eV | AlGaInP |
| Green | 530 nm | 2.34 eV | InGaN |
| Blue | 465 nm | 2.67 eV | InGaN |
| UV | 365 nm | 3.40 eV | GaN |

**Efficiencies.**

$$\eta_{\rm ext} = \eta_{\rm inj}\times\eta_{\rm int}\times\eta_{\rm extraction}, \qquad \eta_{\rm int} = \frac{1/\tau_{\rm rad}}{1/\tau_{\rm rad}+1/\tau_{\rm nr}} = \frac{\tau_{\rm nr}}{\tau_{\rm nr}+\tau_{\rm rad}}.$$

**Optical output power.**

$$P_{\rm opt} = \eta_{\rm ext}\,\frac{I}{q}\,h\nu = \eta_{\rm ext}\,\frac{I\,E_g}{q} \approx \eta_{\rm ext}\,I\,\frac{1.240}{\lambda[\mu\mathrm{m}]}\ \text{watts per amp}.$$

*In words: each electron delivers at most one photon of energy $E_g$, so the wall-plug efficiency ceiling is $E_g/qV_F$ — close to 1, since $V_F\approx E_g/q$.*

**The extraction problem.** With semiconductor index $n_s\approx3.5$ and air $n_a = 1$, the critical angle is

$$\theta_c = \arcsin\frac{n_a}{n_s} = \arcsin(0.286) = 16.6°.$$

The escape cone's solid-angle fraction, including Fresnel transmission, is approximately

$$\eta_{\rm extraction} \approx \frac{1}{4n_s^2} = \frac{1}{4(3.5)^2} = 2.0\%\ \text{per flat surface}.$$

*In words: a flat-faced LED emits about 2% of the light it makes; the rest is trapped and reabsorbed.* This is the dominant loss in LED engineering, and the fixes are geometric rather than electronic:

| Fix | Mechanism | Gain |
|---|---|---|
| Encapsulation in epoxy ($n\approx1.5$) | raises $\theta_c$ to 25° | ~2–3× |
| Surface texturing / roughening | randomizes angles so trapped rays get repeated chances | ~2× |
| Shaped die (truncated inverted pyramid) | reflects trapped light into the escape cone | ~2× |
| Photonic crystal / patterned substrate | diffracts guided modes out | ~1.5× |
| Distributed Bragg reflector under the active layer | recovers downward-emitted light | ~1.5× |

Stacking these takes a modern white LED from 2% to over 80% extraction, and their cumulative effect — not any improvement in the semiconductor itself — is most of the LED lighting revolution.

**Population inversion and gain.** Stimulated emission exceeds absorption when the quasi-Fermi levels of [1.2](01-02-drift-diffusion-einstein.md) straddle the photon energy:

$$\boxed{\;F_n-F_p > h\nu \ge E_g \qquad \text{(the Bernard–Duraffourg condition)}.\;}$$

*In words: you must pump the quasi-Fermi separation above the photon energy — which, since $F_n-F_p = qV$, means forward-biasing above the band-gap voltage.* This is a striking and concrete statement: a laser diode's forward voltage necessarily exceeds $E_g/q$, unlike an ordinary LED which can operate below it.

**Threshold condition.** In a cavity of length $L$ with mirror reflectivities $R_1,R_2$ and internal loss $\alpha_i$, a round trip must break even:

$$R_1R_2\,e^{2(\Gamma g_{\rm th}-\alpha_i)L} = 1 \quad\Longrightarrow\quad \boxed{\;\Gamma g_{\rm th} = \alpha_i+\frac{1}{2L}\ln\frac{1}{R_1R_2}.\;}$$

$\Gamma$ is the **optical confinement factor** — the fraction of the optical mode overlapping the gain region — and it is where the heterostructure earns its keep. For a cleaved facet, $R = \left(\frac{n_s-1}{n_s+1}\right)^2 = \left(\frac{2.5}{4.5}\right)^2 = 0.31$ with no coating at all, which is why laser diodes work straight out of a cleaving step.

**Light–current characteristic.**

$$P_{\rm opt} = \eta_d\,\frac{h\nu}{q}\,(I-I_{\rm th}) \quad\text{for } I>I_{\rm th},$$

with $\eta_d$ the **differential (slope) efficiency**. Below threshold the device is a poor LED; above it, output rises steeply and linearly. The kink is sharp, and $I_{\rm th}$ is the headline specification.

**Threshold current and why confinement dominates it.** Threshold requires a carrier density $n_{\rm th}$ throughout the active volume, replenished against recombination:

$$I_{\rm th} = \frac{q\,n_{\rm th}\,V_{\rm active}}{\tau} = \frac{q\,n_{\rm th}\,(A\cdot d)}{\tau},$$

with $d$ the active-layer thickness. *In words: threshold current is proportional to the active volume, so making the active layer thin is the single most powerful lever.*

The historical progression follows directly:

| Structure | $d$ | $J_{\rm th}$ (A/cm²) | Note |
|---|---|---|---|
| Homojunction (1962) | ~1–2 µm (diffusion length) | ~50 000 | pulsed, 77 K only |
| Single heterostructure | ~1 µm | ~8 000 | still difficult |
| **Double heterostructure** (1970) | 0.1–0.2 µm | ~1 000 | **room-temperature CW** |
| Quantum well | 5–10 nm | ~100 | modern standard |
| Quantum dot | ~nm, 3-D confined | ~10 | temperature-insensitive |

*In words: every generation shrank the active volume, and threshold followed.* Note the quantum well's subtlety — making $d$ smaller also reduces $\Gamma$ (the mode no longer fits in the layer), so a single 8 nm well has poor confinement. The fix is **separate confinement**: a multi-quantum-well stack inside a thicker waveguide layer, decoupling the carrier confinement (thin wells) from the optical confinement (thick guide). That decoupling is the standard architecture of every telecom laser.

**Laser types.**

| Type | Structure | Use |
|---|---|---|
| Fabry–Pérot | cleaved facets | cheap, multi-mode, pointers and CD |
| **DFB** (distributed feedback) | grating along the cavity | single-frequency, telecom |
| **VCSEL** | vertical cavity, DBR mirrors above and below | circular beam, testable on wafer, cheap arrays — datacentre links, phone face sensors |

The VCSEL is worth a note because its economics changed the field: emitting vertically means devices can be tested at wafer level and fabricated in dense 2-D arrays, rather than being cleaved into bars and tested individually. That manufacturability, not any optical superiority, is why VCSELs dominate short-reach optical links and consumer 3-D sensing.

## Picture

![A two-panel figure. Left: a double heterostructure band diagram under forward bias, showing a thin narrow-gap active layer between two wide-gap cladding layers, with electrons collected in the conduction-band well and holes in the valence-band well, and beneath it a refractive-index profile showing the same layer has the highest index so the optical mode is guided there, with the mode intensity drawn overlapping the active region. Right: the light-current characteristic, showing weak spontaneous LED-like emission below threshold and a sharp kink at I_th onto a steep linear stimulated-emission line, with the slope labelled as the differential efficiency and curves at two temperatures showing threshold rising with temperature.](assets/04-02-fig1.svg)

Left: the double heterostructure's double gift. The band offsets trap carriers in the thin active layer, raising the carrier density where it is needed; and because a narrower gap comes with a *higher refractive index*, the same layer guides the optical mode. Carriers and photons are concentrated in the same small volume — which is exactly what the threshold condition demands, and which no homojunction can provide.

Right: the kink. Below threshold the device emits weak, broad, incoherent spontaneous light. Above it, stimulated emission takes over and the output climbs steeply and linearly. The second curve shows what heating does: threshold rises roughly exponentially with temperature, which is why laser diodes are specified with a characteristic temperature $T_0$ and why telecom lasers sit on thermoelectric coolers.

## Worked examples

**Example 1 (LED efficiency, from injection to escape).** A GaAs LED ($E_g = 1.42$ eV) has $\tau_{\rm rad} = 2$ ns, $\tau_{\rm nr} = 50$ ns, injection efficiency 0.9, and a flat unencapsulated surface. It runs at 20 mA with $V_F = 1.5$ V. Find the wavelength, all efficiencies, the optical output and the wall-plug efficiency.

*Wavelength.* $\lambda = 1.240/1.42 = 0.873\ \mu$m $= 873$ nm (near infrared).

*Internal quantum efficiency.*

$$\eta_{\rm int} = \frac{\tau_{\rm nr}}{\tau_{\rm nr}+\tau_{\rm rad}} = \frac{50}{50+2} = 0.962.$$

*Extraction.* With $n_s = 3.6$ for GaAs:

$$\eta_{\rm extraction}\approx\frac{1}{4n_s^2} = \frac{1}{4(12.96)} = 0.0193 = 1.93\%.$$

*Overall external quantum efficiency.*

$$\eta_{\rm ext} = (0.9)(0.962)(0.0193) = 0.0167 = 1.67\%.$$

*Optical power.*

$$P_{\rm opt} = \eta_{\rm ext}\frac{I}{q}h\nu = (0.0167)\frac{(0.020)}{1} \times 1.42\ \mathrm{V} = (0.0167)(0.020)(1.42) = 4.74\times10^{-4}\ \mathrm{W} = 0.47\ \mathrm{mW}.$$

(Using $P = \eta_{\rm ext}I E_g/q$ with $E_g/q = 1.42$ V.)

*Wall-plug efficiency.*

$$\eta_{\rm wall} = \frac{P_{\rm opt}}{IV_F} = \frac{4.74\times10^{-4}}{(0.020)(1.5)} = \frac{4.74\times10^{-4}}{0.030} = 1.58\%.$$

*Where it all went.* The chip converted 96% of its recombinations into photons — excellent — and then **threw away 98% of them at the surface**. Injection and internal efficiency are nearly perfect; extraction is the entire problem.

*What the fixes buy.* Encapsulating in epoxy ($n = 1.5$) raises the critical angle from 16.1° to 24.6° and the extraction to roughly $\eta\approx n_{\rm epoxy}^2/(4n_s^2) = 2.25/51.8 = 4.3\%$ — a 2.2× gain. Adding surface texturing and a shaped die can push it past 50%. Multiplying through, a well-engineered version of this same chip reaches $\eta_{\rm wall}$ above 40%, and modern commercial LEDs exceed 50% — **entirely through optics, with the semiconductor unchanged.**

**Example 2 (a laser threshold, and why the active layer is thin).** A double-heterostructure laser has cavity length $L = 300\ \mu$m, cleaved facets ($R_1 = R_2 = 0.31$), internal loss $\alpha_i = 10\ \mathrm{cm^{-1}}$, confinement factor $\Gamma = 0.3$, active area $A = 300\times2\ \mu\mathrm{m}^2$, active thickness $d = 0.15\ \mu$m, $n_{\rm th} = 2\times10^{18}\ \mathrm{cm^{-3}}$, $\tau = 3$ ns. Find the threshold gain and threshold current, then repeat for a 10 nm quantum well.

*Mirror loss.*

$$\alpha_m = \frac{1}{2L}\ln\frac{1}{R_1R_2} = \frac{1}{2(300\times10^{-4})}\ln\frac{1}{(0.31)^2} = \frac{1}{6\times10^{-2}}\ln(10.41) = (16.67)(2.343) = 39.0\ \mathrm{cm^{-1}}.$$

*Threshold gain.*

$$g_{\rm th} = \frac{\alpha_i+\alpha_m}{\Gamma} = \frac{10+39.0}{0.3} = \frac{49.0}{0.3} = 163\ \mathrm{cm^{-1}}.$$

*Threshold current.* Active volume $V = A\,d = (300\times10^{-4})(2\times10^{-4})(0.15\times10^{-4}) = 9.0\times10^{-11}\ \mathrm{cm^3}$:

$$I_{\rm th} = \frac{q\,n_{\rm th}V}{\tau} = \frac{(1.602\times10^{-19})(2\times10^{18})(9.0\times10^{-11})}{3\times10^{-9}} = \frac{2.884\times10^{-11}}{3\times10^{-9}} = 9.6\times10^{-3}\ \mathrm{A} = 9.6\ \mathrm{mA}.$$

$$J_{\rm th} = \frac{I_{\rm th}}{A} = \frac{9.6\times10^{-3}}{6\times10^{-6}\ \mathrm{cm^2}} = 1600\ \mathrm{A/cm^2}.$$

Both figures are the right order for a real double-heterostructure laser, which typically shows 20–50 mA and 1000–3000 A/cm². The model runs a factor of two or three optimistic, for two reasons worth naming: $n_{\rm th} = 2\times10^{18}$ is the *transparency* density, while producing $g_{\rm th} = 163\ \mathrm{cm^{-1}}$ of net gain needs perhaps twice that (gain grows only logarithmically above transparency); and at $10^{18}$–$10^{19}\ \mathrm{cm^{-3}}$ Auger recombination ([1.3](01-03-generation-recombination.md)) shortens the effective lifetime well below 3 ns. Both corrections push $I_{\rm th}$ up, and together they close the gap.

*The scaling, which is the point.* Whatever the absolute value, $I_{\rm th}\propto V_{\rm active} = A\,d$. Replacing the 0.15 µm active layer with a 10 nm quantum well cuts $d$ by 15:

$$\frac{I_{\rm th}^{\rm QW}}{I_{\rm th}^{\rm DH}}\bigg|_{\rm naive} \approx \frac{10\ \mathrm{nm}}{150\ \mathrm{nm}} = \frac{1}{15},$$

but this is *offset* by the loss of optical confinement — a 10 nm layer captures very little of a mode whose width is set by the wavelength (~0.3 µm in the material), so $\Gamma$ falls from 0.3 to perhaps 0.02. That raises $g_{\rm th}$ by about 15× in compensation, and naively the two effects cancel exactly.

**They do not cancel, and why they do not is the physics that makes quantum wells worth building.** A quantum well's density of states is a *step function* rather than the bulk $\sqrt{E-E_c}$ form, so injected carriers pile up right at the band edge instead of spreading over a thermal range of energies. The gain produced per unit carrier density is therefore substantially higher, and the differential gain steeper. Combined with **separate confinement** — thin wells embedded in a thicker waveguide layer that restores $\Gamma$ to 0.1–0.2 — the net result is the tenfold reduction in $J_{\rm th}$ recorded in the table above, from ~1000 to ~100 A/cm².

That reduction is genuinely quantum-mechanical rather than geometric: it comes from reshaping the density of states, which is something no amount of clever layer stacking in bulk material can achieve. Push the confinement to all three dimensions and you get quantum dots, whose delta-function density of states gives lower threshold still and — because carriers cannot be thermally redistributed out of a discrete level — a far higher $T_0$, which is the property P3 shows matters most in practice.

## Watch out

- **You might expect an LED to be inefficient because of the semiconductor.** In a good direct-gap material $\eta_{\rm int}$ is above 90%. The loss is almost entirely **extraction** — total internal reflection at $n = 3.5$ — and the fixes are optical, not electronic.
- **You might think a laser diode is just a bright LED.** Below threshold it *is* one. Above threshold the emission mechanism changes to stimulated emission, and the output becomes coherent, narrowband and directional. The transition is sharp.
- **You might size the active region for high gain.** Threshold current scales with active *volume*, so thin is better — but too thin and the optical mode no longer overlaps it ($\Gamma$ collapses). The resolution is separate confinement, not a compromise thickness.
- **You might ignore temperature.** $I_{\rm th}\propto e^{T/T_0}$ with $T_0\approx50$–70 K for InP-based lasers, so a 30 °C rise can raise threshold by 60%. Telecom lasers are temperature-controlled for this reason; GaN and quantum-dot lasers have much higher $T_0$.
- **You might use the ideal $1/4n_s^2$ extraction for a real LED.** It is the flat-surface, single-pass value. Real devices with encapsulation, texturing and shaped dies beat it by more than an order of magnitude.

## One-liner

> Forward-inject a direct-gap junction and it emits at $\lambda = 1.240/E_g$ microns; confine the carriers *and* the light in one thin heterostructure layer and the same device lases — which is why the active region gets thinner with every generation.

## Problems

**P1 (🟢)** An LED is made from InGaN with $E_g = 2.65$ eV. (a) Find the emission wavelength and colour. (b) With $\eta_{\rm ext} = 0.35$ and $I = 350$ mA, find the optical output power. (c) With $V_F = 3.2$ V, find the wall-plug efficiency. (d) Compare with a 60 W incandescent bulb producing 800 lm at about 2% radiative efficiency in the visible.

**P2 (🟡)** A laser diode has $L = 400\ \mu$m, $R_1 = 0.32$, $R_2 = 0.95$ (one facet high-reflection coated), $\alpha_i = 15\ \mathrm{cm^{-1}}$, $\Gamma = 0.25$. (a) Find the mirror loss and threshold gain. (b) Repeat with both facets uncoated at $R = 0.32$. (c) Which configuration has the lower threshold, and what is the cost? (d) If the cavity is shortened to 200 µm with both facets uncoated, recompute and comment.

**P3 (🔴)** A laser has $I_{\rm th} = 15$ mA at 25 °C with $T_0 = 60$ K, slope efficiency $\eta_d = 0.35$ W/A, emitting at 1.31 µm. (a) Find the optical power at 50 mA and 25 °C. (b) Find $I_{\rm th}$ at 70 °C and the power at 50 mA there. (c) A control loop holds the optical power constant at the 25 °C value by raising the current. What current is needed at 70 °C? (d) Comment on the implications for laser lifetime and for system design.

<details>
<summary>Solutions</summary>

**P1** (a) $$\lambda = \frac{1.240}{2.65} = 0.468\ \mu\mathrm{m} = 468\ \mathrm{nm} \quad\text{— blue}.$$

(b) $$P_{\rm opt} = \eta_{\rm ext}\,I\,\frac{E_g}{q} = (0.35)(0.350)(2.65) = 0.325\ \mathrm{W} = 325\ \mathrm{mW}.$$

(c) $$\eta_{\rm wall} = \frac{P_{\rm opt}}{IV_F} = \frac{0.325}{(0.350)(3.2)} = \frac{0.325}{1.12} = 0.290 = 29\%.$$

(d) The incandescent bulb radiates about 2% of 60 W = 1.2 W in the visible. This single LED radiates 0.325 W of blue at 29% efficiency; to match 1.2 W of visible output it needs $1.2/0.29 = 4.1$ W of input against the bulb's 60 W — a **15× improvement in electrical efficiency**.

(A caveat worth stating: a white LED adds a phosphor to down-convert some blue to yellow, which costs a further Stokes loss of roughly 20–25%, so real white-LED wall-plug efficiency is nearer 20–25%. Even so the advantage over incandescent is roughly tenfold, which is the entire basis of the lighting transition — global lighting is about 15% of electricity use, so this is a percent or two of world energy consumption.)

**P2** (a) $$\alpha_m = \frac{1}{2L}\ln\frac{1}{R_1R_2} = \frac{1}{2(400\times10^{-4})}\ln\frac{1}{(0.32)(0.95)} = \frac{1}{0.08}\ln\frac{1}{0.304} = (12.5)(1.191) = 14.9\ \mathrm{cm^{-1}}.$$

$$g_{\rm th} = \frac{\alpha_i+\alpha_m}{\Gamma} = \frac{15+14.9}{0.25} = \frac{29.9}{0.25} = 120\ \mathrm{cm^{-1}}.$$

(b) Both uncoated, $R_1R_2 = (0.32)^2 = 0.1024$:

$$\alpha_m = (12.5)\ln\frac{1}{0.1024} = (12.5)(2.279) = 28.5\ \mathrm{cm^{-1}}, \qquad g_{\rm th} = \frac{15+28.5}{0.25} = 174\ \mathrm{cm^{-1}}.$$

(c) **The HR-coated version** has the lower threshold gain (120 vs 174 cm⁻¹), hence lower threshold current — roughly in proportion, so perhaps a 30% reduction.

The cost is that light now only escapes from one facet. With a 0.95 reflector on the back, essentially all the output emerges from the front — which is usually *desirable* (you want a single usable beam, not two), and it also raises the front-facet slope efficiency. The real costs are the extra coating process step and the higher optical power density on the single output facet, which raises the risk of **catastrophic optical damage** — facet melting, the dominant failure mode of high-power laser diodes.

(d) $L = 200\ \mu$m, both uncoated:

$$\alpha_m = \frac{1}{2(200\times10^{-4})}\ln\frac{1}{0.1024} = (25)(2.279) = 57.0\ \mathrm{cm^{-1}}, \qquad g_{\rm th} = \frac{15+57.0}{0.25} = 288\ \mathrm{cm^{-1}}.$$

*Comment.* Halving the cavity **doubled the mirror loss** (since $\alpha_m\propto1/L$) and raised the required gain by 65%. But threshold *current* is proportional to gain × volume, and the volume also halved:

$$\frac{I_{\rm th}(200)}{I_{\rm th}(400)} \approx \frac{288}{174}\times\frac{1}{2} = 1.66\times0.5 = 0.83.$$

So the shorter cavity has a slightly *lower* threshold current despite needing much more gain — the volume reduction wins. But it needs a higher carrier density to supply that gain, which worsens Auger recombination and temperature sensitivity, and it delivers less total power. This is why short cavities suit low-power, low-threshold applications (VCSELs take it to the extreme, with cavities of a few wavelengths) while long cavities suit high-power ones.

**P3** (a) $$P = \eta_d(I-I_{\rm th}) = (0.35)(0.050-0.015) = (0.35)(0.035) = 1.225\times10^{-2}\ \mathrm{W} = 12.25\ \mathrm{mW}.$$

(b) $$I_{\rm th}(T) = I_{\rm th}(T_0^{\rm ref})e^{(T-T_{\rm ref})/T_0} = 15\,e^{(70-25)/60} = 15\,e^{0.75} = 15(2.117) = 31.8\ \mathrm{mA}.$$

$$P(50\ \mathrm{mA}, 70°\mathrm{C}) = (0.35)(0.050-0.0318) = (0.35)(0.0182) = 6.37\times10^{-3}\ \mathrm{W} = 6.4\ \mathrm{mW}.$$

(The slope efficiency also degrades with temperature in reality; holding it fixed here isolates the threshold effect.)

**The output nearly halved** — from 12.25 to 6.4 mW — from a 45 °C rise, with no change in drive current.

(c) To restore 12.25 mW at 70 °C:

$$I = I_{\rm th}(70)+\frac{P}{\eta_d} = 0.0318+\frac{1.225\times10^{-2}}{0.35} = 0.0318+0.0350 = 0.0668\ \mathrm{A} = 66.8\ \mathrm{mA}.$$

The current must rise from 50 to **67 mA**, a 34% increase.

(d) Two implications, and both are why real transmitters look the way they do.

*Lifetime.* Laser diode degradation is strongly accelerated by both current density and temperature — the standard model has a median lifetime $\propto I^{-n}e^{E_a/k_BT}$ with $n\approx2$ and $E_a\approx0.5$ eV. Running 34% more current at 45 °C hotter compounds both: the current factor alone costs $1.34^2 = 1.8\times$, and the temperature factor $e^{(0.5/8.617\times10^{-5})(1/298-1/343)} = e^{2.56} = 13\times$. Together, roughly a **20-fold reduction in expected lifetime**. A laser rated for 25 years at 25 °C might last 15 months at 70 °C under constant-power control.

*System design.* This is why:

- Telecom lasers sit on **thermoelectric coolers** holding the die at a fixed 25 °C regardless of ambient — the cooler's power consumption is cheaper than the reliability loss.
- Transmitters use **automatic power control** with a monitor photodiode in the package, but combine it with a temperature sensor and a lookup table so the loop does not simply drive current up indefinitely as the device ages and heats.
- Datacentre optics, which cannot afford coolers, use **uncooled** designs deliberately chosen for high $T_0$: quantum-dot lasers ($T_0>100$ K) and short-wavelength VCSELs, accepting worse absolute performance for far better temperature stability.

The general lesson: $T_0$ is as important a specification as $I_{\rm th}$, because it determines whether a device needs a cooler — and the cooler often dominates the module's power budget and cost.

</details>

## Flashback

**From Lesson 2.5 (Metal–semiconductor and heterojunctions):** A type-I double heterostructure has a narrow-gap active layer between wide-gap cladding. (a) State the two things it confines and the mechanism for each. (b) Explain why the two confinements coincide. (c) State the effect on laser threshold.

<details>
<summary>Solution</summary>

(a) **Carriers**, confined by the conduction- and valence-band offsets $\Delta E_c$ and $\Delta E_v$, which form potential wells for electrons and holes respectively in the same layer. And **photons**, confined by the refractive-index step, which makes the active layer a dielectric waveguide.

(b) Because both follow from the same band-gap difference. Empirically, a semiconductor's refractive index falls as its band gap rises — roughly $n\propto E_g^{-1/4}$ across related alloys (the Moss rule), and physically because the index is set by the electronic polarizability, which is larger when the gap is smaller and the electrons more easily disturbed.

So the narrow-gap layer *automatically* has the higher index. Choosing a heterostructure that traps carriers therefore also builds a waveguide, with no additional design effort. That coincidence is not guaranteed by any law — it is a fortunate property of the III–V materials system — and it is what makes the double heterostructure such an elegant device rather than a fussy compromise.

(c) Threshold requires a high carrier density *and* a high photon density in the same place. The double heterostructure delivers both in a layer perhaps ten times thinner than a diffusion length, so the carrier density for a given current is ten times higher and the optical overlap is near unity. Threshold current density fell from ~50 000 A/cm² (homojunction, pulsed at 77 K) to ~1000 A/cm² (double heterostructure, continuous at 300 K) — the factor that turned the semiconductor laser from a demonstration into a product.

</details>

## Connections

- **Backward:** the radiative/non-radiative competition is [1.3](01-03-generation-recombination.md); the confinement structure is [2.5](02-05-metal-semiconductor-heterojunctions.md)'s type-I heterojunction; the quasi-Fermi condition for gain is [1.2](01-02-drift-diffusion-einstein.md)'s $F_n-F_p$.
- **Forward:** [4.3](04-03-solar-cell.md) runs the same junction in reverse — absorbing rather than emitting — and [4.4](04-04-device-fabrication.md) covers how these epitaxial layer stacks are actually grown.
- **Sideways:** the threshold condition (round-trip gain = round-trip loss) and the population-inversion requirement are developed properly in [`photonics-quantum-optics` 1.4](../../photonics-quantum-optics/lessons/01-04-gain-population-inversion-laser-threshold.md) and [1.5](../../photonics-quantum-optics/lessons/01-05-optical-cavities-laser-modes.md); the "gain exceeds loss" criticality condition is structurally the same as $k=1$ in [`reactor-physics`](../../reactor-physics/syllabus.md).
