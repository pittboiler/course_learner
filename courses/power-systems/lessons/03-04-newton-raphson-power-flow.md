# Power Systems · Lesson 3.4: Newton–Raphson power flow

> ⏱ ~15 min · Module 3: Power flow and economic dispatch · Builds on: [3.3 Gauss–Seidel power flow](03-03-gauss-seidel-power-flow.md), [3.2 The power-flow problem and bus types](03-02-power-flow-problem-bus-types.md) · Unlocks: [3.5 Economic dispatch](03-05-economic-dispatch.md), [4.1 Symmetrical faults](04-01-symmetrical-faults.md)

## Why this matters

Gauss–Seidel converges linearly, so its iteration count grows with system size. Newton–Raphson converges **quadratically**, and — the crucial fact — its iteration count is **essentially independent of system size**. A 10-bus case and a 50,000-bus case both take about four to six iterations.

That single property is why every production power-flow program in the world uses Newton or a variant of it. The price is a [Jacobian](../reference.md#power-flow-jacobian) that must be built and factored each iteration, but sparse factorization makes that cheap, and four expensive iterations beat ten thousand cheap ones by an enormous margin.

## The idea

Newton's method linearizes. Given a system $\mathbf{f}(\mathbf{x}) = \mathbf{0}$ and a current guess $\mathbf{x}^{(k)}$, expand to first order:

$$\mathbf{f}\left(\mathbf{x}^{(k)}+\Delta\mathbf{x}\right)\approx\mathbf{f}\left(\mathbf{x}^{(k)}\right)+\mathbf{J}\Delta\mathbf{x} = \mathbf{0} \quad\Longrightarrow\quad \mathbf{J}\Delta\mathbf{x} = -\mathbf{f}\left(\mathbf{x}^{(k)}\right).$$

Solve the linear system for the correction, apply it, repeat.

For power flow, $\mathbf{f}$ is the **mismatch** vector — the difference between scheduled and calculated power — and $\mathbf{x}$ holds the unknown angles and magnitudes:

$$\begin{bmatrix}\Delta\mathbf{P}\\\Delta\mathbf{Q}\end{bmatrix} = \mathbf{J}\begin{bmatrix}\Delta\boldsymbol\theta\\\Delta\mathbf{V}\end{bmatrix}.$$

The Jacobian $\mathbf{J}$ holds the sensitivities: how much does each bus's real power change if I nudge each angle, and so on. Building it looks laborious but is not — every entry has a closed form, and the matrix inherits $Y_{bus}$'s sparsity exactly, since $\partial P_i/\partial\theta_k$ is zero unless buses $i$ and $k$ are connected.

**Why quadratic convergence is so decisive.** Each Newton step roughly *squares* the error: $10^{-1}\to10^{-2}\to10^{-4}\to10^{-8}$. Three or four steps take you from a crude flat start to machine precision. Gauss–Seidel, multiplying the error by a fixed factor each sweep, needs dozens or hundreds. The example below shows both on the same problem.

The trade-off is robustness. Newton's quadratic behaviour holds only near the solution; far away it can overshoot or diverge. That is why hard cases sometimes start with a few Gauss–Seidel sweeps, and why "flat start" being a good guess matters so much.

## The formal version

**Mismatch equations.** For a system with 1 slack, $N_{PV}$ PV buses and $N_{PQ}$ PQ buses:

$$\boxed{\;\begin{bmatrix}\Delta\mathbf{P}\\\Delta\mathbf{Q}\end{bmatrix} = \begin{bmatrix}\mathbf{H}&\mathbf{N}\\\mathbf{J}_{Q\theta}&\mathbf{L}\end{bmatrix}\begin{bmatrix}\Delta\boldsymbol\theta\\\Delta\mathbf{V}\end{bmatrix},\;}$$

with $\Delta\mathbf{P}$ of length $N-1$ (all non-slack buses), $\Delta\mathbf{Q}$ of length $N_{PQ}$, $\Delta\boldsymbol\theta$ of length $N-1$, $\Delta\mathbf{V}$ of length $N_{PQ}$. Square, as [3.2](03-02-power-flow-problem-bus-types.md) required.

**Jacobian entries.** Writing $\theta_{ik} = \theta_i-\theta_k$, the off-diagonal entries ($i\neq k$) are:

$$H_{ik} = \frac{\partial P_i}{\partial\theta_k} = V_iV_k\left(G_{ik}\sin\theta_{ik}-B_{ik}\cos\theta_{ik}\right),$$
$$N_{ik} = \frac{\partial P_i}{\partial V_k} = V_i\left(G_{ik}\cos\theta_{ik}+B_{ik}\sin\theta_{ik}\right),$$
$$J_{ik} = \frac{\partial Q_i}{\partial\theta_k} = -V_iV_k\left(G_{ik}\cos\theta_{ik}+B_{ik}\sin\theta_{ik}\right),$$
$$L_{ik} = \frac{\partial Q_i}{\partial V_k} = V_i\left(G_{ik}\sin\theta_{ik}-B_{ik}\cos\theta_{ik}\right).$$

The diagonal entries have compact forms in terms of the calculated injections — worth memorizing, because they are what you actually type:

$$\boxed{\;H_{ii} = -Q_i-B_{ii}V_i^2, \qquad N_{ii} = \frac{P_i}{V_i}+G_{ii}V_i,\;}$$
$$\boxed{\;J_{ii} = P_i-G_{ii}V_i^2, \qquad L_{ii} = \frac{Q_i}{V_i}-B_{ii}V_i.\;}$$

*In words: every diagonal entry is the corresponding injection plus a self-admittance term.* Since $P_i$ and $Q_i$ are computed anyway to form the mismatch, the diagonals cost almost nothing extra.

**The algorithm.**

1. Flat start: $|V| = 1.0$ (or the slack's value) at PQ buses, $\theta = 0$ everywhere.
2. Compute $P_i$, $Q_i$ from the current voltages ([3.2](03-02-power-flow-problem-bus-types.md)'s formulas).
3. Form the mismatches $\Delta P_i$, $\Delta Q_i$. If $\max<\varepsilon$, stop.
4. Build $\mathbf{J}$.
5. Solve $\mathbf{J}\Delta\mathbf{x} = \Delta\mathbf{f}$ by sparse LU — **never by inversion**.
6. Update $\theta\mathrel{+}=\Delta\theta$, $V\mathrel{+}=\Delta V$; check PV var limits and switch types if needed; go to 2.

**Sparsity and ordering.** $\mathbf{J}$ has the same sparsity pattern as $Y_{bus}$, so a 10,000-bus Jacobian has about $2\times10^{5}$ nonzeros out of $4\times10^{8}$. Sparse LU with a fill-reducing ordering (minimum degree, or nested dissection) is what makes each iteration cheap; the ordering is computed once and reused, since the pattern does not change between iterations.

**The decoupling observation.** On transmission networks, $X\gg R$, and this produces a strong physical decoupling:

$$\frac{\partial P}{\partial\theta}\ \text{is large}, \qquad \frac{\partial P}{\partial V}\ \text{is small},$$
$$\frac{\partial Q}{\partial V}\ \text{is large}, \qquad \frac{\partial Q}{\partial\theta}\ \text{is small}.$$

*In words: real power follows angle, reactive power follows magnitude* — exactly the statement derived from $P = V_SV_R\sin\delta/X$ in [2.5](02-05-short-and-medium-line-models.md), now visible as the block structure of the Jacobian.

**Fast-decoupled load flow (FDLF).** Set $\mathbf{N}$ and $\mathbf{J}_{Q\theta}$ to zero, and approximate the remaining blocks by *constant* matrices derived from $\mathbf{B}$ alone:

$$\boxed{\;\mathbf{B}'\Delta\boldsymbol\theta = \frac{\Delta\mathbf{P}}{V}, \qquad \mathbf{B}''\Delta\mathbf{V} = \frac{\Delta\mathbf{Q}}{V}.\;}$$

Because $\mathbf{B}'$ and $\mathbf{B}''$ are constant, they are **factored once** and reused every iteration. FDLF loses quadratic convergence — it typically needs two to three times as many iterations — but each iteration costs a fraction of a full Newton step, so it usually wins on total time. It is the workhorse of contingency analysis, where thousands of similar cases are solved in sequence.

FDLF degrades when $R/X$ is large (distribution networks, cables), because the decoupling assumption it rests on fails.

**DC power flow.** Push the approximations further — ignore losses entirely, set all $|V| = 1$, assume small angles:

$$\mathbf{P} = \mathbf{B}\boldsymbol\theta.$$

**Linear**, so it solves in one step with no iteration at all. It gets real power flows to within a few percent and is used for market clearing, transmission planning, and screening tens of thousands of contingencies. It says nothing about voltages or reactive power, which is exactly its limitation.

## Picture

![A two-panel figure. Left: the Newton-Raphson Jacobian drawn as a two-by-two block matrix, with the upper-left H block and lower-right L block shaded dark to indicate large entries, and the upper-right N block and lower-left J block shaded light to indicate small entries, annotated with the physical statement that P follows theta and Q follows V, and an arrow showing the fast-decoupled approximation discarding the two light blocks. Right: a semi-log convergence plot of maximum power mismatch against iteration, with a steeply curving Newton-Raphson line whose successive points drop by roughly squared amounts, a straighter fast-decoupled line, and a shallow straight Gauss-Seidel line, all crossing a horizontal tolerance line at different iteration counts.](assets/03-04-fig1.svg)

Left: the block structure that motivates every fast variant. The off-diagonal blocks are small because $X\gg R$; discarding them costs convergence rate but saves the Jacobian rebuild.

Right: the three methods on the same problem. Newton's points fall on a curve that steepens — each mismatch is roughly the square of the previous. That is what makes the iteration count independent of problem size.

## Worked examples

**Example 1 (the two-bus system, and quadratic convergence made visible).** The same case as [3.3](03-03-gauss-seidel-power-flow.md) Example 1: slack at $1.0\angle0°$, bus 2 PQ drawing $0.8+j0.6$ pu, $z = 0.02+j0.08$.

$$Y_{22} = 2.9412-j11.7647 \quad\Longrightarrow\quad G_{22} = 2.9412, \ B_{22} = -11.7647.$$

Unknowns: $\theta_2$ and $|V_2|$, so $\mathbf{J}$ is $2\times2$.

*Iteration 1, from the flat start* $V_2 = 1.0$, $\theta_2 = 0$.

Calculated injections at bus 2 are both zero (with $V_1 = V_2$ and $\theta_{21} = 0$, the two terms cancel exactly), so:

$$\Delta P_2 = -0.8-0 = -0.8, \qquad \Delta Q_2 = -0.6-0 = -0.6.$$

Jacobian, using the diagonal formulas:

$$H = -Q_2-B_{22}V_2^2 = 0+11.7647(1) = 11.7647,$$
$$N = \frac{P_2}{V_2}+G_{22}V_2 = 0+2.9412 = 2.9412,$$
$$J = P_2-G_{22}V_2^2 = 0-2.9412 = -2.9412,$$
$$L = \frac{Q_2}{V_2}-B_{22}V_2 = 0+11.7647 = 11.7647.$$

$$\begin{bmatrix}-0.8\\-0.6\end{bmatrix} = \begin{bmatrix}11.7647&2.9412\\-2.9412&11.7647\end{bmatrix}\begin{bmatrix}\Delta\theta_2\\\Delta V_2\end{bmatrix}.$$

The determinant is $11.7647^2+2.9412^2 = 138.408+8.651 = 147.059$, so

$$\Delta\theta_2 = \frac{(-0.8)(11.7647)-(2.9412)(-0.6)}{147.059} = \frac{-9.4118+1.7647}{147.059} = -0.052000\ \mathrm{rad},$$
$$\Delta V_2 = \frac{(11.7647)(-0.6)-(-2.9412)(-0.8)}{147.059} = \frac{-7.0588-2.3529}{147.059} = -0.064000.$$

$$\theta_2 = -0.052000\ \mathrm{rad} = -2.979°, \qquad |V_2| = 0.936000.$$

*The full run.*

| $k$ | $\max$ mismatch | $\theta_2$ | $\vert V_2\vert$ |
|---|---|---|---|
| 1 | $8.00\times10^{-1}$ | $-2.979°$ | 0.936000 |
| 2 | $5.52\times10^{-2}$ | $-3.205°$ | 0.929642 |
| 3 | $4.70\times10^{-4}$ | $-3.2067°$ | 0.929586 |
| 4 | $3.54\times10^{-8}$ | $-3.2067°$ | 0.929586 |

**Converged in three iterations** to a tolerance of $10^{-4}$, four to machine precision. The answer $V_2 = 0.929586\angle{-3.2067°}$ matches [3.3](03-03-gauss-seidel-power-flow.md)'s Gauss–Seidel result exactly.

*Look at the mismatch column.* The exponents run $-1, -2, -4, -8$ — **each roughly doubles**. That is quadratic convergence, and it is the whole reason Newton won. Gauss–Seidel on the same problem produced $8\times10^{-2}, 7\times10^{-3}, 7\times10^{-4}, 7\times10^{-5}$: one decimal digit per sweep, forever.

*And the fast-decoupled version.* Using $\mathbf{B}' = \mathbf{B}'' = 11.7647$ (constant, formed once):

$$\Delta\theta_2 = \frac{\Delta P_2/V_2}{11.7647}, \qquad \Delta V_2 = \frac{\Delta Q_2/V_2}{11.7647}.$$

This converges to the same answer in **9 iterations** rather than 4 — about $2.3\times$ more — but each iteration skips building and factoring a Jacobian. On a large system that trade is usually favourable, and here $X/R = 4$, which is on the low side for FDLF; at $X/R = 10$ it would converge in about six.

**Example 2 (a three-bus system with a PV bus).** The $Y_{bus}$ of [3.1](03-01-bus-admittance-matrix.md), with bus 1 slack at $1.05\angle0°$, bus 2 PQ drawing $0.6+j0.3$, bus 3 PV generating $0.3$ pu at $|V_3| = 1.02$.

*Unknowns:* $\theta_2$, $\theta_3$, $|V_2|$ — three, so $\mathbf{J}$ is $3\times3$.

*Iteration 1, flat start* ($V_2 = 1.0$, all angles zero):

$$\Delta P_2 = -0.316666, \qquad \Delta P_3 = +0.304249, \qquad \Delta Q_2 = +0.600000.$$

(The mismatches are nonzero even at the flat start because $V_1 = 1.05$ and $V_3 = 1.02$ differ from $V_2 = 1.0$.)

$$\mathbf{J}^{(1)} = \begin{bmatrix}
\partial P_2/\partial\theta_2 & \partial P_2/\partial\theta_3 & \partial P_2/\partial V_2\\
\partial P_3/\partial\theta_2 & \partial P_3/\partial\theta_3 & \partial P_3/\partial V_2\\
\partial Q_2/\partial\theta_2 & \partial Q_2/\partial\theta_3 & \partial Q_2/\partial V_2
\end{bmatrix} = \begin{bmatrix}
20.850 & -5.100 & 6.383\\
-5.100 & 9.116 & -1.700\\
-6.950 & 1.700 & 19.050
\end{bmatrix}.$$

Note there is **no $\partial Q_3$ row and no $\partial V_3$ column** — bus 3 is PV, so its $Q$ is not scheduled and its magnitude is not unknown.

Solving gives $\theta_2 = -0.8700°$, $\theta_3 = 1.6749°$, $|V_2| = 1.023347$.

*The full run.*

| $k$ | $\max$ mismatch | $\theta_2$ | $\theta_3$ | $\vert V_2\vert$ |
|---|---|---|---|---|
| 1 | $6.00\times10^{-1}$ | $-0.8700°$ | $1.6749°$ | 1.023347 |
| 2 | $2.15\times10^{-2}$ | $-0.8529°$ | $1.6308°$ | 1.022469 |
| 3 | $2.23\times10^{-5}$ | $-0.8529°$ | $1.6308°$ | 1.022468 |
| 4 | $2.36\times10^{-11}$ | $-0.8529°$ | $1.6308°$ | 1.022468 |

Mismatch exponents $-1, -2, -5, -11$ — quadratic again, and here even a little better than quadratic because the problem is mild.

*Verification against Gauss–Seidel.* [3.3](03-03-gauss-seidel-power-flow.md) Example 2 solved this identical case and got $V_2 = 1.02247\angle{-0.853°}$, $V_3 = 1.02\angle1.631°$, $Q_3 = -0.281$ pu. Newton gives $V_2 = 1.022468\angle{-0.8529°}$, $\theta_3 = 1.6308°$, and evaluating the injections at the converged point yields $Q_3 = -0.28106$ pu.

**Identical to five decimals.** Two entirely different algorithms landing on the same numbers is the strongest confirmation available that both are implemented correctly — and it is worth doing deliberately when you write power-flow code, because a sign error in one method will not reproduce in the other.

*Reading the Jacobian's structure.* Compare the blocks:

| Block | Entries | Magnitude |
|---|---|---|
| $\mathbf{H} = \partial P/\partial\theta$ | 20.85, $-5.10$, 9.12 | large |
| $\mathbf{L} = \partial Q/\partial V$ | 19.05 | large |
| $\mathbf{N} = \partial P/\partial V$ | 6.38, $-1.70$ | ~30% of $\mathbf{H}$ |
| $\mathbf{J}_{Q\theta} = \partial Q/\partial\theta$ | $-6.95$, 1.70 | ~33% of $\mathbf{L}$ |

The decoupling is **present but not dramatic**, because these lines have $X/R = 3$ — low for transmission. On a real 345 kV network with $X/R = 10$, the off-diagonal blocks would be about 10% of the diagonal ones and FDLF would be excellent. Here, discarding them would cost noticeably more iterations, which is precisely why FDLF is a transmission tool and not a distribution one.

## Watch out

- **You might invert the Jacobian.** Solve $\mathbf{J}\Delta\mathbf{x} = \Delta\mathbf{f}$ by factorization. Inverting a sparse matrix produces a dense one and destroys the entire computational advantage.
- **You might build $\mathbf{J}$ with the wrong dimensions.** $(N-1)$ $P$-rows, $N_{PQ}$ $Q$-rows, $(N-1)$ $\theta$-columns, $N_{PQ}$ $V$-columns. PV buses contribute a row and a column for $\theta$ but neither for $Q$ or $V$.
- **You might work in degrees.** All Jacobian derivatives are with respect to radians. Mixing units scales $\Delta\theta$ by 57.3 and the iteration explodes.
- **You might forget that $\mathbf{J}$ changes every iteration.** Full Newton rebuilds it each time. (Some implementations deliberately reuse it for a few iterations — the "dishonest Newton" — trading convergence rate for factorization cost.)
- **You might apply FDLF on a distribution feeder.** With $R\approx X$ the decoupling fails and FDLF converges slowly or not at all. Use full Newton or a method designed for radial networks.
- **You might trust DC power flow for voltages.** It has none. It gives real power flows and nothing else.
- **You might read a divergence as a bug.** Near the loading limit the Jacobian becomes singular — that is the nose of the P–V curve, and it means there is genuinely no solution, not that Newton failed.

## One-liner

> Linearize the mismatch equations, solve $\mathbf{J}\Delta\mathbf{x} = \Delta\mathbf{f}$ by sparse LU, and each step squares the error — four to six iterations regardless of system size, which is why every production solver is a Newton variant.

## Problems

**P1 (🟢)** A two-bus system has $Y_{22} = 5-j15$ pu, with bus 2 a PQ bus drawing $0.7+j0.4$ pu, at a flat start $V_2 = 1.0$, $\theta_2 = 0$, calculated $P_2 = Q_2 = 0$. (a) Write the mismatch vector. (b) Compute the four Jacobian entries. (c) Solve for $\Delta\theta_2$ and $\Delta V_2$ and give the updated voltage.

**P2 (🟡)** A two-bus system: slack at $1.0\angle0°$, bus 2 PQ drawing $0.6+j0.25$ pu, line $z = 0.05+j0.15$ pu. (a) Find $Y_{22}$. (b) Perform two Newton iterations from a flat start. (c) The converged solution is $V_2 = 0.923370\angle{-4.8146°}$; find the slack injection and the losses. (d) Compare the mismatch sequence with Example 1's and comment.

**P3 (🔴)** A 500-bus system has 80 PV buses, 419 PQ buses, one slack, and 700 lines. (a) Give the dimensions of the Jacobian and the sizes of its four blocks. (b) Estimate the number of nonzero entries and the density. (c) Newton takes 5 iterations; Gauss–Seidel takes about 900 sweeps; FDLF takes 12. Estimate the relative total cost of each, stating your assumptions, and say which you would choose for a single detailed study and which for screening 2000 contingencies. (d) During the solve, 6 PV buses hit their var limits. Explain what changes in the Jacobian and why this makes limit handling one of the hardest parts of a production solver.

<details>
<summary>Solutions</summary>

**P1** (a) A load is a negative injection, so $P_2^{\rm sch} = -0.7$, $Q_2^{\rm sch} = -0.4$:

$$\Delta P_2 = -0.7-0 = -0.7, \qquad \Delta Q_2 = -0.4-0 = -0.4.$$

(b) $G_{22} = 5$, $B_{22} = -15$, $V_2 = 1$, $P_2 = Q_2 = 0$:

$$H = -Q_2-B_{22}V_2^2 = 0+15 = 15, \qquad N = \frac{P_2}{V_2}+G_{22}V_2 = 0+5 = 5,$$
$$J = P_2-G_{22}V_2^2 = 0-5 = -5, \qquad L = \frac{Q_2}{V_2}-B_{22}V_2 = 0+15 = 15.$$

(c) $$\begin{bmatrix}-0.7\\-0.4\end{bmatrix} = \begin{bmatrix}15&5\\-5&15\end{bmatrix}\begin{bmatrix}\Delta\theta_2\\\Delta V_2\end{bmatrix}, \qquad \det = 225+25 = 250.$$

$$\Delta\theta_2 = \frac{(-0.7)(15)-(5)(-0.4)}{250} = \frac{-10.5+2}{250} = \frac{-8.5}{250} = -0.034\ \mathrm{rad} = -1.948°,$$
$$\Delta V_2 = \frac{(15)(-0.4)-(-5)(-0.7)}{250} = \frac{-6-3.5}{250} = \frac{-9.5}{250} = -0.038.$$

$$V_2^{(1)} = 0.962\angle{-1.948°}\ \mathrm{pu}.$$

**P2** (a) $$y = \frac{1}{0.05+j0.15} = \frac{0.05-j0.15}{(0.05)^2+(0.15)^2} = \frac{0.05-j0.15}{0.025} = 2-j6.$$

$$Y_{22} = 2-j6, \qquad G_{22} = 2, \ B_{22} = -6.$$

(b) *Iteration 1*, flat start, $P_2 = Q_2 = 0$:

$$\Delta P_2 = -0.6, \qquad \Delta Q_2 = -0.25.$$

$$H = 6, \quad N = 2, \quad J = -2, \quad L = 6, \qquad \det = 36+4 = 40.$$

$$\Delta\theta_2 = \frac{(-0.6)(6)-(2)(-0.25)}{40} = \frac{-3.6+0.5}{40} = -0.077500\ \mathrm{rad} = -4.440°,$$
$$\Delta V_2 = \frac{(6)(-0.25)-(-2)(-0.6)}{40} = \frac{-1.5-1.2}{40} = -0.067500.$$

$$\theta_2 = -4.4404°, \qquad |V_2| = 0.932500.$$

*Iteration 2.* Recomputing the injections at this point gives $P_2 = -0.55347$, $Q_2 = -0.21648$, so

$$\Delta P_2 = -0.04653, \qquad \Delta Q_2 = -0.03352.$$

$$\mathbf{J}^{(2)} = \begin{bmatrix}5.4338&1.2715\\-2.2926&5.3629\end{bmatrix}, \qquad \Delta\theta_2 = -0.006455\ \mathrm{rad}, \ \Delta V_2 = -0.009011.$$

$$\theta_2 = -4.8103°, \qquad |V_2| = 0.923489.$$

(c) $$V_2 = 0.923370\angle{-4.8146°} = 0.920115-j0.077495.$$

$$I_1 = Y_{11}V_1+Y_{12}V_2 = (2-j6)(1)+(-2+j6)(0.920115-j0.077495).$$

Second term: $-1.840230+j0.154990+j5.520690+0.464970 = -1.375260+j5.675680$.

$$I_1 = 0.624740-j0.324320, \qquad S_1 = (1.0)(0.624740+j0.324320) = 0.62478+j0.32433\ \mathrm{pu}.$$

$$P_{\rm loss} = 0.62478-0.6 = 0.02478\ \mathrm{pu}, \qquad Q_{\rm loss} = 0.32433-0.25 = 0.07433\ \mathrm{pu}.$$

*Check:* $|I| = \sqrt{0.62474^2+0.32432^2} = 0.70392$, so $|I|^2R = (0.70392)^2(0.05) = 0.02478$ ✓ and $|I|^2X = (0.70392)^2(0.15) = 0.07433$ ✓.

(d) Mismatch sequences:

| $k$ | Example 1 | P2 |
|---|---|---|
| 1 | $8.0\times10^{-1}$ | $6.0\times10^{-1}$ |
| 2 | $5.5\times10^{-2}$ | $4.7\times10^{-2}$ |
| 3 | $4.7\times10^{-4}$ | $5.5\times10^{-4}$ |
| 4 | $3.5\times10^{-8}$ | $\sim10^{-8}$ |

**Nearly identical**, despite different impedances (0.02+j0.08 versus 0.05+j0.15, a 2.5× difference) and different loads. The convergence rate of Newton's method depends on the *curvature* of the equations near the solution, not on the parameter values — and the power-flow equations have similar curvature across a wide range of realistic conditions.

That is precisely the property that makes Newton's iteration count predictable and system-size-independent: it is not that the method is fast on small problems, it is that the problems are all similarly mild in the region where Newton operates.

**P3** (a) $N = 500$, $N_{PV} = 80$, $N_{PQ} = 419$, one slack.

- $\Delta\mathbf{P}$ rows: $N-1 = 499$
- $\Delta\mathbf{Q}$ rows: $N_{PQ} = 419$
- $\Delta\boldsymbol\theta$ columns: 499
- $\Delta\mathbf{V}$ columns: 419

$$\mathbf{J} \text{ is } 918\times918, \qquad \mathbf{H}: 499\times499, \quad \mathbf{N}: 499\times419, \quad \mathbf{J}_{Q\theta}: 419\times499, \quad \mathbf{L}: 419\times419.$$

(b) The Jacobian's sparsity mirrors $Y_{bus}$: an entry $\partial P_i/\partial\theta_k$ is nonzero only if buses $i$ and $k$ are connected or identical.

$Y_{bus}$ has $500+2(700) = 1900$ nonzeros. Each contributes to up to four Jacobian blocks, so

$$\text{nonzeros}(\mathbf{J}) \approx 4\times1900 = 7600,$$

though the true figure is somewhat lower because PV buses do not contribute $Q$-rows or $V$-columns. A reasonable estimate is **6000–7000**.

$$\text{density} = \frac{7000}{918^2} = \frac{7000}{842{,}724} = 0.83\%.$$

(c) *Assumptions.* Let one "flop unit" be a complex multiply-add.

**Gauss–Seidel:** each sweep touches every nonzero of $Y_{bus}$ once, about 1900 units.
$$900\times1900 = 1.7\times10^{6}\ \text{units}.$$

**Newton:** each iteration must build $\mathbf{J}$ ($\sim$7000 entries, several operations each, say $3\times10^{4}$) and factor it. Sparse LU on a $918\times918$ matrix with good ordering costs roughly $O(n^{1.5})\approx2.8\times10^{4}$ units, plus fill-in — call the whole iteration $10^{5}$ units.
$$5\times10^{5}\ \text{units}.$$

**FDLF:** $\mathbf{B}'$ and $\mathbf{B}''$ are factored **once** ($\sim2\times10^{4}$ units total). Each iteration is then just two sparse forward/back substitutions plus a mismatch evaluation, roughly $6\times10^{3}$ units.
$$2\times10^{4}+12\times6\times10^{3} = 9.2\times10^{4}\ \text{units}.$$

*Summary.*

| Method | Iterations | Est. total cost | Relative |
|---|---|---|---|
| Gauss–Seidel | 900 | $1.7\times10^{6}$ | 18× |
| Newton | 5 | $5\times10^{5}$ | 5.4× |
| FDLF | 12 | $9.2\times10^{4}$ | 1× |

*Choices.*

**For a single detailed study: full Newton.** It gives the exact solution of the exact equations, converges reliably, and handles ill-conditioning and high $R/X$ that would defeat FDLF. When the answer matters — a planning study, an interconnection request, a post-mortem — the extra factor of five is irrelevant against being right.

**For screening 2000 contingencies: FDLF.** The constant matrices are factored once for the *whole batch*, so the per-case cost drops to just the substitutions — around $7\times10^{4}$ units per case. Two thousand cases become $1.4\times10^{8}$ units, a few seconds. The same batch under full Newton would cost $10^{9}$ and require refactoring for every case.

In practice a real operator does both: DC power flow to screen all 2000 down to perhaps 50 interesting ones, FDLF on those 50, and full Newton on the handful that look dangerous. **The methods are complementary, not competing.**

(d) When a PV bus hits its var limit it becomes PQ: $Q$ is fixed at the limit and $|V|$ becomes unknown. For six such buses:

- $\Delta\mathbf{Q}$ rows: 419 → **425**
- $\Delta\mathbf{V}$ columns: 419 → **425**
- $\mathbf{J}$: $918\times918$ → **$930\times930$**

*Why this is hard.*

**The sparsity pattern changes.** The fill-reducing ordering was computed for the old pattern and is no longer optimal — and recomputing it is expensive. Production code typically keeps the old ordering and accepts extra fill.

**The matrix must be refactored.** Any incremental factorization update is invalidated, so the saving that made Newton cheap is lost for that iteration.

**Switching can oscillate.** A bus that switches PV→PQ may, on the next iteration, find that its voltage has moved such that it could hold the setpoint after all, and switch back — then forward again. This **limit cycling** can prevent convergence entirely. Real solvers use hysteresis (require the violation to exceed a margin before switching), lock buses after a fixed number of switches, or freeze all switching after a set iteration count.

**The switch destroys quadratic convergence for that step.** Newton's quadratic rate assumes a smooth $\mathbf{f}$. A type switch is a *discontinuity* in the problem definition, so the step across it behaves like a first iteration on a new problem — mismatches jump back up before resuming their descent.

**It changes the physics of the answer, not just the arithmetic.** A case with many limit switches is telling you the system is short of reactive reserve. The right response is often to fix the case (add compensation, redispatch) rather than to make the solver converge on a stressed operating point that would be unacceptable in practice.

This is why the published iteration count of "4 to 6" applies to well-behaved cases. A stressed system near its reactive limits can take fifteen or twenty, or fail to converge at all — and that failure is itself the most important output of the study.

</details>

## Flashback

**From Lesson 3.3 (Gauss–Seidel power flow):** For the two-bus system of Example 1 ($Y_{22} = 2.9412-j11.7647$, bus 2 drawing $0.8+j0.6$ pu, slack at $1.0\angle0°$), perform one Gauss–Seidel iteration from a flat start and compare with the first Newton iteration in this lesson.

<details>
<summary>Solution</summary>

*Gauss–Seidel:*

$$V_2^{(1)} = \frac{1}{2.9412-j11.7647}\left[\frac{-0.8+j0.6}{1.0}-(-2.9412+j11.7647)(1.0)\right]$$
$$= \frac{2.1412-j11.1647}{2.9412-j11.7647} = 0.9360-j0.0520 = 0.937443\angle{-3.180°}.$$

*Newton (from Example 1):* $\theta_2 = -0.052000$ rad $= -2.979°$, $|V_2| = 0.936000$, i.e. $V_2 = 0.936000\angle{-2.979°}$.

*The comparison.* Both land near the answer, but they are **not the same point**:

| | $\vert V_2\vert$ | $\theta_2$ |
|---|---|---|
| Gauss–Seidel | 0.937443 | $-3.180°$ |
| Newton | 0.936000 | $-2.979°$ |
| Converged | 0.929586 | $-3.2067°$ |

Curiously, GS's first step is *closer* in angle and Newton's is closer in magnitude. That is coincidence at one step — over the full run Newton reaches $10^{-8}$ in four iterations while GS is still at $10^{-5}$ after five.

*The structural difference worth noticing.* GS produces $0.9360-j0.0520$ in **rectangular** form, and its magnitude is whatever falls out. Newton produces $\Delta\theta$ and $\Delta|V|$ **separately**, in polar form, because the Jacobian is built with respect to those variables. That is not cosmetic: the polar formulation is what exposes the $P$–$\theta$ / $Q$–$V$ block structure, and hence what makes fast-decoupled load flow and DC power flow possible. A rectangular Newton formulation exists and converges just as fast, but no useful decoupling falls out of it — which is why polar is universal in this field.

</details>

## Connections

- **Backward:** the mismatch equations are [3.2](03-02-power-flow-problem-bus-types.md)'s; $Y_{bus}$ and its sparsity are [3.1](03-01-bus-admittance-matrix.md)'s; the $P$–$\theta$ / $Q$–$V$ decoupling was derived physically in [2.5](02-05-short-and-medium-line-models.md).
- **Forward:** [3.5](03-05-economic-dispatch.md) decides the $P$ values that this solver takes as given; [4.1](04-01-symmetrical-faults.md) uses the same network model for fault currents.
- **Sideways:** this is Newton's method for systems from [`numerical-analysis`](../../numerical-analysis/syllabus.md), and the sparse-LU-with-ordering machinery is shared with finite-element solvers in [`mechanics-of-materials`](../../mechanics-of-materials/syllabus.md) and with the interior-point methods of [`convex-optimization`](../../convex-optimization/syllabus.md).
