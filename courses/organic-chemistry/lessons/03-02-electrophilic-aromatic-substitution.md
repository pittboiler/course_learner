# Organic Chemistry · Lesson 3.2: Electrophilic aromatic substitution

> ⏱ ~15 min · Module 3: Reactions II (Aromatics, Carbonyls & Functional Groups) · Builds on: [3.1 Aromaticity & Hückel's rule](03-01-aromaticity-huckel.md), [2.5 Alkenes & electrophilic addition](02-05-alkenes-electrophilic-addition.md) · Unlocks: [3.3 Aldehydes & ketones: nucleophilic addition](03-03-aldehydes-ketones-nucleophilic-addition.md)

## Why this matters

An ordinary alkene is a nucleophile: its $\pi$ electrons reach out and grab an electrophile, and the double bond disappears (that was [2.5](02-05-alkenes-electrophilic-addition.md)). Benzene has $\pi$ electrons too — six of them, in a ring — so it should do the same. But it *doesn't add*. It **substitutes**: one ring hydrogen gets swapped for the electrophile, and the aromatic ring survives untouched. Every dye, drug, and explosive built on a benzene skeleton — aspirin, TNT, sulfa antibiotics — is decorated by exactly this reaction. And once one group is on the ring, it *dictates* where the next one lands. Learn that rule and you can plan a synthesis on a napkin.

## The idea

Why substitution instead of addition? Because of what [3.1](03-01-aromaticity-huckel.md) taught: aromaticity is worth a huge amount of stability — roughly $150\ \mathrm{kJ/mol}$ for benzene. If benzene *added* an electrophile the way an alkene does, it would permanently break the aromatic ring and pay that whole bill. Instead it takes a temporary loss and then buys the aromaticity back. The trick: attack the electrophile, then kick off a proton so the ring can re-close its aromatic circuit. Net result — a hydrogen is replaced, the ring is preserved.

The reaction runs in **two steps**:

1. **The ring attacks $\ce{E+}$.** Two of benzene's $\pi$ electrons swing out to bond the electrophile. This wrecks aromaticity — you now have a positively charged, *non-aromatic* ring called the **arenium ion** (also "sigma complex" or cyclohexadienyl cation). It's the high-energy hilltop of the reaction, so this step is **slow — the rate-determining step (RDS)**. What saves it from being *impossibly* high is resonance: the positive charge isn't stuck on one carbon; it's smeared over three of them.
2. **Lose $\ce{H+}$.** A base plucks the proton off the carbon that's now holding both an H and the E. Those electrons drop back into the ring, the aromatic circuit re-closes, and out comes the substituted benzene. Cheap and fast — you get the whole $150\ \mathrm{kJ/mol}$ back.

Same opening move as an alkene ($\pi$ attacks $\ce{E+}$), different ending: the alkene's cation grabs a nucleophile (addition), but the arenium ion would rather *eject a proton* to restore aromaticity (substitution). Aromaticity is the fork in the road.

## The formal version

**The mechanism.** For a generic electrophile $\ce{E+}$:

$$\ce{C6H6 + E+ ->[\text{slow, RDS}] [C6H6E]+ ->[\text{-H+}][\text{fast}] C6H5E}$$

*In words: benzene plus an electrophile makes the arenium cation (slow), which loses a proton to give the substituted aromatic ring (fast).* The arenium ion $\ce{[C6H6E]+}$ is the intermediate; its resonance stabilization is the whole reason aromatic rings react at all.

**The five reactions** are all the same mechanism — they differ *only* in how you generate $\ce{E+}$:

| Reaction | Reagents | Electrophile $\ce{E+}$ |
|---|---|---|
| **Nitration** | $\ce{HNO3 / H2SO4}$ | nitronium $\ce{NO2+}$ |
| **Halogenation** | $\ce{Br2 / FeBr3}$ (or $\ce{Cl2/AlCl3}$) | $\ce{Br+}$ (from $\ce{Br2\!-\!FeBr3}$) |
| **Sulfonation** | $\ce{SO3 / H2SO4}$ | $\ce{SO3}$ (S is the electrophilic atom) |
| **Friedel–Crafts alkylation** | $\ce{RCl / AlCl3}$ | carbocation $\ce{R+}$ |
| **Friedel–Crafts acylation** | $\ce{RCOCl / AlCl3}$ | acylium $\ce{RCO+}$ |

*In words: pick your electrophile, and benzene delivers the corresponding substituted ring.* Two important warnings live in the last two rows:

- **Friedel–Crafts alkylation is leaky.** The electrophile is a free carbocation $\ce{R+}$, so (i) it **rearranges** (a primary cation shifts to a more stable secondary/tertiary one before it ever reaches the ring — the same hydride/methyl shifts as [2.3](02-03-sn1-carbocation-rearrangements.md)), and (ii) the product is *more* reactive than the starting benzene (an alkyl group activates the ring — see below), so it keeps going: **polyalkylation**. You often can't stop at one.
- **Friedel–Crafts acylation is clean.** The acylium $\ce{RCO+}$ is resonance-stabilized ($\ce{R-C+=O <-> R-C#O+}$), so it **does not rearrange**. And the product (a ketone) is *deactivated* by the new carbonyl, so it **stops at one substitution — monoacylation**. To put a straight-chain alkyl group on cleanly, acylate then reduce the C=O, sidestepping alkylation's mess entirely.

**Substituent effects.** Put one group $\ce{G}$ on the ring, and it changes two things about the *next* EAS:

1. **Rate — activator vs. deactivator.** A group that pushes electron density *into* the ring makes it a better nucleophile → **activator**, reacts faster than benzene. A group that pulls density *out* → **deactivator**, slower. *In words: electron-rich rings react fast, electron-poor rings react slow.*
2. **Position — which of ortho / meta / para the new group prefers.**

$$\text{ortho}=\text{adjacent (1,2)},\quad \text{meta}=\text{one apart (1,3)},\quad \text{para}=\text{across (1,4)}.$$

The directing rule sorts every group into two boxes:

- **Ortho/para directors:** all **activators** ($\ce{-NH2}, \ce{-OH}, \ce{-OR}, \ce{-NHR}$, and alkyl $\ce{-R}$) **plus the halogens** ($\ce{-F, -Cl, -Br, -I}$). Halogens are the oddball: **o/p directing but *deactivating*** (see Watch out).
- **Meta directors:** the **strong deactivators** — $\ce{-NO2}, \ce{-C(=O)R}$ (and $\ce{-CHO}$), $\ce{-COOH}, \ce{-SO3H}, \ce{-C#N}, \ce{-NR3+}$.

**Why — read it off the arenium.** The directing rule falls straight out of Step 1's intermediate. When $\ce{E+}$ attacks, the resulting positive charge sits specifically on the carbons **ortho and para** to the point of attack (draw the three resonance forms — Picture below — and you'll see the $\oplus$ never lands on a meta carbon). So:

- A group that **donates** electron density (lone pair or $\sigma$-donation) stabilizes that $\oplus$ *best when the charge sits right next to it* — i.e. when the new group came in **ortho or para** to the donor. Donors therefore steer incoming groups **o/p**, and by feeding the ring they also speed everything up (**activate**).
- A group that **withdraws** electron density destabilizes any adjacent $\oplus$. It makes the o/p attack *worst* (that's where the charge would sit next to it) and the **meta** attack "least bad." So withdrawers steer incoming groups **meta**, and by draining the ring they slow everything down (**deactivate**).

*In words: donors love the charge landing next door, so they send it ortho/para; withdrawers can't stand the charge next door, so they push it to meta.*

## Picture

![Benzene attacks an electrophile to give the resonance-stabilized arenium ion (the rate-determining intermediate, charge delocalized over the two ortho and the para carbons), then loses a proton to restore the aromatic product; below, an ortho/para vs. meta directing summary](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — nitration of benzene).** Treat benzene with $\ce{HNO3}$ and $\ce{H2SO4}$. First the sulfuric acid protonates nitric acid, which loses water to make the electrophile, the **nitronium ion** $\ce{NO2+}$:

$$\ce{HNO3 + 2H2SO4 -> NO2+ + H3O+ + 2HSO4-}.$$

Benzene's $\pi$ system attacks $\ce{NO2+}$ → arenium ion → lose $\ce{H+}$:

$$\ce{C6H6 ->[\text{HNO3, H2SO4}] C6H5NO2}$$

giving **nitrobenzene**. (This nitro group is itself a meta director — useful in Example 2.)

**Example 2 (why you'd care — one group steering the next).** *Toluene* is benzene with a $\ce{-CH3}$ group. Methyl is a weak activator and an o/p director (it donates through $\sigma$/hyperconjugation and has no lone pair). Nitrating toluene therefore gives mostly **ortho- and para-nitrotoluene**, and *faster* than benzene reacts. Because the para position is less crowded, **p-nitrotoluene** is the major single product.

Now flip it: nitrate *nitrobenzene* instead. The $\ce{-NO2}$ already there is a strong deactivator and a meta director — it withdraws density, so a *second* nitration is sluggish and lands at the **meta** position, giving **m-dinitrobenzene**. The pre-installed group wrote the address for the newcomer.

## Watch out

- **You might expect benzene to *add* like an alkene.** It doesn't — addition would destroy aromaticity permanently. The arenium ion always chooses to *lose $\ce{H+}$* and re-aromatize instead of grabbing a nucleophile. Substitution, not addition, is the whole signature of aromatic chemistry.
- **You might lump "activating" and "deactivating" with "o/p" and "meta" as if they always pair up — halogens break that.** $\ce{-Cl, -Br}$ are **o/p directors but deactivators**. Their electronegativity drains the ring by induction (slows the reaction), yet their lone pairs can still donate by resonance *specifically* to an o/p arenium (steering position). Direction and rate are decided by two different effects; usually they agree, but not for halogens.
- **You might reach for Friedel–Crafts alkylation to attach any alkyl chain.** Beware rearrangement (n-propyl chloride gives mostly *iso*propylbenzene) and polyalkylation (the product is activated, so it out-competes the starting material). For a clean, un-rearranged chain, **acylate then reduce** the ketone.
- **Sulfonation is reversible.** Unlike the others, $\ce{-SO3H}$ can be removed by hot dilute aqueous acid — chemists use it as a temporary *blocking group* to protect a position, then strip it off.

## One-liner

> Aromatic rings are too stable to add, so they attack $\ce{E+}$, ride through a resonance-stabilized arenium ion (the slow step), and eject $\ce{H+}$ to re-aromatize — and any group already on the ring aims the next one: donors o/p and faster, withdrawers meta and slower.

## Problems

**P1 (🟢)** Give the organic product and *name the electrophile* for (a) nitration of benzene and (b) Friedel–Crafts acylation of benzene with $\ce{CH3COCl / AlCl3}$.

**P2 (🟡)** Predict the major product (ortho/para or meta) for the **mononitration** of (a) toluene ($\ce{C6H5CH3}$) and (b) nitrobenzene ($\ce{C6H5NO2}$). Justify each with the arenium resonance argument.

**P3 (🔴, Boss-3 rehearsal)** Rank **phenol, toluene, benzene, and nitrobenzene** from fastest to slowest toward EAS, explaining the order. Then give the major product of the **mononitration of toluene** and state the regiochemical reason.

<details>
<summary>Solutions</summary>

**P1**
(a) Electrophile: the **nitronium ion** $\ce{NO2+}$ (generated by $\ce{HNO3 + H2SO4}$). Product: **nitrobenzene**, $\ce{C6H5NO2}$.

$$\ce{C6H6 ->[\text{HNO3, H2SO4}] C6H5NO2}$$

(b) Electrophile: the **acylium ion** $\ce{CH3CO+}$ (acetyl cation, from $\ce{CH3COCl + AlCl3}$; resonance-stabilized $\ce{CH3-C+=O <-> CH3-C#O+}$, so no rearrangement and it stops at one substitution). Product: **acetophenone** (phenyl methyl ketone), $\ce{C6H5COCH3}$.

$$\ce{C6H6 ->[\text{CH3COCl, AlCl3}] C6H5COCH3}$$

**P2**
(a) **Toluene → mostly para- (and ortho-) nitrotoluene.** $\ce{-CH3}$ donates electron density (hyperconjugation/$\sigma$-donation), an activator and **o/p director**. When $\ce{NO2+}$ attacks *ortho or para* to the methyl, one of the three arenium resonance forms places the $\oplus$ **on the very carbon bearing the $\ce{CH3}$** — a tertiary-like, methyl-stabilized cation, the most stable contributor. Attack *meta* never puts $\oplus$ on that carbon, so it's not stabilized and is disfavored. Para dominates over ortho on sterics → **p-nitrotoluene** as the major single product.

(b) **Nitrobenzene → m-dinitrobenzene.** $\ce{-NO2}$ withdraws density (a strong deactivator, **meta director**). Attack *ortho or para* puts the arenium $\oplus$ directly on the carbon bearing the $\ce{NO2}$ — placing a positive charge next to an electron-poor, positively-polarized group, a strongly destabilized (bad) contributor. Attack *meta* keeps the $\oplus$ off that carbon, the "least bad" option → the new $\ce{NO2}$ lands **meta**.

**P3**
Ranking (fastest → slowest):

$$\textbf{phenol} \;>\; \textbf{toluene} \;>\; \textbf{benzene} \;>\; \textbf{nitrobenzene}.$$

Reasoning — EAS rate tracks how electron-rich the ring is (richer ring = better nucleophile = more stabilized arenium):
- **Phenol** ($\ce{-OH}$): the oxygen lone pair donates *by resonance* straight into the ring — a **strong activator**, the most reactive here.
- **Toluene** ($\ce{-CH3}$): only weak $\sigma$/hyperconjugative donation — a **weak activator**, faster than benzene but far behind phenol.
- **Benzene**: the unsubstituted baseline.
- **Nitrobenzene** ($\ce{-NO2}$): withdraws density by both resonance and induction — a **strong deactivator**, the slowest by far.

Major product of toluene mononitration: **p-nitrotoluene**. $\ce{-CH3}$ is an o/p director; both o and p attack give an arenium whose most stable resonance form puts the $\oplus$ on the methyl-bearing carbon (a 3°-type cation), whereas meta attack does not — so o/p is favored, and **para** wins over ortho because the para position is less sterically hindered by the methyl.

</details>

## Flashback

**From Lesson 3.1 (Aromaticity & Hückel's rule):** Hückel's rule says a planar, fully conjugated ring is aromatic when its $\pi$-electron count equals $4n+2$ for some non-negative integer $n$. (a) Is the **cyclopentadienyl anion** ($\ce{C5H5^-}$, a five-membered ring, planar and conjugated) aromatic? (b) In this lesson's mechanism, why is the **arenium ion *not* aromatic**?

<details>
<summary>Solution</summary>

(a) Count the ring $\pi$ electrons. The five-carbon ring has two C=C double bonds (4 $\pi$ electrons) plus the lone pair created by the extra negative charge sitting in a p orbital (2 more), for **6 $\pi$ electrons**. Is $6 = 4n+2$? Yes, with $n=1$. The ring is planar and fully conjugated, so the cyclopentadienyl anion **is aromatic** — that's exactly why it forms so readily (its parent C–H is unusually acidic).

(b) The arenium ion has an $sp^3$ carbon — the one now bonded to both the incoming $\ce{E}$ and an $\ce{H}$. That carbon has **no p orbital in the ring's $\pi$ system**, so the cyclic conjugation is *broken*: the ring is no longer fully conjugated, one of Hückel's prerequisites fails, and it can't be aromatic. Only five carbons carry the delocalized $\pi$/charge system (a cyclohexadienyl cation, 4 $\pi$ electrons over 5 carbons). Losing $\ce{H+}$ from that $sp^3$ carbon rehybridizes it to $sp^2$, restores the p orbital, closes the six-membered conjugated circuit, and brings back the $6$-$\pi$-electron aromatic ring.

</details>

## Connections

- **Backward:** the opening step is the *same nucleophilic $\pi$ attack on $\ce{E+}$* as alkene [electrophilic addition (2.5)](02-05-alkenes-electrophilic-addition.md) — only the ending differs (re-aromatize vs. add). The carbocation rearrangements that plague Friedel–Crafts alkylation are the hydride/methyl shifts of [SN1 chemistry (2.3)](02-03-sn1-carbocation-rearrangements.md). The "why does it substitute" answer is the aromatic stabilization energy of [3.1](03-01-aromaticity-huckel.md), and the o/p vs. meta reasoning is pure resonance/formal-charge bookkeeping from [1.2](01-02-resonance-formal-charge-delocalization.md).
- **Forward:** the acylium electrophile of Friedel–Crafts acylation is a carbonyl in disguise — [3.3 nucleophilic addition to aldehydes & ketones](03-03-aldehydes-ketones-nucleophilic-addition.md) attacks that same $\ce{C=O}$ from the *other* side (nucleophile in, rather than ring as nucleophile). Multi-substituted benzenes built here are the substrates for the [structure-determination toolkit (Module 4)](04-01-ir-mass-spectrometry.md), where the aromatic C–H and ring bands are diagnostic.
- **Sideways (physical chemistry):** the "attack the electrophile, then choose the fastest onward path" logic is the [rate-determining-step / transition-state reasoning](../../physical-chemistry/syllabus.md) of chemical kinetics — the arenium ion is the high-energy intermediate whose *most stable* form sets the position of the whole reaction.
