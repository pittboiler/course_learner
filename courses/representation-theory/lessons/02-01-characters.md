# Group & Representation Theory · Lesson 2.1: Characters

> ⏱ ~15 min · Module 2: Character theory · Builds on: [1.5 Schur's lemma](01-05-schur-lemma.md) · Unlocks: [2.2 Orthogonality relations](02-02-orthogonality-relations.md)

## Why this matters

Module 1 left you with a clean structural picture — every representation of a finite group splits into irreducibles (Maschke), and the irreducible pieces are rigid (Schur) — but the *matrices* are still a mess. A single irreducible of a modest group is a pile of numbers that changes completely the moment you rotate your basis. If representation theory required juggling those matrices, it would be unusable.

The escape is almost absurdly cheap. To each representation attach **one number per group element** — the trace. That number throws away nearly all the matrix data, yet (this is the miracle, proved next lesson) it keeps *everything that matters*: two representations with the same numbers are the same representation. All of finite-group representation theory then collapses onto a small grid of integers — a few rows, a few columns. This lesson builds that number and proves the five properties that make it a compression algorithm rather than a data-loss.

## The idea

A representation $\rho: G \to GL(V)$ sends each group element $g$ to an invertible matrix $\rho(g)$ (here $V$ is the vector space it acts on, $GL(V)$ the invertible linear maps on it). The **character** of $\rho$ is the function

$$\chi_\rho(g) = \operatorname{tr}\rho(g),$$

the trace — the sum of the diagonal entries. That's it. A representation is a mountain of matrices; its character is a single scalar-valued function on the group.

Why would summing the diagonal keep anything useful? Because the trace is exactly the part of a matrix that *doesn't care about your basis*. Change coordinates and every individual entry of $\rho(g)$ scrambles, but $\operatorname{tr}(P^{-1}AP) = \operatorname{tr}(A)$ never moves. The trace sees through the arbitrariness of the basis to something intrinsic — and "intrinsic" is precisely what we mean by *the representation itself*, as opposed to one matrix picture of it. So the character is the shadow of the representation that survives every coordinate change.

Two consequences fall out immediately and cost nothing. Conjugate group elements ($hgh^{-1}$) get conjugate matrices, so they have the *same* trace: the character is constant on conjugacy classes. And equivalent representations differ only by a change of basis, so they have the *same* character. The character has already forgotten the two things we most wanted it to forget.

## The formal version

Let $\rho: G \to GL(V)$ be a finite-dimensional representation over $\mathbb{C}$, $\dim V = n$. Define $\chi_\rho(g) = \operatorname{tr}\rho(g)$. Five properties, each a one-line proof.

**(i) $\chi_\rho(e) = \dim V$ (the degree).**
*In words: evaluating the character at the identity reads off the dimension for free.* Since $\rho(e) = I_n$, $\operatorname{tr}(I_n) = n$.

**(ii) $\chi_\rho$ is a class function — constant on conjugacy classes.**
*In words: conjugate elements are indistinguishable to the character.* For any $h, g$,
$$\chi_\rho(hgh^{-1}) = \operatorname{tr}\!\big(\rho(h)\rho(g)\rho(h)^{-1}\big) = \operatorname{tr}\rho(g) = \chi_\rho(g),$$
using $\rho(hgh^{-1}) = \rho(h)\rho(g)\rho(h)^{-1}$ (homomorphism) and the cyclic invariance $\operatorname{tr}(ABA^{-1}) = \operatorname{tr}(B)$.

**(iii) Equivalent representations have equal characters.**
*In words: the character can't tell apart two reps that differ only by a change of basis — exactly what we want it to ignore.* If $\rho' (g) = P^{-1}\rho(g)P$ for a fixed invertible $P$, then $\operatorname{tr}\rho'(g) = \operatorname{tr}\rho(g)$ for all $g$, so $\chi_{\rho'} = \chi_\rho$.

**(iv) For a unitary representation, $\chi_\rho(g^{-1}) = \overline{\chi_\rho(g)}$.**
*In words: inverting the group element conjugates the number.* $g$ has finite order, so $\rho(g)$ satisfies $\rho(g)^m = I$; its eigenvalues $\lambda_1,\dots,\lambda_n$ are $m$-th roots of unity, hence $|\lambda_i| = 1$ and $\lambda_i^{-1} = \overline{\lambda_i}$. Then $\rho(g^{-1}) = \rho(g)^{-1}$ has eigenvalues $\lambda_i^{-1}$, so
$$\chi_\rho(g^{-1}) = \sum_i \lambda_i^{-1} = \sum_i \overline{\lambda_i} = \overline{\sum_i \lambda_i} = \overline{\chi_\rho(g)}.$$
(By Maschke + unitarizability, *every* finite-group rep is equivalent to a unitary one, so this holds universally — and by (iii) the character is unchanged in the swap.)

**(v) Additivity: $\chi_{V \oplus W} = \chi_V + \chi_W$.**
*In words: the character of a direct sum is the sum of characters — decomposition becomes addition.* In a basis adapted to $V \oplus W$, $\rho_{V\oplus W}(g) = \begin{pmatrix}\rho_V(g) & 0 \\ 0 & \rho_W(g)\end{pmatrix}$ is block-diagonal, and the trace of a block-diagonal matrix is the sum of the block traces.

**The punchline (stated now, proved in [2.2](02-02-orthogonality-relations.md)):** the character **determines the representation up to equivalence.** Two representations are equivalent *iff* they have the same character. This is genuinely remarkable — $\chi$ discards nearly all the matrix entries, keeping one number per class, yet loses no information that representation theory cares about. Combined with (v), it means decomposing a representation into irreducibles is done entirely with a small **character table**: one row per irreducible representation, one column per conjugacy class. A few dozen integers encode the entire representation theory of the group.

## Concrete instance

Take $G = S_3$, the symmetric group on three letters — six elements, three conjugacy classes: the identity $\{e\}$; the three transpositions $\{(12),(13),(23)\}$; the two 3-cycles $\{(123),(132)\}$. Its three irreducible representations are the **trivial** (everything $\mapsto 1$), the **sign** ($\sigma \mapsto \operatorname{sgn}\sigma = \pm 1$), and the 2-dimensional **standard** representation (the action on $\{(x,y,z): x+y+z=0\}$). Here is the character of each, evaluated once per class:

| irrep | $\{e\}$ (size 1) | transposition (size 3) | 3-cycle (size 2) | degree $= \chi(e)$ |
|---|---|---|---|---|
| trivial | $1$ | $1$ | $1$ | $1$ |
| sign | $1$ | $-1$ | $1$ | $1$ |
| standard | $2$ | $0$ | $-1$ | $2$ |

Read across each row: one number per *class*, not per element — property (ii) made visible (all three transpositions collapse to a single entry $0$ in the standard row). Read down the first column: each entry is the degree — property (i). This grid is the whole content of $S_3$'s representation theory. In [2.3](02-03-building-character-table.md) you'll learn to *build* such a table from scratch; here just note that everything lives in nine integers.

## Worked examples

**Example 1 (the permutation character counts fixed points).** Let $S_3$ act on $\{1,2,3\}$ by permuting coordinates of $\mathbb{C}^3$: $\rho_{\text{perm}}(\sigma)$ is the $3\times 3$ matrix with a $1$ in row $\sigma(j)$, column $j$. Its trace counts the $1$s on the diagonal — a diagonal $1$ in position $(j,j)$ means $\sigma(j) = j$. So

$$\chi_{\text{perm}}(\sigma) = \#\{\text{fixed points of }\sigma\}.$$

Evaluate by class: $e$ fixes all $3$; a transposition fixes the one untouched point, so $1$; a 3-cycle fixes nothing, so $0$. Hence $\chi_{\text{perm}} = (3, 1, 0)$ on $(e,\text{transp},\text{3-cycle})$. Now compare to the table: $(3,1,0) = (1,1,1) + (2,0,-1)$, i.e.

$$\chi_{\text{perm}} = \chi_{\text{trivial}} + \chi_{\text{standard}}.$$

By additivity (v) and the determination punchline, this *is* the decomposition $\mathbb{C}^3 = (\text{trivial}) \oplus (\text{standard})$ — the constant vector $(1,1,1)$ spans the trivial line, its orthogonal complement $x+y+z=0$ is the standard rep. We read off a decomposition purely from adding rows of integers.

**Example 2 (the regular character).** The **regular representation** is $G$ acting on itself: $V = \mathbb{C}[G]$ has a basis $\{e_h : h \in G\}$, and $\rho_{\text{reg}}(g)\,e_h = e_{gh}$ — left multiplication permutes the basis. So it's a permutation representation, and by Example 1's logic $\chi_{\text{reg}}(g)$ counts basis vectors fixed by $g$: we need $gh = h$, i.e. $g = e$. Therefore

$$\chi_{\text{reg}}(e) = |G|, \qquad \chi_{\text{reg}}(g) = 0 \ \text{ for } g \neq e.$$

For $S_3$: $\chi_{\text{reg}} = (6, 0, 0)$. Check the decomposition this forces. Every irreducible should appear in $\chi_{\text{reg}}$ weighted by its degree (proved in [2.5](02-05-regular-representation.md)); here that predicts $1\cdot\chi_{\text{triv}} + 1\cdot\chi_{\text{sign}} + 2\cdot\chi_{\text{std}}$. Add the rows: at $e$, $1{+}1{+}2\cdot 2 = 6$ ✓; at a transposition, $1 - 1 + 2\cdot 0 = 0$ ✓; at a 3-cycle, $1 + 1 + 2\cdot(-1) = 0$ ✓. The regular representation contains every irreducible, each with multiplicity equal to its own degree — a fact that will pin down $\sum (\dim)^2 = |G|$ in 2.5.

## Watch out

- **The character is a *function*, not a number.** "$\chi = (2,0,-1)$" is shorthand for its values on the three classes; you compare characters entry-by-entry across all classes, never as single scalars.
- **Equal character means equal representation, but only over $\mathbb{C}$ and only for the whole class function.** Matching on *some* classes proves nothing. And the punchline is a $\mathbb{C}$-theory statement — over $\mathbb{R}$ or in positive characteristic it can fail.
- **Real-valued character $\neq$ real representation.** Property (iv) says $\chi(g^{-1}) = \overline{\chi(g)}$; a character that happens to be *real on every element* (a "real character") only tells you $\rho$ and its dual are equivalent. It does **not** guarantee the rep can be written with real matrices — the quaternion group $Q_8$ has a 2-dimensional irrep whose character is real-valued at every element, yet no basis makes all its matrices real (it's *quaternionic*). Real numbers in the table are weaker than real matrices.
- **Additivity is for direct sums, not tensor products.** $\chi_{V\oplus W} = \chi_V + \chi_W$, but $\chi_{V\otimes W} = \chi_V \cdot \chi_W$ (Module 3) — different operation, different rule.

## One-liner

> The character $\chi(g) = \operatorname{tr}\rho(g)$ is the basis-blind shadow of a representation — one number per conjugacy class, throwing away every matrix entry yet remembering the representation exactly.

## Problems

**P1 (🟢)** Let $C_4 = \langle g \mid g^4 = e\rangle$ act on $\mathbb{C}^2$ by $\rho(g) = \begin{pmatrix} 0 & -1 \\ 1 & 0\end{pmatrix}$ (rotation by $90°$). Since $C_4$ is abelian, each element is its own conjugacy class. Compute $\chi_\rho$ on $e, g, g^2, g^3$, and read off the degree of $\rho$.

**P2 (🟡)** Directly from the definition $\chi(g) = \operatorname{tr}\rho(g)$, prove both: (a) $\chi$ is a class function; (b) $\chi_{V\oplus W} = \chi_V + \chi_W$. (No orthogonality — just traces and the definition of $\oplus$.)

**P3 (🔴)** (a) For a unitary representation, prove $\chi(g^{-1}) = \overline{\chi(g)}$. (b) Let $G$ act on a finite set $X$ with permutation character $\chi_{\text{perm}}(g) = |\{x : g\cdot x = x\}|$. Show that
$$\frac{1}{|G|}\sum_{g\in G}\chi_{\text{perm}}(g) = \#\{\text{orbits of } G \text{ on } X\}.$$
(This is Burnside's counting lemma; in 2.2's language it says the average of $\chi_{\text{perm}}$ is the multiplicity of the trivial representation.)

<details>
<summary>Solutions</summary>

**P1.** Compute the powers:
$$\rho(e) = I = \begin{pmatrix}1&0\\0&1\end{pmatrix},\quad \rho(g) = \begin{pmatrix}0&-1\\1&0\end{pmatrix},\quad \rho(g^2) = \begin{pmatrix}-1&0\\0&-1\end{pmatrix},\quad \rho(g^3) = \begin{pmatrix}0&1\\-1&0\end{pmatrix}.$$
Traces: $\chi(e) = 2$, $\chi(g) = 0$, $\chi(g^2) = -2$, $\chi(g^3) = 0$. So $\chi_\rho = (2, 0, -2, 0)$. Degree $= \chi(e) = 2$ ✓ (matches $\rho$ acting on $\mathbb{C}^2$). Sanity check via property (iv): $g^{-1} = g^3$, and indeed $\chi(g^3) = 0 = \overline{0} = \overline{\chi(g)}$; $g^2$ is its own inverse and $\chi(g^2) = -2$ is real, as required.

**P2.** (a) *Class function.* For any $g,h$, using the homomorphism property and cyclicity of trace,
$$\chi(hgh^{-1}) = \operatorname{tr}\!\big(\rho(h)\rho(g)\rho(h)^{-1}\big) = \operatorname{tr}\!\big(\rho(h)^{-1}\rho(h)\rho(g)\big) = \operatorname{tr}\rho(g) = \chi(g).$$
So $\chi$ takes one value on each conjugacy class.
(b) *Additivity.* On $V\oplus W$, a $g$-action that preserves each summand is block-diagonal in a basis $= (\text{basis of }V)\cup(\text{basis of }W)$:
$$\rho_{V\oplus W}(g) = \begin{pmatrix}\rho_V(g) & 0\\ 0 & \rho_W(g)\end{pmatrix}.$$
Its diagonal is the diagonal of $\rho_V(g)$ followed by that of $\rho_W(g)$, so
$$\chi_{V\oplus W}(g) = \operatorname{tr}\rho_{V\oplus W}(g) = \operatorname{tr}\rho_V(g) + \operatorname{tr}\rho_W(g) = \chi_V(g) + \chi_W(g).$$

**P3.** (a) $g$ has finite order $m$ (finite group), so $\rho(g)^m = \rho(g^m) = \rho(e) = I$. Diagonalize the unitary matrix $\rho(g)$ with eigenvalues $\lambda_1,\dots,\lambda_n$; each satisfies $\lambda_i^m = 1$, so $|\lambda_i| = 1$ and $\overline{\lambda_i} = \lambda_i^{-1}$. Now $\rho(g^{-1}) = \rho(g)^{-1}$ has eigenvalues $\lambda_i^{-1}$, hence
$$\chi(g^{-1}) = \sum_{i=1}^n \lambda_i^{-1} = \sum_{i=1}^n \overline{\lambda_i} = \overline{\sum_{i=1}^n \lambda_i} = \overline{\chi(g)}.$$
(b) Count the set $S = \{(g,x)\in G\times X : g\cdot x = x\}$ two ways. Summing over $g$ first, the $x$-slice of $S$ has size $\chi_{\text{perm}}(g)$, so $|S| = \sum_{g} \chi_{\text{perm}}(g)$. Summing over $x$ first, the $g$-slice is the stabilizer $\operatorname{Stab}(x)$, so $|S| = \sum_{x}|\operatorname{Stab}(x)|$. By orbit–stabilizer $|\operatorname{Stab}(x)| = |G|/|\mathcal{O}_x|$ where $\mathcal{O}_x$ is the orbit of $x$. Group the sum by orbits: each orbit $\mathcal{O}$ contributes $\sum_{x\in\mathcal{O}} |G|/|\mathcal{O}| = |G|$. Hence
$$\sum_{g}\chi_{\text{perm}}(g) = |S| = \sum_{\text{orbits }\mathcal{O}} |G| = |G|\cdot\#\{\text{orbits}\}.$$
Divide by $|G|$. (In 2.2's inner product this reads $\langle \chi_{\text{perm}}, \chi_{\text{triv}}\rangle = \#\text{orbits}$ — the number of times the trivial rep appears, which is exactly the space of $G$-fixed vectors, one per orbit's "sum over the orbit" vector.)

</details>

## Flashback

**From [1.5 (Schur's lemma)](01-05-schur-lemma.md):** Let $\rho: G \to GL(V)$ be an *irreducible* complex representation ($V$ finite-dimensional), and suppose a linear map $T: V\to V$ commutes with every $\rho(g)$. Prove that $T = \lambda I$ for some scalar $\lambda\in\mathbb{C}$ — using only the eigenvalue idea, not quoting the lemma's statement.

<details>
<summary>Solution</summary>

Over $\mathbb{C}$, $T$ has at least one eigenvalue $\lambda$ (characteristic polynomial has a root), so $\ker(T - \lambda I) \neq \{0\}$. The map $T - \lambda I$ also commutes with every $\rho(g)$: since $T\rho(g) = \rho(g)T$ and $I$ commutes with everything, $(T-\lambda I)\rho(g) = \rho(g)(T - \lambda I)$. A commuting map's kernel is *invariant*: if $(T-\lambda I)v = 0$ then $(T - \lambda I)\rho(g)v = \rho(g)(T-\lambda I)v = 0$, so $\rho(g)v \in \ker(T-\lambda I)$ too. Thus $\ker(T-\lambda I)$ is a nonzero $G$-invariant subspace of the *irreducible* $V$, forcing $\ker(T - \lambda I) = V$. Therefore $T - \lambda I = 0$, i.e. $T = \lambda I$. This is exactly why irreducible characters will turn out to be *orthonormal* rather than merely orthogonal next lesson — the only self-intertwiners are scalars, so each irreducible occupies its own private axis.
</details>

## Connections

- **Backward:** the character is the trace of the very matrices $\rho(g)$ built in [1.1](01-01-what-is-a-representation.md); property (iv)'s unitarity is guaranteed by Maschke's averaging in [1.4](01-04-maschke-theorem.md); and the Flashback's "commuting maps are scalars" ([1.5](01-05-schur-lemma.md)) is the engine that will make characters *orthonormal*, not just class functions.
- **Forward:** [2.2](02-02-orthogonality-relations.md) supplies the inner product $\langle\chi,\psi\rangle = \frac{1}{|G|}\sum_g \chi(g)\overline{\psi(g)}$ that proves the punchline and makes irreducible characters an orthonormal basis of class functions; [2.3](02-03-building-character-table.md) builds character tables like the $S_3$ grid above from scratch; [2.4](02-04-decomposing-a-representation.md) turns Example 1's "add the rows" into an algorithm; [2.5](02-05-regular-representation.md) pushes Example 2 to $\sum(\dim)^2 = |G|$.
- **Sideways (abstract algebra):** characters are *class functions*, so their natural domain is the set of conjugacy classes — the character table has exactly as many columns as $G$ has classes, and as many rows (it turns out) as irreducibles. Burnside's lemma in P3 is the orbit-counting tool from group actions, reappearing here as an inner product. See the [abstract-algebra syllabus](../../abstract-algebra/syllabus.md).
- **Sideways (physics):** in quantum mechanics a symmetry group acts on the state space, and its irreducible characters *label the multiplets* — energy levels that must stay degenerate. Reading a character table is how physicists predict which levels split when a symmetry is broken (Module 3). See the [quantum-mechanics syllabus](../../quantum-mechanics/syllabus.md).
