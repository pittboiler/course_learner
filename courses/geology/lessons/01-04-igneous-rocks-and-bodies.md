# Geology · Lesson 1.4: Igneous Rocks & Igneous Bodies

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: [1.3](01-03-how-the-earth-melts.md), [1.1](01-01-what-a-mineral-is.md) · Unlocks: [1.5](01-05-sedimentary-rocks.md) (sedimentary rocks)

## Why this matters

[1.3](01-03-how-the-earth-melts.md) explained how the Earth makes magma. This lesson is the return trip: given a frozen magma in your hand, **recover the history that made it.**

The payoff is that an igneous rock carries *two independent records*, and they are read by two different senses. Its **composition** tells you what melted and how far the melt differentiated — where it came from. Its **texture** tells you how fast it lost its heat — and since heat loss is governed by conduction, that is a statement about *how deep it was and how big the body was*. Neither record contaminates the other, which is why a single two-axis grid does the whole job.

**The consequence worth stating up front: granite and rhyolite are the same rock.** Same silica, same minerals, same source. One cooled at 8 km depth over half a million years and one cooled on a hillside in a week. The grid is not a list of eight rocks to memorize — it is **four compositions × two cooling histories**, and once you see it that way you can name a rock you have never been shown.

## The idea

**Axis 1 — composition, which is really silica content.** From [1.1](01-01-what-a-mineral-is.md), the amount of $\text{SiO}_2$ in a melt controls how polymerized it is, which controls which minerals crystallize out of it, which controls almost everything else. So a single number drags a whole convoy behind it:

> more silica $\Rightarrow$ more quartz and feldspar, fewer olivine/pyroxene $\Rightarrow$ **lighter colour, lower density, lower melting temperature, higher viscosity**

That convoy is not a coincidence. It is Bowen's series ([1.3](01-03-how-the-earth-melts.md)) read as a table: the minerals that crystallize *first and hottest* (olivine, pyroxene, Ca-plagioclase) are the silica-poor, iron- and magnesium-rich, dense, dark ones; the ones that crystallize *last and coolest* (quartz, K-feldspar, muscovite) are the silica-rich, light, low-density ones. **A rock's colour is a crude thermometer of the temperature at which it froze.**

**Axis 2 — texture, which is really cooling rate.** Crystals need two things: somewhere to start (a nucleus) and time to grow. Cool a melt slowly and few nuclei form, each with a long time to grow — you get a handful of large, interlocking crystals. Cool it fast and the melt is driven far below its liquidus before anything happens, so nuclei form everywhere at once and each crystal runs into its neighbours while still tiny. **Grain size is not "time to cool" — it is melt volume divided by number of nuclei**, and both terms move the same way with cooling rate, which is why the effect is so dramatic. This is exactly the nucleation-versus-growth trade-off that [materials-science 3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) owns for steel; the same physics, different melt.

And because cooling of a body of rock is **conduction**, the cooling time obeys the diffusion scaling — quadratic in size. That is the hinge of the whole lesson: **texture is a proxy for the size and depth of the body, and it works over eight orders of magnitude.**

## The formal version

### Composition classes

Boundaries are conventions (different textbooks shift them a couple of percent), but the *ordering* and the correlated properties are physical.

| Class | $\text{SiO}_2$ (wt %) | Colour index | Density | Dominant minerals | Plutonic / volcanic |
|---|---|---|---|---|---|
| Felsic | $>65$ | 0–15 | $2.7\ \text{g/cm}^3$ | quartz, K-feldspar, Na-plagioclase | granite / rhyolite |
| Intermediate | 52–65 | 15–45 | $2.8\ \text{g/cm}^3$ | plagioclase, amphibole | diorite / andesite |
| Mafic | 45–52 | 45–85 | $3.0\ \text{g/cm}^3$ | Ca-plagioclase, pyroxene | gabbro / basalt |
| Ultramafic | $<45$ | $>85$ | $3.3\ \text{g/cm}^3$ | olivine, pyroxene | peridotite / (komatiite) |

**Colour index** is the volume percent of dark (ferromagnesian) minerals. *In words: count the dark grains, and you have estimated the composition without a chemistry lab.*

**Two things the table is quietly telling you.** First, the density column is the reason the ocean floor and the continents behave differently — a $3.0\ \text{g/cm}^3$ basaltic crust subducts and a $2.7\ \text{g/cm}^3$ granitic crust will not. Second, there is essentially **no volcanic ultramafic rock younger than about 2.5 billion years.** Komatiite requires eruption temperatures near $1600\ ^\circ\text{C}$; the mantle has cooled since the Archean and no longer produces such melts. The empty cell in the grid is a data point about Earth's thermal history.

### Texture and cooling rate

| Texture | Grain size | What it proves |
|---|---|---|
| Phaneritic | $>1\ \text{mm}$, visible unaided | slow cooling, insulated — **intrusive** |
| Aphanitic | $<1\ \text{mm}$ | fast cooling — **extrusive**, or a thin/marginal intrusion |
| Porphyritic | large **phenocrysts** in a finer **groundmass** | **two** cooling rates, in that order |
| Glassy | no crystals at all | quenched faster than atoms could organize |
| Vesicular | frozen bubbles | dissolved gas exsolved at low pressure |
| Pyroclastic | angular fragments, shards | the magma was blown apart, not poured |

**Porphyritic texture is the most informative one there is.** *In words: a porphyry says the magma sat in a chamber long enough to grow centimetre crystals, then moved somewhere much colder before it finished.* That is a two-stage ascent history recorded in one hand sample — and the phenocrysts, having crystallized first, are by Bowen's ordering the higher-temperature minerals in the rock.

**Why obsidian has no crystals.** Rhyolitic melt is highly polymerized ([1.1](01-01-what-a-mineral-is.md)) — a tangle of linked $\text{SiO}_4$ tetrahedra whose viscosity is $10^{6}$–$10^{8}$ times that of basalt. Crystallizing requires atoms to *diffuse* into lattice positions, and diffusion in that tangle is glacially slow. Quench it and the atoms simply never arrive: **a glass is a liquid's disorder, frozen in.** Note the consequence for identification — obsidian is jet black despite being 72 percent silica, because colour index counts *minerals* and glass has none.

### The cooling-time law

A body of rock loses heat by conduction, so the only length scale in the problem is its own half-width $a$, and the only material property is the thermal diffusivity $\kappa$ (called $\alpha$ in [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)). Dimensional analysis leaves exactly one combination:

$$\boxed{\;t_{\text{cool}} \sim \frac{a^{2}}{\kappa}, \qquad \kappa_{\text{rock}} \approx 1\times10^{-6}\ \text{m}^2/\text{s}\;}$$

*In words: cooling time goes as the square of the body's half-width — double the thickness and you quadruple the wait.* Equivalently, the heat front reaches only $\delta \sim \sqrt{\kappa t}$ into the wall rock in time $t$.

**$\kappa$ is remarkably constant across rock types** (roughly $0.5$–$1.5\times10^{-6}\ \text{m}^2/\text{s}$), so this is one of the rare geological estimates that needs almost no input data. Worked numbers are in Example 2.

### Igneous bodies, and how to catch one in the act

An intrusion is classified by whether it *respects* the layering it invades:

| Body | Relation to host layering | Form | Scale |
|---|---|---|---|
| **Sill** | concordant (parallel) | sheet | cm to hundreds of m thick |
| **Laccolith** | concordant, roof domed up | lens | 100 m to km |
| **Dike** | **discordant** (cuts across) | sheet | cm to tens of m |
| **Batholith** | discordant | massive, irregular | $>100\ \text{km}^2$ outcrop |
| **Stock** | discordant | massive | $<100\ \text{km}^2$ |
| **Volcanic neck** | discordant | pipe, the frozen conduit | tens to hundreds of m |

**The field evidence that something is intrusive** — and this is what you actually look for at an outcrop:

- **Chilled margin.** The intrusion's own edge is finer-grained than its interior, because it quenched against cold country rock. A grain-size gradient pointing *inward* from both walls.
- **Contact aureole.** The host rock is baked — recrystallized, hardened, sometimes bleached — for a distance that scales with the intrusion's size (see P3). This is contact metamorphism, and [1.6](01-06-metamorphic-rocks-rock-cycle.md) owns it.
- **Xenoliths.** Torn-off blocks of host rock floating in the intrusion. The blocks are *older* than the rock enclosing them, which is a principle [4.1](04-01-relative-dating-unconformities.md) will formalize.
- **Apophyses.** Small dikes injected from the body into the surrounding rock.

**The sill-versus-buried-lava-flow problem.** Both are dark, fine-grained sheets sandwiched conformably between sedimentary layers. Distinguishing them is a real and consequential field problem, because it decides whether the sheet's radiometric age dates the sediments or merely post-dates them:

| Observation | Sill (intruded later) | Buried flow (erupted at the time) |
|---|---|---|
| Baked contact **below** | yes | yes |
| Baked contact **above** | **yes** | **no** |
| Chilled margin | both surfaces | base only |
| Top surface | fresh, sharp | vesicular, oxidized, weathered, sometimes rubbly |
| Xenoliths of the **overlying** unit | possible | impossible |
| Clasts of the sheet in the bed above | impossible | common |

**One line settles it: only a sill can bake the rock above it.**

## Picture

![A classification grid for igneous rocks. Across the top are four composition columns, felsic, intermediate, mafic and ultramafic, each annotated with its silica percentage, colour index, density and solidus temperature, with an arrow noting that silica falls to the right while colour index, density and melting temperature rise. The first row shows coarse interlocking-crystal swatches for the plutonic rocks granite, diorite, gabbro and peridotite, with the proportion of dark grains increasing to the right. The second row shows fine-grained speckled swatches for their volcanic twins rhyolite, andesite, basalt and komatiite. A bottom strip shows four textures that record cooling history rather than composition: porphyritic phenocrysts in a fine groundmass, glassy obsidian with conchoidal fracture arcs, vesicular rock full of frozen bubbles, and pyroclastic angular shards.](assets/01-04-fig1.svg)

Read it in two directions. **Across a row**, composition changes and cooling rate is fixed. **Down a column**, the magma is the same and only its ending differs.

## Worked examples

### Example 1 (mechanical) — from a mineral count to a rock name

A coarse-grained rock is examined and its minerals counted by volume: **quartz 25 %, K-feldspar 32 %, plagioclase (An₂₀) 30 %, biotite 9 %, amphibole 4 %.** Name the rock and estimate its bulk silica content.

**Step 1 — colour index.** Dark minerals are biotite and amphibole: $9 + 4 = \mathbf{13}$. Felsic.

**Step 2 — silica content of each mineral.** Each is the mass fraction of $\text{SiO}_2$ in the formula. Using $M(\text{SiO}_2)=60.08$:

| Mineral | Formula | Molar mass | $\text{SiO}_2$ in it | wt % $\text{SiO}_2$ |
|---|---|---|---|---|
| Quartz | $\text{SiO}_2$ | 60.08 | 60.08 | 100.0 |
| Orthoclase | $\text{KAlSi}_3\text{O}_8$ | 278.33 | $3(60.08)=180.25$ | 64.8 |
| Albite | $\text{NaAlSi}_3\text{O}_8$ | 262.22 | 180.25 | 68.7 |
| Anorthite | $\text{CaAl}_2\text{Si}_2\text{O}_8$ | 278.21 | $2(60.08)=120.17$ | 43.2 |
| Biotite | — | — | — | $\approx 37$ |
| Amphibole | — | — | — | $\approx 45$ |

An₂₀ plagioclase is 80 % albite, 20 % anorthite — the solid solution from [1.1](01-01-what-a-mineral-is.md):

$$0.80(68.7) + 0.20(43.2) = 54.96 + 8.64 = 63.6\ \%$$

**Step 3 — weight the minerals.**

$$\text{SiO}_2 = 0.25(100) + 0.32(64.8) + 0.30(63.6) + 0.09(37) + 0.04(45)$$

$$= 25.00 + 20.72 + 19.09 + 3.33 + 1.80 = \mathbf{69.9\ \%}$$

**Step 4 — the honest correction.** Modal percentages are *volumes*, but silica content is a *mass* fraction, and the mafic minerals are denser ($\rho \approx 3.05$–$3.15$ versus $2.56$–$2.65\ \text{g/cm}^3$). Converting volume to mass:

$$\sum V_i\rho_i = 25(2.65)+32(2.56)+30(2.65)+9(3.05)+4(3.15) = 267.7$$

giving mass fractions $0.248,\ 0.306,\ 0.297,\ 0.103,\ 0.047$ and

$$\text{SiO}_2 = 24.75+19.82+18.90+3.79+2.12 = \mathbf{69.4\ \%}.$$

**The correction is half a percentage point** — it moves nothing. It is worth doing once so you know it never needs doing again.

**Answer: 69–70 % silica, colour index 13, coarse-grained $\Rightarrow$ felsic and plutonic $\Rightarrow$ granite.** (Cross-check on the standard QAPF scheme: quartz is $25/87 = 29\ \%$ of the quartz–alkali feldspar–plagioclase total, and plagioclase is $30/62 = 48\ \%$ of the feldspars — squarely in the granite field.) **Its extrusive twin, chemically identical, would be a rhyolite.**

### Example 2 (why you'd care) — how big was the body?

Take $\kappa = 1\times10^{-6}\ \text{m}^2/\text{s}$ and use $t \sim a^2/\kappa$ with $a$ the **half**-width.

| Body | Thickness | $a$ | $t = a^2/\kappa$ | In human units |
|---|---|---|---|---|
| Dike | $1\ \text{m}$ | $0.5\ \text{m}$ | $2.5\times10^{5}\ \text{s}$ | **3 days** |
| Sill | $50\ \text{m}$ | $25\ \text{m}$ | $6.25\times10^{8}\ \text{s}$ | **20 years** |
| Batholith | $10\ \text{km}$ | $5000\ \text{m}$ | $2.5\times10^{13}\ \text{s}$ | **800,000 years** |

Check the first: $t = (0.5)^2/10^{-6} = 2.5\times10^5\ \text{s}$, and $2.5\times10^5/86400 = 2.9$ days. The last: $2.5\times10^{13}/3.16\times10^{7} = 7.9\times10^{5}$ years.

**The ratio is the point.** The batholith is $10^{4}$ times wider than the dike and takes

$$\left(\frac{5000}{0.5}\right)^{2} = 10^{8}$$

**times as long to cool** — a hundred million times, from three days to eight hundred thousand years. Quadratic scaling is brutal, and it is why the grain-size difference between basalt and gabbro is so stark.

**Now invert it into grain sizes.** Suppose the granite's crystals average $5\ \text{mm}$ and the basalt's average $0.2\ \text{mm}$. Since grain size is set by melt volume per nucleus, the nucleation density $n$ is one grain per grain-volume:

$$n_{\text{granite}} = \frac{1}{(5\times10^{-3})^{3}} = 8\times10^{6}\ \text{m}^{-3}, \qquad n_{\text{basalt}} = \frac{1}{(2\times10^{-4})^{3}} = 1.25\times10^{11}\ \text{m}^{-3}$$

$$\frac{n_{\text{basalt}}}{n_{\text{granite}}} = 1.6\times10^{4}$$

**Sixteen thousand times more crystal nuclei per cubic metre in the quickly cooled rock.** That is the nucleation-versus-growth competition made numerical: it is not merely that the basalt had less time, it is that it *started far more crystals* and each one ran out of room almost immediately.

**What this buys you in the field.** A fine-grained dark sheet cutting sandstone cooled in days, so it was thin, so you are looking at a dike — even before you check the contacts. And the classic composite pluton, coarse in the middle and fine at the margin, is just $t \sim a^2/\kappa$ applied at two distances from the wall.

**Closing the loop with [1.3](01-03-how-the-earth-melts.md).** Partial melting always yields a melt more silica-rich than its source, and fractional crystallization drives what is left more silica-rich still. Run that for four billion years and the light residue floats permanently on top: **the continents are granite because they are the distillate, and the ocean floor is basalt because it is a fresh, barely differentiated tap of the mantle** — which is also why ocean floor is dense enough to sink and continents are not.

## Watch out

- **You might think big crystals always mean slow cooling.** Usually yes — but **pegmatites** are the counterexample, with crystals metres long grown in a residual melt so charged with dissolved water that its viscosity collapses and diffusion becomes easy. Grain size measures *growth achieved per nucleus*, and water raises growth without adding time. Bowen's continuous ordering does not fail; the kinetics change.
- **You might think the grid holds eight different rocks.** It holds **four magmas and two endings**. Granite and rhyolite have the same chemistry; the only difference is where they stopped.
- **You might use colour to read composition.** It is a good first cut for crystalline rocks, but obsidian is black at 72 % silica and pumice is white at the same composition. **Colour index counts minerals, and glass and froth have none** — for those, only chemistry or context will do.
- **You might call a fine-grained rock "volcanic".** Aphanitic means *fast cooling*, not *at the surface*. The chilled margin of a metre-wide dike a kilometre underground is just as fine-grained as a lava flow. Read the body, not just the grain.
- **You might assume a conformable sheet between sediments is a lava flow.** Check for a baked zone **above** it, and for a vesicular or weathered top. This decides whether its radiometric age dates the sediments or merely puts a ceiling on them ([4.2](04-02-radiometric-dating.md)).

## One-liner

> Composition says where the magma came from and texture says how fast it stopped being magma — so granite and rhyolite are the same rock with different endings, and since conduction gives $t \sim a^2/\kappa$, grain size is really a measurement of how big the body was.

## Problems

**P1 (🟢)** Two rocks come from the same volcanic field. **Rock A:** coarse, interlocking crystals; 25 % glassy grey quartz, pink feldspar dominant, colour index 8; bulk silica 72 %. **Rock B:** pale grey, so fine you cannot resolve a single grain, with a few scattered 3 mm quartz crystals; bulk silica 72 %. (a) Name each. (b) Which formed at depth, and how do you know from the sample alone? (c) What is the correct textural term for Rock B, and what two-stage history does it record?

**P2 (🟡, field inference)** A 12 m thick, dark, fine-grained sheet lies between sandstone below and shale above, parallel to both. You record:

1. the sheet's upper 30 cm is full of frozen bubbles and its topmost centimetres are oxidized red;
2. the lowest 20 cm of the overlying shale contains angular fragments of the dark rock;
3. the sandstone beneath is reddened and hardened for 1.5 m;
4. the shale above shows no baking whatsoever.

(a) Is this a sill or a buried lava flow? Cite the two most decisive observations. (b) Three kilometres along strike, a similar sheet has fine-grained margins at *both* surfaces, baked zones above and below, no bubbly top, and contains angular blocks of shale near its own top. Classify it. (c) Each sheet is dated radiometrically. State precisely what each age means for the age of the shale.

**P3 (🔴, bridges to heat-transfer and to 1.6)** A sill is 100 m thick. Take $\kappa = 1\times10^{-6}\ \text{m}^2/\text{s}$. (a) Estimate its cooling time in years. (b) Estimate how far the thermal front penetrates the wall rock in that time, and hence predict the width of the contact aureole. (c) A 1 m dike and a 10 km batholith intrude the same country rock. Predict each aureole width, and state the general rule in one sentence. (d) Give one physical reason real aureoles are wider than this estimate.

<details>
<summary>Solutions</summary>

**P1 (a)** Both are felsic at 72 % silica with colour index under 15. Rock A is **phaneritic** — coarse, interlocking, visible grains — so it is **granite**. Rock B is **aphanitic** with a few large crystals, so it is **rhyolite**.

**(b) Rock A formed at depth.** Coarse grain size requires slow cooling, which requires insulation by overlying rock; a surface flow of this composition cools far too fast. Note that we can say this *from the texture alone*, with no map, no contacts, and no field relations — that is the whole point of the texture axis.

**(c) Rock B is porphyritic**, with 3 mm quartz **phenocrysts** in an aphanitic **groundmass**. It records **two cooling stages**: the magma stalled in a shallow chamber long enough to nucleate and grow millimetre quartz, then erupted, quenching the remaining liquid to a grain size too small to resolve. A single-stage history cannot produce two grain populations with nothing in between.

**And the headline:** A and B have **identical chemistry**. They are the same magma. The only difference between a granite and a rhyolite is whether the magma reached the surface.

**P2 (a) A buried lava flow.**

The two decisive observations are **(4) and (2)**:

- **No baking above.** A 12 m sheet of magma at ~$1100\ ^\circ\text{C}$ *cannot* be emplaced beneath the shale without cooking it. An unbaked roof means the shale was not there yet — it was deposited on top afterwards. This alone settles it.
- **Clasts of the sheet inside the shale above.** The dark rock had to exist, be solid, and be eroded before the shale accumulated. An intrusion cannot supply fragments to a bed it has not yet reached.

Observations (1) and (3) corroborate: a vesicular, oxidized top is a flow surface that degassed at atmospheric pressure and weathered in air, and the baked sandstone below is exactly the one contact a flow does bake.

**(b) A sill.** Chilled margins on both surfaces mean both walls were cold country rock; baking above and below means both hosts were in place; the absence of a vesicular top means it never decompressed to the surface; and **blocks of the overlying shale caught inside the sheet** are xenoliths — the intrusion stoped them off its own roof, which is impossible if the shale post-dates it.

**(c) The two ages mean different things.**

- The **flow** erupted onto the sandstone and was then buried by the shale, so its age is bracketed by the two units and is effectively the **depositional age** of that part of the section. It is a genuine tie-point in the timescale.
- The **sill** intruded rock that was already there, so it is younger than the shale. Its age is only a **minimum age for the shale** — a ceiling that could be off by hundreds of millions of years.

**This is why the contact test matters:** mistaking the sill for a flow would assign the shale a date it does not have, and the error is one-sided. [4.1](04-01-relative-dating-unconformities.md) formalizes the baked-contact criterion as a dating principle in its own right.

**P3 (a)** Half-width $a = 50\ \text{m}$:

$$t \sim \frac{a^2}{\kappa} = \frac{(50)^2}{10^{-6}} = \frac{2500}{10^{-6}} = 2.5\times10^{9}\ \text{s}$$

$$\frac{2.5\times10^{9}}{3.16\times10^{7}} = \mathbf{79\ \text{years}}.$$

A century — long by human standards, instantaneous geologically.

**(b)** The thermal front reaches

$$\delta \sim \sqrt{\kappa t} = \sqrt{(10^{-6})(2.5\times10^{9})} = \sqrt{2500} = \mathbf{50\ \text{m}}.$$

**Predicted aureole: tens of metres, of order the sill's half-width.**

Notice *why* the answer came out equal to $a$: substituting $t = a^2/\kappa$ into $\delta \sim \sqrt{\kappa t}$ gives $\delta \sim a$ identically. **There is only one length in the problem**, so the aureole cannot have any absolute thickness of its own — it must scale with the intrusion. That is a result, not a coincidence.

**(c)**

| Intrusion | $a$ | Predicted aureole |
|---|---|---|
| 1 m dike | 0.5 m | **~0.5 m** (decimetres) |
| 100 m sill | 50 m | ~50 m |
| 10 km batholith | 5 km | **~5 km** (kilometres) |

**The rule: aureole width scales with the intrusion's half-width, not with its temperature.** A dike bakes a hand's breadth; a batholith bakes a mountainside. This is checkable against any published map — contact-metamorphic aureoles around batholiths are indeed kilometres wide, and around dikes are centimetres to decimetres.

**(d)** Any one of:

- **Latent heat of crystallization.** The magma must release its heat of fusion (~$4\times10^{5}\ \text{J/kg}$) before it can cool below its solidus, which holds it near-isothermal for a long time and pumps far more heat into the wall than the sensible heat alone. This is a real and large effect.
- **Hydrothermal circulation.** Heated pore water convects, and **advection carries heat much further and faster than conduction** — which also explains why aureoles are commonly asymmetric and why they are widest where the host rock is permeable.
- **Repeated injection.** Most large bodies are assembled from many pulses, so the wall rock is heated again and again rather than once.

The conduction estimate is a lower bound. It is still the right first calculation, because it gets the *scaling* right, and the scaling is what lets you predict.

</details>

## Flashback

**From Lesson 1.2 (Identifying Minerals):** A coarse-grained rock is examined with a hand lens and a scratch kit. Four minerals are present:

| Grain | Observations |
|---|---|
| **A** | colourless to smoky, glassy lustre, **no cleavage**, curved shell-like fracture surfaces, scratches window glass |
| **B** | salmon pink, vitreous, **two cleavages meeting at about 90°**, hardness ~6, no fine parallel striations on any cleavage face |
| **C** | dark green-black, vitreous, **two cleavages meeting at about 56° and 124°**, hardness ~5.5, elongate prisms |
| **D** | white, soft, in a thin cross-cutting seam; **fizzes vigorously in dilute HCl** |

(a) Name A, B and C. (b) For B, state the single observation that separates it from the other feldspar. (c) For C, state the observation that separates it from the mineral it is most often confused with, and why the two differ. (d) Name D — and explain why its presence is a problem for calling this an unaltered igneous rock.

<details>
<summary>Solution</summary>

**(a)**

- **A = quartz.** No cleavage plus **conchoidal fracture** is the giveaway: a framework silicate ([1.1](01-01-what-a-mineral-is.md)) has Si–O bonds of equal strength in all directions, so there is no plane of weakness to part along and it breaks like glass. Hardness 7 (scratches glass, ~5.5) confirms it.
- **B = orthoclase (K-feldspar).** Two cleavages at ~90°, hardness 6, salmon pink.
- **C = amphibole (hornblende).** Two cleavages at ~56°/124°.

**(b) The absence of striations.** Plagioclase shows fine parallel **twinning striations** on its best cleavage face; orthoclase does not. Colour is suggestive — pink usually means K-feldspar — but colour is the least reliable property there is ([1.2](01-02-identifying-minerals.md)), and plagioclase can be pink. **The striation test is the diagnostic one; the colour is a hint.**

**(c) The cleavage angle separates amphibole from pyroxene:** amphibole cleaves at **56°/124°**, pyroxene at **87°/93°** — near enough to 90° that the two are distinguishable with a hand lens and a protractor, and by nothing else reliable.

**Why they differ is structural.** Cleavage runs between the silicate chains, where only weak cation bonds hold the structure together. Pyroxene is a **single-chain** silicate, so the cleavage traces outline a near-square cross-section; amphibole is a **double-chain** silicate, so its wider ribbon-shaped units force the traces into a diamond. **The angle is a direct readout of chain width** — a hand-lens measurement of something happening at the ångström scale.

**(d) D = calcite** (soft, white, effervesces in dilute acid — the carbonate test).

**Calcite is not a primary igneous mineral in a rock like this**, and it sits in a **cross-cutting seam**, not as an interlocking grain in the crystal framework. It was introduced later, by fluid moving through a fracture — a hydrothermal or weathering vein.

So the honest reading: the *rock* is a **granite** (quartz + K-feldspar dominant, minor amphibole, colour index low, coarse and interlocking $\Rightarrow$ felsic and plutonic, ~70 % silica), but it has been **veined after crystallization**. Two events, not one — which is exactly the reasoning [4.1](04-01-relative-dating-unconformities.md) turns into the cross-cutting principle.

</details>

## Connections

- **Backward:** [1.3](01-03-how-the-earth-melts.md) supplies the composition axis — partial melting and fractional crystallization are *why* the four composition classes exist, and Bowen's ordering is why dark means hot. [1.1](01-01-what-a-mineral-is.md) supplies the polymerization argument behind viscosity, glass, and cleavage.
- **Forward:** [1.5](01-05-sedimentary-rocks.md) starts where this ends — these rocks are the source of nearly all clastic sediment, and their mineral stability order controls what survives the trip. [1.6](01-06-metamorphic-rocks-rock-cycle.md) owns the contact aureole as metamorphism. [2.2](02-02-plate-boundaries.md) uses "basalt at ridges, andesite at arcs, granite in continents" as a boundary diagnostic; [2.8](02-08-volcanoes-volcanic-hazards.md) takes silica and dissolved gas — the two variables set up here — and derives eruptive style from them. [4.1](04-01-relative-dating-unconformities.md) and [4.2](04-02-radiometric-dating.md) depend on the sill-versus-flow distinction to know what a date means.
- **Sideways:** the nucleation-versus-growth competition is [materials-science 3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) — a quenched basalt and a quenched steel are the same physics; the equilibrium bookkeeping behind Bowen's series is [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md). The conduction scaling $t \sim a^2/\kappa$ and the penetration depth $\delta \sim \sqrt{\kappa t}$ are [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md), where $\kappa$ is written $\alpha$. Crustal density contrasts and the buoyancy that follows are treated quantitatively in [`geophysics`](../../geophysics/syllabus.md) 2.3.
