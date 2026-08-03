# Abstract Algebra · Lesson 2.5: Orbits, stabilizers, and conjugacy classes

> ⏱ ~15 min · Module 2: Homomorphisms & Actions · Builds on: [2.4 Group actions](02-04-group-actions.md) · Unlocks: [2.6 Counting with Burnside's lemma](02-06-burnside-counting.md)

## Why this matters

An action of $G$ on a set $X$ (Lesson 2.4) is a group *doing something* to points. Two questions organize everything you can ask about it: **where can a point go**, and **what holds it still**. Those are the orbit and the stabilizer, and they turn out to be locked together by a single accounting identity — the orbit–stabilizer theorem — that is really [Lagrange](01-05-cosets-lagrange.md) wearing a disguise. Point it at the group acting *on itself by conjugation* and you get conjugacy classes and the class equation, a counting tool sharp enough to prove structural theorems (every group of order $p^2$ is abelian) with almost no computation. It is also the exact bookkeeping [Burnside](02-06-burnside-counting.md) will use next lesson to count colorings, and the skeleton representation theory hangs characters on.

## The idea

Watch a single point $x \in X$ and let the whole group push it around. The set of places it lands is its **orbit**. Meanwhile, some group elements do nothing to $x$ — they fix it in place — and those form its **stabilizer**. Intuitively there's a trade-off: the more symmetries pin $x$ down, the fewer distinct places it can reach. A point with a big stabilizer has a small orbit, and vice versa. Orbit–stabilizer makes that trade-off exact: orbit size $\times$ stabilizer size $= |G|$, always.

Orbits also *tile* $X$: every point is in exactly one orbit, because "reachable from" is an equivalence relation. So an action chops $X$ into disjoint chunks, and counting $X$ means summing chunk sizes — each of which is $|G|/|\text{stabilizer}|$.

The cleverest instance takes $X = G$ itself, with the action $g \cdot x = gxg^{-1}$ (**conjugation**). Now the orbits are the **conjugacy classes**: elements that look "the same up to a change of coordinates inside the group." Summing their sizes is the **class equation**, and because each size divides $|G|$, that sum is a strong constraint on how a group of a given order can be built.

## The formal version

Fix an action of $G$ on $X$ and a point $x \in X$.

**Orbit.** $\mathrm{Orb}(x) = \{\, g\cdot x : g \in G \,\} \subseteq X$.
*In words:* everywhere $x$ can be sent.

**Stabilizer.** $\mathrm{Stab}(x) = \{\, g \in G : g\cdot x = x \,\}$.
*In words:* everything that leaves $x$ untouched. This is a **subgroup** of $G$: it contains $e$; if $g,h$ fix $x$ then $gh\cdot x = g\cdot(h\cdot x) = g\cdot x = x$; and $g\cdot x = x \Rightarrow x = g^{-1}\cdot x$.

**Orbits partition $X$.** Declare $x \sim y$ when $y = g\cdot x$ for some $g$. Reflexive ($e\cdot x = x$), symmetric ($y=g\cdot x \Rightarrow x = g^{-1}\cdot y$), transitive (compose the group elements). Equivalence classes = orbits, so distinct orbits are disjoint and cover $X$.

**Orbit–stabilizer theorem.**
$$|\mathrm{Orb}(x)| \;=\; [G : \mathrm{Stab}(x)] \;=\; \frac{|G|}{|\mathrm{Stab}(x)|}.$$
*In words:* the number of places $x$ reaches equals the number of cosets of its stabilizer. The last equality (for finite $G$) is Lagrange.

*Proof.* Let $H = \mathrm{Stab}(x)$ and define $\varphi : G/H \to \mathrm{Orb}(x)$ by $\varphi(gH) = g\cdot x$. **Well-defined and injective at once:**
$$g\cdot x = h\cdot x \iff h^{-1}g\cdot x = x \iff h^{-1}g \in H \iff gH = hH.$$
So the value $g\cdot x$ depends on the coset and *determines* it. **Surjective** by the definition of the orbit. Hence $\varphi$ is a bijection between the left cosets of $\mathrm{Stab}(x)$ and the points of $\mathrm{Orb}(x)$. $\blacksquare$

**Conjugacy classes.** Let $G$ act on itself by $g\cdot x = gxg^{-1}$ (check it: $e x e^{-1}=x$ and $g\cdot(h\cdot x) = g(hxh^{-1})g^{-1} = (gh)x(gh)^{-1}$). The orbit of $x$ is its **conjugacy class**
$$\mathrm{Cl}(x) = \{\, gxg^{-1} : g\in G \,\},$$
and the stabilizer of $x$ under conjugation is its **centralizer**
$$C_G(x) = \{\, g \in G : gxg^{-1} = x \,\} = \{\, g : gx = xg \,\},$$
everything that *commutes* with $x$. Orbit–stabilizer becomes
$$|\mathrm{Cl}(x)| = [G : C_G(x)] = \frac{|G|}{|C_G(x)|},$$
so **every conjugacy class has size dividing $|G|$.**

**The center as fixed points.** $x$ is fixed by *all* of $G$ under conjugation iff $x$ commutes with everything, i.e. $x \in Z(G)$, the **center**. Equivalently, $\mathrm{Cl}(x) = \{x\}$ (a singleton class) $\iff x \in Z(G)$.

**Class equation.** Split $G$ into conjugacy classes. The singletons are exactly the $|Z(G)|$ central elements; group the rest by picking one representative $x_i$ from each non-central class:
$$\boxed{\,|G| = |Z(G)| + \sum_i [G : C_G(x_i)]\,}$$
*In words:* the whole group = the elements that commute with everything, plus a sum of class sizes, **every one of which divides $|G|$ and is greater than $1$.**

**Conjugacy in $S_n$ = cycle type.** Two permutations are conjugate in $S_n$ **iff they have the same cycle type** (same multiset of cycle lengths). Reason: conjugating a permutation just *relabels* the points. If $\sigma$ sends $a \mapsto b$ and $\tau$ is any permutation, then $\tau\sigma\tau^{-1}$ sends $\tau(a)\mapsto\tau(b)$ — so $\tau\sigma\tau^{-1}$ has the same cycle shape as $\sigma$ with every entry renamed by $\tau$. Concretely, $\tau\,(a\;b\;c)\,\tau^{-1} = (\tau a\;\;\tau b\;\;\tau c)$. So the conjugacy classes of $S_n$ are indexed by the [partitions of $n$](01-03-dihedral-symmetric-groups.md).

**Application preview (proved in Problem 3).** If $|G| = p^k$ with $p$ prime ($k\ge 1$) — a **$p$-group** — then $Z(G)$ is nontrivial. In the class equation, $p \mid |G|$ and $p \mid [G:C_G(x_i)]$ for every non-central class (each index is $>1$ and divides $p^k$), so $p$ must divide $|Z(G)|$ too. A non-obvious fact falls straight out of the counting.

## Concrete instance: $S_3$ end to end

$S_3 = \{\, e,\ (1\,2),\ (1\,3),\ (2\,3),\ (1\,2\,3),\ (1\,3\,2) \,\}$, order $6$. Group by cycle type:

| Class | Cycle type | Elements | Size |
|---|---|---|---|
| $\mathrm{Cl}(e)$ | $1{+}1{+}1$ | $e$ | $1$ |
| transpositions | $2{+}1$ | $(1\,2),(1\,3),(2\,3)$ | $3$ |
| $3$-cycles | $3$ | $(1\,2\,3),(1\,3\,2)$ | $2$ |

**Class equation:** $6 = 1 + 3 + 2$. Since only $e$ is central, $Z(S_3) = \{e\}$, so this is $6 = |Z(S_3)| + 3 + 2$.

Cross-check with centralizers via $|\mathrm{Cl}(x)| = |G|/|C_G(x)|$: the transposition class has size $3$, so $|C_G((1\,2))| = 6/3 = 2$ — indeed only $e$ and $(1\,2)$ commute with $(1\,2)$. The $3$-cycle class has size $2$, so $|C_G((1\,2\,3))| = 6/2 = 3$ — exactly the cyclic subgroup $\langle (1\,2\,3)\rangle$. Every class size divides $6$. ✓

## Worked examples

**Example 1 — $D_4$ on the square's vertices (orbit–stabilizer in action).**
Let $D_4$ (order $8$: rotations $e,r,r^2,r^3$ and four reflections) act on the four vertices $\{1,2,3,4\}$ of a square, labeled in cyclic order.

- **Orbit of vertex $1$.** The rotations alone send $1 \to 1,2,3,4$, so $\mathrm{Orb}(1) = \{1,2,3,4\}$, size $4$. (The action is *transitive*: one orbit.)
- **Stabilizer of vertex $1$.** Which symmetries leave vertex $1$ where it is? Among rotations only $e$ does. Among reflections, only the reflection across the diagonal *through* vertices $1$ and $3$ fixes vertex $1$ (it swaps $2 \leftrightarrow 4$). So $\mathrm{Stab}(1) = \{e,\ d_{13}\}$, order $2$.
- **Verify:** $|\mathrm{Orb}(1)|\cdot|\mathrm{Stab}(1)| = 4 \cdot 2 = 8 = |D_4|.$ ✓

Orbit–stabilizer let us find $|\mathrm{Stab}(1)| = 8/4 = 2$ *before* hunting for its elements — the count tells you how many to look for.

**Example 2 — conjugacy classes of $S_4$ and its class equation.**
Classes are cycle types = partitions of $4$. Count each with the standard formula $\dfrac{n!}{\prod_k k^{m_k}\, m_k!}$, where $m_k$ is the number of $k$-cycles:

| Cycle type | Representative | Size | Count |
|---|---|---|---|
| $1{+}1{+}1{+}1$ | $e$ | $\dfrac{24}{1^4\,4!}=1$ | $1$ |
| $2{+}1{+}1$ | $(1\,2)$ | $\dfrac{24}{2\cdot 2!\cdot 1^2}=6$ | $6$ |
| $2{+}2$ | $(1\,2)(3\,4)$ | $\dfrac{24}{2^2\,2!}=3$ | $3$ |
| $3{+}1$ | $(1\,2\,3)$ | $\dfrac{24}{3\cdot 1!\cdot 1}=8$ | $8$ |
| $4$ | $(1\,2\,3\,4)$ | $\dfrac{24}{4}=6$ | $6$ |

Sizes $\{1,6,3,8,6\}$ sum to $24 = |S_4|$. ✓ Only $e$ is central, so the **class equation** is
$$24 = 1 + 6 + 3 + 8 + 6 \;=\; |Z(S_4)| + 6 + 3 + 8 + 6.$$
Every class size divides $24$ (they are $1,6,3,8,6$) — a good sanity check on any class computation.

## Watch out

- **Left cosets vs. subgroup elements.** Orbit–stabilizer counts $[G:\mathrm{Stab}(x)]$ — the number of *cosets* — not the stabilizer's elements. Orbit size $=$ index, stabilizer size $=$ order; they multiply to $|G|$, they aren't equal.
- **A conjugacy class is (almost) never a subgroup.** It usually misses $e$ entirely, and its size need not divide into a subgroup structure — only its *cardinality* divides $|G|$, via the centralizer.
- **"Same cycle type $=$ conjugate" is an $S_n$ fact.** Inside a smaller subgroup (e.g. $A_4$, or $D_4 \le S_4$) two elements of the same cycle type can fail to be conjugate, because you're only allowed to conjugate by elements *of that subgroup*. Conjugacy is always relative to the ambient group.
- **Centralizer $\ne$ center.** $C_G(x)$ is what commutes with the *one* element $x$; $Z(G)$ is what commutes with *everything* $= \bigcap_x C_G(x)$. Note $x \in Z(G) \iff C_G(x) = G \iff \mathrm{Cl}(x)=\{x\}$.

## One-liner

> Orbit size times stabilizer size is always $|G|$; aim that identity at conjugation and the class equation — a sum of divisors of $|G|$ — reads a group's structure off its order.

## Problems

**P1 (🟢)** $G = \mathbb{Z}/6\mathbb{Z}$ acts on the six vertices of a regular hexagon by rotation: $k$ rotates by $k$ steps. Compute $\mathrm{Orb}(v)$ and $\mathrm{Stab}(v)$ for a vertex $v$, and verify orbit–stabilizer. Then do the same for the action of the subgroup $\{0,2,4\}$ on the same hexagon.

**P2 (🟡)** Find all conjugacy classes of $D_4 = \langle r,s \mid r^4 = s^2 = e,\ srs = r^{-1}\rangle$ (order $8$), give each class's size, identify $Z(D_4)$, and write the class equation.

**P3 (🔴)** Let $p$ be prime and $|G| = p^2$. Use the class equation to prove $Z(G)$ is nontrivial, then deduce $G$ is abelian.

<details>
<summary>Solutions</summary>

**P1.** *Full group $\mathbb{Z}/6\mathbb{Z}$:* rotating $v$ by $0,1,\dots,5$ steps lands on all six vertices, so $\mathrm{Orb}(v)$ is all $6$ vertices. The only rotation fixing $v$ is $0$, so $\mathrm{Stab}(v) = \{0\}$, order $1$. Check: $6 \cdot 1 = 6 = |G|$. ✓ (This is the regular action — free, so every stabilizer is trivial and the orbit is everything.)

*Subgroup $\{0,2,4\}$ (rotations by even steps):* from $v$ you reach $v$, $v{+}2$, $v{+}4$ — the three "same-parity" vertices — so $|\mathrm{Orb}(v)| = 3$. The only even rotation fixing $v$ is $0$, so $\mathrm{Stab}(v) = \{0\}$, order $1$. Check: $3 \cdot 1 = 3 = |\{0,2,4\}|$. ✓ (Now there are two orbits — the even and odd vertices — partitioning the six.)

**P2.** Elements: $\{e, r, r^2, r^3, s, sr, sr^2, sr^3\}$. Use $srs^{-1} = r^{-1}$ and $rsr^{-1} = sr^{-2}$ (from $rs = sr^{-1}$).

- $\{e\}$ — central, size $1$.
- $\{r^2\}$ — $r^2$ commutes with $r$ (powers commute) and $sr^2s^{-1} = r^{-2} = r^2$, so it commutes with everything: central, size $1$.
- $\{r, r^3\}$ — conjugating $r$ by $s$ gives $r^{-1} = r^3$; by powers of $r$ gives $r$. Size $2$.
- $\{s, sr^2\}$ — conjugating $s$ by $r$: $rsr^{-1} = sr^{-2} = sr^2$; by $r^2$: back to $s$. Size $2$ (the two diagonal reflections).
- $\{sr, sr^3\}$ — conjugating $sr$ by $r$: $r(sr)r^{-1} = (rs) = sr^{-1} = sr^3$. Size $2$ (the two edge reflections).

Center: the singleton classes, $Z(D_4) = \{e, r^2\}$, order $2$. Class equation:
$$8 = 1 + 1 + 2 + 2 + 2 \;=\; |Z(D_4)| + 2 + 2 + 2.$$
Every class size ($1,1,2,2,2$) divides $8$. ✓

**P3.** Write the class equation $|G| = |Z(G)| + \sum_i [G : C_G(x_i)]$ over non-central class representatives $x_i$. For each such $x_i$, the element is not central, so $C_G(x_i) \ne G$, giving $[G:C_G(x_i)] > 1$; and this index divides $|G| = p^2$, so it is $p$ or $p^2$ — in particular **divisible by $p$**. Also $p \mid p^2 = |G|$. Rearranging,
$$|Z(G)| = |G| - \sum_i [G:C_G(x_i)]$$
is a difference of multiples of $p$, hence $p \mid |Z(G)|$. Since $e \in Z(G)$ we have $|Z(G)| \ge 1$, and $p \mid |Z(G)|$ forces $|Z(G)| \ge p > 1$. **The center is nontrivial.**

Now $|Z(G)| \in \{p, p^2\}$ (it divides $|G|$ and is $> 1$). If $|Z(G)| = p^2$ then $Z(G) = G$ and $G$ is abelian. Suppose instead $|Z(G)| = p$. Then $|G/Z(G)| = p^2/p = p$, so $G/Z(G)$ is cyclic (every group of prime order is). But **$G/Z(G)$ cyclic forces $G$ abelian**: write $G/Z(G) = \langle gZ(G)\rangle$, so every element of $G$ is $g^i z$ with $z \in Z(G)$; for $a = g^i z_1,\ b = g^j z_2$,
$$ab = g^i z_1 g^j z_2 = g^{i+j} z_1 z_2 = g^j z_2 g^i z_1 = ba$$
(central $z$'s slide freely). Then $Z(G) = G$, contradicting $|Z(G)| = p$. So the case $|Z(G)|=p$ is impossible, $|Z(G)| = p^2$, and **$G$ is abelian.** $\blacksquare$

</details>

## Flashback

**From Lesson 2.4 (Group actions):** $\mathbb{Z}/n\mathbb{Z}$ acts on itself by translation, $a \cdot x = a + x$. Verify the two action axioms, show the action is *free* (every stabilizer is trivial), and say what orbit–stabilizer then reports.

<details>
<summary>Solution</summary>

**Axioms.** Identity: $0 \cdot x = 0 + x = x$. Compatibility: $a \cdot (b \cdot x) = a + (b + x) = (a+b) + x = (a+b)\cdot x$. Both hold, so it's a genuine action.

**Free.** If $a \cdot x = x$ then $a + x = x$, so $a = 0$. Every stabilizer is $\{0\}$, the trivial subgroup.

**Orbit–stabilizer.** With $|\mathrm{Stab}(x)| = 1$, the theorem gives $|\mathrm{Orb}(x)| = |G|/1 = n$: a single orbit covering all of $\mathbb{Z}/n\mathbb{Z}$. The action is transitive and free — the *regular* action, exactly the picture behind Cayley's theorem, and the $|\mathrm{Stab}|=1$ special case that makes P1's first computation instant.

</details>

## Connections

- **Backward:** the theorem is [2.4](02-04-group-actions.md)'s actions turned into arithmetic; its proof is a bijection with cosets, so it *is* [Lagrange (1.5)](01-05-cosets-lagrange.md) — $|\mathrm{Orb}|\cdot|\mathrm{Stab}| = |G|$ is $[G{:}H]\cdot|H| = |G|$ read for $H = \mathrm{Stab}(x)$. Conjugacy classes in $S_n$ are the [cycle types of 1.3](01-03-dihedral-symmetric-groups.md), now given a reason to matter.
- **Forward:** [2.6 Burnside](02-06-burnside-counting.md) counts orbits by *averaging fixed points* — orbit–stabilizer is the identity that makes that average come out to the number of orbits. The class equation is the first structural theorem tool; it generalizes to the Sylow theorems.
- **Sideways (representation theory):** conjugacy classes are the natural coordinates for characters — the number of irreducible representations of a finite group equals its number of conjugacy classes, so today's counting foreshadows the [character tables of representation theory](../../representation-theory/syllabus.md).
- **Sideways (plain language / combinatorics):** "orbits partition, and each orbit's size is $|G|/(\text{how much symmetry pins a point})$" is the counting principle behind every "how many *distinct* arrangements up to symmetry" puzzle — necklaces, dice faces, colorings — which is precisely what Burnside will formalize next.
