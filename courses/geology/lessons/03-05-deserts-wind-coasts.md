# Geology · Lesson 3.5: Deserts, Wind & Coasts

> ⏱ ~15 min · Module 3: Surface Processes · Builds on: [3.4](03-04-glaciers-ice-ages.md), [3.2](03-02-mass-wasting-slope-stability.md), [1.5](01-05-sedimentary-rocks.md) · Unlocks: [3.6](03-06-groundwater-aquifers-karst.md) (groundwater, aquifers & karst)

## Why this matters

Wind and waves are usually taught as two glossaries of landforms. They are better understood as **the same two questions asked twice**:

1. **What can the fluid carry?** — set almost entirely by the fluid's density, which for air versus water differs by a factor of about 800.
2. **Does the sediment budget balance?** — because every dune and every beach is a *conveyor*, and a conveyor changes shape only when what arrives stops matching what leaves.

That framing pays off three ways. It makes the two environments predictive rather than memorized. It explains why aeolian and coastal deposits are the most readable rocks in the record — [1.5](01-05-sedimentary-rocks.md)'s cross-bedding and the shoreline sequences of [4.4](04-04-stratigraphy-facies-correlation.md) are both read with the rules below. And it is the one place in Module 3 where the geology is routinely, expensively, and predictably broken by engineering: **you cannot take sand out of a drift cell without producing erosion somewhere downdrift, and the arithmetic tells you exactly where and how fast.**

## The idea

### Deserts are defined by aridity, not heat

A **desert** is a place where potential evaporation exceeds precipitation, conventionally below about 250 mm of rain a year. Nothing in that says "hot" and nothing says "sand." **The largest desert on Earth is Antarctica**, and even in the Sahara, sand seas (*ergs*) cover only about a quarter of the area — the rest is rock (*hamada*) and gravel (*reg*).

Deserts sit where the atmosphere or the ocean denies them moisture, and there are exactly five mechanisms:

- **Subtropical highs**, roughly 20–35 degrees latitude: the descending limb of the Hadley circulation warms adiabatically as it sinks, its relative humidity collapses, and it cannot rain. Sahara, Arabian, Kalahari, Australian.
- **Rain shadow**: air forced over a range rains out on the windward flank and descends dry. Great Basin, Patagonia.
- **Continental interiority**: too far from any ocean. Taklamakan, Gobi.
- **Cold coastal upwelling**: cold water beneath warm air suppresses convection, giving fog but no rain. Atacama, Namib.
- **Polar**: air too cold to hold water. Antarctica.

The circulation itself belongs to [`atmospheric-science`](../../atmospheric-science/syllabus.md); what geology owns is that **the latitude belt at 30 degrees is a permanent feature of the planet's circulation, so ancient desert deposits are a palaeolatitude indicator** — a claim [5.3](05-03-earth-history-phanerozoic.md) will lean on.

### Air is thin, and that single fact does all the work

A moving fluid lifts a grain by drag, which scales as $\rho_f u^2$. Air is about 800 times less dense than water, so to exert the same stress on the bed, **wind must blow roughly $\sqrt{800} \approx 28$ times faster than water would need to flow.** Two consequences, and they pull in opposite directions:

**(1) Wind can barely move anything coarse.** Sand and finer, essentially never gravel. So wind is a *selective* agent in a way water never is — it does not so much transport a deposit as **sort it**.

**(2) But once a grain is airborne, it falls fast.** The buoyancy-corrected density contrast $(\rho_s - \rho_f)/\rho_f$ is about 1.65 in water and about **2200 in air**. A quartz grain is effectively a thousand times heavier relative to the fluid around it. So sand does not billow up into a suspension cloud; it makes low ballistic hops.

Put those together and the wind splits sediment into three populations with three completely different fates — **this is the lesson's central quantitative claim, and the worked example computes it:**

| Grain size | Fate in wind | Result |
|---|---|---|
| Gravel, $> 2\ \text{mm}$ | never moves | **deflation lag**: fines blown out, a one-grain armour of pebbles left behind — *desert pavement* |
| Sand, $0.06$–$2\ \text{mm}$ | **saltation**: hops staying below about 1 m | stays local, builds and migrates as *dunes*; sandblasts anything within a metre of the ground into *ventifacts* and undercut pedestals |
| Silt and clay, $< 0.06\ \text{mm}$ | **suspension** | leaves the desert entirely — silt lands hundreds of km downwind as *loess*, clay crosses oceans |

**Saltation is impact-driven and self-sustaining.** The first grains are lifted by the wind, but after that most grains are ejected by the impact of grains already hopping. That is why the wind speed needed to *sustain* a sand storm is only about 80 percent of the speed needed to *start* one — a hysteresis, and the reason storms outlast the gust that triggered them.

*One elegant echo:* the threshold curve turns **upward again** for very fine grains, because silt and clay are cohesive and sit inside the smooth viscous sublayer. That is the same non-monotonic shape as the erosion curve in [3.3](03-03-rivers-landscape-evolution.md) — hard-to-erode-but-easy-to-carry, in a different fluid, for the same two reasons.

### A dune is a conveyor with a slip face

Sand saltates up the gentle **stoss** (windward) slope, crosses the crest, drops into the wind shadow, and piles up on the **lee** face until it exceeds the angle of repose and avalanches ([3.2](03-02-mass-wasting-slope-stability.md)). The face therefore sits *at* the repose angle — about 34 degrees for dry sand — and the dune migrates downwind while most of its sand stays inside it.

Two payoffs:

- **Migration rate $c \approx q/(\gamma h)$**, where $q$ is the sand flux per metre of crest, $h$ the dune height and $\gamma$ a shape factor near 0.5–0.7. Rate goes as $1/h$: **small dunes travel faster than big ones and are overtaken by nothing** — which is why barchan fields self-organize.
- **Foresets dip downwind.** Each preserved cross-bed set is a buried slip face, so the dip azimuth of ancient aeolian cross-bedding *is* the palaeowind direction. Read [1.5](01-05-sedimentary-rocks.md)'s cross-bedding in a Permian sandstone and you get the wind of 280 million years ago.

**Dune shape is a two-variable prediction, not a taxonomy:** sand supply on one axis, wind directional variability on the other. Low supply plus one wind direction gives isolated **barchans** with horns pointing downwind; abundant supply plus one direction gives **transverse** ridges; two competing directions give **linear (seif)** dunes elongated along the resultant; many directions give **star** dunes that grow upward rather than migrating.

### Running water still does most desert erosion

This is the correction that matters most in the field. Deserts have sparse vegetation and often a crusted, low-infiltration surface, so the runoff coefficient in a rare storm is enormous. The landscape is largely **fluvial** — ephemeral washes (*wadis*, *arroyos*), **alluvial fans** where a wash leaves a mountain front, coalesced fans (**bajadas**), and **playas** where the water ponds and evaporates, precipitating [1.5](01-05-sedimentary-rocks.md)'s evaporite sequence and leaving the salts that [5.4](05-04-resources-geologic-hazards.md) mines. Wind then sorts and polishes what water delivered.

### Coasts: waves deliver energy, refraction redistributes it, drift moves the sand

A wave in water shallower than about half its wavelength travels at $c=\sqrt{gh}$ — **slower where it is shallower**. So when a crest approaches obliquely, the end already in shallow water lags, and the crest swings toward shore-parallel. This is refraction, and it is *literally* Snell's law ([waves-optics 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md)) with $c=\sqrt{gh}$ in place of $c/n$; the wave mechanics belong to [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md).

The geologic consequence is the figure's whole point: shallow water reaches farther offshore in front of a **headland**, so crests wrap around it and the wave rays (orthogonals) **converge** — energy per metre of shore goes up. In a **bay** the rays spread and energy goes down. **Prediction: headlands erode, bays fill, and a ragged coastline straightens itself over time.** Headland erosion is where sea cliffs, wave-cut platforms, sea caves, arches and stacks come from; the bay is where the beach is.

Refraction reduces obliquity but never abolishes it, and **that residual angle is the engine of the whole coast.** Swash runs up the beach obliquely; backwash runs straight back down the steepest gradient; each grain therefore zigzags, and the net result is **longshore drift**, a sediment flux $Q$ of typically $10^4$–$10^6\ \text{m}^3$ per year along a shoreline.

**Every constructional coastal landform is that conveyor doing something:** a **spit** where the shore bends and $Q$ carries straight on into quieter water; a **barrier island** where a spit is breached or a bar is driven landward; a **tombolo** where an island's wave shadow lets drift converge behind it; a **beach** wherever supply and removal happen to balance.

### The budget is the whole story

$$\frac{\Delta V}{\Delta t} = Q_{\text{in}} - Q_{\text{out}} + (\text{river and cliff supply}) - (\text{offshore and dune losses})$$

*In words: a beach grows only if more sand arrives than leaves.* A groyne, a harbour jetty, a dam upstream, or a seawall each removes a term — and the deficit does not vanish, it moves downdrift. That is Worked Example 2.

### Relative sea level has three independent parts

$$\Delta(\text{RSL}) = \Delta(\text{eustatic sea level}) - \Delta(\text{land elevation})$$

with land elevation changing tectonically ([2.6](02-06-mountain-building.md)) and isostatically ([3.4](03-04-glaciers-ice-ages.md)'s post-glacial rebound). **Emergent** coasts show flights of raised **marine terraces**; **submergent** coasts show drowned valleys (*rias*) and, where glaciers cut them, fjords. Scandinavia is rising out of the sea while the US mid-Atlantic coast subsides, under the *same* global sea-level curve — which is why "sea-level rise" is never one number. Long-term shoreline migration in the rock record is [4.4](04-04-stratigraphy-facies-correlation.md)'s transgression and regression; tides are [`geophysics`](../../geophysics/syllabus.md) 2.5.

### The two environments, side by side

| | **Wind (desert)** | **Waves (coast)** |
|---|---|---|
| Fluid density | $1.2\ \text{kg/m}^3$ | $1025\ \text{kg/m}^3$ |
| Coarsest load | sand, ~2 mm | boulders, in a storm |
| Sorting produced | extreme — fines exported, coarse left as lag | good, but far less extreme |
| Transport direction | the resultant wind | shore-parallel, from residual obliquity |
| The landform is | a conveyor with a slip face (dune) | a conveyor along the shore (drift cell) |
| Diagnostic deposit | thick, steep, frosted, ultra-sorted cross-beds | well-rounded sand, shore-parallel bars, shell debris |
| How humans break it | cut the sand supply, or stabilize the source | cut $Q$ with a jetty, dam or seawall |

## Picture

![Panel a shows a dune in cross-section with wind blowing left to right, saltation hops arcing up the gentle stoss slope, a steep slip face on the lee side marked at the 34 degree angle of repose, and beneath it a block of rock containing three sets of cross-beds whose foresets all dip downwind. Panel b is a map view of a coastline with a headland and a bay, where deep-water wave crests are straight and oblique but bend to become shore-parallel as they shoal, with energy arrows converging on the headland and spreading in the bay, a zigzag longshore drift path along the beach, and a spit growing downdrift where the shore bends away.](assets/03-05-fig1.svg)

## The formal version

**Threshold shear velocity for grain motion in air** (Bagnold):

$$u_{*t} = A\sqrt{\frac{(\rho_s-\rho_a)\,g\,d}{\rho_a}}$$

where $u_{*t}$ is the friction (shear) velocity at which grains start to move, $\rho_s \approx 2650\ \text{kg/m}^3$ is the grain density, $\rho_a \approx 1.2\ \text{kg/m}^3$ the air density, $d$ the grain diameter, $g = 9.81\ \text{m/s}^2$, and $A \approx 0.1$ an empirical constant valid for $d \gtrsim 0.1\ \text{mm}$.

*In words: bigger and denser grains need a stronger wind — but only as the square root of size, so doubling the wind lets it move grains four times as large.*

**Friction velocity is not a wind speed you can measure.** Convert with the logarithmic boundary-layer profile ([fluid-dynamics 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)):

$$u(z) = \frac{u_*}{\kappa}\ln\!\frac{z}{z_0}$$

with $\kappa = 0.4$ (von Kármán), $z$ the height of measurement, and $z_0$ the aerodynamic roughness length — about $1\ \text{mm}$ for a rippled sand surface. **The dependence on $z_0$ is logarithmic, so a tenfold error in it changes the answer by only about 25 percent**; the conclusions below are robust to it.

**Suspension criterion.** A grain stays in suspension when the upward turbulent velocity fluctuations, of order $u_*$, exceed its settling velocity:

$$w_s < u_* \quad\Longrightarrow\quad \text{suspended}, \qquad w_s = \frac{(\rho_s-\rho_a)\,g\,d^2}{18\,\mu}$$

where $w_s$ is the settling velocity and $\mu = 1.8\times10^{-5}\ \text{Pa}\cdot\text{s}$ is the dynamic viscosity of air. This is Stokes' law ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)), valid while the grain Reynolds number stays below about 1 — true for silt and clay in air, **false for sand**, which is precisely why sand saltates instead. A grain lofted to height $H$ in a wind $U$ travels roughly

$$L \approx U\,\frac{H}{w_s}$$

before it lands. Note the $d^{-2}$: halving the grain size quadruples the range.

**Wave refraction is Snell's law.** With $c = \sqrt{gh}$ in shallow water and $\theta$ the angle between crest and shore,

$$\frac{\sin\theta_1}{c_1} = \frac{\sin\theta_2}{c_2}$$

*In words: as a wave slows down in shallowing water it turns toward the shore.* A crest arriving at $\theta_1 = 30^\circ$ where $c_1 = 8\ \text{m/s}$ reaches $h = 2\ \text{m}$, where $c_2 = \sqrt{9.81\times2} = 4.43\ \text{m/s}$, so $\sin\theta_2 = 0.5\times(4.43/8) = 0.277$ and $\theta_2 = 16^\circ$. **The obliquity roughly halves — but does not go to zero, and the leftover 16 degrees is what drives $Q$.**

**Shoreline response to a sediment deficit.** If a length $L$ of shore loses $\Delta Q$ more sand per year than it gains, and the *active profile height* (berm crest down to the depth of closure) is $h_c$, the shoreline retreats at

$$r = \frac{\Delta Q}{L\,h_c}$$

*In words: spread the missing volume over the shoreface, and the retreat is what is left.* Typical $h_c$ is 6–10 m on an open ocean coast.

**Marine terraces measure uplift.** A terrace cut at time $t$ when sea level stood at $S$ now sits at elevation $E = U t + S$, so $U = (E-S)/t$. A terrace at 106 m dated to 125 ka (when sea level was 6 m above present) gives $U = 100\ \text{m}/125{,}000\ \text{yr} = 0.8\ \text{mm/yr}$ — a tectonically rising coast, verifiable against a second terrace at a different age.

## Worked examples

### Example 1 (mechanical) — the wind's grain-size window

Take $\rho_s = 2650$, $\rho_a = 1.2\ \text{kg/m}^3$, $g=9.81\ \text{m/s}^2$, $A = 0.1$, $z_0 = 1\ \text{mm}$, and evaluate the whole spectrum.

**Step 1 — collapse the constants.**

$$u_{*t} = 0.1\sqrt{\frac{2648.8\times9.81}{1.2}}\;\sqrt{d} = 0.1\sqrt{21654}\;\sqrt{d} = 14.72\,\sqrt{d} \quad (d \text{ in m})$$

and the log law at $z = 10\ \text{m}$ gives $u(10) = u_*\ln(10/0.001)/0.4 = 23.03\,u_*$.

**Step 2 — medium sand, $d = 0.25\ \text{mm}$.**

$$u_{*t} = 14.72\sqrt{2.5\times10^{-4}} = 14.72\times0.01581 = \mathbf{0.233\ \text{m/s}}, \qquad u(10) = 23.03\times0.233 = \mathbf{5.4\ \text{m/s}}$$

**About 19 km/h — a brisk breeze.** Sand moves on most windy days, which is why dunes are restless.

**Step 3 — granules, $d = 4\ \text{mm}$.** Sixteen times the diameter, so exactly four times the friction velocity:

$$u_{*t} = 0.931\ \text{m/s}, \qquad u(10) = \mathbf{21.4\ \text{m/s}} \approx 77\ \text{km/h}$$

**A severe gale — and even then the granule only creeps.** So a windy surface loses its sand and keeps its gravel: after enough seasons the gravel concentrates into a one-clast-thick armour that seals the surface against further deflation. **That is desert pavement, derived rather than asserted.**

**Step 4 — silt, $d = 0.03\ \text{mm}$.**

$$w_s = \frac{2648.8\times9.81\times(3\times10^{-5})^2}{18\times1.8\times10^{-5}} = \frac{2.339\times10^{-5}}{3.24\times10^{-4}} = 0.072\ \text{m/s}$$

Check Stokes: $\mathrm{Re} = \rho_a w_s d/\mu = (1.2)(0.072)(3\times10^{-5})/(1.8\times10^{-5}) = 0.14$, comfortably below 1, so Stokes holds. Compare with $u_* = 0.233\ \text{m/s}$: since $w_s \ll u_*$, **silt is suspended, not saltated.** Lofted to $H = 2\ \text{km}$ in a $U = 12\ \text{m/s}$ wind:

$$t = \frac{2000}{0.072} = 2.8\times10^{4}\ \text{s} = 7.7\ \text{h}, \qquad L = 12\times2.8\times10^{4} = \mathbf{330\ \text{km}}$$

**That is the loess belt** — the thick, unstratified, wind-laid silt blanketing central China, the US Midwest and Ukraine, always a few hundred kilometres downwind of a glacial outwash plain ([3.4](03-04-glaciers-ice-ages.md)) or a desert.

**Step 5 — clay, $d = 0.002\ \text{mm}$.** Settling goes as $d^2$, so $w_s$ falls by $(0.002/0.03)^2 = 1/225$:

$$w_s = 3.2\times10^{-4}\ \text{m/s} \;\Rightarrow\; t = \frac{2000}{3.2\times10^{-4}} = 6.2\times10^{6}\ \text{s} = 72\ \text{days} \;\Rightarrow\; L \approx 7.5\times10^{4}\ \text{km}$$

**Nearly twice around the Earth.** Clay does not settle out on the continent at all — Saharan dust reaches the Amazon and the Caribbean routinely.

**The conclusion, in one line: three grain sizes, three fates, from one square root and one square.** And it makes a prediction you can test under a microscope: because the wind exports everything finer than sand and cannot move anything coarser, **an aeolian sandstone should be almost monomineralic quartz in a narrow size band with no mud matrix at all** — the most texturally mature sediment on Earth. That is exactly what an ancient erg looks like in thin section, and it is problem P3.

### Example 2 (why you'd care) — the jetty that ate a town's beach

A drift cell carries $Q = 150{,}000\ \text{m}^3/\text{yr}$ of sand from left to right. A harbour is built with jetties that intercept essentially all of it. The active profile height is $h_c = 9\ \text{m}$.

**(a) Updrift, over 10 years.** Trapped volume $= 10 \times 150{,}000 = 1.5\times10^{6}\ \text{m}^3$. Spread as a fillet along the 800 m of shore against the jetty:

$$\text{advance} = \frac{1.5\times10^{6}}{800\times9} = \mathbf{208\ \text{m of new beach}}$$

The updrift side gets a spectacular free beach — and it grows until the fillet reaches the jetty tip, after which sand bypasses and the accretion stops.

**(b) Downdrift, over the same 10 years.** The shore beyond the harbour now receives $Q_{\text{in}} = 0$ but still exports $Q_{\text{out}} = 150{,}000\ \text{m}^3/\text{yr}$. Over $L = 4\ \text{km}$:

$$r = \frac{150{,}000}{4000\times9} = \mathbf{4.2\ \text{m/yr}} \quad\Rightarrow\quad \mathbf{42\ \text{m of retreat in a decade}}$$

**Two hundred metres of beach gained on one side of a structure and forty metres of shoreline lost on the other, and the two are the same sand.** This is the standard diagnosis for downdrift erosion at inlets and harbours worldwide, and it was being rediscovered case by case for most of the twentieth century.

**(c) The town armours its shore with a seawall.** The wall stops the *land* retreating, but it does nothing about the deficit. Three things follow, and the third is the one people miss:

1. The shoreface keeps deepening in front of the wall, so the beach narrows and eventually disappears at high tide — **passive erosion**. The wall protects the buildings by sacrificing the beach.
2. Wave reflection off a vertical wall scours the toe, accelerating the loss.
3. **The eroding backshore was itself a sediment source.** Armouring it subtracts one more supply term, so the *next* stretch downdrift now erodes slightly faster than before.

**The only budget-honest fixes add sand back**: sand bypassing (pump the trapped fillet across the harbour mouth) or beach nourishment (import it). Both are permanent operating costs, not one-off construction — which is exactly what you would expect once you accept that a beach is a flux, not an object.

## Watch out

- **You might define a desert by heat and sand.** It is defined by aridity, $P < \text{PE}$. Antarctica is the largest desert on Earth, and about three-quarters of the Sahara is rock and gravel rather than dune sand.
- **You might credit wind with carving desert landforms.** Water does most of the erosion, in rare violent events. Wind's abrasion is confined to the lowest metre or so, because that is how high saltation reaches — which is why you see undercut pedestal rocks and ventifacts, not high sculpting.
- **You might think a dune migrates because its sand blows away.** The grains recycle from stoss to lee; most of the sand stays inside the dune. And since $c \propto 1/h$, **small dunes move faster than large ones** — the opposite of the usual intuition.
- **You might picture longshore drift as a current that just carries sand along.** It is generated by residual wave obliquity: oblique swash, shore-normal backwash, plus a longshore current in the surf zone. **Remove the obliquity and the drift stops** — which is why a headland or a breakwater that turns the waves shore-parallel creates a depositional shadow behind it.
- **You might think a groyne creates sand.** It relocates it. Every cubic metre held updrift is a cubic metre missing downdrift; the budget is conserved whether or not anyone accounts for it.
- **You might treat sea-level rise as one global number.** Relative sea level is eustatic change minus land motion, and land motion is tectonic plus isostatic. Scandinavia is emerging while Louisiana drowns, under the same global curve.
- **You might read any cross-bedding as fluvial.** Rivers and dunes both cross-bed. **Aeolian sets are far thicker (metres to tens of metres), dip at or near the 34-degree repose angle, and the grains are frosted, exceptionally well rounded and almost mud-free** — a river deposit of the same grain size carries a wider size range and a mud fraction.

## One-liner

> Air is 800 times thinner than water, so wind sorts rather than carries — stripping silt to the horizon, hopping sand into dunes, and leaving gravel as pavement — and a coast is a conveyor whose sediment budget you cannot cheat: every grain a jetty traps is a grain eroded downdrift.

## Problems

**P1 (🟢)** A backshore is 0.20 mm beach sand; the storm berm behind it is 8 mm granules. Use $u_{*t}=14.72\sqrt{d}$ (SI) and $u(10)=23.03\,u_*$. (a) By what factor must the friction velocity rise to move the granules rather than the sand? (b) Give $u_{*t}$ and the 10 m wind speed for each. (c) After many years of strong onshore winds, describe the surface you would find on the berm, and name the process.

**P2 (🟡)** A 12 km stretch of coast receives $90{,}000\ \text{m}^3/\text{yr}$ of sand from a river and exports the same amount by longshore drift, so it is stable. A dam then cuts the river's sand delivery by 70 percent. Take $h_c = 8\ \text{m}$. (a) Compute the annual deficit and the shoreline retreat rate. (b) How much shoreline is lost in 50 years? (c) The city armours 2 km of its frontage with a seawall. Predict what happens to the beach in front of the wall, and what happens to the 10 km beyond it.

**P3 (🔴)** A 90 m thick sandstone unit shows: cross-bed sets **8–20 m thick** with foresets dipping 28–32 degrees, consistently toward an azimuth of 235 degrees; grains 0.15–0.30 mm, well rounded, surface-frosted, over 95 percent quartz, with no mud matrix; sets truncated by flat bounding surfaces; and thin laminated dolomitic mudstones with mud cracks between some sets. (a) Name the depositional environment and give three independent lines of evidence. (b) State the palaeowind direction as a compass bearing the wind blew *from*. (c) What do the mudstones record? (d) A colleague argues the cross-beds prove a large river system. Give two observations that refute it.

<details>
<summary>Solutions</summary>

**P1 (a)** $u_{*t} \propto \sqrt{d}$, so

$$\frac{u_{*t}(8\ \text{mm})}{u_{*t}(0.20\ \text{mm})} = \sqrt{\frac{8}{0.20}} = \sqrt{40} = \mathbf{6.32}$$

**(b)** Sand, $d = 2\times10^{-4}\ \text{m}$:

$$u_{*t} = 14.72\sqrt{2\times10^{-4}} = 14.72\times0.01414 = 0.208\ \text{m/s}, \qquad u(10) = 23.03\times0.208 = \mathbf{4.8\ \text{m/s}}$$

Granules, $d = 8\times10^{-3}\ \text{m}$:

$$u_{*t} = 0.208\times6.32 = 1.32\ \text{m/s}, \qquad u(10) = 23.03\times1.32 = \mathbf{30.3\ \text{m/s}}$$

That is about 17 km/h versus 109 km/h — **the sand moves in an ordinary sea breeze; the granules need a hurricane.**

**(c)** The sand is stripped out and blown inland to build dunes; the granules never move. What remains is a **surface concentrate of granules one clast thick, packed into an interlocking armour** — a deflation lag, the coastal version of **desert pavement**. Once formed it protects everything beneath it, so deflation is self-limiting.

**P2 (a)** Deficit $= 0.70\times90{,}000 = 63{,}000\ \text{m}^3/\text{yr}$.

$$r = \frac{\Delta Q}{L\,h_c} = \frac{63{,}000}{12{,}000\times8} = \frac{63{,}000}{96{,}000} = \mathbf{0.66\ \text{m/yr}}$$

**(b)** $50 \times 0.656 = \mathbf{33\ \text{m}}$ — modest per year, and decisive over a human lifetime. This is the reason so many deltas and dammed-river coasts are retreating.

**(c)** In front of the wall the beach **narrows and eventually vanishes**. The wall fixes the back of the profile while the shoreface in front keeps deepening and the sand supply stays 63,000 m³/yr short; the beach is squeezed between a fixed line and a retreating one — *coastal squeeze*, or passive erosion. Toe scour from reflected waves accelerates it.

Beyond the wall, the 10 km continues to retreat, and **slightly faster than before**: the 2 km of eroding backshore had been contributing its own sediment to the drift, and armouring removes that term from the budget too. **The wall does not reduce the deficit; it concentrates its effects on the neighbours.**

**P3 (a) An aeolian dune field — an erg.** Three independent lines:

1. **Set thickness of 8–20 m** requires bedforms tens of metres high. Subaqueous dunes in a river are limited by flow depth; fluvial cross-bed sets are decimetres to a couple of metres at most.
2. **Extreme textural maturity**: well rounded, frosted, over 95 percent quartz, narrowly sorted, no mud. Frosting is impact pitting from grain-on-grain collision in air, and the total absence of a mud fraction means the fines were *exported*, which is what wind does and water does not.
3. **Foreset dips of 28–32 degrees**, at the dry angle of repose, and consistent over the whole unit — a single dominant wind, not the variable palaeocurrents of a channel belt.

**(b)** Foresets dip **downwind**, and they dip toward 235 degrees. So the wind blew toward the southwest, meaning it came **from 055 degrees — a north-easterly.** (A steady unidirectional easterly component is what you would expect in a trade-wind belt, consistent with a subtropical palaeolatitude — which is a testable prediction to check against palaeomagnetic data.)

**(c)** **Interdune flats — playa or sabkha ponds.** The laminated mudstones record standing water where the water table intersected the interdune surface; the **mud cracks prove subaerial exposure** afterwards, so the ponding was episodic; and the **dolomitic** composition points to evaporative brines concentrating in a closed depression ([1.5](01-05-sedimentary-rocks.md)). Together: a desert with an intermittently high water table between the dunes.

**(d) Two refutations:**

1. **A river deep enough to build 8–20 m bedforms would leave unmistakable channel evidence** — erosional scours, basal gravel lags, fining-upward channel fills, laterally accreting point bars. None is reported; the bounding surfaces are *flat*, which is what dune-field migration and water-table planation produce.
2. **The texture is wrong for water.** A fluvial sandstone of this grain size carries a broader size distribution, a mud matrix, and lithic and feldspar grains that have not survived long transport. Frosted, mud-free, 95-percent-quartz sand in a 0.15 mm band is a wind signature; water cannot export the fines that completely.

(A third, if wanted: mud-cracked evaporitic dolomite interbeds indicate repeated subaerial desiccation of a closed evaporative basin, not a perennial river system.)

</details>

## Flashback

**From Lesson 3.2 (Mass Wasting & Slope Stability):** A cohesionless colluvial slope failed as a shallow planar slide during prolonged rain, when the slab had become fully saturated with seepage parallel to the slope. The failure surface dips $22^\circ$. Take the saturated unit weight $\gamma_{\text{sat}} = 20\ \text{kN/m}^3$ and $\gamma_w = 9.8\ \text{kN/m}^3$.

(a) Back out the friction angle $\phi'$ of the material. (b) What was the factor of safety before the rain, with the slab dry? (c) An engineer wants a drained factor of safety of 1.5. To what fraction of the slab thickness must the water table be lowered?

<details>
<summary>Solution</summary>

**(a)** For an infinite slope with $c'=0$ and slope-parallel seepage through a fully saturated slab, the slab thickness cancels and

$$FS = \frac{\gamma_{\text{sat}}-\gamma_w}{\gamma_{\text{sat}}}\cdot\frac{\tan\phi'}{\tan\beta}$$

Failure means $FS = 1$ at $\beta = 22^\circ$, where $\tan 22^\circ = 0.4040$:

$$\tan\phi' = \tan\beta \cdot \frac{\gamma_{\text{sat}}}{\gamma_{\text{sat}}-\gamma_w} = 0.4040\times\frac{20}{10.2} = 0.4040\times1.961 = 0.7922$$

$$\phi' = \arctan(0.7922) = \mathbf{38.4^\circ}$$

A perfectly ordinary friction angle for angular colluvium — **the material was not weak; the water was strong.**

**(b)** Dry, the water term disappears and $FS = \tan\phi'/\tan\beta$:

$$FS_{\text{dry}} = \frac{0.7922}{0.4040} = \mathbf{1.96}$$

Note what happened: since $FS_{\text{sat}} = 1$ by construction,

$$\frac{FS_{\text{dry}}}{FS_{\text{sat}}} = \frac{\gamma_{\text{sat}}}{\gamma_{\text{sat}}-\gamma_w} = \frac{20}{10.2} = 1.96$$

**Full slope-parallel saturation cuts the factor of safety almost exactly in half**, for any cohesionless slope, because the buoyant unit weight of soil is about half its saturated unit weight. A slope that looks comfortably safe in summer is at failure in a wet winter, and neither the material nor the geometry changed.

**(c)** With the water table at a fraction $m$ of the slab thickness above the failure plane (taking the unit weight above it as roughly unchanged),

$$FS = \frac{\gamma_{\text{sat}}-m\gamma_w}{\gamma_{\text{sat}}}\cdot\frac{\tan\phi'}{\tan\beta} = \frac{20-9.8m}{20}\times1.961$$

Set $FS = 1.5$:

$$\frac{20-9.8m}{20} = \frac{1.5}{1.961} = 0.7649 \;\Longrightarrow\; 20-9.8m = 15.30 \;\Longrightarrow\; m = \mathbf{0.48}$$

**Drain the slab so the water table never rises above about half its thickness, and the slope carries a factor of safety of 1.5.** This is why drainage — counterfort drains, horizontal drains, surface interception — is the highest-value slope intervention: it attacks pore pressure directly, and pore pressure is the only term in the expression that actually varies from month to month.

</details>

## Connections

- **Backward:** the slip face sits at [3.2](03-02-mass-wasting-slope-stability.md)'s angle of repose, and desert slopes fail by the same effective-stress arithmetic when a flash flood saturates them; [3.3](03-03-rivers-landscape-evolution.md)'s Hjulström curve has the same upturn for cohesive fines, in a fluid 800 times denser; [3.4](03-04-glaciers-ice-ages.md) supplies both the outwash silt that becomes loess and the glacio-isostatic rebound that makes relative sea level regional rather than global; [1.5](01-05-sedimentary-rocks.md) owns the cross-bedding, sorting and evaporite sequence that this lesson reads; [3.1](03-01-weathering-soils.md) makes the desert crusts and lag surfaces that control runoff.
- **Forward:** [3.6](03-06-groundwater-aquifers-karst.md) needs the playa and sabkha water tables, the dune sand whose sorting makes it a superb aquifer, and the coastal aquifers vulnerable to saltwater intrusion; [4.4](04-04-stratigraphy-facies-correlation.md) turns the shoreline conveyor into transgression, regression and Walther's law; [4.5](04-05-reading-a-geologic-map.md) uses aeolian cross-bed azimuths as a way-up and palaeogeography constraint; [5.3](05-03-earth-history-phanerozoic.md) uses ancient ergs as palaeolatitude markers; [5.4](05-04-resources-geologic-hazards.md) takes the playa evaporites and the coastal hazard exposure.
- **Sideways:** the Hadley circulation that puts deserts at 30 degrees is [`atmospheric-science`](../../atmospheric-science/syllabus.md), and the sea-level projections are [`climate-science`](../../climate-science/syllabus.md); wave refraction is Snell's law from [waves-optics 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md) with $c=\sqrt{gh}$; surface-wave mechanics are [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md), Stokes settling is [fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md) and the logarithmic wind profile is [fluid-dynamics 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md); tides are [`geophysics`](../../geophysics/syllabus.md) 2.5.
