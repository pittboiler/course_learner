# Inorganic Chemistry · Lesson 2.4: Crystal-Field Theory: Octahedral Splitting

> ⏱ ~15 min · Module 2: Coordination Chemistry & Bonding · Builds on: [2.1 Complexes, ligands & coordination number](02-01-complexes-ligands-coordination-number.md), [`general-chemistry` 1.5 (orbitals, shapes)](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) · Unlocks: [2.5 High-spin / low-spin & the spectrochemical series](02-05-high-spin-low-spin-spectrochemical-series.md)

## Why this matters

Why is $\ce{[Ti(H2O)6]^3+}$ purple, $\ce{[Cu(H2O)6]^2+}$ blue, and $\ce{[Fe(CN)6]^4-}$ pale yellow? Why are some iron complexes strongly magnetic and others barely at all? Bonding models from general chemistry can't answer this — they treat all five $d$ orbitals as interchangeable. Crystal-field theory (CFT) is the fix: a cheap, almost embarrassingly simple electrostatic picture that splits those five orbitals into two energy tiers. That one split — its size $\Delta_o$ and how electrons fill across it — explains the color, the magnetism, and much of the stability of nearly every transition-metal complex you'll meet. This lesson builds the octahedral case, the workhorse geometry, and hands you the number (**CFSE**) that later lessons and Boss Problem 2 run on.

## The idea

Forget covalent bonds for a moment. CFT makes one deliberately crude assumption: **each ligand is just a point of negative charge** (a lone pair, seen from a distance). Six of them surround the metal ion in an octahedron — one on each end of the $x$, $y$, and $z$ axes. The metal's $d$ electrons are also negative, so they get *repelled* by these charges. That's the whole engine: electron–electron repulsion.

Now the key move. In a free metal ion the five $d$ orbitals all have the **same energy** (they're *degenerate*). But they don't all have the same *shape in space*. Two of them — $d_{z^2}$ and $d_{x^2-y^2}$ — have their lobes pointing **straight along the axes**, exactly where the ligand charges sit. The other three — $d_{xy}$, $d_{xz}$, $d_{yz}$ — point **between** the axes, into the gaps. An electron in an axis-pointing orbital sits nose-to-nose with a ligand charge and feels strong repulsion; an electron in a between-axis orbital dodges them and feels less. Same-energy orbitals no longer stay same-energy: the axis-pointers are **pushed up**, the gap-dwellers **sink down**. The five-fold degeneracy splits into two sets, and the energy gap between them is everything.

## The formal version

Place a $d^n$ metal ion at the origin and six ligand point charges at $(\pm a, 0, 0)$, $(0, \pm a, 0)$, $(0, 0, \pm a)$. The five $d$ orbitals split into two symmetry sets (labels borrowed from the octahedron's symmetry group $O_h$):

- **$e_g$** (2 orbitals): $d_{z^2}$ and $d_{x^2-y^2}$ — lobes **along** the axes, pointing *at* the ligands. **Raised** in energy.
- **$t_{2g}$** (3 orbitals): $d_{xy}$, $d_{xz}$, $d_{yz}$ — lobes **between** the axes. **Lowered** in energy.

The energy gap between the two sets is the **octahedral field-splitting parameter**:

$$\Delta_o \equiv E(e_g) - E(t_{2g}).$$

*In words: $\Delta_o$ is how much more it costs to put an electron in an axis-pointing orbital than in a between-axis one.*

**The barycenter (center-of-gravity) rule.** The splitting only *rearranges* the orbitals; it can't change their average energy. So the total energy of the five orbitals, weighted by how many there are, must stay pinned at the pre-split level (the *barycenter*). Two orbitals go up by $x$, three go down by $y$, and the weighted sum is zero:

$$2x - 3y = 0, \qquad x - y = \Delta_o.$$

Solving gives $x = 0.6\,\Delta_o$ and $y = 0.4\,\Delta_o$:

$$\boxed{\;E(e_g) = +0.6\,\Delta_o, \qquad E(t_{2g}) = -0.4\,\Delta_o\;}$$

*In words: each $e_g$ orbital sits $0.6\,\Delta_o$ above center, each $t_{2g}$ orbital $0.4\,\Delta_o$ below — and $3\times 0.4 = 2 \times 0.6$, so the books balance.* (You'll also see these written as $+\tfrac{3}{5}\Delta_o$ and $-\tfrac{2}{5}\Delta_o$.)

**Crystal-field stabilization energy (CFSE).** Add up the stabilization of every $d$ electron relative to the barycenter. If $n_{t_{2g}}$ electrons sit low and $n_{e_g}$ sit high:

$$\boxed{\;\text{CFSE} = \left(-0.4\,n_{t_{2g}} + 0.6\,n_{e_g}\right)\Delta_o \;+\; p\,P\;}$$

*In words: count $-0.4\,\Delta_o$ for each electron that dropped into $t_{2g}$ and $+0.6\,\Delta_o$ for each forced up into $e_g$; the more net stabilization (more negative), the more the field "glues" the complex together.* The extra term $p\,P$ is bookkeeping for **electron pairing**: $P$ is the energy penalty to force two electrons into one orbital (they repel), and $p$ counts how many *extra* pairs the field created beyond what the free ion already had. We'll only need it for the $\ce{Fe^2+}$ problem below and in earnest in [2.5](02-05-high-spin-low-spin-spectrochemical-series.md).

**What sets the size of $\Delta_o$.** Two knobs:

1. **The metal.** Higher oxidation state pulls ligands in closer → stronger field → larger $\Delta_o$. And going down a group, $4d$ and $5d$ metals have bigger, more diffuse orbitals that clash harder with ligands: $\Delta_o$ grows roughly $3d < 4d < 5d$ (often +50% per row).
2. **The ligand.** Some ligands split more than others; ranking them is the **spectrochemical series**, the whole subject of [2.5](02-05-high-spin-low-spin-spectrochemical-series.md).

## Picture

![Octahedral d-orbital splitting: five degenerate d orbitals at the barycenter split into a lower t2g set (three orbitals, minus 0.4 delta-o) and a raised eg set (two orbitals, plus 0.6 delta-o), with the gap delta-o labeled; an inset shows the d(x2-y2) lobes pointing straight at four ligand point charges.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — CFSE for $d^3$, high spin).** Chromium(III), $\ce{[Cr(H2O)6]^3+}$, is $d^3$. With only three electrons and a lower tier that holds three, they each take a separate $t_{2g}$ orbital (Hund's rule — spread out, spins parallel, no pairing yet). So $n_{t_{2g}} = 3$, $n_{e_g} = 0$:

$$\text{CFSE} = (-0.4 \times 3 + 0.6 \times 0)\,\Delta_o = -1.2\,\Delta_o.$$

No extra pairs formed, so no $P$ term. This $-1.2\,\Delta_o$ — the maximum for any $d^3$ — is a big part of why $d^3$ octahedral complexes like $\ce{Cr^3+}$ are so stubbornly stable and kinetically inert.

**Example 2 (why you'd care — color).** The gap $\Delta_o$ usually lands in the *visible* range of photon energies. A $d$ electron can absorb a photon whose energy exactly equals $\Delta_o$ and jump $t_{2g} \to e_g$ (a "$d$–$d$ transition"). $\ce{[Ti(H2O)6]^3+}$ is $d^1$: its lone electron absorbs green-yellow light ($\Delta_o \approx 240\ \mathrm{kJ/mol}$, near $500\ \mathrm{nm}$) to make that jump, so the transmitted light — what your eye sees — is the leftover purple. Bigger $\Delta_o$ → higher-energy (bluer) light absorbed → the complex looks the complementary color. Change the ligand, change $\Delta_o$, change the color. CFT turns "why is it purple?" into arithmetic. (Full spectra: [3.3](03-03-electronic-spectra-dd-transitions.md).)

## Watch out

- **You might think $e_g$ is higher because it holds fewer orbitals — no.** The ordering is pure *geometry*: $e_g$ ($d_{z^2}$, $d_{x^2-y^2}$) points **at** the negative ligands and gets shoved up; $t_{2g}$ points **between** them and sinks. In a **tetrahedral** field the ligands sit between the axes instead, and the order *flips* ($e$ below $t_2$) — same logic, different geometry ([2.6](02-06-tetrahedral-square-planar-fields.md)).
- **The $0.6$ / $0.4$ split is not $\tfrac12$/$\tfrac12$.** It comes straight from the barycenter balance $2(0.6) = 3(0.4)$: two orbitals up must be matched by three orbitals down. Forgetting this and using $\pm 0.5\,\Delta_o$ gives wrong CFSE every time.
- **CFSE is measured *from the barycenter*, not from zero interaction.** All five orbitals are actually pushed *up* by the surrounding charge; CFSE captures only the *extra* bonus from the splitting. It's a relative accounting number, which is exactly why it's useful for comparing complexes.
- **$d_{z^2}$ looks like the odd one out but it's a genuine $e_g$ partner.** Its "doughnut + dumbbell" shape is a quantum-mechanical blend that, averaged over the octahedron, points along the axes just as much as $d_{x^2-y^2}$ does. Take that on faith from the symmetry; the algebra is in an advanced course.

## One-liner

> Six ligand point charges split the five $d$ orbitals into a raised $e_g$ pair (aimed at the ligands, $+0.6\,\Delta_o$) and a lowered $t_{2g}$ trio (aimed between them, $-0.4\,\Delta_o$), and CFSE $=(-0.4\,n_{t_{2g}}+0.6\,n_{e_g})\Delta_o$ is the payoff.

## Problems

**P1 (🟢)** For each of $d^3$, $d^5$, and $d^8$ (all **high-spin** octahedral), draw the $t_{2g}/e_g$ diagram, fill the electrons, and compute the CFSE in units of $\Delta_o$ (ignore pairing energy).

**P2 (🟡)** In an octahedral field, explain from orbital *orientation* why the $e_g$ set ends up higher in energy than the $t_{2g}$ set. Name which real orbitals are in each set and where their lobes point relative to the six ligand charges.

**P3 (🔴, Boss-2 rehearsal)** $\ce{Fe^2+}$ is $d^6$. Draw the octahedral diagram for both fillings — **high-spin** ($t_{2g}^4 e_g^2$) and **low-spin** ($t_{2g}^6 e_g^0$) — and compute the CFSE of each (in $\Delta_o$, then including pairing energy $P$). Which filling nature picks is decided by what? State the rule that settles it.

<details>
<summary>Solutions</summary>

**P1** High-spin means: fill to maximize unpaired spins — one electron in each orbital (all five) before any pairing, obeying Hund's rule.

*$d^3$:* three electrons, one in each $t_{2g}$ orbital. $t_{2g}^3 e_g^0$.
$$\text{CFSE} = (-0.4 \times 3 + 0.6 \times 0)\,\Delta_o = -1.2\,\Delta_o.$$

*$d^5$:* five electrons, one in **each** of the five orbitals (three $t_{2g}$ + two $e_g$), all unpaired. $t_{2g}^3 e_g^2$.
$$\text{CFSE} = (-0.4 \times 3 + 0.6 \times 2)\,\Delta_o = (-1.2 + 1.2)\,\Delta_o = 0.$$
The classic result: high-spin $d^5$ has **zero** CFSE — the three low electrons' bonus is exactly cancelled by the two high electrons' cost. (This is why high-spin $\ce{Mn^2+}$ and $\ce{Fe^3+}$ salts are so pale — little to no field stabilization, and $d$–$d$ transitions are spin-forbidden.)

*$d^8$:* six electrons fill and pair the three $t_{2g}$ orbitals ($t_{2g}^6$), and the last two go one each into the $e_g$ orbitals ($e_g^2$). $t_{2g}^6 e_g^2$.
$$\text{CFSE} = (-0.4 \times 6 + 0.6 \times 2)\,\Delta_o = (-2.4 + 1.2)\,\Delta_o = -1.2\,\Delta_o.$$
(Note $d^8$ has only one sensible filling — high- and low-spin coincide, since $t_{2g}$ must fill before $e_g$ regardless.)

**P2** The five $d$ orbitals differ in where their lobes point. The $e_g$ orbitals — $d_{z^2}$ and $d_{x^2-y^2}$ — have their lobes directed **straight along the $x$, $y$, $z$ axes**, which is exactly where the six ligand point charges sit. An electron in an $e_g$ orbital is therefore aimed right at a negative charge and suffers maximal electrostatic repulsion, raising its energy. The $t_{2g}$ orbitals — $d_{xy}$, $d_{xz}$, $d_{yz}$ — have their lobes pointing **between** the axes, into the gaps midway between ligands. Those electrons largely dodge the charges, feel weaker repulsion, and sit lower. Since both sets started degenerate and the barycenter (average) must be conserved, the axis-pointers rise ($+0.6\,\Delta_o$) exactly as the gap-dwellers fall ($-0.4\,\Delta_o$).

**P3** $\ce{Fe^2+}$: iron is group 8, so neutral Fe is $d^6 s^2$; removing 2 electrons (the $4s$ pair) gives $\ce{Fe^2+} = d^6$. Six $d$ electrons.

*High-spin* ($t_{2g}^4 e_g^2$): spread out first (all five orbitals singly occupied = 5 electrons), then the 6th must pair up, landing in $t_{2g}$. So $n_{t_{2g}} = 4$, $n_{e_g} = 2$, with **one** pair in $t_{2g}$.
$$\text{CFSE} = (-0.4 \times 4 + 0.6 \times 2)\,\Delta_o = (-1.6 + 1.2)\,\Delta_o = -0.4\,\Delta_o.$$
Pairing: the free ion $d^6$ already has one forced pair (6 electrons in 5 orbitals), and high-spin also has exactly one pair — **no extra** pairs created, so no added $P$. Full expression: $\text{CFSE} = -0.4\,\Delta_o$.

*Low-spin* ($t_{2g}^6 e_g^0$): all six electrons crammed into the three $t_{2g}$ orbitals, fully paired; $e_g$ empty. $n_{t_{2g}} = 6$, $n_{e_g} = 0$.
$$\text{CFSE} = (-0.4 \times 6 + 0.6 \times 0)\,\Delta_o = -2.4\,\Delta_o.$$
Pairing: low-spin $t_{2g}^6$ has **three** pairs vs. the free ion's one, i.e. **two extra** pairs. Full expression: $\text{CFSE} = -2.4\,\Delta_o + 2P$.

*Which wins?* Compare the two totals:
- High-spin: $-0.4\,\Delta_o$
- Low-spin: $-2.4\,\Delta_o + 2P$

Low-spin is lower in energy (favored) when $-2.4\,\Delta_o + 2P < -0.4\,\Delta_o$, i.e. when $2P < 2\,\Delta_o$, i.e. when $\Delta_o > P$. **The comparison of $\Delta_o$ against the pairing energy $P$ decides it:** a **strong field** ($\Delta_o > P$, the gap costs more than pairing) forces electrons to pair low → **low-spin**; a **weak field** ($\Delta_o < P$, pairing costs more than the jump) lets them climb into $e_g$ → **high-spin**. Which ligands produce which is the spectrochemical series in [2.5](02-05-high-spin-low-spin-spectrochemical-series.md).

</details>

## Flashback

**From Lesson 2.2 (Nomenclature & oxidation state):** For the complex ion $\ce{[Co(NH3)5Cl]^2+}$, determine the oxidation state of cobalt and its $d$-electron count.

<details>
<summary>Solution</summary>

Assign charges to the ligands. Ammonia $\ce{NH3}$ is neutral (five of them contribute $0$); chloride $\ce{Cl-}$ carries $-1$. The whole ion has charge $+2$. Let the cobalt oxidation state be $x$:

$$x + 5(0) + (-1) = +2 \;\Longrightarrow\; x - 1 = +2 \;\Longrightarrow\; x = +3.$$

So cobalt is $\ce{Co^3+}$. For the $d$-count: neutral Co is group 9 ($d^7 s^2$, nine valence electrons). Strip 3 electrons for the $+3$ charge (the two $4s$ first, then one $3d$):

$$9 - 3 = 6 \;\Longrightarrow\; \text{Co(III) is } d^6.$$

(A $d^6$ ion — exactly the case explored in P3, and the reason $\ce{Co^3+}$ with strong-field $\ce{NH3}$ is famously low-spin and inert.)

</details>

## Connections

- **Backward:** this refines the $d$-orbital picture from [`general-chemistry` 1.5](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) — the five orbitals you learned as degenerate stop being degenerate the moment ligands surround them. It reuses the coordination geometry and oxidation-state counting from [2.1](02-01-complexes-ligands-coordination-number.md) and 2.2: you need the metal's $d^n$ and its six-ligand octahedron before you can split anything.
- **Forward:** [2.5](02-05-high-spin-low-spin-spectrochemical-series.md) turns the $\Delta_o$ vs. $P$ contest from P3 into the high-spin/low-spin rule and ranks ligands by field strength; [2.6](02-06-tetrahedral-square-planar-fields.md) redoes the splitting for other geometries (tetrahedral flips the order; $\Delta_t \approx \tfrac{4}{9}\Delta_o$). CFSE here feeds **Boss Problem 2** directly.
- **Sideways:** the color argument ($\Delta_o$ = absorbed-photon energy) is the bridge to spectroscopy — the same $E = h\nu$ accounting used across [`physical-chemistry`](../../physical-chemistry/syllabus.md), made quantitative for complexes in [3.3](03-03-electronic-spectra-dd-transitions.md). The unpaired-electron count you just tallied (e.g. high-spin $d^6$ has 4 unpaired) drives the magnetic moment $\mu = \sqrt{n(n+2)}$ in [3.4](03-04-magnetism-of-complexes.md).

