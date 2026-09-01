# Planetary Science · Lesson 1.6: Cosmochemistry — reservoirs and volatile delivery

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [1.2](01-02-condensation-frost-line.md), [1.4](01-04-giant-planets-migration.md), [1.5](01-05-meteorites-isotopic-clocks.md) · Unlocks: [2.2](02-02-thermal-evolution-heat-transport.md), [4.5](04-05-photochemistry-hazes-evolution.md), [5.3](05-03-ocean-worlds.md)

## Why this matters

Earth formed at 1 AU, well inside the frost line, out of material that was too hot for water ice to be stable. Earth has an ocean. Those two sentences are in direct conflict, and resolving them is the single most consequential problem in cosmochemistry — not least because the answer determines how common wet planets are, which is most of what you want to know about habitability ([6.5](06-05-habitability-and-its-limits.md)).

The tool that cracks it is the same one that dated the solar system, used differently. In [1.5](01-05-meteorites-isotopic-clocks.md) isotope ratios told you *when*. Here they tell you *where from*. Some isotopic ratios vary systematically with heliocentric distance and are not reset by melting, evaporation or impact — so a planet's isotopes are a passport stamp from wherever its material was assembled.

## The idea

**An isotopic ratio makes a good tracer when nothing in planet formation can change it.** Chemical processes barely distinguish isotopes, so a body's ratio of, say, $^{54}$Cr to $^{52}$Cr is inherited from its raw material and preserved through melting, differentiation and four billion years of geology. If two reservoirs in the disk had different ratios, everything built from each carries the label permanently.

**And they did differ, in two distinct ways.**

*Nucleosynthetic anomalies.* The dust that made the solar system came from many different stars, and it was not perfectly mixed. Grains from different stellar sources carry different isotope ratios of chromium, titanium, molybdenum and nickel. Sort every meteorite by these ratios and something startling appears: **they fall into two clusters with almost nothing in between.** Not a gradient — two groups. They are called NC (non-carbonaceous, the inner group) and CC (carbonaceous, the outer group), and the cleanest explanation is that Jupiter's growing core opened a gap in the disk that physically separated inner from outer material for a few million years.

*Mass-dependent fractionation.* Hydrogen is the extreme case, because deuterium is twice the mass of ordinary hydrogen — a 100 percent mass difference, where for chromium it is 4 percent. That makes D/H sensitive to temperature: chemical reactions in very cold gas concentrate deuterium into molecules, so **ices that formed colder are deuterium-rich, and D/H therefore rises with distance from the Sun.** The protosolar gas has $\mathrm{D/H} = 2.1\times10^{-5}$; Earth's ocean is $1.56\times10^{-4}$, seven times higher; some comets are twenty-five times higher.

**Now run the argument on Earth's water.** Earth's D/H does not match the nebular gas — so the ocean is not captured hydrogen. It does not match the Oort-cloud comets, which are two to three times too deuterium-rich. **It matches carbonaceous chondrites almost exactly.** The conclusion, which was for two decades presented as settled, is that Earth's water arrived in chondritic bodies from the outer asteroid belt — CC material delivered inward, plausibly scattered by Jupiter's growth and migration ([1.4](01-04-giant-planets-migration.md)).

**And then the argument got weaker, in an instructive way.** The comet data used to be a tight cluster around $3\times10^{-4}$; then spacecraft and better telescopes measured more comets and the cluster fell apart. Comet Hartley 2 came in at $1.6\times10^{-4}$ — indistinguishable from Earth. Comet 67P came in at $5.3\times10^{-4}$, three times higher. **Comets from the same dynamical family now span a factor of three,** which means "comets have high D/H" was never a property of comets but an artefact of a small sample. A mixture of sources can reproduce Earth's value in many ways, and D/H alone no longer discriminates between them. The chromium and titanium anomalies, which do not suffer from this spread, now carry more of the argument than D/H does.

## The formal version

**Notation for small isotopic differences.** Anomalies are parts per ten thousand relative to a terrestrial standard:

$$\varepsilon^{54}\mathrm{Cr} = \left[\frac{(^{54}\mathrm{Cr}/^{52}\mathrm{Cr})_{\text{sample}}}{(^{54}\mathrm{Cr}/^{52}\mathrm{Cr})_{\text{standard}}} - 1\right]\times10^{4}.$$

*In words: how many parts in ten thousand this sample differs from Earth.* The related $\delta$ notation is parts per thousand and $\mu$ is parts per million; check which one a source uses before comparing numbers.

**The NC/CC dichotomy.** Plotting $\varepsilon^{54}$Cr against $\varepsilon^{50}$Ti separates all meteorites into two fields:

| Group | $\varepsilon^{54}$Cr | Includes | Where it formed |
|---|---|---|---|
| NC | $-0.7$ to $+0.9$ | ordinary and enstatite chondrites, most achondrites, Earth, Mars, the Moon | inside Jupiter |
| CC | $+0.9$ to $+1.6$ | carbonaceous chondrites, some irons | outside Jupiter |

*In words: two reservoirs, kept apart.* The separation persisted from about 1 Myr to about 3–4 Myr after CAI formation, dated by Hf–W ages of iron meteorites from both groups. **That is a direct isotopic measurement of Jupiter's core existing early**, and it is currently the strongest constraint on giant-planet formation timing — sharper than anything from dynamics.

**D/H as a thermometer of origin.** The relevant chemistry is ion–molecule exchange in cold gas, e.g.

$$\mathrm{H_3^+} + \mathrm{HD} \rightleftharpoons \mathrm{H_2D^+} + \mathrm{H_2} + \Delta E,$$

exothermic to the right by an energy corresponding to about 230 K. Below that temperature the forward reaction dominates and deuterium is concentrated into heavier molecules; above it, the reverse runs freely and the enrichment is erased. So **material processed warm carries protosolar D/H, and material that condensed cold and stayed cold is enriched** — hence the outward gradient.

| Reservoir | D/H | Interpretation |
|---|---|---|
| protosolar $\mathrm{H_2}$ | $2.1\times10^{-5}$ | the nebula's starting value |
| Jupiter's atmosphere | $2.6\times10^{-5}$ | captured nebular gas, barely altered |
| carbonaceous chondrites | $\sim1.4\times10^{-4}$ | outer asteroid belt |
| **Earth's ocean (VSMOW)** | $1.56\times10^{-4}$ | the number to be explained |
| comet Hartley 2 | $1.6\times10^{-4}$ | Jupiter-family — matches Earth |
| Enceladus plume | $\sim2.9\times10^{-4}$ | Saturn system |
| comet Halley | $3.2\times10^{-4}$ | Oort cloud |
| comet 67P | $5.3\times10^{-4}$ | Jupiter-family — three times Hartley 2 |
| Mars atmosphere today | $\sim9\times10^{-4}$ | **not primordial** — enriched by escape ([4.3](04-03-atmospheric-escape.md)) |

**The Mars row is a warning label.** Its enormous D/H does not mean Mars accreted extremely cold material. It means Mars lost most of its water to space, and because ordinary hydrogen escapes more easily than deuterium, what remained got progressively enriched. **A measured D/H is provenance plus subsequent escape**, and separating the two requires an independent handle on how much was lost. [4.5](04-05-photochemistry-hazes-evolution.md) does exactly that in reverse: it uses the enrichment to *measure* the loss.

**Volatile budgets and the late veneer.** Earth's water is roughly $2\times10^{-4}$ of its mass counting the oceans, and perhaps ten times that including the mantle — still under one percent. Against this, a separate constraint: Earth's mantle contains highly siderophile elements (gold, platinum, iridium) at about 0.5 percent of chondritic levels, which is far *more* than core formation should have left behind. The standard reading is a **late veneer**: roughly $0.5\%$ of an Earth mass of chondritic material added after the core had finished forming, which is also a plausible carrier for much of the water.

## Picture

![A horizontal bar chart on a logarithmic axis of the deuterium-to-hydrogen ratio in units of ten to the minus six, running from 20 to 1000. Bars from top to bottom are protosolar hydrogen at 21, Jupiter's atmosphere at 26, carbonaceous chondrites at 140, Earth's ocean at 156, comet Hartley 2 at 161, comet Halley at 316, the Enceladus plume at 290, comet 67P at 530, and today's Mars atmosphere at 900. A vertical dashed line at Earth's value runs down the chart. The two gas reservoirs are drawn in blue and the rock, comet and Mars values in coral, and a note reads that deuterium enrichment rises outward from the Sun, so D over H is a provenance tracer](assets/01-06-fig1.svg)

Read it twice. First: the chondrite bar and the Earth bar are nearly identical, which is the classic argument. Second: the four comet-and-moon bars span a factor of three among themselves, which is why that argument no longer settles the question.

## Worked examples

**Example 1 (mechanical — mixing two reservoirs).** Earth's water has $\mathrm{D/H} = 1.56\times10^{-4}$. Suppose it is a mixture of carbonaceous-chondrite water at $1.4\times10^{-4}$ and Oort-cloud cometary water at $3.2\times10^{-4}$. What fraction is cometary?

D/H mixes linearly in hydrogen atoms, so with cometary fraction $f$:

$$1.56 = 3.2f + 1.4(1-f) \quad\text{(in units of }10^{-4}\text{)},$$
$$1.56 - 1.40 = f(3.2 - 1.4) = 1.8f, \qquad f = \frac{0.16}{1.8} = 0.089.$$

**About 9 percent cometary, 91 percent chondritic.** Note the leverage: the answer is a small difference (0.16) divided by a large one (1.8), so a 5 percent error in Earth's own value moves $f$ by nearly a factor of two. This is a poorly conditioned inversion, and any published cometary fraction should be read with that in mind.

**Example 2 (why you'd care — how much material delivered the oceans?).** Earth's oceans are $1.4\times10^{21}$ kg. Carbonaceous chondrites of type CI contain about 10 percent water by mass. How much chondritic material does the ocean require, as a fraction of Earth's mass, and how does that compare with the late veneer?

$$M_{\text{deliver}} = \frac{1.4\times10^{21}}{0.10} = 1.4\times10^{22}\ \mathrm{kg},$$
$$\frac{M_{\text{deliver}}}{M_\oplus} = \frac{1.4\times10^{22}}{5.97\times10^{24}} = 2.3\times10^{-3} = 0.23\%.$$

The late veneer inferred independently from highly siderophile elements is about $0.5\%$ of an Earth mass. **The water requirement is about half the veneer mass** — so a late veneer of chondritic composition delivers the oceans comfortably, with room to spare, and the two constraints agree without being tuned to each other.

Two caveats keep this from being a proof. First, if the mantle holds several oceans' worth of water — estimates run from one to ten — the requirement rises to 1–2 percent of an Earth mass and *exceeds* the veneer, forcing water to have been present during main accretion rather than added at the end. Second, enstatite chondrites, which match Earth's isotopes best of all the NC groups, are nominally dry but do contain enough hydrogen in trace phases to supply several oceans if Earth was built mostly from them. **So there are now two live pictures — late delivery from outside, versus water inherited from the start — and the isotopic evidence is genuinely compatible with both.** That is the honest state of the field.

## Watch out

- **You might think a measured D/H tells you where a body's water came from, but it tells you where the water came from *modified by everything that happened since*.** Mars's $9\times10^{-4}$ reflects billions of years of preferential hydrogen escape, not an exotic source. Always ask whether the reservoir has lost mass.
- **You might think the NC/CC split is a smooth gradient with distance, but it is genuinely bimodal** — two clusters with a gap. A gradient would need no explanation; a gap needs a barrier, and that is why it is read as evidence for Jupiter.
- **You might think "carbonaceous chondrite" is a place, but it is a chemical class.** The inference that CC bodies formed beyond Jupiter is an isotopic argument, not a direct observation, and some iron meteorites turn out to be CC — meaning their parent bodies formed outside and were later scattered into the belt.
- **You might think one matching number establishes a source, but D/H is a single scalar and many mixtures reproduce any given value.** The chondrite–Earth match is suggestive; the case is only strong because $^{54}$Cr, $^{50}$Ti, $^{17}$O and $^{15}$N point the same way.

## One-liner

> Isotopes that no chemistry can reset are passport stamps: they say where a planet's material was assembled, and for Earth's water they say "outer belt, delivered late" — but not as loudly as they used to.

## Problems

**P1 (🟢)** A meteorite has $(^{54}\mathrm{Cr}/^{52}\mathrm{Cr})_{\text{sample}} = 0.0282847$ and the terrestrial standard is $0.0282811$. (a) Compute $\varepsilon^{54}$Cr. (b) Using the table, classify it as NC or CC. (c) State in one sentence what that classification implies about where its parent body formed.

**P2 (🟡)** A moon's water has $\mathrm{D/H} = 2.6\times10^{-4}$. (a) Model it as a mixture of protosolar gas ($2.1\times10^{-5}$) and Oort-cloud cometary ice ($3.2\times10^{-4}$) and find the cometary fraction. (b) Model it instead as chondritic ($1.4\times10^{-4}$) plus cometary and find the fraction. (c) Comment on which model is better constrained by the data and why.

**P3 (🔴, optional)** Mars's atmospheric D/H is $9\times10^{-4}$ and its water is assumed to have started at Earth's value $1.56\times10^{-4}$. Preferential escape of H over D means the ratio evolves as a Rayleigh fractionation, $R/R_0 = f^{\,\alpha-1}$, where $f$ is the *fraction of water remaining* and $\alpha < 1$ is the ratio of D to H escape efficiency. (a) Take $\alpha = 0.32$ and compute $f$. (b) If Mars started with a global ocean 100 m deep, how deep is what remains? (c) Give one reason this is an upper bound on the loss and one reason it could be a lower bound.

<details>
<summary>Solutions</summary>

**P1** (a) $$\varepsilon^{54}\mathrm{Cr} = \left(\frac{0.0282847}{0.0282811}-1\right)\times10^{4} = \left(1.0001273 - 1\right)\times10^{4} = 1.27.$$

(b) $\varepsilon^{54}\mathrm{Cr} = +1.27$ falls in the $+0.9$ to $+1.6$ band: **CC**.

(c) Its parent body accreted from the outer reservoir, beyond the barrier that separated inner from outer disk material in the first few million years — which on the standard reading means outside the orbit of the growing Jupiter.

**P2** (a) With cometary fraction $f$, in units of $10^{-4}$:

$$2.6 = 3.2f + 0.21(1-f) = 0.21 + 2.99f, \qquad f = \frac{2.39}{2.99} = 0.799.$$

About 80 percent cometary.

(b) $$2.6 = 3.2f + 1.4(1-f) = 1.4 + 1.8f, \qquad f = \frac{1.2}{1.8} = 0.667.$$

About 67 percent cometary.

(c) The **first** model is better constrained, and the reason is the size of the denominator. In (a) the two endmembers differ by $2.99\times10^{-4}$; in (b) by only $1.8\times10^{-4}$. Since $f = (R - R_1)/(R_2 - R_1)$, the uncertainty in $f$ scales as $\delta R/(R_2-R_1)$, so widely separated endmembers give a sharper answer. Concretely, a 10 percent error in the measured $2.6\times10^{-4}$ moves $f$ by 0.087 in model (a) and by 0.144 in model (b).

The deeper point is that *neither* model is well constrained in the sense that matters, because the choice of endmembers is itself the assumption doing most of the work — and as the lesson notes, the comets alone span $1.6$ to $5.3\times10^{-4}$, which is wider than the gap between the two models' answers.

**P3** (a) $$\frac{R}{R_0} = \frac{9\times10^{-4}}{1.56\times10^{-4}} = 5.769 = f^{\,\alpha-1} = f^{-0.68}.$$

$$\ln 5.769 = -0.68\ln f, \qquad \ln f = -\frac{1.7525}{0.68} = -2.577, \qquad f = e^{-2.577} = 0.076.$$

**About 7.6 percent of the original water remains** — Mars has lost roughly 92 percent of it.

(b) $$100\ \mathrm{m}\times0.076 = 7.6\ \mathrm{m}.$$

So a 100 m global equivalent layer would now be about 8 m. For comparison, the present polar caps and near-surface ice amount to roughly 20–30 m global equivalent, which on this arithmetic implies Mars started with 250–400 m — squarely in the range independently suggested by the geomorphology of its valley networks and outflow channels ([2.6](02-06-reading-planetary-surface.md)).

(c) **An upper bound on the loss**, because not all the missing water left the planet. Water sequestered as hydrated minerals in the crust, or as deep ground ice, is removed from the exchangeable reservoir without being lost to space and without fractionating it — so some of the apparent loss is storage, and the true escape is smaller than 92 percent.

**A lower bound on the loss**, because the calculation assumes a single closed reservoir fractionating continuously from a fixed start. If Mars outgassed fresh, unfractionated water from its interior during the period of escape — which volcanism certainly did — then the reservoir was being topped up with low-D/H water throughout, and reaching today's high ratio requires losing considerably more than 92 percent of the total that ever passed through.

The two effects push in opposite directions, which is why the honest published range for Mars's initial water spans about a factor of ten, and why the Rayleigh number alone is quoted as an order-of-magnitude constraint rather than a measurement.

</details>

## Flashback

**From Lesson 1.5 (Meteorites and isotopic clocks):** An iron meteorite from the CC group gives a Hf–W model age of 2.2 Myr after CAI formation, and one from the NC group gives 0.9 Myr. The $^{182}$Hf half-life is 8.9 Myr. (a) By what factor had the $^{182}$Hf inventory declined between the two core-formation events? (b) A third sample gives an initial $^{26}$Al/$^{27}$Al of $1.05\times10^{-5}$ against the CAI value of $5.23\times10^{-5}$; what is its formation age relative to CAIs, with $t_{1/2}(^{26}\mathrm{Al}) = 0.72$ Myr? (c) State which of the two systems you would use to time an event 40 Myr after CAI formation, and why.

<details>
<summary>Solution</summary>

(a) $$\Delta t = 2.2 - 0.9 = 1.3\ \mathrm{Myr}, \qquad \frac{N_1}{N_2} = 2^{\Delta t/t_{1/2}} = 2^{1.3/8.9} = 2^{0.1461} = 1.107.$$

Only about 11 percent — $^{182}$Hf barely moves over 1.3 Myr, which is exactly why it is a poor instrument for resolving events in the first few million years and why $^{26}$Al is used there instead.

(b) $$\frac{5.23\times10^{-5}}{1.05\times10^{-5}} = 4.981, \qquad \Delta t = 0.72\times\frac{\ln 4.981}{\ln 2} = 0.72\times\frac{1.6056}{0.6931} = 0.72\times2.3166 = 1.67\ \mathrm{Myr}.$$

(c) **Hf–W**, decisively. At 40 Myr, $^{26}$Al has been through $40/0.72 = 55.6$ half-lives, so its abundance has fallen by a factor of $2^{55.6}\approx5\times10^{16}$ — there is nothing left to measure, and any variation in the daughter excess is swamped by other effects. $^{182}$Hf at 40 Myr has been through $40/8.9 = 4.5$ half-lives, leaving about 4.4 percent of its initial inventory: small, but measurable, and still changing fast enough that the age is well resolved.

**The general rule is that a radiometric system resolves events on the scale of its own half-life** — useful from roughly a tenth of $t_{1/2}$ to roughly five times it, and blind outside that window. That is why the field maintains a whole ladder of systems from $^{26}$Al at 0.72 Myr to $^{147}$Sm at 106 Gyr, and why matching the clock to the question is the first decision in any chronology.

</details>

## Connections

- **Backward:** [1.2](01-02-condensation-frost-line.md) said Earth formed inside the frost line and therefore dry, which is the problem this lesson exists to solve; [1.4](01-04-giant-planets-migration.md) supplies the giant-planet growth and migration that both created the NC/CC barrier and delivered material across it; [1.5](01-05-meteorites-isotopic-clocks.md) supplies the Hf–W clock that dates the barrier's existence.
- **Forward:** [2.2](02-02-thermal-evolution-heat-transport.md) needs the chondritic abundances of potassium, uranium and thorium set here as its radiogenic heat budget; [4.3](04-03-atmospheric-escape.md) and [4.5](04-05-photochemistry-hazes-evolution.md) turn the Mars D/H anomaly into a measurement of atmospheric loss; [5.3](05-03-ocean-worlds.md) compares the outer moons' D/H with these reservoirs.
- **Sideways:** deuterium enrichment by ion–molecule chemistry in cold gas is an equilibrium-constant argument straight out of [`physical-chemistry`](../../physical-chemistry/syllabus.md), and Rayleigh fractionation is the same distillation mathematics that governs isotopes in ice cores in [`climate-science`](../../climate-science/syllabus.md) — the identical equation, run on precipitation instead of on planetary escape.
