# Inorganic Chemistry · Lesson 1.3: The Born–Haber Cycle

> ⏱ ~15 min · Module 1: Periodicity, Ionic Solids & Acid–Base Theory · Builds on: [1.2 Ionic solids & lattice energy](01-02-ionic-solids-lattice-energy.md), [general-chemistry 3.2 (thermochemistry & Hess's law)](../../general-chemistry/lessons/03-02-thermochemistry-enthalpy-calorimetry.md) · Unlocks: [1.4 Brønsted & Lewis acids and bases](01-04-bronsted-lewis-acids-bases.md)

## Why this matters

In [1.2](01-02-ionic-solids-lattice-energy.md) we *calculated* a lattice energy from geometry with Born–Landé. But how do you **measure** it? You can't: there's no beaker experiment that rips a crystal into a gas of free ions and lets you read off the heat. The lattice energy is the single most important number for an ionic solid — it sets melting points, solubility, stability — yet it's experimentally invisible. The **Born–Haber cycle** is the workaround: build a thermochemical loop out of steps you *can* measure, and let energy conservation hand you the one you can't. It's [general-chemistry's Hess's law](../../general-chemistry/lessons/03-02-thermochemistry-enthalpy-calorimetry.md) applied to a crystal, and it's the referee that tells you whether the ionic model of 1.2 is actually right for a given salt.

## The idea

Enthalpy is a **state function**: the total heat to get from A to B depends only on A and B, not the path. So there are two ways to build one mole of $\ce{NaCl}$ crystal starting from a lump of sodium metal and chlorine gas:

- **The direct path.** Just let them react: $\ce{Na(s) + \tfrac12 Cl2(g) -> NaCl(s)}$. The heat released is the **enthalpy of formation** $\Delta H_f$, which is tabulated and measurable.
- **The scenic route.** Take the metal apart into a gas of atoms, strip an electron off each to make cations, split the $\ce{Cl2}$ into atoms, staple the loose electrons onto them to make anions, and *finally* let the gas of $\ce{Na+}$ and $\ce{Cl-}$ ions snap together into the crystal. Every step here is separately measurable — **except that last one**, which releases exactly the lattice energy.

Since both paths start at the elements and end at the same crystal, they must release the **same total energy**. Write that equality and solve for the one unknown. That's the whole trick: the lattice energy is whatever number it takes to make the scenic route add up to the direct route.

## The formal version

Define the lattice energy $U > 0$ as the energy to pull the crystal apart into gaseous ions (**endothermic**), so **forming** the lattice from those ions releases $-U$ (exothermic). Then the scenic route for a 1:1 salt $\ce{MX}$ is a sum of enthalpies:

$$\Delta H_f \;=\; \underbrace{\Delta H_{\text{sub}}}_{\text{metal} \to \text{gas atoms}} \;+\; \underbrace{\text{IE}}_{\ce{M -> M+}} \;+\; \underbrace{\tfrac12 D}_{\ce{X2 -> 2X}} \;+\; \underbrace{\text{EA}}_{\ce{X -> X-}} \;+\; \underbrace{(-U)}_{\text{ions} \to \text{lattice}}.$$

*In words: the measured heat of formation equals the cost of making gaseous ions, minus the reward of assembling them into a crystal.* Rearranged for the unknown:

$$\boxed{\,U \;=\; \Delta H_{\text{sub}} + \text{IE} + \tfrac12 D + \text{EA} - \Delta H_f\,}$$

The terms, with their **signs** (the entire game is signs):

- $\Delta H_{\text{sub}}$ — **sublimation/atomization** of the metal, $\ce{M(s) -> M(g)}$. Always **endothermic** ($+$): you're vaporizing a solid.
- $\text{IE}$ — **ionization energy**, $\ce{M(g) -> M+(g) + e-}$. Always **endothermic** ($+$): tearing an electron off a neutral atom costs energy ([1.1](01-01-periodic-trends-revisited.md)'s trend). A $2+$ ion needs $\text{IE}_1 + \text{IE}_2$, and $\text{IE}_2 > \text{IE}_1$ always.
- $\tfrac12 D$ — half the **bond dissociation** enthalpy of $\ce{X2}$, giving one mole of atoms. Endothermic ($+$): breaking a bond. (The $\tfrac12$ is because $\ce{MX}$ needs only one $\ce{X}$, but $D$ is defined per $\ce{X2}$ molecule.)
- $\text{EA}$ — **electron affinity**, the enthalpy of $\ce{X(g) + e- -> X-(g)}$. The **first** EA is usually **exothermic** ($-$): a neutral atom is glad to grab an electron. A $2-$ ion needs $\text{EA}_1 + \text{EA}_2$, and crucially $\text{EA}_2$ is **endothermic** ($+$) — you're forcing an electron onto an already-negative ion against its repulsion.
- $\Delta H_f$ — **enthalpy of formation**, the direct-path heat. Exothermic ($-$) for a stable salt.

*In words: everything about making free ions costs energy; the lattice pays it all back and then some, which is why the salt forms at all.*

## Picture

![Born–Haber energy-level staircase for MgO: elements at the base, endothermic steps (sublimation, ½D, IE1, IE2, EA2) climbing up in blue, the exothermic EA1 stepping down in grey, and the large coral lattice-energy drop closing the loop back to the formation enthalpy](assets/01-03-fig1.svg)

Read it as a hike: each blue arrow climbs (costs energy), grey $\text{EA}_1$ dips slightly, and the tall coral $-U$ arrow plunges from the ion gas all the way down to the crystal. The short coral $\Delta H_f$ arrow on the left is the direct path. Because both routes end at $\ce{MgO(s)}$, the loop must close — that closure *is* the equation.

## Worked examples

**Example 1 (NaCl — the classic).** Given (all $\mathrm{kJ/mol}$): $\Delta H_f = -411$, $\Delta H_{\text{sub}}(\ce{Na}) = +108$, $\text{IE}_1(\ce{Na}) = +496$, $D(\ce{Cl2}) = +244$ so $\tfrac12 D = +122$, and $\text{EA}(\ce{Cl}) = -349$. Then

$$U = \Delta H_{\text{sub}} + \text{IE}_1 + \tfrac12 D + \text{EA} - \Delta H_f = 108 + 496 + 122 + (-349) - (-411).$$

Add the ion-making costs: $108 + 496 + 122 - 349 = 377\ \mathrm{kJ/mol}$. Then $U = 377 + 411 = \boxed{788\ \mathrm{kJ/mol}}$. This is the **experimental** lattice energy. The Born–Landé value from [1.2](01-02-ionic-solids-lattice-energy.md) comes out near $770\text{–}790\ \mathrm{kJ/mol}$ — agreement to a couple percent, which is the evidence that $\ce{NaCl}$ really is a lattice of $\ce{Na+}$ and $\ce{Cl-}$ point charges.

**Example 2 (AgCl — where the model breaks).** Run the same cycle for $\ce{AgCl}$ and you get an experimental $U \approx 915\ \mathrm{kJ/mol}$, but Born–Landé (pure ionic, from ionic radii) predicts only $\approx 833\ \mathrm{kJ/mol}$. The crystal is held together **more tightly than point-charge electrostatics can explain** — the missing $\sim 80\ \mathrm{kJ/mol}$ is extra bonding from **covalent character** (the soft, polarizable $\ce{Ag+}$ sharing electron density with $\ce{Cl-}$; you'll formalize this as softness in [1.5](01-05-hard-soft-acid-base.md)). *So the Born–Haber vs. Born–Landé comparison is a covalency detector:* close agreement ⇒ ionic model works; experimental value well above the ionic prediction ⇒ significant covalent bonding.

## Watch out

- **You might drop the $\tfrac12$ on the halogen.** $D(\ce{Cl2}) = 244$ is per mole of $\ce{Cl2}$, but $\ce{NaCl}$ contains one $\ce{Cl}$. Use $\tfrac12 D = 122$, or you'll overcount the atomization by a factor of two.
- **You might make $\text{EA}_2$ negative.** The *first* electron affinity of oxygen is exothermic, but the **second is endothermic** ($\text{EA}_2 > 0$): you are pushing a negative electron onto the already-negative $\ce{O-}$, and Coulomb repulsion fights you. Net, making $\ce{O^2-}(g)$ from $\ce{O}(g)$ actually *costs* energy — the lattice energy is what makes oxides stable anyway.
- **You might sign $\Delta H_f$ or $U$ wrong.** Watch the double negative: $-\Delta H_f$ with $\Delta H_f < 0$ *adds* a positive number. And $U$ here is the positive lattice-*breaking* energy; the term that appears in the formation sum is $-U$. Mixing the two conventions is the most common way to land off by $2\Delta H_f$.

## One-liner

> Lattice energy can't be measured, so Hess's law measures it for you: $U = \Delta H_{\text{sub}} + \text{IE} + \tfrac12 D + \text{EA} - \Delta H_f$, and comparing it to the ionic-model prediction tells you whether the bond is truly ionic.

## Problems

**P1 (🟢)** Compute the lattice energy $U$ of $\ce{KCl}$ from its Born–Haber cycle. Data ($\mathrm{kJ/mol}$): $\Delta H_f = -437$, $\Delta H_{\text{sub}}(\ce{K}) = +89$, $\text{IE}_1(\ce{K}) = +419$, $\tfrac12 D(\ce{Cl2}) = +122$, $\text{EA}(\ce{Cl}) = -349$. Is $U(\ce{KCl})$ larger or smaller than $U(\ce{NaCl}) = 788$, and does that match the size trend from [1.2](01-02-ionic-solids-lattice-energy.md)?

**P2 (🟡)** To build an oxide you must make $\ce{O^2-}(g)$ from $\ce{O}(g)$. Given $\text{EA}_1(\ce{O}) = -141$ and $\text{EA}_2(\ce{O}) = +798\ \mathrm{kJ/mol}$: (a) compute the total enthalpy of $\ce{O(g) + 2e- -> O^2-(g)}$; (b) explain *why* $\text{EA}_2$ is endothermic; (c) given that making the dianion is net endothermic, what makes metal oxides form at all?

**P3 (🔴, Boss-1 rehearsal)** Compute the lattice energy of $\ce{MgO}$. Data ($\mathrm{kJ/mol}$): $\Delta H_f(\ce{MgO}) = -602$, $\Delta H_{\text{sub}}(\ce{Mg}) = +148$, $\text{IE}_1(\ce{Mg}) = +738$, $\text{IE}_2(\ce{Mg}) = +1451$, $\tfrac12 D(\ce{O2}) = +249$, $\text{EA}_1(\ce{O}) = -141$, $\text{EA}_2(\ce{O}) = +798$. Then explain why $U(\ce{MgO})$ so vastly exceeds $U(\ce{NaCl}) = 788$.

<details>
<summary>Solutions</summary>

**P1** Sum the ion-making costs, then subtract $\Delta H_f$:

$$U = 89 + 419 + 122 + (-349) - (-437) = (89 + 419 + 122 - 349) + 437 = 281 + 437 = \boxed{718\ \mathrm{kJ/mol}}.$$

$U(\ce{KCl}) = 718 < U(\ce{NaCl}) = 788$. This matches 1.2: both are $1{+}/1{-}$ salts with the same charge product, but $\ce{K+}$ is larger than $\ce{Na+}$, so the interionic distance $r_0$ is bigger and $U \propto 1/r_0$ is smaller. Bigger cation, weaker lattice. ✓

**P2** (a) The two steps just add: $\text{EA}_1 + \text{EA}_2 = -141 + 798 = \boxed{+657\ \mathrm{kJ/mol}}$ — net **endothermic**. Making a gaseous oxide dianion costs energy overall.

(b) $\text{EA}_1$ is exothermic because a neutral $\ce{O}$ atom, with its high effective nuclear charge ([1.1](01-01-periodic-trends-revisited.md)), attracts an extra electron. But $\text{EA}_2$ adds an electron to $\ce{O-}$, which is **already negatively charged**: the incoming electron is repelled by the net negative charge, so you must *do work* against Coulomb repulsion. Hence $\text{EA}_2 > 0$.

(c) The **lattice energy**. Free $\ce{O^2-}(g)$ is unstable and never exists in isolation — but inside a crystal each $\ce{O^2-}$ is surrounded by cations whose electrostatic attraction (the huge $-U$ term, amplified by the $2-$ charge) more than repays the $+657$ cost of making it. Oxides are stabilized *by the lattice*, not by the isolated ion. ✓

**P3** Cost of making the ions ($\mathrm{kJ/mol}$): sublimation $148$, plus both ionizations $738 + 1451 = 2189$, plus atomization $249$, plus both electron affinities $-141 + 798 = 657$:

$$\text{total ion-making} = 148 + 2189 + 249 + 657 = 3243\ \mathrm{kJ/mol}.$$

Then

$$U = 3243 - \Delta H_f = 3243 - (-602) = 3243 + 602 = \boxed{3845\ \mathrm{kJ/mol}}.$$

Why $\sim 4.9\times$ larger than $\ce{NaCl}$? From Born–Landé (1.2), $U \propto \dfrac{z_+ z_-}{r_0}$. Two effects stack:

- **Charge product.** $\ce{MgO}$ is $2{+}$ and $2{-}$, so $z_+ z_- = 4$, versus $1$ for $\ce{NaCl}$ — a $4\times$ boost by itself.
- **Smaller ions.** $\ce{Mg^2+}$ ($\approx 72\ \mathrm{pm}$) and $\ce{O^2-}$ ($\approx 140\ \mathrm{pm}$) are more compact than $\ce{Na+}$/$\ce{Cl-}$ ($\approx 102/181\ \mathrm{pm}$), shrinking $r_0$ and raising $U$ by a further $\sim 1.2\times$.

Together $4 \times 1.2 \approx 4.9$, matching $3845 / 788 \approx 4.9$. This enormous lattice energy is why $\ce{MgO}$ melts at $2852\ ^\circ\mathrm{C}$ and $\ce{NaCl}$ at only $801\ ^\circ\mathrm{C}$. ✓

</details>

## Flashback

**From Lesson 1.2 (Ionic solids & lattice energy):** Using the Born–Landé proportionality $U \propto \dfrac{z_+ z_-}{r_0}$, rank these four salts by **increasing** lattice-energy magnitude: $\ce{KCl}$, $\ce{NaCl}$, $\ce{CaO}$, $\ce{MgO}$.

<details>
<summary>Solution</summary>

Split by charge product first, then by ion size within each group.

- **Singly charged** ($z_+ z_- = 1$): $\ce{KCl}$ and $\ce{NaCl}$. $\ce{K+}$ is larger than $\ce{Na+}$, so $r_0(\ce{KCl}) > r_0(\ce{NaCl})$ and $U(\ce{KCl}) < U(\ce{NaCl})$.
- **Doubly charged** ($z_+ z_- = 4$): $\ce{CaO}$ and $\ce{MgO}$. Both share the $4\times$ charge boost, so both crush the $1{+}/1{-}$ pair. $\ce{Ca^2+}$ is larger than $\ce{Mg^2+}$, so $r_0(\ce{CaO}) > r_0(\ce{MgO})$ and $U(\ce{CaO}) < U(\ce{MgO})$.

Ranking (smallest to largest lattice energy):

$$\ce{KCl} \;<\; \ce{NaCl} \;<\; \ce{CaO} \;<\; \ce{MgO}.$$

Ballpark experimental values confirm it: $\approx 718 < 788 < 3414 < 3845\ \mathrm{kJ/mol}$. Charge product dominates the split; ion size breaks the ties. ✓

</details>

## Connections

- **Backward:** this is [general-chemistry's Hess's law](../../general-chemistry/lessons/03-02-thermochemistry-enthalpy-calorimetry.md) — enthalpy as a path-independent state function — wrapped into a closed loop, and it puts a *measured* number on the Born–Landé lattice energy you *calculated* in [1.2](01-02-ionic-solids-lattice-energy.md). The individual steps lean on the periodic trends (IE, EA, atomic size) from [1.1](01-01-periodic-trends-revisited.md).
- **Forward:** the experimental-vs-calculated gap is the first quantitative sign of covalency, which drives the polarizability and "softness" ideas in [1.5 Hard–soft acid–base theory](01-05-hard-soft-acid-base.md); the $\ce{MgO}$ computation here is exactly **Boss Problem 1**.
- **Sideways:** the same "sum a cycle of measurable steps to get an unmeasurable one" logic reappears whenever a bond energy or solvation enthalpy can't be isolated — it's the thermodynamic bookkeeping behind [physical chemistry](../../physical-chemistry/syllabus.md)'s treatment of formation and reaction enthalpies.
