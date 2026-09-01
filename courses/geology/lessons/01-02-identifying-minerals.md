# Geology · Lesson 1.2: Identifying Minerals

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: [1.1](01-01-what-a-mineral-is.md) · Unlocks: [1.3](01-03-how-the-earth-melts.md) (how the Earth melts)

## Why this matters

Every later lesson in this course takes a mineral list as its input. You cannot name an igneous rock without knowing its modal mineralogy ([1.4](01-04-igneous-rocks-and-bodies.md)), cannot read a metamorphic rock's pressure–temperature path without its index minerals ([1.6](01-06-metamorphic-rocks-rock-cycle.md)), and cannot map anything without telling one grey rock from another in the field. **Identification is not the trivia at the front of the textbook; it is the measurement step.**

And the field kit is absurd: a fingernail, a pocket knife, a scrap of unglazed porcelain, a dropper of dilute acid, a hand lens, and — for the specific-gravity work — a balance. That is it. **The whole skill is in the *order* you run the tests**, because each test costs the same (seconds) but they differ enormously in how much of the candidate list they eliminate.

The deeper point: [1.1](01-01-what-a-mineral-is.md) argued that structure determines properties. This lesson runs that argument backwards — **you are inferring an atomic lattice from the outside, with a knife.** Every property below except one is the structure showing through. The exception is colour, and that is exactly why colour is the worst test.

## The idea

**A dichotomous key is an ordering problem, not a lookup table.** With roughly a dozen minerals making up almost all rock, you need about $\log_2 12 \approx 3.6$ well-chosen binary splits to isolate one. The trick is choosing splits that cut the surviving population roughly in half rather than shaving one candidate off the end.

Ranked by how much they split, and how cheaply:

1. **Luster** — metallic or not? One glance, and it partitions the whole mineral kingdom into two nearly disjoint sets that share almost no other properties. Free information.
2. **Hardness bracket** — three field tools (fingernail, knife, glass) give four bins. Also nearly free, and it is a *bracket*, not a number, which is the honest way to use it.
3. **Cleavage** — count the planes, measure the angles. **This is the single most diagnostic property**, because cleavage is a direct picture of where the bonds are weak, and bond geometry is what a mineral *is*.
4. **One decisive test** — by this point you usually have two candidates left, and there is almost always a single test that separates them outright: a drop of acid, a magnet, a streak plate, a look for striations, or just the heft.
5. **Colour** — last, and treated as a hint rather than evidence.

**Why cleavage carries the most information.** Rock breaks where the bonds are weakest. In a silicate the Si–O bond is far stronger than any cation–oxygen bond, so **a fracture surface will do almost anything to avoid cutting a silicate chain, sheet or framework.** That means the cleavage pattern is a *map of the polymerization geometry* from [1.1](01-01-what-a-mineral-is.md):

- **Sheets** (mica) — one direction of weakness between the sheets, so **one** perfect cleavage.
- **Chains** (pyroxene, amphibole) — the fracture must weave between chain columns, so **two** cleavages, and the angle between them is set by the shape of the column's cross-section. Single chains give a near-square column and near-$90^\circ$ cleavage; double chains give a column twice as wide and cleavage at $56^\circ$ and $124^\circ$. **The angle you measure with a hand lens is a direct readout of how many chains are welded together.**
- **Frameworks** (quartz) — bonded equally in all directions, so there is no weak plane at all and the mineral fractures conchoidally, in smooth curved shells like glass.

That is the whole logic. Everything else is bookkeeping.

## The formal version

### Hardness — an ordinal scale, and what that costs you

**Mohs hardness** $H$ is defined purely by scratching: mineral A has higher $H$ than B if A scratches B. It is a **rank ordering**, not a measurement of anything.

| Mohs $H$ | Mineral | Knoop hardness ($\text{kg/mm}^2$) |
|---|---|---|
| 1 | talc | $\approx 1$ |
| 2 | gypsum | 32 |
| 3 | calcite | 135 |
| 4 | fluorite | 163 |
| 5 | apatite | 430 |
| 6 | orthoclase | 560 |
| 7 | quartz | 820 |
| 8 | topaz | 1340 |
| 9 | corundum | 2100 |
| 10 | diamond | $\approx 7000$ |

*In words: the numbers 1 through 10 are labels for a queue, not values on an axis.*

**The nonlinearity is severe and in one direction.** Steps 1 to 9 span a factor of about 2100 in indentation hardness; the single step from 9 to 10 spans another factor of 3.3. **You may never subtract, average or interpolate Mohs numbers**, and a reported hardness of "5.5" means only "between apatite and orthoclase," never "halfway."

What you may do is *bracket*, which is all the field needs:

| Tool | Effective $H$ | What it tells you |
|---|---|---|
| fingernail | 2.5 | scratches gypsum, clays, talc |
| copper wire or old penny | 3.5 | scratches calcite |
| pocket knife / window glass | 5.5 | **the big split** — above or below feldspar |
| steel file | 6.5 | scratches feldspar, not quartz |
| unglazed porcelain streak plate | $\approx 6.5$ | doubles as the streak test |

**Where hardness comes from.** Hardness tracks the strength of the *weakest continuous bond path* through the structure — resisting an indenter means resisting bond rupture along whatever plane is easiest ([materials-science 1.1](../../materials-science/lessons/01-01-bonding-energy-well.md), [inorganic-chemistry 1.2](../../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md) for the lattice-energy argument). Talc is $H=1$ because its silicate sheets are held to each other only by van der Waals forces; diamond is $H=10$ because there is no direction in it that is not a covalent bond.

**Hardness and cleavage are therefore the same fact read two ways.** A mineral with a genuinely weak bonding direction is both soft *and* perfectly cleavable — that is the micas, and it is why "soft, and it peels" is a two-property observation that is really one.

### Cleavage versus fracture — the geometry, computed

**Cleavage** is breakage along planes of weak bonding; it repeats through the specimen, so a cleaved crystal flashes at you from many parallel levels at once when you rotate it. **Fracture** is breakage that ignores the structure — conchoidal (quartz, obsidian), fibrous, or irregular ([materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) owns brittle failure generally).

| Cleavages | Angles | Minerals |
|---|---|---|
| 1 | — | micas (muscovite, biotite), chlorite |
| 2 | $90^\circ$ | feldspars ($90^\circ$ exactly in orthoclase, $86^\circ$ in plagioclase) |
| 2 | $87^\circ / 93^\circ$ | **pyroxene** |
| 2 | $56^\circ / 124^\circ$ | **amphibole** |
| 3 | $90^\circ$ (cubes) | halite, galena |
| 3 | $75^\circ$ (rhombs) | calcite, dolomite |
| 4 | octahedral | fluorite |
| none | conchoidal | quartz, olivine, garnet |

**The chain-silicate angle, derived.** Both pyroxene and amphibole are monoclinic, cleaving on $\{110\}$ — planes that contain the chain axis $c$ and thread the gaps between chain columns. Let $a$ and $b$ be the unit-cell edges perpendicular to the chains and $\beta$ the monoclinic angle. The trace of one cleavage plane runs from $(a,0)$ to $(0,b)$ in that section and the other from $(a,0)$ to $(0,-b)$, so the angle $\phi$ between them — the one bisected by the $a$ direction — satisfies

$$\tan\frac{\phi}{2} = r, \qquad r \equiv \frac{b}{a\sin\beta}$$

and the observed pair of cleavage angles is $\phi$ and $180^\circ - \phi$.

*In words: $r$ is just the aspect ratio of the chain column's cross-section, and the cleavage angle is twice the arctangent of that ratio.* **Doubling the chain doubles $b$, and the angle swings by more than thirty degrees.**

| | $a$ (Å) | $b$ (Å) | $\beta$ | $r$ | $\phi = 2\arctan r$ | pair |
|---|---|---|---|---|---|---|
| pyroxene (augite) | 9.75 | 8.90 | $106^\circ$ | 0.949 | $87.0^\circ$ | $87^\circ / 93^\circ$ |
| amphibole (hornblende) | 9.80 | 18.05 | $105^\circ$ | 1.907 | $124.6^\circ$ | $124^\circ / 56^\circ$ |

Those are the textbook field values, reproduced from cell dimensions alone. Cell edges and $\{hk0\}$ indexing are [materials-science 1.3](../../materials-science/lessons/01-03-miller-indices-directions-planes.md)'s machinery; what geology adds is the observation that **you can measure $b$ with a hand lens.**

### Streak — why powder beats the specimen

**Streak** is the colour of the mineral's powder, obtained by dragging it across unglazed porcelain. It is far more reliable than specimen colour, for a reason worth stating properly.

Light passing through a grain of thickness $\ell$ is attenuated as $e^{-\alpha \ell}$, with $\alpha$ the absorption coefficient. Grinding takes $\ell$ from centimetres to roughly $10\ \mu\text{m}$ — **three orders of magnitude** — so only a mineral with $\alpha$ a thousand times larger still absorbs enough to show colour. Everything else scatters back all wavelengths and looks **white**.

Three consequences:

1. **Strongly absorbing (opaque, metallic) minerals give coloured, diagnostic streaks.** Hematite streaks red-brown whether the specimen is silvery, red, or earthy; magnetite streaks black; galena streaks lead grey.
2. **Transparent minerals streak white, regardless of specimen colour** — which is not a failure of the test. "White streak" *is* the datum: this mineral is transparent in bulk, so its colour is a surface or trace effect.
3. **Powdering also destroys tarnish, thin-film interference, and orientation effects**, all of which contaminate specimen colour.

### Colour — the one property that lies

Minerals split into two classes, and the distinction is the whole story:

- **Idiochromatic** — colour comes from an essential constituent, so it is reliable. Malachite is green because it is a copper carbonate; sulphur is yellow because it is sulphur.
- **Allochromatic** — colour comes from trace substitution into a colourless host ([materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md)), so it is nearly meaningless.

**Quartz is the cautionary case, and it is worth being concrete.** Pure $\text{SiO}_2$ is colourless. Trace $\text{Fe}^{3+}$ plus natural irradiation gives amethyst purple; trace Ti or Mn gives rose; Al centres damaged by radiation give smoky brown to black; inclusions give milky white and every earth tone in between. **One mineral, essentially every colour there is.** Corundum makes the same point louder: red corundum is ruby, blue corundum is sapphire, and they are the same mineral with different parts-per-thousand impurities.

### Specific gravity — Archimedes, and how precise you need to be

**Specific gravity** $G$ is the ratio of the mineral's density to water's, $G = \rho_s/\rho_w$. Weigh the sample dry and again suspended in water. Let $W_a$ be the dry weight and $W_s$ the submerged weight:

$$W_a = \rho_s V g, \qquad W_s = (\rho_s - \rho_w) V g$$

Subtracting kills the unknown volume, $W_a - W_s = \rho_w V g$, so

$$\boxed{\; G = \frac{W_a}{W_a - W_s} \;}$$

*In words: the fraction of its weight a mineral keeps under water is the reciprocal of its specific gravity.*

Useful anchors: quartz 2.65, calcite 2.71, feldspars 2.56–2.76, micas 2.8–3.1, amphibole 3.0–3.4, pyroxene 3.2–3.6, olivine 3.3–4.4, pyrite 5.0, magnetite 5.2, hematite 5.3, **galena 7.6**. **A hand can reliably detect roughly a factor of 1.5 in density**, which is why "unusually heavy for its size" is a real field observation and separates the ore minerals from the rock-formers at a touch.

### The four tests that end an argument

- **Effervescence.** A drop of cold dilute HCl on calcite: $\text{CaCO}_3 + 2\text{H}^+ \rightarrow \text{Ca}^{2+} + \text{H}_2\text{O} + \text{CO}_2$ ([general-chemistry 2.3](../../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)). The fizz is $\text{CO}_2$. **Dolomite, $\text{CaMg(CO}_3)_2$, reacts far more slowly** — the ordered Ca/Mg structure is kinetically stubborn — so it fizzes only when scratched to powder, because the rate scales with exposed surface area. That single difference distinguishes limestone from dolostone in the field, and it recurs in [3.1](03-01-weathering-soils.md).
- **Magnetism.** Magnetite is strongly attracted to a hand magnet. Nothing else common is. One test, one answer.
- **Taste.** Halite is salty, sylvite ($\text{KCl}$) bitter. Legitimate on a known evaporite; a bad idea on an unknown ore.
- **Double refraction.** Look through a clear calcite rhomb at a printed line and you see two. Calcite's birefringence is $n_o - n_e = 1.658 - 1.486 = 0.172$, enormous, because its flat $\text{CO}_3$ groups all lie in parallel planes so polarizability across them and along them differ hugely. The two images separate by about $\ell\tan\rho$ with walk-off angle $\rho \approx 6.2^\circ$, so a $1\ \text{cm}$ rhomb splits the line by about $1.1\ \text{mm}$ — obvious to the naked eye.

**And the feldspar problem**, which is the one genuinely hard call in the common set: orthoclase and plagioclase have the same hardness, the same two near-$90^\circ$ cleavages, and overlapping colours. The decisive observation is **fine, straight, parallel striations on one cleavage face of plagioclase** — polysynthetic albite twinning, thin lamellae alternating in orientation. Orthoclase may be twinned too, but as a single Carlsbad twin, which produces no striations. Striations present means plagioclase; absent (and pink) means orthoclase.

### Where hand-sample identification honestly fails

It fails for **anything fine-grained** — aphanitic volcanic rock, shale, slate, chert — where the grains are below the resolution of a hand lens; for **the clays**, which are all earthy and dull and differ only in layer structure; and for **most ore minerals**, which are dispersed through gangue. The real answers come from two instruments:

- **The petrographic microscope**, on a rock slice ground to $30\ \mu\text{m}$: refractive index and relief, birefringence colours, extinction angle, pleochroism, and twinning. It measures optical anisotropy, which is symmetry made visible.
- **X-ray diffraction**, which skips the proxies and reads the lattice directly: $d$-spacings from Bragg's law ([condensed-matter 1.4](../../condensed-matter/lessons/01-04-xray-diffraction-bragg.md)), indexed to planes by [materials-science 1.3](../../materials-science/lessons/01-03-miller-indices-directions-planes.md). **XRD measures exactly the thing [1.1](01-01-what-a-mineral-is.md) said defines a mineral**, which is why it is the definitive method and why every property in this lesson is a field proxy for it.

## Picture

![A dichotomous mineral identification key. It branches first on luster into a metallic path listing pyrite, galena, magnetite and hematite with their decisive streak, heft and magnetism tests, and a non-metallic path that splits on hardness into three brackets, the hardest of which then splits on the number and angle of cleavage planes to reach quartz, olivine, orthoclase, plagioclase, pyroxene and amphibole. Beneath the key an inset shows chain-column cross-sections looking down the chain axis, with near-square columns for pyroxene giving cleavage traces crossing at eighty-seven degrees and columns twice as wide for amphibole giving traces crossing at fifty-six degrees.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — a specific gravity determination, and how good your balance has to be).** A colourless glassy mineral weighs $53.0\ \text{g}$ dry and $33.0\ \text{g}$ suspended in water. (a) Find $G$. (b) The candidates are quartz ($G = 2.65$) and calcite ($G = 2.71$). Is this measurement capable of separating them?

**(a)**

$$G = \frac{W_a}{W_a - W_s} = \frac{53.0}{53.0 - 33.0} = \frac{53.0}{20.0} = \mathbf{2.65}$$

**Quartz.** (Confirm with a drop of acid: quartz will not fizz.)

**(b)** This is the part people skip, and it is the part that decides whether the measurement means anything. Propagate the balance error through $G = W_a/(W_a - W_s)$:

$$\frac{\partial G}{\partial W_a} = \frac{-W_s}{(W_a - W_s)^2} = \frac{-33.0}{400} = -0.0825\ \text{g}^{-1}, \qquad \frac{\partial G}{\partial W_s} = \frac{W_a}{(W_a - W_s)^2} = \frac{53.0}{400} = +0.1325\ \text{g}^{-1}$$

With independent errors of $\pm 0.1\ \text{g}$ on each weighing,

$$\delta G = \sqrt{(0.0825 \times 0.1)^2 + (0.1325 \times 0.1)^2} = \sqrt{6.81\times10^{-5} + 1.756\times10^{-4}} = \sqrt{2.44\times10^{-4}} = \mathbf{0.016}$$

The quartz–calcite gap is $2.71 - 2.65 = 0.06$, or **nearly four times the uncertainty** — so a $0.1\ \text{g}$ balance separates them comfortably. A kitchen scale reading to $1\ \text{g}$ would give $\delta G \approx 0.16$ and would be useless here.

**Two things generalize.** First, $\partial G/\partial W_s$ scales as $G^2/W_a$, so **dense minerals are much harder to weigh accurately** — the same absolute balance error hurts a galena determination ($G^2 = 58$) forty times more than a talc one. Second, use a *big* sample: every derivative above falls as $1/W_a$.

**Example 2 (why you'd care — reading a magma's water content off a cleavage angle).** In a coarse-grained igneous rock, a dark green-black prismatic mineral is non-metallic, scratches glass, and is scratched by a steel file. A cross-section through one prism, viewed under a hand lens, shows two cleavage traces meeting at $57^\circ$. (a) Identify it. (b) What does that tell you about the magma it crystallized from?

**(a)** Work the key. Non-metallic, and it scratches glass, so $H > 5.5$; scratched by a file, so $H < 6.5$. Two cleavages: a chain silicate. Now the angle decides between the only two candidates.

Invert the cleavage relation. The measured $57^\circ$ is one of the pair, so the $a$-bisected angle is $\phi = 180^\circ - 57^\circ = 123^\circ$:

$$r = \tan\frac{\phi}{2} = \tan 61.5^\circ = 1.84$$

Compare with the two chain classes: single chains give $r \approx 0.95$, double chains $r \approx 1.91$. The measurement is unambiguous — **the chain column is roughly twice as wide as it is tall, so this is a double chain: amphibole (hornblende).** Pyroxene would have given $87^\circ$ or $93^\circ$, thirty degrees away, which no hand-lens measurement could confuse.

**(b)** Here is the payoff, and it is the reason a geologist bothers to squint at a cleavage angle. **Amphibole is a hydrous mineral**: its double chains enclose cavities occupied by $\text{OH}^-$ groups, which single-chain pyroxene has nowhere to put. So amphibole can only crystallize from a melt that contained dissolved water — a few tenths of a percent at least — while pyroxene crystallizes happily from a dry melt.

$$\text{amphibole present} \;\Longrightarrow\; \text{the melt was water-bearing}$$

**A $57^\circ$ angle measured on an outcrop is evidence about the water content of a magma that solidified before there were land plants.** Dry melts come from decompression of the mantle at ridges and hotspots; wet melts come from a subducting slab dehydrating into the mantle above it. So this rock is very likely arc-related — which is exactly the argument [1.3](01-03-how-the-earth-melts.md) builds into the three routes to magma, and [2.2](02-02-plate-boundaries.md) turns into a boundary diagnosis.

## Watch out

- **You might reach for colour first, because it is the thing you see first.** Colour is only reliable for **idiochromatic** minerals. Quartz is colourless, purple, pink, brown, black and milky; corundum is both ruby and sapphire. **Use streak, and treat specimen colour as a hint you must confirm.**
- **You might do arithmetic with Mohs numbers.** It is an ordinal scale. The gap from 9 to 10 is larger than the gap from 1 to 5, so "$H = 5.5$" means "between apatite and orthoclase" and nothing more. Bracket; never interpolate, average, or subtract.
- **You might expect hardness to track polymerization the way density does.** It does not. Density falls steadily from olivine (3.3) to quartz (2.65) as tetrahedra share more oxygens, exactly as [1.1](01-01-what-a-mineral-is.md) predicts — but olivine, with *isolated* tetrahedra, is harder ($H \approx 6.5$) than amphibole ($H \approx 5$). **Hardness tracks the weakest continuous bond path, and in isolated- and chain-silicates that path runs through strong $\text{Mg}$–$\text{O}$ and $\text{Fe}$–$\text{O}$ bonds in three dimensions.** Only the sheet silicates have a genuinely feeble direction, and they are the soft ones.
- **You might call a flat crystal face a cleavage.** A quartz prism has six gorgeous flat faces and *zero* cleavage. A growth face is a one-off surface; a cleavage plane repeats through the whole specimen, so it flashes at several parallel levels at once as you rotate it, and a fresh break reproduces it. If in doubt, break the sample.
- **You might trust a scratch test that ran the wrong way.** Drag a soft mineral across a hard one and it leaves a *smear* that looks exactly like a scratch. Rub it with a finger: a smear wipes off, a groove does not. Test both directions.
- **You might conclude "no fizz, not a carbonate."** Dolomite barely reacts with cold dilute acid as a solid surface — you have to scratch it to powder first. That kinetic difference is the standard limestone-versus-dolostone test, not a failed one.

## One-liner

> Run the test that splits the population fastest — luster, then a hardness bracket, then count the cleavage planes and measure the angle — because every property except colour is the lattice showing through from the outside, and colour is the one thing a trace impurity can fake.

## Problems

**P1 (🟢)** A heavy, metallic, lead-grey mineral with perfect cubic cleavage weighs $91.2\ \text{g}$ dry and $79.2\ \text{g}$ suspended in water. (a) Compute $G$. (b) The candidates are galena ($G = 7.58$) and pyrite ($G = 5.01$). Which is it? (c) What submerged weight would the other candidate have given, and is that a hard call?

**P2 (🟡, an outcrop, not a quiz)** Four hand samples from one granite-and-limestone field area. For each, name the mineral and state the **single** test that ends the argument.

| | Luster | Fingernail | Knife | Glass | Cleavage | Streak | Other |
|---|---|---|---|---|---|---|---|
| **A** | non-metallic, glassy | no | no | scratches it | none, smooth curved shells | white | hexagonal prisms, colourless to smoky |
| **B** | non-metallic, dull white | no | scratches it | no | 3 directions, about $75^\circ$ | white | breaks into rhombs |
| **C** | metallic, lead grey | no | scratches it | no | 3 directions at $90^\circ$ | lead grey | feels far too heavy for its size |
| **D** | non-metallic, chalky white | no | no | scratches it | 2 directions at about $90^\circ$ | white | fine straight parallel lines on one cleavage face |

**P3 (🔴)** In a dark, coarse-grained rock you find stubby prismatic crystals, $H$ between 5.5 and 6.5, with two cleavages measured at $87^\circ$ and $93^\circ$. Take $a\sin\beta = 9.37\ \text{Å}$.

(a) Invert $\tan(\phi/2) = b/(a\sin\beta)$ to get the cell edge $b$, and say what chain type this is.
(b) A hand lens lets you measure a cleavage angle to about $\pm 5^\circ$. Show that this precision is ample to separate pyroxene from amphibole, but hopeless for separating orthoclase ($90^\circ$) from plagioclase ($86^\circ$) — and state what you use instead for the feldspars.
(c) The same rock has a fine-grained chilled margin where no crystal is large enough to test. Name the two laboratory methods that would still work and say what physical quantity each actually measures.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$G = \frac{W_a}{W_a - W_s} = \frac{91.2}{91.2 - 79.2} = \frac{91.2}{12.0} = \mathbf{7.60}$$

**(b) Galena** ($G = 7.58$) — a match to better than half a percent. Pyrite is nowhere close. (The cubic cleavage and lead-grey streak already agreed; pyrite forms cubes but shows *no* cleavage and streaks greenish-black.)

**(c)** Rearranging $G = W_a/(W_a - W_s)$ gives $W_s = W_a(1 - 1/G)$:

$$W_s = 91.2\left(1 - \frac{1}{5.01}\right) = 91.2 \times 0.8004 = \mathbf{73.0\ \text{g}}$$

So pyrite would have weighed $73.0\ \text{g}$ submerged against galena's $79.2\ \text{g}$ — a **$6.2\ \text{g}$ difference**, roughly sixty times a $0.1\ \text{g}$ balance error. Not a hard call at all; **specific gravity is a decisive test whenever the candidates differ by more than a few percent in density**, which for ore minerals they almost always do.

Note also that this is the one common mineral you can identify with your hands alone: $G = 7.6$ against 2.7 for ordinary rock means a galena cobble feels about three times too heavy, far past the roughly 1.5-fold contrast a hand can detect.

**P2**

**A — quartz.** Non-metallic, scratches glass so $H > 5.5$, and — decisively — **no cleavage at all, with conchoidal fracture**. That is a framework silicate breaking equally badly in every direction ([1.1](01-01-what-a-mineral-is.md)). *The single test: look for cleavage and find none.* Colour is irrelevant here; smoky quartz is quartz.

**B — calcite.** Softer than a knife ($H = 3$), and three cleavages at about $75^\circ$ rather than $90^\circ$ gives the diagnostic rhomb. *The single test: a drop of cold dilute acid — vigorous fizz.* (If it had refused to fizz until scratched to powder, dolomite.)

**C — galena.** Metallic, very soft for a metallic mineral ($H = 2.5$), cubic cleavage, lead-grey streak. *The single test: the heft* — $G = 7.6$ is unmistakable in the hand, and it rules out the other soft grey metallic candidates outright.

**D — plagioclase.** Scratches glass and has two cleavages near $90^\circ$, so it is a feldspar; the question is which. *The single test: the fine parallel striations*, which are polysynthetic **albite twinning** on one cleavage face. Orthoclase never shows them.

**Why the answer set makes sense as a group:** quartz plus plagioclase is the granite; calcite is the limestone; galena is a vein mineral, and finding it here is the hint that hydrothermal fluid moved through the contact between the two — the ore-forming story of [5.4](05-04-resources-geologic-hazards.md).

**P3 (a)** Take $\phi = 87^\circ$, the acute member of the pair. (Using $93^\circ$ instead gives $\tan 46.5^\circ = 1.054$, the reciprocal of the answer below — the two choices just swap which cell edge you call which. Either way the column is near-square, which is the physical content.)

$$r = \tan\frac{87^\circ}{2} = \tan 43.5^\circ = 0.949$$

$$b = r \times a\sin\beta = 0.949 \times 9.37 = \mathbf{8.89\ \text{Å}}$$

Compare with the two classes: single chains have $b \approx 8.9\ \text{Å}$, double chains $b \approx 18\ \text{Å}$. This is a **single chain — pyroxene** (augite, in a dark coarse rock, so probably gabbro).

**(b)** The two chain silicates:

$$|87^\circ - 56^\circ| = 31^\circ \quad\text{versus}\quad \pm 5^\circ \text{ precision} \;\Rightarrow\; \text{separation} \approx 6\sigma$$

**Ample** — you could be badly sloppy and still get the right answer. This is why the pyroxene/amphibole call is a *field* call.

The two feldspars:

$$|90^\circ - 86^\circ| = 4^\circ \quad\text{versus}\quad \pm 5^\circ \;\Rightarrow\; \text{separation} < 1\sigma$$

**Hopeless.** The measurement cannot distinguish them even in principle at hand-lens precision, and no amount of care with a bad instrument fixes it.

**So you change the observable from a continuous one to a categorical one:** look for **albite twinning striations**, which are present or absent rather than large or small. Striations means plagioclase; no striations (and pink) means orthoclase. **The general lesson is worth keeping: when two candidates differ by less than your measurement precision, do not measure harder — find a test whose answer is yes or no.**

**(c)** Both work on grains far too small for a hand lens:

1. **Petrographic microscopy** on a thin section ground to $30\ \mu\text{m}$. It measures **optical properties** — refractive index (as relief against the mounting medium), birefringence, extinction angle, pleochroism, twinning. These are the symmetry and anisotropy of the structure expressed in how it retards and polarizes light. It also preserves *texture*, which is a large part of why petrologists still prefer it ([1.4](01-04-igneous-rocks-and-bodies.md)).

2. **X-ray diffraction**, on a powder. It measures **interplanar $d$-spacings** directly, through Bragg's law $n\lambda = 2d\sin\theta$ ([condensed-matter 1.4](../../condensed-matter/lessons/01-04-xray-diffraction-bragg.md)), with the peaks indexed to lattice planes ([materials-science 1.3](../../materials-science/lessons/01-03-miller-indices-directions-planes.md)). It gives no texture and needs the sample destroyed, but it identifies the phase unambiguously.

**The point worth taking away:** every property in this lesson is a proxy for the lattice, and XRD measures the lattice. Hardness, cleavage, streak and heft are what you use when the lattice is a two-day round trip away — and they are good enough to map a mountain range, which is how mapping got done for a century before anyone had an X-ray tube.

</details>

## Connections

- **Backward:** this lesson is [1.1](01-01-what-a-mineral-is.md) run in reverse. Cleavage counts and angles read the polymerization series off the outside of a crystal; density falls along the same series; allochromatic colour is [1.1](01-01-what-a-mineral-is.md)'s ionic substitution showing up as a nuisance rather than a signal.
- **Forward:** [1.3](01-03-how-the-earth-melts.md) needs you to recognize the ferromagnesian minerals in Bowen's series; [1.4](01-04-igneous-rocks-and-bodies.md) turns modal mineralogy into a rock name; [1.6](01-06-metamorphic-rocks-rock-cycle.md) uses index minerals as a thermometer, so garnet-versus-staurolite in a schist is a pressure–temperature measurement; [3.1](03-01-weathering-soils.md) inverts the whole thing again, since the order minerals crystallize in is the order they weather out.
- **Sideways:** the definitive method is diffraction — [condensed-matter 1.4](../../condensed-matter/lessons/01-04-xray-diffraction-bragg.md) for Bragg's law and [materials-science 1.3](../../materials-science/lessons/01-03-miller-indices-directions-planes.md) for indexing planes. Hardness as bond strength is [materials-science 1.1](../../materials-science/lessons/01-01-bonding-energy-well.md) and [inorganic-chemistry 1.2](../../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md); conchoidal fracture is brittle failure from [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); allochromatic colour is a dilute solid solution, [materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md).
