# General Biology · Lesson 2.1: Energy, ATP & enzymes

> ⏱ ~15 min · Module 2: Energy, metabolism & cell division · Builds on: [1.2](01-02-four-biomolecules.md), [1.4](01-04-tour-of-the-organelles.md) · Unlocks: 2.2 (cellular respiration)

## Why this matters

A cell is a machine that runs uphill. Building a protein from amino acids, pumping ions against a gradient, moving a flagellum — all of these decrease entropy locally and none of them happen on their own. Life is not exempt from thermodynamics; it pays, continuously, in energy taken from the environment.

This lesson is the accounting system: what makes a reaction go, how the cell couples the ones that won't go to the ones that do, and how it controls the timing. Get these three ideas and respiration ([2.2](02-02-cellular-respiration.md)) and photosynthesis ([2.3](02-03-photosynthesis.md)) become bookkeeping rather than memorization.

## The idea

**Two questions, always kept apart.** For any reaction, ask separately: *will it go?* and *how fast?* They have different answers with different causes, and conflating them is the single most common error in this material.

Whether a reaction goes is set by **free energy**. If the products are at lower free energy than the reactants, the reaction releases energy and is spontaneous — **exergonic**. If they're higher, it needs an input — **endergonic**. "Spontaneous" here means only "thermodynamically downhill," with no promise about speed: diamond turning to graphite is spontaneous and takes longer than the age of the Earth.

How fast is set by **activation energy** — the hill you must climb before you can roll down the other side. Bonds must be strained and rearranged before new ones form, and that costs energy up front even in a reaction that pays out overall.

**Enzymes attack the second question only.** An enzyme is a catalyst: it lowers the activation energy, so more molecules have enough thermal energy to get over the hill at any moment, so the rate climbs — often by factors of $10^6$ to $10^{12}$. What it cannot do is change the free-energy difference between reactants and products. **An enzyme changes how fast equilibrium arrives, never where equilibrium lies.** It speeds the reverse reaction by exactly the same factor.

**ATP is how the cell moves energy around.** Rather than coupling every uphill reaction directly to a fuel molecule, cells convert fuel into one standard currency: adenosine triphosphate. Break off its terminal phosphate and you release energy; an enzyme can capture that release and use it to drive a reaction that would otherwise not go. This is **energy coupling**, and it is why ATP is called the cell's energy currency — not because it stores much (a cell holds only seconds' worth) but because it is *spent and remade constantly*. You turn over roughly your own body weight in ATP each day.

## The formal version

**Free energy.** The Gibbs free energy change is

$$\Delta G = \Delta H - T\Delta S,$$

with $\Delta H$ the enthalpy change (heat), $T$ the absolute temperature, and $\Delta S$ the entropy change.

*In words: a reaction goes if it releases enough heat, increases enough disorder, or some combination of the two.*

| $\Delta G$ | Name | Behaviour |
|---|---|---|
| $\Delta G < 0$ | **exergonic** | releases free energy; spontaneous (eventually) |
| $\Delta G > 0$ | **endergonic** | requires free energy; will not go alone |
| $\Delta G = 0$ | at equilibrium | no net change |

**Crucially, $\Delta G$ says nothing about rate.** See [free energy](../reference.md#free-energy).

**How life squares with the second law.** A cell builds order, so its own entropy falls. It is not a closed system: it takes in low-entropy fuel and dumps high-entropy heat and waste, and the entropy of cell-plus-surroundings rises. **Living things are local eddies of order paid for by a larger disorder they export.**

**ATP and coupling.** ATP is adenine, ribose, and three phosphates in a row. Those phosphates each carry negative charge and repel one another, so the molecule is strained; hydrolysing the terminal one relieves the strain:

$$\ce{ATP + H2O -> ADP + P_i}, \qquad \Delta G^{\circ\prime} \approx -30.5\ \mathrm{kJ/mol}$$

Couple that to an endergonic reaction and add the free energies:

$$\underbrace{\text{Glu} + \ce{NH3} \to \text{Gln}}_{\Delta G = +14.2}\ +\ \underbrace{\ce{ATP -> ADP + P_i}}_{\Delta G = -30.5}\ \Longrightarrow\ \Delta G_{\text{net}} = -16.3\ \mathrm{kJ/mol}$$

*In words: bolt an uphill reaction to a steeper downhill one and the pair runs downhill.* The coupling is physical, not bookkeeping — the same enzyme holds both, usually transferring the phosphate onto the substrate as an intermediate. See [ATP](../reference.md#atp).

**Enzymes.** An enzyme is (almost always) a protein whose fold creates an **active site** — a pocket shaped and charged to fit one substrate.

- **Induced fit:** the site is not a rigid lock. Substrate binding deforms the enzyme slightly, tightening the grip and straining the substrate's bonds toward the transition state.
- **How it lowers $E_a$:** by orienting substrates correctly, straining bonds toward breaking, providing a favourable microenvironment (an acidic pocket, say), or participating covalently and then releasing.
- **Specificity** comes from shape and chemistry complementarity — the same recognition-by-shape that [1.2](01-02-four-biomolecules.md) said proteins are for.
- **The enzyme is unchanged** and turns over repeatedly; one molecule may process thousands of substrates per second.

**What changes an enzyme's rate.**

| Factor | Effect |
|---|---|
| Substrate concentration | rate rises, then **saturates** when every active site is busy |
| Temperature | rises to an optimum, then falls sharply as the protein denatures ([1.2](01-02-four-biomolecules.md)) |
| pH | optimum where the active site's R groups carry the right charges — pepsin at 2, most cytosolic enzymes near 7 |
| **Competitive inhibitor** | resembles the substrate, blocks the active site; **overcome by more substrate** |
| **Noncompetitive inhibitor** | binds elsewhere, changing the enzyme's shape; **not** overcome by more substrate |

**Allosteric regulation and feedback inhibition.** Many enzymes have a second site where a regulator binds and shifts the whole protein between active and inactive shapes. The most important case is **feedback inhibition**: the end product of a pathway inhibits the first enzyme in it.

*In words: the product turns off its own production line.* It is a thermostat built from one protein, it prevents waste, and it is the cell's default control strategy — you'll see the same logic governing the cell cycle in [2.4](02-04-the-cell-cycle.md).

## Picture

![An energy diagram showing reactants at high free energy and products lower, with a tall activation-energy hump for the uncatalysed reaction and a much smaller one with enzyme, both ending at the same product level so the free-energy change is unchanged, beside the ATP cycle in which respiration recharges ADP to ATP and cellular work spends it again](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — does the coupled reaction go?).** Sucrose synthesis from glucose and fructose has $\Delta G^{\circ\prime} = +27\ \mathrm{kJ/mol}$. Can one ATP hydrolysis drive it?

$$\Delta G_{\text{net}} = +27 + (-30.5) = -3.5\ \mathrm{kJ/mol} < 0.$$

**Yes — but only just.** The margin is about one-tenth of the ATP's payout, so the reaction runs sluggishly and is easily reversed by shifting concentrations. Cells that need this to run briskly use an activated intermediate that costs more, which is the general pattern: *biology buys margin with extra ATP rather than running near zero.*

*Check.* A reaction needing $+45$ kJ/mol could not be driven by one ATP ($-30.5$) and would need two, or a more energetic donor.

**Example 2 (why you'd care — telling two inhibitors apart).** A drug slows an enzyme. Is it competitive or noncompetitive? Add more substrate and watch.

| | Competitive | Noncompetitive |
|---|---|---|
| Binds | the active site | a separate allosteric site |
| Mechanism | physically blocks the substrate | changes the enzyme's shape |
| Add more substrate | inhibition is **overcome** — substrate outcompetes the drug | **no rescue** — the enzyme is deformed regardless |
| Maximum rate | unchanged (reachable with enough substrate) | reduced |

**Two real cases:**

*Competitive.* Methanol poisoning is treated with ethanol. Methanol itself is harmless; the enzyme alcohol dehydrogenase converts it to formaldehyde and formic acid, which cause blindness and death. Ethanol binds the same active site and is preferred by it, so flooding the patient with ethanol keeps the enzyme busy while the methanol is excreted unconverted. **The antidote is a competitive inhibitor, and the dose works precisely because competition is concentration-dependent.**

*Noncompetitive.* Cyanide binds cytochrome c oxidase away from its substrate site and locks it in an inactive shape. No amount of substrate helps — which is exactly why cyanide is so lethal and so hard to treat. The enzyme it kills is the last one in the electron transport chain, so the whole of [2.2](02-02-cellular-respiration.md) stops within seconds.

**The diagnostic is one experiment:** raise substrate concentration. Rescue means competitive; no rescue means noncompetitive.

## Watch out

- **You might think enzymes make reactions happen that otherwise wouldn't.** They cannot. An enzyme only accelerates a reaction that was already thermodynamically favourable. If $\Delta G > 0$, no enzyme will help — the cell must couple it to ATP.
- **You might think enzymes shift equilibrium.** They accelerate forward and reverse by the same factor, so the equilibrium position is untouched. They change *when* you arrive, not *where*.
- **You might read "spontaneous" as "fast."** It means $\Delta G < 0$ and nothing more. Glucose in air is thermodynamically doomed and yet sits in the sugar bowl indefinitely.
- **You might think ATP stores the cell's energy.** It's a currency in circulation, not a savings account — cells hold only a few seconds' supply and regenerate it continuously. Long-term storage is fat and glycogen.
- **You might imagine the active site as a rigid lock.** Induced fit means it deforms on binding, and that deformation is part of the catalysis, not an imperfection in the metaphor.

## One-liner

> Free energy says whether a reaction goes and enzymes say how fast — two independent questions — while ATP couples the reactions that won't go to the one that always does.

## Problems

**P1 (🟢)** A reaction has $\Delta G^{\circ\prime} = +18\ \mathrm{kJ/mol}$. Can it be driven by hydrolysing one ATP ($-30.5\ \mathrm{kJ/mol}$)? Give the net value and state whether the coupled reaction is spontaneous.

**P2 (🟡)** An enzyme's rate rises steadily with substrate concentration and then levels off. Explain the plateau. What single change would raise the plateau itself?

**P3 (🔴)** A bacterium makes the amino acid isoleucine in five enzymatic steps. Isoleucine binds the *first* enzyme at a site away from its active site and inactivates it. Name the mechanism, explain why regulating the first step is the right design, and predict what happens when isoleucine is supplied in the growth medium.

<details>
<summary>Solutions</summary>

**P1**

$$\Delta G_{\text{net}} = +18 + (-30.5) = \mathbf{-12.5\ kJ/mol}.$$

Negative, so the coupled reaction is **exergonic and spontaneous** — one ATP is enough, with about 12.5 kJ/mol to spare.

*Check.* The rule of thumb: one ATP drives anything needing less than about 30 kJ/mol, with a comfortable margin below roughly 25 ✓. Note "spontaneous" still says nothing about speed — the cell needs an enzyme to make it happen on a useful timescale, and that enzyme is what physically couples the two reactions.

**P2** **Why it plateaus: saturation.** At low substrate concentration, most active sites are empty, so adding substrate finds more free enzyme and the rate climbs roughly linearly. As concentration rises, a growing fraction of sites are occupied. Eventually essentially every enzyme molecule is working continuously, and adding more substrate simply means more molecules waiting. The rate is then limited by how fast the enzymes can process — how quickly each one binds, converts and releases — not by supply.

**To raise the plateau: increase the amount of enzyme.** The maximum rate is set by (number of enzyme molecules) × (turnover rate per molecule), so the two ways to raise it are more enzyme or faster enzyme. In a cell, "more enzyme" means transcribing the gene harder ([3.4](03-04-central-dogma.md)) — which is precisely how cells adjust to sustained demand, on a timescale of minutes to hours rather than seconds.

*Check.* This distinguishes the two inhibitor types in Example 2: a competitive inhibitor lowers the rate at any given substrate concentration but leaves the plateau reachable, while a noncompetitive one lowers the plateau itself by effectively removing enzyme molecules from service ✓.

**P3** **The mechanism is feedback inhibition** (also called end-product inhibition), acting through **allosteric** regulation — the binding site is separate from the active site, and binding changes the enzyme's shape rather than blocking its substrate.

**Why the first step is the right one to regulate**, for three reasons:

1. **No waste.** Inhibiting step 1 stops the pathway at its entrance, so no starting material is committed. Inhibiting step 5 instead would let the cell manufacture four intermediates and then stall, stranding them — a waste of ATP and of carbon.
2. **No pile-up.** Blocking a late step causes intermediates to accumulate. Those may be toxic, may be diverted into other pathways, or may simply occupy scarce carbon.
3. **The first step is the commitment.** In a branched metabolic network, the first enzyme unique to this pathway is the point at which material is dedicated to isoleucine and nothing else. Regulating there controls the branch without disturbing anything upstream that other pathways share.

**Supplying isoleucine in the medium:** it enters the cell, binds the first enzyme's allosteric site, and shuts the pathway down. The bacterium **stops making its own** and uses the free supply — saving five enzymatic steps' worth of ATP and reducing power. This is the fastest tier of metabolic control, acting in milliseconds, on enzymes that already exist. (A slower second tier follows over minutes to hours: the cell also stops *transcribing* the genes for these enzymes, so it need not maintain proteins it isn't using.)

*Check.* The behaviour matches the thermostat analogy exactly — the controlled variable (isoleucine concentration) feeds back negatively on its own production, so the system self-corrects toward a set point regardless of whether the supply is internal or external ✓. The same negative-feedback architecture reappears in [2.4](02-04-the-cell-cycle.md)'s checkpoints and in physiological homeostasis generally.

</details>

## Flashback

**From Lesson 1.3 (Cell theory & two kinds of cell):** A spherical cell of diameter 5 μm grows to 15 μm. By what factor does its surface-area-to-volume ratio change, and what does that mean for supplying its interior?

<details>
<summary>Solution</summary>

Using $\text{SA}/V = 6/d$:

$$\frac{\text{SA}}{V}\bigg|_{5} = \frac{6}{5} = 1.2\ \mu\mathrm m^{-1}, \qquad \frac{\text{SA}}{V}\bigg|_{15} = \frac{6}{15} = 0.4\ \mu\mathrm m^{-1}.$$

The ratio fell by a factor of **3** — exactly the factor by which the diameter grew, since the ratio goes as $1/d$.

Consequence: the cell now has three times as much interior to supply per unit of membrane. Nutrient uptake and waste export scale with surface, while consumption scales with volume, so the larger cell is three times worse off per unit of demand — and diffusion times to the centre have grown ninefold, since diffusion time scales as distance squared.

*Check.* Volume grew by $3^3 = 27$ while surface grew by $3^2 = 9$; $27/9 = 3$ ✓. This is why the enzyme kinetics of this lesson matter more in large cells: with supply constrained, reaction rate becomes the binding limit, and that is precisely what compartmentalizing into organelles ([1.4](01-04-tour-of-the-organelles.md)) fixes by raising local concentrations ✓.

</details>

## Connections

- **Backward:** enzymes are [1.2](01-02-four-biomolecules.md)'s proteins doing the job their folds were built for; the compartments they work in are [1.4](01-04-tour-of-the-organelles.md)'s organelles, which exist partly to raise local concentrations and so raise rates.
- **Forward:** [2.2](02-02-cellular-respiration.md) is one long exergonic pathway harvested in ATP; [2.3](02-03-photosynthesis.md) runs the endergonic direction using light; [2.4](02-04-the-cell-cycle.md) controls division with the same allosteric logic as feedback inhibition.
- **Sideways (chemistry, go deeper):** the quantitative treatment — Michaelis–Menten kinetics, $K_M$ and $V_{\max}$, inhibition plots, and allosteric models — is [`biochemistry` 2.1](../../biochemistry/lessons/02-01-enzymes-catalytic-strategy.md) through [2.4](../../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md). Nothing here depends on it.
