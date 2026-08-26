# Power Systems · Lesson 3.1: The bus admittance matrix

> ⏱ ~15 min · Module 3: Power flow and economic dispatch · Builds on: [2.5 Short and medium-length line models](02-05-short-and-medium-line-models.md), [1.4 Base changes and the single-line diagram](01-04-base-changes-one-line-diagram.md) · Unlocks: [3.2 The power-flow problem and bus types](03-02-power-flow-problem-bus-types.md), [4.1 Symmetrical faults](04-01-symmetrical-faults.md)

## Why this matters

Modules 1 and 2 modeled the pieces: per-unit impedances, transformers that became series impedances, lines that became π-sections. This module assembles them into a network and asks the operating questions.

The assembly step is a single matrix. [$Y_{bus}$](../reference.md#bus-admittance-matrix) turns a one-line diagram into the linear relation $\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}$, and it is the object every later computation is built on — power flow, fault analysis, stability, state estimation, contingency screening. Building it correctly and quickly is the most mechanical skill in the subject and the most used.

It also has a property that matters enormously in practice: it is **extremely sparse**. A real 10,000-bus system has about 15,000 lines, so each row has on average three off-diagonal entries out of 10,000. Exploiting that sparsity is what makes solving a national grid in milliseconds possible.

## The idea

$Y_{bus}$ is nothing more than nodal analysis, applied to a network whose nodes are buses and whose branches are lines and transformers.

Recall nodal analysis: at each node, the sum of currents leaving through branches equals the current injected from outside. Write that for every bus and the result is $\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}$, where $\mathbf{V}$ holds the bus voltages relative to the reference (ground) and $\mathbf{I}$ holds the injected currents.

The construction rule is delightfully local:

- **Diagonal $Y_{ii}$:** sum of *all* admittances connected to bus $i$ — series branches to other buses *plus* shunt elements to ground.
- **Off-diagonal $Y_{ij}$:** the **negative** of the admittance directly between buses $i$ and $j$. Zero if there is no direct connection.

The minus sign trips everyone up once. It comes from the sign of the current: the term $Y_{ij}V_j$ represents current flowing *into* bus $i$ from bus $j$, and in the node equation that appears with opposite sign to the current flowing out through the same branch.

That locality is the whole story. Adding a line touches exactly four entries. Removing one touches the same four. You never rebuild the matrix, and this is precisely why contingency analysis — "what if we lose this line?" — is cheap.

## The formal version

**Nodal equation.**

$$\boxed{\;\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}, \qquad I_i = \sum_{k=1}^{N}Y_{ik}V_k.\;}$$

*In words: the current injected at bus $i$ is a weighted sum of all bus voltages, with weights given by row $i$ of $Y_{bus}$.*

**Construction rules.** For a network of $N$ buses:

$$\boxed{\;Y_{ii} = \sum_{k\neq i}y_{ik}+y_{i0}, \qquad Y_{ij} = -y_{ij}\ (i\neq j),\;}$$

where $y_{ik}$ is the series admittance of the branch from $i$ to $k$, and $y_{i0}$ is the total shunt admittance at bus $i$ (half-line charging from every connected line, plus any capacitor bank or reactor).

**Properties.**

| Property | Statement | Consequence |
|---|---|---|
| Symmetry | $Y_{ij} = Y_{ji}$ | store half the matrix; true unless phase-shifting transformers are present |
| Sparsity | $Y_{ij}=0$ unless $i$ and $j$ are directly connected | 99.97% zeros in a 10,000-bus system |
| Diagonal dominance | $|Y_{ii}|\geq\sum_{j\neq i}|Y_{ij}|$ | iterative methods converge |
| Row sums | $\sum_jY_{ij} = y_{i0}$ | **a free check** — the row sums to the shunt admittance at that bus |

The row-sum property deserves emphasis: with no shunt elements, **every row of $Y_{bus}$ sums to zero**. With shunts, each row sums to the shunt admittance at its bus. Checking that takes seconds and catches almost every construction error.

**Including line charging.** A π-model line between $i$ and $j$ with series admittance $y_{ij}$ and total shunt $y_{sh}$ contributes $y_{sh}/2$ to *each* of $Y_{ii}$ and $Y_{jj}$, and nothing to $Y_{ij}$. The shunt is to *ground*, not between buses.

**Including a transformer with an off-nominal tap.** A transformer whose per-unit turns ratio is $a$ (not 1, because its rated voltages differ from the chosen bases, or because its tap has been moved) with series admittance $y$, tap on the bus-$i$ side:

$$\boxed{\;Y_{ii} \mathrel{+}= \frac{y}{a^2}, \qquad Y_{jj} \mathrel{+}= y, \qquad Y_{ij} = Y_{ji} = -\frac{y}{a}.\;}$$

*In words: the tap side gets $y/a^2$, the other side gets $y$, and the coupling gets $y/a$.* Note that this makes the row sums **nonzero even with no shunts** — the tap creates an effective shunt, which is exactly how a tap changer controls voltage.

When $a=1$ all three reduce to the ordinary rule, as they must.

**Why $Y_{bus}$ and not $Z_{bus}$.** The impedance matrix $\mathbf{Z}_{bus} = \mathbf{Y}_{bus}^{-1}$ is also useful — [4.1](04-01-symmetrical-faults.md) uses it for fault analysis, where its diagonal entry is directly the Thevenin impedance at a bus. But $Z_{bus}$ is **full**, so a 10,000-bus $Z_{bus}$ has $10^8$ entries and costs far more to build and store. Power flow uses $Y_{bus}$ and never forms its inverse; it factors it instead.

## Picture

![A two-panel figure. Left: a three-bus one-line diagram with buses drawn as short horizontal bars, three lines connecting them in a triangle, each line labelled with its series impedance and its half-charging susceptance drawn as small capacitors to ground at both ends. Right: the resulting three-by-three Y bus matrix drawn as a grid, with the diagonal entries highlighted and annotated as the sum of everything touching that bus, and the off-diagonal entries annotated as the negative of the direct branch admittance, with an arrow linking each matrix entry to the branch in the diagram that produced it.](assets/03-01-fig1.svg)

The mapping is entirely local: each branch in the diagram writes into exactly four cells of the matrix — two diagonal (additively) and two off-diagonal (as a negative). Nothing else in the matrix is affected, which is why the construction is a single pass over the branch list.

## Worked examples

**Example 1 (a three-bus system with line charging).** A three-bus system has these lines, all in per-unit on a common base:

| Line | Series $z$ | Total charging $y_{sh}$ |
|---|---|---|
| 1–2 | $0.02+j0.06$ | $j0.06$ |
| 1–3 | $0.08+j0.24$ | $j0.05$ |
| 2–3 | $0.06+j0.18$ | $j0.04$ |

Build $Y_{bus}$.

*Series admittances.*

$$y_{12} = \frac{1}{0.02+j0.06} = \frac{0.02-j0.06}{(0.02)^2+(0.06)^2} = \frac{0.02-j0.06}{0.004} = 5-j15,$$
$$y_{13} = \frac{1}{0.08+j0.24} = \frac{0.08-j0.24}{0.064} = 1.25-j3.75,$$
$$y_{23} = \frac{1}{0.06+j0.18} = \frac{0.06-j0.18}{0.036} = 1.6667-j5.$$

*Diagonals.* Bus 1 touches lines 1–2 and 1–3, so it gets both series admittances plus half of each line's charging:

$$Y_{11} = y_{12}+y_{13}+j\frac{0.06}{2}+j\frac{0.05}{2} = (5-j15)+(1.25-j3.75)+j0.055 = 6.25-j18.695.$$

$$Y_{22} = y_{12}+y_{23}+j0.03+j0.02 = (5-j15)+(1.6667-j5)+j0.05 = 6.6667-j19.95,$$
$$Y_{33} = y_{13}+y_{23}+j0.025+j0.02 = (1.25-j3.75)+(1.6667-j5)+j0.045 = 2.9167-j8.705.$$

*Off-diagonals.*

$$Y_{12}=Y_{21} = -5+j15, \qquad Y_{13}=Y_{31} = -1.25+j3.75, \qquad Y_{23}=Y_{32} = -1.6667+j5.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}6.25-j18.695 & -5+j15 & -1.25+j3.75\\ -5+j15 & 6.6667-j19.95 & -1.6667+j5\\ -1.25+j3.75 & -1.6667+j5 & 2.9167-j8.705\end{bmatrix}.$$

*Check the row sums.*

Row 1: $(6.25-j18.695)+(-5+j15)+(-1.25+j3.75) = 0+j0.055$ ✓ — exactly bus 1's shunt.

Row 3: $(-1.25+j3.75)+(-1.6667+j5)+(2.9167-j8.705) = 0-j0.045$… 

let us be careful with the sign: $3.75+5-8.705 = +0.045$, so the row sums to $+j0.045$ ✓ — bus 3's shunt.

**Every row sums to its bus's shunt admittance**, and the real parts sum to zero exactly. The matrix is correct.

**Example 2 (a line outage, and why sparsity matters).** Line 1–3 in Example 1 trips. Update $Y_{bus}$.

Only bus 1, bus 3, and the 1–3 coupling are affected. Subtract the line's contributions:

$$Y_{11}' = (6.25-j18.695)-(1.25-j3.75)-j0.025 = 5-j14.97,$$
$$Y_{33}' = (2.9167-j8.705)-(1.25-j3.75)-j0.025 = 1.6667-j4.98,$$
$$Y_{13}' = Y_{31}' = 0.$$

$$\mathbf{Y}_{bus}' = \begin{bmatrix}5-j14.97 & -5+j15 & 0\\ -5+j15 & 6.6667-j19.95 & -1.6667+j5\\ 0 & -1.6667+j5 & 1.6667-j4.98\end{bmatrix}.$$

*Check row 1:* $(5-j14.97)+(-5+j15)+0 = j0.03$ ✓ — bus 1 now has only one line's charging.

*The point.* **Four entries changed out of nine**, and in a 10,000-bus system four entries would change out of $10^8$. Contingency analysis screens thousands of outages by making exactly this kind of local edit and re-solving, which is only feasible because $Y_{bus}$ is sparse and the edit is local. A $Z_{bus}$-based method would have to update the entire full matrix for every contingency.

*The wider consequence.* This locality is why $Y_{bus}$, not $Z_{bus}$, is the working representation of a power network. Every fast algorithm in the field — LU factorization with sparse ordering, fast-decoupled power flow, DC power flow, state estimation — is built to preserve it. Sparsity is not a nicety here; it is the difference between a solution in milliseconds and one in hours.

## Watch out

- **You might forget the minus sign on off-diagonals.** $Y_{ij} = -y_{ij}$, always. The diagonal is a sum of positive admittances; the off-diagonals are negatives.
- **You might invert impedance element-by-element.** $y = 1/z$ requires complex division: $1/(R+jX) = (R-jX)/(R^2+X^2)$. It is *not* $1/R+1/(jX)$.
- **You might put line charging between buses.** It goes to ground, so it hits only the diagonals.
- **You might halve the charging twice.** If a table lists *total* charging $y_{sh}$, each end gets $y_{sh}/2$. If it lists $y_{sh}/2$ directly, use it as given.
- **You might use $a$ where you need $a^2$** on a tapped transformer. The tap side gets $y/a^2$; the coupling gets $y/a$.
- **You might mix bases.** All impedances must be on the *same* per-unit base before entering the matrix — that is exactly what [1.4](01-04-base-changes-one-line-diagram.md) was for.

## One-liner

> $Y_{bus}$ is nodal analysis on a grid: diagonals sum everything touching a bus, off-diagonals are the negative of the direct branch admittance, every row sums to that bus's shunt — and the whole thing is sparse enough that adding or removing a line touches only four entries.

## Problems

**P1 (🟢)** A two-bus system has one line with $z = 0.02+j0.08$ pu and total charging $y_{sh} = j0.10$ pu. (a) Find the series admittance. (b) Build $Y_{bus}$. (c) Verify the row-sum property.

**P2 (🟡)** A three-bus system has a line from bus 1 to bus 2 with $z = 0.03+j0.09$ pu (neglect charging), and a transformer from bus 2 to bus 3 with series reactance $x = 0.05$ pu and an off-nominal tap $a = 1.05$ on the bus-2 side. (a) Find both branch admittances. (b) Build $Y_{bus}$. (c) Check the row sums and explain why row 2 and row 3 do not sum to zero even though there are no shunt elements.

**P3 (🔴)** A four-bus system has lines:

| Line | $z$ (pu) | Total charging |
|---|---|---|
| 1–2 | $0.02+j0.08$ | $j0.04$ |
| 1–3 | $0.03+j0.09$ | $j0.05$ |
| 2–4 | $0.025+j0.10$ | $j0.06$ |
| 3–4 | $0.02+j0.06$ | $j0.04$ |

(a) Build $Y_{bus}$. (b) State the sparsity — how many entries are zero, and why. (c) Line 2–4 is switched out for maintenance. Give the updated $Y_{bus}$ entries that change. (d) Estimate how many nonzero entries a 10,000-bus system with 15,000 lines would have, and comment on what that implies for the storage and solution method.

<details>
<summary>Solutions</summary>

**P1** (a) $$y = \frac{1}{0.02+j0.08} = \frac{0.02-j0.08}{(0.02)^2+(0.08)^2} = \frac{0.02-j0.08}{0.0068} = 2.9412-j11.7647.$$

(b) Each bus gets half the charging, $j0.05$:

$$Y_{11} = Y_{22} = 2.9412-j11.7647+j0.05 = 2.9412-j11.7147,$$
$$Y_{12} = Y_{21} = -2.9412+j11.7647.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}2.9412-j11.7147 & -2.9412+j11.7647\\ -2.9412+j11.7647 & 2.9412-j11.7147\end{bmatrix}.$$

(c) Row 1: $(2.9412-j11.7147)+(-2.9412+j11.7647) = j0.05$ ✓ — bus 1's shunt. Same for row 2.

**P2** (a) $$y_{12} = \frac{1}{0.03+j0.09} = \frac{0.03-j0.09}{0.009} = 3.3333-j10,$$
$$y_{T} = \frac{1}{j0.05} = -j20.$$

(b) The transformer's tap is on bus 2, so $Y_{22}$ gets $y_T/a^2$, $Y_{33}$ gets $y_T$, and the coupling is $-y_T/a$:

$$\frac{y_T}{a^2} = \frac{-j20}{1.1025} = -j18.1406, \qquad \frac{y_T}{a} = \frac{-j20}{1.05} = -j19.0476.$$

$$Y_{11} = 3.3333-j10,$$
$$Y_{22} = (3.3333-j10)+(-j18.1406) = 3.3333-j28.1406,$$
$$Y_{33} = -j20,$$
$$Y_{12}=Y_{21} = -3.3333+j10, \qquad Y_{23}=Y_{32} = +j19.0476, \qquad Y_{13}=Y_{31}=0.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}3.3333-j10 & -3.3333+j10 & 0\\ -3.3333+j10 & 3.3333-j28.1406 & j19.0476\\ 0 & j19.0476 & -j20\end{bmatrix}.$$

(c) Row 1: $j0$ ✓ (no shunt at bus 1).

Row 2: $(-3.3333+j10)+(3.3333-j28.1406)+j19.0476 = j0.9070 \neq 0$.

Row 3: $j19.0476-j20 = -j0.9524 \neq 0$.

*Why.* An off-nominal tap makes the transformer's π-equivalent **asymmetric**, and the asymmetry appears as an effective shunt at each end — $y(1/a^2-1/a) = -j20(0.9070-0.9524) = j0.9070$ at bus 2, and $y(1-1/a) = -j20(1-0.9524) = -j0.9524$ at bus 3.

Physically that is the whole point of a tap changer: raising the tap injects vars at one side and absorbs them at the other, which is how it shifts voltage. The two effective shunts are of opposite sign — one capacitive, one inductive — and that is what a tap does to a voltage profile.

**P3** (a) Series admittances:

$$y_{12} = \frac{0.02-j0.08}{0.0068} = 2.9412-j11.7647, \qquad y_{13} = \frac{0.03-j0.09}{0.009} = 3.3333-j10,$$
$$y_{24} = \frac{0.025-j0.10}{0.010625} = 2.3529-j9.4118, \qquad y_{34} = \frac{0.02-j0.06}{0.004} = 5-j15.$$

Shunts (half of each connected line's total charging):

$$y_{1,0} = j0.02+j0.025 = j0.045, \qquad y_{2,0} = j0.02+j0.03 = j0.05,$$
$$y_{3,0} = j0.025+j0.02 = j0.045, \qquad y_{4,0} = j0.03+j0.02 = j0.05.$$

$$Y_{11} = y_{12}+y_{13}+j0.045 = 6.2745-j21.7197,$$
$$Y_{22} = y_{12}+y_{24}+j0.05 = 5.2941-j21.1265,$$
$$Y_{33} = y_{13}+y_{34}+j0.045 = 8.3333-j24.9550,$$
$$Y_{44} = y_{24}+y_{34}+j0.05 = 7.3529-j24.3618.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}
6.2745-j21.7197 & -2.9412+j11.7647 & -3.3333+j10 & 0\\
-2.9412+j11.7647 & 5.2941-j21.1265 & 0 & -2.3529+j9.4118\\
-3.3333+j10 & 0 & 8.3333-j24.9550 & -5+j15\\
0 & -2.3529+j9.4118 & -5+j15 & 7.3529-j24.3618
\end{bmatrix}.$$

*Row-sum check, row 1:* $6.2745-2.9412-3.3333 = 0$ real ✓; $-21.7197+11.7647+10 = 0.045$ imaginary ✓.

(b) **Four zeros out of sixteen** — the $(1,4)$, $(4,1)$, $(2,3)$ and $(3,2)$ entries — because buses 1 and 4 are not directly connected, nor are 2 and 3. The network is a ring, so each bus has exactly two neighbours; with four buses that is 75% density, which is *not* sparse. Sparsity is a large-system phenomenon.

(c) Removing line 2–4 (series $2.3529-j9.4118$, half-charging $j0.03$ at each end):

$$Y_{22}' = (5.2941-j21.1265)-(2.3529-j9.4118)-j0.03 = 2.9412-j11.7447,$$
$$Y_{44}' = (7.3529-j24.3618)-(2.3529-j9.4118)-j0.03 = 5-j14.9800,$$
$$Y_{24}' = Y_{42}' = 0.$$

Everything else is unchanged — **four entries out of sixteen**.

(d) A 10,000-bus system with 15,000 lines has:

- 10,000 diagonal entries (one per bus)
- $2\times15{,}000 = 30{,}000$ off-diagonal entries (each line fills two, by symmetry)

$$\text{nonzeros} = 40{,}000 \quad\text{out of}\quad 10{,}000^2 = 10^{8},$$

$$\text{density} = \frac{4\times10^{4}}{10^{8}} = 4\times10^{-4} = 0.04\%.$$

*What this implies.*

**Storage.** Dense complex double storage would be $10^8\times16$ bytes $= 1.6$ GB. Sparse storage is $4\times10^4\times16 \approx 0.64$ MB plus indices — a factor of 2500 smaller, and small enough to sit in cache.

**Solution method.** Never invert. Gaussian elimination on a dense matrix is $O(N^3) = 10^{12}$ operations; sparse LU with a good ordering (minimum-degree or nested dissection) is closer to $O(N^{1.5})$, roughly $10^6$ operations — a factor of a million. That is the difference between a solve taking minutes and taking milliseconds, and it is why a system operator can run thousands of contingency cases every few minutes.

**Fill-in is the enemy.** Sparse LU factors are denser than the original matrix, and how much denser depends entirely on the elimination order. Choosing that ordering well is a whole subfield, and it is the single most important implementation detail in power-flow software.

*The contrast with $Z_{bus}$.* $\mathbf{Z}_{bus} = \mathbf{Y}_{bus}^{-1}$ is **completely full** — every bus is electrically connected to every other, however indirectly. Forming it for this system means storing all $10^8$ entries and spending $O(N^3)$ to build them. That is why $Z_{bus}$ is used only where its physical meaning is needed (fault analysis at a handful of buses, [4.1](04-01-symmetrical-faults.md)) and even then is built column by column, on demand, rather than all at once.

</details>

## Flashback

**From Lesson 2.5 (Short and medium-length line models):** A 120 km line has $z = 0.05+j0.40\ \Omega$/km and $y = j3.0\times10^{-6}$ S/km, on a 100 MVA, 230 kV base. (a) Find the per-unit series impedance and total shunt admittance. (b) Give the $Y_{bus}$ contribution of this line between buses $i$ and $j$.

<details>
<summary>Solution</summary>

(a) $$Z_{base} = \frac{V_{base}^2}{S_{base}} = \frac{(230)^2}{100} = 529\ \Omega, \qquad Y_{base} = \frac{1}{529} = 1.890\times10^{-3}\ \mathrm{S}.$$

$$Z = (0.05+j0.40)(120) = 6+j48\ \Omega \quad\Longrightarrow\quad Z_{pu} = \frac{6+j48}{529} = 0.01134+j0.09074\ \mathrm{pu}.$$

$$Y_{sh} = j3.0\times10^{-6}(120) = j3.60\times10^{-4}\ \mathrm{S} \quad\Longrightarrow\quad Y_{sh,pu} = \frac{3.60\times10^{-4}}{1.890\times10^{-3}} = j0.1905\ \mathrm{pu}.$$

(b) $$y_{ij} = \frac{1}{0.01134+j0.09074} = \frac{0.01134-j0.09074}{(0.01134)^2+(0.09074)^2} = \frac{0.01134-j0.09074}{0.008363} = 1.356-j10.851.$$

Contribution to $Y_{bus}$:

$$Y_{ii}\mathrel{+}= 1.356-j10.851+j0.0952, \qquad Y_{jj}\mathrel{+}= 1.356-j10.851+j0.0952,$$
$$Y_{ij}=Y_{ji}\mathrel{-}= 1.356-j10.851 \quad\text{i.e.}\quad Y_{ij}\mathrel{+}= -1.356+j10.851.$$

*Note the ordering discipline:* convert to per-unit **first**, then invert. Inverting in ohms and then converting is also valid but invites base errors, since admittance converts with the reciprocal of $Z_{base}$. Doing everything in per-unit before the matrix is built is the habit that keeps large cases correct.

</details>

## Connections

- **Backward:** the π-model entered here is [2.5](02-05-short-and-medium-line-models.md)'s (corrected for long lines by [2.6](02-06-long-line-surge-impedance.md)); the per-unit discipline that lets everything be added is [1.3](01-03-the-per-unit-system.md)–[1.4](01-04-base-changes-one-line-diagram.md)'s.
- **Forward:** [3.2](03-02-power-flow-problem-bus-types.md) turns $\mathbf{I}=\mathbf{Y}_{bus}\mathbf{V}$ into the nonlinear power-flow equations; [3.3](03-03-gauss-seidel-power-flow.md) and [3.4](03-04-newton-raphson-power-flow.md) solve them; [4.1](04-01-symmetrical-faults.md) needs $Z_{bus}$'s diagonal.
- **Sideways:** this is the graph Laplacian with complex weights. The same matrix — degree on the diagonal, negative edge weight off it, rows summing to zero — appears in spectral graph theory, in finite-element stiffness matrices, and in the conductance matrices of [`circuits` 2.1](../../circuits/lessons/02-01-nodal-analysis.md). The sparse-solver technology is shared across all of them.
