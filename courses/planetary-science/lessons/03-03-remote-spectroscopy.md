# Planetary Science · Lesson 3.3: Remote spectroscopy

> ⏱ ~15 min · Module 3: Measuring a planet · Builds on: [2.6](02-06-reading-planetary-surface.md), [3.1](03-01-mass-density-moment-of-inertia.md) · Unlocks: [4.2](04-02-energy-balance-greenhouse.md), [5.3](05-03-ocean-worlds.md), [6.4](06-04-exoplanet-atmospheres.md)

## Why this matters

[2.6](02-06-reading-planetary-surface.md) left a gap on purpose: morphology names a *process* but never a *substance*. A branching valley says liquid flowed; it does not say water. Spectroscopy is what closes that gap, and it is the only remote technique that identifies materials rather than inferring them.

It is also the method behind almost every compositional statement in this course and the next three modules — clays on Mars, sulphur on Io, methane on Titan, water ice on Europa, and eventually the molecules in an exoplanet's atmosphere ([6.4](06-04-exoplanet-atmospheres.md)). Learning what it can and cannot see is therefore worth more than learning any particular result.

## The idea

**Molecules and crystals absorb light at specific wavelengths, because their bonds have specific energies.** A vibrating O–H bond has a natural frequency; light at that frequency is absorbed. Iron in a crystal has discrete electronic energy levels set by the surrounding lattice; light matching a level spacing is absorbed. **The wavelength of an absorption band is therefore a property of the bond or the site, and it is very nearly independent of everything else.** That is what makes it diagnostic.

**Two regimes, and they carry different information.**

*Reflected sunlight,* roughly 0.4–4 μm. Sunlight goes in, scatters among grains, and comes back out having been partly absorbed along the way. Bands here come from electronic transitions in transition metals (mostly iron) and from overtones of molecular vibrations. **This is how minerals and ices are identified.**

*Thermal emission,* beyond about 5 μm. The surface radiates its own heat, and its emissivity dips at wavelengths where the material absorbs strongly. **The fundamental vibrational bands live here, and they are far more diagnostic than the overtones** — but you need the surface to be warm, and you are competing with the atmosphere's own emission.

**The essential band positions are worth knowing, and there are only a handful.**

| Wavelength | Cause | Identifies |
|---|---|---|
| 0.95 and 1.9–2.0 μm | Fe$^{2+}$ crystal-field transitions | pyroxene; the exact centres separate high- from low-calcium |
| 1.05 μm alone (broad) | Fe$^{2+}$ in a different site | olivine |
| 1.5 and 2.0 μm | O–H overtones | **water ice** |
| 3.0 μm | O–H fundamental region | water ice, or hydrated/adsorbed water |
| 2.2–2.3 μm | metal–OH combination | **clays** — the Mars result |
| 3.4 μm | C–H stretch | organics |
| 4.26 μm | CO$_2$ | carbon dioxide ice or gas |

**Now the crucial limitation. Band *position* is robust; band *depth* is not.** How deep an absorption appears depends on grain size (bigger grains mean longer path length, deeper bands), on viewing geometry, on temperature, and above all on mixing. And mixing is nastier than it sounds, because it is not linear.

- **Areal mixing** — patches of A next to patches of B — combines spectra linearly, weighted by area.
- **Intimate mixing** — grains of A and B touching, so a photon passes through both — combines them *non-linearly*, and a dark component dominates far beyond its abundance. **A few percent of carbon black can suppress the bands of everything else.**

**So spectroscopy identifies what is present far better than it quantifies how much.** "Water ice is present on this surface" is a strong statement; "this surface is 30 percent water ice" is a model.

**And there is a harder limitation: some things have no bands at all.** A material with no unpaired transition-metal electrons and no vibrating molecular bonds in the observed range is spectrally featureless. **Metallic iron is essentially invisible in the near-infrared. So is pure amorphous carbon, glass, and to a first approximation any opaque, dark, featureless material.** This matters enormously: a surface could be half metal and the reflectance spectrum would simply look dark and flat.

**Finally, there is a second, quite different thing you can measure with the same photons: how the surface *stores* heat.** Watch a spot through a day–night cycle. Fine dust has low thermal conductivity, so only a millimetre-thin skin heats up — it gets very hot at noon and very cold at night. Solid rock conducts heat downward into a reservoir, so it swings much less and lags later. **The amplitude of the diurnal temperature swing measures thermal inertia, which reads grain size and rock abundance — a physical property, not a chemical one.** It is how landing sites are vetted for whether a rover will sink into dust.

## The formal version

**Reflectance.** The measured quantity is usually the bidirectional reflectance $r(\lambda,i,e,g)$ — a function of incidence, emission and phase angle. For a semi-infinite particulate surface, Hapke theory relates it to the single-scattering albedo $w$; in the simple isotropic limit,

$$r \approx \frac{w}{4}\frac{\mu_0}{\mu_0+\mu}, \qquad w = \frac{S}{S+A},$$

with $\mu_0,\mu$ the cosines of incidence and emission, and $S$ and $A$ the scattering and absorption contributions. *In words: brightness is the fraction of encounters that scatter rather than absorb.*

**Absorption and path length.** Within a grain of diameter $d$ and absorption coefficient $\alpha(\lambda)$, transmission falls as $e^{-\alpha d}$, so

$$\text{band depth} \sim 1 - e^{-\alpha d}.$$

*In words: larger grains give deeper bands for the same material.* This is the quantitative reason depth is not abundance — $d$ and $\alpha$ appear only as a product, and the same depth is produced by a lot of a weak absorber or a little of a strong one in coarse grains.

**Band depth, defined.** Relative to a continuum fitted across the band:

$$D = 1 - \frac{R_b}{R_c},$$

with $R_b$ the reflectance at band centre and $R_c$ the continuum there.

**Thermal emission.** The emitted radiance is

$$I(\lambda) = \varepsilon(\lambda)\,B(\lambda,T),$$

with $B$ the Planck function. Since $\varepsilon = 1-r$ for an opaque surface (Kirchhoff's law), **emissivity minima correspond to reflectance maxima**, so the same bands appear inverted. Two features are characteristic: the **Christiansen feature**, an emissivity peak whose position tracks silica content, and the **reststrahlen bands**, strong Si–O fundamentals near 9–12 μm.

**Thermal inertia.**

$$\boxed{\ \Gamma = \sqrt{k\rho c_p}\ }\qquad \mathrm{J\,m^{-2}\,K^{-1}\,s^{-1/2}}$$

*In words: how strongly a surface resists a change in temperature.* The diurnal temperature amplitude scales as $1/\Gamma$, and heat penetrates to a skin depth

$$d_s = \sqrt{\frac{\kappa P}{\pi}}, \qquad \kappa = \frac{k}{\rho c_p}.$$

| Material | $k$ | $\Gamma$ | Diurnal skin depth (Mars sol) |
|---|---|---|---|
| fine dust | 0.01 | 110 | 1.5 cm |
| coarse sand | 0.1 | 350 | ~5 cm |
| solid rock | 2.5 | 2450 | 17 cm |
| water ice | 2.2 | 1800 | 21 cm |

**Note how thin the sensed layer is.** A thermal-infrared measurement of Mars characterizes the top few centimetres, and a near-infrared reflectance measurement the top few *tens of microns*. **Remote sensing sees a skin.** A dust coating a millimetre thick can hide the composition of everything beneath it, which is exactly why Mars looked basaltic and boring until orbital spectrometers found clay signatures in wind-scoured and freshly excavated exposures.

**The resolution trade-off.** Every spectrometer trades spatial for spectral resolution against a fixed photon budget:

$$\text{SNR} \propto \sqrt{A_{\text{pix}}\,\Delta\lambda\,t}.$$

*In words: finer spatial pixels and narrower spectral channels both cost signal.* A hyperspectral imager with hundreds of channels has coarse pixels; a high-resolution camera has three broad ones. **This is why compositional maps are always coarser than image mosaics**, and why the standard method is to identify a composition in a coarse spectral pixel and then map its extent with a fine panchromatic image.

## Picture

![Left panel, a plot of reflectance against wavelength from 0.4 to 4 micrometres showing three schematic spectra. A coral curve for pyroxene-bearing rock has moderate reflectance with broad absorption dips near 0.95 and 2.0 micrometres. A blue curve for water ice starts very bright and has deep narrow absorptions at 1.5 and 2.0 micrometres and a very deep one at 3.0. A grey curve for dark organic-rich material is nearly flat and very dark, with a faint dip at 3.4 micrometres. Vertical dashed lines mark the diagnostic wavelengths 0.95, 1.5, 2.0, 3.0 and 3.4 micrometres. A note reads that band centre names the bond while band depth depends on grain size, viewing angle and dark contaminants, so depth is a poor abundance meter. Right panel, surface temperature against local time over one day, showing a coral curve for fine dust with a large swing peaking near 292 kelvin and dipping to 148, and a blue curve for bare rock with a much smaller and slightly later swing between about 194 and 246 kelvin, annotated with their thermal inertias of about 110 and 2400. A note says the swing measures thermal inertia and reads grain size and rock abundance, not composition](assets/03-03-fig1.svg)

The left panel is chemistry; the right panel is physics. Both come from the same photons, and neither substitutes for the other.

## Worked examples

**Example 1 (mechanical — reading a spectrum).** A satellite's spectrum shows deep absorptions at 1.5 and 2.0 μm, a very deep one near 3.0 μm, and a weak feature at 3.4 μm. Overall reflectance is 0.6. Identify the materials, and say what could be hiding.

*1.5 and 2.0 μm, both deep, plus a saturated 3.0 μm band.* These are the O–H overtone and fundamental positions. **Water ice**, and the depth plus the high albedo says it dominates the optical surface.

*3.4 μm, weak.* The C–H stretch. **Organic material**, present but minor in its effect on the spectrum.

*Reflectance 0.6.* Bright but not as bright as pure fresh ice, which would be above 0.9 — consistent with a modest dark contaminant.

*What could be hiding.* A great deal. **Silicates would be invisible if they are beneath the ice, because the near-infrared samples only the top few tens of microns.** Metallic iron and amorphous carbon are spectrally featureless and could be present in quantity. Salts — sulphates and chlorides — have weak features easily masked by strong ice bands. And crucially, **the 3.4 μm organic feature says nothing about abundance**: because intimate mixing lets a dark component suppress everything, a "weak" organic band is compatible with anything from a trace to several percent.

The honest report is: *the optical surface is dominated by water ice with an organic component present; bulk composition is unconstrained.*

**Example 2 (why you'd care — the discovery of clays on Mars, and why it mattered).** Orbital spectrometers found absorptions near 1.4, 1.9 and 2.2–2.3 μm in ancient Martian terrain. What follows?

*The identification.* The 2.2–2.3 μm feature is a metal–OH combination band, and its exact position distinguishes Al–OH (2.20 μm, kaolinite and montmorillonite) from Fe/Mg–OH (2.30 μm, nontronite and saponite). Together with 1.4 and 1.9 μm hydration features, this is **phyllosilicate clay**, unambiguously.

*Why it mattered.* Clays form only by prolonged aqueous alteration of primary silicates, at moderate temperature and — this is the key — at **near-neutral pH**. That is a much more specific environmental statement than any morphology can supply. Recall from [2.6](02-06-reading-planetary-surface.md) that valley networks establish "a liquid flowed" and nothing more; the clays establish that the liquid was water, that it persisted long enough to alter rock chemically, and that it was not strongly acidic.

*Where it mattered.* The clays are confined to Noachian terrain. Hesperian terrain instead shows **sulphates**, which form from acidic, sulphur-rich, more evaporative water. **The mineralogy therefore records a global environmental transition** — from neutral and wet to acidic and drying — that maps exactly onto the stratigraphic sequence [2.6](02-06-reading-planetary-surface.md) derived from images alone. Two independent methods, one history.

*The caveat that keeps it honest.* Clays require water, but not necessarily *surface* water and not necessarily a warm climate. Much of the alteration may have happened in the subsurface, in groundwater warmed by geothermal heat, under a cold and largely frozen surface. **The mineralogy pins the chemistry of the water and leaves the climate open** — which is exactly the limitation [2.6](02-06-reading-planetary-surface.md) flagged from the other direction, and it is why the Martian climate debate is still live.

## Watch out

- **You might think band depth measures abundance, but it depends on grain size, viewing geometry and dark contaminants at least as strongly.** Intimate mixing is non-linear, and a few percent of an opaque dark component can suppress everything else's bands. Position identifies; depth barely quantifies.
- **You might think a spectrum characterizes a surface, but it characterizes a skin** — tens of microns in the near-infrared, a few centimetres in the thermal. A thin dust coating hides everything under it.
- **You might think everything has a spectral signature, but metals, glasses and amorphous carbon are essentially featureless in the near-infrared.** "No bands detected" is not "nothing there".
- **You might think thermal inertia tells you what a surface is made of, but it tells you how it is put together** — particle size and rock abundance. Dust and rock of identical composition differ by a factor of twenty in $\Gamma$.
- **You might think a hyperspectral map has the same resolution as the camera images, but the signal-to-noise trade forces coarser pixels.** Compositional boundaries are almost always drawn at lower resolution than the geological boundaries they are compared against.

## One-liner

> Spectroscopy tells you what a surface is made of, in the top few microns, if it happens to have bands — and how much of it there is only loosely.

## Problems

**P1 (🟢)** A spectrum has continuum reflectance 0.42 at 2.0 μm and measured reflectance 0.27 at band centre. (a) Compute the band depth. (b) The same material with grains four times larger gives a deeper band; explain qualitatively using $1-e^{-\alpha d}$. (c) If $\alpha d = 0.55$ for the original, compute the band depth predicted for the coarser grains and comment.

**P2 (🟡)** A surface has $k = 0.02\ \mathrm{W\,m^{-1}\,K^{-1}}$, $\rho = 1600\ \mathrm{kg\,m^{-3}}$, $c_p = 800\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute $\Gamma$ and $\kappa$. (b) Compute the diurnal skin depth for a 24.6 h Martian sol. (c) A neighbouring surface has $\Gamma = 1200$; state which shows the larger night-time temperature drop and what each is likely made of.

**P3 (🔴, optional)** A dark asteroid has geometric albedo 0.045 and a flat, featureless 0.4–2.5 μm spectrum. (a) List three distinct compositions consistent with this. (b) State one additional measurement in each of the reflected-light, thermal and non-spectral domains that would help discriminate. (c) Explain why a featureless spectrum is in some ways harder to interpret than a band-rich one, and what that implies about survey statistics of asteroid taxonomies.

<details>
<summary>Solutions</summary>

**P1** (a) $$D = 1 - \frac{R_b}{R_c} = 1 - \frac{0.27}{0.42} = 1 - 0.6429 = 0.357.$$

(b) Band depth grows as $1-e^{-\alpha d}$, where $d$ is the path length a photon travels through absorbing material. Larger grains mean each photon traverses more material between scattering events, so more is absorbed and the band deepens — approaching saturation ($D\to1$) for very large grains or very strong absorbers.

(c) With $\alpha d = 0.55$ originally and grains four times larger, $\alpha d' = 2.20$:

$$D' \sim 1 - e^{-2.20} = 1 - 0.1108 = 0.889.$$

Against an original $1-e^{-0.55} = 0.423$ (close to the measured 0.357, the difference reflecting the crude single-path model).

**A factor of four in grain size more than doubles the band depth, with no change in composition whatsoever.** That is the quantitative statement of the lesson's warning: two surfaces of identical mineralogy can show band depths of 0.36 and 0.89 purely from texture, so inferring abundance from depth without independently constraining grain size is not a measurement.

**P2** (a) $$\Gamma = \sqrt{k\rho c_p} = \sqrt{0.02\times1600\times800} = \sqrt{25{,}600} = 160\ \mathrm{J\,m^{-2}\,K^{-1}\,s^{-1/2}}.$$

$$\kappa = \frac{k}{\rho c_p} = \frac{0.02}{1600\times800} = \frac{0.02}{1.28\times10^{6}} = 1.5625\times10^{-8}\ \mathrm{m^2\,s^{-1}}.$$

(b) $$P = 24.6\times3600 = 8.856\times10^{4}\ \mathrm{s},$$
$$d_s = \sqrt{\frac{\kappa P}{\pi}} = \sqrt{\frac{1.5625\times10^{-8}\times8.856\times10^{4}}{3.1416}} = \sqrt{\frac{1.3838\times10^{-3}}{3.1416}} = \sqrt{4.405\times10^{-4}}.$$
$$d_s = 2.10\times10^{-2}\ \mathrm{m} = 2.1\ \mathrm{cm}.$$

(c) The **low-$\Gamma$ surface** ($\Gamma = 160$) shows the larger night-time drop, since diurnal amplitude scales roughly as $1/\Gamma$ and 160 is about eight times below 1200.

$\Gamma = 160$ is characteristic of **fine, poorly consolidated dust or fine sand** — a landing hazard and a poor place to find bedrock. $\Gamma = 1200$ indicates **coarse sand, duricrust, or a substantial fraction of exposed rock**. Note the composition could be identical in both cases; the difference is entirely particle size and cementation.

**P3** (a) Three compositions consistent with a dark, featureless near-infrared spectrum:

1. **Carbonaceous material** — amorphous carbon or organic macromolecules, which absorb strongly and nearly uniformly across the range.
2. **Metallic iron–nickel**, as in an M-type asteroid: metals have no crystal-field or vibrational bands in this range, and a metal regolith is dark and spectrally flat.
3. **Space-weathered silicate** — ordinary rock whose surface has been darkened and reddened by micrometeorite bombardment and solar-wind sputtering, which produces submicroscopic iron that suppresses the diagnostic pyroxene and olivine bands.

Others qualify too: iron-poor enstatite (few Fe$^{2+}$ transitions to begin with), and impact glass.

(b) One discriminating measurement in each domain:

- **Reflected light:** extend to the thermal infrared, 5–25 μm, where the *fundamental* vibrations live. Silicates show reststrahlen features near 10 μm even when their near-infrared bands are suppressed; metals do not. This alone separates candidate 2 from 1 and 3.
- **Thermal:** measure thermal inertia. Metal has enormously higher conductivity than any rock or carbonaceous material, so a metal-rich surface has anomalously high $\Gamma$ for its particle size. Radar albedo works even better — metal is a strong radar reflector, and this is the standard discriminator for M-types.
- **Non-spectral:** measure the **bulk density** via a companion's orbit or a spacecraft flyby ([3.1](03-01-mass-density-moment-of-inertia.md)). A metallic body is near $7000\ \mathrm{kg\,m^{-3}}$, a carbonaceous one near $1300$. This is decisive and uses none of the light.

(c) A band-rich spectrum overconstrains: several independent band positions must all be matched simultaneously, so a candidate mineral is either confirmed or excluded sharply. **A featureless spectrum provides essentially one number — the albedo, plus a slope — against which many compositions are degenerate**, so it *underconstrains*, and the inference has to come from elsewhere.

The implication for taxonomy is uncomfortable and well recognized. Asteroid classes are defined largely by spectral shape, so the featureless dark objects get lumped into broad categories (C, D, X) that are known to contain physically unrelated bodies — the X complex in particular splits into metallic M, high-albedo E and low-albedo P types only once albedo is added. **Survey statistics built on spectral class alone therefore carry a systematic error that is invisible in the data being used**, and any population argument — how much of the belt is carbonaceous, how much metal is available, how the NC/CC dichotomy of [1.6](01-06-cosmochemistry-volatile-delivery.md) maps onto observed classes — must import albedos or densities to be meaningful. It is a good working example of the general danger in [6.2](06-02-demographics-selection-effects.md): a classification scheme that cannot distinguish two populations will report them as one.

</details>

## Flashback

**From Lesson 3.1 (Mass, density and the moment of inertia):** An icy satellite has $GM = 8.0\times10^{11}\ \mathrm{m^3\,s^{-2}}$ and radius 1200 km. (a) Compute its mass and mean density. (b) Given a two-layer model with rock at $3300\ \mathrm{kg\,m^{-3}}$ and ice at $950\ \mathrm{kg\,m^{-3}}$, find the rock core's fractional radius. (c) State one reason a spectroscopic observation of this body would *not* help determine the answer to (b).

<details>
<summary>Solution</summary>

(a) $$M = \frac{GM}{G} = \frac{8.0\times10^{11}}{6.674\times10^{-11}} = 1.199\times10^{22}\ \mathrm{kg}.$$

$$V = \tfrac43\pi(1.2\times10^{6})^3 = \tfrac43\pi\times1.728\times10^{18} = 7.238\times10^{18}\ \mathrm{m^3},$$
$$\bar\rho = \frac{1.199\times10^{22}}{7.238\times10^{18}} = 1656\ \mathrm{kg\,m^{-3}}.$$

(b) $$x^3 = \frac{\bar\rho-\rho_{\text{ice}}}{\rho_{\text{rock}}-\rho_{\text{ice}}} = \frac{1656-950}{3300-950} = \frac{706}{2350} = 0.3004, \qquad x = 0.6698.$$

The rock core reaches 67 percent of the radius, i.e. about 804 km, under an ice shell roughly 400 km thick.

(c) Because **spectroscopy sees only the top few tens of microns.** It would report what the optical surface is made of — almost certainly water ice, possibly with organic or salt contaminants — and would say nothing whatever about the rock/ice partition at depth, which is what (b) asks about.

This is the clean division of labour between Module 3's techniques. **Mass and moment of inertia probe the whole body but cannot identify materials; spectroscopy identifies materials but probes only a skin.** Neither is a substitute for the other, and the two-layer inversion in (b) had to *assume* the endmember densities — an assumption which, note, spectroscopy of the surface can at least make plausible for the outer layer, even though it cannot test the interior.

</details>

## Connections

- **Backward:** [2.6](02-06-reading-planetary-surface.md) identified processes from morphology and explicitly deferred composition to this lesson; [3.1](03-01-mass-density-moment-of-inertia.md) supplies the bulk density that spectroscopy cannot.
- **Forward:** [4.2](04-02-energy-balance-greenhouse.md) needs emissivity and albedo; [4.5](04-05-photochemistry-hazes-evolution.md) uses spectra to identify photochemical products; [5.3](05-03-ocean-worlds.md) uses surface composition to argue about what is underneath; [6.4](06-04-exoplanet-atmospheres.md) runs exactly this machinery on planets around other stars, where the entire signal is one part in $10^{4}$.
- **Sideways:** the underlying radiative transfer and line formation are [astrophysics 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md)'s, and the quantum origin of vibrational and crystal-field transitions is [`physical-chemistry`](../../physical-chemistry/syllabus.md)'s. The thermal-inertia calculation is the periodic-heating half-space solution from [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md) — the same $\sqrt{\kappa t}$ that governs planetary cooling in [2.2](02-02-thermal-evolution-heat-transport.md), applied over one day instead of four billion years.
