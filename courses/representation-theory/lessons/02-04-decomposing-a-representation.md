# Group & Representation Theory · Lesson 2.4: Decomposing a representation

> ⏱ ~15 min · Module 2: Character theory · Builds on: [2.3 Building a character table](02-03-building-character-table.md) · Unlocks: [2.5 The regular representation](02-05-regular-representation.md)

## Why this matters

Maschke ([1.4](01-04-maschke-theorem.md)) promised that every representation of a finite group is a direct sum of irreducible atoms. That promise was existential — it said the pieces are *there* — but it gave no procedure for finding them. Chasing invariant subspaces by hand (like we did for $S_3$ in [1.3](01-03-reducibility-invariant-subspaces.md)) works for tiny cases and collapses fast as the group grows.

This lesson is the payoff of the orthogonality relations ([2.2](02-02-orthogonality-relations.md)). It turns "which atoms, and how many?" into a single arithmetic move: **take an inner product against a row of the character table.** You never touch the matrices. Hand me *any* representation — as a stack of matrices, or as nothing but its character — and I can read off its complete decomposition in under a minute. This is the computational engine behind every application to come: selection rules, molecular vibrations, Clebsch–Gordan series, angular-momentum coupling.

## The idea

By Maschke, any rep $V$ splits as a direct sum of irreducibles, but the *same* irreducible can appear several times:
$$V \cong m_1 V_1 \oplus m_2 V_2 \oplus \cdots = \bigoplus_i m_i V_i,$$
where $V_1, V_2, \dots$ are the distinct irreducibles of $G$ (the rows of the character table) and the integer $m_i \geq 0$ counts how many copies of $V_i$ appear — its **multiplicity**. Characters add over direct sums (trace is additive), so
$$\chi_V = \sum_i m_i \,\chi_i.$$
*In words:* the character of $V$ is a whole-number combination of the irreducible characters — the $m_i$ are its coordinates in the basis of table rows.

Here's the magic. The irreducible characters $\chi_i$ are **orthonormal** ([2.2](02-02-orthogonality-relations.md)): $\langle \chi_i, \chi_j\rangle = \delta_{ij}$. So to extract one coordinate, project onto it — exactly like recovering a Fourier coefficient. Pair both sides with $\chi_i$:
$$\langle \chi_V, \chi_i\rangle = \sum_j m_j \langle \chi_j, \chi_i\rangle = m_i.$$

$$\boxed{\;m_i = \langle \chi_V,\, \chi_i\rangle\;}$$

*In words:* the number of copies of the irreducible $V_i$ sitting inside $V$ is just the inner product of $V$'s character against $V_i$'s character. A **Fourier coefficient on the group** — the character table is the orthonormal basis, and decomposing a rep is expanding its character in that basis.

Two immediate dividends. First, the irreducibility test from [2.2](02-02-orthogonality-relations.md) falls out: since $\langle \chi_V, \chi_V\rangle = \sum_i m_i^2$, a rep is irreducible exactly when this equals $1$ (one $m_i$ is $1$, the rest $0$). Second — and this is the workflow that matters — **you decompose from the character alone.** No basis, no block-diagonalizing, no eigenvectors. Compute $\dim G$ inner products and you're done.

## The formal version

Fix a finite group $G$ with irreducibles $V_1, \dots, V_k$ (one per conjugacy class), characters $\chi_i$, dimensions $d_i = \chi_i(e)$. The inner product of class functions is
$$\langle \alpha, \beta\rangle = \frac{1}{|G|}\sum_{g \in G} \alpha(g)\,\overline{\beta(g)} = \frac{1}{|G|}\sum_{\text{classes } C} |C|\;\alpha(C)\,\overline{\beta(C)},$$
the second form summing over conjugacy classes weighted by class size $|C|$ (characters are constant on classes — that's what makes the table finite).

**Multiplicity formula.** For $V \cong \bigoplus_i m_i V_i$,
$$m_i = \langle \chi_V, \chi_i\rangle, \qquad \chi_V = \sum_i m_i \chi_i, \qquad \dim V = \sum_i m_i d_i.$$
*In words:* multiplicities are inner products; the character is their generating combination; and dimensions must balance — a cheap sanity check ($\sum_i m_i d_i$ had better equal $\chi_V(e)$).

**Irreducibility criterion.** $\langle \chi_V, \chi_V\rangle = \sum_i m_i^2$, so $V$ is irreducible $\iff \langle \chi_V, \chi_V\rangle = 1$. A value of $2$ means two distinct atoms ($1^2+1^2$) or — impossible for real $m_i$ — it pins the shape tightly; $4$ could be $2^2$ (one atom, doubled) or $1+1+1+1$ (four distinct), and the individual $m_i$ settle it.

**Isotypic (canonical) decomposition.** Group the copies of each irreducible together:
$$V = V^{(1)} \oplus V^{(2)} \oplus \cdots \oplus V^{(k)}, \qquad V^{(i)} = \underbrace{V_i \oplus \cdots \oplus V_i}_{m_i \text{ copies}}.$$
The subspace $V^{(i)}$ is the **$V_i$-isotypic component**. Crucial subtlety: the *individual* copies of $V_i$ are **not** canonical — when $m_i \geq 2$ there are infinitely many ways to slice $V^{(i)}$ into $m_i$ separate irreducible lines/blocks (any invertible mixing of the copies is another valid slicing). But their *sum* $V^{(i)}$ **is** canonical: basis-independent, determined by $V$ and $G$ alone. *In words:* "how the trivial copies are arranged" is a choice; "the total trivial part" is a fact.

**Projection onto an isotypic component.** The canonical $V^{(i)}$ is cut out by an explicit operator built from the group:
$$P_i = \frac{d_i}{|G|}\sum_{g \in G} \overline{\chi_i(g)}\;\rho(g).$$
$P_i$ is the projection of $V$ onto $V^{(i)}$: $P_i^2 = P_i$, $P_i$ commutes with every $\rho(g)$, $\sum_i P_i = I$, and $\operatorname{rank} P_i = m_i d_i = \dim V^{(i)}$. *In words:* average the representation matrices weighted by the conjugate character, scale by $d_i$, and the operator you get **is** the projector onto all the $V_i$-stuff at once. For the trivial rep ($d=1$, $\chi \equiv 1$) this is $\frac{1}{|G|}\sum_g \rho(g)$ — the familiar group-averaging that lands on the invariant vectors. This is how you get the actual subspaces when you need vectors, not just counts.

## Concrete instance

**Decompose the $S_3$ permutation representation two ways — and watch them agree.**

$S_3$ acts on $\mathbb{C}^3$ by permuting coordinates, $\rho(\sigma)e_i = e_{\sigma(i)}$. Its character counts fixed points ($\chi_{\text{perm}}(\sigma) = \#\{i : \sigma(i)=i\}$): the identity fixes $3$, a transposition fixes $1$, a $3$-cycle fixes $0$. The character table of $S_3$ (built in [2.3](02-03-building-character-table.md)), with class sizes on top:

| class | $\{e\}$ | $\{(12),(13),(23)\}$ | $\{(123),(132)\}$ |
|---|---|---|---|
| $|C|$ | 1 | 3 | 2 |
| $\chi_{\text{triv}}$ | 1 | 1 | 1 |
| $\chi_{\text{sign}}$ | 1 | $-1$ | 1 |
| $\chi_{\text{std}}$ | 2 | 0 | $-1$ |
| **$\chi_{\text{perm}}$** | **3** | **1** | **0** |

**Way 1 — character inner products (this lesson).** Three multiplicities, three sums:
$$m_{\text{triv}} = \langle \chi_{\text{perm}},\chi_{\text{triv}}\rangle = \tfrac{1}{6}\big(1{\cdot}3{\cdot}1 + 3{\cdot}1{\cdot}1 + 2{\cdot}0{\cdot}1\big) = \tfrac{1}{6}(3+3+0) = 1,$$
$$m_{\text{sign}} = \tfrac{1}{6}\big(1{\cdot}3{\cdot}1 + 3{\cdot}1{\cdot}(-1) + 2{\cdot}0{\cdot}1\big) = \tfrac{1}{6}(3-3+0) = 0,$$
$$m_{\text{std}} = \tfrac{1}{6}\big(1{\cdot}3{\cdot}2 + 3{\cdot}1{\cdot}0 + 2{\cdot}0{\cdot}(-1)\big) = \tfrac{1}{6}(6+0+0) = 1.$$
So $\boxed{\;\mathbb{C}^3 \cong V_{\text{triv}} \oplus V_{\text{std}}\;}$. Dimension check: $1{\cdot}1 + 0{\cdot}1 + 1{\cdot}2 = 3$. ✓ And $\langle\chi_{\text{perm}},\chi_{\text{perm}}\rangle = \tfrac{1}{6}(9+3+0) = 2 = 1^2+0^2+1^2$ — two atoms, confirming the count without ever naming a subspace.

**Way 2 — invariant subspaces (from [1.3](01-03-reducibility-invariant-subspaces.md)).** By hand we found the all-ones line $\langle(1,1,1)\rangle$ (the trivial atom) and its orthogonal complement $\{x : \sum_i x_i = 0\}$ (the $2$-dimensional standard atom), giving $\mathbb{C}^3 = \langle(1,1,1)\rangle \oplus \{x:\sum x_i = 0\}$ — trivial $\oplus$ standard, the identical answer.

The two roads meet. Way 2 hunted geometry and produced actual vectors; Way 1 did three dot products against a table and never looked at a matrix. For $S_3$ they cost about the same. For a group of order $120$ they emphatically do not — which is the whole point.

## Worked examples

**Example 1 (the character way, in full — Boss Problem 2, part 2).** Everything above *is* the decomposition of $\chi_{\text{perm}} = (3,1,0)$: the three inner products give $(m_{\text{triv}}, m_{\text{sign}}, m_{\text{std}}) = (1,0,1)$, hence $\mathbb{C}^3 \cong V_{\text{triv}} \oplus V_{\text{std}}$. Notice what we *didn't* need: not a single entry of any $\rho(\sigma)$ matrix, only its trace on each class. The character is a three-number fingerprint, and orthogonality reads the decomposition straight off it.

**Example 2 (the projection operator — extracting the actual invariant subspace).** Suppose we want the vectors, not just the count $m_{\text{triv}}=1$. Apply the trivial projector $P_{\text{triv}} = \frac{d}{|G|}\sum_g \overline{\chi_{\text{triv}}(g)}\rho(g) = \frac{1}{6}\sum_{\sigma\in S_3}\rho(\sigma)$ (here $d=1$, $\chi_{\text{triv}}\equiv 1$). Feed it $e_1$ and track where each permutation sends it, using $\rho(\sigma)e_1 = e_{\sigma(1)}$:

| $\sigma$ | $e$ | $(12)$ | $(13)$ | $(23)$ | $(123)$ | $(132)$ |
|---|---|---|---|---|---|---|
| $\rho(\sigma)e_1 = e_{\sigma(1)}$ | $e_1$ | $e_2$ | $e_3$ | $e_1$ | $e_2$ | $e_3$ |

Summing: $2e_1 + 2e_2 + 2e_3$ (each basis vector shows up twice — the two permutations sending $1$ to that slot). So
$$P_{\text{triv}}\,e_1 = \tfrac{1}{6}(2e_1+2e_2+2e_3) = \tfrac{1}{3}(1,1,1).$$
The output lands exactly on the all-ones line — the trivial-isotypic component, produced mechanically. (By symmetry $P_{\text{triv}}e_2 = P_{\text{triv}}e_3 = \tfrac13(1,1,1)$ too, so $\operatorname{rank}P_{\text{triv}} = 1 = m_{\text{triv}}d_{\text{triv}}$, as promised.) The complementary standard part is then $P_{\text{std}} = I - P_{\text{triv}}$; e.g. $P_{\text{std}}e_1 = e_1 - \tfrac13(1,1,1) = (\tfrac23,-\tfrac13,-\tfrac13)$, whose entries sum to $0$ — squarely inside the standard plane. The projector recovers by pure averaging the subspaces we hunted geometrically in [1.3](01-03-reducibility-invariant-subspaces.md).

## Watch out

- **Multiplicities are non-negative integers — always.** If an inner product comes out fractional or negative, you have an arithmetic slip (a wrong class size, a missed complex conjugate, or a bad character value). Use $\sum_i m_i d_i = \chi_V(e)$ as an instant audit.
- **Conjugate the *second* argument.** $m_i = \frac{1}{|G|}\sum_g \chi_V(g)\overline{\chi_i(g)}$ — the bar sits on $\chi_i$. For real character tables (like $S_3$) it's invisible, but the moment a table has complex entries ($C_n$, for instance) forgetting it silently corrupts every multiplicity.
- **Isotypic components are canonical; individual copies are not.** When $m_i \geq 2$, do not speak of "*the* first copy of $V_i$" — there's no such thing, only the well-defined total $V^{(i)}$. The projector $P_i$ lands you on $V^{(i)}$, never on a distinguished sub-copy. (This ambiguity is exactly the freedom a *change of coupling scheme* exploits in [4.5](04-05-adding-angular-momenta.md).)
- **The character sees only the isomorphism class.** $\langle\chi_V,\chi_i\rangle$ tells you *how many* copies and *of what*, not *where they sit*. For the vectors you must run the projection operator — counting and locating are different jobs.

## One-liner

> To decompose any representation, expand its character in the orthonormal basis of table rows: each multiplicity is one inner product $m_i = \langle\chi_V,\chi_i\rangle$ — a Fourier coefficient on the group — and the projector $P_i = \frac{d_i}{|G|}\sum_g \overline{\chi_i(g)}\rho(g)$ hands you the actual subspace when you need it.

## Problems

**P1 (🟢)** A representation $V$ of $S_3$ has character $\chi_V = (5, 1, 2)$ on the classes $(\{e\},\ \text{transpositions},\ 3\text{-cycles})$. Using the $S_3$ table above, compute all three multiplicities and write the decomposition. Verify the dimension.

**P2 (🟡)** Let $V_{\text{std}}$ be the $2$-dimensional standard rep of $S_3$, with character $\chi_{\text{std}} = (2, 0, -1)$. Its **tensor square** $V_{\text{std}} \otimes V_{\text{std}}$ has character $\chi_{\text{std}}^2 = (\chi_{\text{std}}(g))^2$ (characters of tensor products multiply — a [3.1](03-01-tensor-products.md) fact). Decompose $V_{\text{std}} \otimes V_{\text{std}}$ into irreducibles.

**P3 (🔴 — Boss Problem 2, part 2, in full).** Decompose the $S_3$ permutation representation on $\mathbb{C}^3$ **two independent ways** and show they agree:
(a) by character inner products, computing $m_{\text{triv}}, m_{\text{sign}}, m_{\text{std}}$;
(b) by explicit invariant subspaces, using the projection operators $P_i = \frac{d_i}{|G|}\sum_g \overline{\chi_i(g)}\rho(g)$ to *produce* the trivial and standard subspaces as concrete spans, and confirm their dimensions and direct-sum match the multiplicities from (a).

<details>
<summary>Solutions</summary>

**P1.** Inner products against each row (class sizes $1,3,2$; real table so no conjugates):
$$m_{\text{triv}} = \tfrac16\big(1{\cdot}5{\cdot}1 + 3{\cdot}1{\cdot}1 + 2{\cdot}2{\cdot}1\big) = \tfrac16(5+3+4) = 2,$$
$$m_{\text{sign}} = \tfrac16\big(1{\cdot}5{\cdot}1 + 3{\cdot}1{\cdot}(-1) + 2{\cdot}2{\cdot}1\big) = \tfrac16(5-3+4) = 1,$$
$$m_{\text{std}} = \tfrac16\big(1{\cdot}5{\cdot}2 + 3{\cdot}1{\cdot}0 + 2{\cdot}2{\cdot}(-1)\big) = \tfrac16(10+0-4) = 1.$$
So $V \cong 2V_{\text{triv}} \oplus V_{\text{sign}} \oplus V_{\text{std}}$. Dimension check: $2{\cdot}1 + 1{\cdot}1 + 1{\cdot}2 = 5 = \chi_V(e)$. ✓ (And $\langle\chi_V,\chi_V\rangle = \tfrac16(25+3+8) = 6 = 2^2+1^2+1^2$ — consistent, so definitely reducible.)

**P2.** Square the standard character entrywise: $\chi_{\text{std}}^2 = (2^2, 0^2, (-1)^2) = (4, 0, 1)$. Then
$$m_{\text{triv}} = \tfrac16\big(1{\cdot}4{\cdot}1 + 3{\cdot}0{\cdot}1 + 2{\cdot}1{\cdot}1\big) = \tfrac16(4+0+2) = 1,$$
$$m_{\text{sign}} = \tfrac16\big(1{\cdot}4{\cdot}1 + 3{\cdot}0{\cdot}(-1) + 2{\cdot}1{\cdot}1\big) = \tfrac16(4+0+2) = 1,$$
$$m_{\text{std}} = \tfrac16\big(1{\cdot}4{\cdot}2 + 3{\cdot}0{\cdot}0 + 2{\cdot}1{\cdot}(-1)\big) = \tfrac16(8+0-2) = 1.$$
So $V_{\text{std}} \otimes V_{\text{std}} \cong V_{\text{triv}} \oplus V_{\text{sign}} \oplus V_{\text{std}}$. Dimension check: $1+1+2 = 4 = 2\times 2$. ✓ (This is a first taste of a **Clebsch–Gordan decomposition** — breaking a tensor product into irreducibles, the engine of [3.2](03-02-clebsch-gordan-decomposition.md). The trivial summand here is the $G$-invariant line inside $V_{\text{std}}\otimes V_{\text{std}}$ — the "singlet.")

**P3.** *(a) Character way.* Exactly the Concrete-instance computation: with $\chi_{\text{perm}} = (3,1,0)$,
$$m_{\text{triv}} = \tfrac16(3+3+0) = 1,\quad m_{\text{sign}} = \tfrac16(3-3+0) = 0,\quad m_{\text{std}} = \tfrac16(6+0+0) = 1,$$
giving $\mathbb{C}^3 \cong V_{\text{triv}} \oplus V_{\text{std}}$, with $\langle\chi_{\text{perm}},\chi_{\text{perm}}\rangle = 2 = 1^2+0^2+1^2$.

*(b) Invariant-subspace way, via projectors.* 

**Trivial component.** $P_{\text{triv}} = \frac{1}{6}\sum_{\sigma}\rho(\sigma)$. From Example 2, $P_{\text{triv}}e_j = \tfrac13(1,1,1)$ for every $j$. So the image is the single line
$$V^{(\text{triv})} = \operatorname{span}\{(1,1,1)\}, \qquad \dim = 1 = m_{\text{triv}}\,d_{\text{triv}} = 1{\cdot}1.$$

**Standard component.** Only two irreducibles appear, so $P_{\text{std}} = I - P_{\text{triv}}$ (equivalently the full formula $\frac{2}{6}\sum_\sigma \chi_{\text{std}}(\sigma)\rho(\sigma)$ gives the same operator). Apply to the basis:
$$P_{\text{std}}e_1 = e_1 - \tfrac13(1,1,1) = \big(\tfrac23,-\tfrac13,-\tfrac13\big),\quad P_{\text{std}}e_2 = \big(-\tfrac13,\tfrac23,-\tfrac13\big),\quad P_{\text{std}}e_3 = \big(-\tfrac13,-\tfrac13,\tfrac23\big).$$
Each output has entries summing to $0$, so the image lies in $\{x : \sum_i x_i = 0\}$. These three vectors sum to $0$ (dependent) but any two are independent, so
$$V^{(\text{std})} = \operatorname{span}\{(\tfrac23,-\tfrac13,-\tfrac13),\ (-\tfrac13,\tfrac23,-\tfrac13)\} = \{x : \textstyle\sum_i x_i = 0\}, \qquad \dim = 2 = m_{\text{std}}\,d_{\text{std}} = 1{\cdot}2.$$

**Agreement.** The projectors reproduce precisely the [1.3](01-03-reducibility-invariant-subspaces.md) subspaces — the all-ones line and the sum-zero plane — and
$$\mathbb{C}^3 = V^{(\text{triv})} \oplus V^{(\text{std})}, \qquad 1 + 2 = 3,$$
with dimensions $1$ and $2$ matching $m_{\text{triv}}d_{\text{triv}}$ and $m_{\text{std}}d_{\text{std}}$ from part (a). The sign multiplicity $m_{\text{sign}} = 0$ shows up as $P_{\text{sign}} = \frac{1}{6}\sum_\sigma \operatorname{sgn}(\sigma)\rho(\sigma) = 0$ on this space (no sign-antisymmetric vector exists among coordinate permutations of three objects). Character counting and explicit geometry give the identical decomposition — one by three dot products, the other by three averages. $\blacksquare$

</details>

## Flashback

**From Lesson 2.2 (orthogonality relations):** Using the $S_3$ character table above, confirm that the standard character $\chi_{\text{std}} = (2,0,-1)$ is a **unit vector** and is **orthogonal** to the trivial character $\chi_{\text{triv}} = (1,1,1)$ — i.e. compute $\langle\chi_{\text{std}},\chi_{\text{std}}\rangle$ and $\langle\chi_{\text{std}},\chi_{\text{triv}}\rangle$. What does each value tell you?

<details>
<summary>Solution</summary>

Class sizes $1, 3, 2$; the table is real, so conjugation does nothing.
$$\langle\chi_{\text{std}},\chi_{\text{std}}\rangle = \tfrac16\big(1{\cdot}2{\cdot}2 + 3{\cdot}0{\cdot}0 + 2{\cdot}(-1){\cdot}(-1)\big) = \tfrac16(4+0+2) = 1.$$
Norm $1$ $\Rightarrow$ **the standard rep is irreducible** (the [2.2](02-02-orthogonality-relations.md) criterion $\langle\chi,\chi\rangle = 1$), consistent with the by-hand no-invariant-line proof in [1.3](01-03-reducibility-invariant-subspaces.md).
$$\langle\chi_{\text{std}},\chi_{\text{triv}}\rangle = \tfrac16\big(1{\cdot}2{\cdot}1 + 3{\cdot}0{\cdot}1 + 2{\cdot}(-1){\cdot}1\big) = \tfrac16(2+0-2) = 0.$$
Orthogonality $\Rightarrow$ **standard and trivial are non-isomorphic irreducibles** (distinct rows of an orthonormal table). Together: the standard character is a genuine basis vector for decomposing anything in sight — which is exactly why $m_{\text{std}} = \langle\chi_V,\chi_{\text{std}}\rangle$ works as a clean coordinate readout in this lesson. $\blacksquare$

</details>

## Connections

- **Backward:** the whole method is [2.2](02-02-orthogonality-relations.md)'s orthonormality cashed in — $\langle\chi_i,\chi_j\rangle = \delta_{ij}$ is *precisely* what makes $m_i = \langle\chi_V,\chi_i\rangle$ a coordinate readout. The rows come from [2.3](02-03-building-character-table.md)'s constructed table, and the answers reproduce the invariant-subspace decompositions of [1.3](01-03-reducibility-invariant-subspaces.md)/[1.4](01-04-maschke-theorem.md) without any of the geometry hunting.
- **Forward:** [2.5 The regular representation](02-05-regular-representation.md) is the flagship application — its character is $(|G|, 0, 0, \dots)$, and this lesson's formula instantly gives $m_i = d_i$: *every irreducible appears exactly as many times as its dimension*, the identity behind $\sum_i d_i^2 = |G|$. [3.2 Clebsch–Gordan](03-02-clebsch-gordan-decomposition.md) decomposes tensor *products* (P2 is the warm-up), and [3.4](03-04-molecular-vibrations-selection-rules.md)/[3.5](03-05-degeneracy-symmetry-breaking.md) decompose the displacement representation of a molecule to read off its vibrational modes and how a perturbation splits a degenerate level — each is this same inner-product-against-the-table move.
- **Sideways (quantum mechanics):** decomposing a rep is decomposing a state space into **symmetry multiplets** — the isotypic components $V^{(i)}$ are the degenerate energy sectors, the multiplicities $m_i$ count how many multiplets of each symmetry type occur, and the projectors $P_i$ are the symmetry-adapted projection operators that build good basis states; see `](../../quantum-mechanics/syllabus.md)`.
- **Sideways (Fourier analysis):** $m_i = \langle\chi_V,\chi_i\rangle$ is a Fourier coefficient in disguise. Expanding a function on the circle in $\{e^{in\theta}\}$ and expanding a rep's character in $\{\chi_i\}$ are the *same* act — projecting onto an orthonormal basis of "pure frequencies." Character theory is Fourier analysis for (possibly non-abelian) finite groups; the character table is the group's frequency spectrum.
