# Group & Representation Theory · Lesson 1.4: Maschke's theorem

> ⏱ ~15 min · Module 1: Representations of finite groups · Builds on: [1.3 Reducibility and invariant subspaces](01-03-reducibility-invariant-subspaces.md) · Unlocks: [1.5 Schur's lemma](01-05-schur-lemma.md)

## Why this matters

In 1.3 you met a nightmare scenario: an invariant subspace $W \subseteq V$ that you *can't* peel off, because every complement gets scrambled by the group. The matrices block-**triangularize** (a $W$-block in the corner) but refuse to block-**diagonalize** (no clean $W \oplus W'$ split). If that happened often, representation theory would be a swamp of upper-triangular tangles.

Maschke's theorem says: for a **finite** group over $\mathbb{C}$, it *never* happens. Every invariant subspace has an invariant complement; every representation shatters cleanly into irreducible pieces. This one theorem is why the whole subject is clean — it licenses the sentence "every rep is a direct sum of irreducibles," which underwrites all of character theory. And it comes with a sharp catch: the proof divides by $|G|$, so it can fail the instant the field's characteristic divides the group's order. Seeing exactly where and why it breaks is half the lesson.

## The idea

Recall the two obstructions from 1.3, and their two cures.

- **Cure A (geometry).** In 1.2 you learned every finite-group rep can be made **unitary** — averaged into a $G$-invariant inner product where every $\rho(g)$ is a rotation/reflection. Rotations preserve perpendicularity, so the **orthogonal complement** $W^\perp$ of an invariant $W$ is itself invariant. There's your complement, handed to you by the geometry. Split $V = W \oplus W^\perp$, recurse on each piece, and you bottom out at irreducibles.

- **Cure B (algebra).** Forget inner products. Pick *any* projection $P$ onto $W$ — a linear map with $P^2 = P$ and image $W$ — even a lopsided, non-$G$-friendly one. Then **average it over the group**:
$$P_0 = \frac{1}{|G|}\sum_{g \in G}\rho(g)\,P\,\rho(g)^{-1}.$$
Averaging smears out the lopsidedness: $P_0$ is still a projection onto $W$, but now it *commutes with every $\rho(g)$*. A $G$-commuting projection has a $G$-invariant kernel, and $\ker P_0$ is the complement you wanted.

Both cures rely on the same trick — **average over the group and divide by $|G|$** — so both need $|G|$ to be invertible in the field. Over $\mathbb{C}$ that's free. Over $\mathbb{F}_p$ with $p \mid |G|$, dividing by $|G|$ means dividing by $0$, and both cures evaporate. That's not an artifact of the proof; Maschke genuinely fails there, and you'll build the counterexample below.

## The formal version

**Maschke's theorem.** Let $G$ be a finite group and $\rho: G \to GL(V)$ a representation on a finite-dimensional vector space $V$ over a field $k$ whose characteristic does not divide $|G|$ (e.g. $k = \mathbb{C}$, or any characteristic-$0$ field). Then $\rho$ is **completely reducible**: for every invariant subspace $W \subseteq V$ there is an invariant complement $W'$ with $V = W \oplus W'$, and consequently
$$V \;\cong\; V_1 \oplus V_2 \oplus \cdots \oplus V_m$$
as a direct sum of **irreducible** subrepresentations.

*In words:* over $\mathbb{C}$, a finite group's matrices can always be simultaneously block-**diagonalized** into irreducible blocks — no hidden triangular tangling survives. Every rep is built out of irreducible atoms.

**Why one step gives the whole decomposition.** The theorem's content is the single sentence "every invariant subspace has an invariant complement." Complete reducibility then follows by induction on $\dim V$: if $V$ is irreducible, stop; otherwise it has a proper invariant $W$, split off an invariant complement $W'$, and both $W$ and $W'$ have strictly smaller dimension, so induction finishes them.

## Concrete instance — averaging a lopsided projection on the $S_3$ permutation rep

Take the permutation representation of $S_3$ on $\mathbb{C}^3$: $\rho(g)$ permutes the standard coordinates, so each $\rho(g)$ is a $3\times 3$ permutation matrix. From 1.3 you know the invariant line $W = \operatorname{span}\{u\}$, $u = (1,1,1)^{\mathsf T}$ (the **trivial** subrep — every $\rho(g)$ fixes $u$).

Now deliberately pick a **lopsided** (non-invariant) projection onto $W$. Read off the *first* coordinate and blow it up along $u$:
$$P = u\,e_1^{\mathsf T} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \qquad P v = v_1\,u.$$
Check it's a projection onto $W$: $Pu = u_1 u = u$ (so identity on $W$) and $P^2 = u(e_1^{\mathsf T}u)e_1^{\mathsf T} = u\,e_1^{\mathsf T} = P$. But $P$ is *not* $G$-equivariant — it privileges coordinate $1$.

Average it. Because each $\rho(g)$ is a permutation matrix, $\rho(g)^{-1} = \rho(g)^{\mathsf T}$, and $\rho(g)u = u$, so
$$\rho(g)\,P\,\rho(g)^{-1} = \big(\rho(g)u\big)\big(\rho(g)e_1\big)^{\mathsf T} = u\,(\rho(g)e_1)^{\mathsf T}.$$
Sum over the six group elements. As $g$ runs over $S_3$, $\rho(g)e_1 = e_{g(1)}$ hits each of $e_1,e_2,e_3$ exactly twice (the stabilizer of a point has order $2$), so $\sum_g \rho(g)e_1 = 2u$. Hence
$$P_0 = \frac{1}{6}\sum_{g}\rho(g)\,P\,\rho(g)^{-1} = \frac{1}{6}\,u\,(2u)^{\mathsf T} = \frac{1}{3}\,u\,u^{\mathsf T} = \frac{1}{3}\begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}.$$
The lopsidedness is gone: $P_0 = \frac{u u^{\mathsf T}}{u^{\mathsf T}u}$ is exactly the **orthogonal** projection onto $u$. Its kernel is $\ker P_0 = \{v : v_1 + v_2 + v_3 = 0\}$ — the $2$-dimensional **standard** representation, and it is invariant (permuting coordinates preserves "coordinates sum to zero"). Averaging converted a useless skew projection into the honest $G$-equivariant one and handed us the decomposition
$$\mathbb{C}^3 = \underbrace{\operatorname{span}\{u\}}_{\text{trivial}} \;\oplus\; \underbrace{\{v : \textstyle\sum v_i = 0\}}_{\text{standard}},$$
matching 1.3 exactly — now *guaranteed* to exist, not spotted by luck.

## Worked examples

**Example 1 (the averaging construction, in full — Cure B).** Let $W \subseteq V$ be invariant, and let $P$ be *any* projection onto $W$ ($P^2 = P$, $\operatorname{im}P = W$; one exists — pick any complement and project along it). Set $P_0 = \frac{1}{|G|}\sum_g \rho(g)P\rho(g)^{-1}$. Four claims:

1. **$P_0$ maps $V$ into $W$.** Each term: $\rho(g)^{-1}v \in V$, then $P$ lands it in $W$, then $\rho(g)$ keeps it in $W$ (invariance). A sum of vectors in $W$ is in $W$.

2. **$P_0$ is the identity on $W$.** For $w \in W$: $\rho(g)^{-1}w \in W$ (invariance), and $P$ fixes $W$ pointwise (it's a projection *onto* $W$), so $P\rho(g)^{-1}w = \rho(g)^{-1}w$, giving $\rho(g)P\rho(g)^{-1}w = w$. Averaging $|G|$ copies of $w$: $P_0 w = w$.

3. **$P_0$ is an idempotent onto $W$.** By (1), $\operatorname{im}P_0 \subseteq W$; by (2), $P_0$ fixes all of $W$, so $\operatorname{im}P_0 = W$. And $P_0^2 = P_0$: for any $v$, $P_0 v \in W$, so $P_0(P_0 v) = P_0 v$ by (2).

4. **$P_0$ is $G$-equivariant, so $\ker P_0$ is invariant.** Conjugate and reindex ($g' = hg$ runs over all of $G$):
$$\rho(h)\,P_0\,\rho(h)^{-1} = \frac{1}{|G|}\sum_g \rho(hg)P\rho(hg)^{-1} = P_0,$$
hence $\rho(h)P_0 = P_0\rho(h)$ for every $h$. Therefore if $P_0 v = 0$ then $P_0(\rho(h)v) = \rho(h)P_0 v = 0$, so $\rho(h)v \in \ker P_0$: the kernel is invariant.

Conclusion: $V = \operatorname{im}P_0 \oplus \ker P_0 = W \oplus \ker P_0$, an invariant direct-sum splitting. Where did the field enter? Only in the leading $\frac{1}{|G|}$ — we needed $|G| \ne 0$ in $k$, i.e. $\operatorname{char}k \nmid |G|$. $\blacksquare$

**Example 2 (why $\operatorname{char} \nmid |G|$ is not optional — the standard counterexample).** Let $G = \mathbb{Z}/p$ and work over $\mathbb{F}_p$. Send the generator $1 \mapsto A = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$, so $\rho(k) = A^k = \begin{pmatrix}1 & k \\ 0 & 1\end{pmatrix}$.

- *It's a genuine rep of $\mathbb{Z}/p$.* We need $A^p = I$. Indeed $A^p = \begin{pmatrix}1 & p \\ 0 & 1\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix}$ because $p = 0$ in $\mathbb{F}_p$. (Over $\mathbb{C}$ this $A$ has infinite order — the characteristic is doing real work.)

- *It has exactly one invariant line.* $A$ fixes $e_1 = (1,0)^{\mathsf T}$: $Ae_1 = e_1$. Is there another invariant line? A line $\operatorname{span}\{(a,b)^{\mathsf T}\}$ is invariant iff $A(a,b)^{\mathsf T} = (a+b,\,b)^{\mathsf T}$ is parallel to $(a,b)^{\mathsf T}$, i.e. $(a+b)b - ab = b^2 = 0$, i.e. $b = 0$. So the **only** invariant line is $W = \operatorname{span}\{e_1\}$.

- *So $W$ has no invariant complement.* A complement to a line in $\mathbb{F}_p^2$ is another line; to be invariant it would have to be an invariant line other than $W$ — but there are none. The rep is **reducible** ($W$ is a proper invariant subspace) yet **not completely reducible** ($W$ can't be split off). Maschke fails.

- *Which step broke?* Exactly the average: $P_0$ would need $\frac{1}{|G|} = \frac{1}{p}$, and $p = 0$ in $\mathbb{F}_p$ — undefined. There is no averaged projection to build, and geometrically no invariant inner product either. The theorem's hypothesis was load-bearing. $\blacksquare$

## Watch out

- **"Reducible" ≠ "completely reducible."** Having *an* invariant subspace (reducible) is weaker than splitting into a direct sum (completely reducible). Example 2 is reducible but not completely reducible. Maschke is precisely the statement that over $\mathbb{C}$ the two coincide for finite groups.
- **The infinite-group escape hatch.** Maschke needs $G$ *finite* (the sum $\sum_g$ must be finite). Non-compact infinite groups — e.g. the additive group $\mathbb{R}$ via $t \mapsto \begin{pmatrix}1 & t \\ 0 & 1\end{pmatrix}$ over $\mathbb{C}$ — can be reducible-but-not-completely-reducible even in characteristic $0$. Finiteness (or, in Module 4, *compactness* so you can integrate instead of sum) is the real hypothesis.
- **You still need the field, not just finiteness.** It's tempting to think "finite group ⇒ clean." No — Example 2's group is finite; it's the field's characteristic dividing $|G|$ that kills it. Modular representation theory (char $p \mid |G|$) is a whole separate, thornier subject *because* Maschke is false there.
- **The complement isn't unique, but its existence is what matters.** Different projections $P$ can average to different $P_0$ when $W$ appears with multiplicity. Maschke promises *a* complement, which is all induction needs.

## One-liner

> Over $\mathbb{C}$, a finite group can't hide a triangle: average any projection over the group and it becomes an equivariant one whose kernel is the invariant complement — so every rep is a direct sum of irreducible atoms.

## Problems

**P1 (🟢)** The permutation representation of $S_3$ on $\mathbb{C}^3$ is reducible (it fixes the line $\operatorname{span}\{(1,1,1)\}$). Use Maschke's theorem to state its full decomposition into irreducibles, name each piece and its dimension, and say in one sentence why Maschke guarantees the decomposition *closes* (no leftover triangular part).

**P2 (🟡)** Let $G = \mathbb{Z}/2 = \{e, s\}$ act on $\mathbb{C}^2$ by $\rho(s) = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$ (coordinate swap). The line $W = \operatorname{span}\{(1,1)^{\mathsf T}\}$ is invariant. Starting from the lopsided projection $P = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$ onto $W$, form $P_0 = \frac{1}{2}\sum_{g}\rho(g)P\rho(g)^{-1}$ and read off the invariant complement $\ker P_0$. Verify the complement is actually invariant.

**P3 (🔴)** Take $G = \mathbb{Z}/3$ over the field $\mathbb{F}_3$, with generator $1 \mapsto A = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$.
(a) Verify $A^3 = I$ over $\mathbb{F}_3$, so this really is a representation of $\mathbb{Z}/3$.
(b) Find *all* invariant lines.
(c) Conclude the rep is reducible but not completely reducible, and pinpoint the exact step in Maschke's averaging proof (Example 1) that fails here, and why.

<details>
<summary>Solutions</summary>

**P1.** By Maschke, $\mathbb{C}^3$ splits as an invariant complement of the fixed line, so
$$\mathbb{C}^3 = \underbrace{\operatorname{span}\{(1,1,1)\}}_{\textbf{trivial},\ \dim 1} \;\oplus\; \underbrace{\{v : v_1+v_2+v_3 = 0\}}_{\textbf{standard},\ \dim 2}.$$
The trivial piece is irreducible (every $1$-dimensional rep is), and the standard piece is irreducible (shown in 1.3 — $S_3$ acts with no invariant line inside the sum-zero plane). Maschke guarantees the decomposition *closes* because it promises an **invariant** complement, not merely a complementary subspace: the off-diagonal block that a non-invariant complement would leave is forced to vanish, so the matrices block-diagonalize as $1 \oplus 2$ with nothing left over.

**P2.** First confirm $P$ is a projection onto $W$: $P(a,b)^{\mathsf T} = (a,a)^{\mathsf T} \in W$, $P^2 = P$, and $P(1,1)^{\mathsf T} = (1,1)^{\mathsf T}$. Now average over $G = \{e,s\}$. Since $\rho(e) = I$ and $\rho(s) = \rho(s)^{-1} = \begin{pmatrix}0&1\\1&0\end{pmatrix}$:
$$\rho(s)P\rho(s)^{-1} = \begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&0\\1&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix} = \begin{pmatrix}0&1\\0&1\end{pmatrix},$$
so
$$P_0 = \frac{1}{2}\left[\begin{pmatrix}1&0\\1&0\end{pmatrix} + \begin{pmatrix}0&1\\0&1\end{pmatrix}\right] = \begin{pmatrix} \tfrac12 & \tfrac12 \\[2pt] \tfrac12 & \tfrac12 \end{pmatrix}.$$
This is the orthogonal projection onto $(1,1)^{\mathsf T}$. Its kernel is $\ker P_0 = \{(a,b)^{\mathsf T} : a + b = 0\} = \operatorname{span}\{(1,-1)^{\mathsf T}\}$, the invariant complement. Check invariance: $\rho(s)(1,-1)^{\mathsf T} = (-1,1)^{\mathsf T} = -(1,-1)^{\mathsf T} \in \ker P_0$. ✓ So $\mathbb{C}^2 = \operatorname{span}\{(1,1)\} \oplus \operatorname{span}\{(1,-1)\}$ — the symmetric ⊕ antisymmetric split, i.e. trivial ⊕ sign rep.

**P3.**
(a) $A^3 = \begin{pmatrix}1 & 3 \\ 0 & 1\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix}$ since $3 \equiv 0 \pmod 3$. And $\rho(k) = A^k = \begin{pmatrix}1 & k \\ 0 & 1\end{pmatrix}$ is a well-defined homomorphism $\mathbb{Z}/3 \to GL_2(\mathbb{F}_3)$. ✓

(b) $\operatorname{span}\{(a,b)^{\mathsf T}\}$ is invariant iff $A(a,b)^{\mathsf T} = (a+b,\,b)^{\mathsf T}$ is a scalar multiple of $(a,b)^{\mathsf T}$, i.e. the determinant $\begin{vmatrix} a+b & a \\ b & b \end{vmatrix} = (a+b)b - ab = b^2 = 0$, forcing $b = 0$. So the **only** invariant line is $W = \operatorname{span}\{(1,0)^{\mathsf T}\}$ (the same over $\mathbb{F}_3$ as it was for general $p$).

(c) $W$ is a proper invariant subspace, so the rep is **reducible**. A complement to the line $W$ in $\mathbb{F}_3^2$ must be another line; for the sum to be $G$-invariant that line would have to be invariant — but $W$ is the unique invariant line. So no invariant complement exists: the rep is **not completely reducible**. The failing step in Example 1 is the very definition of $P_0$: it carries the factor $\frac{1}{|G|} = \frac{1}{3}$, and $3 = 0$ in $\mathbb{F}_3$, so $\frac{1}{3}$ does not exist — the averaged projection can't be formed at all. (Equivalently: $\operatorname{char}\mathbb{F}_3 = 3 \mid |G| = 3$, exactly the hypothesis Maschke forbids.)

</details>

## Flashback

**From Lesson 1.3 (Reducibility & invariant subspaces).** Let $\mathbb{Z}/4$ act on $\mathbb{C}^2$ by rotation, $\rho(1) = R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (a $90^\circ$ turn). Over $\mathbb{R}$ this rep is irreducible — no real line is preserved by a quarter-turn. Show that **over $\mathbb{C}$ it is reducible**, and find the two invariant lines.

<details>
<summary>Solution</summary>

The eigenspaces of the single generator $R$ are automatically invariant under the whole cyclic group it generates. The characteristic polynomial is $\lambda^2 + 1 = 0$, giving eigenvalues $\lambda = \pm i$ — which exist over $\mathbb{C}$ but not $\mathbb{R}$, exactly why the field matters. For $\lambda = i$: $(R - iI)v = 0$ gives $v_1 = i v_2$, eigenvector $(1,-i)^{\mathsf T}$ (check $R(1,-i)^{\mathsf T} = (i,1)^{\mathsf T} = i(1,-i)^{\mathsf T}$ ✓). For $\lambda = -i$: eigenvector $(1,i)^{\mathsf T}$ (check $R(1,i)^{\mathsf T} = (-i,1)^{\mathsf T} = -i(1,i)^{\mathsf T}$ ✓). So
$$\mathbb{C}^2 = \operatorname{span}\{(1,-i)^{\mathsf T}\} \oplus \operatorname{span}\{(1,i)^{\mathsf T}\},$$
each line invariant. Consistent with today's lesson: $\mathbb{Z}/4$ is finite and $\operatorname{char}\mathbb{C} = 0$, so Maschke *promises* this clean split — over $\mathbb{C}$ the "irreducible" real rotation dissolves into two $1$-dimensional pieces. (Field, not just finiteness, decides irreducibility.)

</details>

## Connections

- **Backward:** Cure A is 1.2's [unitarity](01-02-examples-unitarity.md) trick (average an inner product) plus 1.3's observation that $W^\perp$ is invariant; Cure B averages a *projection* instead of an inner product — same "$\frac{1}{|G|}\sum_g$" move, the engine behind everything in Module 1. The unsplittable triangle threatened in [1.3](01-03-reducibility-invariant-subspaces.md) is now proven impossible over $\mathbb{C}$.
- **Forward:** with complete reducibility in hand, [1.5 Schur's lemma](01-05-schur-lemma.md) pins down the irreducible atoms (maps between them are $0$ or scalars), and all of **character theory** (Module 2) rests on Maschke: "$\chi = \sum n_i \chi_i$" and the decomposition $V = \bigoplus V_i^{\oplus n_i}$ only *exist* because Maschke guarantees the direct sum. Every "decompose this rep" computation from 2.4 onward is Maschke cashed out.
- **Module 4 preview:** compact Lie groups (like $SU(2)$) replace the finite sum $\frac{1}{|G|}\sum_g$ with an invariant **integral** $\int_G \, dg$ — the same averaging, now continuous — so Maschke *survives* for compact groups: their finite-dimensional reps are still completely reducible. That's why $SU(2)$'s angular-momentum reps decompose so cleanly.
- **Sideways:** the mechanics are pure linear algebra — projections, idempotents, and block-diagonalization from the `](../../linalg-refresher/syllabus.md)` refresher, now made $G$-equivariant. The characteristic-$p$ obstruction is a field-theoretic fact from `](../../abstract-algebra/syllabus.md)`: $\frac{1}{|G|}$ exists in $k$ iff $\operatorname{char}k \nmid |G|$, the exact fault line between ordinary and modular representation theory.
