# Category Theory — Syllabus

> Mathematics · Tier 2 · ~16 lessons · Prereqs: [abstract-algebra](../abstract-algebra/syllabus.md) · Roadmap id: `category-theory`

## Goal

Learn to see mathematics structurally: objects matter only through their maps, and the "right" definition of a thing is a universal property. By the end you can wield functors, natural transformations, limits/colimits, adjunctions, and the Yoneda lemma fluently, and recognize the same patterns in algebra, topology, geometry, and programming-language type theory. We stop at a *taste* of monads, monoidal categories, and higher categories — no topos theory beyond a mention, no ∞-categories or homotopy type theory at depth.

## Dangerous Checklist

When you finish, you can:

- [ ] Verify that a given collection of objects and arrows is (or isn't) a category, and name its identities and composition
- [ ] Translate a structure you already know — a group, a poset, a monoid — into categorical language and back
- [ ] Distinguish mono / epi / iso and initial / terminal objects, and prove which arrows in a concrete category are which
- [ ] Build a functor (forgetful, free, hom) and check functoriality; recognize covariant vs. contravariant
- [ ] Write down a natural transformation, draw its naturality square, and prove naturality
- [ ] State a universal property and use it to prove the object it defines is unique up to unique isomorphism
- [ ] Recognize a representable functor and identify its representing object
- [ ] State the Yoneda lemma, explain "an object is known by its maps," and apply the Yoneda corollary
- [ ] Compute products, coproducts, pullbacks, pushouts, and equalizers via their universal properties
- [ ] Exhibit an adjunction three ways — hom-set bijection, unit/counit, triangle identities — and use "right adjoints preserve limits"
- [ ] Assemble a monad from an adjunction, check the monad laws, and describe its algebras
- [ ] Name the categorical bridge linking a construction in algebra, topology, or type theory to one in another field

## Modules

### Module 1: Categories, Functors & Natural Transformations

The three-storey building of the whole subject: categories (objects + arrows), functors (maps between categories), and natural transformations (maps between functors). Built entirely from examples you already know.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What Is a Category? | Check the axioms and read composition as "following arrows" | objects, morphisms, composition, identity, associativity |
| 1.2 | Categories Everywhere | Recast familiar math — and its structure — as categories | Set, Grp, Top, posets, a monoid as one object, the opposite category |
| 1.3 | Special Arrows & Special Objects | Spot isos, monos, epis, and initial/terminal objects | isomorphism, monomorphism, epimorphism, initial/terminal, duality |
| 1.4 | Functors | Map one category to another while preserving arrows | covariant/contravariant, forgetful, free, hom-functors, functoriality |
| 1.5 | Natural Transformations | Compare two functors arrow-by-arrow | components, naturality square, natural iso, functor categories |

**Boss problem 1:** Let $G$ be a group regarded as a one-object category $\mathbf{B}G$. Prove that functors $\mathbf{B}G \to \mathbf{Set}$ are exactly $G$-sets (left actions), and that natural transformations between two such functors are exactly $G$-equivariant maps. Conclude what an isomorphism in the functor category $[\mathbf{B}G,\mathbf{Set}]$ says about two actions.

### Module 2: Universal Properties & the Yoneda Lemma

The engine room. Objects are pinned down by how everything maps into or out of them; the Yoneda lemma makes "an object *is* its web of maps" a precise theorem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Universal Properties | Define an object by a mapping-in or mapping-out property and get uniqueness for free | universal property, mapping-in/out, unique-up-to-unique-iso |
| 2.2 | Representable Functors | Recognize a functor of the form $\mathrm{Hom}(A,-)$ and find its representing object | $\mathrm{Hom}$-functor, representable, universal element |
| 2.3 | The Yoneda Lemma | State and unpack $\mathrm{Nat}(\mathrm{Hom}(A,-),F)\cong F(A)$ | Yoneda lemma, the bijection, "probing" an object by maps |

**Boss problem 2:** (a) Prove the Yoneda corollary: if $\mathrm{Hom}(-,A)\cong\mathrm{Hom}(-,B)$ naturally then $A\cong B$. (b) Show the forgetful functor $U:\mathbf{Mon}\to\mathbf{Set}$ is representable, and identify its representing monoid — proving the natural isomorphism explicitly.

### Module 3: Limits, Colimits & Adjunctions

Universal properties, industrialized. Every product, gluing, and quotient is a limit or colimit; adjunctions are the deepest pattern in the subject, and "right adjoints preserve limits" is your workhorse theorem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Products & Coproducts | Build products/coproducts by their universal properties across math | product, coproduct, projections/injections, examples in Set/Grp/Top |
| 3.2 | Pullbacks, Pushouts & Equalizers | Compute fiber products, gluings, and equalizers | equalizer, pullback, pushout, fiber product, gluing |
| 3.3 | Limits & Colimits in General | See cones over a diagram and define (co)completeness | diagram, cone/cocone, limit, colimit, (co)completeness |
| 3.4 | Adjoint Functors: The Central Idea | Read $F\dashv U$ as a natural $\mathrm{Hom}(FX,Y)\cong\mathrm{Hom}(X,UY)$ | adjunction, hom-set bijection, free⊣forgetful |
| 3.5 | Unit, Counit & Triangle Identities | Convert between the three faces of an adjunction and use RAPL | unit, counit, triangle identities, right adjoints preserve limits |

**Boss problem 3:** (a) Exhibit the free–forgetful adjunction $F\dashv U$ between $\mathbf{Set}$ and $\mathbf{Mon}$ via the bijection $\mathrm{Hom}_{\mathbf{Mon}}(FX,M)\cong\mathrm{Hom}_{\mathbf{Set}}(X,UM)$, and write down its unit and counit explicitly. (b) Using "right adjoints preserve limits," explain why the underlying set of a product of monoids is the product of the underlying sets.

### Module 4: Monads & Applications (a taste)

Where the machine pays off. A monad is an adjunction seen from one side; its algebras recover the structures we started with, and the same abstractions organize type theory and programming. A brief look outward at monoidal and higher categories.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Monads | Build a monad from an adjunction and check the monad laws | endofunctor, unit, multiplication, monad laws, from an adjunction |
| 4.2 | Algebras & a Taste of Monoidal Categories | Describe a monad's algebras; meet tensor products and string diagrams | Eilenberg–Moore algebras, Kleisli category, monoidal category, string diagrams |
| 4.3 | Applications & a Taste of Higher Categories | Connect categories to type theory and glimpse 2-categories | Curry–Howard, monads in programming, 2-categories, the unifying view |

**Boss problem 4:** Let $T$ be the list (free-monoid) monad on $\mathbf{Set}$, $TX=\coprod_{n\ge 0}X^n$. Give its unit and multiplication, verify one monad law explicitly, and prove that an Eilenberg–Moore algebra for $T$ is exactly a monoid — so the category of $T$-algebras is $\mathbf{Mon}$.

## Sources of truth

- Riehl, *Category Theory in Context* — primary reference for notation, rigor level, and choice of examples.
- Leinster, *Basic Category Theory* — for the gentlest correct statements of Yoneda and adjunctions.
- Awodey, *Category Theory* — for the logic/type-theory flavored applications.
- Mac Lane, *Categories for the Working Mathematician* — the canonical backstop; consulted for conventions, not pace.
