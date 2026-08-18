# Algebraic Geometry · Lesson 3.2: Local rings & localization

> ⏱ ~15 min · Module 3: Local structure — dimension, smoothness & sheaves · Builds on: [Lesson 3.1](03-01-dimension.md) (dimension), [Lesson 2.1](02-01-rational-functions-function-field.md) (the function field & the local ring at a point) · Unlocks: [Lesson 3.3](03-03-tangent-space.md) (the tangent space)

## Why this matters

Everything in this module — dimension, the tangent space, smooth versus singular — is a *local* fact: it depends only on how the variety looks in an arbitrarily small neighborhood of one point $p$. Algebra has an exact tool for "zoom in near $p$ and ignore everything else": **localization**, the operation of formally inverting every function that doesn't vanish at $p$. The result, the **local ring** $\mathcal{O}_{X,p}$, is the coordinate ring's germ at $p$ — and the tangent space in [Lesson 3.3](03-03-tangent-space.md) is read straight off its maximal ideal. Localization is the microscope; this lesson builds it.

## The idea

Near a point $p$, a rational function $f/g$ is a perfectly good "function" as long as $g(p)\neq 0$ — the denominator is nonzero *at $p$*, hence nonzero on a whole neighborhood, so the quotient is defined there. It doesn't matter that $g$ might vanish somewhere far away; far away isn't in our neighborhood.

So to study $X$ near $p$, take the coordinate ring $k[X]$ and **allow division by every function that survives at $p$** (every $g$ with $g(p)\neq 0$). You get a bigger ring than $k[X]$ but a smaller one than the full function field $k(X)$: exactly the rational functions defined *at $p$*. In this ring there is one thing you still can't invert — a function that vanishes at $p$, because $1/g$ would blow up there. The functions vanishing at $p$ form a single maximal ideal $\mathfrak{m}_p$, and *everything outside it is a unit*. A ring with exactly one maximal ideal is called **local**; that one ideal is the algebra's memory of the point.

## The formal version

**Definition (multiplicative set).** A subset $S\subseteq R$ of a commutative ring is *multiplicative* if $1\in S$ and $s,t\in S\Rightarrow st\in S$.

**Definition (localization).** The **localization** $S^{-1}R$ is the set of formal fractions $r/s$ with $r\in R$, $s\in S$, under the equivalence
$$\frac{r}{s}=\frac{r'}{s'}\quad\Longleftrightarrow\quad \exists\,t\in S \text{ with } t\,(rs'-r's)=0,$$
with addition and multiplication defined as for ordinary fractions. It is a commutative ring, and $r\mapsto r/1$ gives a canonical map $R\to S^{-1}R$.

*In words:* $S^{-1}R$ is $R$ with everything in $S$ made invertible — the smallest such ring. The extra $t$ in the equivalence is only there to handle zero-divisors; when $R$ is a domain and $0\notin S$ it collapses to the schoolbook rule $rs'=r's$.

Two special cases you already know:

- $S=R\setminus\{0\}$ for a domain $R$ gives the field of fractions, $S^{-1}R=\operatorname{Frac}(R)$ — for a variety, $k(X)$ from [Lesson 2.1](02-01-rational-functions-function-field.md).
- Inverting one element: $S=\{1,f,f^2,\dots\}$ gives $R_f=R[1/f]$, functions defined off the hypersurface $f=0$.

**Definition (localization at a prime).** If $\mathfrak{p}\subseteq R$ is a prime ideal, then $S=R\setminus\mathfrak{p}$ is multiplicative (primeness is *exactly* "the complement is closed under products"). Write
$$R_\mathfrak{p}:=(R\setminus\mathfrak{p})^{-1}R.$$

**Proposition (it's local).** $R_\mathfrak{p}$ has a unique maximal ideal,
$$\mathfrak{p}R_\mathfrak{p}=\Big\{\tfrac{a}{s}:a\in\mathfrak{p},\ s\notin\mathfrak{p}\Big\},$$
and every element outside it is a unit.

*In words:* by inverting everything *not* in $\mathfrak{p}$, the only non-units left are the fractions whose numerator lies in $\mathfrak{p}$ — one maximal ideal, nothing else. (Proof in P2.) A ring with a unique maximal ideal is a **local ring**, and $R/\mathfrak{m}$ is its **residue field**.

**The geometry.** Let $X$ be an irreducible affine variety over $k=\bar k$, so $k[X]$ is a domain. A point $p\in X$ corresponds, by the Nullstellensatz, to a maximal ideal
$$\mathfrak{m}_p=\{f\in k[X]:f(p)=0\}.$$
Its localization is the **local ring of $X$ at $p$**:
$$\mathcal{O}_{X,p}:=k[X]_{\mathfrak{m}_p}=\Big\{\tfrac{f}{g}:f,g\in k[X],\ g(p)\neq 0\Big\}\ \subseteq\ k(X).$$

*In words:* $\mathcal{O}_{X,p}$ is precisely the rational functions **regular (defined) at $p$** — the germs of regular functions there. Its maximal ideal $\mathfrak{m}_p\mathcal{O}_{X,p}=\{f/g:f(p)=0\}$ is the functions **vanishing at $p$**; the quotient map "evaluate at $p$" gives the residue field
$$\mathcal{O}_{X,p}/\mathfrak{m}_p\mathcal{O}_{X,p}\ \cong\ k.$$

**Two properties that make "local" arguments legal.**

1. **Localization is exact.** If $0\to A\to B\to C\to 0$ is an exact sequence of $R$-modules, so is $0\to S^{-1}A\to S^{-1}B\to S^{-1}C\to 0$. Nothing is lost or created by zooming in; kernels and images are computed neighborhood-by-neighborhood.
2. **It commutes with quotients.** For an ideal $I\subseteq R$,
$$S^{-1}(R/I)\ \cong\ S^{-1}R\,/\,S^{-1}I.$$
So you may pass to a subvariety before or after localizing — same answer. This is what lets you *drop the components of $X$ that miss $p$* (P3).

**Dimension is recovered locally.** Prime ideals of $R_\mathfrak{p}$ correspond bijectively (and order-preservingly) to primes of $R$ *contained in $\mathfrak{p}$*. For an irreducible variety $X$ every maximal ideal has the same height $=\dim X$ (the coordinate ring is Noetherian and its chains of irreducible subvarieties all reach full length), so the Krull dimension of the local ring recovers the global one:
$$\dim \mathcal{O}_{X,p}=\dim X\qquad\text{at every }p\in X.$$

*In words:* the microscope loses no dimensions — the longest chain of subvarieties *through $p$* is as long as the longest chain anywhere. (Krull dimension, chains, transcendence degree: [Lesson 3.1](03-01-dimension.md).)

## Concrete instance

**Germs at the origin of the line.** Take $R=k[x]$, the coordinate ring of $\mathbb{A}^1$, and $p=0$, so $\mathfrak{m}_0=(x)$ (the polynomials vanishing at $0$). Then
$$\mathcal{O}_{\mathbb{A}^1,0}=k[x]_{(x)}=\Big\{\tfrac{f(x)}{g(x)}:g(0)\neq 0\Big\}.$$
Concretely: rational functions you can evaluate at $0$. The function $\dfrac{1}{x-2}$ lives here ($g(0)=-2\neq0$); $\dfrac{1}{x}$ does **not** (it blows up at $0$).

*Units vs. the maximal ideal.* A fraction $f/g$ (with $g(0)\neq0$) is a **unit** iff its inverse $g/f$ is also defined at $0$, i.e. iff $f(0)\neq 0$:
$$\frac{f}{g}\ \text{is a unit}\ \Longleftrightarrow\ f(0)\neq0,\qquad \frac{f}{g}\in\mathfrak{m}_0\mathcal{O}\ \Longleftrightarrow\ f(0)=0.$$
Every element splits cleanly: evaluate the numerator at $0$; nonzero means invertible, zero means it's in the maximal ideal. There is nothing in between — that's locality. And $\dim k[x]_{(x)}=1=\dim\mathbb{A}^1$: the only primes below $(x)$ are $(0)\subsetneq(x)$, a chain of length $1$.

## Worked examples

**Example 1 (a local ring is a domain sitting inside the function field).** In $\mathcal{O}_{\mathbb{A}^1,0}=k[x]_{(x)}$, factor $\dfrac{x^2-1}{x-3}$. Numerator at $0$: $-1\neq0$ — so this is a **unit**; its inverse $\dfrac{x-3}{x^2-1}$ is also defined at $0$ (denominator $-1\neq0$). Now factor $\dfrac{x^2+x}{x-3}=\dfrac{x(x+1)}{x-3}$. Numerator at $0$ is $0$, so this lies in $\mathfrak{m}_0$; write it as $x\cdot\dfrac{x+1}{x-3}$, i.e. $x$ times a unit. Every nonzero element of $k[x]_{(x)}$ is $x^n\cdot(\text{unit})$ for a unique $n\ge0$ — the order of vanishing at $0$. (Rings where the maximal ideal is generated by one such element are *discrete valuation rings*; this is the algebraic shadow of "smooth point on a curve," which [Lesson 3.4](03-04-smoothness-singularities-tangent-cone.md) exploits.)

**Example 2 (a curve's local ring).** Let $X=V(y-x^2)\subseteq\mathbb{A}^2$, the parabola. Its coordinate ring is
$$k[X]=k[x,y]/(y-x^2)\ \cong\ k[x]\qquad(\text{substitute }y=x^2),$$
a domain of dimension $1$. Take $p=(0,0)$, where $\mathfrak{m}_p=(x,y)/(y-x^2)$ corresponds to $(x)$ under the isomorphism. Then
$$\mathcal{O}_{X,(0,0)}\ \cong\ k[x]_{(x)},\qquad \dim\mathcal{O}_{X,(0,0)}=1=\dim X.$$
The local ring of the parabola at the origin is *the same* as the line's local ring at $0$ — near a point, a smooth curve is indistinguishable from a line. That coincidence is smoothness, made precise next lesson.

## Watch out

- You might think localizing *shrinks* the ring by throwing things out — actually it *grows* it: $R\subseteq R_\mathfrak{p}\subseteq k(X)$. You add all the fractions with denominator outside $\mathfrak{p}$. What shrinks is the *ideal structure*: only primes inside $\mathfrak{p}$ survive.
- You might think $\mathfrak{m}_p$ (an ideal of $k[X]$) and $\mathfrak{m}_p\mathcal{O}_{X,p}$ (its extension in the local ring) are the same object — they aren't. The first is one maximal ideal *among many* in $k[X]$ (one per point of $X$); after localizing at it, it becomes *the only* maximal ideal. Localization is exactly the act of forgetting all the other points.
- You might think the residue field could be some big extension — but over $k=\bar k$ it's always $k$ itself, by the Nullstellensatz (maximal ideals ↔ points, and evaluation at $p$ lands in $k$). The map $\mathcal{O}_{X,p}\to k$, $f/g\mapsto f(p)/g(p)$, is just "evaluate at $p$."

## One-liner

> To see a variety near $p$, invert everything that doesn't vanish at $p$ — the leftover non-units are the functions killed at $p$, and they form the one maximal ideal that *is* the point.

## Problems

**P1 (🟢)** Work in $\mathcal{O}_{\mathbb{A}^1,0}=k[x]_{(x)}$. For each element, (i) say whether it belongs to the ring at all, and if so (ii) whether it is a unit or lies in the maximal ideal $\mathfrak{m}_0$:
$$\text{(a) }\frac{x+3}{x-1},\qquad\text{(b) }\frac{x-1}{x},\qquad\text{(c) }\frac{x^2}{x^2+1},\qquad\text{(d) }\frac{1}{x^2-x}.$$

**P2 (🟡)** Let $\mathfrak{p}\subseteq R$ be prime and $R_\mathfrak{p}=(R\setminus\mathfrak{p})^{-1}R$. Prove that $\mathfrak{p}R_\mathfrak{p}=\{a/s:a\in\mathfrak{p},\,s\notin\mathfrak{p}\}$ is an ideal, that every element of $R_\mathfrak{p}$ outside it is a unit, and conclude $R_\mathfrak{p}$ is local with this as its unique maximal ideal. *(Hint: if $a/s\notin\mathfrak{p}R_\mathfrak{p}$, what is $a$'s relation to $\mathfrak{p}$, and why does that make $s/a$ legal?)*

**P3 (🔴, optional)** Let $X=V(xy)\subseteq\mathbb{A}^2$ — the union of the two coordinate axes — with $k[X]=k[x,y]/(xy)$ (not a domain). Consider the point $p=(1,0)$, which lies on the $x$-axis only. Using that localization commutes with quotients, show that
$$\mathcal{O}_{X,(1,0)}\ \cong\ k[x]_{(x-1)},$$
a $1$-dimensional local domain. Interpret geometrically: what happened to the $y$-axis?

<details>
<summary>Solutions</summary>

**P1** An element $f/g$ is in $k[x]_{(x)}$ iff we can write it with $g(0)\neq0$; it is a unit iff additionally $f(0)\neq0$, and in $\mathfrak{m}_0$ iff $f(0)=0$.

(a) $g(0)=-1\neq0$, so it's in the ring. $f(0)=3\neq0$: **unit**.
(b) Denominator $x$ vanishes at $0$, and the numerator $x-1$ has $(x-1)(0)=-1\neq0$, so the fraction is *not* defined at $0$ (in lowest terms the denominator still vanishes). **Not in the ring** ($1/x\notin k[x]_{(x)}$).
(c) $g(0)=1\neq0$: in the ring. $f(0)=0$: lies in $\mathfrak{m}_0$ (indeed $=x^2\cdot\frac1{x^2+1}$, order $2$).
(d) $x^2-x=x(x-1)$ vanishes at $0$, so $\dfrac1{x^2-x}$ blows up at $0$: **not in the ring**.

**P2** *Ideal.* If $a/s,\,a'/s'\in\mathfrak{p}R_\mathfrak{p}$ (so $a,a'\in\mathfrak{p}$, $s,s'\notin\mathfrak{p}$), then $\dfrac{a}{s}+\dfrac{a'}{s'}=\dfrac{as'+a's}{ss'}$ has numerator in $\mathfrak{p}$ (as $a,a'\in\mathfrak{p}$) and denominator $ss'\notin\mathfrak{p}$ ($\mathfrak{p}$ prime ⇒ complement multiplicative), so it's in the set. For $r/t\in R_\mathfrak{p}$, $\dfrac{r}{t}\cdot\dfrac{a}{s}=\dfrac{ra}{ts}$ has numerator $ra\in\mathfrak{p}$ (ideal absorbs), denominator $\notin\mathfrak{p}$ — still in the set. So $\mathfrak{p}R_\mathfrak{p}$ is an ideal, and it is proper since $1/1\notin\mathfrak{p}R_\mathfrak{p}$ (a unit numerator can't be forced into $\mathfrak{p}$).

*Everything outside is a unit.* Take $a/s\notin\mathfrak{p}R_\mathfrak{p}$. Then $a\notin\mathfrak{p}$ (if $a\in\mathfrak{p}$ the fraction would be in the set), so $a\in R\setminus\mathfrak{p}=S$. Hence $s/a$ is a legal element of $R_\mathfrak{p}$, and $\dfrac{a}{s}\cdot\dfrac{s}{a}=1$: a unit.

*Local.* In any commutative ring, if the non-units form an ideal $\mathfrak{m}$, that ideal is the unique maximal ideal (any proper ideal consists of non-units, hence lies in $\mathfrak{m}$; and $\mathfrak{m}$ is proper since $1$ is a unit). Here the non-units are exactly $\mathfrak{p}R_\mathfrak{p}$, so $R_\mathfrak{p}$ is local with maximal ideal $\mathfrak{p}R_\mathfrak{p}$. $\blacksquare$

**P3** The maximal ideal of $p=(1,0)$ in $k[X]$ is $\mathfrak{m}=(x-1,\,y)/(xy)$; localize there, $S=k[X]\setminus\mathfrak{m}$. Since $x(1,0)=1\neq0$, $x\notin\mathfrak{m}$, so $x$ becomes a **unit** in the localization. But the relation $xy=0$ holds, so
$$y=x^{-1}(xy)=x^{-1}\cdot0=0\quad\text{in }\mathcal{O}_{X,(1,0)}.$$
Thus $y$ dies. Formally, localization commutes with quotients:
$$\mathcal{O}_{X,(1,0)}=\big(k[x,y]/(xy)\big)_{\mathfrak{m}}\cong k[x,y]_{\mathfrak{m}}\big/(xy)k[x,y]_{\mathfrak{m}},$$
and in $k[x,y]_{\mathfrak{m}}$ the unit $x$ makes $(xy)=(y)$, so the quotient is $k[x,y]_{\mathfrak{m}}/(y)\cong k[x]_{(x-1)}$ — a $1$-dimensional local domain. **Geometrically:** near $(1,0)$ the $y$-axis component $\{x=0\}$ isn't present (it passes through the origin, not through $(1,0)$), and localizing forgets it entirely. The local ring sees only the smooth branch $X$ actually looks like there — a single line. Localization is genuinely local: reducibility away from $p$ leaves no trace.

</details>

## Flashback

**From [Lesson 3.1](03-01-dimension.md) (dimension three ways):** Let $X=V(z-xy)\subseteq\mathbb{A}^3$. Compute $\dim X$ two ways — by the transcendence degree of $k(X)$, and by exhibiting a chain of irreducible subvarieties of the right length — and check they agree.

<details>
<summary>Solution</summary>

*Transcendence degree.* Since $z=xy$ on $X$, the coordinate ring is
$$k[X]=k[x,y,z]/(z-xy)\ \cong\ k[x,y]\qquad(\text{eliminate }z),$$
a domain, so $X$ is irreducible with function field $k(X)\cong k(x,y)$. Here $x,y$ are algebraically independent over $k$, so $\operatorname{trdeg}_k k(X)=2$, giving $\dim X=2$.

*Chain of irreducibles.* A length-$2$ chain of irreducible closed subvarieties: take the point $\{(0,0,0)\}\subsetneq$ the curve $C=\{(t,0,0):t\in k\}$ (the $x$-axis, which lies on $X$ since $z=xy=0$ there) $\subsetneq X$. Each inclusion is strict and each set is irreducible (point; line $\cong\mathbb{A}^1$; $X\cong\mathbb{A}^2$), so the chain has length $2$ and no longer chain fits inside a surface. Hence $\dim X=2$. ✓ Both methods agree: $X$ is a $2$-dimensional graph, a copy of $\mathbb{A}^2$ sitting in $\mathbb{A}^3$.

</details>

## Connections

- **Backward:** this is the localization-at-a-point promised in [Lesson 2.1](02-01-rational-functions-function-field.md) — there $k(X)$ was $\operatorname{Frac}(k[X])$ (localize at the prime $(0)$); here $\mathcal{O}_{X,p}=k[X]_{\mathfrak{m}_p}$ sits strictly between $k[X]$ and $k(X)$. And the Krull-dimension count from [Lesson 3.1](03-01-dimension.md) is what guarantees $\dim\mathcal{O}_{X,p}=\dim X$.
- **Forward:** [Lesson 3.3](03-03-tangent-space.md) builds the Zariski tangent space as $(\mathfrak{m}_p/\mathfrak{m}_p^2)^*$ — a construction *inside* the local ring you just built; [Lesson 3.4](03-04-smoothness-singularities-tangent-cone.md) reads smoothness off whether $\mathcal{O}_{X,p}$ is as simple as $k[x]_{(x)}$ (a regular local ring). The structure sheaf ([Lesson 3.6](03-06-structure-sheaf.md)) and $\operatorname{Spec}$ ([Lesson 4.1](04-01-spec-of-a-ring.md)) glue these local rings — one per point — into a single object; localization at *basic opens* $R_f$ is the engine there too.
- **Sideways (abstract-algebra):** localization $S^{-1}R$ and local rings are pure commutative algebra, developed in full in [abstract-algebra](../../abstract-algebra/syllabus.md) — the field of fractions of a domain is the case $S=R\setminus\{0\}$, and $R_\mathfrak{p}$ is its refinement to one prime. Geometry supplies the *why*: a local ring is a point wearing its neighborhood.
