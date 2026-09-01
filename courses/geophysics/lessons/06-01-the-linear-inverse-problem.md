# Geophysics · Lesson 6.1: The linear inverse problem

> ⏱ ~15 min · Module 6: Inversion & applied geophysics · Builds on: [1.5](01-05-seismic-tomography.md), [numerical-analysis 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md) · Unlocks: [6.2](06-02-reflection-seismics.md), [6.3](06-03-electrical-electromagnetic-methods.md)

## Why this matters

Every result in this course is an inference from an incomplete dataset. The velocity model of [1.4](01-04-travel-time-curves-deep-earth.md), the tomographic images of [1.5](01-05-seismic-tomography.md), the basin depth of [2.2](02-02-gravity-anomalies-reductions.md), the mantle viscosity of [4.6](04-06-mantle-rheology-post-glacial-rebound.md), the core composition of [5.4](05-04-the-core.md) — each was obtained by asking "what Earth would have produced these measurements?" and each has admitted, somewhere in the small print, that more than one Earth would.

This lesson makes that precise. The framework is linear algebra, and it delivers three things worth having: a systematic way to solve the problem, an honest statement of what the answer means, and — most valuable — a way to identify the things the data **cannot** determine, before you go and publish them.

## The idea

**Write the physics as a matrix.** In every problem in this module the data depend linearly on the model: travel time is a sum of slownesses along a path, a gravity anomaly is a sum of contributions from buried masses. Collect them and you have $\mathbf{Gm} = \mathbf d$, where $\mathbf m$ is what you want and $\mathbf d$ is what you measured.

**Three regimes, and the middle one is the real world.** If you have more independent data than unknowns, the system is **overdetermined** and generally has no exact solution — the data are noisy — so you find the model that comes closest. If you have fewer, it is **underdetermined** and has infinitely many exact solutions. Real geophysical problems are **mixed**: over-determined in some combinations of parameters and under-determined in others, simultaneously.

**The null space is the part you cannot see.** There are model vectors $\mathbf m_0$ with $\mathbf{Gm}_0 = \mathbf 0$ — structures that produce **no data at all**. You can add any multiple of one to your answer and every prediction is unchanged. **The null space is not noise and not a resolution limit; it is a formal blind spot**, and no improvement in instrumentation touches it.

**Regularization picks one answer, and it is a choice, not a discovery.** Since the data do not choose among the solutions, you must — typically by asking for the smallest or the smoothest model that fits. The result is a real, defensible answer, but the smoothness in your published image came from you, not from the Earth.

**The resolution matrix says what you actually measured.** It shows each recovered parameter as a weighted average of the true ones. Where a row of the resolution matrix is sharply peaked, that parameter is genuinely resolved; where it is spread out, the recovered value is a smear of its neighbours. **Publishing an image without a resolution test is publishing an assertion.**

## The formal version

**The linear problem.** $N$ data, $M$ model parameters:

$$\mathbf{Gm} = \mathbf d, \qquad \mathbf G\ \text{is}\ N\times M.$$

**Overdetermined: least squares.** Minimize $\|\mathbf{Gm}-\mathbf d\|^2$:

$$\hat{\mathbf m} = (\mathbf G^{\!\top}\mathbf G)^{-1}\mathbf G^{\!\top}\mathbf d.$$

*In words: project the data onto the space the model can reach.* Requires $\mathbf G^{\!\top}\mathbf G$ to be invertible, i.e. $\mathbf G$ of full column rank ([numerical-analysis 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md)).

**Underdetermined: minimum norm.** Among the infinitely many exact solutions, take the smallest:

$$\hat{\mathbf m} = \mathbf G^{\!\top}(\mathbf{GG}^{\!\top})^{-1}\mathbf d.$$

*In words: put nothing in the model that the data did not ask for.* This solution lies entirely outside the null space — which is the honest choice, but note that it does not mean the null-space component is zero in the Earth.

**Mixed-determined: damped least squares.** Add a penalty on model size, with damping parameter $\varepsilon$:

$$\boxed{\ \hat{\mathbf m} = (\mathbf G^{\!\top}\mathbf G + \varepsilon^2\mathbf I)^{-1}\mathbf G^{\!\top}\mathbf d\ }$$

*In words: trade a little misfit for a lot of stability.* The $\varepsilon^2\mathbf I$ term makes the matrix invertible even when $\mathbf G^{\!\top}\mathbf G$ is singular — which is exactly the situation a null space creates. Replacing $\mathbf I$ by a roughness operator penalizes wiggliness instead of size, giving **smoothed** rather than **damped** solutions.

**The null space.**

$$\mathcal N(\mathbf G) = \{\mathbf m_0 : \mathbf{Gm}_0 = \mathbf 0\}.$$

If $\hat{\mathbf m}$ fits the data, so does $\hat{\mathbf m} + c\,\mathbf m_0$ for every $c$.

**The resolution matrix.** With any generalized inverse $\mathbf G^{-g}$ giving $\hat{\mathbf m} = \mathbf G^{-g}\mathbf d$,

$$\hat{\mathbf m} = \mathbf G^{-g}\mathbf{Gm}_{\text{true}} = \mathbf R\,\mathbf m_{\text{true}}, \qquad \mathbf R = \mathbf G^{-g}\mathbf G.$$

*In words: what you recover is $\mathbf R$ applied to the truth.* Perfect resolution means $\mathbf R = \mathbf I$. In practice each row of $\mathbf R$ is a **resolving kernel** — an averaging window — and its width is the true resolution.

**The trade-off curve.** Plot data misfit against model norm as $\varepsilon$ varies. The result is an L-shaped curve, and the corner is the conventional choice: past it, more structure buys negligible fit improvement and is fitting noise; before it, the model is over-smoothed and misfits real signal.

**Non-uniqueness in potential fields.** For gravity and magnetics the null space is *infinite-dimensional*: by Gauss's theorem the field outside a body depends only on a surface distribution, so infinitely many internal density arrangements give identical measurements. **No amount of data resolves depth from a potential field alone** ([2.2](02-02-gravity-anomalies-reductions.md)), which is why density or geometry must come from elsewhere.

## Picture

![Left: a two-by-two grid of cells labelled s11, s12, s21 and s22, crossed by four coral rays — one along each row and one along each column. A note observes that the sum of the two row travel times equals the sum of the two column travel times, since both are the sum of all four cells, so four data give only three independent facts. Below, the same grid shaded as a checkerboard with values plus one, minus one, minus one, plus one, labelled the invisible model, with a note that every ray crosses one plus one and one minus one so every travel time is unchanged, and that any amount of this pattern can be added without moving the data. Right: a trade-off curve of data misfit against model roughness, falling steeply then flattening, with a coral marker at the elbow labelled as much structure as the data actually support. The steep part is labelled heavy damping, smooth and wrong; the flat part is labelled no damping, fits the noise too. A caption says to publish the resolution test, or the picture is an assertion rather than a measurement](assets/06-01-fig1.svg)

The checkerboard is not hard to see. It is impossible to see.

## Worked examples

**Example 1 (mechanical — an overdetermined fit).** A refraction line records the head-wave arrival at three offsets:

| $x$ (km) | $t$ (s) |
|---|---|
| 100 | 20.5 |
| 200 | 33.8 |
| 300 | 47.0 |

The model is $t = t_0 + px$, with two unknowns and three data. Find the least-squares $p$ and $t_0$, and the refractor velocity.

*Means.* $\bar x = 200$, $\bar t = (20.5+33.8+47.0)/3 = 33.767$.

*Sums of products.*
$$S_{xx} = (-100)^2 + 0^2 + (100)^2 = 20{,}000,$$
$$S_{xt} = (-100)(20.5-33.767) + 0 + (100)(47.0-33.767) = 1326.7 + 1323.3 = 2650.0.$$

*Slope and intercept.*
$$p = \frac{S_{xt}}{S_{xx}} = \frac{2650}{20{,}000} = 0.1325\ \mathrm{s\,km^{-1}}, \qquad v = \frac1p = 7.55\ \mathrm{km\,s^{-1}}.$$
$$t_0 = \bar t - p\bar x = 33.767 - 26.500 = 7.27\ \mathrm{s}.$$

Three data, two unknowns, one degree of freedom left over — which is what lets you estimate the uncertainty. **Over-determination is not waste; it is the only source of error bars you have.**

**Example 2 (why you'd care — the structure you cannot see).** Four rays cross a $2\times2$ grid of cells: one along each row and one along each column, each with path length $L$ per cell. Set up $\mathbf G$, find its rank, identify the null space, and say what one extra ray would fix.

*The matrix.* Ordering the slownesses as $(s_{11}, s_{12}, s_{21}, s_{22})$ and the rays as row 1, row 2, column 1, column 2:

$$\mathbf G = L\begin{pmatrix}1&1&0&0\\ 0&0&1&1\\ 1&0&1&0\\ 0&1&0&1\end{pmatrix}.$$

*The rank.* Row 1 plus row 2 gives $(1,1,1,1)$; so does row 3 plus row 4. The four rows satisfy one linear relation, so **the rank is 3**. Physically: $t_1 + t_2 = t_3 + t_4$, because both sides are the total slowness of the whole grid. Four measurements, three independent facts.

*The null space.* Solve $\mathbf{Gm}_0 = \mathbf 0$:

$$m_{11}+m_{12}=0,\quad m_{21}+m_{22}=0,\quad m_{11}+m_{21}=0,\quad m_{12}+m_{22}=0.$$

From the first, $m_{12} = -m_{11}$; from the third, $m_{21} = -m_{11}$; from the second, $m_{22} = +m_{11}$; the fourth is then satisfied automatically. So

$$\mathbf m_0 = (1,\,-1,\,-1,\,1).$$

**The checkerboard.** A pattern of alternating fast and slow cells, of any amplitude whatsoever, produces exactly zero change in all four travel times — because every ray crosses one $+1$ and one $-1$.

*The resolution matrix.* With the minimum-norm inverse, $\mathbf R = \mathbf I - \hat{\mathbf m}_0\hat{\mathbf m}_0^{\!\top}$ where $\hat{\mathbf m}_0 = (1,-1,-1,1)/2$ is the unit null vector. Its first row is

$$\mathbf R_{1\cdot} = \left(0.75,\ 0.25,\ 0.25,\ -0.25\right).$$

*In words: the "recovered" value in cell 11 is three-quarters of the truth in cell 11, plus a quarter of each neighbour, minus a quarter of the diagonal cell.* It is an average, not a value — and the negative entry means that a genuinely fast diagonal cell will make cell 11 look artificially slow. **Leakage with the wrong sign is how spurious anomalies are manufactured.**

*The fix.* Add one diagonal ray through cells 11 and 22, of length $L\sqrt2$ in each. Applied to the null vector it gives $L\sqrt2(1) + L\sqrt2(1) = 2L\sqrt2 \ne 0$, so the checkerboard is no longer invisible and the rank rises to 4. **One ray at a new angle does what an infinite number of the existing rays could not.**

*The general moral, which is the reason this lesson exists.* Resolution is a property of the **experimental geometry**, not of the data quality. Adding rays parallel to ones you already have improves precision and does nothing for resolution. This is why ocean-bottom seismometers and temporary arrays in unsampled regions are worth so much per instrument ([1.5](01-05-seismic-tomography.md)); why post-glacial rebound needs sites both inside and outside the former ice margin ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)); and why the core's light-element composition needs cosmochemistry rather than better seismology ([5.4](05-04-the-core.md)). **In every case the remedy is a measurement with a different sensitivity, not a better measurement of the same kind.**

## Watch out

- **You might think** a smooth tomographic image means the Earth is smooth. **Actually** the smoothness is very largely the regularization. Two groups inverting identical data with different damping produce differently-shaped anomalies in the same places. Trust locations and integrated amplitudes; distrust outlines and gradients.
- **You might think** a small misfit means a good model. **Actually** a model with enough free parameters can fit anything, including the noise, and such a model has terrible predictive power. The right target is a misfit comparable to the data uncertainty — no better. Fitting the data *too* well is a diagnostic of over-parameterization.
- **You might think** the minimum-norm solution is the most likely Earth. **Actually** it is the solution with no null-space component, which is a statement about the *data*, not the Earth. There is no reason the real Earth should have zero projection onto the null space, and interpreting the minimum-norm answer as "the truth" is precisely the error the resolution matrix exists to prevent.

## One-liner

> Write the physics as a matrix, and it tells you not only how to solve for the Earth but which structures are formally invisible — and those are fixed by the geometry of the experiment, not by the quality of the instruments.

## Problems

**P1 (🟢)** A gravity survey measures the anomaly of a buried slab at three stations, giving $t = a + bx$ with data $(x,t) = (0, 4.0)$, $(10, 9.5)$, $(20, 14.0)$. (a) Compute the least-squares slope and intercept. (b) Compute the predicted values and the residuals. (c) State how many degrees of freedom the fit has.

**P2 (🟡)** Two cells A and B are crossed by rays: ray 1 through A only (length 80 km), ray 2 through both (60 km each), ray 3 through both (60 km each). (a) Write $\mathbf G$ and state its rank. (b) With $\mathbf d = (-0.40, -0.66, -0.66)$ s, solve for the slowness anomalies. (c) Now delete ray 1 and state precisely what remains determined, writing the solution family explicitly. (d) Identify the null vector.

**P3 (🔴, bridges to [6.2](06-02-reflection-seismics.md))** A damped least-squares inversion is run with several damping parameters, giving:

| $\varepsilon$ | misfit $\chi^2/N$ | model norm |
|---|---|---|
| 10 | 4.8 | 0.9 |
| 3 | 1.9 | 2.1 |
| 1 | 1.05 | 3.8 |
| 0.3 | 0.98 | 9.4 |
| 0.1 | 0.95 | 31.0 |

The data uncertainties are believed accurate. (a) Sketch in words the shape of the trade-off curve. (b) Identify the preferred damping and justify it. (c) Explain what is happening physically at $\varepsilon = 0.1$. (d) A colleague chooses $\varepsilon = 0.1$ on the grounds that it fits the data best, and points to a sharp new anomaly that appears only in that model. Give the argument against, and state what test would settle whether the anomaly is real.

<details>
<summary>Solutions</summary>

**P1** (a) $\bar x = 10$, $\bar t = (4.0+9.5+14.0)/3 = 9.167$.
$$S_{xx} = (-10)^2 + 0 + (10)^2 = 200,$$
$$S_{xt} = (-10)(4.0-9.167) + 0 + (10)(14.0-9.167) = 51.67 + 48.33 = 100.0.$$
$$b = \frac{100.0}{200} = 0.500, \qquad a = 9.167 - 0.500\times10 = 4.167.$$

(b) Predicted: $4.167$, $9.167$, $14.167$. Residuals: $4.0-4.167 = -0.167$; $9.5-9.167 = +0.333$; $14.0-14.167 = -0.167$.

(Sum of residuals is $-0.001$, zero to rounding — as least squares requires when an intercept is fitted.)

(c) Three data minus two parameters = **one degree of freedom**.

**P2** (a) With $\mathbf m = (m_A, m_B)$ and lengths in km:

$$\mathbf G = \begin{pmatrix}80 & 0\\ 60 & 60\\ 60 & 60\end{pmatrix}.$$

Rows 2 and 3 are identical, so **the rank is 2** — full column rank, and the system is overdetermined but solvable exactly here because rays 2 and 3 agree.

(b) From ray 1: $80\,m_A = -0.40$, so $m_A = -5.0\times10^{-3}\ \mathrm{s\,km^{-1}}$.
From ray 2: $60(-5.0\times10^{-3}) + 60\,m_B = -0.66$, so $-0.30 + 60m_B = -0.66$, giving

$$m_B = \frac{-0.36}{60} = -6.0\times10^{-3}\ \mathrm{s\,km^{-1}}.$$

Both cells are fast, B more so.

(c) Deleting ray 1 leaves only $60m_A + 60m_B = -0.66$, i.e.

$$m_A + m_B = -1.10\times10^{-2}\ \mathrm{s\,km^{-1}}.$$

**Only the sum is determined.** The solution family is

$$\begin{pmatrix}m_A\\ m_B\end{pmatrix} = \begin{pmatrix}-5.5\times10^{-3}\\ -5.5\times10^{-3}\end{pmatrix} + c\begin{pmatrix}1\\-1\end{pmatrix}, \qquad c\in\mathbb{R},$$

the first term being the minimum-norm (equal-split) solution.

(d) $$\mathbf m_0 = (1,\,-1).$$

Any amount of "fast in A, equally slow in B" is invisible to the surviving rays. Note that the minimum-norm answer $(-5.5, -5.5)\times10^{-3}$ differs from the truth $(-5.0, -6.0)\times10^{-3}$ by exactly $c = 0.5\times10^{-3}$ along the null direction — **the error is entirely in the invisible direction, which is the general situation.**

**P3** (a) Misfit falls steeply as $\varepsilon$ decreases from 10 to 1 — from 4.8 to 1.05 — while the model norm rises modestly, from 0.9 to 3.8. Below $\varepsilon = 1$ the misfit barely moves (1.05 to 0.95) while the model norm explodes (3.8 to 31.0). Plotted as misfit against model norm the curve is a sharp **L**, with the corner near $\varepsilon = 1$.

(b) **$\varepsilon = 1$.** Two independent arguments converge on it:

- **The elbow criterion.** It sits at the corner of the L. Decreasing $\varepsilon$ further buys a misfit improvement of 0.10 at the cost of increasing the model norm eightfold — a terrible exchange rate.
- **The $\chi^2$ criterion**, which is the stronger of the two. If the data uncertainties are correct, a model that fits the data *as well as they deserve* has $\chi^2/N \approx 1$. At $\varepsilon = 1$, $\chi^2/N = 1.05$. **That is exactly right.**

(c) At $\varepsilon = 0.1$ the inversion is **fitting the noise**. $\chi^2/N = 0.95$ is below 1, meaning the model reproduces the data more closely than their stated errors — which is only possible if it has absorbed the random measurement error into structure. The eightfold jump in model norm is where that noise went: it has been converted into sharp, high-amplitude features in the model.

(d) *The argument against.* An anomaly that appears only in the under-damped model, and only once $\chi^2/N$ has dropped below 1, is exactly what fitting noise produces. Under-damping does not reveal fine structure that heavier damping suppressed; it manufactures structure to absorb random error. The colleague's criterion — "best fit" — is the wrong criterion, because with enough freedom any model fits perfectly, and a model that fits better than the error bars allow has demonstrably fitted something that is not signal.

The comparison is also unfair in a specific way: the anomaly is not being tested against a null hypothesis, it is being noticed after the fact in the one inversion designed to produce the most structure.

*The test that settles it.* **Recover the anomaly synthetically.** Build a synthetic model containing that anomaly and nothing else, compute synthetic data using the *real* ray geometry, add noise of the *real* magnitude, invert with the *same* damping, and see what comes back. Two outcomes:

- The anomaly is recovered at roughly the right position and amplitude in the $\varepsilon = 1$ inversion as well — then it is real and the heavier damping merely reduced its amplitude.
- The anomaly is not recoverable at $\varepsilon = 1$, and features of similar amplitude appear at $\varepsilon = 0.1$ even when the synthetic input contains **no** anomaly at all — then it is noise.

The second half of that test, inverting noise-only synthetic data, is the decisive one and is too often skipped. A complementary check is **jackknifing**: split the data into halves and invert each. A real anomaly appears in both; a noise artefact appears in neither, or in different places.

</details>

## Flashback

**From Lesson 5.5 (Anisotropy and mantle flow):** A station records SKS splitting with $\delta t = 1.1$ s. The anisotropic layer has $\bar v_s = 4.6\ \mathrm{km\,s^{-1}}$ and 4.5 percent anisotropy. (a) Compute the fast and slow velocities. (b) Compute the layer thickness. (c) State what would change if the true anisotropy were 3 percent, and name the general problem this illustrates.

<details>
<summary>Solution</summary>

(a) $$v_f = 4.6\times1.0225 = 4.704\ \mathrm{km\,s^{-1}}, \qquad v_s = 4.6\times0.9775 = 4.497\ \mathrm{km\,s^{-1}}.$$

(b) $$\frac{1}{4.497}-\frac{1}{4.704} = 0.222370 - 0.212585 = 9.785\times10^{-3}\ \mathrm{s\,km^{-1}},$$
$$L = \frac{1.1}{9.785\times10^{-3}} = 112\ \mathrm{km}.$$

(c) At 3 percent anisotropy, $v_f = 4.669$, $v_s = 4.531$, and the slowness difference is $0.220702 - 0.214178 = 6.524\times10^{-3}$, giving

$$L = \frac{1.1}{6.524\times10^{-3}} = 169\ \mathrm{km}.$$

**A 50 percent increase in the inferred thickness from a change in an assumed parameter.** The general problem is exactly this lesson's: only the *product* of layer thickness and anisotropy strength enters the data, so the two are perfectly traded off — a one-dimensional null space in the two-parameter model. No improvement in the measurement of $\delta t$ separates them, and breaking the trade-off requires a measurement with different sensitivity, such as surface-wave anisotropy resolved with depth.

</details>

## Connections

- **Backward:** the tomographic smearing of [1.5](01-05-seismic-tomography.md), the potential-field ambiguity of [2.2](02-02-gravity-anomalies-reductions.md), the ice-history-versus-viscosity trade-off of [4.6](04-06-mantle-rheology-post-glacial-rebound.md), the core composition of [5.4](05-04-the-core.md) and the thickness-versus-strength trade-off of [5.5](05-05-anisotropy-mantle-flow.md) are all instances of the null space defined here — this lesson is the general statement of a problem the course has met five times.
- **Forward:** [6.2](06-02-reflection-seismics.md) is an inverse problem solved by processing rather than by matrix algebra, and migration is best understood as an approximate inversion; [6.3](06-03-electrical-electromagnetic-methods.md)'s equivalence problem is a null space with a physical name.
- **Sideways:** least squares, the normal equations and the conditioning of $\mathbf G^{\!\top}\mathbf G$ are [numerical-analysis 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md) and [3.2](../../numerical-analysis/lessons/03-02-cholesky-conditioning.md); damped least squares is ridge regression from [`statistical-learning`](../../statistical-learning/syllabus.md), and the trade-off curve is the bias–variance trade-off wearing geophysical clothes. The singular value decomposition that unifies all three regimes is [linalg-refresher 3.2](../../linalg-refresher/lessons/03-02-diagonalization.md)'s eigendecomposition generalized to rectangular matrices.
