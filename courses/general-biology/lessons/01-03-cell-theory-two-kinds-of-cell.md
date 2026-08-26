# General Biology · Lesson 1.3: Cell theory & two kinds of cell

> ⏱ ~15 min · Module 1: The cell & the molecules of life · Builds on: [1.1](01-01-chemistry-of-life.md), [1.2](01-02-four-biomolecules.md) · Unlocks: 1.4 (the organelles)

## Why this matters

Cell theory is the most consequential generalization in biology, and it's three sentences long. It says life has a smallest unit, that unit is always a cell, and every cell came from a previous cell. That last clause is the sharp one: it rules out spontaneous generation, it means every cell alive today sits at the end of an unbroken chain of divisions going back billions of years, and it makes common descent ([4.2](04-02-evolution-in-populations.md)) almost inevitable rather than surprising.

The split into prokaryotes and eukaryotes then organizes everything that follows — including why a cell can't just grow as large as it likes, which turns out to be a geometry problem.

## The idea

**Cell theory, in three claims:**

1. All living things are made of cells.
2. The cell is the basic unit of structure and function in life.
3. All cells arise from pre-existing cells.

Claim 3 is the one that took two centuries of argument to establish. It denies that maggots condense out of meat or microbes out of broth, and Pasteur settled it in 1859 with a flask whose neck was bent so air could enter but dust could not — broth in it stayed sterile indefinitely. **Life does not start; it continues.**

**Two architectures.** Every cell has the same four requirements: a membrane to define inside from outside, DNA to store instructions, ribosomes to build proteins, and cytoplasm for the chemistry to happen in. What separates the two great classes is whether the inside is **partitioned**.

*Prokaryotes* (bacteria and archaea) leave it open plan. The DNA sits loose in a region called the nucleoid, ribosomes float free, and every reaction shares one compartment. Small, fast, and metabolically inventive — prokaryotes have colonized chemistry that no eukaryote can touch.

*Eukaryotes* (everything else: animals, plants, fungi, protists) partition the interior with internal membranes into **organelles** — a nucleus for the DNA, mitochondria for energy, and more ([1.4](01-04-tour-of-the-organelles.md)). Rooms let you run incompatible chemistry side by side, concentrate reagents locally, and keep destructive enzymes contained. The price is size and complexity: eukaryotic cells are typically a thousand to a million times larger by volume, and much slower to divide.

**Why cells can't just get bigger.** Here's the constraint that shapes all of it. Everything a cell needs comes in through its surface, and everything it consumes scales with its volume. Grow a cell and volume outruns surface area — surface goes as the square of the size while volume goes as the cube. So the ratio of supply to demand falls steadily as a cell grows, and at some point the middle of the cell starves no matter how rich the outside is.

That's a hard geometric ceiling, and evolution's answers to it are the whole story of cellular architecture: stay small (prokaryotes), fold membranes inward to buy back surface area (eukaryotic organelles), or change shape so no point is far from the outside (a neuron's thin fibre, a gut cell's brush border).

## The formal version

**Surface-area-to-volume.** For a sphere of radius $r$,

$$\text{SA} = 4\pi r^2, \qquad V = \tfrac43\pi r^3, \qquad \boxed{\ \frac{\text{SA}}{V} = \frac{3}{r} = \frac{6}{d}\ }$$

with $d$ the diameter. *In words: the surface available per unit of interior falls off as one over the size.* For a cube of side $s$ it's $6s^2/s^3 = 6/s$ — same $1/\text{size}$ law, different constant, which tells you the scaling is about dimension and not about shape. See [surface-area-to-volume ratio](../reference.md#surface-area-to-volume-ratio).

| Cell | Diameter | SA/V (per μm) |
|---|---|---|
| Bacterium | 1 μm | 6.0 |
| Small eukaryote | 10 μm | 0.6 |
| Typical animal cell | 20 μm | 0.3 |
| Hypothetical giant | 100 μm | 0.06 |

**A bacterium has twenty times more surface per unit of interior than an animal cell** — which is a large part of why it can divide in 20 minutes while a human cell takes about 24 hours.

**The two cell types side by side.**

| | Prokaryote | Eukaryote |
|---|---|---|
| DNA location | nucleoid, no membrane | nucleus, double membrane |
| DNA form | one circular chromosome, plus plasmids | several linear chromosomes |
| Organelles | none membrane-bound | many |
| Ribosomes | 70S (smaller) | 80S (and 70S inside mitochondria) |
| Typical size | 0.5–5 μm | 10–100 μm |
| Cell wall | usually, peptidoglycan | plants (cellulose), fungi (chitin), never in animals |
| Division | binary fission | mitosis or meiosis ([2.5](02-05-mitosis-meiosis.md)) |
| Groups | Bacteria, Archaea | Eukarya |

The ribosome row is worth marking — the fact that mitochondria carry *prokaryote-sized* ribosomes is a clue you'll cash in next lesson.

**The membrane.** Every cell is bounded by the phospholipid bilayer assembled in [1.1](01-01-chemistry-of-life.md), described by the **fluid mosaic model**: a two-dimensional fluid of lipids with proteins drifting in it. It is **selectively permeable** — small nonpolar molecules ($\ce{O2}$, $\ce{CO2}$) diffuse straight through the greasy interior, while ions and polar molecules need protein channels or pumps.

*In words: the membrane is a barrier with doors, and the cell controls the doors.* That control is what makes an inside possible at all.

## Picture

![A prokaryotic cell about one micrometre across with its DNA loose in the cytoplasm beside a much larger eukaryotic cell with a nucleus and organelles, next to a plot of surface area per unit volume falling as one over cell diameter from six for a bacterium to 0.3 for an animal cell](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — what doubling costs).** A spherical cell of diameter 10 μm doubles its diameter to 20 μm. What happens to its surface area, volume, and their ratio?

$$\frac{\text{SA}_2}{\text{SA}_1} = \left(\frac{20}{10}\right)^2 = 4, \qquad \frac{V_2}{V_1} = \left(\frac{20}{10}\right)^3 = 8, \qquad \frac{(\text{SA}/V)_2}{(\text{SA}/V)_1} = \frac{4}{8} = \frac12.$$

**Surface area quadrupled, volume grew eightfold, and supply per unit demand halved.** The cell now has twice as much interior to feed per unit of membrane — and every further doubling halves it again.

*Check.* Directly: $\text{SA}/V = 6/d$ gives $0.6$ then $0.3$ per μm, a factor of 2 ✓.

**Example 2 (why you'd care — three ways out of the geometry trap).** Evolution has found exactly three solutions, and every cell you'll meet uses one:

**Stay small.** Prokaryotes hold at 1–5 μm and keep SA/V high. This is why bacteria dominate by number and by metabolic diversity: a high-surface cell can afford a fast, membrane-hungry lifestyle. It also caps how complex they can get, since a small cell has little room for machinery.

**Fold membranes inward.** A eukaryote's internal membranes are, in surface-area terms, enormous — a liver cell's endoplasmic reticulum has many times the area of its outer membrane. The cell keeps a large volume while restoring the *membrane area* that chemistry needs, just no longer at the boundary. **Organelles are surface area, folded in** — that is the deepest single reason eukaryotic cells can be big, and it reframes [1.4](01-04-tour-of-the-organelles.md) from a list of parts into a solution to a problem.

**Change shape.** Only a sphere is penalized as harshly as $6/d$. Flatten or elongate and you keep every interior point near a surface: a red blood cell is a biconcave disc so no point is far from membrane, a gut lining cell wears thousands of microvilli that multiply absorptive area roughly twentyfold, and a neuron can be a metre long while staying about a micrometre thick.

**The unifying claim:** cells are not the size they are by accident. Cell size is set by a diffusion-and-geometry constraint, and the three architectures are three answers to it.

## Watch out

- **You might think prokaryotes are primitive or simple.** They are structurally simple and metabolically the most sophisticated organisms alive — nitrogen fixation, methanogenesis, photosynthesis without chloroplasts, and life at 120 °C are all prokaryotic tricks. They have also had exactly as long to evolve as you have.
- **You might think prokaryotes have no internal structure.** They have no *membrane-bound organelles*. They do have a cytoskeleton, protein-shelled microcompartments, and a well-organized nucleoid. "No organelles" is a statement about membranes.
- **You might think bacteria and archaea are close relatives.** They look alike under a microscope, but archaea differ from bacteria in membrane lipids, cell-wall chemistry, and the machinery of transcription — in several respects archaea are closer to *you* than to bacteria ([4.3](04-03-tree-of-life.md)).
- **You might expect all eukaryotic cells to be large.** Some are smaller than large bacteria. The classification is about organization, not size — though the size difference holds on average for a reason.
- **You might read cell theory as saying life could never have arisen.** Claim 3 describes life *as it now operates*; it doesn't rule out a one-time abiotic origin. Pasteur showed cells don't arise from broth today, not that they never did.

## One-liner

> Every cell comes from a cell, every cell needs a membrane, DNA, ribosomes and cytoplasm — and because surface grows as the square while volume grows as the cube, staying alive at size means staying small, folding inward, or flattening out.

## Problems

**P1 (🟢)** A spherical cell has a diameter of 4 μm. Compute its surface-area-to-volume ratio. If it grows to 8 μm, what is the new ratio?

**P2 (🟡)** A cell must absorb nutrients across its membrane at a rate that keeps up with a metabolism proportional to its volume. Explain why this sets a maximum size, and name the structural trick a gut lining cell uses to push past it.

**P3 (🔴)** Mitochondria are about the size of bacteria, have their own circular DNA, divide independently of the cell, and carry 70S ribosomes. State the hypothesis this evidence supports and explain what each observation contributes.

<details>
<summary>Solutions</summary>

**P1** Using $\text{SA}/V = 6/d$:

$$\frac{\text{SA}}{V}\bigg|_{4\ \mu\mathrm m} = \frac{6}{4} = \mathbf{1.5\ \mu m^{-1}}, \qquad \frac{\text{SA}}{V}\bigg|_{8\ \mu\mathrm m} = \frac{6}{8} = \mathbf{0.75\ \mu m^{-1}}.$$

*Check.* The long way: at $d = 4$, $\text{SA} = 4\pi(2)^2 = 50.3\ \mu\mathrm m^2$ and $V = \tfrac43\pi(2)^3 = 33.5\ \mu\mathrm m^3$, ratio $1.50$ ✓. Doubling the diameter halved the ratio, exactly as Example 1 predicted ✓.

**P2** Set the two scalings against each other. Nutrient uptake happens across the membrane, so

$$\text{supply} \propto \text{SA} \propto r^2, \qquad \text{demand} \propto V \propto r^3.$$

The ratio of supply to demand therefore goes as $r^2/r^3 = 1/r$: it falls without limit as the cell grows. Whatever the constants, there is some radius at which supply first fails to meet demand, and beyond it the cell cannot sustain its interior. (Diffusion makes it worse — the *time* for a molecule to diffuse a distance $L$ scales as $L^2$, so the centre of a big cell is both under-supplied and slow to reach.)

**The gut cell's trick: microvilli.** Thousands of finger-like membrane projections on the absorptive face multiply its surface area roughly twentyfold without changing the cell's volume. This decouples the two scalings — the cell keeps the volume it needs for machinery while buying the surface it needs for uptake.

*Check.* Consistent with Example 2's third strategy ✓. Note it is the same move at a different scale as folding membranes inward: both add area without adding volume.

**P3** The evidence supports the **endosymbiotic theory** — that mitochondria (and chloroplasts) descend from free-living prokaryotes engulfed by an ancestral host cell and retained rather than digested.

Each observation carries specific weight:

| Observation | What it argues |
|---|---|
| Bacterium-sized | Consistent with a whole prokaryote taken in intact, not a fold of host membrane |
| Own **circular** DNA | Circular chromosomes are the prokaryotic form; a host-derived compartment would have no genome at all |
| Divides independently by fission | It reproduces on its own schedule, the way a cell does — not assembled on demand by the host |
| **70S ribosomes** | The prokaryotic size. The host's own cytoplasmic ribosomes are 80S, so the organelle is translating with borrowed, non-host machinery |

The 70S ribosome is the sharpest of the four, because it is hard to explain any other way: it means the organelle runs a *different lineage's* protein-synthesis system inside a eukaryotic cell.

**A prediction the theory makes, which holds:** mitochondria should have a **double** membrane — the inner one the original prokaryote's, the outer one the host's engulfing vesicle. They do. (There is also a clinical corollary: antibiotics that target 70S ribosomes can hit mitochondria, which is one reason a few of them are toxic to us.)

*Check.* The theory also explains why the mitochondrial genome is so small — most of the endosymbiont's genes migrated to the nucleus over evolutionary time, leaving a remnant ✓. You'll meet the organelles themselves in [1.4](01-04-tour-of-the-organelles.md).

</details>

## Flashback

**From Lesson 1.1 (The chemistry of life):** Oxygen and carbon dioxide cross a cell membrane freely without any transport protein, while sodium ions and glucose cannot. Explain the difference.

<details>
<summary>Solution</summary>

The membrane's interior is a layer of hydrocarbon tails — **nonpolar**. Whether a molecule can cross unaided depends on whether it is comfortable in that environment.

- $\ce{O2}$ and $\ce{CO2}$ are small and nonpolar (linear and symmetric, so any bond polarity cancels), so they dissolve into the greasy core and diffuse straight through.
- $\ce{Na+}$ carries a full charge and drags a hydration shell of water with it. Stripping that shell to enter a nonpolar layer is energetically prohibitive.
- Glucose is uncharged but heavily decorated with $\ce{-OH}$ groups — polar, hydrogen-bonded to water, and too large besides. It needs a transporter protein.

*Check.* This is exactly the "like dissolves like" rule from [1.1](01-01-chemistry-of-life.md) applied to a membrane rather than to a beaker: the membrane's core behaves like an oil layer, so the same molecules that dissolve in oil are the ones that cross it ✓. And it is why the membrane is *selectively* permeable rather than simply sealed — the selectivity comes free from the chemistry, and the cell adds proteins only for the traffic it wants to control.

</details>

## Connections

- **Backward:** the bilayer is [1.1](01-01-chemistry-of-life.md)'s hydrophobic effect made structural, and the membrane proteins and cell walls are [1.2](01-02-four-biomolecules.md)'s proteins and polysaccharides doing their jobs.
- **Forward:** [1.4](01-04-tour-of-the-organelles.md) opens up the eukaryotic interior that Example 2 explained the need for; [2.4](02-04-the-cell-cycle.md) takes up cell theory's third claim and asks how a cell actually makes another one.
- **Sideways (chemistry, go deeper):** membrane structure and transport get a quantitative treatment in [`biochemistry` 4.3](../../biochemistry/lessons/04-03-membranes-membrane-transport.md).
