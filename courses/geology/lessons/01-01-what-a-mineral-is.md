# Geology · Lesson 1.1: What a Mineral Is

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: nothing (first lesson of the course) · Unlocks: [1.2](01-02-identifying-minerals.md) (identifying minerals in the field)

## Why this matters

Every rock is an aggregate of minerals, and essentially every property a rock has — what temperature it melts at, whether it folds or shatters, how fast it weathers, which way it splits when you hit it with a hammer — is inherited from the minerals in it. So the whole course rests on one question: what actually determines a mineral's properties?

The answer is not composition. **It is the geometry of the bonds**, and geology has the cleanest demonstration of that fact in all of materials science: diamond and graphite are both pure carbon, and they differ in hardness by a factor of about ten thousand.

Better still, for the minerals that actually build the Earth there turns out to be **one structural parameter** — how many oxygens each silica tetrahedron shares with its neighbours — that predicts composition, density, cleavage, melting order and weathering order simultaneously. That single number is the organizing idea of all mineralogy, and the rest of Module 1 is essentially its consequences.

## The idea

A **mineral** is a naturally occurring, inorganic, crystalline solid with a definite chemical composition and an ordered internal structure. Five clauses — and only the last one is doing real work.

**Test the claim directly.** Take one composition and change only the structure:

| | diamond | graphite |
|---|---|---|
| composition | C | C |
| bonding | $sp^3$, covalent in 3 directions | $sp^2$ sheets, van der Waals between |
| carbon coordination | 4 | 3 |
| Mohs hardness | 10 | 1–2 |
| density | 3.51 g/cm³ | 2.23 g/cm³ |
| electrical behaviour | insulator, 5.5 eV gap | conductor within a sheet |
| cleavage | 4 directions | 1, perfect |
| use | abrasive | lubricant |

**Same element, and every single property differs — including a 57 percent difference in density.** They are not two forms of one mineral; they are two minerals. (The band-gap side of this is [materials-science 5.1](../../materials-science/lessons/05-01-electronic-properties-band-picture.md); the lattice geometry is [materials-science 1.2](../../materials-science/lessons/01-02-crystal-structures-unit-cells.md). This course does not re-derive either — it uses them.)

Now run the experiment the other way: **remove the order and keep the composition.** Obsidian is $\text{SiO}_2$-rich volcanic glass with no long-range order, so it is not a mineral at all — it is a **mineraloid**, along with opal. Quartz and obsidian can be chemically indistinguishable. One is a mineral; one is not. **Both experiments point the same way: structure, not composition, is what makes a mineral a mineral.**

Two clauses in the definition are weaker than they look and are worth knowing about. "Inorganic" excludes coal, but the calcite in a clam shell is universally accepted as a mineral even though an organism made it, because its structure and composition are identical to inorganic calcite — the clause is really about *process*, not about the product. And "definite composition" does not mean a fixed formula: as the last section shows, it means **a definite structure with a range of allowed occupants**.

Meanwhile, "naturally occurring" and "solid" are sharp. Glacier ice passes every clause, so ice is a mineral and a glacier is a monomineralic rock — which is exactly how [3.4](03-04-glaciers-ice-ages.md) will treat it.

## The formal version

### The crust is an oxygen framework with small cations in the holes

Eight elements make up about 98.5 percent of the continental crust by weight, and the top two dominate:

| element | weight percent | volume percent |
|---|---|---|
| O | 46.6 | ~94 |
| Si | 27.7 | ~1 |
| Al | 8.1 | ~0.5 |
| Fe, Ca, Na, K, Mg | 16.1 | ~3 |

**The volume column is the striking one.** Oxygen's ionic radius (about 1.40 Å) dwarfs every cation's, so *by volume the crust is roughly 94 percent oxygen*. **A silicate mineral is best pictured as a packing of large oxygen ions with small cations tucked into the gaps between them**, and the question "which gaps can a given cation occupy?" is answered by size alone.

### Radius ratio picks the coordination number

For an ion of radius $r$ sitting among anions of radius $R$, the number of anions that can touch it — the **coordination number** $\mathrm{CN}$ — is set by the ratio $r/R$. This is standard ionic-solid reasoning; [inorganic-chemistry 1.2](../../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md) and [2.1](../../inorganic-chemistry/lessons/02-01-complexes-ligands-coordination-number.md) own the derivation, so here is the result applied to rock-forming ions, using $R = 1.40\ \text{Å}$ for oxygen:

| ion | radius (Å) | $r/R$ | predicted CN | site actually occupied |
|---|---|---|---|---|
| Si⁴⁺ | 0.26 | 0.19 | 3 | **4 — tetrahedral, always** |
| Al³⁺ | 0.39 / 0.54 | 0.28 / 0.38 | 4 | **both 4 and 6** |
| Fe³⁺ | 0.65 | 0.46 | 6 | 6 — octahedral |
| Mg²⁺ | 0.72 | 0.51 | 6 | 6 — octahedral |
| Fe²⁺ | 0.78 | 0.56 | 6 | 6 — octahedral |
| Ca²⁺ | 1.12 | 0.80 | 8 | 8 |
| Na⁺ | 1.18 | 0.84 | 8 | 8 |
| K⁺ | 1.51 | 1.08 | 8–12 | 8–12 |

*In words: the rule gets every cation right except the two most important ones, and both exceptions are informative.*

**Silicon is the exception that matters most.** The strict ionic prediction is 3-fold coordination, and silicon is nevertheless *universally* 4-fold. The reason is that the Si–O bond is roughly half covalent, and the covalent contribution demands the $sp^3$ tetrahedral geometry regardless of what the radius ratio says. So the radius-ratio rule is a useful ionic approximation that fails precisely where the bonding stops being ionic — worth remembering as a limit on the method, not just as a fact about silicon.

**Aluminium is the other exception, and it is the reason silicate chemistry is as rich as it is.** Its radius ratio sits within a whisker of the 0.414 boundary between tetrahedral and octahedral, so **Al is the one major cation that can occupy either kind of site** — it can stand in for Si inside the tetrahedral framework *or* sit outside it like Mg. Everything in the plagioclase story below follows from that.

The result of silicon's fixed 4-fold coordination is the single building block of the entire silicate world:

$$\text{SiO}_4^{4-}: \quad \text{one Si}^{4+} + 4\,\text{O}^{2-} \;\Longrightarrow\; \text{charge } 4 + 4(-2) = -4$$

*In words: the silica tetrahedron carries four units of unsatisfied negative charge, so it cannot exist alone — it must either grab cations or bond to another tetrahedron.* **Those two options are the whole story.**

### Polymerization: one number predicts everything

Tetrahedra link by **sharing corner oxygens** (never edges or faces — that would push the two Si⁴⁺ too close). Let $b$ be the number of **bridging** (shared) oxygens per tetrahedron, $0 \le b \le 4$. A bridging oxygen belongs half to each tetrahedron, so:

$$\frac{n_{\mathrm{O}}}{n_{\mathrm{Si}}} = 4 - \frac{b}{2}$$

*In words: start from four oxygens per silicon and give away half an oxygen for every one you share.*

The charge per tetrahedron follows immediately:

$$z = (+4) + \left(4 - \frac{b}{2}\right)(-2) = b - 4$$

*In words: every oxygen you share buys back one unit of charge, so a fully polymerized tetrahedron is electrically neutral and needs no cations at all.*

$$\boxed{\;b = 0 \to \text{SiO}_4^{4-} \quad b=2 \to \text{SiO}_3^{2-} \quad b=2.5 \to \text{Si}_4\text{O}_{11}^{6-} \quad b=3 \to \text{Si}_2\text{O}_5^{2-} \quad b=4 \to \text{SiO}_2\;}$$

**That one parameter organizes all of mineralogy**, because the cations are what make silicates heavy: Mg, Fe and Ca are far denser per unit volume than the $\text{SiO}_2$ framework, so *as $b$ rises the cation content falls and the density falls with it*, while the anion framework approaches pure silica. For the aluminium-free magnesium end members the silica trend is exact:

$$\text{forsterite } 42.7\ \text{wt\% SiO}_2 \;\to\; \text{enstatite } 59.9 \;\to\; \text{talc } 63.4 \;\to\; \text{quartz } 100$$

### Cleavage is a map of bond strength

**Cleavage is not "how a mineral is cut" — it is the plane along which the bonds are weakest.** Si–O bridging bonds are the strongest in the structure, so **a cleavage plane never breaks one; it threads between the polymerized units, snapping only the weaker cation–oxygen bonds.** That single rule predicts every cleavage in the table:

- **Sheets ($b=3$)**: the sheets are held to each other only by an interlayer cation (K⁺ in mica) or by van der Waals forces (talc). One plane is dramatically weaker than everything else, so mica has **one perfect cleavage** and splits into flakes.
- **Chains ($b=2$ and $2.5$)**: cleavage must run parallel to the chain axis and thread *around* the chain cross-sections, so the two cleavage directions are the diagonals of the chain's cross-sectional box. For a box of width $w$ and height $h$ the angle between them is

$$\theta = 2\arctan\!\left(\frac{w}{h}\right)$$

  A **single** chain has a roughly square cross-section, $w/h \approx 1$, giving $\theta = 90^\circ$ — pyroxene cleaves at 87 and 93 degrees. A **double** chain is about twice as wide as it is tall, $w/h \approx 2$, giving $\theta = 2\arctan 2 = 126.9^\circ$ and its complement $53.1^\circ$ — amphibole cleaves at 124 and 56 degrees. *A first-order geometric model, from chain width alone, lands within three degrees of the measured angles.* This is the most diagnostic test in hand-sample mineralogy and [1.2](01-02-identifying-minerals.md) will lean on it hard.
- **Both ends of the series lack cleavage, for opposite reasons.** Quartz ($b=4$) is bonded equally strongly in every direction, so no plane is preferred and it fractures **conchoidally** in smooth curved shells. Olivine ($b=0$) has isolated tetrahedra bonded through Mg/Fe octahedra in a near-close-packed oxygen array — also roughly isotropic, also no good cleavage.
- **Feldspar is the instructive near-miss.** It is a framework ($b=4$) and should have no cleavage, but Al-for-Si substitution creates planes of alkali cations threaded through the framework, and those planes are weak. Hence two good cleavages. In orthoclase they meet at exactly 90 degrees (the name means "straight fracture"); in plagioclase at about 86 (hence "oblique fracture"). **The mineral names are literally reporting the cleavage angle.**

### Ionic substitution: what "definite composition" really means

**Goldschmidt's rules**: one ion substitutes freely for another if their radii differ by less than about 15 percent and their charges match. Apply them:

- **Mg²⁺ (0.72 Å) and Fe²⁺ (0.78 Å)** — same charge, 8 percent apart. Complete solid solution. Olivine is therefore not a formula but a series, $(\text{Mg},\text{Fe})_2\text{SiO}_4$, running from forsterite $\text{Mg}_2\text{SiO}_4$ to fayalite $\text{Fe}_2\text{SiO}_4$.
- **Na⁺ (1.18 Å) and Ca²⁺ (1.12 Å)** — 5 percent apart, but the charges differ by one. Substitution still happens, through a **coupled** exchange that pays for itself elsewhere in the structure:

$$\text{Na}^+ + \text{Si}^{4+} \;\rightleftharpoons\; \text{Ca}^{2+} + \text{Al}^{3+}, \qquad 1+4 = 5 = 2+3$$

  *In words: swap a bigger cation in and a smaller one out of the framework at the same time, and the charge books balance.* This runs plagioclase feldspar continuously from albite $\text{NaAlSi}_3\text{O}_8$ to anorthite $\text{CaAl}_2\text{Si}_2\text{O}_8$, and **it only works because aluminium can sit inside the tetrahedral framework** — the boundary case from the radius-ratio table.
- **Na⁺ (1.18 Å) and K⁺ (1.51 Å)** — 28 percent apart, well over the limit. So sodium and potassium feldspars are *separate* minerals that unmix on cooling, which is why [1.2](01-02-identifying-minerals.md) treats plagioclase and orthoclase as two things to tell apart. The unmixing textures are ordinary exsolution — [materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md) owns the mechanism.

**So a mineral's "definite chemical composition" is a definite structure with a formula range**, and the position within that range is itself data: it records the temperature and the melt the crystal grew from, which is the entire basis of [1.3](01-03-how-the-earth-melts.md).

### Why a dozen minerals is enough

Close to 6,000 mineral species are formally recognized. About **a dozen** account for more than 90 percent of the crust by volume, and the reason is now obvious: with O and Si supplying three quarters of the crust by weight, **the crust is about 92 percent silicate by volume** — feldspar alone is roughly half of it, then quartz, pyroxene, amphibole, mica and clay. Carbonates are around 2 percent; oxides and sulfides are a rounding error by volume and completely disproportionate in economic value ([5.4](05-04-resources-geologic-hazards.md)).

## Picture

![Five panels left to right showing silica tetrahedra drawn as triangles and linked into progressively more polymerized arrangements: two isolated tetrahedra, a single corner-sharing chain, a double chain joined at shared apices, two stacked sheets seen edge on with a layer of cations and a dashed weak plane between them, and a framework of four tetrahedra linked around a central void in all directions. Beneath each panel a table row gives shared oxygens per tetrahedron rising from zero to four, the oxygen to silicon ratio falling from four to two, the cation charge per silicon falling from four to zero, the example mineral from olivine through pyroxene, amphibole and mica to quartz, the cleavage from none through two directions at 87 and 93 degrees, two at 56 and 124 degrees, one perfect, back to none, and the density falling from 3.3 to 2.65 grams per cubic centimetre.](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — identify a class from an analysis alone).** A microprobe gives a mineral's silicate anion unit as $\text{Si}_4\text{O}_{11}$. Without any other information: (a) find the polymerization class, (b) find the anion charge, (c) predict the cleavage and check it against a real mineral.

**(a)** The oxygen-to-silicon ratio is

$$\frac{n_\mathrm{O}}{n_\mathrm{Si}} = \frac{11}{4} = 2.75 .$$

Invert the counting relation $n_\mathrm{O}/n_\mathrm{Si} = 4 - b/2$:

$$b = 2\left(4 - 2.75\right) = 2.5 .$$

Two and a half bridging oxygens per tetrahedron — a non-integer, which is itself the diagnostic. **It means the tetrahedra are not all equivalent**: in a *double* chain, half of them share 2 oxygens (the outer ones) and half share 3 (the ones joining the two chains), averaging 2.5. So this is an **amphibole**.

**(b)** $z = b - 4 = -1.5$ per silicon, so over four silicons the unit charge is $4(-1.5) = -6$: the anion is $\text{Si}_4\text{O}_{11}^{6-}$.

**Check against a real amphibole**, tremolite $\text{Ca}_2\text{Mg}_5\text{Si}_8\text{O}_{22}(\text{OH})_2$. Its anion is $\text{Si}_8\text{O}_{22} = 2 \times \text{Si}_4\text{O}_{11}$, so it should carry $2 \times (-6) = -12$, plus two hydroxyls at $-1$ each:

$$\text{anion total} = -12 - 2 = -14, \qquad \text{cation total} = 2(+2) + 5(+2) = +14 \;\checkmark$$

**(c)** Double chain, so the cross-section is about twice as wide as tall and the model gives $2\arctan 2 \approx 127$ and $53$ degrees. Measured amphibole cleavage is 124 and 56 degrees — **and that pair of angles, seen down the end of a broken crystal, is enough to name the mineral family in the field with no chemistry at all.**

**Example 2 (why you'd care — reading a crystal's history out of a coupled substitution).** A plagioclase grain is analysed and its large-cation site contains Na and Ca in the ratio 0.6 to 0.4. (a) Write the full formula on an 8-oxygen basis and verify it balances. (b) Name it. (c) Say why the answer is worth having.

**(a)** Plagioclase is a framework, so the tetrahedral sites (Si plus Al together) must number 4 per 8 oxygens — that is just $b=4$, giving $n_\mathrm{O}/n_\mathrm{T} = 2$. Al content is then fixed by charge balance. Start from albite $\text{NaAlSi}_3\text{O}_8$ and apply the coupled swap $\text{Na}^+ + \text{Si}^{4+} \to \text{Ca}^{2+} + \text{Al}^{3+}$ to a fraction 0.4 of the sites:

$$\text{Na}_{0.6}\text{Ca}_{0.4}\text{Al}_{1.4}\text{Si}_{2.6}\text{O}_8$$

Verify:

$$0.6(+1) + 0.4(+2) + 1.4(+3) + 2.6(+4) = 0.6 + 0.8 + 4.2 + 10.4 = +16$$

$$8 \times (-2) = -16 \;\checkmark$$

And the framework check: $\text{Al} + \text{Si} = 1.4 + 2.6 = 4.0$ per 8 oxygens $\checkmark$ — exactly the ratio a fully polymerized framework requires. **Two independent constraints both satisfied, which is how you know a microprobe analysis is any good.**

**(b)** The anorthite fraction is $\mathrm{An} = \text{Ca}/(\text{Ca}+\text{Na}) = 0.4$, so this is $\mathrm{An}_{40}$ — **andesine**, an intermediate plagioclase.

**(c)** Because the composition is not free. Plagioclase crystallizing from a melt is calcium-rich when it is hot and becomes progressively sodium-rich as the melt cools, so **the An number is a thermometer**. A grain that is $\mathrm{An}_{80}$ in its core and $\mathrm{An}_{40}$ at its rim has recorded its own cooling history as compositional zoning, visible under a microscope as concentric bands. That is Bowen's continuous reaction series, it is the subject of [1.3](01-03-how-the-earth-melts.md), and the underlying machinery is the solid-solution phase diagram of [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md).

**The general lesson: "definite composition with a range" is not a loophole in the definition — it is the feature that lets a mineral store information.**

## Watch out

- **You might think "definite chemical composition" means a fixed formula.** It means a definite *structure* whose sites accept a range of occupants. Olivine is anywhere on $(\text{Mg},\text{Fe})_2\text{SiO}_4$ and plagioclase is anywhere between $\text{NaAlSi}_3\text{O}_8$ and $\text{CaAl}_2\text{Si}_2\text{O}_8$, and both are single minerals.
- **You might expect wt-percent silica to rise monotonically along the polymerization series.** The *structural* ratio $n_\mathrm{O}/n_\mathrm{Si}$ does, exactly, and the aluminium-free end members do. But real amphiboles and micas contain Al substituting for Si, which drags their measured $\text{SiO}_2$ down — hornblende sits near 42 percent, below pyroxene. **Trust the ratio; treat the weight percent as a tendency.**
- **You might read cleavage as "the mineral is weak in that direction, so it is a soft mineral."** Cleavage and hardness are independent. Diamond has four perfect cleavages and is the hardest mineral known; talc has one and is the softest. Cleavage says *where* the weakest bonds lie, hardness says *how strong* the typical bond is.
- **You might use "crystal" and "crystalline" interchangeably.** Crystalline means ordered internally — every quartz grain in a granite qualifies. A *crystal*, with flat faces, requires free space to grow into, which is why good crystals come from cavities and veins and why most rock is made of interlocking anhedral grains with no faces at all.
- **You might treat a rock as a big mineral.** A rock is an aggregate; granite is quartz plus two feldspars plus micas. And obsidian is a rock containing no minerals whatsoever.

## One-liner

> A mineral is defined by its structure rather than its composition — and for the silicates that build the Earth, one number, the count of shared oxygens per tetrahedron, sets the formula, the density, the cleavage angles and the melting order all at once.

## Problems

**P1 (🟢)** Talc has the formula $\text{Mg}_3\text{Si}_4\text{O}_{10}(\text{OH})_2$. (a) From the silicate anion alone, find the bridging-oxygen count $b$ and name the polymerization class. (b) Verify the whole formula is charge-balanced. (c) Predict the cleavage. (d) Talc is Mohs 1 and muscovite mica is Mohs 2.5, though both are the same class — explain the difference from what sits between the sheets.

**P2 (🟡 — inference from data)** Three unlabelled samples are analysed and tested:

| sample | $n_\mathrm{O}/n_\mathrm{Si}$ | density (g/cm³) | breakage observed |
|---|---|---|---|
| A | 2.00 | 2.65 | no flat surfaces; smooth curved shell-like fracture |
| B | 4.00 | 3.90 | no flat surfaces; irregular |
| C | 2.50 | 2.90 | one perfect direction; splits into thin elastic flakes |

(a) Give the polymerization class and a likely mineral for each. (b) A and B both lack cleavage, yet they sit at opposite ends of the series — explain both, and say why the explanations are different. (c) Given forsterite ($\text{Mg}_2\text{SiO}_4$) has density 3.27 and fayalite ($\text{Fe}_2\text{SiO}_4$) has 4.39, estimate B's iron content.

**P3 (🔴 — bridges to 1.3)** A microprobe analysis of a framework silicate, normalized to 8 oxygens, gives Si 2.35, Al 1.65, Ca 0.65, Na 0.35. (a) Show the analysis is charge-balanced and confirm the framework stoichiometry. (b) Name the mineral. (c) Write the substitution that took it from albite to this composition and state how many times per formula unit it occurred. (d) The same rock also contains a potassium feldspar, present as fine intergrown lamellae inside larger grains rather than as separate crystals. Using the radius-ratio table, explain why K did not simply join the plagioclase solid solution, and what the lamellae are.

<details>
<summary>Solutions</summary>

**P1 (a)** The silicate anion is $\text{Si}_4\text{O}_{10}$, so

$$\frac{n_\mathrm{O}}{n_\mathrm{Si}} = \frac{10}{4} = 2.5 \quad\Longrightarrow\quad b = 2(4 - 2.5) = 3 .$$

Three bridging oxygens per tetrahedron: a **sheet silicate** (phyllosilicate).

**(b)** Anion charge: $4(+4) + 10(-2) = 16 - 20 = -4$, i.e. $\text{Si}_4\text{O}_{10}^{4-}$, which agrees with $z = b-4 = -1$ per silicon over four silicons. Then

$$3\,\text{Mg}^{2+} = +6, \qquad \text{Si}_4\text{O}_{10}^{4-} = -4, \qquad 2\,(\text{OH})^- = -2, \qquad +6 - 4 - 2 = 0 \;\checkmark$$

**(c)** **One perfect cleavage**, parallel to the sheets. Every Si–O bond within a sheet is strong and continuous in two dimensions; only the bonds *between* sheets are weak, so exactly one plane is preferred.

**(d)** In muscovite, $\text{KAl}_2(\text{AlSi}_3\text{O}_{10})(\text{OH})_2$, the sheets are held together by **interlayer K⁺ ions** — genuine ionic bonds, weak relative to Si–O but far from nothing. In talc the sheet is electrically neutral, so there is no interlayer cation at all and adjacent sheets are held only by **van der Waals forces**. **Sheets that are barely attached slide over one another under a fingernail — which is why talc is Mohs 1 and is used as a lubricant and a powder**, and it is the same structural reason graphite is a lubricant. Muscovite's K⁺ bonds are strong enough to resist a fingernail but weak enough to peel with a knife: Mohs 2.5.

**P2 (a)**

| sample | $b = 2(4 - n_\mathrm{O}/n_\mathrm{Si})$ | class | mineral |
|---|---|---|---|
| A | $2(4-2) = 4$ | framework | **quartz** (density 2.65 is exact) |
| B | $2(4-4) = 0$ | isolated tetrahedra | **olivine**, iron-rich |
| C | $2(4-2.5) = 3$ | sheet | **mica** — elastic flakes means biotite or muscovite |

*(The "elastic" detail in C is doing work: mica flakes spring back, chlorite flakes stay bent. That is a real field distinction and [1.2](01-02-identifying-minerals.md) uses it.)*

**(b)** **Cleavage requires anisotropy of bond strength — a plane that is systematically weaker than its neighbours. Both A and B are isotropic, but for opposite reasons.**

- **A (quartz, $b=4$)** is bonded by strong Si–O bridges continuously in all three directions. There is no plane you can cross without breaking Si–O bonds, so no plane is preferred: the fracture surface follows the stress field instead of the structure, giving the smooth curved **conchoidal** shells. *Isotropically strong.*
- **B (olivine, $b=0$)** has no Si–O bridges at all. The tetrahedra are islands, tied together entirely through Mg/Fe–O octahedra in a nearly close-packed oxygen array, and those cation–oxygen bonds are similar in every direction. *Isotropically weak-ish.*

**So the series has no cleavage at either end and its best cleavage in the middle**, which is exactly what you would expect once you see cleavage as a contrast in bond strength rather than as an amount of weakness.

**(c)** Interpolating linearly between the end members:

$$X_{\text{Fa}} = \frac{3.90 - 3.27}{4.39 - 3.27} = \frac{0.63}{1.12} = 0.5625 .$$

So roughly $\text{Fa}_{56}\text{Fo}_{44}$ — **a little over half the octahedral sites occupied by iron.** (Density is not exactly linear in mole fraction, so treat this as an estimate; it is good to a few mole percent, and it works at all only because Fe²⁺ and Mg²⁺ substitute freely.)

**P3 (a)** Cations:

$$2.35(+4) + 1.65(+3) + 0.65(+2) + 0.35(+1) = 9.40 + 4.95 + 1.30 + 0.35 = +16.00$$

Anions: $8(-2) = -16.00$. **Balanced.**

Framework check: $\text{Si} + \text{Al} = 2.35 + 1.65 = 4.00$ tetrahedral cations per 8 oxygens, so $n_\mathrm{O}/n_\mathrm{T} = 2$, which is $b = 4$ — **fully polymerized, a framework silicate**, as claimed.

**(b)** $\mathrm{An} = 0.65/(0.65+0.35) = 0.65$, so $\mathrm{An}_{65}$: **labradorite**.

**(c)** The coupled substitution is

$$\text{Na}^+ + \text{Si}^{4+} \;\longrightarrow\; \text{Ca}^{2+} + \text{Al}^{3+}$$

Starting from albite $\text{NaAlSi}_3\text{O}_8$ and running it **0.65 times per formula unit** gives

$$\text{Na}_{1-0.65}\text{Ca}_{0.65}\text{Al}_{1+0.65}\text{Si}_{3-0.65}\text{O}_8 = \text{Na}_{0.35}\text{Ca}_{0.65}\text{Al}_{1.65}\text{Si}_{2.35}\text{O}_8 \;\checkmark$$

which reproduces the analysis exactly. **The Al content is not an independent measurement — it is forced by the Ca content, and the fact that the measured value matches is a check on the analysis.**

**(d)** From the table, Na⁺ is 1.18 Å and K⁺ is 1.51 Å in 8-fold coordination:

$$\frac{1.51 - 1.18}{1.18} = 0.28 = 28\ \text{percent}$$

— far outside Goldschmidt's roughly 15 percent limit, and nearly six times the Na–Ca mismatch of about 5 percent that plagioclase accommodates without difficulty. **A potassium ion forced into a sodium site strains the framework badly, so the two do not form a continuous series at the temperatures rocks actually cool through.**

At high temperature, thermal energy pays that strain cost and a single alkali feldspar can hold both. As the crystal cools the strain becomes intolerable, the solid solution crosses into a **miscibility gap**, and the phases unmix in place — the potassium-rich and sodium-rich components segregate into fine intergrown lamellae without the crystal ever melting. The lamellae are **exsolution** (**perthite**, when K-feldspar is the host).

**Two things this buys you.** First, it is a geothermometer of a sort: **coarse lamellae mean slow cooling, fine or absent lamellae mean fast** — the same nucleation-and-growth trade-off that [materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md) and [3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) treat quantitatively, and that [1.4](01-04-igneous-rocks-and-bodies.md) will use on grain size. Second, it is why the field calls plagioclase and orthoclase two separate minerals while calling forsterite and fayalite one: **complete solid solution versus a solvus is a statement about ionic radii, not a convention.**

</details>

## Connections

- **Backward (to other courses):** lattices, unit cells and the meaning of long-range order are [materials-science 1.2](../../materials-science/lessons/01-02-crystal-structures-unit-cells.md); the radius-ratio and coordination reasoning is [inorganic-chemistry 1.2](../../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md) and [2.1](../../inorganic-chemistry/lessons/02-01-complexes-ligands-coordination-number.md); solid solutions and exsolution are [materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md). This course uses all of them and re-derives none.
- **Forward, and this is the point of the lesson:** [1.2](01-02-identifying-minerals.md) turns the cleavage-angle geometry into a field test. [1.3](01-03-how-the-earth-melts.md) reuses polymerization twice — Bowen's reaction series is essentially this table read as a crystallization order, and *water lowers a rock's melting point by breaking Si–O bridges*, which is only meaningful once you know what a bridge is. [2.8](02-08-volcanoes-volcanic-hazards.md) turns the same parameter into magma viscosity and therefore into whether a volcano oozes or explodes. [3.1](03-01-weathering-soils.md) runs the series backwards: the least polymerized minerals weather fastest, which is why olivine vanishes from a soil and quartz survives to become sand.
- **Sideways:** the diamond–graphite contrast is the same structure-determines-properties argument that drives [materials-science 5.1](../../materials-science/lessons/05-01-electronic-properties-band-picture.md); and if you want to know how anyone established these structures in the first place, it was diffraction — [condensed-matter 1.4](../../condensed-matter/lessons/01-04-xray-diffraction-bragg.md) reads the lattice directly, and it remains the only way to settle a mineral identification that hand tests cannot.
