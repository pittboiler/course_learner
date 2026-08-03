# Functional Analysis · Lesson 4.2: Compact operators

> ⏱ ~15 min · Module 4: Spectral theory · Builds on: [4.1 The spectrum of an operator](04-01-spectrum-of-an-operator.md) · Unlocks: [4.3 The Fredholm alternative](04-03-fredholm-alternative.md)

## Why this matters

[1.4](01-04-finite-vs-infinite-dimensions.md) delivered the bad news: in infinite dimensions the closed unit ball is not compact, and with it we lost Bolzano–Weierstrass, attained maxima, and the whole finite-dimensional toolkit. Compact operators are the class that hands a piece of that back. They are the operators whose *output* is essentially finite-dimensional even when their input space is not — and that one restriction is enough to make the spectral theory behave almost exactly like matrix eigenvalue theory. Every integral equation, every Green's function inverting a differential operator (the resolvents of [pdes](../../pdes/syllabus.md)), every "compact resolvent gives discrete energy levels" argument in [quantum-mechanics](../../quantum-mechanics/syllabus.md) rests on this class. This lesson defines it; the next three cash it out.

## The idea

A general bounded operator can take the unit ball and smear it across infinitely many independent directions — that is exactly what the identity does, and why its image (the whole unit ball) refuses to be compact. A **compact** operator is forbidden from doing that. It may stretch and rotate, but it must *squeeze the ball flat*: after applying it, only finitely many directions carry appreciable size, and the rest are crushed toward zero. The image is a set with no room to run off to the horizon — every sequence in it piles up somewhere.

The clean slogan is **"almost finite-rank."** A finite-rank operator lands everything in a finite-dimensional subspace, where closed-and-bounded means compact, so it obviously tames the ball. A compact operator is one you can approximate as closely as you like (in operator norm) by such finite-rank operators — you keep the first $N$ directions and the discarded tail is uniformly tiny. That is the whole content, and it is why compact operators inherit finite-dimensional spectral behavior: they are a controlled limit of matrices.

## The formal version

Let $X, Y$ be normed spaces and $K : X \to Y$ linear. Write $B = \{x \in X : \|x\| \le 1\}$ for the closed unit ball, and call a set **precompact** (relatively compact) if its closure is compact.

**Definition (compact operator).** $K$ is **compact** if $K(B)$ is precompact — equivalently, every bounded sequence $(x_n)$ in $X$ has a subsequence $(x_{n_k})$ for which $(Kx_{n_k})$ **converges** in $Y$.

**In words:** $K$ turns "merely bounded" back into "has a convergent subsequence." It restores the one property [1.4](01-04-finite-vs-infinite-dimensions.md) said the identity destroys — but only for the *outputs* of $K$, not for all of $X$.

**Theorem (finite-rank limits).** Every compact operator is bounded. Every finite-rank bounded operator is compact. If $K_N \to K$ in operator norm and each $K_N$ is compact, then $K$ is compact. Consequently, on a Hilbert space $H$,
$$K \text{ compact} \iff K = \lim_{N\to\infty} F_N \text{ in operator norm, with each } F_N \text{ finite-rank.}$$

**In words:** compact = norm-limit of finite-rank. "Finite-rank" means the range $\operatorname{ran} K$ is finite-dimensional; the compact operators are its closure in the operator norm — a genuinely bigger class, but only just.

**Theorem (structure).** On a Hilbert (or Banach) space, the compact operators $\mathcal{K}(X)$ form a **closed two-sided ideal** inside the bounded operators $\mathcal{B}(X)$: closed under norm limits, and if $K$ is compact then $AK$ and $KB$ are compact for *any* bounded $A, B$.

**In words:** compactness is contagious under composition — multiply a compact operator by anything bounded, on either side, and the result is still compact. (Ideal, because a bounded operator acts like a "scalar" here.)

**Spectral preview (proved in [4.4](04-04-spectral-theorem-compact-self-adjoint.md)).** If $K$ is compact on an infinite-dimensional space, its spectrum is $\{0\} \cup \{\lambda_1, \lambda_2, \dots\}$, where the nonzero $\lambda_n$ are **eigenvalues**, each of *finite* multiplicity, and their only possible accumulation point is $0$.

**In words:** away from $0$, a compact operator behaves exactly like a matrix — a discrete list of eigenvalues — and $0$ is the drain they all run toward.

## Concrete instance

Take the diagonal operator on $\ell^2$ defined by $K e_n = \lambda_n e_n$, i.e. $K(x_1, x_2, \dots) = (\lambda_1 x_1, \lambda_2 x_2, \dots)$ with $(\lambda_n)$ a bounded scalar sequence. **Claim:** $K$ is compact if and only if $\lambda_n \to 0$.

Watch the mechanism on the picture below. Truncate $K$ to its first $N$ coordinates: $K_N = \operatorname{diag}(\lambda_1, \dots, \lambda_N, 0, 0, \dots)$, a finite-rank operator (its range is $\operatorname{span}\{e_1, \dots, e_N\}$). The difference $K - K_N$ is diagonal with entries $0$ in the first $N$ slots and $\lambda_{N+1}, \lambda_{N+2}, \dots$ afterward, so its operator norm is the largest surviving entry:
$$\|K - K_N\| = \sup_{n > N} |\lambda_n|.$$
If $\lambda_n \to 0$ this tail supremum $\to 0$, so $K_N \to K$ in operator norm — $K$ is a norm-limit of finite-rank operators, hence compact. In the figure, the dark bars are the finite-rank part we keep; the grey tail all sits below $\varepsilon$ and gets discarded at cost $< \varepsilon$. The identity ($\lambda_n \equiv 1$) has no shrinking tail — every truncation misses by $\|I - I_N\| = 1$ — and is not compact.

![Bar chart of eigenvalues lambda_n decreasing to zero; the first three tall dark bars are the retained finite-rank operator K_N, the remaining grey bars form a tail lying entirely below the dashed threshold epsilon, so discarding them costs less than epsilon in operator norm](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (the diagonal criterion, both directions).** Prove: $K = \operatorname{diag}(\lambda_n)$ on $\ell^2$ is compact $\iff \lambda_n \to 0$.

*($\Leftarrow$)* Suppose $\lambda_n \to 0$. With $K_N = \operatorname{diag}(\lambda_1, \dots, \lambda_N, 0, \dots)$ as above, for any $x$ with $\|x\|_2 \le 1$,
$$\|(K - K_N)x\|_2^2 = \sum_{n > N} |\lambda_n|^2 |x_n|^2 \le \Big(\sup_{n>N}|\lambda_n|\Big)^2 \sum_{n>N}|x_n|^2 \le \Big(\sup_{n>N}|\lambda_n|\Big)^2,$$
so $\|K - K_N\| \le \sup_{n>N}|\lambda_n| \to 0$. Each $K_N$ has finite-dimensional range, hence is compact; a norm-limit of compact operators is compact, so $K$ is compact.

*($\Rightarrow$)* Suppose $\lambda_n \not\to 0$. Then some subsequence stays away from $0$: there is $\delta > 0$ and indices $n_1 < n_2 < \cdots$ with $|\lambda_{n_k}| \ge \delta$. The standard basis vectors $e_{n_k}$ are bounded ($\|e_{n_k}\|_2 = 1$), yet
$$\|Ke_{n_j} - Ke_{n_k}\|_2 = \|\lambda_{n_j} e_{n_j} - \lambda_{n_k} e_{n_k}\|_2 = \sqrt{|\lambda_{n_j}|^2 + |\lambda_{n_k}|^2} \ge \delta\sqrt{2} \quad (j \ne k),$$
using orthogonality exactly as in [1.4](01-04-finite-vs-infinite-dimensions.md)'s $\sqrt 2$ computation. The images stay a fixed distance $\ge \delta\sqrt 2$ apart, so no subsequence of $(Ke_{n_k})$ is Cauchy, let alone convergent. A bounded sequence with no convergent image means $K$ is *not* compact. $\blacksquare$

**Example 2 (integral operators are compact).** Let $k(x,t)$ be continuous on $[0,1] \times [0,1]$ and define $K$ on $C[0,1]$ (sup norm) by
$$(Kf)(x) = \int_0^1 k(x,t)\, f(t)\, dt.$$
Claim: $K$ is compact. Let $M = \max |k|$ and take any $f$ with $\|f\|_\infty \le 1$. Two facts about the image set $\{Kf : \|f\|_\infty \le 1\}$:

- *Uniformly bounded:* $|(Kf)(x)| \le \int_0^1 |k(x,t)|\,|f(t)|\,dt \le M$, for every $x$ and every such $f$.
- *Equicontinuous:* $k$ is continuous on a compact square, hence *uniformly* continuous, so given $\varepsilon > 0$ there is $\eta > 0$ with $|k(x_1,t) - k(x_2,t)| < \varepsilon$ whenever $|x_1 - x_2| < \eta$ (uniformly in $t$). Then
$$|(Kf)(x_1) - (Kf)(x_2)| \le \int_0^1 |k(x_1,t) - k(x_2,t)|\,|f(t)|\,dt \le \varepsilon,$$
the same $\eta$ working for *all* $f$ in the ball.

By the **Arzelà–Ascoli theorem** — a uniformly bounded, equicontinuous family in $C[0,1]$ is precompact — the image $K(B)$ has compact closure. So $K$ is compact. This is the archetype: smoothing an input by integrating it against a continuous kernel always produces a compact operator, which is why boundary-value problems reduce to compact-operator spectral theory.

## Watch out

- **You might think** compact just means bounded. **Actually** it is strictly stronger: *every* bounded operator sends bounded sets to bounded sets, but compact demands the far more restrictive *precompact* (bounded sequences get convergent image-subsequences). The identity on any infinite-dimensional space is bounded, not compact.
- **You might think** the identity is a perfectly nice compact operator. **Actually** $I$ is compact **only in finite dimensions** — $I(B) = B$, and [1.4](01-04-finite-vs-infinite-dimensions.md) proved the infinite-dimensional unit ball is not compact. This is the single most important non-example.
- **You might think** a compact operator can be boundedly invertible. **Actually** on an infinite-dimensional space it never is: $0 \in \sigma(K)$ always. If $K^{-1}$ were bounded, then $I = K^{-1}K$ would be compact (ideal property, [4.1](04-01-spectrum-of-an-operator.md) resolvent notion) — contradiction. Compactness and invertibility are incompatible in infinite dimensions.
- **You might think** "finite-rank" and "compact" are the same. **Actually** finite-rank $\subsetneq$ compact: $\operatorname{diag}(1/n)$ is compact but has infinite-dimensional range. In a Hilbert space, compact is *exactly* the operator-norm closure of finite-rank.

## One-liner

> A compact operator crushes the unit ball flat — it is a norm-limit of matrices, so away from $0$ its spectrum is just a shrinking list of finite-multiplicity eigenvalues.

## Problems

**P1 (🟢)** For each diagonal operator on $\ell^2$, state whether it is compact and give the one-line reason: (a) $\operatorname{diag}\!\big(\tfrac{1}{n}\big)$; (b) $\operatorname{diag}\!\big(\tfrac{n}{n+1}\big)$; (c) $\operatorname{diag}\!\big((-1)^n\big)$; (d) $\operatorname{diag}\!\big(e^{-n}\big)$.

**P2 (🟡)** Let $K$ be compact on an infinite-dimensional Hilbert space $H$ and let $A$ be bounded. Show $AK$ is compact directly from the sequential definition (do not quote the ideal theorem). Then explain in one sentence why this makes $0 \in \sigma(K)$ unavoidable.

**P3 (🔴, optional)** The **right shift** $S$ on $\ell^2$ is $S(x_1, x_2, \dots) = (0, x_1, x_2, \dots)$. Show $S$ is *not* compact by exhibiting a bounded sequence whose image has no convergent subsequence. (Contrast: what does this say about $\sigma(S)$ near the unit circle, given the compact spectral preview?)

<details>
<summary>Solutions</summary>

**P1** A diagonal operator $\operatorname{diag}(\lambda_n)$ on $\ell^2$ is compact $\iff \lambda_n \to 0$ (Example 1).
(a) $\tfrac1n \to 0$: **compact**.
(b) $\tfrac{n}{n+1} \to 1 \ne 0$: **not compact** (the images $\lambda_n e_n$ stay $\approx\sqrt2$ apart).
(c) $(-1)^n$ does not converge, in particular $\not\to 0$: **not compact**.
(d) $e^{-n} \to 0$: **compact**.

**P2** Let $(x_n)$ be bounded in $H$, say $\|x_n\| \le C$. Since $K$ is compact, there is a subsequence $(x_{n_k})$ with $Kx_{n_k} \to y$ for some $y \in H$. The bounded operator $A$ is continuous, so
$$AK x_{n_k} = A(Kx_{n_k}) \longrightarrow Ay.$$
Thus every bounded sequence has a subsequence whose image under $AK$ converges — $AK$ is compact by definition. (Symmetric right-multiplication $KB$ is handled by first noting $(Bx_n)$ is bounded since $B$ is, then applying $K$.)

For $0 \in \sigma(K)$: if $0 \notin \sigma(K)$ then $K$ is invertible with bounded inverse $K^{-1}$, and taking $A = K^{-1}$ above makes $I = K^{-1}K$ compact — impossible in infinite dimensions since $I(B) = B$ is not precompact ([1.4](01-04-finite-vs-infinite-dimensions.md)). So $0$ must lie in the spectrum.

**P3** Take the standard basis $(e_n)$, which is bounded ($\|e_n\|_2 = 1$). Then $Se_n = e_{n+1}$, and for $m \ne n$,
$$\|Se_n - Se_m\|_2 = \|e_{n+1} - e_{m+1}\|_2 = \sqrt 2$$
by orthogonality (distinct basis vectors, [1.4](01-04-finite-vs-infinite-dimensions.md)). The image sequence $(Se_n) = (e_{n+1})$ has all terms pairwise $\sqrt 2$ apart, so no subsequence is Cauchy and none converges. Hence $S$ is **not compact**.

Contrast with the spectral preview: a compact operator's nonzero spectrum is a discrete set of eigenvalues accumulating only at $0$. The shift's spectrum is instead the *entire closed unit disk* $\{|\lambda| \le 1\}$ ([4.1](04-01-spectrum-of-an-operator.md)) — a solid two-dimensional blob, the exact opposite of a shrinking discrete list. Non-compactness is precisely what lets the spectrum be so fat.

</details>

## Flashback

**From Lesson 4.1 (The spectrum of an operator):** On $\ell^2$, let $M$ be the multiplication operator $M(x_1, x_2, x_3, \dots) = \big(\tfrac12 x_1, \tfrac23 x_2, \tfrac34 x_3, \dots\big)$, i.e. $M = \operatorname{diag}(a_n)$ with $a_n = \tfrac{n}{n+1}$. Find the point spectrum (eigenvalues) and the full spectrum $\sigma(M)$. Is any eigenvalue *not* isolated?

<details>
<summary>Solution</summary>

*Eigenvalues.* $M e_n = a_n e_n$, so each $a_n = \tfrac{n}{n+1}$ is an eigenvalue with eigenvector $e_n$: the point spectrum is $\{\tfrac12, \tfrac23, \tfrac34, \dots\} = \{\tfrac{n}{n+1} : n \ge 1\}$.

*Full spectrum.* For a bounded diagonal (multiplication) operator, $\lambda \in \sigma(M)$ iff $M - \lambda I = \operatorname{diag}(a_n - \lambda)$ fails to have a bounded inverse, i.e. iff $\inf_n |a_n - \lambda| = 0$ — precisely the closure of the value set. Here $a_n \nearrow 1$, so
$$\sigma(M) = \overline{\{a_n\}} = \Big\{\tfrac{n}{n+1} : n \ge 1\Big\} \cup \{1\}.$$
The extra point $\lambda = 1$ lies in the spectrum but is **not** an eigenvalue: $M - I = \operatorname{diag}\!\big(\tfrac{n}{n+1} - 1\big) = \operatorname{diag}\!\big(-\tfrac{1}{n+1}\big)$ is injective with *unbounded* inverse (the entries approach $0$), so $1$ is in the continuous spectrum.

*Isolation.* Every eigenvalue $\tfrac{n}{n+1}$ is isolated. The one non-isolated point is $\lambda = 1$, the accumulation point of the eigenvalues — and it is *not* an eigenvalue. (Note the tie to this lesson: $a_n \to 1 \ne 0$, so $M$ is **not** compact; the eigenvalues pile up at $1$, not at $0$. A compact operator would force that accumulation to happen at $0$.)

</details>

## Connections

- **Backward ([1.4](01-04-finite-vs-infinite-dimensions.md)):** compact operators exist to *restore* the compactness of the unit ball that infinite dimensions destroyed — but only on their image. The $\sqrt 2$-separated basis vectors that broke compactness there are the same ones that detect non-compactness here.
- **Backward ([4.1](04-01-spectrum-of-an-operator.md)):** the spectrum defined last lesson becomes drastically simpler for this class — discrete eigenvalues plus $0$, no fat continuous chunks like the shift's disk.
- **Forward ([4.3](04-03-fredholm-alternative.md)):** the Fredholm alternative says $I - K$ (compact $K$) behaves like a finite square matrix — either $I-K$ is invertible or $Kx = x$ has a nontrivial solution, with no third option. Compactness is the hypothesis that makes it work.
- **Forward ([4.4](04-04-spectral-theorem-compact-self-adjoint.md)):** a compact *self-adjoint* operator gets a full orthonormal eigenbasis with real eigenvalues $\to 0$ — the exact infinite-dimensional analogue of diagonalizing a symmetric matrix.
- **Sideways ([pdes](../../pdes/syllabus.md)):** the inverse of a differential operator — its Green's-function integral operator — is compact (Example 2's mechanism), which is *why* boundary-value problems have discrete eigenvalues and eigenfunction expansions.
- **Sideways ([quantum-mechanics](../../quantum-mechanics/syllabus.md)):** a Hamiltonian with **compact resolvent** $(H - \lambda I)^{-1}$ automatically has purely discrete spectrum — quantized energy levels and normalizable bound states — straight from the compact spectral preview.
