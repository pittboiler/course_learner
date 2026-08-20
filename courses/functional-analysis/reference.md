# Functional Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Functional analysis is linear algebra where the vectors are functions and the
dimension is infinite. Three structures stack — **length** (norm), **no missing
limits** (completeness), **angles** (inner product) — and almost every theorem
below is a statement about which of the three you actually paid for. Use this
card to look up which space has which structure, the exact hypotheses of the four
big theorems, and how far the spectral theorem stretches.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $d(x,y)$ | distance between two points of a metric space | [1.1](lessons/01-01-metric-spaces-completeness.md) |
| $\widehat{X}$ | the completion of $X$ — $X$ with its holes filled, unique up to isometry | [1.1](lessons/01-01-metric-spaces-completeness.md) |
| $\|x\|$ | norm — the length of a vector; induces $d(x,y)=\|x-y\|$ | [1.2](lessons/01-02-normed-banach-spaces.md) |
| $\ell^p$, $\ell^\infty$ | sequences with $\sum|x_n|^p<\infty$; bounded sequences | [1.3](lessons/01-03-standard-examples-lp-c-lp.md) |
| $C[a,b]$ | continuous functions on $[a,b]$, normally under the sup norm | [1.3](lessons/01-03-standard-examples-lp-c-lp.md) |
| $L^p[a,b]$ | (classes of) functions with $\int|f|^p<\infty$, identified a.e. | [1.3](lessons/01-03-standard-examples-lp-c-lp.md) |
| $q$ | the conjugate exponent of $p$: $\tfrac1p+\tfrac1q=1$ | [1.3](lessons/01-03-standard-examples-lp-c-lp.md) |
| $e_n$ | standard basis vector — a $1$ in slot $n$, zeros elsewhere | [1.4](lessons/01-04-finite-vs-infinite-dimensions.md) |
| $\operatorname{dist}(x,M)$ | $\inf_{m\in M}\|x-m\|$ — how far $x$ sits from a subspace | [1.4](lessons/01-04-finite-vs-infinite-dimensions.md) |
| $c_{00}$ | eventually-zero sequences — the standard incomplete inner-product space | [2.1](lessons/02-01-inner-products-cauchy-schwarz.md) |
| $\langle x,y\rangle$ | inner product; **this course is linear in the first slot, conjugate-linear in the second** | [2.1](lessons/02-01-inner-products-cauchy-schwarz.md) |
| $x\perp y$ | orthogonal: $\langle x,y\rangle=0$ | [2.1](lessons/02-01-inner-products-cauchy-schwarz.md) |
| $M^\perp$ | everything orthogonal to all of $M$ — always a **closed** subspace | [2.2](lessons/02-02-orthogonality-projection-theorem.md) |
| $M\oplus M^\perp$ | the orthogonal splitting of $H$ by a closed subspace | [2.2](lessons/02-02-orthogonality-projection-theorem.md) |
| $P$, $Px$ | orthogonal projection onto a closed subspace, and the foot of the perpendicular | [2.2](lessons/02-02-orthogonality-projection-theorem.md) |
| $\delta_{ij}$ | $1$ if $i=j$, else $0$ — the orthonormality bookkeeping symbol | [2.3](lessons/02-03-orthonormal-bases-fourier.md) |
| $c_n=\langle x,e_n\rangle$ | Fourier coefficient — the shadow of $x$ on the axis $e_n$ | [2.3](lessons/02-03-orthonormal-bases-fourier.md) |
| $X^*$, $H^*$ | dual space — all **bounded** linear functionals, normed by $\sup_{\|x\|\le1}|f(x)|$ | [2.4](lessons/02-04-riesz-representation.md) |
| $\langle\varphi\mid$, $\mid\psi\rangle$ | bra and ket — a Riesz functional and the vector representing it | [2.4](lessons/02-04-riesz-representation.md) |
| $\|T\|$ | operator norm — the worst-case stretch $\sup_{\|x\|\le1}\|Tx\|$ | [3.1](lessons/03-01-bounded-operators-operator-norm.md) |
| $B(X,Y)$, $B(X)$ | bounded linear operators $X\to Y$; $B(X)$ is a Banach algebra | [3.1](lessons/03-01-bounded-operators-operator-norm.md) |
| $\Gamma(T)$, $G(A)$ | the graph $\{(x,Tx)\}\subseteq X\times Y$, normed by $\|x\|+\|y\|$ | [3.4](lessons/03-04-open-mapping-closed-graph.md) |
| $T^*$ | Hilbert-space adjoint: $\langle Tx,y\rangle=\langle x,T^*y\rangle$ | [3.5](lessons/03-05-adjoints-bounded-operators.md) |
| $M_\varphi$ | multiplication operator $f\mapsto \varphi f$ — the analyst's diagonal matrix | [3.5](lessons/03-05-adjoints-bounded-operators.md) |
| $R$, $L$ | right shift and left shift on $\ell^2$; they are adjoints of each other | [3.5](lessons/03-05-adjoints-bounded-operators.md) |
| $\rho(T)$ | resolvent set — the $\lambda$ where $T-\lambda I$ has a bounded inverse | [4.1](lessons/04-01-spectrum-of-an-operator.md) |
| $\sigma(T)$; $\sigma_p,\sigma_c,\sigma_r$ | spectrum; its point, continuous, and residual parts | [4.1](lessons/04-01-spectrum-of-an-operator.md) |
| $r(T)$ | spectral radius $\max\{|\lambda|:\lambda\in\sigma(T)\}$ | [4.1](lessons/04-01-spectrum-of-an-operator.md) |
| $\mathcal{K}(X)$ | the compact operators — a closed two-sided ideal in $B(X)$ | [4.2](lessons/04-02-compact-operators.md) |
| $\ker T$, $\operatorname{ran} T$, $\operatorname{coker} T$ | kernel, range, and $H/\operatorname{ran}T$ (what the range misses) | [4.3](lessons/04-03-fredholm-alternative.md) |
| $E(B)$ | spectral (projection-valued) measure — the projection onto "values in $B$" | [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md) |
| $\mathbf{1}_B$ | indicator function of the set $B$ | [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md) |
| $f(T)$ | functional calculus — apply $f$ to the spectral values of $T$ | [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md) |
| $D(A)$ | the **domain** of an unbounded operator — part of the operator, not decoration | [5.1](lessons/05-01-unbounded-operators-domains.md) |
| $\overline{A}$ | the closure of a closable operator — its smallest closed extension | [5.1](lessons/05-01-unbounded-operators-domains.md) |
| $A\subseteq A^*$ | "$A^*$ extends $A$" — the compact way to write "symmetric" | [5.2](lessons/05-02-symmetric-vs-self-adjoint.md) |
| $n_+,\,n_-$ | deficiency indices $\dim\ker(A^*\mp i)$ | [5.2](lessons/05-02-symmetric-vs-self-adjoint.md) |
| $U(t)=e^{itA}$ | the one-parameter unitary group generated by a self-adjoint $A$ | [5.4](lessons/05-04-stone-theorem-time-evolution.md) |

## Definitions

### Complete

Every sequence that *bunches up* actually *lands*: every Cauchy sequence
converges to a point **of the space**. It is a property of the metric, not of the
set.

$$\forall (x_n) \text{ Cauchy } \exists\, x\in X:\ d(x_n,x)\to 0$$

*Introduced:* [1.1](lessons/01-01-metric-spaces-completeness.md)

### Completion

The one complete space that contains $X$ as a dense subset — you fill each hole
with the limit of a Cauchy sequence that had nowhere to go. It exists always and
is unique up to isometry; $\mathbb{R}$ is the completion of $\mathbb{Q}$.

*Introduced:* [1.1](lessons/01-01-metric-spaces-completeness.md)

### Norm

Length that respects the vector algebra: scaling a vector scales its length, and
a sum is never longer than its parts.

$$\|x\|\ge 0\ (=0 \iff x=0), \qquad \|\alpha x\|=|\alpha|\,\|x\|, \qquad \|x+y\|\le\|x\|+\|y\|$$

Dropping only the "$\|x\|=0\Rightarrow x=0$" half gives a **seminorm** — the raw
material for $L^p$, where functions equal almost everywhere must be identified to
restore it.

*Introduced:* [1.2](lessons/01-02-normed-banach-spaces.md)

### Banach space

A normed space with no missing limits — complete in the metric $d(x,y)=\|x-y\|$.

*Introduced:* [1.2](lessons/01-02-normed-banach-spaces.md)

### Equivalent norms

Each norm is trapped between fixed multiples of the other, so they cannot
disagree about what converges or what is open.

$$c\,\|x\|_a \le \|x\|_b \le C\,\|x\|_a \qquad (0<c\le C<\infty)$$

*Introduced:* [1.4](lessons/01-04-finite-vs-infinite-dimensions.md)

### Separable

The space contains a countable dense subset — small enough to approximate
everything from a list. Much weaker than finite-dimensional: $\ell^p$ is
separable for $1\le p<\infty$, $\ell^\infty$ is not.

*Introduced:* [1.4](lessons/01-04-finite-vs-infinite-dimensions.md)

### Inner product

A way of multiplying two vectors into a number that measures *alignment*, not
just length — it is what buys you angles and perpendicularity.

$$\langle x,y\rangle=\overline{\langle y,x\rangle}, \qquad \text{linear in one slot}, \qquad \langle x,x\rangle\ge 0 \ (=0 \iff x=0)$$

The induced norm is $\|x\|=\sqrt{\langle x,x\rangle}$. **Convention in this
course:** linear in the *first* slot, conjugate-linear in the second (2.4 onward);
lesson 2.1 introduces it with the physicist's opposite choice and says so
explicitly. Never switch mid-computation.

*Introduced:* [2.1](lessons/02-01-inner-products-cauchy-schwarz.md)

### Hilbert space

An inner-product space that is also complete — geometry *and* no missing limits.
Without completeness you have only a **pre-Hilbert** space.

*Introduced:* [2.1](lessons/02-01-inner-products-cauchy-schwarz.md)

### Orthogonal complement

Everything perpendicular to all of $M$ at once. It is a **closed subspace** even
when $M$ is neither closed nor a subspace.

$$M^\perp=\{x\in H:\langle x,m\rangle=0 \text{ for all } m\in M\}$$

*Introduced:* [2.2](lessons/02-02-orthogonality-projection-theorem.md)

### Orthogonal projection

The linear map that keeps the $M$-part of a vector and discards the perpendicular
part. Its algebraic fingerprint is **two** conditions, not one: idempotent
*and* self-adjoint.

$$P^2=P, \qquad P=P^*, \qquad \|P\|=1 \ (M\ne\{0\}), \qquad I-P = \text{the projection onto } M^\perp$$

*Introduced:* [2.2](lessons/02-02-orthogonality-projection-theorem.md)

### Orthonormal basis

Enough perpendicular unit axes that nothing is invisible to all of them — so
every vector is the (infinite, norm-convergent) sum of its shadows. Not a Hamel
basis: infinite sums are allowed, finite ones would not reach most vectors.

*Introduced:* [2.3](lessons/02-03-orthonormal-bases-fourier.md)

### Dual space

The room of all bounded linear "gauges" on $X$. Because the scalars are complete,
$X^*$ is **always a Banach space**, even when $X$ is not.

$$X^*=B(X,\mathbb{F}), \qquad \|f\|=\sup_{\|x\|\le1}|f(x)|$$

*Introduced:* [2.4](lessons/02-04-riesz-representation.md), in general [3.2](lessons/03-02-dual-spaces-hahn-banach.md)

### Bounded operator

The gain has a ceiling: $T$ magnifies length by at most a fixed factor, uniformly
over every input. For **linear** maps this is the same property as continuity,
and the same as continuity at $0$ alone.

$$\|Tx\|\le C\|x\| \ \text{ for all } x, \qquad \|T\|=\sup_{x\ne0}\frac{\|Tx\|}{\|x\|}$$

*Introduced:* [3.1](lessons/03-01-bounded-operators-operator-norm.md)

### Adjoint

$T$ carried across the inner product: the fixed operation on the second slot that
reproduces the same number. Riesz representation is what forces it to exist.

$$\langle Tx,y\rangle=\langle x,T^*y\rangle \ \text{ for all } x,y, \qquad \|T^*\|=\|T\|$$

*Introduced:* [3.5](lessons/03-05-adjoints-bounded-operators.md)

### Self-adjoint, unitary, normal

Three classes defined by how an operator sits against its own star: the "real"
ones (observables), the rotations (symmetries and time evolution), and the ones
that commute with their star (exactly the diagonalizable class).

$$\underbrace{T=T^*}_{\text{self-adjoint}}, \qquad \underbrace{T^*T=TT^*=I}_{\text{unitary}}, \qquad \underbrace{T^*T=TT^*}_{\text{normal}}$$

Self-adjoint and unitary are both special cases of normal. An operator with only
$T^*T=I$ is an **isometry**, which need not be unitary.

*Introduced:* [3.5](lessons/03-05-adjoints-bounded-operators.md)

### Spectrum

The set of $\lambda$ where $T-\lambda I$ fails to be *boundedly invertible* — for
any of three reasons. It is the right generalization of "eigenvalue," and for a
quantum observable it is literally the set of possible measured values.

$$\rho(T)=\{\lambda: T-\lambda I \text{ is a bijection with bounded inverse}\}, \qquad \sigma(T)=\mathbb{C}\setminus\rho(T)$$

*Introduced:* [4.1](lessons/04-01-spectrum-of-an-operator.md)

### Compact operator

An operator that crushes the unit ball flat: it turns "merely bounded" back into
"has a convergent subsequence." Equivalently (on a Hilbert space) it is an
operator-norm limit of finite-rank operators — "almost a matrix."

$$K(B) \text{ precompact} \iff \text{every bounded } (x_n) \text{ has } (Kx_{n_k}) \text{ convergent}$$

*Introduced:* [4.2](lessons/04-02-compact-operators.md)

### Spectral measure

A "ruler for the spectrum": hand it a set of spectral values and it returns the
orthogonal projection onto the part of the space living at those values. It is
the replacement for an eigenbasis when eigenvectors do not exist.

$$E(\varnothing)=0, \quad E(\mathbb{R})=I, \quad E(B_1\cap B_2)=E(B_1)E(B_2), \quad E \text{ countably additive}$$

*Introduced:* [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md)

### Functional calculus

To apply a function to an operator, apply it to the operator's spectral values.
A **bounded** Borel $f$ always gives a **bounded** operator, however wild $T$ is.

$$f(T)=\int_{\sigma(T)} f(\lambda)\,dE(\lambda), \qquad \|f(T)\|=\sup_{\lambda\in\sigma(T)}|f(\lambda)|$$

*Introduced:* [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md), unbounded case [5.3](lessons/05-03-spectral-theorem-unbounded.md)

### Densely defined operator

An unbounded operator is a *pair* $(A,D(A))$: a formula **and** the dense
subspace it is allowed to act on. Changing the domain changes the operator.

*Introduced:* [5.1](lessons/05-01-unbounded-operators-domains.md)

### Closed operator

The well-behavedness that survives when continuity is gone: if the inputs
converge *and* their images converge, the limit input is still legal and lands on
the limit image.

$$x_n\in D(A),\ x_n\to x,\ Ax_n\to g \ \Longrightarrow\ x\in D(A) \text{ and } Ax=g$$

$A$ is **closable** if $\overline{G(A)}$ is again the graph of an operator
(equivalently $x_n\to0$, $Ax_n\to g$ force $g=0$); that operator is the closure
$\overline{A}$.

*Introduced:* [5.1](lessons/05-01-unbounded-operators-domains.md)

### Symmetric

The flip identity holds on the operator's own domain — nothing more. Equivalently
$A\subseteq A^*$: the adjoint extends $A$, possibly onto a strictly bigger domain.

$$\langle Ax,y\rangle=\langle x,Ay\rangle \quad \text{for all } x,y\in D(A)$$

*Introduced:* [5.2](lessons/05-02-symmetric-vs-self-adjoint.md)

### Self-adjoint (unbounded)

Symmetric **and the domains match exactly** — no leftover vectors sneak into
$D(A^*)$. This, not symmetry, is the entry ticket to the spectral theorem, a real
spectrum, and unitary dynamics.

$$A=A^*, \quad \text{including } D(A)=D(A^*)$$

$A$ is **essentially self-adjoint** if $\overline{A}$ is self-adjoint —
equivalently, $A$ has exactly one self-adjoint extension.

*Introduced:* [5.2](lessons/05-02-symmetric-vs-self-adjoint.md)

### Deficiency indices

Two integers that count how far a symmetric operator is from being self-adjoint,
by counting the adjoint's eigenvectors at the imaginary units.

$$n_+=\dim\ker(A^*-i), \qquad n_-=\dim\ker(A^*+i)$$

*Introduced:* [5.2](lessons/05-02-symmetric-vs-self-adjoint.md)

### Strongly continuous one-parameter unitary group

A probability-preserving flow: evolving by $t$ then $s$ equals evolving by $t+s$,
doing nothing takes no time, and nudging the clock nudges the state continuously.

$$U(t+s)=U(t)U(s), \qquad U(0)=I, \qquad t\mapsto U(t)\psi \text{ continuous for every } \psi$$

*Introduced:* [5.4](lessons/05-04-stone-theorem-time-evolution.md)

## Formulas and rules

### The space hierarchy

Each row adds exactly one thing to the row above. The counterexample column is
the standard witness that the new ingredient is *not* free.

| Level | What it adds | Standard example | Standard non-example |
|---|---|---|---|
| Metric space | a distance obeying M1–M3 | $\mathbb{Q}$ under $\lvert x-y\rvert$ | — |
| **Normed** space | vector algebra + homogeneous length, so $d(x,y)=\|x-y\|$ | polynomials on $[0,1]$ with $\|\cdot\|_\infty$ | the **discrete metric** — a metric coming from no norm (it ignores scale) |
| **Banach** space | completeness in that norm | $C[a,b]$ with $\|\cdot\|_\infty$; $\ell^p$; $L^p$ | $C[0,1]$ with $\|\cdot\|_1$ — same set, other norm, Cauchy ramps converge to a step |
| **Inner-product** (pre-Hilbert) space | angles: $\|x\|=\sqrt{\langle x,x\rangle}$, so the parallelogram law holds | $c_{00}$ with the $\ell^2$ inner product | $C[0,1]$ with $\|\cdot\|_\infty$, and $\ell^p, L^p$ for every $p\ne2$ — Banach, but the parallelogram law fails |
| **Hilbert** space | inner product **and** completeness | $\ell^2$; $L^2[a,b]$; every separable one is $\ell^2$ in disguise | $c_{00}$ under the $\ell^2$ inner product — inner product, but not complete (its completion is $\ell^2$) |

The two ingredients are independent: sup-norm spaces are complete but never
Hilbert, $c_{00}$ has angles but holes. The parallelogram law is the **exact**
test for "this norm comes from an inner product."

*From* [1.1](lessons/01-01-metric-spaces-completeness.md), [1.2](lessons/01-02-normed-banach-spaces.md), [1.3](lessons/01-03-standard-examples-lp-c-lp.md), [2.1](lessons/02-01-inner-products-cauchy-schwarz.md)

### The standard spaces at a glance

| Space | Norm | Banach? | Hilbert? | Dual | Separable? |
|---|---|---|---|---|---|
| $\ell^p$, $1<p<\infty$ | $\left(\sum|x_n|^p\right)^{1/p}$ | yes | only $p=2$ | $\ell^q$ | yes |
| $\ell^1$ | $\sum|x_n|$ | yes | no | $\ell^\infty$ | yes |
| $\ell^\infty$ | $\sup_n|x_n|$ | yes | no | strictly bigger than $\ell^1$ | **no** |
| $c_{00}$ | any of the above | **no** | no | — | yes |
| $C[a,b]$ | $\max_t|f(t)|$ | yes | no | — | yes |
| $C[0,1]$ | $\int_0^1|f|$ | **no** | no | — | yes |
| $L^p[a,b]$ | $\left(\int|f|^p\right)^{1/p}$ | yes (Riesz–Fischer) | only $p=2$ | $L^q$ | yes for $p<\infty$ |

Because $(\ell^\infty)^*\supsetneq\ell^1$, the pair $\ell^1,\ell^\infty$ is **not
reflexive** — reflexivity ($X^{**}=X$) is a privilege, not a law.

*From* [1.3](lessons/01-03-standard-examples-lp-c-lp.md), [1.4](lessons/01-04-finite-vs-infinite-dimensions.md), [3.2](lessons/03-02-dual-spaces-hahn-banach.md)

### Inequalities and inclusions

$$\text{Hölder:}\quad \sum_n|x_ny_n|\le\|x\|_p\|y\|_q, \qquad \int|fg|\le\|f\|_p\|g\|_q \qquad \left(\tfrac1p+\tfrac1q=1\right)$$
$$\text{Minkowski (the triangle inequality):}\quad \|x+y\|_p\le\|x\|_p+\|y\|_p$$
$$\text{Cauchy–Schwarz } (p=q=2):\quad |\langle x,y\rangle|\le\|x\|\,\|y\|, \ \text{ equality} \iff x,y \text{ linearly dependent}$$
$$\text{Parallelogram law:}\quad \|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$$
$$\text{Young (the seed of Hölder):}\quad ab\le\frac{a^p}{p}+\frac{b^q}{q} \qquad (a,b\ge0)$$

**The inclusions run opposite ways** — the single most-swapped fact in the module:

| Setting | Inclusion | Norm ordering |
|---|---|---|
| sequences, $p\le q$ | $\ell^p\subset\ell^q$ (smaller $p$ is the stronger condition) | $\|x\|_\infty\le\|x\|_2\le\|x\|_1$ |
| functions on a **finite** interval, $p\le q$ | $L^q[a,b]\subset L^p[a,b]$ (larger $q$ is stronger) | via Hölder against the constant $1$ |

*From* [1.2](lessons/01-02-normed-banach-spaces.md), [1.3](lessons/01-03-standard-examples-lp-c-lp.md), [2.1](lessons/02-01-inner-products-cauchy-schwarz.md)

### Completeness tests

- **Series test.** A normed space is Banach $\iff$ every absolutely convergent
  series converges: $\sum\|x_n\|<\infty \Rightarrow \sum x_n$ converges. Usually
  the fastest route to "this space is complete."
- **$B(X,Y)$ is Banach whenever $Y$ is** — completeness lives in the *target*;
  $X$ may be any normed space. Hence $X^*$ is always Banach.
- **Uniform limits.** $C[a,b]$ under the sup norm is complete because a uniform
  limit of continuous functions is continuous.

*From* [1.2](lessons/01-02-normed-banach-spaces.md), [1.1](lessons/01-01-metric-spaces-completeness.md), [3.1](lessons/03-01-bounded-operators-operator-norm.md)

### Finite versus infinite dimension

| Fact | Finite dim | Infinite dim |
|---|---|---|
| All norms equivalent | **yes** (the unit sphere is compact) | **no** — sup vs $L^1$ on $C[0,1]$ splits |
| Closed unit ball compact | yes (Heine–Borel) | **never** (Riesz) |
| Bounded $\Rightarrow$ convergent subsequence | yes | no — $\|e_n-e_m\|_2=\sqrt2$ forever |
| Injective $\Rightarrow$ surjective | yes | no — the right shift |
| Every linear map continuous | yes | no — differentiation |

**Riesz's lemma.** For a *proper closed* subspace $M\subseteq X$ and any
$0<\varepsilon<1$ there is a unit vector $x$ with
$\operatorname{dist}(x,M)>1-\varepsilon$. Iterating it manufactures a
$(1-\varepsilon)$-separated sequence inside the unit ball, which is exactly why:

**Riesz's characterization.** The closed unit ball of $X$ is compact $\iff \dim X<\infty$.

*From* [1.4](lessons/01-04-finite-vs-infinite-dimensions.md)

### Hilbert-space geometry

**Projection theorem.** $M$ a **closed** subspace of a **Hilbert** space $H$.
Then every $x$ has a unique nearest point $Px\in M$, characterized by
perpendicularity of the residual, and $H$ splits:

$$\|x-Px\|=\min_{m\in M}\|x-m\| \iff x-Px\perp M, \qquad H=M\oplus M^\perp$$

Both hypotheses earn their keep: without closedness the plumb line has no floor
to land on; without completeness the minimizing sequence has no limit.

$$\text{Pythagoras:}\quad \|x\|^2=\|Px\|^2+\|x-Px\|^2 \ \Rightarrow\ \|Px\|\le\|x\|$$
$$\text{Bessel (any orthonormal set):}\quad \sum_n|\langle x,e_n\rangle|^2\le\|x\|^2$$
$$\text{Parseval (iff the set is complete):}\quad \sum_n|\langle x,e_n\rangle|^2=\|x\|^2, \qquad x=\sum_n\langle x,e_n\rangle e_n$$
$$\text{Gram–Schmidt:}\quad u_k=v_k-\sum_{j<k}\langle v_k,e_j\rangle e_j, \qquad e_k=\frac{u_k}{\|u_k\|}$$

**Four equivalent ways to say $\{e_n\}$ is an orthonormal basis:** Parseval holds
for every $x$; the expansion $x=\sum c_ne_n$ converges in norm for every $x$; the
only vector orthogonal to every $e_n$ is $0$; finite linear combinations are dense.

**Master theorem.** Every separable Hilbert space has a countable orthonormal
basis and is isometrically isomorphic to $\ell^2$. On $L^2[-\pi,\pi]$ the
functions $e_n(x)=e^{inx}/\sqrt{2\pi}$, $n\in\mathbb{Z}$, are such a basis — the
Fourier series *is* an orthonormal expansion.

**Riesz representation.** Every bounded linear functional on a Hilbert space is
inner product against one fixed vector:

$$f(x)=\langle x,y\rangle \text{ for a unique } y, \qquad \|f\|=\|y\|$$

so $H\cong H^*$ — a **conjugate-linear** isometry. That map is exactly the
ket-to-bra correspondence, and its antilinearity is why
$\alpha\mid\varphi\rangle$ has bra $\overline{\alpha}\langle\varphi\mid$.

*From* [2.2](lessons/02-02-orthogonality-projection-theorem.md), [2.3](lessons/02-03-orthonormal-bases-fourier.md), [2.4](lessons/02-04-riesz-representation.md)

### The four big theorems — exact hypotheses

Three of the four run on **Baire category**, which is why completeness appears in
their hypotheses and nowhere in Hahn–Banach's.

**Baire category theorem (the engine).** A **complete** metric space is not a
countable union of nowhere-dense sets; equivalently, a countable intersection of
dense open sets is dense.

| Theorem | Exact hypotheses | Conclusion | Engine |
|---|---|---|---|
| **Hahn–Banach** (extension) | $X$ normed (no completeness), $M\subseteq X$ any subspace, $g\in M^*$ | some $f\in X^*$ with $f\vert_M=g$ and $\|f\|_{X^*}=\|g\|_{M^*}$ | Zorn's lemma — **non-constructive** |
| **Hahn–Banach** (separation) | $C\subseteq X$ **closed and convex**, $p\notin C$ | some $f\in X^*$, $c\in\mathbb{R}$ with $\operatorname{Re}f(x)\le c<\operatorname{Re}f(p)$ on $C$ | same |
| **Uniform boundedness** (Banach–Steinhaus) | $X$ **Banach**, $Y$ normed, $\{T_\alpha\}$ bounded operators, **any** index set, pointwise bounded | $\sup_\alpha\|T_\alpha\|<\infty$ | Baire |
| **Open mapping** | $X,Y$ **both Banach**, $T$ bounded and **surjective** | $T$ maps open sets to open sets | Baire |
| **Bounded inverse** (corollary) | $X,Y$ **both Banach**, $T$ a bounded **bijection** | $T^{-1}$ is bounded | Baire |
| **Closed graph** | $X,Y$ **both Banach**, $T$ linear and defined on **all** of $X$, $\Gamma(T)$ closed | $T$ is bounded | Baire |

Corollaries worth having on hand:

- **Norming functionals.** For $x\ne0$ there is $f\in X^*$ with $\|f\|=1$ and
  $f(x)=\|x\|$; hence $\|x\|=\sup_{\|f\|\le1}|f(x)|$ and $X^*$ separates points.
- **Pointwise limits stay bounded.** If $Tx=\lim_n T_nx$ exists for every $x$
  ($X$ Banach), then $T$ is bounded with $\|T\|\le\liminf_n\|T_n\|$.
- **Two complete norms, one comparison.** If $\|\cdot\|_1\le C\|\cdot\|_2$ and
  both are complete on the same space, they are equivalent.
- **Hellinger–Toeplitz.** An **everywhere-defined** symmetric $T:H\to H$ is
  automatically bounded. Contrapositive: an unbounded symmetric operator
  **cannot** be defined on all of $H$ — the theorem that creates Module 5.

Why the closed-graph condition is the usable one: continuity asks you to *prove*
$Tx_n$ converges **and** identify the limit; closedness lets you *assume* it
converges and only identify the limit.

*From* [3.2](lessons/03-02-dual-spaces-hahn-banach.md), [3.3](lessons/03-03-uniform-boundedness.md), [3.4](lessons/03-04-open-mapping-closed-graph.md)

### Modes of convergence

The course uses weak and weak-star language (weak topologies in 1.4, weak
convergence and dual pairings in 3.2, the strong operator topology in 4.5 and
5.3–5.4) without tabulating it. Here it is.

**Vectors.**

| Mode | Definition | Notation |
|---|---|---|
| norm (strong) | $\|x_n-x\|\to0$ | $x_n\to x$ |
| weak (in $X$) | $f(x_n)\to f(x)$ for every $f\in X^*$; in a Hilbert space, $\langle x_n,y\rangle\to\langle x,y\rangle$ for every $y$ | $x_n\rightharpoonup x$ |
| weak-star (in a dual $X^*$) | $f_n(x)\to f(x)$ for every $x\in X$ | $f_n\overset{*}{\rightharpoonup}f$ |

**Which implies which.** norm $\Rightarrow$ weak $\Rightarrow$ weak-star (the last
only inside a dual space, where both make sense). None of the arrows reverses in
infinite dimensions; all three coincide when $\dim X<\infty$. Weak and weak-star
agree exactly when $X$ is reflexive. Weak limits are norm-**decreasing**, not
norm-preserving: in $\ell^2$, $e_n\rightharpoonup0$ while $\|e_n\|=1$ for all $n$.

**Where compactness lives.** The closed unit ball is norm-compact only in finite
dimensions (Riesz, 1.4). It is *always* weak-star compact in a dual space
(Banach–Alaoglu), and weakly compact exactly when the space is reflexive — so in
a Hilbert space **every bounded sequence has a weakly convergent subsequence**.
That is the substitute for Bolzano–Weierstrass, and it is why compact operators
matter: a compact $K$ turns weak convergence into norm convergence,
$x_n\rightharpoonup x \Rightarrow Kx_n\to Kx$.

**Operators.** $\|T_n-T\|\to0$ (uniform) $\Rightarrow$ $T_nx\to Tx$ for every $x$
(strong) $\Rightarrow$ $\langle T_nx,y\rangle\to\langle Tx,y\rangle$ (weak), and
neither arrow reverses. Compactness is the norm-limit of finite rank (4.2); a
spectral measure is countably additive in the *strong* topology (4.5, 5.3); and
Stone's group $U(t)$ is *strongly* continuous, never norm continuous for an
unbounded generator (5.4).

*From* [1.4](lessons/01-04-finite-vs-infinite-dimensions.md), [3.2](lessons/03-02-dual-spaces-hahn-banach.md), [4.2](lessons/04-02-compact-operators.md), [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md)

### Operator algebra

$$\|Tx\|\le\|T\|\,\|x\| \quad(\text{the most-used inequality in the subject}), \qquad \|ST\|\le\|S\|\,\|T\|$$
$$(T^*)^*=T, \qquad (ST)^*=T^*S^*, \qquad (\alpha T)^*=\overline{\alpha}\,T^*, \qquad (S+T)^*=S^*+T^*$$
$$\|T^*\|=\|T\|, \qquad \|T^*T\|=\|T\|^2 \quad (\text{the } C^* \text{-identity})$$

Adjoints you should write down on sight:

| $T$ | $T^*$ | Self-adjoint when |
|---|---|---|
| right shift $R$ on $\ell^2$ | left shift $L$ | never ($R^*R=I$ but $RR^*\ne I$) |
| $M_\varphi$ on $L^2$, $\varphi\in L^\infty$ | $M_{\overline{\varphi}}$ | $\varphi$ real-valued (unitary iff $|\varphi|=1$ a.e.) |
| $(Tf)(x)=\int k(x,y)f(y)\,dy$ | kernel $\overline{k(y,x)}$ | $k(y,x)=\overline{k(x,y)}$ |

Operator norms worth knowing: $\|\operatorname{diag}(\lambda_n)\|=\sup_n|\lambda_n|$;
$\|R\|=1$ for a shift; $\|Tx\|=\langle x,u\rangle v$ gives $\|T\|=\|u\|\,\|v\|$;
$\|M_\varphi\|=\|\varphi\|_\infty$.

*From* [3.1](lessons/03-01-bounded-operators-operator-norm.md), [3.5](lessons/03-05-adjoints-bounded-operators.md)

### Spectrum

$$\sigma(T) \text{ is nonempty and compact}, \qquad \sigma(T)\subseteq\{|\lambda|\le\|T\|\}, \qquad r(T)=\lim_{n\to\infty}\|T^n\|^{1/n}\le\|T\|$$

Nonemptiness needs **complex** scalars: the resolvent $\lambda\mapsto(T-\lambda)^{-1}$
is analytic on $\rho(T)$, and an empty spectrum would make it entire and vanishing
at infinity (Liouville).

| Failure mode of $T-\lambda$ | Name | Eigenvector? |
|---|---|---|
| not injective | point spectrum $\sigma_p$ | yes — this is an eigenvalue |
| injective, dense range, not surjective | continuous spectrum $\sigma_c$ | **no** |
| injective, range not even dense | residual spectrum $\sigma_r$ | no |

| Operator | $\sigma$ | Character |
|---|---|---|
| $M_x$ on $L^2[0,1]$ | $[0,1]$ | purely continuous — **no eigenvectors at all** |
| left shift $L$ on $\ell^2$ | closed unit disk | open disk is all point spectrum |
| right shift $R=L^*$ | closed unit disk | open disk is all **residual** spectrum |
| $M_\varphi$ | closure of the essential range of $\varphi$ | — |
| $T=T^*$ | $\subseteq\mathbb{R}$ | why observables give real measurements |
| $K$ compact, $\dim H=\infty$ | $\{0\}\cup\{\lambda_n\}$, $\lambda_n\to0$ | nonzero $\lambda_n$ are eigenvalues of finite multiplicity; $0\in\sigma(K)$ always |

*From* [4.1](lessons/04-01-spectrum-of-an-operator.md), [4.2](lessons/04-02-compact-operators.md)

### Compact operators

- **Diagonal criterion.** $\operatorname{diag}(\lambda_n)$ on $\ell^2$ is compact
  $\iff \lambda_n\to0$, since $\|K-K_N\|=\sup_{n>N}|\lambda_n|$.
- **Finite rank $\subsetneq$ compact.** On a Hilbert space, compact is exactly the
  operator-norm closure of the finite-rank operators.
- **Ideal property.** $\mathcal{K}(X)$ is a closed two-sided ideal in $B(X)$: $AK$
  and $KB$ are compact for any bounded $A,B$. Hence a compact operator on an
  infinite-dimensional space is **never** boundedly invertible.
- **Integral operators are the archetype.** A continuous (or square-integrable
  Hilbert–Schmidt) kernel gives a compact $K$; smoothing by integration always
  compresses. This is why Green's-function inverses of differential operators are
  compact, and why boundary-value problems have discrete spectra.
- **Arzelà–Ascoli** (the tool behind that): a uniformly bounded, equicontinuous
  family in $C[0,1]$ is precompact.

*From* [4.2](lessons/04-02-compact-operators.md)

### Fredholm alternative

$H$ Hilbert, $K$ **compact**. Exactly one holds:

| Branch | Condition | Consequence |
|---|---|---|
| (a) | $\ker(I-K)=\{0\}$ | $I-K$ is bijective with bounded inverse — unique solution for **every** $y$ |
| (b) | $\ker(I-K)\ne\{0\}$ | $\dim\ker(I-K)=\dim\ker(I-K^*)=d<\infty$, and $(I-K)x=y$ is solvable $\iff y\perp\ker(I-K^{*})$ |

So injective $\iff$ surjective is restored, and the index is zero:
$\dim\ker(I-K)-\dim\operatorname{coker}(I-K)=0$ — every homogeneous solution you
gain costs exactly one solvability condition. The solvability test uses the
**adjoint's** kernel; the two kernels share a dimension but not their vectors
unless $K=K^*$.

*From* [4.3](lessons/04-03-fredholm-alternative.md)

### The spectral-theorem ladder

| Hypothesis on $T$ | Statement | What plays the role of the eigenbasis |
|---|---|---|
| symmetric matrix (finite dim) | $T=\sum_n\lambda_nP_n$ | an orthonormal eigenbasis |
| **compact self-adjoint** | $Tx=\sum_n\lambda_n\langle x,e_n\rangle e_n$, $\lambda_n\in\mathbb{R}$, $\lambda_n\to0$, $\{e_n\}$ an ONB of $(\ker T)^\perp$ | a genuine countable orthonormal eigenbasis; nonzero eigenvalues have finite multiplicity |
| **bounded self-adjoint** | $T=\int_{\sigma(T)}\lambda\,dE(\lambda)$; equivalently $UTU^{-1}=M_g$ for a real $g\in L^\infty$ | a projection-valued measure — eigenvectors may not exist |
| **unbounded self-adjoint** (densely defined, $A=A^*$) | $A=\int_{\sigma(A)}\lambda\,dE(\lambda)$; equivalently $UAU^{-1}=M_a$ for a real, possibly unbounded $a$ | the same PVM, with $D(A)=\{\psi:\int\lambda^2\,d\langle\psi,E(\lambda)\psi\rangle<\infty\}$ |

The compact case is the special case where $E$ is purely atomic,
$E(B)=\sum_{\lambda_n\in B}P_n$. In every case the slogan is the same: **a
self-adjoint operator is multiplication by a real function in disguise.**

**Min–max (Courant–Fischer), for compact positive $K$ with $\lambda_1\ge\lambda_2\ge\cdots>0$:**

$$\lambda_n=\max_{\dim V=n}\ \min_{x\in V,\ \|x\|=1}\ \langle Kx,x\rangle, \qquad \lambda_1=\max_{\|x\|=1}\langle Kx,x\rangle=\|K\|$$

**Born rule, as a theorem.** For a unit vector $\psi$, the map
$B\mapsto\langle\psi,E(B)\psi\rangle=\|E(B)\psi\|^2$ is a genuine probability
measure supported on $\sigma(A)$ — the distribution of measurement outcomes.

*From* [4.4](lessons/04-04-spectral-theorem-compact-self-adjoint.md), [4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md), [5.3](lessons/05-03-spectral-theorem-unbounded.md)

### Unbounded operators: the domain checklist

**Why a domain is forced:** Hellinger–Toeplitz says everywhere-defined + symmetric
$\Rightarrow$ bounded. So unbounded + symmetric $\Rightarrow$ not everywhere
defined. The escape hatch from the closed graph theorem is exactly the same: a
closed operator on a *proper* dense domain may be unbounded.

**The boundary term** — the whole symmetric/self-adjoint drama for $A=-i\,d/dx$ on
$[0,1]$ lives here:

$$\langle Af,g\rangle-\langle f,Ag\rangle=-i\big[f(1)\overline{g(1)}-f(0)\overline{g(0)}\big]$$

$A$ is symmetric exactly when this vanishes for all $f,g$ in its domain.

| Domain for $-i\,d/dx$ on $L^2[0,1]$ | $D(A^*)$ | Verdict |
|---|---|---|
| $f(0)=f(1)=0$ (box) | no boundary condition — all of $H^1$ | symmetric, **not** self-adjoint |
| $f(1)=e^{i\theta}f(0)$ (ring) | the same condition | **self-adjoint**, one operator per $\theta$ |

**von Neumann's extension theorem.** A symmetric $A$ has self-adjoint extensions
$\iff n_+=n_-$; when both equal $n$, they form a family parameterized by $U(n)$;
$n_+=n_-=0$ means $A$ is already essentially self-adjoint; $n_+\ne n_-$ means
**none exist**.

| Example | $(n_+,n_-)$ | Meaning |
|---|---|---|
| $-i\,d/dx$ on $[0,1]$ ($e^{-x},e^{x}$ both in $L^2$) | $(1,1)$ | a $U(1)$ circle of self-adjoint extensions — the angles $\theta$ |
| $-i\,d/dx$ on $[0,\infty)$ ($e^{x}\notin L^2$) | $(1,0)$ | **no** self-adjoint extension; momentum on a half-line is not an observable |

*From* [5.1](lessons/05-01-unbounded-operators-domains.md), [5.2](lessons/05-02-symmetric-vs-self-adjoint.md)

### Stone's theorem and time evolution

A **bijection** between strongly continuous one-parameter unitary groups and
self-adjoint operators:

$$U(t)=e^{itA}, \qquad A\psi=-i\lim_{t\to0}\frac{U(t)\psi-\psi}{t}, \qquad D(A)=\{\psi: \text{that limit exists}\}$$

$$\text{Schrödinger:}\quad i\hbar\,\partial_t\psi=H\psi \ \Longrightarrow\ \psi(t)=e^{-itH/\hbar}\psi_0, \qquad \|\psi(t)\|=\|\psi_0\|$$

$e^{itA}$ is built by feeding the **bounded** function $\lambda\mapsto e^{it\lambda}$
to the spectral measure of $A$ — never by the power series, which diverges for
unbounded $A$. Because $|e^{it\lambda}|=1$, the result is unitary and probability
is conserved forever; that conservation is purchased entirely by $H=H^*$.

Worked shape: on $L^2(\mathbb{R})$ the Fourier transform diagonalizes momentum,
$P=F^{-1}M_\xi F$ and $H=-d^2/dx^2=F^{-1}M_{\xi^2}F$, so
$\widehat{U(t)\psi}(\xi)=e^{-it\xi^2}\hat\psi(\xi)$ — each mode spins its phase,
none changes magnitude.

*From* [5.3](lessons/05-03-spectral-theorem-unbounded.md), [5.4](lessons/05-04-stone-theorem-time-evolution.md)

## Assumed, not taught here

A Tier 1 course, so the list is short — but everything on it is genuinely used and
genuinely not derived in these lessons.

| Fact | Where it's taught |
|---|---|
| Completeness of $\mathbb{R}$ (the least-upper-bound axiom) — the base case for every completeness argument here | [real-analysis 1.2](../real-analysis/lessons/01-02-suprema-infima-completeness.md) |
| Cauchy sequences; a Cauchy sequence with a convergent subsequence converges | [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Bolzano–Weierstrass (bounded $\Rightarrow$ convergent subsequence, in finite dimensions) | [real-analysis 2.3](../real-analysis/lessons/02-03-subsequences-bolzano-weierstrass.md) |
| Heine–Borel: closed + bounded $=$ compact, and why it is finite-dimensional | [real-analysis 4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md), [topology 4.3](../topology/lessons/04-03-heine-borel-continuous-maps.md) |
| Uniform limit theorem — a uniform limit of continuous functions is continuous (why $C[a,b]$ is Banach) | [real-analysis 8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md) |
| Compactness in metric spaces: sequential compactness, total boundedness, "complete + totally bounded" | [topology 4.2](../topology/lessons/04-02-compactness-metric-spaces.md) |
| Dense sets, closure, and why completeness is *not* a topological invariant (homeomorphisms) | [topology 1.5](../topology/lessons/01-05-closure-interior-boundary.md), [topology 2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md) |
| Separability and countable dense subsets | [topology 5.3](../topology/lessons/05-03-countability-separability.md) |
| Product topology on $X\times Y$ (where the graph of an operator lives) | [topology 2.3](../topology/lessons/02-03-product-topology.md) |
| Zorn's lemma / the axiom of choice — the non-constructive engine of Hahn–Banach | [mathematical-logic 3.4](../mathematical-logic/lessons/03-04-axiom-of-choice.md) |
| Lebesgue measure, null sets, and "almost everywhere" (why $L^p$ elements are equivalence classes) | [probability-theory 1.4](../probability-theory/lessons/01-04-constructing-lebesgue-measure.md), [probability-theory 2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md) |
| Borel sets and countable additivity (what a spectral measure is a measure *on*) | [probability-theory 1.2](../probability-theory/lessons/01-02-sigma-algebras.md) |
| Hölder, Minkowski, Young, and completeness of $L^p$ (**Riesz–Fischer**) — cited in 1.3, proved there | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| Conditional expectation as an orthogonal projection in $L^2$ (the 2.2 application) | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| Liouville's theorem (used to prove $\sigma(T)\ne\varnothing$) | [complex-analysis 4.4](../complex-analysis/lessons/04-04-consequences-liouville-morera.md) |
| Fourier transform, the rule $\partial_x\leftrightarrow i\xi$, and Plancherel (the diagonalization of momentum in 5.3–5.4) | [fourier-analysis 2.2](../fourier-analysis/lessons/02-02-properties-derivative-rule.md), [fourier-analysis 2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| Dirichlet kernel and the growth of the Lebesgue constants (the UBP divergence example) | [fourier-analysis 1.3](../fourier-analysis/lessons/01-03-convergence-pointwise-uniform-gibbs.md) |
| Sturm–Liouville eigenvalue problems and Green's functions (the compact-operator applications) | [pdes 3.4](../pdes/lessons/03-04-sturm-liouville-theory.md), [pdes 5.2](../pdes/lessons/05-02-greens-functions-poisson.md) |
| Vector spaces, span, basis, dimension — the algebra a norm is layered onto | [linalg-refresher 1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md) |
| Dot product, orthogonality, Gram–Schmidt, least-squares projection in finite dimensions | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md), [4.3](../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) |
| The finite-dimensional spectral theorem (Hermitian $\Rightarrow$ real eigenvalues, orthonormal eigenbasis) | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Spectral norm $=$ largest singular value (the ellipse picture of the operator norm) | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| **Arzelà–Ascoli** (uniformly bounded + equicontinuous $\Rightarrow$ precompact in $C[0,1]$) — used in 4.2 and stated nowhere else in this library; the total-boundedness machinery it rests on | [topology 4.2](../topology/lessons/04-02-compactness-metric-spaces.md) |

The **Baire category theorem** is the one heavy prerequisite the course states and
uses itself, in [3.3](lessons/03-03-uniform-boundedness.md) — no other course in
the library derives it.

## Pitfalls

### Completeness and norms

- Cauchy does **not** imply convergent — only in a complete space. The rationals closing on $\sqrt2$ are the standing counterexample. *([1.1](lessons/01-01-metric-spaces-completeness.md))*
- Completeness is a property of the **metric**, not the set: $C[0,1]$ is complete in sup norm and incomplete in $L^1$. Same functions, opposite verdicts. *([1.1](lessons/01-01-metric-spaces-completeness.md), [1.3](lessons/01-03-standard-examples-lp-c-lp.md))*
- Completeness is not a topological invariant: $(0,1)\cong\mathbb{R}$ as topological spaces, but only one of them is complete. *([1.1](lessons/01-01-metric-spaces-completeness.md))*
- Not every metric comes from a norm — the discrete metric ignores scale, so it violates homogeneity. *([1.2](lessons/01-02-normed-banach-spaces.md))*
- "Normed" is not "Banach." The polynomials under the sup norm converge uniformly to $e^t$, which is no polynomial. *([1.2](lessons/01-02-normed-banach-spaces.md))*
- The norm is a **choice**, not a property of the vectors; in infinite dimensions different choices give different topologies *and* different completeness verdicts. *([1.2](lessons/01-02-normed-banach-spaces.md), [1.4](lessons/01-04-finite-vs-infinite-dimensions.md))*
- An element of $L^p$ is an equivalence class, not a function with a value at each point — "the value at $t=\tfrac12$" is meaningless. *([1.3](lessons/01-03-standard-examples-lp-c-lp.md))*
- The $p$-inclusions **reverse** between sequences and functions: $\ell^p\subset\ell^q$ but $L^q\subset L^p$ for $p\le q$ on a finite interval. *([1.3](lessons/01-03-standard-examples-lp-c-lp.md))*

### Infinite dimensions

- "All norms are equivalent" is a **finite-dimensional** theorem. Never quote it for a function space. *([1.4](lessons/01-04-finite-vs-infinite-dimensions.md))*
- A bounded sequence need not have a convergent subsequence; the closed unit ball is never compact in infinite dimensions. *([1.4](lessons/01-04-finite-vs-infinite-dimensions.md))*
- Separable is not finite-dimensional — $\ell^2$ is separable with a non-compact ball. *([1.4](lessons/01-04-finite-vs-infinite-dimensions.md))*
- $\|e_n-e_m\|_2=\sqrt2$, not $2$ — the triangle inequality is a loose bound here, not the distance. *([1.4](lessons/01-04-finite-vs-infinite-dimensions.md))*
- Injective and surjective decouple: the right shift is an isometry with $R^*R=I$ that is still not invertible. One-sided inverses are a purely infinite-dimensional phenomenon. *([3.5](lessons/03-05-adjoints-bounded-operators.md), [4.3](lessons/04-03-fredholm-alternative.md))*

### Inner products and projections

- In a complex space $\langle x,y\rangle=\overline{\langle y,x\rangle}$, not $\langle y,x\rangle$; and never mix slot conventions inside one computation. *([2.1](lessons/02-01-inner-products-cauchy-schwarz.md))*
- Not every norm comes from an inner product — the parallelogram law is the exact gatekeeper, and $\ell^p,L^p$ fail it for every $p\ne2$. *([2.1](lessons/02-01-inner-products-cauchy-schwarz.md), [2.2](lessons/02-02-orthogonality-projection-theorem.md))*
- Inner-product space $\ne$ Hilbert space: completeness is an extra ingredient ($c_{00}$ has one and lacks the other). *([2.1](lessons/02-01-inner-products-cauchy-schwarz.md))*
- The projection theorem needs $M$ **closed** *and* $H$ **complete**. Onto the finitely-supported sequences in $\ell^2$ there is simply no nearest point. *([2.2](lessons/02-02-orthogonality-projection-theorem.md))*
- $P^2=P$ alone gives an *oblique* projection; orthogonal needs $P=P^*$ as well. *([2.2](lessons/02-02-orthogonality-projection-theorem.md))*
- $(M^\perp)^\perp=\overline{M}$ in general, equal to $M$ only when $M$ is closed. *([2.2](lessons/02-02-orthogonality-projection-theorem.md))*

### Bases and expansions

- A Hilbert-space orthonormal basis is not a Hamel basis: infinite sums are allowed and usually required. *([2.3](lessons/02-03-orthonormal-bases-fourier.md))*
- **Bessel always, Parseval only if complete.** Drop one axis and every vector with a component there has a permanent blind spot. *([2.3](lessons/02-03-orthonormal-bases-fourier.md))*
- $x=\sum c_ne_n$ converges **in norm**, not pointwise — the Gibbs overshoot never shrinks in height, only in area. *([2.3](lessons/02-03-orthonormal-bases-fourier.md))*

### Duality

- Self-duality is special to Hilbert spaces: $(\ell^p)^*=\ell^q$ pairs *different* spaces, and $(\ell^\infty)^*$ dwarfs $\ell^1$. Reflexivity is a privilege. *([2.4](lessons/02-04-riesz-representation.md), [3.2](lessons/03-02-dual-spaces-hahn-banach.md))*
- The Riesz map is **conjugate**-linear; forgetting the conjugate on $y$ represents $\overline{f}$, not $f$. *([2.4](lessons/02-04-riesz-representation.md))*
- Riesz is about the *continuous* dual — unbounded linear functionals exist and no vector represents them. *([2.4](lessons/02-04-riesz-representation.md))*

### The big theorems

- The content of Hahn–Banach is **norm preservation**, not existence of some extension (extending a functional is trivial). And it is non-constructive — do not expect a formula. *([3.2](lessons/03-02-dual-spaces-hahn-banach.md))*
- The separation form needs the set to be **convex and closed**; strip either and no wall need exist. *([3.2](lessons/03-02-dual-spaces-hahn-banach.md))*
- Uniform boundedness, open mapping, bounded inverse, and closed graph all die without **completeness** — that is Baire, and it is the whole mechanism. On $c_{00}$ the functionals $x\mapsto n x_n$ are pointwise bounded with $\|T_n\|=n$. *([3.3](lessons/03-03-uniform-boundedness.md), [3.4](lessons/03-04-open-mapping-closed-graph.md))*
- UBP bounds the **operator norms**, not just the values $\|T_\alpha x\|$ — that uniformity in $x$ is the whole point. *([3.3](lessons/03-03-uniform-boundedness.md))*
- Pointwise $\Rightarrow$ uniform is legal only for *linear* families on a complete space; do not export it to nonlinear maps. *([3.3](lessons/03-03-uniform-boundedness.md))*
- Never "strengthen" a closed-graph argument by also proving $Tx_n$ converges — being allowed to assume it is the entire economy of the method. *([3.4](lessons/03-04-open-mapping-closed-graph.md))*
- Closed $\ne$ bounded. The equivalence needs the operator to be **everywhere defined** on a Banach space; $d/dx$ is closed, unbounded, and defined on a proper domain. *([3.4](lessons/03-04-open-mapping-closed-graph.md), [5.1](lessons/05-01-unbounded-operators-domains.md))*

### Operators and adjoints

- "Bounded" means the *gain* has a ceiling, not that the image is a bounded set. *([3.1](lessons/03-01-bounded-operators-operator-norm.md))*
- Continuous $=$ bounded holds for **linear** maps only ($x\mapsto x^2$ is a counterexample otherwise). *([3.1](lessons/03-01-bounded-operators-operator-norm.md))*
- The supremum defining $\|T\|$ need not be attained: $\lambda_n=1-1/n$ gives $\|T\|=1$ with no unit vector reaching it. *([3.1](lessons/03-01-bounded-operators-operator-norm.md))*
- $B(X,Y)$ is Banach because **$Y$** is complete; $X$ need not be. *([3.1](lessons/03-01-bounded-operators-operator-norm.md))*
- Suspect any operator involving derivatives of being unbounded, and expect to name a domain. *([3.1](lessons/03-01-bounded-operators-operator-norm.md), [5.1](lessons/05-01-unbounded-operators-domains.md))*
- $T^*$ is the *Hilbert-space* adjoint, tied to the inner product — not the Banach transpose $T':Y^*\to X^*$. *([3.5](lessons/03-05-adjoints-bounded-operators.md))*

### Spectrum and compactness

- The spectrum is **not** just the eigenvalues: $M_x$ has an entire interval of spectrum and no eigenvectors at all. *([4.1](lessons/04-01-spectrum-of-an-operator.md), [4.4](lessons/04-04-spectral-theorem-compact-self-adjoint.md))*
- $\lambda\in\sigma(T)$ means $T-\lambda$ is not **boundedly** invertible — an unbounded inverse still counts. *([4.1](lessons/04-01-spectrum-of-an-operator.md))*
- Over $\mathbb{C}$ the spectrum is never empty; over $\mathbb{R}$ it can be (rotation). *([4.1](lessons/04-01-spectrum-of-an-operator.md))*
- $r(T)\le\|T\|$, with equality not guaranteed — use $\lim\|T^n\|^{1/n}$ for the sharp value. *([4.1](lessons/04-01-spectrum-of-an-operator.md))*
- Compact is strictly stronger than bounded, and the identity is compact **only** in finite dimensions. *([4.2](lessons/04-02-compact-operators.md))*
- A compact operator on an infinite-dimensional space is never boundedly invertible; $0$ is always in its spectrum. *([4.2](lessons/04-02-compact-operators.md), [4.4](lessons/04-04-spectral-theorem-compact-self-adjoint.md))*
- Finite-rank $\subsetneq$ compact: $\operatorname{diag}(1/n)$ is compact with infinite-dimensional range. *([4.2](lessons/04-02-compact-operators.md))*
- The Fredholm alternative needs $I-K$ with $K$ **compact** — for a general bounded operator there is no dichotomy. *([4.3](lessons/04-03-fredholm-alternative.md))*
- Branch (b) is not "unsolvable": it is solvable for every $y\perp\ker(I-K^{*})$ — orthogonality to the **adjoint's** kernel, not to $\ker(I-K)$. *([4.3](lessons/04-03-fredholm-alternative.md))*
- Self-adjoint alone gives no eigenbasis; **compactness** is what manufactures a discrete one, and $0$ is an eigenvalue only when $\ker K\ne\{0\}$. Infinite multiplicity is allowed only at $0$. *([4.4](lessons/04-04-spectral-theorem-compact-self-adjoint.md))*
- With continuous spectrum the eigenbasis is genuinely gone — the projection-valued measure replaces it, and that is the only honest statement. *([4.5](lessons/04-05-bounded-self-adjoint-spectral-theorem.md), [5.3](lessons/05-03-spectral-theorem-unbounded.md))*

### Unbounded operators and domains

- Writing a formula is not writing an operator: **name the domain**, or you have specified nothing. The same formula on different domains gives different operators. *([5.1](lessons/05-01-unbounded-operators-domains.md))*
- "Closed" is not "bounded" and not "continuous" — it controls limits *jointly* in $(x,Ax)$. *([5.1](lessons/05-01-unbounded-operators-domains.md))*
- **Symmetric $\ne$ self-adjoint** — the universal physics-course error. The actions never disagree; the *domains* do. *([5.2](lessons/05-02-symmetric-vs-self-adjoint.md), [3.5](lessons/03-05-adjoints-bounded-operators.md))*
- A symmetric operator may have zero, one, or a whole family of self-adjoint extensions; the deficiency indices decide, and unequal indices mean none exist. *([5.2](lessons/05-02-symmetric-vs-self-adjoint.md))*
- Boundary conditions **are** the choice of self-adjoint extension — box versus ring is a different operator with a different spectrum, not a modelling footnote. *([5.2](lessons/05-02-symmetric-vs-self-adjoint.md))*
- No spectral measure, no functional calculus, and no unitary group for a merely symmetric operator — fix the domain first. *([5.3](lessons/05-03-spectral-theorem-unbounded.md), [5.4](lessons/05-04-stone-theorem-time-evolution.md))*
- A **bounded** Borel function of an unbounded operator is a **bounded** operator — the unboundedness does not leak through. *([5.3](lessons/05-03-spectral-theorem-unbounded.md))*
- $e^{itA}$ is the functional calculus, not the power series $\sum(itA)^n/n!$, which diverges for unbounded $A$. *([5.4](lessons/05-04-stone-theorem-time-evolution.md))*
- Stone is an "if and only if" in both directions, and $D(A)$ is only the *differentiable* states — everything else still evolves under $U(t)$. *([5.4](lessons/05-04-stone-theorem-time-evolution.md))*
