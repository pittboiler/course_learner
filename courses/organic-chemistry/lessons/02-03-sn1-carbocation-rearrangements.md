# Organic Chemistry · Lesson 2.3: SN1 & carbocation rearrangements

> ⏱ ~15 min · Module 2: Reactions I (Substitution, Elimination & Addition) · Builds on: [2.2 Nucleophilic substitution (SN2)](02-02-nucleophilic-substitution-sn2.md) · Unlocks: [2.4 Elimination (E1/E2)](02-04-elimination-e1-e2-choosing.md)

## Why this matters

In [2.2](02-02-nucleophilic-substitution-sn2.md) the nucleophile and the leaving group did their business in one concerted shove — great for methyl and primary carbons, hopeless for crowded tertiary ones. Nature's other option is to let the leaving group quit *first*, generating a naked, electron-hungry carbon called a **carbocation**, and only then bring in the nucleophile. This is the **SN1** pathway, and it is the gateway drug of organic chemistry: the same carbocation intermediate powers eliminations ([2.4](02-04-elimination-e1-e2-choosing.md)), alkene additions ([2.5](02-05-alkenes-electrophilic-addition.md)), and a signature party trick — **rearrangement**, where the carbon skeleton reshuffles itself mid-reaction. Spotting a scrambled product is how you *prove* a carbocation was there.

## The idea

Picture a tertiary alkyl halide too hemmed in for a backside attack. Instead of waiting for a nucleophile it can't fit, the C–LG bond simply *breaks on its own*: the leaving group strolls off with both bonding electrons, leaving behind a carbon with only three bonds and a positive charge — a carbocation. Pulling that bond apart is hard and slow (you're making two charged fragments from a neutral molecule), so **this first step sets the pace of the whole reaction**. Once the cation exists, the second step is trivial: any nucleophile floating nearby slams into the electron-poor carbon, fast.

Two consequences fall straight out of this "break first, attack later" order. First, the **rate can't depend on the nucleophile** — the nucleophile shows up only *after* the slow step is over, so adding more of it does nothing. Second, the cation is **flat**: its three remaining bonds spread into a trigonal plane, leaving an empty $p$ orbital sticking out both faces. A nucleophile can attack either face with equal ease, so a single-handed (chiral) starting material gives back a **50:50 mix of both handednesses** — the stereochemistry is scrambled. And because the intermediate is a real, free species with a lifetime, it can do something SN2 never could: if a quick shuffle of a neighboring atom would make a *more stable* cation, it takes it.

## The formal version

**SN1 = Substitution, Nucleophilic, Unimolecular.** Two elementary steps:

$$\ce{R3C-LG ->[\text{slow, RDS}] R3C+ + LG-} \qquad\text{(1) ionization}$$
$$\ce{R3C+ + Nu- ->[\text{fast}] R3C-Nu} \qquad\text{(2) capture}$$

*In words: the leaving group departs on its own to make a carbocation (the hard, rate-setting step), then the nucleophile grabs the cation.* "Unimolecular" refers to the **rate-determining step (RDS)** — the slow one — which involves only the substrate. Hence the rate law:

$$\text{rate} = k[\text{substrate}].$$

*In words: first order overall, and completely independent of $[\text{Nu}]$* — doubling the nucleophile does not speed it up, because the nucleophile isn't in the RDS. (Contrast [2.2](02-02-nucleophilic-substitution-sn2.md): SN2 is $\text{rate}=k[\text{substrate}][\text{Nu}]$, second order.)

**Carbocation stability** decides *whether* a substrate takes this path at all, because the RDS builds a cation:

$$\underbrace{\ce{R3C+}}_{3^\circ} \;>\; \underbrace{\ce{R2CH+}}_{2^\circ} \;>\; \underbrace{\ce{RCH2+}}_{1^\circ} \;>\; \underbrace{\ce{CH3+}}_{\text{methyl}}$$

Two effects, both feeding electron density into the empty orbital to soften the positive charge:

- **Inductive donation:** alkyl groups are mildly electron-releasing through their $\sigma$ bonds; more alkyls attached = more charge spread out.
- **Hyperconjugation:** adjacent C–H (and C–C) bonds overlap with the empty $p$ orbital, donating their bonding electrons a little. More neighboring C–H bonds = more stabilization — and a tertiary cation has the most.

*In words: the more alkyl groups touching the positive carbon, the happier it is.* Two special cases beat even $3^\circ$: **allylic** ($\ce{CH2=CH-CH2+}$) and **benzylic** cations, where the empty orbital is stabilized by full-blown **resonance** — the charge delocalizes onto neighboring $\pi$ systems (this is the delocalization idea from [1.2](01-02-resonance-formal-charge-delocalization.md), now paying rent). A resonance-stabilized cation is excellent even when it's only primary.

**Stereochemistry — racemization.** The planar $sp^2$ cation is attacked from both faces at ~equal rates, so a substrate with one stereocenter yields a near-**racemic** ($\approx 50{:}50$) product. (In practice you often see a *slight* excess of inversion, because the departing LG briefly shields the face it left from — but treat the textbook answer as full racemization.)

**Substrate & conditions — the mirror image of SN2.** Everything SN2 hated, SN1 loves:

| | favors SN2 | favors SN1 |
|---|---|---|
| substrate | methyl, $1^\circ$ | $3^\circ$, allylic, benzylic |
| nucleophile | strong (e.g. $\ce{OH-}$, $\ce{CN-}$) | weak is fine (even the solvent) |
| solvent | polar aprotic | **polar protic** |

Polar protic solvents (water, alcohols, carboxylic acids) have O–H or N–H bonds that **solvate and stabilize the carbocation and the leaving anion**, lowering the ionization barrier. When the solvent itself is the nucleophile, the reaction is called **solvolysis** ("bond-breaking by solvent") — the workhorse SN1 experiment.

**Rearrangement — the smoking gun.** A carbocation will reshuffle if doing so yields a *more stable* cation. A **1,2-hydride shift** moves an H (with its bonding electron pair) from an adjacent carbon onto the cationic carbon; a **1,2-methyl (alkyl) shift** moves a whole methyl the same way. The charge lands on the carbon the migrating group *left*.

$$\ce{R2CH{-}CR2+ ->[\text{1,2-H shift}] R2C+{-}CHR2}$$

*In words: an adjacent H (or alkyl) hops over with its two electrons, carrying the positive charge to where it started* — always in the direction $2^\circ \to 3^\circ$ (or toward allylic/benzylic). A rearranged product is unmistakable evidence a free carbocation lived long enough to reorganize; SN2 can never do this.

## Picture

![Top: SN1 two-step mechanism — R3C–LG ionizes (slow) to a flat carbocation with an empty p orbital, then a nucleophile attacks from both faces to give a 50:50 racemic pair. Bottom: reaction-coordinate diagram with two barriers, the first (rate-determining) taller, and a high carbocation valley between them.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — why $3^\circ$ ionizes and CH3 won't).** Compare $\ce{(CH3)3C-Br}$ (*tert*-butyl bromide, $3^\circ$) with $\ce{CH3-Br}$ under solvolysis in water. *Tert*-butyl bromide ionizes readily: the resulting $\ce{(CH3)3C+}$ has three methyls donating inductively and nine adjacent C–H bonds hyperconjugating — a comfortable cation, so the water (a weak nucleophile) captures it to give *tert*-butanol at a healthy rate, with the rate untouched by how much water is nucleophilic vs. just solvent. Methyl bromide, by contrast, would have to form $\ce{CH3+}$ — no alkyl groups, no stabilization — an energy so prohibitive it simply never happens; $\ce{CH3-Br}$ reacts only by SN2. This is the whole selectivity rule: **SN1 needs a stable cation, so it climbs $\text{methyl} \to 1^\circ \to 2^\circ \to 3^\circ$**, exactly opposite to SN2's steric preference.

**Example 2 (why you'd care — reading a scrambled product).** Suppose neopentyl-type substrate $\ce{(CH3)3C-CH2-Br}$ is solvolyzed. A naive guess: substitute Br with OH at the same carbon. But the product's skeleton has *moved* — you isolate a rearranged tertiary alcohol. What happened? Ionization would give the primary cation $\ce{(CH3)3C-CH2+}$ (dreadful), so before a nucleophile can blink, a **methyl from the neighboring quaternary carbon migrates** (1,2-methyl shift), converting the $1^\circ$ cation into a far more stable $3^\circ$ cation $\ce{(CH3)2C+{-}CH2CH3}$. Water then traps *that*. The lesson: when the product skeleton doesn't match the starting skeleton, a carbocation rearranged — and the migration always ran "uphill in stability," $1^\circ/2^\circ \to 3^\circ$.

## Watch out

- **You might think adding more nucleophile speeds up an SN1 reaction.** It doesn't — the nucleophile enters *after* the rate-determining ionization, so $\text{rate}=k[\text{substrate}]$ has no $[\text{Nu}]$ term. (That's the experimental fingerprint that distinguishes SN1 from SN2.)
- **You might expect clean inversion like SN2.** SN1 goes through a *flat* cation attacked from both faces, so a chiral substrate racemizes. If your answer for an SN1 on a stereocenter is a single enantiomer, it's wrong.
- **You might forget that the migrating group takes its electrons.** A 1,2-shift moves a *bonding pair* along with the H or methyl — that's why the charge relocates. It is not the bare cation hopping; it's the neighbor sliding over to *feed* the cation and inherit the charge.
- **You might try to rearrange when there's no payoff.** Cations only shift toward *greater* stability. A $3^\circ$ cation with no better neighbor sits still; a $2^\circ$ next to a spot that would be $3^\circ$ rearranges.

## One-liner

> SN1 breaks the C–LG bond first — slow, rate = $k[\text{substrate}]$ — making a flat carbocation that racemizes on capture and rearranges ($2^\circ\to3^\circ$) whenever a 1,2-shift buys more stability.

## Problems

**P1 (🟢)** (a) Rank these carbocations from *least* to *most* stable: $\ce{CH3+}$ (methyl), $\ce{CH3CH2+}$ ($1^\circ$), $\ce{(CH3)2CH+}$ ($2^\circ$), $\ce{(CH3)3C+}$ ($3^\circ$), and the benzylic cation $\ce{C6H5CH2+}$. (b) Rank these substrates by relative SN1 (solvolysis) rate: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane, and benzyl bromide.

**P2 (🟡)** Optically active (R)-1-bromo-1-phenylethane, $\ce{C6H5CHBrCH3}$, is stirred in aqueous acetone (a polar protic-ish, weakly nucleophilic medium). Predict the organic product and its stereochemistry, and justify the mechanism (which pathway, and why *this* substrate).

**P3 (🔴)** 3-bromo-2,2-dimethylbutane, $\ce{CH3{-}C(CH3)2{-}CHBr{-}CH3}$, undergoes solvolysis in water. The major product is *not* the direct substitution product. (a) Draw the initial carbocation and explain why it rearranges. (b) Give the 1,2-shift (which group moves, and draw the shift arrow in words), the rearranged cation, and the major alcohol product with its name.

<details>
<summary>Solutions</summary>

**P1** (a) Stability tracks the number of electron-donating alkyl groups / resonance on the cationic carbon:

$$\ce{CH3+} \;<\; \ce{CH3CH2+}\ (1^\circ) \;<\; \ce{(CH3)2CH+}\ (2^\circ) \;<\; \ce{(CH3)3C+}\ (3^\circ) \;\lesssim\; \ce{C6H5CH2+}\ (\text{benzylic}).$$

Methyl has nothing to donate; each added alkyl adds inductive + hyperconjugative stabilization ($1^\circ<2^\circ<3^\circ$). The benzylic cation is only "primary" by substitution count but is **resonance-delocalized** into the ring (the positive charge spreads over the ortho/para ring carbons), making it at least as stable as tertiary — an excellent SN1 substrate.

(b) SN1 rate follows cation stability, so rank by the cation each would form:

$$\underbrace{\text{1-bromobutane}}_{\text{forms }1^\circ,\ \text{slowest}} \;<\; \underbrace{\text{2-bromobutane}}_{2^\circ} \;<\; \underbrace{\text{2-bromo-2-methylpropane}}_{3^\circ} \;\approx\; \underbrace{\text{benzyl bromide}}_{\text{benzylic, fastest}}.$$

The $1^\circ$ substrate barely does SN1 at all (it prefers SN2); the $3^\circ$ and benzylic ones fly.

**P2** **Pathway: SN1.** The carbon bearing Br is *both* benzylic *and* secondary, and the medium is weakly nucleophilic and protic — textbook SN1 conditions. Ionization gives the resonance-stabilized benzylic cation $\ce{C6H5CH+CH3}$ (charge delocalized into the ring), so the barrier is low. Water then captures the **planar** cation from both faces at ~equal rates.

**Product:** 1-phenylethanol, $\ce{C6H5CH(OH)CH3}$, as a **racemate** ($\approx 50{:}50$ R and S) — i.e. optically inactive, even though we started from a single enantiomer. The flat cation has no memory of the original handedness; that racemization is the signature of the SN1 (vs. the clean inversion SN2 would have given).

**P3** (a) Ionization of the C3–Br bond gives a **secondary** carbocation at C3:

$$\ce{CH3{-}C(CH3)2{-}\overset{+}{C}H{-}CH3}.$$

The neighboring C2 is quaternary and carries two methyls. Because a shift here would upgrade a $2^\circ$ cation to a $3^\circ$ one, the cation rearranges.

(b) **1,2-methyl shift:** one methyl on C2 migrates *with its bonding pair* onto C3$^+$ — draw the curved arrow starting at the C2–CH$_3$ bond and pointing to the C2–C3 gap (the electron-deficient C3). The positive charge lands on C2, which now has three carbon substituents = **tertiary cation**:

$$\ce{CH3{-}\overset{+}{C}(CH3){-}CH(CH3){-}CH3} \;=\; \ce{(CH3)2\overset{+}{C}{-}CH(CH3)2}.$$

Water captures this $3^\circ$ cation at C2. **Major product: 2,3-dimethylbutan-2-ol**, $\ce{(CH3)2C(OH){-}CH(CH3)2}$ — a tertiary alcohol whose skeleton differs from the starting material, betraying the rearrangement. (The direct, unrearranged product 3,3-dimethylbutan-2-ol forms only in minor amounts.)

*Check.* Count carbons: starting $\ce{C6H13Br}$ → product $\ce{C6H14O}$, same six carbons, consistent with one methyl migrating (not leaving). ✓

</details>

## Flashback

**From Lesson 2.2 (SN2):** You have two bromides — **1-bromopropane** ($\ce{CH3CH2CH2Br}$, primary) and **2-bromo-2-methylbutane** ($\ce{CH3CH2C(CH3)2Br}$, tertiary). (a) Which reacts rapidly with the strong nucleophile $\ce{CN-}$ in DMSO (a polar aprotic solvent), by what mechanism, and with what stereochemical outcome at the reacting carbon? (b) Which instead ionizes readily in hot aqueous ethanol, by what mechanism? Contrast the two.

<details>
<summary>Solution</summary>

(a) **1-bromopropane** reacts fast with $\ce{CN-}$ by **SN2**: a strong nucleophile + polar aprotic solvent + an unhindered *primary* carbon is the ideal SN2 setup. The nucleophile attacks the backside of the C–Br carbon, giving butanenitrile $\ce{CH3CH2CH2CN}$ with **inversion** of configuration (Walden inversion) at that carbon — rate $=k[\text{substrate}][\ce{CN-}]$, second order. The tertiary bromide is essentially inert to SN2 (too crowded for backside attack).

(b) **2-bromo-2-methylbutane** ionizes readily by **SN1** in hot aqueous ethanol: a *tertiary* carbon forms a stable $3^\circ$ carbocation, and the polar protic solvent stabilizes it; the weak nucleophile (water/ethanol) captures the planar cation → the tertiary alcohol/ether, with **racemization** if that carbon were a stereocenter. Rate $=k[\text{substrate}]$, independent of nucleophile.

**Contrast:** SN2 wants an *unhindered* substrate, a *strong* nucleophile, and a polar *aprotic* solvent, and delivers *inversion*; SN1 wants a *stabilized cation* ($3^\circ$/benzylic), tolerates a *weak* nucleophile in a polar *protic* solvent, and delivers *racemization* — the two mechanisms have essentially opposite substrate preferences.

</details>

## Connections

- **Backward:** carbocation stability is the [1.2](01-02-resonance-formal-charge-delocalization.md) resonance/delocalization story applied to an electron-*deficient* carbon (allylic/benzyl cations), plus hyperconjugation as inductive donation. SN1 is the deliberate foil to [2.2](02-02-nucleophilic-substitution-sn2.md)'s concerted SN2 — same reactants, opposite mechanism, opposite substrate rule.
- **Forward:** the very same carbocation intermediate is the branch point for **[2.4 E1 elimination](02-04-elimination-e1-e2-choosing.md)** (the cation loses a $\beta$-proton instead of capturing a nucleophile) and for **[2.5 electrophilic addition to alkenes](02-05-alkenes-electrophilic-addition.md)** (Markovnikov selectivity is just "form the more stable cation," with the same rearrangement risk).
- **Sideways (kinetics):** "rate-determining step" and the first-order rate law $\text{rate}=k[\text{substrate}]$ are the reaction-rate reasoning from general chemistry — see the [general-chemistry syllabus](../../general-chemistry/syllabus.md) — here used to *diagnose a mechanism* from how the rate does (SN2) or doesn't (SN1) respond to nucleophile concentration.
