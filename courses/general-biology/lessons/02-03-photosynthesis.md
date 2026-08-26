# General Biology · Lesson 2.3: Photosynthesis

> ⏱ ~15 min · Module 2: Energy, metabolism & cell division · Builds on: [2.2](02-02-cellular-respiration.md), [1.4](01-04-tour-of-the-organelles.md) · Unlocks: 2.4 (the cell cycle)

## Why this matters

Photosynthesis is where essentially all the energy in the biosphere enters. Every calorie you have ever eaten was captured by a chloroplast, and so was every molecule of oxygen you have ever breathed. Coal, oil and gas are photosynthesis from hundreds of millions of years ago.

It is also worth learning immediately after respiration, because the two are the same chemistry pointed in opposite directions. Learn one and you have most of the other — the parallels are exact enough to be a memory aid and deep enough to be a real insight.

## The idea

Respiration takes an electron-rich molecule and lets its electrons fall to oxygen, capturing energy on the way down. Photosynthesis does the reverse: it takes electrons from a molecule that does *not* want to give them up — water — and pushes them uphill using light, then uses them to build sugar from $\ce{CO2}$.

You can hold the whole process as two connected halves.

**The light reactions capture energy.** Chlorophyll in the thylakoid membrane absorbs a photon, which boosts an electron to a higher energy level. That energized electron is pulled away and passed down a transport chain — pumping protons and building a gradient, exactly as in respiration — and ends up loaded onto $\ce{NADPH}$. The chloroplast then uses the proton gradient to make ATP by chemiosmosis, with the *same kind of ATP synthase* as a mitochondrion.

But chlorophyll has now lost an electron and needs replacing. The replacement is taken from **water**, which is split: $\ce{2H2O -> O2 + 4H+ + 4e-}$. The oxygen is a leftover. **Every oxygen molecule in the atmosphere is a discarded by-product of a plant needing to replace a stolen electron** — the most consequential waste product in the history of the planet.

**The Calvin cycle spends it on carbon.** The light reactions produce ATP and $\ce{NADPH}$ but no sugar. The Calvin cycle takes those, grabs $\ce{CO2}$ from the air, and builds sugar. It needs no light directly — it is driven entirely by what the light reactions made, so it stops shortly after dark simply because it runs out of supply.

Three phases, worth naming because they generalize: **fix** the $\ce{CO2}$ onto an existing molecule, **reduce** the result using $\ce{NADPH}$ and ATP, and **regenerate** the acceptor so the cycle can go again. Most of the output is spent on regeneration; only a fraction leaves as sugar.

## The formal version

**The overall reaction**, the exact reverse of respiration:

$$\ce{6CO2 + 6H2O ->[light] C6H12O6 + 6O2}, \qquad \Delta G^{\circ\prime} = +2870\ \mathrm{kJ/mol}$$

Endergonic, and steeply so — hence the need for light.

**Two stages, and where each happens.**

| | Light reactions | Calvin cycle |
|---|---|---|
| Location | thylakoid membrane | stroma |
| Needs | light, $\ce{H2O}$, $\ce{NADP+}$, ADP | $\ce{CO2}$, ATP, $\ce{NADPH}$ |
| Makes | ATP, $\ce{NADPH}$, $\ce{O2}$ | sugar (G3P), ADP, $\ce{NADP+}$ |
| Light needed? | yes, directly | no — but stops without the products |

**The light reactions**, in sequence:

1. A photon strikes **photosystem II**; chlorophyll's electron is excited and captured.
2. Chlorophyll, now electron-deficient, pulls a replacement from water. **Water is split, releasing $\ce{O2}$.**
3. The electron travels an electron transport chain, pumping $\ce{H+}$ into the thylakoid space.
4. A second photon at **photosystem I** re-energizes the electron, which is then loaded onto $\ce{NADP+}$ to make $\ce{NADPH}$.
5. Protons flow back through ATP synthase, making ATP.

*In words: two photons per electron, one to lift it out of water and one to lift it again onto the carrier.* The two-boost design is why it is called the Z-scheme, and it exists because one photon does not carry enough energy to move an electron from water all the way to $\ce{NADP+}$. See [light reactions](../reference.md#light-reactions).

**The Calvin cycle**, per $\ce{CO2}$ fixed: **3 ATP and 2 $\ce{NADPH}$**. So per glucose (6 $\ce{CO2}$):

$$6 \times 3 = 18\ \text{ATP}, \qquad 6\times2 = 12\ \ce{NADPH}$$

The enzyme that fixes the carbon is **rubisco**, attaching $\ce{CO2}$ to a five-carbon acceptor. Rubisco is slow — a few reactions per second, against thousands for a typical enzyme — and plants compensate by making enormous amounts of it. It is, by mass, **the most abundant protein on Earth**.

**Respiration and photosynthesis, side by side.** The parallels are not loose analogy:

| | Respiration | Photosynthesis |
|---|---|---|
| Organelle | mitochondrion | chloroplast |
| Electrons flow | glucose → $\ce{O2}$ | $\ce{H2O}$ → $\ce{NADP+}$ |
| Direction | downhill, releases energy | uphill, requires energy |
| Energy source | chemical bonds | light |
| Carrier | $\ce{NADH}$ | $\ce{NADPH}$ |
| ATP made by | chemiosmosis | chemiosmosis |
| Carbon | glucose → $\ce{CO2}$ | $\ce{CO2}$ → glucose |
| Oxygen | consumed | produced |

**Both make ATP the same way** — proton gradient, ATP synthase turbine. That shared mechanism in two organelles with separate endosymbiotic origins tells you chemiosmosis is very old, predating both events.

**Where rubisco goes wrong, and two workarounds.** Rubisco cannot reliably tell $\ce{CO2}$ from $\ce{O2}$. When it grabs $\ce{O2}$ instead, the result is **photorespiration** — it consumes ATP, releases $\ce{CO2}$, and fixes nothing. This gets worse when it is hot and dry, because the plant closes its stomata to save water, and internal $\ce{CO2}$ falls while $\ce{O2}$ from the light reactions builds up.

- **C4 plants** (maize, sugarcane) fix carbon first with a different, $\ce{CO2}$-specific enzyme in one cell type, then pump it to rubisco in another where it is concentrated. Costs extra ATP, wins in heat.
- **CAM plants** (cacti, pineapple) separate the steps in *time* rather than space: stomata open at night to take in $\ce{CO2}$, store it as acid, and run the Calvin cycle by day with stomata shut.

*In words: two independent solutions to the same enzyme's sloppiness, one spatial and one temporal.* Both evolved many times over — a nice example of convergent evolution ([4.3](04-03-tree-of-life.md)).

## Picture

![A chloroplast with thylakoid membranes on the left running the light reactions - splitting water, releasing oxygen and producing ATP and NADPH - and the Calvin cycle in the stroma on the right taking in carbon dioxide, consuming those carriers and releasing sugar](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — count the inputs).** A plant makes one glucose. How many $\ce{CO2}$, ATP, $\ce{NADPH}$ and water molecules are involved, and how much $\ce{O2}$ is released?

Glucose has 6 carbons, so **6 $\ce{CO2}$** must be fixed. At 3 ATP and 2 $\ce{NADPH}$ per $\ce{CO2}$:

$$18\ \text{ATP}, \qquad 12\ \ce{NADPH}.$$

Each $\ce{NADPH}$ carries 2 electrons, so $12 \times 2 = 24$ electrons are needed. Each split water yields 2 electrons, so **12 water molecules** are split — and since $\ce{2H2O -> O2}$,

$$\frac{12}{2} = \mathbf{6\ \ce{O2}\ released.}$$

*Check.* This reproduces the balanced overall equation exactly: 6 $\ce{CO2}$ + 6 $\ce{H2O}$ → glucose + 6 $\ce{O2}$ ✓. (The equation shows 6 waters net; 12 are split and 6 are re-formed downstream, which is why the two numbers differ.)

**Example 2 (why you'd care — the Great Oxidation Event).** For its first two billion years Earth's atmosphere had essentially no free oxygen. Then cyanobacteria evolved the water-splitting trick above, and oxygen began accumulating as waste.

The consequences were enormous and mostly catastrophic at the time:

- **Iron precipitated out of the oceans.** Dissolved $\ce{Fe^2+}$ reacted with the new oxygen and settled as insoluble oxide, laying down the banded iron formations that are the world's main iron ore. Your car is made of photosynthesis's waste product reacting with dissolved iron.
- **A mass extinction.** Oxygen is chemically aggressive and was lethal to most existing anaerobic life. This is sometimes called the oxygen catastrophe — **the first great extinction was caused by pollution, produced by life, on a planetary scale.**
- **Then it enabled everything.** Once oxygen was abundant, aerobic respiration became possible — and it yields about 16 times more ATP per glucose than fermentation ([2.2](02-02-cellular-respiration.md)). That energy surplus is what large, complex, multicellular life runs on. No oxygenic photosynthesis, no animals.
- **An ozone layer formed**, screening ultraviolet light and making land habitable.

**The pattern worth taking away:** a metabolic innovation in one lineage of bacteria rewrote the planet's chemistry, drove a mass extinction, and set the ceiling on how complex life could later become. Metabolism is a geological force.

## Watch out

- **You might call the Calvin cycle the "dark reactions."** It doesn't require darkness and doesn't prefer it — it runs best in daylight, when ATP and $\ce{NADPH}$ are being supplied. "Light-independent" is the accurate term and even that overstates the independence.
- **You might think the oxygen comes from $\ce{CO2}$.** It comes from **water**. This was settled with heavy-oxygen labelling: label the water and the released $\ce{O2}$ is labelled; label the $\ce{CO2}$ and it isn't.
- **You might think plants don't respire.** They respire constantly, in every cell, day and night, using the mitochondria they have alongside their chloroplasts ([1.4](01-04-tour-of-the-organelles.md)). In daylight photosynthesis outpaces it; at night only respiration runs.
- **You might think leaves are green because green light is useful.** The opposite — chlorophyll absorbs red and blue and *reflects* green, which is why we see it. Green is the wavelength plants throw away.
- **You might expect rubisco to be a well-optimized enzyme.** It is slow and confuses its substrate with oxygen. It evolved when there was almost no atmospheric oxygen to confuse it with, and it has been stuck with the consequences ever since — a good reminder that evolution optimizes for past conditions, not present ones.

## One-liner

> Light pulls electrons out of water and pushes them uphill onto $\ce{NADPH}$, chemiosmosis makes the ATP, and the Calvin cycle spends both on turning $\ce{CO2}$ into sugar — with oxygen thrown away as waste.

## Problems

**P1 (🟢)** How many ATP and $\ce{NADPH}$ does the Calvin cycle consume to make one glucose? Show the per-$\ce{CO2}$ arithmetic.

**P2 (🟡)** A plant is given water labelled with heavy oxygen ($\ce{H2^{18}O}$) while its $\ce{CO2}$ is normal. Predict where the label appears, and explain what the result establishes.

**P3 (🔴)** On a hot dry day a C3 plant closes its stomata to conserve water. Explain the chain of consequences for rubisco, and describe how a C4 plant avoids the problem.

<details>
<summary>Solutions</summary>

**P1** Glucose contains 6 carbons, so 6 $\ce{CO2}$ must be fixed. The Calvin cycle costs **3 ATP and 2 $\ce{NADPH}$ per $\ce{CO2}$**:

$$\text{ATP} = 6 \times 3 = \mathbf{18}, \qquad \ce{NADPH} = 6 \times 2 = \mathbf{12}.$$

*Check.* The ratio 18:12 reduces to 3:2, matching the per-carbon cost ✓. Note the asymmetry with respiration: making one glucose costs 18 ATP plus 12 $\ce{NADPH}$, while burning one returns about 32 ATP. Photosynthesis is not a wasteful process — the extra comes from light, and the $\ce{NADPH}$ is worth roughly as much as ATP, so the books balance far more closely than the bare ATP counts suggest.

**P2** **The label appears in the released $\ce{O2}$**, not in the sugar.

Water is the electron donor for photosystem II and is split as $\ce{2H2O -> O2 + 4H+ + 4e-}$. The oxygen atoms in the $\ce{O2}$ therefore come from water, so labelled water gives labelled oxygen gas. The sugar's oxygen atoms come from $\ce{CO2}$, which was unlabelled.

**What it establishes:** that photosynthesis's oxygen originates in **water, not carbon dioxide**. Before this experiment the natural reading of $\ce{6CO2 + 6H2O -> C6H12O6 + 6O2}$ was that $\ce{CO2}$ was being split into carbon and oxygen — chemically reasonable, and wrong. The labelling settles it, and the complementary experiment confirms it: label the $\ce{CO2}$ instead and the label turns up in the sugar while the $\ce{O2}$ stays normal.

*Check.* Consistent with the mechanism in this lesson — water's only role in the light reactions is as an electron source, and the oxygen is the leftover skeleton after its electrons and protons are taken ✓. (This is Ruben and Kamen's 1941 experiment, an unusually clean case of an isotope label deciding between two mechanisms.)

**P3** **The C3 plant's cascade:**

1. **Stomata close** to reduce water loss by transpiration.
2. **Gas exchange stops.** $\ce{CO2}$ can no longer enter and $\ce{O2}$ can no longer leave.
3. **Internal $\ce{CO2}$ falls** as the Calvin cycle consumes it, while **internal $\ce{O2}$ rises** because the light reactions keep producing it.
4. **Rubisco is now facing exactly the wrong ratio.** It cannot reliably distinguish the two gases, and the odds have shifted toward oxygen.
5. **Photorespiration takes over.** Rubisco binds $\ce{O2}$, and the resulting pathway consumes ATP, releases $\ce{CO2}$ that was already fixed, and produces no sugar. Net productivity can fall by 25 percent or more.

**The C4 solution — separate the two steps in space.** A C4 plant fixes carbon twice, in two different cell types:

- In **mesophyll cells** (nearest the air), $\ce{CO2}$ is fixed by **PEP carboxylase**, an enzyme with no affinity for $\ce{O2}$ at all. It cannot make rubisco's mistake because it cannot see oxygen as a substrate.
- The 4-carbon product (hence "C4") is pumped into **bundle-sheath cells**, deeper inside the leaf, where it releases $\ce{CO2}$.
- **Rubisco lives only in the bundle-sheath cells**, where this pumping keeps the local $\ce{CO2}$ concentration high — so even with stomata shut, rubisco sees a $\ce{CO2}$-rich environment and photorespiration is suppressed.

**The trade-off:** the pumping costs extra ATP per carbon, so in cool, wet, bright conditions C3 plants win on efficiency. In heat and drought C4 wins decisively — which is why maize and sugarcane are C4 and wheat and rice are C3, and why C4 grasses dominate tropical savannah.

*Check.* CAM plants solve the identical problem by separating the steps in **time** instead — stomata open only at night, when it is cool and water loss is low, storing $\ce{CO2}$ as an acid for daytime use ✓. Same problem, two orthogonal solutions, each evolved independently many times.

</details>

## Flashback

**From Lesson 2.2 (Cellular respiration):** In the mitochondrion, ATP is made by chemiosmosis. Describe the mechanism in three steps, and say what the proton gradient is for.

<details>
<summary>Solution</summary>

1. **Electrons fall down the transport chain.** $\ce{NADH}$ and $\ce{FADH2}$ deliver high-energy electrons to a series of membrane protein complexes, each with a stronger pull on electrons than the last, so energy is released in steps.
2. **That energy pumps protons.** The complexes use it to move $\ce{H+}$ from the matrix into the intermembrane space, building both a concentration difference and a charge difference across the inner membrane.
3. **Protons flow back through ATP synthase.** The gradient drives them through the enzyme, physically rotating its rotor, and that rotation drives the joining of ADP and phosphate into ATP.

**What the gradient is for:** it is an **energy store** — a battery. It converts the energy of falling electrons, which arrives in many small unusable instalments, into a single form the cell can spend in one place, through one machine.

*Check.* The parallel with this lesson is exact: the chloroplast pumps protons into the thylakoid space instead of the intermembrane space, and drives a very similar ATP synthase ✓. The difference is only where the electrons come from — glucose in the mitochondrion, water plus two photons in the chloroplast — and which way they are going, downhill against uphill.

</details>

## Connections

- **Backward:** this is [2.2](02-02-cellular-respiration.md) in reverse, using the same chemiosmotic machinery in the chloroplast described in [1.4](01-04-tour-of-the-organelles.md); rubisco is an enzyme obeying every rule of [2.1](02-01-energy-atp-enzymes.md), imperfect specificity included.
- **Forward:** [4.4](04-04-taste-of-ecology.md) builds ecosystems on the energy captured here — photosynthesis is what "primary production" means; [4.3](04-03-tree-of-life.md) uses the chloroplast's endosymbiotic origin to place algae and plants on the tree.
- **Sideways (chemistry, go deeper):** [`biochemistry` 3.6](../../biochemistry/lessons/03-06-photosynthesis-taste.md) treats the light reactions and Calvin cycle with real mechanism and energetics.
