# Structural Analysis · Lesson 2.2: The moment-area theorems

> ⏱ ~15 min · Module 2: Deflections · Builds on: [2.1 The elastic curve and double integration](02-01-elastic-curve-double-integration.md), [`mechanics-of-materials` 3.1 Deflection by integration](../../mechanics-of-materials/lessons/03-01-deflection-by-integration.md) · Unlocks: 2.4 (unit-load method — another deflection tool), Module 3 (indeterminate structures)

## Why this matters

Double integration ([2.1](02-01-elastic-curve-double-integration.md)) always works, but it makes you carry two constants and chase boundary conditions across every segment — tedious, and error-prone the moment the loading changes partway along the beam. The **moment-area theorems** trade all that calculus for *geometry*: you draw the $M/EI$ diagram, then read slopes and deflections off its **area** and its **centroid**. No integration constants, no boundary-condition bookkeeping. For a cantilever or a beam where one point has a known reference tangent, moment-area gets you the answer in two lines. It is also the engine behind the more general tools coming next — the unit-load method ([2.4](02-04-unit-load-method-beams-frames.md)) and slope-deflection ([3.4](03-04-slope-deflection-method.md)) both live on the same $M/EI$ diagram.

## The idea

Picture the beam's bent shape (its **elastic curve**) and draw a straight **tangent line** touching it at some point $A$. As you slide along the curve to a second point $B$, the curve peels away from that tangent. Two questions capture everything:

1. **How much did the beam's direction turn** between $A$ and $B$? That's the change in slope, $\theta_{B/A}$.
2. **How far has the curve dropped away from the tangent** by the time you reach $B$? That vertical gap is the **tangential deviation** $t_{B/A}$.

Here's the payoff. Curvature — how sharply the beam bends — is exactly $M/EI$ ([2.1](02-01-elastic-curve-double-integration.md)). So the total turning between $A$ and $B$ is just the *accumulated curvature*, i.e. the **area** under the $M/EI$ diagram. And the gap $t_{B/A}$ is built up from all those little turns, each one levered by how far it sits from $B$ — so it's the **first moment of that area about $B$** (area times the distance from its centroid to $B$). Bending is stored as area; you spend it as slope and deflection.

## The formal version

Let $EI$ be the flexural rigidity in $\mathrm{kN\cdot m^2}$ ($E$ = elastic modulus, $I$ = second moment of area), $M(x)$ the bending moment in $\mathrm{kN\cdot m}$ (sagging positive), and $x$ position along the beam in metres.

**First moment-area theorem.** The change in slope of the elastic curve between two points $A$ and $B$ equals the area under the $M/EI$ diagram between them:

$$\theta_{B/A} \;=\; \theta_B - \theta_A \;=\; \int_A^B \frac{M}{EI}\,dx \;=\; \big(\text{area of the } M/EI \text{ diagram from } A \text{ to } B\big).$$

*In words: how much the beam's tangent rotates from $A$ to $B$ is just the net $M/EI$ area between them.* A positive (sagging) area rotates the tangent counterclockwise; a negative (hogging) area rotates it clockwise. Slope is dimensionless (radians), and indeed $[M/EI]\cdot[dx] = \frac{\mathrm{kN\cdot m}}{\mathrm{kN\cdot m^2}}\cdot \mathrm{m} = \text{dimensionless}$. ✓

**Second moment-area theorem.** The **tangential deviation** $t_{B/A}$ — the vertical distance of point $B$ on the curve from the tangent drawn at $A$, measured at $B$ — equals the first moment of the $M/EI$ area between $A$ and $B$, taken about $B$:

$$t_{B/A} \;=\; \int_A^B \frac{M}{EI}\,(x_B - x)\,dx \;=\; \big(\text{area}\big)\cdot \bar{x}_B,$$

where $\bar{x}_B$ is the horizontal distance from the **centroid** of that $M/EI$ area to point $B$.

*In words: to find how far $B$ has fallen away from the tangent at $A$, take the $M/EI$ area and lever it about $B$.* Units: $\big(\text{dimensionless}\big)\cdot \mathrm{m} = \mathrm{m}$ ✓ — a length, as a deflection should be.

**Two cautions baked into the notation.** The order of the subscripts matters: $t_{B/A}$ (deviation of $B$ from the tangent at $A$) uses the arm to $B$; $t_{A/B}$ would use the arm to $A$ and is generally a *different number*. And $t_{B/A}$ is a **deviation from a tangent line**, not a true deflection — you only get a real deflection $\delta$ once you know where that tangent line sits.

**Turning deviations into real deflections.** Pick a point whose tangent you understand — a **reference tangent** — and measure everything from it. The cleanest case:

> **Cantilever.** At the fixed end the support clamps the beam horizontal, so the tangent there *is* the original undeformed axis. Then the tangential deviation of the free end $B$ from that tangent **is** the tip deflection outright:
> $$\delta_B \;=\; \big|t_{B/A}\big|, \qquad A = \text{fixed end}.$$

For a simply supported beam neither tangent is horizontal, so you use a deviation to *locate* the reference tangent and then subtract — that geometry is the star of [2.4](02-04-unit-load-method-beams-frames.md) and the conjugate-beam method; here we lean on the cantilever, where it's free.

**Standard $M/EI$ areas and centroids** (measured along a base of length $b$, peak ordinate $h$):

| Shape | Area | Centroid distance from the **tall** end |
|---|---|---|
| Triangle (peak at one end, zero at other) | $\tfrac12\,b\,h$ | $\tfrac13\,b$ |
| Parabolic spandrel, degree 2 (zero *and flat* at one end) | $\tfrac13\,b\,h$ | $\tfrac14\,b$ |

A point load makes $M$ vary linearly → **triangular** $M/EI$. A uniform load makes $M$ vary quadratically → **parabolic** $M/EI$. Keep these two rows handy; almost every cantilever problem is one of them.

## Picture

![Cantilever with a tip load: its deflected elastic curve above with the horizontal tangent at the fixed end and the tangential deviation t_BA marked as the tip deflection, and below it the triangular M/EI diagram with area, centroid at L/3 from the wall, and the moment arm 2L/3 to the tip B](assets/02-02-fig1.svg)

The tangent at the fixed end $A$ stays horizontal, so the gap $t_{B/A}$ between that tangent and the curve at $B$ is exactly the tip deflection $\delta_B$. Below, the $M/EI$ area (a triangle, since a tip load gives a linear moment) has its centroid $L/3$ from the wall — hence $2L/3$ from $B$, which is the moment arm the second theorem needs.

## Worked examples

**Example 1 (cantilever, tip load $P$ — recover the classic $PL^3/3EI$).** A cantilever of length $L$, fixed at $A$ ($x=0$), carries a downward point load $P$ at the free tip $B$ ($x=L$). The bending moment is hogging everywhere: $M(x) = -P(L-x)$, so at the wall $M(0) = -PL$ and at the tip $M(L)=0$. The $M/EI$ diagram is a **triangle** with peak ordinate $-PL/EI$ at the wall, tapering to zero at $B$.

*Area* of the triangle:
$$\text{Area} = \tfrac12\,\underbrace{(L)}_{\text{base}}\,\underbrace{\left(\frac{-PL}{EI}\right)}_{\text{height}} = -\frac{PL^2}{2EI}.$$

*Centroid* sits $\tfrac13 L$ from the tall end (the wall), hence its distance to $B$ is the moment arm
$$\bar{x}_B = L - \tfrac13 L = \tfrac23 L.$$

*Second theorem:*
$$t_{B/A} = \text{Area}\cdot \bar{x}_B = \left(-\frac{PL^2}{2EI}\right)\!\left(\frac{2L}{3}\right) = -\frac{PL^3}{3EI}.$$

The tangent at the fixed end is horizontal, so the tip deflection is the magnitude:
$$\boxed{\;\delta_B = \frac{PL^3}{3EI}\ \ (\text{downward})\;}$$

*Check.* Matches the textbook cantilever result and the double-integration answer from [2.1](02-01-elastic-curve-double-integration.md) — obtained here with **zero** integration constants. Units: $\frac{\mathrm{kN}\cdot \mathrm{m^3}}{\mathrm{kN\cdot m^2}} = \mathrm{m}$ ✓. The negative sign of $t_{B/A}$ says $B$ lies *below* the tangent — i.e. the tip sags down, as it must. ✓

**Example 2 (cantilever, uniform load $w$ — the Boss-2 confirmation piece).** Same cantilever, now carrying a uniform distributed load $w$ (kN/m) over its whole length. The moment is $M(x) = -\tfrac{w}{2}(L-x)^2$: hogging, magnitude $wL^2/2$ at the wall, and it reaches zero at $B$ **flat** (zero slope), because it depends on $(L-x)^2$. So the $M/EI$ diagram is a **degree-2 parabolic spandrel** with peak ordinate $-\dfrac{wL^2}{2EI}$ at the wall.

*Area* (spandrel, $\text{Area} = \tfrac13\,b\,h$):
$$\text{Area} = \tfrac13\,(L)\left(\frac{-wL^2}{2EI}\right) = -\frac{wL^3}{6EI}.$$

*Centroid* of a degree-2 spandrel is $\tfrac14 b$ from the tall end (the wall), so the arm to $B$ is
$$\bar{x}_B = L - \tfrac14 L = \tfrac34 L.$$

*Second theorem:*
$$\delta_B = \big|t_{B/A}\big| = \left|\text{Area}\cdot \bar{x}_B\right| = \frac{wL^3}{6EI}\cdot\frac{3L}{4} = \boxed{\;\frac{wL^4}{8EI}\ \ (\text{downward}).\;}$$

*Check.* This is the standard uniform-cantilever deflection, and it confirms the $wL^4/8EI$ term in **Boss problem 2** (cantilever with UDL + tip load: $\delta_B = \frac{wL^4}{8EI} + \frac{PL^3}{3EI}$, the two examples simply added by superposition). Units: $\frac{(\mathrm{kN/m})\,\mathrm{m^4}}{\mathrm{kN\cdot m^2}} = \mathrm{m}$ ✓. Sanity: the UDL result carries an extra factor of $L$ over the tip-load result and a smaller coefficient, exactly as spreading the load along the beam (rather than piling it at the tip) should. ✓

## Watch out

- **You might think $t_{B/A}$ is the deflection of $B$.** It's the deflection of $B$ *relative to the tangent at $A$*. It equals the true deflection **only** when that tangent is horizontal and passes through the undeformed axis — true at a cantilever's fixed end, false at a simple support. Always identify your reference tangent first.
- **You might take the first moment about the wrong point.** The arm in $t_{B/A}$ is measured **to $B$** (the point whose deviation you want), *not* to $A$ and *not* to the centroid's own axis. Swapping to $t_{A/B}$ silently changes the arm from $2L/3$ to $L/3$ and wrecks the answer.
- **You might drop the sign of the $M/EI$ area.** Hogging moments make the area *negative*; a negative $t_{B/A}$ means $B$ is below the tangent. Carry the sign through, then read the physical direction — don't just slap "downward" on at the end and hope.
- **You might reach for the triangle when it's a spandrel (or vice versa).** Point/linear loading → linear $M$ → **triangle** ($\tfrac12 bh$, centroid $\tfrac13 b$). Uniform loading → quadratic $M$ → **parabolic spandrel** ($\tfrac13 bh$, centroid $\tfrac14 b$). Using the wrong area/centroid pair is the most common moment-area slip.

## One-liner

> The $M/EI$ diagram *is* the deflection calculator: its **area** between two points is their change in slope, and its **first moment about a point** is that point's deviation from the far tangent.

## Problems

**P1 (🟢)** A cantilever of length $L = 3\ \mathrm{m}$ carries a downward tip load $P = 12\ \mathrm{kN}$, with $EI = 40{,}000\ \mathrm{kN\cdot m^2}$. Using moment-area, find (a) the slope at the free end relative to the wall, and (b) the tip deflection.

**P2 (🟡)** For the same cantilever, replace the tip load with a uniform load $w = 8\ \mathrm{kN/m}$ over the full span ($L=3\ \mathrm{m}$, $EI = 40{,}000\ \mathrm{kN\cdot m^2}$). Find the tip deflection by moment-area, and confirm the slope at the tip equals $wL^3/6EI$ (the parabolic-spandrel area).

**P3 (🔴, optional)** A cantilever length $L$ carries a downward point load $P$ at its **midspan** ($x = L/2$), and nothing beyond. Find the tip deflection $\delta_B$ at the free end. *Hint: past midspan the moment is zero, so the $M/EI$ diagram is a triangle over only the first half — but the arm is still measured to the tip $B$.*

<details>
<summary>Solutions</summary>

**P1** Triangular $M/EI$: peak $\dfrac{PL}{EI} = \dfrac{12\cdot 3}{40{,}000} = 9.0\times10^{-4}\ \mathrm{m^{-1}}$ at the wall (magnitude).

(a) Slope = area of the triangle:
$$\theta_{B/A} = \tfrac12\,L\cdot\frac{PL}{EI} = \tfrac12(3)(9.0\times10^{-4}) = 1.35\times10^{-3}\ \mathrm{rad}.$$

(b) Tip deflection = first moment about $B$, arm $\tfrac23 L = 2\ \mathrm{m}$:
$$\delta_B = \Big(\tfrac12 L\cdot\tfrac{PL}{EI}\Big)\cdot\tfrac23 L = \frac{PL^3}{3EI} = \frac{12\,(3)^3}{3(40{,}000)} = \frac{324}{120{,}000} = 2.7\times10^{-3}\ \mathrm{m} = 2.7\ \mathrm{mm}.$$

*Check.* Units of $\delta$: $\frac{\mathrm{kN\cdot m^3}}{\mathrm{kN\cdot m^2}} = \mathrm{m}$ ✓; a few mm under 12 kN on a stiff beam is reasonable. ✓

**P2** Parabolic spandrel: peak $\dfrac{wL^2}{2EI} = \dfrac{8\,(3)^2}{2(40{,}000)} = 9.0\times10^{-4}\ \mathrm{m^{-1}}$ at the wall.

Tip deflection, area $\tfrac13 L\cdot\tfrac{wL^2}{2EI}$ with arm $\tfrac34 L$:
$$\delta_B = \frac{wL^4}{8EI} = \frac{8\,(3)^4}{8(40{,}000)} = \frac{648}{320{,}000} = 2.025\times10^{-3}\ \mathrm{m} \approx 2.0\ \mathrm{mm}.$$

Slope = spandrel area:
$$\theta_{B/A} = \tfrac13\,L\cdot\frac{wL^2}{2EI} = \frac{wL^3}{6EI} = \frac{8\,(3)^3}{6(40{,}000)} = \frac{216}{240{,}000} = 9.0\times10^{-4}\ \mathrm{rad}. \checkmark$$

*Check.* Deflection units $\mathrm{m}$ ✓; the UDL tip deflection (2.0 mm) is smaller than P1's point-load tip deflection (2.7 mm), consistent with the load being spread out rather than concentrated at the tip. ✓

**P3** For $0 \le x \le L/2$ the moment is $M(x) = -P(\tfrac{L}{2} - x)$ (hogging), reaching $-\tfrac{PL}{2}$ at the wall and $0$ at midspan; for $x > L/2$, $M = 0$. So the $M/EI$ diagram is a triangle over the **first half only**: base $\tfrac{L}{2}$, peak $\dfrac{PL}{2EI}$.

Area $= \tfrac12\cdot\tfrac{L}{2}\cdot\dfrac{PL}{2EI} = \dfrac{PL^2}{8EI}$ (magnitude). Its centroid is $\tfrac13$ of the base from the tall (wall) end, i.e. at $x_c = \tfrac13\cdot\tfrac{L}{2} = \tfrac{L}{6}$ from the wall. The arm to the tip $B$ (at $x=L$) is
$$\bar{x}_B = L - \tfrac{L}{6} = \tfrac{5L}{6}.$$
$$\delta_B = \big|t_{B/A}\big| = \frac{PL^2}{8EI}\cdot\frac{5L}{6} = \frac{5PL^3}{48EI}.$$

*Check.* Compare with a tip load's $\frac{PL^3}{3EI} = \frac{16PL^3}{48EI}$: moving the same load in to midspan cuts the tip deflection to $\frac{5}{16}$ of that — much less, as expected since the load now bends only the inner half while the outer half rides along straight (tangent unchanged past midspan). Units $\frac{\mathrm{kN\cdot m^3}}{\mathrm{kN\cdot m^2}} = \mathrm{m}$ ✓. ✓

</details>

## Flashback

**From Lesson 2.1 (The elastic curve and double integration):** A cantilever of length $L$ fixed at $x=0$ carries a uniform load $w$ over its full span. Starting from $EI\,y'' = M(x) = -\tfrac{w}{2}(L-x)^2$, integrate twice with the fixed-end boundary conditions to find the tip deflection $y(L)$ — and confirm it matches the moment-area answer $\dfrac{wL^4}{8EI}$.

<details>
<summary>Solution</summary>

Integrate once, with $y'(0)=0$ (the wall clamps the slope):
$$EI\,y' = -\frac{w}{2}\int (L-x)^2\,dx = \frac{w}{6}(L-x)^3 + C_1.$$
At $x=0$: $EI(0) = \tfrac{w}{6}L^3 + C_1 \Rightarrow C_1 = -\tfrac{w}{6}L^3$.

Integrate again, with $y(0)=0$ (the wall fixes the deflection):
$$EI\,y = -\frac{w}{24}(L-x)^4 + C_1 x + C_2.$$
At $x=0$: $0 = -\tfrac{w}{24}L^4 + 0 + C_2 \Rightarrow C_2 = \tfrac{w}{24}L^4$.

At the tip $x=L$ (so $L-x = 0$):
$$EI\,y(L) = 0 + C_1 L + C_2 = -\frac{w}{6}L^3\cdot L + \frac{w}{24}L^4 = -\frac{4wL^4}{24} + \frac{wL^4}{24} = -\frac{3wL^4}{24} = -\frac{wL^4}{8}.$$
$$\therefore\ y(L) = -\frac{wL^4}{8EI}, \qquad \delta_B = \frac{wL^4}{8EI}\ (\text{down}).$$

*Check.* Identical to Example 2's moment-area result — the two methods must agree, since moment-area is just the double integral computed geometrically. The negative $y(L)$ correctly reads as a downward tip deflection. ✓

</details>

## Connections

- **Backward:** this is [2.1](02-01-elastic-curve-double-integration.md)'s $EI\,y'' = M$ read *geometrically* — the first theorem integrates it once (slope = area), the second twice (deflection = first moment). Same equation, no constants. The area/centroid shapes are the centroid-of-a-region idea from [`statics` 3.1 Distributed loads and resultants](../../statics/lessons/03-01-distributed-loads-resultants.md).
- **Forward:** [2.4 The unit-load method](02-04-unit-load-method-beams-frames.md) generalizes deflection-finding to any point and any structure (including where no tangent is horizontal), and Module 3's [slope-deflection](03-04-slope-deflection-method.md) uses $M/EI$ areas to relate member-end moments to joint rotations — the first theorem in disguise.
- **Sideways:** the tip-load and uniform-load cantilever formulas ($\frac{PL^3}{3EI}$, $\frac{wL^4}{8EI}$) are exactly the standard deflection cases tabulated in [`mechanics-of-materials` 3.2 Deflection by superposition](../../mechanics-of-materials/lessons/03-02-deflection-by-superposition.md) — moment-area is where those table entries come from, and superposition (as in Boss 2) just adds them.
