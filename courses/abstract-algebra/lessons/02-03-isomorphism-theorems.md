# Abstract Algebra · Lesson 2.3: The isomorphism theorems

> ⏱ ~15 min · Module 2: Homomorphisms, quotients, actions · Builds on: [2.2 Normal subgroups and quotient groups](02-02-normal-subgroups-quotients.md) · Unlocks: [2.4 Group actions](02-04-group-actions.md)

## Why this matters

You now have two machines. A homomorphism $\varphi: G \to H$ (Lesson 2.1) takes a group somewhere and leaves a footprint: its **kernel** $\ker\varphi$ (what gets crushed to the identity) and its **image** $\operatorname{im}\varphi$ (where it lands). Separately, the quotient $G/N$ (Lesson 2.2) manufactures a new group by collapsing a normal subgroup $N$ to a point. The first isomorphism theorem says these two machines are *the same machine*: collapsing exactly what $\varphi$ crushes reproduces exactly where $\varphi$ lands.

Concretely, this is the answer key for the recurring question **"what group is this quotient?"** You stop wrestling with cosets and instead hunt for a surjective homomorphism with the right kernel — and read the answer off. $\mathbb{R}/\mathbb{Z}$ is a circle. $\mathrm{GL}_n/\mathrm{SL}_n$ is $\mathbb{R}^*$. $S_n/A_n$ is $\mathbb{Z}/2\mathbb{Z}$. All three fall out of one theorem in one line each.

## The idea

Picture $\varphi: G \to H$ as a projection. Two elements $g_1, g_2$ land on the same spot exactly when $\varphi(g_1) = \varphi(g_2)$, i.e. $\varphi(g_1 g_2^{-1}) = e$, i.e. $g_1 g_2^{-1} \in \ker\varphi$ — which is exactly the condition "$g_1$ and $g_2$ are in the same coset of $\ker\varphi$." So the fibers of $\varphi$ (the clumps of inputs sharing an output) *are* the cosets of the kernel. Glue each clump to a point and you've built $G/\ker\varphi$; but each clump also names its single shared output in $\operatorname{im}\varphi$. Same clumps, two labels — the map that swaps labels is an isomorphism.

So every homomorphic image of $G$ is a quotient of $G$, and vice versa. "Image" and "quotient" are two words for one object.

## The formal version

**First isomorphism theorem.** Let $\varphi: G \to H$ be a group homomorphism. Then $\ker\varphi \trianglelefteq G$ (it's normal — Lesson 2.1), and the map
$$\overline{\varphi}: G/\ker\varphi \;\longrightarrow\; \operatorname{im}\varphi, \qquad g\,\ker\varphi \;\longmapsto\; \varphi(g)$$
is a well-defined isomorphism. Hence $G/\ker\varphi \;\cong\; \operatorname{im}\varphi$.

*In words:* quotienting a group by everything a map collapses gives back precisely the map's image.

Here $K := \ker\varphi = \{g \in G : \varphi(g) = e_H\}$ and $\operatorname{im}\varphi = \{\varphi(g) : g \in G\} \le H$. Write $\overline{g} := gK$ for the coset.

**Proof.** Four checks — well-defined, homomorphism, injective, surjective.

1. **Well-defined.** The rule sends the coset $gK$ to $\varphi(g)$, but a coset has many names ($gK = g'K$ whenever $g^{-1}g' \in K$); we must check they all give the same output. If $gK = g'K$ then $g' = gk$ for some $k \in K$, so $\varphi(g') = \varphi(g)\varphi(k) = \varphi(g)\,e_H = \varphi(g)$. Same output — the definition doesn't depend on the representative. ✓

2. **Homomorphism.** Using the coset product $(gK)(g'K) = (gg')K$ from Lesson 2.2,
$$\overline{\varphi}\big((gK)(g'K)\big) = \overline{\varphi}(gg'\,K) = \varphi(gg') = \varphi(g)\varphi(g') = \overline{\varphi}(gK)\,\overline{\varphi}(g'K). \checkmark$$

3. **Injective.** A homomorphism is injective iff its kernel is trivial (Lesson 2.1), so compute $\ker\overline{\varphi}$. Now $\overline{\varphi}(gK) = e_H$ means $\varphi(g) = e_H$, i.e. $g \in K$, i.e. $gK = K$ — the identity coset. So $\ker\overline{\varphi} = \{K\}$ is trivial. ✓

4. **Surjective.** By construction the codomain is $\operatorname{im}\varphi$; every element there is $\varphi(g)$ for some $g$, hit by $\overline{\varphi}(gK)$. ✓

A well-defined, bijective homomorphism is an isomorphism. $\blacksquare$

**Second (diamond) theorem.** Let $H \le G$ and $N \trianglelefteq G$. Then $HN := \{hn : h\in H,\, n\in N\}$ is a subgroup, $N \trianglelefteq HN$, $H \cap N \trianglelefteq H$, and
$$HN/N \;\cong\; H/(H\cap N).$$
*In words:* enlarging $H$ by $N$ and then dividing $N$ back out costs you exactly the overlap $H\cap N$. (Proof: apply the first theorem to the map $H \to HN/N$, $h \mapsto hN$; its kernel is $H\cap N$.) *Tiny example:* in $\mathbb{Z}$, take $H = 4\mathbb{Z}$, $N = 6\mathbb{Z}$; then $HN = \gcd(4,6)\mathbb{Z} = 2\mathbb{Z}$ and $H\cap N = \operatorname{lcm}(4,6)\mathbb{Z} = 12\mathbb{Z}$, and both sides read $2\mathbb{Z}/6\mathbb{Z} \cong 4\mathbb{Z}/12\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z}$.

**Third theorem.** Let $N \trianglelefteq K \trianglelefteq G$ with both normal in $G$ (so $N \subseteq K$). Then $K/N \trianglelefteq G/N$ and
$$(G/N)\big/(K/N) \;\cong\; G/K.$$
*In words:* the $N$'s cancel like a fraction — collapsing by $N$ and then by "$K$ mod $N$" is the same as collapsing by $K$ outright. *Tiny example:* with $G = \mathbb{Z}$, $K = 2\mathbb{Z}$, $N = 6\mathbb{Z}$: $(\mathbb{Z}/6\mathbb{Z})/(2\mathbb{Z}/6\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$, matching $\mathbb{Z}/2\mathbb{Z}$ on the nose.

## Concrete instance

**Reading $\mathrm{GL}_2/\mathrm{SL}_2$ off the determinant.** Let $G = \mathrm{GL}_2(\mathbb{R})$, the invertible $2\times 2$ real matrices under multiplication, and let
$$\det: \mathrm{GL}_2(\mathbb{R}) \longrightarrow \mathbb{R}^*, \qquad A \longmapsto \det A,$$
where $\mathbb{R}^* = \mathbb{R}\setminus\{0\}$ under multiplication. This is a homomorphism because $\det(AB) = \det(A)\det(B)$ — that multiplicativity is the *entire* content of the map being structure-preserving.

- **Kernel:** $\det A = 1$ exactly defines $\mathrm{SL}_2(\mathbb{R})$. So $\ker(\det) = \mathrm{SL}_2(\mathbb{R})$, which is therefore normal in $\mathrm{GL}_2$ — for free, no coset-shuffling needed.
- **Image:** every nonzero $c$ is achieved, e.g. by $\begin{pmatrix} c & 0 \\ 0 & 1\end{pmatrix}$, so $\operatorname{im}(\det) = \mathbb{R}^*$; the map is surjective.

First isomorphism theorem, one line:
$$\mathrm{GL}_2(\mathbb{R})\big/\mathrm{SL}_2(\mathbb{R}) \;\cong\; \mathbb{R}^*.$$
The quotient — a genuinely infinite mess of cosets, each an entire coset of volume-preserving-up-to-sign matrices — is *just the number line without zero*. The coset of $A$ is completely pinned down by the single real number $\det A$. That collapse from "matrices modulo $\mathrm{SL}_2$" to "one nonzero scalar" is the theorem doing its job.

## Worked examples

**Example 1 — $S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}$ from the sign.**
Let $\operatorname{sgn}: S_4 \to \{\pm 1\}$ send each permutation to $+1$ if even, $-1$ if odd; this is a homomorphism because parities add mod 2 when you compose permutations (a product of transpositions counts). Identify $\{\pm 1\}$ (under multiplication) with $\mathbb{Z}/2\mathbb{Z}$ (under addition) via $+1 \leftrightarrow 0$, $-1 \leftrightarrow 1$.

- **Kernel:** the even permutations, which is exactly $A_4$. So $\ker(\operatorname{sgn}) = A_4$, normal in $S_4$.
- **Image:** both $+1$ (identity) and $-1$ (any transposition, e.g. $(1\,2)$) occur, so $\operatorname{im}(\operatorname{sgn}) = \{\pm1\}$; surjective.

First isomorphism theorem:
$$S_4/A_4 \;\cong\; \{\pm 1\} \;\cong\; \mathbb{Z}/2\mathbb{Z}.$$
Sanity check via Lagrange (Lesson 1.5): $|S_4| = 24$, $|A_4| = 12$, so the quotient has order $24/12 = 2$ — and there's only one group of order 2. The two cosets are "even" and "odd," and multiplying cosets *is* the even/odd parity rule. (Nothing used $n=4$; the same argument gives $S_n/A_n \cong \mathbb{Z}/2\mathbb{Z}$ for every $n \ge 2$.)

**Example 2 — $\mathbb{R}/\mathbb{Z} \cong S^1$, the circle group.**
Let $S^1 = \{z \in \mathbb{C} : |z| = 1\}$ be the unit circle under complex multiplication, and define
$$\varphi: \mathbb{R} \longrightarrow S^1, \qquad x \longmapsto e^{2\pi i x}.$$
This is a homomorphism from $(\mathbb{R}, +)$ to $(S^1, \cdot)$ because $\varphi(x+y) = e^{2\pi i(x+y)} = e^{2\pi i x}e^{2\pi i y} = \varphi(x)\varphi(y)$ — the exponential trades addition for multiplication.

- **Kernel:** $e^{2\pi i x} = 1$ iff $2\pi x$ is an integer multiple of $2\pi$, iff $x \in \mathbb{Z}$. So $\ker\varphi = \mathbb{Z}$.
- **Image:** every point on the circle is $e^{2\pi i x}$ for some $x$ (that's the definition of angle), so $\operatorname{im}\varphi = S^1$; surjective.

First isomorphism theorem:
$$\mathbb{R}/\mathbb{Z} \;\cong\; S^1.$$
The quotient $\mathbb{R}/\mathbb{Z}$ glues together all reals differing by an integer — it's the interval $[0,1)$ with its ends identified, i.e. a loop. The theorem certifies that this "wrap the line onto itself" picture is literally the circle group, with addition mod 1 becoming rotation. This is the same $\mathbb{R}/\mathbb{Z}$ that indexes phases in `quantum-mechanics` and periodic signals in `information-theory`.

## Watch out

- **You must check well-defined first, always.** A map "defined on cosets by a representative" is a promise, not yet a function — different names for the same coset could give different outputs. The kernel condition is *exactly* what makes the promise good; skipping this step is the single most common gap in a first-iso proof.
- **The isomorphism lands in $\operatorname{im}\varphi$, not in all of $H$.** If $\varphi$ isn't surjective, $G/\ker\varphi$ is only isomorphic to the *sub*group $\operatorname{im}\varphi \le H$. To conclude $G/\ker\varphi \cong H$ you must separately verify surjectivity — that's why every example above checks the image explicitly.
- **The strategy is "find the surjection," not "compute the cosets."** Faced with "identify $G/N$," don't enumerate cosets — invent a surjective $\varphi: G \to (\text{something familiar})$ whose kernel is $N$. The theorem does the rest. Choosing the target group *is* the whole problem.
- **Normality isn't a side condition to worry about — it's automatic.** Any kernel is normal, so the moment you exhibit $N$ as a kernel, its normality (and the existence of $G/N$) comes free.

## One-liner

> Every homomorphic image is a quotient: crush exactly what the map collapses ($\ker$) and you recover exactly where it lands ($\operatorname{im}$) — so to name a quotient, find a surjection with that kernel.

## Problems

**P1 (🟢)** Let $\varphi: \mathbb{Z} \to \mathbb{Z}/6\mathbb{Z}$ be reduction mod 6, $n \mapsto n \bmod 6$. Verify it's a surjective homomorphism, compute its kernel, and apply the first isomorphism theorem to identify $\mathbb{Z}/6\mathbb{Z}$ as a quotient of $\mathbb{Z}$.

**P2 (🟡)** Inside $\mathbb{Z}/12\mathbb{Z}$, let $\langle 4 \rangle = \{0,4,8\}$ be the subgroup generated by $4$. Find a well-chosen homomorphism out of $\mathbb{Z}/12\mathbb{Z}$ and use the first isomorphism theorem to show
$$(\mathbb{Z}/12\mathbb{Z})\big/\langle 4\rangle \;\cong\; \mathbb{Z}/4\mathbb{Z}.$$
*(Hint: which familiar residue does an element of $\mathbb{Z}/12\mathbb{Z}$ still determine after you forget multiples of 4?)*

**P3 (🔴)** Prove the first isomorphism theorem in full: for a homomorphism $\varphi: G \to H$, the map $\overline{\varphi}: G/\ker\varphi \to \operatorname{im}\varphi$, $g\ker\varphi \mapsto \varphi(g)$, is a well-defined isomorphism. Do all four steps (well-defined, homomorphism, injective, surjective) from scratch.

<details>
<summary>Solutions</summary>

**P1.** *Homomorphism:* $\varphi(m+n) = (m+n)\bmod 6 = (m\bmod 6) + (n\bmod 6) = \varphi(m)+\varphi(n)$ in $\mathbb{Z}/6\mathbb{Z}$ — reduction respects addition. *Surjective:* each residue $0,1,\dots,5$ is $\varphi$ of itself. *Kernel:* $\varphi(n) = 0$ iff $n$ is a multiple of $6$, so $\ker\varphi = 6\mathbb{Z}$. First isomorphism theorem:
$$\mathbb{Z}/6\mathbb{Z} = \mathbb{Z}/\ker\varphi \cong \operatorname{im}\varphi = \mathbb{Z}/6\mathbb{Z}.$$
Circular-looking, but it's the point: the notation $\mathbb{Z}/6\mathbb{Z}$ literally *means* "the quotient of $\mathbb{Z}$ by $6\mathbb{Z}$," and the theorem confirms it equals the image of reduction mod 6.

**P2.** Take the composite of "reduce mod 4" restricted appropriately — cleanest is
$$\psi: \mathbb{Z}/12\mathbb{Z} \longrightarrow \mathbb{Z}/4\mathbb{Z}, \qquad (x \bmod 12) \longmapsto (x \bmod 4).$$
*Well-defined:* if $x \equiv x' \pmod{12}$ then $12 \mid x - x'$, so $4 \mid x-x'$ (since $4\mid 12$), giving $x \equiv x' \pmod 4$ — the map doesn't depend on the chosen representative. *Homomorphism:* reduction respects addition, as in P1. *Surjective:* $0,1,2,3$ are all hit. *Kernel:* $\psi(x) = 0$ iff $4 \mid x$, i.e. $x \in \{0,4,8\} = \langle 4\rangle$ inside $\mathbb{Z}/12\mathbb{Z}$. First isomorphism theorem:
$$(\mathbb{Z}/12\mathbb{Z})/\langle 4\rangle \cong \operatorname{im}\psi = \mathbb{Z}/4\mathbb{Z}.$$
Order check: $|\mathbb{Z}/12\mathbb{Z}| = 12$, $|\langle 4\rangle| = 3$, quotient order $12/3 = 4$. ✓ (This is the third isomorphism theorem in disguise: $\langle 4\rangle = 4\mathbb{Z}/12\mathbb{Z}$, and $(\mathbb{Z}/12\mathbb{Z})/(4\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/4\mathbb{Z}$.)

**P3.** Write $K = \ker\varphi$ and $\overline{g} = gK$.

*Well-defined.* Suppose $gK = g'K$; then $g' = gk$ for some $k\in K$, so $\varphi(g') = \varphi(g)\varphi(k) = \varphi(g)\,e_H = \varphi(g)$. Thus $\overline\varphi(g'K) = \varphi(g') = \varphi(g) = \overline\varphi(gK)$: the value depends only on the coset, not its representative. (This is precisely where normality/kernel-ness is used — $K$ absorbs into $e_H$ under $\varphi$.)

*Homomorphism.* Coset multiplication is $(gK)(g'K) = (gg')K$, so
$$\overline\varphi\big((gK)(g'K)\big) = \overline\varphi(gg'K) = \varphi(gg') = \varphi(g)\varphi(g') = \overline\varphi(gK)\,\overline\varphi(g'K).$$

*Injective.* It suffices to show $\ker\overline\varphi$ is trivial. If $\overline\varphi(gK) = e_H$, then $\varphi(g) = e_H$, so $g \in K$, hence $gK = K$, the identity of $G/K$. So the only coset mapping to $e_H$ is the identity coset, and $\overline\varphi$ is injective.

*Surjective.* Any element of $\operatorname{im}\varphi$ has the form $\varphi(g)$ for some $g \in G$; then $\overline\varphi(gK) = \varphi(g)$. So every target element is attained.

$\overline\varphi$ is a well-defined homomorphism that is both injective and surjective, hence an isomorphism, and $G/\ker\varphi \cong \operatorname{im}\varphi$. $\blacksquare$

</details>

## Flashback

**From Lesson 2.2 (Normal subgroups and quotient groups):** Show that the subgroup $N = \{1, (1\,2)(3\,4),\,(1\,3)(2\,4),\,(1\,4)(2\,3)\}$ (the double-transpositions plus the identity) is normal in $S_4$, and state the order of the quotient $S_4/N$.

<details>
<summary>Solution</summary>

$N$ is the set of the identity and all three products of two disjoint transpositions in $S_4$ (the Klein four-group $V$). Normality means $\sigma N \sigma^{-1} = N$ for every $\sigma \in S_4$. Conjugation in $S_n$ preserves cycle type (Lesson 2.1/2.2: $\sigma(a\,b)(c\,d)\sigma^{-1} = (\sigma a\,\sigma b)(\sigma c\,\sigma d)$), so conjugating any element of $N$ yields another permutation of the *same* cycle type — either the identity or another disjoint double-transposition. But $N$ already contains **every** element of those two cycle types in $S_4$ (there are exactly three double-transpositions, all present, plus the identity). So conjugation permutes $N$ among itself: $\sigma N\sigma^{-1} = N$, and $N \trianglelefteq S_4$. ✓

Order of the quotient: by Lagrange, $|S_4/N| = |S_4|/|N| = 24/4 = 6$. (In fact $S_4/N \cong S_3$ — a preview of using the first isomorphism theorem to *name* it.)

</details>

## Connections

- **Backward:** this lesson fuses [2.1](02-01-homomorphisms-kernels-images.md) (kernel, image, "injective $\iff$ trivial kernel" — used verbatim in the injectivity step) with [2.2](02-02-normal-subgroups-quotients.md) (the coset product $(gK)(g'K) = (gg')K$ that makes $\overline\varphi$ a homomorphism). The theorem is the payoff those two lessons were built for.
- **Forward:** Module 3 replays the entire story for rings — the **ring** first isomorphism theorem $R/\ker\varphi \cong \operatorname{im}\varphi$ ([3.3](03-03-ideals-quotient-rings.md)) is how $\mathbb{F}[x]/(p)$ gets identified with a concrete ring, and in [4.2](04-02-adjoining-roots-algebraic-elements.md) it becomes $F(\alpha) \cong F[x]/(m_\alpha)$ — building a field by quotienting polynomials by a minimal polynomial. Same four-step proof, new nouns.
- **Sideways (linear algebra):** the **rank–nullity theorem** is this theorem for vector spaces. A linear map $T: V \to W$ has $V/\ker T \cong \operatorname{im} T$; taking dimensions gives $\dim V - \dim(\ker T) = \dim(\operatorname{im} T)$, i.e. $\dim V = \operatorname{nullity} + \operatorname{rank}$. See [`linalg-refresher`](../../linalg-refresher/syllabus.md) — rank–nullity was the first isomorphism theorem all along, wearing dimension counts.
