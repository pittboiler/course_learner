# Mechanics of Materials · Lesson 1.3: Axial deformation

> ⏱ ~15 min · Module 1: Axial loading · Builds on: [1.1 Normal & shear stress](01-01-normal-shear-stress.md), [1.2 Strain & the tension test](01-02-strain-tension-test.md), [`calc-refresher`](../../calc-refresher/syllabus.md) (integration) · Unlocks: [1.4 Statically indeterminate axial](01-04-statically-indeterminate-axial.md), [3.1 Deflection by integration](03-01-deflection-by-integration.md)

## Why this matters

You already know how hard a member is being squeezed ($\sigma = P/A$) and how much it strains ($\varepsilon = \sigma/E$). The question every designer actually asks next is: **by how many millimeters does it move?** A turnbuckle you tighten, a hanger rod under a floor, a bolt you preload, the leg of a truss — each stretches or shortens by a definite amount, and that amount decides whether a machine binds, a joint gaps, or a redundant support even carries load at all. This lesson turns stress and strain into a single, reusable displacement formula — and reveals that every axial member is secretly a **spring**. That spring idea is the master key to [1.4](01-04-statically-indeterminate-axial.md)'s indeterminate problems and reappears the moment we bend beams in [Module 3](03-01-deflection-by-integration.md).

## The idea

Take a rod, pull it with force $P$, and it gets longer by some amount $\delta$ (Greek delta, the elongation). How big is $\delta$? Three facts you already have, chained together:

- The pull creates stress: $\sigma = P/A$ — spread the force over the cross-section.
- Stress creates strain: $\varepsilon = \sigma/E$ — stiffer material (bigger $E$), less strain.
- Strain *is* stretch-per-length: $\varepsilon = \delta/L$, so $\delta = \varepsilon L$ — a longer rod accumulates more total stretch.

Multiply the chain out and you get one clean result: **elongation grows with force and length, shrinks with area and stiffness.** Rearranged, it says something even simpler — force is proportional to stretch, $P = (AE/L)\,\delta$. That is *exactly* Hooke's law for a spring, $F = k x$, with spring constant $k = AE/L$. A steel bar is just a very stiff spring. Once you see that, a stepped bar becomes springs in a chain, and a redundant support becomes a spring you have to balance.

## The formal version

**Elongation of a uniform axial member.** For a straight prismatic member (constant $A$) of length $L$, made of a linear-elastic material (modulus $E$), carrying a constant internal axial force $P$:

$$\boxed{\,\delta = \frac{PL}{AE}\,}$$

*In words: the elongation equals force times length, divided by area times stiffness.* Symbols and units: $\delta$ = axial elongation (m or mm), $P$ = internal normal force (N or kN), $L$ = length (m or mm), $A$ = cross-sectional area (m² or mm²), $E$ = Young's modulus (Pa or GPa). **Sign convention:** $P > 0$ in tension, so $\delta > 0$ is a lengthening; compression gives $P < 0$ and $\delta < 0$, a shortening. Derivation is just the chain above:

$$\delta = \varepsilon L = \frac{\sigma}{E}L = \frac{P/A}{E}L = \frac{PL}{AE}.$$

**Stiffness (the spring).** Rewrite it as $P = k\,\delta$ with

$$k = \frac{AE}{L}\quad(\text{N/m}),$$

the **axial stiffness**. Its inverse $f = 1/k = L/(AE)$ is the **flexibility** (or compliance) — displacement per unit force.

**Stepped bars: add the segments.** If $A$, $E$, or the internal force $P$ changes in jumps along the bar, split it at every jump. Each prismatic segment $i$ stretches by $P_i L_i/(A_i E_i)$, and total displacement is the sum:

$$\delta = \sum_i \frac{P_i L_i}{A_i E_i}.$$

*In words: cut the bar into constant-property pieces, stretch each on its own, and add.* The catch is $P_i$: it is the **internal** force in that segment, found by a section cut — not necessarily the applied load. Cut anywhere in a segment and sum the external axial forces on one side; that is $P_i$ there. (Springs in series: since displacements add at fixed force, the flexibilities add, $f = \sum L_i/(A_iE_i)$.)

**Continuous variation: integrate.** If area tapers or the load varies continuously (a bar under its own weight), the sum becomes an integral. A slice of thickness $dx$ carrying internal force $N(x)$ stretches by $d\delta = N(x)\,dx/[A(x)E]$, so

$$\delta = \int_0^L \frac{N(x)}{A(x)\,E}\,dx.$$

*In words: same recipe, infinitely many infinitesimal segments.* For a prismatic bar of area $A$, length $L$, hanging under its own weight (specific weight $\gamma$, in N/m³), a cut at height $x$ above the bottom carries the weight below it, $N(x) = \gamma A x$, giving $\delta = \int_0^L \gamma A x/(AE)\,dx = \gamma L^2/(2E) = WL/(2AE)$, where $W = \gamma A L$ is the total weight. Half of $WL/(AE)$ — as if the whole weight acted at the bar's midpoint.

**Superposition.** Because the response is linear, the elongation from several axial loads acting together equals the sum of the elongations each load would cause alone. That is really all the segment-sum is doing.

## Picture

![A stepped axial bar fixed at a wall: segment 1 of area A1 and segment 2 of area A2, loads P1 at the joint and P2 at the free end, with internal forces N1 = P1 + P2 and N2 = P2 labeled, the total elongation written as a sum, and the same bar redrawn as two springs k1, k2 in series.](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (uniform bar — the formula in action).** A steel rod, $L = 3\ \mathrm{m}$, $A = 200\ \mathrm{mm^2}$, is pulled by $P = 40\ \mathrm{kN}$. Take $E = 200\ \mathrm{GPa}$. How much does it stretch?

A clean unit trick: since $1\ \mathrm{GPa} = 1\ \mathrm{kN/mm^2}$, work in kN, mm, mm². Then $E = 200\ \mathrm{kN/mm^2}$ and $L = 3000\ \mathrm{mm}$:

$$\delta = \frac{PL}{AE} = \frac{(40\ \mathrm{kN})(3000\ \mathrm{mm})}{(200\ \mathrm{mm^2})(200\ \mathrm{kN/mm^2})} = \frac{120000}{40000}\ \mathrm{mm} = 3\ \mathrm{mm}.$$

*Units/sanity check.* Denominator $A\,E = \mathrm{mm^2}\cdot\mathrm{kN/mm^2} = \mathrm{kN}$, so $PL/(AE) = \mathrm{kN}\cdot\mathrm{mm}/\mathrm{kN} = \mathrm{mm}$ ✓. Positive, so the rod lengthens (tension) ✓. Size sense: 3 mm over 3 m is a strain of $10^{-3}$ — a tenth of a percent, exactly the elastic range steel lives in.

**Example 2 (stepped bar + self-weight — the general recipe).**

*(a) Two segments, two loads.* A steel bar ($E = 200\ \mathrm{GPa} = 200\ \mathrm{kN/mm^2}$) is fixed at a wall. Segment 1 (wall→B): $A_1 = 400\ \mathrm{mm^2}$, $L_1 = 1000\ \mathrm{mm}$. Segment 2 (B→C): $A_2 = 200\ \mathrm{mm^2}$, $L_2 = 800\ \mathrm{mm}$. A load $P_1 = 20\ \mathrm{kN}$ pulls (outward) at joint B, and $P_2 = 30\ \mathrm{kN}$ pulls at the free end C. Find the elongation of C.

Internal forces by section cut (sum the loads to the *right* of the cut, tension positive):

$$N_2 = P_2 = 30\ \mathrm{kN}, \qquad N_1 = P_1 + P_2 = 50\ \mathrm{kN}.$$

Add the segment stretches:

$$\delta = \frac{N_1 L_1}{A_1 E} + \frac{N_2 L_2}{A_2 E} = \frac{(50)(1000)}{(400)(200)} + \frac{(30)(800)}{(200)(200)} = 0.625 + 0.600 = 1.225\ \mathrm{mm}.$$

*Units/sanity check.* Every term is $\mathrm{kN\cdot mm}/(\mathrm{mm^2\cdot kN/mm^2}) = \mathrm{mm}$ ✓. Both internal forces are tensile, both terms positive, so C moves away from the wall by 1.225 mm ✓. Note segment 1 carries *more* force yet has more area — you truly must track $N_i$, $A_i$ separately.

*(b) The same bar's own weight.* Suppose instead a prismatic hanging bar, $L = 10\ \mathrm{m}$, $A = 600\ \mathrm{mm^2}$, steel $\gamma = 77\ \mathrm{kN/m^3}$, $E = 200\ \mathrm{GPa}$, stretches under gravity alone. The internal force varies with height, so integrate — but we derived the shortcut $\delta = \gamma L^2/(2E)$:

$$\delta = \frac{\gamma L^2}{2E} = \frac{(77\times10^{3}\ \mathrm{N/m^3})(10\ \mathrm{m})^2}{2(200\times10^{9}\ \mathrm{Pa})} = \frac{7.7\times10^{6}}{4\times10^{11}}\ \mathrm{m} \approx 1.9\times10^{-5}\ \mathrm{m} = 0.019\ \mathrm{mm}.$$

*Units/sanity check.* $\mathrm{(N/m^3)(m^2)/(N/m^2)} = \mathrm{m}$ ✓. Tiny — self-weight stretch is usually negligible for short members but grows as $L^2$, so it dominates for very long cables and mine hoists.

## Watch out

- **You might think you plug the applied load into $\delta = PL/AE$, but actually you plug the *internal* force $N$ from a section cut.** With loads applied mid-bar (Example 2a), the segment nearest the wall carries the sum of everything downstream, not just one applied load. Cut first, then compute.
- **You might think stepped means "average the areas," but actually you sum separate terms.** Compliance (flexibility) adds, not stiffness — a thin, weak segment can dominate $\delta$ even if it is short, because its $A_iE_i$ is small. Never average $A$; sum $P_iL_i/(A_iE_i)$.
- **You might drop the sign in compression.** A compressive internal force is negative, so its term *shortens* the bar. In a bar with both tension and compression segments, the signs must fight it out in the sum — a positive total means net lengthening.

## One-liner

> Every axial member is a spring of stiffness $k = AE/L$: $\delta = PL/AE$ for one piece, $\sum P_iL_i/(A_iE_i)$ for stepped bars, and $\int N(x)\,dx/[A(x)E]$ when things vary continuously.

## Problems

**P1 (🟢)** An aluminum rod ($E = 70\ \mathrm{GPa}$) has $A = 100\ \mathrm{mm^2}$ and $L = 2\ \mathrm{m}$, and carries an axial tension $P = 14\ \mathrm{kN}$. Find its elongation.

**P2 (🟡)** A stepped steel bar ($E = 200\ \mathrm{GPa}$) is fixed at a wall and pulled by a single load $P = 25\ \mathrm{kN}$ at its free end. Segment 1 (wall→B): $A_1 = 500\ \mathrm{mm^2}$, $L_1 = 600\ \mathrm{mm}$. Segment 2 (B→end): $A_2 = 250\ \mathrm{mm^2}$, $L_2 = 400\ \mathrm{mm}$. Find (i) the total elongation, and (ii) the equivalent axial stiffness $k_\mathrm{eq} = P/\delta$ of the whole bar. Verify that $1/k_\mathrm{eq} = 1/k_1 + 1/k_2$ (springs in series).

**P3 (🔴)** A vertical steel bar ($E = 200\ \mathrm{GPa}$, $\gamma = 77\ \mathrm{kN/m^3}$) hangs from a fixed top support. It has $L = 8\ \mathrm{m}$, $A = 600\ \mathrm{mm^2}$, and carries an end load $P = 12\ \mathrm{kN}$ at the bottom, in addition to its own weight. Set up $N(x)$ for a cut at distance $x$ below the top, integrate to get the total elongation, and comment on how much the self-weight contributes.

<details>
<summary>Solutions</summary>

**P1** Work in kN, mm, mm² with $E = 70\ \mathrm{kN/mm^2}$, $L = 2000\ \mathrm{mm}$:

$$\delta = \frac{PL}{AE} = \frac{(14)(2000)}{(100)(70)} = \frac{28000}{7000} = 4\ \mathrm{mm}.$$

*Check.* Denominator $AE = \mathrm{mm^2\cdot kN/mm^2 = kN}$, so result is mm ✓. Aluminum is about a third as stiff as steel, so it stretches noticeably — a strain of $4/2000 = 2\times10^{-3}$, still elastic. ✓

**P2** Single end load, so a section cut anywhere gives the *same* internal force $N = 25\ \mathrm{kN}$ in both segments. With $E = 200\ \mathrm{kN/mm^2}$:

$$\delta = \frac{N L_1}{A_1 E} + \frac{N L_2}{A_2 E} = \frac{(25)(600)}{(500)(200)} + \frac{(25)(400)}{(250)(200)} = 0.15 + 0.20 = 0.35\ \mathrm{mm}.$$

(i) $\delta = 0.35\ \mathrm{mm}$.

(ii) $k_\mathrm{eq} = P/\delta = 25/0.35 = 71.4\ \mathrm{kN/mm}$. Check the series law: $k_1 = A_1E/L_1 = (500)(200)/600 = 166.7\ \mathrm{kN/mm}$, $k_2 = (250)(200)/400 = 125\ \mathrm{kN/mm}$. Then

$$\frac{1}{k_1} + \frac{1}{k_2} = \frac{1}{166.7} + \frac{1}{125} = 0.0060 + 0.0080 = 0.0140\ \mathrm{mm/kN} = \frac{1}{71.4\ \mathrm{kN/mm}}.\ ✓$$

*Check.* The thinner segment 2 (smaller $A$, so smaller $k$) contributes the larger stretch (0.20 vs 0.15) and dominates the compliance — exactly the "sum flexibilities" warning in Watch out. ✓

**P3** Measure $x$ downward from the top support. A cut at $x$ must hold up everything below it: the end load $P$ plus the weight of the bar length $(L - x)$ below the cut. With $\gamma$ the specific weight and area $A$, that weight is $\gamma A (L-x)$, so

$$N(x) = P + \gamma A (L - x).$$

Integrate:

$$\delta = \int_0^L \frac{N(x)}{AE}\,dx = \frac{1}{AE}\int_0^L \big[P + \gamma A(L-x)\big]\,dx = \frac{1}{AE}\left[PL + \gamma A\frac{L^2}{2}\right] = \frac{PL}{AE} + \frac{\gamma L^2}{2E}.$$

This is just superposition: end-load term $PL/(AE)$ plus self-weight term $\gamma L^2/(2E)$ (the $WL/(2AE)$ result). Numbers, in SI: $AE = (600\times10^{-6}\ \mathrm{m^2})(200\times10^{9}\ \mathrm{Pa}) = 1.2\times10^{8}\ \mathrm{N}$.

$$\frac{PL}{AE} = \frac{(12\times10^{3})(8)}{1.2\times10^{8}} = 8.0\times10^{-4}\ \mathrm{m} = 0.80\ \mathrm{mm},\qquad \frac{\gamma L^2}{2E} = \frac{(77\times10^{3})(8)^2}{2(200\times10^{9})} = 1.2\times10^{-5}\ \mathrm{m} = 0.012\ \mathrm{mm}.$$

Total $\delta \approx 0.80 + 0.012 = 0.81\ \mathrm{mm}$.

*Check.* Units of each term are m ✓. The self-weight adds only about 1.5% here — negligible for an 8 m member with a real end load, which is why we routinely ignore it, but the $L^2$ growth means it cannot be ignored for very long hanging elements. ✓

</details>

## Flashback

**From Lesson 1.2 (Strain & the tension test):** An aluminum rod ($E = 70\ \mathrm{GPa}$) carries a uniform axial stress of $\sigma = 105\ \mathrm{MPa}$. Find the axial strain, and the elongation over a 2 m gauge length. (Fresh variant — start from stress, not force.)

<details>
<summary>Solution</summary>

Hooke's law in the axial direction, $\sigma = E\varepsilon$, gives the strain directly (recall $1\ \mathrm{MPa} = 10^{6}\ \mathrm{Pa}$, $1\ \mathrm{GPa} = 10^{9}\ \mathrm{Pa}$):

$$\varepsilon = \frac{\sigma}{E} = \frac{105\times10^{6}\ \mathrm{Pa}}{70\times10^{9}\ \mathrm{Pa}} = 1.5\times10^{-3}.$$

Strain is stretch per length, so over $L = 2\ \mathrm{m}$:

$$\delta = \varepsilon L = (1.5\times10^{-3})(2\ \mathrm{m}) = 3.0\times10^{-3}\ \mathrm{m} = 3\ \mathrm{mm}.$$

*Check.* Strain is dimensionless (Pa/Pa) ✓, and $\varepsilon L$ has units of length ✓. Note this is the same $\delta = \varepsilon L$ step that, combined with $\sigma = P/A$, builds this lesson's $\delta = PL/AE$. ✓

</details>

## Connections

- **Backward:** this lesson is literally [1.1](01-01-normal-shear-stress.md)'s $\sigma = P/A$ and [1.2](01-02-strain-tension-test.md)'s $\sigma = E\varepsilon$, $\varepsilon = \delta/L$ multiplied together. The internal force $P$ in each segment comes from the section-cut idea you use for [statics 04-01 internal forces](../../statics/lessons/04-01-internal-forces-normal-shear-bending.md).
- **Forward:** [1.4 Statically indeterminate axial](01-04-statically-indeterminate-axial.md) is where the spring picture pays off — when equilibrium alone can't find the forces, you add a *compatibility* equation built from these $\delta = PL/AE$ terms. The continuous integral $\int N\,dx/(AE)$ generalizes directly to beam deflection in [3.1](03-01-deflection-by-integration.md), where $M/EI$ replaces $N/AE$.
- **Sideways (materials science):** here we compute how far a member moves *within* the elastic range; [materials-science 04-01 elastic behavior](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) explains *why* $E$ has the value it does (atomic bond stiffness) and what happens when stress climbs past yield and Hooke's law — the whole basis of $\delta = PL/AE$ — stops holding.
