# Planetary Science · Lesson 4.6: The terrestrial planets compared

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [2.5](02-05-volcanism-tectonics.md), [4.2](04-02-energy-balance-greenhouse.md), [4.3](04-03-atmospheric-escape.md), [4.4](04-04-atmospheric-circulation.md) · Unlocks: [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

Four rocky planets formed out of the same disk, from broadly the same material, at the same time. One is airless and cratered, one has ninety-two bars of carbon dioxide at 737 K, one has six millibars and is frozen, and one has an ocean. **This is the closest thing planetary science has to a controlled experiment**, and it is the empirical foundation for every claim about what makes a planet habitable.

The lesson is a synthesis rather than new machinery: everything needed has been built in Modules 2 through 4. What is new is putting the dials in order of importance — and the answer is not the one the popular account gives.

## The idea

**Three dials set the outcome, and they are not independent.**

*Dial 1: distance from the Sun.* This fixes the absorbed flux and therefore whether water can be liquid, and whether a runaway greenhouse is possible ([4.2](04-02-energy-balance-greenhouse.md)). It is the dial the habitable zone is built on, and it is the only one usually mentioned.

*Dial 2: mass.* Mass sets escape velocity, which decides which gases a planet can keep ([4.3](04-03-atmospheric-escape.md)); and it sets the surface-to-volume ratio, which decides how long the interior stays hot ([2.2](02-02-thermal-evolution-heat-transport.md)), hence how long volcanism resupplies the atmosphere and how long a dynamo runs.

*Dial 3: whether the carbon can be recycled.* An atmosphere is not a fixed inventory but a balance between outgassing and removal. **On Earth, carbon dioxide is removed by silicate weathering, buried as carbonate, subducted, and returned by volcanism** — a closed loop with a negative feedback in it ([4.5](04-05-photochemistry-hazes-evolution.md)). Break the loop and the thermostat stops.

**Now run the four planets through them.**

**Mercury** fails on mass and distance together. $v_{\text{esc}} = 4.25\ \mathrm{km\,s^{-1}}$ and a dayside at 700 K put every gas below the retention threshold, and its magnetopause barely clears the surface ([3.4](03-04-magnetospheres-solar-wind.md)) so the solar wind sputters directly onto the ground. It has a transient exosphere, continuously created and continuously lost. **It never had a chance.**

**Venus** fails on distance. It receives 1.9 times Earth's flux, and its early absorbed flux plausibly exceeded the $\sim310\ \mathrm{W\,m^{-2}}$ radiation limit. If it had an ocean it went into a runaway: the water evaporated entirely, was photodissociated at altitude, and the hydrogen escaped — **which its D/H of 150 times Earth's records** ([1.6](01-06-cosmochemistry-volatile-delivery.md)). Losing the water then broke dial 3 twice over. Without liquid water there is no silicate weathering, so the CO$_2$ that volcanoes emitted had nowhere to go and accumulated to 92 bar. And without water the lithosphere is strong and dry, so there is no plate tectonics ([2.5](02-05-volcanism-tectonics.md)) to subduct carbonate even if it formed. **Venus's carbon is all in its air because the loop is open at both ends.**

**Mars** fails on mass. At $0.107\,M_\oplus$ its escape velocity is 5.0 km/s, and in the young Sun's intense EUV field it lost its atmosphere hydrodynamically in the first few hundred million years — the xenon record dates the loss to within about 100 Myr ([4.5](04-05-photochemistry-hazes-evolution.md)). Its small size also killed its interior early: no dynamo after 4.1 Ga ([2.3](02-03-magnetic-fields-dynamo.md)), a 200 km stagnant lid, and volcanism dwindling to nothing ([2.5](02-05-volcanism-tectonics.md)). **So resupply stopped at the same time as removal continued**, and the thermostat had nothing to work with. What CO$_2$ remained was partly locked into carbonate with no tectonics to return it.

**Earth passes all three, and the third is the interesting one.** It is at the right distance and it is massive enough — but the decisive difference from Venus is not that Earth kept its water by luck. **It is that keeping the water enabled plate tectonics, which enabled the carbon cycle, which is why Earth's CO$_2$ is 400 ppm instead of 92 bar.** Earth has roughly the same total carbon inventory as Venus. Almost all of Earth's is in carbonate rock.

**That is the punchline of the module: Venus and Earth differ far less in what they are made of than in where their carbon is sitting.**

## The formal version

**The comparison table.**

| | Mercury | Venus | Earth | Mars |
|---|---|---|---|---|
| $a$ (AU) | 0.387 | 0.723 | 1.000 | 1.524 |
| $S$ (W m$^{-2}$) | 9082 | 2601 | 1361 | 586 |
| $M/M_\oplus$ | 0.055 | 0.815 | 1.000 | 0.107 |
| $v_{\text{esc}}$ (km s$^{-1}$) | 4.25 | 10.36 | 11.19 | 5.03 |
| $P_s$ | $10^{-14}$ bar | 92 bar | 1.013 bar | 6.1 mbar |
| composition | Na, O, H (exosphere) | 96.5% CO$_2$ | 78% N$_2$, 21% O$_2$ | 95% CO$_2$ |
| $A$ | 0.088 | 0.77 | 0.30 | 0.25 |
| $T_{\text{eq}}$ | 434 K | 227 K | 255 K | 210 K |
| $T_s$ | 100–700 K | 737 K | 288 K | 210 K |
| greenhouse | 0 | **510 K** | 33 K | ~0 K |
| tectonic style | stagnant, contracting | stagnant (episodic?) | **mobile lid** | stagnant |
| dynamo | weak, active | **none** | strong | none since 4.1 Ga |
| $\Omega^2a^2$ | $1.1\times10^{3}$ | 3.3 | $2.16\times10^{5}$ | $5.8\times10^{4}$ |
| circulation | none | one cell, superrotating | Hadley + eddies | Hadley, strongly seasonal |
| D/H vs Earth | — | $\times150$ | 1 | $\times5.5$ |

**The carbonate–silicate cycle, written out.** Weathering:

$$\mathrm{CaSiO_3} + \mathrm{CO_2} \longrightarrow \mathrm{CaCO_3} + \mathrm{SiO_2},$$

running on land, at a rate that increases with temperature, rainfall and $P_{\mathrm{CO_2}}$. Return, at subduction zones and volcanic arcs:

$$\mathrm{CaCO_3} + \mathrm{SiO_2} \longrightarrow \mathrm{CaSiO_3} + \mathrm{CO_2}.$$

*In words: rock eats carbon dioxide when the planet is warm, and volcanoes give it back at a rate set by the interior.* **The feedback is negative and its timescale is about 500,000 years**, which is why Earth's temperature has stayed within a few tens of kelvin for four billion years while the Sun brightened by 30 percent.

**The three requirements for the thermostat**, and which planet fails each:

| Requirement | Mercury | Venus | Earth | Mars |
|---|---|---|---|---|
| liquid water for weathering | no | **no** (lost) | yes | no (frozen) |
| a mechanism to bury carbonate | no | no | yes | partly |
| tectonic return of buried carbon | no | **no** | yes | **no** |

**Carbon inventories.** The comparison that makes the point:

| | Venus | Earth |
|---|---|---|
| CO$_2$ in atmosphere | $4.7\times10^{20}$ kg | $3.2\times10^{15}$ kg |
| CO$_2$ in carbonate rock | ~0 | $\sim10^{20}$ kg |
| **total** | $\sim5\times10^{20}$ kg | $\sim10^{20}$ kg |

**The totals agree to within a factor of a few; the atmospheric fractions differ by $10^{5}$.** Earth's carbon is in limestone. That is the entire difference.

**Ordering the dials by importance.** From the module:

1. **Distance** decides whether a runaway is possible at all. Non-negotiable, and it is what habitable-zone boundaries encode ([6.5](06-05-habitability-and-its-limits.md)).
2. **Mass** decides retention and interior longevity. Mars's failure is entirely here.
3. **Carbon recycling** decides the steady-state atmosphere given that the first two are passed — and it is the one that turns "could have liquid water" into "does, for four billion years".
4. **Magnetic field**, far down the list. Earth, Venus and Mars all lose ions at about $1\ \mathrm{kg\,s^{-1}}$ regardless ([3.4](03-04-magnetospheres-solar-wind.md)).

## Picture

![A plot of surface pressure in bar on a logarithmic vertical axis against surface temperature in kelvin. A shaded blue region bounded below by the water vapour-pressure curve and on the right by the critical point at 647 kelvin marks where liquid water is stable. Venus sits at 737 kelvin and 92 bar, far to the right of the critical point and outside the field. Earth sits at 288 kelvin and 1 bar, inside the field. Mars sits at 210 kelvin and 6 millibar, below and to the left of it. Two dashed open circles near 275 to 290 kelvin and 1 bar mark hypothetical early Venus and early Mars, each with a coral arrow leading away: one labelled runaway greenhouse curving up and right to modern Venus, and one labelled escape plus no recycling curving down and left to modern Mars. Notes record that Mercury lies far off the plot at ten to the minus fourteen bar with no atmosphere at all, and that Earth is the only planet inside the liquid-water field and stays there because plate tectonics recycles its carbon. A caption summarises that Venus was too close and lost its water to a runaway, Mars was too small and lost its air to space, Mercury never had either, and Earth alone kept a thermostat — which needs tectonics, which may itself need the water](assets/04-06-fig1.svg)

Both dashed circles are hypotheses, not measurements. What is measured is where each planet is now, and how far apart the three end states are.

## Worked examples

**Example 1 (mechanical — where is the carbon?).** Venus's atmosphere is $4.8\times10^{20}$ kg, 96.5 percent CO$_2$ by mass. Earth's carbonate rocks hold roughly $10^{20}$ kg of CO$_2$ equivalent. Compare, and compute what Earth's surface pressure would be if all of it were released.

Venus's atmospheric CO$_2$:

$$0.965\times4.8\times10^{20} = 4.6\times10^{20}\ \mathrm{kg}.$$

Earth's surface pressure from that much CO$_2$:

$$P_s = \frac{M g}{4\pi R^2} = \frac{10^{20}\times9.81}{4\pi(6.371\times10^{6})^2} = \frac{9.81\times10^{20}}{5.101\times10^{14}} = 1.92\times10^{6}\ \mathrm{Pa} = 19\ \mathrm{bar}.$$

And if Earth's carbonate inventory is at the higher end of estimates, several times $10^{20}$ kg, the answer approaches Venus's 92 bar.

**Earth is a planet with a Venus-like carbon inventory that happens to keep it as rock.** The difference is not composition — it is a chemical reaction that requires liquid water and a tectonic system that requires, on the best current account, the same water.

**Example 2 (why you'd care — could Venus have been habitable?).** Take early Venus with an Earth-like ocean at 4.2 Ga, when the Sun was 73 percent of its present brightness. Was it stable?

*Absorbed flux then.* $S_{\text{Venus}} = 2601\ \mathrm{W\,m^{-2}}$ today, so at $0.73\,L_\odot$:

$$S = 2601\times0.73 = 1899\ \mathrm{W\,m^{-2}}.$$

With an Earth-like albedo of 0.30:

$$\frac{S(1-A)}{4} = \frac{1899\times0.70}{4} = 332\ \mathrm{W\,m^{-2}}.$$

**Against a runaway limit of about 310 — over the line, but only just.**

*What that marginality means.* Two readings are defensible and both are held in the literature.

- **Venus never had an ocean.** It was over the limit from the moment it had a surface, so its water was in a steam atmosphere from the start, was photodissociated within a few hundred million years, and the hydrogen escaped. Venus was never habitable for a moment.
- **Venus was habitable for billions of years.** Raise the albedo to 0.45 — plausible if a slowly rotating planet builds a thick reflective cloud deck at its substellar point, which several three-dimensional climate models produce — and the absorbed flux falls to $1899\times0.55/4 = 261\ \mathrm{W\,m^{-2}}$, comfortably below the limit. On this view Venus had oceans and a temperate climate until the brightening Sun pushed it over, perhaps as recently as 0.7 Gyr ago, which would tie the runaway to the resurfacing event of [2.5](02-05-volcanism-tectonics.md).

**The two scenarios differ by one poorly known number — the albedo of a cloudy, slowly rotating planet — and they disagree about whether the nearest planet to Earth was habitable for three billion years.** That is a startling amount of leverage for a single parameter, and it is the reason the DAVINCI and VERITAS missions were selected: measuring Venus's D/H in detail, and its noble gases, constrains how much water it had and when it left.

**The transferable point for [6.5](06-05-habitability-and-its-limits.md) is uncomfortable.** If we cannot settle whether Venus — 40 million kilometres away, with two orbiters' worth of data — was habitable, confidence about an exoplanet at 40 light years placed inside a nominal habitable zone should be correspondingly low.

## Watch out

- **You might think Venus is hot because it is close to the Sun, but it absorbs 37 percent less energy per square metre than Earth.** Its temperature is entirely a greenhouse effect, and the greenhouse exists because its carbon has nowhere else to go.
- **You might think Mars lost its atmosphere because it lost its magnetic field, but Earth, Venus and Mars all lose ions at about the same rate today.** Mars's failure is a mass failure: low gravity, early hydrodynamic escape, and an interior that died young.
- **You might think Earth has less carbon than Venus, but the total inventories are comparable.** Ninety-nine point nine percent of Earth's is in carbonate rock.
- **You might think the habitable zone determines habitability, but it determines only whether a runaway is thermodynamically avoidable.** Whether a planet *stays* temperate for gigayears additionally requires a working thermostat, which requires tectonics, which may require the very water the thermostat protects.
- **You might think this comparison is settled history, but early Venus is genuinely open**, and hinges on cloud albedo — a parameter no model yet pins down.

## One-liner

> Venus and Earth have about the same carbon; the difference is that Earth's is in limestone, and it got there because Earth kept its water.

## Problems

**P1 (🟢)** Mercury has $v_{\text{esc}} = 4.25\ \mathrm{km\,s^{-1}}$ and a dayside exobase near 600 K. (a) Compute $v_{\text{th}}$ for Na (23 u) and for O (16 u). (b) Apply the retention criterion. (c) State what this implies about Mercury's sodium exosphere.

**P2 (🟡)** Earth's carbonate rocks hold $C$ kg of CO$_2$ equivalent. (a) Derive an expression for the surface pressure if all of it were released. (b) Evaluate for $C = 10^{20}$ and $C = 4\times10^{20}$ kg. (c) Compare with Venus's 92 bar and comment on the comparison of total inventories.

**P3 (🔴, optional)** A planet of $0.8\,M_\oplus$ and $0.93\,R_\oplus$ orbits a Sun-like star at 0.95 AU. (a) Compute $v_{\text{esc}}$ and $T_{\text{eq}}$ for $A = 0.30$. (b) Compute the absorbed flux and compare with the $310\ \mathrm{W\,m^{-2}}$ limit. (c) Using the three dials of this lesson, assess whether this planet is likely to be temperate over gigayears, and state which of the three you are least able to evaluate remotely and why.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_{\text{th}}(\mathrm{Na}) = \sqrt{\frac{2\times1.381\times10^{-23}\times600}{23\times1.661\times10^{-27}}} = \sqrt{\frac{1.657\times10^{-20}}{3.820\times10^{-26}}} = \sqrt{4.338\times10^{5}} = 659\ \mathrm{m\,s^{-1}}.$$

$$v_{\text{th}}(\mathrm{O}) = \sqrt{\frac{1.657\times10^{-20}}{16\times1.661\times10^{-27}}} = \sqrt{\frac{1.657\times10^{-20}}{2.658\times10^{-26}}} = \sqrt{6.234\times10^{5}} = 790\ \mathrm{m\,s^{-1}}.$$

(b) $$\frac{4250}{659} = 6.45\ (\mathrm{Na}), \qquad \frac{4250}{790} = 5.38\ (\mathrm{O}).$$

Sodium is marginally above the threshold of 6; oxygen is below it. **Both are near the boundary**, which for an exponential process means both are lost on geologically short timescales.

(c) Mercury's sodium exosphere cannot be a retained atmosphere — it must be **continuously created and continuously lost**. The sources are micrometeorite vaporization, photon-stimulated desorption, and solar-wind sputtering, which is efficient at Mercury because its magnetopause sits barely above the surface ([3.4](03-04-magnetospheres-solar-wind.md)). The observed sodium tail, streaming anti-sunward and brightening after solar activity, is exactly what a source-and-sink exosphere with no retention looks like.

**P2** (a) $$P_s = \frac{C\,g}{4\pi R^2}.$$

(b) $$4\pi R^2 = 4\pi(6.371\times10^{6})^2 = 5.101\times10^{14}\ \mathrm{m^2}.$$

$$C = 10^{20}: \quad P_s = \frac{10^{20}\times9.81}{5.101\times10^{14}} = 1.92\times10^{6}\ \mathrm{Pa} = 19\ \mathrm{bar}.$$

$$C = 4\times10^{20}: \quad P_s = 7.69\times10^{6}\ \mathrm{Pa} = 77\ \mathrm{bar}.$$

(c) Venus has 92 bar of CO$_2$ in its atmosphere. Earth, at the upper end of carbonate-inventory estimates, could produce 77 bar — **the same order of magnitude.**

The comparison is the module's central result and it deserves to be stated plainly: **these two planets accreted comparable amounts of carbon, and the difference in their surface conditions is a difference in where that carbon is stored, not in how much of it there is.** Earth's is in limestone and dolomite; Venus's is in the air. And the reason is a chemical reaction — silicate weathering — that requires liquid water, plus a tectonic system to bury the product, which Venus lacks.

Note this also shows what a poor guide bulk composition is to surface conditions. Two planets with the same inventory of the same volatile differ by 450 K at the surface.

**P3** (a) $$M = 0.8\times5.972\times10^{24} = 4.778\times10^{24}\ \mathrm{kg}, \qquad R = 0.93\times6.371\times10^{6} = 5.925\times10^{6}\ \mathrm{m}.$$

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}} = \sqrt{\frac{2\times6.674\times10^{-11}\times4.778\times10^{24}}{5.925\times10^{6}}} = \sqrt{\frac{6.378\times10^{14}}{5.925\times10^{6}}}.$$

$$= \sqrt{1.0765\times10^{8}} = 1.037\times10^{4}\ \mathrm{m\,s^{-1}} = 10.4\ \mathrm{km\,s^{-1}}.$$

$$S = \frac{1361}{(0.95)^2} = \frac{1361}{0.9025} = 1508\ \mathrm{W\,m^{-2}},$$
$$T_{\text{eq}} = \left[\frac{1508\times0.70}{2.268\times10^{-7}}\right]^{1/4} = \left[4.655\times10^{9}\right]^{1/4} = 261.2\ \mathrm{K}.$$

(b) $$\frac{S(1-A)}{4} = \frac{1508\times0.70}{4} = 264\ \mathrm{W\,m^{-2}}.$$

Against 310 — **below the limit by 15 percent**, so no runaway. Comfortable but not enormously so; a 17 percent brighter star, or an albedo below 0.18, would put it over.

(c) *Dial 1, distance:* **passes.** Absorbed flux is 264 against a limit of 310, and the equilibrium temperature is only 6 K below Earth's, so a modest greenhouse gives a temperate surface.

*Dial 2, mass:* **passes.** $v_{\text{esc}} = 10.4\ \mathrm{km\,s^{-1}}$ is 93 percent of Earth's, so retention of N$_2$, CO$_2$ and water vapour is secure. At $0.8\,M_\oplus$ the surface-to-volume ratio is 7 percent higher than Earth's, so the interior cools somewhat faster — a Mars-like early death is not a concern at this mass, but the planet's geological lifetime is shorter than Earth's, perhaps by a billion years or so.

*Dial 3, carbon recycling:* **cannot be evaluated**, and this is the honest answer.

That third dial is the one that is essentially invisible remotely, and it is arguably the most important. Assessing it would require knowing whether the planet has surface liquid water (not just whether water is thermodynamically stable), whether it has continents to weather, whether it has plate tectonics, and whether its interior is still outgassing — **none of which is measurable for a planet at interstellar distance with any technique now or soon available.** Transmission spectroscopy might detect CO$_2$ and water vapour ([6.4](06-04-exoplanet-atmospheres.md)), and in principle an atmosphere in chemical disequilibrium hints at something maintaining it, but distinguishing a regulated Earth from an unregulated Venus that happens to be at the right distance is beyond reach.

**So the assessment is: passes the two dials we can measure, and is unassessable on the one that decides the outcome over gigayears.** That is precisely the limitation [6.5](06-05-habitability-and-its-limits.md) argues the habitable-zone framework conceals.

</details>

## Flashback

**From Lesson 4.4 (Atmospheric circulation):** A planet has $\Omega = 1.2\times10^{-5}\ \mathrm{s^{-1}}$ and radius $5.5\times10^{6}$ m. (a) Compute $\Omega^2a^2$. (b) Compare with Earth's $2.16\times10^{5}$ and Venus's 3.27, and state the expected circulation regime. (c) Using $u(\phi) = \Omega a\sin^2\phi/\cos\phi$, compute the angular-momentum-conserving wind at 45° and comment on whether the Hadley cell is likely to reach that latitude.

<details>
<summary>Solution</summary>

(a) $$\Omega^2a^2 = (1.2\times10^{-5})^2\times(5.5\times10^{6})^2 = 1.44\times10^{-10}\times3.025\times10^{13} = 4356\ \mathrm{m^2\,s^{-2}}.$$

(b) About **50 times smaller than Earth's** and **1300 times larger than Venus's** — an intermediate case, but on a logarithmic scale distinctly nearer the slow-rotator end. Expect a **broad Hadley circulation reaching well past 45°**, weak mid-latitude eddy activity, a small equator-to-pole temperature contrast, and quite possibly some superrotation.

(c) $$\Omega a = 1.2\times10^{-5}\times5.5\times10^{6} = 66\ \mathrm{m\,s^{-1}},$$
$$u(45^\circ) = 66\times\frac{\sin^2 45}{\cos 45} = 66\times\frac{0.5}{0.7071} = 66\times0.7071 = 46.7\ \mathrm{m\,s^{-1}}.$$

Compare Earth, where the same calculation gives $328\ \mathrm{m\,s^{-1}}$ at 45° — a jet so strong it is violently unstable, which is why Earth's cell stops near 30°.

**At 47 m/s this planet's poleward flow is entirely benign**, comparable to Earth's ordinary jet-stream speeds and nowhere near the shear that triggers baroclinic breakdown. So yes, the Hadley cell reaches 45° easily and probably continues considerably further. The controlling quantity is $\Omega a$, and reducing it by a factor of seven reduces the wind at every latitude by the same factor — which is why slow rotation and small radius both widen the direct circulation.

</details>

## Connections

- **Backward:** this lesson is Module 4's synthesis and draws on all of it — [4.2](04-02-energy-balance-greenhouse.md) for the runaway, [4.3](04-03-atmospheric-escape.md) for Mars's loss, [4.4](04-04-atmospheric-circulation.md) for Venus's uniform temperature, [4.5](04-05-photochemistry-hazes-evolution.md) for the isotopic record — plus [2.5](02-05-volcanism-tectonics.md) for the tectonic requirement and [3.4](03-04-magnetospheres-solar-wind.md) for demoting the magnetic field.
- **Forward:** [6.5](06-05-habitability-and-its-limits.md) turns this comparison into a critique of the habitable-zone framework, and Example 2's albedo ambiguity is one of its central exhibits.
- **Sideways:** the carbonate–silicate cycle and Earth's own climate regulation belong to [`climate-science`](../../climate-science/syllabus.md), which owns them and which cites this course for the comparative planetology; [`geology`](../../geology/syllabus.md) owns the weathering reactions as field processes. Earth's atmosphere as a working system is [`atmospheric-science`](../../atmospheric-science/syllabus.md)'s.
