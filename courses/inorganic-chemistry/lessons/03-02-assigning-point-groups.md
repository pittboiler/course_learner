# Inorganic Chemistry · Lesson 3.2: Assigning Point Groups

> ⏱ ~15 min · Module 3: Symmetry, Electronic Spectra & Magnetism · Builds on: [3.1 Symmetry elements & operations](03-01-symmetry-elements-operations.md), [2.6 Tetrahedral & square-planar fields](02-06-tetrahedral-square-planar-fields.md) · Unlocks: [3.3 Electronic spectra & d–d transitions](03-03-electronic-spectra-dd-transitions.md)

## Why this matters

In 3.1 you learned to *spot* symmetry elements — axes, mirror planes, inversion centres. On their own they're a bag of parts. The payoff comes when you collect **all** of them for one molecule: that collection is a mathematical object called a **point group**, and its name (a short label like $C_{2v}$ or $O_h$) is a compression of everything symmetry can tell you. Give a spectroscopist "$\ce{[PtCl4]^2-}$ is $D_{4h}$" and they instantly know which d–d transitions are allowed, which IR bands appear, and whether the molecule can be chiral — no re-derivation needed. The point group is the single most useful label in structural inorganic chemistry, and Module 3's spectra and magnetism both hang off it. This lesson is the algorithm for finding it.

## The idea

Here's the quiet miracle behind the label. Take a molecule's full set of symmetry operations — every rotation, reflection, inversion, and improper rotation that leaves it looking unchanged. Do one, then do another: the result is *always* a third operation already in the set (reflect $\ce{H2O}$ then rotate, and you land on the same place a different reflection would have taken you). There's a "do-nothing" operation $E$ (the identity). Every operation can be undone by another in the set (its inverse). That's the definition of a **group** in mathematics — closed, with an identity and inverses — and because all these operations leave at least one *point* fixed (the molecule doesn't translate), it's a **point group**.

You don't need group theory to *name* one, though. Naming is a lookup: run the molecule through a fixed decision tree. Ask a short sequence of yes/no questions — is it linear? is it one of the ultra-symmetric shapes? what's its main rotation axis? are there axes crossing it? any horizontal mirror? — and each answer prunes the possibilities until one label remains. Memorize the tree once and you can assign any molecule in under a minute. The tree is the whole lesson; the rest is practice walking it.

## The formal version

A **point group** is the complete set of symmetry operations of a molecule, which together satisfy the group axioms: closure (any two operations combine to give another in the set), an identity $E$, an inverse for each operation, and associativity. *In words: it's the full symmetry "toolkit" of the molecule, and the toolkit is self-contained — combining tools never produces something outside it.* We label groups with **Schoenflies symbols** ($C_{2v}$, $D_{4h}$, $O_h$, …), where the letter and subscripts encode which elements are present.

Recall the element inventory from [3.1](03-01-symmetry-elements-operations.md): the identity $E$; proper rotation axes $C_n$ (rotation by $360^\circ/n$); mirror planes $\sigma$ (horizontal $\sigma_h$ ⟂ to the main axis, vertical $\sigma_v$ containing it, dihedral $\sigma_d$ a vertical plane bisecting two $C_2$ axes); the inversion centre $i$; and improper rotations $S_n$ (rotate then reflect ⟂). The **principal axis** is the $C_n$ of highest $n$.

**The assignment algorithm.** Walk these steps in order and stop at the first match:

1. **Special shapes first.**
   - *Linear* molecules: $C_{\infty v}$ if there's no centre of inversion (e.g. $\ce{HCl}$, $\ce{N2O}$ — different ends), $D_{\infty h}$ if there is one (e.g. $\ce{CO2}$, $\ce{N2}$ — symmetric ends). *In words: a line has an infinite-order axis; a symmetric line adds a mirror through the middle.*
   - *Polyhedral* high-symmetry: $T_d$ (regular tetrahedron, e.g. $\ce{CH4}$), $O_h$ (regular octahedron, e.g. $\ce{SF6}$ and almost every 6-coordinate complex), $I_h$ (icosahedron/sphere-like, e.g. $\ce{C60}$). These have multiple high-order axes; you recognize them by shape.
2. **No principal axis?** If the molecule has *no* $C_n$ with $n \ge 2$, it can only have: a single mirror $\Rightarrow C_s$; only an inversion centre $\Rightarrow C_i$; or nothing but $E$ $\Rightarrow C_1$ (fully asymmetric).
3. **Find the principal axis $C_n$**, then ask: are there **$n$ $C_2$ axes perpendicular** to it?
   - **Yes $\Rightarrow$ a $D$ group.**
   - **No $\Rightarrow$ a $C$ group.**
4. **Refine with mirrors.**
   - Is there a **horizontal mirror $\sigma_h$** (⟂ the principal axis)? If yes, subscript $h$: $\Rightarrow D_{nh}$ or $C_{nh}$.
   - Else, are there **vertical/dihedral mirrors** ($n\sigma_v$ for $C$; $n\sigma_d$ for $D$)? If yes, subscript $v$ or $d$: $\Rightarrow C_{nv}$ or $D_{nd}$.
   - Else no mirrors: plain $\Rightarrow C_n$ or $D_n$.

*In words: special shapes are pattern-matched; everything else is "$C$ or $D$?" (set by perpendicular $C_2$'s) followed by "which mirror?" (set by $\sigma_h$ vs $\sigma_v/\sigma_d$).*

**Chirality, restated as a label.** A molecule is chiral (non-superimposable on its mirror image) exactly when its point group contains *no improper operation* — no $\sigma$, no $i$, and no $S_n$. The only such groups are the **pure-rotation groups** $C_n$ and $D_n$ (and $C_1$, which is $C_n$ with $n=1$). *In words: if the only symmetry you have is honest rotation, you're chiral; the moment a mirror or inversion sneaks in, you're achiral.* This is the same optical-isomerism idea from [2.3 Isomerism](02-03-isomerism-complexes.md), now readable straight off the group symbol.

## Picture

![A vertical decision-tree flowchart for assigning point groups: linear check and special polyhedral groups branch to the right as coral leaves; otherwise find the principal Cn, ask whether n perpendicular C2 axes exist to split into D groups (right) versus C groups (left), then refine by horizontal versus vertical mirrors, with common groups and example molecules as leaves.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — walk the tree on $\ce{BF3}$).** Trigonal-planar boron trifluoride, $\ce{BF3}$: a central B with three F's at $120^\circ$ in a plane.

- Step 1: not linear, not a special polyhedron. Continue.
- Step 3: the highest axis is a $C_3$ through B ⟂ to the molecular plane. So $n = 3$. Now look for $C_2$ axes ⟂ to it: each B–F bond *is* a $C_2$ axis (rotating $180^\circ$ about a B–F line swaps the other two F's). There are three of them $= n$. **Perpendicular $C_2$'s present $\Rightarrow D$ group.**
- Step 4: is there a $\sigma_h$? Yes — the molecular plane itself is perpendicular to the $C_3$ and reflects the molecule onto itself. Subscript $h$.

**Result: $D_{3h}$.** (Same group as trigonal-bipyramidal $\ce{PF5}$, which also has a $C_3$, three ⟂ $C_2$'s, and the equatorial plane as $\sigma_h$.)

**Example 2 (why you'd care — $\ce{H2O}$ vs a square-planar complex).** Two contrasting coordination-relevant cases.

*Water, $\ce{H2O}$* (bent, $\approx 104.5^\circ$): not linear, not polyhedral. Principal axis: a $C_2$ bisecting the H–O–H angle ($n = 2$). Perpendicular $C_2$'s? None — there's no second twofold axis. **$\Rightarrow C$ group.** Mirrors: no $\sigma_h$, but two vertical planes contain the $C_2$ (the molecular plane and the plane ⟂ to it through O). $n\sigma_v \Rightarrow$ subscript $v$. **Result: $C_{2v}$.**

*Square-planar $\ce{[PtCl4]^2-}$*: four Cl at the corners of a square around Pt. Highest axis is a $C_4$ ⟂ to the plane ($n = 4$). Perpendicular $C_2$'s? Yes — four of them lie in the plane (two through trans Cl–Pt–Cl pairs, two bisecting Cl–Pt–Cl angles). **$\Rightarrow D$ group.** The molecular plane is a $\sigma_h$ (⟂ the $C_4$). Subscript $h$. **Result: $D_{4h}$.** This label is exactly what you'll need in [3.3](03-03-electronic-spectra-dd-transitions.md): the $D_{4h}$ splitting pattern of the d-orbitals (from [2.6](02-06-tetrahedral-square-planar-fields.md)) is *why* square-planar Pt(II) complexes have the spectra they do.

## Watch out

- **You might think any molecule with a mirror plane is $C_s$.** $C_s$ means *only* $E$ and one $\sigma$ and nothing else. Water has mirror planes too, but it also has a $C_2$ axis, so it's $C_{2v}$, not $C_s$. Always find the highest rotation axis *first*; mirrors only refine the label after the $C$-vs-$D$ split.
- **You might mislabel a linear molecule.** The deciding question is the inversion centre, i.e. whether the two ends are the *same*: $\ce{CO2}$ (O=C=O, symmetric) is $D_{\infty h}$, but $\ce{OCS}$ or $\ce{HCN}$ (different ends) is $C_{\infty v}$. Same shape, different group.
- **You might assume "has some $C_2$ axes" means a $D$ group.** It must be **$n$** $C_2$ axes **perpendicular to the principal $C_n$**. A random $C_2$ that *is* the principal axis (as in $\ce{H2O}$) doesn't count; you need $n$ *extra* ones crossing it at $90^\circ$.

## One-liner

> A point group is a molecule's complete, self-contained symmetry toolkit; name it by a decision tree — linear? special shape? principal $C_n$? $n$ perpendicular $C_2$'s ($D$) or not ($C$)? then $\sigma_h$ ($h$) or $\sigma_v/\sigma_d$ ($v/d$) — and a molecule is chiral exactly when that group is a pure-rotation group $C_n$ or $D_n$.

## Problems

**P1 (🟢)** Assign the point group of each by walking the flowchart, naming the principal axis and the deciding mirror where relevant: (a) $\ce{NH3}$ (trigonal pyramidal), (b) $\ce{CO2}$ (linear, symmetric), (c) $\ce{CH4}$ (tetrahedral).

**P2 (🟡)** Assign the point group of each coordination complex: (a) octahedral $\ce{[Co(NH3)6]^3+}$ (treat each $\ce{NH3}$ as a point ligand); (b) square-planar *trans*-$\ce{[PtCl2(NH3)2]}$ (i.e. *trans*-$\ce{MA4B2}$-type geometry with the two like ligands opposite each other — treat it as an idealized planar $\ce{MA2B2}$ square).

**P3 (🔴, Boss-3 rehearsal)** (i) For an idealized octahedral $\ce{ML6}$ complex ($O_h$), state the point group and list its key symmetry elements (the rotation axes, the mirror planes, and $i$). (ii) Of the following, identify which are chiral, using only their point groups: tris-chelate $\ce{[Co(en)3]^3+}$ ($D_3$); *cis*-$\ce{[CoCl2(en)2]+}$ ($C_2$); *trans*-$\ce{[CoCl2(en)2]+}$ ($C_{2h}$); $\ce{[PtCl4]^2-}$ ($D_{4h}$).

<details>
<summary>Solutions</summary>

**P1**

(a) $\ce{NH3}$: not linear, not polyhedral. Principal axis $C_3$ through N (⟂ the H₃ base). Perpendicular $C_2$'s? None. $\Rightarrow C$ group. No $\sigma_h$ (the base is not a mirror plane — N sticks out above it), but three vertical mirrors $\sigma_v$, each containing the $C_3$ and one N–H bond. Subscript $v$. **$C_{3v}$.**

(b) $\ce{CO2}$: linear. Ends are identical (O=C=O), so there is an inversion centre at C. **$D_{\infty h}$.**

(c) $\ce{CH4}$: special polyhedral shape — a regular tetrahedron. **$T_d$.** (No need to walk the lower tree; you recognize it by shape. For the record it has four $C_3$ axes along the C–H bonds, three $C_2$/$S_4$ axes, and six $\sigma_d$ — but no $\sigma_h$ and no $i$.)

**P2**

(a) $\ce{[Co(NH3)6]^3+}$: six identical ligands at the vertices of a regular octahedron around Co — the special polyhedral shape $O_h$. **$O_h$.** (Almost every 6-coordinate complex with one kind of ligand is $O_h$.)

(b) *trans*-$\ce{[PtCl2(NH3)2]}$ (idealized planar square, two Cl opposite, two NH₃ opposite): not linear/polyhedral. Highest axis: a $C_2$ ⟂ the molecular plane through Pt. (A $C_4$ would require all four ligands identical — they're not, so the fourfold axis is broken down to twofold.) Perpendicular $C_2$'s? Yes — the Cl–Pt–Cl axis and the N–Pt–N axis, both lying in the plane, are $C_2$ axes ($n = 2$ perpendicular twofolds). $\Rightarrow D$ group. The molecular plane is a $\sigma_h$ ⟂ the principal $C_2$. Subscript $h$. **$D_{2h}$.** (The *trans* isomer is more symmetric than the *cis*; *cis*-$\ce{[PtCl2(NH3)2]}$ would be $C_{2v}$.)

**P3**

(i) **$O_h$.** Key elements of a regular octahedron: three $C_4$ axes (through opposite ligand pairs, each also an $S_4$ and containing a $C_2 = C_4^2$); four $C_3$ axes (through opposite triangular faces, each also an $S_6$); six $C_2$ axes (through opposite edge midpoints); a centre of inversion $i$; and nine mirror planes — three $\sigma_h$ (each containing four ligands, i.e. the "equatorial" square planes) and six $\sigma_d$ (each bisecting opposite edges). The full operation count is 48, but for assignment the load-bearing facts are: multiple $C_4$ *and* $C_3$ axes plus $i$ $\Rightarrow O_h$.

(ii) Chiral $\Leftrightarrow$ pure-rotation group ($C_n$ or $D_n$ only — no $\sigma$, $i$, or $S_n$):
- $\ce{[Co(en)3]^3+}$, $D_3$ — pure rotation (three $C_2$'s ⟂ a $C_3$, no mirrors). **Chiral. ✓**
- *cis*-$\ce{[CoCl2(en)2]+}$, $C_2$ — pure rotation (only $E$ and a $C_2$). **Chiral. ✓**
- *trans*-$\ce{[CoCl2(en)2]+}$, $C_{2h}$ — the $h$ means a $\sigma_h$ (and an $i$) is present. **Achiral. ✗**
- $\ce{[PtCl4]^2-}$, $D_{4h}$ — the $h$ again flags mirrors and $i$. **Achiral. ✗**

So the two chelate cases $D_3$ and $C_2$ are chiral (resolvable into enantiomers, the classic Werner result); the $C_{2h}$ and $D_{4h}$ ones are not.

</details>

## Flashback

**From Lesson 3.1 (Symmetry elements & operations):** Take the trigonal-pyramidal molecule $\ce{PCl3}$ (same shape as $\ce{NH3}$). List all of its symmetry elements, and count the total number of distinct symmetry *operations* it possesses. (Fresh variant — a new molecule, same shape as the ammonia you saw in 3.1.)

<details>
<summary>Solution</summary>

$\ce{PCl3}$ is trigonal pyramidal: P at the apex, three Cl forming the base.

**Symmetry elements:** the identity $E$; one $C_3$ axis through P perpendicular to the Cl₃ base; and three vertical mirror planes $\sigma_v$, each containing the $C_3$ axis and one P–Cl bond. There is **no** $\sigma_h$ (the base plane isn't a mirror — P protrudes on one side), no inversion centre, and no $S_n$.

**Operations** generated by those elements:
- $E$ — 1 operation.
- The $C_3$ axis gives $C_3$ (rotate $120^\circ$) and $C_3^2$ (rotate $240^\circ$) — 2 operations. ($C_3^3 = E$, already counted.)
- The three $\sigma_v$ planes give 3 reflection operations.

Total: $1 + 2 + 3 = \mathbf{6}$ operations. (This set is closed with identity and inverses — it's the group $C_{3v}$, of order 6, exactly the point group you'd assign by this lesson's tree.)

</details>

## Connections

- **Backward:** this lesson bundles the individual elements from [3.1](03-01-symmetry-elements-operations.md) into a single named group, and the "$D$-vs-$C$ then mirror" tree turns the geometries of [2.1](02-01-complexes-ligands-coordination-number.md) and [2.6](02-06-tetrahedral-square-planar-fields.md) (octahedral, tetrahedral, square-planar) into the labels $O_h$, $T_d$, $D_{4h}$. The chirality criterion is the [2.3](02-03-isomerism-complexes.md) optical-isomerism idea, now stated as "pure-rotation group."
- **Forward:** [3.3 Electronic spectra & d–d transitions](03-03-electronic-spectra-dd-transitions.md) uses the point group directly — the group's symmetry labels ($t_{2g}$, $e_g$, and the like) tag the d-orbitals and decide which transitions are symmetry-allowed. The point group is also the entry key to character tables, the workhorse of [`physical-chemistry`](../../physical-chemistry/syllabus.md) spectroscopy.
- **Sideways (group theory):** "closed set with identity and inverses" is the *same* abstract group axiom that governs symmetry operations in crystallography (space groups) and the conservation laws of physics; molecular point groups are the smallest, most tangible instance of that machinery.
