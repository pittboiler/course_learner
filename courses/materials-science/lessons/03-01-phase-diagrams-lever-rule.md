# Materials Science & Engineering · Lesson 3.1: Phase diagrams & the lever rule

> ⏱ ~15 min · Module 3: Phase equilibria & microstructure · Builds on: [2.4 Diffusion I: Fick's first law](02-04-diffusion-i-ficks-first-law.md), [2.5 Diffusion II: transient & Arrhenius](02-05-diffusion-ii-transient-arrhenius.md) · Unlocks: 3.2 (eutectics & microstructure), 3.3 (heat treatment)

## Why this matters

Cool a molten copper–nickel alloy and it doesn't just "freeze" — at any given temperature it splits into a definite amount of solid with one composition and liquid with another, and diffusion ([2.4](02-04-diffusion-i-ficks-first-law.md)–[2.5](02-05-diffusion-ii-transient-arrhenius.md)) is what lets the atoms rearrange to reach that split. A **phase diagram** is the map that tells you, for any alloy composition and temperature, *which phases exist, what each one is made of, and how much of each you get*. It is the single most-used chart in the field: pick a steel's carbon content, read where it lands, and you already know what heat treatment can do to it ([3.3](03-03-transformations-ttt-heat-treatment.md)). This lesson teaches you to read that map — and the lever rule, the one-line calculation that turns a picture into numbers.

## The idea

First, two words that are easy to blur. A **component** is an ingredient — an element (or fixed compound) you mix, like Cu and Ni. A **phase** is a physically distinct, chemically uniform region with its own structure — the liquid melt is one phase; a solid crystal is another. One component can appear in several phases (ice, water, steam are three phases of one component), and one phase can hold several components dissolved together (salt water is one phase, two components).

Now the map. Put **composition** on the horizontal axis (0% Ni on the left, pure Cu; 100% Ni on the right, pure Ni) and **temperature** on the vertical axis. Every point is a recipe: "this alloy, this hot." Cu and Ni are the friendliest possible pair — they dissolve in each other completely, solid *and* liquid, in any ratio. That's an **isomorphous** system, and its diagram is a single lens-shaped two-phase region floating between an all-liquid field above and an all-solid field below.

The upper boundary of the lens is the **liquidus** — above it, everything is liquid ($L$). The lower boundary is the **solidus** — below it, everything is one solid crystal ($\alpha$). *Between* them is the interesting part: liquid and solid coexisting. And here's the non-obvious bit that the lever rule nails down: inside that lens, the liquid and the solid are **not** the same composition as the alloy you started with. The solid greedily takes up more of the higher-melting element (Ni), leaving the liquid enriched in the lower-melting one (Cu). To find out exactly what each is and how much you have, you draw one horizontal line and measure.

## The formal version

**Gibbs phase rule.** How many things can you freely change without changing which phases are present? For a system at equilibrium,

$$P + F = C + 2,$$

where $C$ is the number of **components**, $P$ the number of **phases** coexisting, and $F$ the **degrees of freedom** — the count of independent variables (temperature, pressure, phase compositions) you may vary while keeping the same set of phases. *In words: phases plus wiggle-room is fixed by how many ingredients you have.* On a fixed-pressure diagram (we've pinned pressure at 1 atm, using up one variable), it drops to

$$P + F = C + 1.$$

For our binary alloy $C = 2$, so $P + F = 3$. In a single-phase field ($P = 1$) that gives $F = 2$: you can independently vary temperature *and* composition and stay in that field. In the two-phase lens ($P = 2$) it gives $F = 1$: fix the temperature and *everything else is locked* — both phase compositions are pinned by where the horizontal line hits the two boundaries.

**The tie line.** At a temperature $T_1$ inside the two-phase region, draw a horizontal line across the lens. Where it meets the **liquidus** is the composition of the liquid, $C_L$; where it meets the **solidus** is the composition of the solid, $C_\alpha$. *In words: the tie line's two ends read off what the two phases are actually made of* — not the overall alloy composition $C_0$, which sits somewhere between them.

**The lever rule.** The tie line also tells you *how much* of each phase. Treat it as a seesaw with its fulcrum at the overall composition $C_0$. The mass fraction of each phase is proportional to the length of the **opposite** arm:

$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L}, \qquad W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L}.$$

*In words: the fraction of a phase equals the length of the lever arm on the far side of the fulcrum, divided by the whole tie line.* (Equivalently, using the brief's sign-agnostic form, $W_\alpha = \dfrac{C_L - C_0}{C_L - C_\alpha}$ — same number.) Notice $W_\alpha + W_L = 1$ automatically, since the two arms add up to the whole. The rule is just conservation of Ni: all the nickel in the solid plus all the nickel in the liquid must equal the nickel you started with, $W_\alpha C_\alpha + W_L C_L = C_0$, and solving that one equation gives exactly the fractions above.

Why "opposite" arm? If $C_0$ sits very close to $C_\alpha$, almost all of the alloy must be $\alpha$ — and indeed the *far* (liquid-side) arm is then long, giving $W_\alpha \approx 1$. The phase you have *more* of is the one whose composition your fulcrum sits *nearer*, which is the *longer opposite arm*.

## Picture

![Copper-nickel isomorphous phase diagram: composition on the x-axis, temperature on the y-axis, with a liquidus and solidus bounding a lens-shaped L-plus-alpha two-phase region. A horizontal tie line at 1250 degrees C meets the liquidus at C_L = 30 percent Ni and the solidus at C_alpha = 50 percent Ni, with the overall composition C_0 = 44 percent as the fulcrum; the two lever arms are drawn below and labeled with their phase fractions.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (read the map, then weigh it).** A Cu–44 wt% Ni alloy is held at $T_1 = 1250\ ^\circ\mathrm{C}$, inside the two-phase lens. From the tie line (figure): the liquidus gives $C_L = 30$ wt% Ni and the solidus gives $C_\alpha = 50$ wt% Ni. So the coexisting phases are a liquid that is 30% Ni and a solid that is 50% Ni — *neither is the 44% you poured in.* Now the amounts, with $C_0 = 44$:

$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L} = \frac{44 - 30}{50 - 30} = \frac{14}{20} = 0.70,$$

$$W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L} = \frac{50 - 44}{50 - 30} = \frac{6}{20} = 0.30.$$

So at this temperature the alloy is 70% solid, 30% liquid by mass. Check: $0.70 + 0.30 = 1$ ✓, and the fulcrum at 44 sits closer to the solid (50) than the liquid (30), so it should be mostly solid — it is. As you cool further, both boundaries shift and $W_\alpha \to 1$: the last drop of liquid freezes when the solidus reaches $C_0 = 44$.

**Example 2 (count the freedoms).** Use the phase rule ($C = 2$, fixed pressure, so $P + F = 3$) at two spots.

*Point A, in the all-liquid field at $1400\ ^\circ\mathrm{C}$, Cu–44% Ni.* Here $P = 1$, so $F = 3 - 1 = 2$. Two degrees of freedom: you may nudge temperature *and* composition independently and still have a single liquid. The state is not pinned — it's a whole 2D region.

*Point B, on the tie line at $1250\ ^\circ\mathrm{C}$ (Example 1).* Here $P = 2$, so $F = 3 - 2 = 1$. Just one free variable. Pick the temperature and you are done: $C_L$, $C_\alpha$ are both fixed by the boundaries, and only the *ratio* $W_\alpha : W_L$ slides as $C_0$ moves — but $C_0$ was set when you weighed out the alloy. This is why "fix $T$ and everything is locked" in the two-phase region is not a coincidence; it's $F = 1$ made visible.

## Watch out

- **You might think the liquid and solid share the alloy's overall composition** — after all, you only added 44% Ni. Actually only the *average* is 44%; the two phases sit at the tie-line ends (30% and 50%), and the lever rule weights them so they average back to 44%. Reading $C_0$ off as a phase composition is the single most common beginner error.
- **You might grab the arm on the same side as the phase.** The fraction of $\alpha$ uses the arm *away* from $C_\alpha$ (the liquid-side length $C_0 - C_L$), not the short stub next to it. Same-side gives you the *other* phase's fraction — an easy way to swap the two answers. Sanity-check with "the fulcrum sits nearer the phase you have more of."
- **You might read compositions off a single-phase field with a tie line.** Tie lines and the lever rule live *only* inside two-phase regions. In a single-phase field the phase composition simply equals $C_0$ (there's nothing to split), and $F = 2$ tells you the state isn't pinned by temperature alone.

## One-liner

> A phase diagram maps composition and temperature to equilibrium phases; inside a two-phase region a horizontal tie line reads off *what* the phases are (its two ends) and the lever rule weighs *how much* of each (opposite-arm over whole).

## Problems

**P1 (🟢)** A Cu–35 wt% Ni alloy sits at a temperature where the tie line gives $C_L = 32$ wt% Ni and $C_\alpha = 43$ wt% Ni. Find the mass fractions of liquid and solid. Which phase is there more of, and does that match where $C_0$ sits on the tie line?

**P2 (🟡)** A binary alloy is heated until it is a single liquid phase. (a) Using the fixed-pressure phase rule, how many degrees of freedom does it have? (b) You now cool it to a temperature where liquid and solid coexist. How many degrees of freedom now, and what does the drop mean physically?

**P3 (🔴)** For the alloy in P1 ($C_0 = 35$, $C_L = 32$, $C_\alpha = 43$ at this temperature), suppose you have 500 g total. As you cool, the solidus composition eventually reaches $C_0 = 35$. What is $W_\alpha$ at that moment, and what is $C_L$ doing physically? (No new formula needed — think about the geometry.)

<details>
<summary>Solutions</summary>

**P1** With $C_0 = 35$, $C_L = 32$, $C_\alpha = 43$, and total tie-line length $C_\alpha - C_L = 43 - 32 = 11$:

$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L} = \frac{35 - 32}{11} = \frac{3}{11} \approx 0.27,$$
$$W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L} = \frac{43 - 35}{11} = \frac{8}{11} \approx 0.73.$$

*Check.* $0.27 + 0.73 = 1$ ✓. The fulcrum $C_0 = 35$ sits much closer to the liquid end (32) than the solid end (43), so there should be more liquid — and $W_L \approx 0.73 > W_\alpha$ ✓. Consistent with "the phase you have more of is the one the fulcrum sits nearer."

**P2** Binary alloy, $C = 2$, fixed pressure: $P + F = C + 1 = 3$.

(a) Single liquid phase, $P = 1$: $F = 3 - 1 = 2$. You can vary temperature and composition independently and remain a single liquid.

(b) Two phases coexisting, $P = 2$: $F = 3 - 2 = 1$. Only one free variable. Physically: once two phases are present, choosing the temperature *locks* both phase compositions (the tie-line ends) — you no longer get to pick them. The lost degree of freedom is exactly the constraint that liquid and solid must lie on the liquidus and solidus at that temperature.

*Check.* $P + F$ stays $3$ in both cases ✓; more phases means fewer freedoms, as it must.

**P3** When the solidus composition reaches $C_0 = 35$, the fulcrum coincides with the solid end: $C_\alpha = C_0$. Then the "opposite" (liquid-side) arm is the *entire* tie line and the solid-side arm has shrunk to zero:

$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L} = \frac{C_\alpha - C_L}{C_\alpha - C_L} = 1.$$

So the alloy is 100% solid — all 500 g is $\alpha$. Physically this is the **completion of solidification**: the last sliver of liquid has just frozen. At that instant $C_L$ has slid down the liquidus to its final, Cu-richest value (the liquid that remained until the end was the most enriched in the low-melting component), and its mass fraction $W_L$ has gone to zero. Below this temperature you are in the single-phase $\alpha$ field, composition uniformly $C_0 = 35$ (given enough time for diffusion — [2.4](02-04-diffusion-i-ficks-first-law.md)–[2.5](02-05-diffusion-ii-transient-arrhenius.md) — to homogenize it).

*Check.* $W_\alpha = 1$, $W_L = 0$, sum $= 1$ ✓. Mirror image of the top of the lens, where the first solid appears with $W_\alpha = 0$.

</details>

## Flashback

**From Lesson 2.5 (Diffusion II: transient & Arrhenius):** The diffusion coefficient of carbon in $\gamma$-iron follows the Arrhenius law $D = D_0 \exp(-Q_d / RT)$, with $D_0 = 2.3 \times 10^{-5}\ \mathrm{m^2/s}$ and activation energy $Q_d = 148\ \mathrm{kJ/mol}$. Find $D$ at $1000\ ^\circ\mathrm{C}$. (Use $R = 8.314\ \mathrm{J/(mol\,K)}$.)

<details>
<summary>Solution</summary>

Convert temperature to kelvin: $T = 1000 + 273 = 1273\ \mathrm{K}$. The exponent is

$$-\frac{Q_d}{RT} = -\frac{148{,}000}{8.314 \times 1273} = -\frac{148{,}000}{10{,}584} = -13.98.$$

Then

$$D = 2.3 \times 10^{-5} \times e^{-13.98} = 2.3 \times 10^{-5} \times 8.5 \times 10^{-7} \approx 2.0 \times 10^{-11}\ \mathrm{m^2/s}.$$

*Check.* Units: $D_0$ carries $\mathrm{m^2/s}$ and the exponential is dimensionless, so $D$ is in $\mathrm{m^2/s}$ ✓; the exponent $Q_d/(RT)$ is $\mathrm{J\,mol^{-1}}/(\mathrm{J\,mol^{-1}K^{-1}}\cdot\mathrm{K})$, dimensionless ✓. Magnitude sanity: $\sim 10^{-11}\ \mathrm{m^2/s}$ is typical for interstitial carbon diffusion in austenite at this temperature — fast enough that the homogenization assumed in P3 actually happens on a practical timescale. This is why phase-diagram equilibrium is reachable: the tie-line compositions are only meaningful because diffusion can move atoms to them.

</details>

## Connections

- **Backward:** the phase diagram is where diffusion ([2.4](02-04-diffusion-i-ficks-first-law.md)–[2.5](02-05-diffusion-ii-transient-arrhenius.md)) *goes* — equilibrium is the destination, diffusion the vehicle that carries atoms from the alloy's uniform starting composition to the distinct tie-line compositions. Slow cooling gives the diffusion time to keep up and the lever rule holds; fast cooling doesn't, and you trap non-equilibrium structures ([3.3](03-03-transformations-ttt-heat-treatment.md)). The solid solution $\alpha$ itself is the substitutional solution from [2.1](02-01-point-defects-solid-solutions.md).
- **Forward:** [3.2 Eutectics & microstructure](03-02-eutectics-microstructure.md) breaks the friendly isomorphous lens: when two solids *don't* fully dissolve, the diagram grows a eutectic point and multiple two-phase regions — but the tie line and lever rule work identically in each. [3.3](03-03-transformations-ttt-heat-treatment.md) then adds time, turning equilibrium maps into the heat-treatment recipes behind steel.
- **Sideways:** the Gibbs phase rule is a special case of the general thermodynamic phase rule from statistical thermodynamics — the same free-energy-minimization logic that fixes equilibrium in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md). And the lever rule is nothing but a weighted average (center-of-mass) constraint — the identical bookkeeping you use for a mixture's mean anywhere a conserved quantity is split between two pools.
