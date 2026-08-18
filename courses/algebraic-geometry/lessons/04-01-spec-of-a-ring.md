# Algebraic Geometry · Lesson 4.1: $\operatorname{Spec}$ of a ring

> ⏱ ~15 min · Module 4: Schemes & a first look at curves · Builds on: [Lesson 1.5](01-05-nullstellensatz.md) (points ↔ maximal ideals), [Lesson 1.4](01-04-zariski-topology-irreducibility.md) (Zariski topology, prime ↔ irreducible), [Lesson 3.6](03-06-structure-sheaf.md) (the structure sheaf) · Unlocks: [Lesson 4.2](04-02-structure-sheaf-gluing-schemes.md) (gluing affine spectra into schemes)

## Why this matters

For all of Modules 1–3 a "point" meant a maximal ideal, and geometry meant working over an algebraically closed field $k=\bar k$ so that the Nullstellensatz could hand you those points. That crutch has two costs. Over $\mathbb{Q}$ or $\mathbb{Z}$ — the home of number theory — there is no Nullstellensatz and the maximal-ideals-only picture is too thin. And even over $\bar k$, the ring $k[x]/(x^2)$ and the field $k$ both have *one* maximal ideal, yet they are visibly different rings: one remembers a doubled point, the other doesn't. Grothendieck's fix is radical and simple: promote **every** prime ideal to a point. The resulting space $\operatorname{Spec} R$ works over any commutative ring, sees multiplicity, and gives varieties a "generic point" that classical geometry could only gesture at. This is the object every scheme is glued from.

## The idea

Take a ring $R$ and declare its **points to be all of its prime ideals** — not just the maximal ones. Two things immediately look strange, and both turn out to be features:

- **Non-maximal primes are "fat" points.** In [Lesson 1.5](01-05-nullstellensatz.md) the zero ideal $(0)\subseteq k[x]$ was prime (the ring is a domain) but corresponded to *all* of $\mathbb{A}^1$, not a single point — we shrugged it off. Now we take it seriously: $(0)$ is a genuine point of $\operatorname{Spec} k[x]$, a **generic point**, and its topological *closure* is the entire line. A non-maximal prime is a point that "spreads out" to fill a whole irreducible subvariety. The prime says which irreducible piece; the closure draws the piece.
- **Nilpotents survive.** A variety only ever saw the set of solutions, so $V(x)$ and $V(x^2)$ were the same (Lesson 1.5's warning). But $\operatorname{Spec}$ is built from the *ring*, and $k[x]/(x^2)$ still carries the nonzero nilpotent $\bar x$ with $\bar x^2=0$. The space is one point; the ring remembers it's a *double* point. Schemes see multiplicity — that's the whole reason for the upgrade.

The topology is the same Zariski recipe as [Lesson 1.4](01-04-zariski-topology-irreducibility.md), now with primes as the underlying set: closed sets are "primes containing a given ideal," and the correspondence *bigger ideal → smaller closed set* runs exactly as before.

## The formal version

Let $R$ be a commutative ring with $1$. Write $\operatorname{Spec} R$ for its **prime spectrum**: the set of all prime ideals $\mathfrak{p}\subsetneq R$ (proper, with $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$).

*In words:* the points of $\operatorname{Spec} R$ are the prime ideals of $R$ — maximal ones and non-maximal ones alike.

**The Zariski topology.** For an ideal $I\subseteq R$ define the **closed set**
$$V(I)=\{\mathfrak p\in\operatorname{Spec} R : \mathfrak p\supseteq I\}.$$
These are the closed sets of a topology: $V(0)=\operatorname{Spec} R$, $V(R)=\varnothing$, $\bigcap_\alpha V(I_\alpha)=V\big(\sum_\alpha I_\alpha\big)$, and $V(I)\cup V(J)=V(I\cap J)=V(IJ)$.

*In words:* a point $\mathfrak p$ is "in $V(I)$" exactly when the functions of $I$ all vanish at $\mathfrak p$ — where "$f$ vanishes at $\mathfrak p$" is *defined* to mean $f\in\mathfrak p$. Bigger $I$, more conditions, smaller closed set.

**Basic open sets.** For $f\in R$,
$$D(f)=\operatorname{Spec} R\setminus V(f)=\{\mathfrak p : f\notin\mathfrak p\}$$
is the set of points where $f$ does *not* vanish. The $D(f)$ form a basis for the topology, and $D(f)\cap D(g)=D(fg)$.

*In words:* $D(f)$ is the locus "$f\neq 0$," the analogue of a distinguished open in a variety; every open set is a union of these.

**Closure and generic points.** The closure of a point is
$$\overline{\{\mathfrak p\}}=V(\mathfrak p)=\{\mathfrak q\supseteq\mathfrak p\}.$$
So $\mathfrak p$ is a **closed point** iff $\mathfrak p$ is maximal, and a minimal prime is a **generic point** of an irreducible component: its closure is a whole irreducible closed set $V(\mathfrak p)$, on which it is dense.

*In words:* the smaller (closer to $(0)$) a prime is, the more it spreads out; maximal primes are the honest dots, and $(0)$ in a domain is a single point whose closure is everything.

**Functoriality.** A ring homomorphism $\varphi:R\to S$ induces a *continuous* map in the opposite direction,
$$\operatorname{Spec}\varphi:\operatorname{Spec} S\to\operatorname{Spec} R,\qquad \mathfrak q\mapsto\varphi^{-1}(\mathfrak q),$$
because the preimage of a prime is prime. This makes $\operatorname{Spec}:\mathbf{CRing}^{\mathrm{op}}\to\mathbf{Top}$ a (contravariant) functor.

*In words:* ring maps pull primes back, so an algebra map $R\to S$ becomes a geometric map $\operatorname{Spec} S\to\operatorname{Spec} R$ — algebra and geometry are the same data with the arrows reversed, exactly the dictionary from Module 1 made functorial.

## Picture

![Spec k[x] drawn as a horizontal line of closed points (x), (x-1), (x-2), (x-3) with a translucent band behind them representing the dense generic point (0)](assets/04-01-fig1.svg)

The closed points $(x-a)$ are the honest dots — one per element $a\in k$, each its own closure. Behind all of them sits the generic point $(0)$, drawn as a smear rather than a dot precisely because it isn't localized anywhere: $\overline{\{(0)\}}=V(0)=\operatorname{Spec} k[x]$, so it is dense. You cannot separate $(0)$ from any closed point by open sets — every nonempty open contains it.

## Worked examples

**Example 1 ($\operatorname{Spec} k[x]$, $k=\bar k$).** Since $k[x]$ is a PID, its primes are $(0)$ and the ideals $(p)$ for $p$ irreducible. Over $\bar k$ the irreducibles are the linear $x-a$, so
$$\operatorname{Spec} k[x]=\{(0)\}\ \cup\ \{(x-a):a\in k\}.$$
The $(x-a)$ are maximal, hence **closed points** — and by [Lesson 1.5](01-05-nullstellensatz.md) they are exactly the points $a$ of $\mathbb{A}^1$. The extra point $(0)$ is the **generic point**: $\overline{\{(0)\}}=V(0)=$ everything, so it is dense. Note $D(x)=\operatorname{Spec} k[x]\setminus\{(x)\}$ — remove the single point where $x$ vanishes — and it is open because its complement $V(x)=\{(x)\}$ is closed.

**Example 2 ($\operatorname{Spec}\mathbb{Z}$, the arithmetic line).** $\mathbb{Z}$ is also a PID; its primes are $(0)$ and $(p)$ for each rational prime $p=2,3,5,7,\dots$. So
$$\operatorname{Spec}\mathbb{Z}=\{(0)\}\ \cup\ \{(2),(3),(5),(7),\dots\},$$
structurally a *line*: one closed point per prime number, plus a generic point $(0)$ dense over all of it. This is the founding picture of arithmetic geometry — the integers behave like functions on a curve, primes like the points where they vanish, and $\operatorname{Spec}\mathbb{Z}$ is the "curve." A ring map like $\mathbb{Z}\hookrightarrow\mathbb{Z}[i]$ induces $\operatorname{Spec}\mathbb{Z}[i]\to\operatorname{Spec}\mathbb{Z}$, and the fiber over $(p)$ records how $p$ factors in the Gaussian integers — the geometry of number theory. This is the promised bridge to [number-theory](../../number-theory/syllabus.md).

**Example 3 (nilpotents: $\operatorname{Spec} k[x]/(x^2)$).** Let $R=k[x]/(x^2)$, a $2$-dimensional $k$-vector space with basis $1,\bar x$ and $\bar x^2=0$. A prime $\mathfrak p$ must contain the nilpotent $\bar x$ (if $\bar x\notin\mathfrak p$ then $\bar x\cdot\bar x=0\in\mathfrak p$ forces $\bar x\in\mathfrak p$, contradiction), and $(\bar x)$ is already maximal since $R/(\bar x)\cong k$. So
$$\operatorname{Spec} k[x]/(x^2)=\{(\bar x)\}$$
is a **single point** — set-theoretically identical to $\operatorname{Spec} k=\{(0)\}$. Yet the rings differ: $R$ has the nonzero nilpotent $\bar x$, and this "fuzz" is exactly the tangent-direction data of a *doubled* point (compare the double line of a cusp's tangent cone, [Lesson 3.4](03-04-smoothness-singularities-tangent-cone.md)). A variety could never tell $k[x]/(x^2)$ from $k$; a scheme reads the multiplicity straight off the ring. The set of points forgets nilpotents; the scheme does not.

## Watch out

- You might think "point = maximal ideal," as in Module 1 — but in $\operatorname{Spec} R$ a point is *any* prime. The maximal ones are the closed points; the rest are generic points with fatter closures. The single most common beginner slip is silently dropping the non-maximal primes.
- You might think $\operatorname{Spec}$ is covariant — but a ring map $R\to S$ gives $\operatorname{Spec} S\to\operatorname{Spec} R$, arrows **reversed**. $\operatorname{Spec}$ is contravariant; you pull primes *back* along $\varphi$ via $\mathfrak q\mapsto\varphi^{-1}(\mathfrak q)$. (Pushing forward, $\varphi(\mathfrak q)$, need not even be an ideal.)
- You might think "vanishes at $\mathfrak p$" means numerical evaluation — but $f\in R$ has no numerical value at a prime; "$f$ vanishes at $\mathfrak p$" is *defined* as $f\in\mathfrak p$. (Precisely: $f$ vanishes at $\mathfrak p$ iff its image in the residue field $\operatorname{Frac}(R/\mathfrak p)$ is $0$, which is iff $f\in\mathfrak p$.)
- You might think $\operatorname{Spec} R$ is Hausdorff like a manifold — it is almost never. A generic point sits in *every* nonempty open set, so it cannot be separated from anything. $\operatorname{Spec} R$ is $T_0$, not $T_2$.

## One-liner

> Make every prime a point: maximal primes are the visible dots, non-maximal primes are generic points whose closures are whole subvarieties, and nilpotents in the ring let the space remember multiplicity a variety would forget.

## Problems

**P1 (🟢)** In $\operatorname{Spec}\mathbb{Z}$: (a) list all points in the closed set $V(6)$. (b) Describe the basic open $D(6)$. (c) Is the point $(0)$ in $D(6)$? Is it in $V(6)$? What is $\overline{\{(0)\}}$?

**P2 (🟡)** Let $R$ be a ring and $f\in R$. Prove that the basic open $D(f)$ is empty **iff** $f$ is nilpotent. (Hint: a prime contains $f$ iff it contains $f^n$; recall the nilradical is the intersection of all primes — you may cite this.)

**P3 (🔴, optional)** Let $\varphi:R\to S$ be a ring homomorphism and $\varphi^*=\operatorname{Spec}\varphi:\operatorname{Spec} S\to\operatorname{Spec} R$, $\mathfrak q\mapsto\varphi^{-1}(\mathfrak q)$. (a) Show $\varphi^{-1}(\mathfrak q)$ is prime, so $\varphi^*$ is well-defined. (b) Show $(\varphi^*)^{-1}(V(I))=V(\varphi(I)S)$ for any ideal $I\subseteq R$, hence $\varphi^*$ is continuous. (c) For the quotient map $\varphi:R\twoheadrightarrow R/I$, show $\varphi^*$ is a homeomorphism of $\operatorname{Spec}(R/I)$ onto the closed set $V(I)\subseteq\operatorname{Spec} R$.

<details>
<summary>Solutions</summary>

**P1** (a) $V(6)=\{\mathfrak p\supseteq(6)\}$. A prime $(p)$ contains $6=2\cdot 3$ iff $p\mid 6$, i.e. $p\in\{2,3\}$; and $(0)\not\supseteq(6)$ since $6\notin(0)$. So $V(6)=\{(2),(3)\}$ — the two closed points where $6$ "vanishes." (This matches $V(6)=V(2)\cup V(3)$, since $(6)=(2)\cap(3)$.)

(b) $D(6)=\operatorname{Spec}\mathbb{Z}\setminus V(6)=\{(0)\}\cup\{(p):p\neq 2,3\}$ — every prime except $2$ and $3$, together with the generic point.

(c) $(0)\in D(6)$ because $6\notin(0)$; equivalently $(0)\notin V(6)$. And $\overline{\{(0)\}}=V(0)=\{\mathfrak p\supseteq(0)\}=\operatorname{Spec}\mathbb{Z}$ — the whole spectrum, so $(0)$ is the dense generic point. (Indeed it lies in $D(6)$, as it lies in every nonempty basic open.)

**P2** ($\Rightarrow$) Suppose $D(f)=\varnothing$: no prime avoids $f$, i.e. $f\in\mathfrak p$ for *every* prime $\mathfrak p$. Hence $f\in\bigcap_{\mathfrak p}\mathfrak p=\operatorname{nil}(R)$, the nilradical (the intersection of all prime ideals equals the set of nilpotents — the cited fact). So $f$ is nilpotent, $f^n=0$ for some $n$.

($\Leftarrow$) Suppose $f^n=0$ for some $n\ge 1$. For any prime $\mathfrak p$, $f^n=0\in\mathfrak p$, and primeness gives $f\in\mathfrak p$ (induct: $f\cdot f^{n-1}\in\mathfrak p\Rightarrow f\in\mathfrak p$ or $f^{n-1}\in\mathfrak p$, then recurse). So every prime contains $f$, meaning no prime lies in $D(f)$: $D(f)=\varnothing$. $\blacksquare$

*Reading:* $D(f)$ is empty exactly when $f$ is "invisible" — nilpotent — which is why nilpotents contribute nowhere to the *space* yet still live in the ring. That's Example 3's phenomenon stated topologically.

**P3** (a) Let $\mathfrak q\subseteq S$ be prime and $\mathfrak p=\varphi^{-1}(\mathfrak q)$. It is proper: $1\notin\mathfrak q$, and $\varphi(1)=1$, so $1\notin\mathfrak p$. If $ab\in\mathfrak p$ then $\varphi(a)\varphi(b)=\varphi(ab)\in\mathfrak q$; primeness of $\mathfrak q$ gives $\varphi(a)\in\mathfrak q$ or $\varphi(b)\in\mathfrak q$, i.e. $a\in\mathfrak p$ or $b\in\mathfrak p$. So $\mathfrak p$ is prime.

(b) For $\mathfrak q\in\operatorname{Spec} S$: $\varphi^*(\mathfrak q)=\varphi^{-1}(\mathfrak q)\in V(I)$ iff $I\subseteq\varphi^{-1}(\mathfrak q)$ iff $\varphi(I)\subseteq\mathfrak q$ iff the generated ideal $\varphi(I)S\subseteq\mathfrak q$ (as $\mathfrak q$ is an ideal) iff $\mathfrak q\in V(\varphi(I)S)$. Thus $(\varphi^*)^{-1}(V(I))=V(\varphi(I)S)$, a closed set — so preimages of closed sets are closed and $\varphi^*$ is continuous.

(c) For the quotient $\varphi:R\twoheadrightarrow R/I$, primes of $R/I$ correspond bijectively (order-preservingly) to primes of $R$ containing $I$ via $\mathfrak q\mapsto\varphi^{-1}(\mathfrak q)$ — the standard correspondence theorem for ideals under a surjection. The image is exactly $\{\mathfrak p\supseteq I\}=V(I)$, giving a bijection $\operatorname{Spec}(R/I)\to V(I)$. It is continuous by (b); its inverse $\mathfrak p\mapsto\mathfrak p/I$ is continuous because closed sets $V(\bar J)\subseteq\operatorname{Spec}(R/I)$ pull back to $V(J)\cap V(I)$ for the preimage $J\supseteq I$ of $\bar J$. Hence $\varphi^*$ is a homeomorphism onto the closed subspace $V(I)$. $\blacksquare$

*Reading:* passing to $R/I$ geometrically *is* cutting out the closed subscheme $V(I)$ — the algebra of adding relations equals the geometry of restricting to a subvariety, functorially.

</details>

## Flashback

**From [Lesson 1.5](01-05-nullstellensatz.md) (Nullstellensatz / points ↔ maximal ideals / $I(V(J))=\sqrt J$):** Work in $R=\mathbb{C}[x,y]$. (a) Using the strong Nullstellensatz, compute $I(V(J))$ for $J=(x^2,xy)$ and decide whether $J$ is radical. (b) The Nullstellensatz identifies the *classical* points of $\mathbb{A}^2$ with the **maximal** ideals of $R$. In the language of this lesson, name one prime of $\operatorname{Spec} R$ that is **not** a classical point, and describe its closure.

<details>
<summary>Solution</summary>

(a) A point $(a,b)\in V(J)$ needs $a^2=0$ and $ab=0$; the first forces $a=0$, and then $ab=0$ holds for all $b$. So $V(J)=\{(0,b):b\in\mathbb{C}\}=V(x)$, the $y$-axis. By the strong Nullstellensatz $I(V(J))=\sqrt J=I(y\text{-axis})=(x)$ (a polynomial vanishes on the whole $y$-axis iff it is divisible by $x$). Directly: $x^2\in J\Rightarrow x\in\sqrt J$, so $(x)\subseteq\sqrt J\subseteq I(V(J))=(x)$, giving $\sqrt J=(x)$. Since $x\in\sqrt J$ but $x\notin J$ (every element of $J$ has no pure-$x$ linear term), $J\neq\sqrt J$: **$J$ is not radical**. The gap is exactly the nilpotent-flavored fuzz this lesson keeps.

(b) The ideal $(x)\subseteq\mathbb{C}[x,y]$ is prime — $\mathbb{C}[x,y]/(x)\cong\mathbb{C}[y]$ is a domain — but **not maximal**, so it is a non-classical point of $\operatorname{Spec} R$: the generic point of the $y$-axis. Its closure is $\overline{\{(x)\}}=V(x)=\{\mathfrak p\supseteq(x)\}$, which contains the generic point $(x)$ itself together with every maximal ideal $(x,\,y-b)=\mathfrak m_{(0,b)}$ on the $y$-axis. So a single new point $(x)$ carries the entire irreducible axis as its closure — precisely the generic-point idea, now over $\mathbb{C}[x,y]$ instead of a PID. (The zero ideal $(0)$ is another such prime, generic for all of $\mathbb{A}^2$.)

</details>

## Connections

- **Backward:** this is the promised sequel to [Lesson 1.5](01-05-nullstellensatz.md). There, over $\bar k$, points $\leftrightarrow$ maximal ideals; here we drop the $\bar k$ crutch and take *all* primes, so the non-maximal primes (which 1.5 flagged as "irreducible but not a point") finally become honest points with irreducible closures. The Zariski topology is the same construction as [Lesson 1.4](01-04-zariski-topology-irreducibility.md), and prime ↔ irreducible reappears as "prime ↔ irreducible closed subset."
- **Forward:** [Lesson 4.2](04-02-structure-sheaf-gluing-schemes.md) equips $\operatorname{Spec} R$ with a structure sheaf $\mathcal{O}_{\operatorname{Spec} R}$ (sections on $D(f)$ are the localization $R_f$), upgrading it to a *locally ringed space* — the affine scheme — and then glues affine spectra into general schemes, building $\mathbb{P}^1$ from two charts. This lesson is the underlying topological space of that story; [Lesson 3.6](03-06-structure-sheaf.md)'s structure sheaf on a variety is the classical shadow.
- **Sideways ([number-theory](../../number-theory/syllabus.md)):** $\operatorname{Spec}\mathbb{Z}$ is *the* founding object of arithmetic geometry — the integers as functions on a curve, primes as its points, and maps like $\operatorname{Spec}\mathbb{Z}[i]\to\operatorname{Spec}\mathbb{Z}$ encoding how primes split. Curves and Riemann–Roch (Lessons 4.3–4.5) run in parallel over number fields there.
- **Sideways ([abstract-algebra](../../abstract-algebra/syllabus.md)):** the prime spectrum, the nilradical as the intersection of all primes (P2), the localization $R_f$, and the correspondence theorem under a quotient (P3) are pure commutative algebra; $\operatorname{Spec}$ is the functor that turns that algebra into geometry, contravariantly.
