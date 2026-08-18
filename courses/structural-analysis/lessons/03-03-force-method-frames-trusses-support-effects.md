# Structural Analysis · Lesson 3.3: Force Method for Frames, Trusses & Support Effects

> ⏱ ~15 min · Module 3: Force (Flexibility) Method · Builds on: [3.2 Force method for beams](03-02-force-method-beams.md), [2.5 Truss deflections & Castigliano](02-05-truss-deflections-castigliano.md) · Unlocks: [3.4 Slope-deflection](03-04-slope-deflection-method.md), [3.5 Moment distribution](03-05-moment-distribution-method.md)

## Why this matters

In [3.2](03-02-force-method-beams.md) you pinned down one redundant reaction on a beam. The real world hands you more: a rigid **frame** with a locked-in horizontal thrust, a **truss** with one bar too many, and — the part textbooks quietly skip until it costs someone a cracked slab — supports that *sink*, and members that *grow* in the sun. The recipe never changes. What changes is where the numbers come from ($\int mM/EI\,dx$ for frames, $\sum nNL/AE$ for trusses) and what sits on the right-hand side of the compatibility equation. Get the right-hand side wrong and you'll predict zero stress from a settling foundation — in an indeterminate structure, exactly the load case that cracks it.

## The idea

The force method is one sentence: **release the structure until it's determinate, then put back exactly enough redundant force to restore compatibility.** Everything in this lesson is that same sentence with the vocabulary widened.

*Frames and trusses* only change the bookkeeping. To find how far the released structure deflects at the redundant, you use the unit-load method you already know — for a frame, integrate $mM/EI$ over every member; for a truss, sum $nNL/AE$ over every bar. Multiple redundants just means a small linear system instead of one equation.

*Support settlement and temperature* change something deeper: the target. Normally you demand "the deflection at the removed support is **zero**" — because the support holds it there. But if that support **settles by $\delta$**, the correct demand is "the deflection equals $\delta$." And if a member is **heated** or **fabricated the wrong length**, it strains the structure with no external load at all — that free elongation feeds the equation like a ghost load.

Here's the punchline worth tattooing on the inside of your eyelids: **a determinate structure absorbs settlement and heat by simply moving — stress-free. An indeterminate one can't move freely, so it fights itself, and the fight is internal stress.** Redundancy buys you safety against collapse and charges you in thermal and settlement stresses.

## The formal version

Pick redundants $X_1,\dots,X_n$ (extra reactions, or the internal force in an extra member). Remove them to get a stable, determinate **released** (primary) structure. Compatibility says the displacement at each release, in the real structure, must match what the real structure actually does there:

$$\Delta_{i0} + \sum_{j=1}^{n} f_{ij}\,X_j = \Delta_i^{\text{prescribed}}, \qquad i = 1,\dots,n,$$

or in matrix form $[\,f\,]\{X\} = \{\Delta^{\text{presc}}\} - \{\Delta_0\}$. Each symbol:

- $\Delta_{i0}$ = displacement of the released structure **at release $i$, in the direction of $X_i$, under the real loads** (units: m for a force redundant, rad for a moment redundant). Computed by unit load: **frames** $\displaystyle \Delta_{i0}=\sum_{\text{members}}\int_0^L \frac{m_i\,M_0}{EI}\,dx$; **trusses** $\displaystyle \Delta_{i0}=\sum_{\text{bars}}\frac{n_i\,N_0\,L}{AE}$. Here $M_0,N_0$ are the real-load internal actions and $m_i,n_i$ the actions from a unit $X_i$.
- $f_{ij}$ = **flexibility coefficient**: displacement at release $i$ due to a *unit* value of $X_j$ (units: m/kN, etc.). **Frames** $\displaystyle f_{ij}=\sum\int \frac{m_i m_j}{EI}dx$; **trusses** $\displaystyle f_{ij}=\sum \frac{n_i n_j L}{AE}$. *In words: how much release $i$ moves when you tug on redundant $j$ by one unit.* The matrix $[f]$ is **symmetric** ($f_{ij}=f_{ji}$, by Maxwell–Betti reciprocity — a free consequence of the unit-load formula).
- $\Delta_i^{\text{prescribed}}$ = the displacement the support is *actually forced to have*. **Normal support: $0$.** **Support that settles by $\delta_i$ (in the $+X_i$ direction): $\delta_i$.**

*In words: real-load deflection plus redundant-induced deflection equals the movement the support is allowed.* Solve the system for $\{X\}$; superpose $M = M_0 + \sum m_i X_i$ (or $N = N_0 + \sum n_i X_i$) for the final internal forces.

**Temperature and fabrication misfit** enter through $\Delta_0$, not the right-hand side. A member of length $L$ heated by $\Delta T$ wants to grow by its **free thermal elongation** $e_T = \alpha\,\Delta T\,L$ (with $\alpha$ = coefficient of thermal expansion, units $1/^\circ\mathrm{C}$; $\Delta T$ in $^\circ\mathrm{C}$). A member fabricated a length $\Lambda$ too long behaves identically with $e = \Lambda$. This misfit contributes to each release just like a load does:

$$\Delta_{i0}^{\,T} = \sum_{\text{members}} n_i\, e_T = \sum n_i\,\alpha\,\Delta T\,L \quad(\text{trusses}),$$

added into $\Delta_{i0}$. *In words: heat and bad tailoring act like invisible loads — a determinate structure shrugs them off by moving, an indeterminate one turns them into force.*

## Picture

![Superposition for a propped cantilever whose prop settles: actual structure with settlement delta, released cantilever under UDL dropping B by Delta-10, released cantilever with upward redundant R_B lifting B, and the compatibility equation equal to delta not zero](assets/03-03-fig1.svg)

The whole force method for a settling prop, in one frame: real load drops B by $\Delta_{10}$, the redundant lifts it by $f_{11}R_B$, and the two must combine to leave B exactly $\delta$ low — the settlement, not zero.

## Worked examples

**Example 1 — support settlement drains a prop (propped cantilever).** A cantilever fixed at $A$, span $L$, carries a UDL $w$ and is propped by a support at the free end $B$. That prop **settles downward by $\delta$**. Take the redundant $X_1 = R_B$ (upward). Released structure: a plain cantilever, free at $B$. Measure deflection **positive downward** (the direction $w$ and $\delta$ both act).

Real-load deflection at $B$ (cantilever tip under UDL) and flexibility (tip under unit upward force):

$$\Delta_{10} = \frac{wL^4}{8EI}\ (\text{down}), \qquad f_{11} = \frac{L^3}{3EI}\ (\text{up per unit up}).$$

The upward redundant lifts $B$, so its downward contribution is $-f_{11}X_1$. Compatibility demands $B$ end up $\delta$ **below** its support point:

$$\underbrace{\frac{wL^4}{8EI}}_{\Delta_{10}} - \underbrace{\frac{L^3}{3EI}}_{f_{11}} X_1 = \delta \;\Longrightarrow\; X_1 = \frac{3}{8}wL - \frac{3EI\,\delta}{L^3}.$$

The first term is the familiar no-settlement answer $R_B = \tfrac38 wL$ (matches [2.5](02-05-truss-deflections-castigliano.md)/[3.2](03-02-force-method-beams.md)); the second is the settlement penalty. Numbers: $w=12\ \mathrm{kN/m}$, $L=4\ \mathrm{m}$, $EI=20{,}000\ \mathrm{kN\cdot m^2}$, $\delta=5\ \mathrm{mm}=0.005\ \mathrm{m}$:

$$R_B = 18 - \frac{3(20{,}000)(0.005)}{4^3} = 18 - 4.69 = 13.31\ \mathrm{kN}.$$

The prop lost **26%** of its reaction — where did that load go? Statics on the beam, $M_A = \tfrac{wL^2}{2} - R_B L$:

$$M_A^{\text{no settle}} = 96 - 18(4) = 24\ \mathrm{kN\cdot m}, \qquad M_A^{\text{settle}} = 96 - 13.31(4) = 42.8\ \mathrm{kN\cdot m}.$$

The fixed-end (hogging) moment nearly **doubled**. That is settlement-induced stress: nothing about the load changed, yet $M_A$ jumped 78% because a support moved 5 mm. *Units/sanity: $\dfrac{EI\,\delta}{L^3}=\dfrac{\mathrm{kN\cdot m^2\cdot m}}{\mathrm{m^3}}=\mathrm{kN}$ ✓. As $\delta\to0$ we recover $\tfrac38 wL$; if the prop settled far enough ($\delta > \Delta_{10}$) $R_B$ would go negative — the "prop" would have to pull down.*

**Example 2 — indeterminate truss, one redundant bar ($\sum nNL/AE$).** Three pin-ended bars share a load $P$ (down) at a common joint $O$: one vertical bar (length $L$) and two symmetric bars at angle $\theta$ to vertical (length $L/\cos\theta$), all with the same $AE$. Three unknown bar forces, two equilibrium equations at $O$ $\Rightarrow$ **one redundant** (this is the truss cousin of the indeterminate-axial problem in [`mechanics-of-materials` 1.4](../../mechanics-of-materials/lessons/01-04-statically-indeterminate-axial.md)). Choose $X_1 = N_2$, the middle-bar force; **release** by cutting the middle bar.

*Released structure, real load:* the two inclined bars alone carry $P$. By symmetry $2N_1^{0}\cos\theta = P$, so $N_1^{0}=N_3^{0}=\dfrac{P}{2\cos\theta}$, and $N_2^{0}=0$ (bar cut).

*Unit system:* apply a unit tension pair across the cut ($n_2 = 1$). Vertical equilibrium at $O$: $1 + 2n_1\cos\theta = 0 \Rightarrow n_1 = n_3 = -\dfrac{1}{2\cos\theta}$.

Now $\Delta_{10}$ (gap opening from the real load) and $f_{11}$ (gap opening per unit redundant), each summed over the bars with $L_{\text{incl}} = L/\cos\theta$:

$$\Delta_{10} = \sum \frac{n N_0 L}{AE} = 2\cdot\frac{\left(-\tfrac{1}{2\cos\theta}\right)\left(\tfrac{P}{2\cos\theta}\right)(L/\cos\theta)}{AE} = -\frac{PL}{2AE\cos^3\theta},$$

$$f_{11} = \sum \frac{n^2 L}{AE} = \frac{(1)^2 L}{AE} + 2\cdot\frac{\left(\tfrac{1}{2\cos\theta}\right)^2 (L/\cos\theta)}{AE} = \frac{L}{AE}\left(1 + \frac{1}{2\cos^3\theta}\right).$$

Compatibility (the cut must close, $\Delta^{\text{presc}}=0$): $\Delta_{10} + f_{11}X_1 = 0$, so

$$N_2 = X_1 = -\frac{\Delta_{10}}{f_{11}} = \frac{P}{1 + 2\cos^3\theta}, \qquad N_1 = N_1^0 + n_1 X_1 = \frac{P\cos^2\theta}{1 + 2\cos^3\theta}.$$

For $\theta = 30^\circ$ ($\cos^3\theta = 0.6495$): $N_2 = 0.435P$ (middle bar takes the most — it's the shortest, stiffest path), each outer bar $N_1 = 0.326P$. *Units/sanity: $nNL/AE$ has units $\dfrac{\mathrm{kN\cdot m}}{\mathrm{kN}}=\mathrm{m}$ ✓ (a displacement). Equilibrium: $N_2 + 2N_1\cos\theta = 0.435P + 2(0.326P)(0.866) = P$ ✓. And the limit $\theta\to0$ (three parallel bars) gives $N_2 = P/3$ — three identical bars split the load evenly, exactly right.*

## Watch out

- **You might think settlement compatibility just swaps $0$ for $\delta$ everywhere.** Only at the settling release, and only with the **sign** matching the $+X_i$ direction. A settlement *toward* the released redundant's positive direction is $+\delta$; away from it is $-\delta$. Draw the arrow before you write the number.
- **You might think temperature and settlement are the same kind of term.** They enter on opposite sides. A **support movement** is a prescribed displacement — it sits on the **right** ($\Delta^{\text{presc}}$). A **member's thermal/misfit elongation** is an internal free strain — it acts like a load and folds into $\Delta_{i0}$ on the **left**. Mixing them up flips the resulting stresses.
- **You might expect a determinate truss to develop thermal stress.** It won't. Remove the redundant bar and heat whatever you like: the joints just relocate, every bar reaches its happy length, zero force. Thermal and settlement stress is the *price of redundancy* — it exists only because the extra restraint refuses to let the structure move freely. Determinate structures move; indeterminate structures stress.

## One-liner

> Same recipe — release, restore compatibility — but for frames sum $\int mM/EI$, for trusses sum $nNL/AE$; put support settlement on the right-hand side and thermal/misfit strain on the left, because an indeterminate structure can't move without fighting itself.

## Problems

**P1 (🟢)** A cantilever fixed at $A$, span $L = 5\ \mathrm{m}$, carries a UDL $w = 8\ \mathrm{kN/m}$ and is propped at the free end $B$ ($EI = 30{,}000\ \mathrm{kN\cdot m^2}$). The prop settles $\delta = 10\ \mathrm{mm}$ downward. Find the prop reaction $R_B$ and compare it to the no-settlement value.

**P2 (🟡)** A bar (area $A$, modulus $E$, length $L$, coefficient $\alpha$) is built in rigidly at **both** ends and heated uniformly by $\Delta T$. Using the force method (redundant = the reaction at one end), find the axial force in the bar. Then state, in one sentence, what the force would be if the bar were fixed at one end and free at the other, and why. (This is the axial sibling of [`mechanics-of-materials` 1.4](../../mechanics-of-materials/lessons/01-04-statically-indeterminate-axial.md).)

**P3 (🔴)** A two-span continuous beam $A$–$B$–$C$ has equal spans $L$, constant $EI$, and **no external load**. The interior support $B$ settles downward by $\delta$. Taking the redundant as the reaction at $B$ and the released structure as a simple beam $AC$ of span $2L$, find the bending moment at $B$. Evaluate for $L = 6\ \mathrm{m}$, $EI = 24{,}000\ \mathrm{kN\cdot m^2}$, $\delta = 15\ \mathrm{mm}$. (Foreshadows how settlement enters slope-deflection in [3.4](03-04-slope-deflection-method.md).)

<details>
<summary>Solutions</summary>

**P1** Released cantilever, downward-positive at $B$: $\Delta_{10} = \dfrac{wL^4}{8EI}$, $f_{11} = \dfrac{L^3}{3EI}$. Compatibility with the prop $\delta$ low:

$$\frac{wL^4}{8EI} - \frac{L^3}{3EI}R_B = \delta \;\Longrightarrow\; R_B = \frac{3}{8}wL - \frac{3EI\,\delta}{L^3}.$$

No-settlement: $\tfrac38 wL = \tfrac38(8)(5) = 15\ \mathrm{kN}$. Penalty: $\dfrac{3(30{,}000)(0.010)}{5^3} = \dfrac{900}{125} = 7.2\ \mathrm{kN}$. So

$$R_B = 15 - 7.2 = 7.8\ \mathrm{kN}.$$

The prop keeps barely half its share; the rest transfers to $A$ as extra hogging moment. *Check: units $\dfrac{\mathrm{kN\cdot m^2\cdot m}}{\mathrm{m^3}}=\mathrm{kN}$ ✓; $\delta\to0$ recovers 15 kN ✓.*

**P2** Redundant $X_1$ = axial reaction at end $B$ (tension positive). Release $B$ (free end). The "real load" is purely thermal: free expansion $\Delta_{10} = e_T = \alpha\,\Delta T\,L$ (end $B$ moves outward). Flexibility $f_{11} = \dfrac{L}{AE}$ (outward movement per unit axial tension). But $B$ is fixed, so its net movement is $0$:

$$\alpha\,\Delta T\,L + \frac{L}{AE}X_1 = 0 \;\Longrightarrow\; X_1 = -AE\,\alpha\,\Delta T.$$

The negative sign means the wall pushes back: the bar is in **compression** of magnitude $EA\,\alpha\,\Delta T$. If instead the bar were fixed at one end and free at the other, it is **determinate** — it simply elongates $\alpha\Delta T L$ with **zero force**, because nothing resists the free thermal strain. That contrast *is* the lesson. *Check: $EA\alpha\Delta T$ has units $(\mathrm{kN/m^2})(\mathrm{m^2})(1/^\circ\mathrm{C})(^\circ\mathrm{C}) = \mathrm{kN}$ ✓.*

**P3** Released structure: simple beam $AC$, span $2L$, supports at $A$ and $C$. No external load $\Rightarrow \Delta_{10} = 0$. Flexibility: midspan deflection of a simply supported beam of span $2L$ under a unit central load, $f_{11} = \dfrac{(2L)^3}{48EI} = \dfrac{L^3}{6EI}$ (up per unit up). $B$ must sit $\delta$ below the $A$–$C$ chord, so measuring downward:

$$\Delta_{10} - f_{11}X_1 = \delta \;\Longrightarrow\; 0 - \frac{L^3}{6EI}X_1 = \delta \;\Longrightarrow\; X_1 = -\frac{6EI\,\delta}{L^3}.$$

The reaction at $B$ is $\dfrac{6EI\delta}{L^3}$ **downward** (magnitude), balanced by $\dfrac{3EI\delta}{L^3}$ up at each end. The bending moment at $B$ is that of the released beam under this central force, $M_B = \dfrac{|X_1|\,(2L)}{4} = \dfrac{3EI\,\delta}{L^2}$. Numbers:

$$M_B = \frac{3(24{,}000)(0.015)}{6^2} = \frac{1080}{36} = 30\ \mathrm{kN\cdot m},$$

with $|R_B| = \dfrac{6(24{,}000)(0.015)}{216} = 10\ \mathrm{kN}$. A 15 mm dip induces 30 kN·m of moment **with no load on the beam at all** — a self-equilibrated stress state, the thesis of this lesson in one number. *Check: units $\dfrac{\mathrm{kN\cdot m^2\cdot m}}{\mathrm{m^2}}=\mathrm{kN\cdot m}$ ✓; a determinate simple beam $AC$ with no middle support would just tilt, stress-free.*

</details>

## Flashback

**From Lesson 2.5 (Truss deflections & Castigliano):** A two-bar truss carries a load $P = 10\ \mathrm{kN}$ down at joint $C$. Bar $AC$ is horizontal (length $L = 2\ \mathrm{m}$, from wall point $A$); bar $BC$ is a diagonal from a lower wall point $B$ up to $C$ (length $\sqrt2\,L$). Both bars have $AE = 40{,}000\ \mathrm{kN}$. Find the **vertical** deflection at $C$ by the unit-load method. (Fresh variant — a determinate truss, so no redundant; pure $\sum nNL/AE$.)

<details>
<summary>Solution</summary>

Joint $C$ equilibrium under $P$ down. Geometry: $AC$ pulls horizontally, $BC$ runs down-left at $45^\circ$. Vertical: the diagonal alone carries the vertical, $N_{BC}\left(\tfrac{1}{\sqrt2}\right) = -P \Rightarrow N_{BC} = -\sqrt2\,P$ (compression). Horizontal: $N_{AC} = -N_{BC}/\sqrt2 = P$ (tension). A **unit downward** load at $C$ gives the same pattern scaled: $n_{AC} = 1$, $n_{BC} = -\sqrt2$.

$$\delta_C = \sum \frac{nN L}{AE} = \frac{(1)(P)(L) + (-\sqrt2)(-\sqrt2 P)(\sqrt2 L)}{AE} = \frac{PL(1 + 2\sqrt2)}{AE}.$$

With $1 + 2\sqrt2 = 3.828$: $\delta_C = \dfrac{3.828\,(10)(2)}{40{,}000} = 1.91\times10^{-3}\ \mathrm{m} = 1.91\ \mathrm{mm}$ downward. *Check: $\dfrac{nNL}{AE}$ has units $\dfrac{\mathrm{kN\cdot m}}{\mathrm{kN}}=\mathrm{m}$ ✓; positive (same sense as the unit load), so $C$ drops, as expected under a downward $P$.* This $\sum nNL/AE$ machinery is exactly what powered $\Delta_{10}$ and $f_{11}$ in Example 2 — deflection-finding and redundant-solving are the same integral wearing different hats.

</details>

## Connections

- **Backward:** the deflection engines are [2.4 unit-load for beams/frames](02-04-unit-load-method-beams-frames.md) ($\int mM/EI$) and [2.5 for trusses](02-05-truss-deflections-castigliano.md) ($\sum nNL/AE$); the single-redundant beam recipe is [3.2](03-02-force-method-beams.md). [`mechanics-of-materials` 1.4](../../mechanics-of-materials/lessons/01-04-statically-indeterminate-axial.md) and [3.3](../../mechanics-of-materials/lessons/03-03-statically-indeterminate-beams.md) built the same compatibility idea for single axial members and beams — this lesson scales it to whole trusses and frames and adds the non-load effects.
- **Forward:** with several redundants the flexibility system $[f]\{X\} = -\{\Delta_0\}$ grows; the **displacement methods** — [3.4 slope-deflection](03-04-slope-deflection-method.md) and [3.5 moment distribution](03-05-moment-distribution-method.md) — flip the unknowns to *displacements*, and there support settlement reappears as the chord rotation $\psi = \Delta/L$ (P3 previews exactly this). Ultimately [4.3 matrix stiffness](04-03-matrix-stiffness-method.md) automates the whole thing.
- **Sideways (linear algebra):** solving $[f]\{X\} = \{\text{RHS}\}$ is a symmetric positive-definite linear system — the flexibility matrix is the inverse of the stiffness matrix you'll assemble later. Reciprocity $f_{ij}=f_{ji}$ is Maxwell–Betti, the structural face of a symmetric matrix; see [`linalg-refresher`](../../linalg-refresher/syllabus.md) for the linear-systems machinery underneath.
