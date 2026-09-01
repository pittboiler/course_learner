# Planetary Science · Lesson 2.6: Reading a planetary surface

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [2.4](02-04-impact-cratering-chronology.md), [2.5](02-05-volcanism-tectonics.md) · Unlocks: [3.2](03-02-gravity-topography-tidal-response.md), [3.3](03-03-remote-spectroscopy.md), [5.3](05-03-ocean-worlds.md)

## Why this matters

This is the skill the whole of planetary geology rests on: given one image of a place nobody has visited, work out what happened there and in what order. It is how the history of Mars was reconstructed decades before a rover landed, and it is how any new body will be read the week the first pictures arrive.

The method is remarkable for how much it delivers from how little. It needs no samples, no instruments beyond a camera, and no assumptions about composition. **And it has a hard, honest limit: it gives order, never dates.** Turning a sequence into a chronology requires the crater counting of [2.4](02-04-impact-cratering-chronology.md) and, ultimately, the lunar samples of [2.7](02-07-moon-earth-moon-system.md).

## The idea

**Three rules do almost all the work, and none of them requires knowing what anything is made of.**

- **Superposition.** What lies on top is younger. A crater's bright ray system draped over a lava plain formed after the plain.
- **Cross-cutting.** What cuts is younger. A fault that offsets a crater rim postdates the crater.
- **Embayment.** What floods around and against something is younger. Lava lapping into a crater and drowning its floor arrived after the crater.

**Apply them to every pair of features in a scene and you get a relative sequence.** Not every pair yields a relation — two features that never touch cannot be ordered — so the result is a partial ordering, and honest geologic maps show it as such.

**Then add crater density, which converts the ordering into something like a chronology.** Each mapped unit gets a crater count; the counts must be consistent with the ordering, which is a real check on the mapping. Where they disagree, something has been mis-mapped or a unit has been partially resurfaced.

**Beyond order, the *morphology* of a landform names the process that made it, because different processes leave geometrically distinct signatures.**

- **Fluvial** — branching, downhill-converging networks with tributaries. Requires a liquid that flows downhill and erodes. Mars's valley networks are the classic case, and their *branching* is the key: nothing but flowing liquid makes a dendritic pattern.
- **Aeolian** — dunes, wind streaks behind obstacles, yardangs. Requires an atmosphere and loose sediment. Present on Earth, Mars, Venus and Titan — and Titan's dunes are made of organic solids, not sand.
- **Glacial** — U-shaped valleys, moraines, lobate debris aprons. Mars's mid-latitude aprons are ice glaciers under a debris cover, confirmed by radar sounding.
- **Volcanic** — flow fronts, lava channels, calderas, shields ([2.5](02-05-volcanism-tectonics.md)).
- **Tectonic** — faults, graben, ridges, scarps.
- **Impact** — circular, with raised rims, ejecta blankets and (when fresh) rays.
- **Mass wasting** — landslides, slumps, talus. Universal wherever there is a slope and gravity.

**The essential discipline is that morphology identifies a *process*, not a *substance*.** A branching valley network says "a liquid flowed", not "water flowed" — on Titan the liquid is methane. A dune says "a fluid moved granular material", not "there was air like ours". **Getting from process to substance requires spectroscopy ([3.3](03-03-remote-spectroscopy.md)), and that is a genuinely separate measurement.**

**Finally, a warning that has caught professionals repeatedly: resolution creates and destroys features.** A crater smaller than a few pixels is invisible; a set of features just at the resolution limit will look like a smooth surface. Every time imaging resolution improves, surfaces that were "smooth and young" acquire small craters and turn out to be older. **Crater counts are only comparable between images of comparable resolution**, and a large fraction of the disagreements in the literature trace to exactly this.

## The formal version

**Building a geologic map.** The procedure, in order:

1. **Define units** by texture, albedo, colour and crater density — regions that look internally consistent and differ at their boundaries.
2. **Establish contacts** and classify each: depositional (embayment), erosional, or structural (a fault).
3. **Order the units** with the three rules, producing a partial order.
4. **Count craters** on each unit large enough to give statistics.
5. **Convert** to absolute ages using the chronology function, transferred from the Moon ([2.4](02-04-impact-cratering-chronology.md)).
6. **Interpret** morphology to name processes.

**Statistical requirement on step 4.** Crater counting is Poisson, so a unit with $N$ counted craters gives a fractional uncertainty

$$\frac{\sigma_N}{N} = \frac{1}{\sqrt N}.$$

*In words: 100 craters gives 10 percent on the density, 25 gives 20 percent, 4 gives 50 percent.* Small units simply cannot be dated, no matter how carefully mapped — and because $N\propto$ area, halving a unit's linear size quarters its craters and doubles the error.

**Relating unit area to datable-ness.** For a unit of area $A$ on a surface of age $T$:

$$N = A\cdot N(1)\cdot\left(\frac{D_{\min}}{1\ \mathrm{km}}\right)^{-1.8},$$

using the production-function slope. Counting down to smaller diameters buys statistics fast — going from 1 km to 0.25 km multiplies the count by $4^{1.8} = 12$ — which is why high-resolution imaging is transformative for dating small young units, and why it must be matched against the resolution the chronology was calibrated at.

**Formal timescales.** Each body gets its own, defined by stratigraphic markers and then tied to crater densities:

| Body | Periods (oldest first) | Marker |
|---|---|---|
| Moon | pre-Nectarian, Nectarian, Imbrian, Eratosthenian, Copernican | named basins and craters |
| Mars | Noachian, Hesperian, Amazonian | crater density; roughly $>3.7$, $3.7$–$3.0$, $<3.0$ Ga |
| Mercury | pre-Tolstojan through Kuiperian | as for the Moon |

**The Martian sequence is the payoff case, and it is worth memorizing** because it is a climate history read entirely off morphology:

- **Noachian** ($>3.7$ Ga): heavily cratered highlands, **valley networks**, clay minerals. A wetter, thicker-atmosphere world.
- **Hesperian** ($3.7$–$3.0$ Ga): ridged plains, huge **outflow channels**, sulphate minerals. Catastrophic floods from groundwater release; acidic, drying.
- **Amazonian** ($<3.0$ Ga): sparsely cratered plains, glacial and periglacial features, anhydrous iron oxides. Cold, dry, essentially the Mars of today.

**Nothing in that sequence required a landing.** The mineralogy came later from orbital spectroscopy and confirmed it; the sequence itself came from images.

## Picture

![A synthetic planetary scene on the left with six numbered features, and the derived sequence on the right. In the scene: an old cratered highland covered in grey circles; a coral lava plain that buries those craters and carries only a few of its own, with one crater at the contact drawn as a partial arc and labelled partly buried; a blue fault line that cuts across the lava; a dashed blue channel incised into the lava; a fresh coral crater with radiating rays that lie on top of everything; and a set of blue dune ripples. On the right, a numbered list gives the sequence: the highland forms and is bombarded, lava floods in embaying the craters so it is younger, a fault cuts the lava so it is younger still, a channel is incised into the lava though it never intersects the fault so their order is undetermined, a rayed crater overlies everything, and dunes drift across the lot and are active today. A note adds that absolute ages still require the lava plain's crater count and the lunar calibration. Beneath, three rules are stated: superposition, cross-cutting and embayment, with the caution that none of them ever gives a number](assets/02-06-fig1.svg)

Note the honest gap in the sequence: the fault and the channel never intersect, so their relative age is genuinely undetermined. A map that ordered them anyway would be inventing information.

## Worked examples

**Example 1 (mechanical — can this unit be dated?).** A Martian lava flow covers $2500\ \mathrm{km^2}$. Images resolve craters down to 100 m. If the surface is 1 Gyr old, how many craters should it have, and is the age well determined?

At $T = 1$ Gyr, $N(1) = 8.4\times10^{-4}\ \mathrm{km^{-2}}$. Scaling to $D_{\min} = 0.1$ km with the production-function slope 1.8:

$$N(>0.1\ \mathrm{km}) = 8.4\times10^{-4}\times(0.1)^{-1.8} = 8.4\times10^{-4}\times63.1 = 5.30\times10^{-2}\ \mathrm{km^{-2}}.$$

$$N = 5.30\times10^{-2}\times2500 = 132\ \text{craters}.$$

$$\frac{\sigma_N}{N} = \frac{1}{\sqrt{132}} = 8.7\%.$$

**Comfortably datable** at about 9 percent on the density. But note what happens if only 1 km craters are resolved: $N = 8.4\times10^{-4}\times2500 = 2.1$ craters, a 69 percent uncertainty, and the unit is undatable. **The same unit is well dated or hopeless depending only on the camera.**

That is not a hypothetical. It is why the arrival of HiRISE, resolving sub-metre features, revised the ages of many small young Martian units — and why comparing a crater count from a modern instrument with one from a 1970s Viking image is a methodological error, not merely an imprecise one.

**Example 2 (why you'd care — was Mars ever warm?).** Mars's Noachian highlands carry branching valley networks with tributaries, drainage divides and integrated basins. What can be concluded, and what cannot?

*What follows solidly.* A dendritic, downhill-converging network requires a **liquid flowing over the surface, distributed widely, and persisting long enough to erode integrated drainage.** No other process makes that geometry — not wind, not lava, not ice, not groundwater sapping alone (which makes short, stubby, theatre-headed valleys, and Mars has those too, in different places). And their confinement to Noachian terrain, with essentially none cutting Amazonian surfaces, dates the era.

*What does not follow.* Three things, each of which was over-claimed at some stage in the field's history.

- **Not necessarily water.** Morphology names a process, not a substance. It is the *mineralogy* — clays, which form only by prolonged aqueous alteration — that identifies the liquid as water, and that is spectroscopy ([3.3](03-03-remote-spectroscopy.md)), not imaging.
- **Not necessarily warm.** This is the live controversy. Valley networks require liquid water at the surface, but the required climate could be persistently warm and wet, or cold with episodic melting driven by impacts, volcanic outbursts or obliquity excursions. The total eroded volume can be produced in as little as $10^{4}$–$10^{7}$ cumulative years of flow, which is a vanishing fraction of the Noachian and is therefore compatible with a mostly-frozen planet that thawed intermittently.
- **Not necessarily long-lived.** "The valleys took a long time to form" and "conditions permitting them lasted a long time" are different claims, and only the first is established.

**The general lesson is worth carrying:** morphology constrains process robustly, environment weakly, and duration barely at all. That ordering is why the Martian climate debate has stayed open for fifty years despite the images being unambiguous.

## Watch out

- **You might think relative dating gives you a timeline, but it gives a partial order.** Features that never touch cannot be ordered. Filling in those gaps is where over-interpretation creeps into geologic maps.
- **You might think a fresh-looking surface is young, but "fresh" depends on resolution and on erosion rate.** An airless body preserves metre-scale texture for a billion years; Titan erases kilometre-scale features in millions. Comparing apparent freshness between bodies with different atmospheres is meaningless.
- **You might think morphology identifies composition, but it identifies a process.** Titan's fluvial channels were cut by liquid methane, and its dunes are made of organic particles, not silicate sand. The pictures look like Earth's; the substances are not.
- **You might think crater counts from different missions are comparable, but resolution differences dominate.** Always check what diameter range was counted and at what pixel scale before comparing two published ages.

## One-liner

> Superposition, cross-cutting and embayment give you the order of everything for free — and never, under any circumstances, a date.

## Problems

**P1 (🟢)** A unit of area $8000\ \mathrm{km^2}$ has 45 craters larger than 500 m. (a) Compute the fractional uncertainty on the crater density. (b) How large would the unit need to be, at the same density, for a 5 percent uncertainty? (c) State one reason a larger unit might nonetheless give a *worse* age.

**P2 (🟡)** In an image: a lava plain embays a large crater; a graben cuts the lava plain; a small fresh crater sits on the graben floor; a separate channel is incised into the lava plain and does not intersect the graben. (a) Write the sequence as far as it is determined. (b) Identify which pair is undetermined and why. (c) Name one additional observation that would resolve it.

**P3 (🔴, optional)** Two Martian units are mapped. Unit A (Noachian highlands) has $N(1) = 0.30\ \mathrm{km^{-2}}$; unit B (a lava plain) has $N(1) = 2.5\times10^{-3}\ \mathrm{km^{-2}}$. Use the lunar chronology function $N(1) = 5.44\times10^{-14}(e^{6.93T}-1)+8.38\times10^{-4}T$ and, for this problem, ignore the Mars/Moon flux correction. (a) Find both ages. (b) Unit B embays unit A; check this is consistent. (c) A crater on unit B is itself embayed by a small flow with $N(1) = 3.0\times10^{-3}$, apparently *older* than unit B. Explain what has gone wrong and how a mapper should respond.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{\sigma_N}{N} = \frac{1}{\sqrt{45}} = \frac{1}{6.708} = 14.9\%.$$

(b) Need $1/\sqrt N = 0.05$, so $N = 400$ craters. At the same density,

$$A = 8000\times\frac{400}{45} = 8000\times8.889 = 7.11\times10^{4}\ \mathrm{km^2}.$$

About 71,000 km², nearly nine times larger.

(c) A larger unit is more likely to be **compositionally or temporally heterogeneous** — to contain sub-units of different ages that the mapper has lumped together. Averaging a 3.5 Gyr flow with a 1 Gyr flow gives an age that describes neither, and the Poisson error bar on that average is small and entirely misleading. **Statistical precision and mapping accuracy trade off against each other**, and beyond some area the second dominates.

**P2** (a) From the three rules:

$$\text{large crater} \;\to\; \text{lava plain (embays it)} \;\to\; \text{graben (cuts the lava)} \;\to\; \text{small fresh crater (on the graben floor)},$$

and separately, the **channel** is younger than the lava plain (it is incised into it).

(b) The **graben and the channel** are undetermined relative to each other. Both are younger than the lava plain, but they never intersect, so neither cross-cutting nor superposition applies. No amount of care with these two features alone can order them.

(c) Several observations would work, and it is worth seeing that they are of different kinds:

- **Find an intersection elsewhere.** Trace both features further; if the graben cuts the channel anywhere along their lengths, or the channel is deflected into the graben, the order follows immediately.
- **Compare crater densities** on the graben floor and on the channel floor — both are surfaces exposed at their respective formation times, so the more heavily cratered one is older. This needs both to be large enough for statistics, per P1.
- **Look for a common younger unit** that buries both, and check whether its contact geometry differs.

**P3** (a) *Unit A*, $N(1) = 0.30$: the exponential term dominates.

$$5.44\times10^{-14}\,e^{6.93T} \approx 0.30 \;\Rightarrow\; e^{6.93T} = 5.515\times10^{12} \;\Rightarrow\; 6.93T = \ln(5.515\times10^{12}) = 29.339,$$
$$T = 4.23\ \mathrm{Gyr}.$$

*Unit B*, $N(1) = 2.5\times10^{-3}$: the linear term dominates.

$$T \approx \frac{2.5\times10^{-3}}{8.38\times10^{-4}} = 2.98\ \mathrm{Gyr},$$

and checking the exponential term at $T = 2.98$: $5.44\times10^{-14}e^{20.65} = 5.44\times10^{-14}\times9.3\times10^{8} = 5.1\times10^{-5}$, a 2 percent correction, giving $T\approx2.92$ Gyr.

(b) Unit B embays unit A, so B must be younger. $2.92 < 4.23$ Gyr. **Consistent.** This is a genuine check, not a formality: had the counts come out the other way, the mapping or the counts would be wrong.

(c) Something has gone wrong, because a flow that embays a crater on unit B must be younger than unit B, yet its higher crater density says older.

**The most likely cause is that the small flow's count is contaminated by secondary craters.** A large primary impact throws out ejecta that themselves make craters, often in clusters, chains and rays, sometimes hundreds of kilometres from the source. Small units are especially vulnerable: a single nearby primary can dump enough secondaries onto a few hundred square kilometres to double or triple its apparent density, and because they arrive all at once they violate the random-in-space, uniform-in-time assumption the chronology rests on. This is the standard explanation for anomalously old ages on small young units, and it is a systematic bias in one direction — secondaries can only make a surface look older.

Two other possibilities to rule out. The small flow may be a **thin veneer** through which craters in the underlying unit B still show, so the count mixes two surfaces. Or the count may simply be a **small-number fluctuation**: if the flow is a few hundred square kilometres, the Poisson error could easily span the gap between $3.0\times10^{-3}$ and $2.5\times10^{-3}$.

**How a mapper should respond**, in order: report the stratigraphic relation as primary and the count as anomalous, never the reverse — the embayment is a direct observation and the age is a model-dependent inference. Then re-count, excluding craters in obvious clusters and chains, restricting to larger diameters where secondaries are relatively rarer, and checking whether the flow is thick enough to have buried the substrate. If the anomaly survives all of that, the honest published result is the sequence plus a note that the count is inconsistent with it.

</details>

## Flashback

**From Lesson 2.5 (Volcanism and tectonics):** A stagnant-lid planet has surface heat flux $q = 25\ \mathrm{mW\,m^{-2}}$, $k = 3\ \mathrm{W\,m^{-1}\,K^{-1}}$, surface temperature 200 K and a lid base at 1600 K. (a) Compute the lithosphere thickness. (b) Its surface gravity is $2.8\ \mathrm{m\,s^{-2}}$; using $h_{\max} = 9\ \mathrm{km}\times(9.81/g)$, predict its tallest possible volcano. (c) Its largest volcano is 4 km high. Give two distinct explanations consistent with your answers.

<details>
<summary>Solution</summary>

(a) $$d = \frac{k\Delta T}{q} = \frac{3\times(1600-200)}{0.025} = \frac{4200}{0.025} = 1.68\times10^{5}\ \mathrm{m} = 168\ \mathrm{km}.$$

(b) $$h_{\max} = 9\times\frac{9.81}{2.8} = 31.5\ \mathrm{km}.$$

(c) The observed 4 km is eight times below the ceiling, so something other than the magma-column limit is binding. Two explanations:

**(i) The lid is too thick for magma to cross.** At 168 km, basaltic magma must rise through a very deep, cold, strong lithosphere; most of it stalls and freezes at depth as intrusions rather than erupting. The $h_{\max}$ formula gives the height a volcano *could* reach if fed indefinitely, but says nothing about whether it is fed at all. A planet can be far below its ceiling simply because volcanism stopped early — which, given a 168 km lid, is exactly what this planet's thermal state predicts.

**(ii) The volcanism ended before the edifice finished growing.** Olympus Mons took roughly three billion years of continuous plume activity to reach 22 km. A planet whose volcanism was active for only a few hundred million years, or whose plume was weak, produces a small volcano regardless of the gravitational ceiling. Height records *duration times supply rate*, and only the ceiling is set by gravity.

Both point the same way: this is a small, cold body that shut down early, and the 4 km volcano is a relic of a brief active period rather than evidence of a low ceiling.

</details>

## Connections

- **Backward:** [2.4](02-04-impact-cratering-chronology.md) supplies the crater counts and the chronology function that convert this lesson's orderings into ages; [2.5](02-05-volcanism-tectonics.md) supplies the volcanic and tectonic landforms being identified.
- **Forward:** [3.3](03-03-remote-spectroscopy.md) supplies the composition that morphology cannot; [3.2](03-02-gravity-topography-tidal-response.md) adds topography and gravity to the image; [5.3](05-03-ocean-worlds.md) reads the surfaces of Europa and Enceladus this way to argue for oceans beneath them.
- **Sideways:** [`geology`](../../geology/syllabus.md) owns stratigraphy, superposition and relative dating as terrestrial field practice, where you can also pick up the rock; this lesson owns the same logic applied at a distance, where the image is all there is. The Poisson counting statistics are [`prob-stat-refresher`](../../prob-stat-refresher/syllabus.md)'s, and the resolution-dependence of what you can detect is the same selection effect that dominates exoplanet demographics in [6.2](06-02-demographics-selection-effects.md).
