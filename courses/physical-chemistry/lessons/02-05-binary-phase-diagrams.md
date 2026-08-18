# Physical Chemistry · Lesson 2.5: Binary phase diagrams

> ⏱ ~15 min · Module 2: Phase equilibria, reactions, and solutions · Builds on: [2.3 Ideal solutions: Raoult & Henry](02-03-ideal-solutions-raoult-henry.md), [2.1 Phase stability & one-component diagrams](02-01-phase-stability-one-component-diagrams.md) · Unlocks: [2.6 The chemical equilibrium constant](02-06-chemical-equilibrium-constant.md)

## Why this matters

Every fractionating column in a refinery, every batch of moonshine, every silicon boule pulled for a chip, and the reason you salt an icy road all live on the same picture: a two-component **temperature–composition diagram**. In [2.1](02-01-phase-stability-one-component-diagrams.md) a one-component diagram had a single axis of composition (there wasn't any) and phases met along lines. Add a second component and the phase boundaries fatten into two-phase *regions* — and inside those regions the system doesn't just tell you *which* phases are present, it tells you their exact compositions and how much of each you have. Learning to read that is the single most practical skill in phase equilibria.

## The idea

Mix two liquids A and B and boil them. Pure A boils at one temperature, pure B at another; a mixture boils somewhere in between. But here's the twist that makes the whole subject: **the vapour that comes off is not the same mix as the liquid it left behind.** The more volatile component (say B) is over-represented in the vapour. So boiling a 50/50 liquid gives a vapour that's maybe 70% B — and that is exactly why distillation works. You separate by exploiting the gap between "what's in the pot" and "what's in the steam."

A T–x diagram draws that gap. It has two curves stacked into a lens:

- the **bubble line** (lower) — heat a liquid up to this temperature and the *first bubble* of vapour appears;
- the **dew line** (upper) — cool a vapour down to this temperature and the *first drop* of liquid appears.

Between them is a two-phase region where liquid and vapour coexist. Pick any temperature inside it, draw a **horizontal line** across the lens, and the two curve-crossings hand you the two compositions: liquid on the bubble line, vapour on the dew line. That horizontal line is a **tie line**, and it does double duty — it also tells you *how much* of each phase you have, via a beautiful seesaw argument called the lever rule.

## The formal version

**Tie line.** In a two-phase region, at a fixed temperature $T$ the horizontal line joining the two phase boundaries is the tie line. Its left end (on the bubble curve) gives the liquid mole fraction $x_\text{liq}$; its right end (on the dew curve) gives the vapour mole fraction $x_\text{vap}$; both are mole fractions of the volatile component B. *In words: pick a temperature, slide across until you hit each curve — those crossings are the compositions of the two phases actually present.*

**The lever rule.** Let the overall (total) composition be $z$, sitting somewhere on the tie line between $x_\text{liq}$ and $x_\text{vap}$. Conservation of component B: the B in the whole sample equals the B in each phase added up. With $n_\text{liq}$, $n_\text{vap}$ the moles of each phase and $n=n_\text{liq}+n_\text{vap}$,

$$n\,z = n_\text{liq}\,x_\text{liq} + n_\text{vap}\,x_\text{vap}.$$

Substitute $n=n_\text{liq}+n_\text{vap}$ and gather terms:

$$n_\text{liq}(z-x_\text{liq}) = n_\text{vap}(x_\text{vap}-z).$$

Naming the two tie-line arm lengths $a=z-x_\text{liq}$ (left arm, from the liquid end to $z$) and $b=x_\text{vap}-z$ (right arm, from $z$ to the vapour end):

$$\boxed{\,n_\text{liq}\,a = n_\text{vap}\,b\,}\qquad\Longrightarrow\qquad \frac{n_\text{liq}}{n_\text{vap}}=\frac{b}{a}.$$

*In words: it's a seesaw balanced at the overall composition $z$. Each phase sits at its own composition and its "weight" (moles) times its arm balances the other — so the amount of a phase is proportional to the length of the **opposite** arm.* Slide $z$ toward the vapour end and there's almost no vapour left; slide it toward the liquid end and it's nearly all liquid. (This same lever rule works on *any* two-phase region of *any* phase diagram, including the eutectic diagrams below.)

**Fractional distillation** is just walking this diagram. Boil a liquid at $z$: the vapour is richer in B (its dew-line composition). Condense that vapour — now you have a *new liquid* enriched in B. Boil *that*, and its vapour is richer still. Each boil–condense cycle is one step down-and-over the lens toward pure B; a fractionating column stacks dozens of these steps into one tall tube.

**Azeotropes.** Real mixtures deviate from Raoult's law ([2.3](02-03-ideal-solutions-raoult-henry.md)). Strong **positive** deviation (A and B dislike each other, escape more eagerly) pushes the boiling curve *below* both pure boiling points — a **minimum-boiling azeotrope** (ethanol–water, at ~95.6% ethanol). Strong **negative** deviation gives a **maximum-boiling azeotrope** (nitric acid–water). At the azeotropic composition the bubble and dew curves *touch*: the tie line shrinks to a point, so $x_\text{liq}=x_\text{vap}$. The vapour has the *same* composition as the liquid — there is no gap left to exploit, and distillation stalls dead at that composition. This is why you can't distil past 95.6% ethanol.

**Solid–liquid: eutectic diagrams.** Cool a molten mixture of two solids instead. Now the two curves are **liquidus** lines sloping *down* from each pure melting point; they meet at a V-shaped bottom, the **eutectic point** — the single lowest-melting composition, where liquid freezes directly to a fine mixture of the *two* pure solids at once ($\text{liquid} \rightleftharpoons \text{solid A} + \text{solid B}$). A **cooling curve** (temperature vs. time) shows a *kink* when you first hit a liquidus (one solid starts crystallizing, releasing latent heat and slowing the cooling) and a flat **halt** at the eutectic temperature (everything left solidifies at constant $T$). Solder (Sn–Pb, eutectic ~183 °C, well below either metal's melting point) and the salt–ice freezing-point drop that de-ices roads are eutectic mixtures.

## Picture

![A temperature–composition boiling diagram: grey bubble (liquidus) and dew (vapour) curves forming a lens between the pure boiling points, a blue horizontal tie line at one temperature with blue liquid- and vapour-composition points, and coral lever-rule arms a and b about the overall composition z](assets/02-05-fig1.svg)

The lens sits between pure-A boiling ($T_\mathrm{A}^*$, left) and pure-B boiling ($T_\mathrm{B}^*$, right). At the marked temperature the blue tie line meets the bubble curve at $x_\text{liq}$ and the dew curve at $x_\text{vap}$; the coral arms $a$ and $b$ straddle the overall composition $z$ and set the phase amounts.

## Worked examples

**Example 1 (read the diagram).** In the figure the tie-line temperature meets the bubble line at $x_\text{liq}=0.20$ and the dew line at $x_\text{vap}=0.60$, with an overall composition $z=0.35$. What phases are present, and what are their compositions?

Two phases coexist (we're inside the lens): a **liquid** that is 20% B (80% A) and a **vapour** that is 60% B (40% A). The vapour is richer in B, the more volatile component — exactly the enrichment distillation lives on. The overall $z=0.35$ tells you nothing about *composition* of a phase; it only fixes how the total splits between them (Example / P2).

**Example 2 (a eutectic cooling path — solder).** Take a tin–lead melt that is 40% Sn by the relevant fraction, cooled slowly, with a eutectic at ~62% Sn / 183 °C. Trace it. While fully molten, temperature falls smoothly. When cooling meets the (lead-side) liquidus, solid lead begins to crystallize out — its latent heat slows the descent, so the cooling curve *kinks* to a gentler slope. The remaining liquid, depleted in lead, slides *along* the liquidus toward the eutectic composition. When it reaches 183 °C the liquid is at the eutectic point and freezes wholesale into intergrown solid Sn + solid Pb at constant temperature — a flat **halt** on the cooling curve. Below the halt, everything is solid and cooling resumes. The kink-then-halt signature is how metallurgists *read composition off a thermometer*.

## Watch out

- **You might think the tie-line ends are the amounts of each phase.** They're the **compositions**; the *amounts* come from the lever-rule arm lengths — and the arm is on the **opposite** side, so the phase you have *more* of is the one whose composition is *closer* to $z$ (short near-arm, long far-arm). It's a seesaw, not a direct read.
- **You might read the tie line vertically.** Tie lines are always **horizontal** (constant $T$). The two phases at equilibrium share a temperature, not a composition — a vertical line would connect points at different temperatures, which can't coexist.
- **You might think an azeotrope is a compound.** It isn't — nothing new forms; it's just the composition where the boiling and vapour curves happen to touch so $x_\text{liq}=x_\text{vap}$. Change the pressure and the azeotrope shifts (that's one industrial trick for breaking it).

## One-liner

> A tie line's two ends give the phases' compositions and its two arms give their amounts by the lever rule $n_\text{liq}a=n_\text{vap}b$ — and wherever the tie line shrinks to a point (azeotrope, eutectic), separation by distillation stops.

## Problems

**P1 (🟢)** A benzene–toluene mixture is heated. At 95 °C the bubble line sits at $x_\text{liq}=0.30$ and the dew line at $x_\text{vap}=0.70$ (mole fraction benzene). The overall composition is $z=0.55$. Which phases are present at 95 °C, and what is the composition of each?

**P2 (🟡)** For the same system and point ($x_\text{liq}=0.30$, $x_\text{vap}=0.70$, $z=0.55$), use the lever rule to find the fraction of the total moles that is liquid and the fraction that is vapour.

**P3 (🔴)** A mixture forms a minimum-boiling azeotrope at $x_\text{az}=0.90$ (mole fraction B). You start distilling a liquid that is 70% B. (a) Which direction does the vapour composition move, toward pure B or toward the azeotrope? (b) Explain, using the tie line, why repeated distillation can never take you past 90% B. (c) Where on the T–x diagram does the azeotrope sit?

<details>
<summary>Solutions</summary>

**P1** The overall composition $z=0.55$ lies strictly between $x_\text{liq}=0.30$ and $x_\text{vap}=0.70$, so we're inside the two-phase lens: **liquid and vapour coexist.** Reading the tie-line ends directly, the **liquid is 30% benzene** (70% toluene) and the **vapour is 70% benzene** (30% toluene). The vapour is richer in benzene, the more volatile component. ✓ (Sanity: a phase's composition never depends on how much of it there is — only the ends of the tie line matter.)

**P2** Arms about $z=0.55$:

$$a = z-x_\text{liq} = 0.55-0.30 = 0.25,\qquad b = x_\text{vap}-z = 0.70-0.55 = 0.15.$$

Lever rule $n_\text{liq}\,a=n_\text{vap}\,b$ gives $\dfrac{n_\text{liq}}{n_\text{vap}}=\dfrac{b}{a}=\dfrac{0.15}{0.25}=0.60$. The amount of each phase is the **opposite** arm over the total arm length $a+b=0.40$:

$$f_\text{liq}=\frac{b}{a+b}=\frac{0.15}{0.40}=0.375,\qquad f_\text{vap}=\frac{a}{a+b}=\frac{0.25}{0.40}=0.625.$$

So **37.5% liquid, 62.5% vapour.** ✓ *Check:* the fractions sum to 1, and $z=0.55$ sits nearer the vapour end (0.15 away) than the liquid end (0.25 away), so there should be *more* vapour — and indeed $f_\text{vap}=0.625>f_\text{liq}$. The far-arm rule holds. ✓ (Cross-check by conservation: $0.375(0.30)+0.625(0.70)=0.1125+0.4375=0.55=z$ ✓.)

**P3** (a) The vapour off a boiling liquid is richer in the *more volatile* direction, which for a minimum-boiling azeotrope is *toward the azeotrope*. Starting at 70% B, the vapour is enriched — it moves **toward** the azeotropic composition (toward 90% B), not toward pure B.

(b) Each boil–condense step moves the composition along a tie line toward the azeotrope, and the tie lines get *shorter* as you approach it because the bubble and dew curves are converging. **At the azeotrope the two curves touch, so the tie line has zero length: $x_\text{liq}=x_\text{vap}$.** The vapour then has *exactly the same* composition as the liquid, so boiling produces no further enrichment — there's no gap left to exploit. Distillation stalls at 90% B; you cannot cross it by boiling. (To get past, you must change the game — shift pressure, or add a third component.)

(c) On a minimum-boiling diagram the bubble and dew curves both dip to a shared **minimum** at $x_\text{az}=0.90$; the azeotrope is that lowest-boiling point where the two curves meet tangentially — the bottom of the "V" the lens makes. (A maximum-boiling azeotrope is the mirror image: a shared *maximum*.) ✓

</details>

## Flashback

**From Lesson 2.3 (Ideal solutions: Raoult & Henry):** An ideal benzene–toluene solution is held at a temperature where the pure vapour pressures are $p_\text{benz}^*=96\ \mathrm{kPa}$ and $p_\text{tol}^*=29\ \mathrm{kPa}$. The liquid is 40% benzene by mole fraction. Find the total vapour pressure and the mole fraction of benzene *in the vapour*. (Fresh variant — new numbers.)

<details>
<summary>Solution</summary>

Raoult's law gives each partial pressure as (liquid mole fraction) × (pure vapour pressure):

$$p_\text{benz}=x_\text{benz}\,p_\text{benz}^*=0.40\times96=38.4\ \mathrm{kPa},\qquad p_\text{tol}=x_\text{tol}\,p_\text{tol}^*=0.60\times29=17.4\ \mathrm{kPa}.$$

Total (Dalton): $p=38.4+17.4=55.8\ \mathrm{kPa}$. The vapour mole fraction of benzene is its pressure share:

$$y_\text{benz}=\frac{p_\text{benz}}{p}=\frac{38.4}{55.8}=0.688.$$

So the vapour is **68.8% benzene**, versus 40% in the liquid — the vapour is enriched in the more volatile component (benzene, higher $p^*$). ✓ That enrichment ($y_\text{benz}>x_\text{benz}$) is precisely the horizontal gap between the bubble and dew lines in this lesson's diagram — 2.3's algebra *is* the diagram's geometry.

</details>

## Connections

- **Backward:** the bubble/dew split is [2.3](02-03-ideal-solutions-raoult-henry.md)'s Raoult + Dalton result — vapour richer in the volatile component — replotted as temperature vs. composition; and this whole chapter extends [2.1](02-01-phase-stability-one-component-diagrams.md)'s one-component phase diagram by adding a composition axis, so boundaries become two-phase regions read by tie lines.
- **Forward:** [2.6 The chemical equilibrium constant](02-06-chemical-equilibrium-constant.md) turns from *physical* equilibria (which phase) to *chemical* equilibria (how far a reaction goes) — both governed by minimizing Gibbs energy, the thread running through all of Module 2.
- **Sideways:** the lever rule is pure conservation of the shared component, the same mass-balance bookkeeping behind [colligative properties](02-04-colligative-properties.md) and behind stoichiometric tables in [general chemistry equilibrium](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md); and the eutectic point is the alloy/metallurgy cousin of the azeotrope — both are compositions where a two-phase separation collapses to a single indivisible point.
