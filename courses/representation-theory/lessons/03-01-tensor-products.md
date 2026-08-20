# Group & Representation Theory · Lesson 3.1: Tensor products of representations

> ⏱ ~15 min · Module 3: Symmetry in action · Builds on: [2.5 The regular representation](02-05-regular-representation.md) · Unlocks: [3.2 Clebsch–Gordan decomposition](03-02-clebsch-gordan-decomposition.md)

## Why this matters

So far one representation has described one system responding to a symmetry. But nature is built out of *combinations*: two particles, two spins, an electron *and* a nucleus, a molecule's stretch *and* its bend. When you glue two systems together, the same group $G$ now acts on the joint system — and it acts on both parts *at once*. The gadget that encodes "both parts at once" is the **tensor product**. This lesson builds it, and hands you the single most useful arithmetic shortcut in the subject: **to tensor two representations, you multiply their character rows.** That one line is the engine behind adding angular momenta ([4.5](04-05-adding-angular-momenta.md)), selection rules ([3.4](03-04-molecular-vibrations-selection-rules.md)), and — because $V\otimes V$ splits into a symmetric and an antisymmetric half — the deep reason the universe sorts particles into bosons and fermions.

## The idea

You know the direct sum $V\oplus W$: it stacks two systems *side by side* — dimension $d_V + d_W$, block-diagonal matrices, the group acting independently on each block. That's "either/or." The tensor product $V\otimes W$ is "both/and": it describes the joint states of the two systems *together*.

Concretely, if $V$ has basis $\{e_1,\dots,e_m\}$ and $W$ has basis $\{f_1,\dots,f_n\}$, then $V\otimes W$ has basis $\{e_i\otimes f_j\}$ — one basis vector for every *pair*. So $\dim(V\otimes W) = mn$, a *product*, not a sum. (Think of the states of two dice: not $6+6=12$ but $6\times 6=36$ joint outcomes.)

Now let the group act. The natural rule is that $g$ does its job on *each* factor simultaneously:
$$(\rho_V\otimes\rho_W)(g)\,(v\otimes w) = \big(\rho_V(g)\,v\big)\otimes\big(\rho_W(g)\,w\big).$$
In words: **apply the same group element to both parts of the composite at the same time.** As a matrix, this is the **Kronecker product** $\rho_V(g)\otimes\rho_W(g)$ — every entry of the first matrix multiplied by the whole second matrix, tiled into an $mn\times mn$ block array.

## The formal version

**Definition (tensor product representation).** Given representations $\rho_V:G\to GL(V)$ and $\rho_W:G\to GL(W)$, define
$$\rho_{V\otimes W}(g) = \rho_V(g)\otimes\rho_W(g)\in GL(V\otimes W),$$
the Kronecker product of the two matrices. It *is* a representation: $\rho_V(gh)\otimes\rho_W(gh) = \big(\rho_V(g)\rho_V(h)\big)\otimes\big(\rho_W(g)\rho_W(h)\big) = \big(\rho_V(g)\otimes\rho_W(g)\big)\big(\rho_V(h)\otimes\rho_W(h)\big)$, using the mixed-product rule $(A\otimes B)(C\otimes D) = AC\otimes BD$.

**The character rule (the payoff).**
$$\boxed{\;\chi_{V\otimes W}(g) = \chi_V(g)\,\chi_W(g)\;}$$
In words: **the character of a tensor product is the pointwise product of the characters.** Why: the trace of a Kronecker product factors, $\operatorname{tr}(A\otimes B) = \operatorname{tr}(A)\,\operatorname{tr}(B)$ — the diagonal of $A\otimes B$ consists of $a_{ii}B$ blocks, whose traces sum to $(\sum_i a_{ii})\operatorname{tr}(B)$. So in the character table you tensor two representations by **multiplying their rows entry-by-entry.** No matrices required.

**Symmetric and antisymmetric squares.** When you tensor a representation with *itself*, $V\otimes V$ carries a natural extra structure: the swap $v\otimes w\mapsto w\otimes v$ is a $G$-invariant operator squaring to the identity, so it splits $V\otimes V$ into its $+1$ and $-1$ eigenspaces:
$$V\otimes V = \operatorname{Sym}^2 V \;\oplus\; \Lambda^2 V.$$
- $\operatorname{Sym}^2 V$ (**symmetric square**): spanned by $v_i\otimes v_j + v_j\otimes v_i$; dimension $\tfrac{d(d+1)}{2}$.
- $\Lambda^2 V$ (**antisymmetric/exterior square**): spanned by $v_i\otimes v_j - v_j\otimes v_i$; dimension $\tfrac{d(d-1)}{2}$.

Their characters are *not* just $\tfrac12\chi(g)^2$ — the swap sees the group element squared:
$$\chi_{\operatorname{Sym}^2 V}(g) = \tfrac12\!\left(\chi_V(g)^2 + \chi_V(g^2)\right), \qquad \chi_{\Lambda^2 V}(g) = \tfrac12\!\left(\chi_V(g)^2 - \chi_V(g^2)\right).$$
In words: split $\chi^2$ into a symmetric and antisymmetric half using the extra data $\chi(g^2)$ — the character evaluated at the *square* of each element. (Problem 🔴 derives both by eigenvalue bookkeeping; add them and the $\chi(g^2)$ terms cancel back to $\chi_V(g)^2 = \chi_{V\otimes V}(g)$, as they must.)

**Physics preview.** Combining two spin-$\tfrac12$ particles is exactly $\mathbb{C}^2\otimes\mathbb{C}^2$; its symmetric part is the spin-1 triplet, its antisymmetric part the spin-0 singlet ([4.5](04-05-adding-angular-momenta.md)). More profoundly: identical bosons live in $\operatorname{Sym}$, identical fermions in $\Lambda$ — and because $\Lambda^2$ of a 1-dimensional state space is *zero*, two fermions can never occupy the same state. That is the **Pauli exclusion principle**, falling straight out of the antisymmetric square.

## Concrete instance

Take the 2-dimensional **standard representation** of $S_3$, with character $\chi_{\text{std}} = (2,\,0,\,-1)$ across the three conjugacy classes. First we need the **class map** $g\mapsto g^2$, because the $\operatorname{Sym}^2/\Lambda^2$ formulas evaluate the character there:

| class | rep. element | order | $g^2$ lands in class | $\chi_{\text{std}}(g^2)$ |
|---|---|---|---|---|
| $e$ | identity | 1 | $e$ | $2$ |
| $3$ transpositions | $(1\,2)$ | 2 | $e$ | $2$ |
| $2$ three-cycles | $(1\,2\,3)$ | 3 | $(1\,3\,2)$ (a 3-cycle) | $-1$ |

So $\chi_{\text{std}}(g^2) = (2,\,2,\,-1)$. Now assemble everything by multiplying and averaging rows:

| character | $e$ | transposition | 3-cycle | how |
|---|---|---|---|---|
| $\chi_{\text{std}}$ | $2$ | $0$ | $-1$ | given |
| $\chi_{\text{std}\otimes\text{std}} = \chi_{\text{std}}^2$ | $4$ | $0$ | $1$ | square the row |
| $\chi_{\text{std}}(g^2)$ | $2$ | $2$ | $-1$ | read from class map |
| $\chi_{\operatorname{Sym}^2} = \tfrac12(\chi^2+\chi(g^2))$ | $3$ | $1$ | $0$ | $\tfrac12(4{+}2,\,0{+}2,\,1{-}1)$ |
| $\chi_{\Lambda^2} = \tfrac12(\chi^2-\chi(g^2))$ | $1$ | $-1$ | $1$ | $\tfrac12(4{-}2,\,0{-}2,\,1{+}1)$ |

Check dimensions against $d=2$: $\dim\operatorname{Sym}^2 = \tfrac{2\cdot3}{2}=3 = \chi_{\operatorname{Sym}^2}(e)$ ✓ and $\dim\Lambda^2 = \tfrac{2\cdot1}{2}=1 = \chi_{\Lambda^2}(e)$ ✓. And look who $\Lambda^2$ is: $(1,-1,1)$ is exactly the **sign representation**. That's no accident — for a 2-dimensional representation $\Lambda^2 V$ is 1-dimensional and equals the *determinant* representation $g\mapsto\det\rho(g)$, and $\det$ of the standard rep of $S_3$ is precisely the sign of the permutation.

## Worked examples

**Example 1 — tensor two irreducibles by multiplying rows.** Compute $\text{sign}\otimes\text{std}$ for $S_3$, where $\chi_{\text{sign}} = (1,-1,1)$ and $\chi_{\text{std}} = (2,0,-1)$.

Multiply entry-by-entry:
$$\chi_{\text{sign}\otimes\text{std}} = (1\cdot 2,\; (-1)\cdot 0,\; 1\cdot(-1)) = (2,\,0,\,-1).$$
That's $\chi_{\text{std}}$ itself. So $\text{sign}\otimes\text{std} \cong \text{std}$ — tensoring the 2-dimensional standard rep with the sign character just gives back the standard rep (irreducible, dimension $1\times 2 = 2$). Tensoring by any 1-dimensional representation never changes dimension and simply permutes/reweights the irreducibles; here it fixes $\text{std}$.

**Example 2 — decompose $\text{std}\otimes\text{std}$.** From the concrete instance, $\chi_{\text{std}\otimes\text{std}} = (4,0,1)$. This is a 4-dimensional representation ($2\times 2$); which irreducibles hide inside? Peeking ahead to the decomposition machinery of [2.4](02-04-decomposing-a-representation.md) and [3.2](03-02-clebsch-gordan-decomposition.md), just add the irreducible rows of $S_3$:
$$\chi_{\text{triv}} + \chi_{\text{sign}} + \chi_{\text{std}} = (1,1,1) + (1,-1,1) + (2,0,-1) = (4,0,1) = \chi_{\text{std}\otimes\text{std}}.$$
Hence
$$\text{std}\otimes\text{std} \;\cong\; \text{trivial}\;\oplus\;\text{sign}\;\oplus\;\text{standard}.$$
Cross-check against the symmetric/antisymmetric split: $\operatorname{Sym}^2$ had $\chi=(3,1,0) = \chi_{\text{triv}}+\chi_{\text{std}}$, and $\Lambda^2$ had $\chi=(1,-1,1)=\chi_{\text{sign}}$. Summing the two halves recovers $\text{triv}\oplus\text{std}\oplus\text{sign}$ — the same list. The tensor product of two irreducibles is generally *reducible*; splitting it back into irreducibles is precisely the **Clebsch–Gordan problem** of the next lesson.

## Watch out

- **$\dim$ multiplies, it does not add.** $\dim(V\otimes W) = \dim V\cdot\dim W$. If you catch yourself writing $m+n$, you're thinking of $\oplus$. (Two spin-$\tfrac12$'s give a $2\times2 = 4$-dimensional space, not 3.)
- **$\operatorname{Sym}^2$ is *not* $\tfrac12\chi^2$.** The tempting "half of everything" ignores the diagonal $v_i\otimes v_i$ terms, which are symmetric and survive. The honest formula carries the correction $\chi(g^2)$; you must build the $g\mapsto g^2$ class map first. Forgetting it is the single most common tensor-square error.
- **You need $g^2$'s *class*, not $g^2$ literally.** Characters are class functions, so all that matters is which conjugacy class $g^2$ falls into. For a transposition, $g^2=e$; for a 3-cycle, $g^2$ is another 3-cycle. Track the class, read the character there.
- **A tensor product of irreducibles is usually reducible.** $\chi_V\chi_W$ is a genuine character, but rarely an irreducible one — don't expect the product row to already sit in your table. Decomposing it is the whole point of [3.2](03-02-clebsch-gordan-decomposition.md).

## One-liner

> To combine two systems, tensor their representations — $g$ acts on both factors at once, characters *multiply*, and the self-tensor $V\otimes V$ cleaves into a symmetric half (bosons) and an antisymmetric half (fermions) separated by $\chi(g^2)$.

## Problems

**P1 (🟢)** The 3-dimensional permutation representation of $S_3$ has character $\chi_{\text{perm}} = (3,1,0)$ (fixed-point counts on the three classes $e$, transposition, 3-cycle). Compute the character of $\text{perm}\otimes\text{sign}$, where $\chi_{\text{sign}} = (1,-1,1)$.

**P2 (🟡)** For that same permutation representation ($\chi_{\text{perm}} = (3,1,0)$, dimension 3), compute the characters of $\operatorname{Sym}^2$ and $\Lambda^2$. You'll need $\chi_{\text{perm}}(g^2)$ — build the $g\mapsto g^2$ class map first. Verify both dimensions against $\tfrac{d(d\pm1)}{2}$.

**P3 (🔴)** Prove the symmetric/antisymmetric square character formulas
$$\chi_{\operatorname{Sym}^2 V}(g) = \tfrac12\!\left(\chi_V(g)^2 + \chi_V(g^2)\right), \qquad \chi_{\Lambda^2 V}(g) = \tfrac12\!\left(\chi_V(g)^2 - \chi_V(g^2)\right)$$
by eigenvalue bookkeeping of $\rho_V(g)$ acting on $V\otimes V$.

<details>
<summary>Solutions</summary>

**P1** Multiply the two rows entry-by-entry:
$$\chi_{\text{perm}\otimes\text{sign}} = (3\cdot 1,\; 1\cdot(-1),\; 0\cdot 1) = (3,\,-1,\,0).$$
(As a sanity check, this is $\chi_{\text{triv}}\!\cdot? $ — no: it's the character of $\text{perm}\otimes\text{sign}$, a genuine 3-dimensional representation. Decomposing it, $(3,-1,0) = \chi_{\text{sign}} + \chi_{\text{std}} = (1,-1,1)+(2,0,-1)$, so $\text{perm}\otimes\text{sign}\cong\text{sign}\oplus\text{std}$.)

**P2** Class map $g\mapsto g^2$ for $S_3$: $e\mapsto e$; transposition $\mapsto e$; 3-cycle $\mapsto$ 3-cycle. Read $\chi_{\text{perm}}$ at those classes:
$$\chi_{\text{perm}}(g^2) = \big(\chi_{\text{perm}}(e),\,\chi_{\text{perm}}(e),\,\chi_{\text{perm}}(\text{3-cyc})\big) = (3,\,3,\,0).$$
Square the row: $\chi_{\text{perm}}^2 = (9,1,0)$. Then
$$\chi_{\operatorname{Sym}^2} = \tfrac12\big((9,1,0)+(3,3,0)\big) = \tfrac12(12,4,0) = (6,\,2,\,0),$$
$$\chi_{\Lambda^2} = \tfrac12\big((9,1,0)-(3,3,0)\big) = \tfrac12(6,-2,0) = (3,\,-1,\,0).$$
Dimensions: $\chi_{\operatorname{Sym}^2}(e) = 6 = \tfrac{3\cdot4}{2}$ ✓ and $\chi_{\Lambda^2}(e) = 3 = \tfrac{3\cdot2}{2}$ ✓. (Nice bonus: $\chi_{\Lambda^2} = (3,-1,0)$ matches P1 — indeed $\Lambda^2(\text{perm})\cong\text{perm}\otimes\text{sign}$ for this representation.)

**P3** Fix $g$. Because $G$ is finite, $\rho_V(g)$ has finite order, hence is diagonalizable: pick a basis $v_1,\dots,v_d$ of $V$ with $\rho_V(g)\,v_i = \lambda_i v_i$. The tensor operator $\rho_{V\otimes V}(g) = \rho_V(g)\otimes\rho_V(g)$ then acts on the basis $\{v_i\otimes v_j\}$ of $V\otimes V$ by
$$\rho_{V\otimes V}(g)\,(v_i\otimes v_j) = \lambda_i\lambda_j\,(v_i\otimes v_j),$$
so its eigenvalues are all products $\lambda_i\lambda_j$.

Now diagonalize the swap-adapted bases:
- **$\operatorname{Sym}^2 V$** has basis $\{\,v_i\otimes v_i\ (1\le i\le d)\,\}\cup\{\,v_i\otimes v_j + v_j\otimes v_i\ (i<j)\,\}$, and each is an eigenvector: eigenvalue $\lambda_i^2$ for the diagonal ones, $\lambda_i\lambda_j$ for the $i<j$ ones. Hence
$$\chi_{\operatorname{Sym}^2}(g) = \sum_i \lambda_i^2 + \sum_{i<j}\lambda_i\lambda_j.$$
- **$\Lambda^2 V$** has basis $\{\,v_i\otimes v_j - v_j\otimes v_i\ (i<j)\,\}$, with eigenvalue $\lambda_i\lambda_j$. Hence
$$\chi_{\Lambda^2}(g) = \sum_{i<j}\lambda_i\lambda_j.$$

Now translate the elementary symmetric sums into characters. First,
$$\chi_V(g)^2 = \Big(\sum_i\lambda_i\Big)^2 = \sum_i\lambda_i^2 + 2\sum_{i<j}\lambda_i\lambda_j.$$
Second, $\rho_V(g^2) = \rho_V(g)^2$ has eigenvalues $\lambda_i^2$, so
$$\chi_V(g^2) = \operatorname{tr}\rho_V(g)^2 = \sum_i\lambda_i^2.$$
Subtracting and adding:
$$\sum_{i<j}\lambda_i\lambda_j = \tfrac12\big(\chi_V(g)^2 - \chi_V(g^2)\big) = \chi_{\Lambda^2}(g),$$
$$\sum_i\lambda_i^2 + \sum_{i<j}\lambda_i\lambda_j = \chi_V(g^2) + \tfrac12\big(\chi_V(g)^2 - \chi_V(g^2)\big) = \tfrac12\big(\chi_V(g)^2 + \chi_V(g^2)\big) = \chi_{\operatorname{Sym}^2}(g).\qquad\blacksquare$$
Consistency: $\chi_{\operatorname{Sym}^2}+\chi_{\Lambda^2} = \chi_V(g)^2 = \chi_{V\otimes V}(g)$, confirming $V\otimes V = \operatorname{Sym}^2 V\oplus\Lambda^2 V$.

</details>

## Flashback

**From [Lesson 2.3](02-03-building-character-table.md) (Building the character table):** Using the class sizes of $S_3$ — $|e|=1$, three transpositions, two 3-cycles — verify that the standard representation, with $\chi_{\text{std}} = (2,0,-1)$, is **irreducible**, by computing the norm $\langle\chi_{\text{std}},\chi_{\text{std}}\rangle$.

<details>
<summary>Solution</summary>

The irreducibility test is $\langle\chi,\chi\rangle = 1$, where the class-weighted inner product is
$$\langle\chi,\chi\rangle = \frac{1}{|G|}\sum_{\text{classes }C} |C|\,\big|\chi(C)\big|^2.$$
With $|G| = 6$:
$$\langle\chi_{\text{std}},\chi_{\text{std}}\rangle = \frac{1}{6}\Big(1\cdot|2|^2 + 3\cdot|0|^2 + 2\cdot|{-}1|^2\Big) = \frac{1}{6}(4 + 0 + 2) = \frac{6}{6} = 1.$$
Norm 1 ⟹ irreducible. ✓ (Had it come out an integer $>1$, say 2, the representation would decompose into that many distinct irreducibles.)

</details>

## Connections

- **Backward:** the character rule leans on everything from Module 2 — you *multiply* rows using the character machinery of [2.1](02-01-characters.md), then *decompose* the product with the inner-product projection of [2.4](02-04-decomposing-a-representation.md); the norm test resurfaced in the Flashback is straight from [2.2](02-02-orthogonality-relations.md)–[2.3](02-03-building-character-table.md). At bottom this is still the [1.1](01-01-what-is-a-representation.md) idea — a group acting linearly — now on a composite space.
- **Forward:** [3.2](03-02-clebsch-gordan-decomposition.md) turns "multiply the rows" into "and here's how the product splits back into irreducibles" (Clebsch–Gordan); [3.4](03-04-molecular-vibrations-selection-rules.md) uses product representations to decide which transitions are allowed (selection rules — an integral vanishes unless the tensor product contains the trivial rep); [4.5](04-05-adding-angular-momenta.md) is this exact story for $SU(2)$, where tensoring spin-$j_1$ with spin-$j_2$ *is* the addition of angular momenta.
- **Sideways (quantum mechanics):** combining two subsystems is literally the tensor product of their Hilbert spaces — see the [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) course. Two identical particles must occupy $\operatorname{Sym}^2$ (bosons) or $\Lambda^2$ (fermions); the vanishing of $\Lambda^2$ on a repeated state *is* the Pauli exclusion principle.
- **Sideways (linear algebra):** the Kronecker product and the identity $\operatorname{tr}(A\otimes B) = \operatorname{tr}A\,\operatorname{tr}B$ that powers the whole character rule are pure linear algebra — the [`linalg-refresher`](../../linalg-refresher/syllabus.md) refresher on Kronecker products and trace is the toolbox underneath this lesson.
