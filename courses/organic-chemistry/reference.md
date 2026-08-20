# Organic Chemistry I & II · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Organic chemistry is one sentence used two hundred times: **electron-rich attacks
electron-poor, and a curved arrow tracks every pair that moves.** Everything below
is the lookup layer for that sentence — the reaction map (substrate class →
reagent → mechanism → what decides the selectivity), the stereochemistry
vocabulary, the acidity ladder that predicts every proton transfer, and the
spectroscopy tables that run the whole thing backward.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $sp^3$, $sp^2$, $sp$ | hybrid orbital set: 4, 3, or 2 electron domains around the atom | [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md) |
| $\sigma$, $\pi$ | head-on bond (rotatable); sideways $p$–$p$ bond (locks rotation) | [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md) |
| $\ce{<->}$ | resonance arrow — "average these drawings", never "these interconvert" | [1.2](lessons/01-02-resonance-formal-charge-delocalization.md) |
| $\ce{<=>}$ | equilibrium arrow — two real species genuinely interconverting | [1.2](lessons/01-02-resonance-formal-charge-delocalization.md) |
| $\text{FC}$ | formal charge — who owns which electrons in one Lewis drawing | [1.2](lessons/01-02-resonance-formal-charge-delocalization.md) |
| $\mathrm{p}K_a$ | acidity: low means strong acid, and each unit is a factor of ten | [1.3](lessons/01-03-acids-bases-organic.md) |
| ARIO | the four levers on conjugate-base stability: Atom, Resonance, Induction, Orbital | [1.3](lessons/01-03-acids-bases-organic.md) |
| $\theta$ (dihedral) | torsion angle seen down a C–C bond in a Newman projection | [1.4](lessons/01-04-alkanes-conformational-analysis.md) |
| ▲ wedge, ⋮ dash | bond toward you, out of the page; bond away from you, behind it | [1.5](lessons/01-05-chirality-r-s-system.md) |
| $R$ / $S$ | absolute configuration at one stereocenter (clockwise / counterclockwise) | [1.5](lessons/01-05-chirality-r-s-system.md) |
| $[\alpha]_D^T$ | specific rotation — optical twist normalized by concentration and path | [1.6](lessons/01-06-diastereomers-meso-optical-activity.md) |
| $(+)$ / $(-)$, $(\pm)$ | dextrorotatory / levorotatory; a racemic (50:50) mixture | [1.6](lessons/01-06-diastereomers-meso-optical-activity.md) |
| $\mathrm{ee}$ | enantiomeric excess — how far past a racemate a sample is | [1.6](lessons/01-06-diastereomers-meso-optical-activity.md) |
| Nu, E, LG | nucleophile (electron giver), electrophile (taker), leaving group | [2.1](lessons/02-01-functional-groups-mechanisms-language.md) |
| $\delta+$, $\delta-$ | partial charges from bond polarity or from a resonance form | [2.1](lessons/02-01-functional-groups-mechanisms-language.md) |
| double-barbed arrow | moves an electron **pair** (all polar mechanisms) | [2.1](lessons/02-01-functional-groups-mechanisms-language.md) |
| fishhook (single-barbed) | moves **one** electron — radicals only | [2.6](lessons/02-06-alkynes-radicals.md) |
| $1^\circ$, $2^\circ$, $3^\circ$ | primary / secondary / tertiary: how many carbons on the reacting carbon | [2.2](lessons/02-02-nucleophilic-substitution-sn2.md) |
| SN2, SN1 | substitution: bimolecular (concerted) vs unimolecular (via carbocation) | [2.2](lessons/02-02-nucleophilic-substitution-sn2.md), [2.3](lessons/02-03-sn1-carbocation-rearrangements.md) |
| RDS | rate-determining step — the slow one, the only one in the rate law | [2.3](lessons/02-03-sn1-carbocation-rearrangements.md) |
| E2, E1 | elimination: concerted (anti-periplanar) vs stepwise (via carbocation) | [2.4](lessons/02-04-elimination-e1-e2-choosing.md) |
| $\alpha$, $\beta$ carbon | the carbon bearing the leaving group (or next to a $\ce{C=O}$); its neighbor | [2.4](lessons/02-04-elimination-e1-e2-choosing.md), [3.5](lessons/03-05-enols-enolates-alpha-carbon.md) |
| syn / anti | two groups add to the **same** face / to **opposite** faces | [2.5](lessons/02-05-alkenes-electrophilic-addition.md) |
| $4n+2$ | Hückel's magic $\pi$-electron counts: 2, 6, 10, 14, … | [3.1](lessons/03-01-aromaticity-huckel.md) |
| EAS | electrophilic aromatic substitution | [3.2](lessons/03-02-electrophilic-aromatic-substitution.md) |
| o / m / p | ortho (1,2), meta (1,3), para (1,4) ring positions | [3.2](lessons/03-02-electrophilic-aromatic-substitution.md) |
| $\ce{R}$, $\ce{Ar}$, $\ce{X}$ | generic alkyl group, aryl (aromatic) group, halogen | [3.2](lessons/03-02-electrophilic-aromatic-substitution.md) |
| DoU | degrees of unsaturation — rings plus $\pi$ bonds, straight from the formula | [4.1](lessons/04-01-ir-mass-spectrometry.md) |
| $\tilde\nu$ ($\mathrm{cm^{-1}}$) | IR wavenumber — inverse wavelength, proportional to photon energy | [4.1](lessons/04-01-ir-mass-spectrometry.md) |
| $m/z$, $M^{+\bullet}$ | mass-to-charge ratio; the molecular ion (the intact molecule, minus one electron) | [4.1](lessons/04-01-ir-mass-spectrometry.md) |
| $\delta$ (ppm) | NMR chemical shift, relative to TMS at $0$; bigger means more deshielded | [4.2](lessons/04-02-h-nmr-spectroscopy.md) |
| $J$ (Hz) | coupling constant — the spacing shared by two mutually splitting signals | [4.2](lessons/04-02-h-nmr-spectroscopy.md) |
| $\Rightarrow$ | retrosynthetic arrow, read "**is made from**" — points complex to simple | [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md) |

**Overloaded letters, in one place:** $\alpha$ is a Greek carbon label (2.4, 3.5),
an optical rotation (1.6), and an anomer descriptor (4.5). $\delta$ is a partial
charge (2.1) and an NMR shift (4.2). $R$ is a generic alkyl group *and* a
configuration label — the configuration one is always italic and parenthesized,
as in $(R)$-2-butanol. $E$ is an electrophile and an alkene geometry descriptor.

## Definitions

### Hybridization

Mix an atom's $s$ orbital with $n$ of its $p$ orbitals and you get $1+n$ identical
hybrid orbitals, evenly spread in space — the reason carbon makes four equal bonds
at $109.5^\circ$ instead of two at $90^\circ$.

$$\text{steric number} = (\#\,\sigma\text{ bonds}) + (\#\,\text{lone pairs}), \qquad 4 \to sp^3,\quad 3 \to sp^2,\quad 2 \to sp$$

A double or triple bond counts as **one** domain (its $\pi$ bonds ride inside the
same region as the $\sigma$).

*Introduced:* [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md)

### Sigma and pi bond

A $\sigma$ bond is head-on overlap along the internuclear axis — cylindrically
symmetric, so the two atoms spin freely. A $\pi$ bond is sideways overlap of two
parallel unmixed $p$ orbitals, one lobe above and one below; twisting destroys it,
so a $\pi$ bond **locks rotation** and is weaker than a $\sigma$.

$$\text{single} = 1\sigma, \qquad \text{double} = 1\sigma + 1\pi, \qquad \text{triple} = 1\sigma + 2\pi$$

*Introduced:* [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md)

### Bond-line (skeletal) structure

The working shorthand: every line is a bond, every vertex and free end is a
carbon, and hydrogens on carbon are implied — each carbon silently carries enough
to reach four bonds.

*Introduced:* [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md)

### Formal charge

Bookkeeping for who owns which electrons inside one Lewis drawing — not a real,
measurable charge.

$$\text{FC} = (\text{valence e}^-) - (\text{nonbonding e}^-) - \tfrac{1}{2}(\text{bonding e}^-)$$

*Introduced:* [1.2](lessons/01-02-resonance-formal-charge-delocalization.md)

### Resonance hybrid

The molecule is **one** static thing whose electron distribution no single Lewis
drawing can show, so we sketch two or three legal contributors and average them.
It does not flip between them.

Legal contributors share the same atom positions, the same electron count and
overall charge, and never exceed an octet on a period-2 atom.

*Introduced:* [1.2](lessons/01-02-resonance-formal-charge-delocalization.md)

### Delocalization

Spreading a charge or an electron pair over more atoms lowers its energy. This one
fact explains acidity, carbocation stability, aromaticity, amide rigidity, and
half the "why" answers in this course.

*Introduced:* [1.2](lessons/01-02-resonance-formal-charge-delocalization.md)

### Conjugate base

What's left after an acid loses $\ce{H+}$. **Rank acids by ranking their conjugate
bases**: the more stable the anion, the more willingly the proton left, the lower
the $\mathrm{p}K_a$.

$$\ce{HA + H2O <=> A- + H3O+}, \qquad K_a = \frac{[\ce{A-}][\ce{H3O+}]}{[\ce{HA}]}, \qquad \mathrm{p}K_a = -\log K_a$$

*Introduced:* [1.3](lessons/01-03-acids-bases-organic.md)

### Induction

Electron density pulled through the $\sigma$ framework by a nearby electronegative
atom. No new Lewis structure is drawn (that would be resonance), and the effect
dies off within a few bonds.

*Introduced:* [1.3](lessons/01-03-acids-bases-organic.md)

### Conformation

An arrangement reachable by **rotating single bonds only** — so conformers
interconvert billions of times a second and can never be bottled separately.
Contrast **configuration** ($R/S$, $E/Z$), which requires breaking bonds to change.

*Introduced:* [1.4](lessons/01-04-alkanes-conformational-analysis.md)

### Newman projection

The view straight down a chosen C–C bond: front carbon a dot, back carbon a
circle. **Staggered** ($\theta = 60^\circ$) is a minimum; **eclipsed**
($\theta = 0^\circ$) is a maximum — a hill the molecule rolls over, never a
resting state.

*Introduced:* [1.4](lessons/01-04-alkanes-conformational-analysis.md)

### Torsional vs steric strain

**Torsional**: bonds lined up (eclipsing) repel. **Steric**: bulky groups shoved
into the same space push back. Butane's *maxima* are mostly torsional; the gap
between its *minima* (anti vs gauche) is purely steric.

*Introduced:* [1.4](lessons/01-04-alkanes-conformational-analysis.md)

### Chair, axial, equatorial

Cyclohexane puckers into the essentially strain-free **chair** — every angle near
$109.5^\circ$, every neighbor staggered. Each carbon then has one **axial** bond
(straight up or down) and one **equatorial** (splayed outward). A **ring flip**
swaps every axial for equatorial without changing which face a group is on.
Bulky groups prefer equatorial, dodging **1,3-diaxial** crowding.

*Introduced:* [1.4](lessons/01-04-alkanes-conformational-analysis.md)

### Chirality and stereocenter

An object is **chiral** if it is not superimposable on its mirror image. The usual
source in organic chemistry is a **stereocenter**: one carbon carrying **four
different** groups. Two identical groups and the handedness vanishes.

*Introduced:* [1.5](lessons/01-05-chirality-r-s-system.md)

### R and S

The absolute-configuration label. Rank the four groups by CIP priority, point
priority 4 **away** from you, and trace $1 \to 2 \to 3$: clockwise is $R$,
counterclockwise is $S$. If priority 4 points *toward* you, read it and then
**reverse** the answer.

*Introduced:* [1.5](lessons/01-05-chirality-r-s-system.md)

### E and Z

The configuration label for a double bond, which cannot rotate. Take the
higher-CIP-priority group on **each** alkene carbon: same side is **Z**
(*zusammen*), opposite sides is **E** (*entgegen*). For simple cases this is the
old cis/trans, and an E/Z pair is a **diastereomer** pair.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md), used for E2 products in [2.4](lessons/02-04-elimination-e1-e2-choosing.md)

### Enantiomers

Non-superimposable mirror images — **every** stereocenter flipped. Physically
identical in an achiral world (same melting point, same NMR); they part ways only
in optical rotation and toward other chiral partners.

*Introduced:* [1.5](lessons/01-05-chirality-r-s-system.md), [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Diastereomers

Stereoisomers that are **not** mirror images — **some but not all** centers
flipped. Genuinely different compounds: different melting points, different
reactivity, separable on a bench. Cis/trans (E/Z) pairs and ring substituent
patterns live in this bucket too.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Meso compound

A molecule with real stereocenters that is nevertheless **achiral**, because an
internal mirror plane makes it superimposable on its own mirror image. Optically
inactive, and the reason $2^n$ sometimes overcounts.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Racemate

An exactly 50:50 mixture of two enantiomers, written $(\pm)$. Zero net rotation by
**cancellation** — unlike a meso compound, which is one pure achiral substance. A
racemate is separable in principle; meso can never be resolved.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Specific rotation and enantiomeric excess

Normalize the measured twist by how much material the light passed through, then
read composition off it.

$$[\alpha]_D^T = \frac{\alpha}{c\,\ell}, \qquad \mathrm{ee} = \bigl|\%R - \%S\bigr| = \frac{[\alpha]_\text{observed}}{[\alpha]_\text{pure}}\times 100\%$$

with $c$ in grams per millilitre and $\ell$ in decimetres. An 80% ee sample is
90:10 — the minority pairs off into a racemate and the rest is excess.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Fischer projection

Flat shorthand for stereocenters: chain vertical, **vertical bonds point away**,
**horizontal bonds point toward you**. Meso-hunting trick — if the top half mirrors
the bottom half across a horizontal line, the molecule is meso.

*Introduced:* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Nucleophile and electrophile

A **nucleophile** donates an electron pair: a lone pair, a $\pi$ bond, or a
negative charge. An **electrophile** accepts one: a full positive charge, a
$\delta+$ atom, or an empty orbital. Every polar reaction pairs one of each.

*Introduced:* [2.1](lessons/02-01-functional-groups-mechanisms-language.md)

### Leaving group

The fragment that departs *with* the bonding pair. **A good leaving group is a
weak base** — judge it by the $\mathrm{p}K_a$ of its conjugate acid $\ce{H-LG}$:
lower means a more stable anion means a better leaving group.

*Introduced:* [2.1](lessons/02-01-functional-groups-mechanisms-language.md)

### Heterolytic vs homolytic cleavage

**Heterolytic**: the pair stays together and goes to one atom, giving ions —
double-barbed arrows, the whole polar world. **Homolytic**: one electron to each
atom, giving radicals — fishhook arrows.

*Introduced:* [2.1](lessons/02-01-functional-groups-mechanisms-language.md), [2.6](lessons/02-06-alkynes-radicals.md)

### Nucleophilicity vs basicity

Same act (donating a lone pair), different test. **Basicity** is donating to
$\ce{H+}$ at equilibrium — thermodynamics, measured by $\mathrm{p}K_a$.
**Nucleophilicity** is attacking *carbon* in the rate-determining step — kinetics.
Polarizability and solvent pull them apart.

*Introduced:* [2.1](lessons/02-01-functional-groups-mechanisms-language.md)

### Walden inversion

SN2 attacks from the side opposite the leaving group, so the three spectator
groups snap through a planar transition state like an umbrella in the wind. The
**spatial arrangement always inverts**; whether the $R/S$ *letter* flips depends on
whether the incoming group keeps the outgoing group's priority rank.

*Introduced:* [2.2](lessons/02-02-nucleophilic-substitution-sn2.md)

### Carbocation

A carbon with only three bonds and a positive charge — flat, $sp^2$, with an empty
$p$ orbital on both faces. Stabilized by alkyl groups (induction plus
hyperconjugation) and, far more strongly, by resonance.

$$\text{allylic},\ \text{benzylic} \;\gtrsim\; 3^\circ \;>\; 2^\circ \;>\; 1^\circ \;>\; \ce{CH3+}$$

*Introduced:* [2.3](lessons/02-03-sn1-carbocation-rearrangements.md)

### 1,2-shift (rearrangement)

An adjacent H (**hydride shift**) or methyl/alkyl (**alkyl shift**) migrates *with
its bonding pair* onto the cationic carbon, and the positive charge lands where the
migrating group left. It happens only when it buys **more** stability
($1^\circ/2^\circ \to 3^\circ$, or toward allylic/benzylic). A product whose
skeleton has moved is proof a free carbocation existed.

*Introduced:* [2.3](lessons/02-03-sn1-carbocation-rearrangements.md)

### Anti-periplanar

The geometric price of doing E2 in one step: the $\beta$-H and the leaving group
must sit at a $180^\circ$ dihedral so the emerging $p$ orbitals are already
parallel. In a cyclohexane this means **both must be axial** (trans-diaxial) — and
if the ring can't reach that chair, that elimination simply doesn't run.

*Introduced:* [2.4](lessons/02-04-elimination-e1-e2-choosing.md)

### Zaitsev vs Hofmann

**Zaitsev (default):** the **more**-substituted, more stable alkene wins.
**Hofmann (the exception):** a **bulky** base (potassium *tert*-butoxide) can't
reach the crowded interior $\beta$-H, so it takes an accessible terminal one and
gives the **less**-substituted alkene. Base *strength* decides E2-vs-the-rest;
base *bulk* decides Zaitsev-vs-Hofmann.

*Introduced:* [2.4](lessons/02-04-elimination-e1-e2-choosing.md)

### Markovnikov's rule

In adding $\ce{H-X}$ across an unsymmetrical alkene, H goes to the carbon that
already has more hydrogens and X to the more substituted one. The rhyme is a
symptom; the cause is that this route passes through the **more stable
carbocation**. When no free cation forms (bridged ion, hydroboration), reason from
the mechanism instead.

*Introduced:* [2.5](lessons/02-05-alkenes-electrophilic-addition.md)

### Bridged ion (bromonium, mercurinium)

The attacked electrophile wraps back around *both* alkene carbons into a
three-membered ring, sealing off one face. Consequences: no free carbocation, so
**no rearrangement**, and the nucleophile must come from the far side —
**anti** addition.

*Introduced:* [2.5](lessons/02-05-alkenes-electrophilic-addition.md)

### Tautomers (keto–enol)

Constitutional isomers differing by the position of **one hydrogen and one double
bond**, in genuine equilibrium ($\ce{<=>}$, not $\ce{<->}$). For simple carbonyls
the keto form dominates (acetone's enol is about $10^{-6}$), because $\ce{C=O}$
beats $\ce{C=C}$ plus $\ce{O-H}$.

$$\ce{R-C(OH)=CH2 <=> R-CO-CH3}$$

*Introduced:* [2.6](lessons/02-06-alkynes-radicals.md), reused in [3.5](lessons/03-05-enols-enolates-alpha-carbon.md)

### Radical chain

Three phases. **Initiation**: a weak bond (peroxide $\ce{O-O}$) splits under heat
or light to make the first radicals. **Propagation**: a radical reacts with a
closed-shell molecule to give product **plus a new radical**, so the chain feeds
itself. **Termination**: two radicals combine, ending it.

*Introduced:* [2.6](lessons/02-06-alkynes-radicals.md)

### Aromatic, antiaromatic, non-aromatic

**Aromatic** = cyclic + fully conjugated + planar + $4n+2$ $\pi$ electrons →
strongly stabilized (benzene by about $150\ \mathrm{kJ/mol}$). **Antiaromatic** =
the same three structural criteria but $4n$ $\pi$ electrons → actively
*destabilized*, so real rings pucker to escape it. **Non-aromatic** = fails a
structural criterion; no special effect either way.

*Introduced:* [3.1](lessons/03-01-aromaticity-huckel.md)

### Arenium ion (sigma complex)

The intermediate of every EAS: benzene has attacked $\ce{E+}$, one ring carbon is
now $sp^3$ (holding both $\ce{E}$ and $\ce{H}$), aromaticity is broken, and the
positive charge is delocalized over the two **ortho** and the **para** carbons —
never meta. Forming it is the rate-determining step; losing $\ce{H+}$ restores the
ring.

*Introduced:* [3.2](lessons/03-02-electrophilic-aromatic-substitution.md)

### Carbonyl

$\ce{C=O}$: oxygen wins the tug-of-war, so the carbon is $\delta+$ (the
electrophilic hotspot, flat and $sp^2$ at about $120^\circ$) and the oxygen is
$\delta-$ (the basic end). An **aldehyde** has at least one H on that carbon; a
**ketone** has two carbons.

$$\ce{R2C=O <-> R2C+ - O-}$$

*Introduced:* [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md)

### Tetrahedral intermediate

What you get when a nucleophile adds to a carbonyl carbon and the $\pi$ pair folds
onto oxygen. With **no leaving group** (aldehyde, ketone) it *is* the product —
pure addition. With a leaving group (any acyl derivative) it collapses, expelling
that group — substitution.

*Introduced:* [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md), [3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md)

### Hemiacetal and acetal

One alcohol added to a carbonyl gives a **hemiacetal** (one $\ce{OH}$ + one
$\ce{OR}$ on the same carbon); a second alcohol displaces the $\ce{OH}$ to give the
full **acetal** (two $\ce{OR}$). The whole thing is an equilibrium, which is the
point: acetals are inert to base, nucleophiles, and hydride, so they are the
standard carbonyl **protecting group**.

$$\ce{RCHO + 2 R'OH <=>[\ce{H+}] RCH(OR')2 + H2O}$$

*Introduced:* [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md), used in [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md)

### Imine and enamine

Both start as a carbinolamine (a tetrahedral C bearing $\ce{OH}$ and N), then
dehydrate. Count the $\ce{N-H}$ bonds left: a **primary** amine still has one, so
nitrogen forms $\ce{C=N}$ — an **imine** (Schiff base). A **secondary** amine has
none, so the molecule dehydrates toward the $\alpha$-carbon instead, giving a
$\ce{C=C}$ next to N — an **enamine**.

*Introduced:* [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md)

### Nucleophilic acyl substitution (addition–elimination)

A carbonyl carrying a leaving group swaps it for a nucleophile in two moves: add
(the [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md) step), then
eliminate.

$$\ce{R-C(=O)-LG + Nu- -> [R-C(O-)(Nu)-LG] -> R-C(=O)-Nu + LG-}$$

*Introduced:* [3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md)

### Alpha-carbon, enol, enolate

The **$\alpha$-carbon** is any carbon bonded *directly* to the carbonyl carbon; its
hydrogens are $\alpha$-hydrogens, acidified about thirty orders of magnitude
because the resulting charge slides onto oxygen. The anion is the **enolate**; the
neutral tautomer with $\ce{C=C-OH}$ is the **enol**.

$$\ce{{}^{-}C-C=O <-> C=C-O^{-}}$$

The oxygen structure is the major contributor — which is exactly why the
$\alpha$-H was acidic — but the **carbon** end is the nucleophile.

*Introduced:* [3.5](lessons/03-05-enols-enolates-alpha-carbon.md)

### Aldol addition vs condensation

**Addition** (mild base, low temperature) stops at the **β-hydroxy carbonyl**.
**Condensation** (heat or excess base) dehydrates that by E1cb to the
**α,β-unsaturated carbonyl** (an enone), which is favored because the new
$\ce{C=C}$ is conjugated with the $\ce{C=O}$.

*Introduced:* [3.5](lessons/03-05-enols-enolates-alpha-carbon.md)

### Epoxide

A three-membered cyclic ether — the same C–O–C as an inert ether, but bent to
about $60^\circ$, so it is a coiled spring any nucleophile will pry open. The
regiochemistry flips with conditions (see the table below).

*Introduced:* [3.6](lessons/03-06-alcohols-ethers-amines.md)

### Degrees of unsaturation

Rings plus $\pi$ bonds, read straight off the molecular formula before any
spectrum is run.

$$\text{DoU} = \frac{2C + 2 + N - H - X}{2}$$

Ring $=1$, double bond $=1$, triple bond $=2$, benzene ring $=4$. Oxygen never
appears. $\text{DoU} \ge 4$ says "go looking for an aromatic ring."

*Introduced:* [4.1](lessons/04-01-ir-mass-spectrometry.md)

### Chemical shift, integration, multiplicity

The three readings of a $^1$H spectrum. **Shift** ($\delta$, ppm) says what
neighborhood the proton sits in — electron-poor is downfield. **Integration** gives
the *ratio* of protons, never an absolute count. **Multiplicity** counts the
protons on the **adjacent** carbon: $n$ neighbors give $n+1$ lines.

*Introduced:* [4.2](lessons/04-02-h-nmr-spectroscopy.md)

### Chemically equivalent

Nuclei related by a symmetry operation of the molecule share one signal. So the
number of $^1$H signals is the number of proton *environments*, and the number of
$^{13}$C signals is the number of carbon *environments* — not the number of atoms.

*Introduced:* [4.2](lessons/04-02-h-nmr-spectroscopy.md), [4.3](lessons/04-03-c13-nmr-structure-workflow.md)

### Disconnection and synthon

A **disconnection** is breaking a bond on paper, legal only if you can name a real
reaction that would forge it. The idealized fragments are **synthons** (a
carbanion here, a cationic carbon there) — bookkeeping fictions that must be
translated into real **equivalents** (Grignard, acetylide, enolate; aldehyde,
ketone, alkyl halide) before you write the forward step.

*Introduced:* [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md)

### Functional-group interconversion (FGI)

Changing one group into another *without touching the carbon skeleton*, to expose
a legal disconnection. Alkene ⇐ alcohol ⇐ ketone is the standard walk. An FGI
never counts as building carbons.

*Introduced:* [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md)

### Zwitterion

One molecule carrying a $+$ and a $-$ at once. An amino acid's carboxyl simply
hands its proton to its own amine, so the "neutral" form in water is
$\ce{{}^{+}H3N-CHR-COO^{-}}$. The pH at which the charges balance is the
**isoelectric point**, pI.

*Introduced:* [4.5](lessons/04-05-taste-of-biomolecules.md)

### Anomeric carbon and anomers

When a sugar's own hydroxyl adds to its own carbonyl (an intramolecular
hemiacetal), the former carbonyl carbon becomes $sp^3$ with four different groups —
the **anomeric carbon**, the only ring carbon bonded to two oxygens. Its new
$\ce{OH}$ can point down ($\alpha$) or up ($\beta$): two diastereomers called
**anomers**, interconverting through the open chain (**mutarotation**).

*Introduced:* [4.5](lessons/04-05-taste-of-biomolecules.md)

### Hydrogen bonding

An $\ce{O-H}$ or $\ce{N-H}$ hydrogen sharing itself with a lone pair on a nearby O
or N. The lessons *use* it constantly without defining it — it is why the IR
$\ce{O-H}$ band is broad and rounded, why protic solvents cage anionic
nucleophiles, why $\ce{O-H}$ and $\ce{N-H}$ protons exchange too fast to couple in
NMR, and how DNA's A–T (two bonds) and G–C (three bonds) pairs hold.

*Used by:* [2.2](lessons/02-02-nucleophilic-substitution-sn2.md), [4.1](lessons/04-01-ir-mass-spectrometry.md), [4.2](lessons/04-02-h-nmr-spectroscopy.md), [4.5](lessons/04-05-taste-of-biomolecules.md)

## Formulas and rules

### Reaction map — substrate to mechanism

The spine of the course. Find the substrate class, then the reagent; the last
column is the knob that decides the product when more than one is possible.

| Substrate | Reagent / conditions | Mechanism | Product | What controls selectivity |
|---|---|---|---|---|
| $1^\circ$ alkyl halide | strong Nu, weak base ($\ce{CN-}$, $\ce{N3-}$, $\ce{I-}$, $\ce{RS-}$), polar aprotic | **SN2** | substituted alkane | sterics — unhindered backside |
| $1^\circ$ alkyl halide | bulky strong base ($\ce{(CH3)3CO-}$) | **E2** | less-substituted alkene | base bulk → Hofmann |
| $2^\circ$ alkyl halide | strong Nu, weak base | **SN2** | substituted alkane, **inverted** | Nu strength vs basicity |
| $2^\circ$ alkyl halide | strong base ($\ce{RO-}$, $\ce{HO-}$), heat | **E2** | Zaitsev alkene, E over Z | anti-periplanar geometry |
| $2^\circ$ / $3^\circ$ alkyl halide | weak Nu / solvent, polar protic (solvolysis) | **SN1 + E1** mix | racemic substitution + Zaitsev alkene | carbocation stability; heat tilts to E1 |
| $3^\circ$ alkyl halide | strong base | **E2** | Zaitsev alkene | no backside room for SN2 |
| $3^\circ$ alkyl halide | strong Nu, weak base | **SN1 / E1** | mixture | cation stability, not Nu strength |
| alkene | $\ce{HBr}$, $\ce{HCl}$ (no peroxide) | electrophilic **addition** | Markovnikov halide | most stable carbocation (**can rearrange**) |
| alkene | $\ce{H2O}$ / $\ce{H2SO4}$ | electrophilic **addition** | Markovnikov alcohol | same cation (**can rearrange**) |
| alkene | $\ce{Br2}$ | **addition** via bromonium | *anti* 1,2-dibromide | bridged ion blocks one face |
| alkene | $\ce{Br2}$ / $\ce{H2O}$ | **addition** via bromonium | halohydrin, $\ce{OH}$ on more substituted C, anti | more $\delta+$ at the substituted carbon |
| alkene | $\ce{BH3}$, then $\ce{H2O2}$/$\ce{OH-}$ | concerted **addition** | **anti-Markovnikov, syn** alcohol | boron takes the less hindered carbon; no cation |
| alkene | $\ce{Hg(OAc)2}$/$\ce{H2O}$, then $\ce{NaBH4}$ | **addition** via mercurinium | Markovnikov alcohol, **no rearrangement** | bridged ion |
| alkene | $\ce{HBr}$ **+ peroxide** | **radical addition** | anti-Markovnikov bromide | most stable *radical*; $\ce{Br^{.}}$ adds first |
| terminal alkyne | $\ce{NaNH2}$, then $1^\circ$ $\ce{R-X}$ | deprotonation + **SN2** | internal alkyne (**new C–C**) | halide must be methyl or $1^\circ$, else E2 |
| alkyne | $\ce{H2O}$/$\ce{H2SO4}$, $\ce{HgSO4}$ | **addition** → enol → tautomer | **ketone** (methyl ketone from terminal) | Markovnikov |
| alkyne | $\ce{BH3}$, then $\ce{H2O2}$/$\ce{NaOH}$ | **addition** → enol → tautomer | **aldehyde** | anti-Markovnikov |
| arene | $\ce{E+}$ (see the EAS table) | **EAS** | ring H replaced | ring substituents set rate and o/m/p |
| aldehyde / ketone | $\ce{Nu-}$ (see the carbonyl table) | nucleophilic **addition** | tetrahedral adduct → alcohol | no leaving group, so it stops |
| acyl derivative | $\ce{Nu-}$ | **acyl substitution** (add–eliminate) | new derivative | reactivity ladder — downhill only |
| carbonyl with $\alpha$-H | base ($\ce{HO-}$, LDA) then $\ce{R-X}$ or a second $\ce{C=O}$ | **enolate alkylation / aldol** | new C–C bond at $\alpha$ | temperature: addition vs condensation |
| alcohol | $\ce{SOCl2}$ / $\ce{PBr3}$ | substitution | alkyl halide | turns a bad LG into a good one |
| alcohol | $\ce{H2SO4}$, $\Delta$ | **E1** | Zaitsev alkene | protonation makes water the LG |
| alcohol | PCC / $\ce{KMnO4}$ / Jones | oxidation | see the oxidation ladder | how many carbinol C–H remain |
| alkoxide + $1^\circ$ halide | — | **SN2** (Williamson) | ether | halide must be unhindered |
| epoxide | $\ce{Nu-}$, basic | **SN2** | attack at **less**-hindered carbon | sterics |
| epoxide | $\ce{H+}$ then Nu | SN1-like | attack at **more**-substituted carbon | developing positive charge |
| amine + carbonyl | $1^\circ$ / $2^\circ$ amine | addition–dehydration | **imine** / **enamine** | how many $\ce{N-H}$ remain |

*From* [2.2](lessons/02-02-nucleophilic-substitution-sn2.md)–[2.6](lessons/02-06-alkynes-radicals.md), [3.2](lessons/03-02-electrophilic-aromatic-substitution.md)–[3.6](lessons/03-06-alcohols-ethers-amines.md)

### The SN1 / SN2 / E1 / E2 decision grid

| Substrate | Weak base/Nu ($\ce{H2O}$, $\ce{ROH}$) | Strong Nu, weak base ($\ce{I-}$, $\ce{N3-}$, $\ce{RS-}$) | Strong base ($\ce{RO-}$, $\ce{HO-}$) |
|---|---|---|---|
| $1^\circ$ | little reaction | **SN2** | **SN2** (bulky base → **E2**) |
| $2^\circ$ | **SN1 / E1** mix | **SN2** | **E2** |
| $3^\circ$ | **SN1 / E1** mix | **SN1 / E1** mix | **E2** |

Three anchors carry the grid: **no SN2 at $3^\circ$** (no backside room), **no
carbocation at $1^\circ$** (so no SN1/E1), and **strong bulky base ⇒ E2** at any
class. Two modifiers: **heat favors elimination**, and **bulk favors Hofmann**.

*From* [2.4](lessons/02-04-elimination-e1-e2-choosing.md)

### The four mechanisms side by side

| | SN2 | SN1 | E2 | E1 |
|---|---|---|---|---|
| steps | 1 (concerted) | 2 (ionize, capture) | 1 (concerted) | 2 (ionize, deprotonate) |
| rate law | $k[\text{sub}][\text{Nu}]$ | $k[\text{sub}]$ | $k[\text{sub}][\text{base}]$ | $k[\text{sub}]$ |
| substrate | methyl $> 1^\circ > 2^\circ \ggg 3^\circ$ | $3^\circ$, allylic, benzylic | any, best $3^\circ$ | $3^\circ > 2^\circ$ |
| solvent | polar **aprotic** | polar **protic** | either | polar protic |
| stereochemistry | **inversion** | **racemization** | anti-periplanar → E over Z | mixture |
| rearranges? | never | **yes** | never | **yes** |

*From* [2.2](lessons/02-02-nucleophilic-substitution-sn2.md), [2.3](lessons/02-03-sn1-carbocation-rearrangements.md), [2.4](lessons/02-04-elimination-e1-e2-choosing.md)

### Leaving-group quality

Judge by the conjugate acid: **lower $\mathrm{p}K_a$ of $\ce{H-LG}$ means a better
leaving group.**

$$\ce{TsO-} \;\gtrsim\; \ce{I-} \;>\; \ce{Br-} \;>\; \ce{Cl-} \;\ggg\; \ce{F-} \;\ggg\; \ce{RCOO-} \;>\; \ce{RO-},\ \ce{HO-} \;\ggg\; \ce{R2N-},\ \ce{H-},\ \ce{R-}$$

Tosylate outranks its raw $\mathrm{p}K_a$ ($\ce{TsOH} \approx -2.8$) because the
charge is delocalized over three sulfonate oxygens — and it is how you make an
alcohol leave cleanly. $\ce{HO-}$ and $\ce{R2N-}$ are strong bases and therefore
terrible leaving groups; that inversion trips up everyone once.

*From* [2.1](lessons/02-01-functional-groups-mechanisms-language.md)

### The pKa ladder

Memorize the landmarks — every proton-transfer question is read off this list.

| Acid | $\mathrm{p}K_a$ | | Acid | $\mathrm{p}K_a$ |
|---|---|---|---|---|
| $\ce{HI}$ | $-10$ | | 1,3-dicarbonyl $\alpha$-H | $\sim 9\text{–}11$ |
| $\ce{HBr}$ | $-9$ | | ammonium $\ce{RNH3+}$ | $\sim 9\text{–}10$ |
| $\ce{HCl}$ | $-7$ | | phenol | $\sim 10$ |
| $\ce{TsOH}$ | $-2.8$ | | water | $15.7$ |
| protonated alcohol $\ce{ROH2+}$ | $\sim -2$ | | cyclopentadiene $\ce{CH2}$ | $\sim 16$ |
| $\ce{H3O+}$ | $-1.7$ | | alcohol $\ce{ROH}$ | $\sim 16\text{–}18$ |
| $\ce{HF}$ | $3.2$ | | aldehyde / ketone $\alpha$-H | $\sim 20$ |
| carboxylic acid | $\sim 4\text{–}5$ | | ester $\alpha$-H, terminal alkyne | $\sim 25$ |
| anilinium $\ce{C6H5NH3+}$ | $\sim 4.6$ | | amine $\ce{R2NH}$, ammonia | $\sim 38$ |
| | | | vinyl ($sp^2$) C–H · alkane | $\sim 44$ · $\sim 50$ |

**ARIO**, in decreasing order of pull, ranks the conjugate base's stability:
**A**tom (across a row, electronegativity wins; down a group, *size* wins),
**R**esonance (how many atoms share the charge), **I**nduction (electron-withdrawing
neighbors, dying off within a few bonds), **O**rbital (more $s$-character holds the
lone pair tighter: $sp > sp^2 > sp^3$).

*From* [1.3](lessons/01-03-acids-bases-organic.md), [3.5](lessons/03-05-enols-enolates-alpha-carbon.md)

### Predicting a proton transfer

Equilibrium always favors the side holding the **weaker** (higher-$\mathrm{p}K_a$)
acid.

$$K_{eq} = 10^{\,\Delta\mathrm{p}K_a}, \qquad \Delta\mathrm{p}K_a = \mathrm{p}K_a^{\text{product}} - \mathrm{p}K_a^{\text{reactant}}$$

**To deprotonate something quantitatively, pick a base whose conjugate acid has a
higher $\mathrm{p}K_a$ than your acid.** ($\ce{NaNH2}$, conjugate acid 38, takes a
terminal alkyne at 25; $\ce{HO-}$, conjugate acid 15.7, does not.)

*From* [1.3](lessons/01-03-acids-bases-organic.md)

### Hybridization, geometry, and bond strength

| Hybrid | Domains | Geometry | Angle | Leftover $p$ | $s$-character |
|---|---|---|---|---|---|
| $sp^3$ | 4 | tetrahedral | $109.5^\circ$ | 0 | $25\%$ |
| $sp^2$ | 3 | trigonal planar | $120^\circ$ | 1 | $33\%$ |
| $sp$ | 2 | linear | $180^\circ$ | 2 | $50\%$ |

More $s$-character pulls the bonding electrons closer to the nucleus: bonds get
**shorter and stronger**, and the C–H gets **more acidic**
($sp$ 25 → $sp^2$ 44 → $sp^3$ 50 on the ladder above). Lone pairs are domains
too — water's O and an amine's N are both $sp^3$.

*From* [1.1](lessons/01-01-bonding-hybridization-molecular-shape.md)

### Conformational energies

| Conformer | $\theta$ | Cost above anti | Cause |
|---|---|---|---|
| anti (butane) | $180^\circ$ | $0$ (global minimum) | — |
| gauche | $60^\circ$ | $\approx 3.8\ \mathrm{kJ/mol}$ | purely **steric** |
| $\ce{CH3}$/$\ce{H}$ eclipsed | $120^\circ$ | $\approx 16\ \mathrm{kJ/mol}$ | torsional + some steric |
| fully eclipsed (syn) | $0^\circ$ | $\approx 19\ \mathrm{kJ/mol}$ | both, stacked |
| ethane staggered → eclipsed | — | $\approx 12\ \mathrm{kJ/mol}$ | torsional only |

Ring: chair ≪ twist-boat < boat. Axial methyl on cyclohexane costs about
$7.6\ \mathrm{kJ/mol}$ (roughly 95% equatorial at equilibrium); *tert*-butyl's
A-value near $21\ \mathrm{kJ/mol}$ **locks** the ring into one chair.

*From* [1.4](lessons/01-04-alkanes-conformational-analysis.md)

### CIP priority rules

1. Compare the atoms **directly attached** by atomic number $Z$ — higher wins.
2. On a tie, walk outward one bond and compare the *sets* on each branch, deciding
   at the **first point of difference** (highest against highest, then next).
3. A double or triple bond counts as **duplicate atoms**: a $\ce{C=O}$ carbon
   "sees" $(\mathrm{O},\mathrm{O},\ldots)$; a nitrile carbon sees
   $(\mathrm{N},\mathrm{N},\mathrm{N})$.

Never rank by group size, mass, or bulk — one far-out iodine beats a large
all-carbon branch the moment you reach it. Common results worth knowing:
$\ce{Br} > \ce{Cl} > \ce{SH} > \ce{F} > \ce{OH} > \ce{NH2} > \ce{CHO} > \ce{CH2OH} > \ce{C#CH} > \ce{CH2CH3} > \ce{CH3} > \ce{H}$.

*From* [1.5](lessons/01-05-chirality-r-s-system.md)

### Counting stereoisomers

$n$ stereocenters give **at most** $2^n$ stereoisomers. Internal symmetry (a meso
relationship) cuts the count: two stereocenters with identical halves give **3**,
not 4 — one enantiomeric pair plus one achiral meso form. Always check for meso
before quoting $2^n$.

| Relationship | Test | Chiral? | Rotation |
|---|---|---|---|
| enantiomers | **every** center flipped | both | equal and opposite |
| diastereomers | **some but not all** flipped | usually | unrelated values |
| meso | all flipped but superimposable (internal mirror) | **no** | $0^\circ$, intrinsically |
| racemate | 50:50 of two enantiomers | components are | $0^\circ$, by cancellation |

*From* [1.6](lessons/01-06-diastereomers-meso-optical-activity.md)

### Functional-group priority and naming

Never stated by a lesson, but assumed by every product name in the course. The
**senior** group (highest in this list that is present) picks the suffix and gets
the lowest locant; everything else becomes a prefix.

| Rank | Group | As suffix | As prefix |
|---|---|---|---|
| 1 | carboxylic acid $\ce{-COOH}$ | -oic acid | carboxy- |
| 2 | anhydride $\ce{-CO-O-CO-}$ | -oic anhydride | — |
| 3 | ester $\ce{-COOR}$ | alkyl -oate | alkoxycarbonyl- |
| 4 | acyl halide $\ce{-COX}$ | -oyl halide | halocarbonyl- |
| 5 | amide $\ce{-CONH2}$ | -amide | amido- |
| 6 | nitrile $\ce{-C#N}$ | -nitrile | cyano- |
| 7 | aldehyde $\ce{-CHO}$ | -al | oxo- (formyl-) |
| 8 | ketone $\ce{C=O}$ | -one | oxo- |
| 9 | alcohol $\ce{-OH}$ | -ol | hydroxy- |
| 10 | amine $\ce{-NH2}$ | -amine | amino- |
| 11 | alkene / alkyne | -ene / -yne | alkenyl- / alkynyl- |
| 12 | ether, halide, alkyl | never a suffix | alkoxy-, halo-, alkyl- |

Then: find the **longest chain containing the senior group**, number from the end
that gives it the lowest locant, cite substituents alphabetically (ignoring
multiplying prefixes such as di-, tri-), and add stereodescriptors in front —
$(2R,3S)$-, $(E)$-, *cis*-, *trans*-. Ring positions may be cited as
ortho / meta / para on a benzene.

*Assumed by* [2.4](lessons/02-04-elimination-e1-e2-choosing.md), [2.5](lessons/02-05-alkenes-electrophilic-addition.md), [3.6](lessons/03-06-alcohols-ethers-amines.md), [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md) *— stated only here*

### The functional-group map

Each group in one line — what makes it react. "Nu" = tends to attack; "E" = tends
to be attacked.

| Group | Formula | Role |
|---|---|---|
| alkane | $\ce{C-C}$, $\ce{C-H}$ | inert scaffolding |
| alkene / alkyne | $\ce{C=C}$, $\ce{C#C}$ | **Nu** — exposed $\pi$ density |
| alkyl halide | $\ce{C-X}$ | **E** at carbon, with a built-in leaving group |
| alcohol | $\ce{C-OH}$ | mild **Nu**; weakly acidic; leaves only after protonation |
| ether | $\ce{C-O-C}$ | unreactive (a solvent) — unless strained into an epoxide |
| amine | $\ce{C-NH2}$ | best neutral **Nu**, and the standard organic base |
| aldehyde / ketone | $\ce{RCHO}$ / $\ce{R2CO}$ | strong **E** at the carbonyl carbon |
| acid & derivatives | $\ce{-COOH}$, $\ce{-COX}$, $\ce{-COOR}$, $\ce{-CONH2}$ | **E** carbon *plus* a leaving group |
| nitrile | $\ce{-C#N}$ | **E** at carbon, the carbonyl's nitrogen cousin |
| aromatic ring | benzene | stabilized **Nu** — reacts only with strong electrophiles |

*From* [2.1](lessons/02-01-functional-groups-mechanisms-language.md)

### Aromaticity checklist

All four must hold: **cyclic**, **fully conjugated** (every ring atom carries a $p$
orbital — no $sp^3$ break), **planar**, and $4n+2$ $\pi$ electrons.

Counting: each ring double bond gives **2**; a lone pair counts **only** if it sits
in a $p$ orbital that is part of the loop; an empty $p$ orbital gives **0** but
keeps the loop conjugated.

| Species | $\pi$ e⁻ | Verdict |
|---|---|---|
| benzene | 6 | aromatic (about $150\ \mathrm{kJ/mol}$ of stabilization) |
| cyclobutadiene (planar) | 4 | antiaromatic — distorts to escape |
| cyclooctatetraene (tub) | 8 if planar | non-aromatic; puckers, adds $\ce{Br2}$ like an alkene |
| cyclopentadienyl anion | 6 | aromatic — why that C–H has $\mathrm{p}K_a \approx 16$ |
| tropylium cation | 6 | aromatic — why the cation forms so easily |
| pyridine | 6 | aromatic; N lone pair is **in-plane** $sp^2$, not counted → a base |
| pyrrole | 6 | aromatic; N lone pair is **in the ring** $p$ orbital, counted → weak base |
| furan | 6 | aromatic; one O lone pair in the ring, the other in-plane |

*From* [3.1](lessons/03-01-aromaticity-huckel.md)

### EAS — generating the electrophile

$$\ce{C6H6 + E+ ->[\text{slow, RDS}] arenium+ ->[-H+][\text{fast}] C6H5E}$$

| Reaction | Reagents | Electrophile |
|---|---|---|
| nitration | $\ce{HNO3}$ / $\ce{H2SO4}$ | nitronium $\ce{NO2+}$ |
| halogenation | $\ce{Br2}$/$\ce{FeBr3}$, $\ce{Cl2}$/$\ce{AlCl3}$ | $\ce{Br+}$ equivalent |
| sulfonation | $\ce{SO3}$ / $\ce{H2SO4}$ | $\ce{SO3}$ (**reversible** — a blocking group) |
| Friedel–Crafts alkylation | $\ce{RCl}$ / $\ce{AlCl3}$ | carbocation $\ce{R+}$ — **rearranges, polyalkylates** |
| Friedel–Crafts acylation | $\ce{RCOCl}$ / $\ce{AlCl3}$ | acylium $\ce{RCO+}$ — resonance-stabilized, **clean, mono** |

To attach a straight chain cleanly: **acylate, then reduce** the ketone.

*From* [3.2](lessons/03-02-electrophilic-aromatic-substitution.md)

### EAS — directing and activating

| Substituent | Effect on rate | Directs to |
|---|---|---|
| $\ce{-NH2}$, $\ce{-NHR}$, $\ce{-OH}$, $\ce{-OR}$ | strong activator (lone-pair donation) | **ortho / para** |
| alkyl $\ce{-R}$, aryl | weak activator (hyperconjugation) | **ortho / para** |
| $\ce{-F}$, $\ce{-Cl}$, $\ce{-Br}$, $\ce{-I}$ | **deactivator** (induction) | **ortho / para** (resonance) |
| $\ce{-CHO}$, $\ce{-COR}$, $\ce{-COOH}$, $\ce{-COOR}$ | deactivator | **meta** |
| $\ce{-NO2}$, $\ce{-SO3H}$, $\ce{-C#N}$, $\ce{-NR3+}$ | strong deactivator | **meta** |

The rule reads straight off the arenium ion: its $\oplus$ sits on the two ortho and
the para carbons, **never** meta. Donors love the charge landing next door, so they
send it o/p; withdrawers can't stand it next door, so they push it meta. Halogens
are the one split verdict — deactivating by induction, o/p-directing by resonance.
Para usually beats ortho on sterics.

*From* [3.2](lessons/03-02-electrophilic-aromatic-substitution.md)

### Carbonyl — nucleophile decides the product

| Reagent | Nucleophile delivered | Product |
|---|---|---|
| $\ce{NaBH4}$, $\ce{LiAlH4}$ | hydride $\ce{H-}$ | alcohol ($1^\circ$ from aldehyde, $2^\circ$ from ketone) |
| $\ce{RMgX}$, $\ce{RLi}$ | carbanion $\ce{R-}$ | alcohol with a **new C–C bond** ($3^\circ$ from a ketone) |
| $\ce{H2O}$ | $\ce{H2O}$ / $\ce{HO-}$ | hydrate (gem-diol) |
| $\ce{R'OH}$, acid cat. | alcohol | hemiacetal → **acetal** (protecting group) |
| $\ce{HCN}$ | $\ce{CN-}$ | cyanohydrin |
| $\ce{R'NH2}$ ($1^\circ$ amine) | nitrogen | **imine** ($\ce{C=N}$) |
| $\ce{R'2NH}$ ($2^\circ$ amine) | nitrogen | **enamine** ($\ce{C=C-N}$) |

**Aldehydes out-react ketones** — less crowded and less electron-rich at the
carbonyl carbon. Acid catalysis helps *weak* nucleophiles by supercharging the
electrophile; it **destroys** strong ones (hydride, Grignard), which is why the
proton workup is always a separate second step.

*From* [3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md)

### Acyl derivative reactivity ladder

$$\text{acyl chloride} \;>\; \text{anhydride} \;>\; \text{ester} \approx \text{carboxylic acid} \;>\; \text{amide}$$

Two effects agree: **leaving-group ability** ($\ce{Cl-}$ excellent, $\ce{R2N-}$
awful) and **resonance donation** by the attached heteroatom (chlorine barely
donates, nitrogen donates hard and quenches the carbonyl). **The ladder only runs
downhill** — a plain nucleophile can never climb it; going up needs a special
reagent such as $\ce{SOCl2}$.

| Reaction | Conditions | Note |
|---|---|---|
| acyl chloride + $\ce{R'OH}$ / $\ce{R'NH2}$ | none needed | fast, effectively irreversible |
| Fischer esterification | $\ce{RCOOH}$ + $\ce{R'OH}$, $\ce{H+}$ | *lateral* move → **equilibrium**; drive it by removing water |
| saponification | ester + $\ce{NaOH}$ | **irreversible** — ends in the resonance-stabilized carboxylate |
| amide hydrolysis | forcing acid or base | bottom of the ladder, hence sluggish |

*From* [3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md)

### Enolate chemistry

| Step | Reagent | Result |
|---|---|---|
| make the enolate | $\ce{HO-}$ (catalytic, partial) or **LDA** (full, at low temperature) | nucleophilic $\alpha$-carbon |
| $\alpha$-alkylation | then $1^\circ$ $\ce{R-X}$ | new C–C $\sigma$ bond by **SN2** |
| aldol addition | then a second $\ce{C=O}$, mild base, cold | **β-hydroxy carbonyl** |
| aldol condensation | heat or excess base | **α,β-unsaturated carbonyl** (E1cb dehydration) |

Use LDA when you need the ketone converted *fully* to enolate before the
electrophile arrives; 1,3-dicarbonyls ($\mathrm{p}K_a \approx 9\text{–}11$) need
only a mild base.

*From* [3.5](lessons/03-05-enols-enolates-alpha-carbon.md)

### Alcohol oxidation ladder

Oxidation removes an H from the **carbinol carbon** (the one bearing $\ce{OH}$), so
it climbs only while such an H remains.

| Alcohol | PCC (mild) | $\ce{KMnO4}$ / Jones (strong) |
|---|---|---|
| $1^\circ$ $\ce{RCH2OH}$ | **aldehyde** $\ce{RCHO}$ | **carboxylic acid** $\ce{RCOOH}$ |
| $2^\circ$ $\ce{R2CHOH}$ | ketone | ketone (same — only one rung exists) |
| $3^\circ$ $\ce{R3COH}$ | no reaction | no reaction |

Companion interconversions: $\ce{ROH ->[\ce{SOCl2}] RCl}$,
$\ce{ROH ->[\ce{PBr3}] RBr}$, $\ce{ROH ->[\ce{NaH}] RO- }$ (alkoxide, for
Williamson), $\ce{ROH ->[\ce{H2SO4}][\Delta] alkene}$ (E1, Zaitsev).

*From* [3.6](lessons/03-06-alcohols-ethers-amines.md)

### Amine basicity

| Amine | Conjugate-acid $\mathrm{p}K_a$ | Why |
|---|---|---|
| alkylamine $\ce{RNH2}$ | $\sim 10\text{–}11$ | lone pair localized on N |
| aniline $\ce{C6H5NH2}$ | $\sim 4.6$ | lone pair **delocalized into the ring** |
| pyridine | $\sim 5$ | lone pair in-plane, available but on $sp^2$ N |
| pyrrole | essentially non-basic | lone pair committed to the aromatic sextet |
| amide | non-basic | lone pair donated into the carbonyl |

The single rule: **delocalization equals unavailability.**

*From* [3.6](lessons/03-06-alcohols-ethers-amines.md), [3.1](lessons/03-01-aromaticity-huckel.md)

### IR — diagnostic bands

Each bond is a spring: $\tilde\nu \propto \sqrt{k/\mu}$, so stiffer bonds and
lighter atoms ring higher. The $x$-axis runs **backward** (4000 on the left) and
bands point **down**.

| Bond | $\tilde\nu$ ($\mathrm{cm^{-1}}$) | Look |
|---|---|---|
| $\ce{O-H}$ | $3200$–$3550$ | **broad**, rounded; a carboxylic acid smears to $2500$–$3300$ |
| $\ce{N-H}$ | $3300$–$3500$ | sharper; amines may show one or two spikes |
| $\ce{C-H}$ | $\sim 2900$ | universal, rarely diagnostic |
| $\ce{C#N}$, $\ce{C#C}$ | $2100$–$2260$ | thin, in an otherwise empty window |
| $\ce{C=O}$ | $1700$–$1750$ | **strong and sharp — the most useful band there is** |
| $\ce{C=C}$ | $\sim 1650$ | weak to moderate |
| fingerprint | below $\sim 1500$ | match against a reference, don't assign |

Inside the carbonyl window: **ester $\sim 1740$**, **ketone $\sim 1715$**,
**acid $\sim 1710$** (plus the giant broad $\ce{O-H}$), **amide $\sim 1650$**.
Absences are evidence: no band near 1700 rules out *every* carbonyl at once.

*From* [4.1](lessons/04-01-ir-mass-spectrometry.md)

### Mass spectrometry — losses and isotopes

| Mass lost | Fragment | | Isotope pattern | Verdict |
|---|---|---|---|---|
| $15$ | $\ce{CH3}$ | | $M : M{+}2 \approx 3:1$ | **chlorine** |
| $18$ | $\ce{H2O}$ (an alcohol) | | $M : M{+}2 \approx 1:1$ | **bromine** |
| $29$ | $\ce{CHO}$ **or** $\ce{C2H5}$ | | $M{+}1$ height | $\approx 1.1\%\times(\#\,\mathrm{C})$ |
| $45$ | $\ce{COOH}$ or $\ce{OC2H5}$ | | base peak $43$ | $\ce{CH3CO+}$ acylium |

*From* [4.1](lessons/04-01-ir-mass-spectrometry.md)

### Proton NMR — shifts and splitting

| Proton | $\delta$ (ppm) | | Pattern | Meaning |
|---|---|---|---|---|
| TMS reference | $0$ | | singlet | no H on the neighboring carbon |
| alkyl $\ce{CH3}$, $\ce{CH2}$ | $0.9$–$1.5$ | | triplet + quartet, $3:2$ | **ethyl** $\ce{-CH2CH3}$ |
| allylic, $\alpha$-to-$\ce{C=O}$ | $2.0$–$2.5$ | | doublet (6H) + septet (1H) | **isopropyl** |
| next to O or N ($\ce{OCH2}$) | $3.3$–$4.1$ | | broad singlet | exchanging $\ce{O-H}$ / $\ce{N-H}$ |
| vinyl $\ce{C=C-H}$ | $5$–$6.5$ | | line intensities | Pascal's triangle |
| aromatic $\ce{Ar-H}$ | $6.5$–$8$ | | shared $J$ | the two signals that split each other |
| aldehyde $\ce{CHO}$ | $9.5$–$10$ | | | |
| carboxylic acid $\ce{COOH}$ | $10$–$12$ | | | |

**Multiplicity is $n+1$**, where $n$ counts the protons on the **adjacent** carbon —
not the protons producing the signal. Equivalent protons never split each other.
Two things push $\delta$ downfield: an electronegative neighbor (induction) and
ring-current **anisotropy** (why aromatic and aldehyde H sit so far out).

*From* [4.2](lessons/04-02-h-nmr-spectroscopy.md)

### Carbon-13 NMR — shift bands

Signals = number of **inequivalent carbons**. Spectra are proton-decoupled, so
every peak is a singlet, and heights are **not** integrated.

| Carbon type | $\delta$ (ppm) |
|---|---|
| $sp^3$ C bonded only to C/H | $10$–$40$ |
| $sp^3$ C bonded to O or N | $40$–$70$ |
| alkyne ($sp$) | $65$–$90$ |
| alkene / aromatic ($sp^2$) | $110$–$150$ |
| ester, acid, amide $\ce{C=O}$ | $165$–$180$ |
| ketone, aldehyde $\ce{C=O}$ | $190$–$210$ |

Anything past $\sim 160$ is a near-certain carbonyl, and the split at 180 vs 190 is
what separates an ester/acid from a ketone. DEPT sorts every peak as $\ce{CH3}$,
$\ce{CH2}$, $\ce{CH}$, or quaternary (which vanishes).

*From* [4.3](lessons/04-03-c13-nmr-structure-workflow.md)

### The structure-determination workflow

1. **Formula → DoU.** That is your budget of rings and $\pi$ bonds.
2. **IR → functional groups.** Carbonyl near 1700? Broad $\ce{O-H}$? Record the
   absences too.
3. **MS → weight and pieces.** Confirm $M^+$; read the neutral losses and isotope
   doublets.
4. **$^{13}$C → carbon environments.** Count signals; read the bands.
5. **$^1$H → fragments.** Shift, integration ratio, $n+1$ splitting.
6. **Assemble** into one structure that spends exactly the DoU budget and uses
   every atom.
7. **Verify** by predicting the spectra *from* your structure. An unexplained peak
   means the structure is wrong, not the peak.

*From* [4.3](lessons/04-03-c13-nmr-structure-workflow.md)

### Retrosynthesis — legal disconnections

Cut only at a C–C bond **adjacent to a functional group**, and only if a row below
re-forges it.

| Disconnect | Carbanion equivalent | Electrophile | Forward reaction |
|---|---|---|---|
| C–C at a carbinol carbon ($\ce{-OH}$) | Grignard $\ce{RMgX}$, $\ce{RLi}$, acetylide | aldehyde or ketone | nucleophilic addition |
| C$_\alpha$–C of a β-hydroxy carbonyl | enolate | aldehyde or ketone | aldol |
| aryl–C (ketone or alkyl) | — | acyl chloride / alkyl halide | Friedel–Crafts |
| C–C at a primary centre | $\ce{CN-}$, acetylide | $1^\circ$ alkyl halide | SN2 |

$2^\circ$ alcohol ⇒ **aldehyde** + Grignard; $3^\circ$ alcohol ⇒ **ketone** +
Grignard. If no row fits, run an **FGI** first (alkene ⇐ alcohol ⇐ ketone).
**Protect** any $\ce{-OH}$, $\ce{N-H}$, or spare $\ce{C=O}$ before making or using
a Grignard — the acetal (1,3-dioxolane from ethylene glycol plus acid) is the
standard carbonyl helmet, removed with aqueous acid.

*From* [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md)

### Biomolecules in course vocabulary

| Family | Really is | Key linkage |
|---|---|---|
| carbohydrate | polyhydroxy aldehyde or ketone | intramolecular **hemiacetal** → ring; **glycosidic** bond = acetal |
| protein | chain of amino acids | **peptide bond** = amide, from acyl substitution; planar by resonance |
| lipid (triglyceride) | triester of glycerol | **ester**; a *cis* $\ce{C=C}$ kinks the chain and drops the melting point |
| nucleic acid | sugar + base + phosphate | **phosphodiester** backbone; A–T (2) and G–C (3) hydrogen bonds |

*From* [4.5](lessons/04-05-taste-of-biomolecules.md)

## Assumed, not taught here

This is a Tier 1 course, so it derives most of its own machinery — but it inherits
the following from general chemistry and uses them without re-deriving.

| Fact | Where it's taught |
|---|---|
| Lewis structures and the formal-charge formula | [general-chemistry 1.4](../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md) |
| VSEPR: electron domains → molecular shape | [general-chemistry 1.5](../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| Electronegativity, atomic size, and periodic trends (the "A" in ARIO) | [general-chemistry 1.3](../general-chemistry/lessons/01-03-periodic-trends.md) |
| $K_a$, $\mathrm{p}K_a$, and what a strong acid means | [general-chemistry 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) |
| Equilibrium constants and Le Châtelier (Fischer esterification, acetal formation, tautomer ratios) | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Rate laws, elementary steps, and the rate-determining step | [general-chemistry 4.3](../general-chemistry/lessons/04-03-taste-of-kinetics.md) |
| Oxidation and reduction bookkeeping (the alcohol oxidation ladder) | [general-chemistry 2.3](../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) |
| Molecular formula, molar mass, and molecular weight (reading $M^+$) | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md) |
| The harmonic oscillator $\omega = \sqrt{k/m}$ behind the IR bond-as-spring law | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Hydrogen bonding | taught by no course in the library — defined on this card above |
| Systematic IUPAC naming and functional-group seniority | taught by no course in the library — tabulated on this card above |

## Pitfalls

### Structure and resonance

- A double bond is **one $\sigma$ + one $\pi$**, not two of the same bond — and it counts as **one** domain when you hybridize. *([1.1](lessons/01-01-bonding-hybridization-molecular-shape.md))*
- Lone pairs are domains: water's O and an amine's N are $sp^3$, not $sp^2$. *([1.1](lessons/01-01-bonding-hybridization-molecular-shape.md))*
- The molecule does not oscillate between resonance contributors — $\ce{<->}$ means "average these", $\ce{<=>}$ means "these interconvert". Moving an atom makes a **tautomer**, not a resonance form. *([1.2](lessons/01-02-resonance-formal-charge-delocalization.md), [3.5](lessons/03-05-enols-enolates-alpha-carbon.md))*
- No period-2 atom ever exceeds an octet; every arrow that *makes* a bond must be paired with one that breaks one. *([1.2](lessons/01-02-resonance-formal-charge-delocalization.md))*
- A minor contributor can carry almost no weight and still explain one specific property (the amide's locked C–N). Weighting is the whole art. *([1.2](lessons/01-02-resonance-formal-charge-delocalization.md))*

### Acids and bases

- Compare **conjugate bases**, not acids — that is what actually varies, and ARIO speaks the language of anions. *([1.3](lessons/01-03-acids-bases-organic.md))*
- The two Atom rules point opposite ways: across a row electronegativity wins ($\ce{HF} > \ce{H2O}$), down a group **size** wins ($\ce{HI} > \ce{HF}$). *([1.3](lessons/01-03-acids-bases-organic.md))*
- Resonance draws a new Lewis structure; induction does not, and it fades within a few bonds. Acetate is resonance, trichloroacetate is induction. *([1.3](lessons/01-03-acids-bases-organic.md))*
- Low $\mathrm{p}K_a$ means a **weak, stable** conjugate base — not a strong one. *([1.3](lessons/01-03-acids-bases-organic.md))*
- A strong base is a **terrible** leaving group; good leaving groups are weak bases. And good base ≠ good nucleophile ($\ce{I-}$ weak base, superb nucleophile; $\ce{F-}$ strong base, poor nucleophile in protic solvent). *([2.1](lessons/02-01-functional-groups-mechanisms-language.md), [2.4](lessons/02-04-elimination-e1-e2-choosing.md))*

### Conformation and stereochemistry

- Conformers cannot be bottled — they interconvert by rotation. Configurations ($R/S$, $E/Z$) can, because changing them needs bond-breaking. *([1.4](lessons/01-04-alkanes-conformational-analysis.md))*
- Eclipsed conformers are energy **maxima**, never resting states; only staggered forms are minima. *([1.4](lessons/01-04-alkanes-conformational-analysis.md))*
- A ring flip swaps axial and equatorial but does **not** change which face a group is on — configuration is untouched. *([1.4](lessons/01-04-alkanes-conformational-analysis.md))*
- Four *bonds* is not four *different groups*: check for repeats before assigning $R/S$. *([1.5](lessons/01-05-chirality-r-s-system.md))*
- CIP compares atomic number at the first point of difference — never group size, mass, or bulk. *([1.5](lessons/01-05-chirality-r-s-system.md))*
- Lowest priority on a **wedge**? Read $1\to2\to3$ and then **reverse** the answer. Reading it straight is the most common single error in Module 1. *([1.5](lessons/01-05-chirality-r-s-system.md))*
- Enantiomers share melting point, boiling point, and NMR; they differ only in optical rotation and toward chiral partners. *([1.5](lessons/01-05-chirality-r-s-system.md))*
- "Has stereocenters" does **not** imply chiral, and chiral does not follow from counting centers — meso breaks the chain. Check for an internal mirror before quoting $2^n$. *([1.6](lessons/01-06-diastereomers-meso-optical-activity.md))*
- A meso compound and a racemate both read $0^\circ$, but meso is one achiral substance (never resolvable) and a racemate is two chiral ones (separable in principle). *([1.6](lessons/01-06-diastereomers-meso-optical-activity.md))*

### Mechanism bookkeeping

- Arrows start at electron **density** (a lone pair or a bond) and point at the electron-poor site. An arrow whose tail sits on a $\delta+$ carbon is almost always wrong. *([2.1](lessons/02-01-functional-groups-mechanisms-language.md))*
- Radicals move **one** electron — use a fishhook. A double-barbed arrow in a radical step is a category error. *([2.6](lessons/02-06-alkynes-radicals.md))*

### Substitution and elimination

- Nucleophile strength changes the **rate** of an SN2, never the stereochemistry — inversion is fixed by the geometry. *([2.2](lessons/02-02-nucleophilic-substitution-sn2.md))*
- Inversion is guaranteed; the $R/S$ **letter** flips only if the incoming group inherits the leaving group's priority rank. Track the geometry, not the letter. *([2.2](lessons/02-02-nucleophilic-substitution-sn2.md))*
- Protic solvents dissolve your salt *and* cage your nucleophile. For a fast SN2 use DMSO, DMF, or acetone. *([2.2](lessons/02-02-nucleophilic-substitution-sn2.md))*
- Never force an SN2 on a $3^\circ$ substrate — there is no backside room; you get SN1 or elimination. *([2.2](lessons/02-02-nucleophilic-substitution-sn2.md))*
- Adding more nucleophile does **not** speed up an SN1 — it enters after the RDS. That is the experimental fingerprint separating the two. *([2.3](lessons/02-03-sn1-carbocation-rearrangements.md))*
- An SN1 answer that is a single enantiomer is wrong: the flat cation is attacked from both faces. *([2.3](lessons/02-03-sn1-carbocation-rearrangements.md))*
- A 1,2-shift moves the migrating group **with its bonding pair**, and only when it buys more stability. A $3^\circ$ cation with no better neighbor sits still. *([2.3](lessons/02-03-sn1-carbocation-rearrangements.md))*
- E2 has **no intermediate**, so it never rearranges; a rearranged elimination product means E1. *([2.4](lessons/02-04-elimination-e1-e2-choosing.md))*
- Strength decides E2-vs-the-rest; **bulk** decides Zaitsev-vs-Hofmann. Ethoxide and *tert*-butoxide are both strong. *([2.4](lessons/02-04-elimination-e1-e2-choosing.md))*
- In rings, E2 needs the leaving group **axial** — geometry can force a Hofmann product and override Zaitsev. *([2.4](lessons/02-04-elimination-e1-e2-choosing.md))*

### Addition

- Markovnikov is a *symptom*; the cause is the most stable carbocation. Where no free cation forms, the rhyme misleads. *([2.5](lessons/02-05-alkenes-electrophilic-addition.md))*
- $\ce{Br2}$ addition is stereospecifically **anti** — the bromonium bridge blocks one face; it is not a random mix. *([2.5](lessons/02-05-alkenes-electrophilic-addition.md))*
- Any open-cation route ($\ce{HX}$, acid hydration) can scramble the skeleton; hydroboration and oxymercuration cannot — that is their selling point. *([2.5](lessons/02-05-alkenes-electrophilic-addition.md))*
- Anti-Markovnikov is a property of the **mechanism**, not of the reagent: only $\ce{HBr}$, and only with peroxides. *([2.6](lessons/02-06-alkynes-radicals.md))*
- Alkyne hydration gives a **carbonyl**, not an alcohol — the enol tautomerizes before you can isolate it. *([2.6](lessons/02-06-alkynes-radicals.md))*
- Acetylide alkylation works only on **methyl or $1^\circ$** halides; anything more substituted gives E2. *([2.6](lessons/02-06-alkynes-radicals.md))*

### Aromatics

- Count a lone pair **only** if it lives in a $p$ orbital in the ring loop — pyridine's does not, pyrrole's does. Draw the orbital before adding. *([3.1](lessons/03-01-aromaticity-huckel.md))*
- Antiaromatic is *actively destabilized*, not merely "less stable"; non-aromatic is neutral. Different verdicts. *([3.1](lessons/03-01-aromaticity-huckel.md))*
- Benzene **substitutes**, it does not add — the exact opposite of alkene behavior. *([3.1](lessons/03-01-aromaticity-huckel.md), [3.2](lessons/03-02-electrophilic-aromatic-substitution.md))*
- Rate and direction are two different effects: halogens deactivate yet direct **ortho/para**. *([3.2](lessons/03-02-electrophilic-aromatic-substitution.md))*
- Friedel–Crafts **alkylation** rearranges and polyalkylates; acylate and reduce instead. Sulfonation is **reversible** and can be used as a temporary block. *([3.2](lessons/03-02-electrophilic-aromatic-substitution.md))*

### Carbonyls

- Acid catalysis helps weak nucleophiles and **destroys** strong ones — never mix a Grignard with anything protic; the workup is a separate step. *([3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md), [4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md))*
- Aldehyde beats ketone, always — the extra carbons hinder and donate, they do not help. *([3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md))*
- Imine vs enamine is decided by the **amine**, not the carbonyl: count the remaining $\ce{N-H}$. *([3.3](lessons/03-03-aldehydes-ketones-nucleophilic-addition.md))*
- A ketone's tetrahedral species is the **product**; a derivative's is an **intermediate**. Same opening move, different ending. *([3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md))*
- The reactivity ladder runs downhill only — no plain nucleophile converts an amide or ester back to an acyl chloride. *([3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md))*
- Fischer esterification is an equilibrium (drive it with Le Châtelier); saponification is irreversible because it ends in a carboxylate. *([3.4](lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md))*
- Only hydrogens on a carbon **directly bonded** to the carbonyl are $\alpha$-hydrogens — an aldehyde's own C–H is not one. Miscounting is the number-one aldol error. *([3.5](lessons/03-05-enols-enolates-alpha-carbon.md))*
- Mild base and cold stops at the aldol; heat or excess base condenses to the enone. Read the conditions. *([3.5](lessons/03-05-enols-enolates-alpha-carbon.md))*

### Heteroatom groups

- A *stronger* oxidant does not make a better aldehyde — it blows past to the acid. PCC is the "stop here" reagent. *([3.6](lessons/03-06-alcohols-ethers-amines.md))*
- Epoxides open at the **less**-hindered carbon under base (plain SN2) and at the **more**-substituted carbon under acid (developing charge). *([3.6](lessons/03-06-alcohols-ethers-amines.md))*
- Williamson is SN2-only: put the bulk on the alkoxide and keep the halide primary. *([3.6](lessons/03-06-alcohols-ethers-amines.md))*
- Aniline is a far weaker base than an alkylamine — its lone pair is delocalized into the ring. *([3.6](lessons/03-06-alcohols-ethers-amines.md))*

### Spectroscopy

- The IR $x$-axis is reversed; "to the left of the carbonyl" means **higher** wavenumber. *([4.1](lessons/04-01-ir-mass-spectrometry.md))*
- A missing band is evidence: no peak near 1700 rules out every carbonyl, and presence-vs-absence of the broad $\ce{O-H}$ is what separates an acid from an ester. *([4.1](lessons/04-01-ir-mass-spectrometry.md))*
- Oxygen never enters the DoU formula, and the halogen isotope ratios differ: $\ce{Cl}$ is $3:1$, $\ce{Br}$ is $1:1$. *([4.1](lessons/04-01-ir-mass-spectrometry.md))*
- $n+1$ counts the **neighbors**, not the protons in the signal — a $\ce{CH2}$ quartet has two protons and three neighbors. *([4.2](lessons/04-02-h-nmr-spectroscopy.md))*
- $\ce{O-H}$ and $\ce{N-H}$ usually appear as broad singlets: they exchange too fast to couple. Don't hunt for splitting that isn't there. *([4.2](lessons/04-02-h-nmr-spectroscopy.md))*
- Integration is a **ratio** — reconcile it against the molecular formula before believing a head-count. And symmetry collapses signals, so count environments, not atoms. *([4.2](lessons/04-02-h-nmr-spectroscopy.md))*
- Never integrate a $^{13}$C spectrum; its heights are unreliable. And a peak near 130 could be alkene *or* aromatic — let DoU and IR decide. *([4.3](lessons/04-03-c13-nmr-structure-workflow.md))*
- The workflow isn't finished until step 7: a structure that leaves one peak unexplained is wrong. *([4.3](lessons/04-03-c13-nmr-structure-workflow.md))*

### Synthesis and biomolecules

- Never disconnect a plain C–C bond in mid-chain — no reaction welds two unfunctionalized carbons. If no row of the disconnection table fits, do an FGI first. *([4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md))*
- A synthon is not a reagent: translate $\ce{R-}$ into a Grignard, acetylide, or enolate before writing the forward step. *([4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md))*
- An FGI changes groups, never the skeleton — only disconnections build carbons, so count them. *([4.4](lessons/04-04-retrosynthetic-analysis-multistep-synthesis.md))*
- Cyclic glucose is still a reducing sugar (the hemiacetal reopens); a full acetal glycoside is locked shut and is not. *([4.5](lessons/04-05-taste-of-biomolecules.md))*
- The real neutral amino acid is the **zwitterion**, not $\ce{H2N-CHR-COOH}$. *([4.5](lessons/04-05-taste-of-biomolecules.md))*
- Saturated and unsaturated fats share a functional group (triester); only the *cis* kink differs. And the peptide C–N does not rotate — resonance makes it partly double. *([4.5](lessons/04-05-taste-of-biomolecules.md))*
