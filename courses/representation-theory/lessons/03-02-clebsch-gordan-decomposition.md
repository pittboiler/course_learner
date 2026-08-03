# Group & Representation Theory · Lesson 3.2: Clebsch–Gordan decomposition

> ⏱ ~15 min · Module 3: Symmetry in action · Builds on: [3.1 Tensor products of representations](03-01-tensor-products.md) · Unlocks: [3.3 Restriction and induction (a taste)](03-03-restriction-induction.md)

## Why this matters

Lesson 3.1 built the tensor product $V_i \otimes V_j$ — the state space of two systems glued together — and handed you its character for free: $\chi_{V_i \otimes V_j} = \chi_i\,\chi_j$. But a tensor product is almost never irreducible. Coupling two symmetric systems produces a *mixture* of combined symmetry types, and the physics question is always: **which types, and how many of each?** In quantum mechanics this is literally "adding two angular momenta" — $j_1 \otimes j_2$ splits into total spins $|j_1-j_2|, \dots, j_1+j_2$. Here we do the exact same thing for finite groups, where it's a two-line character computation. Master it now and [4.5](04-05-adding-angular-momenta.md)'s $SU(2)$ version is a re-run with the same script.

## The idea

You already own both halves of the answer. From [3.1](03-01-tensor-products.md): characters of a tensor product **multiply**. From [2.4](02-04-decomposing-a-representation.md): the number of copies of an irreducible $V_k$ inside any representation is the **inner product of characters**, $\langle \chi, \chi_k\rangle$. Chain them together and the whole decomposition falls out mechanically:

$$V_i \otimes V_j \;=\; \bigoplus_k N_{ij}^k\, V_k, \qquad N_{ij}^k \;=\; \langle\, \chi_i\chi_j,\ \chi_k\,\rangle.$$

**In words:** multiply the two characters pointwise, then take inner products against each irreducible character to read off how many of each combined symmetry type you get. No matrices, no basis — just arithmetic on the character table. The recipe is *multiply, then project.*

The numbers $N_{ij}^k$ are the **Clebsch–Gordan (CG) series** — the multiplicities of the coupling. They tell you the *shape* of the decomposition. What they don't tell you is the actual change of basis that block-diagonalizes the product; those finer numbers (the CG *coefficients* proper) are the topic of the second half of this lesson.

## The formal version

**The Clebsch–Gordan problem.** Given two irreducibles $V_i, V_j$ of a finite group $G$, find the decomposition $V_i \otimes V_j = \bigoplus_k N_{ij}^k V_k$ into irreducibles.

**The multiplicities.** Combining the product rule with the multiplicity formula,

$$N_{ij}^k = \langle \chi_i \chi_j, \chi_k\rangle = \frac{1}{|G|}\sum_{g\in G} \chi_i(g)\,\chi_j(g)\,\overline{\chi_k(g)}.$$

*In words:* the multiplicity of $V_k$ in $V_i\otimes V_j$ is one inner product on the group. In practice you sum over **conjugacy classes**, weighting each term by the class size, since characters are constant on classes.

**The trivial-rep criterion (the seed of selection rules).** How often does the trivial representation appear in $V_i \otimes V_j$? Set $k = \text{triv}$, so $\chi_k \equiv 1$:

$$N_{ij}^{\text{triv}} = \langle \chi_i\chi_j,\ 1\rangle = \frac{1}{|G|}\sum_g \chi_i(g)\,\overline{\overline{\chi_j(g)}} = \langle \chi_i,\ \overline{\chi_j}\rangle = \langle \chi_i, \chi_{j^*}\rangle = \delta_{i,\,j^*}.$$

*In words:* the trivial rep appears in $V_i \otimes V_j$ **exactly when $V_j$ is the dual (conjugate) of $V_i$**, and then exactly once. This is the birth certificate of an *invariant*: a nonzero vector in $V_i \otimes V_j$ fixed by all of $G$ — equivalently a $G$-equivariant pairing $V_i^* \to V_j$ — exists iff $V_j \cong V_i^*$. [3.4](03-04-molecular-vibrations-selection-rules.md)'s selection rules are this same test applied to a *triple* product.

**The CG coefficients proper.** The series tells you $V_i \otimes V_j$ and $\bigoplus_k N_{ij}^k V_k$ are isomorphic; an actual **intertwiner** (isomorphism commuting with $G$) realizes it. Written in bases, it is a change of basis

$$|i,a\rangle \otimes |j,b\rangle \;=\; \sum_{k,c} C^{\,k c}_{ia,\,jb}\; |k, c\rangle,$$

from the **product basis** (a state of $V_i$ times a state of $V_j$) to the **coupled basis** (a state living in a definite irreducible piece $V_k$). The entries $C$ are the **Clebsch–Gordan coefficients**. You compute them with the same tool that decomposes any rep — the **projection operators** of [2.4](02-04-decomposing-a-representation.md),

$$P_k \;=\; \frac{\dim V_k}{|G|}\sum_{g} \overline{\chi_k(g)}\,\big(\rho_i \otimes \rho_j\big)(g),$$

which projects $V_i \otimes V_j$ onto its $V_k$-isotypic component. Apply $P_k$ to product-basis vectors, and the resulting coupled vectors, expanded back in the product basis, *are* the CG coefficients.

## Concrete instance

The flagship finite-group example: $\text{std} \otimes \text{std}$ for $S_3$. Here is the full $S_3$ character table (classes labeled by size: identity, the three transpositions, the two 3-cycles):

| irrep | $e\ (1)$ | transpositions $(3)$ | 3-cycles $(2)$ |
|---|:---:|:---:|:---:|
| $\chi_{\text{triv}}$ | $1$ | $1$ | $1$ |
| $\chi_{\text{sign}}$ | $1$ | $-1$ | $1$ |
| $\chi_{\text{std}}$ | $2$ | $0$ | $-1$ |

**Step 1 — multiply.** The tensor-product character is $\chi_{\text{std}}^2$, computed pointwise:

$$\chi_{\text{std}}^2 = (2^2,\ 0^2,\ (-1)^2) = (4,\ 0,\ 1).$$

Dimension check: at $e$ it reads $4 = 2\times 2 = \dim(\text{std}\otimes\text{std})$. ✓

**Step 2 — project onto each irreducible** (sum over classes, weighting by class size, $|S_3| = 6$):

$$N^{\text{triv}} = \tfrac{1}{6}\big[1\cdot 4\cdot 1 + 3\cdot 0\cdot 1 + 2\cdot 1\cdot 1\big] = \tfrac{6}{6} = 1,$$
$$N^{\text{sign}} = \tfrac{1}{6}\big[1\cdot 4\cdot 1 + 3\cdot 0\cdot(-1) + 2\cdot 1\cdot 1\big] = \tfrac{6}{6} = 1,$$
$$N^{\text{std}} = \tfrac{1}{6}\big[1\cdot 4\cdot 2 + 3\cdot 0\cdot 0 + 2\cdot 1\cdot(-1)\big] = \tfrac{6}{6} = 1.$$

**The CG series:**

$$\boxed{\ \text{std}\otimes\text{std} \;=\; \text{triv}\ \oplus\ \text{sign}\ \oplus\ \text{std}\ }\qquad \dim:\ 4 = 1 + 1 + 2.\ ✓$$

**The coupled basis.** Working in the standard-rep basis $v_1 = e_1 - e_2,\ v_2 = e_2 - e_3$ (the same basis built in [1.3](01-03-reducibility-invariant-subspaces.md) and reused in [3.1](03-01-tensor-products.md)), the projection operators (computed in the 🔴 solution) hand back this change of basis from the product basis $\{v_a \otimes v_b\}$:

| coupled state (irrep) | expansion in product basis |
|---|---|
| trivial (dim 1) | $2\,v_1{\otimes}v_1 + v_1{\otimes}v_2 + v_2{\otimes}v_1 + 2\,v_2{\otimes}v_2$ |
| sign (dim 1) | $v_1{\otimes}v_2 - v_2{\otimes}v_1$ |
| standard (dim 2) | $v_1{\otimes}v_1 - v_1{\otimes}v_2 - v_2{\otimes}v_1 - 2\,v_2{\otimes}v_2$ |
|  | $-2\,v_1{\otimes}v_1 - v_1{\otimes}v_2 - v_2{\otimes}v_1 + v_2{\otimes}v_2$ |

The coefficients in this table *are* the Clebsch–Gordan coefficients for $S_3$'s $\text{std}\otimes\text{std}$ coupling. Notice the sign piece is the **antisymmetric** combination $v_1{\otimes}v_2 - v_2{\otimes}v_1$ (the antisymmetric square $\Lambda^2$ of a 2-dim rep is always its determinant, here $= \text{sign}$), while trivial and standard live in the **symmetric** square.

## Worked examples

**Example 1 — the CG series for $\text{std}\otimes\text{std}$ of $S_3$ (recap in one breath).** Multiply: $\chi^2 = (4,0,1)$. Project against each row of the table: $\langle \chi^2, \chi_{\text{triv}}\rangle = \langle\chi^2,\chi_{\text{sign}}\rangle = \langle\chi^2,\chi_{\text{std}}\rangle = 1$. So $\text{std}\otimes\text{std} = \text{triv}\oplus\text{sign}\oplus\text{std}$, and $4 = 1+1+2$. A single sanity check catches most errors: $\sum_k N_k^2 = 1+1+1 = 3$ should equal $\langle\chi^2,\chi^2\rangle = \tfrac{1}{6}[16 + 0 + 2] = 3$. ✓ (This is $\langle \chi, \chi\rangle$ = "sum of squared multiplicities" from [2.4](02-04-decomposing-a-representation.md).)

**Example 2 — the general recipe, and when an invariant exists.** Take $\text{sign}\otimes\text{std}$ for $S_3$. Multiply the characters:

$$\chi_{\text{sign}}\,\chi_{\text{std}} = (1\cdot 2,\ (-1)\cdot 0,\ 1\cdot(-1)) = (2, 0, -1) = \chi_{\text{std}}.$$

The product character *equals* $\chi_{\text{std}}$ on the nose, so $\text{sign}\otimes\text{std} \cong \text{std}$ — irreducible, no decomposition needed. (Tensoring with a 1-dimensional rep just *permutes* the irreducibles; it can never create a reducible rep, because $\dim = 1\cdot 2 = 2$ stays put.)

Now the invariant question. Does the trivial rep appear in $\text{sign}\otimes\text{std}$? By the criterion, $N^{\text{triv}}_{\text{sign},\text{std}} = \delta_{\text{sign},\,\text{std}^*}$, and $\text{std}^* = \text{std} \neq \text{sign}$, so **no** — there is no $G$-invariant vector coupling sign to standard. Contrast $\text{std}\otimes\text{std}$: since $\text{std}^* = \text{std}$, the trivial rep *does* appear (multiplicity 1), which is exactly the invariant inner product on the standard rep, viewed as an invariant vector in $\text{std}\otimes\text{std}$. **The trivial rep in $V_i \otimes V_j$ is the same object as a $G$-invariant pairing between $V_i$ and $V_j$** — and it exists iff $V_j \cong V_i^*$.

## Watch out

- **The series is not the coefficients.** $N_{ij}^k = \langle\chi_i\chi_j,\chi_k\rangle$ tells you the *dimensions of the blocks*, not the change of basis. The CG *coefficients* are the entries of the intertwiner — a further computation via projection operators. Physicists reserve "Clebsch–Gordan coefficients" for the latter; the multiplicities are the "CG series" or "selection rules."
- **Conjugate the right factor.** In $N_{ij}^k = \frac{1}{|G|}\sum \chi_i\chi_j\overline{\chi_k}$, only $\chi_k$ is conjugated. Over $\mathbb{C}$ with complex irreps (e.g. $C_3$), forgetting the bar silently swaps a rep for its dual and corrupts the answer. For real characters (like all of $S_3$) it doesn't bite — which is exactly why it's easy to forget.
- **Weight by class size.** The sum is over group elements; collapsing to classes means multiplying each class's term by its size. Dropping the weights is the single most common arithmetic slip.
- **Multiplicities can exceed 1.** For $S_3$ every $N_{ij}^k \in \{0,1\}$, but this is a small-group luxury. In larger groups (and in $SU(2)$/$SU(3)$ later) the same irreducible can appear several times — the machinery is identical, you just get $N > 1$.

## One-liner

> To couple two irreducibles, **multiply their characters, then project**: $N_{ij}^k = \langle\chi_i\chi_j,\chi_k\rangle$ counts the blocks, and the trivial rep shows up iff $V_j \cong V_i^*$ — an invariant coupling.

## Problems

**P1 (🟢)** In $C_4 = \langle g\rangle$ (cyclic of order 4) the four irreducibles are all 1-dimensional: $\chi_k(g^m) = i^{km}$ for $k = 0,1,2,3$ (so $\chi_0 \equiv 1$ is trivial). Using the character-multiplication rule, decompose $\chi_2 \otimes \chi_3$ and $\chi_3 \otimes \chi_3$ into irreducibles. Then: for which $\chi_j$ does $\chi_1 \otimes \chi_j$ contain the trivial rep?

**P2 (🟡)** Using the $S_3$ table above, determine whether the **trivial rep appears** in each triple product (i.e. whether a $G$-invariant coupling of all three factors exists): (a) $\text{std}\otimes\text{std}\otimes\text{sign}$, and (b) $\text{std}\otimes\text{sign}\otimes\text{sign}$. This is the selection-rule test of [3.4](03-04-molecular-vibrations-selection-rules.md) in miniature.

**P3 (🔴)** Build the coupled basis for $\text{std}\otimes\text{std}$ of $S_3$ using projection operators. Work in the basis $v_1 = e_1 - e_2,\ v_2 = e_2 - e_3$; the standard rep sends $v_1 \mapsto$ (first column) and $v_2 \mapsto$ (second column) of each matrix below:

$$e{:}\begin{pmatrix}1&0\\0&1\end{pmatrix}\ (123){:}\begin{pmatrix}0&-1\\1&-1\end{pmatrix}\ (132){:}\begin{pmatrix}-1&1\\-1&0\end{pmatrix}\ (12){:}\begin{pmatrix}-1&1\\0&1\end{pmatrix}\ (13){:}\begin{pmatrix}0&-1\\-1&0\end{pmatrix}\ (23){:}\begin{pmatrix}1&0\\1&-1\end{pmatrix}$$

(a) Extract the **trivial** coupled vector by computing $P_{\text{triv}}(v_1\otimes v_1) = \frac{1}{6}\sum_g (\rho\otimes\rho)(g)\,(v_1\otimes v_1)$. (b) Write down the **sign** coupled vector as the antisymmetrizer of $v_1, v_2$ and verify it transforms by $\text{sign}$ under $(12)$. These entries are the CG coefficients.

<details>
<summary>Solutions</summary>

**P1.** For 1-dimensional reps the tensor product is just character multiplication, and $i^{km}\cdot i^{k'm} = i^{(k+k')m}$, so indices **add mod 4**:

- $\chi_2 \otimes \chi_3$: character $i^{2m}i^{3m} = i^{5m} = i^{m} = \chi_1(g^m)$. So $\chi_2\otimes\chi_3 = \chi_1$.
- $\chi_3 \otimes \chi_3$: character $i^{6m} = i^{2m} = \chi_2$. So $\chi_3\otimes\chi_3 = \chi_2$.

Trivial rep in $\chi_1\otimes\chi_j$: need $1 + j \equiv 0 \pmod 4$, i.e. $j = 3$. And indeed $\chi_3 = \chi_1^*$ (its conjugate: $\overline{i^m} = i^{3m}$), matching the criterion $N^{\text{triv}} = \delta_{1,\,j^*}$: the trivial rep appears exactly when you tensor a rep with its own dual. ✓

**P2.** The trivial rep is in $V_i\otimes V_j\otimes V_k$ iff $\langle \chi_i\chi_j\chi_k,\ 1\rangle \neq 0$. Multiply the three characters pointwise, then average over classes.

(a) $\text{std}\otimes\text{std}\otimes\text{sign}$: characters $(2,0,-1)(2,0,-1)(1,-1,1)$. First $\chi_{\text{std}}^2 = (4,0,1)$, then times $\chi_{\text{sign}} = (1,-1,1)$ gives $(4, 0, 1)$. Average:
$$\langle(4,0,1),\,1\rangle = \tfrac{1}{6}[1\cdot 4 + 3\cdot 0 + 2\cdot 1] = 1 \neq 0.$$
**Yes** — an invariant exists (once). Sanity: this equals $\langle \chi_{\text{std}}^2, \chi_{\text{sign}}\rangle = N^{\text{sign}}$ from the flagship decomposition, which we found $= 1$. The trivial rep sits in a triple product iff the *third* factor's dual appears in the first two — here $\text{sign}^* = \text{sign} \subset \text{std}\otimes\text{std}$. ✓

(b) $\text{std}\otimes\text{sign}\otimes\text{sign}$: $\chi_{\text{sign}}^2 = (1,1,1) = \chi_{\text{triv}}$, so the character is $\chi_{\text{std}}\cdot 1 = (2,0,-1)$. Average:
$$\langle(2,0,-1),\,1\rangle = \tfrac{1}{6}[1\cdot 2 + 3\cdot 0 + 2\cdot(-1)] = \tfrac{0}{6} = 0.$$
**No** invariant. (Makes sense: $\text{sign}\otimes\text{sign} = \text{triv}$, so the product is just $\text{std}$, which contains no trivial rep.)

**P3.** First read off $\rho(g)v_1$ from the first column of each matrix:
$$e{:}\,v_1,\quad (123){:}\,v_2,\quad (132){:}\,{-}v_1{-}v_2,\quad (12){:}\,{-}v_1,\quad (13){:}\,{-}v_2,\quad (23){:}\,v_1{+}v_2.$$

**(a)** Since $(\rho\otimes\rho)(g)(v_1\otimes v_1) = (\rho(g)v_1)\otimes(\rho(g)v_1)$, square each of the six vectors above:

| $g$ | $(\rho(g)v_1)^{\otimes 2}$ |
|---|---|
| $e$ | $v_1{\otimes}v_1$ |
| $(123)$ | $v_2{\otimes}v_2$ |
| $(132)$ | $v_1{\otimes}v_1 + v_1{\otimes}v_2 + v_2{\otimes}v_1 + v_2{\otimes}v_2$ |
| $(12)$ | $v_1{\otimes}v_1$ |
| $(13)$ | $v_2{\otimes}v_2$ |
| $(23)$ | $v_1{\otimes}v_1 + v_1{\otimes}v_2 + v_2{\otimes}v_1 + v_2{\otimes}v_2$ |

Summing the coefficients: $v_1{\otimes}v_1$ appears in $\{e,(132),(12),(23)\}$ → $4$; $v_2{\otimes}v_2$ in $\{(123),(132),(13),(23)\}$ → $4$; each cross term $v_1{\otimes}v_2$ and $v_2{\otimes}v_1$ in $\{(132),(23)\}$ → $2$. Therefore
$$P_{\text{triv}}(v_1{\otimes}v_1) = \tfrac{1}{6}\big(4\,v_1{\otimes}v_1 + 2\,v_1{\otimes}v_2 + 2\,v_2{\otimes}v_1 + 4\,v_2{\otimes}v_2\big),$$
i.e. up to the overall scale $\tfrac{1}{3}$, the trivial coupled vector is
$$w_{\text{triv}} = 2\,v_1{\otimes}v_1 + v_1{\otimes}v_2 + v_2{\otimes}v_1 + 2\,v_2{\otimes}v_2.$$
Check invariance under $(123)$ ($v_1\mapsto v_2,\ v_2\mapsto -v_1-v_2$): the image is
$$2\,v_2{\otimes}v_2 + \big[{-}v_2{\otimes}v_1 - v_2{\otimes}v_2\big] + \big[{-}v_1{\otimes}v_2 - v_2{\otimes}v_2\big] + 2(v_1{+}v_2){\otimes}(v_1{+}v_2),$$
which collects back to $2\,v_1{\otimes}v_1 + v_1{\otimes}v_2 + v_2{\otimes}v_1 + 2\,v_2{\otimes}v_2 = w_{\text{triv}}$. ✓ Fixed by $G$ — a genuine invariant. (This vector is the invariant inner product on the standard rep, wearing a tensor's clothes.)

**(b)** The sign vector is the antisymmetric combination
$$w_{\text{sign}} = v_1{\otimes}v_2 - v_2{\otimes}v_1.$$
Under $(12)$ ($v_1\mapsto -v_1,\ v_2\mapsto v_1+v_2$):
$$v_1{\otimes}v_2 \mapsto (-v_1){\otimes}(v_1{+}v_2) = -v_1{\otimes}v_1 - v_1{\otimes}v_2,$$
$$v_2{\otimes}v_1 \mapsto (v_1{+}v_2){\otimes}(-v_1) = -v_1{\otimes}v_1 - v_2{\otimes}v_1,$$
so $w_{\text{sign}} \mapsto (-v_1{\otimes}v_1 - v_1{\otimes}v_2) - (-v_1{\otimes}v_1 - v_2{\otimes}v_1) = -(v_1{\otimes}v_2 - v_2{\otimes}v_1) = -w_{\text{sign}}$. Since $(12)$ is a transposition with $\text{sign} = -1$, this vector transforms by the sign rep. ✓

For completeness, the remaining **standard** 2-dim piece comes from $P_{\text{std}}$; applying it to $v_1{\otimes}v_1$ and $v_2{\otimes}v_2$ gives the two vectors $v_1{\otimes}v_1 - v_1{\otimes}v_2 - v_2{\otimes}v_1 - 2\,v_2{\otimes}v_2$ and $-2\,v_1{\otimes}v_1 - v_1{\otimes}v_2 - v_2{\otimes}v_1 + v_2{\otimes}v_2$ (the Concrete-instance table). Together the four coupled vectors are a full basis, and their coefficients are the CG coefficients of $\text{std}\otimes\text{std}$.

</details>

## Flashback

**From [3.1](03-01-tensor-products.md) (Tensor products / the product character rule):** In $C_3 = \langle g\rangle$ (cyclic of order 3) the irreducibles are $\chi_k(g^m) = \omega^{km}$ with $\omega = e^{2\pi i/3}$, for $k = 0,1,2$. Using only the fact that tensor-product characters multiply, identify the irreducible $\chi_1 \otimes \chi_1$, and determine which $\chi_j$ makes $\chi_1 \otimes \chi_j$ contain the trivial rep.

<details>
<summary>Solution</summary>

Multiply characters: $\chi_1(g^m)\chi_1(g^m) = \omega^{m}\omega^{m} = \omega^{2m} = \chi_2(g^m)$, so $\chi_1 \otimes \chi_1 = \chi_2$ (indices add mod 3).

For the trivial rep: $\chi_1\otimes\chi_j$ has character $\omega^{(1+j)m}$, which is $\chi_0 \equiv 1$ iff $1 + j \equiv 0 \pmod 3$, i.e. $j = 2$. And $\chi_2 = \chi_1^*$ (since $\overline{\omega^m} = \omega^{-m} = \omega^{2m}$) — so the trivial rep appears precisely when you couple $\chi_1$ with its own dual, exactly the criterion $N^{\text{triv}}_{ij} = \delta_{i,\,j^*}$ from this lesson. ✓

</details>

## Connections

- **Backward:** this lesson is [3.1](03-01-tensor-products.md) ("characters multiply") composed with [2.4](02-04-decomposing-a-representation.md) ("multiplicity $= \langle\chi,\chi_k\rangle$") — the CG series is nothing more than that composition, and the CG coefficients reuse 2.4's projection operators verbatim. The trivial-rep criterion leans on the dual/conjugate rep from [2.1](02-01-characters.md).
- **Forward:** [3.4](03-04-molecular-vibrations-selection-rules.md) turns "does the trivial rep appear in a *triple* product $V_i\otimes V_j\otimes V_k$?" into physical **selection rules** (which transitions and vibrational modes are allowed); [3.5](03-05-degeneracy-symmetry-breaking.md) reads degeneracies off the same tables. In Module 4 the identical recipe becomes the $SU(2)$ Clebsch–Gordan series $j_1 \otimes j_2 = \bigoplus_{J=|j_1-j_2|}^{j_1+j_2} J$ ([4.5](04-05-adding-angular-momenta.md)) and the $SU(3)$ tensor products that build hadrons from quarks ([4.6](04-06-roots-weights-su3.md)).
- **Sideways (quantum mechanics):** the coupled-vs-product basis distinction *is* the coupled ($|J,M\rangle$) vs uncoupled ($|j_1,m_1\rangle|j_2,m_2\rangle$) basis for angular momentum, and the entries in the P3 table are literally what physicists call Clebsch–Gordan coefficients — see [`quantum-mechanics`](../../quantum-mechanics/syllabus.md). Adding two spins and decomposing $\text{std}\otimes\text{std}$ for $S_3$ are the same mathematics on different groups.
