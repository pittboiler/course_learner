# Group & Representation Theory · Lesson 2.3: Building a character table

> ⏱ ~15 min · Module 2: Character theory · Builds on: [2.2 Orthogonality relations](02-02-orthogonality-relations.md) · Unlocks: [2.4 Decomposing a representation](02-04-decomposing-a-representation.md)

## Why this matters

A finite group has, up to isomorphism, only *finitely many* irreducible representations — and the whole of them fits in one small grid of numbers, the **character table**. Once you have it, you can decompose *any* representation, count how a symmetry splits an energy level, or predict which molecular vibrations are infrared-active — all by taking inner products of rows (Module 3). The astonishing part is that you rarely have to build a single matrix to write the table down. A handful of counting laws pin almost every entry. This lesson turns those laws into a procedure and runs it on $S_3$ from nothing — that's Boss Problem 2.

## The idea

Think of the character table as a crossword whose across-clues and down-clues over-determine each other. The clues:

- You know **how many rows** there are before you know a single one — it equals the number of conjugacy classes.
- You know the **dimensions** must have squares summing to $|G|$, which for small groups leaves only one or two options.
- The **first row is free**: the trivial representation is always a row of $1$'s.
- Any **one-dimensional representation** you can spot (from the group's abelianization) is another row for free.
- Everything left is forced by **orthogonality** — rows are orthonormal, and *columns are orthogonal too*.

So the game is: count classes, guess dimensions, fill in the cheap rows, and let orthogonality solve for the rest. For a group like $S_3$ the crossword has a unique solution and you can finish it by hand in a few lines.

## The formal version

Let $G$ be a finite group with conjugacy classes $[g_1],\dots,[g_k]$ and irreducible characters $\chi_1,\dots,\chi_r$. Write $d_i = \chi_i(e)$ for the dimension of the $i$-th irreducible (its value at the identity is its dimension, since $\chi(e) = \operatorname{tr} I_{d} = d$).

**Fact 1 — the table is square.** $r = k$: the number of irreducible representations equals the number of conjugacy classes.
*In words:* characters are class functions (constant on conjugacy classes), and the irreducible characters form a **basis** for the space of all class functions — a space of dimension $k$. So there are exactly $k$ of them.

**Fact 2 — the dimension law.**
$$\sum_{i=1}^{r} d_i^{\,2} = |G|.$$
*In words:* stack every irreducible into the regular representation and the dimensions must account for all $|G|$ of it (proved in [2.5](02-05-regular-representation.md)). Because these are *squares* of positive integers summing to a fixed number, the dimensions are heavily constrained.

**Fact 3 — the trivial row.** The trivial representation $g \mapsto 1$ has $\chi_{\text{triv}}(g) = 1$ for all $g$: a full row of $1$'s.

**Fact 4a — one-dimensional characters from the abelianization.** A $1$-dimensional representation is a homomorphism $\rho: G \to \mathbb{C}^*$ (a $1\times1$ invertible matrix *is* a nonzero scalar), and for these $\chi = \rho$ itself. Any such homomorphism kills commutators, so it factors through the abelianization $G/[G,G]$:
$$\{\text{1-dim reps of }G\} \;\longleftrightarrow\; \{\text{reps of the abelian group } G/[G,G]\}.$$
*In words:* every one-dimensional character is really a character of the abelianized group. So the number of $1$-dimensional representations equals $|G/[G,G]|$, and you can read them all off from that (usually tiny) quotient.

**Fact 4b — row orthogonality (from [2.2](02-02-orthogonality-relations.md)).** Weighting each class by its size $|[g]|$,
$$\langle \chi_i, \chi_j\rangle \;=\; \frac{1}{|G|}\sum_{\text{classes }[g]} |[g]|\,\chi_i(g)\,\overline{\chi_j(g)} \;=\; \delta_{ij}.$$
*In words:* distinct irreducible characters are orthonormal — the rows of the table are an orthonormal set under this weighted inner product.

**Fact 4c — column orthogonality (the new tool).**
$$\sum_{i=1}^{r} \chi_i(g)\,\overline{\chi_i(h)} \;=\; \begin{cases} |C_G(g)| = \dfrac{|G|}{|[g]|} & \text{if } [g]=[h],\\[4pt] 0 & \text{if } [g]\neq[h].\end{cases}$$
*In words:* the **columns** are orthogonal too, and each column's squared length is the size of the centralizer $C_G(g)$ (equivalently $|G|$ divided by the class size). This is the dual of row orthogonality and it's the workhorse for filling the last entries: it lets you solve for an unknown column against the columns you already have.

## Concrete instance — the full $S_3$ character table

$S_3$ (symmetries of a triangle; $|S_3| = 6$) has three conjugacy classes — the identity, the three transpositions, the two $3$-cycles:

| irrep \ class | $e$ (size 1) | transpositions (size 3) | $3$-cycles (size 2) |
|:--|:--:|:--:|:--:|
| **trivial** $\chi_1$ | $1$ | $1$ | $1$ |
| **sign** $\chi_2$ | $1$ | $-1$ | $1$ |
| **standard** $\chi_3$ | $2$ | $0$ | $-1$ |

**Dimension check:** $\;d_1^2 + d_2^2 + d_3^2 = 1^2 + 1^2 + 2^2 = 1 + 1 + 4 = 6 = |S_3|.$ ✓

**A row-orthogonality check** ($\langle\chi_3,\chi_3\rangle$, weighting by class size $1,3,2$):
$$\frac{1}{6}\big[\,1\cdot 2^2 + 3\cdot 0^2 + 2\cdot(-1)^2\,\big] = \frac{1}{6}(4 + 0 + 2) = 1.\ \checkmark$$

**A column-orthogonality check** (identity column, squared length should be $|C_G(e)| = |G| = 6$):
$$\chi_1(e)^2 + \chi_2(e)^2 + \chi_3(e)^2 = 1 + 1 + 4 = 6.\ \checkmark$$

Every number in that grid is forced. Here is how.

## Worked examples

**Example 1 — Boss Problem 2, part 1: build the $S_3$ table from scratch.**

*Step 1 — count classes.* Conjugacy in $S_n$ is "same cycle type." In $S_3$ the cycle types are $e$, a transposition $(ab)$, and a $3$-cycle $(abc)$: **three classes**, with sizes $1$, $3$, $2$ (they sum to $6$ ✓). By Fact 1 there are therefore **three irreducibles**.

*Step 2 — dimensions.* By Fact 2, $d_1^2 + d_2^2 + d_3^2 = 6$ with each $d_i \ge 1$ an integer. The only way to write $6$ as three positive squares is $1 + 1 + 4$. So the dimensions are $(1,1,2)$ — two one-dimensional irreps and one two-dimensional.

*Step 3 — the two one-dimensional rows.* By Fact 4a they are the characters of the abelianization. The commutator subgroup $[S_3,S_3] = A_3$ (the $3$-cycles), so $S_3/[S_3,S_3] \cong \mathbb{Z}/2$, which has exactly two characters. Concretely they are the **trivial** rep (row of $1$'s, Fact 3) and the **sign** rep $\chi_2 = \operatorname{sgn}$: a transposition is odd ($\operatorname{sgn} = -1$), a $3$-cycle is even ($\operatorname{sgn}=+1$). That gives:
$$\chi_1 = (1,\,1,\,1), \qquad \chi_2 = (1,\,-1,\,1)$$
on the classes $(e,\ \text{transposition},\ 3\text{-cycle})$.

*Step 4 — the two-dimensional row by orthogonality.* Write the unknown row as $\chi_3 = (a,\,b,\,c)$. Its identity entry is its dimension: $a = \chi_3(e) = 2$. Now use **column orthogonality** (Fact 4c) between the identity column and each other column — they belong to different classes, so the sum is $0$:

- Identity vs. transposition column: $\chi_1(e)\chi_1 + \chi_2(e)\chi_2 + \chi_3(e)\chi_3$ evaluated on those two columns is
$$1\cdot 1 + 1\cdot(-1) + 2\cdot b = 0 \;\Longrightarrow\; 2b = 0 \;\Longrightarrow\; b = 0.$$
- Identity vs. $3$-cycle column:
$$1\cdot 1 + 1\cdot 1 + 2\cdot c = 0 \;\Longrightarrow\; 2 + 2c = 0 \;\Longrightarrow\; c = -1.$$

So $\chi_3 = (2,\,0,\,-1)$, with no representation matrices ever written. (Equivalently, you could get this row from row orthogonality against $\chi_1,\chi_2$ — try it as a cross-check.)

*Step 5 — verify.* Row orthonormality and the column checks above already passed. One more cross-row check, $\langle \chi_1,\chi_3\rangle$:
$$\frac{1}{6}\big[\,1\cdot(1)(2) + 3\cdot(1)(0) + 2\cdot(1)(-1)\,\big] = \frac{1}{6}(2 + 0 - 2) = 0.\ \checkmark$$
The table is complete and internally consistent. This $\chi_3 = (2,0,-1)$ is the **standard representation** — the $2$-dimensional piece that will fall out of the permutation representation in [2.4](02-04-decomposing-a-representation.md) (Boss Problem 2, part 2).

**Example 2 — an abelian table is a grid of roots of unity: $\mathbb{Z}/4$.**

For any *abelian* group, every element is its own conjugacy class, so with $\mathbb{Z}/4 = \{0,1,2,3\}$ there are $4$ classes, hence $4$ irreducibles. Fact 2 gives $\sum d_i^2 = 4$ with four positive squares: forced to $1+1+1+1$. So **every irreducible is one-dimensional** (true of all abelian groups — a direct consequence of Schur's lemma, [1.5](01-05-schur-lemma.md)).

The $1$-dimensional characters of $\mathbb{Z}/n$ are $\chi_k(j) = \omega^{kj}$ where $\omega = e^{2\pi i/n}$. For $n=4$, $\omega = i$:

| irrep \ class | $0$ | $1$ | $2$ | $3$ |
|:--|:--:|:--:|:--:|:--:|
| $\chi_0$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_1$ | $1$ | $i$ | $-1$ | $-i$ |
| $\chi_2$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_3$ | $1$ | $-i$ | $-1$ | $i$ |

Dimension check $1+1+1+1 = 4$ ✓. Row orthogonality (each class has size $1$), e.g. $\langle\chi_1,\chi_3\rangle = \tfrac14(1\cdot 1 + i\cdot\overline{(-i)} + (-1)\overline{(-1)} + (-i)\overline{(i)}) = \tfrac14(1 - 1 + 1 - 1) = 0$ ✓ — note the conjugate on the second slot is essential once entries are complex. (The Klein four-group $V = \mathbb{Z}/2\times\mathbb{Z}/2$ works the same way, but with all entries $\pm 1$: four rows of signs, no genuine complex numbers.)

## Watch out

- **Positive squares only.** In $\sum d_i^2 = |G|$ each $d_i \ge 1$, and each must *divide* $|G|$ (a deeper theorem). For $|G|=6$ that's why $1+1+4$ is the only option — don't forget the trivial rep always contributes a $1$, so at least one $d_i = 1$ every time.
- **Weight the inner products.** Row orthogonality sums over *classes* with a factor $|[g]|$, or equivalently over *group elements* without it — never sum the raw table entries unweighted. In Example 1, forgetting the $3\times$ on the transposition column breaks every check.
- **Conjugate the second argument.** With real character tables you can be sloppy, but $\mathbb{Z}/4$ punishes it: $\langle\chi_i,\chi_j\rangle$ needs $\overline{\chi_j(g)}$, and column orthogonality needs $\overline{\chi_i(h)}$. Real entries hide the bar; complex ones expose the bug.
- **Columns are orthogonal, not orthonormal.** A column's squared length is $|C_G(g)|$, which *varies* by class ($6, 2, 3$ for $S_3$). Rows are normalized to $1$; columns are not.

## One-liner

> Count the classes, split $|G|$ into a sum of squared dimensions, write down the trivial and abelianization rows for free, and let row-and-column orthogonality solve for the rest — the character table builds itself.

## Problems

**P1 (🟢)** A group $G$ with $|G|=8$ has five conjugacy classes and this partial character table (entries on classes of sizes $1,1,2,2,2$):

| | $C_1\,(1)$ | $C_2\,(1)$ | $C_3\,(2)$ | $C_4\,(2)$ | $C_5\,(2)$ |
|:--|:--:|:--:|:--:|:--:|:--:|
| $\chi_1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_2$ | $1$ | $1$ | $1$ | $-1$ | $-1$ |
| $\chi_3$ | $1$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_4$ | $1$ | $1$ | $-1$ | $-1$ | $1$ |
| $\chi_5$ | $?$ | $?$ | $?$ | $?$ | $?$ |

Fill in the missing row $\chi_5$ using the dimension law and column orthogonality. (This is $D_4$, or equivalently $Q_8$.)

**P2 (🟡)** Build the complete character table of the Klein four-group $V = \{e,a,b,ab\}$ (with $a^2=b^2=e$, $ab=ba$) from scratch: count classes, get the dimensions, and write every row. Verify row orthogonality between two of your nontrivial rows.

**P3 (🔴) — Boss Problem 2, part 1.** Construct the entire $S_3$ character table with no reference to the worked example: (a) determine the number of irreducibles and their dimensions; (b) write down all one-dimensional irreducibles and justify why there are exactly that many; (c) solve for the remaining row by orthogonality; (d) verify **both** full row orthogonality (all three pairwise inner products) **and** full column orthogonality (all three column self-products give the right centralizer sizes).

<details>
<summary>Solutions</summary>

**P1.** By Fact 2, $\sum d_i^2 = 8$. Rows $\chi_1$–$\chi_4$ are all one-dimensional ($1^2$ each $= 4$), so the last must satisfy $d_5^2 = 8 - 4 = 4$, i.e. $d_5 = \chi_5(C_1) = 2$. Both $C_1$ and $C_2$ have size $1$; $C_2$ is the central element, and for the faithful $2$-dim irrep $\chi_5(C_2) = -2$ (it's $-I$). Get the rest from **column orthogonality** against the identity column $C_1$ (different classes ⟹ sum $=0$). Column $C_3$:
$$\underbrace{1\cdot 1}_{\chi_1}+\underbrace{1\cdot1}_{\chi_2}+\underbrace{1\cdot(-1)}_{\chi_3}+\underbrace{1\cdot(-1)}_{\chi_4}+2\cdot\chi_5(C_3)=0 \Rightarrow 0 + 2\chi_5(C_3)=0 \Rightarrow \chi_5(C_3)=0.$$
By the identical cancellation, $\chi_5(C_4)=\chi_5(C_5)=0$ as well. So $\chi_5 = (2,\,-2,\,0,\,0,\,0)$.

Check column $C_1$ self-product: $1+1+1+1+4 = 8 = |G| = |C_G(e)|$ ✓. Check $C_3$ self-product should be $|G|/|C_3| = 8/2 = 4$: $1+1+1+1+0 = 4$ ✓.

**P2.** $V$ is abelian, so every element is its own class: **4 classes, 4 irreducibles**, and $\sum d_i^2 = 4$ forces all $d_i = 1$. Each generator squares to $e$, so each character sends $a,b \mapsto \pm 1$ independently; the four sign choices give the four rows:

| | $e$ | $a$ | $b$ | $ab$ |
|:--|:--:|:--:|:--:|:--:|
| $\chi_1$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_2$ | $1$ | $1$ | $-1$ | $-1$ |
| $\chi_3$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_4$ | $1$ | $-1$ | $-1$ | $1$ |

(Row $\chi_4$ is the pointwise product $\chi_2\chi_3$, consistent with $\chi(ab)=\chi(a)\chi(b)$.) All classes have size $1$, so $\langle\chi_i,\chi_j\rangle = \tfrac14\sum_g \chi_i(g)\chi_j(g)$. Check $\langle\chi_2,\chi_3\rangle = \tfrac14\big[(1)(1)+(1)(-1)+(-1)(1)+(-1)(-1)\big] = \tfrac14(1-1-1+1) = 0$ ✓. And $\langle\chi_2,\chi_2\rangle = \tfrac14(1+1+1+1)=1$ ✓.

**P3.** *(a)* Cycle types in $S_3$: $e$ (size $1$), transpositions (size $3$), $3$-cycles (size $2$) — **3 classes ⟹ 3 irreducibles**. Dimension law: $\sum d_i^2 = 6$ in three positive squares is uniquely $1+1+4$, so dimensions $(1,1,2)$.

*(b)* One-dimensional irreps are the characters of $S_3/[S_3,S_3]$. Since $[S_3,S_3]=A_3$ and $S_3/A_3 \cong \mathbb{Z}/2$, there are **exactly two**: the trivial rep $(1,1,1)$ and the sign rep $(1,-1,1)$ (transpositions odd, $3$-cycles even). "Exactly two" because $|S_3/[S_3,S_3]| = 2$.

*(c)* Let $\chi_3 = (2,b,c)$ (identity entry $=$ dimension $= 2$). Column orthogonality of the identity column against the transposition and $3$-cycle columns:
$$1\cdot1 + 1\cdot(-1) + 2b = 0 \Rightarrow b = 0,\qquad 1\cdot1 + 1\cdot1 + 2c = 0 \Rightarrow c = -1.$$
So $\chi_3 = (2,0,-1)$.

Final table (classes $e,\ \text{transp},\ 3\text{-cyc}$; sizes $1,3,2$):
$$\chi_1=(1,1,1),\quad \chi_2=(1,-1,1),\quad \chi_3=(2,0,-1).$$

*(d) Row orthogonality* (weights $1,3,2$, divide by $6$):
- $\langle\chi_1,\chi_1\rangle = \tfrac16(1+3+2) = 1$ ✓
- $\langle\chi_2,\chi_2\rangle = \tfrac16(1\cdot1 + 3\cdot1 + 2\cdot1) = \tfrac16(1+3+2)=1$ ✓
- $\langle\chi_3,\chi_3\rangle = \tfrac16(1\cdot4 + 3\cdot0 + 2\cdot1) = \tfrac16(4+0+2)=1$ ✓
- $\langle\chi_1,\chi_2\rangle = \tfrac16(1\cdot1 + 3(1)(-1) + 2\cdot1) = \tfrac16(1-3+2)=0$ ✓
- $\langle\chi_1,\chi_3\rangle = \tfrac16(1\cdot2 + 3\cdot0 + 2(1)(-1)) = \tfrac16(2+0-2)=0$ ✓
- $\langle\chi_2,\chi_3\rangle = \tfrac16(1\cdot2 + 3\cdot0 + 2(1)(-1)) = \tfrac16(2+0-2)=0$ ✓

*Column orthogonality* (self-products should equal $|C_G(g)| = |G|/|[g]|$, i.e. $6,\,2,\,3$):
- $e$ column: $1^2+1^2+2^2 = 6$ ✓
- transposition column: $1^2+(-1)^2+0^2 = 2$ ✓
- $3$-cycle column: $1^2+1^2+(-1)^2 = 3$ ✓

Every constraint holds — the table is unique and correct.

</details>

## Flashback

**From [2.2](02-02-orthogonality-relations.md) (the norm irreducibility test):** A representation of $S_3$ has character $\chi = (4,\,2,\,1)$ on the classes $(e,\ \text{transposition},\ 3\text{-cycle})$ of sizes $(1,3,2)$. Is it irreducible? If not, how many irreducible constituents does it have (counted with multiplicity)?

<details>
<summary>Solution</summary>

The test: $\chi$ is irreducible $\iff \langle\chi,\chi\rangle = 1$. Compute with class weights:
$$\langle\chi,\chi\rangle = \frac{1}{6}\big[\,1\cdot 4^2 + 3\cdot 2^2 + 2\cdot 1^2\,\big] = \frac{1}{6}(16 + 12 + 2) = \frac{30}{6} = 5.$$
Since $5 \neq 1$, it is **reducible**. Moreover $\langle\chi,\chi\rangle = \sum_i m_i^2$ where $m_i$ are the multiplicities of the irreducibles, so $\sum m_i^2 = 5 = 2^2 + 1^2$: the rep is one irreducible appearing twice plus another appearing once — **three constituents** with multiplicity. (Which ones? That's the projection computation of [2.4](02-04-decomposing-a-representation.md); the norm alone already tells you it's not irreducible and how many pieces it holds.)

</details>

## Connections

- **Backward:** the entire construction rests on [2.1](02-01-characters.md) (characters as class functions, $\chi(e)=\dim$) and [2.2](02-02-orthogonality-relations.md) (row orthonormality); column orthogonality here is its exact dual. The claim $\sum d_i^2 = |G|$ is *used* now and *proved* in [2.5](02-05-regular-representation.md).
- **Sideways (algebra):** the machinery is pure group theory from [`abstract-algebra`](../../abstract-algebra/syllabus.md) — conjugacy classes fix the number of columns, and the abelianization $G/[G,G]$ hands you every one-dimensional row.
- **Forward (Module 2–3):** with the table in hand, decomposing any representation is a row of inner products — that's [2.4](02-04-decomposing-a-representation.md), which finishes Boss Problem 2 by splitting the $3$-dim permutation representation of $S_3$ two ways. Tensor products of irreps (e.g. $\text{standard}\otimes\text{standard}$) show up as new columns to reduce in [3.1](03-01-tensor-products.md)–[3.2](03-02-clebsch-gordan-decomposition.md), and the same tables classify [molecular vibrations](03-04-molecular-vibrations-selection-rules.md) once the group is a point group.
- **Forward (Module 4):** for a continuous group like $SU(2)$ the "character table" becomes a *continuous* orthogonality of characters over the group ([4.4](04-04-su2-representations-angular-momentum.md)) — same idea, integral instead of sum.
