# Numerical Analysis · Lesson 3.2: Cholesky & Conditioning of $Ax=b$

> ⏱ ~15 min · Module 3: Numerical Linear Algebra · Builds on: [Lesson 3.1](03-01-lu-pivoting.md) (LU & pivoting) · Unlocks: [Lesson 3.3](03-03-qr-factorization.md) (QR factorization)

## Why this matters

Two questions haunt every linear solve. First: can I do less work? When $A$ is symmetric and positive definite — the shape of every covariance matrix, every stiffness matrix in mechanics, every normal-equations system in least-squares — the answer is yes: **Cholesky** halves the arithmetic of LU and never needs pivoting. Second, and deeper: *can I trust the answer?* Even a perfectly executed solve can hand you garbage if the problem itself is delicate. The **condition number** $\kappa(A)$ is the single number that tells you how many correct digits you should expect to lose before you compute anything — the conditioning of the *problem*, separate from the stability of the *algorithm* (Lesson [1.3](01-03-conditioning-vs-stability.md)).

## The idea

**Symmetry is structure, and structure is savings.** LU elimination on a symmetric matrix does redundant work — it computes the upper triangle and the lower triangle separately even though they mirror each other. If $A$ is not just symmetric but *positive definite* (it never turns a nonzero vector's own direction against it), that redundancy collapses into a single triangular factor $L$ with $A = LL^\top$. Same information, half the storage, half the flops, and — the quiet miracle — **no pivoting ever needed**, because for an SPD matrix the pivots can never go small or negative. Cholesky is so reliable that *trying* it is the standard numerical test for whether a matrix is SPD at all: if a square root of a nonpositive number ever appears, the matrix wasn't.

**Conditioning is error amplification, measured before you start.** Picture $A$ as a machine that maps $x$ to $b$. If nudging the input $b$ by 0.1% can swing the recovered $x$ by 10%, the machine has a *gain* of about 100 on relative errors — and that gain is $\kappa(A)$. It's a property of $A$ alone, fixed before any rounding happens. The punchline you'll carry forever: **you lose about $\log_{10}\kappa(A)$ decimal digits** just from the problem being what it is. Double precision gives you ~16 digits; if $\kappa = 10^{10}$, expect ~6 correct.

## The formal version

**Definition (SPD).** A real matrix $A$ is **symmetric positive definite** if $A = A^\top$ and $x^\top A x > 0$ for every nonzero vector $x$.

*In words:* $A$ is its own mirror image, and it never flips a vector into its own negative half-space — the quadratic "energy" $x^\top A x$ is strictly positive except at the origin. Equivalent tests: all eigenvalues are positive; all leading principal minors (top-left $k\times k$ determinants) are positive (Sylvester's criterion).

**Theorem (Cholesky factorization).** If $A$ is SPD, there is a **unique** lower-triangular $L$ with positive diagonal such that
$$A = LL^\top.$$
The entries come out column by column:
$$l_{jj} = \sqrt{a_{jj} - \sum_{k<j} l_{jk}^2}, \qquad l_{ij} = \frac{1}{l_{jj}}\left(a_{ij} - \sum_{k<j} l_{ik}\,l_{jk}\right)\ \ (i>j).$$

*In words:* peel off one column of $L$ at a time; each diagonal entry is a square root of "what's left" on the diagonal, and every quantity under a square root is guaranteed positive precisely because $A$ is SPD. The cost is $\approx \tfrac13 n^3$ flops — **half** of LU's $\approx \tfrac23 n^3$ — and it's unconditionally stable, so no row swaps are needed. Then solving $Ax=b$ is two triangular sweeps: $Ly = b$ (forward), $L^\top x = y$ (back).

**Definition (condition number).** For an invertible $A$ and a chosen norm,
$$\kappa(A) = \lVert A\rVert\,\lVert A^{-1}\rVert \ \ge 1.$$
In the 2-norm this equals the ratio of the largest to smallest **singular value**:
$$\kappa_2(A) = \frac{\sigma_{\max}(A)}{\sigma_{\min}(A)},$$
and for a symmetric matrix the singular values are $|\lambda_i|$, so $\kappa_2 = |\lambda|_{\max}/|\lambda|_{\min}$.

*In words:* $\kappa$ measures how much $A$ stretches its most-stretched direction relative to its least-stretched one. A perfectly conditioned matrix (an orthogonal one) has $\kappa = 1$; a nearly singular matrix has $\kappa \to \infty$.

**Theorem (perturbation bound).** If $Ax = b$ and $A(x+\delta x) = b + \delta b$, then
$$\frac{\lVert \delta x\rVert}{\lVert x\rVert} \ \le\ \kappa(A)\,\frac{\lVert \delta b\rVert}{\lVert b\rVert}.$$

*In words:* a relative error in the data $b$ shows up in the answer $x$ magnified by **at most** $\kappa(A)$ — and this bound is tight, so the worst case really happens. *Proof:* subtract the two systems to get $A\,\delta x = \delta b$, so $\delta x = A^{-1}\delta b$ and $\lVert\delta x\rVert \le \lVert A^{-1}\rVert\,\lVert\delta b\rVert$. Also $\lVert b\rVert = \lVert Ax\rVert \le \lVert A\rVert\,\lVert x\rVert$, i.e. $1/\lVert x\rVert \le \lVert A\rVert/\lVert b\rVert$. Multiply the two inequalities. $\blacksquare$ The same $\kappa(A)$ governs perturbations in $A$ itself.

**Rule of thumb (digit loss).** Solving $Ax=b$ in a precision carrying $d$ significant digits ($d\approx 16$ for double, since $\varepsilon_{\text{mach}}\approx 10^{-16}$), you should trust only about
$$d - \log_{10}\kappa(A) \quad\text{digits of } x.$$

## Concrete instance

**Cholesky by hand.** Factor the SPD matrix
$$A = \begin{pmatrix} 4 & 2 & 2\\ 2 & 5 & 5\\ 2 & 5 & 14 \end{pmatrix}.$$

Work the formulas column by column:

| entry | computation | value |
|---|---|---|
| $l_{11}$ | $\sqrt{4}$ | $2$ |
| $l_{21}$ | $2/2$ | $1$ |
| $l_{31}$ | $2/2$ | $1$ |
| $l_{22}$ | $\sqrt{5 - 1^2}$ | $2$ |
| $l_{32}$ | $(5 - 1\cdot 1)/2$ | $2$ |
| $l_{33}$ | $\sqrt{14 - 1^2 - 2^2}$ | $3$ |

$$L = \begin{pmatrix} 2 & 0 & 0\\ 1 & 2 & 0\\ 1 & 2 & 3 \end{pmatrix}, \qquad LL^\top = \begin{pmatrix} 4 & 2 & 2\\ 2 & 5 & 5\\ 2 & 5 & 14 \end{pmatrix} = A.\ \checkmark$$

Every number under a square root ($4,\,4,\,9$) was positive — that's the SPD guarantee in action. Had $a_{33}$ been $4$ instead of $14$, the last step would ask for $\sqrt{4-1-4}=\sqrt{-1}$: the algorithm stops and reports "not positive definite." That failure *is* the test.

## Worked examples

**Example 1 (compute $\kappa$, predict digit loss).** Take
$$A = \begin{pmatrix} 51 & 50\\ 50 & 51 \end{pmatrix}.$$
It's symmetric with the pattern $\begin{pmatrix}a&b\\b&a\end{pmatrix}$, whose eigenvectors are $(1,1)$ and $(1,-1)$ with eigenvalues $a+b$ and $a-b$:
$$\lambda_{\max} = 51+50 = 101, \qquad \lambda_{\min} = 51-50 = 1.$$
Both positive (so $A$ is SPD, and the singular values equal the eigenvalues), giving
$$\kappa_2(A) = \frac{101}{1} = 101.$$
Digit loss: $\log_{10} 101 \approx 2.004$, so solving $Ax=b$ in double precision costs about **2 digits** — you'd trust ~14 of 16. Mild, but already visible if you needed all of them.

**Example 2 (the bound is tight — perturb $b$, watch $x$ move).** Same $A$. Solve $Ax=b$ with $b = (101, 101)^\top$. Since $b$ points along the eigenvector $(1,1)$ (eigenvalue $101$), $x = A^{-1}b = (1,1)^\top$. Now nudge the data along the *soft* direction $(1,-1)$:
$$b' = (101.101,\ 100.899)^\top, \qquad \frac{\lVert \delta b\rVert}{\lVert b\rVert} = \frac{0.101\sqrt2}{101\sqrt2} = 0.001.$$
Solving again (that direction has eigenvalue $1$, so $A^{-1}$ *stretches* it by $1/1$ relative to how $A^{-1}$ shrinks the stiff direction by $1/101$):
$$x' = (1.101,\ 0.899)^\top, \qquad \frac{\lVert \delta x\rVert}{\lVert x\rVert} = \frac{0.101\sqrt2}{\sqrt2} = 0.101.$$
The amplification is $0.101 / 0.001 = 101 = \kappa(A)$ **exactly**: a 0.1% wiggle in $b$ became a 10% swing in $x$. The bound isn't pessimism — line up the perturbation with the smallest singular direction and you hit it dead on.

## Watch out

- You might think a matrix with only positive *entries* is positive definite — but SPD is about the eigenvalues / the quadratic form $x^\top A x$, not the sign of the entries. $\begin{pmatrix}1&2\\2&1\end{pmatrix}$ has all-positive entries yet an eigenvalue $-1$; it is *not* SPD (and Cholesky would demand $\sqrt{1-4}$). Conversely SPD matrices routinely have negative off-diagonal entries.
- You might think a small **determinant** means ill-conditioned — but $\kappa$ is scale-invariant while $\det$ is not. $\tfrac{1}{1000}I$ has determinant $10^{-3n}$ yet $\kappa = 1$ (perfectly conditioned). Conditioning is the *ratio* of singular values, not their size.
- You might think a "backward-stable" algorithm rescues an ill-conditioned problem — it doesn't. Cholesky and pivoted LU give you the exact answer to a *slightly perturbed* problem, but that perturbation is still amplified by $\kappa$. No algorithm can recover digits the problem has already thrown away; conditioning caps accuracy from above.

## One-liner

> For an SPD matrix, factor as $A=LL^\top$ at half the cost and never pivot — but no factorization can buy back the $\log_{10}\kappa(A)$ digits the condition number says you must lose.

## Problems

**P1 (🟢)** Factor the SPD matrix $A = \begin{pmatrix} 9 & 3 & -6\\ 3 & 5 & 0\\ -6 & 0 & 21 \end{pmatrix}$ by Cholesky, i.e. find lower-triangular $L$ with $A = LL^\top$. Confirm every quantity under a square root is positive.

**P2 (🟡)** The $2\times2$ Hilbert matrix is $H = \begin{pmatrix} 1 & \tfrac12\\ \tfrac12 & \tfrac13 \end{pmatrix}$ — the poster child of ill-conditioning. (a) Compute its eigenvalues and hence $\kappa_2(H)$. (b) Estimate how many correct digits you'd lose solving $Hx=b$ in double precision. (c) The $6\times6$ Hilbert matrix has $\kappa_2 \approx 1.5\times 10^{7}$; roughly how many digits survive there?

**P3 (🔴, optional)** Suppose you solve the least-squares normal equations $A^\top A\,x = A^\top b$ (Lesson [5.1](05-01-least-squares-normal-equations.md)) instead of working with $A$ directly. Using $\kappa_2(A) = \sigma_{\max}/\sigma_{\min}$ and the fact that the singular values of $A^\top A$ are the *squares* $\sigma_i^2$, show that $\kappa_2(A^\top A) = \kappa_2(A)^2$. If $\kappa_2(A) = 10^{5}$, how many digits does the normal-equations route cost you, and why is this the whole argument for using QR (Lesson [3.3](03-03-qr-factorization.md)) instead?

<details>
<summary>Solutions</summary>

**P1** Column by column:
- $l_{11} = \sqrt{9} = 3$.
- $l_{21} = 3/3 = 1$; $\;l_{31} = -6/3 = -2$.
- $l_{22} = \sqrt{5 - 1^2} = \sqrt{4} = 2$.
- $l_{32} = (0 - (-2)(1))/2 = 2/2 = 1$.
- $l_{33} = \sqrt{21 - (-2)^2 - 1^2} = \sqrt{21 - 4 - 1} = \sqrt{16} = 4$.

$$L = \begin{pmatrix} 3 & 0 & 0\\ 1 & 2 & 0\\ -2 & 1 & 4 \end{pmatrix}.$$
The radicands were $9, 4, 16$ — all positive, so $A$ is confirmed SPD. Check the $(3,3)$ entry of $LL^\top$: $(-2)^2 + 1^2 + 4^2 = 4+1+16 = 21\ \checkmark$, and $(3,1)$: $3\cdot(-2) = -6\ \checkmark$.

**P2** (a) For $H = \begin{pmatrix}1 & 1/2\\ 1/2 & 1/3\end{pmatrix}$: trace $= 1 + \tfrac13 = \tfrac43$, determinant $= \tfrac13 - \tfrac14 = \tfrac{1}{12}$. Eigenvalues solve $\lambda^2 - \tfrac43\lambda + \tfrac1{12} = 0$:
$$\lambda = \frac{\tfrac43 \pm \sqrt{\tfrac{16}{9} - \tfrac13}}{2} = \frac{\tfrac43 \pm \sqrt{\tfrac{13}{9}}}{2} = \frac{1.3333 \pm 1.2019}{2}.$$
So $\lambda_{\max} \approx 1.2676$, $\lambda_{\min} \approx 0.0657$, and (both positive)
$$\kappa_2(H) = \frac{1.2676}{0.0657} \approx 19.3.$$
(b) $\log_{10} 19.3 \approx 1.29$, so you lose **about 1–2 digits** — modest at $n=2$. (c) At $n=6$, $\log_{10}(1.5\times10^7) \approx 7.2$, so of ~16 double-precision digits only about $16 - 7 = 9$ survive. Hilbert conditioning explodes with $n$ (roughly like $e^{3.5 n}$): by $n=10$, $\kappa \approx 1.6\times10^{13}$ and barely 3 digits remain — which is exactly why fitting high-degree polynomials on equispaced points (a Hilbert-shaped problem) is a numerical disaster.

**P3** The singular values of $A$ are $\sigma_1 \ge \cdots \ge \sigma_n$. Since $A^\top A$ is symmetric with eigenvalues $\sigma_i^2$, those are also its singular values, so
$$\kappa_2(A^\top A) = \frac{\sigma_{\max}^2}{\sigma_{\min}^2} = \left(\frac{\sigma_{\max}}{\sigma_{\min}}\right)^2 = \kappa_2(A)^2.$$
Forming the normal equations **squares** the condition number. With $\kappa_2(A) = 10^5$ (lose ~5 digits working with $A$), the normal-equations matrix has $\kappa_2 = 10^{10}$, costing ~10 digits — you've thrown away 5 extra digits *before solving*, purely by choosing the wrong formulation. QR factorization solves the least-squares problem while keeping the conditioning at $\kappa_2(A)$, not its square; that avoided squaring is the entire reason QR (and SVD) beat the normal equations for least-squares.

</details>

## Flashback

**From Lesson 3.1 (LU & partial pivoting):** Consider $\begin{pmatrix} 10^{-4} & 1\\ 1 & 1 \end{pmatrix}\!\begin{pmatrix}x_1\\x_2\end{pmatrix} = \begin{pmatrix}1\\2\end{pmatrix}$, and suppose your machine keeps only **3 significant digits**. (a) Solve by Gaussian elimination *without* pivoting and report $x_1$. (b) Solve *with* partial pivoting (swap to put the larger-magnitude entry on the pivot). (c) The true solution is $x \approx (1.0001,\ 0.9999)$ — explain in one sentence why the tiny pivot wrecked part (a).

<details>
<summary>Solution</summary>

(a) **No pivoting.** Pivot $a_{11} = 10^{-4}$; multiplier $m = 1/10^{-4} = 10^{4}$.
- New $a_{22} = 1 - m\cdot 1 = 1 - 10^{4} = -9999 \to -1.00\times10^{4}$ (3 sig figs — the original $1$ is swamped and lost).
- New $b_2 = 2 - m\cdot 1 = 2 - 10^{4} = -9998 \to -1.00\times10^{4}$.
- Back-substitute: $x_2 = (-1.00\times10^4)/(-1.00\times10^4) = 1.00$, then $x_1 = (1 - 1\cdot x_2)/10^{-4} = (1 - 1.00)/10^{-4} = 0/10^{-4} = 0.$

Result $x_1 = 0$ — **100% wrong** (true value $\approx 1$).

(b) **Partial pivoting** swaps the rows so the pivot is $1$:
$$\begin{pmatrix} 1 & 1\\ 10^{-4} & 1 \end{pmatrix}\!\begin{pmatrix}x_1\\x_2\end{pmatrix} = \begin{pmatrix}2\\1\end{pmatrix}.$$
Multiplier $m = 10^{-4}$. New $a_{22} = 1 - 10^{-4} = 0.9999 \to 1.00$; new $b_2 = 1 - 2\cdot10^{-4} = 0.9998 \to 1.00$. Then $x_2 = 1.00$ and $x_1 = (2 - 1.00)/1 = 1.00$. Result $(1.00, 1.00)$ — correct to 3 sig figs.

(c) The tiny pivot forced a huge multiplier ($10^4$), so subtracting $m\cdot(\text{row 1})$ from row 2 buried row 2's own $O(1)$ entries below the 3-digit rounding threshold — catastrophic cancellation manufactured by elimination itself. Partial pivoting keeps every multiplier $\le 1$, so no entry ever gets swamped. (Note the *matrix* here is well-conditioned — $\kappa \approx 2.6$ — so this was pure algorithmic instability, not an ill-conditioned problem: exactly the conditioning-vs-stability split of Lesson [1.3](01-03-conditioning-vs-stability.md).)

</details>

## Connections

- **Backward:** Cholesky is LU (Lesson [3.1](03-01-lu-pivoting.md)) specialized to symmetry — you compute one triangle instead of two, and the SPD property is exactly what lets you drop the pivoting that stability demanded in the general case. Conditioning formalizes the digit-loss story that began with round-off and cancellation in Lessons [1.1](01-01-floating-point-roundoff.md)–[1.3](01-03-conditioning-vs-stability.md).
- **Forward:** Lesson [3.3](03-03-qr-factorization.md) builds an orthogonal factorization ($\kappa = 1$ factors that don't amplify error at all), the stable foundation for least-squares. The condition number reappears as the convergence-rate driver for iterative solvers (Lesson [3.4](03-04-iterative-methods.md)).
- **Sideways (least-squares):** the identity $\kappa(A^\top A) = \kappa(A)^2$ from P3 is the reason the normal equations (Lesson [5.1](05-01-least-squares-normal-equations.md)) are numerically dangerous and why regularized fits (ridge/lasso in [convex-optimization](../../convex-optimization/syllabus.md)) add a term precisely to pull $\kappa$ back down. SPD matrices are also where the whole story of positive-definiteness meets convex optimization: a quadratic $\tfrac12 x^\top A x - b^\top x$ has a unique minimizer exactly when $A$ is SPD, and Cholesky is how you solve for it.
