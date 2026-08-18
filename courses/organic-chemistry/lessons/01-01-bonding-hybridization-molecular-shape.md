# Organic Chemistry I · Lesson 1.1: Bonding, hybridization & molecular shape

> ⏱ ~15 min · Module 1: Structure, Bonding & Stereochemistry · Builds on: [`general-chemistry` 1.5 (VSEPR & hybridization)](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md), [`general-chemistry` 1.4 (Lewis structures)](../../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md) · Unlocks: [1.2 Resonance, formal charge & delocalization](01-02-resonance-formal-charge-delocalization.md)

## Why this matters

Every reaction you'll meet in this course is really a story about *shape and electron availability* — where the atoms sit, which bonds are stiff, and where the reactive electrons live. All of that traces back to one decision each carbon makes: **how to mix its atomic orbitals**. Get hybridization right and you can look at any structure and instantly read off its geometry, its bond angles, which bonds can rotate, and which sites are exposed to attack. This is the alphabet; everything downstream is spelling. It extends the VSEPR shapes you built in general chemistry — but now carbon, with its four equal bonds, is the star.

## The idea

Here's the puzzle carbon poses. Its ground-state electron configuration is $1s^2\,2s^2\,2p^2$ — two electrons paired in the $2s$, two unpaired in $2p$ orbitals. Taken literally, carbon should form only **two** bonds, using its two unpaired $p$ electrons, and those bonds should be $90^\circ$ apart (the angle between $p$ orbitals). But methane, $\ce{CH4}$, has **four identical** bonds at $109.5^\circ$. The atomic-orbital picture is simply wrong for a bonded atom.

The fix is **hybridization**: carbon first *promotes* one $2s$ electron up into the empty $2p$ orbital (cheap, because forming two extra bonds pays it back), then *blends* the $2s$ and some $2p$ orbitals into a new set of identical **hybrid orbitals**, all the same shape, energy, and evenly spread in space. Blend all four ($s + p_x + p_y + p_z$) and you get four $sp^3$ hybrids pointing at the corners of a tetrahedron. Blend fewer, and you get fewer hybrids — with leftover unmixed $p$ orbitals available to form a second kind of bond. That single choice — *how many orbitals to mix* — sets the whole geometry.

The counting rule is beautifully simple: **the number of hybrid orbitals equals the number of "electron domains" around the atom** — its bonding partners plus its lone pairs. That number is the atom's **steric number**, and it maps one-to-one onto shape.

## The formal version

**Hybridization.** Mixing one $s$ orbital with $n$ of the atom's $p$ orbitals produces $1+n$ equivalent hybrid orbitals. *In words: you conserve orbitals — mix three, get three; the total never changes, only the shape and direction.* The three cases that dominate organic chemistry:

| Hybrid | $s$/$p$ mixed | Domains (steric #) | Geometry | Angle | Leftover $p$ | Example |
|---|---|---|---|---|---|---|
| $sp^3$ | $s + 3p$ | 4 | tetrahedral | $109.5^\circ$ | 0 | $\ce{CH4}$ |
| $sp^2$ | $s + 2p$ | 3 | trigonal planar | $120^\circ$ | 1 | $\ce{CH2=CH2}$ |
| $sp$ | $s + 1p$ | 2 | linear | $180^\circ$ | 2 | $\ce{CH#CH}$ |

*In words: fewer domains means fewer hybrids, a wider spread, and more unmixed $p$ orbitals left over to make $\pi$ bonds.*

**Two kinds of bond.** The shape of the *overlap* defines the bond:

- A **$\sigma$ (sigma) bond** is head-on overlap along the axis joining two nuclei — hybrid-to-hybrid or hybrid-to-$s$. Its electron density is cylindrically symmetric about that axis, so **the two atoms can rotate freely** without breaking it. Every single bond is a $\sigma$ bond.
- A **$\pi$ (pi) bond** is sideways overlap of two parallel, *unmixed* $p$ orbitals, one lobe above and one below the $\sigma$ axis. Rotating one atom would twist those $p$ lobes out of alignment and destroy the overlap, so **a $\pi$ bond locks rotation**. It is also **weaker** than a $\sigma$ bond, because sideways overlap is less complete than head-on.

So a multiple bond is a $\sigma$ plus $\pi$'s:

$$\text{single} = 1\sigma, \qquad \text{double} = 1\sigma + 1\pi, \qquad \text{triple} = 1\sigma + 2\pi.$$

*In words: the first bond between two atoms is always the strong head-on $\sigma$; any extra bonds are sideways $\pi$'s built from leftover $p$ orbitals.* This is exactly why $sp^2$ carbon (one leftover $p$) sits in double bonds and $sp$ carbon (two leftover $p$, mutually perpendicular) sits in triple bonds or two cumulated doubles.

**$s$-character and bond strength.** An $sp$ orbital is $\tfrac12$ $s$; an $sp^2$ is $\tfrac13$ $s$; an $sp^3$ is $\tfrac14$ $s$. Because $s$ orbitals sit closer to the nucleus, **more $s$-character pulls the bonding electrons in tighter**:

$$\underbrace{sp^3}_{25\%\,s} < \underbrace{sp^2}_{33\%\,s} < \underbrace{sp}_{50\%\,s} \quad\Longrightarrow\quad \text{shorter, stronger bonds and (later) more acidic C–H.}$$

*In words: as you go $sp^3 \to sp^2 \to sp$, bonds tighten up.* A $\ce{C-H}$ bond is shortest on an $sp$ carbon; we'll cash this out as acidity in [1.3](01-03-acids-bases-organic.md).

**Reading structures.** Organic chemists draw **bond-line (skeletal) structures**: every line is a bond, every **vertex and every free end is a carbon**, and the hydrogens on carbon are *implied* — each carbon silently carries enough $\ce{H}$'s to reach four bonds. To read an atom's hybridization off such a drawing, compute its steric number: **(number of $\sigma$ bonds) + (number of lone pairs)**. A double or triple bond still counts as **one $\sigma$** for this purpose (its $\pi$'s ride along inside that same domain). Steric number $4 \to sp^3$, $3 \to sp^2$, $2 \to sp$.

## Picture

![Three panels comparing sp3 tetrahedral methane at 109.5 degrees, sp2 trigonal-planar ethene at 120 degrees with a coral pi cloud above and below the C=C, and sp linear ethyne at 180 degrees with two pi clouds; a bottom arrow marks increasing s-character toward shorter, stronger bonds](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — mix, then read the shape).** Take ethene, $\ce{CH2=CH2}$. Each carbon bonds to two $\ce{H}$'s and one $\ce{C}$: three bonding partners, no lone pairs, so **steric number 3 → $sp^2$**, trigonal planar, $120^\circ$. That uses three hybrids for three $\sigma$ bonds (two $\ce{C-H}$, one $\ce{C-C}$), leaving each carbon with **one unmixed $p$ orbital** sticking straight up out of the molecular plane. The two neighboring $p$ orbitals are parallel, so they overlap sideways → the **$\pi$ bond** (coral in the figure). The double bond is therefore $1\sigma + 1\pi$: the $\sigma$ holds the carbons together, the $\pi$ pins the whole thing flat and rigid.

**Example 2 (why you'd care — one carbon, two hybridizations).** Acetaldehyde, $\ce{CH3CHO}$ (structure $\ce{CH3-CH=O}$), has two very different carbons:

- The **methyl** carbon ($\ce{CH3-}$): four $\sigma$ bonds (three $\ce{H}$, one $\ce{C}$), steric number 4 → $sp^3$, $109.5^\circ$. A floppy, freely-rotating, unreactive corner.
- The **carbonyl** carbon ($\ce{-CH=O}$): three $\sigma$ bonds (one $\ce{H}$, one $\ce{C}$, one $\ce{O}$), steric number 3 → $sp^2$, $120^\circ$, flat, with a $\pi$ bond to oxygen.

That flat, $sp^2$, $\pi$-bonded carbonyl carbon is where essentially all of the molecule's chemistry happens — the exposed, electron-poor site nucleophiles attack in [Module 3](03-03-aldehydes-ketones-nucleophilic-addition.md). Hybridization already tells you *where the action is* before you know a single reaction.

## Watch out

- **You might think a double bond is "two of the same bond."** It isn't — it's **one $\sigma$ + one $\pi$**, two different animals. The $\sigma$ (head-on) is strong and rotatable in isolation; the $\pi$ (sideways) is weaker and is the one that forbids rotation. This is why a $\ce{C=C}$ bond ($\approx 610\ \mathrm{kJ/mol}$) is *less* than twice a $\ce{C-C}$ single bond ($\approx 350\ \mathrm{kJ/mol}$): the second (the $\pi$) is the cheaper one.
- **You might count a double bond as two domains.** For hybridization it's **one domain**. Both $\pi$ electrons live in the same region as the $\sigma$ between those two atoms, so they don't demand a separate hybrid orbital. Count $\sigma$ bonds and lone pairs only.
- **You might forget lone pairs when hybridizing N and O.** They're domains too. Water's oxygen has 2 bonds + 2 lone pairs = steric number 4 → $sp^3$; the ether/alcohol oxygen is the same. Nitrogen in an amine is 3 bonds + 1 lone pair = 4 → $sp^3$. The lone pairs occupy hybrids and squeeze the bond angles slightly below the ideal.

## One-liner

> Count an atom's $\sigma$ bonds plus lone pairs — that steric number picks the hybrid ($4\to sp^3$, $3\to sp^2$, $2\to sp$), which fixes the shape, the angles, and how many leftover $p$ orbitals become rotation-locking $\pi$ bonds.

## Problems

**P1 (🟢)** For each molecule, give the hybridization, geometry, and approximate bond angle at every carbon — and at the nitrogen or oxygen where present. (a) ethanol $\ce{CH3CH2OH}$; (b) acetonitrile $\ce{CH3CN}$; (c) formaldehyde $\ce{CH2O}$.

**P2 (🟡)** Ethane ($\ce{CH3-CH3}$) rotates freely about its central $\ce{C-C}$ bond at room temperature, but ethene ($\ce{CH2=CH2}$) does *not* rotate about its $\ce{C=C}$ bond. Explain the difference in terms of $\sigma$ vs $\pi$ overlap, and say in one sentence why this makes cis/trans isomers possible for alkenes but not for alkanes.

**P3 (🔴)** Acrylonitrile (propenenitrile) is $\ce{CH2=CH-C#N}$. Label the hybridization of each of its three carbons and of the nitrogen, then count the **total** number of $\sigma$ bonds and $\pi$ bonds in the whole molecule.

<details>
<summary>Solutions</summary>

**P1** Steric number = ($\sigma$ bonds) + (lone pairs) at each atom.

(a) **Ethanol, $\ce{CH3-CH2-OH}$.**
- $\ce{CH3}$ carbon: 4 $\sigma$ (3 H, 1 C), 0 lone pairs → SN 4 → **$sp^3$, tetrahedral, $109.5^\circ$**.
- $\ce{CH2}$ carbon: 4 $\sigma$ (2 H, 1 C, 1 O) → SN 4 → **$sp^3$, tetrahedral, $109.5^\circ$**.
- **O**: 2 $\sigma$ (to C and to H) + 2 lone pairs → SN 4 → **$sp^3$, bent, $\approx 104.5^\circ$** (lone-pair repulsion pushes it just under $109.5^\circ$).

(b) **Acetonitrile, $\ce{CH3-C#N}$.**
- $\ce{CH3}$ carbon: 4 $\sigma$ → SN 4 → **$sp^3$, tetrahedral, $109.5^\circ$**.
- Nitrile carbon: 2 $\sigma$ (to $\ce{CH3}$ and to N; the triple bond is one $\sigma$) + 0 lone pairs → SN 2 → **$sp$, linear, $180^\circ$**.
- **N**: 1 $\sigma$ (to C) + 1 lone pair → SN 2 → **$sp$, linear, $\approx 180^\circ$** (the $\ce{C-C#N}$ unit is a straight line).

(c) **Formaldehyde, $\ce{CH2=O}$.**
- Carbon: 3 $\sigma$ (2 H, 1 O; the double bond counts as one $\sigma$) → SN 3 → **$sp^2$, trigonal planar, $120^\circ$**.
- **O**: 1 $\sigma$ (to C) + 2 lone pairs → SN 3 → **$sp^2$** (terminal, but its lone pairs and $\sigma$ occupy three coplanar hybrids); the $\ce{H-C-H}$ and $\ce{H-C=O}$ angles are all $\approx 120^\circ$.

**P2** In ethane the $\ce{C-C}$ bond is a lone **$\sigma$ bond**: its electron density is cylindrically symmetric about the internuclear axis, so twisting one $\ce{CH3}$ relative to the other doesn't change the overlap — rotation is essentially free (it only trades between staggered and eclipsed conformers, a tiny $\approx 12\ \mathrm{kJ/mol}$ barrier).

In ethene the $\ce{C=C}$ bond is a **$\sigma$ plus a $\pi$**. The $\pi$ bond comes from two parallel $p$ orbitals overlapping *sideways*, above and below the molecular plane. Rotating one $\ce{CH2}$ by $90^\circ$ would turn those $p$ orbitals perpendicular to each other, driving their overlap to zero — i.e. it would **break the $\pi$ bond** (a barrier of $\approx 260\ \mathrm{kJ/mol}$, far more than thermal energy). So the double bond is rigid and planar.

Because the geometry about a $\ce{C=C}$ is locked, two groups on opposite carbons are frozen either on the same side (*cis*) or opposite sides (*trans*) — genuine, separable isomers. In an alkane the analogous single bond spins freely, so no such isomers exist (any "arrangement" interconverts instantly by rotation).

**P3** **Acrylonitrile, $\ce{CH2=CH-C#N}$.** Number the carbons $\ce{C1}$(=$\ce{CH2}$), $\ce{C2}$(=$\ce{CH}$), $\ce{C3}$(the nitrile $\ce{C}$).

Hybridizations (steric number in parentheses):
- $\ce{C1}$: 3 $\sigma$ (2 H, 1 C) (SN 3) → **$sp^2$**.
- $\ce{C2}$: 3 $\sigma$ (1 H, $\ce{C1}$, $\ce{C3}$) (SN 3) → **$sp^2$**.
- $\ce{C3}$: 2 $\sigma$ ($\ce{C2}$, N) (SN 2) → **$sp$**.
- **N**: 1 $\sigma$ + 1 lone pair (SN 2) → **$sp$**.

Now tally every bond:

| Bond | $\sigma$ | $\pi$ |
|---|---|---|
| $\ce{C1-H}$ ($\times 2$) | 2 | 0 |
| $\ce{C1=C2}$ | 1 | 1 |
| $\ce{C2-H}$ | 1 | 0 |
| $\ce{C2-C3}$ | 1 | 0 |
| $\ce{"C3"#N}$ | 1 | 2 |

**Totals: $6\ \sigma$ bonds and $3\ \pi$ bonds.** (Check: the two multiple bonds contribute all three $\pi$'s — one from the $\ce{C=C}$, two from the $\ce{C#N}$ — and every one of the six lines-plus-one you can draw between bonded atoms carries exactly one $\sigma$.)

</details>

## Connections

- **Backward:** hybridization is the orbital-level upgrade of the VSEPR shapes from [`general-chemistry` 1.5](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) — "count electron domains, read the geometry" is the *same* rule, now told through which orbitals actually overlap. The steric-number bookkeeping starts from the Lewis structures of [`general-chemistry` 1.4](../../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md).
- **Forward:** the leftover $p$ orbital on $sp^2$ carbon — the one that made the $\pi$ bond here — is exactly the orbital that lets electrons *delocalize* in [1.2 Resonance & delocalization](01-02-resonance-formal-charge-delocalization.md), and the extra $s$-character of $sp$/$sp^2$ carbons drives the $\ce{C-H}$ acidity trends in [1.3](01-03-acids-bases-organic.md). The rigidity of the $\pi$ bond is the seed of cis/trans (E/Z) isomerism in [1.5](01-05-chirality-r-s-system.md)–[1.6](01-06-diastereomers-meso-optical-activity.md).
- **Sideways (physics):** promotion-then-mixing to build equal, directed hybrids is the chemist's version of choosing a convenient basis of orthogonal states — the same linear-combination move you make with orbitals in [`quantum-mechanics` syllabus](../../quantum-mechanics/syllabus.md), where these hybrids are literally superpositions of the atomic $s$ and $p$ wavefunctions.
