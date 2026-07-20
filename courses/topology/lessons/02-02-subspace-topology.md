# Topology · Lesson 2.2: The subspace topology

> ⏱ ~15 min · Module 2: Continuity and new spaces from old · Builds on: [2.1 Continuous functions and homeomorphisms](02-01-continuity-and-homeomorphisms.md) · Unlocks: [2.3 The product topology](02-03-product-topology.md)

## Why this matters

You already know a hundred spaces you never defined: the circle, the sphere, a curve in the plane, the interval $[0,1]$. None of them came with their own axioms — each is just a *subset* of a space you did define ($\mathbb{R}^2$, $\mathbb{R}^3$, $\mathbb{R}$), and it borrows its topology from the parent. This lesson is the first of the three "machines" (subspace, product, quotient) that manufacture new spaces from old, and it is the one running silently underneath every example in the rest of the course. It also fixes a confusion that bites everyone: "open" is never absolute — it is always *open in* some named space, and the same set can be open in one and not the other.

## The idea

Take a space $X$ and any subset $A$ living inside it. You want to do topology on $A$ — talk about which subsets of $A$ are open. There is one honest answer, and it costs nothing: **a piece of $A$ is open when it's the shadow that an open set of $X$ casts on $A$.** Slice $A$ out of an ambient open set and whatever you catch is declared open.

Here's the miniature that makes it click. Let $A=[0,1]$ sitting inside $\mathbb{R}$. Is $[0,\tfrac12)$ open? In $\mathbb{R}$, no — the point $0$ has no wiggle room, every ball around it pokes out to negative numbers. But *inside $A$*, there are no negative numbers to poke into: $0$ is the edge of the world. The set $[0,\tfrac12)$ is exactly what you get by intersecting $A$ with the genuinely-open interval $(-1,\tfrac12)$, so by our rule it is open **in $A$**. The half-open look is an illusion of the ambient view; from $A$'s own vantage point $[0,\tfrac12)$ is a perfectly good open neighborhood of $0$.

So openness is relative. Cut the ambient open sets down to $A$ and you get $A$'s topology — no distances, no new axioms, and points on the boundary of $A$ suddenly get "one-sided" neighborhoods they'd never have upstairs.

## The formal version

Let $(X,\tau)$ be a topological space — $\tau$ is the collection of open sets — and let $A\subseteq X$ be any subset.

**Definition (subspace / relative topology).** The **subspace topology** on $A$ is
$$\tau_A=\{\,A\cap U : U\in\tau\,\}.$$
We call $(A,\tau_A)$ a **subspace** of $X$, and its members the sets **open in $A$**.

> In words: the open sets of $A$ are exactly the ambient open sets, each intersected with (traced onto) $A$.

**Claim.** $\tau_A$ really is a topology on $A$.

*Proof.* Check the three axioms.
- $\varnothing=A\cap\varnothing$ and $A=A\cap X$; since $\varnothing,X\in\tau$, both belong to $\tau_A$.
- *Finite intersections.* If $A\cap U_1$ and $A\cap U_2$ are in $\tau_A$, then $(A\cap U_1)\cap(A\cap U_2)=A\cap(U_1\cap U_2)$, and $U_1\cap U_2\in\tau$, so the result is in $\tau_A$.
- *Arbitrary unions.* For any family $\{U_i\}_{i\in I}\subseteq\tau$, $\bigcup_i (A\cap U_i)=A\cap\bigl(\bigcup_i U_i\bigr)$, and $\bigcup_i U_i\in\tau$, so the union is in $\tau_A$.

Distributing $\cap$ over $\cap$ and $\cup$ is the whole proof: the axioms downstairs are inherited straight from the axioms upstairs. $\blacksquare$

**Closed sets, dually.** $C\subseteq A$ is **closed in $A$** iff $C=A\cap D$ for some $D$ closed in $X$. (Take complements inside $A$: $A\setminus(A\cap U)=A\cap(X\setminus U)$.)

> In words: closed-in-$A$ sets are ambient closed sets traced onto $A$, exactly mirroring the open case.

## Picture

![The interval A=[0,1] inside R; the ambient open set U=(-1,1/2) traced onto A gives A∩U=[0,1/2), which is open in A though not in R](assets/02-02-fig1.svg)

The blue open interval $U=(-1,\tfrac12)$ is open in $\mathbb{R}$. Cut it down to the grey subspace $A=[0,1]$ and you catch the red set $[0,\tfrac12)$: the right end $\tfrac12$ stays open (hollow), but the left end $0$ is now a *closed* endpoint of $A$ itself, so it comes along for free. That "the boundary of $A$ joins in" is the entire trap.

## The four facts you'll actually use

Write $\iota:A\hookrightarrow X$ for the **inclusion** $\iota(a)=a$. Recall from [2.1](02-01-continuity-and-homeomorphisms.md) that a map is continuous iff the preimage of every open set is open.

**1. Inclusion is continuous — and $\tau_A$ is the *coarsest* topology making it so.** For $U\in\tau$, $\iota^{-1}(U)=A\cap U$, which is open in $A$ by definition. So $\iota$ is continuous. Conversely, *any* topology on $A$ making $\iota$ continuous must contain every $\iota^{-1}(U)=A\cap U$ — i.e. must contain all of $\tau_A$. Thus $\tau_A$ is the smallest such topology.

> In words: the subspace topology is precisely "just enough open sets to see $A$ sitting continuously inside $X$, and not one more."

**2. Universal property (mapping *into* a subspace).** A function $g:Z\to A$ from any space $Z$ is continuous iff $\iota\circ g:Z\to X$ is continuous.

*Proof.* If $g$ is continuous, so is $\iota\circ g$ (composition of continuous maps). Conversely suppose $\iota\circ g$ is continuous. A basic open set of $A$ is $A\cap U$ with $U\in\tau$; then
$$g^{-1}(A\cap U)=g^{-1}\bigl(\iota^{-1}(U)\bigr)=(\iota\circ g)^{-1}(U),$$
which is open in $Z$ by hypothesis. So $g$ is continuous. $\blacksquare$

> In words: to land continuously in $A$, you only have to land continuously in the big space $X$ — the codomain restriction is free.

**3. Restriction of a continuous map is continuous.** If $f:X\to Y$ is continuous and $A\subseteq X$, then $f|_A:A\to Y$ is continuous. Indeed $f|_A=f\circ\iota$, a composition of continuous maps. (For $V$ open in $Y$, $(f|_A)^{-1}(V)=A\cap f^{-1}(V)$ — an ambient open set traced onto $A$.)

**4. When "open in $A$" upgrades to "open in $X$".** In general it does not (that's fact of life $[0,\tfrac12)$). But:

> **If $A$ is open in $X$, then every set open in $A$ is also open in $X$.** If $A$ is closed in $X$, then every set closed in $A$ is also closed in $X$.

*Proof (open case).* Let $W$ be open in $A$, so $W=A\cap U$ with $U$ open in $X$. If $A$ is itself open in $X$, then $W$ is an intersection of two open sets of $X$, hence open in $X$. The closed case is the identical argument with "closed" and complements. $\blacksquare$

## Embeddings — how a space sits inside another

The subspace topology is exactly what lets us say one space is *a copy of itself* living inside a bigger one.

**Definition (embedding).** A map $f:Z\to X$ is an **embedding** if it is a homeomorphism from $Z$ onto its image $f(Z)$, where $f(Z)$ carries the subspace topology from $X$.

> In words: $f$ doesn't just inject $Z$ into $X$ — it reproduces $Z$'s topology faithfully on the image, so $Z$ and $f(Z)$ are indistinguishable as spaces.

The circle $S^1=\{(x,y):x^2+y^2=1\}\subseteq\mathbb{R}^2$ is the running example: the map $f:[0,2\pi)\to\mathbb{R}^2$, $t\mapsto(\cos t,\sin t)$, is a continuous bijection onto $S^1$ but **not** an embedding — it fails to be a homeomorphism, because near $t=0$ two "ends" of the interval get glued and the inverse is discontinuous. (Gluing them properly is next lesson's story after [2.3](02-03-product-topology.md), in the quotient lesson.) By contrast $S^1$ genuinely *embeds* in $\mathbb{R}^2$ just by inclusion, and that inherited topology is the only sensible topology on the circle — every time you've treated $S^1$ as a space, you were using the subspace topology.

## Worked examples

**Example 1 (mechanical — reading off $\tau_A$).** Let $A=\{0\}\cup[1,2]\subseteq\mathbb{R}$. Is $\{0\}$ open in $A$? Take the ambient open set $U=(-\tfrac12,\tfrac12)$; then $A\cap U=\{0\}$. Yes — $\{0\}$ is open in $A$, even though a single point is never open in $\mathbb{R}$. It's also *closed* in $A$: its complement in $A$ is $[1,2]=A\cap(\tfrac12,3)$, which is open in $A$, so $\{0\}$ is closed too. A set that is open **and** closed in a space is the fingerprint of that space being disconnected — $A$ is two pieces, exactly the setup for Module 3's [connectedness](03-01-connectedness.md).

**Example 2 (why you'd care — restriction that "creates" continuity).** The function $s:\mathbb{R}\to\mathbb{R}$, $s(x)=\lfloor x\rfloor$ (floor), is discontinuous at every integer. Restrict it to $A=[0,1)$: now $s|_A\equiv 0$ is constant, hence continuous. Restriction can only *help* — a domain with fewer points to move around has fewer chances to jump. This is fact 3 doing quiet work, and it's why $\sqrt{x}$, defined only on $[0,\infty)$ with the subspace topology, is a continuous function despite the ambient $\mathbb{R}$ having no square roots to the left of $0$: the "edge" at $0$ gets a one-sided neighborhood and nothing breaks.

## Watch out

- You might think "$W$ is open in $A$" means "$W$ is an open subset of $X$ that happens to lie in $A$." **Wrong on both counts.** $[0,\tfrac12)$ is open in $A=[0,1]$ but not open in $\mathbb{R}$; conversely the subspace topology is *not* obtained by keeping the ambient open sets that fit inside $A$ — you must **intersect** every ambient open set with $A$, which manufactures new open sets (like $[0,\tfrac12)$) that were never open upstairs.
- You might think "open" and "closed" are properties a set just *has*. They are always **relative to a named ambient space** — a set can be open in $A$, closed in $A$, both, or neither, and the verdict flips when you change the ambient space. Always say "open *in* ___".
- You might think openness downstairs transfers up to $X$. Only when $A$ itself is open in $X$ (fact 4). For a generic $A$ — like $[0,1]$ — "open in $A$" tells you nothing about "open in $\mathbb{R}$".
- You might worry that iterating the construction gives something new. It doesn't: if $B\subseteq A\subseteq X$, the subspace topology $B$ gets from $A$ equals the one it gets straight from $X$, since $(A\cap U)\cap B = U\cap B$ when $B\subseteq A$. **Subspace is transitive** — a subspace of a subspace is just a subspace.

## One-liner

> A subset inherits its topology for free by tracing the ambient open sets onto it — so "open" always means "open *in* a named space," and the boundary of the subset gets one-sided neighborhoods it never had upstairs.

## Problems

**P1 (🟢)** In $A=[0,1]\cup(2,3]\subseteq\mathbb{R}$ (subspace topology), classify each of the following as open in $A$, closed in $A$, both, or neither: (a) $[0,1]$, (b) $(2,3]$, (c) $[0,\tfrac12)$, (d) $\{3\}$.

**P2 (🟡)** Let $A\subseteq X$ and let $C\subseteq A$. Prove that the closure of $C$ *in the subspace $A$* equals $\overline{C}\cap A$, where $\overline{C}$ is the closure of $C$ in $X$. (Use only the definition of closed-in-$A$ and that closure = smallest closed set containing $C$.)

**P3 (🔴, optional)** Show that the map $f:\mathbb{R}\to\mathbb{R}^2$, $f(t)=(t,\,t^2)$, is an embedding of $\mathbb{R}$ onto the parabola $P=\{(x,y):y=x^2\}$ with its subspace topology. (Exhibit a continuous inverse $P\to\mathbb{R}$; you may use that projections $\mathbb{R}^2\to\mathbb{R}$ are continuous — the topic of [2.3](02-03-product-topology.md).)

<details>
<summary>Solutions</summary>

**P1** The ambient closed sets and open sets of $\mathbb{R}$ trace onto $A$; note $A$ splits at the gap between $1$ and $2$.
- **(a) $[0,1]$ — both.** Closed in $A$: $[0,1]=A\cap[0,1]$, and $[0,1]$ is closed in $\mathbb{R}$. Open in $A$: $[0,1]=A\cap(-1,\tfrac32)$, since that ambient open interval catches all of $[0,1]$ and none of $(2,3]$. (Both pieces of $A$ are clopen — $A$ is disconnected.)
- **(b) $(2,3]$ — both.** Open in $A$: $(2,3]=A\cap(2,4)$. Closed in $A$: it's the complement in $A$ of the open-in-$A$ set $[0,1]$, hence closed.
- **(c) $[0,\tfrac12)$ — open only.** Open in $A$: $[0,\tfrac12)=A\cap(-1,\tfrac12)$. Not closed in $A$: its closure in $A$ is $[0,\tfrac12]$ (by P2, $\overline{[0,\tfrac12)}\cap A=[0,\tfrac12]$), which is strictly larger, so it isn't closed.
- **(d) $\{3\}$ — closed only.** Closed in $A$: $\{3\}=A\cap[3,3]$, and $[3,3]=\{3\}$ is closed in $\mathbb{R}$. Not open in $A$: any ambient open $U\ni 3$ contains an interval $(3-\varepsilon,3+\varepsilon)$, so $A\cap U$ contains points of $(2,3]$ just below $3$ — it can't be the lone point $\{3\}$.

**P2** Let $\operatorname{cl}_A(C)$ denote the closure of $C$ in $A$. We show $\operatorname{cl}_A(C)=\overline{C}\cap A$.

*($\subseteq$)* $\overline{C}$ is closed in $X$, so $\overline{C}\cap A$ is closed in $A$ by the definition of closed-in-$A$. It contains $C$ (since $C\subseteq\overline{C}$ and $C\subseteq A$). The closure $\operatorname{cl}_A(C)$ is the *smallest* closed-in-$A$ set containing $C$, so $\operatorname{cl}_A(C)\subseteq\overline{C}\cap A$.

*($\supseteq$)* $\operatorname{cl}_A(C)$ is closed in $A$, so $\operatorname{cl}_A(C)=A\cap D$ for some $D$ closed in $X$. Since $C\subseteq\operatorname{cl}_A(C)\subseteq D$ and $D$ is closed in $X$, minimality of $\overline{C}$ gives $\overline{C}\subseteq D$. Hence $\overline{C}\cap A\subseteq D\cap A=\operatorname{cl}_A(C)$.

Both inclusions give equality. $\blacksquare$ (Moral: closure, like openness, is relative — you compute it upstairs and trace it back down.)

**P3** $f$ is continuous: each component $t\mapsto t$ and $t\mapsto t^2$ is continuous, and a map into $\mathbb{R}^2$ is continuous iff its components are (this is the universal property of the product, [2.3](02-03-product-topology.md); for now, both coordinates being continuous suffices). $f$ is a bijection onto $P$: every point of $P$ is $(x,x^2)$ for a unique $x=t$.

For the inverse, let $\pi_1:\mathbb{R}^2\to\mathbb{R}$, $\pi_1(x,y)=x$, be the first-coordinate projection, which is continuous. Then $f^{-1}=\pi_1|_P:P\to\mathbb{R}$ is the restriction of a continuous map to the subspace $P$, hence continuous by **fact 3**. And indeed $\pi_1(f(t))=\pi_1(t,t^2)=t$, so $\pi_1|_P$ is a genuine two-sided inverse of $f$.

Thus $f$ is a continuous bijection onto $P$ with continuous inverse — a homeomorphism onto its image with the subspace topology — i.e. an embedding. The parabola is a faithful copy of the real line. $\blacksquare$ (Contrast the circle map $t\mapsto(\cos t,\sin t)$ on $[0,2\pi)$, which fails exactly because its inverse is *not* continuous where the ends meet.)

</details>

## Flashback

**From Lesson 2.1 (Continuous functions and homeomorphisms):** Let $\mathbb{R}$ carry the standard topology. Prove directly from the "preimage of open is open" definition that $f:\mathbb{R}\to\mathbb{R}$, $f(x)=3x-1$, is continuous. Then exhibit an explicit inverse and conclude $f$ is a homeomorphism $\mathbb{R}\to\mathbb{R}$.

<details>
<summary>Solution</summary>

*Continuity.* A basis for the standard topology is the open intervals, so it suffices to check preimages of them. For an open interval $(a,b)$,
$$f^{-1}\bigl((a,b)\bigr)=\{x:\,a<3x-1<b\}=\left(\tfrac{a+1}{3},\ \tfrac{b+1}{3}\right),$$
again an open interval, hence open. A general open set is a union of such intervals and preimage commutes with unions, so the preimage of every open set is open: $f$ is continuous. (Checking a basis is enough because $f^{-1}\bigl(\bigcup B_i\bigr)=\bigcup f^{-1}(B_i)$.)

*Homeomorphism.* Solve $y=3x-1$: $x=\tfrac{y+1}{3}$, so $g(y)=\tfrac{y+1}{3}$ is a two-sided inverse. By the identical argument, $g^{-1}\bigl((a,b)\bigr)=(3a-1,\,3b-1)$ is open, so $g$ is continuous. A continuous bijection with continuous inverse is a homeomorphism, so $f:\mathbb{R}\to\mathbb{R}$ is one. $\blacksquare$ (Affine maps $x\mapsto \alpha x+\beta$ with $\alpha\neq 0$ are all homeomorphisms of $\mathbb{R}$ — they stretch and slide but never tear.)

</details>

## Connections

- **Backward:** this whole lesson is [2.1](02-01-continuity-and-homeomorphisms.md)'s continuity run backwards — we *reverse-engineered* the topology on $A$ to be the least one making inclusion continuous, and the universal property and restriction facts are just preimage-of-open bookkeeping. The "clopen sets = disconnection" hint in Example 1 and P1 is the seed of Module 3's [connectedness](03-01-connectedness.md).
- **Forward:** subspaces are one of three space-building machines. [2.3](02-03-product-topology.md) builds the *product* (and its projections, which P3 already borrowed), and the quotient lesson glues edges to make the circle and torus honestly — finally turning the failed map $t\mapsto(\cos t,\sin t)$ into a homeomorphism. "Closed subset of a compact space is compact" in [4.1](04-01-compactness-open-covers.md) is a subspace statement through and through.
- **Sideways:** every time `real-analysis` said "$f$ is continuous on $[a,b]$," it silently meant $f$ restricted to the subspace $[a,b]\subseteq\mathbb{R}$ — the one-sided limits at the endpoints are exactly the one-sided neighborhoods the subspace topology hands you here.
