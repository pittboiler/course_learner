# General Biology · Lesson 2.2: Cellular respiration

> ⏱ ~15 min · Module 2: Energy, metabolism & cell division · Builds on: [2.1](02-01-energy-atp-enzymes.md), [1.4](01-04-tour-of-the-organelles.md) · Unlocks: 2.3 (photosynthesis)

## Why this matters

Respiration is how essentially every organism on Earth pays for being alive. It is also the clearest example in biology of a principle worth carrying everywhere: **energy is extracted in many small steps rather than one large one**, because a controlled release can be captured and a sudden one can only be lost as heat.

Burning glucose in a flame and respiring it release exactly the same total energy. The difference is entirely in the staging.

## The idea

Strip away the names and respiration is one sentence: **glucose's electrons are passed, step by step, down to oxygen, and the energy released along the way is used to make ATP.**

Glucose is an electron-rich molecule; oxygen is desperately electron-hungry. Put them together and there is a large drop in free energy waiting to be exploited. Set fire to the sugar and you get all of it at once as heat — useless to a cell. Life's solution is to move the electrons down in a series of small controlled steps, capturing energy at several of them.

The scheme has three moves.

**First, dismantle the glucose.** Glycolysis splits the six-carbon sugar into two three-carbon pyruvates. This happens in the cytosol, requires no oxygen, and is universal — every organism does it, which is strong evidence it is very ancient.

**Second, finish the oxidation.** Inside the mitochondrion, pyruvate is stripped down completely to $\ce{CO2}$. That carbon dioxide is what you exhale: it is the leftover skeleton after all the useful electrons have been removed.

**Third — and this is where nearly all the ATP comes from — cash in the electrons.** Stages one and two barely make ATP directly. What they actually produce is *loaded electron carriers*, $\ce{NADH}$ and $\ce{FADH2}$, molecules that have picked up high-energy electrons. These deliver their cargo to a chain of proteins in the inner mitochondrial membrane. As electrons fall from carrier to carrier, the energy released pumps protons across the membrane, building a gradient. The protons then flow back through an enzyme that spins like a turbine and welds phosphate onto ADP.

That last mechanism — **chemiosmosis** — is the actual answer to "how does a cell make ATP." It is not a chemical reaction in the ordinary sense but a *physical* one: a battery, discharged through a molecular motor. It was so unlike everything else in biochemistry that when Peter Mitchell proposed it in 1961 it was rejected for over a decade.

**And oxygen's role is smaller than its billing.** Oxygen does not "give" energy. It sits at the very end of the chain and accepts the spent electrons, combining with protons to make water. Its job is to be the final drain. Remove it and the chain backs up, the carriers stay loaded with nowhere to unload, and everything upstream halts within seconds — which is why you die in minutes without it.

## The formal version

**The overall reaction**, the exact reverse of photosynthesis:

$$\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O}, \qquad \Delta G^{\circ\prime} = -2870\ \mathrm{kJ/mol}$$

**The three stages.**

| Stage | Location | In | Out | Yield |
|---|---|---|---|---|
| **Glycolysis** | cytosol | glucose | 2 pyruvate | 2 ATP, 2 $\ce{NADH}$ |
| **Pyruvate oxidation** | matrix | 2 pyruvate | 2 acetyl-CoA + 2 $\ce{CO2}$ | 2 $\ce{NADH}$ |
| **Citric acid cycle** | matrix | 2 acetyl-CoA | 4 $\ce{CO2}$ | 2 ATP, 6 $\ce{NADH}$, 2 $\ce{FADH2}$ |
| **Electron transport** | inner membrane | $\ce{NADH}$, $\ce{FADH2}$, $\ce{O2}$ | $\ce{H2O}$ | ~28 ATP |

Glycolysis actually makes 4 ATP but spends 2 priming the sugar, so the **net** is 2. That investment step is worth noticing: the cell must spend ATP before it can earn any.

**Redox, in one line.** Oxidation is loss of electrons, reduction is gain. In biology electrons usually travel with a hydrogen, so *oxidized* often means "lost hydrogens" and *reduced* means "gained hydrogens":

$$\ce{NAD+ + 2e- + H+ -> NADH}$$

*In words: $\ce{NAD+}$ is the empty carrier, $\ce{NADH}$ the loaded one.* Glucose starts reduced (rich in $\ce{C-H}$) and ends fully oxidized as $\ce{CO2}$; oxygen starts oxidized and ends reduced as water. See [redox](../reference.md#redox).

**Chemiosmosis, the mechanism.**

1. $\ce{NADH}$ and $\ce{FADH2}$ drop electrons into the chain of membrane protein complexes.
2. Electrons fall from complex to complex, each with a stronger pull than the last, releasing energy in steps.
3. That energy pumps $\ce{H+}$ from the matrix into the intermembrane space, building a **proton gradient** — a store of both concentration and charge difference.
4. Protons flow back down the gradient through **ATP synthase**, whose rotor physically turns and drives the joining of ADP and phosphate.
5. Oxygen accepts the spent electrons at the end: $\ce{O2 + 4e- + 4H+ -> 2H2O}$.

*In words: falling electrons charge a battery, and the battery's discharge turns a motor that makes ATP.* See [chemiosmosis](../reference.md#chemiosmosis).

**The ATP tally.** With current values of about 2.5 ATP per $\ce{NADH}$ and 1.5 per $\ce{FADH2}$:

| Source | Count | ATP |
|---|---|---|
| Substrate-level (glycolysis + cycle) | — | 4 |
| $\ce{NADH}$ | 10 × 2.5 | 25 |
| $\ce{FADH2}$ | 2 × 1.5 | 3 |
| **Total** | | **about 32** |

**Older textbooks say 36–38**, using 3 ATP per $\ce{NADH}$ and 2 per $\ce{FADH2}$. Those were estimates from before the proton stoichiometry of ATP synthase was known; the true ratio is not a whole number. Treat any exact figure with suspicion — the real yield varies with cell type and with which shuttle carries cytosolic $\ce{NADH}$ into the mitochondrion (30 with one shuttle, 32 with the other).

**Efficiency.** At 32 ATP and roughly 30.5 kJ/mol each:

$$\frac{32 \times 30.5}{2870} = 34\ \text{percent}$$

captured as ATP, the rest released as heat — which is not waste for a mammal, since it is how you stay warm. For comparison, a car engine manages 25 to 30 percent.

**Without oxygen: fermentation.** Glycolysis needs a supply of empty $\ce{NAD+}$, and normally the electron transport chain regenerates it. With no oxygen the chain stops and $\ce{NAD+}$ runs out within seconds. Fermentation solves this by dumping the electrons onto pyruvate instead — making lactate in animals, or ethanol and $\ce{CO2}$ in yeast.

*In words: fermentation's purpose is not to make ATP but to recycle the carrier so glycolysis can keep running.* The yield is glycolysis's 2 ATP, about **2 percent** of the energy available — a sixteenfold penalty, accepted only because 2 ATP beats none.

## Picture

![The three stages of respiration as boxes - glycolysis in the cytosol yielding two ATP and two NADH, pyruvate oxidation and the citric acid cycle in the mitochondrial matrix, and electron transport at the inner membrane yielding about 28 ATP - with a tally showing four substrate-level ATP plus 25 from NADH plus three from FADH2 for a total near 32](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — follow the carbons).** Track glucose's six carbons through to exhalation.

Glucose has 6 C. Glycolysis splits it into **two pyruvates of 3 C each** — no carbon lost yet. Pyruvate oxidation removes one carbon from each as $\ce{CO2}$ (**2 C released**), leaving two 2-carbon acetyl groups. The citric acid cycle then releases both carbons of each acetyl group as $\ce{CO2}$ (**4 C released**).

$$2 + 4 = 6\ \text{carbons out as } \ce{CO2}\ \checkmark$$

**Every carbon that entered as sugar leaves through your lungs.** Worth pausing on: when you lose weight, the mass leaves mostly as exhaled $\ce{CO2}$, not as heat or waste. The carbon in a burned fat molecule is breathed out.

*Check.* Oxygen balance: 6 $\ce{O2}$ in, and 6 $\ce{CO2}$ + 6 $\ce{H2O}$ out accounts for $6\times2 = 12$ oxygen atoms from $\ce{O2}$ plus 6 from glucose, matching $12 + 6 = 18$ on the right ✓.

**Example 2 (why you'd care — why sprinting burns and marathons don't).** Muscle can run either pathway, and the choice explains a great deal of exercise physiology.

*Sprinting.* Demand for ATP outruns what oxygen delivery and the mitochondria can supply. The muscle switches to fermentation: glycolysis runs flat out, pyruvate is converted to lactate to regenerate $\ce{NAD+}$, and ATP appears fast. But the yield is 2 per glucose rather than 32, so **glycogen is consumed sixteen times faster** — which is why an all-out sprint is unsustainable beyond a minute or so.

*Endurance.* At a sustainable pace, oxygen keeps up, the electron transport chain runs, and the full 32 ATP per glucose is available. Fat can be oxidized too, which fermentation cannot do. This is what "aerobic" training extends: more mitochondria, more capillaries, a higher workload before the switch.

**Two numbers make the trade concrete.** Fermentation captures about 2 percent of glucose's energy against respiration's 34 percent. But fermentation produces ATP roughly **100 times faster per unit time**, because it has fewer steps and no membrane machinery to wait on. **The cell is trading efficiency for rate** — the same trade-off appears whenever a system can go fast or go far, and biology picks whichever the moment requires.

*(The old story that lactate causes muscle burn and next-day soreness is wrong on both counts: lactate is cleared within an hour and is itself a useful fuel. The burning sensation tracks acidosis from ATP hydrolysis, and delayed soreness is microscopic muscle damage.)*

## Watch out

- **You might think oxygen provides the energy.** Oxygen accepts electrons at the end. The energy came from glucose; oxygen's role is to be the drain that keeps the flow going. No drain, no flow.
- **You might quote 36–38 ATP as fact.** It is an outdated estimate. About 30–32 is current, it is not an integer, and it varies by cell type. If a problem gives you a figure, use theirs and note the convention.
- **You might think fermentation is for making ATP.** Its purpose is regenerating $\ce{NAD+}$ so that glycolysis — which makes the ATP — can continue. The ATP comes from glycolysis either way.
- **You might think the citric acid cycle makes most of the ATP.** It makes 2 of about 32 directly. Its real product is loaded electron carriers, and it is the electron transport chain that converts those to ATP.
- **You might expect ATP synthase to be a normal enzyme.** It is a rotary motor. Proton flow physically spins a rotor at over 100 revolutions per second, and the rotation drives the chemistry — one of very few true machines in biology.

## One-liner

> Respiration walks glucose's electrons down to oxygen in small steps, banks the energy as a proton gradient, and spends that gradient turning a molecular turbine that makes about 32 ATP.

## Problems

**P1 (🟢)** How many $\ce{CO2}$ molecules are produced per glucose, and at which stages? Where does the $\ce{CO2}$ you exhale come from?

**P2 (🟡)** A poison makes the inner mitochondrial membrane freely permeable to protons but does not touch any enzyme. Predict the effect on ATP production, on oxygen consumption, and on the cell's temperature.

**P3 (🔴)** Yeast grown with plenty of oxygen switches to fermentation when oxygen is removed. Calculate how much faster it must consume glucose to maintain the same ATP output, and explain why fermentation is worth doing at all.

<details>
<summary>Solutions</summary>

**P1** **Six $\ce{CO2}$ per glucose**, released in two stages:

| Stage | $\ce{CO2}$ released |
|---|---|
| Glycolysis | **0** — glucose becomes 2 pyruvate, all 6 carbons retained |
| Pyruvate oxidation | **2** — one carbon from each of the 2 pyruvates |
| Citric acid cycle | **4** — both carbons of each of the 2 acetyl groups |
| **Total** | **6** ✓ |

The $\ce{CO2}$ you exhale is **the carbon skeleton of the food you ate**, left over once its electrons have been stripped off and sent down the transport chain. It is produced in the mitochondrial matrix, diffuses out of the cell, dissolves into blood, and is released at the lungs.

*Check.* Carbon balance closes exactly: 6 in as glucose, 6 out as $\ce{CO2}$ ✓ — no carbon is retained, which is why respiration cannot build anything, only dismantle.

**P2** The poison is an **uncoupler** — it destroys the proton gradient without touching any protein.

**ATP production collapses.** Protons leak straight back across the membrane instead of passing through ATP synthase, so the gradient can never build, the turbine has nothing to drive it, and oxidative phosphorylation stops. Only the 4 substrate-level ATP from glycolysis and the citric acid cycle survive — about 12 percent of normal.

**Oxygen consumption rises sharply.** This is the counterintuitive part. The electron transport chain is normally slowed by a back-pressure: a steep proton gradient makes further pumping hard. Remove the gradient and that resistance vanishes, so electrons race down the chain as fast as carriers can be supplied, and oxygen is consumed *faster* than normal.

**Temperature rises.** All the energy that would have been captured as ATP is released as heat instead. The cell burns fuel furiously and gets nothing but warmth.

*Check.* This is real, not hypothetical. Brown adipose tissue uses a natural uncoupler protein (thermogenin) deliberately, to generate heat in newborns and hibernating mammals. And the diet drug 2,4-dinitrophenol, an uncoupler sold in the 1930s, caused genuine weight loss and a number of deaths from hyperthermia — the mechanism above, run past the point of control ✓.

**P3** **Sixteen times faster.**

Aerobic respiration yields about 32 ATP per glucose; fermentation yields 2. To hold ATP output constant:

$$\frac{\text{rate}_{\text{ferment}}}{\text{rate}_{\text{aerobic}}} = \frac{32}{2} = \mathbf{16}.$$

The yeast must consume glucose sixteen times faster to make the same ATP. (This is the **Pasteur effect** — Pasteur observed exactly this acceleration of sugar consumption when yeast is deprived of oxygen.)

**Why fermentation is worth doing:**

1. **2 ATP beats 0 ATP.** Without a way to regenerate $\ce{NAD+}$, glycolysis stops after a few seconds and the cell makes nothing at all. Fermentation buys continued glycolysis at the cost of discarding the electrons onto pyruvate.
2. **It is fast.** Fermentation produces ATP per unit *time* far more quickly than respiration — fewer steps, no membrane machinery, no dependence on oxygen delivery. When the demand is a burst, rate beats efficiency.
3. **It needs no oxygen and no mitochondria**, so it works in anoxic environments and in cells that have neither.

*Check.* The trade-off is stark and quantitative: fermentation captures about 2 percent of glucose's energy against 34 percent for respiration, a 16-fold penalty that exactly matches the 32-to-2 ATP ratio ✓. From the yeast's point of view this is a fine bargain when sugar is abundant — which is why yeast in a sugar-rich vat ferments even *with* oxygen available, and why brewing works.

</details>

## Flashback

**From Lesson 2.1 (Energy, ATP & enzymes):** Cyanide binds cytochrome c oxidase at a site away from its substrate-binding site and locks the enzyme in an inactive shape. Classify the inhibition, and say whether flooding the cell with substrate would rescue it.

<details>
<summary>Solution</summary>

This is **noncompetitive inhibition**: the inhibitor binds a site distinct from the active site and works by deforming the enzyme, rather than by physically blocking the substrate.

**Adding substrate would not rescue it.** Competitive inhibitors can be outcompeted because inhibitor and substrate contend for the same site, so raising substrate concentration shifts the odds. Here the two do not compete — the enzyme is misshapen whether or not substrate is present, so extra substrate simply binds a broken enzyme.

*Check.* The consequences follow directly from this lesson: cytochrome c oxidase is the last complex of the electron transport chain, the one that hands electrons to oxygen. Block it and electrons cannot reach their final acceptor, the whole chain backs up, the proton gradient collapses, and ATP production falls to the 4 substrate-level molecules ✓ — which is why cyanide kills within minutes, and why its victims' blood stays oxygen-rich (the oxygen is present, but unusable).

</details>

## Connections

- **Backward:** every step is enzyme-catalysed ([2.1](02-01-energy-atp-enzymes.md)), the pathway is exergonic and coupled to ATP synthesis, and the whole thing happens inside the mitochondrion described in [1.4](01-04-tour-of-the-organelles.md) — whose folded cristae exist to give the transport chain surface area.
- **Forward:** [2.3](02-03-photosynthesis.md) is this lesson run backwards, using light to push electrons uphill; [2.4](02-04-the-cell-cycle.md) needs the ATP made here, since division is expensive.
- **Sideways (chemistry, go deeper):** each stage has a full mechanistic treatment — [`biochemistry` 3.2](../../biochemistry/lessons/03-02-glycolysis.md) for glycolysis, [3.3](../../biochemistry/lessons/03-03-citric-acid-cycle.md) for the citric acid cycle, and [3.4](../../biochemistry/lessons/03-04-oxidative-phosphorylation.md) for chemiosmosis and ATP synthase.
