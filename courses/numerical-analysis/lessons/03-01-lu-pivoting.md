# Numerical Analysis · Lesson 3.1: LU Factorization & Pivoting

> ⏱ ~15 min · Module 3: Numerical Linear Algebra · Builds on: [Lesson 1.3](01-03-conditioning-vs-stability.md) (conditioning vs. stability), linear algebra · Unlocks: [Lesson 3.2](03-02-cholesky-conditioning.md) (Cholesky & the conditioning of $Ax=b$)

## Why this matters

Almost every serious computation eventually solves $Ax=b$: fitting a model, stepping a PDE, balancing an economy, training the linear layer of a network. You will never do this by computing $A^{-1}$ — that is slower and less accurate than what your computer actually does, which is **Gaussian elimination**, repackaged as a factorization $A=LU$. This lesson shows that the elimination you learned in high school *is* a matrix factorization, that it costs $\sim\tfrac{2}{3}n^3$ operations, and — the part that separates numerical analysts from everyone else — that whether the answer is trustworthy hinges on one seemingly cosmetic choice: which row you pivot on.

## The idea

Gaussian elimination clears out the entries below each diagonal one column at a time. To clear the entry in row $i$, column $k$, you subtract a multiple of row $k$: the multiplier is $\ell_{ik} = (\text{entry to kill})/(\text{pivot})$. Here is the observation that turns bookkeeping into structure: **if you save every multiplier $\ell_{ik}$ you ever used, they assemble into a lower-triangular matrix $L$, and the eliminated result is an upper-triangular $U$, with $A=LU$.** Elimination doesn't just solve one system — it factors $A$ once, and then any $b$ is cheap.

Why is that useful? A triangular system is trivial to solve — you unwind it one variable at a time. So $Ax=b$ becomes $LUx=b$, split into two triangular solves:

- **Forward substitution:** solve $Ly=b$ for $y$ (top-down: $y_1$ first).
- **Back substitution:** solve $Ux=y$ for $x$ (bottom-up: $x_n$ first).

The expensive part — the $\sim\tfrac{2}{3}n^3$ factorization — is done *once*; each new right-hand side costs only $\sim n^2$. That is why you factor, never invert.

Now the stability twist. The multiplier divides by the pivot. If a pivot is **zero**, elimination halts — that's a feasibility problem, and everyone notices it. The subtler killer is a pivot that is merely *tiny*: dividing by a small number produces a **huge** multiplier, which scales one row up enormously before subtracting it from another. When two large, nearly-equal numbers are subtracted, the original well-scaled data in the answer gets swamped by round-off — catastrophic cancellation, born from a choice of pivot. **Partial pivoting** fixes this: before eliminating a column, swap the row with the largest-magnitude candidate into the pivot slot, so every multiplier satisfies $|\ell_{ik}|\le 1$ and nothing gets blown up. Pivoting is not about avoiding division by zero — it is about *stability*.

## The formal version

**LU factorization.** For an $n\times n$ matrix $A$, Gaussian elimination (when it runs to completion) produces
$$A = LU,\qquad L=\begin{pmatrix}1&&&\\ \ell_{21}&1&&\\ \vdots&&\ddots&\\ \ell_{n1}&\cdots&\ell_{n,n-1}&1\end{pmatrix},\quad U=\begin{pmatrix}u_{11}&u_{12}&\cdots&u_{1n}\\ &u_{22}&&\vdots\\ &&\ddots&\\ &&&u_{nn}\end{pmatrix},$$
where $L$ is **unit lower-triangular** (ones on the diagonal) holding the multipliers $\ell_{ik}$, and $U$ is upper-triangular holding the eliminated rows. Its pivots are the $u_{kk}$.

*In words:* the numbers you multiply-and-subtract during elimination *are* the below-diagonal entries of $L$; the rows you're left with *are* $U$.

**Solving $Ax=b$.** Write $Ax = LUx = b$. Let $y=Ux$. Then:
$$\underbrace{Ly=b}_{\text{forward subst.}}\quad\Longrightarrow\quad \underbrace{Ux=y}_{\text{back subst.}}$$

*In words:* solve the easy lower-triangular system for $y$, then the easy upper-triangular system for $x$.

**Cost.** The factorization dominates:
$$\text{flops}(LU) = \tfrac{2}{3}n^3 + O(n^2),\qquad \text{each triangular solve} = n^2 + O(n).$$

*In words:* factoring is cubic; every subsequent solve with a new $b$ is only quadratic — so reuse $L,U$.

**Partial pivoting.** At column $k$, choose the row $p\ge k$ maximizing $|a_{pk}|$ and swap it into row $k$ before eliminating. Recording the swaps as a permutation matrix $P$ gives
$$PA = LU,\qquad |\ell_{ik}|\le 1\ \text{ for all } i,k.$$
Solve $PA\,x = Pb$ by the same two triangular solves.

*In words:* always pivot on the biggest available entry; then no multiplier ever exceeds 1 in magnitude, so no row gets amplified.

**Growth factor.** The quantity that measures how much elimination inflated the entries is
$$\rho \;=\; \frac{\displaystyle\max_{i,j,k}\bigl|a^{(k)}_{ij}\bigr|}{\displaystyle\max_{i,j}\bigl|a_{ij}\bigr|},$$
where $a^{(k)}_{ij}$ is the entry after step $k$. Under partial pivoting $\rho \le 2^{n-1}$, and the backward error of the computed solution is bounded by $O(\rho\,\varepsilon_{\text{mach}})$ with $\varepsilon_{\text{mach}}$ the machine epsilon.

*In words:* $\rho$ is the amplification factor; keep it small and LU is backward stable — the computed $\hat{x}$ solves a system $(A+\delta A)\hat{x}=b$ with $\delta A$ tiny relative to $A$. The $2^{n-1}$ bound is almost never approached in practice ($\rho$ is typically a modest constant), which is why partial pivoting is the default in every serious solver.

## Concrete instance

**A clean $3\times 3$ factored by elimination.** Take
$$A=\begin{pmatrix}2&1&1\\ 4&-6&0\\ -2&7&2\end{pmatrix}.$$

*Column 1* (pivot $u_{11}=2$). Kill the $4$: multiplier $\ell_{21}=4/2=2$, so $R_2\leftarrow R_2-2R_1=(0,-8,-2)$. Kill the $-2$: multiplier $\ell_{31}=-2/2=-1$, so $R_3\leftarrow R_3-(-1)R_1=(0,8,3)$.

*Column 2* (pivot $u_{22}=-8$). Kill the $8$: multiplier $\ell_{32}=8/(-8)=-1$, so $R_3\leftarrow R_3-(-1)R_2=(0,0,1)$.

Read off the factors — multipliers into $L$, remaining rows into $U$:
$$L=\begin{pmatrix}1&0&0\\ 2&1&0\\ -1&-1&1\end{pmatrix},\qquad U=\begin{pmatrix}2&1&1\\ 0&-8&-2\\ 0&0&1\end{pmatrix}.$$

Check $LU$: row 3 of $L$ times $U$ gives $-1(2,1,1)-1(0,-8,-2)+1(0,0,1)=(-2,7,2)$ ✓.

**Now solve $Ax=b$ with $b=(5,-2,9)^\top$.** Forward-substitute $Ly=b$:
$$y_1=5,\quad 2y_1+y_2=-2\Rightarrow y_2=-12,\quad -y_1-y_2+y_3=9\Rightarrow y_3=9-(-5-(-12))=2.$$
So $y=(5,-12,2)^\top$. Back-substitute $Ux=y$:
$$x_3=2,\quad -8x_2-2x_3=-12\Rightarrow x_2=1,\quad 2x_1+x_2+x_3=5\Rightarrow x_1=1.$$
Answer $x=(1,1,2)^\top$ — verify $A x$ recovers $(5,-2,9)$ ✓.

**Why a tiny pivot is a disaster — and how pivoting rescues it.** Take
$$A=\begin{pmatrix}\varepsilon&1\\ 1&1\end{pmatrix},\qquad b=\begin{pmatrix}1\\ 2\end{pmatrix},\qquad \varepsilon=10^{-4},$$
whose exact solution is $x=\bigl(\tfrac{1}{1-\varepsilon},\tfrac{1-2\varepsilon}{1-\varepsilon}\bigr)\approx(1,1)$. Suppose we compute in 3-significant-digit decimal arithmetic (a stand-in for finite precision).

*Naively, pivot on $\varepsilon$.* The multiplier is $\ell_{21}=1/\varepsilon=10^{4}$ — enormous. Then
$$u_{22}=\operatorname{fl}(1-10^4\cdot 1)=\operatorname{fl}(-9999)=-1.00\times10^4,\qquad \tilde b_2=\operatorname{fl}(2-10^4\cdot1)=\operatorname{fl}(-9998)=-1.00\times10^4.$$
The multiplier scaled row 1 up by $10^4$, so subtracting it **annihilated** the honest $1$'s and $2$'s. Back-substitution: $x_2=(-1.00\times10^4)/(-1.00\times10^4)=1$, then row 1 gives $\varepsilon x_1 = \operatorname{fl}(1-1\cdot x_2)=\operatorname{fl}(1-1)=0$, so $x_1=0$. We computed $x=(0,1)$ — the first component is $100\%$ wrong, despite $A$ being perfectly well-conditioned ($\kappa(A)\approx 2.6$). The instability came entirely from the *algorithm's* choice of pivot.

*Partial pivoting.* Since $|1|>|\varepsilon|$, swap rows first:
$$PA=\begin{pmatrix}1&1\\ \varepsilon&1\end{pmatrix},\quad Pb=\begin{pmatrix}2\\ 1\end{pmatrix},\qquad \ell_{21}=\varepsilon/1=10^{-4}.$$
Now $u_{22}=\operatorname{fl}(1-10^{-4})=1.00$ and $\tilde b_2=\operatorname{fl}(1-2\cdot10^{-4})=1.00$. Back-substitution: $x_2=1.00/1.00=1$, then $x_1=\operatorname{fl}(2-1)=1$. We recover $x=(1,1)$ — correct. The multiplier was tiny, so nothing was amplified and no digits were lost.

Same matrix, same precision, same problem: **pivoting is the only difference between a garbage answer and the right one.**

## Worked examples

**Example 1 (mechanical — factor and solve).** Solve $Ax=b$ with
$$A=\begin{pmatrix}1&1&1\\ 2&3&5\\ 4&6&8\end{pmatrix},\quad b=\begin{pmatrix}2\\ 3\\ 8\end{pmatrix}.$$
Elimination: $\ell_{21}=2,\ \ell_{31}=4$ give $R_2\to(0,1,3)$, $R_3\to(0,2,4)$; then $\ell_{32}=2$ gives $R_3\to(0,0,-2)$. So
$$L=\begin{pmatrix}1&0&0\\ 2&1&0\\ 4&2&1\end{pmatrix},\ U=\begin{pmatrix}1&1&1\\ 0&1&3\\ 0&0&-2\end{pmatrix}.$$
Forward ($Ly=b$): $y_1=2,\ y_2=3-2(2)=-1,\ y_3=8-4(2)-2(-1)=2$. Back ($Ux=y$): $x_3=2/(-2)=-1$, $x_2=-1-3(-1)=2$, $x_1=2-2-(-1)=1$. So $x=(1,2,-1)^\top$. (All pivots here are the largest in their column already, so partial pivoting would trigger no swaps.)

**Example 2 (why you'd care — factor once, solve many).** In practice you often solve $Ax=b$ for several right-hand sides — different loads on the same structure, different demand vectors in the same economy. The $\tfrac{2}{3}n^3$ factorization is spent *once*; each new $b$ is just two $O(n^2)$ triangular solves. Reuse the $L,U$ from the Concrete instance ($A=\begin{pmatrix}2&1&1\\4&-6&0\\-2&7&2\end{pmatrix}$) on the new right-hand side $b'=(4,2,1)^\top$:
$$Ly=b':\ y_1=4,\ y_2=2-2(4)=-6,\ y_3=1-(-1)(4)-(-1)(-6)=-1;\quad y=(4,-6,-1)^\top.$$
$$Ux=y:\ x_3=-1,\ -8x_2-2(-1)=-6\Rightarrow x_2=1,\ 2x_1+1+(-1)=4\Rightarrow x_1=2.$$
So $x'=(2,1,-1)^\top$ — obtained without touching $A$ again. Ten right-hand sides cost $\tfrac{2}{3}n^3+10n^2$, not $10\cdot\tfrac{2}{3}n^3$.

## Watch out

- You might think a pivot only matters when it's exactly zero — but a *small* pivot is the real hazard. Exact zero is a visible failure (elimination stops); a tiny pivot silently manufactures huge multipliers and destroys accuracy, as the $\varepsilon$-example showed. Partial pivoting guards against both at once.
- You might think pivoting is needed because $A$ is ill-conditioned — but the $\varepsilon$-matrix above has $\kappa(A)\approx 2.6$, thoroughly well-conditioned. Conditioning is a property of the *problem*; the need to pivot is a property of the *algorithm*. A well-conditioned problem can still be wrecked by an unstable elimination order (the Lesson 1.3 distinction, made concrete).
- You might think to solve $Ax=b$ by forming $A^{-1}$ and multiplying — but computing $A^{-1}$ costs $\sim n^3$ *plus* extra round-off, and every use of it is a full matrix–vector product. LU + two triangular solves is cheaper and more accurate. If you catch yourself writing `inv(A)*b`, write a solve instead.
- You might think $L$ stores the "eliminated" values — but $L$ stores the **multipliers** $\ell_{ik}$ (what you multiplied by), while $U$ stores the eliminated rows. Mixing these up is the single most common LU bug.

## One-liner

> Gaussian elimination *is* the factorization $A=LU$; pivoting on the largest entry keeps every multiplier $\le 1$, and that — not avoiding an exact zero — is what keeps the answer trustworthy.

## Problems

**P1 (🟢)** Factor $A=\begin{pmatrix}1&1&1\\ 3&5&6\\ -2&2&7\end{pmatrix}$ as $A=LU$ by elimination (no row swaps needed), then solve $Ax=b$ for $b=(6,20,10)^\top$ using forward and back substitution. Report $L$, $U$, and $x$.

**P2 (🟡)** Consider $A=\begin{pmatrix}0.001&2\\ 1&1\end{pmatrix},\ b=\begin{pmatrix}4\\ 3\end{pmatrix}$, and suppose all arithmetic is rounded to **3 significant digits**. (a) Solve *without* pivoting (pivot on $0.001$). (b) Solve *with* partial pivoting. (c) The exact solution is $x\approx(1.0005,\,1.9990)$. Which method got it, and in one sentence why?

**P3 (🔴, optional)** Growth factor. Run partial-pivoting elimination on
$$A=\begin{pmatrix}1&0&1\\ -1&1&1\\ -1&-1&1\end{pmatrix}.$$
(a) Confirm no row swaps occur (each pivot is already largest in magnitude in its column). (b) Carry the elimination out and find the largest-magnitude entry that appears anywhere during the process. (c) Compute the growth factor $\rho$ and compare it to the partial-pivoting bound $2^{n-1}$. What does this matrix demonstrate about that bound?

<details>
<summary>Solutions</summary>

**P1** Column 1 (pivot $1$): $\ell_{21}=3,\ \ell_{31}=-2$. $R_2\to(0,\,5-3,\,6-3)=(0,2,3)$; $R_3\to(0,\,2+2,\,7+2)=(0,4,9)$. Column 2 (pivot $2$): $\ell_{32}=4/2=2$. $R_3\to(0,0,\,9-2\cdot3)=(0,0,3)$. So
$$L=\begin{pmatrix}1&0&0\\ 3&1&0\\ -2&2&1\end{pmatrix},\qquad U=\begin{pmatrix}1&1&1\\ 0&2&3\\ 0&0&3\end{pmatrix}.$$
Forward $Ly=b=(6,20,10)$: $y_1=6$; $y_2=20-3(6)=2$; $y_3=10-(-2)(6)-2(2)=10+12-4=18$. So $y=(6,2,18)$. Back $Ux=y$: $x_3=18/3=6$; $2x_2+3(6)=2\Rightarrow x_2=(2-18)/2=-8$; $x_1+(-8)+6=6\Rightarrow x_1=8$. So $x=(8,-8,6)^\top$. Check row 2: $3(8)+5(-8)+6(6)=24-40+36=20$ ✓.

**P2** (a) *No pivoting.* Multiplier $\ell_{21}=1/0.001=1000$. $u_{22}=\operatorname{fl}(1-1000\cdot2)=\operatorname{fl}(-1999)=-2.00\times10^3$; $\tilde b_2=\operatorname{fl}(3-1000\cdot4)=\operatorname{fl}(-3997)=-4.00\times10^3$. Back: $x_2=(-4.00\times10^3)/(-2.00\times10^3)=2.00$; row 1: $0.001\,x_1=\operatorname{fl}(4-2\cdot2.00)=\operatorname{fl}(4-4)=0\Rightarrow x_1=0$. Result $x=(0,\,2.00)$ — $x_1$ is completely wrong.
(b) *Partial pivoting.* $|1|>|0.001|$, so swap: $\begin{pmatrix}1&1\\0.001&2\end{pmatrix},\ b=(3,4)$. Multiplier $\ell_{21}=0.001$. $u_{22}=\operatorname{fl}(2-0.001\cdot1)=\operatorname{fl}(1.999)=2.00$; $\tilde b_2=\operatorname{fl}(4-0.001\cdot3)=\operatorname{fl}(3.997)=4.00$. Back: $x_2=4.00/2.00=2.00$; $x_1=\operatorname{fl}(3-1\cdot2.00)=1.00$. Result $x=(1.00,\,2.00)$.
(c) Pivoting got it (matching $(1.0005,1.9990)$ to 3 digits); the tiny pivot $0.001$ produced a multiplier of $1000$ that amplified row 1 until the honest data was lost to rounding, and swapping to the larger pivot kept the multiplier at $0.001$ so nothing was amplified.

**P3** (a) Column 1: pivot $|1|$ vs. below-diagonal $|-1|,|-1|$ — all magnitude $1$, so the diagonal is (tie-)largest; no swap. After eliminating: $\ell_{21}=-1,\ \ell_{31}=-1$, giving $R_2\to(0,\,1,\,1+1)=(0,1,2)$, $R_3\to(0,\,-1,\,1+1)=(0,-1,2)$. Column 2: pivot $|1|$ vs. below $|-1|$ — again largest is (tie) the diagonal; no swap. $\ell_{32}=-1$: $R_3\to(0,0,\,2+2)=(0,0,4)$.
(b) The largest-magnitude entry appearing anywhere is the final $u_{33}=4$; it doubled at each of the two steps ($1\to2\to4$).
(c) Original max entry $=1$, so $\rho=4/1=4$. The bound is $2^{n-1}=2^{3-1}=4$. This matrix **attains** the partial-pivoting bound exactly — proof that the $2^{n-1}$ worst case is real, not merely conservative. What makes partial pivoting safe in practice is that such matrices are vanishingly rare among the systems that actually arise; typical $\rho$ is a small constant, essentially independent of $n$.

</details>

## Flashback

**From Lesson 1.3 (conditioning vs. stability):** The problem of evaluating $f(x)=\ln x$ has *relative condition number* $\kappa_f(x)=\bigl|\tfrac{x f'(x)}{f(x)}\bigr|$. (a) Derive $\kappa_f(x)$. (b) Compare the conditioning at $x=1.01$ and at $x=100$ — where is evaluating $\ln$ well-conditioned? (c) A **backward stable** algorithm for $\ln$ returns $\hat f=\ln(\tilde x)$ for some $\tilde x$ with relative backward error $|\tilde x-x|/|x|\le 5\varepsilon_{\text{mach}}$. Bound the *relative forward error* $|\hat f - f(x)|/|f(x)|$ at $x=1.01$.

<details>
<summary>Solution</summary>

(a) $f'(x)=1/x$, so $\kappa_f(x)=\bigl|\tfrac{x\cdot(1/x)}{\ln x}\bigr|=\dfrac{1}{|\ln x|}$.

(b) At $x=1.01$: $\ln(1.01)\approx 0.00995$, so $\kappa_f\approx 100.5$ — badly conditioned. At $x=100$: $\ln 100\approx 4.605$, so $\kappa_f\approx 0.217$ — well-conditioned. Evaluating $\ln$ is delicate near $x=1$, where $\ln x\to 0$ and $\kappa_f\to\infty$; it is comfortable for $x$ far from $1$.

(c) The governing rule from Lesson 1.3: for a backward stable algorithm, relative forward error $\lesssim \kappa_f\cdot(\text{relative backward error})$. At $x=1.01$ this gives
$$\frac{|\hat f-f(x)|}{|f(x)|}\ \lesssim\ \kappa_f(1.01)\cdot 5\varepsilon_{\text{mach}}\ \approx\ 100.5\cdot 5\varepsilon_{\text{mach}}\ \approx\ 502\,\varepsilon_{\text{mach}}.$$
Even a perfectly backward stable algorithm inherits the problem's ill-conditioning: near $x=1$ the forward error is amplified by $\sim\!100$. Stability of the algorithm cannot rescue a poorly conditioned problem — exactly the separation this course keeps returning to, and the reason LU pivots on stability while $\kappa(A)$ (Lesson 3.2) measures the problem.

</details>

## Connections

- **Backward:** this makes the Lesson 1.3 slogan physical — the $\varepsilon$-matrix is a *well-conditioned problem* wrecked by an *unstable algorithm*, and partial pivoting is what restores backward stability. The digit-loss from a huge multiplier is the catastrophic cancellation of Lesson 1.2, triggered by an algorithmic choice.
- **Forward:** [Lesson 3.2](03-02-cholesky-conditioning.md) specializes LU to symmetric positive-definite matrices — Cholesky $A=LL^\top$, which needs *no* pivoting for stability — and quantifies how errors in $A,b$ propagate through the matrix condition number $\kappa(A)$. [Lesson 3.3](03-03-qr-factorization.md) then trades elimination for orthogonalization (QR) when even pivoted LU isn't stable enough.
- **Sideways (least-squares → [convex-optimization](../../convex-optimization/syllabus.md)):** LU/Cholesky is the engine that solves the *normal equations* $A^\top A\,x=A^\top b$ behind least-squares regression and the KKT/quadratic-programming systems of `convex-optimization` — though [Lesson 5.1](05-01-least-squares-normal-equations.md) will show why forming $A^\top A$ squares the condition number and QR is preferred.
- **Sideways (iterative solvers):** when $A$ is huge and sparse, forming $L,U$ fills them in and becomes too expensive; [Lesson 3.4](03-04-iterative-methods.md) abandons factorization entirely for fixed-point iteration (the same contraction-mapping idea as [Lesson 1.4](01-04-bisection-fixed-point.md)).
