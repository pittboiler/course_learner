# Abstract Algebra · Lesson 2.2: Normal subgroups and quotient groups

> ⏱ ~15 min · Module 2: Homomorphisms and structure · Builds on: [2.1 Homomorphisms, kernels, and images](02-01-homomorphisms-kernels-images.md) · Unlocks: [2.3 The isomorphism theorems](02-03-isomorphism-theorems.md)

## Why this matters

In [2.1](02-01-homomorphisms-kernels-images.md) you learned to *map* a group onto a simpler one and read the loss in the kernel. Now we do the reverse: **build** the simpler group by hand, by deciding to stop distinguishing elements that differ only by some subgroup $N$. Collapse "$\pm$" and you get a group of two elements: even and odd. Collapse "differs by a multiple of $12$" and you get clock arithmetic. This is *quotienting* — the single most-used construction in algebra — and it works for exactly one class of subgroups. Finding out which, and why, is the whole lesson. It also closes the loop from 2.1: kernels and quotient-able subgroups turn out to be **the same thing**.

## The idea

Take a subgroup $N \le G$. Its left cosets $aN$ partition $G$ (that was [1.5](01-05-cosets-lagrange.md)). Natural wish: make the *set of cosets* into a group by multiplying representatives —

$$(aN)(bN) \overset{?}{=} (ab)N.$$

Beautiful if it works. But there's a landmine: a coset has many names. $aN$ is the same set as $a'N$ whenever $a' = an$ for some $n \in N$. If I feed the rule the name $a'$ instead of $a$, I'd better land in the same output coset — otherwise the "operation" depends on which representative I happened to grab, and it isn't an operation at all.

Chase it through. The product $a'b'$ vs $ab$: their difference involves sliding an element of $N$ **past** a group element $b$. That slide, $b^{-1} n b$, is the crux. If $N$ is closed under this "conjugate by any $g$" move — if $gNg^{-1} = N$ for every $g$ — the rule is well-defined. If not, it's nonsense. That closure condition is **normality**, and it is precisely, not coincidentally, what makes the quotient exist.

## The formal version

**Conjugation.** For $g \in G$, the *conjugate* of $n$ by $g$ is $gng^{-1}$. Think of it as "$n$ viewed from $g$'s frame" — relabel the world by $g$, act by $n$, relabel back. The set $gNg^{-1} = \{gng^{-1} : n \in N\}$.

**Normal subgroup.** $N \le G$ is **normal**, written $N \trianglelefteq G$, if
$$gNg^{-1} = N \quad \text{for all } g \in G.$$
*In words:* conjugating $N$ by anything lands you back inside $N$ — $N$ is closed under the group's internal relabelings. Three equivalent phrasings, each worth carrying:

- $gNg^{-1} \subseteq N$ for all $g$ (the reverse inclusion is then free, using $g^{-1}$).
- $gN = Ng$ for all $g$: **left cosets equal right cosets**. (Multiply $gNg^{-1}=N$ on the right by $g$.)
- $N$ is the **kernel** of some homomorphism out of $G$. (This lesson proves $\Leftarrow$; [2.3](02-03-isomorphism-theorems.md) proves $\Rightarrow$.)

**Quotient group.** When $N \trianglelefteq G$, the set of cosets $G/N = \{\, aN : a \in G \,\}$ with

$$(aN)(bN) = (ab)N$$

is a group: identity $eN = N$, inverse $(aN)^{-1} = a^{-1}N$, associativity inherited from $G$. *In words:* multiply cosets by multiplying any representatives — normality guarantees the answer doesn't care which. By Lagrange ([1.5](01-05-cosets-lagrange.md)),
$$|G/N| = [G:N] = \frac{|G|}{|N|} \quad (\text{finite } G).$$

**Cheap normality tests** (used constantly):

- Every subgroup of an **abelian** group is normal ($gN g^{-1} = gg^{-1}N = N$).
- Any subgroup of **index 2** is normal (only two cosets — $N$ and "the rest" — so left and right cosets have no choice but to match).
- The **center** $Z(G) = \{z : zg = gz \ \forall g\}$ is normal (its elements are fixed by conjugation).

## Concrete instance: building $D_4 / \langle r^2\rangle \cong$ Klein four

Take the symmetries of the square, $D_4 = \{e, r, r^2, r^3, s, rs, r^2s, r^3s\}$ (rotation $r$ by $90°$, reflection $s$; relation $sr = r^{-1}s = r^3 s$). Let $N = \langle r^2 \rangle = \{e, r^2\}$ — the $180°$ half-turn and identity. Since $r^2$ commutes with everything, $N = Z(D_4)$, so $N \trianglelefteq D_4$. Index $8/2 = 4$, so the quotient has **four** elements — the four cosets:

$$N=\{e,r^2\},\quad rN=\{r,r^3\},\quad sN=\{s,r^2s\},\quad rsN=\{rs,r^3s\}.$$

Name them $E, R, S, T$. Multiply by representatives (e.g. $R\cdot S = (r)(s)N = rsN = T$; $S\cdot R = (s)(r)N = (r^3 s)N = rsN = T$; $R\cdot R = r^2 N = N = E$):

| $\cdot$ | $E$ | $R$ | $S$ | $T$ |
|---|---|---|---|---|
| $E$ | $E$ | $R$ | $S$ | $T$ |
| $R$ | $R$ | $E$ | $T$ | $S$ |
| $S$ | $S$ | $T$ | $E$ | $R$ |
| $T$ | $T$ | $S$ | $R$ | $E$ |

Every non-identity element squares to $E$, and the product of any two distinct non-identities is the third: this is the **Klein four-group** $V_4 \cong \mathbb{Z}/2 \times \mathbb{Z}/2$. So $D_4/\langle r^2\rangle \cong V_4$. We threw away the distinction between a symmetry and its half-turn, and what remained was a smaller, cleaner group — literally read off a table.

## Worked examples

**Example 1 — $A_3 \trianglelefteq S_3$ and the quotient $S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}$.**

$A_3 = \{e, (1\,2\,3), (1\,3\,2)\}$, the even permutations, has index $6/3 = 2$ in $S_3$ — so it's normal for free. Two cosets: $A_3$ itself (the evens) and $(1\,2)A_3 = \{(1\,2),(1\,3),(2\,3)\}$ (the odds). Call them $\mathrm{ev}$ and $\mathrm{od}$. Multiply representatives:

$$\mathrm{ev}\cdot\mathrm{ev}=\mathrm{ev},\quad \mathrm{ev}\cdot\mathrm{od}=\mathrm{od},\quad \mathrm{od}\cdot\mathrm{od}=\mathrm{ev}$$

(even∘even is even; even∘odd is odd; odd∘odd is even — parity adds mod 2). That's the two-element group: $S_3/A_3 \cong \mathbb{Z}/2\mathbb{Z}$. The quotient map $S_3 \to \mathbb{Z}/2$ is exactly the **sign** homomorphism from [2.1](02-01-homomorphisms-kernels-images.md), and $A_3$ is its kernel — our first live sighting of "quotient by a kernel recovers the image."

**Example 2 — why $D_3/\langle s\rangle$ does *not* exist.**

In $D_3$ (symmetries of the triangle) take the single reflection subgroup $H = \langle s \rangle = \{e, s\}$, index $3$. Conjugate $s$ by the rotation $r$:
$$r s r^{-1} = r(sr^{-1}) = r(r s) = r^2 s,$$
using $sr^{-1} = rs$ (from $sr = r^{-1}s$). But $r^2 s \notin \{e,s\} = H$ — it's a *different* reflection. So $rHr^{-1} \ne H$: **$H$ is not normal.** Concretely the coset rule breaks: $sH = \{s, e\}\cdot$… take $a=e, a'=s$ (same coset $H$) and $b = r$. Then $(eb)H = rH$ but $(a'b)H = (sr)H = (r^2 s)H$, and $r^2 s \notin rH = \{r, rs\}$. Same inputs as cosets, two different outputs — the operation is ill-defined. You **cannot** form $D_3/\langle s\rangle$. Normality is not a convenience; it's the price of admission.

## Watch out

- **Normality is not transitive, and it's not intrinsic to $N$** — it's a relationship between $N$ *and* $G$. $\langle s\rangle$ is a perfectly good group; it just isn't normal *inside* $D_3$.
- **$gNg^{-1}=N$ is a set equality, not elementwise.** You do *not* need $gng^{-1}=n$ for each $n$ (that's centrality, far stronger). You only need each conjugate to land *somewhere* in $N$.
- **$gN = Ng$ does not mean $gn = ng$.** The *sets* match; individual elements can be permuted. Cosets equal, elements shuffled.
- **Elements of $G/N$ are cosets (sets), not elements of $G$.** "$rN$" is a bag of group elements acting as one point. Multiplying them means picking any representatives — the whole content of the lesson is that this is safe iff $N \trianglelefteq G$.

## One-liner

> $N$ is normal exactly when it's closed under conjugation ($gNg^{-1}=N$), and that is exactly the condition that lets you multiply cosets — so quotient groups $G/N$ exist for kernels and nothing else.

## Problems

**P1 (🟢)** Decide normality by testing conjugates.
(a) Is $\langle r^2\rangle = \{e, r^2\}$ normal in $D_4$?
(b) Is $\langle (1\,2)\rangle = \{e, (1\,2)\}$ normal in $S_3$?
In each case either exhibit a $g$ with $gNg^{-1}\ne N$, or give a one-line reason it must be normal.

**P2 (🟡)** In $\mathbb{Z}/12\mathbb{Z}$ (written additively), let $H = \langle 4\rangle = \{0,4,8\}$. Explain why $H \trianglelefteq \mathbb{Z}/12\mathbb{Z}$, list the cosets of the quotient, write its addition table, and identify the quotient group up to isomorphism.

**P3 (🔴)** Prove: the coset operation $(aN)(bN) := (ab)N$ on $G/N$ is well-defined **if and only if** $N$ is normal in $G$. (Both directions. "Well-defined" means: whenever $aN=a'N$ and $bN=b'N$, then $abN = a'b'N$.)

<details>
<summary>Solutions</summary>

**P1.**
(a) **Normal.** $r^2$ is the $180°$ rotation and commutes with every element of $D_4$ (it's the center $Z(D_4)$). So $g r^2 g^{-1} = r^2$ for all $g$, hence $gNg^{-1} = N$. (Alternatively: $[D_4 : N] = 8/2 = 4$ doesn't give it for free, but index and centrality both close it — centrality is the clean reason.) $N \trianglelefteq D_4$. ✓

(b) **Not normal.** $N = \{e,(1\,2)\}$. Conjugate the transposition by $(1\,3)$; conjugation sends $(a\,b)\mapsto(\sigma a\,\ \sigma b)$, and $(1\,3)$ maps $1\mapsto 3,\ 2\mapsto 2$:
$$(1\,3)(1\,2)(1\,3)^{-1} = (3\,2) = (2\,3) \notin \{e,(1\,2)\}.$$
So $(1\,3)N(1\,3)^{-1}\ne N$. Not normal. (Makes sense: index $3$, and the three transpositions are all conjugate to each other.)

**P2.** $\mathbb{Z}/12\mathbb{Z}$ is abelian, so *every* subgroup is normal — in particular $H=\langle 4\rangle=\{0,4,8\}$. Since $|H|=3$, the quotient has order $12/3 = 4$. The cosets (written $\bar a = a + H$):
$$\bar 0=\{0,4,8\},\quad \bar 1=\{1,5,9\},\quad \bar 2=\{2,6,10\},\quad \bar 3=\{3,7,11\}.$$
Addition is $\bar a + \bar b = \overline{a+b}$ (reduce mod 4 on the labels, since $\bar 4 = \bar 0$):

| $+$ | $\bar0$ | $\bar1$ | $\bar2$ | $\bar3$ |
|---|---|---|---|---|
| $\bar0$ | $\bar0$ | $\bar1$ | $\bar2$ | $\bar3$ |
| $\bar1$ | $\bar1$ | $\bar2$ | $\bar3$ | $\bar0$ |
| $\bar2$ | $\bar2$ | $\bar3$ | $\bar0$ | $\bar1$ |
| $\bar3$ | $\bar3$ | $\bar0$ | $\bar1$ | $\bar2$ |

$\bar 1$ has order $4$ ($\bar1,\bar2,\bar3,\bar0$), so the quotient is cyclic: $\ \mathbb{Z}/12\mathbb{Z}\ /\ \langle 4\rangle \cong \mathbb{Z}/4\mathbb{Z}.$ (Sanity: quotient of a cyclic group by a subgroup of order 3 leaves order $12/3=4$, and quotients of cyclic groups are cyclic.)

**P3.**

($\Leftarrow$) **$N$ normal $\Rightarrow$ well-defined.** Suppose $aN=a'N$ and $bN=b'N$, i.e. $a' = an$ and $b' = bm$ for some $n,m\in N$. Then
$$a'b' = (an)(bm) = a\,(nb)\,m = a\,b\,(b^{-1}nb)\,m.$$
Because $N \trianglelefteq G$, conjugation $b^{-1}Nb = N$, so $b^{-1}nb = n' \in N$. Thus $a'b' = ab\,(n'm)$ with $n'm \in N$, giving $a'b' \in abN$, hence $a'b'N = abN$. The product depends only on the cosets. ✓

($\Rightarrow$) **Well-defined $\Rightarrow$ $N$ normal.** Assume the rule is well-defined. Fix any $g\in G$ and $n\in N$; we show $gng^{-1}\in N$. Note $gnN = gN$ (since $n\in N$, so $gn$ and $g$ name the same coset). Compute the product $(gN)(g^{-1}N)$ two ways:
- with representatives $g,\,g^{-1}$: $\ (g\,g^{-1})N = eN = N$;
- with representatives $gn,\,g^{-1}$ (legal, same cosets): $\ (gn\,g^{-1})N$.

Well-definedness forces these equal: $(gng^{-1})N = N$, i.e. $gng^{-1}\in N$. As $g,n$ were arbitrary, $gNg^{-1}\subseteq N$ for all $g$; applying this with $g^{-1}$ gives the reverse inclusion, so $gNg^{-1}=N$ and $N\trianglelefteq G$. ✓

Together: quotients exist for a subgroup **precisely** when it is normal — no normality, no $G/N$. ∎

</details>

## Flashback

**From [2.1](02-01-homomorphisms-kernels-images.md) (homomorphisms & kernels):** Let $\det : \mathrm{GL}_2(\mathbb{R}) \to \mathbb{R}^\times$ send a matrix to its determinant (here $\mathbb{R}^\times$ is the nonzero reals under multiplication). Verify $\det$ is a homomorphism and identify its kernel. Then say, in one line, what today's lesson lets you conclude about that kernel.

<details>
<summary>Solution</summary>

**Homomorphism:** $\det(AB) = \det(A)\det(B)$ for all $A,B \in \mathrm{GL}_2(\mathbb{R})$ — the multiplicativity of determinants (a fact from `linalg-refresher`). Since both groups' operations are multiplication, this is exactly $\det(A\cdot B) = \det(A)\cdot\det(B)$: a homomorphism. It's onto ($\det \begin{pmatrix} t & 0\\ 0 & 1\end{pmatrix} = t$ hits every nonzero $t$).

**Kernel:** $\ker(\det) = \{A : \det A = 1\} = \mathrm{SL}_2(\mathbb{R})$, the special linear group.

**Today's payoff:** every kernel is a normal subgroup, so $\mathrm{SL}_2(\mathbb{R}) \trianglelefteq \mathrm{GL}_2(\mathbb{R})$ *for free* — no conjugation check needed. (And [2.3](02-03-isomorphism-theorems.md) will hand back $\mathrm{GL}_2(\mathbb{R})/\mathrm{SL}_2(\mathbb{R}) \cong \mathbb{R}^\times$.)

</details>

## Connections

- **Backward:** the cosets being multiplied are [1.5](01-05-cosets-lagrange.md)'s partition, now given a group structure; the "kernel ⇒ normal" half completes [2.1](02-01-homomorphisms-kernels-images.md) — conjugating $\ker\varphi$ never leaves it because $\varphi(gng^{-1}) = \varphi(g)\,e\,\varphi(g)^{-1} = e$.
- **Forward:** [2.3](02-03-isomorphism-theorems.md)'s First Isomorphism Theorem is the converse and the climax — every homomorphic image is a quotient: $G/\ker\varphi \cong \operatorname{im}\varphi$. The Klein-four and $\mathbb{Z}/2$ quotients above are previews of reading a group's image off its kernel.
- **Sideways (rings):** Module 3 replays this exactly. The subobjects you can quotient a ring $R$ by are **ideals** — the ring-world "normal subgroups" — and $R/I$ is built the same way ([3.3](03-03-ideals-quotient-rings.md)). $n\mathbb{Z}\trianglelefteq\mathbb{Z}$ with $\mathbb{Z}/n\mathbb{Z}$ is simultaneously the first quotient group and the first quotient ring.
- **Sideways (linear algebra):** the quotient vector space $V/W$ (collapse a subspace to $0$, keep track of everything modulo $W$) is the same collapse with vector-space structure instead of group structure — cosets $v + W$ playing the role of $aN$ (`linalg-refresher`, [syllabus](../../linalg-refresher/syllabus.md)).
