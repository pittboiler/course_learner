# Geology · Lesson 4.4: Stratigraphy, Facies & Correlation

> ⏱ ~15 min · Module 4: Geologic Time & the Rock Record · Builds on: [4.3](04-03-geologic-timescale.md), [4.1](04-01-relative-dating-unconformities.md), [1.5](01-05-sedimentary-rocks.md) · Unlocks: [4.5](04-05-reading-a-geologic-map.md)

## Why this matters

[1.5](01-05-sedimentary-rocks.md) taught you to read one rock: this sandstone is well sorted and cross-bedded, so it was a beach. This lesson turns a *stack* of such rocks into a history — the sea came in, then went out, and here is how fast — and then correlates that history to a section a hundred kilometres away. Every reconstruction in [5.2](05-02-earth-history-hadean-proterozoic.md) and [5.3](05-03-earth-history-phanerozoic.md), every oil reservoir ever mapped, and every environmental context ever assigned to a fossil is built on this machinery.

It rests on one distinction that people skip, and skipping it is the source of essentially all stratigraphic confusion: **a boundary between two rock bodies is almost never a moment in time.** [4.1](04-01-relative-dating-unconformities.md)'s superposition tells you the shale on top of the sandstone is younger *here*. It does not tell you that the sandstone here is the same age as the sandstone twenty kilometres away — and in general it is not. The base of that sandstone can be a million years younger at one end of a basin than the other, while the ash bed cutting straight through the middle of both is the same afternoon in both places.

## The idea

**At any single instant, a coastline deposits several different sediments at once.** Walk seaward from the shore today: rooted swamp mud, then a lagoon, then clean beach sand, then offshore silty mud, then — out where terrigenous mud no longer reaches — carbonate built by organisms. All five are forming *right now*, side by side. Each is a **facies**: a body of sediment whose grain size, structures, geometry and fossils record a particular depositional environment.

**So a lateral change in rock means a change in environment, not a change in age.** This is the whole lesson in one sentence, and everything else follows.

Now let the shoreline move. Sea level creeps up, the shore retreats landward, and every belt migrates landward with it. Sand is laid where mud was; mud is laid where carbonate was. **The base of the sand body is therefore the track of the migrating shoreline through space and time** — it is younger everywhere the shoreline arrived later. Geologists call such a surface **diachronous**, "across time," and it is the normal case, not a pathology.

**That gives you two completely different families of surface in a rock record, and they are not parallel:**

- **Rock boundaries** (the base of the sandstone, the top of the limestone) — the trajectory of a moving environment. Diachronous.
- **Time lines** (the ash that fell in an afternoon, the day the magnetic field reversed, an isotope excursion in the world ocean) — genuine instants, and they cut straight across facies.

**The immediate payoff is Walther's law**, which reads the vertical stack as a horizontal journey: **if a core shows sand passing up into mud passing up into limestone with no break, those three environments must have been neighbours.** You are not looking at three unrelated worlds stacked by coincidence; you are looking at one shoreline sliding past your drill hole.

**And the second payoff is that whether the sea comes in or goes out is not primarily about sea level.** It is a race between **accommodation** — the space available for sediment beneath sea level, created by subsidence and by sea-level rise — and **sediment supply**, which fills it. Starve a subsiding basin and it drowns while global sea level is falling. Bury a stable one in sediment and the shoreline builds out to sea with no sea-level change at all.

## The formal version

### Facies and diachroneity

A **facies** is a body of rock with a distinctive set of characteristics — lithology, sedimentary structures, geometry, fossil content — that reflect the environment in which it formed. **Lithofacies** refers to the physical characters, **biofacies** to the fossil assemblage; they need not have the same boundaries.

Let $x$ be horizontal position across the basin (landward positive) and $x_s(t)$ the shoreline position at time $t$. The base of the beach-sand body at position $x$ formed at whichever time satisfies

$$x_s(t) = x .$$

*In words: the rock boundary is the graph of the shoreline's position against time — it is a trajectory, not an instant.* A time line, by contrast, is the surface $t = \text{constant}$. **The two coincide only if the shoreline never moved**, which is the one thing shorelines reliably do not do.

### Walther's law, stated carefully

> **Walther's law.** Facies occurring in a **conformable** vertical succession were deposited in **laterally adjacent** environments.

*In words: only environments that were neighbours in space can end up stacked on top of one another without a break.*

Three qualifications, all routinely dropped, and dropping them is how the law gets misused:

1. **"Conformable" is load-bearing.** Across an unconformity or any surface with a significant hiatus ([4.1](04-01-relative-dating-unconformities.md)), the law says nothing — the missing environments are sitting inside the gap. **The places where Walther's law fails are exactly the surfaces sequence stratigraphy cares most about**, so a stratigrapher's first job is to decide whether a contact is conformable at all.
2. **It is a one-way inference.** Adjacent environments do *not* have to produce a vertical succession; they only do so if the belts migrate.
3. **It is a statement about deposition, not a law of physics.** It works because environments are laterally continuous and shorelines move, and it fails wherever they are not — abrupt fault-controlled margins, for instance.

### Transgression, regression and accommodation

Let

- $\sigma$ = tectonic subsidence rate of the basin floor,
- $\varepsilon$ = **eustatic** sea-level rise rate (global, measured against the centre of the Earth),
- $R$ = sediment accumulation rate at the point of interest, corrected for compaction,
- $d$ = water depth.

Then

$$\boxed{\;\frac{dd}{dt} \;=\; \underbrace{\sigma + \varepsilon}_{\text{accommodation created}} \;-\; \underbrace{R}_{\text{accommodation filled}}\;}$$

*In words: water deepens when space is made faster than sediment fills it.* The quantity $\sigma + \varepsilon$ is the rate of **relative sea-level** change — what the rocks at that spot actually record. Three regimes:

| Sign of $dd/dt$ | Stacking | Shoreline | Vertical succession |
|---|---|---|---|
| $> 0$ | retrogradational | moves landward — **transgression** | fining- and deepening-upward |
| $= 0$ | aggradational | stationary | same facies repeats |
| $< 0$ | progradational | moves seaward — **regression** | coarsening- and shallowing-upward |

On a shelf of gradient $S$ (vertical rise per unit horizontal distance), the shoreline moves at

$$\frac{dx_s}{dt} \;=\; \frac{\sigma + \varepsilon - R}{S} .$$

*In words: divide the rate of drowning by the slope of the ramp, and you get how fast the shore runs inland.* **Because $S$ on a continental shelf is of order $10^{-4}$ to $10^{-3}$, the division amplifies by a factor of a thousand or more** — which is why millimetre-per-year sea-level changes move coastlines metres per year, and why transgressive facies belts are tens of kilometres wide and only metres thick.

**Eustatic versus relative is not pedantry.** A section records only $\sigma + \varepsilon$; it cannot separate the two. **A basin can record a textbook transgression during a global sea-level fall**, if it is subsiding fast enough — which is Problem 3, and which is why reconstructing a global sea-level curve requires many basins on different plates plus an independent ice-volume proxy.

### Correlation: what ties to what, and how far

| Method | What is matched | Reach | Resolution | Is it a time line? |
|---|---|---|---|---|
| Lithostratigraphic | physical continuity, marker beds, log signatures | one basin | bed-scale locally | **No** — diachronous |
| Biostratigraphic | first and last appearances of taxa ([4.3](04-03-geologic-timescale.md)) | intercontinental, within a realm | $\sim0.5$–$2\ \text{Myr}$ | nearly — appearances lag by migration time |
| Tephrostratigraphic | a volcanic ash, fingerprinted by glass chemistry | $10^2$–$10^3\ \text{km}$ | **years** | **Yes** |
| Magnetostratigraphic | the pattern of reversals | global | $10$–$10^2\ \text{kyr}$ | yes, but the pattern alone is non-unique |
| Chemostratigraphic | $\delta^{13}\text{C}$ excursions, $^{87}\text{Sr}/^{86}\text{Sr}$ curve | global ocean | $0.1$–$1\ \text{Myr}$ | yes, to ocean-mixing time |
| Annual layers | varve or rhythmite thickness patterns | one basin | **1 year** | **Yes** |

**This is why volcanic ash beds are worth so much more than their thickness suggests.** A centimetre of altered glass is deposited in days, blankets every environment it falls on regardless of facies, *and* — because it contains sanidine and zircon that crystallized just before eruption — can be dated directly ([4.2](04-02-radiometric-dating.md)). It is simultaneously a time line and a number. Nothing else in stratigraphy is both.

### The stratigraphic column and its two vocabularies

The standard product is a measured **stratigraphic column**: thickness on the vertical axis, grain size on the horizontal, with structures, fossils, contacts and sample points logged bed by bed. Units are nested — **bed → member → formation → group → supergroup** — and the formation is the working unit, defined by one criterion only: **a formation is a rock body distinctive enough and thick enough to be mapped at the scale used.** Not an age. Not an environment. **Mappability.**

Because of that, geology carries two parallel vocabularies for the same interval:

| Rock body (chronostratigraphic) | Time interval (geochronologic) |
|---|---|
| System | Period |
| Series | Epoch |
| Stage | Age |

You collect a fossil *from* the Cretaceous System and it lived *during* the Cretaceous Period. The pairing exists precisely because rock and time are different things, which is this lesson's whole subject.

**One tool worth knowing by name:** a **Wheeler diagram** replots a cross-section with *time* rather than thickness on the vertical axis. Facies bodies distort into their true time ranges, and — the reason to bother — **every hiatus becomes a visible blank area.** A conventional cross-section shows you the rock that is present; a Wheeler diagram shows you the time that is missing, which in most sections is the majority of it.

## Picture

![Left panel: a cross-section from land to sea with four facies belts, coastal plain, beach sand, offshore mud and shelf carbonate, whose boundaries are steep lines climbing landward, crossed by near-horizontal dashed time lines and one red ash bed, so that each facies boundary is visibly younger in the landward direction. Right panel: two vertical sections logged at marked positions in the cross-section, one showing sand passing up into mud and the other showing thin mud passing up into carbonate, tied together by the single ash bed which lies inside the sandstone in one section and inside the carbonate in the other.](assets/04-04-fig1.svg)

**Read the left panel twice.** Once along the dashed lines: each is an instant, and each crosses all four facies, because at that instant all four were forming side by side. Once along the solid lines: each is a facies boundary, and each climbs landward, because the shoreline retreated. **The two families of line are not parallel, and that non-parallelism is diachroneity made visible.**

Then the right panel: sections X and Y record different facies pairs and share no contact whatsoever, yet the ash puts one identical instant in both — inside sandstone at X, inside carbonate at Y. **Correlate the ash and you have time. Correlate the sandstone and you have a shoreline trajectory, which is a different and much less useful thing to have accidentally.**

## Worked examples

**Example 1 (mechanical — how fast does a shoreline run, and how diachronous is the sand?).** A continental shelf has a gradient of $0.5\ \text{m/km}$. During post-glacial melting, relative sea level rises at $2.5\ \text{mm/yr}$; sediment supply is negligible compared with the rate of drowning. (a) How fast does the shoreline migrate? (b) How long does it take to cross $40\ \text{km}$, and what is the age difference between the two ends of the beach-sand sheet's base? (c) Would biostratigraphy detect that diachroneity?

**(a)** Convert the gradient to a dimensionless slope:

$$S = \frac{0.5\ \text{m}}{1000\ \text{m}} = 5\times10^{-4}.$$

With $R \approx 0$,

$$\frac{dx_s}{dt} = \frac{\sigma + \varepsilon}{S} = \frac{2.5\times10^{-3}\ \text{m/yr}}{5\times10^{-4}} = \mathbf{5\ \text{m/yr}} = 5\ \text{km/kyr}.$$

**A 2.5 mm/yr rise moves the coast 5 m a year.** The slope did all the work: a factor of 2000.

**(b)** $$t = \frac{40{,}000\ \text{m}}{5\ \text{m/yr}} = \mathbf{8000\ \text{yr}}.$$

The base of the sand at the landward end is 8000 years younger than at the seaward end. **It is one continuous, mappable, perfectly ordinary sandstone bed, and it is eight thousand years out of true across its own outcrop.**

**(c)** No. Biostratigraphic zones resolve $10^{5}$–$10^{6}$ years, so an 8000-year offset is far inside the noise; every fossil in the sheet would say "same zone." **The diachroneity is real but invisible at that resolution** — which is the honest reason lithostratigraphic correlation survives as a working method. Push to a tool with the resolution to see it, however — an ash, a varve count, a radiocarbon series across the sheet — and the offset is glaring, and any conclusion that assumed the bed was a time plane collapses.

*Sanity check on the model:* if supply were not negligible but $1.5\ \text{mm/yr}$, the numerator drops to $1.0\ \text{mm/yr}$ and the shoreline slows to $2\ \text{m/yr}$. Supply always fights transgression.

**Example 2 (why you'd care — a regression with no sea-level change at all).** A passive-margin basin subsides at $\sigma = 0.30\ \text{mm/yr}$; eustatic sea level rises at $\varepsilon = 0.10\ \text{mm/yr}$; decompacted sediment accumulates at $R = 0.35\ \text{mm/yr}$. (a) Is the succession deepening or shallowing, and by how much over $2\ \text{Myr}$? (b) A mountain range then rises in the hinterland ([2.6](02-06-mountain-building.md)) and doubles the supply to $0.70\ \text{mm/yr}$, with $\sigma$ and $\varepsilon$ unchanged. What does the section record now, and how long until the shoreline starts building seaward?

**(a)** $$\frac{dd}{dt} = (0.30 + 0.10) - 0.35 = +0.05\ \text{mm/yr}.$$

Deepening — a slow transgression. Over $2\ \text{Myr}$:

$$\Delta d = 0.05\ \text{mm/yr} \times 2\times10^{6}\ \text{yr} = 1\times10^{5}\ \text{mm} = \mathbf{100\ \text{m}} \text{ of deepening},$$

$$\text{thickness deposited} = 0.35 \times 2\times10^{6} = 7\times10^{5}\ \text{mm} = \mathbf{700\ \text{m}}.$$

**700 m of section recording 100 m of drowning** — retrogradational, fining upward, each facies belt overlain by its more seaward neighbour, exactly as Walther predicts.

**(b)** $$\frac{dd}{dt} = (0.30 + 0.10) - 0.70 = -0.30\ \text{mm/yr}.$$

Shallowing. Starting from the $100\ \text{m}$ of water depth built up in part (a):

$$t = \frac{100\ \text{m}}{0.30\ \text{mm/yr}} = \frac{1\times10^{5}\ \text{mm}}{0.30\ \text{mm/yr}} = 3.3\times10^{5}\ \text{yr} \approx \mathbf{330\ \text{kyr}}.$$

After that the basin is full to sea level, the excess supply is bypassed seaward, and the shoreline **progrades** — a coarsening-upward regressive succession, delta over shelf mud, capped by coastal plain.

**Nothing happened to sea level.** Eustatic sea level went on rising at $0.10\ \text{mm/yr}$ throughout. **The transgression and the regression in this section were both written by the sediment budget**, and a stratigrapher who read the shallowing-upward package as a fall in sea level would be reading a mountain range in Tibet as an ice sheet in Antarctica.

**This is the reason sequence stratigraphy exists.** Its practical content is exactly this: identify the surfaces where the accommodation-versus-supply balance flipped, bundle the strata between them into **sequences**, and correlate the *surfaces* rather than the beds. The surfaces are much closer to time lines than the facies are, and — the commercial reason the method took over — the packages predict where the reservoir sand and the sealing shale will sit before anyone drills.

## Watch out

- **You might think a formation is a time unit.** It is a *map* unit — defined by being distinctive and thick enough to trace at the mapping scale. Its boundaries are facies boundaries, hence diachronous, and a formation routinely spans different time intervals in different places. This is the single most common error in reading a geologic map ([4.5](04-05-reading-a-geologic-map.md)).
- **You might state Walther's law as "the vertical succession equals the lateral succession," full stop.** It holds only across **conformable** contacts. Applied across an unconformity it invents a history that never happened, and the unconformities are precisely where the interesting events hide.
- **You might read a deepening-upward section as a rise in global sea level.** A section records **relative** sea level, $\sigma + \varepsilon$, and cannot decompose it. Subsidence, sediment supply and eustasy produce identical-looking stacks.
- **You might think transgression requires sea level to rise.** It requires accommodation to be created faster than supply fills it. Cutting off the sediment supply transgresses a coast just as effectively as raising the sea — which is why damming a river drowns its delta.
- **You might treat "correlated" as "the same age."** Lithostratigraphic correlation asserts physical continuity or similarity, nothing more. Only ashes, reversals, isotope excursions and annual layers assert simultaneity, and only biostratigraphy asserts it over long distances — coarsely.

## One-liner

> A rock boundary is the track of a moving environment and a time line is an instant, and they are never parallel — so read facies for *where*, ashes and fossils for *when*, and accommodation minus supply for which way the shoreline went.

## Problems

**P1 (🟢)** A conformable core, bottom to top: (1) grey mudstone with roots and thin coal seams; (2) finely laminated dark mud with a low-diversity brackish bivalve fauna; (3) well-sorted cross-bedded quartz sandstone with shell debris; (4) bioturbated grey mud with a diverse fully marine fauna; (5) skeletal limestone with corals.

(a) Apply Walther's law: what arrangement of environments existed at a single moment, listed land to sea? (b) Transgression or regression, and which way did the shoreline move? (c) Re-mapping shows a **paleosol with truncated root traces** at the base of unit 3, and biostratigraphy shows a $2\ \text{Myr}$ gap there. What must you now withdraw from your answer?

**P2 (🟡)** Two sections, $25\ \text{km}$ apart, both sandstone below and shale above, both conformable. Two ash beds are chemically fingerprinted as the same two eruptions, dated at $40.0\ \text{Ma}$ (lower) and $38.0\ \text{Ma}$ (upper).

| | Section A (west) | Section B (east) |
|---|---|---|
| sandstone | 0–12 m | 0–4 m |
| shale | 12–30 m | 4–35 m |
| lower ash | 9 m | 14 m |
| upper ash | 27 m | 30 m |

(a) Compute the accumulation rate in each section between the ashes. (b) Interpolate the age of the sandstone–shale contact at each locality, and state whether that contact is a time line. (c) Compute the shoreline migration rate in $\text{cm/yr}$ and say which way the land lay. (d) Your answer is a hundred times slower than Example 1's transgression. Is one of them wrong?

**P3 (🔴, bridges to sea-level history in 5.3)** A basin subsides at $\sigma = 0.25\ \text{mm/yr}$. Over a $1\ \text{Myr}$ interval, global sea level **falls** $40\ \text{m}$. Sediment accumulates at $R = 0.20\ \text{mm/yr}$.

(a) Compute $dd/dt$ and state what the section records. (b) A geologist finds the same shallowing-to-deepening turnaround in this basin and in one on another continent, and proposes it as a global eustatic event. What would it take to justify that claim, and what independent evidence could support it? (c) In this basin, will the base of the transgressive shale be a time line? Answer with the physics, not the vocabulary.

<details>
<summary>Solutions</summary>

**P1 (a)** Read the stack landward-to-seaward in the order it appears, since a conformable succession is a lateral traverse recorded vertically:

**coastal swamp (rooted mud, coal) → lagoon (laminated brackish mud) → barrier or beach sand (well-sorted, cross-bedded) → offshore shelf (bioturbated marine mud) → outer-shelf carbonate (skeletal limestone).**

Two of the details do independent work. The **laminated, low-diversity, unbioturbated** mud of unit 2 says restricted and stressed — abnormal salinity, so a lagoon rather than the open shelf. The **bioturbated, diverse** mud of unit 4 says normal marine salinity and oxygenated bottom water. Same lithology, opposite environments; the fauna and the burrows separate them.

**(b) Transgression.** Each unit is more seaward than the one below, so water deepened and **the shoreline moved landward** over the drill site. The absence of coarse terrigenous mud in unit 5 says the shoreline had by then retreated far enough that land-derived mud no longer reached — carbonate factories work where clastics do not.

**(c) Withdraw the continuity, not the environments.** A paleosol with truncated roots is a subaerial exposure surface, and a $2\ \text{Myr}$ gap makes it an unconformity ([4.1](04-01-relative-dating-unconformities.md)). **Walther's law does not apply across it**, so units 1–2 and units 3–5 cannot be read as one continuous shoreline migration.

What survives: each half is internally conformable, so units 1–2 record swamp beside lagoon, and units 3–5 record beach, shelf and carbonate as neighbours. What does not survive: the claim that the lagoon and the beach were adjacent, and the claim that the whole core is one transgression. **The missing facies are in the gap** — the section fell subaerial, was eroded, and the record resumed with a different configuration. In sequence-stratigraphic terms that surface is the sequence boundary, and it is the most informative contact in the core.

**P2 (a)** Between the ashes, $\Delta t = 40.0 - 38.0 = 2.0\ \text{Myr}$.

$$\text{A}: \ \frac{27 - 9}{2.0} = \frac{18\ \text{m}}{2.0\ \text{Myr}} = \mathbf{9\ \text{m/Myr}}, \qquad \text{B}: \ \frac{30 - 14}{2.0} = \frac{16\ \text{m}}{2.0\ \text{Myr}} = \mathbf{8\ \text{m/Myr}}.$$

**(b)** Interpolate from the lower ash, assuming these rates hold locally.

Section A: the contact at $12\ \text{m}$ is $3\ \text{m}$ **above** the $40.0\ \text{Ma}$ ash:

$$\Delta t = \frac{3\ \text{m}}{9\ \text{m/Myr}} = 0.33\ \text{Myr} \;\Rightarrow\; \text{age} = 40.0 - 0.33 = \mathbf{39.67\ \text{Ma}}.$$

Section B: the contact at $4\ \text{m}$ is $10\ \text{m}$ **below** the ash, so this is an extrapolation downward — flag it:

$$\Delta t = \frac{10\ \text{m}}{8\ \text{m/Myr}} = 1.25\ \text{Myr} \;\Rightarrow\; \text{age} = 40.0 + 1.25 = \mathbf{41.25\ \text{Ma}}.$$

$$\text{diachroneity} = 41.25 - 39.67 = \mathbf{1.58\ \text{Myr}}.$$

**The contact is emphatically not a time line.** The ashes are; the lithologic contact between them is a million and a half years out of true over $25\ \text{km}$.

**(c)** $$\frac{25\ \text{km}}{1.58\ \text{Myr}} = 15.8\ \text{km/Myr} = 15.8\ \text{m/kyr} = \mathbf{1.6\ \text{cm/yr}}.$$

The contact is **younger to the west**, so the shoreline migrated west with time. Sand gives way to shale as water deepens, so the deepening front moved west: **the land lay to the west**, and this is a westward transgression. (The thicker sand in the west is consistent — the shoreface belt sat there, closer to its source, rather than being a thin drowned sheet.)

**(d) Neither is wrong; they measure different things.** Example 1 is an *instantaneous* rate during the fastest transgression of the Quaternary, driven by deglacial sea-level rise of $2.5\ \text{mm/yr}$ across a very low ramp. Section A-to-B is a **net displacement averaged over 1.6 million years**, and over that span the shoreline advanced and retreated thousands of times. Net displacement divided by long time is always far smaller than the typical instantaneous rate — the same reason a river's long-term meander-belt migration is negligible compared with how fast a cut bank retreats in a single flood.

**The lesson: a stratigraphic rate is only meaningful with its averaging interval attached.** Sedimentation and migration rates measured in the rock record fall systematically as the measurement interval lengthens, because longer intervals include more time spent doing nothing or going backwards.

**P3 (a)** Eustatic *fall* enters with a negative sign:

$$\varepsilon = -\frac{40\ \text{m}}{1\ \text{Myr}} = -\frac{4\times10^{4}\ \text{mm}}{10^{6}\ \text{yr}} = -0.04\ \text{mm/yr}.$$

$$\frac{dd}{dt} = (0.25 - 0.04) - 0.20 = +0.01\ \text{mm/yr}.$$

$$\Delta d = 0.01 \times 10^{6} = 1\times10^{4}\ \text{mm} = \mathbf{10\ \text{m}\ \text{of deepening}}, \qquad \text{thickness} = 0.20\times10^{6} = \mathbf{200\ \text{m}}.$$

**The basin transgresses — 200 m of deepening-upward, retrogradational section — through a 40-metre global sea-level fall.** Subsidence beat eustasy and supply together. Any reconstruction that read this section as a eustatic rise would get the sign of the global signal backwards.

**(b) Two basins are not enough, and they are not even the right kind of evidence.** Both could be subsiding for reasons of their own; passive margins on opposite sides of an ocean share a rifting history and therefore share a thermal subsidence curve, so agreement between them is expected whether or not sea level did anything.

To make a eustatic claim you need to **remove the tectonics**, which means:

1. **Many basins on different plates with different tectonic settings and histories** — cratonic interiors, passive margins, foreland basins — showing the event synchronously.
2. **Independent dating good enough to test synchrony**, which means ashes, magnetostratigraphy or high-resolution biostratigraphy, not lithologic correlation. Correlating the event by its own facies and then asserting it is synchronous is circular, and this is the standard critique of seismic-stratigraphic sea-level curves.
3. **Backstripping** each section: progressively remove the sediment load, decompact it, and correct for the isostatic response, so that what remains is the tectonic subsidence plus eustasy — then difference the basins to isolate eustasy. The flexural and isostatic machinery for that step belongs to [`geophysics`](../../geophysics/syllabus.md) 2.3.

**The independent evidence that settles it is ice volume, not stratigraphy.** The $\delta^{18}\text{O}$ record of benthic foraminifera tracks the volume of water locked in ice sheets, giving a eustatic signal measured in a completely different physical system. Where the stratigraphic and isotopic records agree, the event is eustatic; where a "global" sequence boundary has no isotopic counterpart, it is tectonic or supply-driven, and several once-canonical ones are now read that way.

**(c) No, and the reason is the same physics as parts (a) and (b).** The shale onlaps a ramp as the shoreline retreats, so its base is the shoreline trajectory: it forms at the seaward end first and reaches the landward end $\Delta t$ later, where $\Delta t$ is the migration distance divided by $(\sigma + \varepsilon - R)/S$. With a numerator of only $0.01\ \text{mm/yr}$ and a shelf gradient of, say, $S = 10^{-3}$, the shoreline creeps at

$$\frac{dx_s}{dt} = \frac{1\times10^{-5}\ \text{m/yr}}{10^{-3}} = 0.01\ \text{m/yr} = 10\ \text{km/Myr},$$

so the base of the shale is roughly $0.1\ \text{Myr}$ diachronous per $1\ \text{km}$ of onlap — a hundred thousand years across a single kilometre. **Slow drownings make the most strongly diachronous surfaces**, because the shoreline lingers, and this contact is a far worse time marker than the fast-transgression sheet of Example 1 despite looking cleaner in outcrop.

</details>

## Flashback

**From Lesson 3.4 (Glaciers & the Ice Ages):** A core through a basin at the margin of a former ice sheet passes, bottom to top, through:

1. **13.44 m** of paired laminae — a light silt lamina and a dark clay lamina in each couplet — totalling **4200 couplets**;
2. a sharp contact, then **1.8 m** of unsorted, unstratified diamict containing faceted, striated clasts of every size from clay to boulders;
3. **6 m** of well-sorted, cross-bedded sand and gravel.

(a) What is one couplet, how long did unit 1 take, and how does its mean accumulation rate compare with a deep-marine pelagic rate of about $10\ \text{mm/kyr}$? (b) Name units 2 and 3 and give the **one** property that separates them. (c) The couplets thicken steadily from $1.5\ \text{mm}$ to $6\ \text{mm}$ over the last 800 of them. What does that record, and does unit 2 require the ice to have changed its direction of flow?

<details>
<summary>Solution</summary>

**(a)** A couplet is a **varve** — one year. The coarse light lamina is summer meltwater discharge carrying silt into the lake; the fine dark lamina is clay settling out of suspension through the winter, when the lake is ice-covered and quiet. The pairing is the seasonal cycle, which is why the count is a calendar.

$$4200\ \text{couplets} = \mathbf{4200\ \text{yr}}, \qquad \bar{h} = \frac{13{,}440\ \text{mm}}{4200} = \mathbf{3.2\ \text{mm/yr}}.$$

$$\frac{3.2\ \text{mm/yr}}{0.010\ \text{mm/yr}} = \mathbf{320\times} \text{ the pelagic rate}.$$

**Proglacial lakes are among the fastest-accumulating environments on Earth**, which is exactly why they resolve single years while an equivalent thickness of deep-sea ooze averages over 300,000.

**(b)** Unit 2 is **till** (glacial diamict), deposited directly from the ice; unit 3 is **glaciofluvial outwash**, deposited by meltwater streams.

The single diagnostic is **sorting and stratification**, and the reason is one sentence: **only a fluid sorts.** Ice carries everything it picks up at the same velocity and drops it all together, so till is unsorted and unstratified; water sorts by settling velocity and builds beds and cross-beds. The faceted, striated clasts confirm the ice: they were ground against bedrock while held rigidly in the base of the glacier.

**(c) The couplets thickening five-fold records rising meltwater and sediment flux — the ice margin approaching the basin.** Read together with the till above, the sequence is a **readvance**: the glacier's terminus moved forward, the lake filled with progressively more sediment as the source came closer, and finally the ice overrode the basin and laid its load directly on the lake beds. The outwash on top is the retreat, with meltwater streams reworking the till after the ice pulled back.

**No, it does not require any change in flow direction.** The ice always flows from the accumulation zone toward the terminus. **Terminus position is set by mass balance — accumulation minus ablation — not by flow direction**: the margin advances when the ice delivered exceeds the ice melted there, and retreats when it does not, while the ice inside continues to move forward in both cases. A retreating glacier still flows downhill; it just melts back faster than it flows.

*Why this matters for 4.4:* a varve sequence is the highest-resolution correlation tool there is. Two varved basins can be cross-matched on their **thickness patterns**, tree-ring style, to build a floating chronology, and one radiocarbon date or one ash bed anchors the whole thing to the absolute timescale.

</details>

## Connections

- **Backward:** every facies interpretation here is [1.5](01-05-sedimentary-rocks.md)'s sorting, rounding, structures and fossils, used one bed at a time; [4.1](04-01-relative-dating-unconformities.md) supplies the unconformity, which is precisely where Walther's law stops; [4.3](04-03-geologic-timescale.md) supplies the biostratigraphy that does the long-distance correlation, and its resolution limit is what lets diachronous units pass as time units.
- **Forward:** [4.5](04-05-reading-a-geologic-map.md) maps formations, and everything above is the reason a formation contact on a map is not a time line; [5.3](05-03-earth-history-phanerozoic.md) is a sea-level and facies history of half a billion years assembled by exactly this method; [5.4](05-04-resources-geologic-hazards.md) needs it because a reservoir sand and its seal are a facies pair, and finding one means predicting where its neighbour sits.
- **Sideways:** the migrating shoreline is [3.5](03-05-deserts-wind-coasts.md)'s coastal sediment budget run over geologic time, and the ash beds that carry the time signal are dated by [4.2](04-02-radiometric-dating.md); basin subsidence — flexural and thermal — belongs to [`geophysics`](../../geophysics/syllabus.md) 2.3; the fossil turnover used for correlation is the same record read biologically in [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md).
