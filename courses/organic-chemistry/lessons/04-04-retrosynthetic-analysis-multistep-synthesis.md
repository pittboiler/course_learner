# Organic Chemistry · Lesson 4.4: Retrosynthetic analysis & multistep synthesis

> ⏱ ~15 min · Module 4: Structure Determination & Synthesis · Builds on: [2.2 SN2](02-02-nucleophilic-substitution-sn2.md), [2.6 acetylides](02-06-alkynes-radicals.md), [3.3 Grignard addition](03-03-aldehydes-ketones-nucleophilic-addition.md), [3.5 aldol](03-05-enols-enolates-alpha-carbon.md), [3.2 EAS](03-02-electrophilic-aromatic-substitution.md), [3.6 FGI & oxidation](03-06-alcohols-ethers-amines.md) · Unlocks: [4.5 A taste of biomolecules](04-05-taste-of-biomolecules.md)

## Why this matters

You now own a toolbox of bond-forming reactions — Grignard onto a carbonyl, aldol, acetylide alkylation, Friedel–Crafts. The last skill is *planning*: someone hands you a target molecule and asks "how would you build it?" Planning **forward** — staring at cheap starting materials and guessing which reactions chain toward the goal — is a combinatorial nightmare. The trick every synthetic chemist uses is to plan **backward**: start from the target, mentally break it into simpler pieces, and repeat until you hit things you can buy. This is **retrosynthetic analysis**, and it turns synthesis from guesswork into a game with rules.

## The idea

Think of the target as a finished LEGO castle. Instead of asking "which brick do I snap on first?", you ask "if I pulled this castle apart, what are the last two pieces that clicked together — and where's the seam?" Every C–C bond in the molecule is a *potential seam*. If you cut a bond and can name a **real reaction** that would have forged it, you've found a legal disassembly step. Keep cutting until the fragments are things sitting on the shelf.

Two moves make up the whole game:

- **Disconnection** — imagine breaking a bond in the target. The idealized fragments you get are **synthons**: charged idealizations like "a carbanion here, a positive carbon there." Synthons aren't real bottles of reagent; each stands for a **real equivalent** you *do* have. A carbanion synthon $\ce{R^-}$ is really a Grignard, an acetylide, or an enolate. A carbonyl-carbon "cation" synthon is really an aldehyde or ketone.
- **Functional-group interconversion (FGI)** — sometimes the target has the wrong group to disconnect cleanly, so you first *change* a group into a friendlier one. An alkene traces back to an alcohol (hydration run backward); an alcohol traces back to a ketone (reduction run backward). FGI doesn't build the carbon skeleton — it sets up the next disconnection.

The bookkeeping symbol is the **retrosynthetic arrow** $\Rightarrow$ (an open, double-lined arrow), read **"is made from."** It points from complicated to simple — the opposite direction of a normal reaction arrow.

## The formal version

**Target ⇒ precursors.** Writing $\text{Target} \Rightarrow A + B$ means "$A$ and $B$, combined by some known reaction, give the target." *In words: the arrow is a promissory note that a real forward step exists.* You are only allowed to draw it if you can name that step.

**Where to cut: at C–C bonds next to a functional group.** Your bond-forming reactions all stitch a new C–C bond *right beside* a functional group, because that's where the reactivity lives:

| Disconnect the bond… | Carbanion equivalent | Electrophile | Forward reaction |
|---|---|---|---|
| C–C next to $\ce{-OH}$ | Grignard $\ce{RMgX}$ / acetylide $\ce{RC#C^-}$ | aldehyde or ketone | nucleophilic addition ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md), [2.6](02-06-alkynes-radicals.md)) |
| C–Cα of a carbonyl (a β-hydroxy carbonyl) | enolate | aldehyde/ketone | aldol ([3.5](03-05-enols-enolates-alpha-carbon.md)) |
| aryl–C (to a ketone or alkyl) | — | acyl chloride / alkyl halide | Friedel–Crafts ([3.2](03-02-electrophilic-aromatic-substitution.md)) |
| C–C at a primary center | nucleophile ($\ce{CN^-}$, acetylide) | primary alkyl halide | SN2 ([2.2](02-02-nucleophilic-substitution-sn2.md)) |

*In words: a disconnection is only "legal" if the row exists — if a real reaction re-makes that exact bond and those exact groups.*

**The alcohol disconnection (your workhorse).** A carbinol carbon (the C bearing $\ce{-OH}$) came from a nucleophile adding to a carbonyl. So cut a C–C bond *at the carbinol carbon*:

$$\underset{\text{alcohol}}{\ce{R-CH(OH)-R'}} \;\Rightarrow\; \underset{\text{carbonyl}}{\ce{R-CHO}} \;+\; \underset{\text{synthon}}{\ce{R'^-}} \;\;(\equiv \ce{R'MgBr})$$

*In words: every alcohol is one Grignard step away from an aldehyde or ketone.* A **secondary** alcohol comes from an **aldehyde** + Grignard; a **tertiary** alcohol comes from a **ketone** + Grignard. That single rule solves a huge fraction of synthesis problems.

**FGI to enable a disconnection.** If a target is, say, an alkene with no obvious C–C seam, walk the functional group backward until a disconnection appears:

$$\ce{alkene} \xLeftarrow{\text{FGI}} \ce{alcohol} \xLeftarrow{\text{FGI}} \ce{ketone} \;\Rightarrow\; \ce{carbonyl + R^-}$$

*In words: change the group, don't build carbons, until the skeleton can be split.*

**Protecting groups.** Sometimes a needed reagent would attack a group already in the molecule. A Grignard is a ferocious base and nucleophile — it destroys $\ce{-OH}$, $\ce{-NH}$, and it adds to any $\ce{C=O}$ nearby. If your target (or intermediate) carries such a group, you **temporarily mask** it, run the sensitive step, then **unmask** it. The classic mask for a ketone/aldehyde is an **acetal** (from [3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)): react the carbonyl with a diol (e.g. ethylene glycol, acid catalyst) to make a **1,3-dioxolane**, which is inert to base and Grignards; afterward, aqueous acid ($\ce{H3O+}$) hydrolyzes it straight back to the carbonyl.

$$\ce{C=O ->[\text{HOCH2CH2OH, H+}][-H2O] acetal ->[\text{run Grignard}] \cdots ->[\text{H3O+}] C=O}$$

*In words: put a helmet on the ketone, do the dangerous step, take the helmet off.* (The forward acetal step is driven by removing water — the same Le Chatelier logic from general chemistry's [equilibrium lesson](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md).)

## Picture

![Retrosynthetic tree: 2-phenyl-2-butanol at top with the strategic C–C bond in coral; a retrosynthetic double arrow labeled "is made from" points down to acetophenone plus an ethyl carbanion synthon and its Grignard equivalent, and a forward recipe runs left to right.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (the Grignard workhorse — retro then forward).** Target: **2-phenyl-2-butanol**, $\ce{C6H5-C(OH)(CH3)-CH2CH3}$ — a *tertiary* alcohol.

*Retro.* The carbinol carbon has three C–C bonds; cut any one for a valid plan. Take the coral bond to the ethyl group:

$$\ce{C6H5-C(OH)(CH3)-CH2CH3} \;\Rightarrow\; \underset{\text{acetophenone}}{\ce{C6H5-CO-CH3}} \;+\; \ce{CH3CH2^-}\;(\equiv \ce{CH3CH2MgBr})$$

A tertiary alcohol from a **ketone** + Grignard — exactly the rule. (Two other legal plans exist: cut the phenyl bond → butan-2-one + $\ce{C6H5MgBr}$; cut the methyl → propiophenone + $\ce{CH3MgBr}$. All three are "correct"; you'd pick by which pieces are cheapest.)

*Forward.* Read the arrow backward and supply reagents in order:

$$\ce{C6H5COCH3 ->[\text{1) CH3CH2MgBr, Et2O}][\text{2) H3O+}] C6H5{-}C(OH)(CH3){-}CH2CH3}$$

The ethyl carbanion adds to the carbonyl carbon; acidic workup protonates the resulting alkoxide. Done in one operation.

**Example 2 (FGI + aldol — a two-bond build).** Target: **butane-1,3-diol**, $\ce{CH3-CH(OH)-CH2-CH2OH}$.

*Retro.* Two $\ce{-OH}$ groups in a 1,3 relationship is the fingerprint of an **aldol followed by reduction**. First an FGI: oxidize the primary alcohol back to an aldehyde to expose a β-hydroxy carbonyl.

$$\ce{CH3CH(OH)CH2CH2OH} \xLeftarrow{\text{FGI}} \underset{\text{3-hydroxybutanal}}{\ce{CH3CH(OH)CH2CHO}} \;\Rightarrow\; \ce{2\, CH3CHO}$$

The β-hydroxy aldehyde disconnects at the Cα–Cβ bond into **two acetaldehyde** molecules — the aldol seam.

*Forward.* Build the bond, then undo the FGI (reduce):

$$\ce{2\, CH3CHO ->[\text{NaOH}] CH3CH(OH)CH2CHO ->[\text{NaBH4}] CH3CH(OH)CH2CH2OH}$$

Base makes the enolate of one acetaldehyde, which adds to the carbonyl of the other (aldol, [3.5](03-05-enols-enolates-alpha-carbon.md)); $\ce{NaBH4}$ then reduces the remaining aldehyde to the second alcohol. Two course reactions, in order.

## Watch out

- **You might disconnect a random bond in the middle of a chain.** But there's no reaction that welds two plain alkyl carbons with nothing nearby. Disconnect **only** at a bond adjacent to a functional group, where a real reaction lives. If no row in the table fits, do an FGI first.
- **You might forget a synthon is not a reagent.** "$\ce{CH3^-}$" is a bookkeeping fiction; you can't order a bottle of naked methyl anion. Always translate the synthon to its equivalent ($\ce{CH3MgBr}$, $\ce{CH3Li}$, acetylide, enolate) before writing the forward step.
- **You might run a Grignard on a molecule that already has an $\ce{-OH}$, $\ce{C=O}$, or $\ce{N-H}$.** It will self-destruct — the Grignard is quenched by the acidic proton or hijacked by the other carbonyl. Spot the incompatibility *before* it bites, and protect (or reorder the steps so the sensitive group is installed last).
- **You might reduce and count it as building carbons.** FGI changes groups, never the skeleton. Each *disconnection* must add a C–C bond via a real reaction — count them, and make sure every step is a reaction from this course.

## One-liner

> To build a molecule, take it apart on paper: cut each C–C bond only where a real reaction (Grignard, aldol, Friedel–Crafts, SN2) could re-forge it, FGI your way to a legal cut when needed, and protect any group your reagents would eat.

## Problems

**P1 (🟢)** Give a one-disconnection retrosynthesis of **1-phenyl-1-propanol**, $\ce{C6H5-CH(OH)-CH2CH3}$. Identify a carbonyl compound + Grignard reagent that combine to make it, and write the forward reaction with reagents.

**P2 (🟡)** Starting from **benzene** (and any two-carbon reagents you like), propose a forward synthesis of **1-phenylethanol**, $\ce{C6H5-CH(OH)-CH3}$, using 2–3 course reactions in order. Explain why you can't simply attach the $\ce{-OH}$-bearing group to benzene directly.

**P3 (🔴)** Target: **5-hydroxy-5-phenylpentan-2-one**, $\ce{CH3-CO-CH2CH2-CH(OH)-C6H5}$ — it contains *both* a ketone and a secondary alcohol. Plan a synthesis whose key step forms the C–C bond at the carbinol carbon. Show where a protecting group is required and why, then give the full retro analysis and the ordered forward sequence starting from **4-bromobutan-2-one** ($\ce{BrCH2CH2COCH3}$) and **benzaldehyde**.

<details>
<summary>Solutions</summary>

**P1** The carbinol carbon bears H, OH, phenyl, and ethyl — a **secondary** alcohol, so it comes from an **aldehyde** + Grignard. Cut a C–C bond at the carbinol carbon. Two legal cuts:

- Cut the ethyl bond: $\ce{C6H5-CH(OH)-CH2CH3} \Rightarrow \ce{C6H5CHO} + \ce{CH3CH2^-}\ (\equiv \ce{CH3CH2MgBr})$ — **benzaldehyde + ethylmagnesium bromide**.
- Cut the phenyl bond: $\Rightarrow \ce{CH3CH2CHO} + \ce{C6H5^-}\ (\equiv \ce{C6H5MgBr})$ — **propanal + phenylmagnesium bromide**.

Either is fine. Forward (first option):

$$\ce{C6H5CHO ->[\text{1) CH3CH2MgBr, Et2O}][\text{2) H3O+}] C6H5CH(OH)CH2CH3}$$

The ethyl carbanion adds to the aldehyde carbonyl; $\ce{H3O+}$ protonates the alkoxide to the alcohol. ✓

**P2** You can't put the $\ce{-CH(OH)CH3}$ group onto benzene in one shot: there's no electrophilic aromatic substitution that installs a carbinol directly, and Friedel–Crafts **alkylation** with a 2-carbon halide would risk carbocation rearrangement and polyalkylation. The clean route installs a **carbonyl** by Friedel–Crafts **acylation** (no rearrangement, and the deactivated ketone product stops at monoacylation), then reduces it:

$$\ce{C6H6 ->[\text{CH3COCl, AlCl3}] C6H5COCH3 ->[\text{NaBH4}] C6H5CH(OH)CH3}$$

1. **EAS acylation** ([3.2](03-02-electrophilic-aromatic-substitution.md)): acetyl chloride + $\ce{AlCl3}$ gives the acylium electrophile → **acetophenone**.
2. **FGI reduction** ([3.6](03-06-alcohols-ethers-amines.md)): $\ce{NaBH4}$ reduces the ketone to the secondary alcohol, **1-phenylethanol**.

(Equivalent alternative: benzaldehyde + $\ce{CH3MgBr}$, then $\ce{H3O+}$ — the P1-style disconnection.) ✓

**P3** *Spotting the problem.* Disconnect at the carbinol carbon (the secondary alcohol ⇒ aldehyde + Grignard):

$$\ce{CH3COCH2CH2-CH(OH)-C6H5} \;\Rightarrow\; \underset{\text{benzaldehyde}}{\ce{C6H5CHO}} \;+\; \underset{\text{synthon}}{\ce{^-CH2CH2COCH3}}$$

The carbanion equivalent would be the Grignard $\ce{BrMgCH2CH2COCH3}$ — **but that molecule contains a ketone**, and a Grignard cannot coexist with a $\ce{C=O}$: it would attack its own (or a neighbor's) carbonyl. So the ketone must be **protected** before the Grignard is formed.

*Forward plan.*

1. **Protect the ketone as an acetal** ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)): treat 4-bromobutan-2-one with ethylene glycol and acid (TsOH), removing water → the 1,3-dioxolane $\ce{BrCH2CH2C(OCH2CH2O)CH3}$. The C=O is now a helmeted, unreactive acetal; the C–Br is untouched.
2. **Form the Grignard**: Mg in dry ether → $\ce{BrMgCH2CH2C(OCH2CH2O)CH3}$. Safe, because there's no exposed carbonyl to self-quench.
3. **Add benzaldehyde**: the carbanion adds to $\ce{C6H5CHO}$, giving the magnesium alkoxide of the target skeleton (acetal still on).
4. **Aqueous acid workup ($\ce{H3O+}$)**: one step both protonates the alkoxide to the alcohol **and** hydrolyzes the acetal back to the ketone → **5-hydroxy-5-phenylpentan-2-one**.

$$\ce{BrCH2CH2COCH3 ->[\text{HOCH2CH2OH, H+}][-H2O] BrCH2CH2C(OCH2CH2O)CH3 ->[\text{Mg}] RMgBr}$$
$$\ce{RMgBr ->[\text{1) C6H5CHO}][\text{2) H3O+}] CH3COCH2CH2CH(OH)C6H5}$$

The protecting group let a Grignard survive inside a molecule that already owned a ketone — mask, react, unmask. ✓

</details>

## Flashback

**From Lesson 3.2 (Electrophilic aromatic substitution):** Anisole (methoxybenzene, $\ce{C6H5OCH3}$) is treated with $\ce{Br2}$. At which ring position(s) does bromination occur, and is the ring more or less reactive than benzene? Explain in one line.

<details>
<summary>Solution</summary>

The methoxy group has lone pairs that donate into the ring by resonance, so it is a **strong activator** and an **ortho/para director**. Bromination is therefore **faster than benzene** (no $\ce{FeBr3}$ catalyst needed) and goes to the **ortho and para** positions, with **para** as the major product because the ortho sites are sterically crowded by the $\ce{-OCH3}$ group. The controlling idea: the substituent's electron donation stabilizes the arenium-ion intermediate best when the incoming electrophile lands ortho or para to it. ✓

</details>

## Connections

- **Backward:** every disconnection cashes out to a reaction you already learned — Grignard/carbonyl addition ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)), aldol ([3.5](03-05-enols-enolates-alpha-carbon.md)), Friedel–Crafts ([3.2](03-02-electrophilic-aromatic-substitution.md)), acetylide/SN2 alkylation ([2.6](02-06-alkynes-radicals.md), [2.2](02-02-nucleophilic-substitution-sn2.md)), and the FGI oxidations/reductions of [3.6](03-06-alcohols-ethers-amines.md). Retrosynthesis is the *index* to the whole reaction toolbox. The acetal protecting group is the reversible carbonyl addition of [3.3](03-03-aldehydes-ketones-nucleophilic-addition.md), driven by Le Chatelier water removal ([gen-chem equilibrium](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md)).
- **Forward:** [4.5 A taste of biomolecules](04-05-taste-of-biomolecules.md) uses the same C–C-disconnection thinking to see sugars, amino acids, and polymers as assembled from small carbonyl and amine building blocks — nature's own retrosynthesis.
- **Sideways:** the "plan backward from the goal" strategy is exactly **dynamic programming / backward induction** in optimization and economics — solve the last step first, then chain the sub-solutions. Same logic, different molecules.
