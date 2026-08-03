# Abstract Algebra · Lesson 3.3: Ideals and quotient rings

> ⏱ ~15 min · Module 3: Rings · Builds on: [3.2 Integral domains and fields](03-02-integral-domains-fields.md) · Unlocks: [3.4 Polynomial rings](03-04-polynomial-rings.md)

## Why this matters

In Module 2 we took a group $G$, singled out the *normal* subgroups $N$, collapsed $G$ into a quotient $G/N$, and discovered that quotients and homomorphisms were two views of one thing — the first isomorphism theorem, $G/\ker\varphi \cong \operatorname{im}\varphi$. That single idea unlocked half of group theory.

Rings get the exact same treatment, and almost nothing changes. There is a special kind of subset — the **ideal** — that plays the role of the normal subgroup. You quotient by it. Kernels of ring homomorphisms are exactly ideals, and $R/\ker\varphi \cong \operatorname{im}\varphi$ word for word. The payoff is enormous: $\mathbb{Z}/6\mathbb{Z}$ *is* a quotient ring, and — the punchline of the whole module — $\mathbb{R}[x]/(x^2+1)$ *is* the complex numbers. Building new rings (and, next module, new fields) by quotienting is the central manufacturing technique of the subject.

## The idea

Why isn't every subring good enough to quotient by? Think about what a quotient must do: the cosets $a+I$ have to multiply, and the product had better not depend on which representative you grabbed. If I nudge $a$ by something in $I$ — replace $a$ by $a+i$ — the product $(a+i)b = ab + ib$ moves by $ib$. For the answer to stay put, $ib$ must land back in $I$. In other words $I$ has to **swallow anything the ring multiplies it by**.

That swallowing property is the whole definition. An **ideal** is an additive subgroup that absorbs multiplication by *every* element of the ring — not just by its own members. A subring is closed under its own products; an ideal is closed under products with *outsiders* too. That extra strength is exactly what a normal subgroup's $gNg^{-1}=N$ was: the condition that makes the quotient's operation well-defined.

Once you have it, everything from Module 2 transplants:

| Groups | Rings |
|---|---|
| normal subgroup $N \trianglelefteq G$ | ideal $I \trianglelefteq R$ |
| quotient group $G/N$ | quotient ring $R/I$ |
| kernels are exactly normal subgroups | kernels are exactly ideals |
| $G/\ker\varphi \cong \operatorname{im}\varphi$ | $R/\ker\varphi \cong \operatorname{im}\varphi$ |

Same story, new nouns.

## The formal version

Let $R$ be a ring (with $1$; commutative unless noted).

**Ideal.** A subset $I \subseteq R$ is an **ideal**, written $I \trianglelefteq R$, if:
1. $I$ is an additive subgroup ($0 \in I$; closed under $+$ and negation);
2. **absorption:** for every $r \in R$ and every $x \in I$, both $rx \in I$ and $xr \in I$.

*In words:* $I$ is a chunk closed under addition that stays inside itself no matter what you multiply it by. (In a noncommutative ring you'd distinguish left/right/two-sided; we'll stay commutative, where all three coincide.)

**Kernels are ideals.** If $\varphi: R \to S$ is a ring homomorphism, then $\ker\varphi = \{r \in R : \varphi(r) = 0\}$ is an ideal. *In words:* the set crushed to zero always absorbs multiplication. (Proved in Problem 3 — it's a two-line check.) The converse also holds: every ideal is the kernel of some homomorphism, namely the quotient map below.

**Principal ideal.** The smallest ideal containing a single element $a$ is
$$(a) = aR = \{ ar : r \in R \}.$$
*In words:* all the multiples of $a$. It absorbs multiplication automatically: $r'(ar) = a(r'r) \in aR$. Ideals of this one-generator form are called **principal**.

**Quotient ring.** Given $I \trianglelefteq R$, the cosets $a + I$ form a ring $R/I$ under
$$(a+I) + (b+I) = (a+b) + I, \qquad (a+I)(b+I) = ab + I.$$
Addition is well-defined because $I$ is an additive subgroup (that's the group quotient). Multiplication is well-defined **precisely because $I$ absorbs multiplication** (proved in Problem 3). The zero is $0+I = I$, the one is $1 + I$.

**Ring first isomorphism theorem.** For a homomorphism $\varphi: R \to S$,
$$R/\ker\varphi \;\cong\; \operatorname{im}\varphi.$$
*In words:* modding out by everything that dies gives you a faithful copy of the image. The isomorphism sends $r + \ker\varphi \mapsto \varphi(r)$.

Two ideals carry special names, defined by what their quotient *is*:

- $M \trianglelefteq R$ is **maximal** if $R/M$ is a **field**. (Equivalently: no ideal sits strictly between $M$ and $R$.)
- $P \trianglelefteq R$ is **prime** if $R/P$ is an **integral domain**. (Equivalently: $ab \in P \Rightarrow a\in P$ or $b \in P$.)

*In words:* maximal ideals are the ones whose quotient is as good as a ring gets (a field); prime ideals are the ones whose quotient has no zero divisors. Since every field is a domain, **every maximal ideal is prime** — but not conversely (Problem 2).

## Concrete instance

Take the most familiar quotient of all and watch it fall out of this machinery.

**$\mathbb{Z}/(6)$.** The set $6\mathbb{Z} = \{\dots,-6,0,6,12,\dots\}$ is the principal ideal $(6)$: it's an additive subgroup, and any integer times a multiple of $6$ is a multiple of $6$. The quotient $\mathbb{Z}/(6)$ has six cosets,
$$\overline{0},\ \overline{1},\ \overline{2},\ \overline{3},\ \overline{4},\ \overline{5}, \qquad \overline{a} = a + 6\mathbb{Z},$$
and the recipe $\overline{a}\cdot\overline{b} = \overline{ab}$ is exactly "multiply and reduce mod 6." This *is* $\mathbb{Z}/6\mathbb{Z}$ — the quotient-ring construction and the clock arithmetic you already knew are the same object.

And the "$(n)$ maximal $\iff n$ prime" rule is visible here: $\mathbb{Z}/(6)$ has zero divisors ($\overline{2}\cdot\overline{3} = \overline{0}$), so it's not even a domain — $(6)$ is neither prime nor maximal. Swap $6$ for $5$ and $\mathbb{Z}/(5)$ is a field: $(5)$ is maximal.

The deeper instance — the bridge to the next two lessons — is a quotient of a *polynomial* ring:

$$\mathbb{R}[x]\,/\,(x^2+1) \;\cong\; \mathbb{C}.$$

A coset is $a + bx + (x^2+1)$; write $\overline{x}$ for the coset of $x$. Inside the quotient, $x^2 + 1 \equiv 0$, so
$$\overline{x}^{\,2} = \overline{x^2} = \overline{-1} = -1.$$
We built an element whose square is $-1$ by *decree* — by quotienting out the polynomial that says so. That element is $i$. Every coset reduces to $a + b\,\overline{x}$ (divide by $x^2+1$, keep the degree-$<2$ remainder), and these add and multiply exactly like $a+bi$. The quotient **is** $\mathbb{C}$.

## Worked examples

**Example 1 (the familiar quotient, verified from the axioms).** Show $n\mathbb{Z}$ is an ideal of $\mathbb{Z}$ and that $\mathbb{Z}/(n)$ is the ring $\mathbb{Z}/n\mathbb{Z}$.

*Ideal check.* $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$. It contains $0 = n\cdot 0$; it's closed under addition, $nk + n\ell = n(k+\ell)$, and negation, $-(nk) = n(-k)$ — so it's an additive subgroup. Absorption: for any $r \in \mathbb{Z}$, $r\cdot(nk) = n(rk) \in n\mathbb{Z}$. ✓ So $n\mathbb{Z} = (n)$ is an ideal.

*The quotient.* Cosets are $a + n\mathbb{Z}$, two integers sharing a coset iff they differ by a multiple of $n$ — i.e. iff $a \equiv a' \pmod n$. There are exactly $n$ of them, $\overline{0},\dots,\overline{n-1}$, and the induced operations $\overline a + \overline b = \overline{a+b}$, $\overline a\,\overline b = \overline{ab}$ are addition and multiplication mod $n$. That is the definition of $\mathbb{Z}/n\mathbb{Z}$. The abstract quotient recovers the concrete modular ring. ∎

**Example 2 ($\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$, via the first isomorphism theorem).** The slickest proof doesn't manipulate cosets at all — it builds a homomorphism and reads off its kernel.

Define **evaluation at $i$**:
$$\varphi: \mathbb{R}[x] \to \mathbb{C}, \qquad \varphi(p) = p(i).$$
Plugging a fixed number into polynomials respects $+$ and $\times$, so $\varphi$ is a ring homomorphism. It's **surjective**: $a + bx \mapsto a + bi$ hits every complex number.

What's the kernel? $\varphi(p) = 0$ means $p(i) = 0$, i.e. $i$ is a root of $p$. Since $x^2+1$ is the minimal such real polynomial (its roots are $\pm i$), a real polynomial vanishes at $i$ iff $x^2+1$ divides it. Hence
$$\ker\varphi = (x^2+1).$$
The first isomorphism theorem now finishes it in one line:
$$\mathbb{R}[x]/(x^2+1) = \mathbb{R}[x]/\ker\varphi \;\cong\; \operatorname{im}\varphi = \mathbb{C}. \qquad \blacksquare$$

This is the template for *all* of Module 4: to adjoin a root of an irreducible polynomial $p$, quotient $F[x]$ by $(p)$. Because $x^2+1$ is irreducible over $\mathbb{R}$, the ideal $(x^2+1)$ is maximal, so the quotient is a field — which is why $\mathbb{C}$ is a field and not just a ring.

## Watch out

- **A subring is not an ideal.** $\mathbb{Z} \subseteq \mathbb{Q}$ is a perfectly good subring, but it's not an ideal of $\mathbb{Q}$: multiply $1 \in \mathbb{Z}$ by $\tfrac12 \in \mathbb{Q}$ and you leave $\mathbb{Z}$. Absorption fails. Closure under *own* products is weaker than absorbing *all* products.
- **If $1 \in I$, then $I = R$.** Absorption gives $r = r\cdot 1 \in I$ for every $r$. So a proper ideal contains no units at all — in particular the units of a ring never form an ideal. This is exactly why fields have *only* the two ideals $\{0\}$ and $R$: any nonzero element is a unit and drags the whole ring in.
- **Prime $\ne$ maximal.** Every maximal ideal is prime (field $\Rightarrow$ domain), but the reverse fails: $(x) \trianglelefteq \mathbb{Z}[x]$ is prime (quotient $\cong \mathbb{Z}$, a domain) yet not maximal ($\mathbb{Z}$ isn't a field). Problem 2.
- **Don't confuse the two zeros.** In $R/I$ the zero element is the *coset* $I$ itself. Saying "$\overline a = 0$ in $R/I$" means "$a \in I$," not "$a = 0$ in $R$."

## One-liner

> An ideal is a subset that swallows every product — the ring's normal subgroup — and quotienting by it transplants all of Module 2's machinery onto rings, right down to $R/\ker\varphi \cong \operatorname{im}\varphi$ and the construction $\mathbb{R}[x]/(x^2+1) = \mathbb{C}$.

## Problems

**P1 (🟢)** For each subset, decide whether it's an ideal of the given ring; justify with the absorption test.
(a) The even integers $2\mathbb{Z} \subseteq \mathbb{Z}$.
(b) $\{\overline{0}, \overline{3}\} \subseteq \mathbb{Z}/6\mathbb{Z}$.
(c) The set of units of $\mathbb{Z}$, namely $\{+1, -1\}$.

**P2 (🟡)** In $\mathbb{Z}[x]$ (integer-coefficient polynomials), show that $(x)$ is a prime ideal but **not** maximal, while $(2, x) = \{2f + xg : f,g \in \mathbb{Z}[x]\}$ is maximal. (Identify each quotient ring.)

**P3 (🔴)** Prove the two structural facts this lesson leaned on:
(a) If $\varphi: R \to S$ is a ring homomorphism, then $\ker\varphi$ is an ideal of $R$.
(b) For an additive subgroup $I \subseteq R$, the multiplication $(a+I)(b+I) := ab + I$ on cosets is well-defined **if and only if** $I$ absorbs multiplication (i.e. $I$ is an ideal).

<details>
<summary>Solutions</summary>

**P1.**

(a) **Ideal.** $2\mathbb{Z}$ is an additive subgroup, and for any $r \in \mathbb{Z}$, $r\cdot(2k) = 2(rk) \in 2\mathbb{Z}$. Absorption holds. ✓ (This is just $(2) = n\mathbb{Z}$ with $n=2$.)

(b) **Ideal.** First, $\{\overline0,\overline3\}$ is an additive subgroup of $\mathbb{Z}/6\mathbb{Z}$: $\overline3+\overline3 = \overline6 = \overline0$, closed. Absorption: multiply $\overline3$ by any $\overline r$. If $r$ is even, $\overline{3r} = \overline0$; if $r$ is odd, $3r$ is an odd multiple of $3$, so $3r \equiv 3 \pmod 6$, giving $\overline3$. Either way the product stays in $\{\overline0,\overline3\}$. ✓ (In fact it's the principal ideal $(\overline3)$.)

(c) **Not an ideal.** $\{+1,-1\}$ isn't even an additive subgroup: $1 + 1 = 2 \notin \{\pm1\}$. And absorption fails outright — $3 \cdot 1 = 3 \notin \{\pm1\}$. Units never form an ideal: an ideal containing a unit is the whole ring (here it would have to be all of $\mathbb{Z}$). ✗ This is the trap: "closed under multiplication" ($1\cdot1 = 1$, $(-1)(-1)=1$) is not the ideal condition — absorption of *outside* multipliers is.

**P2.**

*$(x)$ is prime.* Evaluate at $0$: $\varphi: \mathbb{Z}[x] \to \mathbb{Z}$, $\varphi(f) = f(0)$, is a surjective ring homomorphism, and $f(0) = 0$ iff $f$ has no constant term iff $x \mid f$. So $\ker\varphi = (x)$, and by the first isomorphism theorem
$$\mathbb{Z}[x]/(x) \cong \mathbb{Z}.$$
$\mathbb{Z}$ is an integral domain, so $(x)$ is **prime**. But $\mathbb{Z}$ is not a field ($2$ has no inverse), so $(x)$ is **not maximal**.

Concretely, the strictly-larger proper ideal $(2,x)$ sits between $(x)$ and $\mathbb{Z}[x]$ — witnessing non-maximality directly.

*$(2,x)$ is maximal.* Map $\psi: \mathbb{Z}[x] \to \mathbb{Z}/2\mathbb{Z}$ by "evaluate at $0$, then reduce mod $2$," i.e. $\psi(f) = f(0) \bmod 2$. It's a surjective homomorphism. Its kernel is the polynomials whose constant term is even — which is exactly $\{2f + xg\} = (2,x)$ (a polynomial has even constant term iff it's an even integer plus a multiple of $x$). So
$$\mathbb{Z}[x]/(2,x) \cong \mathbb{Z}/2\mathbb{Z},$$
a field. Hence $(2,x)$ is **maximal** (and, being a field quotient, also prime). ∎

The pair is the standard illustration that in a ring of dimension $> 1$ like $\mathbb{Z}[x]$, prime ideals come in a chain $(0) \subsetneq (x) \subsetneq (2,x)$ with only the top one maximal.

**P3.**

(a) *$\ker\varphi$ is an ideal.* Write $K = \ker\varphi$.
- *Additive subgroup:* $\varphi(0) = 0$ so $0 \in K$; if $\varphi(a)=\varphi(b)=0$ then $\varphi(a-b) = \varphi(a)-\varphi(b) = 0$, so $K$ is closed under subtraction. ✓
- *Absorption:* let $x \in K$ (so $\varphi(x)=0$) and $r \in R$. Then
$$\varphi(rx) = \varphi(r)\varphi(x) = \varphi(r)\cdot 0 = 0,$$
so $rx \in K$; likewise $xr \in K$. ✓

Both axioms hold, so $K \trianglelefteq R$. ∎

(b) *Well-defined $\iff$ absorption.*

($\Leftarrow$) Suppose $I$ is an ideal. Take two representatives of each coset: $a + I = a' + I$ and $b + I = b' + I$, meaning $a' = a + i$, $b' = b + j$ with $i,j \in I$. Then
$$a'b' = (a+i)(b+j) = ab + \underbrace{aj}_{\in I} + \underbrace{ib}_{\in I} + \underbrace{ij}_{\in I}.$$
Each of $aj$, $ib$, $ij$ lies in $I$ by absorption (and $I$ is closed under addition), so $a'b' - ab \in I$, i.e. $a'b' + I = ab + I$. The product coset doesn't depend on representatives. ✓

($\Rightarrow$) Suppose the multiplication $(a+I)(b+I) := ab+I$ is well-defined. We show $I$ absorbs. Let $i \in I$ and $r \in R$. Since $i + I = 0 + I$, well-definedness applied to $(r+I)(i+I)$ using representatives $i$ and $0$ forces the same coset:
$$ri + I = (r+I)(i+I) = (r+I)(0+I) = r\cdot 0 + I = 0 + I = I.$$
So $ri \in I$; symmetrically $ir \in I$. That is exactly absorption. ∎

So the ideal condition isn't an arbitrary axiom — it's *forced* by wanting the quotient's multiplication to make sense, exactly as normality was forced by wanting $G/N$'s operation to make sense.

</details>

## Flashback

**From Lesson 3.2 (Integral domains and fields):** In the ring $\mathbb{Z}/7\mathbb{Z}$, find the multiplicative inverse of $\overline{5}$. Then explain in one sentence why *every* nonzero element of $\mathbb{Z}/7\mathbb{Z}$ has an inverse, but $\overline 3$ has none in $\mathbb{Z}/6\mathbb{Z}$.

<details>
<summary>Solution</summary>

Seek $\overline x$ with $\overline5\,\overline x = \overline1$, i.e. $5x \equiv 1 \pmod 7$. Testing (or via $5\cdot 3 = 15 = 14+1$): $\overline x = \overline3$, since $5\cdot3 = 15 \equiv 1 \pmod 7$. So $\overline5^{\,-1} = \overline3$.

$\mathbb{Z}/n\mathbb{Z}$ is a field exactly when $n$ is prime, because then every nonzero residue is coprime to $n$ and Bézout gives an inverse; $7$ is prime so all of $\overline1,\dots,\overline6$ invert. But $6$ is composite: $\overline3$ is a zero divisor ($\overline3\cdot\overline2 = \overline0$), and a zero divisor can never be a unit — so $\overline3$ has no inverse in $\mathbb{Z}/6\mathbb{Z}$.

(Tie-in to this lesson: "$n$ prime" is precisely "$(n)$ maximal," which is precisely "$\mathbb{Z}/(n)$ a field" — the same fact wearing three costumes.)

</details>

## Connections

- **Backward (the whole point):** ideals are to rings what **normal subgroups** ([2.2](02-02-normal-subgroups-quotients.md)) are to groups, $R/I$ is the ring version of $G/N$, and the **ring first isomorphism theorem** is the group one ([2.3](02-03-isomorphism-theorems.md)) verbatim — even the proof (Problem 3) mirrors the group argument. The absorption axiom plays normality's role: the condition that makes the quotient operation well-defined. Fields having only trivial ideals restates [3.2](03-02-integral-domains-fields.md)'s "every nonzero element is a unit," and the ring definitions come from [3.1](03-01-rings-ring-homomorphisms.md).
- **Forward:** [3.4](03-04-polynomial-rings.md) studies $F[x]$ and its ideals — where every ideal turns out to be principal, so "irreducible $p$" $\Rightarrow$ "$(p)$ maximal" $\Rightarrow$ "$F[x]/(p)$ a field." That single implication builds [4.2](04-02-adjoining-roots-algebraic-elements.md)'s $F(\alpha) \cong F[x]/(m_\alpha)$ (adjoin a root by quotienting out its minimal polynomial) and [4.3](04-03-finite-fields.md)'s finite fields $\mathrm{GF}(p^n) = (\mathbb{Z}/p\mathbb{Z})[x]/(\text{irreducible})$.
- **Sideways:** Example 2's $\mathbb{R}[x]/(x^2+1) \cong \mathbb{C}$ is the algebraic *definition* of the complex numbers — the ground the entire [complex analysis](../../complex-analysis/syllabus.md) course stands on, now revealed as one maximal-ideal quotient.
