# Planetary Science · Lesson 5.3: Ocean worlds

> ⏱ ~15 min · Module 5: The outer solar system and small bodies · Builds on: [3.2](03-02-gravity-topography-tidal-response.md), [3.4](03-04-magnetospheres-solar-wind.md), [4.6](04-06-terrestrial-planets-compared.md), [5.2](05-02-tides-resonances-orbital-evolution.md) · Unlocks: [5.5](05-05-asteroids-comets-kuiper-belt.md), [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

The habitable zone ([6.5](06-05-habitability-and-its-limits.md)) is defined by where a planet can have liquid water on its *surface*. **By that definition every ocean world in the solar system is uninhabitable, and there are at least four of them.** Europa, Enceladus, Titan and Ganymede all hold liquid water beneath ice, and Europa alone contains perhaps twice as much water as all of Earth's oceans.

That is not a technicality; it is a serious challenge to how the search for life is framed. **The solar system's liquid water is overwhelmingly not in the habitable zone**, and it is kept liquid by tides rather than by sunlight.

This lesson is also the module's methodological payoff. Establishing that an ocean exists under 20 km of ice, from a spacecraft that never landed, required assembling four independent kinds of argument — and it is worth seeing exactly what each one does and does not prove.

## The idea

**The energy problem, and its solution.** Water ice is stable at these distances: Europa's equilibrium temperature is about 100 K. To keep an ocean liquid you need a heat source, and radiogenic heating in a small rocky core is not nearly enough. **Tidal dissipation is** ([5.2](05-02-tides-resonances-orbital-evolution.md)), and the resonances that maintain it are why these particular moons and not others.

**Ice is also an excellent insulator**, which helps enormously. A 20 km ice shell with a conductive gradient can sustain a temperature difference of well over 150 K between a 100 K surface and a 273 K ocean, on a heat flux of a few tens of milliwatts per square metre. **The ocean does not need to be warm; it needs only to be above freezing at its own pressure**, and salts and ammonia depress that further.

**Now the four arguments, in increasing order of strength.**

*Surface geology.* Europa's surface is criss-crossed by ridges and broken into "chaos" blocks that appear to have foundered and rotated, and its crater count implies an age of only 40–90 Myr. **Suggestive, but weak** — warm convecting solid ice can resurface a moon too.

*Induced magnetic field.* Jupiter's tilted dipole makes the ambient field oscillate in a moon's frame, and a conducting layer responds ([3.4](03-04-magnetospheres-solar-wind.md)). Galileo measured near-unity response at Europa, Ganymede and Callisto. **This proves a global, near-surface conducting layer — which for an icy body means salty liquid water.** Its limitation: it is blind to a fresh-water ocean, and it measures a conductivity–thickness product rather than a depth.

*Mechanical response — $k_2$ and libration.* A shell floating on liquid flexes far more than a solid body ([3.2](03-02-gravity-topography-tidal-response.md)). Titan's $k_2\approx0.6$ and Enceladus's 0.120° libration — roughly twice what a rigid body allows — **prove mechanical decoupling.** This is the cleanest argument, because it is a direct measurement of the property in question.

*Erupted material.* Enceladus vents water vapour and ice grains from fractures at its south pole, at about 200 kg/s, and Cassini flew through the plume and analysed it. **This is not an inference at all — it is a sample.**

**And what the sample contained is the most important result in the field.** Sodium salts, at concentrations implying the vapour came from a liquid body of water in contact with rock. **Silica nanoparticles**, which form only where water at over 90 °C reacts with silicate rock — evidence of active hydrothermal systems on Enceladus's sea floor. And **molecular hydrogen**, in quantities implying ongoing serpentinization, which is a source of chemical energy that terrestrial organisms are known to use.

**So Enceladus has liquid water, contact with rock, the elements of life, and a chemical energy source, in a body 500 km across.** Whether anything uses it is unknown, but the physical conditions are the least speculative case for habitability outside Earth.

## The formal version

**Ice-shell thickness from heat flow.** For conductive transport through an ice shell of thickness $d$ between a surface at $T_s$ and an ocean at $T_m$, with ice conductivity $k(T) \approx 567/T\ \mathrm{W\,m^{-1}\,K^{-1}}$:

$$q = \frac{1}{d}\int_{T_s}^{T_m}k(T)\,dT = \frac{567}{d}\ln\frac{T_m}{T_s}.$$

*In words: the shell thickness is set by the heat flux it has to carry.* For Europa ($T_s = 100$ K, $T_m = 270$ K):

$$d = \frac{567\ln(2.70)}{q} = \frac{567\times0.9933}{q} = \frac{563}{q}.$$

| $q$ (mW m$^{-2}$) | $d$ |
|---|---|
| 10 | 56 km |
| 30 | 19 km |
| 100 | 5.6 km |

**Europa's shell thickness is genuinely uncertain — estimates run 5 to 30 km** — and it matters enormously for whether the ocean exchanges material with the surface, and for whether a lander could ever reach it.

**Where the ocean sits in the phase diagram.** The melting curve of water ice I *falls* with pressure (ice is less dense than water), so the base of a thick shell is warmer than 273 K would suggest — but beyond about 200 MPa, high-pressure ice polymorphs (ice III, V, VI) appear, and these are *denser* than water. **A sufficiently deep ocean is floored by high-pressure ice rather than by rock**, which cuts it off from the chemistry that makes Enceladus interesting.

| Body | ocean depth | floored by |
|---|---|---|
| Enceladus | ~35 km | **rock** |
| Europa | ~100 km | **rock** |
| Titan | ~250 km | high-pressure ice |
| Ganymede | ~150 km | high-pressure ice (possibly layered) |

**This is the key habitability discriminator among ocean worlds**, and it is why Enceladus and Europa are the targets: water–rock contact is what supplies the chemistry.

**Induction response.** From [3.4](03-04-magnetospheres-solar-wind.md), the amplitude ratio $A$ and phase depend on $R_c/\delta$ with skin depth $\delta = \sqrt{2/\mu_0\sigma\omega}$. Galileo's Europa result requires

$$\sigma\gtrsim0.1\ \mathrm{S\,m^{-1}}, \qquad d_{\text{ocean}}\gtrsim10\ \mathrm{km}, \qquad \text{depth}\lesssim100\ \mathrm{km},$$

i.e. **a salty ocean, global, and near the surface.**

**Water inventories.** For a shell of outer radius $R$ and total water thickness $t$:

$$V = \frac{4}{3}\pi\left[R^3-(R-t)^3\right].$$

| Body | $R$ (km) | water $t$ | $V$ (m$^3$) | vs Earth's oceans |
|---|---|---|---|---|
| Europa | 1561 | ~120 km | $3.4\times10^{18}$ | 2.5 |
| Ganymede | 2634 | ~270 km | $2.2\times10^{19}$ | 17 |
| Titan | 2575 | ~330 km | $2.5\times10^{19}$ | 19 |
| Earth | 6371 | 3.7 km (mean) | $1.34\times10^{18}$ | 1 |

**The outer solar system's moons hold tens of times more liquid water than Earth does.**

**Enceladus's plume, by the numbers.**

| Quantity | Value |
|---|---|
| mass flux | ~200 kg s$^{-1}$ |
| composition | 98% H$_2$O, 1% H$_2$, plus CO$_2$, CH$_4$, NH$_3$ |
| salinity | 0.5–2% NaCl — **ocean-like** |
| silica grains | 2–8 nm, requiring $T>90$ °C at water–rock contact |
| organics | complex macromolecules, mass $>200$ u |

**Titan is a different kind of ocean world, twice over.** It has a subsurface water ocean, probably ammonia-rich; and it has *surface* liquids — lakes and seas of methane and ethane in its polar regions, with a full hydrological cycle of evaporation, clouds, rain and rivers. **It is the only body besides Earth with stable surface liquid**, and the liquid is a hydrocarbon.

## Picture

![Four cross-sections drawn to a common scale, each a circle with an outer ice shell, a blue ocean layer and a grey rocky interior. Europa, radius 1561 kilometres, with 20 kilometres of ice over an ocean about 100 kilometres deep. Enceladus, radius 252 kilometres, much smaller, with 25 kilometres of ice over 35 kilometres of ocean. Titan, radius 2575 kilometres, with 80 kilometres of ice over 250 kilometres of ocean. Ganymede, radius 2634 kilometres, with 120 kilometres of ice over 150 kilometres of ocean. Below, a table of the evidence: induced magnetic field at Europa, Ganymede and Callisto, which proves a global conducting layer but is blind to fresh water; the tidal Love number for Titan at 0.6, which proves the shell is mechanically decoupled; forced libration at Enceladus, 0.120 degrees or about twice the rigid value, which shows the same thing through rotation; erupting plumes at Enceladus and probably Europa, which sample the water directly including salts, silica and hydrogen; and a young mobile surface at Europa aged 40 to 90 million years, which is suggestive only since warm solid ice can do the same. A closing note records that Enceladus's plume chemistry is the strongest single result, since silica nanoparticles require water-rock contact above 90 degrees Celsius and molecular hydrogen means chemical energy is available](assets/05-03-fig1.svg)

Note the ordering of the evidence rows: it runs from strong-but-indirect at the top to direct-but-available-at-only-one-body at the bottom.

## Worked examples

**Example 1 (mechanical — how thick is Europa's ice?).** Europa's surface is 100 K, its ocean is at 270 K, and tidal heating delivers $q$ through the shell. Compute $d$ for $q = 20$ and $q = 50\ \mathrm{mW\,m^{-2}}$, and compare with Io's flux.

$$d = \frac{567\ln(T_m/T_s)}{q} = \frac{567\ln 2.70}{q} = \frac{563}{q}.$$

$$q = 0.020\ \mathrm{W\,m^{-2}}: \quad d = \frac{563}{0.020} = 2.8\times10^{4}\ \mathrm{m} = 28\ \mathrm{km}.$$
$$q = 0.050: \quad d = \frac{563}{0.050} = 1.13\times10^{4}\ \mathrm{m} = 11\ \mathrm{km}.$$

For comparison, Io's surface flux is $2.5\ \mathrm{W\,m^{-2}}$ — **fifty times larger**, which is the $a^{-6}$ scaling of [5.2](05-02-tides-resonances-orbital-evolution.md) at work, and which is why Io has no ice at all.

**The factor-of-2.5 range in $d$ from a factor-of-2.5 range in $q$ is the honest state of knowledge**, and the ambiguity is compounded because the calculation assumes purely conductive ice. If the lower shell convects, it carries heat far more efficiently, the conductive gradient applies only to the upper rigid lid, and the total shell can be thicker for the same flux. **The convective-versus-conductive question is unresolved and is the main thing Europa Clipper's radar sounder is designed to settle.**

**Example 2 (why you'd care — how much water is out there?).** Compare Europa's and Ganymede's water inventories with Earth's, and draw the conclusion for the habitable zone.

*Europa*, $R = 1561$ km, water layer 120 km:

$$V = \tfrac43\pi\left[(1.561\times10^{6})^3-(1.441\times10^{6})^3\right] = \tfrac43\pi\left[3.804\times10^{18}-2.992\times10^{18}\right],$$
$$= \tfrac43\pi\times8.12\times10^{17} = 3.40\times10^{18}\ \mathrm{m^3}.$$

Earth's oceans: $1.34\times10^{18}\ \mathrm{m^3}$. **Europa holds 2.5 times Earth's ocean volume on a body a quarter of Earth's radius.**

*Ganymede*, $R = 2634$ km, water layer 270 km:

$$V = \tfrac43\pi\left[(2.634\times10^{6})^3-(2.364\times10^{6})^3\right] = \tfrac43\pi\left[1.827\times10^{19}-1.321\times10^{19}\right] = 2.12\times10^{19}\ \mathrm{m^3},$$

**about 16 times Earth's oceans.**

*The conclusion.* Add Titan and Callisto and the outer solar system's moons hold something like fifty times Earth's liquid water, and **none of it is in the habitable zone.** The habitable zone is a statement about where *starlight* can keep water liquid on an exposed surface; it says nothing about tidal heating, and it excludes by construction every body where ice provides insulation and pressure.

Two qualifications keep this from being a simple refutation. **Water is necessary but not sufficient**: Titan's and Ganymede's oceans are floored by high-pressure ice, cutting them off from silicate chemistry, which may matter a great deal. And a subsurface ocean is far harder to detect remotely than a surface one — there is no spectroscopic signature of an ocean under 20 km of ice, so for exoplanets these worlds are essentially invisible. **The habitable zone survives partly because it selects for what we can observe**, which is a selection effect of exactly the kind [6.2](06-02-demographics-selection-effects.md) warns about.

## Watch out

- **You might think a young surface proves an ocean, but warm convecting solid ice resurfaces a moon too.** Europa's 40–90 Myr surface is consistent with an ocean and does not require one; the magnetic and mechanical arguments are what carry the case.
- **You might think an induced magnetic field detects water, but it detects a conductor.** A fresh-water ocean would be nearly invisible ([3.4](03-04-magnetospheres-solar-wind.md) P2), so a null result rules out a *salty* ocean, not an ocean.
- **You might think more water means more habitable, but a very deep ocean is floored by high-pressure ice** rather than by rock, cutting off the water–rock chemistry that supplies nutrients and energy. Enceladus's 35 km ocean touching rock is a better prospect than Ganymede's 150 km one that does not.
- **You might think tidal heating is guaranteed for a moon of a giant planet, but it requires a maintained eccentricity, hence a resonance** ([5.2](05-02-tides-resonances-orbital-evolution.md)). Callisto, outside the Laplace resonance, has an induced-field ocean but essentially no tidal heat, and its interior is only partially differentiated.

## One-liner

> The solar system's liquid water is mostly outside the habitable zone, under ice, kept warm by orbital resonances — and the one place we have sampled it directly turned out to have hot rock, salt and hydrogen.

## Problems

**P1 (🟢)** An icy moon has surface temperature 90 K and an ocean at 265 K, with $k(T) = 567/T\ \mathrm{W\,m^{-1}\,K^{-1}}$. (a) Compute the integral $\int k\,dT$ across the shell. (b) Compute the shell thickness for $q = 25\ \mathrm{mW\,m^{-2}}$. (c) Repeat for $q = 8\ \mathrm{mW\,m^{-2}}$ and comment.

**P2 (🟡)** A moon of radius 800 km has an ice shell 40 km thick over an ocean 60 km deep. (a) Compute the ocean volume. (b) Compare with Earth's $1.34\times10^{18}\ \mathrm{m^3}$. (c) Its mean density is $1500\ \mathrm{kg\,m^{-3}}$; taking ice and water as $1000\ \mathrm{kg\,m^{-3}}$, find the density of the rocky interior and comment on whether the ocean touches rock.

**P3 (🔴, optional)** Enceladus's plume erupts at 200 kg/s. (a) Compute the mass erupted per year. (b) Its ocean is estimated at $10^{19}$ kg; compute the time to erupt the whole ocean at this rate, assuming none returns. (c) Most of the plume material falls back as snow. Explain in two sentences why the total ocean loss is nonetheless a real constraint on how long the plume can have been active, and state what the E-ring implies.

<details>
<summary>Solutions</summary>

**P1** (a) $$\int_{90}^{265}\frac{567}{T}\,dT = 567\ln\frac{265}{90} = 567\ln 2.944 = 567\times1.0798 = 612\ \mathrm{W\,m^{-1}}.$$

(b) $$d = \frac{612}{0.025} = 2.45\times10^{4}\ \mathrm{m} = 24.5\ \mathrm{km}.$$

(c) $$d = \frac{612}{0.008} = 7.65\times10^{4}\ \mathrm{m} = 76.5\ \mathrm{km}.$$

Reducing the heat flux by a factor of three triples the shell thickness — the relation is exactly inverse. **A moon with only radiogenic heating (a few mW m$^{-2}$) would have a shell over 100 km thick**, which is why tidal heating is what distinguishes an accessible ocean from an inaccessible one. It also means shell thickness is an excellent proxy for the heat flux, and hence for tidal activity — one reason radar sounding of Europa's shell is a high priority.

**P2** (a) $$R = 8.0\times10^{5}\ \mathrm{m}, \qquad R_{\text{top}} = R - 40\ \mathrm{km} = 7.6\times10^{5}, \qquad R_{\text{bot}} = R - 100\ \mathrm{km} = 7.0\times10^{5}.$$

$$V = \tfrac43\pi\left[(7.6\times10^{5})^3-(7.0\times10^{5})^3\right] = \tfrac43\pi\left[4.390\times10^{17}-3.430\times10^{17}\right],$$
$$= \tfrac43\pi\times9.60\times10^{16} = 4.02\times10^{17}\ \mathrm{m^3}.$$

(b) $$\frac{4.02\times10^{17}}{1.34\times10^{18}} = 0.30.$$

About 30 percent of Earth's ocean volume, on a body an eighth of Earth's radius.

(c) The water-plus-ice layer occupies $R = 800$ km down to $R = 700$ km. Its volume:

$$V_w = \tfrac43\pi\left[(8.0\times10^{5})^3-(7.0\times10^{5})^3\right] = \tfrac43\pi\left[5.120\times10^{17}-3.430\times10^{17}\right] = 7.08\times10^{17}\ \mathrm{m^3}.$$

Total volume: $V = \tfrac43\pi(8.0\times10^{5})^3 = 2.145\times10^{18}\ \mathrm{m^3}$; interior volume $= 2.145\times10^{18}-7.08\times10^{17} = 1.437\times10^{18}\ \mathrm{m^3}$.

Total mass $= 1500\times2.145\times10^{18} = 3.218\times10^{21}$ kg; water mass $= 1000\times7.08\times10^{17} = 7.08\times10^{20}$ kg.

$$\rho_{\text{interior}} = \frac{3.218\times10^{21}-7.08\times10^{20}}{1.437\times10^{18}} = \frac{2.510\times10^{21}}{1.437\times10^{18}} = 1747\ \mathrm{kg\,m^{-3}}.$$

**$1747\ \mathrm{kg\,m^{-3}}$ is far too low for rock** (silicates are 3000–3500). So the "rocky interior" is not rock — it is a mixture, roughly half rock and half ice by volume, or rock with very high porosity.

**Whether the ocean touches rock is therefore doubtful.** At 100 km depth the pressure is only about $\rho g d\approx1000\times0.9\times10^{5} = 90$ MPa, below the ~200 MPa where high-pressure ice forms, so high-pressure ice is not the obstacle here. The issue is instead that the body may never have fully differentiated, leaving an undifferentiated rock–ice interior beneath the ocean rather than a clean silicate floor — which is close to Callisto's situation, and a good illustration of why bulk density is checked before habitability is claimed.

**P3** (a) $$200\ \mathrm{kg\,s^{-1}}\times3.156\times10^{7}\ \mathrm{s\,yr^{-1}} = 6.31\times10^{9}\ \mathrm{kg\,yr^{-1}}.$$

(b) $$t = \frac{10^{19}}{6.31\times10^{9}} = 1.58\times10^{9}\ \mathrm{yr} = 1.6\ \mathrm{Gyr}.$$

(c) Most of the erupted material does fall back to Enceladus's surface as snow and is eventually recycled into the shell, so the *net* loss is far below 200 kg/s. **But not all of it returns: a fraction escapes Enceladus's weak gravity entirely and feeds Saturn's E ring**, and that fraction is permanently lost from the moon.

The E-ring implication is the constraint. The E ring is a broad, tenuous torus of micron-sized ice grains centred on Enceladus's orbit, and those grains have short lifetimes — sputtering and plasma erosion destroy them on timescales of decades to centuries — so **the ring must be continuously resupplied, which means the plume is active now and not a recent curiosity.** Estimates of the ring's mass and grain lifetime give an escaping flux of order 10–50 kg/s, implying a genuine ocean loss over gigayears of order $10^{18}$ kg, or roughly 10 percent of the ocean. That is affordable, which is the point: the plume can have been running for a large fraction of the solar system's history without exhausting its source, which is what makes the "transient hot phase" worry of [5.2](05-02-tides-resonances-orbital-evolution.md) a real but not decisive objection.

</details>

## Flashback

**From Lesson 4.6 (The terrestrial planets compared):** Venus's atmospheric CO$_2$ is $4.6\times10^{20}$ kg. (a) Compute the surface pressure it produces, given $g = 8.87\ \mathrm{m\,s^{-2}}$ and $R = 6.052\times10^{6}$ m. (b) Compare with the observed 92 bar. (c) State in one sentence why Earth, with a comparable total carbon inventory, has 400 ppm of CO$_2$ instead.

<details>
<summary>Solution</summary>

(a) $$4\pi R^2 = 4\pi(6.052\times10^{6})^2 = 4\pi\times3.663\times10^{13} = 4.603\times10^{14}\ \mathrm{m^2},$$
$$P_s = \frac{Mg}{4\pi R^2} = \frac{4.6\times10^{20}\times8.87}{4.603\times10^{14}} = \frac{4.080\times10^{21}}{4.603\times10^{14}} = 8.86\times10^{6}\ \mathrm{Pa} = 89\ \mathrm{bar}.$$

(b) Against the observed 92 bar — agreement to about 3 percent, the difference being the 3.5 percent nitrogen and the rounding in the CO$_2$ mass.

(c) Because Earth kept its liquid water, so silicate weathering could convert atmospheric CO$_2$ into carbonate rock, and plate tectonics could bury it — leaving Earth with a comparable total carbon inventory of which 99.9 percent is limestone rather than air.

</details>

## Connections

- **Backward:** [5.2](05-02-tides-resonances-orbital-evolution.md) supplied the tidal heating and the resonances that maintain it; [3.2](03-02-gravity-topography-tidal-response.md) and [3.4](03-04-magnetospheres-solar-wind.md) supplied the two remote detection techniques — mechanical response and electromagnetic induction — that carry the case.
- **Forward:** [5.5](05-05-asteroids-comets-kuiper-belt.md) covers the comets whose composition these moons' D/H is compared against; [6.5](06-05-habitability-and-its-limits.md) uses the ocean worlds as the leading argument against the habitable-zone framework.
- **Sideways:** hydrothermal chemistry, serpentinization and chemosynthetic metabolism belong to [`biochemistry`](../../biochemistry/syllabus.md) and [`evolution-ecology`](../../evolution-ecology/syllabus.md); this lesson owns the physical case that the environment exists and cites the biology. The ice phase diagram is [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md)'s, and the conductive-shell calculation is the same steady-state conduction problem as the planetary geotherm in [2.2](02-02-thermal-evolution-heat-transport.md), with a temperature-dependent conductivity.
