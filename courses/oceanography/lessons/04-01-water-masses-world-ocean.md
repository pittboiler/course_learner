# Physical Oceanography · Lesson 4.1: Water masses of the world ocean

> ⏱ ~15 min · Module 4: The deep ocean and the overturning · Builds on: [1.3](01-03-ts-diagrams-water-masses.md), [2.5](02-05-potential-vorticity-stratified-ocean.md) · Unlocks: [4.2](04-02-deep-water-formation-convection.md), [4.4](04-04-what-drives-the-overturning.md)

## Why this matters

Below about a kilometre, the ocean is not a continuum of gradually varying properties. It is a stack of a few distinct **water masses**, each manufactured at a specific place on the sea surface, each carrying an indelible $(\theta,S)$ label, and each spreading along its own density surface for thousands of kilometres and hundreds to thousands of years. Learn perhaps eight of them and you can read any hydrographic section in the world.

This is the ocean's equivalent of a parts list. Module 4's whole argument — what the overturning is, what drives it, how much heat it carries — is an argument about how these particular objects are made, where they go, and how fast. And the abyss is not incidental: it is 90 percent of the ocean by volume, it holds fifty times the carbon of the atmosphere, and its properties are set by processes occurring on a handful of stormy patches of sea surface totalling perhaps a millionth of the planet.

## The idea

**A water mass is a memory of a surface.** Every parcel below the mixed layer was once at the surface, where the atmosphere set its temperature and salinity. Once it sinks it is sealed off: $\theta$ and $S$ change only by mixing ([1.1](01-01-temperature-salinity-pressure.md)), so the parcel carries its birth certificate. Water masses are the labels on the labels.

**They are named for where they were made, not where they are.** North Atlantic Deep Water is found in the South Pacific. Antarctic Intermediate Water is found off Brazil. The name records the formation region, which is the useful information.

**Density decides the ordering; salinity does the identifying.** A water mass settles at the depth where its density matches its surroundings, so the deep ocean's vertical stacking is a density ordering. But the *identification* usually rests on a salinity extremum, because at depth the temperature range is compressed to a couple of degrees while salinity retains a workable spread ([1.3](01-03-ts-diagrams-water-masses.md)).

**Two clocks, running independently.** Conservative properties tell you *where from*; non-conservative ones tell you *how long ago*. Oxygen falls as respiration consumes it. CFCs and SF₆ are industrial compounds absent before the 1930s and 1960s, so their presence dates water to the industrial era and their ratio dates it more precisely. Radiocarbon works over a millennium. Together these give the abyssal ocean's **ventilation age**, and it is the single number that constrains the overturning's rate.

**And the whole thing is made in a handful of places.** The Labrador and Nordic Seas; the Weddell and Ross Seas; the Mediterranean and Red Sea outflows; the Antarctic Circumpolar belt. Their total area is minuscule and their winter weather is appalling. That mismatch — a global reservoir set by a few small, hostile, seasonally-forced patches — is the structural fact that makes the deep ocean both interesting and hard to observe.

## The formal version

**The catalogue.** Approximate core properties; individual sections vary by a few tenths.

| Water mass | $\theta$ (°C) | $S$ | $\sigma_\theta$ | Depth | Formed | Identified by |
|---|---|---|---|---|---|---|
| **AABW** Antarctic Bottom Water | $-0.5$ | 34.65 | 27.85 | below 4000 m | Weddell, Ross Seas | coldest, high silicate |
| **NADW** North Atlantic Deep Water | 2 to 4 | 34.9 to 35.0 | 27.8 | 2000–4000 m | Labrador, Nordic Seas | salinity **maximum**, high oxygen |
| **AAIW** Antarctic Intermediate Water | 3 to 5 | 34.2 to 34.4 | 27.1 | 800–1200 m | Subantarctic Front | salinity **minimum** |
| **MOW** Mediterranean Outflow | 11 to 13 | 36.5 to 38.4 | 27.8 | 1000–1200 m | Gibraltar sill | warm, very salty |
| **RSOW** Red Sea Outflow | 15 to 22 | 39 to 40.5 | 27.6 | 500–800 m | Bab el Mandeb | warmest deep water |
| **Mode waters** (e.g. 18° Water) | 15 to 19 | 36.5 | 26.5 | 200–500 m | deep winter mixed layers | PV **minimum**, thick layer |
| **NPIW** North Pacific Intermediate Water | 5 to 12 | 33.8 to 34.1 | 26.8 | 300–800 m | Okhotsk Sea | salinity minimum, fresh |
| **CDW** Circumpolar Deep Water | 0.5 to 2 | 34.6 to 34.7 | 27.8 | 1500–3500 m | ACC, a blend | high nutrients, low oxygen |

Two features of this table are the real content. **The Pacific makes no deep water at all** — there is no North Pacific analogue of NADW, because the North Pacific surface is too fresh to sink (a fact [6.4](06-04-amoc-stability-stommel-model.md) explains and exploits). And **almost everything either comes from the North Atlantic or from around Antarctica**, which is why the global overturning has the asymmetric, one-way shape it does.

**Subduction: how surface water gets in.** Water enters the interior where the wintertime mixed layer is deep and the isopycnals slope downward equatorward, so that a parcel carried along an isopycnal ends up *beneath* a shallower summer mixed layer. The subduction rate is

$$S_{\text{ann}} = -w_{-h} - \mathbf{u}_h\cdot\nabla h,$$

*In words: the rate at which water leaves the mixed layer is the Ekman pumping through its base plus the rate at which the flow carries water into a region where the mixed layer is shallower.* The second term — **lateral induction** — is usually the larger, and it is why the thermocline is ventilated mainly from the poleward, wintertime side of the subtropical gyres rather than from their centres.

Because the mixed layer's *deepest* winter state is what gets sealed in, the entire year's subduction imprint is set in about a month. This is **Stommel's demon**: the ocean interior remembers only late winter.

**PV as the ventilation map.** From [2.5](02-05-potential-vorticity-stratified-ocean.md), $q \approx f/h$ is conserved along an isopycnal. Mapping $q$ on an isopycnal therefore shows the streamlines running from the outcrop:

- **Low $q$** means a thick layer, hence a deep winter mixed layer, hence a **mode water**.
- **Uniform $q$ over a large region** means fluid trapped on closed geostrophic contours, stirred by eddies with no surface connection — a **homogenized pool** (Rhines–Young), occupying the western subtropical thermocline beneath the ventilated layer.
- **A sharp $q$ front** separates ventilated from unventilated water — the **shadow zone**, in the eastern subtropics, where isopycnals never reach the surface anywhere upstream and the water is old and oxygen-poor.

**Age tracers.**

| Tracer | Useful range | Basis |
|---|---|---|
| Oxygen | qualitative | consumed by respiration; rates fall from about $5\ \mathrm{\mu mol\,kg^{-1}\,yr^{-1}}$ in the upper thermocline to $0.1$ in the abyss |
| CFC-11, CFC-12 | 1940s–2000s | industrial, atmospheric history known; CFC-11/12 ratio dates the water |
| SF₆ | 1970s–present | replaces CFCs, which are now declining |
| $^{14}\mathrm{C}$ | 100–2000 yr | radioactive decay, half-life 5730 yr |
| $^{3}\mathrm{H}$/$^{3}\mathrm{He}$ | 0–40 yr | bomb tritium decaying to helium-3 |

*In words: pick the clock whose ticking rate matches the age you expect.* Radiocarbon says the deep North Pacific is about 1000 to 1500 years old — the oldest water in the ocean, and the far end of the global conveyor.

## Picture

![An Atlantic meridional section from 60 degrees south to 60 degrees north, surface to 4000 m. Three labelled paths leave surface outcrops. Antarctic Intermediate Water leaves an outcrop near 55 south and spreads north at 800 to 1000 m at 4 degrees and salinity 34.3. North Atlantic Deep Water leaves an outcrop near 60 north and spreads south at 2000 to 3500 m at 2.5 degrees and salinity 34.95. Antarctic Bottom Water leaves an outcrop at the far south, sinks to the sea floor and spreads north beneath everything at minus 0.5 degrees and salinity 34.65. A note records that age increases along each path](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — dating a water sample).** A sample from 2500 m in the eastern North Atlantic has oxygen $250\ \mathrm{\mu mol\,kg^{-1}}$ and a detectable CFC-12 concentration corresponding to an atmospheric mixing ratio last seen in 1975. The sample was collected in 2015. Oxygen at saturation for its formation conditions was $310\ \mathrm{\mu mol\,kg^{-1}}$.

(a) *CFC age.* $2015 - 1975 = 40$ years since the water last equilibrated with the atmosphere.

(b) *Implied oxygen utilization rate.*
$$\mathrm{AOU} = 310 - 250 = 60\ \mathrm{\mu mol\,kg^{-1}},$$
$$\mathrm{OUR} = \frac{60}{40} = 1.5\ \mathrm{\mu mol\,kg^{-1}\,yr^{-1}}.$$

(c) *Is that plausible?* Deep-water oxygen utilization rates are typically 0.1 to 2 $\mathrm{\mu mol\,kg^{-1}\,yr^{-1}}$ at these depths, so $1.5$ is high but within range for the relatively productive eastern basin. The consistency of the two independent estimates — one from a physical tracer with a known atmospheric history, one from a biological consumption rate — is exactly the kind of cross-check that makes ventilation ages credible.

(d) *The caveat.* Both numbers are **mixing ages**, not transit times. A sample that is half 10-year-old water and half 200-year-old water has a CFC age of roughly 10 years, because the old half contributes no CFC at all and the tracer sees only the young component. Its actual mean age is 105 years. **Tracer age and mean age are different quantities, and they diverge badly when the age distribution is broad** — which in the ocean it always is.

**Example 2 (why you'd care — separating three sources with two tracers, and failing usefully).** A South Atlantic sample at 3000 m reads $(\theta, S) = (2.20\,^\circ\mathrm{C},\ 34.88)$. Three sources are plausible: NADW $(2.50,\ 34.95)$, AABW $(-0.50,\ 34.65)$, and CDW $(0.80,\ 34.68)$. Decide what can be concluded.

*Try two components, NADW and AABW:*
$$x_{\text{NADW}}\ \text{from}\ \theta = \frac{2.20+0.50}{2.50+0.50} = \frac{2.70}{3.00} = 0.900,$$
$$x_{\text{NADW}}\ \text{from}\ S = \frac{34.88-34.65}{34.95-34.65} = \frac{0.23}{0.30} = 0.767.$$

A 13-point disagreement — too large for end-member uncertainty, so a third source is present.

*Try three components.* With $n$, $a$, $c$ the NADW, AABW and CDW fractions:

$$2.50n - 0.50a + 0.80c = 2.20, \qquad 34.95n + 34.65a + 34.68c = 34.88, \qquad n+a+c = 1.$$

Eliminating $c = 1-n-a$:

$$2.50n - 0.50a + 0.80 - 0.80n - 0.80a = 2.20 \;\Longrightarrow\; 1.70n - 1.30a = 1.40,$$
$$34.95n + 34.65a + 34.68 - 34.68n - 34.68a = 34.88 \;\Longrightarrow\; 0.27n - 0.03a = 0.20.$$

From the second, $a = 9n - 6.667$. Substituting:

$$1.70n - 1.30(9n - 6.667) = 1.40 \;\Longrightarrow\; 1.70n - 11.7n + 8.667 = 1.40 \;\Longrightarrow\; -10.0n = -7.267,$$
$$n = 0.727, \qquad a = 9(0.727) - 6.667 = -0.127, \qquad c = 1 - 0.727 + 0.127 = 0.400.$$

A **negative AABW fraction**. As in [1.3](01-03-ts-diagrams-water-masses.md)'s P3, the arithmetic is fine and the model is wrong.

*Diagnosing it.* Look at where the three end-members sit on the T–S plane. AABW $(-0.50, 34.65)$ and CDW $(0.80, 34.68)$ are very close together — 1.3 K apart in temperature and 0.03 in salinity. The triangle they form with NADW is nearly degenerate, and its area is

$$A = \tfrac12\left|34.95(-0.50-0.80) + 34.65(0.80-2.50) + 34.68(2.50+0.50)\right| = \tfrac12\left|-45.44 - 58.91 + 104.04\right| = \tfrac12(0.30) = 0.150,$$

against 3.32 for [1.3](01-03-ts-diagrams-water-masses.md)'s well-conditioned triple. **Twenty times smaller.** The system is severely ill-conditioned, and a 0.02 error in either end-member's salinity flips the answer.

*The point, and the fix.* AABW and CDW are nearly the same water in $(\theta,S)$ — which is unsurprising, since CDW is largely made *from* AABW and NADW by mixing in the ACC. Two tracers cannot separate two sources that are nearly collinear with the third, no matter how precisely they are measured. The fix is not better precision but a **third, independent coordinate**: silicate works beautifully here, because AABW is silicate-rich (about $120\ \mathrm{\mu mol\,kg^{-1}}$) and NADW is silicate-poor (about $15$), a contrast of eight to one that no amount of $(\theta,S)$ similarity can hide. **When a decomposition is ill-conditioned, add a dimension rather than sharpening the ones you have** — and choose the new dimension for the *contrast* it provides, not for how well it is measured.

## Watch out

- **You might think** a water mass is a body of water you could follow. **Actually** it is a set of *properties*. The North Atlantic Deep Water in the Indian Ocean contains no molecules that were ever in the Labrador Sea; it is water that has inherited a $(\theta,S)$ signature through a chain of mixing.
- **You might think** the CFC age is the time since the water left the surface. **Actually** it is a concentration-weighted age that is biased young whenever water of different ages has mixed — which is always. The distinction between tracer age and mean age is not pedantry; the two differ by a factor of several in the deep ocean.
- **You might think** the deep Pacific is old because it is far from the North Atlantic. **Actually** it is old because there is no deep-water source *anywhere* in the Pacific — the water there arrives circuitously via the Southern Ocean, and would still be old if the Pacific were next door.

## One-liner

> The deep ocean is a stack of a few water masses, each manufactured on a small stormy patch of sea surface, each carrying a temperature and salinity signature that only mixing can erase — so a hydrographic section plus a chemical clock reveals both where the water came from and how long ago it left.

## Problems

**P1 (🟢)** A sample at 1000 m in the South Atlantic reads $(\theta,S) = (4.10\,^\circ\mathrm{C},\ 34.48)$. The candidates are AAIW $(3.50,\ 34.25)$ and NADW $(2.50,\ 34.95)$. (a) Compute the AAIW fraction from $\theta$ and from $S$. (b) State whether two components suffice. (c) If not, say in which direction on the T–S plane the missing source lies, and name a plausible candidate at that depth in that basin.

**P2 (🟡)** A deep Pacific sample has a radiocarbon age of 1400 years. Its oxygen is $80\ \mathrm{\mu mol\,kg^{-1}}$ and the saturation value at formation was $320\ \mathrm{\mu mol\,kg^{-1}}$. (a) Compute the apparent oxygen utilization. (b) Compute the implied oxygen utilization rate. (c) The measured deep-Pacific OUR from independent methods is about $0.15\ \mathrm{\mu mol\,kg^{-1}\,yr^{-1}}$. Compare and comment. (d) The sample also contains no detectable CFC-12. State what that adds, and what it does not.

**P3 (🔴, optional)** A subtropical mode water forms in a winter mixed layer 400 m deep at 38°N ($f = 8.98\times10^{-5}\ \mathrm{s^{-1}}$), between the $\sigma_\theta = 26.4$ and $26.6$ surfaces. (a) Compute its potential vorticity $q \approx f/h$. (b) At a remote site at 22°N ($f = 5.46\times10^{-5}$) the same isopycnal pair is 250 m apart. Compute $q$ there and state whether PV conservation is consistent with the remote water having come from the formation region. (c) At a second remote site at 22°N in the eastern basin, the same pair is 120 m apart. Compute $q$, and explain what this tells you about whether that site is ventilated from the same source. (d) Name what the eastern site is called and state one independent measurement that would confirm your diagnosis.

<details>
<summary>Solutions</summary>

**P1** (a) $$x_{\text{AAIW}}\ \text{from}\ \theta = \frac{4.10-2.50}{3.50-2.50} = \frac{1.60}{1.00} = 1.60.$$

$$x_{\text{AAIW}}\ \text{from}\ S = \frac{34.48-34.95}{34.25-34.95} = \frac{-0.47}{-0.70} = 0.671.$$

(b) **No.** The temperature estimate is 1.60, outside $[0,1]$ — and the sample is *warmer* than both candidates, which no mixture of them can be. A third source is required.

(c) The sample lies outside the AAIW–NADW segment in the direction of **higher temperature at that salinity** — up and to the left on the T–S plane relative to the mixing line. In the South Atlantic at 1000 m there is a well-known warm, salty source in that direction: **Mediterranean Outflow Water** does not reach that far south in quantity, but **Upper Circumpolar Deep Water** and, more importantly for the tropical South Atlantic, the warm saline core of NADW's upper limb do. The cleanest single candidate consistent with the numbers is a contribution from **South Atlantic Central Water**, the warm thermocline water above, mixed downward — which at 1000 m in this basin is entirely plausible and would supply the required warmth.

**P2** (a) $$\mathrm{AOU} = 320 - 80 = 240\ \mathrm{\mu mol\,kg^{-1}}.$$

(b) $$\mathrm{OUR} = \frac{240}{1400} = 0.171\ \mathrm{\mu mol\,kg^{-1}\,yr^{-1}}.$$

(c) Against an independently measured $0.15$, this is high by 14 percent — good agreement given that both quantities are uncertain by tens of percent. Two independent clocks, one radiochemical and one biological, agreeing to within 15 percent on a 1400-year timescale is a genuinely strong result, and it is a large part of why the deep Pacific's millennial age is not seriously disputed.

(One caveat worth stating: the agreement is partly circular, since deep-ocean OUR estimates are themselves often calibrated using radiocarbon ages. The independent versions come from in-situ respiration measurements and from tracer-release experiments, and those are the ones that carry the weight.)

(d) The absence of CFC-12 confirms that **no measurable fraction of this water has been at the surface since about 1940** — a hard lower bound of roughly 75 years on the age of essentially the whole sample.

What it does **not** do is discriminate among ages beyond that. CFC-12 has no sensitivity to the difference between 200-year-old water and 1400-year-old water; both read zero. Its real value here is different and worth stating: because CFCs would be detectable in even a few percent of recently-ventilated water, their complete absence rules out a small young component that radiocarbon — being a bulk average — could easily hide. **A tracer that saturates is still informative, as a bound on the young tail of the age distribution.**

**P3** (a) $$q = \frac{f}{h} = \frac{8.98\times10^{-5}}{400} = 2.25\times10^{-7}\ \mathrm{m^{-1}\,s^{-1}}.$$

Very low — which is the mode-water signature: a thick layer at a modest $f$.

(b) $$q = \frac{5.46\times10^{-5}}{250} = 2.18\times10^{-7}\ \mathrm{m^{-1}\,s^{-1}}.$$

Within 3 percent of the formation value. **Entirely consistent** with PV-conserving advection: the layer has thinned from 400 m to 250 m, and $f$ has fallen in almost exactly the same proportion ($5.46/8.98 = 0.608$ against $250/400 = 0.625$). This is the ventilated thermocline working exactly as [2.5](02-05-potential-vorticity-stratified-ocean.md) says it should — the water has moved equatorward and thinned to keep $f/h$ fixed.

(c) $$q = \frac{5.46\times10^{-5}}{120} = 4.55\times10^{-7}\ \mathrm{m^{-1}\,s^{-1}},$$

**twice** the formation value. PV conservation cannot get you from $2.25\times10^{-7}$ to $4.55\times10^{-7}$ along an isopycnal, so this water did **not** come from the mode-water source. It has either been strongly mixed or, more likely, was never connected to that outcrop at all.

(d) The eastern site is in the **shadow zone**: the region of the eastern subtropical gyre where the isopycnal in question does not outcrop anywhere upstream along the gyre's flow path, so no ventilated water can reach it directly. Its properties are set instead by slow lateral diffusion from the ventilated region and by whatever weak circulation exists on closed contours.

An independent confirming measurement: **dissolved oxygen**, or equivalently the absence of CFCs. Shadow-zone water is old, so it should show a pronounced oxygen minimum and little or no CFC signal, while the ventilated water at 22°N in part (b) should be relatively oxygen-rich and carry detectable CFCs. This is a sharp, easily-made prediction, and the eastern-basin oxygen minimum zones of the subtropical Pacific and Atlantic are exactly where it is confirmed. (A second option: map $q$ on the isopycnal across the whole basin and look for the front separating the two regimes — the shadow zone's boundary should be visible as a sharp PV gradient.)

</details>

## Flashback

**From Lesson 3.4 (Mesoscale eddies and ocean baroclinic instability):** At 40°S, $|f| = 9.37\times10^{-5}\ \mathrm{s^{-1}}$, and the first-baroclinic wave speed is $c_1 = 1.8\ \mathrm{m\,s^{-1}}$. (a) Compute the deformation radius. (b) Estimate the diameter of the eddies this region produces. (c) The eddy diffusivity is $K = 1200\ \mathrm{m^2\,s^{-1}}$. Compute how long eddy stirring takes to mix a water-mass core across 300 km, and compare with the roughly 30 years it takes AAIW to travel that far, commenting on which process wins.

<details>
<summary>Solution</summary>

(a) $$L_d = \frac{c_1}{|f|} = \frac{1.8}{9.37\times10^{-5}} = 1.92\times10^{4}\ \mathrm{m} = 19.2\ \mathrm{km}.$$

(b) $$D \approx 2\text{ to }4\,L_d = 38\text{ to }77\ \mathrm{km}.$$

(c) Diffusive spreading over a distance $L$ takes $t \approx L^2/(4K)$:

$$t = \frac{\left(3\times10^{5}\right)^2}{4\times1200} = \frac{9\times10^{10}}{4800} = 1.875\times10^{7}\ \mathrm{s} = 0.59\ \mathrm{yr}.$$

**About seven months** — against roughly 30 years for the advective journey.

Eddy stirring wins overwhelmingly, by a factor of about 50. That has a direct consequence for [1.3](01-03-ts-diagrams-water-masses.md)'s T–S corners: a water-mass core spreading across a region 300 km wide is being homogenized laterally about fifty times faster than it is being carried along, so the sharp corner it had at formation is substantially rounded within the first few hundred kilometres. It is why remote water-mass cores are always diluted, why using an observed remote core as an end-member biases mixing fractions, and why the "age" of the rounding is a much better clock over short distances than over long ones — beyond a few thousand kilometres the corner is essentially gone and there is nothing left to measure.

*Check.* Note the scaling. Diffusive time goes as $L^2$ and advective time as $L$, so advection must win at *large* enough $L$ — the crossover is at $L = 4K/u$ with $u$ the advective speed, here about $4\times1200/(3\times10^{5}/(30\times3.156\times10^{7})) = 15\,000$ km. Only on basin scales does advection dominate lateral stirring, which is the same crossover structure as [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s float problem, at a much larger scale.

</details>

## Connections

- **Backward:** the identification method is [1.3](01-03-ts-diagrams-water-masses.md)'s T–S geometry; the PV mapping is [2.5](02-05-potential-vorticity-stratified-ocean.md)'s conservation used as a tracer; the thermobaric reason AABW underlies NADW is [1.2](01-02-density-equation-of-state.md)'s.
- **Forward:** [4.2](04-02-deep-water-formation-convection.md) supplies the formation processes that set these end-members; [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) asks how they get back up; [4.4](04-04-what-drives-the-overturning.md) assembles them into the overturning; [6.2](06-02-ocean-heat-uptake-circulation.md) uses subduction and mode-water formation as the heat-uptake mechanism.
- **Sideways (linear algebra):** the multi-source decomposition is a linear inverse problem, and Example 2 is a clean demonstration that the *conditioning* of the matrix — not the precision of the data — is what limits the answer. Adding silicate as a fourth coordinate is preconditioning by choosing a better basis, which is the same move as in [`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md).
