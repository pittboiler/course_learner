# Organic Chemistry · Lesson 3.5: Enols & enolates — α-carbon chemistry

> ⏱ ~15 min · Module 3: Reactions II (Aromatics, Carbonyls & Functional Groups) · Builds on: [3.3 Aldehydes & ketones, nucleophilic addition](03-03-aldehydes-ketones-nucleophilic-addition.md), [1.2 Resonance, formal charge & delocalization](01-02-resonance-formal-charge-delocalization.md), [1.3 Acids & bases, the organic way](01-03-acids-bases-organic.md) · Unlocks: [3.6 Alcohols, ethers & amines](03-06-alcohols-ethers-amines.md)

## Why this matters

So far the carbonyl has been an electrophile: nucleophiles crash into its electron-poor carbon ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)). But the carbonyl has a second, sneakier trick. The carbon *next door* — the **α-carbon** — becomes acidic enough to lose a proton to a mild base, and what's left behind is a carbon nucleophile. That flips the polarity: the same molecule that was a target now becomes a weapon. This is how nature and the lab **build new carbon–carbon bonds**, the single hardest and most valuable move in synthesis — every extra carbon in a sugar, a steroid, or a drug skeleton traces back to a reaction like this one. It runs entirely on tools you already have: acidity as conjugate-base stability ([1.3](01-03-acids-bases-organic.md)), resonance delocalization ([1.2](01-02-resonance-formal-charge-delocalization.md)), and carbonyl addition ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)).

## The idea

Label the carbons around a carbonyl with Greek letters: the carbon **bearing** the $\ce{C=O}$ is the carbonyl carbon, the one directly attached to it is the **α-carbon**, the next is β, and so on. A hydrogen on the α-carbon is an **α-hydrogen**, and it is the star of this lesson.

An ordinary C–H bond is hopeless as an acid — an alkane has $\mathrm{p}K_a \approx 50$. But an α-C–H sits at $\mathrm{p}K_a \approx 20$ (ketones/aldehydes), a *thirty-order-of-magnitude* jump. Why? Rip off the α-proton and the negative charge that's left on carbon doesn't have to stay on carbon: it slides onto the carbonyl oxygen through the π system. The anion — called an **enolate** — is resonance-stabilized, with the charge parked on electronegative oxygen where it's comfortable. Same logic as [1.3](01-03-acids-bases-organic.md): *a stable conjugate base means an acidic proton.*

There's a quieter cousin too. Even without any base, a tiny fraction of carbonyl molecules shuffle a proton from the α-carbon over to the oxygen, turning $\ce{C=O}$ into $\ce{C=C-OH}$ — an **enol** (ene + ol). The keto and enol forms are **tautomers**: constitutional isomers that interconvert by moving one proton and the double bond. Keto almost always wins (a $\ce{C=O}$ is stronger than a $\ce{C=C}$ plus $\ce{O-H}$), but the enol is the reactive species in some reactions.

Once you have the enolate, its α-carbon is a nucleophile, and you point it at an electrophile. Two classics: hit it with an **alkyl halide** (α-alkylation — a new C–C bond by [SN2](02-02-nucleophilic-substitution-sn2.md)) or hit it with **another carbonyl** (the aldol reaction — a new C–C bond by nucleophilic addition, [3.3](03-03-aldehydes-ketones-nucleophilic-addition.md) in reverse roles).

## The formal version

**The α-carbon and its acidity.** For a carbonyl compound, the α-carbon is any carbon bonded directly to the carbonyl carbon; its hydrogens are α-hydrogens. Deprotonation gives the enolate:

$$\ce{H-\underset{\alpha}{C}-C=O + B- <=> {}^{-}C-C=O + BH}$$

*In words: a base removes an α-hydrogen, leaving a negative charge that the carbonyl helps carry.* The enolate is a resonance hybrid of two structures:

$$\ce{{}^{-}\overset{\alpha}{C}-C=O <-> C=C-O^{-}}$$

*In words: the charge is shared between the α-carbon (carbanion form) and the oxygen (enolate form) — and because oxygen is more electronegative, the second structure is the major contributor, which is exactly why the anion is stable.* Approximate $\mathrm{p}K_a$ landmarks (compare to the ladder in [1.3](01-03-acids-bases-organic.md), where water is $15.7$):

| α-C–H in | $\mathrm{p}K_a$ | why |
|---|---|---|
| aldehyde / ketone | $\sim 20$ | one carbonyl delocalizes the charge |
| ester | $\sim 25$ | ester O already donates into $\ce{C=O}$, so it accepts charge less well |
| 1,3-dicarbonyl (e.g. $\ce{CH2}$ between two $\ce{C=O}$) | $\sim 9\text{–}11$ | **two** carbonyls share the charge |

**Keto–enol tautomerism.** The two forms interconvert, catalyzed by acid or base:

$$\ce{\underset{\text{keto}}{CH3-C(=O)-CH3} <=>[\text{acid or base}] \underset{\text{enol}}{CH3-C(OH)=CH2}}$$

*In words: keto and enol differ only by the location of one H (on α-C vs on O) and one double bond; they are in equilibrium, and for simple carbonyls the keto form dominates (for acetone, enol is ~$10^{-6}$ at equilibrium).*

**The aldol reaction (base-catalyzed).** Full mechanism, in three moves:

1. **Make the enolate.** Base ($\ce{HO-}$) removes an α-H from one carbonyl molecule → enolate.
2. **Add to a second carbonyl.** The enolate's α-carbon attacks the carbonyl carbon of a *second* molecule — ordinary nucleophilic addition ([3.3](03-03-aldehydes-ketones-nucleophilic-addition.md)) — giving an alkoxide, which grabs a proton from water. Product: a **β-hydroxy carbonyl** (the "aldol" = **ald**ehyde + alcoh**ol**). This is the **aldol addition** product.
3. **(Optional) dehydrate.** On heating or with enough base, the aldol loses water (**E1cb**: base removes the new α-H, the resulting enolate ejects $\ce{HO-}$ from the β-carbon) to give an **α,β-unsaturated carbonyl** — an **enone**. This is the **aldol condensation** product (condensation = two pieces join with loss of a small molecule, here $\ce{H2O}$).

The condensation product is **thermodynamically favored** because the new $\ce{C=C}$ is *conjugated* with the $\ce{C=O}$ — the alternating double bonds delocalize π electrons and lower the energy (same conjugation stabilization behind aromaticity in [3.1](03-01-aromaticity-huckel.md)).

## Picture

![The aldol mechanism: hydroxide removes an α-hydrogen from acetaldehyde to give a resonance-stabilized enolate; the enolate α-carbon attacks the carbonyl carbon of a second acetaldehyde forming a new C–C bond and the β-hydroxy aldehyde 3-hydroxybutanal; loss of water then gives the conjugated enone 2-butenal](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — where does the charge go?).** Draw the enolate of **acetaldehyde**, $\ce{CH3CHO}$, and show why it's stabilized. The α-carbon is the $\ce{CH3}$ (attached to the $\ce{C=O}$). Remove one α-H:

$$\ce{CH3-CHO + HO- -> [ {}^{-}CH2-CHO <-> CH2=CH-O^{-} ] + H2O}$$

Left resonance form puts the minus on carbon (a lousy place for negative charge); the right form puts it on oxygen (electronegative, happy). The real ion is the **hybrid**, dominated by the oxygen structure — so the charge mostly lives on O, and that stabilization is what made the α-H acidic ($\mathrm{p}K_a \approx 17$ for acetaldehyde) in the first place. Note the carbonyl-carbon H is *not* an α-H (it's on the carbonyl carbon itself), and it is not removed.

**Example 2 (why you'd care — a new bond).** Take acetone's enolate and give it an alkyl halide, $\ce{CH3I}$. The nucleophilic α-carbon does [SN2](02-02-nucleophilic-substitution-sn2.md) on the methyl carbon, kicking out $\ce{I-}$:

$$\ce{(CH3)2C=O ->[\text{LDA}] CH3-C(=O)-CH2^{-} ->[\ce{CH3I}] CH3-C(=O)-CH2CH3}$$

The product is **butan-2-one** — we grew the carbon skeleton by one carbon at the α-position. (We use a strong, bulky base like LDA here to convert the ketone *fully* to enolate before adding the halide, so the enolate doesn't just deprotonate un-reacted ketone.) This is the everyday way to append a carbon exactly where you want it.

## Watch out

- **You might call any nearby H an "α-H."** Only hydrogens on a carbon *directly bonded to the carbonyl carbon* count. The aldehyde's own $\ce{C-H}$ (on the carbonyl carbon) is not an α-H; a β-hydrogen (two carbons away) is far less acidic. Miscounting α-positions is the #1 aldol error.
- **You might think keto ⇌ enol means they're resonance structures.** They are **tautomers** — different molecules (a real bond and an atom moved), separated by an energy barrier and interconverting via a proton transfer. Resonance structures (like the enolate's two forms) are the *same* molecule with only electrons redrawn. Use $\ce{<=>}$ for tautomers, $\ce{<->}$ for resonance.
- **You might stop at the β-hydroxy carbonyl or over-shoot to the enone.** Mild base / low temperature favors the **addition** product (aldol); heat or excess base drives **dehydration** to the conjugated **enone**. Know which conditions the question gives you.

## One-liner

> The carbonyl acidifies its neighbor: pull the α-H and the leftover charge hides on oxygen (an enolate), turning the α-carbon into a nucleophile that forges new C–C bonds — by SN2 with an alkyl halide, or by addition to another carbonyl (the aldol).

## Problems

**P1 (🟢)** For each compound, identify the α-carbon(s) and count the total α-hydrogens: (a) butanal, $\ce{CH3CH2CH2CHO}$; (b) acetone, $\ce{(CH3)2CO}$; (c) 3-pentanone, $\ce{CH3CH2C(=O)CH2CH3}$. Then draw the enolate of acetone with both resonance structures.

**P2 (🟡)** Cyclopentanone is treated with LDA (to form the enolate), then with $\ce{CH3I}$. Give the product and name the bond-forming step.

**P3 (🔴 — Boss-3 rehearsal)** Give the full base-catalyzed **self-aldol** of acetaldehyde, $\ce{CH3CHO}$: the **aldol addition** product and, after dehydration, the **condensation** product. Name each and identify the C–C bond-forming step.

<details>
<summary>Solutions</summary>

**P1**
- (a) **Butanal** $\ce{CH3CH2CH2CHO}$: the α-carbon is C2, the $\ce{CH2}$ directly attached to the $\ce{CHO}$. It carries **2 α-H**. (The carbonyl's own H and the C3/C4 hydrogens don't count.)
- (b) **Acetone** $\ce{(CH3)2CO}$: **both** methyls are α-carbons (each is bonded to the carbonyl carbon), so **6 α-H** total.
- (c) **3-Pentanone** $\ce{CH3CH2C(=O)CH2CH3}$: the two α-carbons are the two $\ce{CH2}$ groups flanking the $\ce{C=O}$, giving **4 α-H** total (the terminal $\ce{CH3}$ groups are β).

Enolate of acetone (remove one α-H from a methyl):
$$\ce{(CH3)2C=O + HO- -> [ CH3-C(=O)-CH2^{-} <-> CH3-C(O^{-})=CH2 ] + H2O}$$
Carbanion form (charge on C) ↔ enolate form (charge on O); the oxygen form is the major contributor.

**P2** LDA fully deprotonates an α-carbon of cyclopentanone to the ring enolate; the nucleophilic α-carbon then does **SN2** on $\ce{CH3I}$, displacing $\ce{I-}$ and installing a methyl at that α-position. Product: **2-methylcyclopentanone**. The bond-forming step is **α-alkylation via SN2** (a new C–C σ bond between the α-carbon and the methyl).

**P3** *Step 1 — enolate.* $\ce{HO-}$ removes an α-H from acetaldehyde:
$$\ce{CH3CHO + HO- <=> {}^{-}CH2CHO + H2O}$$
*Step 2 — addition (the C–C bond-forming step).* The enolate's α-carbon adds to the carbonyl carbon of a **second** $\ce{CH3CHO}$; the resulting alkoxide takes a proton from water:
$$\ce{{}^{-}CH2CHO + CH3CHO -> CH3-CH(O^{-})-CH2-CHO ->[\ce{H2O}] CH3-CH(OH)-CH2-CHO}$$
Addition product: **3-hydroxybutanal** ($\ce{CH3CH(OH)CH2CHO}$), a β-hydroxy aldehyde. The **C–C bond-forming step is the nucleophilic addition of the enolate to the carbonyl** (the aldol addition step).

*Step 3 — dehydration (condensation).* Base removes the α-H (now α to the aldehyde, between the two carbons), and the enolate expels $\ce{HO-}$ from the β-carbon (**E1cb**), installing a $\ce{C=C}$ conjugated with the $\ce{C=O}$:
$$\ce{CH3CH(OH)CH2CHO ->[\text{-H2O}] CH3-CH=CH-CHO}$$
Condensation product: **2-butenal** (crotonaldehyde), an α,β-unsaturated aldehyde (enone). It's favored because the $\ce{C=C}$ is conjugated with the $\ce{C=O}$.

</details>

## Flashback

**From Lesson 1.3 (Acids & bases, the organic way):** Pentane-2,4-dione (acetylacetone), $\ce{CH3C(=O)CH2C(=O)CH3}$, has a central $\ce{CH2}$ with $\mathrm{p}K_a \approx 9$ — more acidic than acetic acid, and about $10^{11}$ times more acidic than a normal ketone α-H ($\mathrm{p}K_a \approx 20$). Explain why, using conjugate-base stability.

<details>
<summary>Solution</summary>

Ranking acids means ranking the stability of their conjugate bases ([1.3](01-03-acids-bases-organic.md)). Remove a proton from the **central** $\ce{CH2}$ and that carbon is α to **two** carbonyls at once. The resulting anion delocalizes its negative charge onto **both** oxygens — three resonance structures (charge on C, charge on the left O, charge on the right O), with the charge resting on the two electronegative oxygens:
$$\ce{CH3-C(=O)-\overset{-}{C}H-C(=O)-CH3 <-> CH3-C(O^{-})=CH-C(=O)-CH3 <-> CH3-C(=O)-CH=C(O^{-})-CH3}$$
A charge shared over two oxygens is far more stable than one on a single oxygen (a normal enolate), which is far more stable than one stuck on carbon (an alkane). More stable conjugate base ⇒ more acidic proton ⇒ lower $\mathrm{p}K_a$. This is the **R** (resonance) lever from ARIO, doubled — and it's exactly why 1,3-dicarbonyls are the workhorse nucleophiles for α-alkylation: a mild base fully deprotonates them.

</details>

## Connections

- **Backward:** the whole lesson is [1.3](01-03-acids-bases-organic.md)'s "acidity = conjugate-base stability" plus [1.2](01-02-resonance-formal-charge-delocalization.md)'s resonance, applied to an α-C–H; and the aldol addition step is the nucleophilic carbonyl addition of [3.3](03-03-aldehydes-ketones-nucleophilic-addition.md) with an enolate playing the nucleophile. The conjugation that stabilizes the enone echoes the π-delocalization behind aromaticity in [3.1](03-01-aromaticity-huckel.md).
- **Forward:** [3.6](03-06-alcohols-ethers-amines.md) treats the alcohols and related functional groups that aldol products carry, and the enolate chemistry here is the foundation for Boss Problem 3 (multi-step carbonyl synthesis). In [4.4](04-04-retrosynthetic-analysis-multistep-synthesis.md) the aldol becomes a *disconnection*: see an α,β-unsaturated carbonyl or a β-hydroxy carbonyl and cut it back to two simpler carbonyls.
- **Sideways (biochemistry):** the aldol reaction is not just a lab trick — the enzyme **aldolase** runs a reverse aldol in glycolysis to split fructose-1,6-bisphosphate into two three-carbon sugars, and forward aldols build sugars in the Calvin cycle. See the [biochemistry syllabus](../../biochemistry/syllabus.md).
