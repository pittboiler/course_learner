# Abstract Algebra — Syllabus

> Tier 1 · ~18 lessons · Prereqs: [`proofs-primer`](../proofs-primer/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md) · Roadmap id: `abstract-algebra`

## Goal

Learn to work fluently with the three structures modern math and physics are built on — groups, rings, and fields — and, above all, with the machinery that connects them: homomorphisms, quotients, and group actions. The through-line is symmetry made precise: a group is what "the symmetries of a thing" actually *is*, and by the end you should reflexively see structure-preserving maps, kernels, and orbits wherever they hide. Deliberately skipped: deep Galois theory (a taste only — enough to see the field–group correspondence), module theory, category theory, and commutative-algebra depth. This is Tier 1 — it teaches as if new, leaning only on the proof habits of [`proofs-primer`](../proofs-primer/syllabus.md) and the vector-space fluency of [`linalg-refresher`](../linalg-refresher/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Check the group axioms on a candidate set-and-operation, and recognize cyclic, dihedral, and symmetric groups in the wild
- [ ] Compute in $S_n$ with cycle notation — multiply permutations, find orders, and read off the sign
- [ ] Use Lagrange's theorem to constrain subgroup and element orders, and list the cosets of a subgroup
- [ ] Tell whether a map is a homomorphism, and compute its kernel and image
- [ ] Decide whether a subgroup is normal and build the quotient group $G/N$
- [ ] Apply the first isomorphism theorem to identify a quotient with a familiar group
- [ ] Set up a group action and use orbit–stabilizer (and Burnside) to count configurations up to symmetry
- [ ] Check the ring axioms, find the ideals of a ring, and form a quotient ring
- [ ] Recognize integral domains and fields, and build a field as $F[x]/(p(x))$ for an irreducible $p$
- [ ] Compute the degree of a field extension and do arithmetic inside a finite field $\mathrm{GF}(p^n)$
- [ ] Explain, at a taste level, how field automorphisms form a group and why that ties fields back to symmetry

## Modules

### Module 1: Groups — symmetry made precise

Start from concrete symmetries, extract the axioms, and get comfortable computing with the standard cast of groups.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a group? Axioms and first examples | See the group axioms as the distilled rules of symmetry | binary operation, associativity, identity, inverses, $\mathbb{Z}$, $\mathbb{Z}/n\mathbb{Z}$, abelian |
| 1.2 | Cyclic groups and order | Understand the simplest infinite family and the notion of order | generator, cyclic group, order of a group/element, $\langle g\rangle$ |
| 1.3 | Dihedral and symmetric groups | Meet the two workhorse examples of nonabelian symmetry | dihedral $D_n$, symmetric $S_n$, permutations, cycle notation, sign/parity |
| 1.4 | Subgroups | Recognize the structure sitting inside a group | subgroup test, generated subgroup, center, examples in $S_n$ and $D_n$ |
| 1.5 | Cosets and Lagrange's theorem | Prove the first hard constraint on group structure | left/right cosets, index, Lagrange's theorem, order divides |

**Boss problem 1:** Take $S_4$. Using cycle notation, exhibit its elements of each order, and use Lagrange's theorem to list which subgroup orders are even possible. Then find a concrete subgroup of order 8 (a copy of $D_4$) and describe its cosets — confirming the count against $|S_4|/8$.

### Module 2: Homomorphisms, quotients, and actions — the machinery

The heart of the course, and exactly the toolkit representation theory runs on: structure-preserving maps, the quotients they induce, and groups acting on sets.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Homomorphisms, kernels, and images | Track structure across a map and read off its kernel | homomorphism, isomorphism, kernel, image, injective $\iff$ trivial kernel |
| 2.2 | Normal subgroups and quotient groups | Build a new group by collapsing a subgroup | normal subgroup, conjugation, $gNg^{-1}=N$, quotient $G/N$, well-definedness |
| 2.3 | The isomorphism theorems | Identify quotients with groups you already know | first isomorphism theorem $G/\ker\varphi\cong\operatorname{im}\varphi$, second & third (brief) |
| 2.4 | Group actions | Formalize "a group acting on a thing" | action axioms, permutation representation, faithful/transitive, Cayley's theorem |
| 2.5 | Orbits, stabilizers, and conjugacy classes | Count with symmetry and dissect a group by conjugation | orbit, stabilizer, orbit–stabilizer theorem, conjugacy class, class equation |
| 2.6 | Counting with Burnside's lemma | Turn symmetry into a counting formula | Burnside's lemma, fixed points, counting colorings up to symmetry |

**Boss problem 2:** How many genuinely distinct ways can you color the 6 faces of a cube with 3 colors, counting two colorings the same when a rotation carries one to the other? Model the rotation group acting on colorings, then apply Burnside's lemma (averaging fixed colorings over the group) to get the count — and sanity-check a small case with orbit–stabilizer directly.

### Module 3: Rings and fields — a second axiom system

Add a second operation. Everything from Modules 1–2 — homomorphisms, kernels, quotients — reappears with ideals playing the role of normal subgroups.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Rings and ring homomorphisms | Meet structures with both $+$ and $\times$ | ring axioms, commutative/unital rings, units, ring homomorphism, $\mathbb{Z}$, $\mathbb{Z}/n$, matrices |
| 3.2 | Integral domains and fields | Pin down where you can divide and where zero-divisors hide | zero divisors, integral domain, field, $\mathbb{Z}/p$ is a field, field of fractions |
| 3.3 | Ideals and quotient rings | Rebuild the quotient construction for rings | ideal, principal ideal, quotient ring $R/I$, kernels of ring maps are ideals |
| 3.4 | Polynomial rings | Work in $F[x]$ — the source of new fields | $F[x]$, degree, division algorithm, roots, irreducible polynomials |
| 3.5 | Characteristic and prime fields | Understand the "arithmetic backbone" of a ring | characteristic, prime subfield, $\operatorname{char}=0$ vs $p$, Frobenius (preview) |

**Boss problem 3:** Show that $\mathbb{Z}/6$ is not an integral domain by exhibiting zero divisors, while $\mathbb{Z}/5$ is a field (find the inverse of each nonzero element). Then take $F[x]/(p(x))$ for a specific irreducible quadratic over $\mathbb{Z}/2$, and verify the quotient is a field with 4 elements by building its multiplication table.

### Module 4: Field extensions and a taste of Galois

The payoff: extend fields to build new ones (including the finite fields behind coding and crypto), then glimpse how field automorphisms form a group — closing the loop back to Module 1.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Field extensions and degree | Measure one field sitting inside another | extension $K/F$, degree $[K:F]$, extension as a vector space, tower law |
| 4.2 | Adjoining roots and algebraic elements | Build extensions by adding roots of polynomials | algebraic vs transcendental, minimal polynomial, $F(\alpha)\cong F[x]/(m_\alpha)$ |
| 4.3 | Finite fields $\mathrm{GF}(p^n)$ | Construct and compute in the fields coding relies on | finite field existence/uniqueness, $\mathrm{GF}(p^n)$, multiplicative group is cyclic |
| 4.4 | A taste of Galois: automorphisms as symmetry | See fields' automorphisms as a group — the course's closing loop | field automorphism, Galois group, fixed field, the correspondence (stated, one example) |

**Boss problem 4:** Construct $\mathrm{GF}(8)$ explicitly as $\mathbb{Z}/2[x]/(x^3+x+1)$: confirm the cubic is irreducible over $\mathbb{Z}/2$, list all 8 elements, and do sample arithmetic — add two elements, multiply two elements reducing mod the polynomial, and find a generator of the cyclic multiplicative group of order 7.

## Sources of truth

- Pinter, *A Book of Abstract Algebra* (primary voice: intuition-first, gentle pacing)
- Dummit & Foote, *Abstract Algebra* (definitions, rigor level, and the standard statement of every theorem)
- Artin, *Algebra* (linear-algebra-flavored viewpoint, matrix groups, and geometric intuition)

## Notes

- This course is the foundation for [`representation-theory`](../representation-theory/syllabus.md) — Module 2 (homomorphisms, quotients, group actions, conjugacy classes) is precisely the machinery representations are built from, and that in turn is how symmetry enters [`quantum-mechanics`](../quantum-mechanics/syllabus.md) and particle physics.
- The finite-field material in Module 4 ($\mathrm{GF}(p^n)$) feeds directly into [`information-theory`](../information-theory/syllabus.md) and error-correcting codes.
