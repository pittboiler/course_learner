# Geology · Lesson 4.3: The Geologic Timescale

> ⏱ ~15 min · Module 4: Geologic Time & the Rock Record · Builds on: [4.1](04-01-relative-dating-unconformities.md), [4.2](04-02-radiometric-dating.md) · Unlocks: [4.4](04-04-stratigraphy-facies-correlation.md) (correlating sections), and all of Module 5

## Why this matters

[4.1](04-01-relative-dating-unconformities.md) gave you order without numbers. [4.2](04-02-radiometric-dating.md) gave you numbers without order — a zircon age is a date on one grain, not a place in a story. **The timescale is the object that welds the two together**, and it is the coordinate system every other Earth science quotes its results in. When a paper says "Late Devonian," it is making a claim that can be checked in rock on four continents.

Two things about it are genuinely surprising, and both are the point of this lesson.

**First, the divisions came before the numbers by more than a century.** Cambrian, Devonian, Cretaceous — all named between 1822 and 1841, by people with no way to date anything. They cut the record where the *fossils* changed. So the periods are wildly unequal in length: the Cretaceous ran 79 million years and the Quaternary has run 2.6, a factor of 30. That looks arbitrary until you see that the scale was never dividing time — it was dividing *events*.

**Second, the boundaries are still not defined by numbers.** The base of the Jurassic is not "201.4 million years ago." It is a specific bed at a specific outcrop at Kuhjoch, Austria, with a bronze marker in it. The number is only our current measurement of that rock's age, and it has moved twice in twenty years. **Defining the boundary by an object rather than by a measurement is one of the smartest pieces of scientific housekeeping any field has done**, and it is worth understanding properly.

## The idea

**The hierarchy is a nested subdivision, and each level exists because the record supports it.** Eon contains era contains period contains epoch contains age. You can subdivide finely where fossils turn over fast and you have continuous sections; you cannot where you have neither. That is why the last 66 million years is chopped into seven epochs and the preceding four billion is chopped into three eons.

**Every boundary was drawn at a change in the fossils.** A nineteenth-century stratigrapher walking up a cliff sees one assemblage of shells give way to a different one. That is a mappable, repeatable horizon — you find the same switch in the next valley and the next country. So you draw a line there and name the rocks below and above. **The boundaries that survived are the ones that were easiest to find, which means the biggest turnovers, which means that several of the period boundaries are mass extinctions** — the end-Ordovician, the end-Permian, the end-Triassic and the end-Cretaceous are all period boundaries *because* they are extinctions. The biology of those events belongs to [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md); what matters here is that the timescale's shape is a fossil of the fossil record.

**Calibration came afterwards, and it is indirect.** You cannot radiometrically date the shale that contains the boundary — [4.2](04-02-radiometric-dating.md) explained why: its grains date their source, not their burial. What you can date is a volcanic ash bed, which crystallized within days of falling. So you find ash beds above and below the boundary, date them, and interpolate. **Every number on the timescale is a bracket, not a direct measurement**, and that is why the numbers move.

**And that is the argument for the golden spike.** If the boundary were *defined* as an age, then every recalibration would move the boundary through the rock, and fossils would change period without anyone touching a hammer. Instead the boundary is defined as a physical point — a **Global Boundary Stratotype Section and Point**, a GSSP — and the age is a separate, revisable measurement of it. **The definition is decoupled from the measurement.** (Metrology made the opposite trade for the metre, abandoning a platinum bar for a fixed value of the speed of light. Both moves are the same move: put the definition where it will not drift.)

## The formal version

### The hierarchy, and its doppelgänger

| Time unit (geochronology) | Rock unit (chronostratigraphy) | Typical span | Example |
|---|---|---|---|
| Eon | Eonothem | $10^{8}\!-\!10^{9}\ \text{yr}$ | Phanerozoic |
| Era | Erathem | $10^{8}\ \text{yr}$ | Mesozoic |
| Period | System | $10^{7}\ \text{yr}$ | Jurassic |
| Epoch | Series | $10^{6}\!-\!10^{7}\ \text{yr}$ | Late Jurassic (rock: Upper Jurassic) |
| Age | Stage | $10^{5}\!-\!10^{6}\ \text{yr}$ | Kimmeridgian |

*In words: every interval of time has a twin made of rock — the Jurassic Period is the time, the Jurassic System is the rock deposited during it.* The distinction sounds pedantic and is not: **the rock is what you can point at, and the time is what you infer.** It carries a real notational trap — rock units take **Upper/Lower** and time units take **Late/Early**, so "Upper Cretaceous limestone" and "Late Cretaceous climate" are both correct and swapping them is not.

**Ma** means mega-annum, $10^{6}$ years before present; **Ga** means giga-annum, $10^{9}$ years. Durations in millions of years are written $\text{Myr}$.

### Biostratigraphy: what makes a fossil useful

An **index fossil** is one you can use to say where in the column you are. Four properties, each doing a specific job:

| Property | Why it is required |
|---|---|
| Geographically widespread | otherwise you cannot correlate between basins |
| Abundant | otherwise you will not find it in your sample |
| **Short stratigraphic range** | this alone sets your resolution |
| Distinctive and easily identified | otherwise the correlation is only as good as the identifier |

*In words: the ideal index fossil is a common, unmistakable organism that lived everywhere and briefly.* Free-swimming and floating organisms win on this test because they are not tied to one environment — graptolites, ammonites, conodonts, planktonic foraminifera and calcareous nannofossils carry most of the Phanerozoic zonation.

**Range zones and the resolution trick.** A taxon's **range zone** is the interval between its lowest occurrence (**first appearance datum**, FAD) and highest occurrence (**last appearance datum**, LAD). A single taxon with a 5-million-year range gives you 5-million-year resolution and no better. But overlapping several taxa does much better:

$$\text{taxa} = n \quad\Longrightarrow\quad \text{horizons} = 2n \quad\Longrightarrow\quad \text{distinguishable assemblage zones} \le 2n - 1$$

*In words: each taxon contributes two horizons, its FAD and its LAD, and $n$ taxa with staggered, overlapping ranges cut the column into as many as $2n-1$ intervals that can be told apart by which fossils are present together.* Three staggered taxa give five zones; ten give nineteen. **The resolution comes from the overlaps, not from any one fossil** — this is a **concurrent-range zone** scheme, and it is why zonations quote assemblages rather than single species.

**The failure mode is sampling, and it has a name.** An observed FAD is later than the true one and an observed LAD is earlier, because the first and last individuals are the rarest and you will miss them. This is the **Signor–Lipps effect**, and its consequence is nasty: **an instantaneous extinction, sampled imperfectly, looks gradual** — the LADs of the victims smear backwards below the true horizon in proportion to how rare each taxon is. Any claim that an extinction was "gradual" has to defeat this artefact first.

### Calibration: how a number gets attached

The workflow, which is [4.2](04-02-radiometric-dating.md) applied at scale:

1. Locate the boundary biostratigraphically in a section.
2. Find datable material bracketing it — volcanic ash beds are ideal (U–Pb on zircon, or Ar–Ar on sanidine), cross-cutting intrusions second best.
3. Interpolate between the bracketing ages, assuming a sedimentation rate.
4. Tighten with independent methods.

The tighteners are worth naming because each is a different physical clock:

- **Magnetostratigraphy.** The pattern of normal and reversed polarity through a section is a barcode, matched against the global polarity timescale built from the seafloor stripes of [2.1](02-01-evidence-for-drift.md). Reversals are globally instantaneous, so a matched reversal correlates two sections to within a few thousand years. The quantitative palaeomagnetism is [`geophysics`](../../geophysics/syllabus.md) 3.3–3.4.
- **Chemostratigraphy.** Global excursions in $\delta^{13}\text{C}$ or $^{87}\text{Sr}/^{86}\text{Sr}$ reflect changes in the whole ocean, so they appear simultaneously everywhere — a chemical marker bed that needs no fossils.
- **Astrochronology.** Cyclic sediments record the orbital forcing of [3.4](03-04-glaciers-ice-ages.md): precession near $20\ \text{kyr}$, obliquity near $41\ \text{kyr}$, eccentricity at $100$ and $405\ \text{kyr}$. Count the cycles and you are counting time directly. **The $405\ \text{kyr}$ eccentricity cycle is stable over hundreds of millions of years and is now the metronome of the Cenozoic and Mesozoic scales** — and counting cycles beats radiometric dating for precision over those intervals, which is a genuinely modern development.

**So a timescale number has a version and an uncertainty.** The end-Permian was "245 Ma" in textbooks of the 1980s and is $251.902 \pm 0.024\ \text{Ma}$ now. The base of the Cambrian has moved from about 570 to $538.8\ \text{Ma}$. **These are not corrections of errors; they are improvements in a measurement**, which is exactly why the boundary must not be defined by the measurement.

### GSSPs: defining a boundary by a rock

A **GSSP** is a designated point in a designated bed in a designated outcrop, chosen so that a correlatable event — almost always the FAD of a widespread species — falls exactly at it. Ratifying one requires the section to satisfy conditions that are all about future-proofing:

- continuous sedimentation across the interval, with no unconformity;
- no structural or metamorphic complication;
- abundant, well-preserved, environment-independent fossils;
- amenable to *multiple* correlation methods (magnetic, chemical, radiometric), so that a worker who cannot find the index species has other handles;
- permanently accessible and legally protected.

Two design decisions carry the weight:

$$\boxed{\;\text{Only the } \textbf{base} \text{ of a unit is defined. Its top is the base of the next unit.}\;}$$

*In words: you never define a top, so there can be no gap and no overlap between successive units.* Boundaries tile the record automatically.

$$\boxed{\;\text{The GSSP is the definition; the age is a measurement of it.}\;}$$

*In words: revising the age moves the number, not the boundary.* The K–Pg GSSP is the base of the boundary clay at El Kef, Tunisia — the level with the iridium anomaly. Its age has been quoted as 65, 65.5 and $66.043 \pm 0.043\ \text{Ma}$; through all of that, not one fossil changed period, and not one section was re-correlated.

**The Precambrian is the exception that proves the rule.** With no widespread skeletal fossils to correlate on, most Precambrian boundaries are **GSSAs** — Global Standard Stratigraphic Ages, frankly arbitrary round numbers (Archean/Proterozoic at $2500\ \text{Ma}$). The one Precambrian boundary defined by a rock is the base of the Ediacaran at $635\ \text{Ma}$, a point in the cap carbonate directly above the Marinoan glacial deposits in South Australia — available precisely because that glaciation left a globally correlatable physical marker. **Where a correlatable event exists, geology uses the rock; where none exists, it settles for a number.**

### Deep time, as a quantity

| | Duration | Fraction of Earth history |
|---|---|---|
| Precambrian (Hadean + Archean + Proterozoic) | $4001\ \text{Myr}$ | $88.1\ \text{percent}$ |
| Phanerozoic | $538.8\ \text{Myr}$ | $11.9\ \text{percent}$ |
| Cenozoic | $66.0\ \text{Myr}$ | $1.45\ \text{percent}$ |
| Since the last glacial ended | $0.0117\ \text{Myr}$ | $2.6\times10^{-6}$ |

**Eighty-eight percent of the record gets three eons and no periods at all.** That is not a judgement that the Precambrian was uneventful — it recorded the origin of life, the oxygenation of the atmosphere and the assembly of the first continents ([5.2](05-02-earth-history-hadean-proterozoic.md)). It is a statement about *evidence*: no shelly fossils to zone with, and four billion years of metamorphism and erosion to survive. **The coarseness of the Precambrian subdivision measures the poverty of its record, not the poverty of its history.**

## Picture

![Panel a draws all 4540 million years of Earth history as one linear bar split into four eons, with the Phanerozoic reduced to a thin sliver at the right-hand end and a bracket showing that the Precambrian fills 88 percent of the bar while carrying only three eons; events marked along it include the oldest zircon, the oldest intact rock, the oldest traces of life, the Great Oxidation Event and the base of the Ediacaran. A dashed wedge expands that sliver 8.4 times into panel b, which redraws the Phanerozoic at the same width with three eras and twelve periods of wildly unequal length, from a 79-million-year Cretaceous to a Quaternary thinner than the rule itself, and the five largest mass extinctions marked as triangles at the period boundaries they helped define.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — deep time on a calendar).** Compress $4.54\ \text{Ga}$ into one 365-day year, with the Earth forming at midnight on 1 January and the present at midnight on 31 December. (a) Find the scale factor per day and per second. (b) Place the start of the Phanerozoic. (c) Place the K–Pg boundary. (d) How much of the year is recorded human history?

**(a)** $$\frac{4.54\times10^{9}\ \text{yr}}{365\ \text{d}} = 1.244\times10^{7}\ \text{yr/day}$$

$$\frac{1.244\times10^{7}}{86400} = 144\ \text{yr per second}.$$

**One second of this year is 144 years — longer than the United States has had electricity.**

**(b)** The Phanerozoic begins at $538.8\ \text{Ma}$, so the elapsed time from formation is $4540 - 538.8 = 4001\ \text{Myr}$:

$$d = \frac{4001}{12.44} = 321.7\ \text{days}.$$

Day 304 is 1 November, so $321.7 - 304 = 17.7$ — **the Cambrian begins late on 18 November.** Every animal with a skeleton, every land plant, every forest and every vertebrate fits in the last six weeks.

**(c)** $66.0\ \text{Ma}$ is $4474\ \text{Myr}$ after formation:

$$d = \frac{4474}{12.44} = 359.7\ \text{days} \;\Longrightarrow\; \textbf{26 December}.$$

**(d)** Writing is about $5200$ years old:

$$t = \frac{5200}{144} = 36\ \text{seconds}.$$

**All of recorded history is the last 36 seconds of the year; the Industrial Revolution is the last 1.7 seconds; a human lifetime is half a second.** For comparison, the interval that separates us from *Tyrannosaurus* is five and a half days.

**A useful sanity check on the whole scheme:** the Precambrian ends on 18 November, which is $321.7/365 = 88.1$ percent of the way through — matching the table above, as it must.

**Example 2 (why you would care — calibrating a boundary, and what the error bar is really made of).** A candidate GSSP level sits between two ash beds. Ash A lies $3.2\ \text{m}$ *below* the boundary and gives $72.15 \pm 0.06\ \text{Ma}$; ash B lies $1.8\ \text{m}$ *above* it and gives $71.80 \pm 0.05\ \text{Ma}$. (a) Interpolate the boundary age. (b) The section is mudstone with no evidence of a break — test how much the answer depends on the constant-rate assumption by supposing the lower interval accumulated twice as fast as the upper, and then half as fast. (c) Quote a defensible age and say what the GSSP proposal should actually assert.

**(a)** The two ashes bracket $3.2 + 1.8 = 5.0\ \text{m}$ of section spanning

$$\Delta t = 72.15 - 71.80 = 0.35\ \text{Myr}.$$

$$\text{mean sedimentation rate} = \frac{5.0\ \text{m}}{0.35\ \text{Myr}} = 14.29\ \text{m/Myr} = 1.43\ \text{cm/kyr},$$

a thoroughly ordinary shelf mudstone rate. Time from ash A up to the boundary:

$$\frac{3.2\ \text{m}}{14.29\ \text{m/Myr}} = 0.224\ \text{Myr} \;\Longrightarrow\; \text{age} = 72.15 - 0.224 = \mathbf{71.93\ \text{Ma}}.$$

**(b)** Let the upper interval accumulate at rate $r$ and the lower at $2r$. The total time is fixed at $0.35\ \text{Myr}$:

$$\frac{3.2}{2r} + \frac{1.8}{r} = 0.35 \;\Longrightarrow\; \frac{3.4}{r} = 0.35 \;\Longrightarrow\; r = 9.71\ \text{m/Myr}.$$

$$t_{\text{lower}} = \frac{3.2}{19.43} = 0.165\ \text{Myr} \;\Longrightarrow\; \text{age} = 71.99\ \text{Ma}.$$

Now the reverse, lower at $r$ and upper at $2r$:

$$\frac{3.2}{r} + \frac{1.8}{2r} = \frac{4.1}{r} = 0.35 \;\Longrightarrow\; r = 11.71\ \text{m/Myr},$$

$$t_{\text{lower}} = \frac{3.2}{11.71} = 0.273\ \text{Myr} \;\Longrightarrow\; \text{age} = 71.88\ \text{Ma}.$$

**So a twofold change in relative sedimentation rate moves the answer by about $\pm 0.055\ \text{Myr}$ — the same size as the analytical uncertainty on the ash ages themselves.** That is the headline: **half the error bar on a calibrated boundary is not measurement error at all, it is a stratigraphic model assumption**, and no improvement in mass spectrometry touches it. Compare with [prob-stat-refresher 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md) — this is a systematic term that must be combined with the statistical one, not hidden inside it:

$$\sigma \approx \sqrt{0.06^{2} + 0.055^{2}} = 0.081 \;\Longrightarrow\; \mathbf{71.93 \pm 0.08\ \text{Ma}}.$$

**(c)** The proposal should assert that **the boundary is the marked level in this section**, and report $71.93 \pm 0.08\ \text{Ma}$ as the current best *estimate of its age*, explicitly separating the two. Then when someone re-dates ash A with better standards in 2040 and gets $72.09\ \text{Ma}$, the boundary does not move — only the number does, and every section correlated to the boundary by its fossils, its magnetic reversal or its isotope excursion stays correlated. **A section correlated by radiometric age alone would have to be reassigned. That is the whole case for the golden spike, in one sentence.**

## Watch out

- **You might think the periods were laid out to divide time sensibly.** They were laid out where the fossils changed, in nineteenth-century European sections, by people who could not date anything. Unequal lengths are the signature of an event-based scheme, not sloppiness.
- **You might think a GSSP defines an age.** It defines a *point in a rock*. The age is a separate measurement that has been revised for essentially every boundary and will be again. Correlate by marker, never by number.
- **You might quote "the Cretaceous ended 66 Ma" as a fact.** It is a versioned estimate carrying an uncertainty, and roughly half that uncertainty comes from the interpolation model rather than the isotopes.
- **You might treat an observed first or last occurrence as the real one.** Signor–Lipps: sampling truncates ranges inward, so observed FADs are too young and LADs too old, and a sudden extinction is smeared into a gradual-looking decline.
- **You might swap the rock and time vocabularies.** *Upper* and *Lower* for rock; *Late* and *Early* for time. "Lower Jurassic mudstone deposited in Early Jurassic time" is the correct pairing.
- **You might read the Precambrian's coarse divisions as a claim it was dull.** It is a claim about the record: no zoning fossils, and four billion years of destruction to survive.
- **You might expect radiometric dating to be the most precise clock available.** Over the Cenozoic and much of the Mesozoic, counting orbital cycles in the sediment resolves time better than dating the ash beds does.

## One-liner

> The timescale's divisions were cut by fossils a century before anyone could date them, which is why the periods are wildly unequal and why 88 percent of Earth history gets three eons — and every boundary is still defined by a golden spike driven into a real outcrop rather than by a number, so that the age can keep improving without the boundary ever moving.

## Problems

**P1 (🟢)** A 200 m marine section yields four index taxa, with ranges measured in metres above the base: **A** 0–55, **B** 30–95, **C** 80–150, **D** 130–200.

(a) A sample contains B and C, and neither A nor D. What stratigraphic interval is it from, and how wide is that interval?
(b) How many distinguishable assemblage zones do these four taxa define in this section?
(c) Which interval is worst resolved, and what range would a fifth taxon need in order to fix it?

**P2 (🟡)** A shelf succession 340 m thick makes up exactly one stage, whose base and top are calibrated at 166.1 and 161.5 Ma. Nine ammonite zones are recognized within it.

(a) Find the mean sedimentation rate and the time represented by a single 12 cm bed.
(b) Find the mean duration and mean thickness of one ammonite zone.
(c) Worker X calls the 12 cm bed "a geologically instantaneous event." Worker Y claims to date it to $\pm 10\ \text{kyr}$ from the ammonites. Evaluate both claims, and say what would actually be needed to reach $\pm 10\ \text{kyr}$ here.

**P3 (🔴, on scientific practice)** Two sections are proposed as the GSSP for the base of a new stage.

- **Section X:** continuous pelagic marl; abundant planktonic foraminifera and calcareous nannofossils; a magnetic polarity reversal 40 cm above the proposed level; two datable ash beds within 5 m; exposed on a coastal cliff inside a nature reserve.
- **Section Y:** the historical type area where the stage was originally named; a shallow-marine sandstone with sparse benthic molluscs; a thin disconformity about 1 m below the proposed level; currently inside a working quarry.

(a) Choose one and justify it criterion by criterion. Does the historical priority of Section Y count for anything?
(b) The proposed level is the FAD of one planktonic foraminifer. State the risk this carries and how the other features of Section X mitigate it.
(c) Ten years after ratification, improved U–Pb dating moves the boundary's age from 47.8 to 47.3 Ma. For each of the following, state whether it changes: the GSSP itself; the boundary's physical position in Section X; which fossil species are assigned to the stage; the published age of the boundary; the correlation of a distant section that was matched using the magnetic reversal; the correlation of a distant section that was matched using a radiometric age of 47.8 Ma.

<details>
<summary>Solutions</summary>

**P1 (a)** Work out which taxa are present at each level. B ranges 30–95 and C ranges 80–150, so both are present only where the ranges overlap:

$$\text{B and C together} \;\Longrightarrow\; 80\ \text{m} \le h \le 95\ \text{m}.$$

Check the exclusions: A stops at 55 (so absent above 55 ✓) and D starts at 130 (so absent below 130 ✓). Consistent.

**The sample is from 80–95 m, a 15 m interval** — and note that this is the narrowest zone in the section, produced by a *short overlap*, not by a short-ranged fossil. None of the four taxa has a range shorter than 55 m.

**(b)** The eight horizons are the FADs at 0, 30, 80, 130 and the LADs at 55, 95, 150, 200. Sorting them: 0, 30, 55, 80, 95, 130, 150, 200. The intervals between consecutive horizons are:

| Interval (m) | Assemblage |
|---|---|
| 0–30 | A |
| 30–55 | A, B |
| 55–80 | B |
| 80–95 | B, C |
| 95–130 | C |
| 130–150 | C, D |
| 150–200 | D |

**Seven zones**, which is $2n - 1 = 2(4) - 1 = 7$ — the maximum for four taxa, achieved because the ranges are staggered with no shared endpoints and no range nested inside another.

**(c)** The widest zone is **D alone, 150–200 m (50 m)**, with C alone (95–130, 35 m) next. To split the 150–200 m interval into two you need a taxon with a FAD or a LAD strictly inside it — for example a taxon ranging **165–200 m**, which would divide it into 150–165 (D) and 165–200 (D + E). **A taxon whose whole range sits inside 150–200 m does even better, cutting it into three.**

**P2 (a)** $$\Delta t = 166.1 - 161.5 = 4.6\ \text{Myr}.$$

$$\text{rate} = \frac{340\ \text{m}}{4.6\ \text{Myr}} = 73.9\ \text{m/Myr} = 7.39\ \text{cm/kyr}.$$

$$t_{\text{bed}} = \frac{12\ \text{cm}}{7.39\ \text{cm/kyr}} = \mathbf{1.6\ \text{kyr}}.$$

**(b)** $$\text{zone duration} = \frac{4.6\ \text{Myr}}{9} = 0.51\ \text{Myr} = \mathbf{511\ \text{kyr}}, \qquad \text{zone thickness} = \frac{340}{9} = \mathbf{37.8\ \text{m}}.$$

**(c)** **Worker X is roughly right but for a slightly wrong reason, and the error is on the safe side.** $1.6\ \text{kyr}$ is $0.035$ percent of the stage, so on the stage's own scale the bed is essentially a horizon. But 1600 years is not an *event* — it is longer than the interval from the Roman Empire to now. And the mean rate almost certainly understates it: mudstone accumulation is episodic, and much of the missing time in any section sits in the bedding planes rather than in the beds, so the bed's true duration is likely to be longer, never shorter. **"Instantaneous relative to the stage" is fine; "an event" is not.**

**Worker Y is wrong, by a factor of about 25.** Nine zones over $4.6\ \text{Myr}$ give a mean zone of $511\ \text{kyr}$; the best a single-zone assignment can do is roughly half a zone, about $\pm 250\ \text{kyr}$. Ammonites here cannot see $\pm 10\ \text{kyr}$, and no amount of careful collecting changes that — the limit is the turnover rate of the ammonites, not the sampling.

**What would reach $\pm 10\ \text{kyr}$:** either a datable ash bed at or near the level, or **astrochronology**. Check that the second is feasible at this sedimentation rate:

$$\text{precession } (20\ \text{kyr}): \quad 20 \times 7.39\ \text{cm} = 148\ \text{cm} \approx 1.5\ \text{m per cycle}$$

$$\text{eccentricity } (405\ \text{kyr}): \quad 405 \times 7.39\ \text{cm} = 29.9\ \text{m} \approx 30\ \text{m per cycle}$$

**A 1.5 m precession cycle is easily resolvable in a 340 m section**, and the $30\ \text{m}$ eccentricity bundle is about the thickness of one ammonite zone — so tuning this section to the orbital cycles of [3.4](03-04-glaciers-ice-ages.md) would give roughly $\pm 10\ \text{kyr}$, half a precession cycle. **This is exactly why astrochronology took over the Mesozoic and Cenozoic scales: the sediment counts time better than the fossils in it can.**

**P3 (a) Section X, on every criterion that the GSSP rules exist to protect.**

| Criterion | X | Y |
|---|---|---|
| Continuous sedimentation | pelagic marl, continuous | **disconformity 1 m below the level — disqualifying** |
| Fossils | abundant, planktonic, environment-independent | sparse benthic molluscs, facies-controlled |
| Multiple correlation tools | fossils + magnetic reversal + two ash beds | fossils only |
| Permanence and access | nature reserve | working quarry, could be destroyed or backfilled |

**The disconformity alone settles it**: a boundary defined at a point immediately above a gap is a boundary whose correlative level elsewhere is unknowable, and the missing interval could be of any duration ([4.1](04-01-relative-dating-unconformities.md)).

**Historical priority counts for the name and for nothing else.** This is a real and slightly counterintuitive feature of the system: the type area gives the stage its name, but the *definition* goes wherever the best section is. The Jurassic is named for the Jura mountains and its stage GSSPs are scattered across Austria, France, Portugal and Argentina. **Names are historical; definitions are technical, and the convention deliberately keeps them apart.**

**(b) The risk is that a FAD is not a synchronous horizon.** Two distinct problems:

1. **Signor–Lipps.** The observed first occurrence lies above the true one by an amount that depends on how thoroughly you sampled and how rare the species was at first. Two workers with different sample spacing will place the same FAD at different levels.
2. **Genuine diachroneity.** A species spreads at a finite rate, and it may reach one ocean basin thousands of years after another, so even a perfectly sampled FAD can be time-transgressive between regions.

**Section X's other features are the mitigation, and this is precisely why "amenable to multiple methods" is a ratification criterion.** The magnetic reversal 40 cm above the level is globally synchronous within a few thousand years, so a distant worker who cannot find the foraminifer can still find the boundary to within $40\ \text{cm}$-equivalent of section. The ash beds supply an independent numerical tie. **The FAD names the boundary; the reversal and the ashes make it findable.**

**(c)**

| Item | Changes? |
|---|---|
| The GSSP | **No.** It is a marked point in a bed; nothing about it is numerical. |
| The boundary's position in Section X | **No.** Same bed, same centimetre. |
| Which species are in the stage | **No.** Assignment is by position relative to the GSSP, not by age. |
| The published age of the boundary | **Yes** — 47.8 becomes 47.3 Ma. This is the only thing that moved. |
| A section correlated by the magnetic reversal | **No.** The reversal is still the same reversal at the same distance from the boundary. |
| A section correlated by a radiometric age of 47.8 Ma | **Yes** — and it must be reassigned. Beds there once called earliest-new-stage are now late-previous-stage. |

**That last row is the entire argument for the golden spike, made concrete.** Correlation by number is hostage to recalibration; correlation by physical marker is not. **The scale is built so that improving our measurements never rewrites which rocks belong to which interval** — and a field whose fundamental units got reshuffled every time a mass spectrometer improved would not be able to accumulate results at all.

</details>

## Flashback

**From Lesson 4.1 (Relative Dating & Unconformities):** A road cut exposes, from the bottom up:

1. Granite, weathered to a reddish crumbly zone in its top 30 cm.
2. Conglomerate, 4 m, whose pebbles include rounded clasts of the granite below.
3. Limestone, 12 m, with fossil corals; the beds dip 25 degrees to the east.
4. Sandstone, 8 m, horizontal, resting on a planar surface that truncates the tilted limestone beds.
5. A basalt sheet, 1.5 m thick, lying between units 3 and 4; its lower contact is baked and its upper surface is vesicular and reddened.
6. A vertical fault offsetting units 1 through 4, but not cutting a covering of glacial till at the top.

(a) Give the complete order of events. (b) Name the surface between units 1 and 2, and the surface beneath unit 4. (c) Is the basalt an intrusive sill or a buried lava flow, and what is the single decisive observation? (d) What does that answer change about the ordering?

<details>
<summary>Solution</summary>

**(c) first, because the ordering depends on it. It is a lava flow.** The decisive observation is that **only the lower contact is baked**. A sill intruded between two existing units bakes *both* its contacts, since hot magma is injected against cold rock above and below. A flow erupted onto a surface bakes only what it lands on, and its top cools against air — which is exactly what the **vesicular, reddened upper surface** independently confirms: vesicles are gas bubbles exsolved at low pressure and frozen in ([2.8](02-08-volcanoes-volcanic-hazards.md)), and the reddening is subaerial oxidation. [1.4](01-04-igneous-rocks-and-bodies.md) set this test up as the classic sill-versus-flow field problem.

**Consequence:** the basalt is part of the depositional sequence, erupted onto the limestone *before* tilting — not an intrusion emplaced later. It is therefore older than the tilting and older than the erosion surface, and it can be radiometrically dated to give a **minimum age for the limestone and a maximum age for the sandstone** ([4.2](04-02-radiometric-dating.md)). A sill would have dated only itself.

**(a) The order:**

1. Granite crystallizes at depth.
2. Uplift and erosion strip the cover; the granite weathers at the surface (the reddish crumbly top).
3. Conglomerate deposited on the eroded granite — confirmed independently by **inclusions**: rounded granite clasts inside the conglomerate must be older than the rock containing them.
4. Limestone deposited in a shallow marine setting (corals).
5. Basalt erupts onto the limestone; its base bakes the limestone, its top oxidizes in air.
6. Tilting to 25 degrees east — after deposition, by **original horizontality**.
7. Erosion planes off the tilted beds.
8. Sandstone deposited horizontally on that surface.
9. Faulting, cutting units 1 through 4 — **cross-cutting relationships**.
10. Glacial till deposited over the fault, so the fault predates the till.

**(b)** Between units 1 and 2: a **nonconformity** — sediment resting on eroded plutonic rock. Beneath unit 4: an **angular unconformity** — the underlying beds are tilted and truncated, so the sequence deposition → tilting → erosion → deposition is required, and this is the Siccar Point geometry.

**A note on what is *not* determinable.** Nothing here dates the fault beyond "after the sandstone, before the till," and the two unconformities have durations that could be anything from thousands to hundreds of millions of years. Relative dating gives order and never duration — which is what the basalt, once identified as a flow, lets you finally break.

</details>

## Connections

- **Backward:** [4.1](04-01-relative-dating-unconformities.md) supplies the order and the correlation logic that the divisions were cut with, and its unconformities are the reason candidate GSSP sections must be continuous; [4.2](04-02-radiometric-dating.md) supplies the ash-bed ages that calibrate the divisions, and the detrital-grain caveat is why the calibration has to be indirect. The magnetic barcode is [2.1](02-01-evidence-for-drift.md)'s seafloor stripes reused as a clock, and astrochronology is [3.4](03-04-glaciers-ice-ages.md)'s Milankovitch cycles counted in rock.
- **Forward:** [4.4](04-04-stratigraphy-facies-correlation.md) uses index fossils and marker beds to correlate real sections; [4.5](04-05-reading-a-geologic-map.md) needs the period names and their order to read a map legend at all; [5.2](05-02-earth-history-hadean-proterozoic.md) works inside the coarse Precambrian framework and [5.3](05-03-earth-history-phanerozoic.md) inside the fine Phanerozoic one, returning to the Anthropocene question — which is really a question about what a timescale is *for*, and whether a unit can be ratified on a signal that is only decades old.
- **Sideways:** the extinctions that define four of these boundaries are treated as evolutionary events in [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md), where the Signor–Lipps artefact is a live problem for measuring extinction selectivity; separating the systematic interpolation error from the analytical one is the distinction of [prob-stat-refresher 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md); and the decoupling of a definition from its measurement is the same design move that took the metre from a platinum bar to a fixed value of the speed of light.
