# Planetary Science · Lesson 5.1: Giant and ice-giant interiors

> ⏱ ~15 min · Module 5: The outer solar system and small bodies · Builds on: [2.3](02-03-magnetic-fields-dynamo.md), [3.1](03-01-mass-density-moment-of-inertia.md), [4.5](04-05-photochemistry-hazes-evolution.md) · Unlocks: [5.2](05-02-tides-resonances-orbital-evolution.md), [6.3](06-03-mass-radius-composition.md)

## Why this matters

Ninety-two percent of the solar system's planetary mass is in four objects nobody can see inside. There is no surface, no seismology, and no sample — and yet we can say that Jupiter's hydrogen becomes a liquid metal at a specific pressure, that Saturn is raining helium, and that Uranus and Neptune's magnetic fields are generated in a thin shell rather than a deep one.

The reasoning is a good example of how planetary science works when direct observation is impossible: **combine a measured gravity field with laboratory measurements of how matter behaves at extreme pressure, and the interior is the thing that reconciles them.** And the payoff extends outward, because the commonest planets in the galaxy are between Earth and Neptune in size ([6.3](06-03-mass-radius-composition.md)), and understanding them requires exactly this physics.

## The idea

**Hydrogen under enough pressure stops being a molecular gas and becomes a metal.** Squeeze H$_2$ hard enough and the molecules dissociate and the electrons delocalize. The result is a liquid metal — electrically conducting, like mercury. The transition happens near 100 GPa (a megabar) at the temperatures inside Jupiter, and in Jupiter that pressure is reached around 80 percent of the way out from the centre.

**That single fact explains Jupiter's magnetic field.** Requirement 1 for a dynamo is a large volume of conducting fluid ([2.3](02-03-magnetic-fields-dynamo.md)); metallic hydrogen supplies it in enormous quantity, and it convects vigorously because Jupiter is still losing formation heat. **Jupiter's field is 20,000 times Earth's dipole moment**, and it is clean and dipolar because the conducting region is deep and thick.

**Saturn is the same but cooler, and the cooling has a chemical consequence.** Helium is soluble in metallic hydrogen at Jupiter's interior temperature but not at Saturn's. So in Saturn, helium separates into droplets and **rains** downward through the hydrogen. Falling dense material releases gravitational energy, which is why Saturn radiates 1.78 times what it absorbs from the Sun — more, proportionally, than Jupiter's 1.67 — despite being smaller and older. And the helium that left the outer envelope is missing from it: **Saturn's atmospheric helium is measurably depleted**, exactly as predicted.

**Uranus and Neptune are a different kind of object.** They are not mostly hydrogen; they are mostly "ices" — water, ammonia and methane — which at their interior conditions are neither solid nor molecular but a **hot, dense, ionic fluid**. Water at these pressures dissociates into H$^+$ and OH$^-$, and the resulting soup conducts electricity well enough to run a dynamo.

**But their fields are bizarre, and the explanation is a phase.** Uranus's dipole is tilted 59° from its rotation axis and offset a third of a planetary radius from the centre; Neptune's is tilted 47°. Neither looks like a deep, well-organized dynamo. **The current explanation is superionic ice**: at pressures above about 100 GPa and temperatures above a couple of thousand kelvin, water crystallizes into a state where the *oxygen* atoms form a rigid lattice while the *protons* flow through it freely. It conducts, but as a solid it cannot convect. **So the dynamo is confined to a thin shell above it**, and thin-shell dynamos are known to produce exactly this kind of multipolar, tilted field.

**Superionic ice was predicted from theory in 1988, and made in a laboratory in 2019.** It is one of the more striking cases of a planetary anomaly being resolved by a new state of matter.

## The formal version

**Bulk properties.**

| | Jupiter | Saturn | Uranus | Neptune |
|---|---|---|---|---|
| $M/M_\oplus$ | 317.8 | 95.2 | 14.5 | 17.1 |
| $R/R_\oplus$ | 11.21 | 9.45 | 4.01 | 3.88 |
| $\bar\rho$ (kg m$^{-3}$) | 1326 | 687 | 1271 | 1638 |
| $J_2$ | 0.014736 | 0.016298 | 0.003343 | 0.003411 |
| $C/MR^2$ | ~0.254 | ~0.210 | ~0.23 | ~0.23 |
| $L_{\text{emit}}/L_{\text{abs}}$ | 1.67 | **1.78** | **1.06** | **2.61** |
| dipole tilt | 10° | $<1°$ | **59°** | **47°** |

**Three anomalies stand out in that table** and each is a research problem: Saturn's excess luminosity (helium rain), Uranus's *absence* of internal heat (unexplained — possibly an impact-disrupted interior that halted convection), and the ice giants' tilted multipolar fields.

**Saturn's density.** At $687\ \mathrm{kg\,m^{-3}}$ Saturn is less dense than water — the lowest mean density of any planet — because it is mostly hydrogen and not massive enough to compress it much.

**$J_2$ and interior structure.** For a rotating fluid body, the gravitational moments respond to the density profile. To first order in the rotation parameter $q = \omega^2R^3/GM$,

$$J_2 \approx \frac{2}{3}q\,\Lambda_2,$$

where $\Lambda_2$ is a shape factor depending on how centrally condensed the planet is. *In words: a more centrally condensed planet has a smaller $J_2$ for the same rotation.* Juno and Cassini measured the moments to $J_{12}$, and the *odd* moments — which vanish for a body symmetric about the equator — reveal the depth of the zonal winds: **Jupiter's jets extend about 3000 km down, Saturn's about 9000 km.**

**Jupiter's core.** Before Juno, models had a compact rock-and-ice core of a few to twenty Earth masses. The measured gravity field is inconsistent with that: it requires a **dilute or "fuzzy" core**, in which heavy elements are mixed gradually into the hydrogen envelope out to perhaps 0.3–0.5 $R_J$, totalling roughly 7–25 $M_\oplus$ of heavy elements. **This is a genuine problem for the core-accretion story of [1.4](01-04-giant-planets-migration.md)**, which builds a compact core first — resolutions involve either a giant impact that mixed the core, or convective erosion of it over gigayears.

**Central pressures.** A uniform-density estimate gives an order of magnitude:

$$P_c = \frac{3GM^2}{8\pi R^4}: \qquad \text{Jupiter } 1100\ \mathrm{GPa}, \quad \text{Saturn } 224, \quad \text{Uranus } 145, \quad \text{Neptune } 227.$$

Real values are several times larger — Jupiter's centre is near 4000 GPa — because giants are far more centrally condensed than a uniform sphere ([2.1](02-01-differentiation-interior-structure.md)).

**Phases of hydrogen.**

| Region | $P$ | $T$ | State |
|---|---|---|---|
| outer envelope | $<1$ GPa | $<1000$ K | molecular H$_2$ gas/fluid |
| deep molecular | 1–100 GPa | 1000–6000 K | dense molecular fluid |
| **transition** | ~100 GPa | ~6000 K | dissociation, electrons delocalize |
| metallic | $>100$ GPa | $>6000$ K | **liquid metallic hydrogen** |

**The transition is continuous — supercritical — at these temperatures**, not a sharp first-order boundary, which matters because it means there is no distinct interface for helium droplets to accumulate on.

**Superionic water.** Above roughly 100 GPa and 2000 K:

$$\mathrm{H_2O} \longrightarrow \mathrm{O^{2-}\ lattice} + \mathrm{H^+\ mobile}.$$

*In words: the oxygen freezes into a crystal while the hydrogen behaves like a liquid flowing through it.* Electrical conductivity is high (protons carry the current), but **because the oxygen lattice is solid, the material cannot convect** — and a dynamo needs flow, not merely conductivity ([2.3](02-03-magnetic-fields-dynamo.md)).

**Thin-shell dynamos.** Numerical dynamos in a thin spherical shell overlying a stably stratified or solid interior reproduce the ice giants' signature: a weak dipole component relative to the quadrupole and octupole, a large tilt, and a substantial offset. **The observation constrains the geometry of the conducting region, and the geometry points at superionic ice.**

## Picture

![Two circular cutaway diagrams. On the left, Jupiter and Saturn, labelled hydrogen giants: an outer molecular hydrogen layer, then a much larger metallic hydrogen region beginning at about 78 percent of the radius and described as a liquid metal, then a small dilute core of 7 to 25 Earth masses at the centre. Dashed lines to the right mark the 1 bar level, the transition at about 100 gigapascals and 6000 kelvin where hydrogen goes metallic, and the roughly 4000 gigapascal centre. A caption notes that a deep convecting metallic shell gives a strong clean dipole tilted 10 degrees, and that in cooler Saturn helium becomes immiscible and rains, which is why it radiates 1.78 times what it absorbs. On the right, Uranus and Neptune, labelled ice giants: a hydrogen and helium envelope, then a large region of hot ionic water, ammonia and methane described as a conducting fluid, then a small rocky centre. A caption notes that the dynamo runs only in a thin outer shell because deeper down the water becomes superionic — a rigid oxygen lattice with mobile protons, which cannot convect — and that a thin shell produces the multipolar fields tilted 59 and 47 degrees](assets/05-01-fig1.svg)

Both diagrams are inferences from a measured gravity field plus laboratory equations of state. Neither has been seen.

## Worked examples

**Example 1 (mechanical — how much of Jupiter is metallic?).** Jupiter's central pressure is about 4000 GPa and the metallic transition is at about 100 GPa. Estimate what fraction of Jupiter's *mass* lies in the metallic region, given that the transition occurs at roughly $0.78\,R_J$.

For a rough estimate treat the interior as having a mean density about twice the bulk value inside $0.78R$ (giants are centrally condensed), and the envelope about half:

$$\frac{M(<0.78R)}{M} \approx \frac{2\bar\rho\cdot\frac43\pi(0.78R)^3}{\bar\rho\cdot\frac43\pi R^3}\cdot k = 2\times0.475\,k,$$

with $k$ a normalization ensuring the total comes out right. Detailed models give the answer directly: **roughly 80 percent of Jupiter's mass is inside the metallic transition.**

The point of the estimate is the geometric factor: $0.78^3 = 0.475$, so even at *uniform* density the metallic region would hold 48 percent of the mass, and central condensation pushes it much higher. **Jupiter is essentially a ball of liquid metal with a thin molecular skin** — which is why its dynamo is so strong and its field so clean.

Contrast Uranus: its conducting region is a shell perhaps 0.2 $R$ thick near the surface, holding a small fraction of the mass. **Same physics, different geometry, and the field geometry follows.**

**Example 2 (why you'd care — Saturn's energy budget).** Saturn radiates 1.78 times the energy it absorbs, and models of simple cooling from formation predict only about 1.4. Where does the extra come from, and how much is needed?

Saturn absorbs about $1.1\times10^{16}$ W and emits about $2.0\times10^{16}$ W, so the internal source is about $0.9\times10^{16}$ W. Simple contraction and cooling supplies perhaps $0.6\times10^{16}$, leaving a shortfall of roughly $3\times10^{15}$ W.

**Helium rain supplies it.** Each helium droplet falling from the immiscibility region toward the core releases gravitational potential energy. The energy available is

$$E \sim \Delta M_{\text{He}}\,g\,\Delta r,$$

and with $\Delta M_{\text{He}}$ of order a percent of Saturn's mass ($\sim5\times10^{24}$ kg), $g\approx20\ \mathrm{m\,s^{-2}}$ and $\Delta r\sim2\times10^{7}$ m:

$$E \sim 5\times10^{24}\times20\times2\times10^{7} = 2\times10^{33}\ \mathrm{J}.$$

Spread over a gigayear ($3.2\times10^{16}$ s):

$$\dot E \sim \frac{2\times10^{33}}{3.2\times10^{16}} = 6\times10^{16}\ \mathrm{W}.$$

**Comfortably more than the $3\times10^{15}$ W required** — so the mechanism has plenty of energy in hand, and the rate is set by how fast the droplets separate rather than by how much energy is available.

**And there is an independent test that the mechanism passes.** If helium is raining out of the envelope, the envelope should be helium-poor. **Saturn's atmospheric helium mass fraction is about 0.18–0.25 against a protosolar 0.27**, and Jupiter's is 0.238 — much closer to protosolar, as expected for a planet too hot for the separation to occur. **Two independent observations, one mechanism**: this is what makes helium rain the accepted explanation rather than a hypothesis.

Note what makes this argument strong. It would be easy to invent an ad hoc heat source to fix an energy budget; what raises this above that is that the *same* mechanism makes a second, different, quantitative prediction — about atmospheric composition — which was then confirmed.

## Watch out

- **You might think metallic hydrogen is exotic laboratory matter, but it is the most common form of condensed matter in the solar system.** Jupiter alone contains more of it than everything else in the solar system combined excluding the Sun.
- **You might think Jupiter has a compact core because core accretion requires one, but Juno's gravity data say otherwise.** The dilute-core result is a genuine tension with the formation model, not a refinement of it.
- **You might think Uranus and Neptune are twins, but their heat budgets differ by a factor of 2.5.** Neptune radiates 2.61 times what it absorbs; Uranus, essentially nothing. Whatever explains that is not composition, since they are otherwise near-identical, and it is unresolved.
- **You might think "ice giant" means the interior is icy, but the "ices" are a hot dense ionic fluid at thousands of kelvin.** The name records their *formation* composition — condensed beyond the frost line of [1.2](01-02-condensation-frost-line.md) — not their present state.
- **You might think conductivity is enough for a dynamo, but superionic ice conducts beautifully and cannot convect.** Requirement 2 from [2.3](02-03-magnetic-fields-dynamo.md) is what confines the ice giants' dynamos to a thin shell.

## One-liner

> Hydrogen becomes a metal at a megabar and water becomes a proton conductor with a frozen oxygen lattice — and those two facts, between them, explain every magnetic field in the outer solar system.

## Problems

**P1 (🟢)** (a) Compute the mean density of a planet with $M = 20\,M_\oplus$ and $R = 4\,R_\oplus$. (b) Compare with Uranus's $1271\ \mathrm{kg\,m^{-3}}$ and with water's 1000. (c) Compute its uniform-sphere central pressure in GPa.

**P2 (🟡)** Saturn's rotation parameter is $q = \omega^2R^3/GM$ with $\omega = 1.6379\times10^{-4}\ \mathrm{s^{-1}}$, $R = 5.823\times10^{7}$ m, $GM = 3.793\times10^{16}\ \mathrm{m^3\,s^{-2}}$. (a) Compute $q$. (b) Compare with Earth's $3.45\times10^{-3}$ and comment on Saturn's shape. (c) Saturn's observed flattening is 0.098; compute its polar radius.

**P3 (🔴, optional)** A hot Jupiter has $M = 0.7\,M_J$ and $R = 1.4\,R_J$, orbiting at 0.04 AU. (a) Compute its mean density and compare with Jupiter's 1326. (b) The metallic transition occurs at about 100 GPa; using the uniform-sphere pressure profile $P(r) = P_c[1-(r/R)^2]$ with $P_c = 3GM^2/(8\pi R^4)$, find the radius at which 100 GPa is reached. (c) Comment on what this implies for the planet's magnetic field and for its inflated radius.

<details>
<summary>Solutions</summary>

**P1** (a) $$M = 20\times5.972\times10^{24} = 1.194\times10^{26}\ \mathrm{kg}, \qquad R = 4\times6.371\times10^{6} = 2.548\times10^{7}\ \mathrm{m}.$$

$$V = \tfrac43\pi(2.548\times10^{7})^3 = \tfrac43\pi\times1.654\times10^{22} = 6.930\times10^{22}\ \mathrm{m^3},$$
$$\bar\rho = \frac{1.194\times10^{26}}{6.930\times10^{22}} = 1723\ \mathrm{kg\,m^{-3}}.$$

(b) Denser than Uranus (1271) and than water (1000) — so it has a larger rock-and-ice fraction relative to hydrogen than Uranus does, closer to Neptune's 1638. **A planet of this density is an ice giant, not a gas giant**, and the distinction is made by density alone.

(c) $$P_c = \frac{3GM^2}{8\pi R^4} = \frac{3\times6.674\times10^{-11}\times(1.194\times10^{26})^2}{8\pi(2.548\times10^{7})^4}.$$

Numerator: $3\times6.674\times10^{-11}\times1.426\times10^{52} = 2.855\times10^{42}$.

Denominator: $8\pi\times4.215\times10^{29} = 1.059\times10^{31}$.

$$P_c = 2.696\times10^{11}\ \mathrm{Pa} = 270\ \mathrm{GPa}.$$

**P2** (a) $$q = \frac{\omega^2R^3}{GM} = \frac{(1.6379\times10^{-4})^2\times(5.823\times10^{7})^3}{3.793\times10^{16}}.$$

$$(1.6379\times10^{-4})^2 = 2.683\times10^{-8}, \qquad (5.823\times10^{7})^3 = 1.974\times10^{23},$$
$$q = \frac{2.683\times10^{-8}\times1.974\times10^{23}}{3.793\times10^{16}} = \frac{5.297\times10^{15}}{3.793\times10^{16}} = 0.1397.$$

(b) Saturn's $q = 0.14$ against Earth's $0.00345$ — **forty times larger.** Centrifugal effects are not a small correction for Saturn; they are a leading-order feature of its shape. This is why Saturn is visibly oblate in any telescope, and why its gravitational moments are large enough to be measured to $J_{12}$.

(c) $$R_{\text{pol}} = R_{\text{eq}}(1-f) = 5.823\times10^{7}\times(1-0.098) = 5.823\times10^{7}\times0.902 = 5.252\times10^{7}\ \mathrm{m}.$$

Equatorial 58,230 km against polar 52,520 km — a difference of **5710 km**, comparable to the entire radius of Mars.

**P3** (a) $$M = 0.7\times1.898\times10^{27} = 1.329\times10^{27}\ \mathrm{kg}, \qquad R = 1.4\times7.149\times10^{7} = 1.001\times10^{8}\ \mathrm{m}.$$

$$V = \tfrac43\pi(1.001\times10^{8})^3 = \tfrac43\pi\times1.003\times10^{24} = 4.201\times10^{24}\ \mathrm{m^3},$$
$$\bar\rho = \frac{1.329\times10^{27}}{4.201\times10^{24}} = 316\ \mathrm{kg\,m^{-3}}.$$

**About a quarter of Jupiter's 1326** — and less than half the density of Saturn, itself the least dense planet in the solar system.

(b) $$P_c = \frac{3GM^2}{8\pi R^4} = \frac{3\times6.674\times10^{-11}\times(1.329\times10^{27})^2}{8\pi(1.001\times10^{8})^4}.$$

Numerator: $3\times6.674\times10^{-11}\times1.766\times10^{54} = 3.537\times10^{44}$.

Denominator: $8\pi\times1.004\times10^{32} = 2.523\times10^{33}$.

$$P_c = 1.402\times10^{11}\ \mathrm{Pa} = 140\ \mathrm{GPa}.$$

Setting $P(r) = 100$ GPa:

$$100 = 140\left[1-\left(\frac{r}{R}\right)^2\right], \qquad \left(\frac{r}{R}\right)^2 = 1-\frac{100}{140} = 0.2857, \qquad \frac{r}{R} = 0.535.$$

(c) Two conclusions, and one of them undercuts the calculation.

**On the magnetic field:** the metallic region occupies only the inner 54 percent of the radius, and by volume $0.535^3 = 15$ percent — a far smaller fractional region than Jupiter's, where the transition is at $0.78R$. Naively that suggests a weaker, less dipolar field. But the scaling law of [2.3](02-03-magnetic-fields-dynamo.md) puts field strength on the buoyancy flux, and a hot Jupiter has an enormous one, so the honest prediction is a strong field generated in a comparatively small region — the geometry argues for more multipolar structure, the energetics for high strength.

**On the inflated radius:** a density of $316\ \mathrm{kg\,m^{-3}}$ cannot be explained by composition. Even pure hydrogen and helium at this mass, cooled normally for a few gigayears, would contract to roughly Jupiter's radius. **The planet is inflated**, and the uniform-density pressure profile used in (b) is correspondingly unreliable — a genuinely inflated planet has a much more extended, low-density envelope than the model assumes, so the real metallic transition lies deeper than $0.535R$.

The inflation itself is a well-known unsolved problem: candidate mechanisms include ohmic dissipation of currents driven by ionized alkali metals in the fast winds, tidal heating from a residual eccentricity, and downward transport of stellar heat by the atmospheric circulation. **What is agreed is that hot Jupiters are systematically larger than cooling models predict, and that the effect increases with irradiation** — which is why the mass–radius diagram of [6.3](06-03-mass-radius-composition.md) cannot be read as a pure composition diagram for strongly irradiated planets.

</details>

## Flashback

**From Lesson 4.5 (Photochemistry, hazes and atmospheric evolution):** A giant planet's stratosphere contains methane at mass fraction $3\times10^{-3}$, above a surface-equivalent column of $2\times10^{5}\ \mathrm{kg\,m^{-2}}$. Methane is destroyed at $\Phi = 8\times10^{-13}\ \mathrm{kg\,m^{-2}\,s^{-1}}$. (a) Compute the methane column. (b) Compute its chemical lifetime. (c) Unlike Titan, this planet's methane is not depleted over the age of the solar system. Explain why, in one sentence.

<details>
<summary>Solution</summary>

(a) $$N = 3\times10^{-3}\times2\times10^{5} = 600\ \mathrm{kg\,m^{-2}}.$$

(b) $$\tau = \frac{600}{8\times10^{-13}} = 7.5\times10^{14}\ \mathrm{s} = \frac{7.5\times10^{14}}{3.156\times10^{7}} = 2.4\times10^{7}\ \mathrm{yr} = 24\ \mathrm{Myr}.$$

Very similar to Titan's 36 Myr — the photochemistry is doing the same thing at the same rate.

(c) Because a giant planet's *stratospheric* methane is continuously replenished by convective mixing from an enormous deep reservoir — the entire hydrogen envelope contains methane in near-solar proportion — whereas Titan's atmospheric methane is essentially the whole accessible inventory, with no deep reservoir mixing into it.

The contrast is worth holding onto. On Titan the chemical lifetime is a statement about the *planet's* methane and therefore demands a source. On Jupiter the same lifetime is a statement about how fast material cycles through the photolysis region, and the observable consequence is not depletion but a steady-state population of photochemical products — ethane, acetylene and hazes — in the stratosphere, which is exactly what is seen.

</details>

## Connections

- **Backward:** [2.3](02-03-magnetic-fields-dynamo.md) supplied the dynamo requirements that metallic hydrogen and superionic ice satisfy or fail; [3.1](03-01-mass-density-moment-of-inertia.md) supplied $J_2$ and the moment-of-inertia machinery used to probe these interiors; [1.4](01-04-giant-planets-migration.md) built these planets and left the core-mass question the Juno data reopened.
- **Forward:** [5.2](05-02-tides-resonances-orbital-evolution.md) uses the giants' tidal properties; [6.3](06-03-mass-radius-composition.md) reads mass–radius diagrams for composition and meets the inflated-hot-Jupiter problem head-on.
- **Sideways:** high-pressure phase diagrams and polymorphs belong to [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) and to [`geophysics`](../../geophysics/syllabus.md) 5.2 for the deep Earth; degenerate and pressure-ionized matter is [`stat-mech`](../../stat-mech/syllabus.md)'s and [`astrophysics`](../../astrophysics/syllabus.md)'s, and a Jupiter a few times more massive would begin to be supported by electron degeneracy rather than by thermal pressure — which is why the mass–radius relation for giants turns over.
