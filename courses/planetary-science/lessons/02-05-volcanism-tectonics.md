# Planetary Science · Lesson 2.5: Volcanism and tectonics

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [2.2](02-02-thermal-evolution-heat-transport.md), [2.4](02-04-impact-cratering-chronology.md) · Unlocks: [2.6](02-06-reading-planetary-surface.md), [3.2](03-02-gravity-topography-tidal-response.md), [4.6](04-06-terrestrial-planets-compared.md)

## Why this matters

A planet's interior is invisible; its surface is not. So the practical question is what a photograph tells you about a body's thermal state — and the answer is: a great deal, because volcanism and tectonics are just the surface expression of how a planet moves its heat.

There is also one specific fact demanding explanation. **Every rocky body in the solar system convects, and exactly one has plate tectonics.** Venus is Earth's twin in size, mass and composition and does not. Working out what Earth has that Venus lacks is the sharpest question in comparative planetology, and its answer turns out to involve water in a way nobody expected.

## The idea

**Melting rock is harder than it sounds, and mostly happens by decompression.** Mantle rock at depth is hot but under pressure, and pressure raises the melting point. Heating it is one route to melt; the more common route is to move it *upward* without letting it cool, so the melting point falls beneath the rock's temperature. This is why mid-ocean ridges — where mantle rises passively as plates separate — are the most voluminous volcanic systems on Earth, despite involving no unusual heat at all.

**Melting is always partial, and that is why crust exists.** The first liquid to appear is enriched in the elements that fit badly into the crystal lattices — silicon, aluminium, potassium, and the incompatible trace elements including uranium and thorium. That melt is less dense than its source, so it rises and freezes near the surface. **Repeat over billions of years and a planet's low-density, radioactive-element-rich crust is manufactured out of its mantle.** It also means that the surface composition you measure by spectroscopy ([3.3](03-03-remote-spectroscopy.md)) is not the mantle's composition — it is the composition of everything the mantle rejected.

**Now the two regimes.** A convecting mantle has to lose heat through its cold upper boundary layer, the lithosphere. There are two ways for that to go.

*Mobile lid.* The lithosphere is broken and its pieces sink back into the mantle. This is the ideal case for cooling, because the cold boundary layer is itself carried away and replaced — the planet cools by *recycling its own skin*. Earth, and Earth alone.

*Stagnant lid.* The lithosphere is a single unbroken shell. Convection continues underneath, but the lid just sits there, thickening as the planet cools, and heat crosses it only by conduction. **This is the default outcome**, and it is what Mars, Mercury, the Moon and (currently) Venus all do.

**The observable difference is dramatic and visible from orbit.** Under a mobile lid, a stationary mantle plume produces a *chain* of volcanoes as the plate slides over it — Hawaii. Under a stagnant lid the plume sits under the same spot forever, and you get one colossal edifice. **Olympus Mons is 22 km tall not because Mars is more volcanically vigorous than Earth but because nothing ever moved it off the vent.**

**And the size itself has a simple explanation.** A volcano can grow until the magma can no longer be pushed to the summit, which is a balance between the buoyancy of the magma column and gravity — so maximum height scales roughly as $1/g$. Mauna Loa rises 9 km from the sea floor; scaling to Mars's gravity gives $9\times(9.81/3.71) = 24$ km. Olympus Mons is 22. **The tallest mountain in the solar system is exactly the height a Hawaiian volcano would be if you moved it to Mars.**

**So why does only Earth break its lid?** Not because Earth's mantle convects harder — Venus's Rayleigh number is within 10 percent of Earth's ([2.2](02-02-thermal-evolution-heat-transport.md)). The binding constraint is *lithospheric strength*. Subduction requires bending a strong, cold plate through 90 degrees, and that costs enormous work. Two things make it possible on Earth:

- **Water weakens rock.** Even trace water in olivine cuts its strength by orders of magnitude, and water in fault zones lowers friction by raising pore pressure. Venus's lithosphere is bone dry — its water was lost long ago ([4.6](04-06-terrestrial-planets-compared.md)) — and dry rock is strong.
- **Oceans lubricate and cool.** Water circulating through the crust at ridges cools the plate quickly, so it becomes negatively buoyant sooner, and sediment at trenches lubricates the interface.

**The provocative conclusion is that plate tectonics may be a consequence of having oceans rather than the other way round** — and since plate tectonics drives the carbonate–silicate cycle that stabilizes Earth's climate over billions of years, that would make surface water a self-reinforcing condition. [6.5](06-05-habitability-and-its-limits.md) takes this seriously, and cautiously.

## The formal version

**Decompression melting.** The mantle solidus rises with pressure roughly as

$$T_{\text{sol}}(P) \approx 1373 + 130\,P \ \mathrm{K}, \qquad P\ \text{in GPa},$$

while an adiabatically rising parcel cools only slowly, at about $0.3$–$0.5\ \mathrm{K\,km^{-1}}$. Since the solidus falls with height about ten times faster than the adiabat does, **rising mantle crosses the solidus and melts.** The melt fraction grows roughly linearly above the crossing point, reaching 10–20 percent beneath a mid-ocean ridge.

**Effusive versus explosive.** An eruption is explosive when dissolved volatiles exsolve and expand fast enough to fragment the magma. The controlling quantity is the volatile mass fraction $n$ at which the gas volume fraction reaches about 75 percent, which depends on the ambient pressure:

$$\text{explosivity} \sim \frac{n\,R T/\mu}{P_{\text{atm}}}.$$

*In words: the lower the atmospheric pressure, the less volatile content it takes to shatter the magma.* On the Moon, with $P_{\text{atm}} = 0$, even a few hundred ppm of CO was enough to drive the fire fountains that produced the orange and green glass beads returned by Apollo. On Venus, with 92 bar of atmosphere, explosive volcanism is strongly suppressed and eruptions are overwhelmingly effusive.

**Lithosphere thickness.** The lid extends to the depth where the mantle reaches a critical temperature ($\sim1600$ K), so for conductive heat flux $q$ and conductivity $k\approx3\ \mathrm{W\,m^{-1}\,K^{-1}}$:

$$d_{\text{lith}} \approx \frac{k\,\Delta T}{q}.$$

| Body | $q$ (mW m$^{-2}$) | $d_{\text{lith}}$ |
|---|---|---|
| Earth (oceanic) | 90 | ~45 km (thermal, young crust) |
| Mars today | ~20 | ~200 km |
| Moon today | 16 | ~250 km |

*In words: as a planet cools its lid thickens, and a thick lid is both harder to break and harder for magma to cross.* This is why volcanism shuts down before convection does.

**Maximum edifice height.** A magma column of density $\rho_m$ fed from a source region of density $\rho_r$ at depth $h_s$ can support a summit height

$$h_{\max} \sim \frac{(\rho_r - \rho_m)}{\rho_m}h_s \quad\text{and, for a fixed strength limit},\quad h_{\max}\propto\frac{1}{g}.$$

| Volcano | Body | $g$ | Height above base |
|---|---|---|---|
| Mauna Loa | Earth | 9.81 | 9 km |
| Olympus Mons | Mars | 3.71 | 22 km |

$$\text{Predicted for Mars: } 9\times\frac{9.81}{3.71} = 24\ \mathrm{km}. \qquad \text{Observed: } 22\ \mathrm{km}.$$

**Tectonic styles across the solar system.**

| Body | Regime | Diagnostic features |
|---|---|---|
| Earth | mobile lid | ridges, trenches, transform faults, volcanic arcs, volcano *chains* |
| Venus | stagnant lid, possibly episodic | coronae, tesserae, ~700 Myr uniform surface age, no trenches |
| Mars | stagnant lid | Tharsis, Olympus Mons, Valles Marineris (rifting, not plate boundary) |
| Mercury | stagnant lid, contracting | **lobate scarps** from global cooling and shrinkage, ~7 km radius loss |
| Moon | stagnant lid, dead | mare basalts (3.9–3.1 Ga), wrinkle ridges, nothing since |
| Io | stagnant lid, heat-pipe | 400 active volcanoes, complete resurfacing in $\sim10^{6}$ yr ([5.2](05-02-tides-resonances-orbital-evolution.md)) |

**Mercury's lobate scarps deserve a note.** A cooling planet contracts, and a rigid shell around a shrinking interior must fail in compression — producing thrust faults that run for hundreds of kilometres. Measuring their total shortening gives Mercury's radius decrease directly: **about 7 km**, a number obtained purely from photographs, which then constrains its entire thermal history.

## Picture

![Two side-by-side schematic cross-sections. On the left, mobile lid, labelled Earth: a horizontal surface with two blue plates, a spreading ridge in the middle with arrows showing the plates moving apart, and on the right a plate bending down into the mantle as a cold sinking slab with arc volcanoes above it. Grey arrows below show mantle convection rising, and a note reads that heat escapes by recycling the lid itself. On the right, stagnant lid, labelled Mars, Venus and the Moon: the same surface but with one thick unbroken blue lid across the whole width, a single coral mantle plume rising to feed one enormous shield volcano, and grey arrows showing the mantle still convecting underneath a lid it cannot break, with a note that heat escapes only by conduction through a thickening lid. Beneath both panels, a comparison notes that Mauna Loa is 9 km tall on a moving plate so Hawaii is a chain, while Olympus Mons is 22 km tall on a lid that does not move so Mars has one volcano built over three billion years, and that scaling 9 km by the gravity ratio 9.81 over 3.71 predicts 24 km](assets/02-05-fig1.svg)

Same mantle physics on both sides. The only difference is whether the boundary layer can break — and everything visible follows from that one bit.

## Worked examples

**Example 1 (mechanical — how thick is Mars's lithosphere?).** Mars's surface heat flux is about $20\ \mathrm{mW\,m^{-2}}$, thermal conductivity $k = 3\ \mathrm{W\,m^{-1}\,K^{-1}}$, and the base of the lid is where $T$ reaches 1600 K from a surface at 220 K.

$$d_{\text{lith}} = \frac{k\,\Delta T}{q} = \frac{3\times(1600-220)}{0.020} = \frac{3\times1380}{0.020} = \frac{4140}{0.020} = 2.07\times10^{5}\ \mathrm{m} = 207\ \mathrm{km}.$$

Two hundred kilometres of rigid rock. Compare Earth's oceanic lithosphere at 45 km.

**This single number explains why Martian volcanism stopped.** Magma must be buoyant enough to rise through the entire lid to erupt, and the deeper the source, the larger the density contrast and the larger the driving pressure required. A 200 km lid is close to the limit for basaltic magma, and it also explains the *style*: what little recent activity Mars has is confined to Tharsis and Elysium, where the lithosphere is locally thinned by long-lived plumes.

It also feeds back on [3.2](03-02-gravity-topography-tidal-response.md): a thick elastic lithosphere is what allows Tharsis, a load of $10^{21}$ kg, to sit on the surface for three billion years without sinking.

**Example 2 (why you'd care — dating Venus from its craters).** Venus has about 940 impact craters, distributed almost randomly over the planet, with very few of them modified by lava or tectonics. What does that tell you?

Two observations, and each is a strong constraint.

*Randomness.* A planet resurfaced patchily over time should have crater density varying with terrain age — young plains sparsely cratered, old highlands heavily so, exactly as on the Moon and Mars. Venus's craters instead pass every statistical test for a spatially random distribution. **That means essentially the whole surface is the same age.**

*Density.* 940 craters over $4.6\times10^{8}\ \mathrm{km^2}$, with an estimated Venusian impact flux, gives a mean surface age of roughly **700 Myr** — young for a planet, but four times older than Earth's ocean floor.

*Freshness.* Only about 15 percent of craters show any embayment by lava. If volcanism were resurfacing steadily you would expect a continuous distribution of modification states.

Put together, the standard reading is a **catastrophic or episodic resurfacing event** around 700 Myr ago that erased everything, followed by relative quiescence. The mechanism proposed is that a stagnant lid traps heat until the mantle beneath becomes so hot and buoyant that the lid founders wholesale, the planet turns over, and a new lid forms — episodic overturn rather than steady-state plate tectonics.

**It is worth being honest that this is contested.** Alternative models produce a nearly random crater distribution from *steady* resurfacing if the resurfacing units are large compared with the crater spacing, and recent work on active coronae and possible ongoing volcanism argues Venus is not quiescent at all. What is not contested is the underlying inference: **Venus does not shed heat the way Earth does**, and the crater record is how we know.

## Watch out

- **You might think volcanism requires unusual heat, but most of it is decompression melting of ordinary mantle.** Mid-ocean ridges produce more magma than all the world's hotspots combined and involve no thermal anomaly at all — just mantle rising because plates are pulling apart.
- **You might think plate tectonics is the natural outcome of a convecting mantle, but it is the exception.** Stagnant lid is the default; convection alone gets you Mars. The extra ingredient is a lithosphere weak enough to break, which is a materials question, not a fluid-dynamics one.
- **You might think a bigger volcano means a more active planet, but it can mean the opposite.** Olympus Mons is enormous *because* Mars is tectonically dead, so three billion years of one plume's output piled up in a single place instead of being spread along a chain.
- **You might think Venus's youthful surface means it is more active than Mars, and it is — but "700 Myr" is a mean age, not an activity level.** A planet that resurfaced once and then went quiet has the same mean surface age as one resurfacing steadily, and distinguishing them requires the *distribution* of crater states, not the count.

## One-liner

> Every rocky planet convects; only Earth breaks its lid, and the reason it can is probably that it has water.

## Problems

**P1 (🟢)** A body has surface heat flux $q = 40\ \mathrm{mW\,m^{-2}}$, $k = 3\ \mathrm{W\,m^{-1}\,K^{-1}}$, surface temperature 250 K, and a lid base at 1600 K. (a) Compute the lithosphere thickness. (b) If the flux halves as the planet cools, what happens to the thickness? (c) State one consequence for volcanism.

**P2 (🟡)** Using $h_{\max}\propto1/g$ calibrated by Mauna Loa (9 km at $g = 9.81$): (a) Predict the tallest possible volcano on Mercury ($g = 3.70$) and on Io ($g = 1.80$). (b) Io's tallest mountain, Boösaule Montes, is about 17 km — well below your prediction. Give a reason. (c) Venus's tallest volcano, Maat Mons, is about 8 km against a predicted 10 km; comment on the agreement.

**P3 (🔴, optional)** Mercury's lobate scarps record global contraction. (a) If the total thrust shortening summed around the planet is about 45 km of horizontal displacement across the circumference, and Mercury's radius is 2440 km, estimate the radius decrease $\Delta R$. (b) The volumetric contraction is $\Delta V/V = 3\Delta R/R$; compute it. (c) For a body with mean thermal expansivity $\alpha = 3\times10^{-5}\ \mathrm{K^{-1}}$, estimate the mean interior cooling $\Delta T$ implied, and comment on whether it is reasonable.

<details>
<summary>Solutions</summary>

**P1** (a) $$d = \frac{k\Delta T}{q} = \frac{3\times(1600-250)}{0.040} = \frac{4050}{0.040} = 1.01\times10^{5}\ \mathrm{m} = 101\ \mathrm{km}.$$

(b) $d\propto1/q$, so halving the flux **doubles** the thickness to about 200 km.

(c) A thicker lid means magma must rise further and through colder rock to erupt, so it is more likely to stall and freeze at depth. Volcanism becomes rarer, more localized (confined to places where plumes thin the lid), and eventually ceases — while the mantle underneath may still be convecting. **Volcanic death precedes convective death.**

**P2** (a) $$h_{\max} = 9\ \mathrm{km}\times\frac{9.81}{g}.$$

$$\text{Mercury: } 9\times\frac{9.81}{3.70} = 23.9\ \mathrm{km}. \qquad \text{Io: } 9\times\frac{9.81}{1.80} = 49\ \mathrm{km}.$$

(b) The $1/g$ scaling assumes the limit is the magma column's ability to reach the summit. On Io that is not the binding constraint. Io resurfaces itself completely every million years or so ([5.2](05-02-tides-resonances-orbital-evolution.md)), burying any edifice long before it could grow to 49 km; and Io's mountains are not volcanic constructs at all but **thrust-faulted crustal blocks**, pushed up by the compression that results from continuous burial of the surface by new material. A scaling law derived for one mechanism cannot be applied where a different mechanism dominates.

(c) Predicted $9\times(9.81/8.87) = 10.0$ km against an observed 8 km — agreement within 25 percent, which is good for a one-parameter scaling. The shortfall is in the expected direction: Venus's 92-bar atmosphere and 740 K surface both work against tall edifices, the first by suppressing the volatile-driven eruption that builds height and the second by weakening the crust so that loads relax.

**P3** (a) The circumference is $2\pi R$, so a shortening $\Delta C = 45$ km gives

$$\Delta R = \frac{\Delta C}{2\pi} = \frac{45}{2\pi} = 7.2\ \mathrm{km}.$$

(b) $$\frac{\Delta V}{V} = \frac{3\Delta R}{R} = \frac{3\times7.2}{2440} = 8.85\times10^{-3} = 0.885\%.$$

(c) $$\frac{\Delta V}{V} = \alpha\,\Delta T \;\Rightarrow\; \Delta T = \frac{8.85\times10^{-3}}{3\times10^{-5}} = 295\ \mathrm{K}.$$

**About 300 K of mean interior cooling since the scarps began forming**, which is entirely reasonable — indeed it is on the low side. Mercury has had roughly 4 billion years to cool, and a few hundred kelvin over that span is modest for a body with a surface-to-volume ratio 2.6 times Earth's.

Two caveats worth attaching. First, this treats the contraction as purely thermal, but a substantial part of Mercury's shrinkage comes from **inner-core freezing**: solid iron is denser than liquid, so crystallization contracts the body at constant temperature. That means the thermal $\Delta T$ inferred here is an *upper* bound on the cooling actually required. Second, the 45 km figure is a lower bound on the shortening, because it counts only scarps large enough to map from orbit and misses distributed strain — later analyses using higher-resolution imaging pushed the total radius decrease from the early estimate of 1–2 km up to 5–7 km, which was itself a significant result, since the small early value had been hard to reconcile with any plausible thermal history.

</details>

## Flashback

**From Lesson 2.3 (Magnetic fields and the dynamo):** A rocky planet has a liquid iron core of radius $2.0\times10^{6}$ m with $\sigma = 5\times10^{5}\ \mathrm{S\,m^{-1}}$. (a) Compute the free-decay time of a field in that core. (b) Compute the core flow speed required to reach $Rm = 40$. (c) The planet is observed to have no global field but a liquid core. Name the requirement that must be failing and say which part of the planet is responsible.

<details>
<summary>Solution</summary>

(a) $$\tau = \frac{\mu_0\sigma L^2}{\pi^2} = \frac{4\pi\times10^{-7}\times5\times10^{5}\times(2.0\times10^{6})^2}{\pi^2} = \frac{0.6283\times4.0\times10^{12}}{9.870}.$$

$$\tau = \frac{2.513\times10^{12}}{9.870} = 2.55\times10^{11}\ \mathrm{s} = 8.1\times10^{3}\ \mathrm{yr}.$$

(b) $$u = \frac{Rm}{\mu_0\sigma L} = \frac{40}{4\pi\times10^{-7}\times5\times10^{5}\times2.0\times10^{6}} = \frac{40}{1.257\times10^{6}} = 3.2\times10^{-5}\ \mathrm{m\,s^{-1}}.$$

Thirty-two micrometres per second — a very low bar.

(c) The failing requirement is **convection** (requirement 2). Since the core is liquid and highly conducting, requirement 1 is satisfied, and the flow speed needed is trivially small, so the problem is not that the core moves too slowly — it is that the core is not overturning at all, because it is thermally stratified.

And the part of the planet responsible is **the mantle, not the core**. A core convects only if the mantle above it removes heat faster than the core can conduct it down its own adiabat. A stagnant-lid planet, which is this lesson's subject, is a poor heat extractor: the lid thickens, the mantle just above the core stays hot, the temperature gradient across the core–mantle boundary flattens, and the core stops overturning. The dynamo's fate is decided at the surface.

</details>

## Connections

- **Backward:** [2.2](02-02-thermal-evolution-heat-transport.md) supplied the convecting mantle and the temperature-dependent viscosity; [2.4](02-04-impact-cratering-chronology.md) supplied the crater clock that resurfacing resets, which is how Venus's 700 Myr age was obtained.
- **Forward:** [2.6](02-06-reading-planetary-surface.md) reads these features off images to build a geologic history; [3.2](03-02-gravity-topography-tidal-response.md) measures the elastic lithosphere thickness that this lesson estimated thermally; [4.6](04-06-terrestrial-planets-compared.md) uses the tectonic regime to explain each terrestrial planet's atmosphere and climate.
- **Sideways:** [`geology`](../../geology/syllabus.md) owns terrestrial plate tectonics, igneous petrology and Bowen's reaction series, and [geophysics 4.4](../../geophysics/lessons/04-04-mantle-convection-rayleigh-number.md) owns the quantitative mantle-convection and plate-force treatment — including the point that subduction begins where a plate is already broken, which is exactly why plate tectonics is rare. This lesson owns the comparison across bodies.
