# Planetary Science · Lesson 4.5: Photochemistry, hazes and atmospheric evolution

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [1.6](01-06-cosmochemistry-volatile-delivery.md), [4.3](04-03-atmospheric-escape.md) · Unlocks: [4.6](04-06-terrestrial-planets-compared.md), [5.3](05-03-ocean-worlds.md), [6.4](06-04-exoplanet-atmospheres.md)

## Why this matters

An atmosphere is not a fixed mixture sitting in a jar. Ultraviolet photons break its molecules apart, the fragments recombine into things that were never there before, and some of the products are solids that fall out — permanently. **On timescales of tens of millions of years, sunlight rebuilds an atmosphere's composition.**

Two things make this worth a lesson rather than a footnote. First, the products change the climate: Titan's photochemical haze both warms its stratosphere and *cools* its surface, and hazes are now the leading explanation for why so many exoplanet transmission spectra are disappointingly flat ([6.4](06-04-exoplanet-atmospheres.md)). Second, photochemistry combined with escape leaves an isotopic record, and **that record is the only quantitative measurement we have of what an atmosphere used to be.**

## The idea

**Photolysis is destruction, and it is fast.** An ultraviolet photon carrying more energy than a molecular bond breaks it. Above roughly the 0.1 mbar level there is nothing to shield the gas, so every molecule with an accessible bond is eventually dissociated. On Titan, methane's lifetime against photolysis is a few tens of millions of years — **a thousandth of the age of the solar system.**

**The fragments do not go back.** Two methyl radicals combine into ethane; further reactions build acetylene, and with nitrogen atoms, hydrogen cyanide and nitriles. Chains grow into complex organic solids — **tholins** — which are heavy, condense into aerosol particles, and settle to the surface. Meanwhile the liberated hydrogen, being the lightest gas, escapes to space ([4.3](04-03-atmospheric-escape.md)).

**So the process is irreversible in a specific and important way: hydrogen leaves the planet and carbon is buried as solids.** The atmosphere is being *stripped of methane* on a 30-million-year clock. Titan has methane. **Therefore something is resupplying it**, and what that something is — cryovolcanic outgassing, destabilization of a clathrate reservoir, or a one-off recent release — is an open question with direct bearing on whether Titan's interior is active ([5.3](05-03-ocean-worlds.md)).

**Hazes do two opposite things to a climate, and it is worth keeping them straight.** A haze layer high in the atmosphere absorbs incoming sunlight. That *warms the stratosphere* — which is why Titan and Jupiter have temperature inversions and Mars does not ([4.1](04-01-atmospheric-structure.md)) — and simultaneously *shades the surface*, which cools it. **The second effect is the anti-greenhouse effect**, and on Titan it removes roughly 9 K against a greenhouse of about 21 K, leaving a net warming of about 12 K.

**Now the evolutionary record.** Escape is mass-selective: the light isotope leaves preferentially, so a reservoir that has lost mass is enriched in the heavy one. Measure the enrichment and, with an assumed fractionation factor, you recover the fraction lost. **Mars's atmospheric D/H is six times Earth's; its $^{15}$N/$^{14}$N is enriched 60 percent; its $^{38}$Ar/$^{36}$Ar is enriched too.** All three say the same thing: Mars has lost most of its atmosphere.

**Argon deserves special mention because it is the clean case.** Argon is chemically inert, so it cannot be sequestered in rocks or consumed by chemistry — the *only* thing that can change its isotope ratio is escape. **A noble-gas isotope ratio is therefore an escape measurement uncontaminated by geology**, which is why $^{38}$Ar/$^{36}$Ar and the xenon isotopes are the most trusted constraints on atmospheric loss.

**Finally, the faint young Sun.** The Sun was 30 percent fainter 4.5 billion years ago ([astrophysics 2.5](../../astrophysics/lessons/02-05-main-sequence.md)). With today's atmosphere, Earth's surface would have been below freezing until about 2 billion years ago. **The rocks say there was liquid water at 4.3 Ga** — and something has to give.

## The formal version

**Photolysis rate.** The dissociation rate per molecule at altitude $z$ is

$$J(z) = \int \sigma(\lambda)\,\phi(\lambda)\,F(\lambda,z)\,d\lambda,$$

with $\sigma$ the absorption cross-section, $\phi$ the quantum yield, and $F$ the local photon flux attenuated by everything above. *In words: a molecule is destroyed at a rate set by how strongly it absorbs and how many photons reach it.* Because $F$ is attenuated exponentially, photolysis is concentrated in a layer near where the overlying optical depth is 1.

**Chemical lifetime.** For a species with column $N$ (molecules m$^{-2}$) destroyed at column rate $\Phi$:

$$\tau = \frac{N}{\Phi}.$$

**Titan's methane, worked through.** The atmospheric column mass is $P_s/g = 1.47\times10^{5}/1.35 = 1.09\times10^{5}\ \mathrm{kg\,m^{-2}}$. With a 5 percent methane mole fraction and $\mu = 28.6$, the methane mass fraction is $0.05\times16.04/28.6 = 0.028$, giving a methane column of $3050\ \mathrm{kg\,m^{-2}}$. At a destruction rate of $10^{14}$ molecules m$^{-2}$ s$^{-1}$:

$$\Phi_m = 10^{14}\times16.04\times1.661\times10^{-27} = 2.66\times10^{-12}\ \mathrm{kg\,m^{-2}\,s^{-1}},$$
$$\tau = \frac{3050}{2.66\times10^{-12}} = 1.15\times10^{15}\ \mathrm{s} = 36\ \mathrm{Myr}.$$

Published estimates range from about 10 to 100 Myr depending on the assumed rate; **the conclusion is insensitive to that factor of a few, because any value is a tiny fraction of 4.5 Gyr.**

**Titan's chemical cascade.**

$$\mathrm{CH_4} + h\nu \to \mathrm{CH_3} + \mathrm{H}, \qquad \mathrm{N_2} + e^- \to 2\mathrm{N},$$
$$2\,\mathrm{CH_3} \to \mathrm{C_2H_6}, \qquad \mathrm{CH_3} + \mathrm{N} \to \mathrm{HCN} + 2\mathrm{H},$$
$$\text{polymerization} \to \text{tholins (solid)} \to \text{haze} \to \text{surface}.$$

Meanwhile $\mathrm{H}$ and $\mathrm{H_2}$ escape. **Net: carbon and nitrogen move from the atmosphere to the surface; hydrogen leaves the moon.**

**The anti-greenhouse effect.** For a haze layer of visible optical depth $\tau_v$ that is transparent in the infrared, the surface receives only $e^{-\tau_v}$ of the sunlight while still radiating freely, so

$$T_s^{\text{(anti)}} \approx T_{\text{eq}}\,e^{-\tau_v/4}.$$

*In words: an absorbing haze aloft is a parasol.* Titan's competing effects:

| Effect | Mechanism | $\Delta T$ |
|---|---|---|
| greenhouse | N$_2$–N$_2$, N$_2$–CH$_4$, N$_2$–H$_2$ collision-induced absorption | $+21$ K |
| anti-greenhouse | haze absorbs sunlight above the surface | $-9$ K |
| **net** | | $+12$ K |

**Isotopic fractionation as a record.** With Rayleigh fractionation $R/R_0 = f^{\alpha-1}$ ([4.3](04-03-atmospheric-escape.md)):

| Species pair | Body | Enrichment vs. reference | Implication |
|---|---|---|---|
| D/H | Mars | $\times5.5$ vs Earth | most water lost |
| D/H | Venus | $\times150$ vs Earth | an ocean lost |
| $^{15}$N/$^{14}$N | Mars | $+60\%$ | large N$_2$ loss |
| $^{38}$Ar/$^{36}$Ar | Mars | $+30\%$ | **loss, and only loss** |
| $^{129}$Xe excess | Earth, Mars | — | early, rapid loss within $\sim100$ Myr |

**The xenon result is the sharpest.** $^{129}$Xe is the decay product of extinct $^{129}$I ($t_{1/2} = 15.7$ Myr, [1.5](01-05-meteorites-isotopic-clocks.md)). An atmosphere that lost its early xenon and then retained the $^{129}$Xe produced afterward carries a distinctive excess — and its size dates the loss to the first hundred million years. **Atmospheric escape was an early catastrophe, not a slow bleed.**

**The faint young Sun.** Standard solar models give $L(t) \approx L_0\left[1 + 0.4(1 - t/t_0)\right]^{-1}$, i.e. about 70 percent of today's at $t=0$. Then

$$T_{\text{eq}}(0) = 254.6\times(0.70)^{1/4} = 254.6\times0.9147 = 232.9\ \mathrm{K},$$

**21.7 K colder.** With today's 33 K greenhouse the surface would be 266 K — 7 degrees below freezing — and it would stay below 273 K until roughly 2 Gyr after formation.

**The resolutions, all of which are partly true.** A stronger greenhouse (much more CO$_2$; probably methane, which was abundant before oxygen); a lower albedo (less continental area, and fewer cloud condensation nuclei in a world without land plants or marine biology); and the **carbonate–silicate thermostat**, in which silicate weathering rates rise with temperature and CO$_2$, so a cooling planet weathers less, CO$_2$ accumulates, and the greenhouse strengthens automatically. That negative feedback, operating on a 500,000-year timescale, is why the problem is solvable at all — Earth's CO$_2$ level was not a coincidence but a regulated quantity ([`climate-science`](../../climate-science/syllabus.md) owns the mechanism).

## Picture

![Left, a vertical cascade of five boxes showing Titan's photochemistry. The top box is nitrogen plus methane at 1.5 bar with 5 percent methane. An arrow leads to ultraviolet light and magnetospheric electrons breaking both molecules apart, then to radicals including methyl, methylene, atomic nitrogen and hydrogen, then to ethane, acetylene, hydrogen cyanide and other nitriles, then to tholins, complex organic solids forming the orange haze which rain out. Side notes mark that molecular hydrogen escapes at the top and that nothing returns the methane, so at the measured destruction rate the atmosphere runs dry in about 30 million years and there must be a source. Right, a plot of temperature against time since Earth formed, in billions of years. A blue curve shows the equilibrium temperature rising from 233 to 255 kelvin as the Sun brightens, and a coral curve 33 kelvin above it shows the surface temperature with today's greenhouse, rising from 266 to 288. A dashed line marks 273 kelvin where water freezes, and the first two billion years are shaded and labelled frozen. Notes explain that the rocks show liquid water at 4.3 billion years ago, so the early greenhouse must have been stronger — more carbon dioxide, probably methane, and a lower albedo — and that the carbonate-silicate thermostat turned it down as the Sun brightened](assets/04-05-fig1.svg)

Two faces of the same subject: chemistry that runs one way and never comes back, and a climate record that has to be inferred from what the chemistry left behind.

## Worked examples

**Example 1 (mechanical — how long does Titan's methane last?).** Titan's surface pressure is 1.47 bar, $g = 1.35\ \mathrm{m\,s^{-2}}$, methane mole fraction 5 percent, $\mu = 28.6$. Methane is destroyed at $10^{14}$ molecules m$^{-2}$ s$^{-1}$.

Column mass of the whole atmosphere:

$$\frac{P_s}{g} = \frac{1.47\times10^{5}}{1.35} = 1.089\times10^{5}\ \mathrm{kg\,m^{-2}}.$$

Methane mass fraction from mole fraction:

$$f_m = 0.05\times\frac{16.04}{28.6} = 0.0280, \qquad N_{\mathrm{CH_4}} = 0.0280\times1.089\times10^{5} = 3050\ \mathrm{kg\,m^{-2}}.$$

Destruction in mass units:

$$\Phi = 10^{14}\times16.04\times1.661\times10^{-27} = 2.66\times10^{-12}\ \mathrm{kg\,m^{-2}\,s^{-1}}.$$

$$\tau = \frac{3050}{2.66\times10^{-12}} = 1.15\times10^{15}\ \mathrm{s} = \frac{1.15\times10^{15}}{3.156\times10^{7}} = 3.6\times10^{7}\ \mathrm{yr}.$$

**36 million years — 0.8 percent of the age of the solar system.**

The inference is unavoidable and does not depend on the precision of any input: **Titan's methane is not primordial.** It is either being resupplied, or we are observing Titan during an unusual and recent episode. Both possibilities are live. Cassini found no unambiguous active cryovolcano, but Titan's $^{40}$Ar (the decay product of crustal $^{40}$K) shows the interior *has* outgassed, and its $^{12}$C/$^{13}$C ratio is close to primordial rather than heavily fractionated — which is what you would expect if the current methane were recently supplied rather than the residue of a long-depleting reservoir.

**Example 2 (why you'd care — inverting Mars's nitrogen).** Mars's atmospheric $^{15}$N/$^{14}$N is enriched by 60 percent over the primordial value. Using Rayleigh fractionation with $\alpha = 0.75$, what fraction of the nitrogen remains, and what does that imply?

$$\frac{R}{R_0} = 1.60 = f^{\alpha-1} = f^{-0.25},$$
$$f^{-0.25} = 1.60 \;\Rightarrow\; -0.25\ln f = \ln 1.60 = 0.4700 \;\Rightarrow\; \ln f = -1.880, \qquad f = 0.153.$$

**About 15 percent of the nitrogen remains, so 85 percent has been lost.**

Mars's present N$_2$ partial pressure is about 0.17 mbar, so the initial inventory was $0.17/0.153 = 1.1$ mbar. If nitrogen was in the same proportion to CO$_2$ as it is today (about 2.8 percent), the initial CO$_2$ was around 40 mbar — **still far short of the roughly 1 bar needed to keep early Mars warm.**

That shortfall is the real result, and it is worth understanding why the calculation understates the loss rather than treating the number as an answer. Three reasons:

- **The fractionation factor is not constant.** During early hydrodynamic escape the outflow is nearly unfractionating ($\alpha\to1$), so a great deal can be lost while barely moving the isotope ratio. All such loss is invisible to this method.
- **Impact erosion does not fractionate at all.** Blowing off a chunk of atmosphere removes both isotopes equally.
- **Resupply resets the clock.** Volcanic outgassing adds unfractionated nitrogen from the interior, diluting the enrichment, so reaching today's ratio requires losing more than the closed-system calculation implies.

**All three push in the same direction: the true loss exceeds 85 percent, probably by a lot.** This is exactly why the argon isotopes matter — argon has no interior resupply of $^{36}$Ar and no chemistry, so it constrains the loss more cleanly — and why the xenon record, which dates the loss to the first 100 Myr, is the piece that ties it together. **Mars did not slowly leak away; it was stripped early, while the Sun was young and violent.**

## Watch out

- **You might think an atmosphere's composition is set by outgassing, but photochemistry rewrites it on timescales far shorter than geological ones.** Titan's methane turns over a hundred times per gigayear.
- **You might think haze warms a planet, but it does both.** It warms the stratosphere by absorbing sunlight aloft and cools the surface by shading it. Which dominates depends on whether the particles absorb more in the visible or the infrared, and for Titan's tholins the net is a 9 K *cooling* of the surface.
- **You might think an isotopic enrichment measures the fraction lost, but it measures the product of loss and fractionation efficiency** — and the efficiency depends on the escape mechanism, which changed over time. Unfractionating channels (hydrodynamic blow-off, impact erosion) are invisible to the method, so every such estimate is a lower bound on the loss.
- **You might think the faint young Sun problem is solved, but the resolutions are still argued about.** The CO$_2$ levels required exceed what some palaeosol proxies allow; the methane solution needs a large biological or abiotic source; the low-albedo solution needs assumptions about early clouds. The *thermostat* is well established; the specific mixture that did the warming is not.

## One-liner

> Sunlight takes an atmosphere apart faster than geology puts it together, and the isotopes left behind are the only record of what used to be there.

## Problems

**P1 (🟢)** A moon has surface pressure 0.8 bar, $g = 1.8\ \mathrm{m\,s^{-2}}$, and a trace gas at mass fraction $0.02$, destroyed at $\Phi = 5\times10^{-13}\ \mathrm{kg\,m^{-2}\,s^{-1}}$. (a) Compute the atmospheric column mass. (b) Compute the trace gas column. (c) Compute its chemical lifetime in Myr and state what follows if the moon is 4.5 Gyr old.

**P2 (🟡)** A haze has visible optical depth $\tau_v = 1.5$ and is transparent in the infrared. The body's equilibrium temperature without haze would be 90 K. (a) Compute the surface temperature from the anti-greenhouse formula $T_s = T_{\text{eq}}e^{-\tau_v/4}$. (b) A greenhouse of $+25$ K acts as well; compute the net surface temperature. (c) State what would happen to the surface temperature if the haze were removed, and comment.

**P3 (🔴, optional)** Earth's $T_{\text{eq}}$ today is 254.6 K and its greenhouse is 33 K. The Sun's luminosity has grown as $L(t) = L_0[0.70 + 0.30(t/4.6)]$ with $t$ in Gyr. (a) Compute $T_{\text{eq}}$ at $t = 0$ and $t = 2$. (b) Find the greenhouse warming needed at $t = 0$ to hold the surface at exactly 288 K, and express it as a multiple of today's. (c) The carbonate–silicate thermostat regulates CO$_2$. Explain in three sentences how it produces the required extra warming automatically, and name one observation that tests it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{P_s}{g} = \frac{0.8\times10^{5}}{1.8} = 4.44\times10^{4}\ \mathrm{kg\,m^{-2}}.$$

(b) $$N = 0.02\times4.44\times10^{4} = 889\ \mathrm{kg\,m^{-2}}.$$

(c) $$\tau = \frac{889}{5\times10^{-13}} = 1.778\times10^{15}\ \mathrm{s} = \frac{1.778\times10^{15}}{3.156\times10^{7}} = 5.63\times10^{7}\ \mathrm{yr} = 56\ \mathrm{Myr}.$$

Against an age of 4.5 Gyr, the gas would have been destroyed **80 times over**. It follows that the gas is not primordial: either it is being resupplied continuously from the interior or the surface, or we are observing a transient episode. **The same argument as Titan's methane**, and it is one of the more powerful pieces of reasoning available from a single composition measurement — a short chemical lifetime plus present-day abundance implies an active source, with no other information needed.

**P2** (a) $$T_s = 90\,e^{-1.5/4} = 90\,e^{-0.375} = 90\times0.6873 = 61.9\ \mathrm{K}.$$

(b) $$61.9 + 25 = 86.9\ \mathrm{K}.$$

Below the no-haze equilibrium temperature of 90 K, even with a 25 K greenhouse — the parasol wins.

(c) Removing the haze eliminates the $-28.1$ K anti-greenhouse while leaving the $+25$ K greenhouse, giving

$$T_s = 90 + 25 = 115\ \mathrm{K},$$

a warming of **28 K**.

The comment worth making is that this is a strong positive feedback in the wrong direction for stability. On a body whose haze is *made* of photochemical products of a condensable gas, warming the surface increases that gas's vapour pressure, which feeds the photochemistry, which thickens the haze, which cools the surface again — a negative feedback that stabilizes the climate. But run it the other way: if the methane supply were cut off, the haze would thin over a few tens of millions of years, the surface would warm by tens of kelvin, and the remaining surface volatiles would evaporate. **Titan's climate is coupled to its chemistry in a way Earth's is not**, and the same coupling is now taken seriously for hazy exoplanets, where it can shift an inferred surface temperature by more than the entire greenhouse.

**P3** (a) $$L(0)/L_0 = 0.70: \quad T_{\text{eq}} = 254.6\times(0.70)^{1/4} = 254.6\times0.9147 = 232.9\ \mathrm{K}.$$

$$L(2)/L_0 = 0.70 + 0.30\times\frac{2}{4.6} = 0.70+0.1304 = 0.8304: \quad T_{\text{eq}} = 254.6\times(0.8304)^{1/4} = 254.6\times0.9546 = 243.0\ \mathrm{K}.$$

(b) To hold $T_s = 288$ K at $t=0$:

$$\Delta T_{\text{needed}} = 288 - 232.9 = 55.1\ \mathrm{K}, \qquad \frac{55.1}{33} = 1.67.$$

**About 1.7 times today's greenhouse warming.** In optical-depth terms, from $T_s^4 = T_{\text{eq}}^4(1+3\tau/4)$:

$$\left(\frac{288}{232.9}\right)^4 = (1.2366)^4 = 2.338 = 1+\frac{3\tau}{4}, \qquad \tau = 1.78,$$

against today's 0.85 — roughly **twice the infrared optical depth**, which for CO$_2$ alone (whose forcing goes as the logarithm of concentration) would need on the order of a hundred times the present level, or a mixture including methane.

(c) The thermostat works through the temperature dependence of silicate weathering. **Atmospheric CO$_2$ dissolves in rainwater and reacts with silicate rock, and the reaction rate rises steeply with temperature and with rainfall, so a warm planet strips CO$_2$ from its air quickly and a cold one barely at all.** Volcanic outgassing meanwhile returns CO$_2$ at a rate set by the interior, essentially independent of surface temperature, so if the planet cools the sink shuts down while the source keeps running and CO$_2$ accumulates until the greenhouse restores the temperature. **On a faint young Sun this is exactly what is required: a colder planet automatically builds a thicker CO$_2$ atmosphere, and it is drawn down again as the Sun brightens** — which is why Earth's CO$_2$ has fallen by orders of magnitude over its history while its surface temperature has stayed within a few tens of kelvin.

The observation that tests it is the **palaeosol and weathering-proxy record of atmospheric CO$_2$**, which should show levels declining monotonically over geological time roughly as the Sun brightens. It broadly does — Archaean estimates are far above modern values — but it is also where the tension lies: several proxies place Archaean CO$_2$ *below* what is needed for 288 K, which is why methane and albedo are invoked alongside. A second, sharper test is the existence of the Snowball Earth episodes and, crucially, their *termination*: a globally ice-covered Earth shuts off weathering entirely, so volcanic CO$_2$ accumulates unchecked until the greenhouse melts the ice — and the cap carbonates deposited immediately afterward are the predicted signature of that CO$_2$ being drawn back down. ([`climate-science`](../../climate-science/syllabus.md) owns this in detail.)

</details>

## Flashback

**From Lesson 4.3 (Atmospheric escape):** A body has $v_{\text{esc}} = 3.6\ \mathrm{km\,s^{-1}}$ and an exobase at 250 K. (a) Compute $v_{\text{th}}$ for H$_2$ ($m = 2.016$ u) and N$_2$ ($28.014$ u). (b) Apply the retention criterion $v_{\text{esc}}/v_{\text{th}} > 6$. (c) State what this implies for a photochemical cascade that liberates hydrogen from methane on this body.

<details>
<summary>Solution</summary>

(a) $$v_{\text{th}}(\mathrm{H_2}) = \sqrt{\frac{2\times1.381\times10^{-23}\times250}{2.016\times1.661\times10^{-27}}} = \sqrt{\frac{6.905\times10^{-21}}{3.348\times10^{-27}}} = \sqrt{2.062\times10^{6}} = 1436\ \mathrm{m\,s^{-1}}.$$

$$v_{\text{th}}(\mathrm{N_2}) = \sqrt{\frac{6.905\times10^{-21}}{4.653\times10^{-26}}} = \sqrt{1.484\times10^{5}} = 385\ \mathrm{m\,s^{-1}}.$$

(b) $$\frac{3600}{1436} = 2.51\ (\mathrm{H_2}) \quad\text{— below 6, lost.}$$
$$\frac{3600}{385} = 9.35\ (\mathrm{N_2}) \quad\text{— above 6, retained.}$$

(c) This is precisely the configuration that makes the photochemical cascade **irreversible**. Methane is broken up, and the hydrogen it liberates has $v_{\text{esc}}/v_{\text{th}} = 2.5$ — well into the escape regime, so it leaves the body permanently. The nitrogen and the heavy carbon-bearing products stay.

**Nothing can put the methane back**, because the hydrogen needed to reconstitute CH$_4$ is no longer on the moon. The carbon accumulates at the surface as tholins and ethane, and the atmosphere is progressively stripped of its methane on the chemical timescale computed in this lesson.

That combination — a light escaping product and a heavy retained one — is exactly what makes photochemistry a one-way process on Titan and on any small, cold, methane-bearing body, and it is why a present-day methane abundance is evidence of a present-day source.

</details>

## Connections

- **Backward:** [4.3](04-03-atmospheric-escape.md) supplied the escape physics that makes the cascade irreversible and the Rayleigh fractionation that records it; [1.6](01-06-cosmochemistry-volatile-delivery.md) supplied the D/H reservoirs against which planetary enrichments are measured.
- **Forward:** [4.6](04-06-terrestrial-planets-compared.md) assembles the escape and isotopic evidence into a comparative history; [5.3](05-03-ocean-worlds.md) asks what Titan's methane source implies about its interior; [6.4](06-04-exoplanet-atmospheres.md) meets hazes again as the leading explanation for flat transmission spectra.
- **Sideways:** the faint young Sun problem and the carbonate–silicate thermostat belong to [`climate-science`](../../climate-science/syllabus.md), and [climate-science 6.4](../../climate-science/lessons/06-04-deep-time-slow-thermostat.md) develops the deep-time version and cites this course for the comparative side. Photochemical kinetics is [`physical-chemistry`](../../physical-chemistry/syllabus.md)'s, ozone chemistry is [`atmospheric-science`](../../atmospheric-science/syllabus.md)'s, and the solar brightening comes from [astrophysics 2.5](../../astrophysics/lessons/02-05-main-sequence.md).
