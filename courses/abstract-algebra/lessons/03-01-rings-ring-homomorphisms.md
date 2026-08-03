# Abstract Algebra · Lesson 3.1: Rings and ring homomorphisms

> ⏱ ~15 min · Module 3: Rings and fields — a second axiom system · Builds on: [2.6 Counting with Burnside's lemma](02-06-burnside-counting.md) (and all of Module 2) · Unlocks: [3.2 Integral domains and fields](03-02-integral-domains-fields.md)

## Why this matters

A group captures a set with **one** operation — symmetry, composition, "undo." But the objects you actually compute with — the integers, the reals, polynomials, matrices — carry **two** operations that talk to each other: you add *and* you multiply, and the two are laced together by distributivity. That combined structure is a **ring**.

Here's the payoff, and it's the whole spirit of the module: **you already own the toolkit.** Every idea from Module 2 — structure-preserving maps, kernels, quotients, the first isomorphism theorem — reappears almost verbatim for rings. The only new casting decision is which subobject plays the role of a normal subgroup. (Spoiler for [3.3](03-03-ideals-quotient-rings.md): it's an *ideal*.) So this lesson is less "learn a new world" and more "meet the same machinery wearing a second uniform."

## The idea

Think of a ring as an **abelian group that learned to multiply.** The addition is as tame as addition gets — commutative, with negatives, everything you'd want. Bolt on a second operation, multiplication, that is associative and **distributes** over the addition, and you have the axiom system that describes ℤ, ℝ, polynomials, and matrices all at once.

Two knobs control how nice a ring is, and we'll keep flipping them all module:

- **Does multiplication commute?** ℤ and ℝ say yes; $n\times n$ matrices say emphatically no ($AB \neq BA$ in general). We call the yes-rings **commutative**.
- **Which elements have multiplicative inverses?** In ℤ only $\pm 1$ do; in ℝ everything nonzero does. The invertible elements form a group, the **units** — and a ring where *every* nonzero element is a unit is a **field** (all of [3.2](03-02-integral-domains-fields.md)).

That's the map. A ring is the arena; commutativity and units are the dials that carve out domains, fields, and everything in between.

## The formal version

**Definition (ring).** A **ring** $(R, +, \times)$ is a set $R$ with two operations such that:

1. $(R, +)$ is an **abelian group** — associative, commutative, an additive identity $0$, and every $a$ has a negative $-a$.
2. $\times$ is **associative**: $a(bc) = (ab)c$ for all $a,b,c$.
3. $\times$ **distributes** over $+$ on both sides: $a(b+c) = ab + ac$ and $(a+b)c = ac + bc$.

*In words:* addition is a full abelian group; multiplication is associative and hooks onto addition through distributivity — that hook is the only bridge between the two operations.

**Two standing conventions** (both common; we adopt both unless we say otherwise):

- **Unital:** there is a multiplicative identity $1$ with $1\cdot a = a\cdot 1 = a$. (We assume $1$ exists.)
- **Commutative** vs **noncommutative:** $R$ is *commutative* if $ab = ba$ for all $a,b$. We'll always flag which we mean.

**Definition (unit).** $u \in R$ is a **unit** if it has a multiplicative inverse: some $v\in R$ with $uv = vu = 1$. The units form a group under multiplication, written $R^\times$.

*In words:* $R^\times$ is "the part of the ring where division works." It's a group even when $R$ itself is a wild noncommutative object — the units always close up neatly.

**Three facts forced by the axioms** (proved, not assumed — you'll do two in the problems):

$$0\cdot a = 0, \qquad (-1)\cdot a = -a, \qquad (-a)(-b) = ab.$$

*In words:* zero annihilates, negative-one negates, and "minus times minus is plus" — none of these are extra rules; they're theorems squeezed out of distributivity.

**Definition (ring homomorphism).** A map $\varphi: R \to S$ between rings is a **ring homomorphism** if it respects *both* operations and the identity:

$$\varphi(a+b) = \varphi(a) + \varphi(b), \qquad \varphi(ab) = \varphi(a)\varphi(b), \qquad \varphi(1_R) = 1_S.$$

*In words:* a structure-preserving map — exactly a group homomorphism ([2.1](02-01-homomorphisms-kernels-images.md)) that *also* honors multiplication and sends the multiplicative identity to the multiplicative identity.

**Kernel and image — the Module 2 parallel.** As before, define $\ker\varphi = \{a \in R : \varphi(a) = 0_S\}$ and $\operatorname{im}\varphi = \{\varphi(a) : a\in R\}$.

- $\operatorname{im}\varphi$ is a **subring** of $S$ (closed under $+$, $\times$, contains $1$).
- $\ker\varphi$ is closed under addition (it's a subgroup of $(R,+)$) **and** absorbs multiplication: if $k \in \ker\varphi$ and $r\in R$, then $\varphi(rk) = \varphi(r)\varphi(k) = \varphi(r)\cdot 0 = 0$, so $rk \in \ker\varphi$. That absorption property is exactly what makes a kernel an **ideal** — the ring-world stand-in for a normal subgroup, and the object we'll quotient by in [3.3](03-03-ideals-quotient-rings.md) to get a first isomorphism theorem $R/\ker\varphi \cong \operatorname{im}\varphi$ identical in shape to [2.3](02-03-isomorphism-theorems.md)'s.

**A roster to keep in your head:**

| Ring | Commutative? | Units $R^\times$ |
|---|---|---|
| $\mathbb{Z}$ | yes | $\{+1, -1\}$ |
| $\mathbb{Z}/n\mathbb{Z}$ | yes | $\{\,\bar a : \gcd(a,n)=1\,\}$ |
| $\mathbb{R}$ (or any field) | yes | everything $\neq 0$ |
| $F[x]$ (polynomials over a field) | yes | nonzero constants |
| $M_n(\mathbb{R})$ ($n\times n$ real matrices) | **no** ($n\ge 2$) | invertible matrices, $GL_n(\mathbb{R})$ |
| $\mathbb{Z}[i] = \{a+bi : a,b\in\mathbb{Z}\}$ (Gaussian integers) | yes | $\{\pm 1, \pm i\}$ |

Note the double life of $\mathbb{Z}/n\mathbb{Z}$: back in [1.2](01-02-cyclic-groups-order.md) it was the additive cyclic group of order $n$. It always secretly had a *second* operation waiting — multiplication mod $n$ — and now we switch it on. Same underlying set, two operations, one ring.

## Concrete instance: the ring $\mathbb{Z}/6\mathbb{Z}$

Nothing beats staring at the two full tables. Work mod 6, elements $\{0,1,2,3,4,5\}$.

**Addition** — this is just the cyclic group $C_6$ from Module 1:

| $+$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 | 4 | 5 |
| **1** | 1 | 2 | 3 | 4 | 5 | 0 |
| **2** | 2 | 3 | 4 | 5 | 0 | 1 |
| **3** | 3 | 4 | 5 | 0 | 1 | 2 |
| **4** | 4 | 5 | 0 | 1 | 2 | 3 |
| **5** | 5 | 0 | 1 | 2 | 3 | 4 |

**Multiplication** — the new operation:

| $\times$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 | 5 |
| **2** | 0 | 2 | 4 | 0 | 2 | 4 |
| **3** | 0 | 3 | 0 | 3 | 0 | 3 |
| **4** | 0 | 4 | 2 | 0 | 4 | 2 |
| **5** | 0 | 5 | 4 | 3 | 2 | 1 |

Read the multiplication table like an X-ray of the ring:

- **Units** $= \{1, 5\}$. Their rows are *permutations* of the whole set (row 1 is $0,1,2,3,4,5$; row 5 is $0,5,4,3,2,1$) — the tell-tale sign that multiplying by them is invertible. Indeed $1\cdot 1 = 1$ and $5\cdot 5 = 25 = 1 \pmod 6$, so each is its own inverse. This matches $\gcd(a,6)=1 \iff a\in\{1,5\}$.
- **Zero divisors** $= \{2, 3, 4\}$: nonzero elements that multiply to give $0$. Look at $2\cdot 3 = 0$ and $3\cdot 4 = 12 = 0$. Their rows contain interior zeros — you can hit $0$ without either factor being $0$. This is *impossible* in ℤ or ℝ, and it's the crack that separates a generic ring from a domain (all of [3.2](03-02-integral-domains-fields.md)).

Every nonzero element of $\mathbb{Z}/6\mathbb{Z}$ is either a unit or a zero divisor — no leftovers. That's not a coincidence for finite rings; it's a preview of why finiteness forces so much structure.

## Worked examples

**Example 1 — $\mathbb{Z}/6\mathbb{Z}$ is a ring; find its units.**

*Ring axioms.* $(\mathbb{Z}/6\mathbb{Z}, +)$ is the cyclic group $C_6$ — abelian, identity $0$, negatives given by $-\bar a = \overline{6-a}$ (e.g. $-2 = 4$). ✓ (axiom 1). Multiplication mod 6 is associative and distributes because these properties are *inherited* from ℤ: reduction mod 6 turns true integer equations into true mod-6 equations. Concretely, $\overline{a}(\overline{b}+\overline{c}) = \overline{a(b+c)} = \overline{ab+ac} = \overline{a}\,\overline{b} + \overline{a}\,\overline{c}$. ✓ (axioms 2, 3). And $\bar 1$ is the multiplicative identity. So it's a unital commutative ring.

*Units.* $\bar a$ is a unit $\iff \gcd(a,6) = 1$ (then Bézout gives $ax + 6y = 1$, i.e. $ax \equiv 1$, so $\bar x$ is the inverse). Checking $a = 0,\dots,5$: $\gcd$ with 6 is $6,1,2,3,2,1$. Coprime only for $a = 1, 5$. So
$$(\mathbb{Z}/6\mathbb{Z})^\times = \{1, 5\}, \qquad \text{non-units } \{0, 2, 3, 4\}.$$
The non-units split into the zero element and the three zero divisors, exactly as the table showed.

**Example 2 — two ring homomorphisms.**

*(a) Reduction $\pi: \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$, $\;\pi(a) = \bar a$.* Check all three conditions. $\pi(a+b) = \overline{a+b} = \bar a + \bar b = \pi(a)+\pi(b)$; $\pi(ab) = \overline{ab} = \bar a\,\bar b = \pi(a)\pi(b)$; $\pi(1) = \bar 1$. ✓ So $\pi$ is a ring homomorphism. Its kernel is $\{a\in\mathbb{Z} : a\equiv 0\} = n\mathbb{Z}$ — the multiples of $n$. That kernel is an ideal, and $\mathbb{Z}/n\mathbb{Z}$ is literally the quotient of ℤ by it (the notation was telling you this all along). This is the ring-theoretic first isomorphism theorem in embryo: $\mathbb{Z}/\ker\pi = \mathbb{Z}/n\mathbb{Z} \cong \operatorname{im}\pi$.

*(b) Complex conjugation $\sigma: \mathbb{Z}[i] \to \mathbb{Z}[i]$, $\;\sigma(a+bi) = a - bi$.* Additivity: $\sigma((a+bi)+(c+di)) = \sigma((a+c)+(b+d)i) = (a+c)-(b+d)i = (a-bi)+(c-di)$. ✓ Multiplicativity: $\overline{zw} = \bar z\,\bar w$ is the familiar rule — check it once, $\sigma((a+bi)(c+di)) = \sigma((ac-bd)+(ad+bc)i) = (ac-bd)-(ad+bc)i$, and $\sigma(a+bi)\sigma(c+di) = (a-bi)(c-di) = (ac-bd)-(ad+bc)i$; they agree. ✓ And $\sigma(1) = 1$. So $\sigma$ is a ring homomorphism, and since it's a bijection with $\sigma\circ\sigma = \mathrm{id}$, it's a ring **automorphism** — a symmetry of $\mathbb{Z}[i]$ that fixes ℤ. Hold that thought: automorphisms fixing a subfield are the entire engine of Galois theory ([4.4](04-04-galois-automorphisms-taste.md)).

## Watch out

- **$1 \neq 0$ is *not* free** — except it almost is. If a ring has $1 = 0$, then for every $a$, $a = 1\cdot a = 0\cdot a = 0$, so the whole ring collapses to $\{0\}$. That "zero ring" is the one degenerate case; in any ring with more than one element, $1\neq 0$.
- **Zero divisors are normal for rings, forbidden for fields.** Don't import the reflex "$ab = 0 \Rightarrow a=0$ or $b=0$" from ℝ. In $\mathbb{Z}/6\mathbb{Z}$, $2\cdot 3 = 0$ with neither factor zero. That reflex is *exactly* the property [3.2](03-02-integral-domains-fields.md) names "integral domain" — a privilege, not a default.
- **Ring homs must respect $1$.** A map can preserve $+$ and $\times$ yet fail to be a ring homomorphism by mishandling the identity. The zero map $R\to S$, $a\mapsto 0$, preserves $+$ and $\times$ but sends $1_R \mapsto 0 \neq 1_S$ — so (for our unital convention) it is *not* a ring homomorphism unless $S$ is the zero ring.
- **Units vs. "nonzero" are different sets.** In a field they coincide; everywhere else they don't. ℤ has infinitely many nonzero elements and only two units.

## One-liner

> A ring is an abelian group that also multiplies (associatively, distributively); a ring homomorphism preserves $+$, $\times$, and $1$ — and its kernel is an ideal, so every quotient/isomorphism theorem from groups comes back for free.

## Problems

**P1 (🟢)** Confirm $\mathbb{Z}/8\mathbb{Z}$ is a ring (one sentence on why the axioms hold) and find its full group of units $(\mathbb{Z}/8\mathbb{Z})^\times$. For each unit, give its inverse. Is any nonzero non-unit a zero divisor? Name one.

**P2 (🟡)** Let $R = M_2(\mathbb{R})$, the $2\times 2$ real matrices with the usual $+$ and matrix $\times$.
(a) Explain in one line why $R$ is a ring and why it is **noncommutative** — give an explicit pair $A, B$ with $AB \neq BA$.
(b) Exhibit two **nonzero** matrices $C, D$ with $CD = 0$ (zero divisors), and confirm the product is the zero matrix.

**P3 (🔴)** Working in an arbitrary ring $R$ (unital, not assumed commutative), prove *directly from the axioms*:
(a) $0\cdot a = 0$ for all $a$.
(b) $(-1)\cdot a = -a$ for all $a$, where $-a$ is the additive inverse of $a$.
State which axiom you use at each step.

<details>
<summary>Solutions</summary>

**P1.** *Ring:* mod-8 addition and multiplication inherit associativity, commutativity, and distributivity from ℤ via reduction, with identities $\bar 0$ and $\bar 1$ — so $\mathbb{Z}/8\mathbb{Z}$ is a unital commutative ring (same argument as Example 1, with $6$ replaced by $8$).

*Units:* $\bar a$ is a unit $\iff \gcd(a,8)=1 \iff a$ odd. So
$$(\mathbb{Z}/8\mathbb{Z})^\times = \{1, 3, 5, 7\}.$$
Inverses (each squares to $1$ mod 8: $3^2=9\equiv1$, $5^2=25\equiv1$, $7^2=49\equiv1$):
$$1^{-1}=1,\quad 3^{-1}=3,\quad 5^{-1}=5,\quad 7^{-1}=7.$$
(As a group this is $C_2\times C_2$ — every element is its own inverse.)

*Zero divisor:* the nonzero non-units are $\{2,4,6\}$. Yes, $2$ is a zero divisor: $2\cdot 4 = 8 = 0 \pmod 8$. (So is $4$: $4\cdot 4 = 16 = 0$, and $6\cdot 4 = 24 = 0$.)

**P2.** (a) $M_2(\mathbb{R})$ is a ring: matrix addition makes it an abelian group (identity the zero matrix, negatives entrywise), matrix multiplication is associative, and it distributes over addition — all standard from linear algebra ([linalg-refresher](../../linalg-refresher/syllabus.md)). It's noncommutative; take
$$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix},\quad B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix},\quad AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \neq \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = BA.$$

(b) Take the two "coordinate projections"
$$C = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix},\quad D = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix},\qquad CD = \begin{pmatrix} 1\cdot 0 + 0\cdot 0 & 1\cdot 0 + 0\cdot 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
Both $C$ and $D$ are nonzero, yet $CD = 0$ — so $M_2(\mathbb{R})$ has zero divisors even though ℝ does not. (Notice $DC = \begin{pmatrix}0&0\\0&0\end{pmatrix}\cdot\!$... in fact $DC$ here is also $0$, but zero divisors need not commute in general.)

**P3.** (a) Start from $0 = 0 + 0$ (additive identity) and hit it with $a$:
$$0\cdot a = (0+0)\cdot a = 0\cdot a + 0\cdot a \quad(\text{distributivity}).$$
Now add $-(0\cdot a)$ to both sides (it exists since $(R,+)$ is a group):
$$0 = 0\cdot a + \big(-(0\cdot a)\big) = \big(0\cdot a + 0\cdot a\big) + \big(-(0\cdot a)\big) = 0\cdot a$$
using additive associativity and the inverse axiom. Hence $0\cdot a = 0$. ∎

(b) We must show $(-1)\cdot a$ *is* the additive inverse of $a$ — i.e. that it sums with $a$ to $0$. Compute:
$$a + (-1)\cdot a = 1\cdot a + (-1)\cdot a \quad(\text{$1$ is the mult. identity})$$
$$= (1 + (-1))\cdot a \quad(\text{distributivity}) = 0\cdot a \quad(\text{$-1$ is additive inverse of $1$}) = 0 \quad(\text{part (a)}).$$
Since additive inverses are unique in a group, $(-1)\cdot a = -a$. ∎

</details>

## Flashback

**From [2.6](02-06-burnside-counting.md) (Burnside's lemma).** How many distinct ways are there to color the four vertices of a square using two colors (black/white), where two colorings are the same if one is a **rotation** of the other? (Use the cyclic group $C_4 = \{e, r, r^2, r^3\}$ of rotations.)

<details>
<summary>Solution</summary>

Burnside: distinct colorings $= \dfrac{1}{|C_4|}\displaystyle\sum_{g\in C_4} |\mathrm{Fix}(g)|$, where $\mathrm{Fix}(g)$ is the set of colorings unmoved by $g$. A coloring is fixed by $g$ exactly when the four vertices are colored constantly on each **cycle** of $g$'s action, so $|\mathrm{Fix}(g)| = 2^{(\#\text{cycles of }g)}$.

- $e$: 4 fixed points → 4 cycles → $2^4 = 16$.
- $r$ (90°): one 4-cycle $(1\,2\,3\,4)$ → 1 cycle → $2^1 = 2$.
- $r^2$ (180°): two 2-cycles $(1\,3)(2\,4)$ → 2 cycles → $2^2 = 4$.
- $r^3$ (270°): one 4-cycle → 1 cycle → $2^1 = 2$.

$$\#\text{distinct} = \frac{16 + 2 + 4 + 2}{4} = \frac{24}{4} = \boxed{6}.$$

(Sanity check: the 6 are — all-white; all-black; one black; one white; two black adjacent; two black opposite. Exactly 6.)

</details>

## Connections

- **Backward (Module 2):** a ring homomorphism *is* a group homomorphism ([2.1](02-01-homomorphisms-kernels-images.md)) on $(R,+)$ that also respects $\times$ and $1$; its kernel plays the normal-subgroup role that powers the quotient ([2.2](02-02-normal-subgroups-quotients.md)) and first-isomorphism ([2.3](02-03-isomorphism-theorems.md)) constructions. Everything transfers — you're rebuilding Module 2 with ideals in place of normal subgroups.
- **Backward (Module 1):** the ring axioms are a second, richer axiom system in the exact spirit of the [group axioms](01-01-group-axioms-first-examples.md); $\mathbb{Z}/n\mathbb{Z}$ upgrades the [cyclic group](01-02-cyclic-groups-order.md) from one operation to two.
- **Forward:** [3.2](03-02-integral-domains-fields.md) turns off the zero divisors (integral domains) and switches on inverses for all nonzero elements (fields); [3.3](03-03-ideals-quotient-rings.md) makes "kernel = ideal" precise and builds $R/I$; [3.4](03-04-polynomial-rings.md) studies $F[x]$, the ring whose ideals unlock field extensions in Module 4.
- **Sideways (number theory):** ℤ and $\mathbb{Z}/n\mathbb{Z}$ are the training rings — units mod $n$, zero divisors, and reduction homomorphisms are the algebra under modular arithmetic and, later, `information-theory`'s finite-field codes.
- **Sideways (linear algebra):** $M_n(\mathbb{R})$ is the canonical noncommutative ring with zero divisors ([linalg-refresher](../../linalg-refresher/syllabus.md)); its units are exactly the invertible matrices $GL_n$, tying the ring's unit group straight back to determinants.
