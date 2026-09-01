# Planetary Science · Lesson 2.2: Thermal evolution and heat transport

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [1.6](01-06-cosmochemistry-volatile-delivery.md), [2.1](02-01-differentiation-interior-structure.md) · Unlocks: [2.3](02-03-magnetic-fields-dynamo.md), [2.5](02-05-volcanism-tectonics.md), [5.2](05-02-tides-resonances-orbital-evolution.md)

## Why this matters

Earth has volcanoes and earthquakes; the Moon has neither. Both formed at the same time out of much the same material. The difference is entirely one of **heat** — how much a body started with, how much it still makes, and how fast it can get rid of it.

That last part is where the interesting physics is. A planet's heat has to cross its own mantle to escape, and there are only two ways to move it: conduction, which is hopeless over planetary distances, and convection, which is not. Which one a body uses, and whether it still uses it today, determines whether it has volcanism, tectonics, a magnetic field, or an atmosphere worth the name. **Almost every question in Modules 2 and 4 reduces to a thermal-history question.**

## The idea

**Conduction cannot cool a planet. Not "cools it slowly" — cannot.** Heat diffuses a distance $L$ in a time $L^2/\kappa$, and rock's thermal diffusivity $\kappa$ is about $10^{-6}\ \mathrm{m^2\,s^{-1}}$. Put in $L = 1000$ km and you get $3\times10^{10}$ years — seven times the age of the universe. **The quadratic scaling is what kills it:** doubling a body's size quadruples its cooling time, so the method that works fine for a 200 km asteroid fails by orders of magnitude for a planet.

**So planets convect.** If the interior is hot enough and the material is soft enough, hot rock rises, cold rock sinks, and heat is carried by the motion of the material itself rather than by diffusion through it. Mantle rock is a solid — it transmits shear waves — but on million-year timescales it creeps, and that is fast enough. Convection replaces the hopeless $L^2/\kappa$ with a transport rate set by the flow speed, and it is the reason Earth still has an interior heat engine.

**Whether convection happens is a competition, and the Rayleigh number scores it.** Buoyancy drives the overturn; viscosity and thermal diffusion fight it. Above a critical ratio of the two — a few thousand — the layer overturns. **Earth's mantle sits at $Ra\sim3\times10^{7}$, four orders of magnitude supercritical.** It is not marginally convecting; it is vigorously convecting, and no plausible change in the parameters would switch it off.

**But convection is self-regulating in a way that has a surprising consequence.** Mantle viscosity depends violently on temperature — hotter rock is exponentially softer. So a mantle that gets hotter convects faster and cools itself faster; one that gets cooler stiffens and cools more slowly. **The mantle acts as a thermostat on its own temperature**, which is why the total heat flow out of Earth has changed much less over geological time than the heat *production* inside it has.

**And the heat production has changed a lot.** The radioactive isotopes doing the heating have half-lives comparable to the age of the solar system, so the interior heat supply has fallen by roughly a factor of four since Earth formed — and the fall was much steeper early on, because two of the four contributors ($^{40}$K and $^{235}$U) have short half-lives and are now essentially spent.

**Finally, size decides who is still alive.** A body generates heat in proportion to its *volume* and loses it through its *surface*, so the heat available per unit area of escape scales as $R$. Small bodies run out. The Moon and Mercury are geologically dead; Mars is nearly so; Earth and Venus are not. **Vesta's whole interior history was over in the first hundred million years.** The one systematic exception is a body kept warm from outside by tides, which is [5.2](05-02-tides-resonances-orbital-evolution.md)'s subject and the reason Io has more volcanism than Earth.

## The formal version

**Thermal diffusion.** Heat conducts according to $\partial T/\partial t = \kappa\nabla^2T$, giving the characteristic timescale

$$\boxed{\ t_{\text{cond}} \sim \frac{L^2}{\kappa}\ }, \qquad \kappa = \frac{k}{\rho c_p} \approx 10^{-6}\ \mathrm{m^2\,s^{-1}}\ \text{for rock}.$$

| Body | $R$ (km) | $t_{\text{cond}} = R^2/\kappa$ |
|---|---|---|
| Vesta | 263 | $2.2\times10^{9}$ yr |
| Moon | 1737 | $9.6\times10^{10}$ yr |
| Mars | 3390 | $3.6\times10^{11}$ yr |
| Earth | 6371 | $1.3\times10^{12}$ yr |

*In words: only the smallest bodies can conduct their heat away within the age of the solar system.* Everything else must convect or remain hot.

**Radiogenic heating.** Four isotopes matter over geological time:

| Isotope | $t_{1/2}$ (Gyr) | Heat (W kg$^{-1}$ of element) | Isotopic abundance |
|---|---|---|---|
| $^{238}$U | 4.468 | $9.46\times10^{-5}$ | 0.9928 |
| $^{235}$U | 0.704 | $5.69\times10^{-4}$ | 0.0072 |
| $^{232}$Th | 14.05 | $2.64\times10^{-5}$ | 1.0 |
| $^{40}$K | 1.248 | $2.92\times10^{-5}$ | $1.17\times10^{-4}$ |

The abundances of U, Th and K in a planet are set by its bulk composition, which for a rocky body means the chondritic values of [1.6](01-06-cosmochemistry-volatile-delivery.md). Running the decay backward with a bulk-silicate-Earth budget ($\sim20$ ppb U, $\sim80$ ppb Th, $\sim80$ ppm K over $4\times10^{24}$ kg of silicate):

$$H(t) = \sum_i C_i\,a_i\,h_i\,2^{t/t_{1/2,i}}, \qquad H(\text{today}) \approx 17\ \mathrm{TW}, \quad H(4.5\ \mathrm{Ga}) \approx 67\ \mathrm{TW}.$$

Earth's total surface heat flow is about **46 TW**, so radiogenic heat supplies only around 40 percent of it. The rest is stored primordial heat — accretion and core formation — leaking out slowly, plus latent heat from the inner core freezing.

**The [Rayleigh number](../reference.md#rayleigh-number).** For a layer of depth $d$ with temperature contrast $\Delta T$:

$$Ra = \frac{\rho\,\alpha\,g\,\Delta T\,d^3}{\kappa\,\eta},$$

with $\alpha$ the thermal expansivity and $\eta$ the dynamic viscosity. Convection begins above $Ra_c \approx 10^3$.

| Body | $Ra$ (mantle, $\eta = 10^{21}$ Pa s) | Convecting? |
|---|---|---|
| Earth | $3.5\times10^{7}$ | vigorously |
| Venus | $3.2\times10^{7}$ | vigorously |
| Mars | $2.7\times10^{6}$ | yes, more sluggishly |
| Moon | $5.3\times10^{5}$ | marginally, and probably not now |

*In words: the cube of the layer depth dominates everything, so a planet's ability to convect is mostly a statement about its size.* Note the two levers that make the Moon's number small: a thinner mantle ($d^3$) and lower gravity.

**Convective efficiency.** The Nusselt number is the ratio of actual heat transport to what conduction alone would deliver, and boundary-layer theory gives

$$Nu \sim \left(\frac{Ra}{Ra_c}\right)^{1/3} \approx 33\ \text{for Earth}.$$

**Convection moves Earth's mantle heat about thirty times faster than conduction could.** That factor is the difference between a live planet and a dead one.

**Surface-to-volume scaling.** Production $\propto R^3$, loss area $\propto R^2$, so the heat that must escape per unit area scales as $R$, and the time to cool scales roughly as $R$ as well:

$$\frac{\text{surface}}{\text{volume}} = \frac{3}{R}.$$

Relative to Earth, that ratio is 24 for Vesta, 3.7 for the Moon, 2.6 for Mercury, 1.9 for Mars, 1.0 for Venus. **The ordering of that column is the ordering of geological death.**

**Observed heat flux.**

| Body | Total | Per unit area |
|---|---|---|
| Earth | 46 TW | 90 mW m$^{-2}$ |
| Moon | ~0.6 TW | 16 mW m$^{-2}$ |
| Io | 104 TW | 2500 mW m$^{-2}$ |

Io is the exception that proves the rule: a body the size of the Moon radiating twice Earth's *total* heat, because its heat source is not radioactivity at all ([5.2](05-02-tides-resonances-orbital-evolution.md)).

## Picture

![Left panel, a log-log plot of conduction time in years against body radius in kilometres. A blue line rises as radius squared, and a coral dashed horizontal line marks the age of the solar system. Dots mark Vesta, the Moon, Mars and Earth; only Vesta falls below the line, and a note reads that everything larger must convect or stay hot. Right panel, a semi-log plot of radiogenic heat production in terawatts against time in billions of years before present, running from 4.5 on the left to 0 on the right. A thick coral curve labelled total falls from about 67 terawatts to about 17. Four thinner blue curves beneath it show the individual contributions of potassium-40, uranium-238, thorium-232 and uranium-235; potassium-40 and uranium-235 start high and fall steeply, while thorium-232 barely declines](assets/02-02-fig1.svg)

Two constraints, one conclusion. A planet cannot conduct its heat away, and the heat it makes is running out — so the geologically interesting question is always how efficiently it convects and for how long it can keep doing so.

## Worked examples

**Example 1 (mechanical — is this body convecting?).** An icy moon has a 100 km ice shell with $\Delta T = 100$ K across it, $\rho = 920\ \mathrm{kg\,m^{-3}}$, $\alpha = 1.6\times10^{-4}\ \mathrm{K^{-1}}$, $g = 1.3\ \mathrm{m\,s^{-2}}$, $\kappa = 1.4\times10^{-6}\ \mathrm{m^2\,s^{-1}}$, and warm-ice viscosity $\eta = 10^{14}$ Pa s. Does it convect?

$$Ra = \frac{\rho\alpha g\Delta T d^3}{\kappa\eta} = \frac{920\times1.6\times10^{-4}\times1.3\times100\times(10^{5})^3}{1.4\times10^{-6}\times10^{14}}.$$

Numerator: $920\times1.6\times10^{-4} = 0.1472$; $\times1.3 = 0.1914$; $\times100 = 19.14$; $\times10^{15} = 1.914\times10^{16}$.

Denominator: $1.4\times10^{-6}\times10^{14} = 1.4\times10^{8}$.

$$Ra = \frac{1.914\times10^{16}}{1.4\times10^{8}} = 1.37\times10^{8}.$$

Five orders of magnitude above critical, so **yes, vigorously** — provided the viscosity really is $10^{14}$ Pa s.

And that proviso is the whole difficulty. Ice viscosity varies by ten orders of magnitude between 150 K and 270 K, so $Ra$ is essentially a statement about temperature, not about geometry. Cold surface ice at $10^{20}$ Pa s gives $Ra = 137$, comfortably subcritical. Real ice shells resolve this by convecting only in a warm lower layer beneath a rigid cold lid — which is exactly the stagnant-lid regime of [2.5](02-05-volcanism-tectonics.md), and it matters enormously for whether Europa's ocean can exchange material with its surface ([5.3](05-03-ocean-worlds.md)).

**Example 2 (why you'd care — why the Moon died and Earth did not).** Compare the two bodies on the terms above.

*Heat production.* The Moon is $0.0123\,M_\oplus$, so even at identical concentrations it makes 1.2 percent of Earth's radiogenic heat: about 0.2 TW today.

*Heat loss area.* The Moon's surface is $(1737/6371)^2 = 7.4$ percent of Earth's.

So the Moon must shed 1.2 percent of the heat through 7.4 percent of the area — a heat flux per unit area of $1.2/7.4 = 16$ percent of Earth's. Observed: 16 against 90 mW m$^{-2}$, which is **18 percent**. The agreement is close enough to confirm that the difference is essentially all geometry.

*Convective vigour.* $Ra_{\text{Moon}}/Ra_{\text{Earth}} = 5.3\times10^{5}/3.5\times10^{7} = 1.5$ percent, driven by the $d^3$ and $g$ factors.

*Conclusion.* The Moon had a magma ocean, a crust, mare volcanism and probably a dynamo for its first 1.5 Gyr. It then cooled below the temperature at which its small, low-gravity mantle could sustain convection, the lithosphere thickened until it was a rigid shell over the whole body, and everything stopped. **Earth avoided this fate not by making more heat per kilogram — the concentrations are similar — but by being big enough that its heat had further to travel and its mantle stayed soft.**

The general result is worth stating plainly: **for rocky bodies heated by radioactivity, geological lifetime scales roughly with radius.** Anything much smaller than Mars is finished; anything Earth-sized or larger is still going. That single scaling law organizes the entire terrestrial-planet comparison in [4.6](04-06-terrestrial-planets-compared.md).

## Watch out

- **You might think a hotter planet cools faster and so converges to a cool state quickly, but temperature-dependent viscosity makes the mantle a thermostat.** Hotter means softer means faster convection means faster cooling — a strong negative feedback that keeps mantle temperature within a few hundred kelvin over billions of years, even as heat production falls fourfold. Surface heat flow is therefore a much weaker function of time than heat production is.
- **You might think Earth's 46 TW is radiogenic, but only about 40 percent of it is.** The rest is primordial heat and inner-core latent heat. The mismatch between heat produced and heat lost is called the *Urey ratio*, and its value near 0.4 means Earth is still cooling, at roughly 100 K per billion years.
- **You might think the Rayleigh number is a property of a planet, but it is overwhelmingly a property of its viscosity, which depends exponentially on temperature.** Quoting $Ra$ without stating the assumed $\eta$ is close to meaningless — as Example 1 shows, the same ice shell is either five orders of magnitude supercritical or comfortably stable depending on a number nobody can measure directly.
- **You might think all small bodies are cold, but tidal heating breaks the size rule completely.** Io is smaller than Mars and hotter than Earth. Any argument from size alone must first check whether the body is in a resonance ([5.2](05-02-tides-resonances-orbital-evolution.md)).

## One-liner

> Heat production scales with volume and escape with surface, so a planet's geological lifetime is roughly proportional to its radius — unless something outside it keeps squeezing.

## Problems

**P1 (🟢)** A rocky body has radius 400 km and $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$. (a) Compute its conduction timescale in years. (b) Compare with the age of the solar system and say whether it needs convection to have cooled. (c) By what factor would the timescale change for a body of radius 1200 km?

**P2 (🟡)** A super-Earth has $R = 1.5\,R_\oplus$ and the same composition and density as Earth. Assume radiogenic heat production per unit mass is the same. (a) By what factor is its total heat production larger? (b) By what factor is its surface area larger? (c) By what factor is its surface heat flux larger, and what does this predict about its geological activity?

**P3 (🔴, optional)** Take Earth's mantle: $\rho = 3300$, $\alpha = 3\times10^{-5}\ \mathrm{K^{-1}}$, $g = 9.8$, $\Delta T = 1500$ K, $d = 2.9\times10^{6}$ m, $\kappa = 10^{-6}$, $\eta = 10^{21}$ Pa s. (a) Compute $Ra$. (b) Compute $Nu = (Ra/10^3)^{1/3}$ and the effective heat flux enhancement. (c) Mantle viscosity depends on temperature roughly as $\eta \propto \exp(E/RT)$ with $E/R \approx 3\times10^{4}$ K. If the mantle were 200 K hotter at $T = 1900$ K rather than 1700 K, by what factor would $\eta$ fall, and by what factor would the convective heat flux ($\propto Nu \propto Ra^{1/3}$) rise? Comment on the thermostat.

<details>
<summary>Solutions</summary>

**P1** (a) $$t = \frac{L^2}{\kappa} = \frac{(4\times10^{5})^2}{10^{-6}} = \frac{1.6\times10^{11}}{10^{-6}} = 1.6\times10^{17}\ \mathrm{s} = \frac{1.6\times10^{17}}{3.156\times10^{7}} = 5.1\times10^{9}\ \mathrm{yr}.$$

(b) About 5.1 Gyr against a solar-system age of 4.57 Gyr — the same order. **Conduction alone would just about have cooled this body**, so it does not require convection, though it may well have convected early when it was hot and soft.

(c) $t\propto L^2$, so $(1200/400)^2 = 9$: nine times longer, $4.6\times10^{10}$ yr. Tripling the radius pushes the body decisively into the must-convect regime.

**P2** (a) Same density, so $M \propto R^3$: $1.5^3 = 3.375$. **Heat production is 3.375 times Earth's.**

(b) $A\propto R^2$: $1.5^2 = 2.25$.

(c) $$\frac{q}{q_\oplus} = \frac{3.375}{2.25} = 1.5.$$

Exactly $R/R_\oplus$, as the $3/R$ scaling requires. **Surface heat flux is 50 percent higher**, about 135 mW m$^{-2}$.

The prediction is that the planet is more geologically active than Earth and stays active longer — more volcanism, a hotter and therefore weaker mantle, and a longer-lived dynamo. Whether it also has *plate tectonics* is a separate and much-argued question, because higher gravity means a thicker, more strongly compressed lithosphere that is harder to break, which cuts the other way ([2.5](02-05-volcanism-tectonics.md)).

**P3** (a) $$Ra = \frac{3300\times3\times10^{-5}\times9.8\times1500\times(2.9\times10^{6})^3}{10^{-6}\times10^{21}}.$$

Numerator: $3300\times3\times10^{-5} = 0.099$; $\times9.8 = 0.9702$; $\times1500 = 1455.3$; $(2.9\times10^{6})^3 = 2.439\times10^{19}$; product $= 3.549\times10^{22}$.

Denominator: $10^{-6}\times10^{21} = 10^{15}$.

$$Ra = 3.55\times10^{7}.$$

(b) $$Nu = \left(\frac{3.55\times10^{7}}{10^{3}}\right)^{1/3} = (3.55\times10^{4})^{1/3} = 32.9.$$

Convection carries about **33 times** the heat conduction would.

(c) $$\frac{\eta(1900)}{\eta(1700)} = \exp\left[\frac{3\times10^{4}}{1900} - \frac{3\times10^{4}}{1700}\right] = \exp\left[15.789 - 17.647\right] = e^{-1.858} = 0.156.$$

Viscosity falls by a factor of **6.4**. Then $Ra\propto1/\eta$ rises by 6.4, and

$$\frac{Nu'}{Nu} = 6.4^{1/3} = 1.86.$$

**A 200 K rise in mantle temperature — about 12 percent — nearly doubles the rate at which the planet sheds heat.**

That asymmetry is the thermostat, and it is worth seeing why it is so effective. The response is strongly nonlinear in temperature but only weakly nonlinear in heat flux: a large excursion in $T$ produces a modest change in $Nu$, which then removes the excess. Run it the other way and a mantle that cools 200 K stiffens sixfold and its heat loss halves, so cooling stalls. The mantle is therefore pinned near the temperature at which heat loss matches heat production, and it tracks that equilibrium as production declines rather than cooling monotonically at its own pace.

The quantitative consequence is the one the lesson flagged: radiogenic production has fallen by a factor of four since 4.5 Ga, but the surface heat flux has fallen by far less, because the mantle warmed relative to the equilibrium and its viscosity adjusted. It also explains why Earth's mantle temperature inferred from the chemistry of ancient lavas is only a few hundred kelvin hotter in the Archaean than today, rather than the thousand-plus kelvin a no-feedback calculation would predict.

</details>

## Flashback

**From Lesson 1.6 (Cosmochemistry — reservoirs and volatile delivery):** A body's water has $\mathrm{D/H} = 4.0\times10^{-4}$. (a) Modelling it as a mixture of carbonaceous-chondrite water ($1.4\times10^{-4}$) and Oort-cloud cometary ice ($3.2\times10^{-4}$), attempt to find the cometary fraction and state what goes wrong. (b) Repeat with comet 67P ($5.3\times10^{-4}$) as the deuterium-rich endmember. (c) State the general lesson about endmember choice in one sentence.

<details>
<summary>Solution</summary>

(a) In units of $10^{-4}$, with cometary fraction $f$:

$$4.0 = 3.2f + 1.4(1-f) = 1.4 + 1.8f, \qquad f = \frac{2.6}{1.8} = 1.44.$$

**A fraction greater than 1, which is impossible.** The measured value lies *outside* the interval spanned by the two assumed endmembers, so no mixture of them can produce it. The model is not imprecise — it is falsified.

(b) $$4.0 = 5.3f + 1.4(1-f) = 1.4 + 3.9f, \qquad f = \frac{2.6}{3.9} = 0.667.$$

Two-thirds 67P-like material, one-third chondritic — a perfectly admissible answer.

(c) **A two-endmember mixing model can only ever produce values between its endmembers, so a result outside that range falsifies the choice of endmembers rather than the measurement** — and since the comets alone span $1.6$ to $5.3\times10^{-4}$, which endmembers you pick largely determines the answer you get, which is precisely why D/H no longer settles the origin of Earth's water.

</details>

## Connections

- **Backward:** [2.1](02-01-differentiation-interior-structure.md) established the layers whose heat this lesson tracks, and the core formation that supplied much of the primordial heat; [1.6](01-06-cosmochemistry-volatile-delivery.md) supplies the chondritic U, Th and K abundances that set the radiogenic budget.
- **Forward:** [2.3](02-03-magnetic-fields-dynamo.md) needs core convection, which needs the core to still be cooling; [2.5](02-05-volcanism-tectonics.md) turns the convective regime into a surface expression; [5.2](05-02-tides-resonances-orbital-evolution.md) supplies the alternative heat source that breaks the size rule.
- **Sideways:** the Rayleigh criterion and boundary-layer scaling are [fluid-dynamics 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md)'s and [heat-transfer](../../heat-transfer/syllabus.md)'s; [`geophysics`](../../geophysics/syllabus.md) 4.4 does Earth's mantle convection properly and owns it. The $L^2/\kappa$ diffusion timescale is the same one that governs the skin depth of a daily thermal wave in [3.3](03-03-remote-spectroscopy.md)'s thermal inertia — the identical equation over ten orders of magnitude in length.
