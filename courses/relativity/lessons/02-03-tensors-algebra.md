# Relativity (SR + GR) · Lesson 2.3: Tensors and tensor algebra

> ⏱ ~15 min · Module 2: Tensors on Minkowski spacetime · Builds on: [2.1 Index notation and the Minkowski metric](#/lesson/relativity/02-01-index-notation-minkowski-metric.md), [2.2 Vectors, covectors, and transformations](#/lesson/relativity/02-02-vectors-covectors-transformations.md) · Unlocks: 2.4 (invariants & Levi-Civita), and the tensors of Module 3 — $F_{\mu\nu}$, $T^{\mu\nu}$ — and all of GR

## Why this matters

Physics has no preferred observer. If a law is true, it must be true in every inertial frame — and the cleanest way to *guarantee* that is to write the law as an equation between **tensors**, because both sides then transform in lockstep and the equality survives the boost automatically. This is the whole reason the tensor formalism exists: **manifest covariance**. Every headline object ahead is a tensor — the electromagnetic field $F_{\mu\nu}$ (3.5), the stress–energy $T^{\mu\nu}$ that sources gravity (3.3), the Riemann curvature (Module 4), and Einstein's equations themselves (Module 5). Master the algebra once here and those all become bookkeeping.

Throughout we work in Minkowski spacetime with metric signature $(-,+,+,+)$, so $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$, and Greek indices run $0,1,2,3$.

## The idea

You already met the two atoms in 2.2. A **vector** (contravariant, index up) transforms one way; a **covector** (covariant, index down) transforms the *opposite* way, with the inverse. A **tensor** is nothing more exotic than an object carrying *several* indices at once — each index just drags along its own copy of the appropriate rule: one boost matrix $\Lambda$ for every upper index, one inverse $\Lambda^{-1}$ for every lower index.

There's a second, equivalent picture that's often clearer: a tensor is a **machine**. Feed it the right number of vectors and covectors — one for each slot — and it returns a single number, doing so *linearly* in every slot. A covector eats one vector and returns a number; the metric $\eta_{\mu\nu}$ eats two vectors and returns their inner product; a rank-$(1,1)$ tensor eats one covector and one vector. "Multi-index object" and "multilinear machine" are the same thing seen from two sides (this is exactly the linear-map viewpoint from `linalg-refresher` [2.1 Matrices as linear maps](#/lesson/linalg-refresher/02-01-matrices-as-linear-maps.md), one dimension up).

The payoff falls out immediately. Suppose two tensors of the same type are equal in one frame, $A = B$. Both sides transform by the *identical* string of $\Lambda$'s and $\Lambda^{-1}$'s, so applying it gives $A' = B'$ — the equation holds in the boosted frame too, with no extra work. **A tensor equation true in one frame is true in all of them.** That single sentence is why relativity is written in this language.

## The formal version

**Rank and the transformation law.** An object with $p$ upper and $q$ lower indices is a **tensor of rank $(p,q)$** (or "type $(p,q)$") if its components in a boosted frame are

$$
T'^{\mu_1\cdots\mu_p}{}_{\nu_1\cdots\nu_q}
=\Lambda^{\mu_1}{}_{\alpha_1}\cdots\Lambda^{\mu_p}{}_{\alpha_p}\,
(\Lambda^{-1})^{\beta_1}{}_{\nu_1}\cdots(\Lambda^{-1})^{\beta_q}{}_{\nu_q}\;
T^{\alpha_1\cdots\alpha_p}{}_{\beta_1\cdots\beta_q},
$$

where $\Lambda^{\mu}{}_{\nu}$ is the Lorentz boost matrix (a vector transforms as $V'^\mu=\Lambda^\mu{}_\nu V^\nu$) and $(\Lambda^{-1})^\mu{}_\nu$ its inverse, satisfying $\Lambda^\mu{}_\rho\,(\Lambda^{-1})^\rho{}_\nu=\delta^\mu_\nu$. In words: **one $\Lambda$ per up-index, one $\Lambda^{-1}$ per down-index — nothing more.** A vector is rank $(1,0)$, a covector $(0,1)$, a scalar $(0,0)$; higher ranks are the new content.

**Tensor as a multilinear map.** Equivalently, a rank-$(p,q)$ tensor is a map that takes $p$ covectors and $q$ vectors and returns a real number, linear in each argument. The components are just the outputs on the basis: $T^{\mu\nu}{}_{\rho}=T(e^\mu,e^\nu;e_\rho)$. The two definitions agree because "returns the same number in every frame" *forces* the component transformation law above.

**Tensor algebra — four operations.**

- **Addition** (same type only): $(S+T)^{\mu}{}_{\nu}=S^{\mu}{}_{\nu}+T^{\mu}{}_{\nu}$. You cannot add a $(1,1)$ to a $(2,0)$; the indices wouldn't match on both sides.
- **Outer (tensor) product**: multiply components and *concatenate* indices — ranks add. $(S\otimes T)^{\mu\nu}{}_{\rho}=S^{\mu}\,T^{\nu}{}_{\rho}$ is rank $(2,1)$ from a $(1,0)$ and a $(1,1)$. In words: gluing two machines into one bigger machine.
- **Contraction**: set one upper index equal to one lower index and sum (Einstein convention). This eats one of each, lowering the rank by $(1,1)$: from $T^{\mu}{}_{\nu\rho}$ form $T^{\mu}{}_{\mu\rho}=\sum_\mu T^{\mu}{}_{\mu\rho}$, a rank-$(0,1)$ object. In words: **feed one of the machine's own outputs back into one of its inputs.** The trace of a matrix is the $(1,1)\to(0,0)$ case: $T^\mu{}_\mu$.
- **Raising and lowering** with the metric (from 2.1): $T^{\mu}{}_{\nu}=\eta_{\nu\rho}T^{\mu\rho}$ and $T^{\mu\nu}=\eta^{\nu\rho}T^{\mu}{}_{\rho}$, where $\eta^{\mu\nu}$ is the inverse metric ($\eta^{\mu\rho}\eta_{\rho\nu}=\delta^\mu_\nu$). The metric converts index types at will — it's how "the same tensor" wears upper or lower indices.

Each operation produces a genuine tensor: the $\Lambda$'s and $\Lambda^{-1}$'s on the paired indices in a contraction meet as $\Lambda^\mu{}_\rho(\Lambda^{-1})^\rho{}_\nu=\delta^\mu_\nu$ and cancel, which is *why* contraction is a legal, frame-independent operation.

**Symmetry.** For a rank-2 tensor, split into symmetric and antisymmetric parts:

$$
T^{(\mu\nu)}=\tfrac12\!\left(T^{\mu\nu}+T^{\nu\mu}\right),\qquad
T^{[\mu\nu]}=\tfrac12\!\left(T^{\mu\nu}-T^{\nu\mu}\right),\qquad
T^{\mu\nu}=T^{(\mu\nu)}+T^{[\mu\nu]}.
$$

In words: every 2-index tensor splits uniquely into a symmetric piece (unchanged under swapping indices) and an antisymmetric piece (flips sign). The crucial fact: **symmetry type is Lorentz-invariant** — if $T^{\mu\nu}=T^{\nu\mu}$ in one frame, the same holds in every frame, because both indices transform identically so swapping them commutes with the boost. Symmetry is a real, frame-independent property of the object, not an accident of coordinates.

**The quotient theorem** (a practical converse). If, for *every* vector $V^\nu$, the quantity $T_{\mu\nu}V^\nu$ transforms as a covector, then $T_{\mu\nu}$ is itself a rank-$(0,2)$ tensor. In words: **if an indexed array always spits out a tensor when fed a tensor, it was a tensor all along.** This is the usual way to *prove* something is a tensor without checking its transformation law head-on (P3 works it out).

## Concrete instance

A fully worked build-and-dissect, in a 2D spacetime toy ($\mu,\nu\in\{0,1\}$, $\eta=\mathrm{diag}(-1,+1)$) so the arithmetic stays visible; nothing about the operations changes in 4D.

**1. Build a rank-2 tensor as an outer product.** Take a vector $U^\mu=(2,1)$ and a covector $W_\nu=(3,0)$. Their outer product is the rank-$(1,1)$ tensor $T^\mu{}_\nu=U^\mu W_\nu$, i.e. row $\mu$ is $U^\mu$ times the row $W$:

$$
T^{\mu}{}_{\nu}=
\begin{pmatrix} U^0W_0 & U^0W_1\\ U^1W_0 & U^1W_1\end{pmatrix}
=\begin{pmatrix} 6 & 0\\ 3 & 0\end{pmatrix}.
$$

**2. Contract it.** Sum the upper with the lower index — here the matrix trace:

$$
T^{\mu}{}_{\mu}=T^{0}{}_{0}+T^{1}{}_{1}=6+0=6.
$$

Check against the shortcut $T^\mu{}_\mu=U^\mu W_\mu=U^0W_0+U^1W_1=2\cdot3+1\cdot0=6$. ✓ Contraction turned a rank-$(1,1)$ tensor into a rank-$(0,0)$ scalar.

**3. Split a 2-index tensor into symmetric + antisymmetric parts.** Take (both indices down)

$$
M_{\mu\nu}=\begin{pmatrix} 1 & 4\\ 2 & 3\end{pmatrix},\qquad
M_{\nu\mu}=\begin{pmatrix} 1 & 2\\ 4 & 3\end{pmatrix}\ (\text{the transpose}).
$$

$$
M_{(\mu\nu)}=\tfrac12(M_{\mu\nu}+M_{\nu\mu})=\begin{pmatrix} 1 & 3\\ 3 & 3\end{pmatrix},\qquad
M_{[\mu\nu]}=\tfrac12(M_{\mu\nu}-M_{\nu\mu})=\begin{pmatrix} 0 & 1\\ -1 & 0\end{pmatrix}.
$$

Their sum is $\begin{pmatrix}1&4\\2&3\end{pmatrix}=M_{\mu\nu}$ ✓. The symmetric part is fixed under transpose; the antisymmetric part flips sign and has zero diagonal. Both of these decompositions — and every equality above — hold identically in any boosted frame.

## Worked examples

**Example 1 (mechanical — invariants by contraction).** Contraction is the engine that turns tensors into frame-independent numbers. Two staples:

- The identity tensor $\delta^\mu_\nu$ contracted with itself is the dimension: $\delta^\mu_\mu=\delta^0_0+\delta^1_1+\delta^2_2+\delta^3_3=4$. (In $n$ dimensions it's $n$.) And $\eta^{\mu\nu}\eta_{\mu\nu}=\delta^\mu_\mu=4$ — lowering then contracting the metric against itself returns $4$, a fact you'll reuse constantly.
- Given a vector $A^\mu$, lower it with the metric, $A_\mu=\eta_{\mu\nu}A^\nu$, then contract: $A_\mu A^\mu=\eta_{\mu\nu}A^\mu A^\nu$. This is a rank-$(0,0)$ scalar — the *same number in every frame*. For $A^\mu=(A^0,A^1,A^2,A^3)$ it is $-(A^0)^2+(A^1)^2+(A^2)^2+(A^3)^2$. That single invariant is the spacetime interval (1.4) and the mass shell $p_\mu p^\mu=-m^2c^2$ (1.5), now seen as *contraction producing a scalar*.

**Example 2 (why you'd care — the field tensor's symmetry and its invariant).** The electromagnetic field is packaged (previewed in 3.5) into a rank-$(0,2)$ tensor $F_{\mu\nu}$ that is **antisymmetric**: $F_{\mu\nu}=-F_{\nu\mu}$. Two immediate consequences, both purely algebraic:

- Its symmetric part vanishes, $F_{(\mu\nu)}=0$, and its diagonal is zero ($F_{\mu\mu}=0$, no sum). Antisymmetry is Lorentz-invariant, so "$F$ is antisymmetric" is a frame-independent statement — it's not that $\mathbf E,\mathbf B$ happen to arrange this way in one frame; they *must* in all.
- Raise both indices with the metric and contract: $F_{\mu\nu}F^{\mu\nu}$ is a scalar, one of the genuine invariants of the electromagnetic field (it works out to $2(B^2-E^2/c^2)$). Every observer, whatever their velocity, computes the *same* value from their own $\mathbf E$ and $\mathbf B$. That's the manifest-covariance promise cashed out on a real object — and exactly the kind of invariant Module 2.4 systematizes.

## Watch out

- **Not every indexed array is a tensor.** "Has indices" is not the definition; "obeys the transformation law" is. The Christoffel symbols $\Gamma^\lambda{}_{\mu\nu}$ (Module 4) carry three indices and are emphatically *not* a tensor. When in doubt, use the quotient theorem as your test.
- **Contraction pairs one up with one down.** Summing two upper indices, "$T^{\mu\mu}$", is *not* a Lorentz-invariant operation — you'd get two $\Lambda$'s that don't cancel. To contract two indices of the same height, you must insert the metric first: $\eta_{\mu\nu}T^{\mu\nu}$. (That's why the "trace" of $T^{\mu\nu}$ means $\eta_{\mu\nu}T^{\mu\nu}$, not $\sum_\mu T^{\mu\mu}$.)
- **Symmetry statements need both indices at the same height.** $T^{\mu\nu}=T^{\nu\mu}$ is a clean frame-independent condition. But "$T^\mu{}_\nu$ is symmetric" is ambiguous — the two indices transform *oppositely*, so swapping them is not a boost-invariant operation. Raise or lower with the metric to put both indices at the same height before you talk about symmetry.

## One-liner

> A tensor is a multi-index machine — one $\Lambda$ per up-index, one $\Lambda^{-1}$ per down-index — and the entire point is that a tensor equation true in one frame is automatically true in all of them.

## Problems

**P1 (🟢)** In 2D spacetime ($\mu,\nu\in\{0,1\}$, $\eta=\mathrm{diag}(-1,+1)$) a rank-$(2,0)$ tensor has components
$$T^{\mu\nu}=\begin{pmatrix} 3 & 5\\ 1 & 7\end{pmatrix}.$$
(a) Compute its trace $\eta_{\mu\nu}T^{\mu\nu}$ (the metric contraction — mind the sign). (b) Compute its symmetric part $T^{(\mu\nu)}$ and antisymmetric part $T^{[\mu\nu]}$, and verify they sum to $T^{\mu\nu}$.

**P2 (🟡)** Let $S^{\mu\nu}$ be symmetric ($S^{\mu\nu}=S^{\nu\mu}$) and $A_{\mu\nu}$ antisymmetric ($A_{\mu\nu}=-A_{\nu\mu}$). Show that the full contraction vanishes: $S^{\mu\nu}A_{\mu\nu}=0$. (This is why in any expression $S^{\mu\nu}X_{\mu\nu}$ only the symmetric part of $X$ survives — a workhorse trick in field theory.)

**P3 (🔴, optional)** *Quotient theorem.* Suppose $T_{\mu\nu}$ is some doubly-indexed array, and you know that for *every* vector $V^\nu$ the contraction $W_\mu\equiv T_{\mu\nu}V^\nu$ transforms as a covector. Argue that $T_{\mu\nu}$ must be a rank-$(0,2)$ tensor, i.e. it obeys $T'_{\mu\nu}=(\Lambda^{-1})^\rho{}_\mu(\Lambda^{-1})^\sigma{}_\nu\,T_{\rho\sigma}$.

<details>
<summary>Solutions</summary>

**P1** (a) With $\eta=\mathrm{diag}(-1,+1)$,
$$\eta_{\mu\nu}T^{\mu\nu}=-T^{00}+T^{11}=-3+7=4.$$
(The off-diagonal $T^{01},T^{10}$ don't enter because $\eta$ is diagonal.)

(b) The transpose is $T^{\nu\mu}=\begin{pmatrix}3&1\\5&7\end{pmatrix}$, so
$$T^{(\mu\nu)}=\tfrac12\!\begin{pmatrix}6&6\\6&14\end{pmatrix}=\begin{pmatrix}3&3\\3&7\end{pmatrix},\qquad
T^{[\mu\nu]}=\tfrac12\!\begin{pmatrix}0&4\\-4&0\end{pmatrix}=\begin{pmatrix}0&2\\-2&0\end{pmatrix}.$$
Sum: $\begin{pmatrix}3&3\\3&7\end{pmatrix}+\begin{pmatrix}0&2\\-2&0\end{pmatrix}=\begin{pmatrix}3&5\\1&7\end{pmatrix}=T^{\mu\nu}$ ✓.

**P2** The indices $\mu,\nu$ are both summed (dummy), so they can be renamed freely. Start from the expression and swap the two dummy labels $\mu\leftrightarrow\nu$:
$$S^{\mu\nu}A_{\mu\nu}=S^{\nu\mu}A_{\nu\mu}\quad(\text{just relabeling}).$$
Now use the two symmetries on the right: $S^{\nu\mu}=S^{\mu\nu}$ (symmetric) and $A_{\nu\mu}=-A_{\mu\nu}$ (antisymmetric):
$$S^{\nu\mu}A_{\nu\mu}=S^{\mu\nu}\,(-A_{\mu\nu})=-\,S^{\mu\nu}A_{\mu\nu}.$$
So $S^{\mu\nu}A_{\mu\nu}=-S^{\mu\nu}A_{\mu\nu}$, hence $2\,S^{\mu\nu}A_{\mu\nu}=0$, i.e. $S^{\mu\nu}A_{\mu\nu}=0$. ∎ (A quantity equal to its own negative must be zero.)

**P3** Work in a boosted frame. Because $V$ is a vector and $W$ is (given) a covector,
$$V'^\nu=\Lambda^\nu{}_\alpha V^\alpha,\qquad W'_\mu=(\Lambda^{-1})^\rho{}_\mu\,W_\rho .$$
The defining relation $W_\mu=T_{\mu\nu}V^\nu$ is assumed to hold in *every* frame (it's how $W$ is built), so in the primed frame
$$T'_{\mu\nu}V'^\nu=W'_\mu=(\Lambda^{-1})^\rho{}_\mu\,W_\rho=(\Lambda^{-1})^\rho{}_\mu\,T_{\rho\sigma}V^\sigma .$$
Rewrite the left side using the vector law $V'^\nu=\Lambda^\nu{}_\alpha V^\alpha$:
$$T'_{\mu\nu}\,\Lambda^\nu{}_\alpha\,V^\alpha=(\Lambda^{-1})^\rho{}_\mu\,T_{\rho\sigma}\,V^\sigma .$$
Rename the dummy $\sigma\to\alpha$ on the right; the equation now holds for **all** $V^\alpha$, so the coefficients of $V^\alpha$ must match:
$$T'_{\mu\nu}\,\Lambda^\nu{}_\alpha=(\Lambda^{-1})^\rho{}_\mu\,T_{\rho\alpha}.$$
Finally contract both sides with $(\Lambda^{-1})^\alpha{}_\nu$ (sum on $\alpha$) and use $\Lambda^\nu{}_\alpha(\Lambda^{-1})^\alpha{}_\lambda=\delta^\nu_\lambda$ on the left:
$$T'_{\mu\lambda}=(\Lambda^{-1})^\rho{}_\mu\,(\Lambda^{-1})^\alpha{}_\lambda\,T_{\rho\alpha}.$$
That is precisely the rank-$(0,2)$ transformation law, so $T_{\mu\nu}$ is a tensor. ∎ The moral: feeding a tensor in and always getting a tensor out is enough to certify tensor-hood — you never had to inspect $T$'s transformation directly.

</details>

## Flashback

**From Lesson 2.2 (Vectors, covectors, and transformations):** Given the four-vector $A^\mu=(2,\,1,\,0,\,0)$ in coordinates $(ct,x,y,z)$ with signature $(-,+,+,+)$, (a) find the covariant components $A_\mu=\eta_{\mu\nu}A^\nu$, and (b) compute the invariant $A_\mu A^\mu$. Is $A^\mu$ timelike, spacelike, or null?

<details>
<summary>Solution</summary>

(a) Lowering with $\eta=\mathrm{diag}(-1,+1,+1,+1)$ flips the sign of the time component only:
$$A_\mu=\eta_{\mu\nu}A^\nu=(-A^0,\,A^1,\,A^2,\,A^3)=(-2,\,1,\,0,\,0).$$
(b) Contract:
$$A_\mu A^\mu=(-2)(2)+(1)(1)+0+0=-4+1=-3.$$
The invariant is negative, so $A^\mu$ is **timelike** (in the $(-,+,+,+)$ convention, negative norm-squared = timelike). Note the answer $-3$ is frame-independent: any boosted observer lowering and contracting their own components lands on $-3$ as well — the point of the whole apparatus.

</details>

## Connections

- **Backward:** this directly generalizes vectors and covectors ([2.2](#/lesson/relativity/02-02-vectors-covectors-transformations.md)) and reuses the metric machinery ([2.1](#/lesson/relativity/02-01-index-notation-minkowski-metric.md)); the multilinear-map picture is `linalg-refresher`'s [matrices-as-linear-maps](#/lesson/linalg-refresher/02-01-matrices-as-linear-maps.md) taken to several arguments, and the symmetric/antisymmetric split is the tensor cousin of splitting a matrix in [spectral theorem & quadratic forms](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md).
- **Forward:** [2.4](#/lesson/relativity/02-04-invariants-levi-civita.md) uses contraction to build all the field invariants; the antisymmetric $F_{\mu\nu}$ ([3.5](#/lesson/relativity/03-05-em-field-theory.md)) and the symmetric stress–energy $T^{\mu\nu}$ ([3.3](#/lesson/relativity/03-03-stress-energy-tensor.md)) are the payoff tensors of Module 3, and the Riemann/Ricci/Einstein tensors of Module 4 and the field equations of Module 5 are all *tensor equations* — manifestly covariant precisely because of the argument in "The idea."
- **Sideways:** manifest covariance is the same instinct as coordinate-free thinking in linear algebra — write the object, not its components, and change of basis takes care of itself. The quotient theorem is the physicist's version of "a bilinear form is determined by its action on all pairs of vectors."
