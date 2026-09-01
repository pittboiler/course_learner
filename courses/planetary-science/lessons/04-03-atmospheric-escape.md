# Planetary Science · Lesson 4.3: Atmospheric escape

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [3.4](03-04-magnetospheres-solar-wind.md), [4.1](04-01-atmospheric-structure.md) · Unlocks: [4.5](04-05-photochemistry-hazes-evolution.md), [4.6](04-06-terrestrial-planets-compared.md), [6.3](06-03-mass-radius-composition.md)

## Why this matters

The Moon has no atmosphere; Titan, which is smaller, has one denser than Earth's. Mars is barren; Venus, of nearly the same mass as Earth, carries ninety times Earth's atmospheric mass. **An atmosphere is not something a planet simply has — it is a balance between supply and loss, maintained or lost over billions of years**, and this lesson is the loss side.

It matters far beyond the solar system. The most striking structure in the exoplanet population — the **radius valley**, a deficit of planets around 1.8 Earth radii ([6.3](06-03-mass-radius-composition.md)) — is now widely read as the signature of atmospheric escape: planets that kept their hydrogen envelopes on one side, planets stripped bare on the other. Escape physics is the leading explanation for the commonest type of planet in the galaxy.

## The idea

**Escape happens at the exobase, and only there.** Deep in an atmosphere a fast molecule collides before it gets anywhere. High up, where the density is low enough that the mean free path equals the scale height, a molecule moving upward faster than escape velocity simply leaves. That boundary is the **exobase**, and everything below it is irrelevant to escape except as a reservoir.

**Thermal (Jeans) escape is the simplest channel: the tail of the Maxwell–Boltzmann distribution.** At any temperature some fraction of molecules exceed escape speed. That fraction is exponentially small, and the exponent is a competition between gravitational binding energy and thermal energy.

**The exponential is everything.** Because the loss rate goes as $e^{-\lambda}$ with $\lambda = (v_{\text{esc}}/v_{\text{th}})^2$, the transition from "keeps it forever" to "loses it immediately" spans a very narrow range of $\lambda$. The practical rule is:

$$\frac{v_{\text{esc}}}{v_{\text{th}}} \gtrsim 6 \;\Rightarrow\; \text{retained over the age of the solar system}.$$

**And notice what the criterion depends on: both gravity and temperature.** Since $v_{\text{th}} = \sqrt{2kT/m}$, a cold atmosphere retains gases a warm one would lose. **Titan is the demonstration.** Its escape velocity is 2.6 km/s — a fifth of Earth's — and it holds 1.5 bar of nitrogen, because its exobase is at about 180 K rather than Earth's 1000 K. At Earth's exobase temperature Titan would have nothing.

**Now, thermal escape alone explains almost nothing about actual planetary histories.** It correctly predicts that everyone loses hydrogen and keeps nitrogen, but the rates are far too small to have removed Mars's early atmosphere or Venus's ocean. **Three other processes do the real work.**

*Hydrodynamic escape (blow-off).* If extreme ultraviolet heating is intense enough, the upper atmosphere does not merely leak from its tail — it expands *bodily*, a transonic outflow like a stellar wind, dragging heavier species along with the hydrogen. **This is not a tail-of-the-distribution effect and is orders of magnitude faster.** The young Sun's EUV output was 10–100 times today's, so this operated on every terrestrial planet in the first few hundred million years, and it is the dominant channel for hot exoplanets today.

*Non-thermal escape.* Ion pickup, sputtering, charge exchange, and dissociative recombination — the solar-wind-driven processes of [3.4](03-04-magnetospheres-solar-wind.md). These dominate the *present* loss at Mars and Venus.

*Impact erosion.* A large impact can accelerate the atmosphere above a tangent plane past escape velocity, blowing off a fraction of it directly. Efficient on low-gravity bodies, and probably significant for Mars.

**Finally, escape leaves a fingerprint: isotopic fractionation.** Lighter isotopes escape preferentially, so a reservoir that has lost mass is enriched in the heavy ones. **Mars's D/H is six times Earth's, Venus's is 150 times Earth's** ([1.6](01-06-cosmochemistry-volatile-delivery.md)). Read backward, these enrichments measure how much was lost — which is [4.5](04-05-photochemistry-hazes-evolution.md)'s subject.

## The formal version

**The exobase.** Defined where the mean free path equals the scale height:

$$\ell = \frac{1}{n\sigma} = H \quad\Longrightarrow\quad n_{\text{exo}} = \frac{1}{\sigma H},$$

with $\sigma\approx3\times10^{-19}\ \mathrm{m^2}$ a typical collision cross-section. For Earth this puts the exobase near 500 km altitude at $n\approx10^{13}\ \mathrm{m^{-3}}$.

**Thermal speed and the [Jeans parameter](../reference.md#jeans-parameter-and-the-retention-criterion).**

$$v_{\text{th}} = \sqrt{\frac{2kT}{m}}\ \ \text{(most probable)}, \qquad v_{\text{esc}} = \sqrt{\frac{2GM}{r_{\text{exo}}}},$$

$$\boxed{\ \lambda = \frac{GMm}{kT\,r_{\text{exo}}} = \left(\frac{v_{\text{esc}}}{v_{\text{th}}}\right)^2\ }$$

*In words: $\lambda$ is the ratio of gravitational binding energy to thermal energy per molecule.*

**The Jeans flux.** Integrating the Maxwell–Boltzmann distribution over upward velocities exceeding $v_{\text{esc}}$:

$$\Phi_J = \frac{n_{\text{exo}}v_{\text{th}}}{2\sqrt\pi}(1+\lambda)\,e^{-\lambda}.$$

*In words: the escape flux is the thermal flux times an exponentially small factor.* Everything hinges on $\lambda$.

| $\lambda$ | $v_{\text{esc}}/v_{\text{th}}$ | $e^{-\lambda}$ | Outcome |
|---|---|---|---|
| 3 | 1.7 | $5\times10^{-2}$ | blow-off regime |
| 15 | 3.9 | $3\times10^{-7}$ | rapid loss |
| 36 | 6.0 | $2\times10^{-16}$ | **retention threshold** |
| 100 | 10 | $4\times10^{-44}$ | permanent |

**The retention criterion, applied.** At a 1000 K exobase:

| Gas | $v_{\text{th}}$ (km s$^{-1}$) | Earth ($v_{\text{esc}} = 11.2$) | Mars ($5.0$) |
|---|---|---|---|
| H | 4.06 | 2.76 — **lost** | 1.23 — lost instantly |
| H$_2$ | 2.87 | 3.90 — lost | 1.74 — lost |
| He | 2.04 | 5.50 — marginal | 2.45 — lost |
| N$_2$ | 0.770 | 14.5 — **kept** | 6.49 — marginal |
| CO$_2$ | 0.614 | 18.2 — kept | 8.14 — kept |

**Earth's helium is the interesting entry.** At 5.5 it sits just below the retention threshold, and indeed Earth's atmospheric helium is not primordial — it is continuously resupplied by radioactive alpha decay in the crust and leaks away on a timescale of about a million years.

**Energy-limited hydrodynamic escape.** When EUV heating drives bulk outflow, the mass-loss rate is set by how much energy is available to lift material out of the gravity well:

$$\boxed{\ \dot M = \frac{\varepsilon\,\pi R_p^3\,F_{\text{XUV}}}{G M_p}\ }$$

with $\varepsilon\approx0.1$–$0.3$ the heating efficiency. *In words: escape rate goes as the XUV flux and as $R_p^3/M_p$ — that is, inversely as the mean density.* **Low-density planets are far more vulnerable**, which is the core of the radius-valley argument.

**Diffusion-limited escape.** Even when the exobase can shed hydrogen freely, the rate may be capped by how fast hydrogen can diffuse up through the heavier background gas:

$$\Phi_{\text{lim}} \approx b\,\frac{f_1}{H_a},$$

with $b$ the binary diffusion coefficient and $f_1$ the light species' mixing ratio. *In words: escape can be throttled at the bottom, not the top.* **On Earth this is the operative limit**, and it is why the cold trap at the tropopause — which freezes water out before it can reach altitude — is what actually protects Earth's ocean, far more than the magnetic field does.

**Rayleigh fractionation.** For preferential loss of the light isotope with fractionation factor $\alpha<1$, the surviving reservoir's isotope ratio evolves as

$$\frac{R}{R_0} = f^{\,\alpha-1},$$

with $f$ the fraction remaining. Inverting a measured enrichment gives the fraction lost ([1.6](01-06-cosmochemistry-volatile-delivery.md) P3).

## Picture

![A log-log plot of escape speed in kilometres per second against exobase temperature in kelvin. Six curves show the retention boundary for different gases, each being the locus where escape speed equals six times the thermal speed: hydrogen and molecular hydrogen highest in coral, helium next, then water, nitrogen and carbon dioxide in blue, each lower than the last. Grey dots mark real bodies at their escape speeds and exobase temperatures: Jupiter far above everything, Earth and Venus above the nitrogen and carbon dioxide lines but below the hydrogen line, Mars lower and near the nitrogen line, Mercury and the Moon low, and Titan and Europa at low temperature and low escape speed. A note explains that a body above a line keeps that gas and below it loses that gas, and that Titan sits above the nitrogen line only because it is so cold — at Earth's exobase temperature it would have lost its atmosphere, so temperature buys retention just as effectively as gravity does](assets/04-03-fig1.svg)

Every retention boundary slopes upward: hotter atmospheres need stronger gravity. The vertical spacing between lines is molecular weight; the slope is the temperature dependence.

## Worked examples

**Example 1 (mechanical — what does Earth keep?).** With a 1000 K exobase, compute $v_{\text{th}}$ for atomic hydrogen and molecular nitrogen, and apply the retention criterion for Earth ($v_{\text{esc}} = 11.2\ \mathrm{km\,s^{-1}}$) and Mars ($5.0$).

$$v_{\text{th}}(\mathrm{H}) = \sqrt{\frac{2\times1.381\times10^{-23}\times1000}{1.008\times1.661\times10^{-27}}} = \sqrt{\frac{2.762\times10^{-20}}{1.674\times10^{-27}}} = \sqrt{1.650\times10^{7}} = 4062\ \mathrm{m\,s^{-1}}.$$

$$v_{\text{th}}(\mathrm{N_2}) = \sqrt{\frac{2.762\times10^{-20}}{28.014\times1.661\times10^{-27}}} = \sqrt{\frac{2.762\times10^{-20}}{4.653\times10^{-26}}} = \sqrt{5.936\times10^{5}} = 770\ \mathrm{m\,s^{-1}}.$$

*Earth:* $$\frac{11.2}{4.06} = 2.76\ (\mathrm{H}), \qquad \frac{11.2}{0.770} = 14.5\ (\mathrm{N_2}).$$

Hydrogen is far below 6 — **lost**. Nitrogen is far above — **kept**. Earth's atmosphere is nitrogen and oxygen for exactly this reason, and any free hydrogen escapes within thousands of years.

*Mars:* $$\frac{5.0}{4.06} = 1.23\ (\mathrm{H}), \qquad \frac{5.0}{0.770} = 6.49\ (\mathrm{N_2}).$$

Hydrogen at 1.23 is deep in the blow-off regime — it does not leak, it streams. Nitrogen at 6.49 is *marginally* above the retention threshold, which is exactly what the observations show: Mars has retained nitrogen but only 2 percent of Earth's column, and its $^{15}$N/$^{14}$N is enriched by 60 percent, the isotopic signature of substantial partial loss.

**Note that Mars's real exobase is nearer 200–300 K, not 1000 K**, which makes all its ratios about twice as favourable and retention easier. The 1000 K calculation is really telling you about the *early* Mars, when EUV heating was intense — and that is the epoch that mattered.

**Example 2 (why you'd care — why Titan has an atmosphere and Ganymede does not).** Titan: $R = 2575$ km, $M = 1.345\times10^{23}$ kg, exobase $T\approx180$ K. Ganymede: $R = 2634$ km, $M = 1.482\times10^{23}$ kg, and a surface temperature of about 110 K but an exobase heated to several hundred kelvin by Jovian magnetospheric particles. **Ganymede is bigger and more massive, and has essentially no atmosphere.**

Escape velocities:

$$v_{\text{esc}}(\text{Titan}) = \sqrt{\frac{2\times6.674\times10^{-11}\times1.345\times10^{23}}{2.575\times10^{6}}} = \sqrt{\frac{1.795\times10^{13}}{2.575\times10^{6}}} = \sqrt{6.972\times10^{6}} = 2640\ \mathrm{m\,s^{-1}},$$

$$v_{\text{esc}}(\text{Ganymede}) = \sqrt{\frac{2\times6.674\times10^{-11}\times1.482\times10^{23}}{2.634\times10^{6}}} = \sqrt{7.511\times10^{6}} = 2740\ \mathrm{m\,s^{-1}}.$$

**Essentially identical — Ganymede is if anything slightly better at holding gas.** So gravity does not explain the difference. Three things do.

*Temperature.* Titan's exobase is around 180 K, giving $v_{\text{th}}(\mathrm{N_2}) = 327\ \mathrm{m\,s^{-1}}$ and a ratio of $2640/327 = 8.1$ — safely retained. Ganymede sits inside Jupiter's magnetosphere and is bombarded by energetic particles that heat and sputter its exosphere far above the local blackbody temperature, so its effective ratio is much worse.

*Supply.* Titan formed cold enough, and far enough from Jupiter's heat, to incorporate ammonia ice, which was later converted photochemically and by impacts into N$_2$ — a source. Ganymede formed warmer, closer in, in Jupiter's own circumplanetary disk, and captured less.

*Direct stripping.* Ganymede sits deep in Jupiter's magnetosphere, where ion sputtering ([3.4](03-04-magnetospheres-solar-wind.md)) removes material continuously. Titan orbits at 20 Saturn radii, largely outside Saturn's much gentler magnetosphere, and is shielded further by its own induced ionosphere.

**The general lesson is that the retention criterion is necessary but nowhere near sufficient.** It tells you whether a gas *can* be held; whether one is actually present depends on supply, on the radiation environment, and on the history of the body. Two nearly identical moons, one with the fourth-thickest atmosphere in the solar system and one with none.

## Watch out

- **You might think escape depends only on gravity, but temperature enters just as strongly through $v_{\text{th}}$.** Titan holds nitrogen at a fifth of Earth's escape velocity because it is cold. Any argument of the form "this planet is too small to hold an atmosphere" must state a temperature.
- **You might think thermal escape explains planetary atmospheres, but Jeans escape is far too slow to have removed Mars's or Venus's.** The historically decisive channels were hydrodynamic (early, EUV-driven) and impact erosion, both of which are essentially instantaneous by comparison.
- **You might think escape is limited at the top by the exobase, but it is often limited at the bottom by diffusion.** Earth's water loss is throttled by the tropopause cold trap, which freezes water out before it can reach altitude — and that, not the magnetosphere, is why Earth still has an ocean.
- **You might think $\lambda$ near 6 means "half is lost", but the dependence is $e^{-\lambda}$**, so the interesting range is narrow and the outcome is close to binary. Getting $\lambda$ right to 20 percent matters enormously; getting the prefactor right barely matters at all.

## One-liner

> Escape is exponential in the ratio of gravitational binding to thermal energy, so the boundary between "keeps it forever" and "loses it at once" is razor thin — and temperature sits on that boundary as firmly as mass does.

## Problems

**P1 (🟢)** A body has $v_{\text{esc}} = 4.2\ \mathrm{km\,s^{-1}}$ and an exobase at 400 K. (a) Compute $v_{\text{th}}$ for H$_2$ ($m = 2.016$ u) and for CO$_2$ ($44.01$ u). (b) Apply the retention criterion to each. (c) State what the atmosphere of this body would be made of.

**P2 (🟡)** Use energy-limited escape, $\dot M = \varepsilon\pi R_p^3F_{\text{XUV}}/(GM_p)$, with $\varepsilon = 0.15$. A planet has $R_p = 2\,R_\oplus$, $M_p = 5\,M_\oplus$, and receives $F_{\text{XUV}} = 50\ \mathrm{W\,m^{-2}}$. (a) Compute $\dot M$ in kg/s. (b) Compute the mass lost in 100 Myr. (c) If its hydrogen envelope is 1 percent of its mass, does it survive?

**P3 (🔴, optional)** Venus's atmospheric D/H is 150 times Earth's. Assume Venus began with Earth-like water and lost it by hydrogen escape with Rayleigh fractionation $R/R_0 = f^{\alpha-1}$. (a) With $\alpha = 0.5$, compute the fraction of hydrogen remaining. (b) Earth's ocean is $1.4\times10^{21}$ kg; estimate Venus's initial water inventory assuming its present atmospheric water is $2\times10^{16}$ kg. (c) State two reasons this estimate is unreliable, one in each direction.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_{\text{th}}(\mathrm{H_2}) = \sqrt{\frac{2\times1.381\times10^{-23}\times400}{2.016\times1.661\times10^{-27}}} = \sqrt{\frac{1.105\times10^{-20}}{3.348\times10^{-27}}} = \sqrt{3.300\times10^{6}} = 1817\ \mathrm{m\,s^{-1}}.$$

$$v_{\text{th}}(\mathrm{CO_2}) = \sqrt{\frac{1.105\times10^{-20}}{44.01\times1.661\times10^{-27}}} = \sqrt{\frac{1.105\times10^{-20}}{7.310\times10^{-26}}} = \sqrt{1.512\times10^{5}} = 389\ \mathrm{m\,s^{-1}}.$$

(b) $$\frac{4200}{1817} = 2.31\ (\mathrm{H_2}) \quad\text{— well below 6, lost.}$$
$$\frac{4200}{389} = 10.8\ (\mathrm{CO_2}) \quad\text{— well above 6, kept.}$$

(c) The atmosphere would be made of **heavy gases only** — CO$_2$, N$_2$ (ratio $4200/487 = 8.6$, comfortably retained), argon, SO$_2$ — with no hydrogen or helium. This is the composition of every terrestrial-planet atmosphere in the solar system, and the reason they all look chemically similar despite very different histories.

**P2** (a) $$R_p = 2\times6.371\times10^{6} = 1.274\times10^{7}\ \mathrm{m}, \qquad M_p = 5\times5.972\times10^{24} = 2.986\times10^{25}\ \mathrm{kg}.$$

$$R_p^3 = 2.068\times10^{21}\ \mathrm{m^3}, \qquad GM_p = 6.674\times10^{-11}\times2.986\times10^{25} = 1.993\times10^{15}.$$

$$\dot M = \frac{0.15\times\pi\times2.068\times10^{21}\times50}{1.993\times10^{15}} = \frac{0.15\times3.1416\times1.034\times10^{23}}{1.993\times10^{15}}.$$

$$= \frac{4.873\times10^{22}}{1.993\times10^{15}} = 2.45\times10^{7}\ \mathrm{kg\,s^{-1}}.$$

(b) $$100\ \mathrm{Myr} = 10^{8}\times3.156\times10^{7} = 3.156\times10^{15}\ \mathrm{s},$$
$$\Delta M = 2.45\times10^{7}\times3.156\times10^{15} = 7.73\times10^{22}\ \mathrm{kg}.$$

(c) The envelope is $0.01\times2.986\times10^{25} = 2.99\times10^{23}$ kg.

$$\frac{7.73\times10^{22}}{2.99\times10^{23}} = 0.26.$$

**About a quarter of the envelope is lost in 100 Myr, so it survives — but not comfortably.** Extending to 400 Myr at this rate would strip it entirely, and the XUV flux was higher still earlier. In practice the flux declines over the first Gyr, the planet shrinks as it loses envelope (which lowers $R_p^3$ and slows the loss, a stabilizing feedback), and the outcome is genuinely marginal.

**That marginality is the point.** A planet slightly smaller or slightly closer loses everything and becomes a bare rock of about $1.5\,R_\oplus$; a planet slightly larger keeps its envelope and stays near $2.5\,R_\oplus$. The sharpness of that boundary is what produces the radius valley of [6.3](06-03-mass-radius-composition.md).

**P3** (a) $$\frac{R}{R_0} = 150 = f^{\alpha-1} = f^{-0.5},$$
$$f^{-0.5} = 150 \;\Rightarrow\; f^{0.5} = \frac{1}{150} \;\Rightarrow\; f = \frac{1}{22{,}500} = 4.4\times10^{-5}.$$

**About 0.004 percent of the original hydrogen remains** — essentially all of it is gone.

(b) $$M_{\text{initial}} = \frac{M_{\text{now}}}{f} = \frac{2\times10^{16}}{4.4\times10^{-5}} = 4.5\times10^{20}\ \mathrm{kg}.$$

That is $4.5\times10^{20}/1.4\times10^{21} = 0.32$ of an Earth ocean — so this calculation says Venus started with roughly **a third of Earth's ocean**, several hundred metres of global equivalent depth.

(c) Two reasons, pushing opposite ways:

**It could be a severe underestimate.** Rayleigh fractionation assumes a single well-mixed reservoir losing mass steadily, with all the loss fractionating at $\alpha = 0.5$. But in a genuine *hydrodynamic* blow-off the outflow is a bulk expansion that carries deuterium along nearly as efficiently as hydrogen — $\alpha\to1$ — and produces almost **no** fractionation. If most of Venus's water left that way, today's 150-fold enrichment was produced by the small residual fraction lost by ordinary Jeans escape afterwards, and the true initial inventory could be tens of times larger. This is the standard objection, and it is why published estimates of Venus's initial water range over two orders of magnitude, up to several Earth oceans.

**It could be an overestimate.** The calculation assumes Venus's water was ever a single exchangeable reservoir. Water incorporated into the crust as hydrated minerals, or lost into the interior, leaves without fractionating the remainder, so some of the apparent depletion is storage rather than escape. And the present atmospheric water figure is small and poorly constrained, while $f$ depends on it linearly.

**The transferable point is that an isotopic ratio constrains the product of loss and fractionation efficiency, not loss alone**, and that $\alpha$ is not a constant of nature but a property of the escape mechanism — which changed over Venus's history. The same caution applied to Mars in [1.6](01-06-cosmochemistry-volatile-delivery.md).

</details>

## Flashback

**From Lesson 3.4 (Magnetospheres and the solar wind):** A planet has surface equatorial field $B_0 = 5.0\times10^{-6}$ T and radius 3000 km, in a solar wind of dynamic pressure $4.0\times10^{-9}$ Pa. (a) Compute the magnetic pressure at the surface. (b) Compute the magnetopause standoff in planetary radii. (c) State whether this planet's atmosphere is shielded from direct solar-wind scouring, and whether that means it will retain its atmosphere.

<details>
<summary>Solution</summary>

(a) $$\frac{B_0^2}{2\mu_0} = \frac{(5.0\times10^{-6})^2}{2\times4\pi\times10^{-7}} = \frac{2.5\times10^{-11}}{2.513\times10^{-6}} = 9.95\times10^{-6}\ \mathrm{Pa}.$$

(b) $$R_{\text{mp}} = R\left(\frac{9.95\times10^{-6}}{4.0\times10^{-9}}\right)^{1/6} = R\,(2488)^{1/6} = R\,e^{7.8193/6} = R\,e^{1.3032} = 3.68\,R.$$

(c) **Yes, shielded — and no, that does not mean it retains its atmosphere.**

A standoff of 3.7 planetary radii puts the magnetopause about 8000 km above the surface, comfortably above any exobase, so the solar wind never touches the neutral atmosphere and direct sputtering and ion pickup are suppressed.

But [3.4](03-04-magnetospheres-solar-wind.md)'s central result was that this buys much less than it appears to. The magnetosphere has open polar field lines along which ions escape freely, and being a large obstacle it collects more solar-wind energy in the first place — which is why Earth, Venus and Mars all lose ions at comparable rates despite completely different magnetic states.

And this lesson adds the decisive point: **the processes that actually determine whether an atmosphere survives over gigayears are thermal and hydrodynamic escape, which are driven by EUV heating and governed by $v_{\text{esc}}/v_{\text{th}}$, and neither cares about a magnetic field at all.** To answer the retention question you would need this planet's mass and its exobase temperature — quantities the problem does not supply, and which the magnetic field does not substitute for.

</details>

## Connections

- **Backward:** [4.1](04-01-atmospheric-structure.md) built the vertical structure whose top is the exobase; [3.4](03-04-magnetospheres-solar-wind.md) supplied the non-thermal channels and the evidence that magnetic shielding matters less than advertised.
- **Forward:** [4.5](04-05-photochemistry-hazes-evolution.md) inverts isotopic fractionation to measure past loss; [4.6](04-06-terrestrial-planets-compared.md) uses escape to explain the four terrestrial planets; [6.3](06-03-mass-radius-composition.md) uses energy-limited escape to explain the radius valley.
- **Sideways:** the Maxwell–Boltzmann tail integral is [`stat-mech`](../../stat-mech/syllabus.md)'s, and it is the same calculation as the fraction of molecules exceeding an activation energy in chemical kinetics — an Arrhenius factor in different clothing. The transonic hydrodynamic outflow is mathematically the Parker solar-wind solution from [plasma-physics 5.3](../../plasma-physics/lessons/05-03-solar-wind-magnetospheres.md), applied to a planet instead of a star.
