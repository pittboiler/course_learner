# Geology · Lesson 4.1: Relative Dating & Unconformities

> ⏱ ~15 min · Module 4: Geologic Time & the Rock Record · Builds on: [3.6](03-06-groundwater-aquifers-karst.md), [1.5](01-05-sedimentary-rocks.md), [2.5](02-05-folds-faults-structures.md) · Unlocks: [4.2](04-02-radiometric-dating.md)

## Why this matters

Here is the fact that deserves top billing in this module: **geologists worked out the entire order of Earth's history, correctly, roughly a century and a half before anyone could attach a number to any of it.** Steno stated superposition, original horizontality and cross-cutting in 1669. Hutton stood at Siccar Point in 1788 and read an ocean's worth of time out of one contact. William Smith mapped England on fossils by 1815. By 1841 every period of the Phanerozoic — Cambrian through Tertiary — had been named, ordered and correlated across continents. Radioactivity was not discovered until 1896. **The column came first; the numbers were bolted on afterwards, and they did not change the order.**

That is not just a nice story. It is why this lesson comes before [4.2](04-02-radiometric-dating.md) rather than after it. A radiometric date is a number attached to a *mineral*, not to a history. It tells you nothing until geometry tells you what the mineral is doing there. An age of 60 million years on a dike constrains the sandstone around it only because cross-cutting says the dike is younger — and that constraint is one-sided, a ceiling and not a floor. **Absolute dating does not replace relative dating; it calibrates it.** Every number in [4.3](04-03-geologic-timescale.md)'s timescale sits inside a geometric bracket built exactly this way.

And there is a third reason, which is the unsettling one. This lesson is mostly about **the places where the rock is missing** — and at any given spot on Earth, the missing part is most of it.

## The idea

Two moves, and everything else is bookkeeping.

**Move one: a contact is an event.** Where two rock bodies touch, something happened — one was there and the other arrived. Sediment settled on it, magma cut through it, a fault slid past it, a river planed it off. Relative dating is not a set of facts about rocks; it is a set of **licences for converting a geometric relation into a time relation**, one contact at a time.

**Move two: the licences give you a partial order, not a sequence.** If a dike cuts bed A but is buried under bed B, you know dike is after A and before B — but if a second dike elsewhere in the map is unconnected to the first, the two are simply *incomparable*. You order what the contacts constrain and you say "unresolved" for the rest. Assembling the ordered event list from the constraints is exactly a topological sort of a directed graph, and — as with any topological sort — a stubborn ambiguity in the answer usually means you are missing an edge, not that you reasoned badly. **Go find another contact.**

**Every principle has a failure mode, and this is the part textbooks bury.** Each licence is really "geometry G implies time relation T *unless* something else can produce G." Learning the exceptions is not pedantry; the exceptions are where field geology gets interesting, and each of them is diagnosable in the outcrop.

**One structural feature makes the failures manageable: they are one-sided.** A reworked fossil makes rock look older, never younger. A cross-cutting dike gives a minimum age for what it cuts, never a maximum. A detrital grain dates the source, so it can only be older than its host. **Almost every error in relative dating pushes the answer in a known direction**, which means an inconsistency between two methods usually tells you which one is lying.

**Then the unconformities**, which are the strangest objects in geology: contacts that represent *time* rather than material. An unconformity is a buried erosion surface or non-depositional surface, and the missing interval is a **hiatus**. Hutton's insight at Siccar Point was that the vertical Silurian greywacke below and the gently dipping Devonian sandstone above required, in order — deposition, deep burial, tilting to vertical, uplift of kilometres, erosion of all of it, subsidence, and renewed deposition. Seven events, one contact, "no vestige of a beginning."

## The formal version

Two time units, defined once. $\text{Ma}$ (mega-annum) is a *date*: millions of years before present. $\text{Myr}$ is a *duration*: a span of millions of years. A bed at $415\ \text{Ma}$ deposited over $2\ \text{Myr}$; keeping these apart prevents most of the sloppiness in this module.

### The seven principles, each with its logic and its failure mode

| Principle | The logic | The failure mode |
|---|---|---|
| **Superposition** | In an undisturbed pile, each layer was laid on something already there, so **younger is on top**. | **Overturning and thrust repetition** ([2.5](02-05-folds-faults-structures.md)). An overturned limb reads exactly backwards; a thrust stacks old on young. Fix: use **way-up indicators** ([1.5](01-05-sedimentary-rocks.md)) — graded bedding, cross-bed truncation, mud-crack taper — which are *internal to the bed* and therefore rotate with it. |
| **Original horizontality** | Water-laid sediment settles under gravity to near-horizontal, so **a dipping bed has been tilted since deposition**. | **Primary dips are real.** Aeolian and fluvial foresets reach the angle of repose (30–34 degrees), reef flanks and delta foresets are steep, alluvial-fan beds dip up to ~10 degrees. Measure the *bedding surface*, not the foreset inside it. |
| **Lateral continuity** | A bed extends outward until it thins to zero or hits the basin margin, so **matching beds across a canyon were once continuous**. | **Facies change** ([4.4](04-04-stratigraphy-facies-correlation.md)). One time-plane can be limestone offshore and sandstone nearshore. "Same rock type" is not "same bed" — that mistake is the reason lithostratigraphy and chronostratigraphy are separate ideas. |
| **Cross-cutting** | A feature that cuts another must have existed to do the cutting, so **the cutter is younger**. The strongest principle in the set, and it works on faults, dikes, veins, and erosion surfaces alike. | Barely fails, but: faults can be **reactivated** (the youngest slip dates the last movement, not the first), and a **sill** exploits a bedding plane so it can masquerade as a bed — which is why the next principle exists. |
| **Inclusions** | A fragment had to exist before the rock that encloses it, so **the clast is older than its host**. | Confusing a **clast** with an **apophysis** — an offshoot of an intrusion poking into its host, which in two dimensions looks like a fragment. Diagnostics: clasts are rounded and isolated; apophyses are angular and, traced far enough, **connect up into a network**. Xenoliths obey the rule too (host is younger). |
| **Baked contacts** | Magma cooks what it touches. **An intrusion bakes rock on both sides; a lava flow bakes only the rock beneath it**, and often has a vesicular, weathered top ([1.4](01-04-igneous-rocks-and-bodies.md)). | Thin, slow, or cool bodies bake feebly; a refractory host (quartzite) may show almost nothing. Corroborate with chilled margins on both surfaces and with xenoliths of the *overlying* unit. |
| **Faunal succession** | Fossil assemblages follow one another in a definite, worldwide, **non-repeating** order, so a given assemblage marks a given interval — and lets you correlate strata between regions that share no outcrop. | **Reworked fossils** eroded out of older rock into younger sediment; **facies control**, where a fossil's absence means the wrong environment, not the wrong time; and **provincialism**, where contemporaneous faunas differ between basins. |

*In words for the last row: Smith found that fossils work as a clock about sixty years before Darwin explained why they do.* It is worth contrasting this with [2.1](02-01-evidence-for-drift.md): Wegener's correlations were rejected for want of a mechanism, while Smith's were adopted immediately. **The difference is that faunal succession was offered as a tool and drift was offered as a claim about the machinery of the Earth**, and the standard of proof is not the same for the two.

### The three unconformities

An unconformity is a contact across which time is missing. Name it by **what lies below it**, and read it as a *sequence of required events*.

| Type | Below | Above | Events it demands | How you spot it |
|---|---|---|---|---|
| **Angular unconformity** | tilted or folded strata, truncated | flat-lying (or differently dipping) strata | deposit → deform → uplift → erode → subside → deposit | Obvious: discordant dips. The most informative and the least likely to be missed. |
| **Nonconformity** | igneous or metamorphic rock | sedimentary strata | crystallize or metamorphose at depth → uplift kilometres → erode → deposit | Obvious in kind, but it hides a *huge* exhumation: the rock below formed at 10–20 km depth. |
| **Disconformity** | strata, parallel to those above | parallel strata | deposit → pause and erode → deposit | **The hard one.** No angular discordance, so the surface can look like an ordinary bedding plane. Betrayed by erosional relief, channels, a basal lag of reworked clasts, palaeosols, borings or a mineral crust — or, often, only by the fossils. |

There is a fourth term, **paraconformity**, for a disconformity with no visible erosion surface at all — the gap is detectable only palaeontologically or geochemically. **A paraconformity is a bedding plane with ten million years in it.**

And unconformities are **diachronous**: an unconformity is a surface, and a surface is not one age. Trace it basinward and the hiatus shrinks, until the unconformity passes laterally into a conformable succession where deposition never stopped. **"This unconformity represents 54 Myr" is a statement about one outcrop, not about a surface.**

### How much is missing: completeness

Let $H$ be the preserved thickness of a section, $T$ the duration bracketed by dated horizons at its base and top, and $R_s$ the **short-term** accumulation rate — the rate at which that kind of sediment actually piles up while it is piling up. Then the time genuinely represented by rock is $H/R_s$, and the **stratigraphic completeness** is

$$f = \frac{H}{R_{s}\,T}$$

*In words: divide the time the rock needed to accumulate by the time it had available.* For ordinary shelf sections $f$ lands between $0.01$ and $0.1$ — **one to ten percent.**

The reason is a robust empirical result (Sadler, 1981): **measured accumulation rates fall systematically as the timespan you measure over grows**, roughly

$$R \propto T^{-\beta}, \qquad \beta \approx 0.4\!-\!0.8$$

across some ten orders of magnitude, from a flood layer to a whole basin fill. *In words: the longer the window, the more gaps it contains, and the gaps are what you are averaging in.* A rate quoted without its measurement interval is close to meaningless.

$$\boxed{\;\text{Most of geologic time, at any given place, is recorded by gaps rather than by rock.}\;}$$

## Picture

![A composite geologic cross-section engineered so that every relative-dating principle is needed at once. At the base a gneiss basement is overlain across an irregular nonconformity by three tilted beds, which a dike cuts and which are all beveled flat by an angular unconformity. Above that unconformity lie flat conglomerate, sandstone and shale, with a dark sill intruded between the sandstone and the shale and baked margins shown above and below it. A normal fault drops the right-hand block, offsetting everything from the gneiss up to the shale, and is itself planed off by a disconformity beneath an uppermost limestone that the fault does not cut. Eleven numbered badges mark the events, keyed to an ordered event list beneath the section.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the whole section).** Produce the ordered event list for the cross-section above, naming the licence for every step.

Work from the bottom, but let cross-cutting override position whenever the two disagree.

1. **Gneiss forms.** It is a metamorphic rock ([1.6](01-06-metamorphic-rocks-rock-cycle.md)), so it already implies a still older protolith and a burial history we cannot resolve here. It is cut by everything and cuts nothing: **oldest**.
2. **Uplift and erosion of the gneiss.** Licence: the **nonconformity**. Sediment does not sit on gneiss without kilometres of exhumation first — the gneiss recrystallized at depth and had to be brought to the surface and planed off.
3. **T1, T2, T3 deposited**, in that order. Licence: **superposition** for the order, **lateral continuity** for tracing them, and **original horizontality** for the claim that they were *flat* when laid down. (Way-up indicators inside them would confirm they are not overturned — worth checking, since a fold limb would look identical here.)
4. **Dike intrudes.** Licence: **cross-cutting** — it cuts the gneiss and T1, so it is younger than both.
5. **Tilting.** Licence: **original horizontality**. The beds dip, so the whole package was rotated after T3 was deposited. Note the dike is tilted with them, so tilting postdates the dike as well.
6. **Erosion, producing the angular unconformity.** Licence: **cross-cutting again** — the erosion surface truncates the tilted beds *and* the dike, so it is younger than both. This is the step people skip: an unconformity is a cutting feature and obeys cross-cutting like any other.
7. **F1, F2, F3 deposited.** Superposition for the order. The gneiss and limestone clasts in the base of F1 are an independent confirmation by **inclusions** — those clasts were eroded off the beveled surface, so the units they came from are older, which we already knew and now know twice.
8. **Sill intrudes between F2 and F3.** Licence: **baked contacts**. It is baked above *and* below, so both hosts were already in place — it is an intrusion, not a buried flow, and it is therefore **younger than F3**, despite lying beneath it. **This is the one step where superposition would give the wrong answer**, and it is why the baked-contact test earns its place.
9. **Normal faulting.** Licence: cross-cutting. The fault offsets everything from the gneiss up through F3 and the sill, so it postdates all of them. Hanging wall down: extension ([2.5](02-05-folds-faults-structures.md)).
10. **Erosion planes the fault scarp — the disconformity.** The fault is truncated, so erosion is younger than faulting. The beds above and below this surface are parallel, which is exactly why it is a disconformity and exactly why it is easy to miss.
11. **F4 deposited.** It is undeformed and unfaulted, and it sits on the disconformity: **youngest**.

**What is *not* determined:** the duration of anything, the absolute age of anything, and how much time hides in each of the two unconformities. Also, the tilting (5) and the erosion (6) are one event geologically — uplift — but relative dating cannot tell you whether the erosion began during tilting or long after.

**Example 2 (why you'd care — putting a number on a hiatus).** An angular unconformity is exposed in a road cut. Below it, tilted sandstone contains a volcanic ash bed $40\ \text{m}$ below the truncation surface, measured perpendicular to bedding, dated at $415\ \text{Ma}$. Above it, flat shale contains an ash $12\ \text{m}$ above the contact, dated at $359\ \text{Ma}$. Regional long-term accumulation for both units is about $25\ \text{m}/\text{Myr}$. (a) Bound the hiatus. (b) Improve the estimate. (c) State what the number does and does not mean.

**(a) The bracket.** The only two fixed points are the ashes:

$$\Delta t_{\max} = 415 - 359 = \mathbf{56\ \text{Myr}}.$$

That is a **maximum**, because part of that 56 Myr was spent depositing the 40 m below and the 12 m above, neither of which is missing time.

**(b) The correction.** Convert both thicknesses to durations:

$$\frac{40\ \text{m}}{25\ \text{m}/\text{Myr}} = 1.6\ \text{Myr} \quad\Longrightarrow\quad \text{youngest preserved bed below} \approx 415 - 1.6 = 413.4\ \text{Ma}$$

$$\frac{12\ \text{m}}{25\ \text{m}/\text{Myr}} = 0.48\ \text{Myr} \quad\Longrightarrow\quad \text{oldest bed above} \approx 359 + 0.48 = 359.5\ \text{Ma}$$

$$\boxed{\;\text{hiatus} \approx 413.4 - 359.5 = \mathbf{53.9 \approx 54\ \text{Myr}}\;}$$

**(c) What 54 Myr means — and three things it does not.**

It means: **no rock at this outcrop records the interval from about 413 Ma to about 359 Ma.** It does *not* mean nothing happened. In fact the unconformity demands a full programme of events inside that window: continued deposition of sandstone (now gone), tilting, uplift of the section to the surface, and erosion of an unknown thickness. **The record is missing precisely because so much was going on.**

Three caveats, in decreasing order of importance:

- **The unconformity is diachronous.** Trace it a hundred kilometres into the basin and the gap may be 5 Myr, or zero. The 54 Myr belongs to this road cut.
- **The $25\ \text{m}/\text{Myr}$ is itself a long-term rate**, so it already has small gaps averaged into it (the Sadler effect). It therefore *overestimates* the time to lay down 40 m of rock... no — it underestimates the rate at which rock actually accumulates, hence overestimates the durations 1.6 and 0.48 Myr, which makes 54 Myr very slightly too small. The correction is a fraction of a percent of the answer; the honest summary is that the corrections are soft and the bracket is hard.
- **The dated ashes carry analytical uncertainty**, typically a few tenths of a percent — of order $\pm 1\ \text{Myr}$ here ([4.2](04-02-radiometric-dating.md)). Quoting "53.9" implies a precision the data do not have. **Say 54 Myr, and say why.**

This is the workflow that built the timescale: **relative geometry fixes the order and the brackets, radiometric ages fill the brackets, and neither works alone** ([4.3](04-03-geologic-timescale.md)).

## Watch out

- **You might use superposition as a way-up indicator.** It is not one — it *assumes* way-up. In folded or thrust ground, superposition inverts silently and takes your whole history with it. Way-up indicators are internal to the bed and rotate with it; superposition is a statement about the outcrop, not the rock ([1.5](01-05-sedimentary-rocks.md)).
- **You might read a flat, parallel contact as continuous deposition.** Disconformities look like bedding planes. The most time-rich surface in a section is frequently its least conspicuous one — look for erosional relief, a lag of reworked clasts, borings, a palaeosol, or a jump in the fauna.
- **You might treat an unconformity as a thing with an age.** It is a surface with a *hiatus that varies along it*, and it dies out laterally into conformable strata. Ages and durations attach to localities, not to the surface.
- **You might date a bed by dating the dike that cuts it.** That gives a **minimum** age for the bed and nothing else — it could be off by half a billion years. Every cross-cutting age is one-sided in a known direction, which is a feature, not a nuisance ([4.2](04-02-radiometric-dating.md)).
- **You might think an igneous sheet between two beds erupted between them.** Only if it bakes just the floor and has a vesicular, weathered top. If it bakes both walls, it is a sill and it is younger than everything around it ([1.4](01-04-igneous-rocks-and-bodies.md)).
- **You might expect relative dating to give rates.** It gives order and nothing else — never duration, never rate, never how long an unconformity took. That gap is the entire reason [4.2](04-02-radiometric-dating.md) exists.

## One-liner

> Every contact is an event and every principle a one-sided licence for turning geometry into order — which is why the whole column was assembled correctly long before any numbers existed, and why the surfaces where the rock is *missing* carry most of the time.

## Problems

**P1 (🟢)** A cross-section shows, bottom to top: shale, then sandstone, then limestone. A granite pluton cuts the shale and the sandstone but not the limestone; the lowest 30 cm of the limestone contains rounded pebbles of that granite, and the limestone shows no baking. A fault offsets the shale, the sandstone and the granite, but stops at the base of the limestone. (a) Give the ordered event list. (b) Two separate observations show the granite is older than the limestone — name both and explain why each is independently sufficient. (c) Name the unconformity beneath the limestone where it rests on granite.

**P2 (🟡, an outcrop to interpret)** A quarry face shows, from the base up:

1. 8 m of horizontal grey limestone full of brachiopods;
2. a sharp surface with up to 30 cm of relief, littered with limestone pebbles that are bored by marine organisms;
3. 6 m of horizontal sandstone whose lowest 20 cm contain those same bored limestone pebbles;
4. a 1.5 m dark, fine-grained sheet with a glassy base and a bubbly, rust-reddened top; the sandstone below it is baked for 40 cm and the shale above it is not baked;
5. 4 m of shale.

(a) Name the surface at the top of unit 1, give the sequence of events it requires, and say which two observations prove it is not an ordinary bedding plane. (b) Is unit 4 a sill or a lava flow? Say what a radiometric age on it would date, relative to the sandstone and the shale. (c) The limestone yields Devonian brachiopods and the shale yields Carboniferous plants. What does that add, and which principle licenses it?

**P3 (🔴, how much is missing)** A 240 m section of shelf limestone contains an ash bed 3 m above its base dated at $468\ \text{Ma}$ and another 6 m below its top dated at $452\ \text{Ma}$. Modern carbonate shelves accumulate at roughly $300\ \text{m}/\text{Myr}$. (a) Compute the apparent long-term accumulation rate between the two ashes, in $\text{m}/\text{Myr}$ and in $\text{mm}/\text{yr}$. (b) Compute the stratigraphic completeness $f$. (c) A single bedding plane mid-section carries a burrowed, mineral-encrusted crust. What is the maximum hiatus it could represent, and why is that a maximum rather than an estimate? (d) There is no angular discordance anywhere in the section. Explain why that is not evidence of a continuous record.

<details>
<summary>Solutions</summary>

**P1 (a)** The order:

1. **Shale** deposited.
2. **Sandstone** deposited (superposition).
3. **Granite** intrudes — cross-cutting: it cuts both.
4. **Faulting** — the fault offsets the granite, so it is younger than the intrusion.
5. **Uplift and erosion**, exposing the granite at the surface and beveling the fault.
6. **Limestone** deposited on that surface.

**(b) Two independent proofs that the granite predates the limestone.**

- **Inclusions.** The limestone's basal bed contains granite pebbles, so the granite existed as solid rock before the limestone was laid down. The pebbles being *rounded* strengthens it further: they were exposed, weathered and transported, which takes time at the surface.
- **No baking.** A pluton emplaced into the limestone would have cooked it — a contact aureole is unavoidable at granite temperatures. Its absence means the limestone was not there when the granite was hot.

Each alone settles the question, and they fail in different ways (a clast could in principle be an apophysis; baking can be feeble in a refractory host), so together they are much stronger than either.

**(c)** A **nonconformity** — sedimentary rock resting on eroded intrusive igneous rock. Note what it implies: the granite crystallized at depth, so several kilometres of overlying rock were removed before the limestone arrived.

**P2 (a)** A **disconformity**. Sequence: limestone deposited → lithified → erosion or prolonged non-deposition at the surface → renewed deposition of sand.

The two observations that rule out an ordinary bedding plane:

- **30 cm of erosional relief** — a depositional bedding plane is smooth at that scale; relief means material was removed.
- **Bored limestone pebbles** — boring organisms require *lithified* rock, so the limestone had to harden, then be broken up and reworked, before the sand arrived. The pebbles reappearing in the base of the sandstone is the **inclusions** principle confirming the direction.

(A palaeosol or a mineral crust would do the same job. The general lesson: a disconformity is proved by evidence of a **pause**, not by a difference in rock type.)

**(b) A lava flow.** Three observations, all pointing the same way:

- **Baked below but not above.** A sill emplaced beneath the shale could not avoid cooking it.
- **A vesicular, reddened top** — gas exsolved at atmospheric pressure and the surface then oxidized in air ([1.4](01-04-igneous-rocks-and-bodies.md), [2.8](02-08-volcanoes-volcanic-hazards.md)).
- **A glassy base** — chilled against cold ground.

**What its age dates:** the eruption, which occurred *after* the sandstone was deposited and *before* the shale. That is a genuine two-sided bracket — a minimum age for the sandstone and a maximum age for the shale — and it is the single most valuable kind of date in a sedimentary sequence. **Had it been a sill, the age would have been only a one-sided ceiling on both.**

**(c)** It converts "some time is missing" into "at least a system boundary is missing." Devonian below and Carboniferous above means the hiatus spans the Devonian–Carboniferous boundary, so the gap is of order tens of millions of years rather than a storm-season pause. The licence is **faunal succession** — and note that it works here with no radiometric data at all, which is precisely how the timescale was built before 1900.

(Caveat worth stating: the brachiopods date the limestone and the plants date the shale, so what is bracketed is the interval between them. Reworked fossils could only make the gap *look* larger, never smaller.)

**P3 (a)** Thickness between the two ashes:

$$H = 240 - 3 - 6 = 231\ \text{m}, \qquad T = 468 - 452 = 16\ \text{Myr}$$

$$R_{\text{apparent}} = \frac{231\ \text{m}}{16\ \text{Myr}} = \mathbf{14.4\ \text{m}/\text{Myr}}$$

In millimetres per year, using $1\ \text{Myr} = 10^{6}\ \text{yr}$:

$$14.4\ \frac{\text{m}}{10^{6}\ \text{yr}} = 1.44\times10^{-5}\ \text{m}/\text{yr} = \mathbf{0.0144\ \text{mm}/\text{yr}}$$

— about the thickness of a sheet of paper per decade, which should already look implausible for a shallow carbonate shelf.

**(b)** Time actually required to build 231 m at the short-term rate:

$$\frac{231\ \text{m}}{300\ \text{m}/\text{Myr}} = 0.77\ \text{Myr}$$

$$f = \frac{0.77}{16} = \mathbf{0.048}, \ \text{i.e. about } 4.8\ \text{percent}$$

**Roughly 95 percent of the 16 Myr — about 15.2 Myr — is not represented by rock at all**, despite the section looking like an orderly, unbroken pile of limestone. The apparent rate is low not because deposition was slow but because it was mostly *absent*.

**(c)** In the limit, the crust could account for **all** the missing time:

$$\Delta t_{\max} = 16 - 0.77 = \mathbf{15.2\ \text{Myr}}$$

It is a maximum, not an estimate, because the missing time is certainly **distributed**: every bedding plane in the section is a small hiatus, and the Sadler scaling says gaps exist at every scale from the storm bed to the sequence. The encrusted surface proves a pause long enough to lithify and mineralize the seafloor — perhaps $10^{3}$ to $10^{5}$ years — but nothing licenses assigning it the whole 15.2 Myr. **The crust gives you a lower bound on one gap and the completeness calculation gives you an upper bound on all of them; the truth is a distribution in between.**

**(d)** Because **discordance is not required for a gap**. Angular unconformities need tectonic tilting between the two depositional episodes; a shelf that simply stops receiving sediment — sea level falls, the carbonate factory shuts down, currents sweep the seafloor — leaves a **disconformity** with perfectly parallel beds above and below. On a stable platform, nothing ever tilts, so *every* gap in the section is of this invisible kind.

This is the reframing worth keeping: **the absence of visible unconformities is evidence about the tectonics, not about the completeness.** Quiet, undeformed platform sections are typically the *least* complete records there are.

</details>

## Flashback

**From Lesson 3.5 (Deserts, Wind & Coasts):** A cliff exposes a pure quartz sandstone. The grains are extremely well sorted, very well rounded, and frosted. Internally it is cross-bedded, with foreset sets up to 12 m tall dipping consistently 32 degrees toward the southwest; the surfaces bounding the sets are flat and nearly horizontal. (a) Aeolian or fluvial? Give two independent reasons. (b) Which way did the wind blow? (c) Why 32 degrees rather than 15 or 45? (d) Name one feature whose presence would overturn your answer to (a).

<details>
<summary>Solution</summary>

**(a) Aeolian**, on two grounds that fail independently:

- **Set thickness.** A cross-bed set records the height of the migrating bedform's slip face, and a river's bedforms are capped by its channel depth — fluvial sets are typically decimetres, rarely more than a couple of metres. **A 12 m set requires a dune tens of metres high**, which only wind builds.
- **Grain texture.** Air is about 800 times less dense than water, so it can carry only a narrow size range and **sorts far more sharply**. And in saltation there is no water film to cushion grain-on-grain impacts, which rounds and frosts quartz. Extreme sorting plus rounding plus frosting is an aeolian signature.

**(b) From the northeast, blowing toward the southwest.** Foresets are avalanche deposits on the **lee** slip face, so they dip **downwind**. Reading palaeowind directly off ancient cross-beds is the payoff of the dune geometry, and it is how Permian–Jurassic desert palaeogeography was reconstructed.

**(c) Because the slip face stands at the angle of repose.** Sand delivered over the dune crest oversteepens the lee slope until the driving shear exceeds the frictional resistance — the factor of safety reaches unity ([3.2](03-02-mass-wasting-slope-stability.md)) — and a grainflow avalanche runs, restoring the slope to the friction angle of dry, well-sorted sand, about **30 to 34 degrees**. Steeper is not stable and gentler is not being fed, so the system is pinned there. **The 32 degrees is not a coincidence of this outcrop; it is a mechanical attractor**, and finding a value well outside that band is itself a clue (damp or cohesive sand, or not a slip face at all).

**(d)** Sets only a few decimetres thick bounded by **concave-up erosional scours**, each floored by a poorly sorted granule-and-pebble lag — that is a river channel filling and re-cutting, and it would make the deposit fluvial. Mud drapes or a bimodal, poorly sorted fraction would point the same way. A single unambiguous feature is the scour geometry: **wind erodes surfaces that are flat and regional; water erodes surfaces that are concave and local.**

(Note the way-up bonus, from [1.5](01-05-sedimentary-rocks.md): the foresets are truncated at the top of each set and curve tangentially into the base, so the cross-bedding tells you which way is stratigraphically up as well as which way the wind blew — two independent readings from one structure.)

</details>

## Connections

- **Backward:** [1.5](01-05-sedimentary-rocks.md) supplied the way-up indicators that keep superposition honest; [1.4](01-04-igneous-rocks-and-bodies.md)'s sill-versus-flow contact test is promoted here into a dating principle; [1.6](01-06-metamorphic-rocks-rock-cycle.md) explains why a nonconformity implies kilometres of exhumation; [2.5](02-05-folds-faults-structures.md) supplies the overturning and thrusting that break superposition, and the fault geometry read in the figure.
- **Forward:** [4.2](04-02-radiometric-dating.md) fills the brackets built here with numbers, and the one-sidedness of cross-cutting is exactly why detrital and intrusive ages behave the way they do; [4.3](04-03-geologic-timescale.md) is this logic plus faunal succession applied globally; [4.4](04-04-stratigraphy-facies-correlation.md) turns lateral continuity and its facies failure mode into correlation; [4.5](04-05-reading-a-geologic-map.md) does all of it in map view, where the events must be read from outcrop patterns rather than a drawn section. [5.2](05-02-earth-history-hadean-proterozoic.md) and [5.3](05-03-earth-history-phanerozoic.md) are the payoff.
- **Sideways:** the biological content of faunal succession — why assemblages never repeat, and what the extinctions punctuating them were — belongs to [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md). The completeness argument is a sampling problem: a record whose measured rate depends on the measurement window is the geologic cousin of any scale-dependent statistic, and the return-period reasoning in [`prob-stat-refresher`](../../prob-stat-refresher/syllabus.md) is the right frame for asking what a preserved section is a sample *of*. And the event-ordering itself is a topological sort of a partial order — the ambiguities in the answer are precisely the pairs the contacts leave unconstrained.
