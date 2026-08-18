# Organic Chemistry I · Lesson 2.5: Alkenes: electrophilic addition

> ⏱ ~15 min · Module 2: Reactions I (Substitution, Elimination & Addition) · Builds on: [2.3 S<sub>N</sub>1 & carbocation rearrangements](02-03-sn1-carbocation-rearrangements.md), [1.1 Bonding, hybridization & molecular shape](01-01-bonding-hybridization-molecular-shape.md) · Unlocks: [2.6 Alkynes & radicals](02-06-alkynes-radicals.md)

## Why this matters

In substitution and elimination the carbon under attack was electron-*poor* — a leaving group had drained it, and a nucleophile moved in. The alkene flips that story. A carbon–carbon double bond is a little pool of loosely held electrons sitting *above and below* the bond axis, exposed and available. So the alkene is the **nucleophile**, and it goes looking for something electron-poor to attack. Master this one idea — π bond as electron donor — and a dozen named reactions (HBr, hydration, bromination, hydroboration) collapse into one mechanism with a single decision point. That decision, **which carbon ends up with what**, is *Markovnikov's rule*, and it's the same carbocation-stability logic you already used for S<sub>N</sub>1 in [2.3](02-03-sn1-carbocation-rearrangements.md), now running forward instead of backward. This lesson feeds directly into Boss Problem 2.

## The idea

Recall from [1.1](01-01-bonding-hybridization-molecular-shape.md) that a double bond is one strong **σ bond** (end-to-end overlap, on the axis) plus one weaker **π bond** (sideways overlap of two $p$ orbitals, electron density in a cloud above and below). The σ bond is buried and unreactive. The π electrons are the loose ones — high in energy, sticking out into space. They are the reactive part.

So picture an alkene meeting $\ce{H-Br}$. The H end of $\ce{H-Br}$ is electron-poor (Br hogs the bonding electrons — it's electronegative). The π cloud reaches out, grabs that proton, and in doing so **spends its two electrons** forming a new C–H bond. But a π bond joined *two* carbons. When those electrons leave to bond the H, the *other* carbon is left one bond short and positively charged: a **carbocation**. Now you have a naked $\ce{Br-}$ and an electron-hungry cation — they snap together, and Br lands on the carbon that got shortchanged.

That's the whole mechanism in three beats: **π attacks the electrophile → carbocation forms → nucleophile adds to the cation.** Everything else is bookkeeping about *which* carbon becomes the cation. And that's not a free choice — the molecule takes the path through the **more stable carbocation**, exactly the $3^\circ > 2^\circ > 1^\circ$ ordering from [2.3](02-03-sn1-carbocation-rearrangements.md) (more alkyl groups donate electron density and stabilize the positive charge). That single preference *is* Markovnikov's rule.

## The formal version

**Markovnikov's rule.** In the addition of a generic $\ce{H-X}$ across an unsymmetrical alkene, the H adds to the double-bond carbon that already bears **more hydrogens**, and X ends up on the carbon that bears **fewer** (the more substituted one).

*In words: "them that has, gets" — H goes where H already is.* The real reason isn't a folk rhyme, it's energy: putting H on the less-substituted carbon leaves the positive charge on the **more-substituted** carbon, which is the more stable carbocation. The regiochemistry is a shadow of cation stability.

**Reaction 1 — Hydrohalogenation ($\ce{HBr}$, $\ce{HCl}$).** Markovnikov addition through an open carbocation:

$$\ce{CH2=CHCH3 + HBr -> CH3CHBrCH3}$$

H to the terminal $\ce{CH2}$, cation on the middle ($2^\circ$) carbon, $\ce{Br-}$ adds there. Because there is a *free* carbocation, it **can rearrange** (hydride/methyl shift) if a more stable cation is one shift away — the same trap as S<sub>N</sub>1.

**Reaction 2 — Acid-catalyzed hydration ($\ce{H2O}/\ce{H2SO4}$).** Identical mechanism, but water is the nucleophile, giving a Markovnikov **alcohol**:

$$\ce{CH2=CHCH3 ->[\text{H2O}][\text{H2SO4}] CH3CH(OH)CH3}$$

$\ce{H+}$ protonates the alkene (Markovnikov, most-stable cation), water attacks the cation, then loses a proton to give $\ce{-OH}$ on the more substituted carbon. Also carbocation-based, so **also rearrangement-prone**.

**Reaction 3 — Halogenation ($\ce{Br2}$).** No free carbocation. The alkene attacks $\ce{Br2}$, and the bromine that gets attacked wraps *back around* both carbons, forming a three-membered ring — a **bromonium ion** — that seals off one face of the molecule:

$$\ce{CH2=CH2 + Br2 -> BrCH2CH2Br}$$

$\ce{Br-}$ (kicked off in the first step) must then attack from the **opposite** face, because the bridge blocks the near face. The two bromines therefore add to **opposite faces**: **anti addition**, giving the *trans* 1,2-dibromide. If you run it in **water**, water (in vast excess) is the nucleophile that opens the bromonium instead of $\ce{Br-}$, and it attacks the **more substituted** carbon (more $\delta+$ character there), giving a **halohydrin**: $\ce{-OH}$ on the more substituted carbon, $\ce{-Br}$ on the other, still anti.

**Reactions 4 — the carbocation-*free* pathways.** Two workhorses deliberately avoid a free cation, which buys you (a) no rearrangements and (b) control over regio/stereochemistry:

- **Hydroboration–oxidation** ($\ce{BH3}$, then $\ce{H2O2}/\ce{OH-}$): boron and hydrogen add across the double bond in **one concerted step** (both to the *same* face → **syn**), with the small, electron-poor boron going to the **less** hindered carbon. Oxidation swaps that boron for $\ce{-OH}$ with retention. Net: **anti-Markovnikov, syn** alcohol, **no rearrangement**.

$$\ce{CH2=CHCH3 ->[\text{1. BH3}][\text{2. H2O2, OH-}] HOCH2CH2CH3}$$

- **Oxymercuration–demercuration** ($\ce{Hg(OAc)2}/\ce{H2O}$, then $\ce{NaBH4}$): a bridged *mercurinium* ion (like the bromonium) means **Markovnikov** $\ce{-OH}$ with **no rearrangement** — the carbocation-free way to get the *same* regiochemistry as acid hydration but without the shifts.

### Summary — regiochemistry and stereochemistry

| Reagent | Adds | Regiochemistry | Stereochemistry | Rearrange? |
|---|---|---|---|---|
| $\ce{HBr}$ / $\ce{HCl}$ | H, X | Markovnikov (X on more subst.) | mixture | **yes** (cation) |
| $\ce{H2O}/\ce{H2SO4}$ | H, OH | Markovnikov OH | mixture | **yes** (cation) |
| $\ce{Br2}$ | Br, Br | — | **anti** (trans) | no (bromonium) |
| $\ce{Br2}/\ce{H2O}$ | OH, Br | Markovnikov OH | anti | no |
| $\ce{BH3}$ then $\ce{H2O2}/\ce{OH-}$ | H, OH | **anti-Markovnikov** OH | **syn** | **no** |
| $\ce{Hg(OAc)2}/\ce{H2O}$ then $\ce{NaBH4}$ | H, OH | Markovnikov OH | — | **no** |

*"Syn" = both groups to the same face; "anti" = to opposite faces.* The two questions to answer for any addition are always the same: **regio** (which carbon gets which group) and **stereo** (same face or opposite).

## Picture

![Top: the Markovnikov HBr mechanism — the pi bond's coral arrow grabs H of H-Br, forming the more-stable secondary carbocation, then bromide adds. Bottom: Br2 addition through a coral bridged bromonium ion, forcing bromide onto the opposite face for anti (trans) product.](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — read off the regiochemistry).** Add $\ce{HBr}$ to **2-methylpropene**, $\ce{(CH3)2C=CH2}$.

The two alkene carbons are very different: the left one bears two methyls (**zero** H's), the right one is $\ce{CH2}$ (**two** H's). Markovnikov says H to the carbon with more H's — the right $\ce{CH2}$. That parks the positive charge on the left carbon, which is now bonded to three carbons: a **tertiary** cation, the most stable option. $\ce{Br-}$ adds there:

$$\ce{(CH3)2C=CH2 + HBr -> (CH3)3CBr}$$

**2-bromo-2-methylpropane** (*tert*-butyl bromide). Notice the "anti-Markovnikov" alternative would have demanded a *primary* cation on the $\ce{CH2}$ end — far higher energy, so it simply doesn't happen.

**Example 2 (why you'd care — dodging a rearrangement).** You want the alcohol $\ce{(CH3)2CHCH2OH}$ (2-methyl-1-propanol) from **2-methylpropene**. Try acid hydration and you're in trouble: it gives the *Markovnikov* alcohol (OH on the tertiary carbon, $\ce{(CH3)3COH}$) — wrong regiochemistry — and any carbocation route risks shifts anyway. The fix is **hydroboration–oxidation**: boron goes to the *less* hindered $\ce{CH2}$ carbon (anti-Markovnikov), no cation ever forms, and oxidation puts $\ce{-OH}$ exactly there:

$$\ce{(CH3)2C=CH2 ->[\text{1. BH3}][\text{2. H2O2, OH-}] (CH3)2CHCH2OH.}$$

Same alkene, opposite regiochemistry, chosen entirely by *which reagent* you reach for. That is the synthetic payoff of knowing the mechanisms rather than memorizing products.

## Watch out

- **You might think Markovnikov is about "H goes to the carbon with more H's," full stop.** That rhyme is a *symptom*. The cause is carbocation stability — H adds wherever it leaves the **more stable cation**. When a reaction has no free cation (bromonium, hydroboration), the rhyme can mislead; reason from the mechanism instead.
- **You might expect $\ce{Br2}$ addition to give a random mix of faces.** It doesn't — the bromonium bridge blocks one face, forcing $\ce{Br-}$ to come from the other. The result is stereospecifically **anti**. "No free carbocation" is exactly what buys you that stereocontrol.
- **You might forget that HBr and hydration can scramble the skeleton.** Any open-carbocation reaction can rearrange ([2.3](02-03-sn1-carbocation-rearrangements.md)'s hydride/methyl shifts) if a more stable cation is one shift away. Hydroboration and oxymercuration cannot — that's their selling point.
- **Anti-Markovnikov ≠ "backwards for no reason."** Hydroboration is anti-Markovnikov because *boron*, not H, is the electrophilic atom that steers the regiochemistry, and it prefers the less crowded carbon. The rule still traces to sterics and electronics, just with a different atom in charge.

## One-liner

> The alkene π bond is the nucleophile — it grabs the electrophile to make the most stable carbocation (Markovnikov), unless a bridged ion (anti) or hydroboration (syn, anti-Markovnikov) rewrites the regio/stereochemistry by skipping the free cation.

## Problems

**P1 (🟢)** Give the Markovnikov product of $\ce{HBr}$ addition to (a) **propene**, $\ce{CH2=CHCH3}$, and (b) **2-methyl-2-butene**, $\ce{(CH3)2C=CHCH3}$. Justify each by naming the carbocation intermediate and its stability class.

**P2 (🟡)** Take **1-methylcyclohexene** (a cyclohexene with a methyl on one double-bond carbon, C1). Predict the major organic product of (a) acid-catalyzed hydration ($\ce{H2O}/\ce{H2SO4}$) and (b) hydroboration–oxidation ($\ce{BH3}$, then $\ce{H2O2}/\ce{OH-}$). State where the $\ce{-OH}$ lands in each and why they differ.

**P3 (🔴, Boss-2 rehearsal)** Add $\ce{HBr}$ to **2-methyl-2-butene**, $\ce{(CH3)2C=CHCH3}$, and *separately* acid-hydrate the same alkene. Give both products by name, and explain what single intermediate they share.

<details>
<summary>Solutions</summary>

**P1**

*(a) Propene.* The carbons are $\ce{CH2}$ (2 H's) and $\ce{CH}$ (1 H, bearing the methyl). Markovnikov: H to the terminal $\ce{CH2}$, leaving the charge on the middle carbon — a **secondary** cation, $\ce{CH3\overset{+}{C}HCH3}$, more stable than the primary alternative. $\ce{Br-}$ adds there:

$$\ce{CH2=CHCH3 + HBr -> CH3CHBrCH3}\quad\textbf{(2-bromopropane).}$$

*(b) 2-methyl-2-butene,* $\ce{(CH3)2C=CHCH3}$. The left carbon (C2) bears two methyls and **no** H; the right carbon (C3) bears one H. Markovnikov: H to C3 (more H's), charge on C2 — bonded to three carbons, a **tertiary** cation (the most stable class). $\ce{Br-}$ adds to C2:

$$\ce{(CH3)2C=CHCH3 + HBr -> (CH3)2CBrCH2CH3}\quad\textbf{(2-bromo-2-methylbutane).}$$

**P2** Number the ring so the double bond is C1=C2, with the methyl on C1. Then **C1 is more substituted** (it carries the methyl and no H), **C2 carries one H**.

*(a) Acid hydration — Markovnikov, cation route.* $\ce{H+}$ adds to C2 (more H's); the positive charge lands on C1, a **tertiary** cation stabilized by the methyl. Water adds to C1, then deprotonates:

$$\textbf{1-methylcyclohexan-1-ol}\ \text{(OH on C1, the ring carbon bearing the methyl).}$$

*(b) Hydroboration–oxidation — anti-Markovnikov, syn, no cation.* Boron (the electrophilic atom) goes to the **less** hindered carbon, **C2**; H goes to C1. No carbocation forms. Oxidation replaces B with $\ce{-OH}$ at C2:

$$\textbf{2-methylcyclohexan-1-ol}\ \text{(OH on C2, next to the methyl).}$$

Because H and (then) OH add to the **same face** (syn) while the methyl sits on C1, the OH and CH₃ end up **trans** — the product is *trans*-2-methylcyclohexanol.

*Why they differ:* hydration builds the most stable **carbocation**, which puts OH on the more-substituted carbon; hydroboration has **no cation**, and boron's own preference for the open carbon flips the regiochemistry to the less-substituted one.

**P3** Both reactions begin identically. $\ce{H+}$ (from $\ce{HBr}$ or from $\ce{H2SO4}$) protonates C3 of $\ce{(CH3)2C=CHCH3}$, generating the **tertiary carbocation at C2**, $\ce{(CH3)2\overset{+}{C}CH2CH3}$ — the same intermediate in both cases. Only the nucleophile that traps it differs:

- With $\ce{HBr}$, $\ce{Br-}$ traps the cation → $\ce{(CH3)2CBrCH2CH3}$, **2-bromo-2-methylbutane**.
- With $\ce{H2O}/\ce{H2SO4}$, water traps it (then loses $\ce{H+}$) → $\ce{(CH3)2C(OH)CH2CH3}$, **2-methyl-2-butanol**.

The shared origin is the reason both products are cleanly Markovnikov: the regiochemistry was *decided* at the cation-forming step, before either nucleophile arrived. (And because it *is* a free tertiary cation, both would tolerate rearrangement — here none is needed, since tertiary is already the best available.)

</details>

## Flashback

**From Lesson 2.3 (carbocation rearrangements):** Predict the major product of adding $\ce{HCl}$ to **3-methyl-1-butene**, $\ce{CH2=CHCH(CH3)CH3}$. (Fresh variant — watch the intermediate before you commit to a product.)

<details>
<summary>Solution</summary>

Protonate the terminal $\ce{CH2}$ (Markovnikov): the charge lands on C2, a **secondary** cation, $\ce{CH3\overset{+}{C}HCH(CH3)CH3}$. But look next door — **C3 is a tertiary carbon** (two methyls plus C2 plus one H). A single **hydride shift** (H moving from C3 to C2) converts the secondary cation into the more stable **tertiary** cation at C3:

$$\ce{CH3CH2\overset{+}{C}(CH3)CH3}.$$

$\ce{Cl-}$ then traps *that* cation, at C3:

$$\ce{CH2=CHCH(CH3)CH3 + HCl -> CH3CH2CCl(CH3)CH3}\quad\textbf{(2-chloro-2-methylbutane)}$$

— **not** the naive 2-chloro-3-methylbutane. The lesson from 2.3 stands: a free carbocation will rearrange whenever a hydride or methyl shift reaches a more stable cation, and electrophilic addition of $\ce{HX}$ makes exactly such a free cation.

</details>

## Connections

- **Backward:** the mechanism *is* [2.3](02-03-sn1-carbocation-rearrangements.md) run forward — same carbocation-stability ranking ($3^\circ>2^\circ>1^\circ$), same rearrangement hazard, only now the cation is *formed* by the π bond rather than *left behind* by a leaving group. The π-vs-σ picture and where reactive electrons live is [1.1](01-01-bonding-hybridization-molecular-shape.md). Addition is also the microscopic reverse of the **elimination** you'll meet in [2.4](02-04-elimination-e1-e2-choosing.md): E1/E2 *make* alkenes, electrophilic addition *consumes* them.
- **Forward:** [2.6](02-06-alkynes-radicals.md) extends every one of these reactions to the triple bond (two additions available) and introduces the **radical** HBr pathway that flips $\ce{HBr}$ to anti-Markovnikov. These regio/stereo tools are also the backbone of the multistep routes in [4.4 retrosynthesis](../../organic-chemistry/syllabus.md), and they feed **Boss Problem 2**.
- **Sideways:** the Markovnikov choice is the same *lowest-energy-intermediate* reasoning as reaction thermodynamics and equilibrium in [general chemistry](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) — the system commits to the pathway through its most stable species, exactly the logic behind Le Chatelier and $K$.
