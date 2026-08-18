# Organic Chemistry · Lesson 4.1: IR & mass spectrometry

> ⏱ ~15 min · Module 4: Structure Determination & Synthesis · Builds on: [2.1 Functional groups & the language of mechanisms](02-01-functional-groups-mechanisms-language.md) · Unlocks: [4.2 ¹H NMR spectroscopy](04-02-h-nmr-spectroscopy.md)

## Why this matters

So far every problem has run *forward*: here is a molecule, predict what it does. Real chemistry runs *backward*. You mix reagents, work up a flask, and hold a colorless liquid whose structure you do **not** know. The **inverse problem** — deduce the structure from what you can measure — is the daily work of a chemist, and it's how you prove a synthesis actually made the thing you wanted. This module is your detective kit. Today's two instruments answer the two coarsest questions fast: **what functional groups are present** (infrared, IR) and **how much does one molecule weigh, and how does it break** (mass spectrometry, MS). NMR ([4.2](04-02-h-nmr-spectroscopy.md)) will later map the carbon skeleton atom by atom — but IR and MS, plus one piece of arithmetic, already narrow the field enormously.

## The idea

Start before any instrument, with just the **molecular formula**. A formula secretly tells you how many rings and double bonds the molecule must contain. A saturated, acyclic $\ce{C_nH_{2n+2}}$ alkane is the "full hydrogen" reference; every ring and every $\pi$ bond you add forces you to *drop two hydrogens* (a ring ties two carbons together; a double bond does the same). Count the missing hydrogen-pairs and you've counted the rings-plus-$\pi$-bonds — before you've run a single spectrum. That count is the **degree of unsaturation**.

Then IR. Think of every bond as a tiny **mass on a spring** — the exact picture from mechanics [simple harmonic motion](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md). A bond has a stiffness (the "spring constant" $k$: a triple bond is stiffer than a double, a double stiffer than a single) and the atoms have masses. Shine infrared light through the sample and each bond absorbs the frequency that matches its own natural oscillation — resonance, just like pushing a swing at its natural tempo. **Stiffer bonds and lighter atoms ring faster**, so they absorb higher-frequency (higher-energy) light. The instrument reports which frequencies got absorbed, and since $\ce{C=O}$, $\ce{O-H}$, $\ce{N-H}$ each ring at a characteristic pitch, the spectrum is a roll-call of functional groups.

Then MS. Vaporize the molecule and knock an electron off it to make a positive ion; weigh that ion and you have the molecular weight. But the ion is also unstable and shatters, and *the pieces it breaks into* — and their masses — betray its structure, the way a dropped vase tells you it was a vase and not a brick.

## The formal version

**Degrees of unsaturation (index of hydrogen deficiency, IHD).** For a formula with $C$ carbons, $H$ hydrogens, $N$ nitrogens, and $X$ halogens (oxygen does not appear):

$$\boxed{\ \text{DoU} = \frac{2C + 2 + N - H - X}{2}\ }$$

*In words: compare the real H-count to the saturated maximum; every pair of missing hydrogens is one ring or one $\pi$ bond.* Each **ring counts 1**, each **double bond counts 1**, each **triple bond counts 2** (two $\pi$ bonds). A **benzene ring counts 4** (three $\pi$ bonds + one ring). Why oxygen drops out: inserting an $\ce{-O-}$ into a chain ($\ce{C-C}\to\ce{C-O-C}$) adds no hydrogens and no unsaturation. Why $+N$: nitrogen is trivalent, so each N *adds* one H to the saturated reference. Why $-X$: a halogen caps a bond just like an H, so it subtracts like one.

Interpretation cheat-sheet: **DoU $=0$** → fully saturated (no rings, no double bonds); **$=1$** → exactly one ring *or* one double bond; **$\ge 4$** → suspect an aromatic ring (and go looking for it in the IR/NMR).

**IR spectroscopy — the bond-as-spring law.** Model a bond between atoms of masses $m_1, m_2$ as a spring of stiffness $k$. The absorbed light's **wavenumber** $\tilde\nu$ (in $\mathrm{cm^{-1}}$ — inverse wavelength, proportional to energy) obeys

$$\tilde\nu = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}, \qquad \mu = \frac{m_1 m_2}{m_1 + m_2},$$

where $c$ is the speed of light and $\mu$ is the **reduced mass** (the effective mass of the two-body oscillator). *In words: this is $\omega = \sqrt{k/m}$ from SHM, with the single mass replaced by the two-atom reduced mass — stiffer bond (bigger $k$) or lighter atoms (smaller $\mu$) → higher wavenumber.* That one relation explains the whole chart: $\ce{C#C}$ (very stiff) sits high near $2100$–$2260$, $\ce{C=O}$ around $1700$, $\ce{C-C}$ (floppy) way down low; and $\ce{O-H}$ / $\ce{C-H}$ sit high partly because H is so light.

The **diagnostic bands** (memorize these — they carry most of the information):

| Bond | Wavenumber ($\mathrm{cm^{-1}}$) | Look/notes |
|---|---|---|
| $\ce{O-H}$ | $3200$–$3550$ | **broad**, rounded (H-bonding); acids even broader, $2500$–$3300$ |
| $\ce{N-H}$ | $3300$–$3500$ | sharper than O–H; amines may show 1–2 spikes |
| $\ce{C-H}$ | $\sim 2900$ | almost every organic molecule has it — rarely diagnostic |
| $\ce{C#N},\ \ce{C#C}$ | $2100$–$2260$ | thin, in an otherwise empty window |
| $\ce{C=O}$ | $1700$–$1750$ | **strong and sharp — the single most useful band** |
| $\ce{C=C}$ | $\sim 1650$ | weak-to-moderate |

Within the carbonyl window the exact pitch fingers the *kind* of $\ce{C=O}$: **ester $\sim 1740$**, **ketone $\sim 1715$**, **carboxylic acid $\sim 1710$** (plus that giant broad O–H), **amide $\sim 1650$** (lowest, its N lone pair softens the bond). Everything below $\sim 1500\ \mathrm{cm^{-1}}$ is the **fingerprint region**: a dense thicket of skeletal vibrations too tangled to assign one by one, but unique to each compound — you match it against a reference rather than read it. *The two workhorses are $\ce{C=O}$ and $\ce{O-H}$*: presence/absence and exact position of these two resolves most functional-group questions.

**Mass spectrometry.** The molecule $\ce{M}$ is ionized (an electron knocked out) to the **molecular ion** $\ce{M^{+\bullet}}$, a radical cation whose mass-to-charge ratio $m/z$ (charge $= 1$) reads out the **molecular weight**. The ion then **fragments**, and the *lost* pieces are the clue. Common neutral losses:

| Mass lost | Fragment |
|---|---|
| $15$ | $\ce{CH3}$ (methyl) |
| $18$ | $\ce{H2O}$ (water — hints at an alcohol) |
| $29$ | $\ce{CHO}$ (aldehyde) **or** $\ce{C2H5}$ (ethyl) |
| $45$ | $\ce{COOH}$ (carboxylic acid) |

**Isotope patterns** are a second channel. The small $\ce{M{+}1}$ peak comes from $^{13}\ce{C}$ (natural abundance $1.1\%$), so its height relative to $\ce{M}$ estimates the **carbon count**: roughly $\tfrac{\ce{M{+}1}}{\ce{M}}\approx 1.1\%\times(\#\text{C})$. A tall $\ce{M{+}2}$ peak flags a heavy halogen: **$\ce{Cl}$ gives $\ce{M}:\ce{M{+}2}\approx 3:1$** (from $^{35}\ce{Cl}:^{37}\ce{Cl}\approx 3:1$) and **$\ce{Br}$ gives $\approx 1:1$** (from $^{79}\ce{Br}:^{81}\ce{Br}\approx 1:1$). *In words: a near-equal pair of peaks two mass units apart screams bromine; a 3-to-1 pair screams chlorine.*

## Picture

![A schematic IR spectrum: percent transmittance on the vertical axis, wavenumber decreasing left to right on the horizontal axis, with a broad O–H dip near 3400, a C–H dip near 2900, a strong sharp C=O dip near 1715, and the crowded fingerprint region below 1500; O–H and C=O highlighted](assets/04-01-fig1.svg)

Note the convention that trips up everyone at first: the $x$-axis runs **backward**, high wavenumber on the left, and bands point **down** (transmittance falls where the sample absorbs).

## Worked examples

**Example 1 (formula → unsaturation → shortlist).** A compound is $\ce{C5H8O}$. Compute

$$\text{DoU} = \frac{2(5) + 2 + 0 - 8 - 0}{2} = \frac{4}{2} = 2.$$

Two degrees: some combination of rings and $\pi$ bonds totaling two — e.g. one ring + one double bond, or two double bonds, or one triple bond ($\ce{C#C}$/$\ce{C#N}$ counts as 2 on its own). Now the IR decides between them: a strong band at $1715\ \mathrm{cm^{-1}}$ would say one of the two is a ketone $\ce{C=O}$ (leaving one more ring or C=C to place); a thin band near $2120\ \mathrm{cm^{-1}}$ would instead say a $\ce{C#C}$ eats both degrees at once. The number bounds the possibilities; the spectrum picks among them.

**Example 2 (MS reasoning — a halide betrays itself).** An unknown shows $\ce{M} = 108/110$ as a **near 1:1 pair** two units apart, and a big fragment at $m/z = 29$. The 1:1 doublet is the bromine signature, so a $\ce{Br}$ (mass $79/81$) is present; subtracting it, $108 - 79 = 29$ of the molecule is non-bromine. A fragment at $29$ that is *also* what remains after Br loss points to $\ce{C2H5}$ ($29$). The molecule is bromoethane, $\ce{CH3CH2Br}$ (MW $108$): it loses $\ce{Br^\bullet}$ to give the ethyl cation at $29$, and the $108/110$ doublet is the two bromine isotopes. Two peaks and one subtraction pinned the structure — exactly the reactant from [2.1](02-01-functional-groups-mechanisms-language.md)'s worked examples, now identified from its spectrum instead of drawn.

## Watch out

- **You might read the IR $x$-axis like a normal graph.** It's reversed — $4000\ \mathrm{cm^{-1}}$ on the left, $\sim 500$ on the right — and "high wavenumber" means high energy / stiff-and-light bonds. A band "to the left of the carbonyl" is at *higher* wavenumber.
- **You might treat a missing band as meaningless.** Absences are evidence: **no** strong $1700$-ish peak rules *out* every carbonyl group (ketone, ester, acid, amide) at once. And a broad O–H *present* vs *absent* is exactly what separates a carboxylic acid ($1710$ **+** broad O–H) from an ester ($1740$, **no** broad O–H) — see P2/P3.
- **You might forget oxygen in the DoU formula — or mis-handle Cl vs Br isotopes.** Oxygen contributes nothing to DoU (leave it out entirely). And the isotope ratios are not the same: chlorine is $3:1$ ($\ce{M}:\ce{M{+}2}$), bromine is $1:1$. Swapping them mis-IDs the halogen.

## One-liner

> Count rings-plus-$\pi$-bonds from the formula (DoU), let IR name the functional groups (each bond a spring — $\ce{C=O}$ and $\ce{O-H}$ do the talking), and let MS weigh the molecule and read its fragments and isotope doublets.

## Problems

**P1 (🟢)** Compute the degree of unsaturation and state what it implies, for: (a) $\ce{C4H8O2}$; (b) $\ce{C7H8}$; (c) $\ce{C6H5Cl}$ (chlorobenzene); (d) $\ce{C3H5N}$.

**P2 (🟡)** Two unknowns, both containing a carbonyl. Unknown A shows a **broad absorption spanning ~2500–3300** plus a **strong band at $1710\ \mathrm{cm^{-1}}$**. Unknown B shows a **strong band at $1740\ \mathrm{cm^{-1}}$** and **no broad O–H**. Identify the functional-group class of each and explain which IR features decide it.

**P3 (🔴, Boss-4 rehearsal)** An unknown has molecular formula $\ce{C4H8O2}$, a strong IR band at $\sim 1740\ \mathrm{cm^{-1}}$, and **no** broad O–H stretch. Compute its degree of unsaturation, account for that degree, and argue that it is an **ester**, not a carboxylic acid. Propose one consistent structure.

<details>
<summary>Solutions</summary>

**P1**
(a) $\ce{C4H8O2}$: $\text{DoU} = \dfrac{2(4)+2-8}{2} = \dfrac{2}{2} = 1$. One ring **or** one double bond. (Oxygens ignored.) With two oxygens, a single $\ce{C=O}$ is a strong candidate — this is the P3 compound.
(b) $\ce{C7H8}$ (toluene): $\text{DoU} = \dfrac{2(7)+2-8}{2} = \dfrac{8}{2} = 4$. Four degrees = the classic aromatic signature (3 $\pi$ bonds + 1 ring). Suspect a benzene ring.
(c) $\ce{C6H5Cl}$: halogen subtracts, $\text{DoU} = \dfrac{2(6)+2-5-1}{2} = \dfrac{8}{2} = 4$. Again aromatic — a benzene ring with one H replaced by Cl.
(d) $\ce{C3H5N}$: nitrogen adds, $\text{DoU} = \dfrac{2(3)+2+1-5}{2} = \dfrac{4}{2} = 2$. Two degrees — e.g. a nitrile $\ce{C#N}$ (a triple bond = 2 all by itself), consistent with $\ce{CH3CH2C#N}$, propanenitrile.

**P2**
- **Unknown A = carboxylic acid.** The tell is the *combination*: a $\ce{C=O}$ at $1710\ \mathrm{cm^{-1}}$ **together with** the enormous, very broad O–H from $2500$–$3300\ \mathrm{cm^{-1}}$ (hydrogen-bonded $\ce{-COOH}$ dimers smear the O–H stretch into a wide hump). Carbonyl + broad O–H over that range = acid.
- **Unknown B = ester.** A strong carbonyl slightly higher, at $1740\ \mathrm{cm^{-1}}$, **and the crucial absence** of any broad O–H. No O–H means no acid and no alcohol; an ester has a $\ce{C=O}$ but its oxygens carry no O–H, and its carbonyl sits a touch higher than a ketone/acid. The decision rests on two features: exact C=O position ($1740$ vs $1710$) and, decisively, presence vs absence of the broad O–H.

**P3** Degree of unsaturation:
$$\text{DoU} = \frac{2(4) + 2 - 8}{2} = \frac{2}{2} = 1.$$
Exactly one ring or one $\pi$ bond. The strong IR band at $1740\ \mathrm{cm^{-1}}$ is a carbonyl $\ce{C=O}$, which *is* one $\pi$ bond — so the single degree of unsaturation is fully accounted for by that carbonyl, leaving no ring and no C=C to place.

Now acid vs ester, the two natural $\ce{C4H8O2}$ carbonyl families. A **carboxylic acid** ($\ce{-COOH}$) would show a huge **broad O–H** ($2500$–$3300\ \mathrm{cm^{-1}}$) and its $\ce{C=O}$ nearer $1710$. Neither holds: there is **no broad O–H**, and the carbonyl is at the higher $1740$ characteristic of esters. Both features point the same way — this is an **ester**. The two oxygens are used as the $\ce{C(=O)-O-C}$ ester linkage (one $\ce{C=O}$, one $\ce{C-O-C}$), so no O–H exists to absorb, exactly matching the spectrum.

One consistent structure: **ethyl acetate**, $\ce{CH3COOCH2CH3}$ (or equivalently **methyl propanoate**, $\ce{CH3CH2COOCH3}$) — both $\ce{C4H8O2}$, DoU $1$, one ester carbonyl, no O–H. This is the reasoning Boss Problem 4 wants: formula → DoU → carbonyl accounts for it → O–H absence discriminates acid from ester.

</details>

## Flashback

**From Lesson 2.1 (Functional groups & the language of mechanisms):** For each molecule, name the functional group and label its reactive site as a likely **nucleophile** or **electrophile**, with one word of why: (a) $\ce{CH3CH2CHO}$ (propanal); (b) $\ce{CH3OCH3}$ (dimethyl ether); (c) $\ce{HC#CH}$ (ethyne); (d) $\ce{CH3CH2CH2NH2}$ (propylamine).

<details>
<summary>Solution</summary>

(a) **Aldehyde (carbonyl).** The carbonyl carbon is **electrophilic** — the $\ce{C=O}$ is polarized and a resonance form ([1.2](01-02-resonance-formal-charge-delocalization.md)) puts $+$ on carbon. (The oxygen, with lone pairs, is the basic/nucleophilic end.) In IR this is exactly the strong $\sim 1720\ \mathrm{cm^{-1}}$ band from this lesson.
(b) **Ether.** Oxygen has lone pairs (a weak base / mild nucleophile), but with no good leaving group and no acidic H it is **essentially unreactive** — a common inert solvent. No O–H, so no broad IR O–H stretch.
(c) **Alkyne.** The $\ce{C#C}$ $\pi$ system is exposed electron density — a **nucleophile** that attacks electrophiles. (Its terminal $\ce{C-H}$ is also weakly acidic.) The triple bond shows the thin IR band near $2120\ \mathrm{cm^{-1}}$.
(d) **Amine.** The nitrogen lone pair makes it the best neutral **nucleophile** (and a decent base). Its $\ce{N-H}$ gives the sharper $3300$–$3500\ \mathrm{cm^{-1}}$ IR band.

The through-line: the same electron-rich/electron-poor bookkeeping from 2.1 that predicts *reactivity* also predicts which bonds *absorb where* — a polar $\ce{C=O}$ is both an electrophile and a strong $1700$-region IR band.

</details>

## Connections

- **Backward:** the functional groups IR detects are the [2.1](02-01-functional-groups-mechanisms-language.md) cast — carbonyls, O–H, N–H, C≡N — now identified by their absorption pitch instead of their reactivity. The bond-as-spring law is literally the [simple harmonic motion](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) result $\omega=\sqrt{k/m}$ from mechanics, with reduced mass $\mu$ in place of $m$: stiffer bond and lighter atoms → higher frequency, in chemistry and physics alike.
- **Forward:** [4.2 ¹H NMR](04-02-h-nmr-spectroscopy.md) adds the atom-by-atom map of the hydrogen framework; combined with today's DoU + functional-group + molecular-weight data it usually forces a unique structure. That full **DoU → IR → MS → NMR** workflow is [4.3](04-03-c13-nmr-structure-workflow.md), and structure determination is what verifies every target in [4.4 retrosynthesis](04-04-retrosynthetic-analysis-multistep-synthesis.md). **Boss Problem 4** is exactly a spectra-to-structure puzzle built on P3's logic.
- **Sideways:** absorbing a specific frequency because it matches a bond's natural oscillation is **resonance** — the same phenomenon that drives an oscillator hardest when pushed near its natural $\omega$ ([mechanics 3.2, damped & driven oscillations](../../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md)). Spectroscopy is resonance used as a ruler.
