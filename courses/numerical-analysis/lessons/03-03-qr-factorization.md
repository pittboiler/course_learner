# Numerical Analysis · Lesson 3.3: QR Factorization

> ⏱ ~15 min · Module 3: Numerical Linear Algebra · Builds on: [Lesson 3.1](03-01-lu-pivoting.md) (LU, pivoting), orthogonality ([linalg-refresher](../../linalg-refresher/syllabus.md)) · Unlocks: [Lesson 3.4](03-04-iterative-methods.md), and least-squares in [Lesson 5.2](05-02-qr-svd-least-squares.md)

## Why this matters

LU (Lesson 3.1) solves a square $Ax=b$, but the moment you have *more equations than unknowns* — fitting a line to a cloud of data, a degree-5 polynomial to noisy samples — LU is the wrong tool and the "obvious" fix, the normal equations, quietly squares your condition number (Lesson 5.1). The right tool is **QR**: it rewrites $A$ as an orthogonal matrix times a triangular one. Orthogonal matrices are the numerically safest objects in all of linear algebra — they rotate and reflect but never stretch — so QR is the *stable* road to least-squares, the workhorse behind regression, the bridge to `convex-optimization`'s ridge/lasso setups, and the first half of how eigenvalue algorithms actually run. This lesson builds the factorization and, in true error-and-stability spirit, watches where the naive way to compute it silently rots.

## The idea

An **orthonormal basis** is a set of unit vectors at right angles to each other — a rigid coordinate frame you've only rotated or flipped, never skewed or scaled. Working in such a frame is a dream: coordinates are just dot products, and lengths are preserved.

**QR** is the act of manufacturing that frame from the columns of $A$. Walk through the columns left to right. Keep the first, just normalized. For the second, strip off whatever part of it points along the first, and normalize what remains — the leftover is, by construction, perpendicular to the first. For the third, strip off its components along the first *two*, normalize the remainder. Each new direction is what's *new* about that column once you've accounted for the earlier ones. The orthonormal directions you produce are the columns of $Q$; the bookkeeping — how much of each old direction lived in each column — is the upper-triangular $R$. It's triangular because column $j$ only ever refers to directions $1$ through $j$, never later ones.

That "strip off the earlier directions" move is **Gram–Schmidt**. It's the honest picture of what QR *means*. The catch, and the whole point of this lesson: done in the naive order, floating-point rounding lets those "perpendicular" directions quietly drift out of square. We'll see it happen and then fix it.

## The formal version

**Orthogonal matrix.** A square matrix $Q$ is *orthogonal* if $Q^\top Q = I$ — its columns are orthonormal. Equivalently $Q^{-1} = Q^\top$.

*In words:* the columns are perpendicular unit vectors, so undoing $Q$ is just transposing it.

The property that makes them golden: for any $x$,
$$\lVert Qx\rVert_2^2 = (Qx)^\top(Qx) = x^\top Q^\top Q\, x = x^\top x = \lVert x\rVert_2^2.$$

*In words:* multiplying by $Q$ never changes a vector's length — it's a pure rotation/reflection. Consequently its 2-norm condition number is $\kappa_2(Q) = 1$, the smallest possible: $Q$ neither amplifies nor damps errors. Compare LU, where a bad pivot lets the growth factor blow entries up. Orthogonal steps are the safest steps you can take.

**QR factorization.** For $A \in \mathbb{R}^{m\times n}$ with $m \ge n$ and independent columns, there exist $Q$ with orthonormal columns and an upper-triangular $R$ with positive diagonal such that
$$A = QR.$$
In *reduced* form $Q$ is $m\times n$ and $R$ is $n\times n$; in *full* form $Q$ is a square $m\times m$ orthogonal matrix and $R$ is $m\times n$ (extra rows of zeros).

*In words:* every matrix with independent columns is an orthonormal frame $Q$ scaled and sheared by an upper-triangular recipe $R$.

**Classical Gram–Schmidt (CGS).** For columns $a_1,\dots,a_n$, set for each $j$:
$$r_{ij} = q_i^\top a_j \ (i<j), \qquad v_j = a_j - \sum_{i<j} r_{ij}\,q_i, \qquad r_{jj} = \lVert v_j\rVert_2, \qquad q_j = v_j / r_{jj}.$$

*In words:* subtract from $a_j$ its projection onto every earlier $q_i$ — all measured against the *original* $a_j$ — then normalize.

**Modified Gram–Schmidt (MGS).** Same formulas, but subtract the projections **one at a time, updating the vector after each**: project the *running remainder* onto $q_i$, not the original $a_j$. In exact arithmetic MGS and CGS are identical; in floating point they are not — MGS measures each projection against a vector that already has the earlier directions removed, so it catches the small components that rounding introduces. CGS measures everything against a stale $a_j$ and misses them.

**Householder reflections.** The stable method of choice doesn't build $Q$ by orthogonalizing columns at all — it *triangularizes* $A$ with reflections. A **Householder reflector** is
$$H = I - 2\,\frac{vv^\top}{v^\top v},$$
which is orthogonal and symmetric ($H^\top H = H^2 = I$: reflecting twice returns you home). Choosing $v = x + \operatorname{sign}(x_1)\lVert x\rVert_2\, e_1$ makes $Hx = -\operatorname{sign}(x_1)\lVert x\rVert_2\, e_1$ — it reflects the whole vector onto the first coordinate axis, zeroing every entry below the first. Apply one reflector per column ($H_n\cdots H_2 H_1 A = R$); then $Q = H_1 H_2\cdots H_n$. Because each $H_i$ is *exactly* orthogonal, the computed factorization is **backward stable**: $\hat Q\hat R = A + \delta A$ with $\lVert\delta A\rVert/\lVert A\rVert = O(\varepsilon_{\text{mach}})$, and $\hat Q$ stays orthogonal to machine precision no matter how ill-conditioned $A$ is. Gram–Schmidt gives no such guarantee.

**Cost.** Gram–Schmidt (either flavor): $\approx 2mn^2$ flops. Householder: $\approx 2mn^2 - \tfrac{2}{3}n^3$. For a square $n\times n$ matrix that's $\tfrac{4}{3}n^3$ — about twice the $\tfrac{2}{3}n^3$ of LU. The doubled cost buys you unconditional stability.

## Concrete instance

Gram–Schmidt QR of a $3\times 2$ matrix, every projection shown:
$$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}, \qquad a_1 = \begin{pmatrix}1\\0\\1\end{pmatrix},\ a_2 = \begin{pmatrix}2\\1\\0\end{pmatrix}.$$

**Column 1.** $r_{11} = \lVert a_1\rVert = \sqrt{1^2+0^2+1^2} = \sqrt 2$, so
$$q_1 = \frac{1}{\sqrt 2}\begin{pmatrix}1\\0\\1\end{pmatrix}.$$

**Column 2.** How much of $a_2$ points along $q_1$?
$$r_{12} = q_1^\top a_2 = \frac{1}{\sqrt2}(1\cdot 2 + 0\cdot 1 + 1\cdot 0) = \frac{2}{\sqrt 2} = \sqrt 2.$$
Strip it off:
$$v_2 = a_2 - r_{12}\,q_1 = \begin{pmatrix}2\\1\\0\end{pmatrix} - \sqrt2\cdot\frac{1}{\sqrt2}\begin{pmatrix}1\\0\\1\end{pmatrix} = \begin{pmatrix}1\\1\\-1\end{pmatrix}.$$
Normalize: $r_{22} = \lVert v_2\rVert = \sqrt 3$, so $q_2 = \tfrac{1}{\sqrt3}(1,1,-1)^\top$. Check $q_1^\top q_2 = \tfrac{1}{\sqrt6}(1 + 0 - 1) = 0$ ✓.

Assembling,
$$Q = \begin{pmatrix} 1/\sqrt2 & 1/\sqrt3 \\ 0 & 1/\sqrt3 \\ 1/\sqrt2 & -1/\sqrt3 \end{pmatrix}, \qquad R = \begin{pmatrix} \sqrt2 & \sqrt2 \\ 0 & \sqrt3 \end{pmatrix}.$$
Verify the second column of $QR$: $r_{12}q_1 + r_{22}q_2 = (1,0,1)^\top + (1,1,-1)^\top = (2,1,0)^\top = a_2$ ✓. $R$ is upper-triangular; its diagonal entries are exactly the lengths of the *new* directions, $\sqrt2$ and $\sqrt3$.

## Worked examples

**Example 1 — where classical Gram–Schmidt loses orthogonality.** This is the cautionary tale that names the lesson. Take (Läuchli's matrix)
$$A = \begin{pmatrix} 1 & 1 & 1 \\ \epsilon & 0 & 0 \\ 0 & \epsilon & 0 \\ 0 & 0 & \epsilon \end{pmatrix}, \qquad \epsilon = 10^{-8},$$
where $\epsilon$ is small enough that $1+\epsilon^2 = 1 + 10^{-16}$ **rounds to exactly $1$** in double precision ($\varepsilon_{\text{mach}} \approx 2.2\times 10^{-16}$). Run CGS in that arithmetic:

- $r_{11} = \sqrt{1+\epsilon^2} \to 1$, so $q_1 = (1,\epsilon,0,0)^\top$. *The $\epsilon^2$ under the root was rounded away.*
- $r_{12} = q_1^\top a_2 = 1$, $\ v_2 = a_2 - q_1 = (0,-\epsilon,\epsilon,0)^\top$, $\ q_2 = \tfrac{1}{\sqrt2}(0,-1,1,0)^\top$.
- **CGS third column**, projections both taken against the *original* $a_3$: $r_{13}=q_1^\top a_3 = 1$ and $q_2^\top a_3 = 0$. So $v_3 = a_3 - 1\cdot q_1 - 0\cdot q_2 = (0,-\epsilon,0,\epsilon)^\top$, giving $q_3 = \tfrac{1}{\sqrt2}(0,-1,0,1)^\top$.

Now audit orthogonality:
$$q_2^\top q_3 = \tfrac{1}{2}\big(0 + (-1)(-1) + (1)(0) + 0\big) = \tfrac{1}{2}.$$
A **half** — $q_2$ and $q_3$ are nowhere near perpendicular. CGS handed back a "$Q$" that isn't orthogonal at all.

**MGS repairs it.** Redo the third column subtracting projections one at a time, updating between:
- $w = a_3 - (q_1^\top a_3)\,q_1 = (0,-\epsilon,0,\epsilon)^\top$.
- Now measure against the *updated* $w$: $q_2^\top w = \tfrac{1}{\sqrt2}(\epsilon) = \epsilon/\sqrt2 \ne 0$ — a component CGS never saw, because it looked at the stale $a_3$ where it was zero.
- $v_3 = w - (q_2^\top w)\,q_2 = (0,-\tfrac{\epsilon}{2},-\tfrac{\epsilon}{2},\epsilon)^\top$, so $q_3 = \tfrac{1}{\sqrt6}(0,-1,-1,2)^\top$.

Recheck: $q_2^\top q_3 = \tfrac{1}{\sqrt{12}}\big(0 + (-1)(-1) + (1)(-1) + 0\big) = 0$ ✓. Orthogonality restored. Same formulas, different *order of operations* — and in floating point, order is everything. (Householder would sidestep the issue entirely, staying orthogonal to $O(\varepsilon_{\text{mach}})$.)

**Example 2 — a Householder reflector in action, and why the sign.** Zero out everything below the first entry of $x = (4,3)^\top$. With $x_1 = 4 > 0$, $\lVert x\rVert = 5$, take the stable sign choice
$$v = x + \operatorname{sign}(x_1)\lVert x\rVert e_1 = (4,3)^\top + 5(1,0)^\top = (9,3)^\top, \qquad v^\top v = 90.$$
Reflect: $Hx = x - 2\dfrac{v^\top x}{v^\top v}v$ with $v^\top x = 9\cdot4 + 3\cdot3 = 45$, so the scalar is $2\cdot 45/90 = 1$ and
$$Hx = (4,3)^\top - (9,3)^\top = (-5,0)^\top = -\lVert x\rVert e_1.$$
One reflection collapsed $x$ onto the axis — exactly the operation that turns a matrix column into a zeroed-out $R$ column. **Why add rather than subtract?** If instead $v = x - \lVert x\rVert e_1$ and $x$ already nearly points along $e_1$, then $x_1 \approx \lVert x\rVert$ and the first entry $x_1 - \lVert x\rVert$ is a difference of nearly equal numbers — catastrophic cancellation (Lesson 1.2), and $v^\top v$ underflows toward zero. Choosing the sign of $x_1$ makes $v$ the *longer* of the two candidate reflection vectors, dodging the cancellation. Numerical stability, one sign at a time.

## Watch out

- **You might think $Q$ being "computed by Gram–Schmidt" guarantees orthogonal columns — it doesn't.** CGS can return columns with inner products as large as $O(\kappa(A)\,\varepsilon_{\text{mach}})$ or worse (Example 1 hit $\tfrac12$). Use MGS if you must Gram–Schmidt; use Householder if you want a guarantee.
- **You might reach for the normal-equations shortcut $A^\top A$ to get $R$ (since $A^\top A = R^\top R$).** But forming $A^\top A$ squares the condition number, $\kappa(A^\top A) = \kappa(A)^2$ — the exact disaster QR exists to avoid (Lesson 5.1). Get $R$ from $A$ directly, never through $A^\top A$.
- **You might expect Householder to hand you the matrix $Q$.** It doesn't store $Q$ explicitly — it keeps the reflection vectors $v_i$ and *applies* $Q$ or $Q^\top$ to whatever you need (that's all least-squares requires). Forming the full $Q$ is extra work you usually skip.
- **$R$'s diagonal sign is a convention.** Different sign choices in normalization give different-but-valid $Q,R$ pairs; pinning $r_{jj} > 0$ makes the factorization unique.

## One-liner

> QR trades your skewed columns for a rigid orthonormal frame that can't amplify error — and Householder reflections build that frame stably where naive Gram–Schmidt quietly lets it go crooked.

## Problems

**P1 (🟢)** Compute the reduced QR factorization of
$$A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$$
by Gram–Schmidt. Show $r_{11}, r_{12}, r_{22}$ and the columns $q_1, q_2$, and verify $q_1^\top q_2 = 0$.

**P2 (🟡)** Let $A = QR$ be square with $Q$ orthogonal and $R$ invertible. (a) Prove $\lVert Qx\rVert_2 = \lVert x\rVert_2$ for all $x$. (b) Using that orthogonal multiplication preserves singular values, argue $\kappa_2(A) = \kappa_2(R)$ — i.e. all of $A$'s conditioning lives in the triangular factor, none in $Q$. (This is why QR-based least-squares is stable: the safe factor carries the errors, the dangerous one carries none.)

**P3 (🔴)** Build the Householder reflector that maps $x = (0,3,4)^\top$ to a multiple of $e_1$. Give $v$ (use the stable sign rule), form the scalar $2\,v^\top x / v^\top v$, compute $Hx$, and confirm $\lVert Hx\rVert = \lVert x\rVert$. Then explain in one sentence why $H$ being orthogonal makes it a "safe" building block for factoring a matrix.

<details>
<summary>Solutions</summary>

**P1** Columns $a_1=(1,1,0)^\top$, $a_2=(1,0,1)^\top$.
- $r_{11} = \lVert a_1\rVert = \sqrt{1+1+0} = \sqrt2$, so $q_1 = \tfrac{1}{\sqrt2}(1,1,0)^\top$.
- $r_{12} = q_1^\top a_2 = \tfrac{1}{\sqrt2}(1\cdot1 + 1\cdot0 + 0\cdot1) = \tfrac{1}{\sqrt2}$.
- $v_2 = a_2 - r_{12}q_1 = (1,0,1)^\top - \tfrac{1}{\sqrt2}\cdot\tfrac{1}{\sqrt2}(1,1,0)^\top = (1,0,1)^\top - \tfrac12(1,1,0)^\top = (\tfrac12,-\tfrac12,1)^\top$.
- $r_{22} = \lVert v_2\rVert = \sqrt{\tfrac14+\tfrac14+1} = \sqrt{\tfrac32} = \tfrac{\sqrt6}{2}$, so $q_2 = \tfrac{2}{\sqrt6}(\tfrac12,-\tfrac12,1)^\top = \tfrac{1}{\sqrt6}(1,-1,2)^\top$.

So $Q = \begin{pmatrix} 1/\sqrt2 & 1/\sqrt6 \\ 1/\sqrt2 & -1/\sqrt6 \\ 0 & 2/\sqrt6\end{pmatrix}$, $R = \begin{pmatrix}\sqrt2 & 1/\sqrt2 \\ 0 & \sqrt6/2\end{pmatrix}$.
Check: $q_1^\top q_2 = \tfrac{1}{\sqrt{12}}(1\cdot1 + 1\cdot(-1) + 0\cdot2) = 0$ ✓. And $QR$'s first column is $\sqrt2\,q_1 = (1,1,0)^\top = a_1$ ✓.

**P2** (a) $\lVert Qx\rVert_2^2 = (Qx)^\top(Qx) = x^\top Q^\top Q x = x^\top I x = x^\top x = \lVert x\rVert_2^2$; take square roots (both sides $\ge 0$). $\blacksquare$

(b) The 2-norm condition number is $\kappa_2(M) = \sigma_{\max}(M)/\sigma_{\min}(M)$, the ratio of largest to smallest singular values. The singular values of $A = QR$ are the square roots of the eigenvalues of $A^\top A = R^\top Q^\top Q R = R^\top R$ — the $Q$ cancels because $Q^\top Q = I$. Hence $A$ and $R$ have identical singular values, so $\kappa_2(A) = \sigma_{\max}(R)/\sigma_{\min}(R) = \kappa_2(R)$. Equivalently: multiplying by the orthogonal $Q$ preserves all lengths (part a), so it can't change the max-stretch/min-stretch ratio. All the conditioning sits in $R$; $Q$ contributes $\kappa_2(Q)=1$. $\blacksquare$

**P3** $x=(0,3,4)^\top$, $\lVert x\rVert = \sqrt{0+9+16} = 5$. Here $x_1 = 0$; the sign rule takes $\operatorname{sign}(0) := +1$ (any nonzero convention works since there's nothing to cancel), so
$$v = x + \lVert x\rVert e_1 = (0,3,4)^\top + 5(1,0,0)^\top = (5,3,4)^\top, \qquad v^\top v = 25+9+16 = 50.$$
Scalar: $v^\top x = 5\cdot0 + 3\cdot3 + 4\cdot4 = 25$, so $2\,v^\top x/v^\top v = 2\cdot25/50 = 1$. Then
$$Hx = x - 1\cdot v = (0,3,4)^\top - (5,3,4)^\top = (-5,0,0)^\top = -\lVert x\rVert e_1.$$
Check $\lVert Hx\rVert = 5 = \lVert x\rVert$ ✓ (as it must — $H$ is orthogonal). One sentence: because $H$ preserves every length ($\lVert Hy\rVert = \lVert y\rVert$), applying it to the columns of a matrix zeros out subdiagonal entries without amplifying any rounding error, so a product of such reflections triangularizes $A$ stably.

</details>

## Flashback

**From Lesson 3.1 (LU factorization & partial pivoting):** Solve
$$\begin{pmatrix} 1 & 2 \\ 4 & 5 \end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix} = \begin{pmatrix}3\\6\end{pmatrix}$$
using LU with partial pivoting. Do the row swap the pivoting rule demands, record the multiplier, and finish with forward then back substitution.

<details>
<summary>Solution</summary>

Partial pivoting scans column 1 for the largest-magnitude entry: $|4| > |1|$, so swap rows (choosing the bigger pivot keeps the multiplier $\le 1$ in magnitude, controlling error growth — pivoting is about *stability*, not just avoiding a zero pivot). With $P$ the swap,
$$PA = \begin{pmatrix}4 & 5\\ 1 & 2\end{pmatrix}, \qquad Pb = \begin{pmatrix}6\\3\end{pmatrix}.$$
Eliminate: multiplier $m_{21} = 1/4$, and row 2 becomes $(1 - \tfrac14\cdot4,\ 2 - \tfrac14\cdot5) = (0,\ \tfrac34)$. So
$$L = \begin{pmatrix}1 & 0\\ \tfrac14 & 1\end{pmatrix}, \qquad U = \begin{pmatrix}4 & 5\\ 0 & \tfrac34\end{pmatrix}.$$
Forward substitution $Ly = Pb$: $y_1 = 6$, then $\tfrac14 y_1 + y_2 = 3 \Rightarrow y_2 = 3 - \tfrac14(6) = \tfrac32$.
Back substitution $Ux = y$: $\tfrac34 x_2 = \tfrac32 \Rightarrow x_2 = 2$; then $4x_1 + 5(2) = 6 \Rightarrow 4x_1 = -4 \Rightarrow x_1 = -1$.
Solution $x = (-1, 2)^\top$. Check against the original system: row 1 gives $-1 + 4 = 3$ ✓, row 2 gives $-4 + 10 = 6$ ✓.

</details>

## Connections

- **Backward:** QR is LU's stable cousin. LU (Lesson 3.1) uses *shear* eliminations whose multipliers can grow, so it needs pivoting to stay safe; QR uses *orthogonal* steps that can't grow at all ($\kappa_2(Q)=1$), which is exactly the length-preservation from the [linalg-refresher](../../linalg-refresher/syllabus.md). The conditioning idea from [Lesson 3.2](03-02-cholesky-conditioning.md) reappears in P2: all of $\kappa(A)$ lives in $R$.
- **Forward:** [Lesson 5.2](05-02-qr-svd-least-squares.md) uses QR to solve overdetermined least-squares — reducing $\min\lVert Ax-b\rVert$ to a triangular solve $Rx = Q^\top b$ — the stable alternative to the normal equations of [Lesson 5.1](05-01-least-squares-normal-equations.md), which square the condition number. The same $A=QR$ move, iterated, is the engine of the QR algorithm for eigenvalues that [Lesson 3.5](03-05-power-method.md) gestures toward.
- **Sideways (`convex-optimization`):** least-squares *is* the unconstrained quadratic program $\min_x \lVert Ax - b\rVert_2^2$; QR is how you solve its normal equations stably, and the same orthogonalization underlies the ridge-regression and QP setups in [convex-optimization](../../convex-optimization/syllabus.md).
