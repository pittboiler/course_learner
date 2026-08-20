# Category Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Category theory has one move: **stop asking what an object is, ask how it maps.**
Everything below is that move applied at four scales — arrows and objects (Module
1), objects pinned down by their whole web of maps (Module 2), whole diagrams
collapsed into one universal object (Module 3), and adjunctions folded back on
themselves into monads (Module 4). Two tables do most of the mid-problem work:
[Dual pairs](#dual-pairs-at-a-glance), which lets you read any definition
backwards, and [What each construction *is*](#what-each-construction-is-in-set-grp-top-vect),
which turns an abstract universal property into a concrete object you can compute
with.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathcal{C}$, $\mathcal{D}$, $\mathcal{J}$ | categories; $\mathcal{J}$ is reserved for a small *shape* category | [1.1](lessons/01-01-what-is-a-category.md) |
| $f : A \to B$ | an arrow (morphism) with source $A$, target $B$ — not necessarily a function | [1.1](lessons/01-01-what-is-a-category.md) |
| $g \circ f$ | "do $f$ **first**, then $g$" — defined only when target of $f$ = source of $g$ | [1.1](lessons/01-01-what-is-a-category.md) |
| $\operatorname{id}_A$ | the do-nothing arrow at $A$ | [1.1](lessons/01-01-what-is-a-category.md) |
| $\operatorname{Hom}_{\mathcal{C}}(A,B)$, $\mathcal{C}(A,B)$ | the **set** of all arrows $A \to B$; may be empty | [1.1](lessons/01-01-what-is-a-category.md) |
| $\operatorname{ob}(\mathcal{C})$ | the collection of objects | [1.1](lessons/01-01-what-is-a-category.md) |
| $\mathbf{Set}$, $\mathbf{Grp}$, $\mathbf{Ab}$, $\mathbf{Mon}$, $\mathbf{Ring}$, $\mathbf{Vect}_k$, $\mathbf{Top}$ | the standard big categories (objects + structure-preserving maps) | [1.2](lessons/01-02-categories-everywhere.md) |
| $\mathcal{C}^{\mathrm{op}}$ | the opposite category — same objects, every arrow reversed | [1.2](lessons/01-02-categories-everywhere.md) |
| $\mathbf{B}M$, $\mathbf{B}G$ | a monoid / group as a **one-object** category; its elements are the arrows | [1.2](lessons/01-02-categories-everywhere.md) |
| $A \cong B$ | isomorphic — joined by an arrow with a two-sided inverse | [1.3](lessons/01-03-special-arrows-special-objects.md) |
| $A \hookrightarrow B$, $A \twoheadrightarrow B$ | a monomorphism / an epimorphism | [1.3](lessons/01-03-special-arrows-special-objects.md) |
| $0$, $1$ | initial object (unique arrow **out** to each) / terminal object (unique arrow **in** from each) | [1.3](lessons/01-03-special-arrows-special-objects.md) |
| $!$ | the unique arrow a universal property forces | [1.3](lessons/01-03-special-arrows-special-objects.md) |
| $F : \mathcal{C} \to \mathcal{D}$, $FA$, $Ff$ | a functor and its action on an object / on an arrow | [1.4](lessons/01-04-functors.md) |
| $\operatorname{Hom}(A,-)$, $\operatorname{Hom}(-,A)$ | covariant hom-functor (post-compose) / contravariant one (pre-compose) | [1.4](lessons/01-04-functors.md) |
| $\alpha : F \Rightarrow G$, $\alpha_A$ | a natural transformation and its component at $A$ | [1.5](lessons/01-05-natural-transformations.md) |
| $[\mathcal{C},\mathcal{D}]$ | the functor category: functors as objects, natural transformations as arrows | [1.5](lessons/01-05-natural-transformations.md) |
| $\langle f,g\rangle$, $[f,g]$ | the mediating map **into** a product / **out of** a coproduct | [2.1](lessons/02-01-universal-properties.md), [3.1](lessons/03-01-products-coproducts.md) |
| $u \in F(A)$ | the universal element of a representation | [2.2](lessons/02-02-representable-functors.md) |
| $\operatorname{Nat}(F,G)$ | the set of natural transformations $F \Rightarrow G$ | [2.3](lessons/02-03-yoneda-lemma.md) |
| $\widehat{u}$ | the natural transformation Yoneda builds from $u$: $\widehat{u}_X(f) = F(f)(u)$ | [2.3](lessons/02-03-yoneda-lemma.md) |
| $[\mathcal{C}^{\mathrm{op}},\mathbf{Set}]$ | presheaves on $\mathcal{C}$ — the target of the Yoneda embedding | [2.3](lessons/02-03-yoneda-lemma.md) |
| $A \times B$, $\pi_1,\pi_2$ | product and its projections | [3.1](lessons/03-01-products-coproducts.md) |
| $A \sqcup B$, $\iota_1,\iota_2$ | coproduct and its injections | [3.1](lessons/03-01-products-coproducts.md) |
| $A \oplus B$, $G * H$ | direct sum (biproduct in $\mathbf{Ab}$/$\mathbf{Vect}$); free product of groups | [3.1](lessons/03-01-products-coproducts.md) |
| $\operatorname{eq}(f,g)$ | equalizer of a parallel pair — where the two maps agree | [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md) |
| $A \times_C B$, $A \sqcup_C B$ | pullback (fiber product) / pushout (gluing) | [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md) |
| $D : \mathcal{J} \to \mathcal{C}$ | a diagram of shape $\mathcal{J}$ — a functor from the shape category | [3.3](lessons/03-03-limits-colimits.md) |
| $\varprojlim D$, $\varinjlim D$ | limit (terminal cone) / colimit (initial cocone) | [3.3](lessons/03-03-limits-colimits.md) |
| $F \dashv U$ | "$F$ is **left** adjoint to $U$" — $F$ sits on the left inside $\operatorname{Hom}$ | [3.4](lessons/03-04-adjoint-functors.md) |
| $\bar f$ | the transpose (adjunct) of $f$ across the adjunction bijection | [3.4](lessons/03-04-adjoint-functors.md) |
| $Y^A$ | the exponential — the object of maps $A \to Y$ | [3.4](lessons/03-04-adjoint-functors.md) |
| $\eta$, $\varepsilon$ | unit $\operatorname{id} \Rightarrow UF$ (insert generators) / counit $FU \Rightarrow \operatorname{id}$ (evaluate) | [3.5](lessons/03-05-unit-counit-triangle-identities.md) |
| $F\eta$, $\varepsilon F$, $\eta U$, $U\varepsilon$ | **whiskerings**: the functor says *where* the component is taken, not what is applied | [3.5](lessons/03-05-unit-counit-triangle-identities.md) |
| $T$, $T^2 = T\circ T$ | a monad's endofunctor and its self-composite | [4.1](lessons/04-01-monads.md) |
| $\mu : T^2\Rightarrow T$ | the monad multiplication — **flatten** a doubled context | [4.1](lessons/04-01-monads.md) |
| $T\mu$ vs. $\mu T$ | component $T(\mu_X)$ (flatten the *inner* pair) vs. $\mu_{TX}$ (flatten the *outer* pair) | [4.1](lessons/04-01-monads.md) |
| $(A,a)$, $a : TA\to A$ | a $T$-algebra and its **structure map** — a place where $T$-structure can be evaluated | [4.2](lessons/04-02-algebras-monoidal-categories.md) |
| $\mathcal{C}^{T}$, $\mathcal{C}_T$ | Eilenberg–Moore category (all algebras) / Kleisli category (free algebras) | [4.2](lessons/04-02-algebras-monoidal-categories.md) |
| $\otimes$, $I$ | the tensor bifunctor and unit object of a monoidal category | [4.2](lessons/04-02-algebras-monoidal-categories.md) |
| $\alpha_{A,B,C}$, $\lambda_A$, $\rho_A$ | associator and left/right unitors — the coherence isomorphisms | [4.2](lessons/04-02-algebras-monoidal-categories.md) |
| $m : M\otimes M\to M$, $u : I\to M$ | multiplication and unit of a **monoid object** | [4.2](lessons/04-02-algebras-monoidal-categories.md) |
| $B^A$, $\operatorname{ev}$ | exponential object and its evaluation map $B^A\times A\to B$ | [4.3](lessons/04-03-applications-higher-categories.md) |
| $\mathbf{Cat}$ | the 2-category of categories, functors, and natural transformations | [4.3](lessons/04-03-applications-higher-categories.md) |
| $\beta\bullet\alpha$ | **vertical** composite of 2-cells, $(\beta\bullet\alpha)_X = \beta_X\circ\alpha_X$ | [4.3](lessons/04-03-applications-higher-categories.md) |

## Definitions

### Category

A typed world of composable processes: dots, arrows between dots, a law for
stringing arrows into paths, and a do-nothing loop at each dot.

Objects $\operatorname{ob}(\mathcal{C})$; for each pair $A,B$ a hom-set
$\operatorname{Hom}(A,B)$; identities $\operatorname{id}_A$; composition
$\circ : \operatorname{Hom}(B,C)\times\operatorname{Hom}(A,B)\to\operatorname{Hom}(A,C)$, subject to

$$(h\circ g)\circ f = h\circ(g\circ f), \qquad f\circ\operatorname{id}_A = f = \operatorname{id}_B\circ f.$$

*Introduced:* [1.1](lessons/01-01-what-is-a-category.md)

### Small and large

Bookkeeping that keeps Russell's paradox out. $\mathcal{C}$ is **small** if its
objects and all hom-sets are honest sets; **locally small** if just the hom-sets
are. $\mathbf{Set}$ is large (its objects form a proper class); local smallness is
the only size hypothesis Yoneda needs.

*Introduced:* [1.1](lessons/01-01-what-is-a-category.md)

### Opposite category

$\mathcal{C}$ with every arrow relabeled backwards — the same objects and the same
*number* of arrows, nothing exotic.

$$\operatorname{Hom}_{\mathcal{C}^{\mathrm{op}}}(A,B) := \operatorname{Hom}_{\mathcal{C}}(B,A), \qquad g\circ^{\mathrm{op}} f := f\circ g, \qquad (\mathcal{C}^{\mathrm{op}})^{\mathrm{op}} = \mathcal{C}.$$

*Introduced:* [1.2](lessons/01-02-categories-everywhere.md)

### Duality

Reverse every arrow in a statement and swap the order of every composite; you get
its **dual**. Because $\mathcal{C}^{\mathrm{op}}$ is a genuine category, a theorem
true in every category has a dual that is also true in every category — prove one,
own two. See [Dual pairs at a glance](#dual-pairs-at-a-glance).

*Introduced:* [1.2](lessons/01-02-categories-everywhere.md)

### Thin category (poset as a category)

A category with **at most one arrow** between any ordered pair — so any two
parallel arrows are equal, and associativity and the unit laws hold vacuously.
A preorder $(P,\le)$ becomes one by putting a single arrow $x\to y$ exactly when
$x\le y$: transitivity *is* composition, reflexivity *is* the identity.

*Introduced:* [1.2](lessons/01-02-categories-everywhere.md)

### Monoid as a one-object category

Shrink to a single featureless object $\star$ and let the monoid's *elements be the
arrows*; multiplying elements is composing arrows. $\mathbf{B}M$ has
$\operatorname{Hom}(\star,\star) = M$, $g\circ f := g\cdot f$,
$\operatorname{id}_\star := e$. Monoids and one-object categories are the **same
data**.

*Introduced:* [1.2](lessons/01-02-categories-everywhere.md)

### Groupoid

A category in which **every** arrow is an isomorphism. A group is exactly a
one-object groupoid; $\mathbf{B}G$ is that case. In $\mathbf{B}M$ generally, the
isomorphisms are precisely the **units** (invertible elements) of $M$.

*Introduced:* [1.2](lessons/01-02-categories-everywhere.md)

### Isomorphism

An arrow you can undo on both sides — category theory's replacement for "equal."

$$f : A\to B \text{ is iso} \iff \exists\, g:B\to A,\quad g\circ f = \operatorname{id}_A \ \text{ and }\ f\circ g = \operatorname{id}_B.$$

The inverse is unique (sandwich argument), so $f^{-1}$ is unambiguous. Crucially,
the inverse must itself be an **arrow of $\mathcal{C}$**.

*Introduced:* [1.3](lessons/01-03-special-arrows-special-objects.md)

### Monomorphism

Left-cancellable — the arrow-only stand-in for *injective*.

$$f\circ g = f\circ h \ \Longrightarrow\ g = h \qquad \text{for all } g,h : X\to A.$$

*Introduced:* [1.3](lessons/01-03-special-arrows-special-objects.md)

### Epimorphism

Right-cancellable — the arrow-only stand-in for *surjective*, and the exact dual of
mono ($f$ is epi in $\mathcal{C}$ iff $f$ is mono in $\mathcal{C}^{\mathrm{op}}$).

$$g\circ f = h\circ f \ \Longrightarrow\ g = h \qquad \text{for all } g,h : B\to Y.$$

*Introduced:* [1.3](lessons/01-03-special-arrows-special-objects.md)

### Initial object

Maps uniquely *out* to everything: for every $A$ there is **exactly one** arrow
$0 \to A$. In a poset, the bottom element $\bot$.

*Introduced:* [1.3](lessons/01-03-special-arrows-special-objects.md)

### Terminal object

Receives a unique arrow *in* from everything: for every $A$ there is **exactly
one** arrow $A \to 1$. In a poset, the top element $\top$. An object that is both
initial and terminal is a **zero object** (e.g. the trivial group in
$\mathbf{Grp}$).

*Introduced:* [1.3](lessons/01-03-special-arrows-special-objects.md)

### Functor

A homomorphism of categories: it moves objects *and* arrows, and does not disturb
the glue.

$$F(\operatorname{id}_A) = \operatorname{id}_{FA}, \qquad F(g\circ f) = Fg\circ Ff.$$

A functor **preserves isomorphisms** (with $(Ff)^{-1} = F(f^{-1})$) — which is the
entire logic of an invariant: $FA \not\cong FB \Rightarrow A\not\cong B$.

*Introduced:* [1.4](lessons/01-04-functors.md)

### Contravariant functor

A functor that reverses arrows: $f:A\to B$ goes to $Ff : FB\to FA$, with
$F(g\circ f) = Ff\circ Fg$. Not a new axiom system — it *is* an ordinary functor
$\mathcal{C}^{\mathrm{op}}\to\mathcal{D}$.

*Introduced:* [1.4](lessons/01-04-functors.md)

### Hom-functor

Fix $A$. The covariant $\operatorname{Hom}(A,-):\mathcal{C}\to\mathbf{Set}$ sends
$B$ to the set of arrows $A\to B$ and acts on $f:B\to B'$ by **post**-composition
$\varphi\mapsto f\circ\varphi$. The contravariant $\operatorname{Hom}(-,A)$ acts by
**pre**-composition $\varphi\mapsto\varphi\circ f$. Functoriality is nothing but
associativity.

*Introduced:* [1.4](lessons/01-04-functors.md)

### Natural transformation

One arrow per object, uniform enough that it commutes with everything — the
precise, checkable meaning of "canonical, no arbitrary choices."

$$\alpha_A : FA \to GA \quad\text{for each } A, \qquad\text{with}\qquad \alpha_B\circ Ff = Gf\circ\alpha_A \ \text{ for every } f:A\to B.$$

*Introduced:* [1.5](lessons/01-05-natural-transformations.md)

### Naturality square

The single commuting square that *is* the definition above: $FA \to FB$ across the
top by $Ff$, $GA\to GB$ across the bottom by $Gf$, the components $\alpha_A$,
$\alpha_B$ as the verticals. Down-then-across = across-then-down.

*Introduced:* [1.5](lessons/01-05-natural-transformations.md)

### Natural isomorphism

A natural transformation every one of whose components is an iso; the inverse
components then automatically assemble into a natural transformation back. Written
$F\cong G$. **Isomorphic and naturally isomorphic are different claims** —
$V\cong V^*$ for finite-dimensional $V$ but not naturally, while
$V\cong V^{**}$ *is* natural.

*Introduced:* [1.5](lessons/01-05-natural-transformations.md)

### Functor category

$[\mathcal{C},\mathcal{D}]$: functors as objects, natural transformations as
arrows, composed **componentwise** $(\beta\circ\alpha)_A = \beta_A\circ\alpha_A$,
with $(\operatorname{id}_F)_A = \operatorname{id}_{FA}$.

*Introduced:* [1.5](lessons/01-05-natural-transformations.md)

### Universal property

Define an object by the maps it must admit, and insist the mediating map is
**unique**. Two flavors, and the arrow direction is the whole distinction:
**mapping-in** (terminal-flavored, limit-like) and **mapping-out**
(initial-flavored, colimit-like). Formally: a universal property is a terminal or
initial object *in a category of candidates*.

*Introduced:* [2.1](lessons/02-01-universal-properties.md)

### Unique up to unique isomorphism

The payoff theorem. If $T,T'$ are both terminal there is a unique iso $T\to T'$;
same for initial. The proof is two lines and cashes in the uniqueness clause
exactly once: $v\circ u$ and $\operatorname{id}_T$ are both arrows $T\to T$, and
terminality says there is only one.

*Introduced:* [2.1](lessons/02-01-universal-properties.md)

### Representable functor

$F:\mathcal{C}\to\mathbf{Set}$ is representable when it is secretly "maps out of a
fixed object $A$": there is a natural isomorphism

$$\alpha : \operatorname{Hom}_{\mathcal{C}}(A,-) \xrightarrow{\ \cong\ } F.$$

$A$ is the **representing object**. Contravariantly,
$G\cong\operatorname{Hom}_{\mathcal{C}}(-,A)$.

*Introduced:* [2.2](lessons/02-02-representable-functors.md)

### Universal element

The single element that generates a whole representable functor:
$u := \alpha_A(\operatorname{id}_A) \in F(A)$. Naturality then forces every
component,

$$\alpha_X(f) = (Ff)(u) \quad\text{for all } f : A\to X,$$

so: **for every $X$ and every $x\in F(X)$ there is a unique $f:A\to X$ with
$(Ff)(u) = x$.**

*Introduced:* [2.2](lessons/02-02-representable-functors.md)

### Yoneda lemma

A natural transformation out of $\operatorname{Hom}(A,-)$ is exactly one element of
$F(A)$ — namely whatever it does to $\operatorname{id}_A$.

$$\operatorname{Nat}\bigl(\operatorname{Hom}_{\mathcal{C}}(A,-),\,F\bigr)\;\cong\;F(A), \qquad \alpha\longmapsto \alpha_A(\operatorname{id}_A),$$

for $\mathcal{C}$ locally small and $F:\mathcal{C}\to\mathbf{Set}$, and the
bijection is **natural in both $A$ and $F$**. Inverse:
$u\mapsto\widehat{u}$ with $\widehat{u}_X(f) = F(f)(u)$.

*Introduced:* [2.3](lessons/02-03-yoneda-lemma.md)

### Yoneda embedding

$A\mapsto\operatorname{Hom}(-,A)$ is a **full and faithful** functor
$\mathcal{C}\hookrightarrow[\mathcal{C}^{\mathrm{op}},\mathbf{Set}]$, i.e.

$$\operatorname{Hom}_{\mathcal{C}}(A,B)\;\cong\;\operatorname{Nat}\bigl(\operatorname{Hom}(-,A),\operatorname{Hom}(-,B)\bigr).$$

An object and its web of incoming maps carry exactly the same information — no
arrows lost, none invented.

*Introduced:* [2.3](lessons/02-03-yoneda-lemma.md)

### Yoneda corollary

Objects with isomorphic webs of maps are isomorphic:

$$\operatorname{Hom}(-,A)\cong\operatorname{Hom}(-,B) \ \Longrightarrow\ A\cong B, \qquad \operatorname{Hom}(A,-)\cong\operatorname{Hom}(B,-)\ \Longrightarrow\ A\cong B.$$

This is the engine behind every "unique up to unique isomorphism" claim in the
course.

*Introduced:* [2.3](lessons/02-03-yoneda-lemma.md)

### Product

The object such that **giving a map into it is the same as giving a map to $A$ and
a map to $B$.** An object $A\times B$ with projections $\pi_1,\pi_2$ such that for
every $X$ and every $f:X\to A$, $g:X\to B$ there is a unique
$\langle f,g\rangle : X\to A\times B$ with

$$\pi_1\circ\langle f,g\rangle = f, \qquad \pi_2\circ\langle f,g\rangle = g.$$

*Introduced:* [2.1](lessons/02-01-universal-properties.md), [3.1](lessons/03-01-products-coproducts.md)

### Coproduct

The dual: **to map out of it is exactly to say where each part goes.** An object
$A\sqcup B$ with injections $\iota_1,\iota_2$ such that for every $X$ and every
$f:A\to X$, $g:B\to X$ there is a unique $[f,g] : A\sqcup B\to X$ with

$$[f,g]\circ\iota_1 = f, \qquad [f,g]\circ\iota_2 = g.$$

*Introduced:* [3.1](lessons/03-01-products-coproducts.md)

### Equalizer

The largest part of $A$ on which two parallel maps **agree** — a subobject cut out
by an equation. Given $f,g : A\to B$, an object $E$ with $e:E\to A$ satisfying
$f\circ e = g\circ e$, universal: every $t:T\to A$ with $f t = g t$ factors as
$t = e\circ u$ for a unique $u$. Equalizer arrows are always **monic**.

*Introduced:* [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Pullback (fiber product)

The product **restricted to pairs that land in the same place downstream.** Given
$f:A\to C$, $g:B\to C$, an object $A\times_C B$ with $p,q$ satisfying
$f\circ p = g\circ q$, universal among all such commuting squares. In $\mathbf{Set}$,
$\{(a,b) : f(a) = g(b)\}$ — same-colored pairs, glued fiber by fiber.

*Introduced:* [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Pushout

The dual — where a pullback *carves out*, a pushout *fuses*. Given $f:C\to A$,
$g:C\to B$, an object $A\sqcup_C B$ with $i,j$ satisfying $i\circ f = j\circ g$,
universal among such cocones: $A$ and $B$ laid side by side with the two images of
$C$ identified.

*Introduced:* [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Diagram

A wiring schematic dropped into $\mathcal{C}$: a functor $D : \mathcal{J}\to\mathcal{C}$
from a small **shape** (index) category. Functoriality is what forces the dropped-in
picture to commute the way $\mathcal{J}$ says.

*Introduced:* [3.3](lessons/03-03-limits-colimits.md)

### Cone

One object that "sees" the whole diagram consistently at once: an apex $X$ with one
leg $\lambda_j : X\to D(j)$ per slot, compatible with every diagram arrow,

$$D(u)\circ\lambda_j = \lambda_k \qquad\text{for every } u : j\to k \text{ in } \mathcal{J}.$$

A **cocone** is the dual: legs $\iota_j : D(j)\to X$ out of the diagram into a
coapex, with $\iota_k\circ D(u) = \iota_j$.

*Introduced:* [3.3](lessons/03-03-limits-colimits.md)

### Limit

The best cone — **terminal** among cones. A cone $(L,(\pi_j))$ such that every cone
$(X,(\lambda_j))$ factors as $\lambda_j = \pi_j\circ h$ for a **unique**
$h : X\to L$. Written $\varprojlim D$.

*Introduced:* [3.3](lessons/03-03-limits-colimits.md)

### Colimit

The dual — **initial** among cocones. $(C,(\iota_j))$ such that every cocone
$(X,(\mu_j))$ factors as $\mu_j = h\circ\iota_j$ for a unique $h : C\to X$.
Written $\varinjlim D$. Precisely: a colimit in $\mathcal{C}$ is a limit in
$\mathcal{C}^{\mathrm{op}}$.

*Introduced:* [3.3](lessons/03-03-limits-colimits.md)

### Complete and cocomplete

$\mathcal{C}$ is **complete** if every diagram over a *small* shape has a limit
(**finitely complete**: every finite shape); **cocomplete** dually. $\mathbf{Set}$,
$\mathbf{Grp}$, $\mathbf{Ab}$, $\mathbf{Top}$, $\mathbf{Vect}_k$ are all complete
and cocomplete.

*Introduced:* [3.3](lessons/03-03-limits-colimits.md)

### Adjunction

*Maps out of the free thing = maps into the underlying thing.* Functors
$F:\mathcal{C}\to\mathcal{D}$ and $U:\mathcal{D}\to\mathcal{C}$ satisfy $F\dashv U$
("$F$ left adjoint to $U$") when there is a bijection

$$\Phi_{X,Y} : \operatorname{Hom}_{\mathcal{D}}(FX,\,Y)\ \xrightarrow{\ \cong\ }\ \operatorname{Hom}_{\mathcal{C}}(X,\,UY)$$

**natural in $X$ and $Y$**. The image $\bar f = \Phi(f)$ is the **transpose**.
Left adjoints are unique up to natural isomorphism (a one-line Yoneda argument).

*Introduced:* [3.4](lessons/03-04-adjoint-functors.md)

### Unit and counit

The two canonical maps an adjunction hands you with no choices: $\eta$ **inserts
generators**, $\varepsilon$ **evaluates**.

$$\eta : \operatorname{id}_{\mathcal{C}}\Rightarrow UF,\ \ \eta_X : X\to UFX \qquad\qquad \varepsilon : FU\Rightarrow\operatorname{id}_{\mathcal{D}},\ \ \varepsilon_Y : FUY\to Y.$$

They come from feeding the bijection an identity:
$\eta_X = \Phi_{X,FX}(\operatorname{id}_{FX})$ and
$\varepsilon_Y = \Phi^{-1}_{UY,Y}(\operatorname{id}_{UY})$.

*Introduced:* [3.5](lessons/03-05-unit-counit-triangle-identities.md)

### Triangle identities

*Insert generators, then evaluate, and you're back where you started.*

$$(\varepsilon F)\circ(F\eta) = \operatorname{id}_F, \qquad (U\varepsilon)\circ(\eta U) = \operatorname{id}_U,$$

componentwise $\varepsilon_{FX}\circ F(\eta_X) = \operatorname{id}_{FX}$ and
$U(\varepsilon_Y)\circ\eta_{UY} = \operatorname{id}_{UY}$. These carry *exactly* as
much information as the whole natural hom-bijection.

*Introduced:* [3.5](lessons/03-05-unit-counit-triangle-identities.md)

### Monad

A **wrapper** with two moves: inject a bare value into the trivial context, and
flatten a context of contexts. A triple $(T,\eta,\mu)$ with $T:\mathcal{C}\to\mathcal{C}$
an endofunctor, $\eta:\operatorname{id}_{\mathcal{C}}\Rightarrow T$, and
$\mu:T^2\Rightarrow T$, satisfying the **monad laws**

$$\mu\circ T\mu = \mu\circ\mu T \quad(\text{associativity}), \qquad \mu\circ T\eta = \mu\circ\eta T = \operatorname{id}_T \quad(\text{unit laws}).$$

Slogan: **a monad is a monoid in the category of endofunctors** — the monoid
axioms one level up, with functor composition as the multiplication.

*Introduced:* [4.1](lessons/04-01-monads.md)

### Eilenberg–Moore algebra

An object that knows how to *consume* $T$-structure — to evaluate a formal
$T$-expression. A pair $(A, a)$ with $a : TA\to A$ (the **structure map**) making

$$a\circ\eta_A = \operatorname{id}_A \qquad\text{and}\qquad a\circ\mu_A = a\circ Ta$$

commute. A morphism of algebras $(A,a)\to(B,b)$ is $f:A\to B$ with
$f\circ a = b\circ Tf$; these form the **Eilenberg–Moore category**
$\mathcal{C}^{T}$. The **free** $T$-algebra on $X$ is $(TX,\mu_X)$ — the algebra
laws for it *are* two of the monad laws.

*Introduced:* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### Kleisli category

The "computations" view: $\mathcal{C}_T$ has the same objects as $\mathcal{C}$, but
a morphism $A\rightsquigarrow B$ is a $\mathcal{C}$-morphism $A\to TB$ — a map that
produces a $B$ wrapped in $T$-structure. Identities are the units $\eta_A$;
composition threads through $\mu$. It sits inside $\mathcal{C}^{T}$ as the full
subcategory of **free** algebras.

*Introduced:* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### Monoidal category

A category with a well-behaved "multiplication of objects" — associative and
unital *up to specified isomorphism*, not on the nose. Data: a bifunctor
$\otimes:\mathcal{C}\times\mathcal{C}\to\mathcal{C}$, a unit object $I$, and natural
isomorphisms

$$\alpha_{A,B,C} : (A\otimes B)\otimes C\xrightarrow{\ \cong\ }A\otimes(B\otimes C), \qquad \lambda_A : I\otimes A\xrightarrow{\ \cong\ }A, \qquad \rho_A : A\otimes I\xrightarrow{\ \cong\ }A,$$

subject to Mac Lane's **coherence** (pentagon and triangle) axioms, which
guarantee every reparenthesization agrees.

*Introduced:* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### Monoid object

One object *inside* a monoidal category carrying a multiplication and a unit:
$M$ with $m : M\otimes M\to M$ and $u : I\to M$ satisfying associativity
($m\circ(m\otimes\operatorname{id}) = m\circ(\operatorname{id}\otimes m)$, up to
$\alpha$) and the two unit laws (up to $\lambda,\rho$). One definition, four
familiar structures — see [Monoid object, four rooms](#monoid-object-four-rooms).

*Introduced:* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### Cartesian closed category (CCC)

A category where you can form pairs *and* function-objects, and currying is a
natural bijection. It has a terminal object $1$, all binary products, and for each
$A$ an exponential $B^A$ with evaluation
$\operatorname{ev} : B^A\times A\to B$, such that

$$\operatorname{Hom}(X\times A,\,B)\;\cong\;\operatorname{Hom}(X,\,B^A), \qquad (-\times A)\dashv(-)^A.$$

Every CCC is a model of simply-typed lambda calculus; $\mathbf{Set}$ is the
prototype.

*Introduced:* [4.3](lessons/04-03-applications-higher-categories.md)

### 2-category

A category whose hom-sets are themselves categories: **objects** (0-cells),
**1-morphisms** $f:A\to B$, and **2-morphisms** $\alpha : f\Rightarrow g$ between
*parallel* 1-morphisms, with vertical and horizontal composition satisfying an
interchange law. The leading example is $\mathbf{Cat}$: categories, functors, and
natural transformations — so the functor category $[\mathcal{C},\mathcal{D}]$ is a
hom-category of $\mathbf{Cat}$, and all of Module 1 was 2-categorical already.

*Introduced:* [4.3](lessons/04-03-applications-higher-categories.md)

## Formulas and rules

### Dual pairs at a glance

Read any row left-to-right in $\mathcal{C}$, or right-to-left in
$\mathcal{C}^{\mathrm{op}}$ — the two columns are the *same definition* with every
arrow reversed. Everything on the left is **mapping-in / terminal-flavored**;
everything on the right is **mapping-out / initial-flavored**.

| Mapping-**in** (limit side) | Mapping-**out** (colimit side) | The reversal in one line |
|---|---|---|
| **terminal object** $1$: unique arrow $A\to 1$ | **initial object** $0$: unique arrow $0\to A$ | who is the unique arrow's source |
| **monomorphism**: $fg=fh\Rightarrow g=h$ | **epimorphism**: $gf=hf\Rightarrow g=h$ | cancel $f$ off the left vs. the right |
| **product** $A\times B$, projections $\pi_i$ | **coproduct** $A\sqcup B$, injections $\iota_i$ | one map in splits into two vs. two maps out glue into one |
| mediating $\langle f,g\rangle : X\to A\times B$ | mediating $[f,g] : A\sqcup B\to X$ | where the forced arrow points |
| **equalizer** (subobject where $f=g$) | **coequalizer** (quotient forcing $f=g$) | carve out vs. collapse together |
| **pullback** $A\times_C B$ (cospan) | **pushout** $A\sqcup_C B$ (span) | shared target vs. shared source |
| **cone** over $D$, apex above | **cocone** under $D$, coapex below | legs point down vs. up |
| **limit** $\varprojlim D$ = terminal cone | **colimit** $\varinjlim D$ = initial cocone | best receiver vs. best emitter |
| **right adjoint** $U$ in $\operatorname{Hom}(X,UY)$ | **left adjoint** $F$ in $\operatorname{Hom}(FX,Y)$ | which side of $\operatorname{Hom}$ it sits on |
| **right adjoints preserve limits** (RAPL) | **left adjoints preserve colimits** | which kind of universal object survives |
| **counit** $\varepsilon : FU\Rightarrow\operatorname{id}$ (evaluate) | **unit** $\eta : \operatorname{id}\Rightarrow UF$ (insert) | which composite is compared to the identity |

Two collapses worth memorizing: **pullback over a terminal object is the product**
(the constraint goes vacuous), and **pushout over an initial object is the
coproduct**.

*From* [1.2](lessons/01-02-categories-everywhere.md), [1.3](lessons/01-03-special-arrows-special-objects.md), [3.1](lessons/03-01-products-coproducts.md), [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md), [3.3](lessons/03-03-limits-colimits.md), [3.5](lessons/03-05-unit-counit-triangle-identities.md)

### What each construction *is* in Set, Grp, Top, Vect

The abstract definition is one thing; this is the object you actually compute with.

| Construction | $\mathbf{Set}$ | $\mathbf{Grp}$ | $\mathbf{Top}$ | $\mathbf{Vect}_k$ / $\mathbf{Ab}$ |
|---|---|---|---|---|
| initial object $0$ | $\varnothing$ | trivial group $\{e\}$ | empty space | zero space $0$ |
| terminal object $1$ | any singleton $\{*\}$ | trivial group $\{e\}$ | one-point space | zero space $0$ |
| zero object? | no ($\varnothing\neq\{*\}$) | **yes** | no | **yes** |
| mono | injective | injective | continuous injection | injective |
| epi | surjective | surjective | continuous surjection | surjective |
| iso | bijection | group isomorphism | **homeomorphism** (not just continuous bijection) | linear isomorphism |
| mono + epi $\Rightarrow$ iso? | yes (balanced) | yes | **no** ($[0,1)\to S^1$) | yes |
| product $A\times B$ | Cartesian product | direct product $G\times H$ | product topology | direct sum $A\oplus B$ |
| coproduct $A\sqcup B$ | disjoint union | **free product** $G*H$ | disjoint-union topology | direct sum $A\oplus B$ (same!) |
| equalizer of $f,g$ | $\{a : f(a)=g(a)\}$ | that subgroup | that subspace | that subspace; $\ker(f-g)$ |
| pullback $A\times_C B$ | $\{(a,b): f(a)=g(b)\}$ | that subgroup of $G\times H$ | subspace of the product | that subspace |
| pushout $A\sqcup_C B$ | $(A\sqcup B)/(f(c)\sim g(c))$ | amalgamated free product $A *_C B$ | gluing along a subspace | pushout $=(A\oplus B)/\{(fc,-gc)\}$ |
| kernel of $\varphi$ | — | pullback of $\varphi$ along $0\hookrightarrow C$ | — | pullback along $0$ |
| free object on $X$ | $X$ itself | free group on $X$ | discrete space on $X$ | vector space with basis $X$ |
| what represents the forgetful $U$ | — | $\mathbb{Z}$, universal element $1$ | — | $k$ (1-dimensional), universal element $1$ |

Also: in $\mathbf{Ring}$ the initial object is $\mathbb{Z}$ (forced by $1\mapsto1$)
and the terminal object is the zero ring; $U:\mathbf{Ring}\to\mathbf{Set}$ is
represented by $\mathbb{Z}[x]$ with universal element $x$. In a **poset** as a
category, product $=$ meet $a\wedge b$ (infimum) and coproduct $=$ join
$a\vee b$ (supremum); initial $=$ bottom $\bot$, terminal $=$ top $\top$.

*From* [1.2](lessons/01-02-categories-everywhere.md), [1.3](lessons/01-03-special-arrows-special-objects.md), [2.2](lessons/02-02-representable-functors.md), [3.1](lessons/03-01-products-coproducts.md), [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Yoneda, stated exactly

For $\mathcal{C}$ **locally small**, $A\in\mathcal{C}$, and $F:\mathcal{C}\to\mathbf{Set}$:

$$\operatorname{Nat}\bigl(\operatorname{Hom}_{\mathcal{C}}(A,-),\,F\bigr)\;\cong\;F(A), \qquad \Phi(\alpha)=\alpha_A(\operatorname{id}_A), \qquad \Phi^{-1}(u)=\widehat{u},\ \ \widehat{u}_X(f)=F(f)(u),$$

**naturally in both $A$ and $F$**. Equivalently, the reconstruction formula

$$\alpha_X(f) = F(f)\bigl(\alpha_A(\operatorname{id}_A)\bigr) \qquad\text{for every } f : A\to X.$$

Three consequences, in the order you'll reach for them:

| Statement | Use it when |
|---|---|
| **Embedding.** $\operatorname{Hom}_{\mathcal{C}}(A,B)\cong\operatorname{Nat}(\operatorname{Hom}(-,A),\operatorname{Hom}(-,B))$, full and faithful | you want to replace an object by its presheaf without losing information |
| **Corollary.** $\operatorname{Hom}(-,A)\cong\operatorname{Hom}(-,B)\Rightarrow A\cong B$ | proving two universal constructions agree |
| **With $F=\operatorname{Hom}(B,-)$.** $\operatorname{Nat}(\operatorname{Hom}(A,-),\operatorname{Hom}(B,-))\cong\operatorname{Hom}(B,A)$, the transformation being **pre-composition** by $g:B\to A$ | converting natural families of maps into a single arrow (backwards!) |

The proof is one naturality square evaluated at $\operatorname{id}_A$, using
functoriality of $F$ twice. Nothing else.

*From* [2.3](lessons/02-03-yoneda-lemma.md), building on [2.2](lessons/02-02-representable-functors.md)

### Adjunctions: the three equivalent characterizations

The same data in three costumes; convert freely.

**(1) Hom-set bijection** — natural in $X$ *and* $Y$:

$$\operatorname{Hom}_{\mathcal{D}}(FX,\,Y)\;\cong\;\operatorname{Hom}_{\mathcal{C}}(X,\,UY), \qquad F\dashv U.$$

Naturality spelled out, for $h:Y\to Y'$ and $k:X'\to X$:

$$\overline{h\circ f} = Uh\circ\bar f, \qquad\qquad \overline{f\circ Fk} = \bar f\circ k.$$

**(2) Unit + counit + triangle identities:**

$$\eta : \operatorname{id}_{\mathcal{C}}\Rightarrow UF, \qquad \varepsilon : FU\Rightarrow\operatorname{id}_{\mathcal{D}}, \qquad (\varepsilon F)\circ(F\eta)=\operatorname{id}_F, \qquad (U\varepsilon)\circ(\eta U)=\operatorname{id}_U.$$

**(3) Universal arrow:** each $\eta_X : X\to UFX$ is the closest approach of $X$ to
the image of $U$ — an initial object among such arrows.

**Translation formulas** (memorize these two; everything else follows):

$$\Phi(g) = Ug\circ\eta_X \quad (g : FX\to Y), \qquad\qquad \Phi^{-1}(f) = \varepsilon_Y\circ Ff \quad (f : X\to UY).$$

$$\eta_X = \Phi(\operatorname{id}_{FX}), \qquad\qquad \varepsilon_Y = \Phi^{-1}(\operatorname{id}_{UY}).$$

That $\Phi$ and $\Phi^{-1}$ are mutually inverse is exactly naturality of
$\varepsilon$ plus triangle identity 1 (one way) and naturality of $\eta$ plus
triangle identity 2 (the other).

**RAPL.** If $F\dashv U$ then $U$ preserves every limit that exists,
$U(\varprojlim D)\cong\varprojlim(UD)$; dually $F$ preserves colimits. The proof is
a four-step chain of natural bijections finished by Yoneda:

$$\operatorname{Hom}(X, U\varprojlim D)\cong\operatorname{Hom}(FX,\varprojlim D)\cong\varprojlim\operatorname{Hom}(FX, D_j)\cong\varprojlim\operatorname{Hom}(X,UD_j)\cong\operatorname{Hom}(X,\varprojlim UD).$$

Steps 1 and 3 are the adjunction; steps 2 and 4 are "representable functors
preserve limits," which is just the universal property of $\varprojlim$ restated.

*From* [3.4](lessons/03-04-adjoint-functors.md) *and* [3.5](lessons/03-05-unit-counit-triangle-identities.md)

### Adjunction gallery

| Left adjoint $F$ | Right adjoint $U$ | The bijection says | Unit / counit |
|---|---|---|---|
| free monoid $X\mapsto X^{*}$ | forgetful $\mathbf{Mon}\to\mathbf{Set}$ | a hom out of $X^{*}$ = a function on letters | $\eta$: letter $\mapsto$ one-letter word; $\varepsilon$: multiply the word out |
| free group / module / $k[x]$ | forgetful | homs out of the free thing = maps on generators | insertion of generators / evaluation |
| discrete space $\Delta$ | underlying set $U$ | continuous maps out of a discrete space = all set maps | — |
| underlying set $U$ | indiscrete space $\nabla$ | maps into an indiscrete space = all set maps | — |
| $\pi_0$ (connected components) | inclusion of discrete spaces | best discrete approximation | — |
| $(-)\times A$ | $(-)^A$ | **curry / uncurry** | $\varepsilon$: evaluation $Y^A\times A\to Y$ |
| coproduct $\sqcup$ | diagonal $\Delta$ | maps out of a sum = a pair of maps | — |
| diagonal $\Delta$ | product $\times$ | maps into a product = a pair of maps | — |

The last two rows *are* RAPL in miniature: $\sqcup$ (a left adjoint) builds
colimits, $\times$ (a right adjoint) builds limits.

Currying explicitly, in $\mathbf{Set}$:

$$\operatorname{Hom}(X\times A,\,Y)\cong\operatorname{Hom}(X,\,Y^A), \qquad \bar f(x) = \bigl(a\mapsto f(x,a)\bigr), \qquad \bar g(x,a) = g(x)(a).$$

*From* [3.4](lessons/03-04-adjoint-functors.md) *and* [3.5](lessons/03-05-unit-counit-triangle-identities.md)

### Shape dictionary — which $\mathcal{J}$ gives which construction

| Shape $\mathcal{J}$ | Limit over $D$ | Colimit over $D$ |
|---|---|---|
| **discrete** (identities only) | product $\prod_j D(j)$ | coproduct $\coprod_j D(j)$ |
| $\bullet\rightrightarrows\bullet$ (parallel pair) | equalizer of $D(f),D(g)$ | coequalizer |
| $\bullet\to\bullet\leftarrow\bullet$ (**cospan**) | pullback $D(1)\times_{D(3)}D(2)$ | — |
| $\bullet\leftarrow\bullet\to\bullet$ (**span**) | — | pushout |
| **empty** $\mathcal{J}=\varnothing$ | terminal object $1$ | initial object $0$ |

**Redundant legs.** In the cospan and parallel-pair shapes one leg is *forced* and
drops out of the data: for a cospan, $\lambda_3 = f\lambda_1 = g\lambda_2$, leaving
the single equation $f\lambda_1 = g\lambda_2$ (a commuting square); for a parallel
pair, $\lambda_2 = f\lambda_1 = g\lambda_1$, leaving $f\lambda_1 = g\lambda_1$.
This is why pullback diagrams draw only two arrows out of the corner.

**Building limits from two ingredients.** All small products $+$ all equalizers
$\Rightarrow$ complete (finite products $+$ a terminal object $+$ equalizers
$\Rightarrow$ finitely complete). Concretely, for a cospan: take the product
$A\times B$, then the equalizer of $f\circ p,\ g\circ q : A\times B \rightrightarrows C$;
that equalizer is $A\times_C B$. Dually, coproducts $+$ coequalizers
$\Rightarrow$ cocomplete.

**Cone-checking shortcut.** You need only check the cone condition on a
**generating set of arrows** of $\mathcal{J}$: identities are automatic and
composites follow, since $D(vu)\lambda_j = D(v)D(u)\lambda_j = D(v)\lambda_k = \lambda_\ell$.

*From* [3.3](lessons/03-03-limits-colimits.md), with the cases from [3.1](lessons/03-01-products-coproducts.md) *and* [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Pullback templates — one square, many names

Every one of these is the same diagram with different labels:

| You want | Pull back... | Get |
|---|---|---|
| preimage $f^{-1}(S)$ | $f : A\to C$ along $S\hookrightarrow C$ | subobject of $A$ |
| fiber $f^{-1}(c)$ | $f : A\to C$ along $\{c\}\hookrightarrow C$ | one fiber (hence "fiber product") |
| intersection $S\cap S'$ | $S\hookrightarrow C\hookleftarrow S'$ | subobject of $C$ |
| $\ker\varphi$ | $\varphi : A\to C$ along $0\hookrightarrow C$ | kernel — "kernels are pullbacks along $0$" |
| base change $X\times_S Y$ | a family over $S$ along $Y\to S$ | fibered product of schemes |
| $\pi_1$ of a union (van Kampen) | *pushout*, not pullback: $\pi_1(U)\leftarrow\pi_1(U\cap V)\to\pi_1(V)$ | amalgamated free product |

*From* [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md)

### Recognizing a universal property in the wild

| Construction | Its universal property | Flavor |
|---|---|---|
| empty set $\varnothing$ | one map $\varnothing\to X$ for every $X$ | initial (mapping-out) |
| one-point set $\{*\}$ | one map $X\to\{*\}$ for every $X$ | terminal (mapping-in) |
| free group / monoid on $S$ | maps out = functions on the generators $S$ | initial (mapping-out) |
| tensor product $V\otimes W$ | maps out = bilinear maps $V\times W\to Z$ | initial (mapping-out) |
| quotient group $G/N$ | maps out = homs $G\to H$ killing $N$ | initial (mapping-out) |
| product $A\times B$ | maps in = pairs of maps to $A$ and to $B$ | terminal (mapping-in) |

**Extensionality rule for products:** any $h : X\to A\times B$ satisfies
$h = \langle\pi_1\circ h,\ \pi_2\circ h\rangle$ — a map into a product is
completely determined by its two components.

*From* [2.1](lessons/02-01-universal-properties.md) *and* [3.1](lessons/03-01-products-coproducts.md)

### Forgetful functors and what represents them

A map *out of the free structure on one generator* is one element of the target —
which is why these are all representable.

| Forgetful functor | Represented by | Universal element |
|---|---|---|
| $U:\mathbf{Grp}\to\mathbf{Set}$ | $\mathbb{Z}$ | $1\in\mathbb{Z}$ |
| $U:\mathbf{Ring}\to\mathbf{Set}$ | $\mathbb{Z}[x]$ | $x$ |
| $U:\mathbf{Vect}_k\to\mathbf{Set}$ | $k$ (as a $1$-dimensional space) | $1\in k$ |
| $X\mapsto X\times X$ on $\mathbf{Set}$ | $\mathbf{2}=\{0,1\}$ | $(0,1)$ |
| $X\mapsto X^n$ on $\mathbf{Set}$ | an $n$-element set | the tuple of its elements |
| power set $P:\mathbf{Set}^{\mathrm{op}}\to\mathbf{Set}$ | $\mathbf{2}$ (**subobject classifier**) | $\{1\}\subseteq\mathbf{2}$ |
| idempotents $R\mapsto\{r : r^2=r\}$ | $\mathbb{Z}[x]/(x^2-x)$ | the class $\bar x$ |

*From* [2.2](lessons/02-02-representable-functors.md) *and* [2.3](lessons/02-03-yoneda-lemma.md)

### Every adjunction induces a monad

Given $F\dashv U$ with unit $\eta$ and counit $\varepsilon$, set

$$T := UF, \qquad \eta := \text{the adjunction unit (unchanged)}, \qquad \mu := U\varepsilon F \quad\bigl(\mu_X = U(\varepsilon_{FX})\bigr).$$

The three monad laws are Module 3's identities in disguise:

| Monad law | Is really |
|---|---|
| $\mu\circ\eta T = \operatorname{id}_T$ | triangle identity 2 at $Y=FX$ |
| $\mu\circ T\eta = \operatorname{id}_T$ | triangle identity 1, whiskered by $U$ |
| $\mu\circ T\mu = \mu\circ\mu T$ | naturality of $\varepsilon$ at the morphism $\varepsilon_{FX}$ |

A monad does **not** determine its adjunction — many adjunctions induce the same
$T$. The Kleisli and Eilenberg–Moore categories are the two extreme ones that do.

*From* [4.1](lessons/04-01-monads.md) *and* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### The monad zoo

| Monad | $TX$ | $\eta_X$ | $\mu_X$ | From the adjunction | Algebras $\mathcal{C}^{T}$ |
|---|---|---|---|---|---|
| **List** (free monoid) | $\coprod_{n\ge0}X^n$ | $a\mapsto[a]$ | concatenate / flatten | $\mathbf{Set}\rightleftarrows\mathbf{Mon}$ | **monoids**: $\mathbf{Set}^{T}\cong\mathbf{Mon}$ |
| **Powerset** | $\mathcal{P}(X)$ | $a\mapsto\{a\}$ | union $\bigcup$ | $\mathbf{Set}\rightleftarrows$ sup-lattices | complete sup-lattices |
| **Maybe** | $X + 1$ (adjoin $\bot$) | $a\mapsto a$ | merge the two $\bot$'s | $\mathbf{Set}\rightleftarrows\mathbf{Set}_{*}$ | pointed sets |
| **State** | $(S\to X\times S)$ | — | thread the state | — | — |

Read left-to-right as "free structure," right-to-left as "a computation with
context": lists = nondeterminism, Maybe = failure, State = mutable state.
`return`/`pure` is $\eta$, `join` is $\mu$, and `bind`/`flatMap` is $\mu$ after a
`map` — i.e. composition in the Kleisli category.

**The list-algebra dictionary** (worth carrying whole): for the list monad, an
algebra $(A,a)$ gives a monoid by $x\cdot y := a([x,y])$, $e := a([\,])$, and
conversely a monoid gives $a([x_1,\dots,x_n]) = x_1\cdots x_n$. The laws force
$a$ to be exactly "take the product," so nothing is lost — algebra morphisms are
precisely monoid homomorphisms.

*From* [4.1](lessons/04-01-monads.md), [4.2](lessons/04-02-algebras-monoidal-categories.md) *and* [4.3](lessons/04-03-applications-higher-categories.md)

### Monoid object, four rooms

One definition; change the ambient monoidal category and you get four different
familiar structures.

| Monoidal category $(\mathcal{C},\otimes,I)$ | A monoid object in it is a... |
|---|---|
| $(\mathbf{Set},\times,\{*\})$ | ordinary **monoid** |
| $(\mathbf{Ab},\otimes,\mathbb{Z})$ | **ring** |
| $(\mathbf{Vect}_k,\otimes,k)$ | associative **algebra** over $k$ |
| $([\mathcal{C},\mathcal{C}],\circ,\operatorname{Id})$ | **monad** — hence "a monoid in the category of endofunctors" |

**String diagrams.** Objects are *wires*, morphisms are *nodes*, $\otimes$ is
side-by-side placement, composition is vertical stacking, and $I$ is the empty
diagram. Then $m : M\otimes M\to M$ is two wires **merging**, and $u : I\to M$ is a
wire **born from nothing**; the monoid axioms become topological facts about
sliding nodes along wires.

*From* [4.2](lessons/04-02-algebras-monoidal-categories.md)

### Curry–Howard–Lambek dictionary

Not an analogy — a theorem. Typed lambda calculus and cartesian closed categories
are equivalent, so a program *is* a proof and type-checking *is* proof-checking.

| Logic | Programming | Category theory |
|---|---|---|
| proposition $A$ | type $A$ | object $A$ |
| proof of $A$ | program $a : A$ | morphism $1\to A$ |
| conjunction $A\wedge B$ | pair type $A\times B$ | product $A\times B$ |
| disjunction $A\vee B$ | sum / tagged union | coproduct $A\sqcup B$ |
| implication $A\Rightarrow B$ | function type $A\to B$ | exponential $B^A$ |
| truth $\top$ | unit type | terminal object $1$ |
| falsity $\bot$ | empty type | initial object $0$ |
| and-introduction / -elimination | pairing / projection | $\langle-,-\rangle$ / $\pi_1,\pi_2$ |
| implication-introduction | currying | the adjunction $(-\times A)\dashv(-)^A$ |
| modus ponens | function application | $\operatorname{ev} : B^A\times A\to B$ (the **counit**) |

From a context $C$: given $p : C\to B^A$ and $q : C\to A$, the conclusion is
$\operatorname{ev}\circ\langle p,q\rangle : C\to B$.

*From* [4.3](lessons/04-03-applications-higher-categories.md)

## Assumed, not taught here

This is a Tier 2 course, so it assumes little machinery — but it uses these
*examples* freely as the raw material every abstract definition is tested against.
Each row points at the course that builds the example.

| Fact used here | Where it's taught |
|---|---|
| Group and monoid axioms; inverses are unique; units of a monoid | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md) |
| Group homomorphisms, kernels, images; $S_3$ and permutation composition | [abstract-algebra 2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md), [1.3](../abstract-algebra/lessons/01-03-dihedral-symmetric-groups.md) |
| Quotient groups $G/N$ and the universal property of quotients | [abstract-algebra 2.2](../abstract-algebra/lessons/02-02-normal-subgroups-quotients.md) |
| Rings with $1$, ring homomorphisms, $\mathbb{Z}[x]$ and quotients by an ideal | [abstract-algebra 3.1](../abstract-algebra/lessons/03-01-rings-ring-homomorphisms.md), [3.3](../abstract-algebra/lessons/03-03-ideals-quotient-rings.md), [3.4](../abstract-algebra/lessons/03-04-polynomial-rings.md) |
| $\mathbb{Z}$ as the initial ring; characteristic | [abstract-algebra 3.5](../abstract-algebra/lessons/03-05-characteristic-prime-fields.md) |
| $\mathbb{Z}/n$, modular arithmetic, CRT ($\mathbb{Z}/2\oplus\mathbb{Z}/3\cong\mathbb{Z}/6$) | [discrete-mathematics 4.3](../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) |
| Partial orders, preorders, least/greatest elements, meets and joins | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Bases, dimension, linear maps determined on a basis; $\mathrm{GL}_n$ and $\det$ | [linalg-refresher 1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md), [2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md), [2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Dual space $V^{*}$, transpose of a linear map (used for the double-dual example) | [functional-analysis 3.2](../functional-analysis/lessons/03-02-dual-spaces-hahn-banach.md) |
| Topological spaces, continuous maps, homeomorphisms; why a continuous bijection need not be one | [topology 1.3](../topology/lessons/01-03-topological-spaces-axioms.md), [2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md), [4.1](../topology/lessons/04-01-compactness-open-covers.md) |
| Product topology, quotient/gluing topology (the concrete (co)limits in $\mathbf{Top}$) | [topology 2.3](../topology/lessons/02-03-product-topology.md), [2.4](../topology/lessons/02-04-quotient-topology.md) |
| The fundamental group $\pi_1$ and induced homomorphisms $f_{*}$ | [algebraic-topology 1.2](../algebraic-topology/lessons/01-02-paths-loops-pi1.md), [1.3](../algebraic-topology/lessons/01-03-basepoints-functoriality.md) |
| Free groups, free products, presentations by generators and relations | [algebraic-topology 2.4](../algebraic-topology/lessons/02-04-free-groups-presentations.md) |
| Seifert–van Kampen (the motivating pushout in $\mathbf{Grp}$) | [algebraic-topology 2.5](../algebraic-topology/lessons/02-05-seifert-van-kampen.md) |

## Pitfalls

### Arrows and composition

- $g\circ f$ means **do $f$ first**; the source of $g\circ f$ is the source of $f$. Check types, not reading order. *([1.1](lessons/01-01-what-is-a-category.md))*
- Not every pair composes — the target of the first must *equal* the source of the second — and $\operatorname{Hom}(A,B)$ may be **empty**, which is a fine state of affairs, not a defect. *([1.1](lessons/01-01-what-is-a-category.md))*
- Morphisms are **not** always functions: in a poset the arrow is the bare fact $x\le y$; in $\mathbf{B}G$ the arrows are group elements. Any argument that secretly evaluates an arrow on "elements" will break. *([1.1](lessons/01-01-what-is-a-category.md), [1.2](lessons/01-02-categories-everywhere.md))*
- In $\mathbf{B}M$ the object $\star$ is a featureless placeholder — *all* the information is in the arrows. The elements of $M$ are morphisms, never the object. *([1.2](lessons/01-02-categories-everywhere.md))*
- A poset-as-category has **at most one** arrow $x\to y$, not one per reason. Two distinct parallel arrows means you are not looking at a poset. *([1.2](lessons/01-02-categories-everywhere.md))*

### Mono, epi, iso

- **mono $+$ epi $\neq$ iso** — that is a $\mathbf{Set}$-ism. $\mathbb{Z}\hookrightarrow\mathbb{Q}$ in $\mathbf{Ring}$ and $(\mathbb{N},+)\to(\mathbb{Z},+)$ in $\mathbf{Mon}$ are both. Categories where they do coincide are called *balanced*. *([1.3](lessons/01-03-special-arrows-special-objects.md), [1.4](lessons/01-04-functors.md))*
- Epi does **not** mean surjective. Prove it from the cancellation definition, never by inspecting the image. *([1.3](lessons/01-03-special-arrows-special-objects.md))*
- An iso needs its inverse to live in the *same category*: a continuous bijection $[0,1)\to S^1$ is mono, epi, and bijective — and not a homeomorphism. *([1.3](lessons/01-03-special-arrows-special-objects.md), [1.4](lessons/01-04-functors.md))*

### Functors and naturality

- "Contravariant" is not a second axiom system — it is a covariant functor out of $\mathcal{C}^{\mathrm{op}}$. Reduce every variance question to the opposite category. *([1.4](lessons/01-04-functors.md))*
- A rule on objects alone is **not** a functor. Specify $Ff$ and check both axioms; the arrow rule is what makes $\pi_1$ an invariant. *([1.4](lessons/01-04-functors.md))*
- Functors **preserve** isos but need not **reflect** them: $Ff$ iso does not force $f$ iso (constant functor; $U:\mathbf{Top}\to\mathbf{Set}$). *([1.4](lessons/01-04-functors.md))*
- Mind the variance of hom: $\operatorname{Hom}(A,-)$ post-composes (covariant), $\operatorname{Hom}(-,A)$ pre-composes (contravariant). Preimage is contravariant; direct image is covariant. *([1.4](lessons/01-04-functors.md), [2.2](lessons/02-02-representable-functors.md))*
- A family of components is **not** a natural transformation until the squares commute — and each component must be a genuine **arrow of the target category** ($g\mapsto g^{-1}$ is not a homomorphism on nonabelian groups). *([1.5](lessons/01-05-natural-transformations.md))*
- Any construction that secretly picks a basis fails naturality. "Isomorphic" and "naturally isomorphic" are different claims. *([1.5](lessons/01-05-natural-transformations.md))*

### Universal properties

- "Unique up to unique isomorphism" does not mean literally unique — it means any two solutions are matched by *the* iso the structure maps pick out, not merely by some iso. *([2.1](lessons/02-01-universal-properties.md))*
- The **uniqueness** of the mediating arrow is load-bearing, not a technicality: existence alone admits many impostors, and every uniqueness proof in the course cashes that clause exactly once. *([2.1](lessons/02-01-universal-properties.md), [3.1](lessons/03-01-products-coproducts.md))*
- Mapping-in and mapping-out are not interchangeable — in $\mathbf{Set}$ the product is $A\times B$ and the coproduct is $A\sqcup B$, different objects. *([2.1](lessons/02-01-universal-properties.md))*
- The structure maps are **part of the data**. "The product" is the triple $(A\times B,\pi_1,\pi_2)$; "$P$ is a pullback" is meaningless without the projections *and* the commuting square. Likewise a limit is an object *plus* its limiting cone. *([3.1](lessons/03-01-products-coproducts.md), [3.2](lessons/03-02-pullbacks-pushouts-equalizers.md), [3.3](lessons/03-03-limits-colimits.md))*

### Representability and Yoneda

- A bijection $F(A)\cong\operatorname{Hom}(A,A)$ at one object proves nothing — representability demands a **natural** iso at every object simultaneously. *([2.2](lessons/02-02-representable-functors.md), [3.4](lessons/03-04-adjoint-functors.md))*
- A representing object is unique only up to unique isomorphism, and what is pinned down is the object *together with* its universal element. *([2.2](lessons/02-02-representable-functors.md))*
- You cannot choose $\alpha_X$ freely object-by-object: the single value $\alpha_A(\operatorname{id}_A)$ dictates all of them via $\alpha_X(f)=F(f)(u)$. Naturality here is total, not a mild constraint. *([2.3](lessons/02-03-yoneda-lemma.md))*
- "Full and faithful" does not mean injective on objects — it means the embedding *reflects isomorphisms*. *([2.3](lessons/02-03-yoneda-lemma.md))*
- Keep track of which hom you mean: the lemma is usually stated with covariant $\operatorname{Hom}(A,-)$, the embedding with contravariant $\operatorname{Hom}(-,A)$ into presheaves. Same theorem, read in $\mathcal{C}$ vs. $\mathcal{C}^{\mathrm{op}}$. *([2.3](lessons/02-03-yoneda-lemma.md))*

### Limits and colimits

- Products and coproducts coinciding is **special** ($\mathbf{Ab}$, $\mathbf{Vect}$, finitely many factors — a *biproduct*), not the rule. And "coproduct = glue, so it's simpler" is false: in $\mathbf{Grp}$ the coproduct $G*H$ is the wild one. *([3.1](lessons/03-01-products-coproducts.md))*
- A pullback is **not** the whole product $A\times B$ — only the part cut out by $f(a)=g(b)$. Equality holds exactly when $C$ is terminal. *([3.2](lessons/03-02-pullbacks-pushouts-equalizers.md))*
- Pushout in $\mathbf{Grp}$ is bigger than you expect: $A *_C B$ is a free product with relations, usually infinite even for finite $A,B$ — not a set-level pushout with group structure bolted on. *([3.2](lessons/03-02-pullbacks-pushouts-equalizers.md))*
- A cone is not just "a map to each $D(j)$" — the legs must commute with the diagram's arrows. Drop that and you have only a product. *([3.3](lessons/03-03-limits-colimits.md))*
- "Complete" means all limits over **small** shapes; a proper-class-sized diagram can genuinely fail to have one. *([3.3](lessons/03-03-limits-colimits.md))*
- The dual of a limit in $\mathcal{C}$ is a limit in $\mathcal{C}^{\mathrm{op}}$, i.e. a **colimit** in $\mathcal{C}$ — only the arrow-reversed *statements* correspond, never the concrete objects. *([3.3](lessons/03-03-limits-colimits.md))*

### Adjunctions

- $F\dashv U$ is **not** symmetric. Free $\dashv$ forgetful, never the reverse; $U\dashv F$ is a different (usually false) claim. *([3.4](lessons/03-04-adjoint-functors.md))*
- "Free" is relative to a chosen forgetful functor — there is no absolute free object. *([3.4](lessons/03-04-adjoint-functors.md))*
- $\eta$ and $\varepsilon$ are **not** inverse isomorphisms; they do not even connect the same objects. The triangle identities are the weaker whiskered statement. (When both *are* isos, you have an equivalence of categories.) *([3.5](lessons/03-05-unit-counit-triangle-identities.md))*
- Get the whiskering side right: $\varepsilon F$ (component at $FX$) is not $U\varepsilon$ (apply $U$ to the component at $Y$). Match the whisker to the functor whose objects the component is taken at. *([3.5](lessons/03-05-unit-counit-triangle-identities.md))*
- RAPL runs one way. Left adjoints preserve *colimits*, not limits: $U:\mathbf{Grp}\to\mathbf{Set}$ preserves products but the underlying set of a free product is **not** the disjoint union — which is also how you *prove* $U$ is not a left adjoint. *([3.5](lessons/03-05-unit-counit-triangle-identities.md), [4.1](lessons/04-01-monads.md))*

### Monads and algebras

- $\mu : T^2\Rightarrow T$ points "down," and that is correct: it **collapses** a doubled context. Building up is $\eta$, and even $\eta$ only inserts a trivial layer. *([4.1](lessons/04-01-monads.md))*
- $T\mu$ and $\mu T$ are genuinely different morphisms — $T(\mu_X)$ flattens the inner brackets, $\mu_{TX}$ the outer — and associativity is the *nontrivial* claim that they agree. *([4.1](lessons/04-01-monads.md))*
- Naturality of $\eta$ and $\mu$ is a load-bearing axiom, not a bonus: it is what makes `flatten` cooperate with mapping a function over the data. *([4.1](lessons/04-01-monads.md))*
- A monad does not remember its adjunction — only the composite $UF$. Many adjunctions induce the same monad. *([4.1](lessons/04-01-monads.md))*
- The structure map $a : TA\to A$ points **opposite** to the unit $\eta_A : A\to TA$: $\eta$ builds structure, $a$ consumes it. *([4.2](lessons/04-02-algebras-monoidal-categories.md))*
- An algebra structure is **extra data**, not a property: an object may carry none, or several ($\mathbb{Z}$ is a list-algebra via $+$ *and* via $\times$). *([4.2](lessons/04-02-algebras-monoidal-categories.md))*

### Monoidal and higher structure

- "Monoidal category" and "monoid object in a category" are different levels: the first is the ambient room ($\otimes$, $I$), the second is one object inside it. You need the first to define the second. *([4.2](lessons/04-02-algebras-monoidal-categories.md))*
- The associator and unitors are not red tape — $(A\times B)\times C$ and $A\times(B\times C)$ are isomorphic, not equal. Coherence is the *theorem* that lets you safely ignore them. *([4.2](lessons/04-02-algebras-monoidal-categories.md))*
- A 2-morphism needs no new machinery — in $\mathbf{Cat}$ it is just a natural transformation. What is new is the viewpoint. Do not conflate the two compositions: **vertical** stacks $F\Rightarrow G\Rightarrow H$ between fixed endpoints; **horizontal** composes along a shared category. *([4.3](lessons/04-03-applications-higher-categories.md))*
- Curry–Howard is a theorem, not a slogan — which is why proof assistants are programming languages. And the programmer's list monad is *identical* to the free-monoid monad, not a cousin of it. *([4.3](lessons/04-03-applications-higher-categories.md))*
