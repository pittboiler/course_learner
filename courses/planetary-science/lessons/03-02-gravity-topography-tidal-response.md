# Planetary Science · Lesson 3.2: Gravity, topography and tidal response

> ⏱ ~15 min · Module 3: Measuring a planet · Builds on: [2.5](02-05-volcanism-tectonics.md), [2.6](02-06-reading-planetary-surface.md), [3.1](03-01-mass-density-moment-of-inertia.md) · Unlocks: [4.1](04-01-atmospheric-structure.md), [5.3](05-03-ocean-worlds.md)

## Why this matters

[3.1](03-01-mass-density-moment-of-inertia.md) ended on a degeneracy: mean density and $C/MR^2$ are two numbers, and a planet's interior has more than two unknowns. Breaking the tie needs a measurement sensitive to something else entirely — and the something else is **rigidity**. How much a body flexes when you push on it depends on whether its layers are solid or liquid, which mass distribution alone cannot tell you.

There are two ways to push on a planet from a distance, and each has become a workhorse technique. **Topography pushes down** — a mountain is a load, and how the planet supports it measures the strength of its lithosphere. **Tides push periodically** — and how much a moon flexes under its primary's pull is the single best evidence that Europa and Enceladus have oceans. Neither requires landing.

## The idea

**Start with topography, and ask what holds a mountain up.** There are two extremes.

*Isostasy.* The mountain floats: it has a low-density root extending downward, and the extra mass above is exactly compensated by the mass deficit below. **A perfectly compensated load produces no gravity anomaly at all** — the extra rock above your head is cancelled by the missing dense rock beneath.

*Flexural (elastic) support.* The mountain is held up by the strength of a rigid plate, like a weight on a stiff sheet. It is *uncompensated*, so its full mass shows up in the gravity field as a positive anomaly.

**Real planets are in between, and where they fall tells you the lithosphere's strength.** The diagnostic is the relationship between gravity and topography as a function of *wavelength*, because an elastic plate supports short-wavelength loads easily and long-wavelength loads not at all.

- **Short wavelengths** (small features): the plate carries them. Gravity tracks topography fully.
- **Long wavelengths** (broad features): the plate cannot bridge them, so they must float. Gravity is nearly zero.
- **The crossover wavelength** is set by the elastic thickness $T_e$.

**So plotting gravity/topography against wavelength and finding the crossover measures $T_e$ — and $T_e$ is a thermometer**, because the plate is elastic only where it is cold. A thick elastic lithosphere means a cold planet with low heat flow. Mars's is over 100 km beneath the northern plains and under 20 km beneath the young volcanoes: a direct map of where the planet is still warm.

**Now tides, which are the more spectacular technique.** A moon in an eccentric orbit feels a tide-raising force that varies over each orbit, so it is periodically squeezed and stretched. How much it deforms depends on how rigid it is.

**And here is the key fact: a global liquid layer changes the answer by a factor of thirty.** A solid moon resists deformation with the rigidity of rock and ice throughout, and flexes by about a metre. Put a global ocean under the ice shell and the shell is *decoupled* from the interior — it floats freely, and deforms nearly as a fluid would, by tens of metres. **There is no way to make a solid moon that soft.** So a large measured tidal amplitude is essentially proof of a global subsurface liquid layer.

**The same reasoning works through libration.** A synchronously rotating moon in an eccentric orbit does not rotate perfectly uniformly — it rocks back and forth slightly. The amplitude of that rocking depends on the moment of inertia of *whatever is being rocked*. If the ice shell is welded to the interior, the whole moon must be swung and the libration is small; if an ocean decouples it, only the thin shell swings and the libration is much larger. **Enceladus's measured libration is far too large for a solid body, which is how its global ocean was established.**

## The formal version

**Airy isostasy.** A crust of density $\rho_c$ floating on mantle of density $\rho_m$, with topography of height $h$, has a root of depth

$$r = h\,\frac{\rho_c}{\rho_m-\rho_c}.$$

*In words: for typical crust and mantle densities the root is five or six times the height.* Mountains are mostly underground.

**Flexure.** A thin elastic plate of thickness $T_e$ under a load $q(x)$ satisfies

$$D\frac{d^4w}{dx^4} + (\rho_m-\rho_{\text{infill}})g\,w = q(x), \qquad D = \frac{E\,T_e^3}{12(1-\nu^2)},$$

with $w$ the deflection and $D$ the **flexural rigidity**. The characteristic length over which the plate distributes a load is

$$\alpha = \left(\frac{4D}{(\rho_m-\rho_{\text{infill}})g}\right)^{1/4}.$$

*In words: loads narrower than $\alpha$ are carried by plate strength; loads much wider than $\alpha$ must float.* Note the $T_e^3$ in $D$ — the strength is enormously sensitive to thickness.

**Admittance.** Working in the wavenumber domain, the **admittance** is the transfer function from topography to gravity:

$$Z(k) = \frac{G_{\text{obs}}(k)}{H(k)},$$

which rises from near zero at long wavelengths (compensated) to the free-air value $2\pi G\rho_c$ at short wavelengths (uncompensated). **Fitting the shape of $Z(k)$ gives $T_e$.**

| Body / region | $T_e$ | Implied heat flow |
|---|---|---|
| Earth, old oceanic lithosphere | 30–40 km | moderate |
| Mars, northern plains | $>100$ km | low, cold |
| Mars, Olympus Mons region | ~70–90 km | low |
| Mars, young volcanic edifices | $<20$ km | locally warm |
| Venus, most regions | 15–40 km | high surface temperature weakens crust |
| Moon, farside highlands | ~50 km | ancient, records early cooling |

**[Tidal Love numbers](../reference.md#tidal-love-numbers).** The response to a tide-raising potential $\Phi_T$ is described by two dimensionless numbers:

$$\boxed{\ h_2 = \frac{\text{radial surface displacement}}{\Phi_T/g}, \qquad k_2 = \frac{\text{induced gravitational potential}}{\Phi_T}\ }$$

*In words: $h_2$ says how far the surface moves, $k_2$ says how much the redistributed mass changes the body's own gravity.* A perfectly rigid body has $h_2 = k_2 = 0$; a strengthless fluid body of uniform density has $k_2 = 1.5$.

| Body | $k_2$ | Interpretation |
|---|---|---|
| rigid rock, no liquid | ~0.02 | solid throughout |
| Mars | 0.17 | **liquid outer core** — this is how we know |
| Earth | 0.30 | solid mantle, liquid outer core |
| Titan | ~0.6 | global subsurface ocean |
| Europa (if ocean) | ~1.2 | decoupled ice shell |
| fluid, no rigidity | 1.5 | theoretical limit |

**Mars's $k_2 = 0.17$ deserves a moment.** A Mars with a wholly solid core would give roughly 0.10; the measured value requires a liquid outer core. That result came from tracking the tidal deformation of Mars's gravity field with orbiters over years, and it is the reason [2.3](02-03-magnetic-fields-dynamo.md) can assert that Mars's dynamo failed for lack of *convection* rather than for lack of liquid.

**Tidal amplitude.** For a synchronous satellite of radius $R_s$ at distance $a$ from a primary of mass $M_p$, with orbital eccentricity $e$, the peak-to-peak radial tide is approximately

$$\Delta r \approx 3\,e\,h_2\,\frac{M_p}{M_s}\left(\frac{R_s}{a}\right)^3 R_s.$$

For Europa ($M_p/M_s = 1.898\times10^{27}/4.80\times10^{22}$, $R_s = 1561$ km, $a = 6.711\times10^{5}$ km, $e = 0.0094$), the geometric factor alone gives 22 m per unit $h_2$:

$$\Delta r \approx 0.7\ \mathrm{m}\ (h_2 = 0.03,\ \text{solid}), \qquad \Delta r \approx 26\ \mathrm{m}\ (h_2 = 1.2,\ \text{decoupled shell}).$$

**A factor of nearly forty from the same forcing.** This is the cleanest discriminator in outer-solar-system science.

**Forced libration.** For a synchronous satellite with a decoupled shell of moment of inertia $C_s$, the libration amplitude is

$$\gamma \approx \frac{2e}{1 - \dfrac{\omega^2}{\omega_{\text{free}}^2}}\cdot\frac{(B-A)}{C_{\text{eff}}},$$

where $C_{\text{eff}}$ is the moment of *whatever is librating*. **Decoupling the shell reduces $C_{\text{eff}}$ enormously and so amplifies $\gamma$.** Enceladus's observed libration of 0.120° is roughly twice what a solid body allows.

## Picture

![Left, two cross-sections of the same moon under the same tide-raising pull from Jupiter. The first, labelled solid throughout, shows a circle with a rock interior and a dashed coral outline only slightly elongated, annotated radial tide about 1 metre. The second, labelled ice shell on a global ocean, shows the same rock interior surrounded by a blue ocean layer and an outer shell, with a dashed coral outline strongly elongated, annotated radial tide about 30 metres. A note explains that the ocean decouples the shell from the interior so it deforms almost as a free-floating fluid would, giving thirty times the amplitude from the same forcing. Right, a horizontal bar chart on a log axis of the tidal Love number k sub 2, with rigid rock at 0.02, Mars at 0.17, Earth at 0.30, Titan at 0.62, Europa at 1.2 and a strengthless fluid body at 1.5. A note reads that anything above about 0.3 for a small icy body means a global liquid layer, because there is no other way to make a moon that soft](assets/03-02-fig1.svg)

Two ways of pushing on a planet, one conclusion: rigidity is measurable at a distance, and rigidity is where liquid hides.

## Worked examples

**Example 1 (mechanical — how strong is Mars's lithosphere under Olympus Mons?).** Olympus Mons is a load about 600 km across. If the flexural parameter is $\alpha = 200$ km, is the volcano supported elastically or isostatically? Take $E = 10^{11}$ Pa, $\nu = 0.25$, $\rho_m - \rho_{\text{infill}} = 700\ \mathrm{kg\,m^{-3}}$, $g = 3.71\ \mathrm{m\,s^{-2}}$, and find $T_e$.

Invert the flexural parameter:

$$\alpha^4 = \frac{4D}{(\Delta\rho)g} \;\Rightarrow\; D = \frac{\alpha^4(\Delta\rho)g}{4} = \frac{(2\times10^{5})^4\times700\times3.71}{4}.$$

$$(2\times10^{5})^4 = 1.6\times10^{21}, \qquad D = \frac{1.6\times10^{21}\times2597}{4} = \frac{4.155\times10^{24}}{4} = 1.039\times10^{24}\ \mathrm{N\,m}.$$

Then from $D = ET_e^3/[12(1-\nu^2)]$:

$$T_e^3 = \frac{12(1-0.0625)\,D}{E} = \frac{12\times0.9375\times1.039\times10^{24}}{10^{11}} = \frac{1.169\times10^{25}}{10^{11}} = 1.169\times10^{14},$$

$$T_e = (1.169\times10^{14})^{1/3} = 4.90\times10^{4}\ \mathrm{m} = 49\ \mathrm{km}.$$

**About 50 km of elastic lithosphere.** And the load's width, 600 km, is three times $\alpha$ — so the plate can only partly bridge it, and Olympus Mons is partially compensated, which is what the gravity data show.

Note the sensitivity: $T_e\propto\alpha^{4/3}$, so a 25 percent error in $\alpha$ becomes a 35 percent error in $T_e$. Published elastic thicknesses carry large error bars for exactly this reason, and the useful information is usually the *contrast* between regions rather than the absolute value.

**Example 2 (why you'd care — establishing that Europa has an ocean).** Three independent lines of evidence, and it is worth seeing how they differ in character.

*The tidal amplitude.* Computed above: 0.7 m if solid, 26 m if the shell is decoupled. Even a crude measurement separates these. **This is a direct mechanical measurement of rigidity, and it is the strongest kind of argument** — but the radial tide has not yet been measured on Europa directly, and awaits an orbiting altimeter (Europa Clipper will attempt it).

*The induced magnetic field.* Jupiter's tilted dipole sweeps past Europa, so in Europa's frame the ambient field oscillates at Jupiter's 11.2-hour synodic rotation period. A conducting layer responds by generating an opposing induced field. Galileo measured that response and found it consistent with a **global** conducting layer near the surface — which for an icy moon means salty liquid water. The strength requires a conductivity around $0.1\ \mathrm{S\,m^{-1}}$ or more, i.e. saline. Crucially the response *phase and amplitude* track the driving frequency in the way a spherical conducting shell predicts, and the layer must be global: a set of isolated lakes would not do it. ([3.4](03-04-magnetospheres-solar-wind.md) develops the induction physics.)

*The surface geology.* Chaos terrain, cycloidal ridges whose curvature matches the rotating tidal stress field, and a crater density implying a surface age of only 40–90 Myr. **This is the weakest of the three** — geology is suggestive of mobility, not proof of liquid.

**The logic of combining them matters.** The magnetic argument alone could in principle be met by a conducting layer that is not water. The geological argument alone could be met by warm convecting ice. The tidal argument alone would be decisive but is not yet made. **Together they are as close to established as a remote inference gets**, and note that the *strongest* of the three, the one that would settle it outright, is a rigidity measurement — which is this lesson's whole point.

## Watch out

- **You might think a gravity anomaly maps buried mass, but a fully compensated load produces no anomaly at all.** Gravity measures *uncompensated* mass. A mountain range in perfect isostatic equilibrium is gravitationally invisible, which is why the interesting quantity is the gravity-topography relationship rather than gravity alone.
- **You might think elastic thickness is the lithosphere's thickness, but it is the thickness of the part that behaves elastically over the loading timescale.** It is systematically thinner than the thermal lithosphere of [2.5](02-05-volcanism-tectonics.md), and it depends on how long the load has been there — a load emplaced 3 Gyr ago records the $T_e$ of 3 Gyr ago, not today's.
- **You might think $k_2$ measures an ocean, but it measures rigidity.** Mars's $k_2 = 0.17$ indicates a liquid *core*, not an ocean. What identifies a liquid *water* layer specifically is the combination with mean density and with induced magnetic response.
- **You might think a large libration proves an ocean, but it proves the shell is decoupled from *something*.** A global liquid layer is the natural cause for an icy moon, but the measurement's direct content is mechanical decoupling.

## One-liner

> Mass distribution tells you what is where; how a planet flexes tells you what is solid — and that is where oceans are found.

## Problems

**P1 (🟢)** A crust of density $2900\ \mathrm{kg\,m^{-3}}$ floats on mantle of density $3300\ \mathrm{kg\,m^{-3}}$. (a) Compute the root depth for a 4 km high plateau in Airy isostasy. (b) Compute the total crustal thickness beneath it if the reference crust is 30 km. (c) State what gravity anomaly this plateau produces if compensation is perfect.

**P2 (🟡)** A satellite has $M_p/M_s = 4.0\times10^{4}$, $R_s = 250$ km, $a = 2.38\times10^{5}$ km, and $e = 0.0047$. Use $\Delta r \approx 3eh_2(M_p/M_s)(R_s/a)^3R_s$. (a) Compute the geometric factor $3e(M_p/M_s)(R_s/a)^3R_s$ in metres. (b) Compute $\Delta r$ for $h_2 = 0.03$ and for $h_2 = 1.0$. (c) Comment on whether the difference is detectable from orbit.

**P3 (🔴, optional)** A large elastic plate on Venus has $T_e = 20$ km, $E = 10^{11}$ Pa, $\nu = 0.25$, $\Delta\rho = 600\ \mathrm{kg\,m^{-3}}$, $g = 8.87\ \mathrm{m\,s^{-2}}$. (a) Compute $D$ and $\alpha$. (b) A corona 300 km across sits on it; is it elastically supported or compensated? (c) Venus's surface is at 740 K. Explain in three sentences why this makes its $T_e$ low despite Venus being Earth-sized, and what that implies for the tectonic argument of [2.5](02-05-volcanism-tectonics.md).

<details>
<summary>Solutions</summary>

**P1** (a) $$r = h\frac{\rho_c}{\rho_m-\rho_c} = 4\times\frac{2900}{3300-2900} = 4\times\frac{2900}{400} = 4\times7.25 = 29\ \mathrm{km}.$$

(b) $$30 + 4 + 29 = 63\ \mathrm{km}.$$

The plateau stands 4 km above the reference surface and its crust is more than twice as thick — 29 km of root for 4 km of relief. **Mountains are overwhelmingly underground.**

(c) **Zero**, to first order. Perfect Airy compensation means the excess mass of the topography above is exactly balanced by the mass deficit of the low-density root below, so at heights large compared with the crustal thickness the two cancel and the free-air anomaly vanishes. (In practice a small anomaly survives because the two mass distributions are at different depths, giving an "edge effect" concentrated at the plateau's margins rather than over its centre.)

**P2** (a) $$\frac{R_s}{a} = \frac{250}{2.38\times10^{5}} = 1.0504\times10^{-3}, \qquad \left(\frac{R_s}{a}\right)^3 = 1.159\times10^{-9}.$$

$$3e\left(\frac{M_p}{M_s}\right)\left(\frac{R_s}{a}\right)^3R_s = 3\times0.0047\times4.0\times10^{4}\times1.159\times10^{-9}\times2.5\times10^{5}\ \mathrm{m}.$$

$$= 0.0141\times4.0\times10^{4} = 564; \quad \times1.159\times10^{-9} = 6.537\times10^{-7}; \quad \times2.5\times10^{5} = 0.163\ \mathrm{m}.$$

(b) $$h_2 = 0.03: \quad \Delta r = 0.163\times0.03 = 0.005\ \mathrm{m} = 5\ \mathrm{mm}.$$
$$h_2 = 1.0: \quad \Delta r = 0.163\times1.0 = 0.16\ \mathrm{m} = 16\ \mathrm{cm}.$$

(c) A 5 mm versus 16 cm radial tide. **The ratio is large and diagnostic, but both absolute values are small**, and 16 cm is at or below the resolution of orbital altimetry for a small distant body.

This is exactly Enceladus's situation (the numbers are approximately its), and it is why the ocean there was established by **libration** rather than by radial tide: the libration amplitude is an angular measurement of the whole body's rocking, obtained by tracking surface features in repeated imaging over many orbits, and it does not require centimetre altimetry. The observed 0.120° is about twice what a rigid Enceladus permits. **When one manifestation of a physical effect is too small to measure, look for another manifestation of the same rigidity** — that is the general move, and it recurs throughout remote sensing.

**P3** (a) $$D = \frac{E\,T_e^3}{12(1-\nu^2)} = \frac{10^{11}\times(2\times10^{4})^3}{12(1-0.0625)} = \frac{10^{11}\times8\times10^{12}}{11.25} = \frac{8\times10^{23}}{11.25} = 7.11\times10^{22}\ \mathrm{N\,m}.$$

$$\alpha = \left(\frac{4D}{\Delta\rho\,g}\right)^{1/4} = \left(\frac{4\times7.11\times10^{22}}{600\times8.87}\right)^{1/4} = \left(\frac{2.844\times10^{23}}{5322}\right)^{1/4} = (5.344\times10^{19})^{1/4}.$$

$$\alpha = 8.55\times10^{4}\ \mathrm{m} = 85\ \mathrm{km}.$$

(b) The corona is 300 km across against $\alpha = 85$ km — a load about 3.5 times wider than the plate can bridge. It is therefore **largely compensated**, supported by buoyancy rather than by plate strength, and should show only a weak gravity anomaly concentrated at its rim.

(c) Rock's strength falls steeply with temperature, and the elastic core of a lithosphere is the depth interval that is both cold enough to be brittle-elastic and shallow enough not to be flowing ductilely. **Venus's surface sits at 740 K rather than Earth's 290 K, so the entire geotherm is shifted upward by 450 K and the ductile regime begins at much shallower depth** — the plate is squeezed thin from the top rather than from the bottom. The result is a $T_e$ of 15–40 km on a planet essentially Earth's size, and locally much less.

The implication for [2.5](02-05-volcanism-tectonics.md) is a genuine complication rather than a confirmation, and it is worth being precise. That lesson argued Venus lacks plate tectonics because its dry lithosphere is *strong* and cannot be broken; this calculation says its lithosphere is elastically *thin*, which sounds like the opposite. The two are reconciled by noting they refer to different depths and different failure modes: the hot, weak lower lithosphere flows readily and cannot transmit stress, so it cannot pull a slab down, while the cold, dry, brittle upper few tens of kilometres remains strong enough to resist the localized faulting that initiates subduction. **A lithosphere that is weak in bulk but strong at the surface is the worst configuration for plate tectonics** — it can neither be broken nor be dragged — and that is currently the leading account of why Venus is a one-plate planet.

</details>

## Flashback

**From Lesson 2.6 (Reading a planetary surface):** A mapped unit covers $12{,}000\ \mathrm{km^2}$ and contains 30 craters larger than 300 m. (a) Compute the fractional uncertainty on its crater density. (b) The neighbouring unit, five times larger in area, has the same density; what is its fractional uncertainty? (c) The two units are in contact, and the smaller one embays the larger. State which piece of information about their relative ages is more trustworthy, and why.

<details>
<summary>Solution</summary>

(a) $$\frac{\sigma_N}{N} = \frac{1}{\sqrt{30}} = \frac{1}{5.477} = 18.3\%.$$

(b) Five times the area at the same density gives $N = 150$:

$$\frac{\sigma_N}{N} = \frac{1}{\sqrt{150}} = \frac{1}{12.247} = 8.2\%.$$

(c) **The embayment relation is more trustworthy, and it is not close.**

The embayment is a *direct observation*: lava from the smaller unit flowed against and around the margin of the larger, which can only happen if the smaller unit is younger. It requires no model, no calibration and no statistics — only that the contact be correctly identified in the image.

The crater densities are equal within their error bars (18 percent and 8 percent overlap comfortably), so they say the two units are *indistinguishable* in age. That is not a contradiction with the embayment; it means the two events were close enough in time that crater counting cannot separate them, which is entirely possible for two lava units erupted a few tens of millions of years apart.

**The general rule from [2.6](02-06-reading-planetary-surface.md) applies: stratigraphic relations are observations and crater ages are model-dependent inferences.** When they disagree, report the relation and flag the count — never the reverse.

</details>

## Connections

- **Backward:** [3.1](03-01-mass-density-moment-of-inertia.md) supplied $J_2$, the gravity field and the degeneracy this lesson breaks; [2.5](02-05-volcanism-tectonics.md) supplied the thermal lithosphere that $T_e$ measures independently; [2.6](02-06-reading-planetary-surface.md) supplied the topography.
- **Forward:** [3.4](03-04-magnetospheres-solar-wind.md) develops the induced-field ocean detector that complements $k_2$; [5.2](05-02-tides-resonances-orbital-evolution.md) turns the same tidal deformation into a heat source; [5.3](05-03-ocean-worlds.md) assembles all of it into the case for subsurface oceans.
- **Sideways:** [geophysics 2.3](../../geophysics/lessons/02-03-isostasy-airy-pratt.md) owns isostasy and [2.6](../../geophysics/lessons/02-06-flexure-of-the-lithosphere.md) owns lithospheric flexure for Earth, and [geophysics 2.5](../../geophysics/lessons/02-05-solid-earth-tides-rotation.md) owns Earth's Love numbers; this lesson runs all three comparatively and adds the ocean-detection application. The thin-plate equation is [mechanics-of-materials](../../mechanics-of-materials/syllabus.md)' beam-on-elastic-foundation problem, and the admittance is a transfer function of exactly the kind used throughout [`signals-systems`](../../signals-systems/syllabus.md).
