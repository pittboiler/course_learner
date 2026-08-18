# Materials Science & Engineering · Lesson 1.3: Directions & planes — Miller indices

> ⏱ ~15 min · Module 1: Structure & Bonding · Builds on: [1.2 Crystal structures & unit cells](01-02-crystal-structures-unit-cells.md) · Unlocks: [1.4 Order, disorder & grains](01-04-order-disorder-grains.md), and slip systems in [4.2 Plastic deformation & Schmid's law](04-02-plastic-deformation-schmid.md)

## Why this matters

A crystal is not a featureless blob — it has a *grain*, like wood. Along some directions the atoms are packed shoulder-to-shoulder; along others they are sparse. That anisotropy decides real behavior: a metal shears most easily on its most crowded planes, an X-ray beam reflects only off specific plane spacings, and a semiconductor is sliced along a particular face. To say any of this precisely you need a naming system for *which line* and *which plane* you mean inside the cell. **Miller indices** are that system — three integers that pin down any direction or plane, and from which you can read off how densely packed it is. This lesson is the vocabulary the whole rest of the course speaks: it turns "the diagonal-ish plane" into $(111)$, and it is what makes the FCC slip system $\{111\}\langle110\rangle$ ([4.2](04-02-plastic-deformation-schmid.md)) more than a memorized phrase.

## The idea

Set up a coordinate frame on the unit cell: the three cell edges are your axes $x, y, z$, and you measure everything in units of the lattice parameters (for a cubic cell, just the edge length $a$). Now two kinds of objects live inside:

- A **direction** is an arrow. To name it, you write down the components of the arrow — how far it runs along $x$, $y$, $z$ — and then scale to the smallest whole numbers. Simple.
- A **plane** is trickier, because "how far along each axis" isn't a single number for a sheet. The clever trick: describe a plane by *where it crosses the three axes* (its intercepts), then take **reciprocals**. Why reciprocals? Because a plane parallel to an axis never crosses it — intercept $\infty$ — and $1/\infty = 0$ gives a clean integer $0$ instead of a headache. Reciprocals turn the awkward "infinite intercept" into a tidy zero, and make parallel planes share one label.

Everything else is bookkeeping: reduce to smallest integers, and mark a negative with a bar over the digit (a "crystallographer's minus sign"). Once you can name a plane or direction, counting the atoms on it gives its **density** — and the densest ones are where the action is.

## The formal version

**Directions $[uvw]$.** Take the arrow from a tail point to a head point. Subtract (head − tail) to get its components along $x, y, z$ in units of the lattice parameters; clear any fractions and divide by the greatest common divisor so $u, v, w$ are the smallest integers; enclose in **square brackets** with no commas, writing a negative as a bar: $[\bar{1}10]$ means $u=-1, v=1, w=0$.

*In words: a direction is just its reduced integer displacement vector.*

A set of directions that are equivalent by the crystal's symmetry — same packing, different orientation — is a **family**, written in angle brackets $\langle uvw\rangle$. In a cube $\langle100\rangle$ collects $[100], [010], [001]$ and their negatives: the six cube-edge directions, all identical by symmetry.

**Planes $(hkl)$.** Find where the plane intercepts the axes, in units of $a$ (if the plane passes through the origin, slide it over by one cell first — a parallel plane has the same indices). Take the **reciprocals** of the three intercepts; clear fractions to smallest integers; enclose in **round brackets**: $(hkl)$, negatives barred. An intercept of $\infty$ (parallel to that axis) gives index $0$.

*In words: a plane is named by the reciprocals of its axis crossings, reduced to whole numbers.*

The symmetry-equivalent set of planes is a **family** $\{hkl\}$. In a cube $\{100\}$ is the six cube faces.

**Two payoff formulas (cubic).**

*Interplanar spacing* — the perpendicular distance between adjacent parallel $(hkl)$ planes:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}.$$

*In words: higher-index planes are more finely spaced.* Here $a$ is the lattice parameter (nm) and $h,k,l$ are the plane indices. This is the number X-ray diffraction actually measures.

*Densities* — how crowded a line or sheet of atoms is:

$$\text{LD} = \frac{\text{atoms centered on the direction vector}}{\text{length of that vector}}, \qquad \text{PD} = \frac{\text{atoms centered in the plane}}{\text{area of that plane region}}.$$

*In words: linear density is atoms per unit length along a direction; planar density is atoms per unit area on a plane* (units nm⁻¹ and nm⁻², counting only the fraction of each atom whose center lies on the line or in the plane). The plane and direction with the **highest** density are the crystal's easiest slip path — hold that thought for Example 2.

## Picture

![A cubic unit cell drawn in oblique projection, with the direction [110] marked as a coral face-diagonal arrow from the origin and the plane (111) shown as a translucent blue triangle cutting the three unit-length axis intercepts](assets/01-03-fig1.svg)

Notice the geometry the indices encode: $[110]$ runs corner-to-corner across a *face* (it moves one unit in $x$ and one in $y$, zero in $z$), while $(111)$ is the triangle that slices off equal intercepts on all three axes.

## Worked examples

**Example 1 (mechanical — index a plane and a direction).**

*A plane* crosses the axes at $x = a/2$, $y = a$, and runs parallel to $z$ (intercept $\infty$). Intercepts in units of $a$ are $\tfrac12, 1, \infty$. Reciprocals: $2, 1, 0$. Already integers, so the plane is $(210)$.

*A direction* runs from the tail point $(1,0,0)$ to the head point $(0,1,0)$ (both in units of $a$). Head − tail $= (0-1,\ 1-0,\ 0-0) = (-1, 1, 0)$. Smallest integers already, and the $-1$ gets a bar: $[\bar{1}10]$. By cubic symmetry it belongs to the family $\langle110\rangle$ of face diagonals.

**Example 2 (why you'd care — the FCC slip system, and boss-problem parts b & c).** Copper is FCC with atomic radius $R = 0.128$ nm. From [1.2](01-02-crystal-structures-unit-cells.md), FCC atoms touch along the face diagonal, so $a = 2R\sqrt2 = 2(0.128)\sqrt2 = 0.3620$ nm.

*Linear density along $[110]$.* The $[110]$ face diagonal has length $a\sqrt2 = 4R$. Along it sit two corner atoms ($\tfrac12$ each) plus the face-center atom ($1$), so $2$ atoms span the length:

$$\text{LD}_{[110]} = \frac{2}{a\sqrt2} = \frac{2}{4R} = \frac{1}{2R} = \frac{1}{2(0.128)} = 3.91\ \text{atoms/nm}.$$

This is the *largest* linear density in FCC — the atoms touch along $\langle110\rangle$, so no line is more crowded.

*Planar density on $(111)$.* The atoms in an FCC $(111)$ plane form a 2-D triangular (close-packed) tiling with nearest-neighbor spacing $2R$. The area per atom is that of a $60^\circ$ rhombus of side $2R$, namely $(2R)^2\sin 60^\circ = 2\sqrt3\,R^2$, so

$$\text{PD}_{(111)} = \frac{1}{2\sqrt3\,R^2} = \frac{1}{2\sqrt3\,(0.128)^2} = 17.6\ \text{atoms/nm}^2.$$

Compare the $(100)$ face, which holds $4\times\tfrac14$ (corners) $+\ 1$ (face center) $= 2$ atoms over area $a^2$:

$$\text{PD}_{(100)} = \frac{2}{a^2} = \frac{2}{(0.3620)^2} = 15.3\ \text{atoms/nm}^2.$$

So $(111)$ at $17.6$ beats $(100)$ at $15.3$ — the $(111)$ plane is the **densest** plane in FCC. Densest plane, densest direction lying in it: a crystal shears most easily where atoms are packed tightest and have the shortest step to the next site, so FCC metals slip on $\{111\}$ planes in $\langle110\rangle$ directions. That single fact — the $\{111\}\langle110\rangle$ **slip system** — is exactly what [4.2](04-02-plastic-deformation-schmid.md) feeds into Schmid's law to predict yielding.

## Watch out

- **You might think planes use the intercepts directly — they use the reciprocals.** A plane hitting the axes at $1,1,1$ is $(111)$, not "$(1,1,1)$ intercepts read straight off." Skip the reciprocal step and every parallel plane gets a different, useless label; taking reciprocals is what makes the whole family share one name.
- **You might read $[110]$ and $(110)$ as the same thing.** Square brackets are a *direction* (an arrow); round brackets are a *plane* (a sheet). In cubic crystals there's a bonus: $[hkl]$ is always perpendicular to $(hkl)$ — but that normal-vector coincidence is special to cubic systems, so don't lean on it elsewhere.
- **You might forget to slide a plane off the origin.** If your plane passes through the origin you can't read its intercepts (they're $0$, and $1/0$ blows up). Translate it by one lattice parameter along any axis first — the parallel plane you get has identical indices.

## One-liner

> Directions are reduced integer vectors in square brackets; planes are reduced reciprocal-intercepts in round brackets — and the densest plane and direction ($(111)$ and $\langle110\rangle$ in FCC) are where the crystal slips.

## Problems

**P1 (🟢)** Index (a) the direction from tail $(0,0,0)$ to head $(1,0,1)$, and (b) the plane with axis intercepts $a$, $a/2$, $a/3$.

**P2 (🟡)** Aluminum is FCC with lattice parameter $a = 0.4049$ nm. Compute the interplanar spacings $d_{111}$ and $d_{200}$, and say which family of planes is more widely spaced.

**P3 (🔴)** BCC iron has $a = 0.2866$ nm and atomic radius $R = 0.1241$ nm (atoms touch along the body diagonal $\langle111\rangle$). Compute the linear density along $[111]$ and along $[100]$, and state which is the close-packed direction in BCC.

<details>
<summary>Solutions</summary>

**P1** (a) Head − tail $= (1,0,1)-(0,0,0) = (1,0,1)$, already smallest integers: $[101]$.
(b) Intercepts in units of $a$: $1, \tfrac12, \tfrac13$. Reciprocals: $1, 2, 3$. Integers already, so $(123)$.

*Check.* Both index sets are coprime (gcd $=1$), so they're fully reduced. ✓

**P2** Using $d_{hkl} = a/\sqrt{h^2+k^2+l^2}$ with $a = 0.4049$ nm:

$$d_{111} = \frac{0.4049}{\sqrt{1+1+1}} = \frac{0.4049}{\sqrt3} = 0.2338\ \text{nm}, \qquad d_{200} = \frac{0.4049}{\sqrt{4+0+0}} = \frac{0.4049}{2} = 0.2025\ \text{nm}.$$

$\{111\}$ planes ($0.2338$ nm apart) are more widely spaced than $\{200\}$ ($0.2025$ nm).

*Check.* Smaller $h^2+k^2+l^2$ means larger spacing, and $3 < 4$, so $d_{111} > d_{200}$ as found. Units: nm / (dimensionless) = nm ✓.

**P3** In BCC the body diagonal $[111]$ has length $a\sqrt3 = 4R$. Along it: two corner atoms ($\tfrac12$ each) plus the body-center atom ($1$) $= 2$ atoms.

$$\text{LD}_{[111]} = \frac{2}{a\sqrt3} = \frac{2}{4R} = \frac{1}{2R} = \frac{1}{2(0.1241)} = 4.03\ \text{atoms/nm}.$$

Along $[100]$ (a cube edge of length $a$): only the two corner atoms ($\tfrac12$ each) $= 1$ atom, and they do *not* touch.

$$\text{LD}_{[100]} = \frac{1}{a} = \frac{1}{0.2866} = 3.49\ \text{atoms/nm}.$$

Since $4.03 > 3.49$, $\langle111\rangle$ is the close-packed direction in BCC — consistent with atoms touching along the body diagonal.

*Check.* $a\sqrt3 = 0.2866(1.732) = 0.4964$ nm and $4R = 4(0.1241) = 0.4964$ nm ✓, confirming the touching condition used.

</details>

## Flashback

**From Lesson 1.2 (Crystal structures & unit cells):** Chromium is body-centered cubic (BCC) with atomic radius $R = 0.125$ nm and atomic mass $A = 52.00$ g/mol. Compute its theoretical density in g/cm³. (Fresh variant — a BCC metal this time, not the FCC case.)

<details>
<summary>Solution</summary>

BCC atoms touch along the body diagonal, so $a = \dfrac{4R}{\sqrt3} = \dfrac{4(0.125)}{\sqrt3} = 0.2887$ nm $= 2.887\times10^{-8}$ cm, and there are $n = 2$ atoms per cell.

$$\rho = \frac{nA}{V_c N_A} = \frac{(2)(52.00)}{(2.887\times10^{-8})^3\,(6.022\times10^{23})} = \frac{104.0}{(2.406\times10^{-23})(6.022\times10^{23})} = \frac{104.0}{14.49} = 7.18\ \text{g/cm}^3.$$

*Check.* The measured density of chromium is $7.19$ g/cm³ — the tiny gap is the usual hard-sphere idealization. Units: $\dfrac{\text{g/mol}}{\text{cm}^3\cdot\text{mol}^{-1}} = \text{g/cm}^3$ ✓.

</details>

## Connections

- **Backward:** the touching conditions and atom-per-cell counts come straight from [1.2](01-02-crystal-structures-unit-cells.md) — $a = 2R\sqrt2$ for FCC, $a = 4R/\sqrt3$ for BCC — which is what turns an index like $[110]$ into a concrete length and lets you count atoms on a plane.
- **Forward:** planar density and the $\{111\}\langle110\rangle$ result feed directly into [4.2 Schmid's law](04-02-plastic-deformation-schmid.md), where resolved shear stress acts on exactly these densest planes and directions; and grain orientation in [1.4](01-04-order-disorder-grains.md) is why different grains, with their $(hkl)$ planes pointed differently, respond unequally to the same load (anisotropy).
- **Sideways (X-ray diffraction):** the interplanar spacing $d_{hkl}$ is the quantity in Bragg's law, $n\lambda = 2d\sin\theta$ — the reason a diffraction pattern is a direct fingerprint of a crystal's structure. This same reciprocal-of-intercepts idea reappears as the reciprocal lattice in [`condensed-matter`](../../condensed-matter/syllabus.md).
