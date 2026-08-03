# Group & Representation Theory · Lesson 2.5: The regular representation

> ⏱ ~15 min · Module 2: Character theory · Builds on: [2.4 Decomposing a representation](02-04-decomposing-a-representation.md) · Unlocks: Module 3 — [3.1 Tensor products of representations](03-01-tensor-products.md)

## Why this matters

Every irreducible representation of a finite group is hiding inside a single, universal object — and once you know where to look, the whole architecture of Module 2 falls out of one calculation. That object is the **regular representation**: the group acting on itself by shuffling. Decompose it and you don't just find *one* irreducible — you find *all* of them, each appearing exactly as many times as its own dimension. From that one fact drops the master identity $\sum_i d_i^2 = |G|$ that we *used* to guess dimensions back in 2.3 but never proved, plus the clean theorem that the number of irreducibles equals the number of conjugacy classes. This is the capstone that ties 2.1–2.4 into a single knot.

## The idea

Back in 1.2 we built the **group algebra** $\mathbb{C}[G]$: the vector space with one basis vector $e_g$ for each group element $g$, so $\dim \mathbb{C}[G] = |G|$. The group acts on it by relabeling basis vectors — $h$ sends $e_g \mapsto e_{hg}$. That's the **regular representation** $\rho_{\text{reg}}$: $G$ permuting its own name tags.

Here's the punchline before the proof. A permutation matrix has a $1$ on the diagonal exactly where something is fixed. Multiplying by $h \neq e$ moves *every* element ($hg \neq g$ always, since $g$ is invertible), so nothing is fixed and the trace is $0$. Only $h = e$ fixes everything, giving trace $|G|$. So the character is a spike:

$$\chi_{\text{reg}}(e) = |G|, \qquad \chi_{\text{reg}}(g) = 0 \ \text{ for } g \neq e.$$

Now feed that spike into the multiplicity formula from 2.4. Because $\chi_{\text{reg}}$ is zero everywhere except at $e$, the inner product collapses to a single term — and that term reads off the *dimension* of whatever irreducible you're testing against. The regular representation contains each irreducible $V_i$ with multiplicity equal to $d_i = \dim V_i$. The big rep is a perfectly balanced ledger of all the small ones.

## The formal version

**The regular representation.** $\rho_{\text{reg}} : G \to GL(\mathbb{C}[G])$, $\rho_{\text{reg}}(h)\, e_g = e_{hg}$. Its character is $\chi_{\text{reg}}(e) = |G|$ and $\chi_{\text{reg}}(g) = 0$ for $g \neq e$.

**Multiplicity theorem.** Let $V_1, \dots, V_r$ be the irreducibles of $G$, with characters $\chi_i$ and dimensions $d_i = \chi_i(e)$. The multiplicity of $V_i$ in $\rho_{\text{reg}}$ is

$$m_i = \langle \chi_{\text{reg}}, \chi_i \rangle = \frac{1}{|G|} \sum_{g \in G} \chi_{\text{reg}}(g)\,\overline{\chi_i(g)} = \frac{1}{|G|}\,\chi_{\text{reg}}(e)\,\overline{\chi_i(e)} = \frac{1}{|G|}\cdot |G| \cdot \overline{d_i} = d_i.$$

*In words:* the sum has only one surviving term — at $g = e$, where $\chi_{\text{reg}} = |G|$ — and it hands you back $d_i$. (The $|G|$ upstairs and the $1/|G|$ downstairs cancel; $d_i$ is real, so the conjugate is harmless.) Therefore

$$\boxed{\ \rho_{\text{reg}} \;=\; \bigoplus_{i} d_i\, V_i\ }$$

**Consequence 1 — the master identity (now proven).** Take dimensions of both sides. The left side is $|G|$; the right side is $\sum_i d_i \cdot d_i$:

$$\sum_i d_i^2 = |G|.$$

*In words:* the squared dimensions of the irreducibles add up to the group's order. This is the exact constraint we *assumed* in 2.3 to pin down the missing dimension in a character table — it's now a theorem, not a lucky guess.

**Consequence 2 — the column identity.** Evaluate the decomposition's character at any $g \neq e$. The left side is $\chi_{\text{reg}}(g) = 0$; the right side is $\sum_i d_i\,\chi_i(g)$:

$$\sum_i d_i\, \chi_i(g) = 0 \qquad (g \neq e).$$

*In words:* weight each irreducible character by its dimension, add down the column of any non-identity class, and you get zero. (This is the "$e$-vs-$g$" case of the column orthogonality from 2.2, read straight off the regular rep.)

**Consequence 3 — counting irreducibles.** The class functions on $G$ form a vector space whose dimension is the **number of conjugacy classes** $k$ (one coordinate per class). The irreducible characters $\chi_1, \dots, \chi_r$ are an *orthonormal basis* of that space (2.2 gave orthonormality; the regular representation, viewed as a two-sided $G$-module, is what forces them to actually **span** it — no class function is left uncovered). An orthonormal set that spans has size equal to the dimension, so

$$r = k : \quad \#\{\text{irreducibles}\} = \#\{\text{conjugacy classes}\}.$$

Every irreducible is a subrepresentation of $\rho_{\text{reg}}$ (each $m_i = d_i \geq 1 > 0$), so the regular representation genuinely **sees all of them**. That is why $\mathbb{C}[G]$ is the universal home for representation theory: build it once, and every irreducible is already sitting inside.

## Concrete instance

Take $G = S_3$, order $6$, with three conjugacy classes: the identity $\{e\}$ (size 1), the transpositions $\{(12),(13),(23)\}$ (size 3), and the 3-cycles $\{(123),(132)\}$ (size 2). Three classes $\Rightarrow$ three irreducibles (Consequence 3). Here is the completed character table from 2.3:

| $S_3$ | $\{e\}$ | $3\,(ab)$ | $2\,(abc)$ | $d_i$ |
|---|---|---|---|---|
| trivial $\chi_{\text{triv}}$ | $1$ | $1$ | $1$ | $1$ |
| sign $\chi_{\text{sign}}$ | $1$ | $-1$ | $1$ | $1$ |
| standard $\chi_{\text{std}}$ | $2$ | $0$ | $-1$ | $2$ |
| **$\chi_{\text{reg}}$** | $\mathbf{6}$ | $\mathbf{0}$ | $\mathbf{0}$ | $6$ |

Multiplicities: $m_{\text{triv}} = d = 1$, $m_{\text{sign}} = 1$, $m_{\text{std}} = 2$. So

$$\rho_{\text{reg}} = 1\cdot(\text{trivial}) \,\oplus\, 1\cdot(\text{sign}) \,\oplus\, 2\cdot(\text{standard}).$$

**Dimension check:** $1 + 1 + 2\cdot 2 = 6 = |S_3|$, and $\sum d_i^2 = 1^2 + 1^2 + 2^2 = 6$. ✓

**Character check:** $\chi_{\text{triv}} + \chi_{\text{sign}} + 2\,\chi_{\text{std}}$ evaluated class-by-class:
- at $e$: $1 + 1 + 2(2) = 6$ ✓
- at $(ab)$: $1 + (-1) + 2(0) = 0$ ✓
- at $(abc)$: $1 + 1 + 2(-1) = 0$ ✓

Exactly the spike $(6,0,0)$. The standard rep pulls double duty precisely because it is 2-dimensional — the ledger balances.

## Worked examples

**Example 1 (decompose $\rho_{\text{reg}}$ of $S_3$ from scratch).** Suppose you only had the three irreducible characters and wanted the regular decomposition without knowing the theorem. Compute each multiplicity by hand, weighting by class size $|C|$:

$$m_{\text{std}} = \frac{1}{6}\sum_{\text{classes}} |C|\,\chi_{\text{reg}}(C)\,\overline{\chi_{\text{std}}(C)} = \frac{1}{6}\Big[\,1\cdot 6\cdot 2 \;+\; 3\cdot 0\cdot 0 \;+\; 2\cdot 0\cdot(-1)\,\Big] = \frac{12}{6} = 2.$$

Only the identity class contributes (that's the whole point of the spike), and $2 = d_{\text{std}}$. The same one-term collapse gives $m_{\text{triv}} = \tfrac{1}{6}(1\cdot 6\cdot 1) = 1$ and $m_{\text{sign}} = \tfrac{1}{6}(1\cdot 6\cdot 1) = 1$. Then $\sum d_i^2 = 1 + 1 + 4 = 6 = |S_3|$ and $\chi_{\text{reg}} = (6,0,0)$, both confirmed.

**Example 2 (dimensions from the class count alone).** The master identity plus one fact — *the number of 1-dimensional reps equals the order of the abelianization $G/[G,G]$*, and there is always at least the trivial one — often pins down all the dimensions.

- **Order 8, 5 conjugacy classes** (this is $Q_8$ or $D_4$). Five irreducibles, so we need five positive integers $d_i$ with $\sum d_i^2 = 8$. Every group has the trivial rep, so at least one $d_i = 1$. Try $t$ ones and the rest bigger: $t\cdot 1 + (\text{squares} \geq 4)$. The only way five squares sum to $8$ is $1+1+1+1+4$. So the dimensions are $\boxed{1,1,1,1,2}$ — four 1-dimensionals and a single 2-dimensional. (Check: a non-abelian group of order 8 has $[G,G]$ of order 2, so $|G/[G,G]| = 4$ one-dimensionals — consistent.)

- **$A_4$, order 12, 4 conjugacy classes.** Four irreducibles with $\sum d_i^2 = 12$. With at least one $1$: $1+1+1+9 = 12$ works, giving $\boxed{1,1,1,3}$. Could it be $1+ \dots$ another way with four terms? $4+4+ \dots$ overshoots ($4+4+1+1=10$, then no room for the 4th to reach 12 as a square). $1,1,1,3$ is forced. (And indeed $A_4^{\text{ab}} = \mathbb{Z}/3$, exactly three 1-dimensionals.)

## Watch out

- **The spike lives at $e$, not "somewhere."** $\chi_{\text{reg}}(g) = 0$ for *every* $g \neq e$ because left-multiplication by a non-identity element is a fixed-point-free permutation. If you ever get a nonzero off-identity value, you've mis-built the permutation matrices.
- **Multiplicity $d_i$, not $d_i^2$.** Each irreducible appears $d_i$ times (once per basis vector of $V_i$, loosely), and *contributes* $d_i^2$ to the dimension count. Don't conflate "how many copies" ($d_i$) with "how much dimension" ($d_i^2$).
- **$\sum d_i^2 = |G|$ constrains, it doesn't determine.** For order 8 with 5 classes it happened to force $1,1,1,1,2$, but in general you also need the class count (number of irreducibles) *and* the abelianization (number of 1's). The identity alone has many integer solutions.
- **"Number of irreducibles = number of classes" is over $\mathbb{C}$.** Over $\mathbb{R}$ or other fields the count changes. Everything in Module 2 is complex representations.

## One-liner

> The regular representation is the group acting on its own name tags; decompose it and every irreducible falls out with multiplicity equal to its dimension — which is exactly why $\sum_i d_i^2 = |G|$.

## Problems

**P1 (🟢)** The cyclic group $C_4 = \{e, g, g^2, g^3\}$ has four 1-dimensional irreducibles, with characters given by $\chi_k(g) = i^k$ for $k = 0,1,2,3$ (here $i = \sqrt{-1}$). Write down the regular decomposition $\rho_{\text{reg}} = \bigoplus_k m_k V_k$, state each multiplicity, and verify $\sum_k d_k^2 = |C_4|$. Then confirm $\chi_{\text{reg}} = (4,0,0,0)$ on the classes $\{e\}, \{g\}, \{g^2\}, \{g^3\}$ by adding the four irreducible characters.

**P2 (🟡)** The quaternion group $Q_8 = \{\pm 1, \pm i, \pm j, \pm k\}$ has conjugacy classes $\{1\}, \{-1\}, \{\pm i\}, \{\pm j\}, \{\pm k\}$. Using only the class count and $\sum d_i^2 = |G|$ (plus "at least one trivial rep"), determine the dimensions of all irreducibles of $Q_8$. How many are 1-dimensional?

**P3 (🔴)** Prove the multiplicity theorem and its two corollaries from the character alone. (a) Starting from $\chi_{\text{reg}}(e) = |G|$, $\chi_{\text{reg}}(g) = 0$ for $g \neq e$, show $m_i = \langle \chi_{\text{reg}}, \chi_i\rangle = d_i$. (b) Deduce $\sum_i d_i^2 = |G|$. (c) Deduce $\sum_i d_i\,\chi_i(g) = 0$ for every $g \neq e$.

<details>
<summary>Solutions</summary>

**P1.** All four irreducibles are 1-dimensional, so $d_k = 1$ for each. By the theorem $m_k = d_k = 1$: every irreducible appears exactly once,

$$\rho_{\text{reg}} = V_0 \oplus V_1 \oplus V_2 \oplus V_3.$$

$\sum_k d_k^2 = 1+1+1+1 = 4 = |C_4|$. ✓

Character check, adding $\chi_0 + \chi_1 + \chi_2 + \chi_3$ where $\chi_k(g^m) = i^{km}$:
- at $e = g^0$: $i^0 + i^0 + i^0 + i^0 = 4$.
- at $g$: $\sum_{k=0}^3 i^k = 1 + i + i^2 + i^3 = 1 + i - 1 - i = 0$.
- at $g^2$: $\sum_k (i^2)^k = \sum_k (-1)^k = 1 - 1 + 1 - 1 = 0$.
- at $g^3$: $\sum_k (i^3)^k = \sum_k (-i)^k = 1 - i - 1 + i = 0$.

So $\chi_{\text{reg}} = (4,0,0,0)$. ✓ (Each off-identity value is a geometric series of the fourth roots of unity, which sums to zero — the abelian shadow of the fixed-point-free argument.)

**P2.** Five conjugacy classes $\Rightarrow$ five irreducibles. Need five positive integers with $\sum d_i^2 = 8$. At least one is $1$ (trivial rep). Squares available are $1, 4, 9, \dots$; $9 > 8$ is out, so each $d_i \in \{1, 2\}$. With five terms: if $n$ of them equal $2$, then $4n + (5-n)\cdot 1 = 8 \Rightarrow 3n = 3 \Rightarrow n = 1$. So the dimensions are $1,1,1,1,2$ — **four 1-dimensionals** and one 2-dimensional. (The 2-dimensional irreducible is the familiar action of $Q_8$ by Pauli-type matrices; same dimension profile as $D_4$, though the groups differ.)

**P3.** (a) By definition and the spike,

$$m_i = \langle \chi_{\text{reg}}, \chi_i\rangle = \frac{1}{|G|}\sum_{g\in G}\chi_{\text{reg}}(g)\,\overline{\chi_i(g)}.$$

Every term with $g \neq e$ vanishes because $\chi_{\text{reg}}(g) = 0$; only $g = e$ survives:

$$m_i = \frac{1}{|G|}\,\chi_{\text{reg}}(e)\,\overline{\chi_i(e)} = \frac{1}{|G|}\cdot|G|\cdot\overline{d_i} = d_i,$$

using $\chi_i(e) = \dim V_i = d_i \in \mathbb{Z}$ (real, so $\overline{d_i} = d_i$). Hence $\rho_{\text{reg}} = \bigoplus_i d_i V_i$, since the $m_i$ are exactly the multiplicities (2.4: a rep is determined by its multiplicities, which are these inner products).

(b) Take dimensions of $\rho_{\text{reg}} = \bigoplus_i d_i V_i$. The left side is $\dim \mathbb{C}[G] = |G|$; the right side is $\sum_i d_i \dim V_i = \sum_i d_i^2$. Equate: $\sum_i d_i^2 = |G|$.

(c) The character of $\bigoplus_i d_i V_i$ is $\sum_i d_i \chi_i$. Evaluate at $g \neq e$: this equals $\chi_{\text{reg}}(g) = 0$. Therefore $\sum_i d_i\,\chi_i(g) = 0$ for all $g \neq e$. $\blacksquare$

</details>

## Flashback

**From Lesson 2.4 (Decomposing a representation):** A 4-dimensional representation of $S_3$ has character $\chi = (4, 0, 1)$ on the classes $\{e\}, \{(ab)\}, \{(abc)\}$. Decompose it into irreducibles using the multiplicity formula, and confirm the dimensions add up.

<details>
<summary>Solution</summary>

Use $m = \tfrac{1}{6}\sum_{\text{classes}} |C|\,\chi(C)\,\overline{\chi_j(C)}$ with class sizes $1, 3, 2$ and the $S_3$ table above.

$$m_{\text{triv}} = \tfrac{1}{6}\big[1\cdot 4\cdot 1 + 3\cdot 0\cdot 1 + 2\cdot 1\cdot 1\big] = \tfrac{1}{6}(4 + 0 + 2) = 1.$$
$$m_{\text{sign}} = \tfrac{1}{6}\big[1\cdot 4\cdot 1 + 3\cdot 0\cdot(-1) + 2\cdot 1\cdot 1\big] = \tfrac{1}{6}(4 + 0 + 2) = 1.$$
$$m_{\text{std}} = \tfrac{1}{6}\big[1\cdot 4\cdot 2 + 3\cdot 0\cdot 0 + 2\cdot 1\cdot(-1)\big] = \tfrac{1}{6}(8 + 0 - 2) = 1.$$

So $\chi = \chi_{\text{triv}} + \chi_{\text{sign}} + \chi_{\text{std}}$, i.e. the rep is $\text{trivial} \oplus \text{sign} \oplus \text{standard}$. Dimension check: $1 + 1 + 2 = 4$. ✓ Character check at $(abc)$: $1 + 1 + (-1) = 1$. ✓

</details>

## Connections

- **Backward:** the multiplicity engine is [2.4](02-04-decomposing-a-representation.md)'s formula $m_i = \langle \chi, \chi_i\rangle$, fed the one input that makes it collapse to a single term. The identity $\sum d_i^2 = |G|$, which [2.3](02-03-building-character-table.md) used on faith to complete character tables, is now *derived* here. And the object itself is the group algebra $\mathbb{C}[G]$ from [1.2](01-02-examples-unitarity.md).
- **Forward:** Module 3 builds *new* representations by combining old ones — [3.1](03-01-tensor-products.md) tensors them together — and the regular rep is the reservoir every such construction ultimately decomposes back into.
- **Forward (Module 4, the payoff):** the regular representation has a stunning continuous analogue. The **Peter–Weyl theorem** says the regular representation of a compact Lie group decomposes into *all* of its irreducibles, each again appearing with multiplicity equal to its dimension — the discrete $\sum d_i^2 = |G|$ becomes an infinite orthogonal decomposition of functions on the group. That is the machinery behind spherical harmonics and the $SU(2)$ story of angular momentum.
- **Sideways (algebra):** the class-count $=$ irreducible-count theorem is a statement about the center of the group algebra $\mathbb{C}[G]$ and its conjugacy structure — see [`abstract-algebra`](../../abstract-algebra/syllabus.md) for conjugacy classes and the group algebra. The dimension-counting arguments (traces, direct sums, orthonormal bases of class functions) are pure [`linalg-refresher`](../../linalg-refresher/syllabus.md).
