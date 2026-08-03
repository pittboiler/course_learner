# Abstract Algebra · Lesson 4.2: Adjoining roots and algebraic elements

> ⏱ ~15 min · Module 4: Field extensions · Builds on: [4.1 Field extensions and degree](04-01-field-extensions-degree.md) · Unlocks: [4.3 Finite fields GF(p^n)](04-03-finite-fields.md)

## Why this matters

Last lesson you learned that an extension $K \supseteq F$ is a vector space over $F$, and its size is the degree $[K:F]$. But where do extensions *come from*? Almost always from one demand: **"I want a root of this polynomial that $F$ doesn't have."** $\mathbb{R}$ has no root of $x^2+1$, so we invent $i$ and get $\mathbb{C}$. $\mathbb{Q}$ has no root of $x^2-2$, so we adjoin $\sqrt{2}$.

The beautiful part — and the payoff of all of Module 3 — is that "invent a root" is not a hand-wave. It is a *precise algebraic construction*: **quotient the polynomial ring by an irreducible**. The element you wished for is literally the coset of $x$. Everything about the new field — its degree, a basis, how to divide — is then computable by long division. This is the engine that builds every finite field in 4.3 and every Galois extension in 4.4.

## The idea

Take $\alpha$ in some big field (say $\sqrt{2} \in \mathbb{R}$) and ask: does $\alpha$ satisfy any polynomial equation with coefficients in $F$? For $\sqrt{2}$, yes — $\sqrt{2}^2 - 2 = 0$, so it's a root of $x^2-2 \in \mathbb{Q}[x]$. We call such an $\alpha$ **algebraic over $F$**. If no nonzero polynomial in $F[x]$ kills it, $\alpha$ is **transcendental** — $\pi$ and $e$ are transcendental over $\mathbb{Q}$ (a hard theorem, but true).

For an algebraic $\alpha$, among all the polynomials that vanish at $\alpha$ there is a *cleanest* one: the monic polynomial of smallest degree, called the **minimal polynomial** $m_\alpha$. It has two magic properties — it's **irreducible**, and it **divides every** polynomial that kills $\alpha$. Once you know $m_\alpha$, you know the whole extension $F(\alpha)$: its degree over $F$ is $\deg m_\alpha$, and $\{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}\}$ is a basis. Higher powers of $\alpha$ never escape this list, because $m_\alpha(\alpha)=0$ lets you rewrite $\alpha^n$ in terms of lower powers.

So working in $F(\alpha)$ is just doing polynomial arithmetic **and then reducing mod $m_\alpha$** — exactly like doing arithmetic in $\mathbb{Z}/n\mathbb{Z}$ by reducing mod $n$. That analogy is not loose: it's the same theorem twice.

## The formal version

Let $F \subseteq K$ be fields and $\alpha \in K$.

**Definition.** $\alpha$ is **algebraic over $F$** if $f(\alpha)=0$ for some nonzero $f \in F[x]$; otherwise **transcendental**.

**The evaluation map.** Consider the ring homomorphism ("plug in $\alpha$")
$$\mathrm{ev}_\alpha : F[x] \to K, \qquad f(x) \mapsto f(\alpha).$$
In words: it sends a polynomial to the number you get by substituting $\alpha$. Its image is $F[\alpha]$ (all polynomial expressions in $\alpha$); its kernel is $\{f : f(\alpha)=0\}$, the ideal of polynomials that kill $\alpha$.

Since $F[x]$ is a PID (every ideal is principal — that was 3.4), the kernel is $(m_\alpha)$ for a single monic generator $m_\alpha$, the **minimal polynomial**. Because the quotient $F[x]/\ker$ embeds in a field $K$, it's an integral domain, so $(m_\alpha)$ is prime, so **$m_\alpha$ is irreducible**. And "smallest-degree generator" means $m_\alpha \mid f$ for every $f$ with $f(\alpha)=0$.

**Central theorem.** For $\alpha$ algebraic over $F$ with $\deg m_\alpha = n$:
$$F(\alpha) \;=\; F[\alpha] \;\cong\; F[x]/(m_\alpha), \qquad [F(\alpha):F] = n,$$
with $F$-basis $\{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}\}$.

In words: the field you get by adjoining $\alpha$ is exactly the polynomial ring cut down modulo the minimal polynomial, and it's an $n$-dimensional vector space over $F$ with the powers of $\alpha$ as coordinates.

*Why it's true (this is the whole lesson in one move).* Apply the **First Isomorphism Theorem** (2.3, ring version in 3.3) to $\mathrm{ev}_\alpha$:
$$F[x]/(m_\alpha) \;\cong\; F[\alpha].$$
Because $m_\alpha$ is irreducible and $F[x]$ is a PID, $(m_\alpha)$ is a **maximal** ideal (3.4), so the quotient is a **field** (3.3). A field containing $F$ and $\alpha$ can be no smaller than $F(\alpha)$ and no bigger than $F[\alpha]$, so all three coincide: $F[\alpha] = F(\alpha)$ is a field, and adjoining a root **is** quotienting by an irreducible. The basis claim is Problem 3.

**Doing arithmetic in $F(\alpha)$.** Represent every element as a polynomial in $\alpha$ of degree $< n$.
- **Multiply:** multiply as polynomials, then reduce the result mod $m_\alpha$ (replace $\alpha^n$ using $m_\alpha(\alpha)=0$).
- **Invert** a nonzero $g(\alpha)$: since $g$ has degree $< n$ and $m_\alpha$ is irreducible, $\gcd(g, m_\alpha)=1$, so Bézout (the extended Euclidean algorithm in $F[x]$) gives $a\,g + b\,m_\alpha = 1$. Evaluate at $\alpha$: $a(\alpha)\,g(\alpha) = 1$, so $g(\alpha)^{-1} = a(\alpha)$. This is "rationalizing the denominator," done systematically.

## Concrete instance — building $\mathbb{Q}(\sqrt[3]{2})$

Let $\alpha = \sqrt[3]{2}$. It's a root of $x^3-2$, which is irreducible over $\mathbb{Q}$ (Eisenstein at $p=2$, from 3.4), so $m_\alpha = x^3-2$ and
$$\mathbb{Q}(\sqrt[3]{2}) \cong \mathbb{Q}[x]/(x^3-2), \qquad [\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3,$$
with basis $\{1,\ \alpha,\ \alpha^2\}$. The one reduction rule is $\boxed{\alpha^3 = 2}$.

**Multiply** $(1 + \alpha)(2 + \alpha^2)$:
$$= 2 + \alpha^2 + 2\alpha + \alpha^3 = 2 + \alpha^2 + 2\alpha + 2 = 4 + 2\alpha + \alpha^2.$$
The stray $\alpha^3$ collapsed to the constant $2$ — that collapse is the entire mechanism.

**Invert** $1 + \alpha$ via the Euclidean algorithm on $g = x+1$ and $m = x^3-2$. Divide:
$$x^3 - 2 = (x+1)(x^2 - x + 1) - 3.$$
So $(x+1)(x^2-x+1) - (x^3-2) = 3$, i.e. $(x+1)\cdot\tfrac{1}{3}(x^2-x+1) + (x^3-2)\cdot(-\tfrac{1}{3}) = 1$. Evaluate at $\alpha$ (where $\alpha^3-2 = 0$):
$$(1+\alpha)^{-1} = \tfrac{1}{3}(\alpha^2 - \alpha + 1).$$
Check: $(1+\alpha)\cdot\tfrac13(\alpha^2-\alpha+1) = \tfrac13(\alpha^3 - \alpha^2 + \alpha + \alpha^2 - \alpha + 1) = \tfrac13(\alpha^3 + 1) = \tfrac13(2+1) = 1.$ ✓

That is a full working field: three basis vectors, one reduction rule, division by Bézout.

## Worked examples

**Example 1 (find a minimal polynomial: $\sqrt{2}+\sqrt{3}$ over $\mathbb{Q}$).**
Let $\alpha = \sqrt{2}+\sqrt{3}$. Square to start killing radicals:
$$\alpha^2 = 2 + 2\sqrt{6} + 3 = 5 + 2\sqrt{6} \;\Rightarrow\; \alpha^2 - 5 = 2\sqrt{6}.$$
Square again: $(\alpha^2-5)^2 = 24$, so $\alpha^4 - 10\alpha^2 + 25 = 24$, giving
$$m(x) = x^4 - 10x^2 + 1, \qquad m(\alpha) = 0.$$
Is it *minimal*? It has no rational roots (Rational Root Theorem: $\pm 1$ both fail), and one checks it has no quadratic factor over $\mathbb{Q}$ — so it's irreducible, hence the minimal polynomial, and $[\mathbb{Q}(\sqrt2+\sqrt3):\mathbb{Q}] = 4$.

Now compare with $\mathbb{Q}(\sqrt2,\sqrt3)$. By the tower law (4.1), $[\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}] = [\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}(\sqrt2)]\cdot[\mathbb{Q}(\sqrt2):\mathbb{Q}] = 2\cdot 2 = 4$. Since $\sqrt2+\sqrt3 \in \mathbb{Q}(\sqrt2,\sqrt3)$, we have $\mathbb{Q}(\sqrt2+\sqrt3) \subseteq \mathbb{Q}(\sqrt2,\sqrt3)$; both have degree $4$ over $\mathbb{Q}$, so
$$\mathbb{Q}(\sqrt2+\sqrt3) = \mathbb{Q}(\sqrt2,\sqrt3).$$
A single element generates the whole two-radical field — a first taste of the **primitive element theorem**.

**Example 2 (arithmetic in $\mathbb{Q}(i) = \mathbb{Q}[x]/(x^2+1)$).**
Here $m = x^2+1$, reduction rule $i^2 = -1$, basis $\{1, i\}$. Compute $\dfrac{2+3i}{1-i}$. The systematic move is invert-and-multiply, but the classic "multiply by the conjugate" *is* Bézout in disguise. Multiply top and bottom by $1+i$:
$$\frac{2+3i}{1-i} = \frac{(2+3i)(1+i)}{(1-i)(1+i)} = \frac{2 + 2i + 3i + 3i^2}{1 - i^2} = \frac{2 + 5i - 3}{1+1} = \frac{-1+5i}{2} = -\tfrac12 + \tfrac52 i.$$
Every step is "expand, then set $i^2=-1$." The denominator $(1-i)(1+i) = 1 - i^2 = 2$ becoming a rational number is precisely why the conjugate trick inverts things: it's the Bézout coefficient made concrete.

## Watch out

- **Minimal means monic *and* smallest degree.** $2x^2-4$ vanishes at $\sqrt2$ but isn't minimal (not monic); $x^4-4$ vanishes at $\sqrt2$ but isn't minimal (not smallest — it factors as $(x^2-2)(x^2+2)$). The minimal polynomial is $x^2-2$. When in doubt, the minimal polynomial is the *irreducible* factor that $\alpha$ actually satisfies.
- **A polynomial having $\alpha$ as a root doesn't make it minimal — irreducibility does.** Always confirm irreducibility (Eisenstein, rational-root test, or degree count) before declaring the degree of the extension.
- **$F[\alpha]$ vs $F(\alpha)$.** $F[\alpha]$ = polynomial expressions; $F(\alpha)$ = the field (allows division). The theorem says they're *equal* — but **only because $\alpha$ is algebraic**. For transcendental $\alpha$, $F[\alpha]$ is just a polynomial ring (not a field) and $F(\alpha)$ is its fraction field of rational functions; the two genuinely differ.
- **Degree of $m_\alpha$ = degree of the extension**, not the degree of some random polynomial you found. $\sqrt2$ satisfies $x^4-4$, but $[\mathbb{Q}(\sqrt2):\mathbb{Q}]=2$, not $4$.

## One-liner

> To adjoin a root of an irreducible $m$ is to form $F[x]/(m)$: the new element is the coset of $x$, the degree is $\deg m$, and you compute by long division — reduce mod $m$ to multiply, run Bézout to divide.

## Problems

**P1 (🟢)** For each, give the minimal polynomial over $\mathbb{Q}$ and the degree $[\mathbb{Q}(\alpha):\mathbb{Q}]$:
(a) $\alpha = \sqrt5$; (b) $\alpha = \sqrt[3]{7}$; (c) $\alpha = \omega$, a primitive cube root of unity (so $\omega^3=1$, $\omega \neq 1$).

**P2 (🟡)** In $\mathbb{Q}(\sqrt[3]{2})$ with $\alpha = \sqrt[3]{2}$ (so $\alpha^3=2$), find the inverse of $g = \alpha^2 + 1$ as an element $a + b\alpha + c\alpha^2$ with $a,b,c \in \mathbb{Q}$. Use the extended Euclidean algorithm on $x^2+1$ and $x^3-2$ in $\mathbb{Q}[x]$, then verify.

**P3 (🔴)** Let $\alpha$ be algebraic over $F$ with minimal polynomial $m_\alpha$ of degree $n$. Prove that $\{1,\alpha,\ldots,\alpha^{n-1}\}$ is an $F$-basis of $F(\alpha)$ — hence $[F(\alpha):F] = n$. (Spanning: division algorithm. Independence: minimality.)

<details>
<summary>Solutions</summary>

**P1.**
(a) $\sqrt5$ satisfies $x^2-5$, irreducible over $\mathbb{Q}$ (Eisenstein at $5$, or no rational root). $m_\alpha = x^2-5$, degree $\mathbf{2}$.
(b) $\sqrt[3]{7}$ satisfies $x^3-7$, irreducible (Eisenstein at $7$). $m_\alpha = x^3-7$, degree $\mathbf{3}$.
(c) $\omega$ satisfies $x^3-1 = (x-1)(x^2+x+1)$. Since $\omega\neq 1$, it's a root of $x^2+x+1$, which is irreducible over $\mathbb{Q}$ (no rational roots; discriminant $-3<0$). $m_\alpha = x^2+x+1$, degree $\mathbf{2}$. (Explicitly $\omega = \tfrac{-1+i\sqrt3}{2}$.)

**P2.** Run the Euclidean algorithm on $m = x^3-2$ and $g = x^2+1$.
$$x^3 - 2 = x\,(x^2+1) + (-x - 2), \qquad\text{remainder } r_1 = -x-2.$$
$$x^2 + 1 = (-x-2)(-x+2) + 5, \qquad\text{since } (-x-2)(-x+2) = x^2 - 4,\ \ x^2+1-(x^2-4)=5.$$
The gcd is the nonzero constant $5$ (confirming $\gcd=1$). Back-substitute. From the second line:
$$5 = (x^2+1) - (-x+2)(-x-2).$$
From the first line, $-x-2 = (x^3-2) - x(x^2+1)$. Substitute:
$$5 = (x^2+1) - (-x+2)\big[(x^3-2) - x(x^2+1)\big] = (x^2+1)\big[1 + x(-x+2)\big] - (-x+2)(x^3-2).$$
So $5 = (x^2+1)(-x^2+2x+1) - (-x+2)(x^3-2)$. Divide by $5$ and evaluate at $\alpha$ (where $\alpha^3-2=0$, so the $m$-term vanishes):
$$(\alpha^2+1)\cdot \tfrac{1}{5}(-\alpha^2 + 2\alpha + 1) = 1 \;\Rightarrow\; (\alpha^2+1)^{-1} = \tfrac{1}{5}\big(1 + 2\alpha - \alpha^2\big).$$
**Verify:** $(\alpha^2+1)(-\alpha^2+2\alpha+1) = -\alpha^4 + 2\alpha^3 + \alpha^2 - \alpha^2 + 2\alpha + 1 = -\alpha^4 + 2\alpha^3 + 2\alpha + 1$. Reduce with $\alpha^3=2$, $\alpha^4 = 2\alpha$: $= -2\alpha + 4 + 2\alpha + 1 = 5$. Dividing by $5$ gives $1$. ✓ So $(\alpha^2+1)^{-1} = \tfrac15 + \tfrac25\alpha - \tfrac15\alpha^2$.

**P3.** Write $n = \deg m_\alpha$ and $B = \{1,\alpha,\ldots,\alpha^{n-1}\}$. By the central theorem $F(\alpha) = F[\alpha]$, so every element of $F(\alpha)$ is $f(\alpha)$ for some $f \in F[x]$.

*Spanning.* Given any $f \in F[x]$, apply the **division algorithm** by $m_\alpha$ (valid since $m_\alpha$ is monic): $f = q\,m_\alpha + r$ with $r = 0$ or $\deg r < n$. Evaluate at $\alpha$: since $m_\alpha(\alpha)=0$,
$$f(\alpha) = q(\alpha)\underbrace{m_\alpha(\alpha)}_{0} + r(\alpha) = r(\alpha).$$
As $\deg r < n$, $r(\alpha)$ is an $F$-combination of $1,\alpha,\ldots,\alpha^{n-1}$. So $B$ spans $F[\alpha] = F(\alpha)$.

*Independence.* Suppose $c_0 + c_1\alpha + \cdots + c_{n-1}\alpha^{n-1} = 0$ with $c_i \in F$ not all zero. Then $p(x) = c_0 + \cdots + c_{n-1}x^{n-1}$ is a **nonzero** polynomial of degree $\le n-1 < n$ with $p(\alpha)=0$. But $m_\alpha$ is the *minimal-degree* nonzero polynomial vanishing at $\alpha$ — contradiction. Hence all $c_i = 0$, and $B$ is linearly independent.

$B$ spans and is independent, so it's a basis of size $n$; therefore $[F(\alpha):F] = n = \deg m_\alpha$. $\blacksquare$

</details>

## Flashback

**From Lesson 4.1 (tower law / degree).** Let $\beta = \sqrt[4]{2}$ (the real fourth root). Find $[\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}]$, and use the tower law to determine $[\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}(\sqrt2)]$.

<details>
<summary>Solution</summary>

$\beta = \sqrt[4]{2}$ is a root of $x^4 - 2$, irreducible over $\mathbb{Q}$ by Eisenstein at $p=2$. So $m_\beta = x^4-2$ and $[\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}] = 4$.

Note $\beta^2 = \sqrt2$, so $\mathbb{Q}(\sqrt2) \subseteq \mathbb{Q}(\sqrt[4]{2})$, giving a tower $\mathbb{Q} \subseteq \mathbb{Q}(\sqrt2) \subseteq \mathbb{Q}(\sqrt[4]{2})$. By the tower law (4.1),
$$4 = [\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}] = [\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}(\sqrt2)]\cdot\underbrace{[\mathbb{Q}(\sqrt2):\mathbb{Q}]}_{2},$$
so $[\mathbb{Q}(\sqrt[4]{2}):\mathbb{Q}(\sqrt2)] = 2$. (Consistent with $\sqrt[4]{2}$ satisfying $x^2 - \sqrt2$ over $\mathbb{Q}(\sqrt2)$, its minimal polynomial there.)

</details>

## Connections

- **Backward:** this is [3.3](03-03-ideals-quotient-rings.md)–[3.4](03-04-polynomial-rings.md) cashed in — "$F[x]/(\text{irreducible})$ is a field" plus the **First Isomorphism Theorem** ([2.3](02-03-isomorphism-theorems.md), ring form) are the *entire* proof that $F(\alpha) \cong F[x]/(m_\alpha)$. The degree $[F(\alpha):F]$ is the vector-space dimension from [4.1](04-01-field-extensions-degree.md).
- **Forward:** [4.3](04-03-finite-fields.md) builds $\mathrm{GF}(p^n)$ as exactly $\mathbb{F}_p(\alpha) = \mathbb{F}_p[x]/(f)$ for an irreducible $f$ of degree $n$ over $\mathbb{F}_p$ — this lesson's construction with $F=\mathbb{F}_p$. In [4.4](04-04-galois-automorphisms-taste.md), field automorphisms fixing $F$ must **permute the roots of $m_\alpha$**, so the minimal polynomial governs the Galois group.
- **Sideways (analysis):** $\mathbb{C} = \mathbb{R}(i) = \mathbb{R}[x]/(x^2+1)$ is the degree-2 case with $F=\mathbb{R}$ — the algebraic backbone under everything in [complex analysis](../../complex-analysis/syllabus.md).
- **Sideways (number theory, plain language):** an *algebraic number* is exactly an element algebraic over $\mathbb{Q}$; a *transcendental number* (like $\pi$, $e$) is one that satisfies no polynomial with rational coefficients. This lesson is the algebra that makes those adjectives precise.
