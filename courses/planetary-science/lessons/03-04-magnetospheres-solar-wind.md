# Planetary Science · Lesson 3.4: Magnetospheres and the solar wind

> ⏱ ~15 min · Module 3: Measuring a planet · Builds on: [2.3](02-03-magnetic-fields-dynamo.md), [3.3](03-03-remote-spectroscopy.md) · Unlocks: [4.3](04-03-atmospheric-escape.md), [4.6](04-06-terrestrial-planets-compared.md), [5.3](05-03-ocean-worlds.md)

## Why this matters

Every planet sits in a supersonic wind of magnetized plasma streaming out of the Sun at 400 km/s. What happens where that wind meets the planet depends on whether the planet has a magnetic field of its own — and the two cases look completely different from a passing spacecraft, which makes a single magnetometer pass a powerful diagnostic.

There is also a claim you have certainly met — *Earth's magnetic field protects our atmosphere, and Mars lost its atmosphere because it lost its field* — that is repeated everywhere and is **substantially wrong**. The measurements that undermine it are recent and worth knowing, because the correction is more interesting than the original story.

## The idea

**The solar wind is a plasma, and plasmas carry magnetic fields with them.** At high magnetic Reynolds number ([2.3](02-03-magnetic-fields-dynamo.md)) the field is frozen into the flow, so the Sun's field is dragged outward — the interplanetary magnetic field. The wind is supersonic and super-Alfvénic, so any obstacle in its path produces a **bow shock**.

**With an intrinsic field, the obstacle is the field itself.** The planet's field exerts a magnetic pressure $B^2/2\mu_0$ that grows steeply inward, and it holds the wind off wherever that pressure exceeds the wind's dynamic pressure $\rho v^2$. **The boundary where they balance is the magnetopause.** Inside it sits a cavity — the magnetosphere — containing the planet, its atmosphere and its own trapped plasma, stretched downwind into a long tail.

**Without an intrinsic field, the obstacle is the ionosphere.** Solar ultraviolet ionizes the upper atmosphere, making a conducting shell. The wind's field cannot penetrate a conductor quickly, so it **drapes** around it, piling up on the dayside and stretching into a tail. This is an **induced magnetosphere**, and it stands off the wind only a few hundred kilometres above the surface rather than tens of thousands.

**And that is the essential difference: where the interaction boundary sits relative to the atmosphere.** With an intrinsic field the wind never touches the neutral atmosphere. With an induced one it presses directly on the top of it, and can strip material by sputtering, ion pickup and charge exchange.

**So the popular story ought to be right — and yet the measurements say otherwise.** MAVEN at Mars and Venus Express at Venus measured present-day escape rates, and Earth's polar outflow has been measured for decades. **The rates come out comparable — all of order a kilogram per second, within a factor of a few of one another** — despite Earth having a strong field and the other two having none.

**Why doesn't the field help more?** Because a magnetosphere is not a closed box. Its polar caps are **open field lines** connecting the ionosphere directly to the solar wind, and ions stream out along them — Earth's *polar wind*. And the magnetosphere is a much *larger* obstacle, so it intercepts far more solar-wind energy in the first place, some of which is delivered back to the ionosphere. **A field changes the escape channel more than it changes the escape rate.**

**The honest version is therefore:** an intrinsic field shields the atmosphere from *direct* scouring but opens a polar escape route and collects more energy; the net effect on total loss over geological time is genuinely uncertain and is probably modest. **What actually determined Mars's fate was its low gravity and small size** ([4.3](04-03-atmospheric-escape.md)), not the loss of its dynamo.

**Finally, induction is not just a nuisance — it is one of the best instruments in the outer solar system.** Jupiter's magnetic dipole is tilted about 10 degrees from its rotation axis, so in the frame of an orbiting moon the ambient field *oscillates* at Jupiter's synodic rotation period. A conducting layer inside the moon responds with an induced field of predictable amplitude and phase. **Measure that response and you have measured the conductivity, depth and global extent of a buried layer** — which for an icy moon means a salty ocean. This is how Europa's ocean was established ([5.3](05-03-ocean-worlds.md)).

## The formal version

**Solar-wind parameters at 1 AU.**

| Quantity | Typical value |
|---|---|
| number density $n$ | $5\ \mathrm{cm^{-3}} = 5\times10^{6}\ \mathrm{m^{-3}}$ |
| speed $v$ | $400\ \mathrm{km\,s^{-1}}$ |
| dynamic pressure $\rho v^2$ | $1.3\ \mathrm{nPa}$ |
| field strength $B$ | $5$ nT |

Density falls as $1/r^2$, so the dynamic pressure at Jupiter (5.2 AU) is about 27 times smaller.

**Magnetopause standoff.** Balance the planet's magnetic pressure against the wind's dynamic pressure. With a dipole, $B(r) = B_0(R/r)^3$, so

$$\frac{B_0^2}{2\mu_0}\left(\frac{R}{R_{\text{mp}}}\right)^6 = \rho v^2 \quad\Longrightarrow\quad \boxed{\ R_{\text{mp}} = R\left(\frac{B_0^2}{2\mu_0\rho v^2}\right)^{1/6}\ }$$

*In words: the standoff distance depends on the sixth root of the pressure ratio, so it is remarkably insensitive to everything.* A tenfold increase in solar-wind pressure moves the magnetopause in by only $10^{1/6} = 1.47$, about 32 percent.

| Body | $B_0$ | $R_{\text{mp}}$ (this formula) | Observed |
|---|---|---|---|
| Mercury | 300 nT | $1.2\,R$ | $\sim1.45\,R$ |
| Earth | 31,000 nT | $8.1\,R$ | $\sim10\,R$ |
| Jupiter | 428,000 nT | $31\,R$ | $45$–$100\,R$ |

**The two disagreements are informative.** Mercury's is close, and its magnetopause really does sit barely above the surface — under extreme solar-wind conditions the wind reaches the ground. Jupiter's is badly underestimated because the formula assumes an empty magnetosphere: Jupiter's is inflated from the inside by plasma from Io's volcanoes ([5.2](05-02-tides-resonances-orbital-evolution.md)), a tonne per second of sulphur and oxygen that adds its own pressure.

**Non-thermal escape processes.** These operate on the *top* of an atmosphere and do not require thermal energy:

- **Ion pickup.** A neutral above the exobase is ionized by UV or charge exchange, immediately feels the solar wind's motional electric field $\mathbf E = -\mathbf v\times\mathbf B$, and is accelerated away. **The dominant loss channel at Mars and Venus.**
- **Sputtering.** A picked-up ion re-impacts the atmosphere and knocks out several neutrals, each of which may exceed escape velocity.
- **Charge exchange.** A fast solar-wind proton takes an electron from a slow neutral; the result is a fast neutral (unaffected by fields, so it leaves) and a slow ion (picked up).
- **Polar wind and ion outflow.** Along open field lines at high latitude, the ambipolar electric field lifts light ions out. **This is the intrinsic-field planet's escape channel.**

**Measured present-day escape rates.**

| Planet | Field | Ion escape rate |
|---|---|---|
| Venus | none (induced) | $\sim0.5\ \mathrm{kg\,s^{-1}}$ |
| Mars | none (induced, plus crustal patches) | $\sim1\ \mathrm{kg\,s^{-1}}$ |
| Earth | strong intrinsic | $\sim1\ \mathrm{kg\,s^{-1}}$ |

*In words: the planet with the strong field is not losing less.* Integrated over 4 Gyr, 1 kg/s is $1.3\times10^{17}$ kg — about 2 percent of Earth's atmosphere, and a much larger fraction of Mars's. **Present rates are far too small to have removed Mars's early atmosphere; the loss must have happened early, when the young Sun's EUV output was 100 times higher.**

**Magnetic induction as a probe.** For a conducting sphere of radius $R_c$ and conductivity $\sigma$ in an ambient field oscillating at angular frequency $\omega$, the induced dipole response has amplitude ratio $A$ and phase lag set by the ratio of $R_c$ to the skin depth

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}}.$$

*In words: if the layer is thick compared with the skin depth, it excludes the field almost perfectly and $A\to1$; if thin, it barely responds.* Measuring $A$ and the phase at a known $\omega$ constrains $\sigma$ and the layer's depth and thickness. For Europa, Galileo found $A$ near unity at Jupiter's 11.2-hour synodic period — **requiring a global layer with $\sigma\gtrsim0.1\ \mathrm{S\,m^{-1}}$ within tens of kilometres of the surface.** Only salty liquid water fits.

**Aurorae as diagnostics.** Precipitating particles excite atmospheric species, which emit at characteristic wavelengths ([3.3](03-03-remote-spectroscopy.md)). Reading an auroral spectrum gives the atmosphere's composition and the precipitating particles' energy at once. Jupiter's aurorae are powered mostly by its own rotation rather than by the solar wind, and its **satellite footprints** — bright spots where flux tubes connecting Io, Europa and Ganymede meet the atmosphere — map the magnetic connection directly.

## Picture

![Left, a schematic of an intrinsic magnetosphere labelled Earth and the giants: arrows of solar wind arrive from the left, a dashed grey bow shock stands ahead of a solid coral magnetopause about ten planetary radii upstream, blue field lines loop over the planet, and the cavity stretches downwind into a tail. A note says the atmosphere never touches the solar wind, but the polar caps are open field lines along which ions escape freely as the polar wind, so shielding is partial not total. Right, a schematic of an induced magnetosphere labelled Venus, Mars and comets: the same solar wind arrives, but the interplanetary field simply drapes around a thin blue ionosphere only a few hundred kilometres above the surface, with a note that the wind scours it directly by sputtering, ion pickup and charge exchange, and that the same induction driven by a moon's rotating primary is the ocean detector of lesson 5.3. Along the bottom, a bar chart of magnetopause standoff in planetary radii: Mercury 1.2, Earth 8.1, Jupiter 31, with notes that Mercury's magnetopause is barely off the ground and that Jupiter's is inflated well beyond the simple estimate by plasma from Io](assets/03-04-fig1.svg)

Two geometries, one wind. The difference is whether the boundary sits above the atmosphere or on it.

## Worked examples

**Example 1 (mechanical — where is Mercury's magnetopause?).** Mercury's surface equatorial field is $B_0 = 300$ nT, $R = 2440$ km. At 0.39 AU the solar wind has $n \approx 45\ \mathrm{cm^{-3}}$ and $v = 400\ \mathrm{km\,s^{-1}}$.

$$\rho v^2 = n m_p v^2 = 4.5\times10^{7}\times1.673\times10^{-27}\times(4\times10^{5})^2.$$
$$= 4.5\times10^{7}\times1.673\times10^{-27} = 7.53\times10^{-20}; \quad \times1.6\times10^{11} = 1.20\times10^{-8}\ \mathrm{Pa}.$$

$$\frac{B_0^2}{2\mu_0} = \frac{(3.0\times10^{-7})^2}{2\times4\pi\times10^{-7}} = \frac{9.0\times10^{-14}}{2.513\times10^{-6}} = 3.58\times10^{-8}\ \mathrm{Pa}.$$

$$R_{\text{mp}} = R\left(\frac{3.58\times10^{-8}}{1.20\times10^{-8}}\right)^{1/6} = R\,(2.98)^{1/6} = R\,e^{1.0919/6} = R\times1.20.$$

**Only 1.2 planetary radii — 490 km above the surface.** Observed is about 1.45 $R$, the difference being that the real field is not a pure surface-centred dipole (it is offset northward) and the magnetosheath geometry is more complex.

The consequence is severe: during a coronal mass ejection the pressure can rise tenfold, and $(10)^{1/6} = 1.47$ brings the standoff to $1.20/1.47 = 0.82\,R$ — **inside the planet.** The magnetosphere is crushed and the solar wind lands directly on the surface, sputtering material off it. **Mercury's exosphere is largely made this way**, which is why its sodium tail brightens after solar activity.

**Example 2 (why you'd care — did Mars lose its atmosphere because it lost its field?).** Take the popular claim seriously and test it.

*The claim.* Mars's dynamo shut off around 4.1 Ga ([2.3](02-03-magnetic-fields-dynamo.md)). Thereafter the solar wind stripped its atmosphere, leaving 6 mbar of CO$_2$ where there had once been enough for liquid water.

*Test 1: is the present rate sufficient?* MAVEN measures about $1\ \mathrm{kg\,s^{-1}}$. Over 4 Gyr:

$$1\times4\times10^{9}\times3.156\times10^{7} = 1.26\times10^{17}\ \mathrm{kg}.$$

Mars's present atmosphere is $2.5\times10^{16}$ kg, so this is about **5 present atmospheres** — sounds like plenty, until you ask what is needed. A 1-bar early atmosphere would be roughly $1.1\times10^{19}$ kg, and the escape delivers under 2 percent of it. **The present rate is nowhere near enough**, by a factor of about a hundred.

*Test 2: does having a field actually reduce the rate?* Earth, with a strong field, loses ions at about the same rate as fieldless Venus and Mars. **The comparison does not support the mechanism.** The reasons are the ones the lesson gave: open polar field lines provide an escape channel, and a large magnetosphere is a large collecting area for solar-wind energy.

*What actually happened.* The escape must have occurred **early**, in the first few hundred million years, when the young Sun's extreme-ultraviolet output was 10–100 times today's. That drives *hydrodynamic* escape ([4.3](04-03-atmospheric-escape.md)) — a bulk outflow of the whole upper atmosphere, which does not care about magnetic fields at all — and the controlling parameter is the planet's gravity. **Mars's escape velocity is 5.0 km/s against Earth's 11.2**, and that ratio, not the dynamo, is the decisive difference.

*What survives of the original claim.* Something, but less than advertised. The dynamo did shut off early, and it plausibly did increase loss during the epoch that mattered. And a magnetic field may matter more for a planet around an M dwarf, where flare and wind conditions are far more extreme. **But "Mars died because it lost its magnetic field" is at best one term in a budget dominated by gravity and by the young Sun's ultraviolet output**, and stating it as the cause inverts the actual ordering of effects.

## Watch out

- **You might think a magnetic field protects an atmosphere, but the measured escape rates of Earth, Venus and Mars are all about $1\ \mathrm{kg\,s^{-1}}$.** The field changes *how* material leaves, not obviously how much.
- **You might think the magnetopause distance is sensitive to solar activity, but it goes as the sixth root of pressure.** A tenfold pressure increase moves it in by only 32 percent — which is why the standoff distance is a robust measure of a planet's dipole moment, and a poor measure of solar-wind conditions.
- **You might think an induced magnetosphere means no magnetic signature, but draping produces a strong, structured field** that a magnetometer sees clearly. Distinguishing induced from intrinsic requires looking at the field's *geometry* and its variation with the driving field, not its strength.
- **You might think Jupiter's magnetosphere is inflated by the weak solar wind out there, but it is inflated from the inside by Io's plasma.** Internal sources dominate the giant magnetospheres, which is why the simple pressure-balance formula fails badly there.

## One-liner

> A magnetic field decides where the solar wind stops, not whether an atmosphere survives — and the same induction that maps a magnetosphere is how we find oceans inside moons.

## Problems

**P1 (🟢)** A planet has surface equatorial field $B_0 = 2.0\times10^{-5}$ T and radius 5000 km. The local solar wind has $\rho v^2 = 2.0\times10^{-9}$ Pa. (a) Compute the magnetic pressure at the surface. (b) Compute $R_{\text{mp}}$ in planetary radii. (c) A solar storm raises the wind pressure by a factor of 20; recompute and comment.

**P2 (🟡)** A moon is embedded in a primary's field that oscillates with period 10.5 h. Its subsurface ocean has $\sigma = 0.5\ \mathrm{S\,m^{-1}}$. (a) Compute the electromagnetic skin depth. (b) The ocean is 100 km thick; compare and state whether the induced response will be strong. (c) If the ocean were instead $\sigma = 0.005\ \mathrm{S\,m^{-1}}$ (nearly fresh water), recompute and comment on what the measurement constrains.

**P3 (🔴, optional)** Present ion escape from Mars is $1\ \mathrm{kg\,s^{-1}}$. Escape driven by solar EUV scales roughly with the EUV flux, and the young Sun's EUV declined approximately as $F \propto t^{-1.23}$ with $t$ the age in Gyr, normalized so that $F = 1$ today at $t = 4.6$. (a) Compute the EUV enhancement factor at $t = 0.2$, $0.5$ and $1.0$ Gyr. (b) Integrate the escape rate over Mars's history to estimate the total mass lost. (c) Compare with a 1-bar early atmosphere ($\sim1.1\times10^{19}$ kg) and comment on whether EUV-scaled ion escape can account for it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{B_0^2}{2\mu_0} = \frac{(2.0\times10^{-5})^2}{2\times4\pi\times10^{-7}} = \frac{4.0\times10^{-10}}{2.513\times10^{-6}} = 1.592\times10^{-4}\ \mathrm{Pa}.$$

(b) $$R_{\text{mp}} = R\left(\frac{1.592\times10^{-4}}{2.0\times10^{-9}}\right)^{1/6} = R\,(7.96\times10^{4})^{1/6}.$$

$$\ln(7.96\times10^{4}) = 11.285, \qquad e^{11.285/6} = e^{1.8808} = 6.56.$$

$$R_{\text{mp}} = 6.56\,R.$$

(c) Twenty times the pressure:

$$R_{\text{mp}}' = 6.56\times20^{-1/6} = 6.56\times e^{-2.9957/6} = 6.56\times e^{-0.4993} = 6.56\times0.6070 = 3.98\,R.$$

The magnetopause moves from 6.6 to 4.0 planetary radii — **a factor of 20 in pressure produces only a factor of 1.65 in distance.** The sixth-root dependence is a powerful stabilizer: the magnetosphere breathes, but it does not collapse. For a planet with a weak field like Mercury the same factor is catastrophic (Example 1), because it starts so close to the surface that there is no room to give.

**P2** (a) $$\omega = \frac{2\pi}{10.5\times3600} = \frac{6.2832}{3.78\times10^{4}} = 1.662\times10^{-4}\ \mathrm{s^{-1}}.$$

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}} = \sqrt{\frac{2}{4\pi\times10^{-7}\times0.5\times1.662\times10^{-4}}} = \sqrt{\frac{2}{1.044\times10^{-10}}}.$$

$$\delta = \sqrt{1.915\times10^{10}} = 1.384\times10^{5}\ \mathrm{m} = 138\ \mathrm{km}.$$

(b) The ocean is 100 km thick against a skin depth of 138 km — comparable, slightly thinner. **The response will be substantial but not saturated**: the layer partially excludes the oscillating field, giving an induced amplitude well below the perfect-conductor limit and a measurable phase lag. That intermediate regime is actually the useful one, because both amplitude *and* phase carry information about $\sigma$ and thickness.

(c) With $\sigma = 0.005$, a hundred times lower:

$$\delta = 138\ \mathrm{km}\times\sqrt{100} = 1384\ \mathrm{km}.$$

The skin depth now exceeds the moon's radius, let alone the ocean's thickness. The field diffuses straight through, the induced response is tiny, and **a magnetometer would see essentially nothing.**

What this constrains is worth stating carefully, because it cuts both ways. **A strong induced signal is powerful positive evidence: it requires a global, conducting, near-surface layer, and for an icy moon salty water is the only plausible candidate.** But a *null* result does not rule out an ocean — it rules out a *salty* ocean of that thickness at that depth. A fresh-water ocean, or a deeply buried one, would be invisible to this technique. The measurement is a conductivity-thickness product, not an ocean detector *per se*, which is exactly why the case for Europa rests on induction *plus* tidal response ([3.2](03-02-gravity-topography-tidal-response.md)) *plus* geology rather than on any one of them.

**P3** (a) $$F(t) = \left(\frac{t}{4.6}\right)^{-1.23}.$$

$$F(0.2) = (0.04348)^{-1.23} = e^{1.23\times3.1355} = e^{3.8567} = 47.3,$$
$$F(0.5) = (0.10870)^{-1.23} = e^{1.23\times2.2192} = e^{2.7296} = 15.3,$$
$$F(1.0) = (0.21739)^{-1.23} = e^{1.23\times1.5261} = e^{1.8771} = 6.53.$$

(b) With escape rate $\dot m(t) = \dot m_0 F(t)$ and $\dot m_0 = 1\ \mathrm{kg\,s^{-1}}$, integrate from $t_1 = 0.1$ Gyr to $4.6$ Gyr:

$$M = \dot m_0\int_{t_1}^{4.6}\left(\frac{t}{4.6}\right)^{-1.23}dt = \dot m_0\,4.6^{1.23}\int_{t_1}^{4.6}t^{-1.23}\,dt.$$

$$\int t^{-1.23}dt = \frac{t^{-0.23}}{-0.23}, \qquad \int_{0.1}^{4.6} = \frac{1}{0.23}\left(0.1^{-0.23} - 4.6^{-0.23}\right).$$

$$0.1^{-0.23} = e^{0.23\times2.3026} = e^{0.5296} = 1.698, \qquad 4.6^{-0.23} = e^{-0.23\times1.5261} = e^{-0.3510} = 0.7040.$$

$$\int = \frac{1.698-0.704}{0.23} = \frac{0.994}{0.23} = 4.322\ \mathrm{Gyr}.$$

$$4.6^{1.23} = e^{1.23\times1.5261} = e^{1.8771} = 6.533.$$

$$M = 1\times6.533\times4.322\ \mathrm{Gyr} = 28.2\ \mathrm{Gyr\ of\ kg\,s^{-1}} = 28.2\times10^{9}\times3.156\times10^{7} = 8.9\times10^{17}\ \mathrm{kg}.$$

(c) Against a 1-bar early atmosphere of $1.1\times10^{19}$ kg, this delivers $8.9\times10^{17}/1.1\times10^{19} = 8\ \mathrm{percent}$.

**So EUV-scaled ion escape falls short by more than a factor of ten**, even after crediting the young Sun's enhanced output — and note the calculation is generous, since it applies the enhancement to the *whole* escape rate and integrates from as early as 0.1 Gyr.

Three responses, and the interesting thing is that all three are probably partly true.

- **The scaling is too weak.** Escape does not simply track EUV flux linearly; above a threshold the upper atmosphere transitions to *hydrodynamic* outflow ([4.3](04-03-atmospheric-escape.md)), a bulk expansion whose rate rises far faster than linearly and which can exceed the ion-escape rate by orders of magnitude. Extending this integral with a linear scaling systematically underestimates the early epoch.
- **Impact erosion.** Large impacts during the late accretion can blow off a substantial fraction of an atmosphere directly, and Mars's low gravity makes it especially vulnerable. This channel is entirely absent from the calculation.
- **It never left.** Much of Mars's CO$_2$ may be sequestered rather than lost — as carbonates in the crust, and as adsorbed and clathrated volatiles in the regolith. Orbital and rover measurements have found carbonate deposits, though so far not in quantities sufficient to close the budget.

The transferable point is the one the lesson pressed: **a present-day rate extrapolated backward is a lower bound on a past process, and often a very weak one**, exactly as the lunar recession rate was in [2.7](02-07-moon-earth-moon-system.md).

</details>

## Flashback

**From Lesson 3.3 (Remote spectroscopy):** A surface shows a reflectance of 0.11 at the 2.0 μm band centre against a continuum of 0.19, and a diurnal temperature swing from 165 K to 285 K. (a) Compute the band depth. (b) The neighbouring terrain swings only from 200 K to 250 K; state which has the higher thermal inertia and roughly by what factor, taking amplitude $\propto1/\Gamma$. (c) State whether the two terrains necessarily differ in composition.

<details>
<summary>Solution</summary>

(a) $$D = 1 - \frac{R_b}{R_c} = 1 - \frac{0.11}{0.19} = 1 - 0.5789 = 0.421.$$

A deep band — over 40 percent — indicating a strongly absorbing, coarse-grained, relatively uncontaminated material.

(b) Amplitudes: the first terrain swings $285-165 = 120$ K; the second $250-200 = 50$ K.

$$\frac{\Gamma_2}{\Gamma_1} \approx \frac{\Delta T_1}{\Delta T_2} = \frac{120}{50} = 2.4.$$

**The second terrain has roughly 2.4 times the thermal inertia of the first.** The first is likely fine dust or loose sand; the second, coarser material, duricrust, or partly exposed bedrock.

(c) **No.** Thermal inertia $\Gamma = \sqrt{k\rho c_p}$ is dominated by particle size and cementation, not by mineralogy — the conductivity of a granular material depends overwhelmingly on how well grains touch, and varies by two orders of magnitude between dust and solid rock of *identical* composition.

So the two terrains could be the same basalt, one as windblown fines and one as a rock-strewn surface. Deciding requires the spectral evidence, not the thermal — and even then, per [3.3](03-03-remote-spectroscopy.md), a dust coating a millimetre thick would make chemically distinct bedrock look spectrally identical. **The two measurements answer different questions, and neither answers the other's.**

</details>

## Connections

- **Backward:** [2.3](02-03-magnetic-fields-dynamo.md) supplied the fields whose interaction with the wind this lesson describes, and the crustal remanence that makes Mars a hybrid case; [3.3](03-03-remote-spectroscopy.md) supplies the auroral spectroscopy that turns a magnetosphere into a compositional probe.
- **Forward:** [4.3](04-03-atmospheric-escape.md) develops the escape processes properly and shows why gravity dominates; [4.6](04-06-terrestrial-planets-compared.md) settles the Mars atmosphere question; [5.3](05-03-ocean-worlds.md) uses induction as its central ocean detector.
- **Sideways:** the solar wind, magnetopause physics and reconnection are [plasma-physics 5.3](../../plasma-physics/lessons/05-03-solar-wind-magnetospheres.md) and [5.4](../../plasma-physics/lessons/05-04-magnetic-reconnection.md)'s, and this lesson uses their results to build the comparative planetary picture. The skin-depth formula is the same electromagnetic diffusion used in [geophysics 6.3](../../geophysics/lessons/06-03-electrical-electromagnetic-methods.md)'s magnetotelluric sounding of Earth's crust — an identical technique, pointed at a different target.
