# Algebraic Geometry — Syllabus

> Mathematics · Tier 2 · ~22 lessons · Prereqs: [abstract-algebra](../abstract-algebra/syllabus.md), [topology](../topology/syllabus.md) · Roadmap id: `algebraic-geometry`

## Goal

Learn to read geometry off of algebra and algebra off of geometry — the central reflex of the whole subject. A system of polynomial equations carves out a shape (a variety); the polynomials that vanish on that shape form an ideal; and the Nullstellensatz makes the translation between the two into an exact dictionary. By the end you should reflexively pass between a variety, its coordinate ring, its function field, and its local rings, and read dimension, smoothness, and singular points directly from that data. The course runs the classical theory of varieties over an algebraically closed field in full — affine and projective, the Zariski topology, morphisms, dimension, tangent spaces and smoothness — then opens the modern door: sheaves, the spectrum of a ring, schemes by gluing, and a genuine first taste of divisors, line bundles, and Riemann–Roch on curves.

Deliberately scoped: this leans on `abstract-algebra` for rings, ideals, and quotients (we develop the extra commutative algebra — Noetherian rings, radicals, localization, Krull dimension — as needed) and on `topology` for the open-set language the Zariski topology inhabits. We stop short of sheaf **cohomology** at any depth and the full scheme-theoretic machinery of Hartshorne III and beyond (quasi-coherent sheaves, cohomology, the general Riemann–Roch/Serre-duality apparatus). Schemes appear as an honest, bounded introduction — enough to see why $\operatorname{Spec}$ is the right idea — not a second full course.

## Dangerous Checklist

When you finish, you can:

- [ ] Translate a system of polynomial equations into a variety and back into its ideal, and say precisely when the dictionary is exact
- [ ] Apply the Nullstellensatz to decide when two ideals cut out the same variety, and compute the radical that closes the gap
- [ ] Prove a ring Noetherian via the Hilbert Basis Theorem and use the ascending-chain condition in a decomposition argument
- [ ] Put the Zariski topology on a variety, find its closed sets, and decompose a variety into irreducible components
- [ ] Compute a coordinate ring and function field, and read irreducibility off primeness of the ideal
- [ ] Write down polynomial, rational, and regular maps, and decide whether a given map is a morphism of varieties
- [ ] Move a variety into projective space, take its projective closure, and work with homogeneous coordinates and the homogeneous Nullstellensatz
- [ ] Compute the dimension of a variety three equivalent ways (chains, transcendence degree, local ring) and check they agree
- [ ] Compute the tangent space at a point and classify it as smooth or singular, distinguishing a node from a cusp via the tangent cone
- [ ] Describe the points and topology of $\operatorname{Spec} R$, evaluate its structure sheaf on basic opens, and glue two affine pieces into a scheme
- [ ] Compute a divisor's degree on a curve, form the space $L(D)$, and use Riemann–Roch to find $\dim L(D)$ with an explicit basis

## Modules

### Module 1: Affine varieties & the Nullstellensatz

Build the algebra–geometry dictionary from the ground up: the commutative algebra it needs, the two-way map between ideals and varieties, the Zariski topology, and the theorem — Hilbert's Nullstellensatz — that makes the correspondence precise.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The affine dictionary: from equations to shapes | See how a set of polynomials defines a variety $V(S)$ and how a shape defines an ideal $I(X)$ | affine space $\mathbb{A}^n$, $V(S)$, $I(X)$, the $V$–$I$ pairing |
| 1.2 | Ideals, radicals & when the dictionary is exact | Compute radicals and see why $I(V(J))$ recovers $\sqrt J$, not $J$ | ideals, radical $\sqrt J$, radical ideals, order-reversing correspondence |
| 1.3 | Noetherian rings & the Hilbert Basis Theorem | Prove every ideal in $k[x_1,\dots,x_n]$ is finitely generated, so every variety is cut out by finitely many equations | ascending chain condition, Noetherian rings, Hilbert Basis Theorem |
| 1.4 | The Zariski topology & irreducibility | Topologize a variety by its subvarieties and split it into irreducible pieces | Zariski-closed sets, irreducible spaces, irreducible components, prime ↔ irreducible |
| 1.5 | Hilbert's Nullstellensatz | State and use both forms; nail down the bijection {radical ideals} ↔ {varieties} over $\bar k$ | weak & strong Nullstellensatz, maximal ideals ↔ points, algebraically closed $k$ |
| 1.6 | The coordinate ring & polynomial maps | Attach the ring $k[X]=k[x]/I(X)$ to a variety and use it to encode maps between varieties | coordinate ring, regular functions, polynomial maps, pullback of functions |

**Boss problem 1:** Let $I=(y-x^2,\,z-x^3)\subseteq k[x,y,z]$ with $k$ algebraically closed, and let $X=V(I)$ be the twisted cubic. (a) Show $X$ is exactly the image of $t\mapsto(t,t^2,t^3)$. (b) Prove the coordinate-ring map $k[x,y,z]/I\to k[t]$, $x\mapsto t$, $y\mapsto t^2$, $z\mapsto t^3$, is a well-defined isomorphism. (c) Conclude $I$ is prime, hence $X$ is irreducible, and deduce $I(V(I))=I$ directly from the Nullstellensatz.

### Module 2: Projective varieties & morphisms

Complete affine space to projective space so that "parallel lines meet" and closures behave, then develop the maps: rational functions, regular and rational maps, and the classical embeddings that let varieties sit inside projective space.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Rational functions & the function field | Build the field of fractions of a variety and localize to see functions near a point | function field $k(X)$, local ring at a point, domain of definition |
| 2.2 | Regular & rational maps of affine varieties | Define morphisms via pullback and see when a rational map extends to a genuine morphism | regular maps, rational maps, dominant maps, birational equivalence |
| 2.3 | Projective space $\mathbb{P}^n$ | Construct $\mathbb{P}^n$ as lines through the origin and cover it by affine charts | homogeneous coordinates, affine charts, points at infinity |
| 2.4 | Projective varieties & the homogeneous Nullstellensatz | Cut out varieties with homogeneous ideals and take projective closures | homogeneous ideals, projective $V$/$I$, irrelevant ideal, projective closure |
| 2.5 | Morphisms of projective varieties | Build maps in projective coordinates; meet the Veronese and Segre embeddings | regular maps on $\mathbb{P}^n$, Veronese map, Segre embedding, products |

**Boss problem 2:** Consider the Veronese map $\nu:\mathbb{P}^1\to\mathbb{P}^2$, $[s:t]\mapsto[s^2:st:t^2]$. (a) Show the image lies in the conic $C=V(xz-y^2)$ and equals it. (b) Give explicit formulas for the inverse on each of the charts $x\neq 0$ and $z\neq 0$, and check they agree on the overlap. (c) Conclude $\nu$ is an isomorphism of $\mathbb{P}^1$ onto $C$ — so a smooth plane conic is "just" a projective line.

### Module 3: Local structure — dimension, smoothness & sheaves

Zoom in. Dimension, tangent spaces, and the smooth/singular distinction are all local, all readable from the coordinate and local rings — and organizing that local data over the whole variety is exactly what a sheaf does.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Dimension of a variety | Define dimension three ways and prove they agree on a variety | Krull dimension, chains of irreducibles, transcendence degree of $k(X)$ |
| 3.2 | Local rings & localization | Isolate the behavior of functions near one point by inverting what doesn't vanish there | localization, local ring $\mathcal{O}_{X,p}$, maximal ideal $\mathfrak{m}_p$ |
| 3.3 | The tangent space | Compute the Zariski tangent space from partial derivatives and from $\mathfrak{m}/\mathfrak{m}^2$ | Jacobian, Zariski tangent space, $(\mathfrak{m}/\mathfrak{m}^2)^*$ |
| 3.4 | Smoothness, singularities & the tangent cone | Test a point for smoothness and read a singularity's type off its lowest-order terms | smooth vs. singular points, dimension criterion, tangent cone, node vs. cusp |
| 3.5 | Sheaves: a first treatment | Package "data assigned to open sets that glues" into the definition every scheme rests on | presheaves, sheaves, stalks, restriction, the gluing axiom |
| 3.6 | The structure sheaf of a variety | Bundle the local rings of a variety into its sheaf of regular functions $\mathcal{O}_X$ | structure sheaf, sections over opens, ringed space |

**Boss problem 3:** In $\mathbb{A}^2$ over $k=\bar k$, compare the nodal cubic $C:\,y^2=x^2(x+1)$ and the cuspidal cubic $C':\,y^2=x^3$ at the origin. (a) Show each is irreducible and $1$-dimensional. (b) Compute the Zariski tangent space at $0$ for each and show both origins are singular (tangent-space dimension $2>1$). (c) Compute the tangent cone at $0$ of each — two distinct lines vs. a double line — and use it to name one a node and the other a cusp.

### Module 4: Schemes & a first look at curves

Open the modern door. Replace "variety over $\bar k$" with $\operatorname{Spec}$ of an arbitrary ring, glue affine pieces into schemes, then return to the most concrete case — curves — for divisors, line bundles, and the Riemann–Roch theorem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | $\operatorname{Spec}$ of a ring | Take **all** primes as points and see why generic points and nilpotents earn their place | prime spectrum, points as primes, Zariski topology on $\operatorname{Spec} R$, generic points |
| 4.2 | The structure sheaf & gluing schemes | Put $\mathcal{O}_{\operatorname{Spec} R}$ on the spectrum and glue affine spectra into a scheme | structure sheaf on basic opens, locally ringed space, gluing, $\mathbb{P}^1$ as two charts |
| 4.3 | Divisors on a curve | Track zeros and poles of a rational function as a formal sum of points | smooth curves, Weil divisors, degree, principal divisors, linear equivalence |
| 4.4 | Line bundles & the Picard group | Trade divisors for line bundles and see the space $L(D)$ of sections | invertible sheaves, $\operatorname{Pic}$, divisor–line-bundle correspondence, $L(D)$ |
| 4.5 | Riemann–Roch for curves | Use the genus to count sections: $\ell(D)-\ell(K-D)=\deg D+1-g$ | genus, canonical divisor $K$, Riemann–Roch, computing $\ell(D)$ |

**Boss problem 4:** Work on $\mathbb{P}^1$ (genus $g=0$) with affine coordinate $t$, and let $D=2[0]+[\infty]$. (a) State the degree of $D$ and of the canonical divisor $K$, and use Riemann–Roch to compute $\ell(D)=\dim L(D)$. (b) Show $\ell(K-D)=0$ from a degree argument, so the answer needs no genus-$1$ correction. (c) Write down an explicit basis of $L(D)$ as rational functions in $t$ and verify its size matches your Riemann–Roch count.

## Sources of truth

- Hartshorne, *Algebraic Geometry*, Chapter I (varieties) and the opening of Chapter II (sheaves, schemes) — the rigor level and notation this course tracks.
- Reid, *Undergraduate Algebraic Geometry*, and Fulton, *Algebraic Curves* — for the concrete, example-first treatment of varieties and curves.
- Shafarevich, *Basic Algebraic Geometry 1* — for the classical geometry of projective varieties and dimension.
- Atiyah–Macdonald, *Introduction to Commutative Algebra* — the silent reference for radicals, Noetherian rings, localization, and Krull dimension.
