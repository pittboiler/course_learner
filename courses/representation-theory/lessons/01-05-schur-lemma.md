# Group & Representation Theory · Lesson 1.5: Schur's lemma

> ⏱ ~15 min · Module 1: Representations of finite groups · Builds on: [1.4 Maschke's theorem](01-04-maschke-theorem.md) · Unlocks: Module 2 — [2.1 Characters](02-01-characters.md)

## Why this matters

Maschke told us every finite-group representation over $\mathbb{C}$ shatters into irreducible pieces. But that raises the operational question: *given a rep, how do I tell whether it's already irreducible, or still hiding a sub-piece?* Schur's lemma is the answer — and it's the load-bearing beam of everything after it. It says irreducibles are so **rigid** that the only linear maps respecting the symmetry between two of them are zero or isomorphisms, and the only self-map is a single scalar. That one fact powers character orthogonality (2.2), reads off multiplicities in a decomposition (2.4), forces every irreducible rep of an abelian group to be one-dimensional, and in physics guarantees that any operator commuting with all the symmetries — like the Casimir $J^2$ in [4.4](04-04-su2-representations-angular-momentum.md) — is *constant on each multiplet*. Degeneracy and "good quantum numbers" are Schur's lemma wearing a lab coat.

## The idea

A symmetry doesn't just act on one space — it acts on *every* rep of the same group at once. So the natural maps to care about aren't arbitrary linear maps $T: V \to W$; they're the ones that **commute with the group action** — maps that don't care whether you act-then-map or map-then-act. Call these *intertwiners*. They're the structure-preserving morphisms of representation theory.

Now the punchline. If $V$ and $W$ are irreducible — no invariant subspaces to hide in — an intertwiner has almost nowhere to go. Its kernel is an invariant subspace of $V$, so it's all of $V$ (map is $0$) or nothing (map is injective). Its image is an invariant subspace of $W$, so it's $0$ or all of $W$. Sew those together: $T$ is either the zero map or an isomorphism. **Irreducibles are rigid** — you cannot partially connect two of them.

And a map from an irreducible $V$ to *itself*? Over $\mathbb{C}$, $T$ has an eigenvalue $\lambda$. Then $T - \lambda I$ is again an intertwiner, but it's not invertible (it kills an eigenvector), so by the rigidity above it must be **zero**: $T = \lambda I$. The only self-symmetric operators on an irreducible are scalars. That's it — that's Schur.

## The formal version

**Intertwiner (a.k.a. $G$-equivariant, $G$-linear map, morphism of reps).** Given reps $\rho_V: G \to GL(V)$ and $\rho_W: G \to GL(W)$, a linear map $T: V \to W$ is an **intertwiner** if

$$T\,\rho_V(g) = \rho_W(g)\,T \qquad \text{for all } g \in G.$$

*In words:* $T$ commutes with the group action — acting by $g$ first and then mapping gives the same result as mapping first and then acting by $g$.

**Schur's lemma.** Let $V, W$ be irreducible reps of $G$ over $\mathbb{C}$, and $T: V \to W$ an intertwiner.

- **(a)** Then $T = 0$ or $T$ is an isomorphism. *Why:* $\ker T$ is $G$-invariant (if $Tv=0$ then $T\rho_V(g)v = \rho_W(g)Tv = 0$), so by irreducibility of $V$ it is $\{0\}$ or all of $V$. Likewise $\operatorname{im} T$ is $G$-invariant, so by irreducibility of $W$ it is $\{0\}$ or all of $W$. The only combinations are "$T=0$" or "injective *and* surjective."
- **(b)** If moreover $V = W$, then $T = \lambda I$ for some scalar $\lambda \in \mathbb{C}$. *Why:* $\mathbb{C}$ is algebraically closed, so $T$ has an eigenvalue $\lambda$; then $T - \lambda I$ is an intertwiner (a scalar shift of one) with nontrivial kernel, so it is *not* an isomorphism — by (a) it must be $0$.

*In words:* between two irreducibles there are no partial connections, only nothing or a perfect matching; and an irreducible's only self-symmetries are overall rescalings. **Part (b) needs $\mathbb{C}$** — over $\mathbb{R}$ a rotation is a self-intertwiner with no real eigenvalue, and the lemma fails.

**The commutant (endomorphism algebra).** Collect all self-intertwiners of $V$:

$$\operatorname{End}_G(V) = \{\, T: V \to V \ \mid\ T\rho(g) = \rho(g)T \ \ \forall g \,\}.$$

Part (b) says: **for $V$ irreducible over $\mathbb{C}$, $\operatorname{End}_G(V) = \mathbb{C}\cdot I$, which is $1$-dimensional.** This is a razor-sharp, *computable* irreducibility test:

$$\boxed{\ \dim \operatorname{End}_G(V) = 1 \iff V \text{ is irreducible.}\ }$$

*(One direction is (b). The other: if $V = V_1 \oplus V_2$ splits, then projection onto $V_1$ is a non-scalar intertwiner, so the commutant is bigger than $\mathbb{C}I$.)*

**Two consequences we'll cash in later.**
1. **Every irreducible complex rep of an abelian group is $1$-dimensional.** If $G$ is abelian, each $\rho(g)$ commutes with the *entire* rep, so $\rho(g) \in \operatorname{End}_G(V) = \mathbb{C}I$ — every $\rho(g)$ is scalar. Then *every* line is invariant, so irreducibility forces $\dim V = 1$.
2. **Multiplicity = dimension of the intertwiner space.** The number of times an irreducible $U$ appears in a rep $V$ equals $\dim \operatorname{Hom}_G(U, V)$ — because Schur (a) makes each independent copy contribute exactly one independent intertwiner. This is the engine of decomposition in [2.4](02-04-decomposing-a-representation.md).

## Concrete instance

Take the **standard $2$-dimensional rep** of $S_3$, realizing $S_3$ as the symmetries of an equilateral triangle. Let $r$ be the order-$3$ rotation and $s$ a reflection:

$$\rho(r) = \begin{pmatrix} -\tfrac12 & -\tfrac{\sqrt3}{2} \\[2pt] \tfrac{\sqrt3}{2} & -\tfrac12 \end{pmatrix} \ (\text{rotation by }120^\circ), \qquad \rho(s) = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \ (\text{reflection}).$$

Find every $T = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$ in the commutant — i.e. commuting with **both** generators (that suffices, since $r,s$ generate $S_3$).

**Commute with $\rho(s)$:** $\ T\rho(s) = \begin{pmatrix} a & -b \\ c & -d\end{pmatrix}$, while $\rho(s)T = \begin{pmatrix} a & b \\ -c & -d\end{pmatrix}$. Equal $\Rightarrow b = -b$ and $c = -c \Rightarrow b = c = 0$. So $T = \operatorname{diag}(a,d)$.

**Commute with $\rho(r)$:** with $T = \operatorname{diag}(a,d)$,

$$T\rho(r) = \begin{pmatrix} -\tfrac{a}{2} & -\tfrac{a\sqrt3}{2} \\[2pt] \tfrac{d\sqrt3}{2} & -\tfrac{d}{2} \end{pmatrix}, \qquad \rho(r)T = \begin{pmatrix} -\tfrac{a}{2} & -\tfrac{d\sqrt3}{2} \\[2pt] \tfrac{a\sqrt3}{2} & -\tfrac{d}{2} \end{pmatrix}.$$

The off-diagonal entries match only if $a = d$. Therefore $T = a I$:

$$\operatorname{End}_{S_3}(V_{\text{std}}) = \mathbb{C}\cdot I, \qquad \dim = 1 \ \Rightarrow\ V_{\text{std}} \text{ is irreducible.}$$

**Contrast — a reducible rep has a fatter commutant.** Take the reducible $2$-dim rep $\rho'(g) = \operatorname{diag}(1, \operatorname{sgn}(g))$ (trivial $\oplus$ sign). *Every* diagonal matrix $\operatorname{diag}(a,d)$ commutes with all of these, so $\dim\operatorname{End}_{S_3} = 2 > 1$ — the test flags it as reducible, and the two projections $\operatorname{diag}(1,0), \operatorname{diag}(0,1)$ point straight at the two invariant lines.

## Worked examples

**Example 1 (the commutant test in action — see Concrete instance).** The computation above *is* the test: solving $TM = MT$ for the two generators of $S_3$ collapsed $T$ to $\lambda I$, certifying irreducibility with no character theory required. The moral: **irreducibility is a linear-algebra fact you can solve for** — set up $T\rho(g) = \rho(g)T$ on generators and count the solution space. Dimension $1$ means irreducible; anything more exhibits the hidden splitting.

**Example 2 (abelian $\Rightarrow$ all irreducibles are $1$-dimensional).** Let $G = \mathbb{Z}/n$, written additively $\{0,1,\dots,n-1\}$, generated by $1$. By Consequence 1, every irreducible is $1$-dimensional, so a rep is just a homomorphism $\rho: \mathbb{Z}/n \to \mathbb{C}^\times$. It's pinned down by $\rho(1) = \zeta$, and $n \cdot 1 = 0$ forces $\zeta^n = 1$: $\zeta$ is an $n$-th root of unity. With $\omega = e^{2\pi i/n}$, the $n$ irreducibles are

$$\rho_k: \ j \ \longmapsto\ \omega^{kj} = e^{2\pi i kj/n}, \qquad k = 0, 1, \dots, n-1.$$

These are exactly the **characters** of $\mathbb{Z}/n$ — the discrete Fourier modes. So the entire representation theory of a cyclic group *is* the discrete Fourier transform, and "decompose into irreducibles" *is* "take the DFT." That's the seed of the deep bridge between symmetry and Fourier analysis that Module 2 grows.

## Watch out

- **Part (b) genuinely needs $\mathbb{C}$.** Over $\mathbb{R}$, the $2$-dim rotation rep of $\mathbb{Z}/n$ is irreducible yet its commutant is $2$-dimensional (rotations *and* scalings commute with it) — there's no real eigenvalue to peel off. All of representation theory's clean numerics assume an algebraically closed field. Work over $\mathbb{C}$.
- **The commutant test is about *all* of $G$, not one element.** A single $\rho(g)$ can have wild centralizers; what forces $T = \lambda I$ is commuting with the whole group's action *while $V$ is irreducible*. Check every generator, not one lucky matrix.
- **"$T$ is an isomorphism" doesn't mean $V = W$ literally.** Schur (a) says isomorphic-*or*-zero; two different-looking irreducibles that happen to be isomorphic reps are connected by a nonzero $T$. Non-isomorphic irreducibles have *only* the zero intertwiner between them — that "orthogonality" is precisely what makes character inner products vanish in [2.2](02-02-orthogonality-relations.md).

## One-liner

> Irreducibles are rigid: the only map between two of them is zero-or-isomorphism, the only self-map is a scalar — so a $1$-dimensional commutant *is* the definition of irreducible, made computable.

## Problems

**P1 (🟢)** Let $V$ be the $2$-dim standard rep of $S_3$ from the Concrete instance, and define $T = \rho(r) + \rho(r^2) + \rho(r^3)$ (sum over the three rotations, $r^3 = e$). Show $T$ is an intertwiner, then use Schur to conclude it must be a scalar — and find which scalar.

**P2 (🟡)** A rep of $\mathbb{Z}/2 = \{e, s\}$ on $\mathbb{C}^3$ is given by $\rho(s) = \operatorname{diag}(1, 1, -1)$. Compute the commutant $\operatorname{End}_{\mathbb{Z}/2}(\mathbb{C}^3)$ — the set of all $3\times 3$ matrices commuting with $\rho(s)$ — find its dimension, and say what that dimension tells you about reducibility. (You do *not* need to fully decompose it, just read the test.)

**P3 (🔴 — Boss problem 1: split the regular rep of $S_3$).** The **regular representation** $R$ of $S_3$ is the $6$-dimensional rep on $\mathbb{C}[S_3]$ with basis $\{e_g : g \in S_3\}$ and action $\rho_R(h)\,e_g = e_{hg}$.
(a) Find an explicit $1$-dim invariant subspace on which $R$ acts as the **trivial** rep, and one on which it acts as the **sign** rep.
(b) Using Maschke (complete reducibility) plus the fact that $S_3$'s only irreducibles have dimensions $\{1, 1, 2\}$, decompose $R$ completely into irreducibles. (The dimension bookkeeping does all the work.)
(c) Confirm via Schur's commutant test that the $2$-dimensional standard rep appearing in (b) is genuinely irreducible.

<details>
<summary>Solutions</summary>

**P1.** *Intertwiner:* $T$ is a sum of the operators $\rho(r^k)$; conjugating the whole sum by any $\rho(g)$ permutes the rotations among themselves (the rotations $\{e, r, r^2\}$ form a normal subgroup, so $g\{r^k\}g^{-1}$ is again the set of rotations), hence $\rho(g)\,T\,\rho(g)^{-1} = T$, i.e. $T\rho(g) = \rho(g)T$ for all $g$. So $T$ intertwines $V$ with itself.

Since $V$ is irreducible over $\mathbb{C}$, Schur (b) gives $T = \lambda I$. To find $\lambda$: sum the three rotation matrices. With $\rho(e) = I$, $\rho(r) = \begin{pmatrix} -\tfrac12 & -\tfrac{\sqrt3}{2} \\ \tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix}$, and $\rho(r^2) = \rho(r)^2 = \begin{pmatrix} -\tfrac12 & \tfrac{\sqrt3}{2} \\ -\tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix}$ (rotation by $240^\circ$):

$$T = I + \rho(r) + \rho(r^2) = \begin{pmatrix} 1 - \tfrac12 - \tfrac12 & 0 \\ 0 & 1 - \tfrac12 - \tfrac12\end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0\end{pmatrix} = 0.$$

So $\lambda = 0$ — the averaged rotation operator is the **zero map**. (This is no accident: summing $\rho$ over any nontrivial irreducible's worth of group elements gives $0$, the projection-onto-invariants killing everything with no trivial part. It's the seed of the averaging/projection formula of Module 2.)

**P2.** Write a general $T = (t_{ij})$ and impose $T\rho(s) = \rho(s)T$ with $\rho(s) = \operatorname{diag}(1,1,-1)$. Right-multiplying by $\operatorname{diag}(1,1,-1)$ negates column $3$; left-multiplying negates row $3$. Equality forces every entry where exactly one index is $3$ to vanish: $t_{13} = t_{31} = t_{23} = t_{32} = 0$. The entries with both-or-neither index equal to $3$ are unconstrained:

$$\operatorname{End}_{\mathbb{Z}/2}(\mathbb{C}^3) = \left\{ \begin{pmatrix} t_{11} & t_{12} & 0 \\ t_{21} & t_{22} & 0 \\ 0 & 0 & t_{33}\end{pmatrix} \right\}, \qquad \dim = 5.$$

Since $5 > 1$, the rep is **reducible** — as expected, it's the $+1$-eigenspace ($2$-dim, where $\mathbb{Z}/2$ acts trivially) block-summed with the $-1$-eigenspace ($1$-dim, the sign rep). The block structure of the commutant ($2\times2$ block $\oplus$ $1\times 1$ block, giving $4 + 1 = 5$) mirrors the decomposition itself — the commutant literally *sees* the invariant subspaces.

**P3.**

**(a) Trivial and sign lines.** Set $v_{\text{triv}} = \sum_{g \in S_3} e_g$. Then $\rho_R(h)\,v_{\text{triv}} = \sum_g e_{hg} = \sum_{g'} e_{g'} = v_{\text{triv}}$ (relabel $g' = hg$; multiplication by $h$ permutes the group). So $\mathbb{C}\,v_{\text{triv}}$ is invariant with $\rho_R(h)$ acting as $1$ — the **trivial** rep.

Set $v_{\text{sgn}} = \sum_{g} \operatorname{sgn}(g)\, e_g$ (so $+e_g$ for the three rotations, $-e_g$ for the three reflections). Then

$$\rho_R(h)\,v_{\text{sgn}} = \sum_g \operatorname{sgn}(g)\,e_{hg} = \sum_{g'} \operatorname{sgn}(h^{-1}g')\,e_{g'} = \operatorname{sgn}(h)\sum_{g'}\operatorname{sgn}(g')\,e_{g'} = \operatorname{sgn}(h)\,v_{\text{sgn}},$$

using $\operatorname{sgn}(h^{-1}g') = \operatorname{sgn}(h^{-1})\operatorname{sgn}(g') = \operatorname{sgn}(h)\operatorname{sgn}(g')$. So $\mathbb{C}\,v_{\text{sgn}}$ is invariant with $\rho_R(h)$ acting as $\operatorname{sgn}(h)$ — the **sign** rep.

**(b) Full decomposition.** By Maschke, $R$ is a direct sum of irreducibles, and $S_3$'s irreducible dimensions are $\{1, 1, 2\}$ (trivial, sign, standard). Write $R \cong a\cdot\text{triv} \oplus b\cdot\text{sgn} \oplus c\cdot\text{std}$. Dimension count: $a + b + 2c = 6$. From (a), $a \ge 1$ and $b \ge 1$. In fact each $1$-dim irreducible occurs exactly once: the trivial subspace is spanned uniquely (up to scale) by the all-ones vector $v_{\text{triv}}$, and likewise for $v_{\text{sgn}}$, so $a = b = 1$ (any second trivial line would give a $2$-dimensional space fixed by all of $R$, but $R$'s fixed space is exactly $\mathbb{C}v_{\text{triv}}$). That leaves $2c = 6 - 1 - 1 = 4$, so $c = 2$:

$$\boxed{\ R \cong \text{triv} \ \oplus\ \text{sgn} \ \oplus\ 2\cdot\text{std}.\ }$$

Each irreducible appears with multiplicity equal to its own dimension ($1,1,2$) — the general theorem about the regular representation, which we'll prove cleanly in [2.5](02-05-regular-representation.md). Notice $\dim R = 1^2 + 1^2 + 2^2 = 6 = |S_3|$: the sum-of-squares identity, previewing character theory.

**(c) Standard is irreducible.** This is exactly the Concrete-instance computation: with $\rho(r) = \begin{pmatrix} -\tfrac12 & -\tfrac{\sqrt3}{2} \\ \tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix}$ and $\rho(s) = \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix}$, solving $T\rho(s) = \rho(s)T$ forces $T$ diagonal, and then $T\rho(r) = \rho(r)T$ forces the two diagonal entries equal. Hence $\operatorname{End}_{S_3}(\text{std}) = \mathbb{C}I$, $\dim = 1$, so the $2$-dim standard rep is irreducible — and the two copies in $R$ are legitimately irreducible summands, not a disguised $4$-dim reducible block.

</details>

## Flashback

**From Lesson 1.4 (Maschke's theorem — averaging).** A rep of $\mathbb{Z}/2 = \{e, s\}$ on $\mathbb{C}^2$ has $\rho(s) = \begin{pmatrix} 1 & 1 \\ 0 & -1\end{pmatrix}$. The line $\mathbb{C}e_1$ (the $x$-axis) is invariant, but the *naive* complement $\mathbb{C}e_2$ is **not**. Use Maschke's averaging trick on the naive projection $P_0 = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}$ (onto $\mathbb{C}e_1$ along $\mathbb{C}e_2$) to produce a $G$-equivariant projection, and read off the *genuine* invariant complement.

<details>
<summary>Solution</summary>

First check $\rho(s)^2 = \begin{pmatrix} 1 & 1 \\ 0 & -1\end{pmatrix}^2 = \begin{pmatrix} 1 & 0 \\ 0 & 1\end{pmatrix} = I$ ✓, so $\rho(s)^{-1} = \rho(s)$ and this really is a rep of $\mathbb{Z}/2$. Average the projection over the group:

$$P = \frac{1}{2}\sum_{g}\rho(g)\,P_0\,\rho(g)^{-1} = \frac{1}{2}\Big(P_0 + \rho(s)P_0\rho(s)\Big).$$

Compute $\rho(s)P_0\rho(s) = \begin{pmatrix} 1 & 1 \\ 0 & -1\end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & -1\end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & -1\end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 0\end{pmatrix}.$ Hence

$$P = \frac12\left(\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix} + \begin{pmatrix} 1 & 1 \\ 0 & 0\end{pmatrix}\right) = \begin{pmatrix} 1 & \tfrac12 \\ 0 & 0\end{pmatrix}.$$

Check it's a $G$-equivariant projection: $P^2 = \begin{pmatrix} 1 & \tfrac12 \\ 0 & 0\end{pmatrix}^2 = \begin{pmatrix} 1 & \tfrac12 \\ 0 & 0\end{pmatrix} = P$ ✓, and it still projects onto $\mathbb{C}e_1$ ($P e_1 = e_1$). The **true invariant complement** is $\ker P = \{(x,y) : x + \tfrac12 y = 0\} = \mathbb{C}\begin{pmatrix} 1 \\ -2\end{pmatrix}$. Verify invariance: $\rho(s)\begin{pmatrix} 1 \\ -2\end{pmatrix} = \begin{pmatrix} 1-2 \\ 2\end{pmatrix} = \begin{pmatrix} -1 \\ 2\end{pmatrix} = -\begin{pmatrix} 1 \\ -2\end{pmatrix}$ ✓ — it's a $(-1)$-eigenvector, a genuine invariant line. Averaging *bent* the naive complement $\mathbb{C}e_2$ into the correct one $\mathbb{C}(1,-2)$, exactly as Maschke promises.

</details>

## Connections

- **Backward:** the proof of (a) *runs on* invariant subspaces from [1.3](01-03-reducibility-invariant-subspaces.md) (kernel and image are invariant), and Boss Problem 1 leans on complete reducibility from [1.4](01-04-maschke-theorem.md). The Flashback's averaging trick is the same machine that proved Maschke.
- **Forward:** Schur is the hidden axle under all of character theory. Orthogonality of characters in [2.2](02-02-orthogonality-relations.md) is Schur (a) integrated over the group; multiplicity = $\dim\operatorname{Hom}_G$ in [2.4](02-04-decomposing-a-representation.md) is Schur made quantitative; the regular-rep decomposition of Boss Problem 1 is completed in [2.5](02-05-regular-representation.md).
- **Sideways (quantum mechanics):** Schur (b) is *the* structural reason for degeneracy. Any operator commuting with all the symmetries of a system — the Casimir $J^2$ on an angular-momentum multiplet in [4.4](04-04-su2-representations-angular-momentum.md) — must act as a single scalar $j(j+1)$ on each irreducible. "Operators commuting with every symmetry are constant on a multiplet" *is* Schur's lemma, and it's why symmetry hands you good quantum numbers and predicts degeneracies before you solve anything. See [`quantum-mechanics`](../../quantum-mechanics/syllabus.md).
- **Sideways (linear algebra):** the commutant computation is pure eigenvalue/eigenspace reasoning — part (b) is "an operator commuting with an irreducible action has no room to be anything but scalar," a sharpened cousin of simultaneous diagonalization. See [`linalg-refresher`](../../linalg-refresher/syllabus.md).
