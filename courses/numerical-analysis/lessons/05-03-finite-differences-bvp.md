# Numerical Analysis · Lesson 5.3: Finite Differences for BVPs

> ⏱ ~15 min · Module 5: Least-Squares & a Taste of PDEs · Builds on: [Lesson 2.3 (numerical differentiation)](02-03-numerical-differentiation.md), [Lesson 3.1 (LU & pivoting)](03-01-lu-pivoting.md) · Unlocks: [Lesson 5.4 (the heat equation)](05-04-heat-equation-explicit-implicit.md)

## Why this matters

A differential equation with conditions at *both* ends of an interval — a steady temperature profile in a rod held at fixed temperatures, the deflection of a loaded beam pinned at both supports, the equilibrium of almost any 1-D continuum — cannot be solved the way you solved initial-value problems in Module 4. There you knew everything at $x=0$ and marched forward; here you know a little at $x=0$ and a little at $x=1$ and *nothing* in between, so there is no direction to march. The fix is one of the most productive ideas in all of numerical analysis: stop treating the solution as a function and treat it as a *vector of values on a grid*. Replace the derivative with the difference stencil you already built in [Lesson 2.3](02-03-numerical-differentiation.md), and the differential equation collapses into a linear system $A\mathbf u=\mathbf f$ — which Module 3 taught you to solve. This lesson is where the whole course converges: calculus becomes linear algebra.

## The idea

Take the model problem

$$-u''(x) = f(x)\quad\text{on }[0,1],\qquad u(0)=\alpha,\ \ u(1)=\beta.$$

$u$ is the unknown function (say, temperature), $f$ a known source, and $\alpha,\beta$ the fixed end values. The conditions live at **both** ends — that is what makes it a *boundary-value problem* (BVP), not an initial-value problem. You can't integrate forward from $x=0$ because you don't know $u'(0)$; you only know $u(0)$ and, one boundary away, $u(1)$.

So do something different. Chop $[0,1]$ into $n+1$ equal pieces of width $h=\tfrac{1}{n+1}$, giving grid points $x_i = ih$ for $i=0,1,\dots,n+1$. The two ends $x_0,x_{n+1}$ are *known* ($u_0=\alpha$, $u_{n+1}=\beta$); the $n$ interior values $u_1,\dots,u_n$ are the unknowns. Now demand that the differential equation hold — not everywhere, but at each interior grid point — and replace the second derivative there with the three-point central stencil. Each interior node contributes exactly one linear equation in its own value and its two neighbours' values. Stack those $n$ equations and you have a square linear system: $n$ equations, $n$ unknowns. The two boundary values aren't unknowns, so wherever they appear they get moved to the right-hand side. Solve the system and you have the solution, sampled on the grid.

Because each equation touches only a node and its immediate neighbours, the matrix is **tridiagonal** — nonzero only on the diagonal and the two adjacent diagonals. That structure is a gift: a tridiagonal system of size $n$ solves in $O(n)$ work, not the $O(n^3)$ of general elimination.

## The formal version

**The stencil (callback to [2.3](02-03-numerical-differentiation.md)).** The three-point central difference for the second derivative is

$$u''(x_i) = \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} - \frac{h^2}{12}u^{(4)}(\xi_i),\qquad \xi_i\in(x_{i-1},x_{i+1}),$$

writing $u_i$ for the exact $u(x_i)$. *In words:* the values weighted $(1,-2,1)$ and divided by $h^2$ give the curvature, with an error that shrinks like $h^2$.

**Discretize.** Drop the error term and impose $-u''=f$ at each interior node $x_i$, $i=1,\dots,n$:

$$\frac{-u_{i-1} + 2u_i - u_{i+1}}{h^2} = f_i,\qquad f_i := f(x_i).$$

*In words:* one algebraic equation per interior grid point, coupling each unknown only to its two neighbours.

**Fold in the boundaries and assemble.** For the first interior node ($i=1$) the term $u_{i-1}=u_0$ is the known $\alpha$; for the last ($i=n$) the term $u_{i+1}=u_{n+1}$ is the known $\beta$. Move them to the right. Multiplying through by $h^2$ is optional; keeping the $1/h^2$ out front, the system is $A\mathbf u = \mathbf b$ with

$$A = \frac{1}{h^2}\begin{pmatrix} 2 & -1 & & & \\ -1 & 2 & -1 & & \\ & \ddots & \ddots & \ddots & \\ & & -1 & 2 & -1 \\ & & & -1 & 2 \end{pmatrix},\quad \mathbf u=\begin{pmatrix}u_1\\u_2\\ \vdots\\ u_{n-1}\\u_n\end{pmatrix},\quad \mathbf b = \begin{pmatrix} f_1 + \alpha/h^2 \\ f_2 \\ \vdots \\ f_{n-1} \\ f_n + \beta/h^2 \end{pmatrix}.$$

*In words:* the $(1,-2,1)$ stencil stamps a $-1,2,-1$ into each row, so $A$ is tridiagonal; the boundary values appear only in the first and last entries of the right-hand side.

This $A$ is **symmetric positive definite** — its eigenvalues are $\frac{2}{h^2}\big(1-\cos\tfrac{k\pi}{n+1}\big)>0$ for $k=1,\dots,n$ — so, exactly as in [Lesson 3.2](03-02-cholesky-conditioning.md), the elimination never needs pivoting for stability. Which is what lets us use the stripped-down solver below.

**Solve cheaply: the Thomas algorithm.** This is Gaussian elimination ([Lesson 3.1](03-01-lu-pivoting.md)) with every zero exploited. Write the tridiagonal rows as $a_i u_{i-1} + d_i u_i + c_i u_{i+1} = b_i$ (here $a_i=c_i=-1/h^2$, $d_i=2/h^2$). Sweep forward eliminating each sub-diagonal, then back-substitute:

$$c'_1=\frac{c_1}{d_1},\quad b'_1=\frac{b_1}{d_1};\qquad c'_i=\frac{c_i}{d_i-a_i c'_{i-1}},\quad b'_i=\frac{b_i-a_i b'_{i-1}}{d_i-a_i c'_{i-1}};$$
$$u_n=b'_n,\qquad u_i = b'_i - c'_i\,u_{i+1}\ \ (i=n-1,\dots,1).$$

*In words:* one forward pass turns the matrix into upper-bidiagonal, one backward pass reads off the answer — total cost linear in $n$, versus $O(n^3)$ for a dense solve.

**Consistency and convergence.** The scheme is **consistent** of order 2: substituting the *exact* solution into the discrete operator leaves a residual (the *local truncation error*) $\tau_i = \frac{h^2}{12}u^{(4)}(\xi_i) = O(h^2)$ — precisely the stencil error above. Consistency alone isn't convergence; you also need the discrete problem to be **stable**, meaning $\|A^{-1}\|$ stays bounded as $h\to 0$. Here it does: the smallest eigenvalue of $A$ tends to $\pi^2$, so $\|A^{-1}\|_2\to 1/\pi^2$. The global error then obeys $A\mathbf e = \boldsymbol\tau$, giving $\|\mathbf e\|\le \|A^{-1}\|\,\|\boldsymbol\tau\| = O(h^2)$. *In words:* **consistency + stability ⟹ convergence** (the Lax principle) — halving $h$ quarters the error.

## Picture

The grid, the stencil that couples each interior node to its neighbours, the fixed boundary nodes, and the tridiagonal system all in one view:

![A finite-difference grid on the interval from 0 to 1 with five nodes; the two end nodes are filled and fixed to the boundary values alpha and beta, the three interior nodes are open unknowns, and the three-point stencil with weights plus one, minus two, plus one is highlighted on the middle interior node. Below, the resulting three-by-three tridiagonal matrix system A u equals b is drawn, with the boundary values folded into the first and last right-hand-side entries.](assets/05-03-fig1.svg)

Every interior node emits one row of $A$; the stencil's $(1,-2,1)$ is exactly the $-1,2,-1$ band. The boundary nodes are not unknowns — they leave the matrix and reappear on the right.

## Worked examples

**Example 1 (mechanical — assemble and solve a $3\times 3$ system).** Solve $-u''=-2$ on $[0,1]$ with $u(0)=1$, $u(1)=2$, using $n=3$ interior nodes, so $h=\tfrac14$, $h^2=\tfrac1{16}$. Grid: $x_0=0,\ x_1=\tfrac14,\ x_2=\tfrac12,\ x_3=\tfrac34,\ x_4=1$. The source is constant, $f_i=-2$, so $h^2 f_i = -\tfrac18$.

Multiply each equation by $h^2$ to get the clean integer form $-u_{i-1}+2u_i-u_{i+1}=h^2f_i$, and fold in $u_0=\alpha=1$, $u_4=\beta=2$:

$$\begin{aligned} i=1:\quad & 2u_1 - u_2 = -\tfrac18 + \alpha = -\tfrac18 + 1 = \tfrac78,\\ i=2:\quad & -u_1 + 2u_2 - u_3 = -\tfrac18,\\ i=3:\quad & -u_2 + 2u_3 = -\tfrac18 + \beta = -\tfrac18 + 2 = \tfrac{15}{8}. \end{aligned}$$

So $T\mathbf u = \mathbf d$ with $T=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, $\mathbf d = (0.875,\,-0.125,\,1.875)^\top$. Run Thomas ($a_i=c_i=-1$, $d_i=2$):

- Forward: $c'_1 = -1/2 = -0.5$, $b'_1 = 0.875/2 = 0.4375$.
- $i=2$: pivot $2-(-1)(-0.5)=1.5$; $c'_2=-1/1.5=-0.6667$; $b'_2=\frac{-0.125-(-1)(0.4375)}{1.5}=\frac{0.3125}{1.5}=0.20833$.
- $i=3$: pivot $2-(-1)(-0.6667)=1.3333$; $b'_3=\frac{1.875-(-1)(0.20833)}{1.3333}=\frac{2.08333}{1.3333}=1.5625$.
- Back-sub: $u_3=1.5625$; $u_2 = 0.20833-(-0.6667)(1.5625)=1.25$; $u_1=0.4375-(-0.5)(1.25)=1.0625$.

**Compare to exact.** $-u''=-2\Rightarrow u''=2\Rightarrow u(x)=x^2+c_1x+c_2$; the boundaries give $c_2=1$, $c_1=0$, so $u(x)=x^2+1$. At the nodes: $u(\tfrac14)=1.0625$, $u(\tfrac12)=1.25$, $u(\tfrac34)=1.5625$ — the numerical solution is **exact, to the last digit**. No accident: $u$ is a quadratic, so $u^{(4)}\equiv 0$, the truncation term $\frac{h^2}{12}u^{(4)}$ vanishes, and the stencil reproduces polynomials of degree $\le 3$ perfectly.

**Example 2 (why you'd care — watch $O(h^2)$ convergence).** Now a problem with genuine error. Solve $-u''=\pi^2\sin(\pi x)$ on $[0,1]$ with $u(0)=u(1)=0$; the exact solution is $u(x)=\sin(\pi x)$ (check: $-u''=\pi^2\sin\pi x$ ✓). Compare two grids.

*Coarse, $h=\tfrac12$ ($n=1$):* one interior node $x_1=\tfrac12$. With $u_0=u_2=0$: $\frac{2u_1}{h^2}=f_1=\pi^2$, so $u_1=\frac{h^2\pi^2}{2}=\frac{\pi^2}{8}=1.2337$. Exact $u(\tfrac12)=1$, so the center error is $0.2337$.

*Finer, $h=\tfrac14$ ($n=3$):* $f_i=\pi^2\sin(\pi x_i)$ gives $h^2 f_1 = h^2 f_3 = \frac{\pi^2}{16}\cdot\frac{\sqrt2}{2}=0.43618$ and $h^2 f_2 = \frac{\pi^2}{16}=0.61685$. Thomas on the same $T$ as Example 1 with $\mathbf d=(0.43618,\,0.61685,\,0.43618)$:

- $b'_1 = 0.21809$; pivot $1.5$, $b'_2=\frac{0.61685+0.21809}{1.5}=0.55663$; pivot $1.3333$, $b'_3=\frac{0.43618+0.55663}{1.3333}=0.74461$.
- Back-sub: $u_3=0.74461$, $u_2=0.55663+0.6667(0.74461)=1.05303$, $u_1=0.74461$ (by symmetry).

Center error now $|1.05303-1|=0.05303$. The error dropped by $0.2337/0.05303 = 4.4\times$ when $h$ was halved — the factor-of-4 signature of $O(h^2)$ (it slightly overshoots 4 because $h=\tfrac12$ is too coarse to be in the asymptotic regime; the ratio tightens to exactly 4 as you refine). And the leading-order prediction $\frac{h^2}{12}u^{(4)} = \frac{h^2}{12}\pi^4\sin(\pi x)$, whose accumulated effect at the center is $\frac{h^2}{12}\pi^2$, gives $0.0514$ at $h=\tfrac14$ — matching the observed $0.0530$. Consistency, stability, and second-order convergence, all confirmed on paper.

## Watch out

- You might think you can just march a BVP forward like an ODE from Module 4 — but you don't know $u'(0)$, so there's nothing to integrate. (The "shooting method" *guesses* $u'(0)$ and iterates to hit $u(1)=\beta$; the finite-difference approach here sidesteps guessing entirely by solving all nodes at once.)
- You might forget the boundary contributions, or drop them into the wrong rows — but $\alpha$ enters *only* the first equation and $\beta$ *only* the last, each scaled by $1/h^2$ (or added as $\alpha,\beta$ if you cleared the $h^2$). Miss them and you're silently solving a different problem with the wrong ends.
- You might think a bigger, denser matrix means a slower solve — but a tridiagonal system is $O(n)$, not $O(n^3)$. Calling a general LU routine on it wastes that structure; always use a banded/tridiagonal solver. (And do **not** form $A^{-1}$: it is dense even though $A$ is not.)
- You might read "$O(h^2)$ truncation error" as "the answer is accurate to $h^2$" regardless — but if $u^{(4)}$ is large (a sharp interior layer), the constant $\frac{1}{12}u^{(4)}$ dominates and a coarse grid can still be badly wrong. Order is a *rate*, not a guarantee at a given $h$.

## One-liner

> Sample the domain, replace $u''$ by the $(1,-2,1)/h^2$ stencil at every interior node, push the boundary values to the right-hand side, and a boundary-value ODE becomes a tridiagonal $A\mathbf u=\mathbf f$ you solve in $O(n)$ — converging at $O(h^2)$ because the scheme is consistent *and* stable.

## Problems

**P1 (🟢)** Solve $-u''=2$ on $[0,1]$ with $u(0)=0$, $u(1)=0$, using $n=2$ interior nodes ($h=\tfrac13$). Assemble the $2\times2$ tridiagonal system (fold in the boundaries), solve it, and compare to the exact solution $u(x)=x(1-x)$. Explain in one sentence why the grid values match the exact ones exactly.

**P2 (🟡)** For the general problem $-u''=f$ on $[0,1]$, $u(0)=\alpha$, $u(1)=\beta$, on a uniform grid with $n$ interior nodes, write out the full system $A\mathbf u=\mathbf b$: give the matrix $A$ and *every* component of $\mathbf b$, showing exactly where $\alpha$ and $\beta$ enter. Then state why $A$ being symmetric positive definite means the Thomas algorithm needs no pivoting (one sentence, linking to [Lesson 3.2](03-02-cholesky-conditioning.md)).

**P3 (🔴, optional)** *Consistency + stability ⟹ convergence.* (a) Using the stencil expansion in "The formal version," show that substituting the exact solution into the discrete equations leaves a residual $\tau_i=\frac{h^2}{12}u^{(4)}(\xi_i)$, and hence that the global error $\mathbf e=\mathbf u_{\text{numerical}}-\mathbf u_{\text{exact}}$ satisfies $A\mathbf e = -\boldsymbol\tau$. (b) Given that $\|A^{-1}\|_2$ stays bounded as $h\to0$ (it tends to $1/\pi^2$), conclude $\|\mathbf e\|=O(h^2)$. (c) Explain why a solution that is a polynomial of degree $\le 3$ is captured with *zero* error on any grid.

<details>
<summary>Solutions</summary>

**P1** Grid: $x_0=0,\ x_1=\tfrac13,\ x_2=\tfrac23,\ x_3=1$, $h=\tfrac13$, $h^2=\tfrac19$. Source $f=2$, so $h^2 f_i=\tfrac29$. Boundaries are $0$, so nothing extra folds in. The integer-form equations $-u_{i-1}+2u_i-u_{i+1}=h^2 f_i$ are

$$2u_1-u_2 = \tfrac29,\qquad -u_1+2u_2=\tfrac29,\qquad\text{i.e. }\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\begin{pmatrix}u_1\\u_2\end{pmatrix}=\begin{pmatrix}2/9\\2/9\end{pmatrix}.$$

By symmetry $u_1=u_2=u$, and $2u-u=\tfrac29$ gives $u_1=u_2=\tfrac29\approx0.2222$. Exact: $u(\tfrac13)=\tfrac13\cdot\tfrac23=\tfrac29$ and $u(\tfrac23)=\tfrac23\cdot\tfrac13=\tfrac29$ — an exact match. Reason: $u(x)=x-x^2$ is a quadratic, so $u^{(4)}\equiv0$ and the truncation term $\frac{h^2}{12}u^{(4)}$ vanishes; the $(1,-2,1)$ stencil is exact for polynomials of degree $\le3$.

**P2** Multiplying the $i$-th interior equation by $h^2$ was optional; keeping the operator scaled by $1/h^2$,

$$A=\frac{1}{h^2}\begin{pmatrix}2&-1&&&\\-1&2&-1&&\\&\ddots&\ddots&\ddots&\\&&-1&2&-1\\&&&-1&2\end{pmatrix}\in\mathbb{R}^{n\times n},\qquad b_i=\begin{cases} f_1+\alpha/h^2, & i=1,\\ f_i, & 2\le i\le n-1,\\ f_n+\beta/h^2, & i=n. \end{cases}$$

$\alpha$ appears only in $b_1$ (from the $u_0$ term in the first node's stencil) and $\beta$ only in $b_n$ (from $u_{n+1}$ in the last), each divided by $h^2$. $A$ is symmetric ($A=A^\top$) and positive definite (eigenvalues $\frac{2}{h^2}(1-\cos\frac{k\pi}{n+1})>0$). As in [Lesson 3.2](03-02-cholesky-conditioning.md), an SPD matrix has an $LU$/Cholesky factorization with no zero (or dangerously small) pivots — every pivot stays positive — so elimination is stable **without** row interchanges, which is exactly what licenses the pivot-free Thomas sweep.

**P3** (a) Let $\hat u_i=u(x_i)$ be the exact solution sampled on the grid. The stencil expansion gives
$$\frac{-\hat u_{i-1}+2\hat u_i-\hat u_{i+1}}{h^2} = -u''(x_i) - \frac{h^2}{12}u^{(4)}(\xi_i) = f_i - \tau_i,\qquad \tau_i=\frac{h^2}{12}u^{(4)}(\xi_i),$$
i.e. $A\hat{\mathbf u} = \mathbf f - \boldsymbol\tau$. The numerical solution satisfies $A\mathbf u_{\text{num}}=\mathbf f$ exactly. Subtract: $A(\mathbf u_{\text{num}}-\hat{\mathbf u}) = \boldsymbol\tau$, so with $\mathbf e=\mathbf u_{\text{num}}-\hat{\mathbf u}$ we get $A\mathbf e=\boldsymbol\tau$ (equivalently $A\mathbf e=-\boldsymbol\tau$ for $\mathbf e=\hat{\mathbf u}-\mathbf u_{\text{num}}$ — same magnitude).

(b) Then $\mathbf e = A^{-1}\boldsymbol\tau$, so $\|\mathbf e\|_2 \le \|A^{-1}\|_2\,\|\boldsymbol\tau\|_2$. Each $\tau_i=\frac{h^2}{12}u^{(4)}(\xi_i)$ is $O(h^2)$, so $\|\boldsymbol\tau\|_2 \le \frac{h^2}{12}\max|u^{(4)}|\cdot\sqrt{n}$; the $\sqrt n$ is absorbed by using the scaled ($\propto\!\sqrt h$) discrete norm, leaving $\|\boldsymbol\tau\|=O(h^2)$. Since $\|A^{-1}\|_2\to 1/\pi^2$ is bounded independent of $h$ (stability), $\|\mathbf e\| \le \frac{1}{\pi^2}\cdot\frac{h^2}{12}\max|u^{(4)}| + o(h^2) = O(h^2)$. Consistency ($\boldsymbol\tau\to0$) plus stability ($\|A^{-1}\|$ bounded) gives convergence — the Lax principle in miniature.

(c) If $\deg u\le 3$ then $u^{(4)}\equiv0$, so every $\tau_i=0$, hence $\boldsymbol\tau=\mathbf 0$ and $\mathbf e=A^{-1}\mathbf 0=\mathbf 0$: the numerical solution equals the exact one at every node, on any grid — the mechanism behind the exact matches in Example 1 and P1.

</details>

## Flashback

**From [Lesson 2.3](02-03-numerical-differentiation.md) (central differences & truncation order):** Estimate $f'(0)$ for $f(x)=e^x$ (true value $1$) with the central difference $\frac{f(h)-f(-h)}{2h}$ at $h=0.2$ and again at $h=0.1$. Report each error, verify the error shrinks by the factor $O(h^2)$ predicts when $h$ is halved, and check the size against the leading truncation term $\frac{h^2}{6}f'''(0)$.

<details>
<summary>Solution</summary>

Use $e^{0.2}=1.2214028$, $e^{-0.2}=0.8187308$, $e^{0.1}=1.1051709$, $e^{-0.1}=0.9048374$.

- $h=0.2$: $\dfrac{1.2214028-0.8187308}{0.4}=\dfrac{0.4026720}{0.4}=1.0066800$, error $+0.0066800$.
- $h=0.1$: $\dfrac{1.1051709-0.9048374}{0.2}=\dfrac{0.2003335}{0.2}=1.0016675$, error $+0.0016675$.

Halving $h$ cut the error by $0.0066800/0.0016675=4.006$ — the factor-of-4 hallmark of $O(h^2)$. Leading term: $f'''(0)=e^0=1$, so $\frac{h^2}{6}f'''(0)$ predicts $\frac{0.04}{6}=0.006667$ at $h=0.2$ and $\frac{0.01}{6}=0.001667$ at $h=0.1$ — both matching the observed errors to three digits. This is the very stencil-error control that makes the BVP scheme in this lesson second-order accurate.

</details>

## Connections

- **Backward:** the discretization *is* [Lesson 2.3](02-03-numerical-differentiation.md)'s $(1,-2,1)$ second-derivative stencil, applied at every interior node; and solving $A\mathbf u=\mathbf f$ is [Lesson 3.1](03-01-lu-pivoting.md)'s Gaussian elimination specialized to a tridiagonal (the Thomas algorithm), with the no-pivoting guarantee coming from the SPD structure of [Lesson 3.2](03-02-cholesky-conditioning.md).
- **Forward:** [Lesson 5.4](05-04-heat-equation-explicit-implicit.md) adds a time axis. The heat equation $u_t = u_{xx}$ discretizes this *same* spatial stencil at each time level (the "method of lines"), turning the BVP matrix $A$ into the engine of an evolving PDE — and the implicit time-stepping there solves a tridiagonal system just like this one at every step.
- **Sideways (PDE numerics):** this is the first honest step of the finite-difference method for PDEs — but only a taste. Higher-order and multidimensional stencils, the finite-element method, and the full consistency/stability/convergence theory live in [pdes](../../pdes/syllabus.md), where this $(1,-2,1)$ matrix reappears as the 1-D stiffness matrix.
