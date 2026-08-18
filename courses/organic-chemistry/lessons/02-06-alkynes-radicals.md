# Organic Chemistry · Lesson 2.6: Alkynes & a first look at radicals

> ⏱ ~15 min · Module 2: Reactions I (Substitution, Elimination & Addition) · Builds on: [2.5 Alkenes & electrophilic addition](02-05-alkenes-electrophilic-addition.md), [1.3 Acids & bases (organic)](01-03-acids-bases-organic.md) · Unlocks: [3.1 Aromaticity & Hückel's rule](03-01-aromaticity-huckel.md)

## Why this matters

Alkynes close out addition chemistry with three payoffs at once. First, a terminal alkyne's C–H is acidic enough to rip off — and the anion you get is a **carbon nucleophile that forges new C–C bonds**, your first taste of *building* molecules rather than just interconverting them. Second, adding water to an alkyne hands you a **ketone or an aldehyde**, a controlled route to the carbonyl group that dominates Module 3. Third, alkynes are the doorway to **radicals** — a whole second reaction philosophy where bonds break *evenly* instead of lopsidedly, and where the same reagent (HBr) can be steered to the *opposite* product just by adding peroxide. Ionic chemistry from 2.5 is one lens; radicals are the other.

## The idea

An **alkyne** is two carbons joined by a triple bond: one $\sigma$ bond plus two $\pi$ bonds. Each carbon is $sp$-hybridized — two things attached, arranged **linearly** at $180^\circ$, with a cylinder of $\pi$ electron density wrapped around the axis. A **terminal** alkyne ends in $\ce{-C#CH}$; an **internal** one has carbon on both sides ($\ce{R-C#C-R'}$).

Two big ideas ride on that $sp$ carbon.

**It holds its electrons tightly.** An $sp$ orbital is half s-character (vs. one-quarter for $sp^3$), and s-electrons sit close to the nucleus. So the lone pair left behind when you pluck off a terminal $\equiv$C–H proton is *low-energy and stable* — which means terminal alkynes are, by carbon standards, **acidic** ($\mathrm{p}K_a \approx 25$). Deprotonate one and you get an **acetylide anion**, a lump of nucleophilic carbon that attacks electrophiles and, crucially, alkyl halides — welding a new carbon chain on.

**The double dose of $\pi$ electrons still wants electrophiles.** Alkynes do electrophilic addition just like alkenes (2.5), only they can add *twice*. Add water and something special happens: the first product, an **enol** (an OH stuck on a C=C), is unstable and flips into a **carbonyl** — a C=O — before you can isolate it. That flip is **keto–enol tautomerism**, and it's how alkyne + water becomes a ketone.

Then a change of philosophy. Everything in 2.5 was **heterolytic** — a bond broke with *both* electrons going to one atom, making ions (a curved *full* arrow moves a pair). **Radicals** break bonds **homolytically** — the two electrons split *one each*, leaving unpaired-electron species. We track single electrons with **fishhook (half-barbed) arrows**. Radicals run in self-sustaining **chains**, and the headline result is that HBr + peroxide adds **backwards** relative to ionic HBr.

## The formal version

**Acidity of terminal alkynes.** Removing the terminal proton gives an acetylide:

$$\ce{HC#CH + NaNH2 -> HC#C^- Na+ + NH3}$$

*In words: a strong base (sodium amide, the conjugate base of ammonia, $\mathrm{p}K_a \approx 38$) fully deprotonates acetylene ($\mathrm{p}K_a \approx 25$)* — equilibrium lies far right because you're trading a weaker base for a stronger acid. The acidity ladder $sp\ (\mathrm{p}K_a\,25) > sp^2\ (\sim44) > sp^3\ (\sim50)$ is the **s-character argument from [1.3](01-03-acids-bases-organic.md)**: more s-character holds the anion's lone pair closer to the nucleus, stabilizing the conjugate base. Note $\mathrm{p}K_a\,25$ is still a *feeble* acid — you need a base like $\ce{NH2^-}$, not $\ce{OH-}$, to deprotonate it.

**Acetylide alkylation — a C–C bond.** The acetylide is a carbon nucleophile; it does $\mathrm{S_N2}$ on a primary alkyl halide:

$$\ce{HC#C^- + CH3CH2-Br -> HC#C-CH2CH3 + Br^-}$$

*In words: the carbanion's lone pair attacks the electrophilic carbon of the halide from behind, kicking out bromide — exactly the backside displacement of [2.2](02-02-nucleophilic-substitution-sn2.md).* Restriction: **primary (or methyl) halides only**. Acetylide is also a strong base, so with secondary/tertiary halides it causes E2 elimination instead of substitution. Do it twice (deprotonate, alkylate; repeat) and you grow acetylene into any internal alkyne you like.

**Electrophilic addition (Markovnikov).** Like alkenes, but twice. HX adds following **Markovnikov's rule** (H to the carbon with more H's; halogen to the more substituted carbon, via the more stable vinyl cation):

$$\ce{CH3-C#CH ->[\text{HBr}] CH3-CBr=CH2 ->[\text{HBr}] CH3-CBr2-CH3}$$

*In words: two HBr's pile both bromines onto the same (more substituted) carbon — a geminal dihalide.* ("Geminal" = twins on one carbon.)

**Acid hydration → methyl ketone.** Water adds Markovnikov with a mercury(II) catalyst; the OH lands on the more substituted carbon, giving an enol that tautomerizes to a **ketone**:

$$\ce{CH3-C#CH ->[\text{H2O, H2SO4}][\ce{HgSO4}] [\,CH3-C(OH)=CH2\,] -> CH3-CO-CH3}$$

*In words: terminal alkyne + water (Markovnikov) → enol → **methyl ketone**.* The bracketed enol is never isolated.

**Hydroboration–oxidation → aldehyde.** Boron is the anti-Markovnikov delivery truck (2.5): it puts OH on the *less* substituted (terminal) carbon, giving the *other* enol, which tautomerizes to an **aldehyde**:

$$\ce{CH3CH2-C#CH ->[\text{1) BH3}][\text{2) H2O2, NaOH}] [\,CH3CH2-CH=CH-OH\,] -> CH3CH2CH2-CHO}$$

*In words: a terminal alkyne with hydroboration–oxidation gives the anti-Markovnikov enol → **aldehyde**.* Same alkyne, two hydrations, two different carbonyls — regiochemistry is the whole story.

**Keto–enol tautomerism.** The enol and the carbonyl are **tautomers** — constitutional isomers that differ only by the position of one H and a double bond, in fast equilibrium:

$$\ce{R-C(OH)=CH2 <=> R-CO-CH3}$$

*In words: shift a hydrogen from O to the neighboring C and slide the double bond from C=C onto C=O.* For simple carbonyls the **keto form dominates** (typically $>99.9\%$) because a C=O bond is much stronger than a C=C plus an O–H.

**Radicals: homolysis and the chain.** A bond breaks **homolytically** when each atom keeps one electron, tracked with single-barbed **fishhook arrows**:

$$\ce{X-Y -> X^{.} + Y^{.}}$$

A **radical chain** has three phases:

- **Initiation** — a weak bond is split (heat or light, $h\nu$) to *make* the first radicals: $\ce{RO-OR ->[h\nu] 2\,RO^{.}}$ (peroxide O–O is weak).
- **Propagation** — a radical reacts with a closed-shell molecule to give a product **plus a new radical**, so the chain carries itself. Radicals are consumed and regenerated; net count unchanged.
- **Termination** — two radicals combine into a closed-shell molecule ($\ce{X^{.} + Y^{.} -> X-Y}$), removing radicals and ending the chain.

**Anti-Markovnikov HBr (radical, with peroxides).** With a peroxide initiator, HBr adds to an alkene **opposite** to the ionic case:

$$\ce{CH3CH2-CH=CH2 ->[\text{HBr}][\text{ROOR}] CH3CH2-CH2-CH2Br}$$

Why the flip? The regiochemistry-deciding step is now **Br$^{\bullet}$ adding first** (not H$^+$). Br$^{\bullet}$ attacks the terminal carbon because that leaves the radical on the **more substituted carbon — the more stable radical** (radical stability follows carbocation stability: $3^\circ > 2^\circ > 1^\circ$). *In words: ionic HBr sets regiochemistry by the most stable **cation** and puts Br on the more substituted carbon; radical HBr sets it by the most stable **radical** and puts Br on the less substituted carbon.* Only **HBr** does this — HCl's H–Cl bond is too strong and HI's addition step is endothermic, so the chain stalls for both.

## Picture

![Radical chain mechanism for anti-Markovnikov HBr addition: initiation splits peroxide, propagation has Br radical add to the alkene forming the more stable secondary radical then abstract H from HBr, termination combines two bromine radicals — fishhook arrows in coral](assets/02-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — the two hydrations).** Take propyne, $\ce{CH3-C#CH}$.

*Acid hydration* ($\ce{H2O/H2SO4, HgSO4}$, Markovnikov): OH goes on the more substituted carbon (C2). Enol $\ce{CH3-C(OH)=CH2}$ tautomerizes to the ketone $\ce{CH3-CO-CH3}$ — **acetone (propan-2-one)**, a methyl ketone.

*Hydroboration–oxidation* (anti-Markovnikov): OH goes on the terminal carbon (C1). Enol $\ce{CH3-CH=CH-OH}$ tautomerizes to $\ce{CH3CH2-CHO}$ — **propanal**, an aldehyde.

One alkyne, two reagent sets, a ketone or an aldehyde — chosen entirely by regiochemistry.

**Example 2 (why you'd care — building a chain).** You have only acetylene ($\ce{HC#CH}$) and methyl iodide, and you want **propyne**. Deprotonate, then alkylate:

$$\ce{HC#CH ->[\text{NaNH2}] HC#C^- ->[\text{CH3I}] HC#C-CH3}$$

The acetylide's carbon attacks $\ce{CH3I}$ in an $\mathrm{S_N2}$, forging a new C–C bond and giving propyne. This is the engine of alkyne synthesis: acidity ([1.3](01-03-acids-bases-organic.md)) plus $\mathrm{S_N2}$ ([2.2](02-02-nucleophilic-substitution-sn2.md)) equals a carbon skeleton you built yourself.

## Watch out

- **You might think alkyne hydration gives an alcohol** (like alkene hydration does). It doesn't — the alcohol it *would* give is an **enol**, which immediately tautomerizes to a **carbonyl**. Vinyl alcohols essentially don't exist at equilibrium; you get the C=O.
- **You might reach for a secondary or tertiary halide in an acetylide alkylation.** Don't — acetylide is a strong base, so anything but a primary/methyl halide gives **E2 elimination** instead of the C–C bond you wanted.
- **You might expect "anti-Markovnikov" to be a property of HBr.** It's a property of the **mechanism**: ionic HBr (no peroxide) is Markovnikov; radical HBr (with peroxide) is anti-Markovnikov. Same reagent, opposite product — the peroxide is the switch. And it's HBr *only*.
- **You might draw a full curved arrow in a radical step.** Radicals move **one** electron, so use a **fishhook** (single-barbed) arrow; a double-barbed arrow means a pair and belongs to ionic mechanisms.

## One-liner

> An $sp$ carbon makes terminal alkynes acidic (→ C–C-building acetylides) and lets water become a ketone or aldehyde; and breaking bonds *evenly* opens radical chains, where peroxides flip HBr to add anti-Markovnikov.

## Problems

**P1 (🟢)** Give the major organic product of acid-catalyzed hydration ($\ce{H2O, H2SO4, HgSO4}$) of (a) 1-butyne, $\ce{CH3CH2-C#CH}$, and (b) 2-butyne, $\ce{CH3-C#C-CH3}$. Name the type of carbonyl in each.

**P2 (🟡)** Starting from acetylene ($\ce{HC#CH}$) and any alkyl halides you like, show a synthesis of **2-pentyne** ($\ce{CH3-C#C-CH2CH3}$). Give reagents for each step.

**P3 (🔴)** 1-Butene ($\ce{CH3CH2-CH=CH2}$) reacts with HBr. Give the major product (i) **without** peroxides and (ii) **with** peroxides. For each, name the intermediate whose stability sets the regiochemistry and explain why the two products differ.

<details>
<summary>Solutions</summary>

**P1** Both add water Markovnikov (OH to the more substituted alkyne carbon) → enol → ketone.

(a) 1-Butyne is terminal, so Markovnikov puts OH on C2 (the internal $sp$ carbon): enol $\ce{CH3CH2-C(OH)=CH2}$ tautomerizes to $\ce{CH3CH2-CO-CH3}$ = **butan-2-one**, a **methyl ketone** (terminal alkynes always give methyl ketones under acid hydration).

(b) 2-Butyne is internal and **symmetric** — both carbons are equivalent, so there's no regiochemistry question. Adding water and tautomerizing gives $\ce{CH3-CO-CH2CH3}$ = **butan-2-one** as well, an internal **ketone**. (Internal alkynes give ketones; a symmetric one gives a single ketone, an unsymmetrical one would give a mixture.)

*Note:* both happen to be butan-2-one here, which is a nice check that the atom count is conserved ($\ce{C4H6 + H2O -> C4H8O}$).

**P2** Build 2-pentyne, $\ce{CH3-C#C-CH2CH3}$, by alkylating acetylene on **both** ends. Disconnect it into acetylene + a methyl group + an ethyl group.

$$\ce{HC#CH ->[\text{1) NaNH2}][\text{2) CH3I}] HC#C-CH3 ->[\text{3) NaNH2}][\text{4) CH3CH2Br}] CH3CH2-C#C-CH3}$$

Step by step: (1) $\ce{NaNH2}$ deprotonates acetylene to the acetylide; (2) $\mathrm{S_N2}$ on $\ce{CH3I}$ (a primary/methyl halide) installs the methyl, giving propyne; (3) $\ce{NaNH2}$ deprotonates propyne's remaining terminal C–H; (4) $\mathrm{S_N2}$ on ethyl bromide (primary) installs the ethyl. Product: 2-pentyne. Both alkylating agents are primary/methyl, so $\mathrm{S_N2}$ wins over E2 — required for the C–C bond to form. Each alkylation forges one new C–C bond and adds carbons where you want them.

**P3**

(i) **Without peroxides — ionic, Markovnikov.** H$^+$ adds first to give the more stable **carbocation**. Protonating the terminal carbon gives a **secondary carbocation** $\ce{CH3CH2-CH^+-CH3}$ (more stable than the primary alternative); bromide then attacks there. Product: **2-bromobutane**, $\ce{CH3CH2-CHBr-CH3}$ (Br on the more substituted carbon).

(ii) **With peroxides — radical, anti-Markovnikov.** Now **Br$^{\bullet}$ adds first**. It bonds to the terminal ($\ce{CH2}$) carbon because that leaves the unpaired electron on the internal carbon as a **secondary radical** $\ce{CH3CH2-\overset{.}{C}H-CH2Br}$ (more stable than the primary radical). That radical abstracts H from HBr. Product: **1-bromobutane**, $\ce{CH3CH2CH2-CH2Br}$ (Br on the less substituted carbon).

**Why they differ:** both routes obey the *same* principle — build the most stable reactive intermediate — but the **identity of that intermediate is different**. Ionically, the intermediate is a carbocation and the electrophile that adds first is H$^+$, so H goes to the terminal carbon and Br to the internal one (Markovnikov). In the radical chain, the intermediate is a carbon radical and the species that adds first is Br$^{\bullet}$, so Br goes to the terminal carbon (anti-Markovnikov). The peroxide is the switch that changes *what adds first*, and that reverses where Br ends up.

</details>

## Flashback

**From Lesson 2.5 (Alkenes & electrophilic addition):** Predict the major product of ionic addition of HCl to 2-methylpropene, $\ce{(CH3)2C=CH2}$, and identify the carbocation intermediate. (Fresh variant — a different alkene, no peroxides.)

<details>
<summary>Solution</summary>

Ionic HX addition follows **Markovnikov's rule**: H$^+$ adds to give the more stable carbocation. Protonating the terminal $\ce{=CH2}$ carbon puts the positive charge on the central carbon, which bears two methyl groups — a **tertiary carbocation** $\ce{(CH3)2C^+-CH3}$, far more stable than the primary alternative. Chloride then attacks the cation. Major product: **2-chloro-2-methylpropane** (*tert*-butyl chloride), $\ce{(CH3)3C-Cl}$ — Cl on the more substituted carbon.

*Check:* H went to the carbon that already had more H's, Cl to the more substituted carbon — textbook Markovnikov, driven by the $3^\circ$ carbocation. (Contrast this lesson's radical HBr, which would reverse the regiochemistry — but only HBr, and only with peroxides. HCl has no anti-Markovnikov mode.)

</details>

## Connections

- **Backward:** terminal-alkyne acidity is the **s-character / conjugate-base-stability** argument from [1.3](01-03-acids-bases-organic.md), applied to carbon; acetylide alkylation is the **$\mathrm{S_N2}$** of [2.2](02-02-nucleophilic-substitution-sn2.md); alkyne electrophilic addition and Markovnikov's rule extend the alkene chemistry of [2.5](02-05-alkenes-electrophilic-addition.md); the acetylide-vs-halide "substitution or elimination?" fork is the choice framed in [2.4](02-04-elimination-e1-e2-choosing.md).
- **Forward:** the **carbonyl** you unlock here (ketone/aldehyde via enol) is the star of Module 3 — [3.3 Aldehydes & ketones](03-03-aldehydes-ketones-nucleophilic-addition.md) — and keto–enol tautomerism returns in force as **enol/enolate α-carbon chemistry** in [3.5](03-05-enols-enolates-alpha-carbon.md). Acetylide alkylation is a preview of the **C–C-bond-forming** disconnections you'll plan in [4.4 Retrosynthesis](04-04-retrosynthetic-analysis-multistep-synthesis.md).
- **Sideways:** homolytic bond cleavage and radical chains are the same mechanism physical chemistry treats with bond-dissociation energies and chain kinetics (see the [physical chemistry syllabus](../../physical-chemistry/syllabus.md)); the $sp$ linear geometry is the two-domain shape from general chemistry's [VSEPR/hybridization](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md).
